# Executive Copy Drafting Principles

## Objectives

Your principal obligation as the writer of Executive Vote copy is to ensure **unquestionable legitimacy around the governance process**. 

The document below aims to provide guidelines on how to achieve this objective and:
- Guard against disruption and drama coming from ambiguity. 
- Ensure objectivity and eliminate any responsibility for bias. 
- Guard against accusations of obscuring, complicating, or manipulating information.
- Remove the risk that voters will regret their decision due to insufficient information and understanding.
- Make it easy for the voters to read, process, and interpret the information in the least possible time.

## Target Audience
You should tailor the form, style, and content of the Executive Vote copy to the needs of the average MakerDAO voter who is characterized by:
- Low to mid-level familiarity with MakerDAO and its context.
- Non-native familiarity with the English language.
- No technical knowledge. 
- Limited willingness to dedicate time and effort to the voting process.

## Principles

When drafting the Executive Vote copy, you need to make sure the document provides full **transparency**, is **comprehensive** in terms of information, and is **clear**, making it easy to read and unambiguous in interpretation.

### Transparency

Transparent Executive Vote copy provides the voters with **explicit, objective, and unobscured information** on the core elements of the proposal:
- [x] **Description** of each item included in the Executive vote, created by an unbiased and knowledgeable third party.
- [x] **Reasoning** for why each item is being included in the Executive Vote.
- [x] **Processes** that have led to each item being included in the Executive Vote.
- [x] **Identities** of those responsible for drafting, reviewing, publishing, and coding the Executive Vote.
- [x] **Authorization(s)** for inclusion of each item in the Executive Vote and clarity on where the approval power comes from.
- [x] Explanation of foreseeable **implications** of actions that will occur as a result of Executive Vote passing.

### Comprehensiveness

Comprehensive Executive Vote copy facilitates **access to all available auxiliary information** to enable voters to educate themselves to the level of detail they see necessary to vote (or not) in an informed way:
- [x] **Links to additional resources** not quoted (or only partially quoted) in the Executive Vote copy, but referring to the items to be voted on:
    * Documentation (legal agreements, white papers, audits, etc.)
    * Community discussion threads and forum posts.
    * Analyses published by DAO-funded entities.
    * Well-maintained resources describing the nature of any parameters that may be changed if the executive proposal passes.
    * Verified and legitimate resources from within and outside of the DeFi industry.

- [x] **Links to technical details**, if applicable. For non-urgent technical fixes or housekeeping, technical details can be included but should be given a low priority compared to other actions in the executive vote.

> [!IMPORTANT]
> Technical details **must be explicitly included** in the Executive Vote copy in the event of an **emergency or urgent response** (technical details might indeed be the _only_ relevant details in this case).

### Clarity

Clear Executive Vote copy is characterized by **smooth reading, reducing processing effort and confusion** through:
- [x] Concise, logical, and predictable **organization** of contents. 
- [x] Simple, easy-to-understand **language**, free of idiomatic expressions, localisms, etc.
- [x] Correct placement of **acronyms and other abbreviations**:
  - Introduce abbreviations in parentheses after their expanded form, e.g., _Governance AI Tools (GAIT)_.
  - Once the abbreviation has been introduced, use it exclusively, i.e., do not use the expanded form again.
- [x] **Explanation of new concepts** or inclusion of links (in case of more extensive definitions).
- [x] Consistent use of **repeating structures**: Do not reformulate sentences or change forms and structures provided by the template without a specific need to do so.
> [!IMPORTANT]
> For clear improvements in form or structure, make sure to update the template to maintain consistency in future Executive Vote copies.

- [x] **Standardization of formatting** as per the guidelines below:

