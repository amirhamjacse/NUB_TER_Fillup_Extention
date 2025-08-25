
```markdown
# Auto Form Filler for Teacher Evaluation

This Chrome extension allows you to quickly fill out teacher evaluation forms by:
- Auto-selecting the same response (e.g., Strongly Agree) for all relevant dropdowns
- Auto-filling positive and negative comment fields based on the selected response
- Allowing you to edit the comments before injecting them into the form

---

## ✅ Features

- Works with `<select name^="answerValueId">` form fields
- Supports filling both:
  - `"What did you like about this teacher?"` → (ID: `comment`)
  - `"What did you dislike about this teacher?"` → (ID: `negativeComment`)
- Uses clean and responsive Bootstrap UI
- Fully editable comments

---

## 🚀 How to Install (Load as Unpacked Extension)

1. **Download or Clone** this repository to your computer.
2. Open **Google Chrome** and go to:  
   `chrome://extensions/`
3. **Enable Developer Mode** (toggle in the top-right corner).
4. Click on **"Load unpacked"**.
5. Select the folder where this extension's files are located.

That's it! The extension will now appear in your extensions toolbar.

---

## 🧪 How to Use

1. Navigate to the page that contains the form.
2. Click on the extension icon (pin it from the extensions toolbar if needed).
3. In the popup:
   - Select your desired response (e.g., Strongly Agree)
   - The comment fields will auto-fill based on your selection
   - Edit the comments if needed
4. Click **"Fill Form"**
5. The extension will:
   - Fill all matching dropdowns with your selected option
   - Fill the comment fields with your text

---

## 📦 Files

```

```

---

## 📌 Notes

- This extension assumes that:
  - All dropdowns have a `name` that starts with `answerValueId`
  - The positive comment field has the ID: `comment`
  - The negative comment field has the ID: `negativeComment`
- If your form uses different field names/IDs, you’ll need to adjust the selectors in `popup.js`.

---

## 🛡 Permissions

This extension uses:
- `activeTab` – to access the current tab where the form is open
- `scripting` – to inject the filling logic into the active page

No data is collected, stored, or transmitted.

---

## 🧑‍💻 Author

**Mohit Hasan**  
Written with ❤️ and JavaScript

---

## 📃 License

This project is free to use and modify for personal or educational purposes.
```
