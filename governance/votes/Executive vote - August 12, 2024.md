---
title: Template - [Executive Vote] WBTC Vault Debt Ceiling Reductions, Stability Scope Parameter Changes, Bug Bounty Payments, ClipperMomJob Update, July 2024 Aligned Delegate Compensation, 6S Capital Stability Fee Increase, Monetalis Clydesdale and Coinbase Custody DAO Resolutions, Spark Proxy Spell - August 12, 2024
summary: Reduce Debt Ceiling for WBTC Vaults, reduce Native Vault Stability Fees and the Dai Savings Rate (DSR), pay bug bounty rewards, activate a new Clipper Mom keeper job, pay Aligned Delegate compensation for July 2024, increase the 6S Capital (RWA001-A) Stability Fee, approve a DAO Resolution pertaining to Monetalis Clydesdale and Coinbase Custody, trigger a Spark proxy spell. 

date: 2024-08-12T00:00:00.000Z
address: "0xc25A71BDF956229a035e35e8038d3FeE4aBa101C"

---
# [Executive Proposal] WBTC Vault Debt Ceiling Reductions, Stability Scope Parameter Changes, Bug Bounty Payments, ClipperMomJob Update, July 2024 Aligned Delegate Compensation, 6S Capital Stability Fee Increase, Monetalis Clydesdale and Coinbase Custody DAO Resolution, Spark Proxy Spell - August 12, 2024

The Governance Facilitators and Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Maker Protocol:

