---
title: Template - [Executive Vote] MOMC Parameter Changes, GUSD PSM tout Decrease, CES MKR Transfer, Flash Mint Module Upgrade, Cage Aave D3M - January 27, 2023
summary: Latest MOMC parameter changes, decrease the GUSD PSM Fee Out (tout), transfer MKR to CES, complete upgrades to the Flash Mint Module, cage the Aave D3M to prepare for a new deployment.
date: 2023-01-27T00:00:00.000Z
address: "0x40cdba18bfBc525a6cf35251E7d90a9B5b66CE30"

---
# [Executive Proposal] MOMC Parameter Changes, GUDS tout Decrease, MKR Vesting Transfer, Flash Mint Module Upgrade, Cage Aave D3M - January 27, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Parameter changes from the latest proposal of the MakerDAO Open Market Committee, as itemized below.
- The GUSD PSM Fee Out (`tout`) will be reduced to 0, as detailed below.
- **96.15 MKR** will be transferred to the Collateral Engineering Services Core Unit, detailed below.
- The Aave D3M will be caged in preparation for a new deployment using the updated contracts, as detailed below.
- Planned upgrades to the Flash Mint Module will be completed, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### MOMC Parameter Changes

As per this successful [governance poll](https://vote.makerdao.com/polling/QmYUi9Tk), the following changes recommended by the [Maker Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) will be made, if this executive proposal passes:

- The WSTETH-B [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be increased by 0.25% from 0% to **0.25%**.
- The DIRECT-COMPV2-DAI (Compound V2 D3M) [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 15 million DAI from 5 million DAI to **20 million DAI**.
- The DIRECT-COMPV2-DAI (Compound V2 D3M) [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) will be set to **5 million DAI**.
- The PSM-USDP [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) will be increased by 0.1% from 0.1% to **0.2%**.

Note a new version of the Aave D3M utilizing the upgraded contracts is due to be deployed in an upcoming Executive Vote. The planned parameter changes to that deployment will therefore be included in a future Executive Vote once the Protocol Engineering Core Unit is ready.

Please review the [discussion thread](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-5-january-2023/19327) to inform your position prior to voting.

### GUSD PSM tout Reduction

As per this successful [governance poll](https://vote.makerdao.com/polling/QmRRceEo#vote-breakdown), the following change to the GUSD Peg Stability Module (PSM) will be made, if this executive proposal passes:

- The PSM-GUSD [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) will be decreased by 0.1% from 0.1% to **0%**.

Please review the [discussion thread](https://forum.makerdao.com/t/request-to-poll-psm-gusd-a-parameters/19416) to inform your position prior to voting.

### CES MKR Vesting Transfer

As per this successful [governance poll](https://vote.makerdao.com/polling/QmbNVQ1E), the following transfer of MKR to the Collateral Engineering Services Core Unit (CES-001) will be made, if this executive proposal passes:

- Transfer **96.15 MKR** to the CES-001 Auditor Wallet at [0x25307aB59Cd5d8b4E2C01218262Ddf6a89Ff86da](https://etherscan.io/address/0x25307aB59Cd5d8b4E2C01218262Ddf6a89Ff86da).

Please review the [discussion thread](https://forum.makerdao.com/t/request-to-poll-one-time-mkr-distribution-to-correct-ces-001-incentive-program-shortfall/19326) to inform your position prior to voting.

### Cage DIRECT-AAVEV2-DAI

In preparation for a new Aave D3M deployment if this executive proposal passes it will `cage` the old Aave D3M (DIRECT-AAVEV2-DAI).

This change will mean that the DIRECT-AAVEV2-DAI will be deactivated and can no longer be used to generate DAI.

Please see this [post](https://forum.makerdao.com/t/housekeeping-tasks-for-next-executive/19472) from PE-001 Facilitator @Derek to inform your position prior to voting.

### Completing the Flash Mint Module Upgrade

The following changes to the Flash Mint Module will be made if this executive proposal passes:

- Sunset [MCD_FLASH_LEGACY](https://etherscan.io/address/0x1EB4CF3A948E7D72A198fe073cCb8C7a948cD853), remove it from the [chainlog](chainlog.makerdao.com) and reduce the Debt Ceiling by 250 million DAI from 250 million DAI to **0**.
- Remove [FLASH_Killer](https://etherscan.io/address/0x60744434d6339a6B27d73d9Eda62b6F66a0a04FA) and remove it from the [chainlog](chainlog.makerdao.com) - FLASH_Killer was specific to MCD_FLASH_LEGACY which will be sunset by this spell.
- Increase the [MCD_FLASH](https://etherscan.io/address/0x1EB4CF3A948E7D72A198fe073cCb8C7a948cD853) [Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-flash-mint-module#debt-ceiling-line) by 250 million DAI from 250 million DAI to **500 million DAI**.

Please review the following information before casting your vote:

- [Initial Forum Post describing migration](https://forum.makerdao.com/t/wednesday-18th-may-executive-flash-mint-module-technical-enhancement/15176)
- [Forum Post describing the changes for this executive proposal](https://forum.makerdao.com/t/housekeeping-tasks-for-next-executive/19472)
- Maker Operational Manual [Flash Mint Module entry](https://manual.makerdao.com/module-index/module-flash-mint-module)

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please join us every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
