---
title: Template - [Executive Vote] Temporarily Disable the Aave DAI Direct Deposit Module (D3M) - June 15, 2022
summary: Decrease the Target Borrow Rate (`bar`) of the Aave D3M to 0, this will unwind the Aave D3M vault.
date: 2022-06-15T00:00:00.000Z
address: "0x76b686379234C90b2d9d4A9412A359783273f6b2"

---
# [Executive Proposal] Temporarily Disable the Aave DAI Direct Deposit Module (D3M) - June 15, 2022

The Governance Facilitator and the Protocol Engineering Core Unit have placed an out-of-schedule executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alteration to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

This is an [out-of-schedule](https://mips.makerdao.com/mips/details/MIP41#MIP41c2) executive proposal. It has been deployed and added to the voting portal in response to an [urgent signal request](https://mips.makerdao.com/mips/details/MIP24#MIP24c4) that was posted on the recommendation of the Risk Core Unit ([RISK-001](https://mips.makerdao.com/mips/details/MIP39c2SP2)) facilitator. The Signal Request can be seen [here](https://forum.makerdao.com/t/urgent-signal-request-set-aave-d3m-bar-to-0/15800). In summary, the Risk Core Unit believes a proposal currently being voted on by Aave Governance presents an unacceptable risk to the Maker Protocol, if approved. 

The express purpose of this executive proposal is to disable the Aave D3M until the Risk Core Unit and/or the Maker Community are satisfied that this risk is no longer present.

If this executive proposal passes, the following **change** will occur within the Maker Protocol:
* Set Aave D3M [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) to **0**.

**Voting for this executive proposal will place your MKR in support of the change outlined above.**

It is possible to change the Aave D3M Target Borrow Rate to 0 without waiting for the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes listed above will become active in the Maker Protocol **immediately** after the spell is executed.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Temporarily Disable the Aave D3M

As per this [urgent signal request](https://forum.makerdao.com/t/urgent-signal-request-set-aave-d3m-bar-to-0/15800), the following change will be made if this executive proposal passes.
* The Aave DAI Direct Deposit Module (D3M) [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) will be set to **0**.

This change is being proposed to temporarily disable the Aave D3M. Note that while setting the `bar` to 0 might intuitively suggest that the Aave D3M will utilize its full debt ceiling, it is a pre-programmed state in the D3M code that will set the vault to unwind only. 

Further details on this issue and the origin of this proposal can be found in the link below:
* [Risk Core Unit Analysis and Recommendation](https://forum.makerdao.com/t/signal-request-set-the-aave-d3m-dc-to-0-zero/15775/15)
* [Further Risk Core Unit Analysis](https://forum.makerdao.com/t/urgent-signal-request-set-aave-d3m-bar-to-0/15800/15)

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
