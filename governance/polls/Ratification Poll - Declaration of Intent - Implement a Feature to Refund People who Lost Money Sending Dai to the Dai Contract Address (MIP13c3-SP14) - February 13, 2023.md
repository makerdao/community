---
title: Ratification Poll - Declaration of Intent - Implement a Feature to Refund People who Lost Money Sending Dai to the Dai Contract Address (MIP13c3-SP14) - February 13, 2023
summary: This MIP proposes that people who passively and permanently lock Dai in the Dai contract have the ability to get their funds back.
discussion_link: https://forum.makerdao.com/t/mip13c3-sp14-implement-a-feature-to-refund-people-who-lost-money-sending-dai-to-the-dai-contract-address/19605
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
end_date: 2023-02-27T16:00:00
---
# Ratification Poll - Declaration of Intent - Implement a Feature to Refund People who Lost Money Sending Dai to the Dai Contract Address (MIP13c3-SP14) - February 13, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on Monday, February 13 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP13c3-SP14 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This MIP proposes that people who passively and permanently lock Dai in the Dai contract have the ability to get their funds back. If people transfer their Dai to the contract address, and the contract address has the characteristic of being permanently non-transferable, then we regard it as permanently destroyed. When the Dai is regarded as permanently destroyed, it will be issued to the transferrer through the mint function in the smart contract. Maker should offer some kind of support for Dai sent to the contract — maybe with a 10% penalty to discourage abuse.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/98f023555b291640d954967a5cb50bdd442c14fd/MIP13/MIP13c3-Subproposals/MIP13c3-SP14.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP13c3SP14)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip13c3-sp14-implement-a-feature-to-refund-people-who-lost-money-sending-dai-to-the-dai-contract-address/19605)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, March 2.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
