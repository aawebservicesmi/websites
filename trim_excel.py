import pandas as pd
import os

# Paths
ORIGINAL = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\BUS_DESC_13KM.xlsx"
NEW = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\BUS_DESC_13KM_trimmed.xlsx"

# Load original spreadsheet
df = pd.read_excel(ORIGINAL)

# Find the index of the row that contains "Danis" (case‑insensitive) in the title column
mask = df['title'].str.contains("Danis", case=False, na=False)
if mask.any():
    cut_idx = df[mask].index[0]  # first occurrence
    # Keep rows after this one
    df_trimmed = df.iloc[cut_idx + 1:]
else:
    # If not found, keep the whole dataframe
    df_trimmed = df

# Ensure the output directory exists
os.makedirs(os.path.dirname(NEW), exist_ok=True)

# Write the trimmed data to a new Excel file
df_trimmed.to_excel(NEW, index=False)
print(f"Trimmed Excel written to {NEW} (rows kept: {len(df_trimmed)})")
