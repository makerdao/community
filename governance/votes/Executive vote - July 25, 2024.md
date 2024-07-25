---
title: Template - [Executive Vote] LITE-PSM-USDC-A Phase 1 Setup, Spark Proxy Spell - July 25, 2024
summary: Onboard the Lightweight Peg Stability Module for Phase 1, update PSM-USDC-A DC-IAM parameters, set LITE-PSM-USDC-A DC-IAM, activate LITE_PSM_MOM GSM delay exception, perform the initial USDC migration to the LitePSM, update the GSM pause delay, update the ESM minimum threshold, authorize ESM on the LitePSM input conduit, add a LitePSM keeper network job, add LitePSM facility addresses to the Chainlog, and trigger the Spark Proxy Spell.
date: 2024-07-25T00:00:00.000Z
address: "0x8c7F12C7cE07916f631B25ce148e419FeFf19d46"

---
# [Executive Proposal] LITE-PSM-USDC-A Phase 1 Setup, Spark Proxy Spell - July 25, 2024

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Maker Protocol:

- LITE-PSM-USDC-A Phase 1 actions:
  - The LitePSM Facility will be onboarded.
  - PSM-USDC-A [Debt Ceiling Instant Access Module (DC-IAM)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-debt-ceiling-instant-access-module-dc-iam-) parameters will be updated.
  - LITE-PSM-USDC-A DC-IAM parameters will be set up.
  - The LITE_PSM_MOM GSM Delay Exception will be activated.
  - **20 million USDC** will be migrated from PSM-USDC-A to LITE-PSM-USDC-A.
  - The [GSM Pause Delay](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay) will be decreased.
  - The [Emergency Shutdown Module (ESM)](https://docs.makerdao.com/smart-contract-modules/shutdown/the-emergency-shutdown-process-for-multi-collateral-dai-mcd) [Minimum Threshold](https://manual.makerdao.com/module-index/module-emergency-shutdown#minimum-threshold-min) will be increased.
  - The [Emergency Shutdown Module (ESM)](https://docs.makerdao.com/smart-contract-modules/shutdown/the-emergency-shutdown-process-for-multi-collateral-dai-mcd) will be authorized on the LitePSM input conduit.
  - A LitePSM Keeper Network Job will be added.
  - Six additions will be made to the [Chainlog](https://chainlog.makerdao.com).
- A Spark Proxy Spell will be triggered at [0x18427dB17D3113309a0406284aC738f4E649613B](https://etherscan.io/address/0x18427dB17D3113309a0406284aC738f4E649613B).

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### LITE-PSM-USDC-A Phase 1 Actions

The actions described below are part of the [first phase](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/1) in the migration process [from PSM-USDC-A to LITE-PSM-USDC-A](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512). A technical overview for the latter can be found [here](https://forum.makerdao.com/t/technical-overview-lightweight-peg-stability-module-dss-lite-psm/24730).

#### LitePSM Facility Onboarding

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, the following actions will be taken to onboard the LitePSM facility:

- Onboard `MCD_LITE_PSM_USDC_A` at [0xf6e72Db5454dd049d0788e411b06CfAF16853042](https://etherscan.io/address/0xf6e72Db5454dd049d0788e411b06CfAF16853042).
- Onboard `MCD_LITE_PSM_USDC_A_POCKET` at [0x37305B1cD40574E4C5Ce33f8e8306Be057fD7341](https://etherscan.io/address/0x37305B1cD40574E4C5Ce33f8e8306Be057fD7341).
- Set LitePSM [Fixed-sized Amount of Pre-minted Dai (`buf`)](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512#lite-psm-usdc-a-parameters-overview-8) to **20 million DAI**.

#### PSM-USDC-A DC-IAM Parameters Update

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the `PSM-USDC-A` DC-IAM parameter below will be updated as follows:

- The [Target Available Debt (`gap`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-) will be decreased by 20 million from 400 million to **380 million DAI**.

The Maximum Debt Ceiling (`line`) and the Ceiling Increase Cooldown (`ttl`) parameters remain unchanged.

#### LITE-PSM-USDC-A DC-IAM Setup

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the LITE-PSM-USDC-A DC-IAM will be set up as follows:

- [Maximum Debt Ceiling (`line`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-): **50 million DAI**
- [Target Available Debt (`gap`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-): **20 million DAI**
- [Ceiling Increase Cooldown (`ttl`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-): **12 hours**

#### LITE_PSM_MOM GSM Delay Exception Activation

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the LITE_PSM_MOM GSM Delay Exception will be activated at [0x467b32b0407Ad764f56304420Cddaa563bDab425](https://etherscan.io/address/0x467b32b0407Ad764f56304420Cddaa563bDab425).

#### USDC Migration from PSM-USDC-A to LITE-PSM-USDC-A

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval 1](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2), [Ecosystem Approval 2](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/4)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the following action will take place:

- An initial **20 million USDC** will be migrated from `PSM-USDC-A` to `LITE-PSM-USDC-A`.

At least 200 million USDC reserves should be left in reserve in PSM-USDC-A. In this case, the LitePSM will still be initialized, but the USDC reserves will not be migrated due to this requirement. The USDC reserves migration will then be executed in one of the following spells.

#### GSM Pause Delay Update

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2), [Governance Facilitator Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/8)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the [GSM Pause Delay](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay) will be updated as follows:

- The GSM Pause Delay will be decreased by 14 hours from 30 hours to **16 hours**.

#### ESM Minimum Threshold Update

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the [ESM Minimum Threshold](https://manual.makerdao.com/module-index/module-emergency-shutdown#minimum-threshold-min) will be updated as follows:

- The ESM Minimum Threshold will be increased by 150,000 MKR from 150,000 MKR to **300,000 MKR**.

#### ESM Authorization

- **Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/11)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/9)

If this executive proposal passes, then the following action will be taken:

- Authorize the [Emergency Shutdown Module (ESM)](https://docs.makerdao.com/smart-contract-modules/shutdown/the-emergency-shutdown-process-for-multi-collateral-dai-mcd) on `MCD_LITE_PSM_USDC_A_IN_CDT_JAR`

This action addresses some attack vectors that could have been exploited during an Emergency Shutdown. The identification of these vulnerabilities has led to compensations through the bug bounty program in the past.

#### LitePSM Keeper Network Job Addition

- **Authorization:** [Poll 1124](https://vote.makerdao.com/polling/QmdcHXHy), [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then a keeper network job for calling permissionless LitePSM functions will be activated at [0x689cE517a4DfCf0C5eC466F2757D324fc292C8Be](https://etherscan.io/address/0x689cE517a4DfCf0C5eC466F2757D324fc292C8Be) with the following parameters:

- [Threshold at which additional DAI will be minted (`fill`)](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644#keeper-network-threshold-parameters-4): **15 million DAI**.
- [Threshold at which DAI will be burned (`trim`)](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644#keeper-network-threshold-parameters-4): **30 million DAI**.
- [Threshold at which accumulated fees are transferred to the Surplus Buffer (`chug`)](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644#keeper-network-threshold-parameters-4): **300,000 DAI**.

#### Chainlog Additions

- **Authorization:** [Ecosystem Approval](http://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644/7)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644)

If this executive proposal passes, then the following additions will be made to the [Chainlog](https://chainlog.makerdao.com):

- Add [0xf6e72Db5454dd049d0788e411b06CfAF16853042](https://etherscan.io/address/0xf6e72db5454dd049d0788e411b06cfaf16853042) as `MCD_LITE_PSM_USDC_A`.
- Add [0x37305B1cD40574E4C5Ce33f8e8306Be057fD7341](https://etherscan.io/address/0x37305B1cD40574E4C5Ce33f8e8306Be057fD7341) as `MCD_LITE_PSM_USDC_A_POCKET`.
- Add [0x69cA348Bd928A158ADe7aa193C133f315803b06e](https://etherscan.io/address/0x69cA348Bd928A158ADe7aa193C133f315803b06e) as `MCD_LITE_PSM_USDC_A_JAR`.
- Add [0x5eeB3D8D60B06a44f6124a84EeE7ec0bB747BE6d](https://etherscan.io/address/0x5eeB3D8D60B06a44f6124a84EeE7ec0bB747BE6d) as `MCD_LITE_PSM_USDC_A_IN_CDT_JAR`.
- Add [0x467b32b0407Ad764f56304420Cddaa563bDab425](https://etherscan.io/address/0x467b32b0407Ad764f56304420Cddaa563bDab425) as `LITE_PSM_MOM`.
- Add [0x689cE517a4DfCf0C5eC466F2757D324fc292C8Be](https://etherscan.io/address/0x689cE517a4DfCf0C5eC466F2757D324fc292C8Be) as `CRON_LITE_PSM_JOB`.

---

### Spark Proxy Spell

- **Authorization:** [Poll 1125](https://vote.makerdao.com/polling/QmWCBwtq), Ecosystem Approvals [1](http://forum.makerdao.com/t/jul-12-2024-proposed-changes-to-spark-for-upcoming-spell/24635/3), [2](http://forum.makerdao.com/t/jul-12-2024-proposed-changes-to-spark-for-upcoming-spell/24635/17)
- **Proposal**: Forum posts [1](https://forum.makerdao.com/t/jul-12-2024-proposed-changes-to-spark-for-upcoming-spell/24635), [2](http://forum.makerdao.com/t/jul-12-2024-proposed-changes-to-spark-for-upcoming-spell/24635/14)

If this executive proposal passes, a Spark Proxy Spell will be triggered at [0x18427dB17D3113309a0406284aC738f4E649613B](https://etherscan.io/address/0x18427dB17D3113309a0406284aC738f4E649613B). This proxy spell will take the following action:

- [Mainnet] Activate a Morpho market for Pendle PT sUSDe with Oct 24, 2024 maturity and an LLTV of 86%.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
