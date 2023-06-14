---
title: Template - [Executive Vote] BlockTower Andromeda (RWA015-A) Onboarding, Risk Parameter Changes, DSR Increase, Spark Protocol Proxy Activation, MKR Vesting Transfers - June 14, 2023
summary: Onboarding BlockTower Andromeda (RWA015-A); BlockTower vault Debt Ceiling changes; Stability Fee updates, Spark Protocol D3M and RETH-A Maximum Debt Ceiling and Target Available Debt increases; DSR increase; activation of the Spark Protocol Proxy; and MKR vesting transfers for Sidestream and DUX Core Units.
date: 2023-06-14T00:00:00.000Z
address: "0x9E16c8B4C998604471EA0e63ECBb6d6d30F07fA0"

---
# [Executive Proposal] BlockTower Andromeda (RWA015-A) Onboarding, Risk Parameter Changes, DSR Increase, Spark Protocol Proxy Activation, MKR Vesting Transfers - June 14, 2023

The Governance Facilitator, Sidestream, dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Changes to the BlockTower RWA vault Debt Ceilings will be made, as detailed below.
- Multiple risk parameters will be changed including Stability Fees, Maximum Debt Ceilings, and Target Available Debts, as detailed below.
- The Dai Savings Rate will be increased to **3.49%**, as detailed below.
- The USDP PSM Debt Ceiling will be reduced to **0 DAI**.
- MKR vesting transfers totalling **573.4 MKR** will be made to the Sidestream and DUX Core Units.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- BlockTower Andromeda (RWA015-A) will be onboarded as a new vault type with a temporarily limited Debt Ceiling, as detailed below.
- The executive proxy for Spark Protocol (`SUBPROXY_SPARK`) will be authorized, as detailed below.

If this executive proposal passes, a **proxy spell for Spark Protocol** will be triggered, containing the following items:
- Onboard rETH to Spark Protocol, as detailed below.
- Adjust the DAI Interest Rate Strategy for Spark Protocol to match the Dai Savings Rate, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### BlockTower Andromeda (RWA015-A) Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmbudkVR) BlockTower Andromeda will be onboarded as RWA015-A with the parameters listed below, if this executive proposal passes.

Note that the initial onboarding will use a temporarily reduced Debt Ceiling of 2.5 million DAI to ensure that the structure works as intended. The Debt Ceiling will be increased in a future executive proposal.

#### Collateral Parameters

