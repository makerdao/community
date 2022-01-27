---
title: Template - [Executive Vote] MOMC Parameter Changes, Decrease the GUNIV3DAIUSDC2-A Liquidation Ratio - January 21, 2022
summary: Parameter changes from the latest MOMC proposal, decrease the GUNIV3DAIUSDC2-A liquidation ratio.
date: 2022-01-21T00:00:00.000Z
address: "0xE246C4ba65d95C2F902E39FBeb0047a67aB4F25a"

---
# [Executive Proposal] MOMC Parameter Changes, Decrease the GUNIV3DAIUSDC2-A Liquidation Ratio - January 21, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Parameter Changes from the latest [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-07/12522) from the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) including [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee), [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), and Aave D3M parameter changes, listed in detail below.
- A reduction to the [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) of the GUNIV3DAIUSDC2-A vault type, detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### MOMC Parameter Changes

As per this [governance poll](https://vote.makerdao.com/polling/QmVyyjPF) on the latest MakerDAO Open Market Committee [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-07/12522), the following parameter changes will be made in the Maker Protocol if this executive proposal passes:

**Stability Fee Decreases**
* Decrease the ETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.25% from **2.75%** to **2.5%**.
* Decrease the WSTETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 1% from **4%** to **3%**.

**Maximum Debt Ceiling (`line`) Decreases**
* Decrease the LINK-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 40 million DAI from **140 million DAI** to **100 million DAI**.
* Decrease the YFI-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 80 million DAI from **130 million DAI** to **50 million DAI**.
* Decrease the UNI-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 25 million DAI from **50 million DAI** to **25 million DAI**.
* Decrease the UNIV2UNIETH-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 15 million DAI from **20 million DAI** to **5 million DAI**.
* Decrease the GUSD-A [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) by 5 million DAI from **5 million DAI** to **zero DAI**.

**DIRECT-AAVEV2-DAI (Aave D3M) Changes**
* Decrease the DIRECT-AAVEV2-DAI [Target Borrow Rate (`bar`)](https://github.com/makerdao/dss-direct-deposit#configuration) by 0.15% from **3.9%** to **3.75%**.
* Increase the DIRECT-AAVEV2-DAI [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 25 million DAI from **25 million DAI** to **50 million DAI**.
* Increase the DIRECT-AAVEV2-DAI [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 120 million DAI from **100 million DAI** to **220 million DAI**.

**GUNIV3DAIUSDC2-A Changes**
* Increase the GUNIV3DAIUSDC2-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 490 million DAI from **10 million DAI** to **500 million DAI**.
* Decrease the GUNIV3DAIUSDC2-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 0.5% from **1%** to **0.5%**.

### GUNIV3DAIUSDC2-A Liquidation Ratio Reduction

As per this [governance poll](https://vote.makerdao.com/polling/QmbFqWGK) the GUNIV3DAIUSDC2-A [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) will be decreased by 3% from **105%** to **102%** if this executive proposal passes.

For more information on this proposal please see this [thread](https://forum.makerdao.com/t/request-to-lower-the-collateralization-ratio-for-guniv3daiusdc2-a/12615) on the MakerDAO forum.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
