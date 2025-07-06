# AIsistBubble.js

Lightweight, zero-dependency JavaScript support bubble that captures browser console logs and forwards user questions, bug reports, and feature requests to ChatGPT—pre‐filled with your repo context and intelligent prompts.

---

🔗 **Live Demo:**  
https://cs-util-com.github.io/AIsistBubbleJs/

---

## Features

- 📍 Fixed chat bubble in bottom-right corner (blue circle with white chat icon)  
- 💬 Small pop-over input for free-text questions, bug reports, or feature requests  
- 🐞 Captures all `console.log`, `console.warn`, `console.error`, and `console.info` messages  
- ✂️ Automatic truncation of logs to keep the URI-encoded query ≤ 2 000 characters  
- 📄 Intelligently prompts ChatGPT with the current page's URL for context.
- 📧 Customizable bug report email address.
- 🔗 Opens ChatGPT in a new tab with `https://chat.openai.com/?q=<encoded prompt>`  
- 🚫 No backend, cookies, or localStorage—100% client-side  

---

## Installation

1. **Download** or **clone** this repository:  
   ```bash
   git clone https://github.com/your-org/AIsistBubble.js.git
   ```

2. **Option A: Use the complete file**
   - Copy `index.html` to your project and rename it as needed
   - Customize the `BUG_REPORT_EMAIL` in the `<script>` section (see Configuration below)

3. **Option B: Extract and embed into your existing HTML**
   - Copy the support bubble HTML elements and the entire `<script>` section from `index.html`
   - Add Tailwind CSS to your project: `<script src="https://cdn.tailwindcss.com"></script>`

Then customize the `BUG_REPORT_EMAIL` and `CHAR_LIMIT` constants in the script:

```html
<script>
  // Optional: Replace with your support email
  window.BUG_REPORT_EMAIL = "support@example.com";
</script>
```

---

## Usage

1. **Click** the blue support bubble in the bottom-right corner.
2. **Type** your question, bug report, or feature request into the pop-over textarea.
3. **Click** **Submit** (or press Ctrl/⌘ + Enter).
4. A new tab opens: ChatGPT’s compose box is pre-filled with:

   * A rules-based prompt for Q&A or bug reports
   * Your text
   * Captured console log (truncated if needed)
5. **Edit** or **submit** directly in ChatGPT.

---

## Configuration

You can configure the support bubble by setting a JavaScript variable and a constant inside the `<script>` tag in your `index.html`:

- `window.BUG_REPORT_EMAIL` (Optional): The email address where users should send bug reports. If not set, the prompt will ask ChatGPT to find a suitable support email.
- `CHAR_LIMIT` (Constant): The maximum character limit for the URL-encoded prompt sent to ChatGPT. The default is `2000`.

Example:
```html
<script>
  // Optional: Replace with your support email
  window.BUG_REPORT_EMAIL = "support@example.com";

  /**********************
   * Configuration
   **********************/
  const CHAR_LIMIT = 2000; // URL‑encoded length limit

  // ... rest of the script
</script>
```

---

## Customization

* **Position & Style:** modify the Tailwind CSS classes in the HTML elements or add custom CSS
* **Log Capture:** modify `captureConsole()` to include/exclude methods or filter entries
* **Truncation Strategy:** adjust slice size or add markers in `buildPrompt()`
* **UI Text:** change the `title`, `placeholder`, or button label in the HTML

---

## Development

1. Fork & clone this repo
2. Open `index.html` in your browser to test changes
3. Make CSS/JS edits in place—no build step required
4. Commit, push, and open a PR

---

## Testing Recommendations

* **Cross-Browser:** Chrome, Firefox, Edge, Safari
* **Prompt Length:** simulate large console logs via DevTools
* **Accessibility:** ensure keyboard navigation & ARIA attributes (if you add them)
* **Popup Blockers:** verify `window.open` behavior when popups are disabled

---

## Contributing

1. ⭐ Star the repo
2. 🐛 Report issues or request features via GitHub
3. 🚀 Submit pull requests—with descriptive commit messages & tests if applicable

---

## License
See [LICENSE](./LICENSE)