---
title: Template - [Executive Vote] Activate BlockTower Andromeda, Reduce GUSD PSM Debt Ceiling, and Other Actions - June 28, 2023
summary: Activate BlockTower Andromeda; Reduce GUSD PSM Debt Ceiling; Aligned Delegate Compensation for May; Core Unit Vesting Transfers; Reimburse BlockTower Legal Expenses; Add Chainlink keeper network treasury address; Update on-chain Monetalis Clydesdale RWA Agreement. 
date: 2023-06-28T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Activate BlockTower Andromeda, Reduce GUSD PSM Debt Ceiling, and Other Actions - June 28, 2023

The Governance Facilitators and [Dewiz](https://dewiz.xyz/) have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **high-impact actions** will occur within the Maker Protocol:
- The Debt Ceiling Instant Access Module will be enabled for BlockTower Andromeda.
- The Debt Ceiling for BlockTower Andromeda will be increased to its ratified value.
- A new Output Conduit will be deployed to route BlockTower Andromeda via the USDP PSM.
- Adjust GUSD PSM Parameters with the goal of reducing GUSD exposure.

If this executive proposal passes, the following **low-impact or routine actions** will occur within the Maker Protocol:
- Aligned Delegate Compensation for May 2023 totaling ### MKR will be distributed.
- Vesting transfers totaling 482.6 MKR will be distributed to the Oracles Core Unit, the Risk Core Unit, and the Sustainable Ecosystem Scaling Core Unit.
- BlockTower will be reimubrsed a total of 133,466 DAI for legal expenses incurred in Project Andromeda from the Legal Recourse Asset Budget 
- A keeper network treasury address will be set for Chainlink.
- The on-chain representation of the Monetalis Clydesdale legal agreement will be updated to include most recent debt ceiling increase.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

$OfficeHours? This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Activate BlockTower Andromeda (RWA-015)

Given the successful onboarding [poll]($) and testing at a Debt Ceiling of 2.5 million DAI the following actions will take place if this executive proposal passes. In aggregate, these actions activate the BlockTower Andromeda vault.

The [Debt Ceiling Instance Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) will be enabled for BlockTower Andromeda with the following parameters:
* [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): 1.28 billion DAI
* [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): 50 million DAI
* [Ceiling Increase Cooldown](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): 24 hours

The BlockTower Andromeda oracle price will be updated to match the new Maximum Debt Ceiling.

A new OutputConduit will be deployed, routing BlockTower Andromeda transactions via the USDP PSM as [authorized]($authorized_post) by the relevant scope facilitators. Operationally, this will mean the USDP PSM is drained to provide funding for BlockTower Andromeda.

### GUSD PSM Parameter Changes

As per the outcome of this recent [poll](https://vote.makerdao.com/polling/QmaXg3JT#poll-detail), the following changes to the GUSD PSM parameters will take place if this executive proposal passes.

* The [Maximum Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be reduced from 500 million DAI to **110 million DAI**. 
* The [Fee Out](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) will be reduced from 0.01% to **zero**. 

### Aligned Delegate Compensation - May 2023

$todo

### Core Unit Vesting Transfers

As per previously ratified governance proposals, the following vesting transfers will take place if this executive proposal passes.

* 297.3 MKR will be transferred to the [Oracles Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP13) at  [0x2d09B7b95f3F312ba6dDfB77bA6971786c5b50Cf](https://etherscan.io/address/0x2d09B7b95f3F312ba6dDfB77bA6971786c5b50Cf) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP75#mkr-vesting).
* 175 MKR will be transferred to the [Risk Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP2) at [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP25#mkr-vesting-schedule).
* 10.3 MKR will be transferred to the [Sustainable Ecosystem Scaling Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP10) at [0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6](https://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6) as per this [budget MIP](https://mips.makerdao.com/mips/details/MIP40c3SP17).

### BlockTower Legal Expense Reimbursment

As per this [forum post](https://forum.makerdao.com/t/project-andromeda-legal-expenses/20984) and [authorization]($authorized_post) from the relevant scope facilitators, 133,466 DAI will be transferred to BlockTower if this executive proposal passes.

### Chainlink Keeper Network Treasury Address

Following up from a previous executive entry as described in this [forum post](https://forum.makerdao.com/t/poll-notice-keeper-network-follow-up-updates/21056) and given [authorization]($authorized_post) provided by the relevant scope facilitators, the Chainlink keeper network treasury address will be set to [0xaBAbd5e7d6d05672391aB2A914F57ce343D5CFA6 ](https://etherscan.io/address/0xaBAbd5e7d6d05672391aB2A914F57ce343D5CFA6) if this executive proposal passes.

### Monetalis Clydesdale RWA Agreement Update

As described [here]($information_post), the Monetalis Clydesdale RWA Agreement parameter is out-of-date since the last debt ceiling increase took place. This will be updated as described if this executive proposal passes.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).