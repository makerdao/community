# G&R Summary Style Guide

This is a guide to producing a high quality summary of recurring Governance and Risk meetings at MakerDAO.

TL;DR: The _most_ important part of these summaries is accuracy, readability, and a format that is intuitive for the reader.

## Table of Contents

**Standard Operating Procedure**

- [Getting Started](#getting-started)
- [Roles](#roles)
- [Workflow](#workflow)

**Summary Format Rules**

- [The Structure](#the-structure)
- [General Rules](#header-rules)
- [Header and Spacing Rules](#header-and-spacing-rules)
- [Speakers and Discussions](#speakers-and-discussions)
- [Special Language Rules](#special-language-rules)
- [Screenshot Best Practices](#screenshot-best-practices)
- [Tips](#general-tips)

## Standard Operating Procedure

### Getting Started

To become a part of the working group that produces these summaries please join the [Maker Chat](https://chat.makerdao.com) and mention your interest in the [#community-development](https://chat.makerdao.com/channel/community-development) channel. Dai grants are available for contributing!

### Roles

Producing a summary requires two roles, a Writer and Reviewer.

- **Writer:** Takes initial notes, adds screenshots, and fixes notes in post-editing with the availability of the recording.
  - Recommended to be done by at least two people, splitting up the work for the entire summary.
  - Multiple writers have the advantage of supporting each other with formatting, screenshots, and quality assurance on sections that they are not taking the initial notes on.
  - Writers use the `:hand:`(:hand:) symbol during live calls to request help from another writer.
- **Reviewer:** Sets up the initial working doc, does a full review of the summary after it's produced, quality checks for formatting and semantic errors, and also submits the final version of the summary to GitHub and the Forum.
  - Recommended to be done by one person.

### Workflow

1. **Reviewer:** Prepares the working doc in HackMD by starting a new note from a [template of the summary](./gnr-summary-template.md) and sends it to the Writer(s).
1. **Writer(s):** Joins the [governance call](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk@group.calendar.google.com&ctz=America/Los_Angeles) and begins taking notes.
   - If there are multiple Writers doing the summary, they should decide amongst themselves which sections they are taking notes on.
   - Communication between writers can happen in the working doc or through a separate chat group.
1. **Writer(s):** Skims the working doc and fix any obvious errors once the call concludes.
1. **Writer(s):** Receives a link to the recording of the call a few hours later.
1. **Writer(s):** Completes the summary with the aid of the recording, adding time-anchored-links, adding relevant links, and fixing unclear or unfinished notes.
1. **Writer(s):** Notifies the Reviewer that they are finished with the summary.
1. **Reviewer:** Performs a full quality-check of the summary.
1. **Reviewer:** Submits a single Pull Request to the [MakerDAO community repository](https://github.com/makerdao/community) that:
   - Adds the summary as a new file in the [summaries folder](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings/summaries)
   - Adds a link to the new file in the [summaries README file](https://github.com/makerdao/community/blob/master/governance/governance-and-risk-meetings/summaries/README.md)
   - Adds a link to the new file in community repo's [SUMMARY.md file](https://github.com/makerdao/community/blob/master/SUMMARY.md)
1. **Reviewer:** Submits the summary as a comment on the call's [forum thread.](https://forum.makerdao.com/c/governance/gnr)

## Summary Format Rules

### The Structure

This is the general structure of the document. #h refers to the heading type. Headings are very useful for standardizing the structure of this summary.

```

#h1 Title: Ep00: Month 00, 0000
  ├ ##h2 Agenda
  ├ ##h2 Video
  ├ ##h2 Main Theme (MIPs, Risk, Oracles, Smart Contracts, etc.)
  | └ ###h3 Name of person presenting
  |     ├ #####h4 Segment Description
  |       └ ######h5 Sub-Segment Descriptions
  |     └ #####h4 Discussion 1
  ├ ##h2 Main Theme (Risk, Oracles, Governance, etc.)
  | └ ###h3 Name of person presenting
  |     ├ #####h4 Segment Description
  |       └ ######h5 Sub-Segment Descriptions
  |     └ #####h4 Discussion 2
  ├ ##h2 Ending Discussion
  ├ ##h2 Links from the Chat
  ├ ##h2 Terms
  ├ ##h2 Credits

```

### General Rules

- These summaries are created in [HackMD](https://hackmd.io/) and are saved as markdown files(`.md`). This is because the final version is published to GitHub and the Forums, which are both markdown friendly.
- Filename format: `episode-000.md`
- Notes are taken in chronological order.

### Header and Spacing Rules

- Headers follow the rules in the structure displayed above and occur chronologically.
- The same "Main Theme" can occur more than once, but must be numbered, similar to the discussion section headers.
- Include line breaks above and below headings.
- Include time-anchored-links [in the Agenda.](https://i.imgur.com/vSzBr1M.png)
- Include time-anchored-links [under "Segment Description" headers.](https://i.imgur.com/ai4wx4K.png)
- Include time-anchored-links [every 5 minutes or so for individual questions and comments during the discussion segments.](https://i.imgur.com/v3XjjOy.png)
- Include line breaks [above and below time-anchored-links.](https://i.imgur.com/vIZyKN1.png)
- Include line breaks [above and below screenshots](https://i.imgur.com/yA0l3zv.png) and their relevant notes.
- Do not leave [trailing spaces.](https://i.imgur.com/SkoADWU.png)
- Ensure there is a single empty line, called a hard-return, at the end of the file.

### Speakers and Discussions

- The goal of the summary is accuracy and readability of the content on the call.
- Notes should be "semi-transcribed"; meaning they only deviate from what is originally said if it is to fix the readability of the note.
- Minor edits to bridge spoken word to written word are permitted and should respect the semantic information being conveyed by the speaker.
- Do not include "umm", "so", "like", irrelevant tangents, and any other obfuscating language. The aim of the summary is to most clearly capture the main points in a concise and readable fashion that is semantically true to how the point was spoken.
- Add an `h4` Discussion header at the end of each section if there are questions or comments.
  - If there are no questions or comments, do not include a Discussion header.
- Add a `` `Chat` `` marker to the beginning of questions or comments coming from the chat.
  - Only include insightful comments or important questions. Especially include content that is responded to on the call.

### Special Language Rules

In standardizing the rules around contributing, the community maintains a [writing-style-guide](https://community-development.makerdao.com/contributing/writing-style-guide) that contains all the rules for consistent language, grammar, and formatting. Below are the rules most relevant to these summaries:

- Please follow the [Naming Convention guidelines](./contributing/writing-style-guide#naming-conventions) found in the writing style guide.
- Use short, concise sentences. The balance is to use the least words for the most accurate and comprehensive coverage of what the speakers are saying.
- Use [oxford commas](https://en.wikipedia.org/wiki/Serial_comma).
- Capitalize names of people and online handles.
- Capitalize and use backticks for any [specific system parameters:](https://docs.makerdao.com/other-documentation/system-glossary)
  - For example,`` `flop` ``, `` `bite` ``, `` `vow` ``, `` `kick` ``, etc.
- Do not use backticks when referring to [generalized system language.](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/glossary)
  - For example, Stability Fee, Debt Ceiling, Debt Auction, Vault ETH-A, MIPs, etc.
- When referencing material inside the summary itself, please use "below" and "above" language.

### Screenshot Best Practices

The Governance Calls often have visual presentations. The most efficient way to capture these is through screenshots, and add elaborating notes below the image if necessary. The recommended software below should keep the last screenshot in your clipboard as a copied image. In HackMD, pasting copied images will automatically upload them to Imgur and provide an embedded link for you([see example.](<![](https://i.imgur.com/nNBR9UT.png)>))

- For PCs: Download [Puush](https://puush.me/) or [ShareX](https://getsharex.com/) and create a hotkey for "Region Screenshot."
  - Both of these options keep the last screenshot in your clipboard as a copied image.
  - In HackMD, pasting copied images will automatically upload them to Imgur and provide an embedded link for you([see example.](<![](https://i.imgur.com/nNBR9UT.png)>))
- For Mac: [Katana](https://github.com/bluegill/katana) is a simple, open-source screenshot utility for macOS that lives in your menu-bar.
  - Katana does 90% of what ShareX can do, but it's Imgur link needs formatting in HackMD after pasting.

### Tips

- Consult the [Writer Style Guide](./contributing/writing-style-guide.md) and [Reviewer Guides](./contributing/reviewer-guide.md) for additional helpful information.
- Read for clarity before rewatching. While doing so, edit for low hanging fruit: readability, spelling or grammar mistakes, and formatting errors.
- Rewatch at a comfortable playback speed; speeds up to 2x are available on YouTube.
- Use tools like [Grammarly](https://app.grammarly.com/) to help you find missed mistakes once you are done with your section.
- Use a Linter in VSCode to find formatting errors. For more information on linters, consult the [Contributor Tools Guide](./contributing/contributor-tools/#VSCode)
- Take screenshots that are readable.
- Don't duplicate information already presented on slides. Focus on the additional points being made during presentations that include slides.
- Conversations may be hard to transcribe in the moment so do your best.
  - Use initials when conversations get fast back-and-forth. Also helps readability.
  - Use bullet points to semantically break apart longer speaking segments, both in presentations and discussions.
  - Add video links to above individual questions and transition points during the call.
- Aim to keep the notes readable. Always ask "does this make sense?" Even if the conversation breaks off into a tangent, always try to find the thread.
