---
title: Template - [Executive Vote] MKR-to-SKY Upgrade Phase One, Adding Protego To the Chainlog, Spark Proxy Spell - May 15, 2025
summary: Execute MKR-to-SKY Upgrade Phase One, adding Protego to the Chainlog, execute Spark Proxy Spell.
date: 2025-05-15T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] MKR-to-SKY Upgrade Phase One, Adding Protego to the Chainlog, Spark Proxy Spell - May 15, 2025

The Governance Facilitators, Sidestream, and Dewiz have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- Phase One of the MKR-to-SKY upgrade will be executed as described below.
- Protego will be added to the [Chainlog](https://chainlog.sky.money).
- A Spark Proxy Spell will be executed.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**48 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### MKR-to-SKY Upgrade Phase One

- **Authorization**: [A.4.1.2.1.1 - MKR To SKY Upgrade Phase One](https://sky-atlas.powerhouse.io/A.4.1.2.1.1_MKR_To_SKY_Upgrade_Phase_One/1f1f2ff0-8d73-8006-b95a-f830d28d4645|b341f4c0b83472dc), [Ecosystem Approval](http://forum.sky.money/t/technical-scope-of-the-chief-migration/26361/3)
- **Proposal**: Forum post [1](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-5-2025/26319), [2](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-12-2025/26364), [3](https://forum.sky.money/t/technical-scope-of-the-chief-migration/26361)

As part of the transition to the Endgame, the technical infrastructure of the Sky Protocol will be upgraded to use SKY as its governance token rather than MKR. The upgrade will take place over three phases described under [A.4.1.2.1 - MKR To SKY Upgrade](https://sky-atlas.powerhouse.io/A.4.1.2.1_MKR_To_SKY_Upgrade/d5af8504-ddd6-416d-8429-897497b072dc|b341f4c0b834). Phase One comprises the following actions:

- Disable conversion from SKY to MKR in the existing conversion contract.
- Launch new MKR-to-SKY conversion contract.
- Disable MKR Flop Auctions.
- Disable Emergency Shutdown Module.
- Launch new Chief Contract.
- Deploy New Vote Delegate Factory.
- Move the authority of the Spark Freezer MOM contract to the new Chief contract (through the Spark Proxy Spell).
- Launch the new SKY oracle and add the new SKY oracle to the Oracle Security Module MOM contract.
- Update Smart Burn Engine Parameters.
- Launch SKY staking.

If this executive proposal passes, then the above Phase One actions will be executed as described below.

#### Disable Conversion From SKY to MKR in Existing Conversion Contract

The functionality to convert SKY to MKR in the existing converter contract located at [0xBDcFCA946b6CDd965f99a839e4435Bcdc1bc470B](https://etherscan.io/address/0xBDcFCA946b6CDd965f99a839e4435Bcdc1bc470B) on the Ethereum Mainnet will be disabled.

#### Launch New MKR-to-SKY Conversion Contract

A new contract that allows the one-way upgrading from MKR to SKY has been pre-deployed at [0xA1Ea1bA18E88C381C724a75F23a130420C403f9a](https://etherscan.io/address/0xA1Ea1bA18E88C381C724a75F23a130420C403f9a). This contract:

- Will be authorized by calling `SkyInit.updateMkrSky`.
- Will support a Delayed Upgrade Penalty initially set to **0%**.
- Will have its conversion rate set to **1:24,000**.

#### Disable MKR Flop Auctions

[MKR flop auctions](https://sky-atlas.powerhouse.io/A.4.1.2.1.1.2.3_MKR_Flop_Auctions/1f1f2ff0-8d73-8049-986a-f0c728ebef62%7Cb341f4c0b83472dc46453ac873ab) will be disabled.

#### Disable [Emergency Shutdown Module](https://manual.makerdao.com/module-index/module-emergency-shutdown)

The Emergency Shutdown Module will be disabled by setting the amount of MKR required to trigger it to infinity.

#### Launch New Chief Contract

A new [Chief contract](https://sky-atlas.powerhouse.io/A.4.1.2.1.1.2.5_Chief_Contract/1f1f2ff0-8d73-805f-8f38-e788018540f4|b341f4c0b83472dc46453ac8256c) has been pre-deployed at [0x929d9A1435662357F54AdcF64DcEE4d6b867a6f9](https://etherscan.io/address/0x929d9A1435662357F54AdcF64DcEE4d6b867a6f9) to support voting with SKY instead of MKR.

#### Integrate New Vote Delegate Factory

A new Vote Delegate Factory contract has been pre-deployed at [0x4Cf3DaeFA2683Cd18df00f7AFF5169C00a9EccD5](https://etherscan.io/address/0x4Cf3DaeFA2683Cd18df00f7AFF5169C00a9EccD5). The Vote Delegate factory contract will support deploying Delegate Contracts that SKY holders and SKY Staking users can delegate their voting power to.

#### Integrate New SKY Chronicle Scribe Instance Oracle and Add it to the OSM_MOM Contract

A new Oracle Security Module based on the Scribe SKY oracle has been pre-deployed at [0x511485bBd96e7e3a056a8D1b84C5071071C52D6F](https://etherscan.io/address/0x511485bBd96e7e3a056a8D1b84C5071071C52D6F) and added to the OSM_MOM.

#### Update Smart Burn Engine Parameters

The parameters of the Smart Burn Engine will be updated as follows:

- The oracle will be changed to the new SKY oracle.
- The rewardsDuration for the LSEV2-SKY-A USDS rewards contract will be set so that it is equal to the `splitter.hop` parameter (**1,728 seconds**).

#### Launch Sky Staking

SKY Staking will be launched with the following parameters for borrowing against staked SKY:

- `Ilk`: **LSEV2-SKY-A**
- `Farms`: **LSSKY -> USDS at [0x38E4254bD82ED5Ee97CD1C4278FAae748d998865](https://etherscan.io/address/0x38E4254bD82ED5Ee97CD1C4278FAae748d998865)**
- `Fee`: **0**
- DC-IAM `line`: **Automatically handled by the migration script to allow migration only from existing MKR Staking positions.**
- DC-IAM `gap`: **Automatically handled by the migration script to allow migration only from existing MKR Staking positions.**
- DC-IAM `ttl`: **Automatically handled by the migration script to allow migration only from existing MKR Staking positions.**
- Only existing LSE-MKR-A users with drawn debt are allowed to migrate debt to LSEV2-SKY-A initially.
- [`Dust`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.6_Debt_Floor_(dust)-cea03e47-24a6-4efc-b482-56c183e5759a%7C57eaf45219bea3b430c2): **30,000 USDS**
- [`Duty`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.3_Stability_Fee-67e40a3b-f1c2-4dc6-b502-2affeab0b232%7C57eaf45219bea3b430c2): **20%**
- [`Mat`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.1_Liquidation_Ratio-1184ab96-8cad-4755-9798-2c8782304407%7C57eaf45219bea3b430c2): **125%**
- `Calc`: **StairstepExponentialDecrease**
- [`Buf`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.2_Auction_Price_Multiplier_(buf)-3ce44221-fe39-4904-9f86-0a1996cea8c6%7C57eaf45219bea3b430c2a59a): **120%**
- [`Tail`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.4_Max_Auction_Duration_(tail)-f8de0fc0-e452-4fc6-b67c-6da15df828f0%7C57eaf45219bea3b430c2a59a): **6,000 seconds**
- [`Cusp`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.3_Max_Auction_Drawdown_(cusp)-083ada9d-8d45-46ae-80d2-a3bb706e1e77%7C57eaf45219bea3b430c2a59a): **40%**
- [`Chip`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.5_Proportional_Kick_Incentive_(chip)-afecb109-75a7-4289-997e-2a6f3d3bea1e%7C57eaf45219bea3b430c2a59a): **0.1%**
- [`Tip`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.6_Flat_Kick_Incentive_(tip)-1c13687a-2dad-4e86-9940-024dc8f17a24%7C57eaf45219bea3b430c2a59a): **300 USDS**
- `Stopped`: **3**
- [`Chop`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.7_Liquidation_Penalty_(chop)-5295aa1f-3944-4fde-aaec-d999244b57e9%7C57eaf45219bea3b430c2a59a): **13%**
- [`Hole`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.8_Local_Liquidation_Limit_(hole)-fc22e62e-1f6b-4b10-b14a-ea7745185c67%7C57eaf45219bea3b430c2a59a): **250,000 USDS**
- [`Tau`](): **0 days**
- [`Cut`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.1.1_Auction_Price_Function_(cut)-b6e47d05-addf-4371-ad95-90582da7c0f1%7C57eaf45219bea3b430c2a59a6013): **0.99**
- [`Step`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.5.1.2_Auction_Price_Function_(step)-7d58c961-43ff-4157-80aa-8a92f577ec12%7C57eaf45219bea3b430c2a59a6013): **60 seconds**
- `LineMom`: **Yes**
- `Tolerance`: **0.5**
- `Name`: **LockstakeSky**
- `Symbol`: **lsSKY**
- Use the new SKY Chronicle Scribe oracle instance OSM.
- Deny the CLIPPER_MOM from the new lockstake clipper.

#### Phase One Migration Script

The Phase One actions listed above will be implemented by calling the `MigrationInit.initMigration` function as follows:

- Initialize Chief migration by calling `MigrationInit.initMigration` with the following parameters:
  - inst.chief: [**0x929d9A1435662357F54AdcF64DcEE4d6b867a6f9**](https://etherscan.io/address/0x929d9A1435662357F54AdcF64DcEE4d6b867a6f9)
  - inst.voteDelegateFactory: [**0x4Cf3DaeFA2683Cd18df00f7AFF5169C00a9EccD5**](https://etherscan.io/address/0x4Cf3DaeFA2683Cd18df00f7AFF5169C00a9EccD5)
  - inst.mkrSky: [**0xA1Ea1bA18E88C381C724a75F23a130420C403f9a**](https://etherscan.io/address/0xA1Ea1bA18E88C381C724a75F23a130420C403f9a)
  - inst.skyOsm: [**0x511485bBd96e7e3a056a8D1b84C5071071C52D6F**](https://etherscan.io/address/0x511485bBd96e7e3a056a8D1b84C5071071C52D6F)
  - inst.lsskyUsdsFarm: [**0x38E4254bD82ED5Ee97CD1C4278FAae748d998865**](https://etherscan.io/address/0x38E4254bD82ED5Ee97CD1C4278FAae748d998865)
  - inst.lockstakeInstance.lssky: [**0xf9A9cfD3229E985B91F99Bc866d42938044FFa1C**](https://etherscan.io/address/0xf9A9cfD3229E985B91F99Bc866d42938044FFa1C)
  - inst.lockstakeInstance.engine: [**0xCe01C90dE7FD1bcFa39e237FE6D8D9F569e8A6a3**](https://etherscan.io/address/0xCe01C90dE7FD1bcFa39e237FE6D8D9F569e8A6a3)
  - inst.lockstakeInstance.clipper:  [**0x35526314F18FeB5b7F124e40D6A99d64F7D7e89a**](https://etherscan.io/address/0x35526314F18FeB5b7F124e40D6A99d64F7D7e89a)
  - inst.lockstakeInstance.clipperCalc: [**0xB8f8c7caabFa320717E3e848948450e120F0D9BB**](https://etherscan.io/address/0xB8f8c7caabFa320717E3e848948450e120F0D9BB)
  - inst.lockstakeInstance.migrator: [**0x473d777f608C3C24B441AB6bD4bBcA6b7F9AF90B**](https://etherscan.io/address/0x473d777f608C3C24B441AB6bD4bBcA6b7F9AF90B)
  - cfg.maxYays: **5**
  - cfg.launchThreshold: **2,400,000,000 SKY (equivalent to 100,000 MKR)**
  - cfg.liftCooldown: **10 blocks**
  - cfg.skyOracle: [**0xc2ffbbDCCF1466Eb8968a846179191cb881eCdff**](https://etherscan.io/address/0xc2ffbbDCCF1466Eb8968a846179191cb881eCdff)
  - cfg.rewardsDuration: **Equal to the splitter.hop (1,728 seconds)**
  - cfg.lockstakeConfig.ilk: **"LSEV2-SKY-A"**
  - cfg.lockstakeConfig.farms: **array [StakingRewards: [0x38E4254bD82ED5Ee97CD1C4278FAae748d998865](https://etherscan.io/address/0x38E4254bD82ED5Ee97CD1C4278FAae748d998865)]**
  - cfg.lockstakeConfig.fee: **0**
  - cfg.lockstakeConfig.dust: **30,000 USDS**
  - cfg.lockstakeConfig.duty: **20%**
  - cfg.lockstakeConfig.mat: **125%**
  - cfg.lockstakeConfig.buf: **120%**
  - cfg.lockstakeConfig.tail: **6,000 seconds**
  - cfg.lockstakeConfig.cusp: **40%**
  - cfg.lockstakeConfig.chip: **0.1%**
  - cfg.lockstakeConfig.tip: **300 USDS**
  - cfg.lockstakeConfig.stopped: **3**
  - cfg.lockstakeConfig.chop: **13%**
  - cfg.lockstakeConfig.hole: **250,000 USDS**
  - cfg.lockstakeConfig.tau: **0 days**
  - cfg.lockstakeConfig.cut: **0.99**
  - cfg.lockstakeConfig.step: **60 seconds**
  - cfg.lockstakeConfig.lineMom: **true (as "added to LINE_MOM")**
  - cfg.lockstakeConfig.tolerance: **0.5**
  - cfg.lockstakeConfig.name: **LockstakeSky**
  - cfg.lockstakeConfig.symbol: **lsSKY**

More details about the technical scope of the Chief migration can be found [here](https://forum.sky.money/t/technical-scope-of-the-chief-migration/26361).

### Add Protego to the Chainlog

- **Authorization**: [A.1.9 - Sky Core Governance Security - Emergency Spells - Protego](https://sky-atlas.powerhouse.io/A.1.9.4.3_Protego/1f1f2ff0-8d73-80be-9ace-f125242ede47%7C0db307588902), [Ecosystem Approval](http://forum.sky.money/t/technical-scope-of-the-protego-deployment/26365/2)
- **Proposal**: Forum post [1](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-5-2025/26319), [2](https://forum.sky.money/t/technical-scope-of-the-protego-deployment/26365)

Protego is a contract that allows Sky Governance to cancel the execution of planned governance actions that are awaiting the expiration of the Governance Security Module Pause Delay ([GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0%7C0db30758e055)). Protego has been pre-deployed at [0x5C9c3cb0490938c9234ABddeD37a191576ED8624](https://etherscan.io/address/0x5C9c3cb0490938c9234ABddeD37a191576ED8624).

If this executive proposal passes, then the following actions will take place:

- Add Protego to the [Chainlog](https://chainlog.sky.money) with key `MCD_PROTEGO`.
- Bump chainlog MINOR version.

More details about the technical scope of the Protego deployment can be found [here](https://forum.sky.money/t/technical-scope-of-the-protego-deployment/26365).

### Spark Proxy Spell

- **Authorization**: [A.4.1.2.1.1 - MKR To SKY Upgrade Phase One](https://sky-atlas.powerhouse.io/A.4.1.2.1.1_MKR_To_SKY_Upgrade_Phase_One/1f1f2ff0-8d73-8006-b95a-f830d28d4645|b341f4c0b83472dc)
- **Proposal**: [Forum post](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-may-5-2025/26319)

If this executive proposal passes, then a Spark Proxy Spell will be executed at [0xC40611AC4Fff8572Dc5F02A238176edCF15Ea7ba](https://etherscan.io/address/0xC40611AC4Fff8572Dc5F02A238176edCF15Ea7ba) to move the authority of the Spark Freezer MOM contract to the new Chief contract.

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
