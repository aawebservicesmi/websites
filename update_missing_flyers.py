#!/usr/bin/env python3
"""
Selective flyer updater.

* Scans every business folder under pyMETHOD.
* Reads the existing Flyer/baseLatexFlyer.tex.
* If the file still contains the placeholder title
      "\noindent{\color{accent-teal}\Large\bfseries Quickly Boba Cafe - Troy}"
  the flyer is considered *unprocessed* and will be sent to the LLM.
* Otherwise the folder is skipped (already customised).
"""

import os
import re
import pandas as pd
from openai import OpenAI

# ----------------------------------------------------------------------
# Configuration
# ----------------------------------------------------------------------
EXCEL_PATH = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\BUS_DESC_13KM.xlsx"
ROOT_DIR   = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD"

# Placeholder that appears in the untouched template
PLACEHOLDER_TITLE = "Quickly Boba Cafe - Troy"

# ----------------------------------------------------------------------
def build_prompt(latex_source: str, name: str, summary: str) -> str:
    """Prompt that asks the LLM to replace the title, tagline, and “What We Need”."""
    return (
        "You are an expert marketing copywriter who knows LaTeX.\n\n"
        "Below is a complete LaTeX flyer (no markdown fences). Please make **only** these textual changes and return the full document:\n"
        "1) Replace the title line (the line that starts with \\noindent{\\color{accent-teal}\\Large\\bfseries) with the real business name: **" + name + "**.\n"
        "2) Slightly re‑word the tagline line (the line immediately after the title) using the business summary for inspiration.\n"
        "3) Rewrite the paragraph in the \"What We Need From You\" section so it feels specific to this business, again using the summary as context.\n"
        "Do NOT modify any other LaTeX commands, colors, pricing tables, or the logo.\n\n"
        "Business summary (for context):\n" + summary + "\n\n"
        "-----BEGIN LATEX-----\n" + latex_source + "\n-----END LATEX-----\n"
    )

# ----------------------------------------------------------------------
def main():
    # Load the Excel sheet – we need the name & summary for each business
    df = pd.read_excel(EXCEL_PATH)

    # Initialise the NVIDIA NIM client (insert your real key before running)
    client = OpenAI(
        base_url="https://integrate.api.nvidia.com/v1",
        api_key="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"
    )

    for _, row in df.iterrows():
        business_name = str(row["title"]).strip()
        summary       = str(row["Business Summary"]).strip()

        safe_folder = re.sub(r'[<>:"/\\|?*]', "_", business_name)
        flyer_dir   = os.path.join(ROOT_DIR, safe_folder, "Flyer")
        tex_path    = os.path.join(flyer_dir, "baseLatexFlyer.tex")

        if not os.path.isfile(tex_path):
            print(f"[SKIP] No flyer file in {safe_folder}")
            continue

        # --------------------------------------------------------------
        # 1️⃣ Detect whether the flyer is still the untouched template
        # --------------------------------------------------------------
        with open(tex_path, "r", encoding="utf-8") as f:
            tex_content = f.read()

        if PLACEHOLDER_TITLE not in tex_content:
            print(f"[SKIP] Already customised: {business_name}")
            continue

        # --------------------------------------------------------------
        # 2️⃣ Build prompt and call the LLM
        # --------------------------------------------------------------
        prompt = build_prompt(tex_content, business_name, summary)
        completion = client.chat.completions.create(
            model="openai/gpt-oss-120b",
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

        # Strip possible back‑ticks that might appear
        generated = re.sub(r"^```[a-zA-Z]*\n", "", generated.strip())
        generated = re.sub(r"\n```$", "", generated)

        # --------------------------------------------------------------
        # 3️⃣ Overwrite the flyer with the personalised version
        # --------------------------------------------------------------
        with open(tex_path, "w", encoding="utf-8") as f:
            f.write(generated)
        print(f"[DONE] Updated flyer for {business_name}")

if __name__ == "__main__":
    main()