- [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): **0%** - fees are calculated off-chain and returned manually.
- [Autoline (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam): **Not for initial deployment, will be added when Debt Ceiling is increased**.
- [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): **2.5 million DAI**.
- [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): **100%**.
- Oracle Price: **2.5 million DAI**.
- Debt write-off timelock (`tau`): **0**.
- Liquidation Process: Will use the established RWA collateral contracts. See [MIP21](https://mips.makerdao.com/mips/details/MIP21) for details.
- [RWA Agreement (`doc`)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement): QmdbPyQLDdGQhKGXBgod7TbQmrUJ7tiN9aX1zSL7bmtkTN - [view here](https://gateway.pinata.cloud/ipfs/QmdbPyQLDdGQhKGXBgod7TbQmrUJ7tiN9aX1zSL7bmtkTN).

#### Relevant Smart Contract Information

- **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`. 
- **RWA_TOKEN_FAB:** `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
- **SYMBOL:** `RWA015`.
- **NAME:** `RWA-015`.
- **ILK:** `RWA015-A`.
- **RWA015:** `0xf5E5E706EfC841BeD1D24460Cd04028075cDbfdE`
- **MCD_JOIN_RWA015_A:** `0x8938988f7B368f74bEBdd3dcd8D6A3bd18C15C0b`.
- **RWA015_A_URN:** `0xebFDaa143827FD0fc9C6637c3604B75Bbcfb7284`.
- **RWA015_A_JAR:** `0xc27C3D3130563C1171feCC4F76C217Db603997cf`.
- **RWA015_A_OUTPUT_CONDUIT:** `0xC35E60736ec2E3de612535dba2dFB1f4130C82c3`.
- **RWA015_A_INPUT_CONDUIT_URN:** `0xe08cb5E24862eA86328295D5E5c08972203C20D8`.
- **RWA015_A_INPUT_CONDUIT_JAR:** `0xB9373C557f3aE8cDdD068c1644ED226CfB18A997`.
- **RWA015_A_OPERATOR:** `0x23a10f09fac6ccdbfb6d9f0215c795f9591d7476`.
- **ETH_Address_A (USDC Wallet In):** `0x65729807485F6f7695AF863d97D62140B7d69d83`.

#### Additional Information

Please review the following forum threads containing information about RWA015 (BlockTower Andromeda) to inform your position before voting:
- [Initial Collateral Application](https://forum.makerdao.com/t/mip90-liquid-aaa-structured-credit-money-market-fund/18428).
- [Steakhouse Financial Legal & Risk Assessment](https://forum.makerdao.com/t/project-andromeda-risk-legal-assessment/20969).
- [dewiz Technical Assessment](https://forum.makerdao.com/t/rwa015-project-andromeda-technical-assessment/20974).

### BlockTower RWA Vault [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) Changes

As per [this poll](https://vote.makerdao.com/polling/QmPMrvfV) the following changes to the BlockTower RWA Vault Debt Ceiling parameters will be made, if this executive proposal passes:
- Decrease the RWA010-A Debt Ceiling by 20 million DAI from 20 million DAI to **zero DAI**.
- Decrease the RWA011-A Debt Ceiling by 30 million DAI from 30 million DAI to **zero DAI**.
- Increase the RWA012-A Debt Ceiling by 50 million DAI from 30 million DAI to **80 million DAI**.

To facilitate these changes, the [RWA Agreement (`doc`)](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) for RWA010-A, RWA011-A, RWA012-A, and RWA013-A will be updated to **QmY382BPa5UQfmpTfi6KhjqQHtqq1fFFg2owBfsD2LKmYU**, the agreement details may be [viewed here](https://gateway.pinata.cloud/ipfs/QmY382BPa5UQfmpTfi6KhjqQHtqq1fFFg2owBfsD2LKmYU).

### Stability Scope Defined Parameter Changes

As per the [Stability Scope](https://mips.makerdao.com/mips/details/MIP104), and the [adjustments to the base rate](https://forum.makerdao.com/t/stability-scope-parameter-changes-2-non-scope-defined-parameter-changes-may-2023/20981/7), the following parameter changes will be made, if this executive proposal passes:

#### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Increase
- Increase the DSR by 2.49% from 1% to **3.49%**.

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Increases
- Increase the ETH-A Stability Fee by 1.99% from 1.75% to **3.74%**.
- Increase the ETH-B Stability Fee by 0.99% from 3.25% to **4.24%**.
- Increase the ETH-C Stability Fee by 2.49% from 1% to **3.49%**.
- Increase the WSTETH-A Stability Fee by 1.99% from 1.75% to **3.74%**.
- Increase the WSTETH-B Stability Fee by 2.49% from 1% to **3.49%**.

### Non-Scope Defined Paramater Changes

As per [this poll](https://vote.makerdao.com/polling/QmQXhS3Z), the following parameter changes will be made, if this executive proposal passes:

#### RETH-A Parameter Changes
- Increase the RETH-A [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 30 million DAI from 20 million DAI to **50 million DAI**.
- Increase the RETH-A [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 2 million DAI from 3 million DAI to **5 million DAI**.
- Increase the RETH-A [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) by 2.99% from 0.75% to **3.74%**.

#### Other [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Increases
- Increase the CRVV1ETHSTETH-A Stability Fee by 2.49% from 1.75% to **4.24%**.
- Increase the WBTC-A Stability Fee by 0.9% from 4.90% to **5.80%**.
- Increase the WBTC-B Stability Fee by 1.4% from 4.90% to **6.30%**.
- Increase the WBTC-C Stability Fee by 0.65% from 4.90% to **5.55%**.

### USDP PSM [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) Reduction

As per [this poll](https://vote.makerdao.com/polling/QmQYSLHH), the following change to the USDP PSM Debt Ceiling will be made, if this executive proposal passes:
- Reduce the USDP PSM (technical name PSM-PAX-A) Debt Ceiling by 500 million DAI from 500 million DAI to **zero DAI**.

*Technical implementation note:* to achieve this, the USDP PSM will be removed from the Autoline (DC-IAM) and have its Debt Ceiling set to 0. However, the [Global Debt Ceiling (`Line`)](https://manual.makerdao.com/parameter-index/core/param-global-debt-ceiling) will not be reduced at the same time. This is to leave a suitable buffer to prevent a situation where the total Dai supply exceeds the Global Debt Ceiling, which would prevent new Dai from being minted.

### MKR Vesting Transfers

The following MKR vesting transfers will be made, if this executive proposal passes:

#### Sidestream Core Unit

As per their [approved budget](https://mips.makerdao.com/mips/details/MIP40c3SP44), **348.28 MKR** will be transferred to the Sidestream Auditor Wallet at [0xb1f950a51516a697E103aaa69E152d839182f6Fe](https://etherscan.io/address/0xb1f950a51516a697E103aaa69E152d839182f6Fe).

*Note:* the distributed amount has differed from the initial estimate due to Sidestream [repricing](https://forum.makerdao.com/t/mip40c3-sp44-adding-sidestream-auction-services-core-unit-mkr-budget-sas-001/10802/7) their vesting plan. It remains within the overall approved cap.

#### DUX Core Unit

As per their [approved budget](https://mips.makerdao.com/mips/details/MIP40c3SP27), **225.12 MKR** will be transferred to the DUX Auditor Wallet at [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad).

*Note:* the distributed amount has differed from the initial estimate due to additional hires. It remains within the overall approved cap.

### Spark Protocol [Dai Direct Deposit Module](https://manual.makerdao.com/module-index/module-dai-direct-deposit) (D3M) Parameter Changes

As per [this poll](https://vote.makerdao.com/polling/QmWatYqy), the following Spark Protocol D3M parameter changes will be made, if this executive proposal passes:
- Increase the [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) by 15 million DAI from 5 million DAI to **20 million DAI**.
- Increase the [Target Availible Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) by 15 million DAI from 5 million DAI to **20 million DAI**.

### Spark Protocol Proxy (`SUBPROXY_SPARK`) Authorization

As per [this poll](https://vote.makerdao.com/polling/Qmc9fd3j), a Spark Protocol Proxy will be authorized by this spell to allow parallel production of executive proposals covering Spark Protocol. This will allow the Spark Protocol team to prepare code separately, but any changes will not be active until triggered by a Maker Core executive proposal.

If passed this executive proposal will:
- Give the Spark Proxy admin access on Spark Protocol.
- Add the Spark Proxy to the [Emergency Shutdown Module](https://docs.makerdao.com/smart-contract-modules/shutdown/emergency-shutdown-module).
- Trigger the Spark Proxy spell actions listed below.

*Technical implementation note:* The Spark Proxy will be given admin access by calling `ACLManagerLike(SPARK_ACL_MANAGER).addPoolAdmin(SPARK_PROXY)`. The Spark ACL Manager address is [0xdA135Cd78A086025BcdC87B038a1C462032b510C](https://etherscan.io/address/0xdA135Cd78A086025BcdC87B038a1C462032b510C) and the Spark Proxy address is [0x3300f198988e4C9C63F75dF86De36421f06af8c4](https://etherscan.io/address/0x3300f198988e4C9C63F75dF86De36421f06af8c4).

The Spark Proxy spell address is [0x41D7c79aE5Ecba7428283F66998DedFD84451e0e](https://etherscan.io/address/0x41D7c79aE5Ecba7428283F66998DedFD84451e0e#code).

More information on the Spark Proxy can be found [here](https://forum.makerdao.com/t/executive-proxies-and-spark-protocol/20976).

#### Spark Proxy Spell Contents

**rETH Onboarding to Spark Protocol**

As per [this poll](https://vote.makerdao.com/polling/QmeEV7ph), rETH will be onboarded to Spark Protocol with the following parameters, if this executive proposal passes:

- Token: **rETH**.
- Token Address: **[0xae78736cd615f374d3085123a210448e74fc6393](https://etherscan.io/address/0xae78736cd615f374d3085123a210448e74fc6393)**.
- Oracle: **[0x05225Cd708bCa9253789C1374e4337a019e99D56](https://etherscan.io/address/0x05225Cd708bCa9253789C1374e4337a019e99D56)**.
- Oracle Provider: **Chainlink**.
- Borrow Enabled: **Yes**.
- Optimal Usage Ratio: **45%**.
- [Base Borrow](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate): **0%**.
- Slope 1: **7%**.
- Slope 2: **300%**.
- Collateral Enabled: **Yes**.
- [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled: **No**.
- [Loan To Value](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value): **68.50%**.
- [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold): **79.50%**.
- Liquidation Bonus: **7%**.
- Liquidation Protocol Fee: **10%**.
- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **15%**.
- [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps): **20,000 rETH**.
- [Borrow Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#borrow-caps): **2,400 rETH**.
- [Flashloanable](https://docs.sparkprotocol.io/developers/guides/flash-loans): **Yes**.
- [E-Mode](https://docs.sparkprotocol.io/developers/features/efficiency-mode-emode): **ETH Category**.

*ETH Category E-Mode Parameters*

The ETH Category E-mode configuration was set at the time of Spark Protocol's deployment. The parameters are listed here for informational purposes.
- LTV: **90%**.
- Liquidation Threshold: **93%**.
- Liquidation Bonus: **1%**.

**DAI Interest Rate Strategy Change**

As per [this poll](https://vote.makerdao.com/polling/QmWodV1J), the DAI Interest Rate Strategy for Spark Protocol will be changed to target a borrow rate equal to the Dai Savings Rate.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
