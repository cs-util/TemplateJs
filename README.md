# AIsistBubble

Lightweight support bubble that captures browser console logs and forwards user questions, bug reports, and feature requests to ChatGPT—pre‐filled with your repo context and intelligent prompts.

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

1. **Download** or **clone** this repository.

2. **Option A: Use the complete file**
   - Copy `index.html` to your project.
   - Customize the `BUG_REPORT_EMAIL` in the `<script>` section (see Configuration below)

3. **Option B: Embed into your existing HTML**
   - Copy the support bubble HTML elements (the `<button>` and `<div>` with `id="support-bubble"` and `id="support-popover"`) and the entire `<script>` section from `index.html` into your file.
   - Ensure your project includes Tailwind CSS: `<script src="https://cdn.tailwindcss.com"></script>`.

---

## Usage

1. **Click** the blue support bubble in the bottom-right corner.
2. **Type** your question, bug report, or feature request into the pop-over textarea.
3. **Click** **Submit** (or press Ctrl/⌘ + Enter).
4. A new tab opens with ChatGPT, pre-filled with:

   * A rules-based prompt for Q&A or bug reports
   * Your text
   * Captured console log (truncated if needed)
5. **Edit** or **submit** directly in ChatGPT.

---

## Configuration

You can configure the support bubble by setting JavaScript variables inside the `<script>` tag in your `index.html`.

- `window.BUG_REPORT_EMAIL`: The email address where users should send bug reports. If not set, the prompt will ask ChatGPT to find a suitable support email.

To set the configuration, add a script tag before the main script tag like this:
```html
<script>
  window.BUG_REPORT_EMAIL = "support@example.com"; // TODO: Replace with your support email
</script>
```

---

## Customization

* **Position & Style:** modify the Tailwind CSS classes in the HTML elements or add custom CSS
* **Log Capture:** modify `captureConsole()` to include/exclude methods or filter entries
* **Truncation Strategy:** adjust slice size or add markers in `buildPrompt()`
* **UI Text:** change the `title`, `placeholder`, or button label in the HTML


---

## License
See [LICENSE](./LICENSE)