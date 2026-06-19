# LaTeX Flyer Template - Quick Guide

## How It Works

This template takes `baseLatexFlyer.tex` and compiles it into a PDF. To personalize for a different business:
YOU ARE NOT TO CHANGE MUCH ABOUT THE PRICING OR ANY OF THAT. THIS IS A TEMPLATE FOR THE FLYER FOR A WEBSITE BUILDING SERVICE. you just need to go through the sentences and slightly tweak them to make sure they worko for this sentence

### Step 1: Edit the .tex file

Open `baseLatexFlyer.tex` and simply change:

- Business name
- Pricing
- What we need from you section


### Step 3: Compile

```bash
"C:\Users\ashwi\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" -interaction=nonstopmode baseLatexFlyer.tex
"C:\Users\ashwi\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" -interaction=nonstopmode baseLatexFlyer.tex
```

Output: `baseLatexFlyer.pdf`

---

## Quick One-Liner

```bash
"C:\Users\ashwi\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" -interaction=nonstopmode baseLatexFlyer.tex && "C:\Users\ashwi\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" -interaction=nonstopmode baseLatexFlyer.tex
```

---

## File Structure

```
W4_PEST_WEBSITE/
├── baseLatexFlyer.tex  # Template to edit
├── baseLatexFlyer.pdf  # Generated output
                     └── README_TEMPLATE.md  # This file
```

---

## Tips

- **Keep the structure**: Only edit the text content, not LaTeX commands like `\begin{tcolorbox}` or `\definecolor`
- **Special characters**: If text contains `%`, `$`, `&`, `#`, or `_`, escape them with a backslash (e.g., `\&`)
- **Two passes needed**: pdflatex runs twice to handle hyperlinks and references correctly
