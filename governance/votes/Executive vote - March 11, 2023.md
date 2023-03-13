---
title: Template - [Executive Vote] Emergency Parameter Changes - March 11, 2023
summary: Emergency parameter changes to multiple collateral types including Debt Ceiling, Target Borrow Rate, Target Available Debt, and PSM tin and tout changes.
date: 2023-03-11T00:00:00.000Z
address: "0x1D07F15aB8c3C015c7b312759dDd858b0f1D8e72"

---
# [Executive Proposal] Emergency Parameter Changes - March 11, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an emergency out-of-schedule executive proposal into the voting system per [MIP24](https://mips.makerdao.com/mips/details/MIP24). MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Urgent parameter changes to multiple vault types, as itemized below.
- Urgent parameter changes to multiple PSMs, as detailed below.
- Urgent parameter changes to multiple D3Ms, as detailed below.
- Urgent reduction to the GSM Pause Delay, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Vault Parameter Changes

As per this [post](https://forum.makerdao.com/t/emergency-proposal-risk-and-governance-parameter-changes-11-march-2023/20125) from the Risk Core Unit (RISK-001), the following emergency parameter changes will be made, if this executive proposal passes:

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Changes

- Reduce the UNIV2USDCETH-A `line` by 50 million DAI from 50 million DAI to **0 DAI**.
- Reduce the UNIV2DAIUSDC-A `line` by 100 million DAI from 100 million DAI to **0 DAI**.
- Reduce the GUNIV3DAIUSDC1-A `line` by 100 million DAI from 100 million DAI to **0 DAI**.
- Reduce the GUNIV3DAIUSDC2-A `line` by 100 million DAI from 100 million DAI to **0 DAI**.

### PSM Parameter Changes

As per this [post](https://forum.makerdao.com/t/emergency-proposal-risk-and-governance-parameter-changes-11-march-2023/20125) from the Risk Core Unit (RISK-001), the following emergency parameter changes will be made, if this executive proposal passes:

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Change

- Increase the PSM-USDP-A `line` by 550 million DAI from 450 million DAI to **1 billion DAI**.

#### [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) Changes

- Increase the PSM-USDC-A `tin` by 1% from 0% to **1%**.
- Reduce the PSM-USDP-A `tin` by 0.2% from 0.2% to **0%**.

#### [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) Change

- Increase the PSM-USDP-A `tout` by 1% from 0% to **1%**.

#### [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Changes

- Reduce the PSM-USDC-A `gap` by 700 million DAI from 950 million DAI to **250 million DAI**.
- Reduce the PSM-GUSD-A `gap` by 40 million DAI from 50 million DAI to **10 million DAI**.
- Increase the PSM-USDP-A `gap` by 200 million DAI from 50 million DAI to **250 million DAI**.

### DAI Direct Deposit Module (D3M) [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar) Changes

**Note that the proposed changes to the D3M `bar` parameters are not subject to the GSM Pause Delay due to the presence of a [MOM contract](https://manual.makerdao.com/governance/verification/gsm-exceptions#direct-deposit-breaker). Therefore, these changes will be actioned when the executive proposal is scheduled**.

As per this [post](https://forum.makerdao.com/t/emergency-proposal-risk-and-governance-parameter-changes-11-march-2023/20125) from the Risk Core Unit (RISK-001), the following emergency parameter changes will be made, if this executive proposal passes:

- Reduce the DIRECT-AAVEV2-DAI `bar` by 2% from 2% to **0%**.
- Reduce the DIRECT-COMPV2-DAI `bar` by 2% from 2% to **0%**.

### [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) Change

As per this [post](https://forum.makerdao.com/t/emergency-proposal-risk-and-governance-parameter-changes-11-march-2023/20125) from the Risk Core Unit (RISK-001), the following emergency parameter changes will be made, if this executive proposal passes:

- Reduce the GSM Pause Delay by 32 hours from 48 hours to **16 hours**.

This is to allow greater flexibility for Maker Governance to react to changing market circumstances over the coming days. This change should be considered temporary and the GSM Pause Delay should be increased again when circumstances allow.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
