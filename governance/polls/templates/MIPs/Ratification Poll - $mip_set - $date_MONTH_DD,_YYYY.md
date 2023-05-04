---
title: Ratification Poll for $mip_set - $date_MONTH_DD,_YYYY
summary: $sentence_summary_mip_set
discussion_link: $discussion_link
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 10000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---
# Ratification Poll for $mip_set - $date_MONTH_DD,_YYYY

The Arbitration Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to $mip_set being accepted and implemented in the Maker Protocol.

### $mip_code_1

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*($paragraph_summary)*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version]($link_to_github_commit_version)
* [Latest Proposal Version]($link_to_portal_version)
* [Proposal Discussion Thread]($discussion_link)

### $mip_code_2

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*($paragraph_summary)*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version]($link_to_github_commit_version)
* [Latest Proposal Version]($link_to_portal_version)
* [Proposal Discussion Thread]($discussion_link)

### $mip_code_3

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*$paragraph_summary*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version]($link_to_github_commit_version)
* [Latest Proposal Version]($link_to_portal_version)
* [Proposal Discussion Thread]($discussion_link)

### $mip_code_4

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*$paragraph_summary*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version]($link_to_github_commit_version)
* [Latest Proposal Version]($link_to_portal_version)
* [Proposal Discussion Thread]($discussion_link)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The Arbitration Facilitators will confirm its passage by marking the proposal **Accepted** on the [MIPs portal](https://mips.makerdao.com/mips/list) and across all other relevant governance mediums.
* Any further work required to implement these proposals will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
