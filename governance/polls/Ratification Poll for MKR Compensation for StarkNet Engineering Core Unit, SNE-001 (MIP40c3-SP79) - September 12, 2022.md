---
title: Ratification Poll for MKR Compensation for StarkNet Engineering Core Unit, SNE-001 (MIP40c3-SP79) - September 12, 2022
summary: MIP40c3-SP79 adds the MKR Compensation budget for Core Unit SNE-001 - Starknet Engineering Core Unit.
discussion_link: https://forum.makerdao.com/t/mip40c3-sp79-mkr-compensation-for-starkenet-engineering-core-unit-sne-001/17042
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
start_date: 2022-09-12T16:00:00
end_date: 2022-09-26T16:00:00
---
# Ratification Poll for MKR Compensation for StarkNet Engineering Core Unit, SNE-001 (MIP40c3-SP79) - September 12, 2022

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, September 12 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP79 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This proposal contains the MKR Compensation budget for the Core Unit SNE-001: Starknet Engineering Core Unit, also called SECU in this subproposal. This proposal is based on [Alternative MKR Compensation Guidelines](https://forum.makerdao.com/t/mip56-alternative-mkr-compensation-guidelines/9230) and benchmarked on the [Protocol Engineering Core Unit (PE-001) budget](https://forum.makerdao.com/t/mip40c3-sp68-modify-protocol-engineering-core-unit-budget-pe-001/13797)*.

*It provides an average of 135 MKR per FTE per year over 3 years with a 1-year cliff. In total, it provides 270 MKR to CU members per year over 3 years with a 1-year cliff.*

*The SECU is financed 50/50 by Maker and Starknet. The other half of the value of the incentive will be provided by Starknet with a mix of USD and Starknet tokens. The total value of the USD and Starknet token provided by Starknet CANNOT exceed the value of the MKR allocation in USD.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/e5489b072ba07875289a1ff36e5daf76d513ca05/MIP40/MIP40c3-Subproposals/MIP40c3-SP79.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP79)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp79-mkr-compensation-for-starkenet-engineering-core-unit-sne-001/17042)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, September 29.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
