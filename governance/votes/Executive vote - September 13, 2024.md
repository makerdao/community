---
title: Template - [Executive Vote] Out-of-schedule Executive Vote - USDS, sUSDS, and SKY Tokens Initialization, SBE Upgrade, SKY DssVestMintable Setup, USDS-SKY Farming Setup, USDS-01 Farming Setup, Miscellaneous Actions - September 13, 2024
summary: Initialize USDS, sUSDS, and SKY tokens, upgrade Smart Burn Engine (SBE), set up SKY DssVestMintable, set up USDS-SKY farming, set up USDS-01 farming, add LitePsmWrapper to the chainlog, and reduce the GSM Pause Delay.
date: 2024-09-13T00:00:00.000Z
address: "0x70254BD530684CF4a6323F51098FA39AAE6130b6"

---
# [Executive Proposal] Out-of-schedule Executive Vote - USDS, sUSDS, and SKY Tokens Initialization, SBE Upgrade, SKY DssVestMintable Setup, USDS-SKY Farming Setup, USDS-01 Farming Setup, Miscellaneous Actions - September 13, 2024

The Governance Facilitators, Dewiz, and Sidestream have placed an out-of-schedule executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky (previously Maker) Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol in the context of Launch Season:

- The USDS, sUSDS, and SKY tokens will be initialized.
- The Smart Burn Engine (SBE) will be upgraded to support USDS and SKY.
- SKY DssVestMintable will be set up.
- USDS->SKY farming will be set up.
- USDS->01 farming will be set up.
- LitePsmWrapper will be added to the chainlog.
- The GSM Pause Delay will be reduced.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

**To learn more about Launch Season, refer to:**

