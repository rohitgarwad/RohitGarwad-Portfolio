# Resume System - Easy Editing Guide

## 📁 Files

| File | Purpose |
|------|---------|
| `resume.md` | **Edit this** - Your resume content in Markdown |
| `resume.html` | Styled version for PDF export |

---

## ✏️ How to Edit Your Resume

1. Open `resume.md` in any text editor (VS Code recommended)
2. Edit the text - no formatting worries, just plain text with simple Markdown
3. Save the file

**That's it!** Markdown is version-controlled by Git, so all changes are tracked.

---

## 📄 How to Export as PDF

### Method 1: Browser Print (Recommended)
1. Open `resume.html` in Chrome
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Set "Destination" to **Save as PDF**
4. Click **Save**

### Method 2: Command Line (if you have md-to-pdf)
```bash
npx md-to-pdf resume.md
```

---

## 🔄 Sync HTML with Markdown

If you edit `resume.md`, you'll need to update `resume.html` manually or use a Markdown-to-HTML converter.

**Quick tip:** For simple text changes, you can edit both files or just edit the HTML directly.

---

## 💡 Tips

- Keep bullet points concise (1 line each)
- Use action verbs: "Built", "Designed", "Implemented"
- Quantify achievements: "reduced by 70%", "57+ repositories"
- Update regularly with new projects and skills
