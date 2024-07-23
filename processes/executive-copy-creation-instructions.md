# Executive Copy Creation Instructions

## Prepare GitHub

1. Sync Community Git.
   
3. Ensure you are working from the latest master branch.

4. Create a new branch in the [Community repo](https://github.com/makerdao/community). Use the following naming convention:
    - `Exec Doc YYYY-MM-DD`, inserting the date of the Executive Vote, e.g., _Exec Doc 2024-07-12_

5. On the newly created branch, create a new Markdown (.md) document under `/governance/votes`. Use the following naming convention:
      - `Executive vote - M DD, YYYY`, where `M` is the name of the month, e.g., _Executive vote - July 12, 2024_.

6. Copy the contents of the [Executive Copy Template](https://github.com/makerdao/community/blob/master/governance/votes/templates/Executive%20vote%20-%20%24date_MONTH_DD%2C_YYYY.md) into the empty file.

## Prepare Executive Contents

6. Review the associated [Executive Contents (EC) sheet](https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?pli=1#gid=1593813984).
    - Ensure you are reading the tab corresponding to the date of the Executive Vote you are preparing.
    - Ensure you cover all items in the Executive Vote copy as per the Executive Template (see below).

7. Fill in the [Executive Template](https://github.com/makerdao/community/blob/master/governance/votes/templates/Executive%20vote%20-%20%24date_MONTH_DD%2C_YYYY.md) as follows:

### Header

|            | `$executive_title - $date_MONTH_DD,_YYYY` |
| ---------- | :---------------------------------------- |
| Guidelines | List all the items from the [EC sheet](https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?pli=1#gid=1593813984) classified as *Input* type, formulating them as **capitalized titles** separated by a comma. Order the items by judged impact/ importance (if different from the order in the EC sheet, match the sheet to your order). <br>Insert the date of the Executive Vote, where the `$date` is removed and `MONTH` is spelled out with the first letter capitalized.</br>|
| _Example_  | _Aave-SparkLend Revenue Share Payment, Keeper Network Address Update, Stability Scope Parameters, June 2024 AD Compensation, Spark Proxy Spell - July 11, 2024_

|            | `$summary` |
| ---------- | :--------- |
| Guidelines | Repeat the list from the `$executive_title` making the items **actionable** and adding **high-level details**, if applicable. Use capital letters for names and  concepts only.|
| _Example_  | _Transfer Dai to Aave as part of the SparkLend revenue sharing agreement, update the Chainlink Keeper Network Treasury Address, change Stability Fee and DSR as per the Stability Scope, and trigger a Spark Proxy Spell._

|            | `$YYYY-MM-DDT00:00:00.000Z` |
| ---------- | :-------------------------- |
| Guidelines | Insert the **date of the Executive Vote** as per the indicated format. The exact time is not required. Please leave the **time at midnight**.|
| _Example_  | _2024-07-11T00:00:00.000Z_|


|            | `$spell_address`|
| ---------- | :-------------- |
| Guidelines | Leave the line as is to serve as a placeholder as the address of the Executive Vote spell is not known at this stage. You will update it once it's provided by the technical team later in the process (see step 13).|
| _Example_  | _0x452a39C34f9539E0d50C9e33Ad423a15C6f45df4_|

|            | `$exec_publishers`|
| ---------- | :---------------- |
| Guidelines | Insert the entity **publishing** the Executive Vote copy on the voting portal. This is usually the responsibility of the Governance Facilitators.|
| _Example_  | _The **Governance Facilitators** and Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system_|

|            | `$exec_crafters_and_reviewers`|
| ---------- | :---------------------------- |
| Guidelines | Insert the entities responsible for **writing and reviewing the code** for the Executive Vote.|
| _Example_  | _The Governance Facilitators and **Dewiz, Sidestream, and Phoenix Labs** have placed an executive proposal into the voting system._|

### Executive Summary

|            | `$executive_action_description_`|
| ---------- | :------------------------------ |
| Guidelines | List the key **actions** that will occur if the Executive Vote passes using future simple tense. Make sure you adhere to the [Executive Copy Drafting Principles](https://github.com/makerdao/community/blob/master/processes/drafting-style-guideline.md) for correct formatting (reflected in the example below).|
| _Example_  | _If this executive proposal passes, the following **actions** will occur within the Maker Protocol:<ul><li>**219,125** DAI will be transferred to Aave as part of the Aave-SparkLend Revenue Sharing Agreement.</li><li>The Chainlink Keeper Network Treasury Address will be updated.</li><li>Multiple Stability Fees and the DSR will be updated.</li><li>**209.17 MKR** will be distributed to qualified Aligned Delegates.</li><li>A Spark Proxy Spell will be triggered at `[0x91824fa4fd51E8440a122ffDd49C701F5C56D58e](https://etherscan.io/address/0x91824fa4fd51E8440a122ffDd49C701F5C56D58e).`</li></ul>_

|            | `GSM Pause Delay`|
| ---------- | :--------------- |
| Guidelines | Leave this sentence in place if the items are affected by the `GSM Pause Delay`. If some items fall under GSM exceptions, clearly point them out. Make sure the duration of the `GSM Pause Delay` in the copy is up to date as per the [Atlas](https://mips.makerdao.com/mips/details/MIP113#10-1-1a) and marked in bold.|
| _Example_  | _Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the actions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**._| 

|            | `$OfficeHours?`|
| ---------- | :------------- |
| Guidelines | Leave this sentence in place if the `Office Hours` in the [EC sheet](https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?pli=1#gid=1593813984) field is marked as required. If there is no requirement for `Office Hours`, remove the sentence.  The details of office hours should be marked in **bold** as per the example below.|
| _Example_  | _This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**._| 

|            | `Proposal Expiry`|
| ---------- | :--------------- |
| Guidelines | The Executive Vote proposal usually carries an expiry deadline. Ensure that the `Proposal Expiry` timeline is correct and up to date.|
| _Example_  | _If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol._| 
 
### Proposal Details

|            |`$executive_entry_`|
| ---------- | :---------------- |
| Guidelines | Specify the entries one by one exactly as stated in the `$executive_title`.|
| _Example_  | _Aave-SparkLend Revenue Share Payment_|

|            |`$link_to_approval`|
| ---------- | :---------------- |
| Guidelines | Provide the link(s) to the documentation clearly showing relevant **Authorization** approving the inclusion of the item in the Executive Vote (see the _Authority URL_ in the [EC sheet](https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?pli=1#gid=1593813984)).|
| _Example_  | _**Authorization**:_ `[Support Scope 9.4.1](https://mips.makerdao.com/mips/details/MIP106#9-4-1-spark-protocol-aave-revenue-share)`

|            |`$link_to_proposal`|
| ---------- | :---------------- |
| Guidelines | Provide the link to the last version of the **Proposal** presenting the item and providing reasoning for including it in the Executive Vote (see the _Reasoning URL_ in the [EC sheet](https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?pli=1#gid=1593813984)).|
| _Example_  | _**Proposal**_: `[Forum post](https://forum.makerdao.com/t/spark-aave-revenue-share-calculation-payment-4-q2-2024/24572)` 

|            |`$executive_entry_description_`|
| ---------- | :---------------------------- |
| Guidelines | Provide a high-level overview of **all actions** contained in the Proposal, framing them in future-conditional tense (_IF this executive proposal passes, THEN this action will happen_).<br></br>Include **required hyperlinks**, where applicable and available:<br><li>Links to Ethereum and IPFS addresses.</li><li>Links to any analysis that has been published by DAO-funded entities.</li><li>Links to well-maintained resources describing the nature of any parameters that may be changed if the executive proposal passes.</li><li>Any other links providing additional checks, references, or further context surrounding the inclusion of the item in the executive proposal.<ul>|
| _Example_  | _If this executive proposal passes, a payment of **219,125 DAI** will be made to a smart contract controlled by Aave Governance at `[0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c)` as part of the Aave-SparkLend Revenue Share._


8. Review the completed draft against
    - The [Executive Copy Drafting Principles](https://github.com/makerdao/community/blob/master/processes/drafting-style-guideline.md).
    - The [Executive Copy Creation Checklist](https://github.com/makerdao/community/blob/master/processes/executive-copy-creation-checklist.md).

## Submit Pull Request

9. Commit changes, and create a Pull Request (PR) to the Community GitHub repository.

10. Inform the Reviewer(s) that the Executive Vote copy is ready for their review. 

11. Merge the approved Executive Vote copy PR.

12. Inform technical teams that the copy is ready and provide the link.

13. Once technical teams have provided a spell address, add it to the Executive Vote copy.

## Post Executive Vote

14. Update the proposals.json to set the active proposal on [MakerDAO voting portal](vote.makerdao.com).

15. Refresh portal cache (DUX/Jetstream can provide the password).

16. Inform the community that the new Executive Vote has been posted.
