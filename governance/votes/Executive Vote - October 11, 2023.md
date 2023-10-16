---
title: Template - [Executive Vote] USDP-PSM incentives, rETH initial offboarding, RWA vaults reconfiguration, various parameter changes, AVC and AD compensation, Facilitator and Ecosystem Actor compensation, Spark proxy-spell - October 11, 2023
summary: DAO resolution for USDP-PSM, RETH-A initial offboarding parameters, Clydesdale + Andromeda parameter changes, WBTC and ETH vaults parameter changes, Aligned Voter Committee Quarterly and Aligned Delegate monthly compensation, Governance Facilitator and BA Labs compensation, SparkLend parameter changes via proxy-spell.
date: 2023-10-11T00:00:00.000Z
address: "0xb242159a9182e7FE0b72Fc035b336cFE060381B3"

---
# [Executive Proposal] USDP-PSM incentives, rETH initial offboarding, RWA vaults reconfiguration, various parameter changes, AVC and AD compensation, Facilitator and Ecosystem Actor compensation, Spark proxy-spell - October 11, 2023

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:
- The USDP-PSM Incentives [DAO Resolution](https://gateway.pinata.cloud/ipfs/QmWg43PNNGfEyXnTv1qN8dRXFJz5ZchrmZU8qH57Ki6D62) will be approved by MKR holders.
- RETH-A offboarding will be initiated by removing the vault from [Debt Ceiling Instant Access (`autoline`)](https://manual.makerdao.com/module-index/module-dciam) and setting the [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to 0.
- Reconfiguring Andromeda RWA015-A and Clydesdale RWA007-A vaults to increase their respective [Debt Ceilings (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) to 3 billion DAI.
- WBTC Vaults will have their [Debt Ceilings (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) decreased and [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) increased.
- ETH Vaults will have their [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) increased.
- Qualified Aligned Voter Committee Members will receive their quarterly MKR compensation.
- Qualified Aligned Delegates will receive their monthly MKR compensation.
- Governance Facilitators JanSky and VoteWizard will have DAI and MKR compensation streams deployed.
- BA Labs will receive their quarterly MKR compensation.
- A SparkLend proxy-spell will be executed to update previously polled parameters.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### USDP-PSM Incentives

*Authorization*: [Ecosystem Approval](https://forum.makerdao.com/t/usdp-psm-facilitation-incentives/22331/2)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/usdp-psm-facilitation-incentives/22331) "USDP-PSM Facilitation Incentives"

If this executive proposal passes, the [DAO Resolution](https://gateway.pinata.cloud/ipfs/QmWg43PNNGfEyXnTv1qN8dRXFJz5ZchrmZU8qH57Ki6D62) will be approved and in consequence, the [USDP-PSM Incentives Agreement](https://forum.makerdao.com/t/usdp-psm-facilitation-incentives/22331) will be initiated.

The agreement set forth by the DAO resolution contains the following details:
* Trident will deliver Facilitation Incentives in return for the continuous maintenance of the USDP PSM Max Debt Ceiling at a level of at least 120 million USDP.

* Facilitation Incentives shall accrue daily and be calculated by multiplying the balance of USDP within the USDP PSM at 11:59 PM UTC on such day by 2.25% and 1/365 (the “**Daily Facilitation Incentive**”).

* The Daily Facilitation Incentives shall be aggregated on the first business day following the end of the applicable calendar month (the “**Monthly Facilitation Incentives**”) and shall be reported by Trident to Pinwheel within five (5) business days and paid by Trident by the fifteenth (15th) calendar day of the subsequent calendar month.

* Trident shall pay Pinwheel an upfront Facilitation Incentive of 3.25 million USDP (the “**Upfront Facilitation Incentive**”) within seven (7) days of the MoU signing.

* All USDP payments shall be made by Trident to the [RwaSwapInputConduit2](https://etherscan.io/address/0xda276ab5f1505965e0b6cd1b6da2a18ccbb29515) contract, which, from time to time, will be manually triggered by any third party to swap the USDP and mint an equivalent amount of DAI to be sent to the MakerDAO Surplus Buffer.

* Daily Facilitation Incentives will be waived on those days where (i) the USDP PSM is locked and the USDP in the USDP PSM is no longer redeemable for more than sixteen (16) hours on such day; or (ii) any PSM (including the USDP PSM) experiences a breach or failure that leads to any funds being stolen.

### RETH-A Initial Offboarding

*Authorization*: [Ecosystem Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-6/22231/4)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-6/22231) "Stability Scope Parameter Changes #6"

If this executive proposal passes, RETH-A offboarding will be initiated, following the rules of [MIP62: Collateral Offboarding Process](https://mips.makerdao.com/mips/details/MIP62). This executive will take the following actions to start the offboarding of the vault:

- RETH-A will be removed from the [Debt Ceiling Instant Access Module (`autoline`)](https://manual.makerdao.com/module-index/module-dciam).
- RETH-A will have its [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) set to **0**.
  
### Reconfiguring RWA Allocator Vaults

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmPoLbah)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/poll-request-reconfiguring-rwa-allocator-vaults/22159) "Poll Request: Reconfiguring RWA Allocator Vaults"

If this executive proposal passes, Andromeda (RWA015-A) and Clydesdale (RWA007-A) will have the following parameters changed:

**Clydesdale RWA007-A**

- Reactivate the [Debt Ceiling Instant Access Module](https://manual.makerdao.com/module-index/module-dciam) for this vault type. 
- Set the [Target Available Debt (gap)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) to **50 million DAI**.
- Set the [Ceiling Increase Cooldown (ttl)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) to **86400 (24 hours)**.
- Set the [Maximum Debt Ceiling (line)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) to **3 billion DAI**.

**Andromeda RWA015-A**

- Set the [Maximum Debt Ceiling (line)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) to **3 billion DAI**.

### WBTC DC-IAM Changes (Non-Scope Defined)  

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmNty2pa)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-6/22231) "Stability Scope Parameter Changes #6"

If this executive proposal passes, the following changes will be made to the DC-IAM [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) (`gap`) parameter for WBTC vault types:

* Reduce the WBTC-A DC-IAM Target Available Debt from 10 million DAI to **2 million DAI**.
* Reduce the WBTC-B DC-IAM Target Available Debt from 5 million DAI to **2 million DAI**.
* Reduce the WBTC-C DC-IAM Target Available Debt from 10 million DAI to **2 million DAI**.

### Stability Fee Changes

*Authorization*: [Ecosystem Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-6/22231/5)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-6/22231) "Stability Scope Parameter Changes #6"

If this executive proposal passes, the following changes will be made to the [Stability Fees](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) of the indicated vaults:

* Increase the ETH-A Stability Fee by 1.55%, from 3.70% to **5.25%**.
* Increase the ETH-B Stability Fee by 1.55%, from 4.20% to **5.75%**.
* Increase the ETH-C Stability Fee by 1.55%, from 3.45% to **5.00%**.
* Increase WBTC-A Stability Fee by 0.06%, from 5.8% to **5.86%**.
* Increase WBTC-B Stability Fee by 0.06%, from 6.30% to **6.36%**.
* Increase WBTC-C Stability Fee by 0.06%, from 5.55% to **5.61%**.

### Aligned Voter Committee (AVC) Member Quarterly Compensation

*Authorization*: [Atlas (MIP101)](https://mips.makerdao.com/mips/details/MIP101#2-5-10-1)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/avc-member-participation-rewards-q3-2023/22349) "AVC Member Participation Rewards - Q3 2023"

If this executive proposal passes, the following distributions will be made to qualified AVC members for Q3 Compensation, totaling **137.61 MKR**:

| AVC Member Name | Address                                                                                                               | AVC                  | Amount (MKR) |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|----------------------|--------------|
| opensky         | [0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04](https://etherscan.io/address/0x8e67ee3bbeb1743dc63093af493f67c3c23c6f04) | Composable           | 20.85        |
| DAI-Vinci       | [0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a](https://etherscan.io/address/0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a) | KISS                 | 12.51        |
| IamMeeoh        | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | KISS                 | 20.85        |
| ACRE DAOs       | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd) | Regenerative Finance | 20.85        |
| Harmony         | [0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3](https://etherscan.io/address/0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3) | Resiliency           | 20.85        |
| Res             | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784) | Resiliency           | 20.85        |
| seedlatam.eth   | [0x0087a081a9b430fd8f688c6ac5dd24421bfb060d](https://etherscan.io/address/0x0087a081a9b430fd8f688c6ac5dd24421bfb060d) | Sovereign Finance    | 20.85        |

### Aligned Delegate (AD) Member Monthly Compensation

*Authorization*: [Atlas (MIP101)](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-ad-income-and-participation-requirements)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/september-2023-aligned-delegate-compensation/22367) "September 2023 Aligned Delegate Compensation"

If this executive proposal passes, the following distributions will be made to qualified AD members for September Compensation, totaling **269.28 MKR**:

| Delegate    | Address                                                                                              | Amount (MKR) |
|-------------|------------------------------------------------------------------------------------------------------|--------|
| 0xDefensor  | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 41.67  |
| TRUE NAME   | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 41.67  |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 41.67  |
| Navigator   | [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 41.67  |
| vigilant    | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 34.5   |
| Cloaky      | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) | 21.06  |
| UPMaker     | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 13.89  |
| PALC        | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 13.89  |
| BLUE        | [0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf](https://etherscan.io/address/0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf) | 12.78  |
| PBG         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 6.48   |


### Governance Facilitator Payment Streams

*Authorization*: [Governance Poll](https://mips.makerdao.com/mips/details/MIP113#7-1-1-1-1a)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/mip102c2-sp16-mip-amendment-subproposal/21579) "MIP102c2-SP16: MIP Amendment Subproposal"

If this executive proposal passes, the following DAI and MKR streams will be set up for Governance Facilitators JanSky and VoteWizard:

| Recipient  | Stream Dates                                | Amount     | Token | Address                                                                                                               |
|------------|---------------------------------------------|------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| JanSky     | 2023-10-01 00:00:00 to  2024-09-30 23:59:59 | 504,000.00 | DAI   | [0xf3F868534FAD48EF5a228Fe78669cf242745a755](https://etherscan.io/address/0xf3F868534FAD48EF5a228Fe78669cf242745a755) |
| VoteWizard | 2023-10-01 00:00:00 to  2024-09-30 23:59:59 | 504,000.00 | DAI   | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) |
| JanSky     | 2023-10-01 00:00:00 to  2024-09-30 23:59:59 |     216.00 | MKR   | [0xf3F868534FAD48EF5a228Fe78669cf242745a755](https://etherscan.io/address/0xf3F868534FAD48EF5a228Fe78669cf242745a755) |
| VoteWizard | 2023-10-01 00:00:00 to  2024-09-30 23:59:59 |     216.00 | MKR   | [0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1](https://etherscan.io/address/0x9E72629dF4fcaA2c2F5813FbbDc55064345431b1) |

### BA Labs Quarterly MKR Compensation 

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmUAXKm4)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/mip40c3-sp25-risk-core-unit-mkr-compensation-risk-001/9788) "MIP40C3-SP25: Risk Core Unit MKR Compensation (RISK-001)"

If this executive proposal passes, **175** MKR will be distributed to [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c) for BA Labs' Quarterly MKR Compensation.

### SparkLend Proxy-Spell

*Authorization*: Governance Polls [1](https://vote.makerdao.com/polling/QmQpNDXG), [2](https://vote.makerdao.com/polling/QmUqRvBm), [3](https://vote.makerdao.com/polling/QmX95EAi)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/proposal-to-onboard-usdc-and-usdt-to-sparklend-ethereum/22227) "Proposal to onboard USDC and USDT to SparkLend Ethereum"

If this executive proposal passes, a proxy-spell will be executed for SparkLend containing the following major items:

- Increase rETH [Supply Cap](https://docs.sparkprotocol.io/developers/sparklend/features/supply-borrow-caps#supply-caps) from 20,000 DAI to **60,000 DAI**.
- Add USDC as a borrow-only market.
- Add USDT as a borrow-only market.
- Activate USD [eMode](https://docs.sparkprotocol.io/developers/sparklend/features/efficiency-mode-emode) for sDAI, USDT, and USDC.


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
