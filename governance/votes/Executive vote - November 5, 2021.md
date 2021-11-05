---
title: Template - [Executive Vote] Parameter Changes, Core Unit Budget Distribution - November 5, 2021
summary: MakerDAO Open Market Committee changes, lower PSM fees, and distribute Development and UX (DUX-001) Core Unit Budget.
date: 2021-11-05T00:00:00.000Z
address: "0x3381CaEaA980f78Aa1895f98E645e35cBDD4C593"

---
# [Executive Proposal] Parameter Changes, Core Unit Budget Distribution - November 5, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- [Fee In (tin)](https://makerdao.world/en/learn/governance/module-psm) parameter for PSM-USDC-A and PSM-USDP-A will be lowered to 0%.
- Multiple changes to [Stability Fees](https://makerdao.world/en/learn/governance/param-stability-fee), [Maximum Debt Ceilings (line)](https://makerdao.world/en/learn/governance/module-dciam), and [Target Available Debt (gap)](https://makerdao.world/en/learn/governance/module-dciam) as proposed by the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) and detailed below.
- 359,120.80 DAI will be distributed to the [Development and UX (DUX-001) Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP18) Auditors Wallet.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Lower PSM Fees

As per [this poll](https://vote.makerdao.com/polling/QmSkYED5?network=mainnet#poll-detail), the PSM Fees will be lowered as detailed below if this executive proposal passes.

- Lower the PSM-USDP-A [Fee In (tin)](https://makerdao.world/en/learn/governance/module-psm) parameter from 0.10% to 0.0%.
- Lower the PSM-USDC-A [Fee In (tin)](https://makerdao.world/en/learn/governance/module-psm) parameter from 0.20% to 0.0%.

For more information on this proposal, please see [this signal request](https://forum.makerdao.com/t/signal-request-set-psm-fees-to-0/10894).

### MOMC Parameter Changes

As per [this poll](https://vote.makerdao.com/polling/QmXDCCPH?network=mainnet#poll-detail) resulting from the [October recommendations](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2021-10-28/11256) of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355), the following parameter changes will be made if this executive proposal passes.

**ETH-A**
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 0.5% from 2.0% to 2.5%

**ETH-B**
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 1.0% from 5.0% to 6.0%

**WBTC-A**
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 0.5% from 2.0% to 2.5%

**LINK-A**
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 0.5% from 1.0% to 1.5%

**MANA-A**
* Increase [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) (`line`) from 5 million DAI to 10 million DAI.

**RENBTC-A**
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 0.5% from 2.0% to 2.5%

**MATIC-A**
* Increase [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) (`line`) from 10 million DAI to 20 million DAI.
* Increase [Target Available Debt](https://makerdao.world/en/learn/governance/module-dciam) (`gap`) from 3 million DAI to 20 million DAI.

**USDC-A**
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 1.0% from 0.0% to 1.0%

**UNIV2WBTCETH-A**
* Increase [Maximum Debt Ceiling](https://makerdao.world/en/learn/governance/module-dciam) (`line`) from 20 million DAI to 50 million DAI.
* Increase [Target Available Debt](https://makerdao.world/en/learn/governance/module-dciam) (`gap`) from 3 million DAI to 5 million DAI.
* Increase [Stability Fee](https://community-development.makerdao.com/en/learn/governance/param-stability-fee) by 0.5% from 2.0% to 2.5%

### DUX-001 Core Unit Budget

As per this [ratification poll](https://vote.makerdao.com/polling/QmSYLL9K?network=mainnet#poll-detail), **359,120.80 DAI** will be distributed to the [Development and UX (DUX-001) Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP18) Auditors Wallet at **0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad** if this executive proposal passes.

This distribution will top-off the [DUX-001 Auditors Wallet](https://gnosis-safe.io/app/#/safes/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad/balances) to the budget cap total of 483,575 DAI as requested in [MIP40c3-SP26](https://mips.makerdao.com/mips/details/MIP40c3SP26).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
