---
title: Ratification Poll for Restart a daily $100 Micro-Burn of MKR in Show of Good Faith to MKR Holders (MIP74c1-SP1) - February 13, 2023
summary: Restart a micro-burn of MKR, at $100/day, from the surplus buffer as a display to current and prospective MKR holders that the protocol still intends to embrace this important feature of driving long-term value and return on investment to MKR holders.
discussion_link: https://forum.makerdao.com/t/mip74c1-sp1-restart-a-100-day-micro-burn-of-mkr-in-show-of-good-faith-to-mkr-holders/19027
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
start_date: 2023-02-13T16:00:00
end_date: 2023-02-16T16:00:00
---
# Ratification Poll for Restart a daily $100 Micro-Burn of MKR in Show of Good Faith to MKR Holders (MIP74c1-SP1) - February 13, 2023

The Governance Facilitators have placed a short ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP16](https://mips.makerdao.com/mips/details/MIP16). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, February 13 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP71c1-SP1 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*As a community, I believe that we know a core part of the appeal of holding MKR tokens is the “burn” feature that should drive value to MKR holders over time. It makes sense why that feature is turned off right now… but I fear that if it is turned off for too long, current and especially prospective MKR investors may forget that it is a feature all together. At $100/day, the impact on our surplus buffer is not a material amount. Additionally, if we as a community believe that Maker is going to be successful, buying the MKR token at these price points should yield a beneficial return over the coming years.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/e6502bfcaff834ac101734d55c3b8e0e74da5f4d/MIP74/MIP74c1-Subproposals/MIP74c1-SP1.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP74c1SP1)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip74c1-sp1-restart-a-100-day-micro-burn-of-mkr-in-show-of-good-faith-to-mkr-holders/19027)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, February 16.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
