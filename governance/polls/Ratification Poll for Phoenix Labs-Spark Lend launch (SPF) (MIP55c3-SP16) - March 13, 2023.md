---
title: Ratification Poll for Phoenix Labs - Spark Lend Launch (SPF) (MIP55c3-SP16) - March 13, 2023
summary: This SPF requests 347,100 DAI for all expenses to launch Spark Lend and maintain it for a year.
discussion_link: https://forum.makerdao.com/t/mip55c3-sp16-phoenix-labs-spark-lend-launch/19734
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
start_date: 2023-03-13T16:00:00
end_date: 2023-03-27T16:00:00
---
# Ratification Poll for Phoenix Labs - Spark Lend Launch (SPF) (MIP55c3-SP16) - March 13, 2023

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for fourteen days beginning on Monday, March 13 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to MIP55c3-SP16 being accepted and implemented in the Maker Protocol.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*This SPF provides funding for the launch of Spark Lend, the first Spark product we want to help launch from Phoenix Labs.*

*Spark Lend will bring to Maker a new decentralized application that will integrate with Maker’s strategic services (D3M, PSM, and DSR) into one front end to attract more crypto users and help to bootstrap the creation of the SubDAO communities. As presented in our roadmap, we want to start with a simple front-end that will allow the Maker Community to evaluate the growth of the product and according to it and based on the Community feedback, we could launch new features and products in the future.*

*If [MIP55c3-SP15](https://forum.makerdao.com/t/mip55c3-sp15-phoenix-labs-initial-funding-spf/19733), [MIP116: D3M to Spark Lend](https://forum.makerdao.com/t/mip116-d3m-to-spark-lend/19732), and this SPF are approved, we will be ready to launch Spark Lend by April 2023 and maintain it for up to one year.*

*All products created by Phoenix Labs will belong to MakerDAO, including the smart contracts, the Front End, and all intellectual property.*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/db79cc9487c21f867f02bb781b3ff9064a90a989/MIP55/MIP55c3-Subproposals/MIP55c3-SP16.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP55c3SP16)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip55c3-sp16-phoenix-labs-spark-lend-launch/19734)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, March 30.
* Any further work required to implement the proposal will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).
* Note that if the Constitution MIP Set is approved this proposal will not be actioned, even if approved.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).