- The Debt Ceiling for all WBTC vaults will be reduced.
- Multiple Native Vault Stability Fees will be reduced.
- The Dai Savings Rate (DSR) will be reduced.
- A total of **110,000 DAI** will be paid to two addresses as part of the bug bounty program.
- A new version of the Clipper Mom keeper job will be activated.
- A total of **30.38 MKR** and **128,672 DAI** will be distributed to six Aligned Delegates and their teams as compensation for July 2024.
- The 6S Capital (RWA001-A) Stability Fee will be increased to **9%**.
- A DAO Resolution with the hash [QmaYKt61v6aCTNTYjuHm1Wjpe6JWBzCW2ZHR4XDEJhjm1R](https://ipfs.io/ipfs/QmaYKt61v6aCTNTYjuHm1Wjpe6JWBzCW2ZHR4XDEJhjm1R) for Monetalis Clydesdale will be approved.
- A Spark Proxy Spell will be triggered at [0x85042d44894E08f81D70A2Ae568C09f907297dcb](https://etherscan.io/address/0x85042d44894E08f81D70A2Ae568C09f907297dcb).

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://mips.makerdao.com/mips/details/MIP113#10-1-1a).

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### WBTC Vault Debt Ceiling Reductions

- **Authorization**: [Forum post](http://forum.makerdao.com/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844)

If this executive proposal passes, the following changes will be made:

- WBTC-A, WBTC-B, and WBTC-C will be **removed** from the [Debt Ceiling Instant Access Module (DC-IAM)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-4-debt-ceiling-instant-access-module-dc-iam-).
- WBTC-A Debt Ceiling will be set to **0 DAI**.
- WBTC-B Debt Ceiling will be set to **0 DAI**.
- WBTC-C Debt Ceiling will be set to **0 DAI**.

These changes will prevent further borrowing from these vaults but existing positions will not be liquidated.

### [Stability Fee](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) Reductions

- **Authorization**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-15-sfs-dsr-spark-effective-dai-borrow-rate-reduction/24834/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-15-sfs-dsr-spark-effective-dai-borrow-rate-reduction/24834)

If this executive proposal passes, then the following Stability Fee reductions will be made:

- ETH-A: Decrease Stability Fee by 1 percentage point, from 7.25% to **6.25%**.
- ETH-B: Decrease Stability Fee by 1 percentage point, from 7.75% to **6.75%**.
- ETH-C: Decrease Stability Fee by 1 percentage point, from 7.00% to **6.00%**.
- WSTETH-A: Decrease Stability Fee by 1 percentage point, from 8.25% to **7.25%**.
- WSTETH-B: Decrease Stability Fee by 1 percentage point, from 8.00% to **7.00%**.
- WBTC-A: Decrease Stability Fee by 1 percentage point, from 8.75% to **7.75%**.
- WBTC-B: Decrease Stability Fee by 1 percentage point, from 9.25% to **8.25%**.
- WBTC-C: Decrease Stability Fee by 1 percentage point, from 8.50% to **7.50%**.

### [Dai Savings Rate (DSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-the-dai-savings-rate) Reduction

- **Authorization**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-15-sfs-dsr-spark-effective-dai-borrow-rate-reduction/24834/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-15-sfs-dsr-spark-effective-dai-borrow-rate-reduction/24834)

If this executive proposal passes, then the following reduction to the DSR will be made:

- Decrease the DSR by 1 percentage point, from 7.00% to **6.00%**.

### Bug Bounty Payments

- **Authorization**: [Support Scope 13.1](https://mips.makerdao.com/mips/details/MIP106#13-1-bug-bounty-program-for-makerdao-critical-infrastructure)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-32005/24605)

If this executive proposal passes, then the following payments as part of the bug bounty program will be distributed.

- **100,000 DAI** will be transferred to [0xA4a6B5f005cBd2eD38f49ac496d86d3528C7a1aa](https://etherscan.io/address/0xA4a6B5f005cBd2eD38f49ac496d86d3528C7a1aa).
- **10,000 DAI** will be transferred to [0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18 (immunefi.eth)](https://etherscan.io/address/0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18).

A technical explanation of the rationale for the bug bounty payment can be found in this [forum comment](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-32005/24605/3).

### ClipperMomJob Update

- **Authorization**: [Forum post](https://forum.makerdao.com/t/executive-inclusion-clippermomjob-update/24774/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/executive-inclusion-clippermomjob-update/24774/)

If this executive proposal passes, the Keeper Network's ClipperMomJob will be updated through the following contract calls:

- `sequencer.removejob(0xc3a76b34cfbda7a3a5215629a0b937cbdec7c71a)`.
- `sequencer.addjob(0x7E93C4f61C8E8874e7366cDbfeFF934Ed089f9fF)`.

The chainlog entry for CRON_CLIPPER_MOM_JOB will also be updated to the new address. The new ClipperMomJob is deployed at [0x7E93C4f61C8E8874e7366cDbfeFF934Ed089f9fF](https://etherscan.io/address/0x7E93C4f61C8E8874e7366cDbfeFF934Ed089f9fF) and the code is available on GitHub [here](https://github.com/makerdao/dss-cron/tree/clipper-mom-try-all-classes).

### July 2024 Aligned Delegate Compensation

- **Authorization**: [Atlas 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-budget-and-participation-requirements)
- **Proposal**: Forum posts ([1](https://forum.makerdao.com/t/july-2024-aligned-delegate-payment-requests/24794), [2](https://forum.makerdao.com/t/july-2024-aligned-delegate-compensation/24818))

If this executive proposal passes, then a total of **30.38 MKR** and **128,672 DAI** will be distributed to six Aligned Delegates and their teams as compensation for July 2024.

#### MKR Distributions

| Delegate    | Amount (MKR) | Address                                                                                         |
|-------------|------------------|-------------------------------------------------------------------------------------------------|
| BLUE        | 13.75            | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky      | 12.00            | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| Byteron     | 1.25             | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| JuliaChang  | 1.25             | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Rocky       | 1.13             | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |
| PBG         | 1.00             | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |

#### DAI Distributions

| Delegate       | Amount (DAI) | Address                                                                                         |
|----------------|--------------|-------------------------------------------------------------------------------------------------|
| BLUE           | 54,167       | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) |
| Cloaky         | 20,417       | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) |
| Kohla (Cloaky) | 14,172       | [0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a](https://etherscan.io/address/0x73dFC091Ad77c03F2809204fCF03C0b9dccf8c7a) |
| Ennoia (Cloaky)| 9,083        | [0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b](https://etherscan.io/address/0xA7364a1738D0bB7D1911318Ca3FB3779A8A58D7b) |
| Byteron        | 8,333        | [0xc2982e72D060cab2387Dba96b846acb8c96EfF66](https://etherscan.io/address/0xc2982e72D060cab2387Dba96b846acb8c96EfF66) |
| JuliaChang     | 8,333        | [0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7](https://etherscan.io/address/0x252abAEe2F4f4b8D39E5F12b163eDFb7fac7AED7) |
| Rocky          | 7,500        | [0xC31637BDA32a0811E39456A59022D2C386cb2C85](https://etherscan.io/address/0xC31637BDA32a0811E39456A59022D2C386cb2C85) |
| PBG            | 6,667        | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) |

### 6S Capital [Stability Fee](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) Increase

- **Authorization**: [Forum post](https://forum.makerdao.com/t/rwa-001-6s-capital-update-and-stability-fee-proposal/24624/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/rwa-001-6s-capital-update-and-stability-fee-proposal/24624/)

If this executive proposal passes, the [6S Capital (RWA001-A)](https://makerburn.com/#/collateral/RWA001-A) Stability Fee will be increased as follows:

- Increase the RWA001-A Stability Fee by 6 percentage points from 3% to **9%**.

Please note that the onchain Stability Fee is a technical artefact and does not always represent the effective interest rate applied offchain, please see the following information from the original proposal:

```text
As per the terms of the credit agreement, the rate of the loan from RWA Master Lending Trust to 6s Capital Partners LLC can increase at a maximum quarterly rate of 2.00%. As such, the Q3 2024 rate will be 3.00%; the effective rate will then change to 5.00% for Q4 2024, followed by 7.00% for Q1 2025 and 9.00% for Q2 2025 until the maturity of the loan in July 2025. This rate increase has been previously discussed with 6s, who has confirmed that the new rate is acceptable and can be supported by the underlying portfolio.
```

### Monetalis Clydesdale and Coinbase Custody DAO Resolutions

- **Authorization**: [Forum post](https://forum.makerdao.com/t/clydesdale-vault-hq/17923/95)
- **Proposal**: [Forum post](http://forum.makerdao.com/t/clydesdale-vault-hq/17923/88)

If this executive proposal passes, the following DAO Resolution authorizing the actions needed for the winddown of the Monetalis Clydesdale and Coinbase Custody facilities will be approved:

- Approve Monetalis Clydesdale and Coinbase Custody DAO Resolution with IPFS hash [QmaYKt61v6aCTNTYjuHm1Wjpe6JWBzCW2ZHR4XDEJhjm1R](https://ipfs.io/ipfs/QmaYKt61v6aCTNTYjuHm1Wjpe6JWBzCW2ZHR4XDEJhjm1R).

### Spark Proxy Spell

If this executive proposal passes, a Spark Proxy Spell will be triggered at [0x85042d44894E08f81D70A2Ae568C09f907297dcb](https://etherscan.io/address/0x85042d44894E08f81D70A2Ae568C09f907297dcb). This proxy spell will include three items.


#### [Mainnet] Lido Liquid Staking Token (LST) Yield Oracle and Linked Interest Rate Model (IRM) Activation

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/jul-27-2024-proposed-changes-to-spark-for-upcoming-spell/24755/3), [Poll](https://vote.makerdao.com/polling/QmdFCRfK)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/jul-27-2024-proposed-changes-to-spark-for-upcoming-spell/24755)

This proxy spell will activate the Lido LST yield oracle and the linked IRM for the mainnet ETH market on SparkLend with the following parameters:

- [`base rate`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **0%**.
- [`variableRateSlope1Spread`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **0%**.
- [CappedFallbackRateSource `upperBound`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **5.5%**.
- [CappedFallbackRateSource `lowerBound`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **2%**.
- [CappedFallbackRateSource `defaultRate`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **3%**.
- [`slope 2`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **120%**.

The following contracts will be used:

- Chronicle LST Oracle: [0x08669C836F41AEaD03e3EF81a59f3b8e72EC417A](https://etherscan.io/address/0x08669C836F41AEaD03e3EF81a59f3b8e72EC417A).
- Rate Range Enforcement: [sparklend-advanced/src/CappedFallbackRateSource.sol at master · marsfoundation/sparklend-advanced · GitHub](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/CappedFallbackRateSource.sol).
- IRM: [sparklend-advanced/src/RateTargetKinkInterestRateStrategy.sol at master · marsfoundation/sparklend-advanced · GitHub](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/RateTargetKinkInterestRateStrategy.sol).

#### [Mainnet] Spark Effective DAI Borrow Rate Reduction

- **Authorization**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-15-sfs-dsr-spark-effective-dai-borrow-rate-reduction/24834/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-15-sfs-dsr-spark-effective-dai-borrow-rate-reduction/24834)

This proxy spell will make the following change to the SparkLend Effective DAI Borrow Rate on mainnet:

- Decrease the Spark Effective DAI Borrow Rate by 1 percentage point, from 8.00% to **7.00%**.

#### [Mainnet] WBTC Risk Mitigations

- **Authorization**: [Forum post](http://forum.makerdao.com/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/wbtc-changes-and-risk-mitigation-10-august-2024/24844)

This proxy spell will make the following changes to SparkLend on mainnet:

- Disable WBTC borrowing.
- Reduce WBTC [Loan-to-Value (LTV)](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value) by 74 percentage points from 74% to **0%**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
