---
title: Ratification Poll for Amend MIP61 to tighten up Recognized Delegate Participation Metrics (MIP4c2-SP29) - January 9, 2023
summary: This amendment proposes two changes to the Recognized Delegate Compensation MIP. (i) Setting a minimum threshold of non-abstaining votes for compensation eligibility and (ii) increasing the participation requirements in the case of executive votes. This Ratifcation Poll uses Ranked Choice Voting.
discussion_link: https://forum.makerdao.com/t/mip4c2-sp29-amend-mip61-to-tighten-up-recognized-delegate-participation-metrics/18696
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
        - {type : default, value : 4 }
    result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Approve only the Abstain Modifier
   2: Approve only the Higher Participation Requirements and Weighting for Executive Votes
   3: Approve both
   4: Reject both changes
start_date: 2023-01-09T16:00:00
end_date: 2023-01-23T16:00:00
---
# Ratification Poll for Amend MIP61 to tighten up Recognized Delegate Participation Metrics (MIP4c2-SP29) - January 9, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, January 9 at 16:00 UTC.

**This is an instant-runoff vote.** 
- **You may rank any number of options that you support.** 
- **Unranked options signal that you do not support those options.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP4c2-SP29 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This Amendment Subproposal aims to change two aspects of the current Recognized Delegate Compensation MIP:*

***Abstain Modifier***
*In the current form, [MIP61](https://mips.makerdao.com/mips/details/MIP61) treats participation in on-chain polls uniformly, regardless of the vote Recognized Delegates are casting. This Amendment removes the eligibility for compensation if a Recognized Delegate fails to meet a threshold of non-abstaining votes.*

***Higher Participation Requirements and Weighting for Executive Votes***
*For security and operational issues surrounding Executive Votes, participation on these should have a higher weight compared to on-chain polls and more strict requirements on timing.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/9f0e2c6af07583cd57a8d442e71b7ceba80c6185/MIP4/MIP4c2-Subproposals/MIP4c2-SP29.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP4c2SP29)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip4c2-sp29-amend-mip61-to-tighten-up-recognized-delegate-participation-metrics/18696)
* [Abstain Modifier Pull Request](https://github.com/makerdao/mips/pull/698)
* [Executive Vote Changes Pull Request](https://github.com/makerdao/mips/pull/699)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1, Option 2, or Option 3 achieve a majority AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, January 26.
* The relevant Pull Request(s) will be merged into the MIPs repository.
* GovAlpha will use the new modifiers and parameters for calculating Delegate Compensation, starting with payments for January 2023.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).

