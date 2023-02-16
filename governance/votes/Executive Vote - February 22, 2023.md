---
title: Template - [Executive Vote] Aave v2 D3M Deployment, Strategic Finance MKR Transfer, and MOMC Parameter Changes - February 22, 2023
summary: Onboards the Aave v2 Dai Direct Deposit Module, Strategic Finance Core Unit (SF-001) MKR Vesting Transfer, and MOMC parameter changes.
date: 2023-02-22T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Aave v2 D3M Deployment, Strategic Finance MKR Transfer, and MOMC Parameter Changes - February 22, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- A total of **435 MKR** will be transferred to the [Strategic Finance Core Unit (SF-001)](https://mips.makerdao.com/mips/details/MIP39c2SP36), as detailed below.
- Parameter changes from the latest proposal of the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355), as detailed below.

If this executive proposal passes, the following **addition** will be made to the Maker Protocol:
- Aave v2 [DAI Direct Deposit Module (D3M)](https://manual.makerdao.com/module-index/module-dai-direct-deposit) will be onboarded and activated, as detailed below. 

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Aave v2 DAI Direct Deposit Module (D3M) Onboarding

As per this [poll](https://vote.makerdao.com/polling/QmUMyywc#poll-detail), the Aave v2 D3M will be onboarded with the following parameters, if this executive proposal passes. 

#### Vault Parameters

* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): **5 million DAI**.
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): **5 million DAI**.
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): **12 hours**.
* [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar): **2%**.

Note that Governance has approved a `line` of 20 million DAI but the intial deployment sets the `line` to 5 million DAI following the advice of the Protocol Engineering Core Unit. 

#### Threads and Assessments 

Please review the following resources containing information about the Aave V2 D3M to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2-february-2023/19637)
* [Initial Risk Core Unit Evaluation](https://forum.makerdao.com/t/d3m-risk-assessment/9353)
* [Initial Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/direct-aavev2-dai-direct-deposit-module-technical-assessment/10751)
* [MIP 50: DAI Direct Deposit Module](https://mips.makerdao.com/mips/details/MIP50)


### Strategic Finance Core Unit (SF-001) MKR Transfer

As per their successful [MKR vesting proposal](https://vote.makerdao.com/polling/QmZn66qt), the following MKR streams will be added to the [Strategic Finance Core Unit (SF-001)](https://mips.makerdao.com/mips/details/MIP39c2SP36) starting March 1, 2022 through March 1, 2025 in accordance with their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP48), if this executive passes. The MKR is claimable on March 1, 2023.
- **240 MKR** will be streamed to [0x31C01e90Edcf8602C1A18B2aE4e5A72D8DCE76bD](https://etherscan.io/address/0x31C01e90Edcf8602C1A18B2aE4e5A72D8DCE76bD). 
- **195 MKR** will be streamed to [0x12b19C5857CF92AaE5e5e5ADc6350e25e4C902e9](https://etherscan.io/address/0x12b19C5857CF92AaE5e5e5ADc6350e25e4C902e9)

$>>> Should there be a comment that this is legacy work since the stream start date is in the past? <<< $

### MOMC Parameter Changes

As per this successful [governance poll](https://vote.makerdao.com/polling/QmUMyywc), the following changes recommended by the [MakerDAO Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) will be made, if this executive proposal passes:

#### Vault Parameter Changes

##### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) changes

* Increase the WSTETH-B Stability Fee by 0.25% from 0.25% to **0.5%**.
* Reduce the RETH-A Stability Fee by 1% from 1.5% to **0.5%**.
* Reduce the WBTC-A Stability Fee by 0.25% from 2% to **1.75%**.
* Reduce the WBTC-B Stability Fee by 0.25% from 3.5% to **3.25%**.

##### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) increases

* Increase the CRVV1ETHSTETH-A Maximum Debt Ceiling (`line`) from 20 million DAI to **100 million DAI**.
* Increase the RETH-A Maximum Debt Ceiling (`line`) from 5 million DAI to **10 million DAI**.
* Increase the MATIC-A Maximum Debt Ceiling (`line`) from 10 million DAI to **15 million DAI**.
* Increase the Compound v2 D3M Maximum Debt Ceiling (`line`) from 20 million DAI to **30 million DAI**.


Please review the [discussion thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2-february-2023/19637) containing information about the MOMC Proposal to inform your position before voting.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).