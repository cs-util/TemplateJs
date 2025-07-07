// --------------------------------------------------------------------------------
// support-bubble.js - Explainer what this script file is about:
// --------------------------------------------------------------------------------
//
// This script adds a support bubble to your web application, allowing users
// to easily ask questions or report bugs by opening a pre-filled ChatGPT prompt.
//
// To include this support bubble in your application:
//
// 1. Copy this file (`support-bubble.js`) into your project.
// 2. Add the following script tag to your main HTML file, just before the
//    closing </body> tag:
//
//    <script src="support-bubble.js"></script>
//
// 3. (Optional) Define a global `BUG_REPORT_EMAIL` variable on the `window` object
//    to set a specific email address for bug reports:
//
//    <script>
//      window.BUG_REPORT_EMAIL = 'support@yourapp.com';
//    </script>
//    <script src="support-bubble.js"></script>
//
// --------------------------------------------------------------------------------
//
// To update the support bubble:
//
// 1. Download the latest version of `support-bubble.js`.
// 2. Replace the existing `support-bubble.js` file in your project with the new one.
//
// --------------------------------------------------------------------------------

(function () {
  // Inject the required CSS once the document head is available
  function injectStyles() {
    const css = `
      /* ----------  core utilities ---------- */
      .hidden{display:none !important;}

      /* ----------  bubble button ---------- */
      #support-bubble{
        position:fixed;
        bottom:1.5rem;               /* ~tailwind bottom-6 */
        right:1.5rem;                /* ~tailwind right-6  */
        width:3.5rem;                /* w-14  */
        height:3.5rem;
        border-radius:9999px;        /* rounded-full */
        background:#2563EB;          /* bg-blue-600 */
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 2px 4px rgba(0,0,0,.2); /* shadow-md */
        cursor:pointer;
        z-index:2147483647;         /* z-max */
        transition:opacity .2s ease;
      }
      #support-bubble:hover{opacity:.9;}

      /* ----------  popover panel ---------- */
      #support-popover{
        position:fixed;
        bottom:5rem;                /* matches button + gap */
        right:1.5rem;
        width:20rem;                /* w-80 */
        padding:.75rem;             /* p-3  */
        border:1px solid #D1D5DB;   /* border-gray-300 */
        border-radius:.5rem;        /* rounded-lg  */
        box-shadow:0 4px 6px rgba(0,0,0,.1); /* shadow-lg */
        background:#fff;            /* bg-white */
        color:#000;
        z-index:2147483647;         /* z-max */
      }

      /* ----------  textarea ---------- */
      #support-input{
        width:100%;
        min-height:80px;
        resize:vertical;            /* resize-y */
        border:1px solid #9CA3AF;   /* border-gray-400 */
        border-radius:.375rem;      /* rounded */
        padding:.375rem;            /* p-1.5 */
        font-size:.875rem;          /* text-sm */
        outline:none;
      }
      #support-input:focus{
        border-color:#2563EB;
        box-shadow:0 0 0 1px #2563EB;
      }

      /* ----------  submit button ---------- */
      #support-send{
        margin-top:.5rem;           /* mt-2 */
        width:100%;
        padding:.5rem 0;            /* py-2 */
        border:none;
        border-radius:.375rem;      /* rounded */
        background:#2563EB;         /* bg-blue-600 */
        color:#fff;
        font-size:.875rem;          /* text-sm */
        cursor:pointer;
        transition:opacity .2s ease;
      }
      #support-send:hover{opacity:.9;}

      /* ----------  retry notice ---------- */
      #retry-notice{margin-top:.5rem;font-size:.75rem;color:#6B7280;} /* text-xs text-gray-500 */
      #retry-notice a{text-decoration:underline;}

      /* ----------  dark‑mode overrides ---------- */
      @media (prefers-color-scheme: dark){
        #support-bubble{background:#60A5FA;}      /* blue-400 */
        #support-popover{
          background:#1F2937;                     /* gray-800 */
          color:#F3F4F6;                          /* gray-100 */
          border-color:#374151;                   /* gray-700 */
        }
        #support-input{
          background:#374151;                     /* gray-700 */
          color:#F3F4F6;
          border-color:#4B5563;                   /* gray-600 */
        }
        #support-input::placeholder{color:#9CA3AF;} /* gray-400 */
        #support-send{background:#60A5FA;}        /* blue-400 */
        #retry-notice{color:#9CA3AF;}             /* gray-400 */
      }
    `;
    const styleTag = document.createElement('style');
    styleTag.setAttribute('data-support-bubble', 'true');
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
  }

  if (document.head) {
    injectStyles();
  } else {
    // Fallback for very early script execution
    window.addEventListener('DOMContentLoaded', injectStyles);
  }

  document.addEventListener('DOMContentLoaded', () => {
    /**********************
     * HTML elements
     **********************/
    const bubbleHTML = `
      <button id="support-bubble" title="Ask a question or file a bug">
        <!-- simple chat icon (SVG) -->
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>`;

    const popoverHTML = `
      <div id="support-popover" class="hidden">
        <textarea id="support-input" placeholder="Type your question or bug report…"></textarea>
        <button id="support-send">Submit</button>
        <!-- Retry notice (shown only if popup is blocked) -->
        <div id="retry-notice" class="hidden">
          Pop‑up blocked. <a id="retry-link" href="#">Open manually</a>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', bubbleHTML);
    document.body.insertAdjacentHTML('beforeend', popoverHTML);

    /**********************
     * Configuration
     **********************/
    const CHAR_LIMIT = 8000; // URL‑encoded length limit

    /**********************
     * Console log capture
     **********************/
    (function captureConsole() {
      const methods = ["log", "error", "warn", "info"];
      const buffer = [];
      methods.forEach(m => {
        const original = console[m];
        console[m] = function (...args) {
          try {
            const line = `[${m.toUpperCase()}] "${args.map(a => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ')}"`;
            buffer.push(line);
          } catch (_) {/* ignore serialization issues */ }
          original.apply(console, args);
        };
      });
      window.__supportLogs = buffer;
    })();

    /**********************
     * DOM references
     **********************/
    const bubble = document.getElementById('support-bubble');
    const popover = document.getElementById('support-popover');
    const textarea = document.getElementById('support-input');
    const sendBtn = document.getElementById('support-send');
    const retryNotice = document.getElementById('retry-notice');
    const retryLink = document.getElementById('retry-link');

    /**********************
     * UI behaviour
     **********************/
    function togglePopover() {
      const isHidden = popover.classList.contains('hidden');
      popover.classList.toggle('hidden', !isHidden);
      if (isHidden) {
        textarea.focus();
      }
    }

    bubble.addEventListener('click', togglePopover);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') popover.classList.add('hidden');
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') sendToChatGPT();
    });

    /**********************
     * Prompt builder
     **********************/
    function buildPrefix(pageUrl, bugEmail) {
      return `I am a user (not a developer) of ${pageUrl}.\n` +
        `Browse to that URL and inspect the page to understand my user-provided information & instructions below.\n\n` +
        `If my message below is a question about how to do something, answer it directly.\n\n` +
        `If my message appears to be a bug report or feature request:\n` +
        ` • Ask follow‑up questions one at a time until you have enough detail. For the answers of your questions provide numbered response suggestions to pick from. \n` +
        ` • Draft an email with the template below and instruct me to send it to ${bugEmail || '___BUG_REPORT_EMAIL___'}.\n` +
        ` • If BUG_REPORT_EMAIL is missing, try to discover a support email for the domain; if none is found, default to support@<domain>.\n\n` +
        `--- Email template ---\n` +
        `Subject: Bug report – <short title>\n\n` +
        `• TLDR Summary\n` +
        `• Detailed description\n` +
        `• Steps to reproduce\n` +
        `• Expected result\n` +
        `• Actual result\n` +
        `• Environment (browser, OS)\n` +
        `• Additional info / console log\n` +
        `----------------------\n\n` +
        `User-provided information & instructions:\n`;
    }

    function buildPrompt(userText) {
      const pageUrl = window.location.href; // full URL incl. query/hash
      const bugEmail = window.BUG_REPORT_EMAIL ?? '';
      const prefix = buildPrefix(pageUrl, bugEmail);

      const logLines = window.__supportLogs ?? [];          // array of strings
      let prompt     = `${prefix}${userText}`;

      if (logLines.length) {
        const chosen = [];                                  // newest-first buffer
        for (let i = logLines.length - 1; i >= 0; i--) {
        // Prepend the next-newest line
          chosen.unshift(logLines[i]);

          // Would the prompt (incl. "Console log:" header) now be too long?
          const candidate = `${prompt}\n\nConsole log:\n${chosen.join('\n')}`;
          if (encodeURIComponent(candidate).length > CHAR_LIMIT) {
            chosen.shift();                                 // undo last add
            break;
          }
        }

        if (chosen.length) {
          prompt += `\n\nConsole log:\n${chosen.join('\n')}`;
          if (chosen.length < logLines.length) prompt += '\n...'; // indicate truncation
        }
      }

      return prompt;
    }

    /**********************
     * ChatGPT launcher
     **********************/
    function showRetryNotice(url) {
      retryLink.href = url;
      retryNotice.classList.remove('hidden');
    }

    function sendToChatGPT() {
      const userText = textarea.value.trim();
      if (!userText) return;

      const prompt = buildPrompt(userText);
      const chatUrl = `https://chat.openai.com/?model=o3&q=${encodeURIComponent(prompt)}`;
      const popup = window.open(chatUrl, '_blank', 'noopener');

      if (popup === null) {
        showRetryNotice(chatUrl);
      } else {
        retryNotice.classList.add('hidden'); // hide previous notice if any
        textarea.value = '';
        popover.classList.add('hidden');
      }
    }

    sendBtn.addEventListener('click', sendToChatGPT);
  });
})();
