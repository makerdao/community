---
title: $ScopeName Scope Clarification Edits - $date_MONTH_DD,_YYYY
summary: Signal your support or opposition to the listed edits to the $ScopeName Scope.
discussion_link: $discussion_link
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Poll: $ScopeName Scope Clarification Edits - $date_MONTH_DD,_YYYY

The $poll_deployers have placed a Governance Poll into the voting system using their powers defined in [MIP113.12.1.2](https://mips.makerdao.com/mips/details/MIP113#12-1-2). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the changes in the following Github Pull Request:
* [Amendment Pull Request]($pull_request_link).

Please review the discussion [thread]($discussion_link) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The proposed changes will be merged into the $ScopeName Scope Framework.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
