# Content Best Practices

## Text, Tone, and Grammar

### General Do's and Don'ts

#### Yes

- Run all your final drafts through Grammarly
- Use short, concise sentences
- Use basic language, remove all words that aren't absolutely required
- Assume user has no knowledge of the system, link to basic terms if needed
- Use pluralized, gender neutral personal pronouns, "When they...", "If users choose to X, then they're..." instead of "he or she"
- Use oxford commas
- Remain objective and open
- Be concise, people have little time to browse
- Provide examples when possible, do not complicate them with arbitrarily complex numbers
- Explain with math when needed, otherwise keep it simple
- Do not spell out "percent”; use the symbol (e.g., 15% not 15 percent)

#### No

- No exclamation points!!!
- Speaking directly to the user in tutorials or FAQs. I.e. No: 'You then..', 'Now you should...'
- No em or en dashes `—`
- Never refer to Purple Paper names (flip, flap, flop, etc) in the documentation
- Footnotes
- Curly quotes `“`, use the plaintext version: `"`

### Numbers

- Spell out numbers below 10 (e.g., one, two, three).
- Use numerals for numbers above 10, except when they begin a sentence.
- Use figures with million, billion, and trillion in all except casual uses (e.g., I'd like to make a billion dollars; the nation has 1 million citizens).

### Currency Amounts

- Dollars: Use lowercase except when writing "US Dollar.”:
  - Use figures and the \$ sign in all except casual references or amounts without a figure (e.g., the book cost \$4; please give me a dollar).
  - For amounts less than \$1 million: \$4, \$25, \$500, \$1,000, \$650,000.
  - For amounts over \$1 million, use the word not numerals (e.g., He is worth \$4 million NOT He is worth \$4,000,000).

### Acronyms

- When making an acronym plural, simply add an "s" (e.g., CDPs).

### Decades

- Do not use an apostrophe when indicating decades (e.g., the 1990s not the 1990’s).

## Markdown

> :exclamation: Save yourself some trouble and just use VSCode and install the Prettier extension... It will auto-correct 90% of your markdown mistakes.

### Lists

When bulleted and numbered lists contain complete sentences, capitalize the first word and follow each with a period. If list items are phrases, no capitalization and punctuation are needed. Also:

- Use parallel construction for each item in a list.
- Start with the same part of speech for each item (in this example, a verb).
- Use the same verb tense for each item.
- Use the same voice (typically active) for each item.
- Use the same sentence type (statement, question, exclamation) for each item.
- Alphabetize all lists of names unless there is a clear priority at work.
- Use dashes instead of asterisks for unordered lists. I.e.`-` not `*`.
- Don't use an ordered (numbered) list unless the order matters.
- All ordered list items should use the #1 repeated:

  ```markdown
  1. Item 1
  1. Item 2
  1. Item 3
     1. Item 3a
     1. Item 3b
  ```

### General

- Consider using Visual Studio Code and install:
  - `Markdown Preview Enhanced`, `Markdown Linter`, `Code Spell Checker`, `Prettier`, `GitLens`
- Line breaks above and below headings
- Do not make multiple top level headings. Only use '#' once per document
- Don't use the same heading twice, it breaks auto-generated navigation
- No trailing spaces
- Ensure there is a single hard return at the end of the file
- **Ensure the [SUMMARY.md](../SUMMARY.md) file is updated for every document that should show up in GitBook**

### File Names

- Filenames contain information specific to the content of the file. Context is provided from the directory or through the presentation layer.
  `meeting-summary-ep-01.md`, not `scientific-governance-and-risk-meeting-summary-ep-01.md`
- All filenames are lowercase and words are separated with `-`
  - Example: `meeting-transcript-ep-01.md`

## GitHub

- Ensure your repository is up to date
- **Commit early and often.** Get your changes in before you have to do a huge merge.
- Discuss your efforts in [#community-development](https://chat.makerdao.com/channel/community-development)
- Ask for feedback before starting a long project
- Make descriptive commit messages

  - "Fixed something" = Bad
  - "Fixed spelling mistakes in filename.md" = Good

## Links

- Use descriptive hyperlinks
  - **No:** Learn more [here](link).
  - **Yes:** Learn more at [awesome-makerdao](link)
- When creating links for parallel translated documents, always make sure to update the relative links to reflect the correct heading.

  ```text
  en: faqs/cdp.md#what-are-collateralized-debt-positions
  es: faqs/es/cdp.md#qué-son-las-posiciones-de-deuda-colateralizadascdp
  ko: faqs/ko/cdp.md#부채-담보부-포지션collateralized-debt-positions-cdp이란-무엇인가요
  ```

## FAQ Style Guide

- Always use relative links
- Look for terms to add to the [Glossary](../faqs/glossary.md)
- Important numbers should be bold: "A CDP exists with **1000** DAI Stability Debt"
- List items that include definitions should look like this:
  - **Team:** Core team and advisors.
  - **Community**: Sentiment analysis.
- Formulas should be wrapped in inline code blocks
- First example defines the terms:
  `(((Total Stability Debt in DAI * (1 + Current Governance Fee in decimal format)) ^ (Age of Stability Debt in days/365)) * Total Stability Debt in DAI ) = Total Governance Debt owed in DAI`
- Second example contains the numbers and the result:
  `(1000 * (1 + 0.005) ^ (30÷365)) * 1000 = 0.410018954 DAI`
- Examples, tips, tricks and notes should be wrapped in code fencing when formatting needs to be preserved or color coding is useful.

  ```markdown
  Note: Liquidation is bad. Don't be liquidated.
  ```

  Otherwise:

  > use a quote

### Complex Topics

- Include parameters for reference

  | CDP Settings              | Value |
  | ------------------------- | ----- |
  | MKR Price via Oracle Feed | 100   |
  | ETH Price via Oracle Feed | 200   |

- Provide an easy-to-follow example or a user story
- Add example formulas where they further the discussion and/or for advanced topics

### Sample Values

- Use the same values for system Globals and Risk Parameters in all examples. This lowers the cognitive load required to parse the numbers
- These are the defaults, copy and paste from here:

  | CDP Settings                  | Value |
  | ----------------------------- | ----- |
  | MKR Price via Oracle Feed     | 100   |
  | Total Stability Debt in DAI   | 1000  |
  | Age of Stability Debt in days | 30    |
  | Governance Fee                | 0.50% |
  | Liquidation Penalty           | 13.0% |
  | Spread (Bust/Boom)            | -3.0% |
  | Stability Fee                 | 0.0%  |
  | Target Rate                   | 0.0%  |

## Naming Conventions and Proper Nouns

### Tokens

- If you are directly referring to the creation, destruction, manipulation of the token (particularly as it relates to tooling) use the capitalized TLA version: `DAI`. In the same manner you would refer to an exchange pair, `DAI/ETH`
- If you are referencing it as a currency, in an instructional or conversational setting, or as a conceptual product of the foundation or its systems, it should be `Dai`.