|                     | General formatting |
|:-------------------:|:------------------ |
| Lists               | List items that are full sentences should end with a full stop.|
| Headers             | Except for uncapitalized technical terms and noninitial prepositions, every word in a header must be capitalized.|
| Newlines            | Newlines (N) must be wedged between headers (H), blocks of text (B), and lists (L): <br> H <br> **N** <br> H <br>**N** <br> B <br> **N** <br> L </br>|
| Markdown formatting | To avoid saturating the Markdown with the asterisk (\*), please note the following alternative formatting methods:<br> <li> Underscore (\_) instead of an asterisk (\*) for _italics_.<li> Double underscore (__ __) instead of a double asterisk (\**) for __bold__.<li> Hyphen (\-) or plus (\+) instead of an asterisk (\*) for unnumbered list items.</li> <br> See [GitHub _Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for more hints.</br>|

|                                           | Numbers and Quantities |
|:-----------------------------------------:| ---------------------- |
| Currency & mathematical/ technical values | Numbers quoted as a currency or in a mathematical/ technical context must always be used in their numerical form.<br><br> Amounts in stablecoins (DAI, USDC, etc.) must be quoted to the nearest unit. Amounts in MKR must be quoted to the second decimal place. When the amounts are mentioned as payments or other transfers, they must be marked in **bold**.<br><br><li>_**219,125** DAI will be transferred to Aave.<li>**209.17 MKR** will be distributed to qualified Aligned Delegates._</li><br>Other numerical values must be provided exactly as per the original post/ document they've been sourced from. No decimal point should be eliminated or added.<br><br><li>_`ttl`: 12 hours <li> The DSR will be set to 8% <li> Decrease from 8.25% to 7.25%._</li></br>|
| Other numbers                            | When not a currency amount or in a mathematical/ technical context, numbers must be spelled alphabetically up to twelve inclusively.<br><br><li>_Three weeks at most; 6 weeks at most <li> Twelve components; 13 components_</li></br>|
| Millions                                 | Numbers greater or equal to 1 million should be spelled out as long as the least non-zero decimal place is the ten thousand place.<br><br> <li>_1,000,000 = 1 million <li> 1,500,000 = 1,5 million <li> 1,550,000 = 1,55 million <li> 1,555,000 = 1,555,000_</li></br>|

|                     | Parameters |
|:-------------------:| -----------|
| New parameters      | When the parameter is established for the first time (e.g., when onboarding a new module or function), it must be quoted as:<br> `$parameter_name will be set to $value`</br><br><li>_Maximum Debt Ceiling will be set to 50 million DAI.<li>Ceiling Increase Cooldown will be set to 12 hours._</li></br> |
| Existing parameters | When the proposal refers to the modification of an existing parameter, the change must be quoted as:<br>`$parameter_name will be $change by $change_value from $original_value to **$new_value**`<br> The new value must be marked in **bold**.<br> In a set of parameters, all values should be listed, even if they remain unchanged.<br><br> <li>_Target Available Debt will be decreased by 20 million from 400 million to **380 million**. <li> DC-IAM line (max DC) remains unchanged at 10B._</li></br>| 
|Percentage change    |  Differences in numbers expressed as percentages must be fully spelled out.<br><br><li>_The DSR will decrease by 1 percentage point, from 8% to 7%._ </li><br> The percentage difference between two non-percentual numbers must be quoted as the `%` value.<br><li>_The supply of DAI will increase by 20% from 100,000 DAI to 80,000 DAI._</li><br> Note that typically deltas are specified as nominal and not percentual values, so this would be applicable only in exceptional cases.</br>|

|                                | Links |
|:------------------------------:| ----- |
| Ethereum Contracts & Addresses | When referencing Ethereum contracts or addresses of known entities, direct links to their respective pages on Etherscan should be provided for easy verification and exploration:<br><br><li> _Markdown for DS Proxy Factory:_ `[0xA26e15C895EFc0616177B7c1e7270A4C7D51C997](https://etherscan.io/address/0xA26e15C895EFc0616177B7c1e7270A4C7D51C997)`.</li></br>|
| Documents & Forum Threads      | When including links to the documentation (the Atlas, other MIPs, Maker Operational Manual, etc.) or to the forum threads:<br><br><li>For general information, readers should be directed to the header:<br>`https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261` <br>`https://mips.makerdao.com/mips/details/MIP113`</br><br><li>For reference to the specific section of the document or forum reply post, readers should be directed to that section/ post:<br> `https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261/2` <br>`https://mips.makerdao.com/mips/details/MIP113#1-1-1-4`</br><br><li>References to the user posting the link must be removed from the URL:</li>_Remove_ `2?u=blimpa` _from_ `https://forum.makerdao.com/t/governance-facilitators-transition-and-team-news/22261/2?u=blimpa`</br>|

> [!TIP]
> - Use the [VSCode extension markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) to detect inconsistencies and deviations from standard Markdown and suggest automated solutions.
> - Search for the `$` to make sure all template placeholders are replaced or, when not relevant, removed.
> - Make sure you provide a higher degree of detail for:
>   - Items with no antecedent polling.
>   - Complex and derived complex items (i.e., simple items that are a link in a long chain that configures a single complex operation).
> - Run a self-check to ensure the Executive Vote copy complies with the above principles.

