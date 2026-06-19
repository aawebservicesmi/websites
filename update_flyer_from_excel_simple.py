#!/usr/bin/env python3
"""
A lightweight LLM‑driven flyer updater.

* Reads BUS_DESC_13KM.xlsx for each business name & summary.
* Loads the existing Flyer/baseLatexFlyer.tex (full LaTeX source).
* Sends the whole file plus a short instruction to the NVIDIA NIM LLM, asking it to:
  1) Replace the title line with the real business name.
  2) Slightly re‑word the tagline line.
  3) Slightly re‑word the "What We Need From You" paragraph.
* Overwrites the flyer file with the LLM’s output.
"""

import os, re, pandas as pd
from openai import OpenAI

# ----------------------------------------------------------------------
# Configuration
# ----------------------------------------------------------------------
EXCEL_PATH = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\BUS_DESC_13KM.xlsx"
ROOT_DIR   = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD"

# ----------------------------------------------------------------------
def build_prompt(latex_source: str, name: str, summary: str) -> str:
    """Create the LLM prompt that asks for the three simple textual changes."""
    return (
        "You are an expert marketing copywriter who knows LaTeX.\n\n"
        "Below is a complete LaTeX flyer (no markdown fences). Please make **only** the following textual changes and return the entire LaTeX document (do NOT wrap it in ``` or any other formatting):\n"
        "1) Replace the title line (the line that starts with \\noindent{\\color{accent-teal}\\Large\\bfseries) with the actual business name: " + name + ".\n"
        "2) Slightly re‑word the tagline line (the line immediately after the title) to sound personalized, using the business summary as inspiration.\n"
        "3) In the \"What We Need From You\" section, rewrite the paragraph so it feels specific to this business, again using the summary as context.\n"
        "Do NOT modify any other LaTeX commands, colors, pricing tables, or the logo.\n\n"
        "Business summary (for context):\n" + summary + "\n\n"
        "-----BEGIN LATEX-----\n" + latex_source + "\n-----END LATEX-----\n"
    )

# ----------------------------------------------------------------------
def main():
    df = pd.read_excel(EXCEL_PATH)

    client = OpenAI(
        base_url="https://integrate.api.nvidia.com/v1",
        api_key="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"  # <‑‑ replace with a real key
    )

    for _, row in df.iterrows():
        business_name = str(row["title"]).strip()
        summary       = str(row["Business Summary"]).strip()
        safe_folder   = re.sub(r'[<>:"/\\|?*]', "_", business_name)
        flyer_dir     = os.path.join(ROOT_DIR, safe_folder, "Flyer")
        tex_path      = os.path.join(flyer_dir, "baseLatexFlyer.tex")
        if not os.path.isfile(tex_path):
            print(f"[SKIP] No flyer template in {safe_folder}")
            continue
        with open(tex_path, "r", encoding="utf-8") as f:
            latex_source = f.read()
        prompt = build_prompt(latex_source, business_name, summary)
        # Call the LLM (streaming, same pattern as config script)
        completion = client.chat.completions.create(
            model="openai/gpt-oss-20b",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3,
            top_p=1,
            max_tokens=4096,
            stream=True,
        )
        generated = ""
        for chunk in completion:
            if not getattr(chunk, "choices", None):
                continue
            content = getattr(chunk.choices[0].delta, "content", None)
            if content is not None:
                generated += content
        # Strip possible back‑ticks
        generated = re.sub(r"^```[a-zA-Z]*\n", "", generated.strip())
        generated = re.sub(r"\n```$", "", generated)
        # Write back
        with open(tex_path, "w", encoding="utf-8") as f:
            f.write(generated)
        print(f"[DONE] Updated flyer for {business_name}")

if __name__ == "__main__":
    main()