- [MakerDAO Endgame: Launch Season (final)](https://forum.makerdao.com/t/makerdao-endgame-launch-season-final/24740)
- [Sky has arrived!](https://forum.makerdao.com/t/sky-has-arrived/24959)
- [Endgame: Announcing the Token and Product Launch forum post](https://forum.makerdao.com/t/endgame-announcing-the-token-and-product-launch/25021/1)

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**30 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Clarifications

### Execution date restriction

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

This executive proposal has its earliest execution date set to **September 17, 2024 at 12:00 UTC**. This means that it cannot be executed before that date.

### New Contract ESM Exclusion

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/4)
- **Proposal**: [Forum Post](http://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/3)

The [Emergency Shutdown Module (ESM)](https://docs.makerdao.com/smart-contract-modules/shutdown/emergency-shutdown-module) will **not** be authorized in any new contracts deployed for this proposal.

For more details on this decision, you can refer to this [forum post](http://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/3).

## Proposal Details

### USDS, sUSDS, and SKY Tokens Initialization

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then the new [USDS](https://github.com/makerdao/usds), [sUSDS](https://github.com/makerdao/sdai/tree/susds), and [SKY](https://github.com/makerdao/ngt) tokens will be initialized by performing the actions detailed below.

#### USDS

**Initialize USDS by calling [UsdsInit.Init](https://github.com/makerdao/usds/blob/dev/deploy/UsdsInit.sol#L40) with the following parameters:**
- usds: [0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F)
- usdsImp: [0x1923DfeE706A8E78157416C29cBCCFDe7cdF4102](https://etherscan.io/address/0x1923DfeE706A8E78157416C29cBCCFDe7cdF4102)
- UsdsJoin: [0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB](https://etherscan.io/address/0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB)
- DaiUsds: [0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A](https://etherscan.io/address/0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A)

#### sUSDS

**Initialize sUSDS by calling [sUsdsInit.Init](https://github.com/makerdao/sdai/blob/susds/deploy/SUsdsInit.sol#L48) with the following parameters:**
- susds: [0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD](https://etherscan.io/address/0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD)
- sUsdsImp: [0x4e7991e5C547ce825BdEb665EE14a3274f9F61e0](https://etherscan.io/address/0x4e7991e5C547ce825BdEb665EE14a3274f9F61e0)
- UsdsJoin: [0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB](https://etherscan.io/address/0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB)
- usds: [0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F)
- [ssr](https://sky-atlas.powerhouse.io/#A.3.2.2.3_Sky_Savings_Rate-73d91126-21c9-4e8a-bedf-8a51a432bb59|57eab733e951): 6.25%

#### SKY

**Initialize SKY by calling [SkyInit.Init](https://github.com/makerdao/sky/blob/dev/deploy/SkyInit.sol#L41) with the following parameters:**
- sky [0x56072C95FAA701256059aa122697B133aDEd9279](https://etherscan.io/address/0x56072C95FAA701256059aa122697B133aDEd9279)
- mkrSky [0xBDcFCA946b6CDd965f99a839e4435Bcdc1bc470B](https://etherscan.io/address/0xBDcFCA946b6CDd965f99a839e4435Bcdc1bc470B)
- [rate](https://sky-atlas.powerhouse.io/#A.4.1.2.1_SKY_Launch-d5af8504-ddd6-416d-8429-897497b072dc|b341f4c0b834): 24,000
 
 These functions will also add the following elements to the chainlog:

| Init Parameter | Address | Chainlog Key |
|:---:|:---:|:---:|
| usds | 0xdC035D45d973E3EC169d2276DDab16f1e407384F | USDS |
| usdsImp | 0x1923DfeE706A8E78157416C29cBCCFDe7cdF4102 | USDS_IMP |
| UsdsJoin | 0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB | USDS_JOIN |
| DaiUsds | 0x3225737a9Bbb6473CB4a45b7244ACa2BeFdB276A | DAI_USDS |
| sUsds | 0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD | SUSDS |
| sUsdsImp | 0x4e7991e5C547ce825BdEb665EE14a3274f9F61e0 | SUSDS_IMP |
| sky | 0x56072C95FAA701256059aa122697B133aDEd9279 | SKY |
| mkrSky | 0xBDcFCA946b6CDd965f99a839e4435Bcdc1bc470B | MKR_SKY |
 
The following permissions will be granted by the functions mentioned above:

- The usdsJoin Adapter will be authorized in the usds contract by calling `rely` through the UsdsInit.init function.
- The sUSDS contract will be authorized to access the `vat` by calling `rely` through the SUsdsInit.init function.
- The mkrSky contract will be authorized in the sky contract by calling `rely` through the SkyInit.init function.
- The mkrSky contract will be authorized in the MkrAuthority contract by calling `rely` through the SkyInit.init function.

### Smart Burn Engine (SBE) Upgrade

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then the SBE will be upgraded to support the new USDS and SKY tokens. The upgrade entails the following actions:

#### UniV2 Pool Migration

The [DAI/MKR UniV2](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3.5_Univ2_MKR_Dai_LP_Token_Element_Annotation-0b19dbb3-aded-42d3-8b77-84ccaf9745e4%7C57ea2c549207d9fe7d4510f2) pool funds will be migrated to the USDS/SKY UniV2 pool by executing the [UniV2 Pool Migrator script](https://github.com/makerdao/univ2-pool-migrator/blob/dev/deploy/UniV2PoolMigratorInit.sol) with the following parameters:

- pairDaiMkr: [0x517F9dD285e75b599234F7221227339478d0FcC8](https://etherscan.io/address/0x517F9dD285e75b599234F7221227339478d0FcC8)
- pairUsdsSky: [0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c](https://etherscan.io/address/0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c)

#### DssFlapper Initialization

A new [DssFlapper](https://sky-atlas.powerhouse.io/#A.3.5.1.1.3_DssFlapper-e1aaab52-e88f-4161-8765-e6193adf7d45|57ea2c549207d9fe) will be initialized. This entails the following actions:

##### Splitter Initialization

The Splitter will be initialized by calling the [FlapperInit.initSplitter](https://github.com/makerdao/dss-flappers/blob/bddeb5ac09a5ea6c5b4bc77cec1bd5b05014f1fd/deploy/FlapperInit.sol#L177) function with the following parameters:


- `splitter`: [0xBF7111F13386d23cb2Fba5A538107A73f6872bCF](https://etherscan.io/address/0xBF7111F13386d23cb2Fba5A538107A73f6872bCF)
- `mom`: [0xF51a075d468dE7dE3599C1Dc47F5C42d02C9230e](https://etherscan.io/address/0xF51a075d468dE7dE3599C1Dc47F5C42d02C9230e)
- `hump`: **55 million DAI**
- `bump`: **65,000 DAI**
- `hop`: **10,249 seconds**
- `burn`: **100% (1 * WAD)**
- `usdsJoin`: [0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB](https://etherscan.io/address/0x3C0f895007CA717Aa01c8693e59DF1e8C3777FEB)
- `splitterChainlogKey`: MCD_SPLIT
- `prevMomChainlogKey`: FLAPPER_MOM
- `momChainlogKey`: SPLITTER_MOM

The state variable `flapper` in the `vow` will be changed to the `splitter` address by calling `file` through the FlapperInit.initSplitter function.

##### Flapper Initialization

The Flapper will be initialized by calling the [FlapperInit.initFlapperUniV2](https://github.com/makerdao/dss-flappers/blob/bddeb5ac09a5ea6c5b4bc77cec1bd5b05014f1fd/deploy/FlapperInit.sol#L106) function with the following parameters:

- `flapper_`: [0xc5A9CaeBA70D6974cBDFb28120C3611Dd9910355](https://etherscan.io/address/0xc5A9CaeBA70D6974cBDFb28120C3611Dd9910355)
- `want`: **98% (98 * WAD / 100)**
- `pip`: [0x38e8c1D443f546Dc014D7756ec63116161CB7B25](https://etherscan.io/address/0x38e8c1D443f546Dc014D7756ec63116161CB7B25)
- `pair`: [0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c](https://etherscan.io/address/0x2621CC0B3F3c079c1Db0E80794AA24976F0b9e3c)
- `usds`: [0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F)
- `splitter`: [0xBF7111F13386d23cb2Fba5A538107A73f6872bCF](https://etherscan.io/address/0xBF7111F13386d23cb2Fba5A538107A73f6872bCF)
- `prevChainlogKey`: MCD_FLAP
- `chainlogKey`: MCD_FLAP

##### Oracle Initialization

The Oracle will be initialized by calling the [FlapperInit.initOracleWrapper ](https://github.com/makerdao/dss-flappers/blob/bddeb5ac09a5ea6c5b4bc77cec1bd5b05014f1fd/deploy/FlapperInit.sol#L141) function with the following parameters:

- `wrapper_`: [0x38e8c1D443f546Dc014D7756ec63116161CB7B25](https://etherscan.io/address/0x38e8c1D443f546Dc014D7756ec63116161CB7B25)
- `divisor`: **24,000**
- `clKey`: FLAP_SKY_ORACLE

`Wrapper` will be authorized to read the MKR oracle price through the FlapperInit.initOracleWrapper function.

### SKY DssVestMintable Setup

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then DssVestMintable for SKY will be set up through the following actions:

- **Authorize DssVestMintable on SKY by calling `DssExecLib.authorize` with the following parameters:**
  - `_base`: [0x56072C95FAA701256059aa122697B133aDEd9279](https://etherscan.io/address/0x56072C95FAA701256059aa122697B133aDEd9279)
  - `_ward`: [0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9](https://etherscan.io/address/0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9)
- **Set DssVestMintable max rate (`cap`) by calling `DssExecLib.setValue` with the following parameters:**
  - `_base`: [0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9](https://etherscan.io/address/0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9)
  - `_what`: "cap"
  - `_amt`: **799,999,999.999999999985808000 SKY per year (800M * WAD / 365 days )**
- **Add DssVestMintable to Chainlog by calling `DssExecLib.setChangelogAddress` with the following parameters:**
  - `_key`: MCD_VEST_SKY
  - `_val`: [0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9](https://etherscan.io/address/0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9)

### USDS->SKY Farming Setup

- **Authorization**: [Ecosystem Approval 1](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Ecosystem Approval 2](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/4), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then the USDS->SKY farming setup will be initialized through the following actions:

- **Initialize USDS->SKY Token Rewards (STR) by calling [UsdsSkyFarmingInit.init](https://github.com/makerdao/endgame-toolkit/blob/14268515aa729a588096f0d579ea38bde3e9ba2f/script/dependencies/phase-1b/UsdsSkyFarmingInit.sol#L42) with the following parameters:**

  - `usds`: [0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F)
  - `sky`: [0x56072C95FAA701256059aa122697B133aDEd9279](https://etherscan.io/address/0x56072C95FAA701256059aa122697B133aDEd9279)
  - `rewards`: [0x0650CAF159C5A49f711e8169D4336ECB9b950275](https://etherscan.io/address/0x0650CAF159C5A49f711e8169D4336ECB9b950275)
  - `rewardsKey`: REWARDS_USDS_SKY
  - `dist`: [0x2F0C88e935Db5A60DDA73b0B4EAEef55883896d9](https://etherscan.io/address/0x2F0C88e935Db5A60DDA73b0B4EAEef55883896d9)
  - `distKey`: REWARDS_DIST_USDS_SKY
  - `vest`: [0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9](https://etherscan.io/address/0xB313Eab3FdE99B2bB4bA9750C2DDFBe2729d1cE9)
  - `vestTot`: **600M * WAD**
  - `vestBgn`: **block.timestamp - 7 days**
  - `vestTau`: **365 days - 1**
- **Call `distribute()` in `VestedRewardsDistribution` contract in the spell execution.**
  
The following SKY vesting stream will be created for rewards distribution through the UsdsSkyFarmingInit.init function:
  
SKY Vesting Stream  | from 'block.timestamp - 7 days' for '365 days - 1'  | 600M * WAD SKY | 0x2F0C88e935Db5A60DDA73b0B4EAEef55883896d9
  
- **Initialize the new cron job by calling [VestedRewardsDistributionJobInit.init](https://github.com/makerdao/dss-cron/blob/a5a89af4f845211df143f06ab16c293eb47bb219/src/deployment/VestedRewardsDistributionJob/VestedRewardsDistributionJobInit.sol#L38) with the following parameters:**
  - `job`: [0x6464C34A02DD155dd0c630CE233DD6e21C24F9A5](https://etherscan.io/address/0x6464C34A02DD155dd0c630CE233DD6e21C24F9A5)
  - `cfg.jobKey`: CRON_REWARDS_DIST_JOB
- **Add VestedRewardsDistribution to the new cron job by calling [VestedRewardsDistributionJobInit.setDist](https://github.com/makerdao/dss-cron/blob/a5a89af4f845211df143f06ab16c293eb47bb219/src/deployment/VestedRewardsDistributionJob/VestedRewardsDistributionJobInit.sol#L58) with the following parameters:**
  - `job`: [0x6464C34A02DD155dd0c630CE233DD6e21C24F9A5](https://etherscan.io/address/0x6464C34A02DD155dd0c630CE233DD6e21C24F9A5)
  - `cfg.dist`: [0x2F0C88e935Db5A60DDA73b0B4EAEef55883896d9](https://etherscan.io/address/0x2F0C88e935Db5A60DDA73b0B4EAEef55883896d9)
  - `cfg.interval`: **7 days - 1 hours**

### USDS->01 Farming Setup

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then the USDS->01 farming setup will be initialized through the following actions:

- **Initialize STR 01 Rewards by calling [Usds01PreFarmingInit.init](https://github.com/makerdao/endgame-toolkit/blob/14268515aa729a588096f0d579ea38bde3e9ba2f/script/dependencies/phase-1b/Usds01PreFarmingInit.sol#L27) with the following parameters:**
  - `usds`: [0xdC035D45d973E3EC169d2276DDab16f1e407384F](https://etherscan.io/address/0xdC035D45d973E3EC169d2276DDab16f1e407384F)
  - `rewards`: [0x10ab606B067C9C461d8893c47C7512472E19e2Ce](https://etherscan.io/address/0x10ab606B067C9C461d8893c47C7512472E19e2Ce)
  - `rewardsKey`: REWARDS_USDS_01

### LitePsmWrapper Addition to the Chainlog

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then the LitePsmWrapper will be added to the [Chainlog](https://chainlog.makerdao.com) through the following actions:

- **Add LitePsmWrapper to the Chainlog by calling `DssExecLib.setChangelogAddress` with the following parameters:**
  - `_key`: WRAPPER_USDS_LITE_PSM_USDC_A
  - `_val`: [0xA188EEC8F81263234dA3622A406892F3D630f98c](https://etherscan.io/address/0xA188EEC8F81263234dA3622A406892F3D630f98c)

### GSM Pause Delay Update

- **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/2), [Poll 1134](https://vote.makerdao.com/polling/QmTySKwi)
- **Proposal**: [Forum Post](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031/1)

If this executive proposal passes, then the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0) will be decreased by 14 hours, from 30 hours to **16 hours**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
