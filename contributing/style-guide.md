# Content Best Practices

## Text, Tone, and Grammar

### General Do's and Don'ts

#### Yes

- Run all final drafts through Grammarly
- Use short, concise sentences
- Use basic language; remove non-essential words
- Assume users have no knowledge of the system; link to basic terms if needed
- Use pluralized, gender neutral pronouns; use "they/their" instead of "he/she/his/hers." (e.g., "When they...," "If users choose to X, then they're...")
- Use oxford commas
- Remain open and objective
- Be concise; people have little time to browse
- Provide examples when possible; do not complicate them with arbitrarily complex numbers
- Explain with math when needed; otherwise keep it simple
- Do not spell out “percent”; use the symbol (e.g., "15%" instead of "15 percent")

#### No

- Exclamation points
- [Second person language](https://www.grammar-monster.com/glossary/second_person.htm) in tutorials or FAQs (i.e., 'You then..', 'Now you should...')
- Em or en dashes `—`
- References to Purple Paper names (flip, flap, flop, etc.) in the documentation
- Footnotes

### Numbers

- Spell out numbers below 10 (e.g., one, two, three...)
- Use numerals for numbers above 10, except when starting a sentence
- Use figures with million, billion, and trillion in all except casual uses (e.g., "I'd like to make a billion dollars" vs. "the nation has 1 million citizens")

### Currencies

- Dollars: Use lowercase except when writing “US Dollar”
- Otherwise: Use figures and the $ sign in all except casual references or sums without a figure (e.g., "the book cost $4" vs. "please give me a dollar")
- For sums less than $1 million: $4, $25, $500, $1,000, $650,000
- For sums over $1 million, use the word, not numerals (e.g., "He is worth $4 million" instead of "He is worth $4,000,000")

### Acronyms

- When making an acronym plural, simply add an “s” (e.g., CDPs)

### Decades

- Do not use apostrophes to indicate decades (e.g., "the 1990s" not the "1990’s")

## Markdown

> :exclamation: Save yourself some trouble. Use VSCode and install the Prettier extension. It will auto-correct 90% of your markdown mistakes.

### Lists

- Start with a capital letter; no final punctuation unless the list starts with a stem sentence
- Avoid numbered lists unless it's an index or table of contents
- Alphabetize all ordered lists of names unless there is a clear priority at work
- All unordered list items are `-` not `*`
- Don't use an ordered list unless order matters
- All ordered list items should use the #1 repeated:

  ```markdown
  1. Item 1
  2. Item 2
  3. Item 3
     1. Item 3a
     2. Item 3b
  ```

### General

- Consider using Visual Studio Code and install:
  - `Markdown Preview Enhanced`, `Markdown Linter`, `Code Spell Checker`, `Prettier`, `GitLens`
- Include line breaks above and below headings
- Do not make multiple top level headings; only use '#' once per document
- Do not use the same heading twice; it breaks auto-generated navigation
- Do not leave trailing spaces
- Ensure there is a single hard return at the end of the file
- **Ensure the [SUMMARY.md](../SUMMARY.md) file is updated for every document that should show up in GitBook**

### File Names

- Filenames contain information specific to the file's contents. Context is provided from the directory or through the presentation layer: `meeting-summary-ep-01.md` instead of `scientific-governance-and-risk-meeting-summary-ep-01.md`
- All filenames are lowercase and words are separated with `-`
  - Example: `meeting-transcript-ep-01.md`

## GitHub

- Ensure repositories are up to date
- **Commit early and often;** submit changes before large merges
- Discuss efforts in [#community-development](https://chat.makerdao.com/channel/community-development)
- Ask for feedback before starting a long project
- Make descriptive commit messages:

  - "Fixed something" = Bad
  - "Fixed spelling mistakes in filename.md" = Good

## Links

- When creating links for parallel translated documents, make sure to update relative links to reflect the correct heading:

  ```
  en: faqs/cdp.md#what-are-collateralized-debt-positions
  es: faqs/es/cdp.md#qué-son-las-posiciones-de-deuda-colateralizadascdp
  ko: faqs/ko/cdp.md#부채-담보부-포지션collateralized-debt-positions-cdp이란-무엇인가요
  ```

## FAQ Style Guide

- Always use relative links
- Look for terms to add to the [Glossary](../faqs/glossary.md)
- Important numbers should be bold: "A CDP exists with **1000** DAI Stability Debt"
- List items that include definitions should look like this:
  - **Team:** Core team and advisors
  - **Community**: Sentiment analysis
- Warp formulas in inline code blocks
- First example defines the terms:
  `(((Total Stability Debt in DAI * (1 + Current Governance Fee in decimal format)) ^ (Age of Stability Debt in days/365)) * Total Stability Debt in DAI ) = Total Governance Debt owed in DAI`
- Second example contains the numbers and the result:
  `(1000 * (1 + 0.005) ^ (30÷365)) * 1000 = 0.410018954 DAI`
- Wrap examples, tips, tricks and notes in code fencing when formatting or color coding needs to be preserved:
  ```markdown
  Note: Liquidation is bad. Don't be liquidated.
  ```

  Otherwise:

  >Use a quote

### Complex Topics

- Include parameters for reference:

  | CDP Settings              | Value |
  | ------------------------- | ----- |
  | MKR Price via Oracle Feed | 100   |
  | ETH Price via Oracle Feed | 200   |

- Provide an easy-to-follow example or a user story
- Add example formulas for advanced topics and/or if they further discussion

### Sample Values

- Use same values for system Globals and Risk Parameters in all examples; this lowers cognitive load required to parse numbers
- These are the defaults; copy and paste from here:

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

- If directly referring to the creation, destruction, or manipulation of the token (particularly as it relates to tooling), use the capitalized TLA version: `DAI`; in the same manner, refer to exchange pairs: `DAI/ETH`
- If referencing as a currency, in an instructional or conversational setting, or as a conceptual product of the foundation or its systems, use: `Dai`
