# Contributor Tools Guide

The Community Contributor Tools Guide introduces the tools used by the MakerDAO Community Development team and contributors.

The Community Development (Comm-Dev) team works with tools geared towards promoting open-source feedback, communication, transparency, and clarity. While there is no sophisticated software stack, contributors should be comfortable with the more heavily used tools and how they serve Comm-Dev.

Before starting work on a Community Development project, contributors are encouraged to study MakerDAO’s [contributor resources](readme.md).

- [Contributor Onboarding Guide](contributor-onboarding-guide.md)
- [Writing Style Guide](writing-style-guide.md)
- [Reviewer Guide](reviewer-guide.md)

---

## Table of Contents

<!-- TOC -->

### Discussion

- [Rocket.Chat](#rocket.chat)
- [Meetings](#meetings)

### Writing

- [Platforms](#writing-platforms)
- [Google Docs](#google-docs)
- [HackMD](#hackmd)
- [Markdown](#markdown)

### GitHub

- [Overview](#github-overview)
- [Getting Started](#getting-started-101)
- [Comm-Dev GitHub](#community-github-overview)
- [General Tips](#tips-and-visual-guides)
- [Helpful Resources](#other-helpful-resources)

### Miscellaneous

- [Miscellaneous](#miscellaneous-tools-and-tips)

<!-- /TOC -->

---

## Discussion Platforms

### Rocket.Chat

The Community Development team hosts discussions and follows-ups on MakerDAO's Rocket.Chat, an open-source platform geared towards improving team communication. The [main directory](https://chat.makerdao.com/directory) lists all channels and users.

Start participating in public discussions by joining the recommended channels below.

- [#community-development](https://chat.makerdao.com/channel/community-development)
- [#general](https://chat.makerdao.com/channel/general)
- [#governance-and-risk](https://chat.makerdao.com/channel/governance-and-risk)
- [#help](https://chat.makerdao.com/channel/help)
- [#oasis](https://chat.makerdao.com/channel/oasis)
- [#dai-lending](https://chat.makerdao.com/channel/dai-lending)

**_Pro Tips:_**

- Visit [#community-development](https://chat.makerdao.com/channel/community-development) regularly.
  - It's an excellent channel for collaboration.
- Coordinate with other members.
- Share early and share often.
- Ask for feedback.
- Provide progress updates.

### Meetings

The Comm-Dev team hosts meetings on Google Hangouts and Zoom. Invitations are sent to contributors by email. Google Calendar automatically schedules the event and sends reminders.

- [Google Meet](https://meet.google.com/_meet)
- [Zoom](https://zoom.us/join)

## Writing Platforms

1. **[Google Docs](#google-docs):** Start new projects in Google Docs and when seeking robust feedback.
1. **[HackMD](#hackmd):** Convert documents to Markdown and make final edits on HackMD.
1. **[GitHub](#github):** Use GitHub [Pull Requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) to submit final versions.

### Google Docs

[Google Docs](#google-docs) is a collaborative writing platform, with features like suggestion editing and version naming. Docs simplify feedback and review and are easy to share between team members and contributors.

- Start new projects and create first drafts in Google Docs.
- Use "Suggesting Mode" and leave "Notes" when reviewing a document.
  - Suggestions draw attention to proposed changes.
  - Notes leave room for side discussions.
- Avoid including direct links in a Google Doc.
  - Use the Markdown format to simplify conversion later on.
    - **Incorrect:** <https://bad.link.com>
    - **Correct:** `[link](https://link.com)`
- Versions can be named, renamed, downloaded, or revisited at any time.
  - Versions help other contributors quickly find and see any changes.
    - **Example:** [Naming a Version](https://imgur.com/a/3dyO2FM)
- Make sure to name versions before passing projects off for review.
  - Use descriptive names for versions.
    - Names should contain information specific to the contents of the file or version.
  - Include a version number in the name, along with any other relevant details.
    - Numbers after the decimal define draft iterations.
    - **Example:** V0.1, V0.2, V1.2, etc.

### HackMD

MakerDAO prepares its long-form documentation in [HackMD](https://hackmd.io/), a collaborative Markdown editor. HackMD also tracks versions, enables commenting, and allows multiple users to work on a document simultaneously.

:heavy_check_mark: **Note:** Run all drafts through [Grammarly](https://app.grammarly.com/) regularly, and before final submissions.

- Grammarly will catch most spelling and grammatical errors.
  - Review the suggestions to make sure they make sense.
  - **Do not blindly accept Grammarly edits.**
- HackMD does not identify spelling and grammatical errors.
  - Copy text from the rendered preview into Grammarly and address any errors it flags.
  - Grammarly will miss errors if it’s given raw Markdown text.

**\*Pro Tip:** Install the HackMD Google Chrome [extension](https://chrome.google.com/webstore/detail/hackmd-it/cnephjboabhkldgfpdokefccdofncdjh?hl=en) to make searching easier.\*

### Markdown

MakerDAO documents hosted on GitHub are written in Markdown, a plaintext formatting syntax. Markdown allows for easy conversion to HTML and various other outputs, making documents easy to read on the web.

- Learn the basics of Markdown:
  - [Daring Fireball](https://daringfireball.net/projects/markdown/)
  - [Markdown Syntax Guide](https://guides.github.com/features/mastering-markdown/)
  - [Practice Communicating Using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)

#### Tips

- Include line breaks above and below headings.
- Use top-level headers `#` only once per document.
  - Do not make multiple top-level headings.
- Avoid repeat headings.
  - They will break auto-generated navigation.
- Avoid trailing spaces.
- Do not use:
  - Em or en [dashes](https://en.wikipedia.org/wiki/Wikipedia:Hyphens_and_dashes): `—`.
  - Ampersands `&` in titles and headers.
  - Pipes `|` in titles and headers.
  - Curly quotes. Use the plaintext version.
    - **Correct:** `"`
    - **Incorrect:** `“`
  - Escaping parentheses. Use normal parentheses.
    - **Correct:** `(SOMETHING)`
    - **Incorrect:** `\(SOMETHING\)`
- Add tasks using check-boxes as projects grow.
  - A dash and brackets (`- []`) on a new line show up as a check-box in GitHub's UI.
  - **Example:**
    - [ ]
- Ensure there is a single hard return at the end of a .md file.
- Use in-text comments for extra visibility when collaborating with other contributors on HackMD documents.
  - Click on the comment icon in the toolbar and choose an appropriate style.
  - Consider including a timestamp or username:
    - **Markdown:** `> Look Here! [name=John Doe]`
    - **Rendered:**
      > Look Here! [name=John Doe]
  - Make sure to delete comments before submitting Pull Requests.
- Use an emoji to call attention to an important point, when necessary.
  - Practice discretion and use them sparingly.
    - Do not load documents with emojis.
  - This [cheat sheet](https://gist.github.com/rxaviers/7360908) lists emojis and their Markdown shortcuts.

#### Naming Files and Versions

- Markdown file names should be lowercase.
- Use dashes `-`, not spaces, to separate words within Markdown file names.
  - **Correct:** `meeting-transcript-ep-01.md`
  - **Incorrect:** `Meeting Transcript Episode 01.md`
- Use descriptive names for Markdown files and versions.
  - Filenames should contain information specific to the contents of the file.
    - Context is provided from the directory or through the presentation layer (e.g., GitBooks).
  - **Correct:** `meeting-summary-ep-01.md`
  - **Incorrect:** `scientific-governance-and-risk-meeting-summary-ep-01.md`

**\*Pro Tip:** For a document's final draft, name it "Final draft, moving to GitHub." Post a link to the HackMD file or a relevant page on GitHub.\*

#### VSCode

- Consider using Visual Studio Code and install the extensions below:
  - `Markdown Preview Enhanced`
  - `Markdown Linter`
  - `Code Spell Checker`
  - `GitLens`
  - `Prettier`
    - Prettier will auto-correct most Markdown mistakes.
  - The [vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint#configure) GitHub repo describes how to edit the error settings JSON file.
    - Use it to address any Markdown errors that follow the Writing Style Guide (e.g., headers in G&R summaries).
- How to integrate GitHub with VSCode:
  - **Video:** [Up and Running with Visual Studio Code and GitHub](https://youtu.be/ghL-KlAhBnc)

## GitHub Overview

GitHub is a collaborative development platform for open-source software projects. It uses Git, a version control system, to track and log changes to the source code, and display that history front and center.

MakerDAO uses [GitHub](https://github.com/) for transparent project planning, visible collaboration, and hosting canonical information. It houses all of MakerDAO's documentation and day-to-day work.

Comm-Dev takes advantage of GitHub's robust graphic user interface (GUI) for Git; opening issues, and managing content files are the bulk of the work. MakerDAO uses a simple Git branching model, where one party manages the master branch and reviews all changes before adding them.

Check out this short [video](https://www.youtube.com/watch?v=w3jLJU7DT5E) for a brief intro to GitHub.

:exclamation: **New Users** :exclamation:

**_Lost and have no idea how GitHub works?_**
_The tutorials in [Getting Started 101](#getting-started-101) below are a great place to start. They cover many of GitHub's functions used for Comm-Dev. Set aside some time to go through them._

Experienced users can skip ahead to [Community GitHub Overview](#community-github-overview).

### Getting Started 101

1. Create an account on [GitHub](https://github.com/).
1. Go through the comprehensive, interactive tutorials on [GitHub Lab](https://lab.github.com).
   - Set aside a few hours to complete the tutorials.
1. Click [Find Your First Course](https://lab.github.com/login/github).
   - Follow prompts to install GitHub Learning Lab to personal repositories.
1. Go through the introductory learning paths.
   - [Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github)
   - [First Day on GitHub](https://lab.github.com/githubtraining/paths/first-day-on-github)
   - [First Week on GitHub](https://lab.github.com/githubtraining/paths/first-week-on-github)

**\*Pro Tip:** Consider installing [GitHub Desktop](https://desktop.github.com/). Most GitHub functions are available online, but some actions (e.g., uploading images) are more straightforward with GitHub Desktop.\*

### Community GitHub Overview

The [MakerDAO Community Repository](https://github.com/makerdao/community) is the collection of documents and resources relating to initiatives from the Community Development group at MakerDAO.

#### Project Tracking

- **[Issues](https://github.com/makerdao/community/issues)**
  - Issues contain short, actionable descriptions of tasks.
- **[Labels](https://github.com/makerdao/community/labels)**
  - Labels loosely define a document to a subgroup. They typically autofill when assigning an issue (e.g., languages or bounties or hackathons).
- **[Project Board](https://github.com/makerdao/community/projects)**
  - This Board reflects the development stages based on the current workflow.
  - Project Boards use a [Kanban layout](https://en.wikipedia.org/wiki/Kanban_board) to move issues through the columns as they progress.
    - **Icebox:** Issues that are not active for longer than 60 days.
    - **Backlog:** Issues that are blocked or not currently active.
    - **In Progress:** Issues that someone is already tackling.
    - **Ready for Review:** Issues that need to be reviewed or merged.
    - **Done:** Issues automatically move here when the issue is closed, or the PR is merged.
- **[Epics](https://github.com/makerdao/community#workspaces/community-development-5d2475bd23b522535e2def1d/board?filterLogic=any&repos=166580993)**
  - Epics map to a larger task by nesting multiple issues.
  - For users that don't have Zenhub, Comm-Dev writes "Epic" on one main issue, and includes relevant links.
  - Epics are more visible with Zenhub.
    - **Optional:** Download the [Zenhub](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) extension.

#### Best Practices

**\*Pro Tip:** Practice in a test environment first to prevent merging issues down the road. Fork the Maker Community repository (repo) or clone it to a local machine.\*

- Discuss efforts, blockers, and problems in [#community-development](https://chat.makerdao.com/channel/community-development).
- Ensure repositories are up to date.
- Make a practice branch for edits and approvals.
  - Fetch the most recent changes.
  - Branch the main repo to create PRs.
- Create a new issue or find an existing issue.
  - Include links and dependencies in the issue description.
  - Close completed issues manually to mark them as done.
    - It will move within the project board automatically.
- Commit early and commit often.
  - Submit changes before large merges.
  - Make sure commits are explicit in their changes.
- Link Pull Requests to existing issues.
  - If unsure of which issue, ask in the [#community-development](https://chat.makerdao.com/channel/community-development) channel.
- Pull Requests often go through several phases of review before a merge.
  - An Approver may request changes if a submission does not adhere to guidelines or if it needs general revision.
  - When reviewing or addressing change requests, indicate which issues are resolved and update them in the PR thread, either issue by issue, or in one summary comment.

### Tips and Visual Guides

Click the links in this section for short animated examples of key GitHub actions useful for Comm-Dev work. Alternatively, scroll through this [GIF gallery](https://imgur.com/a/eeO7OJM) to quickly see all the expedient demos below in one place.

- Clone a repository.
  - **Example:** [Cloning a GitHub Repository](https://imgur.com/GjX6cf9)
  - Make sure to have the [repository's URL](repository-url.png)
- Sync the Comm-Dev repo when it's already on the machine with the Fetch Origin Master button.
  - In the command line, this is called: `~ git fetch`.
  - **Example:** [Fetch Origin Master](https://imgur.com/VREFUKV)
- Use [GitHub Desktop](https://desktop.github.com/) to simplify uploading images.
- Create distinct branches to later merge changes into the master.
- Make branch names short.
  - **Example:** [Upload image locally and create branch name](https://imgur.com/WJ460E8)
- Rename any incorrectly named files.
  - Make sure filenames on GitHub include dashes instead of spaces.
    - GitHub and GitBooks cannot manage links to files with strange characters (e.g., spaces).
    - See the [naming files](#naming-files-and-versions) section above.
  - **Example:** [Rename a file and pushing it to a local branch](https://imgur.com/EXwsHzA)
- GitHub desktop opens Pull Requests in the GitHub web GUI.
  - **Example:** [Opening a PR with GitHub Desktop](https://imgur.com/iRYNBC4)
  - **Note:** In the above example, Git tracked all file uploads, compiled each local change (commit) into one PR, and [merged the Pull Request](https://imgur.com/FFIo7nB).
- Add a file on GitHub’s GUI by opening another Pull Request.
  - Pull Requests merge any changes tracked in Git, similar to file uploads.
  - **Example:** [Add a file with GitHub](https://imgur.com/D3025qz)
- Comm-Dev uses issues to track work.
  - **Example:** [Opening an Issue](https://imgur.com/MGW0mMJ)
- Link Pull Requests to the open issue if resolving the issue requires uploading a file.
  - **Example:** [Uploading a file and closing an issue](https://imgur.com/Kl5LtmQ)
- Consider this screenshot example of a [Pull Request](github-fixing-a-commit.png) on the Comm-Dev repo with multiple annotations, commits, and requests for changes.
  - Key points are labeled:
    1. Multiple commits.
    2. Connect Pull Request to the issue.
    3. The approver requests changes.
    4. The change request asks to fix relative pathing.
       **Note:** Correctly defining relative paths to files within a repo is a common problem. - Depending on where in the repo the file lives, a relative path may involve: - **Full Stops:** `.` - **Slashes:** `/` - For files in the same folder: - Write the file name or use a full stop with a slash`./`. - **Example:** `file-name.md` - **Example:** `./file-name.md` - To navigate to a file one folder up: - Use two full stops with a slash `../` - **Example:** `../contributing/file-one-folder-up.md`
    5. Final comments.
- If changes are correct, comment on the request and "resolve" the comments.
- After addressing all change requests, comment on the PR to notify the Approver that it’s time to merge.

### Other Helpful Resources

- Check out [Getting Started](https://help.github.com/en/github/getting-started-with-github) on GitHub Help.
  - See [Writing on GitHub](https://help.github.com/en/categories/writing-on-github) for writing and formatting tips.
- Check out these recommended introductory videos:
  - [Git & GitHub Crash Course For Beginners](https://youtu.be/SWYqp7iY_Tc)
  - [Git Tutorials by Corey Schafer](https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx)
- Check out these other introductory guides:
  - [Git-The Simple Guide](https://rogerdudler.github.io/git-guide/)
  - [Think like a Git](http://think-like-a-git.net/)

#### Cheat Sheets

- [Git Cheat Sheet by GitHub](https://education.github.com/git-cheat-sheet-education.pdf)
- [A Dead Simple GitSheet](https://gitsheet.wtf/)
- [Git-Tower](https://www.git-tower.com/blog/git-cheat-sheet/)
- [Interactive Cheat Sheet by NDP](https://ndpsoftware.com/git-cheatsheet.html#loc=workspace;)

#### Visual Guides

- [Git Workflow](http://justinhileman.info/article/git-pretty/git-pretty.png)
- [Visualizing Git](http://onlywei.github.io/explain-git-with-d3/#)

## Miscellaneous Tools and Tips

- [GitHub Desktop](https://desktop.github.com/)
- [Broken Link Checker](https://ahrefs.com/broken-link-checker)
- [Markdown Table Maker](https://gsuite.google.com/marketplace/app/markdowntablemaker/46507245362): for Google Sheets.
- [Code Blocks](https://gsuite.google.com/marketplace/app/code_blocks/100740430168?pann=cwsdp&hl=en): for formatting blocks of code in a doc or adding Markdown.
- [Download to Google Drive](hackmd-markdown-download): Handy button in HackMD.
- [Markdown Conversion](https://github.com/lmmx/gdocs2md-html): for Google Drive.
  - A long [stack-exchange thread](https://webapps.stackexchange.com/questions/44047/how-can-google-docs-and-markdown-play-nice) on this use case.
- [Figma](https://www.figma.com/): Creates visual mockups, especially for team collaboration.
- [Whimsical](https://whimsical.com/): Creates flow charts.

### Wallets and 3rd Party Services

- [Metamask](https://metamask.io/) | [Argent](https://www.argent.xyz/) | [Zerion](https://zerion.io/): Wallets for governance voting, or for sending and receiving Dai.
  - **Note:** Maker uses the Kovan testnet for developing and testing.
    - [Kovan Faucet](https://faucet.kovan.network/)
- [Request Network](https://app.request.network/#/): Send invoices for Dai.

### Keyboard Shortcuts

- [Mac Shortcuts](https://www.mediaatelier.com/CheatSheet/?ref=producthunt)
- [Windows Shortcuts](https://cheatkeys.com/)
- [Use The Keyboard](https://usethekeyboard.com/): Open-source collection of keyboard shortcuts for Mac apps, Windows programs, and websites.
