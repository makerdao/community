---
title: Ratification Poll for Endgame Prelaunch MIP Set - October 10, 2022
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
start_date: 2022-10-10T16:00:00
end_date: 2022-10-24T16:00:00
---
# Ratification Poll for Endgame Prelaunch MIP Set - October 10, 2022

The Governance Facilitators have placed a ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, October 10 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to Endgame Prelaunch MIP Set being accepted and implemented in the Maker Protocol.

### MIP83: Recognized Launch MetaDAO Clusters

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*"MIP83 is a part of the Endgame Plan Approval MIP Set that configures the Clusters of the Launch MetaDAOs. This enables groups within the Core Units to begin preparations to restructure as MetaDAOs which is a de-risked form of scaling the Decentralized Workforce available in the Endgame."*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/5008f747e47047f977279ba216fc10dd450985d0/MIP83/MIP83.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP83)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip83-recognized-launch-metadao-clusters/17709)

### MIP84: Activate Protocol-Owned Vault Emulation

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*"This MIP activates the preliminary implementation of the Protocol-Owned Vault, using the Protocol-Owned Vault Emulation (POVE) approach which uses a non-standard configuration of the existing Maker Protocol to achieve the effects of a Protocol-Owned Vault."*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/c08c49aa14dfd2c626fb9348d039a3e3ee7e91bc/MIP84/MIP84.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP84)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip84-activate-protocol-owned-vault-emulation/17713)

### MIP1c4-SP1: Subproposal for Changing the Problem Space

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*"MIP1 was largely forgotten and never managed to serve its purpose, but with the Endgame Plan, the same core concept is revived as there needs to be clarity around precisely when Maker Governance starts to slow down and not invite so many proposals."*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/a8e1cdb5ee512d196b4432715646d9a2d8b24d36/MIP1/MIP1c4-Subproposals/MIP1c4-SP1.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP1c4SP1)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip1c4-sp1-subproposal-for-changing-the-problem-space/17710)

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
* The MIP Editors will mark these proposals **Accepted** and the Governance Facilitators will confirm their passage on the Governance and Risk call on $week_four_governance_call_date.
* Any further work required to implement these proposals will be tasked to the relevant [Core Units](https://mips.makerdao.com/mips/details/MIP38#mip38c2-core-unit-state).

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
