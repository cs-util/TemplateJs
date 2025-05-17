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
- 📄 Hard-coded `GITHUB_URL` prompt prefix so ChatGPT can inspect your code & README  
- 🔗 Opens ChatGPT in a new tab with `https://chat.openai.com/?q=<encoded prompt>`  
- 🚫 No backend, cookies, or localStorage—100% client-side  

---

## Installation

1. **Download** or **clone** this repository:  
   ```bash
   git clone https://github.com/your-org/AIsistBubble.js.git
````

2. **Include** the HTML snippet (or copy the entire file) into your app:

   ```html
   <!-- support-bubble -->
   <div id="support-bubble" title="Ask question or report bugs or feature requests">
     <!-- chat icon SVG… -->
   </div>
   <div id="support-popover">…</div>
   <script src="support-bubble.js"></script>
   ```
3. **Customize** the `GITHUB_URL` in `support-bubble.js` (see Configuration below).

---

## Usage

1. **Click** the blue support bubble in the bottom-right corner.
2. **Type** your question, bug report, or feature request into the pop-over textarea.
3. **Click** **Send to ChatGPT** (or press Ctrl/⌘ + Enter).
4. A new tab opens: ChatGPT’s compose box is pre-filled with:

   * A rules-based prompt (Q\&A vs. GitHub issue)
   * Your text
   * Captured console log (truncated if needed)
5. **Edit** or **submit** directly in ChatGPT.

---

## Configuration

Edit the top of `support-bubble.js`:

```js
// Replace with your repo’s URL
const GITHUB_URL = "https://github.com/your/repo";

// Maximum allowed URI-encoded length of the full prompt
const CHAR_LIMIT = 2000;
```

---

## Customization

* **Position & Style:** tweak the CSS in `support-bubble.css` (or inline `<style>`)
* **Log Capture:** modify `captureConsole()` to include/exclude methods or filter entries
* **Truncation Strategy:** adjust slice size or add markers in `buildPrompt()`
* **UI Text:** change the `title`, `placeholder`, or button label in the HTML

---

## Development

1. Fork & clone this repo
2. Open `support-bubble.html` in your browser to test changes
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