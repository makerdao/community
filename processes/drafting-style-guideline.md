# Style Guideline to Drafting Polls and Executive Votes

This document attempts to consolidate a style in which to draft polls and executive votes, and to list usual pitfalls so as to better avoid them.

## Ideal Output

Given a target audience defined as having the following characteristics:

- Being global. Some users do not speak English as their first language, some users do not live in the United States, et cetera.
- Having a low-mid to high level of familiarity with MakerDAO and its context at the moment of the vote.

Following this guideline should result in documents that:

- Contain sufficient information for the target audience to understand their contents and the foreseeable implications of their passing.
- Use simple language.
- Use consistent format and language for repeating structures.

## Language

### Global Considerations

It is better to use simple English that avoids idiomatic expressions, localisms, et cetera. Too much repetition may sound dull to native ears, but too much color may alienate non-native readers altogether.

### Abbreviations

Abbreviations must be introduced in parentheses after their expanded form, e.g., "Governance AI Tools (GAIT)". Additionally, once the abbreviation has been introduced, it must be used exclusively, i.e., the expanded form should not be used again.

### Numbers and Quantities

When not a currency amount or in a mathematical/technical context, numbers must be spelled alphabetically up to twelve inclusively, e.g.:

- "Three weeks at most", "twelve components", "13 components".
- "2 DAI", "1,000 DAI".
- "`ttl`: 12 hours".

Numbers greater or equal to 1 million should be so spelled as long as the least non-zero decimal place is the ten thousands place, e.g.:

- 1,000,000 = 1 million
- 1,500,000 = 1,5 million
- 1,550,000 = 1,55 million
- 1,555,000 = 1,555,000

## Format

> _We recommend using the [VSCode extension markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint), which will detect inconsistencies and deviations from standard Markdown and suggest automated solutions._

### Formatting Style

The asterisk (*) is overloaded in Markdown: It can be used to define lists, bolden text (when doubled), and italicize text. To minimize visual noise, we recommend using:

- Underscore (_) for _italics_.
- Double asterisk (**) for **bold**.
- Hyphen (-) for unnumbered list items.

### Lists

List items that are full sentences should end in a full stop.

### Links

#### Ethereum Contracts and Addresses

When referencing Ethereum contracts or addresses of known entities, it is advisable to provide direct links to their respective pages on Etherscan for easy verification and exploration. For example, when mentioning the DS Proxy Factory by address, the Markdown should be `[0xA26e15C895EFc0616177B7c1e7270A4C7D51C997](https://etherscan.io/address/0xA26e15C895EFc0616177B7c1e7270A4C7D51C997)`.

#### Forum Threads and Posts

When including links to the MakerDAO forum, it is preferred to direct readers to the topic header unless referencing a specific reply post. Consequently, generally choose [this](https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261) over [this](https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261/2) unless you have a strong reason not to.

Also remove URL references to the user who's sharing the link (yourself!): e.g, `https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261/2?u=blimpa` should be `https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261/2`.

### Headers

Excepting uncapitalized technical terms and noninitial prepositions, every word in a header must be capitalized.

### Newlines

Newlines (N) must be wedged between headers (H), blocks of text (B), and lists (L), e.g.:

> H\
> **N**\
> H\
> **N**\
> B\
> **N**\
> L

## Usual Pitfalls and General Recommendations

- Search for "?". This symbol is used for placeholders in the templates. Make sure none is left unreplaced, or remove them when they are not relevant.
- For items with no antecedent polling, it is important to go into detail.
- It's also important for complex and derived complex items (e.g., simple items that are however a link in a long chain that configures a single complex operation).
