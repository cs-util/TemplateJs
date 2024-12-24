# BabyStepsJs

BabyStepsJs is a playful tech-tree web app that helps parents track their baby’s developmental milestones and see what’s next.  
Your progress is **saved locally in your browser's storage**, so you won't lose your data when you refresh the page.  
All functionality works offline once the page is fully loaded.

> *“Leveling up your baby was never easier.”* – Someone on the internet

## App Usage

1. **Open the App**: [https://cs-util-com.github.io/BabyStepsJs/](https://cs-util-com.github.io/BabyStepsJs/).
2. **Track Milestones**: Enter your baby’s birth date, then check off milestones as they’re reached.
3. **See What’s Next**: Check your **baby’s** tech tree and start unlocking achievements.
4. **Export for Backup** (Optional): Use the **Export** button to save a backup of your data, so you can re-import it later if needed.

## Modifying the Tech Tree

1. **Download**: Get the [defaultData.json.txt](https://raw.githubusercontent.com/cs-util-com/BabyStepsJs/refs/heads/main/defaultData.json.txt).
2. **Edit**: Add, remove, or tweak milestones as you wish.
3. **Import**: In the web app, click **Import** and select your edited file. It will override the current tree in local storage.
4. **Share**: If your edits might help others, open a [pull request](https://github.com/cs-util-com/BabyStepsJs/pulls) with your changes.

## Improvement Suggestions

Feel free to open an [issue](https://github.com/cs-util-com/BabyStepsJs/issues) if you spot a bug or have an idea. Or even better:
1. Copy [index.html](https://raw.githubusercontent.com/cs-util-com/BabyStepsJs/refs/heads/main/index.html) into ChatGPT.
2. Modify or extend the requirements listed at the top.
3. Test and review the new version.
4. Clean up changes as needed.
5. Submit a [pull request](https://github.com/cs-util-com/BabyStepsJs/pulls).

## Context why this app was developed
I built BabyStepsJs to track the development of my newborn daughter in the form of a skill tree. 
It’s a mix of gamified documentation of her current progress and a bit of education on what she might discover next. 

I conducted a similar development experiment a few months ago with the same rules (see the [cs-util-com/InstantScribe](https://github.com/cs-util-com/InstantScribe) repo):
-   Acted mainly as the PM and QA for the AI (this time ChatGPT-4) and iteratively added user stories and requirements to extend the feature set.
-   Each iteration was typically a single commit, so the AI’s proposed changes were easy to review in the git diff.
-   I generally did not modify the code much myself, only making minor adjustments like tweaking colors, positions, etc.
-   I also made some initial high-level decisions, such as choosing D3 for the graph.

Some findings/impressions from that process:
-   I was able to prototype this in a few hours. The process was fun and allowed me to change requirements as I learned more about what I wanted.
-   Most of the changes were correct on the first try (using o1). With other models, I often noticed more random changes in unrelated parts of the app.
-   o1 tends to strip comments, even when they provide useful context on what the code does.
-   Some ideas (e.g., how to smartly arrange the graph) o1 came up with on its own. It was often worth specifying the requirements more on the "why" and less on the "how," giving the AI the freedom to propose solutions I might not have considered.
-   More complex requirements were sometimes ignored for a while when they were just part of [the "user stories" comment block](https://github.com/cs-util-com/BabyStepsJs/blob/main/index.html) at the top of the HTML file. Only after explicitly pointing out that they weren’t implemented did the AI make an effort to address them.

In summary, I’m excited to continue exploring this development approach over the coming years to see if increasingly complex applications can be built iteratively in this way.

## Disclaimer

BabyStepsJs is for informational and entertainment purposes only. It is not intended as a substitute for professional medical advice. For any health-related concerns about your baby, always consult a healthcare professional.
