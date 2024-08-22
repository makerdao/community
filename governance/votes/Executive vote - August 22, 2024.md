---
title: Template - [Executive Vote] LITE-PSM-USDC-A Phase 2 Setup - August 22, 2024
summary: Update PSM State Variable in conduit contracts to MCD_LITE_PSM_USDC_A, USDC Migration from PSM-USDC-A to LITE-PSM-USDC-A, update PSM-USDC-A Fees, update PSM-USDC-A DC-IAM parameters, update MCD_LITE_PSM_USDC_A buf, update LITE-PSM-USDC-A DC-IAM parameters, GSM Delay update, update LitePSM Keeper Network Job.
date: 2024-08-22T00:00:00.000Z
address: "0x969c91C5aC11D4d1077A6aAF3d2BA617906543Cc"

---
# [Executive Proposal] LITE-PSM-USDC-A Phase 2 Setup - August 22, 2024

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Maker Protocol:

- The PSM state variables in the conduit contracts will be updated to MCD_LITE_PSM_USDC_A.
- **All but 200 million USDC reserves** will be migrated from PSM-USDC-A to LITE-PSM-USDC-A.
- PSM-USDC-A fees will be updated.
- PSM-USDC-A DC-IAM parameters will be updated.
- MCD_LITE_PSM_USDC_A `buf` will be increased.
- LITE-PSM-USDC-A DC-IAM parameters will be updated.
- The GSM Delay will be increased.
- The LitePSM Keeper Network Job will be updated.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://mips.makerdao.com/mips/details/MIP113#10-1-1a).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Update PSM State Variables in Conduit Contracts

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, then the PSM state variables in the following conduit contracts will be updated to point to [MCD_LITE_PSM_USDC_A](https://etherscan.io/address/0xf6e72db5454dd049d0788e411b06cfaf16853042):

- [RWA014_A_INPUT_CONDUIT_URN](https://etherscan.io/address/0x6b86ba08bd7796464cea758061ac173d0268cf49)
- [RWA014_A_INPUT_CONDUIT_JAR](https://etherscan.io/address/0x391470cd3d8307adc051d878a95fa9459f800dbc)
- [RWA014_A_OUTPUT_CONDUIT](https://etherscan.io/address/0xd7cbdfde553de2063caafbf230be135e5dbb5064)
- [RWA007_A_JAR_INPUT_CONDUIT](https://etherscan.io/address/0xc8bb4e2b249703640e89265e2ae7c9d5ea2af742)
- [RWA007_A_INPUT_CONDUIT](https://etherscan.io/address/0x58f5e979ef74b60a9e5f955553ab8e0e65ba89c9)
- [RWA007_A_OUTPUT_CONDUIT](https://etherscan.io/address/0x701c3a384c613157bf473152844f368f2d6ef191)
- [RWA015_A_INPUT_CONDUIT_JAR_USDC](https://etherscan.io/address/0xb9373c557f3ae8cddd068c1644ed226cfb18a997)
- [RWA015_A_INPUT_CONDUIT_URN_USDC](https://etherscan.io/address/0xe08cb5e24862ea86328295d5e5c08972203c20d8)
- [RWA015_A_OUTPUT_CONDUIT](https://etherscan.io/address/0x1e86cb085f249772f7e7443631a87c6bdba2aceb)
- [RWA009_A_INPUT_CONDUIT_URN_USDC](https://etherscan.io/address/0x08012ec53a7fabf6f33318dfb93c1289886ebbe1)

### Migrate Reserves from PSM-USDC-A to LITE-PSM-USDC-A

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, **all but 200 million USDC reserves** from PSM-USDC-A will be migrated to LITE-PSM-USDC-A.

### Update PSM-USDC-A Fees

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, then the PSM-USDC-A fees will be updated as follows:

- PSM-USDC-A [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) will be increased by 0.01 percentage points from 0% to **0.01%**.
- PSM-USDC-A [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) will be increased by 0.01 percentage points from 0% to **0.01%**.

### Update PSM-USDC-A DC-IAM Parameters

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, then the PSM-USDC-A DC-IAM parameters below will be updated as follows:

- PSM-USDC-A DC-IAM [Maximum Debt Ceiling (`line`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-) will be decreased by 7,500 million DAI from 10,000 million DAI to **2,500 million DAI**.
- PSM-USDC-A DC-IAM [Target Available Debt (`gap`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-) will be decreased by 180 million DAI from 380 million DAI to **200 million DAI**.
- PSM-USDC-A DC-IAM [Ceiling Increase Cooldown (`ttl`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-) will remain unchanged at **12 hours**.

### Update MCD_LITE_PSM_USDC_A `buf`

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, then the MCD_LITE_PSM_USDC_A fixed-sized amount of pre-minted Dai (`buf`) will be increased as follows:

- MCD_LITE_PSM_USDC_A [Fixed-sized Amount of Pre-minted Dai (`buf`)](https://forum.makerdao.com/t/litepsm-lite-psm-usdc-a-introduction-and-overview/24512#lite-psm-usdc-a-parameters-overview-8) will be increased by 180 million DAI from 20 million DAI to **200 million DAI**.

### Update LITE-PSM-USDC-A DC-IAM Parameters

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, then the LITE-PSM-USDC-A DC-IAM will be updated as follows:

- LITE-PSM-USDC-A DC-IAM [Maximum Debt Ceiling (`line`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-1-maximum-debt-ceiling-line-) will be increased by 7,450 million DAI from 50 million DAI to **7,500 million DAI**.
- LITE-PSM-USDC-A DC-IAM [Target Available Debt (`gap`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-2-target-available-debt-gap-) will be increased by 180 million DAI from 20 million DAI to **200 million DAI**.
- LITE-PSM-USDC-A DC-IAM [Ceiling Increase Cooldown (`ttl`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-3-ceiling-increase-cooldown-ttl-) will remain unchanged at **12 hours**.

### Update GSM Delay

- **Authorization**: [Governance Facilitator Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/3), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, the [GSM Pause Delay](https://mips.makerdao.com/mips/details/MIP113#10-1-gsm-governance-security-module-pause-delay) will be updated as follows:

- The GSM Pause Delay will be increased by 14 hours from 16 hours to **30 hours**.

### Update LitePSM Keeper Network Job

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839/2), [Poll 1128](https://vote.makerdao.com/polling/QmU7XJ6X)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-2-major-migration-proposed-parameters/24839)

If this executive proposal passes, then the LitePSM Keeper Network Job will be updated with the following contract calls and parameters, as a consequence of the LITE-PSM-USDC-A DC-IAM and `buf` parameter changes described earlier in this document:

- The old LitePSM job will be removed from the CronSequencer through contract call `sequencer.removejob(0x689cE517a4DfCf0C5eC466F2757D324fc292C8Be)`.
- The new LitePSM job will be added to the CronSequencer through contract call `sequencer.addjob(0x0c86162ba3e507592fc8282b07cf18c7f902c401)`.
- [`fill`](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644#keeper-network-threshold-parameters-4): The [rushThreshold](https://forum.makerdao.com/t/litepsm-job-post-mortem/24841#solution-4) will be set to **20 million DAI**.
- [`trim`](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644#keeper-network-threshold-parameters-4): The [gushThreshold](https://forum.makerdao.com/t/litepsm-job-post-mortem/24841#solution-4) will be set to **20 million DAI**.
- [`chug`](https://forum.makerdao.com/t/lite-psm-usdc-a-phase-1-test-period-proposed-parameters/24644#keeper-network-threshold-parameters-4): The [cutThreshold](https://forum.makerdao.com/t/litepsm-job-post-mortem/24841#solution-4) will remain unchanged at **300,000 DAI**.
- The chainlog entry for [CRON_LITE_PSM_JOB](https://etherscan.io/address/0x689ce517a4dfcf0c5ec466f2757d324fc292c8be) will be updated to [0x0c86162ba3e507592fc8282b07cf18c7f902c401](https://etherscan.io/address/0x0c86162ba3e507592fc8282b07cf18c7f902c401).

The new LitePSM job meets all the requirements outlined in the [LitePSM Job Post-Mortem](https://forum.makerdao.com/t/litepsm-job-post-mortem/24841).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
