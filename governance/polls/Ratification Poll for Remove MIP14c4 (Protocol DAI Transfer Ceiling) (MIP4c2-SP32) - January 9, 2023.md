---
title: Ratification Poll for Remove MIP14c4 (Protocol DAI Transfer Ceiling) (MIP4c2-SP32) - January 9, 2023
summary: MIP14c4 places a cap on the total amount of DAI that can be distributed through MIP14. Rather than dealing with sequential subproposals to raise the Protocol DAI Transfer Ceiling, or setting it to an arbitrarily high number that renders it useless, it makes more sense to simply remove this restriction.
discussion_link: https://forum.makerdao.com/t/mip4c2-sp32-remove-mip14c4-protocol-dai-transfer-ceiling/19093
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
start_date: 2023-01-09T16:00:00
end_date: 2023-01-23T16:00:00
---
# Ratification Poll for Remove MIP14c4 (Protocol DAI Transfer Ceiling) (MIP4c2-SP32) - January 9, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, January 9 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP4c2-SP32 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*With the coming transition to the Endgame state, GovAlpha is anticipating an increase in funding requests through [MIP14: Protocol DAI Transfer](https://mips.makerdao.com/mips/details/MIP14) and [MIP55: Special Purpose Fund](https://mips.makerdao.com/mips/details/MIP55). [MIP14c4](https://mips.makerdao.com/mips/details/MIP14#MIP14c4) places a cap on the total amount of DAI that can be distributed through MIP14. The number chosen, 250,000 DAI, is arbitrary and amendment requires a full Monthly Governance Cycle.*

*Consequently, a failure state exists where the sum of all fund requests in a Governance Cycle through MIP14 will exceed the ceiling and/or it will not be possible to raise with sufficient lead-time to distribute Maker Governance approved funds in a timely manner. Rather than dealing with sequential subproposals to raise the Protocol DAI Transfer Ceiling, or setting it to an arbitrarily high number that renders it useless, it makes more sense to simply remove this restriction.*

*The remaining content of MIP14 remains appropriate, in my opinion. There is no need to replace the whole MIP.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/ef0eda445eaacdb4409cf258b381eb944ad71c9a/MIP4/MIP4c2-Subproposals/MIP4c2-SP32.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP4c2SP32)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip4c2-sp32-remove-mip14c4-protocol-dai-transfer-ceiling/19093)
* [Amendment Pull Request](https://github.com/makerdao/mips/pull/726)

**Note if the concurrent vote to repeal MIP14 in its entirety is successful, the passage of this amendment will have no practical effect.**

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken, assuming that the vote for MIP4c4-SP2 is not successful:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, January 26.
* The above-referenced pull request will be merged into the MIPs repository.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).



