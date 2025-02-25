# TemplateJs
TemplateJs is a minimal single-page web app template designed for quick deployment. 
It follows an AI-assisted iterative development process:

- User stories and requirements drive feature development.
- Each iteration is a single commit for easy review.
- AI-assisted coding minimizes manual intervention.
- The focus is on defining clear requirements rather than manual coding.

This approach enables rapid prototyping and structured iteration.

## Using the Template
1. Fork this repository and open the fork via GitHub CodeSpaces
2. Go to your repos Settings -> Pages and there in the "Branch" section select the main branch to be auto-deployed by GitHub for you
3. If your fork is 
   <br> github.com/**YourUserName**/**YourFork** 
   <br> then your WebApp should now be live at 
   <br> **YourUserName**.github.io/**YourFork** 
4. Install VsCode plugins in CodeSpaces
   - "**Live Server**" to render the resulting page including live updates while you edit etc
   - "**GitHub Copilot**" to do smaller iterations inside of CodeSpaces
5. Edit the index.html and regularly commit and push in CodeSpaces to "release" your latest app version 

## AI Iteration Workflow
1. Copy `index.html` into ChatGPT.
2. Modify or extend the requirements listed at the top
3. Test the changes via Right-Click on the index.html -> "Open with Live Server"
4. Clean up modifications done by the AI via the "Source Control" -> "Changes" UX of VsCode (in GitHub CodeSpaces)
5. Commit

## Disclaimer
TemplateJs is provided as-is. It is a general-purpose template and does not include domain-specific functionality. Use and modify as needed.