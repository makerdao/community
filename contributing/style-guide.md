# Content Best Practices

## Text, Tone, and Grammar

* Use short, concise sentences
* Avoid speaking directly to the user in tutorials or FAQs. I.e. No: 'You then..', 'Now you should...'
* Use basic language, remove all words that aren't absolutely required
* Assume user has no knowledge of the system, link to basic terms if needed
* Use pluralized, gender neutral personal pronouns, "When they...", "If users choose to X, then they're..." instead of "he or she"
* Use oxford commas
* Remain objective and open
* Assume users have zero knowledge about the system and begin with basics
* Be concise, people have little time to browse
* Provide examples when possible, do not complicate them with arbitrarily complex numbers
* Explain with math when needed, otherwise keep it simple
* No em or en dashes `—`
* Never refer to Purple Paper names (flip, flap, flop, etc) in the documentation

## Markdown

### Lists

* Start with a capital letter and no final punctuation unless the list starts with a stem sentence.
* Avoid numbered lists unless it's an index or table of contents
* Alphabetize all ordered lists of names unless there is a clear priority at work
* All unordered list items are `*` not `-`
* All ordered list items should use the #1 repeated:
    ```markdown
    1. Item 1
    2. Item 2
    3. Item 3
       1. Item 3a
       2. Item 3b
    ```
* Consider using Visual Studio Code and install:
  * `Markdown Preview Enhanced`, `Markdown Linter`, `Code Spell Checker`

### General

* Line breaks above and below headings
* Do not make multiple top level headings. Only use '#' once per document
* Ensure there is a single hard return at the end of the file
* Ensure the SUMMARY.md file is updated for every document that should show up in Gitbook

### File Names

* Filenames contain information specific to the content of the file. Context is provided from the directory or through the presentation layer.
    `meeting-summary-ep-01.md`, not `scientific-governance-and-risk-meeting-summary-ep-01.md`
* All filenames are lowercase and words are separated with `-`
  * Example: `meeting-transcript-ep-01.md`

## Github

* Ensure your repository is up to date
* Discuss your efforts in #community-development
* Ask for feedback before starting a long project
* Make descriptive commit messages
  * "Fixed something" = Bad
  * "Fixed spelling mistakes in filename.md" = Good

## FAQ Style Guide

* Always use relative links 
* Look for terms to add to the [Glossary](../faqs/glossary.md)
* Important numbers should be bold: "A CDP exists with **1000** DAI Stability Debt"
* List items that include definitions should look like this:
  * **Team:** Core team and advisors.
  * **Community**: Sentiment analysis.
* Formulas should be wrapped in inline code blocks
* First example defines the terms:
    `(((Total Stability Debt in DAI * (1 + Current Governance Fee in decimal format)) ^ (Age of Stability Debt in days/365)) * Total Stability Debt in DAI ) = Total Governance Debt owed in DAI`
* Second example contains the numbers and the result:
    `(1000 * (1 + 0.005) ^ (30÷365)) * 1000 = 0.410018954 DAI`
* Examples, tips, tricks and notes should be wrapped in code fencing when formatting needs to be preserved or color coding is useful.
    ```markdown
    Note: Liquidation is bad. Don't be liquidated.
    ```
    Otherwise:
    > use a quote

### Complex Topics

* Include parameters for reference

    | CDP Settings |Value |
    |--|--|
    | MKR Price via Oracle Feed | 100 |
    | ETH Price via Oracle Feed | 200 |

* Provide an easy-to-follow example or a user story
* Add example formulas where they further the discussion and/or for advanced topics

### Sample Values

* Use the same values for system Globals and Risk Parameters in all examples. This lowers the cognitive load required to parse the numbers
* These are the defaults, copy and paste from here:

    | CDP Settings |Value |
    |--|--|
    | MKR Price via Oracle Feed | 100 |
    | Total Stability Debt in DAI | 1000 |
    | Age of Stability Debt in days | 30 |
    | Governance Fee | 0.50% |
    | Liquidation Penalty | 13.0% |
    | Spread (Bust/Boom) | -3.0% |
    | Stability Fee | 0.0% |
    | Target Rate | 0.0%  |

## Naming Conventions and Proper Nouns

### Tokens

* If you are directly referring to the creation, destruction, manipulation of the token (particularly as it relates to tooling) use the capitalized TLA version: `DAI`. In the same manner you would refer to an exchange pair, `DAI/ETH`
* If you are referencing it as a currency, in an instructional or conversational setting, or as a conceptual product of the foundation or its systems, it should be `Dai`.
