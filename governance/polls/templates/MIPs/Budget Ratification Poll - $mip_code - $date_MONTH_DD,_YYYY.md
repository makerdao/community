---
title: Budget Ratification Poll for $proposal_name ($mip_code) - $date_MONTH_DD,_YYYY
summary: $sentence_summary
discussion_link: $discussion_link
parameters:
  input_format:
    type: rank-free
    abstain: [0]
  victory_conditions:
    - {
        type: 'and',
        conditions: [
          { type : instant-runoff },
          { type : comparison, comparator : '>=', value: 10000 }
        ]
      }
    - { type : default, value : $reject_option }
  result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Approve existing budget only (business as usual)
   2: Approve increased budget
   3: Reject budget
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Budget Ratification Poll for $proposal_name ($mip_code) - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to $mip_code being accepted and implemented in the Maker Protocol by ranking their support of the following options:
* **Option 0:** Abstain.
* **Option 1:** Approve existing budget only (business as usual): $DAI_amount.
* **Option 2:** Approve increased budget: $DAI_amount.
* **Option 3:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*$paragraph_summary*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version]($link_to_github_commit_version)
* [Latest Proposal Version]($link_to_portal_version)
* [Proposal Discussion Thread]($discussion_link)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1 or Option 2 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The Arbitration Facilitators will confirm its passage by marking the proposal **Accepted** on the [MIPs portal](https://mips.makerdao.com/mips/list) and across all other relevant governance mediums.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
