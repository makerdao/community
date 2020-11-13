# Writing Style Guide

The MakerDAO Community Writing Style Guide summarizes the standards and best practices Writers should follow when contributing to Community Development resources.

- Errors are sometimes overlooked.
- If something in a document does not adhere to the Writing Style Guide, edit accordingly.

In addition to this guide, Writers are encouraged to study the [contributor resources](README.md) before starting work on a Community Development project.

- [Contributor Onboarding Guide](contributor-onboarding-guide.md)
- [Contributor Tools Guide](contributor-tools-guide.md)
- [Reviewer Guide](reviewer-guide.md)

---

## Table of Contents

<!-- TOC -->

### Intent and Tone

- [Overview](#writing-intent-and-tone)

### Guidelines

- [General Rules](#writer-guidelines)
- [Abbreviations](#abbreviations)
- [Acronyms & Decades](#acronyms-and-decades)
- [Cases](#cases)
- [Currencies](#currencies)
- [Naming Conventions](#naming-conventions)
- [Numbers](#numbers)
- [Lists](#lists)
- [Links](#links)
- [Table of Contents](#tables-of-content)

### Markdown

- [Overview](#markdown-guide)
- [Tips](#tips)

### Best Practices

- [Overview](#contributor-best-practices)
- [Writing Tools](#helpful-writing-tools)
- [Community Guides](#review-community-guides)
- [Collaborate](#collaborate)
- [Track Progress](#track-progress)
- [Final Drafts](#final-drafts-and-submissions)

<!-- /TOC -->

---

## Writing Intent and Tone

MakerDAO Community Development materials should cater to readers who are unfamiliar with the Maker system. Writers should also assume that their readers have tight schedules and short attention spans.

As such, Writers should focus on communicating concepts as clearly and succinctly as possible.

- Use simple language.
- Use short, concise sentences.
- Avoid unnecessary words.
- Remain open and objective.
- Provide examples when possible.
- Provide examples to help explain concepts, but avoid overcomplicating them.
  - Use math when necessary, but keep it simple.
- Link to basic terms if necessary.

## Writer Guidelines

:exclamation: **Please Note**

- When migrating to a new document (i.e., from Google Docs to HackMD), make sure to leave a note in the old file. Provide a link to the latest version.
- Run all drafts through [Grammarly](https://app.grammarly.com/) regularly, and before final submissions.
  - Grammarly will catch most spelling and grammatical errors.
    - Review the suggestions to make sure they make sense.
    - **Do not blindly accept Grammarly edits.**
  - HackMD does not identify spelling and grammatical errors.
    - Copy text from the rendered preview into Grammarly and address any errors it flags.
    - Grammarly will miss errors if it’s given raw Markdown text.

### General Rules

**Use:**

- [Oxford commas](https://en.wikipedia.org/wiki/Serial_comma).
- [Pluralized, gender-neutral pronouns](https://en.wikipedia.org/wiki/Singular_they).
  - Use "they/their" instead of "he/she/his/hers."
  - **Examples:** "When they..." or "If users choose to X, then their..."
- The `%` symbol. Do not spell out "percent."
  - **Correct:** 15%
  - **Incorrect:** 15 percent
- Double quotes `" "` for phrases, quotes, etc.
  - Do not use single `' '` quotes.

**Avoid:**

- [First-person language](https://en.wikipedia.org/wiki/Grammatical_person).
  - **Examples:** I, we, our, etc.
- [Second-person language](https://en.wikipedia.org/wiki/Grammatical_person).
  - **Examples:** "You then..." or "Now you should..."
- Exclamation points.
- Footnotes.
- References to [Purple Paper](https://makerdao.com/purple/) names.
  - **Examples:** Flip, Flap, Flop, etc.
- Parentheses for stating additional information.
  - **Incorrect:** Development Grants are larger sized ($5,000 to $50,000) grants aimed at individuals or teams building projects around Dai and the broader MakerDAO ecosystem.
  - **Correct:** Development Grants are generally larger sized grants, ranging from $5,000 to $50,000, aimed at individuals or teams building projects around Dai and the broader MakerDAO ecosystem.

### Abbreviations

- Use parentheses to define abbreviated terms the first time in a given document.
  - **Example:** A Community Development Initiative Proposal (CDIP) is a proposal framework to support new initiatives and to expand the scope of existing ones.
- Use "Comm-Dev" as the shortened version of "Community Development."

### Acronyms and Decades

Do not use apostrophes to pluralize acronyms or indicate decades. Add an "s" at the end.

**Acronyms**

- To make an acronym plural:
  - **Correct:** SCDs
  - **Incorrect:** SCD's

**Decades**

- To indicate a decade:
  - **Correct:** 1990s
  - **Incorrect:** 1990's

### Cases

- **Capitalize**
  - Names and proper nouns.
  - Cities, countries, nationalities, and languages.
  - Terms with definitions provided by MakerDAO.
    - Vist the [Glossary of Terms](/faqs/glossary.md) for the official list.
  - Comm-Dev role titles.
    - **Examples:** Lead, Approver, Advisor, etc.
- **Title Case**
  - Capitalize the first word and all nouns, proper nouns, verbs, and adjectives.
  - Lowercase all:
    - **Articles:** a, an, the, etc.
    - **Conjunctions:** and, but, etc.
    - **Prepositions:** on, it, before, etc.

### Currencies

The examples below use dollars, but the same rules apply to all global currencies.

- Use lowercase except when writing "US Dollar."
- Use figures and the "\$" sign in all except casual references, or amounts without a figure.
  - **Standard:** "The book costs \$4."
  - **Casual:** "Please give me a dollar."
- For amounts under \$1 million, follow this format:
  - **Correct:** $4, $25, $500, $1,000, \$650,000.
- For amounts over \$1 million, use the word, not numerals.
  - **Correct:** "He is worth \$4 million."
  - **Incorrect:** "He is worth \$4,000,000."

### Naming Conventions

#### Cryptocurrencies

- When directly referring to the creation, destruction, or manipulation of a token (particularly as it relates to tooling):
  - Use the capitalized TLA version: `DAI`.
  - **Example:** "Draw DAI against ETH from a Vault."
- Similarly, when referring to exchange pairs:
  - Use: `ETH/DAI`.
- When referencing the token as a currency, in an instructional or conversational setting, or as a conceptual product of the Foundation or its systems:
  - Use: `Dai`.
  - **Example:** "Dai is a price-stable asset that can be used as money."

#### MakerDAO

- When referring to MakerDAO as a smart contract system, use "The Maker Protocol."
  - **Example:** "The Maker Protocol facilitates DAI generation."
- When referring to MakerDAO as a body of MKR voters and the general stakeholder community, use "Maker Community" or "MakerDAO."
  - **Example:** "MakerDAO passed a vote to increase the Stability Fee."
  - **Example:** "The Maker Community passed a vote to increase the Stability Fee."
- Use "Maker" for casual references to MakerDAO and the Maker Protocol as a whole.
- Always distinguish the Maker Foundation from MakerDAO.

### Numbers

- Spell out numbers below 10.
  - **Examples:** one, two, three, etc.
- Use numerals for numbers above 10, unless starting a sentence.
- For numbers with million, billion, or trillion, use figures in all except casual cases.
  - **Standard:** "The nation has 1 million citizens."
  - **Casual:** "I'd like to make a billion dollars."

### Lists

When bulleted and numbered lists contain complete sentences, capitalize the first word, and follow each with a period. If list items are phrases, no capitalization or punctuation is required.

- Use [parallel construction](<https://en.wikipedia.org/wiki/Parallelism_(grammar)>) for each item in a list.
- Start with the same [part of speech](https://en.wikipedia.org/wiki/Part_of_speech) for each item (in this case, a verb).
- Use the same verb [tense](https://en.wikipedia.org/wiki/Grammatical_tense#English) for each item.
- Use the same [voice](<https://en.wikipedia.org/wiki/Voice_(grammar)>) for each item.
- Use the same sentence type (statement, question, exclamation) for each item.
- List items that include definitions should look like this:
  - **Team:** Core team and Advisors are critical to MakerDAO's success.
  - **Community**: Sentiment analysis is invaluable.
- Use dashes rather than asterisks for unordered lists.
  - **Correct:** `-`
  - **Incorrect:** `*`
- Alphabetize lists of names unless there is a clear priority at work.
- Do not use ordered (numbered) lists unless order matters.
- Ordered list items should use the `#1` repeated.
  - Markdown will automatically generate numbers.
  ```markdown
  1. Item 1
  1. Item 2
  1. Item 3
     1. Item 3a
     1. Item 3b
  ```

### Links

- Use [relative links](https://docs.microsoft.com/en-us/contribute/how-to-write-links) when cross-referencing files from the community development repository on MakerDAO's GitHub.
- Use [absolute links](https://docs.microsoft.com/en-us/contribute/how-to-write-links) and standard web URLs when referencing external resources.
- Create descriptive hyperlinks and avoid generic language.
  - **Descriptive:** Learn more at [Awesome-MakerDAO](link).
  - **Generic:** Learn more [here](link).
- When creating links for parallel translated documents, make sure to update relative links to reflect the correct heading.
  ````text
  en: faqs/cdp.md#what-are-collateralized-debt-positions
  es: faqs/es/cdp.md#qué-son-las-posiciones-de-deuda-colateralizadascdp
  ko: faqs/ko/cdp.md#부채-담보부-포지션collateralized-debt-positions-cdp이란-무엇인가요```
  ````

### Tables of Content

- Include a table of contents for documents that span several pages and multiple sections.
- Use the raw Markdown from the [Table of Contents](#table-of-contents) above as a template.
  - Be sure to include the line breaks `---` as well to keep formatting consistent.
- The table of contents should list relevant sections for easy navigation.

## Markdown Guide

MakerDAO documents posted on Github are written in Markdown, a text-to-HTML conversion tool for web writers.

- Learn the basics of Markdown:
  - [Daring Fireball](https://daringfireball.net/projects/markdown/)
  - [Markdown Syntax Guide](https://guides.github.com/features/mastering-markdown/)
  - [Practice Communicating Using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)

### Tips

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
  - Make sure to delete comments before submitting pull requests.
- Use an emoji to call attention to an important point, when necessary.
  - Practice discretion and use them sparingly.
  - This [cheat sheet](https://gist.github.com/rxaviers/7360908) lists emojis and their Markdown shortcuts.

#### VSCode

- Consider using Visual Studio Code and install the extensions below:
  - `Markdown Preview Enhanced`
  - `Markdown Linter`
  - `Code Spell Checker`
  - `GitLens`
  - `Prettier`
    - Prettier will auto-correct most Markdown mistakes.
- How to integrate GitHub with VSCode:
  - **Video:** [Up and Running with Visual Studio Code and GitHub](https://youtu.be/ghL-KlAhBnc)

## Contributor Best Practices

Writers and contributors familiar with MakerDAO and cryptocurrency basics will have a better sense of where to apply their skills best.

- Spend some time learning about MakerDAO's function, history, and any latest events before contributing.
- In-depth knowledge is appreciated but not required.

### Helpful Writing Tools

#### Text Editors

- [Grammarly](https://app.grammarly.com/): Mistake-free writing editor.
- [HemingwayApp](http://www.hemingwayapp.com/): Make writing bold and clear.

#### Word Choice

- [Thesaurus](https://www.thesaurus.com/): Synonyms.
- [Powerthesaurus](https://www.powerthesaurus.org/): Synonyms and phrase suggestions.
- [WordHippo](https://www.wordhippo.com/): Synonyms and phrase suggestions.

### Review Community Guides

Review the [contributor resources](README.md) before starting work on any MakerDAO Community Development project.

- Comm-Dev contributor guides outline writing standards and help simplify the writing process.

#### Contributor Onboarding Guide

- The [Contributor Onboarding Guide](contributor-onboarding-guide.md) introduces the process for contributing to MakerDAO’s Community Development resources.

#### Document-Specific Maintenance Guides

- Check for an associated maintenance guide before starting work on a given document.
- A document maintenance guide outlines standards to help Reviewers and contributors when maintaining a given resource.
  - The rules described within a document-specific maintenance guide supersede other guides.
  - If a discrepancy is glaring or unreasonable, bring the issue to an Advisor in [#community-development](https://chat.makerdao.com/channel/community-development) on MakerDAO's chat.

#### Contributor Tools

- The [Contributor Tools Guide](contributor-tools-guide.md) guide introduces the tools regularly used by Community Development.

### Express Interest

- Join the [#community-development](https://chat.makerdao.com/channel/community-development) channel on MakerDAO's chat and reach out to a Lead or an Advisor.
- Community team members and senior contributors help onboard new contributors.
  - Leads and Advisors consider a contributor’s strengths and abilities to help assign appropriate projects or tasks.
- Discuss personal interests and relevant skills to help determine a well-suited project.
- Provide relevant examples of past projects, work, and experience.
  - Demonstrate a reliable work ethic and offer quality work that speaks for itself.
  - Stand out by suggesting projects and adding insight to public discussions.

### Collaborate

- When accepting an assignment, be sure to collaborate early and often.
- Visit [#community-development](https://chat.makerdao.com/channel/community-development) regularly.
- Coordinate with other members.
  - Ask as many questions as necessary
  - Ask for feedback when stuck.
  - Provide frequent progress updates.
- Develop a plan that defines an approach for an assignment.
  - Produce a project outline.
  - Set achievable deadlines.
  - Assign and divide tasks with other contributors.
    - Multiple contributors should not start work on similar projects individually.

#### Track Progress

- Track projects and progress with GitHub [Issues](https://github.com/makerdao/community/projects/2).
  - Keep GitHub issues updated with comments and feedback.
- Take advantage of version history when working in HackMD or Google Docs.

#### Final Drafts and Submissions

- Let an Advisor know when a project is ready for final review.
- Transfer approved final drafts from Google Docs to HackMD.
- Submit completed projects for approval as [Pull Requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub.
  - Update any relevant issues and the project board on GitHub.
