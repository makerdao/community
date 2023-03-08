---
title: Template - [Executive Vote] CRVV1ETHSTETH-A Liquidation Parameter Changes, Stablecoin Vault Offboarding, MOMC Parameter Changes, Budget Distributions, Recognized Delegate Compensation for February - March 8, 2023
summary: Liquidation parameter changes for CRVV1ETHSTETH-A; stablecoin vault offboarding for USDC-A, PAXUSD-A, and GUSD-A; MOMC parameter changes; DAI budget transfer for GRO-001; MKR vesting transfers for TECH-001, DECO-001, and RISK-001; Recognized Delegate compensation for February.
date: 2023-03-08T00:00:00.000Z
address: "0x4Fe8caf634004cb3Dd54AcD3F59c861FdC6de215"

---
# [Executive Proposal] CRVV1ETHSTETH-A Liquidation Parameter Changes, Stablecoin Vault Offboarding, MOMC Parameter Changes, Budget Distributions, Recognized Delegate Compensation for February - March 8, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- CRVV1ETHSTETH-A liquidation parameter changes, detailed below.
- Stablecoin vault offboardings for USDC-A, PAXUSD-A, GUSD-A, detailed below.
- Parameter changes from the latest proposal of the MakerDAO Open Market Committee, as detailed below.
- A total of **648,134 DAI** will be transferred to Growth Core Unit (GRO-001), as detailed below.
- A total of **367.9579 MKR** will be transferred to Tech Ops Core Unit (TECH-001), Deco Core Unit (DECO-001), and Risk Core Unit (RISK-001), as detailed below.
- A total of **97,468 DAI** will be transferred to multiple Recognized Delegates, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with the stablecoin vault liquidations.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### CRVV1ETHSTETH-A Liquidation Parameter Changes

As per [this recommendation](https://forum.makerdao.com/t/crvv1ethsteth-a-liquidation-parameters-adjustment/20020) by the Risk Core Unit (RISK-001), the liquidation parameters for the CRVV1ETHSTETH-A will be adjusted as follows, if this executive proposal passes:

- Increase [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) by 2 million DAI from 3 million DAI to **5 million DAI**.
- Decrease [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) by 0.10 from 1.20 to **1.10**.
- Decrease [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) by 1,200 seconds from 8,400 seconds to **7,200 seconds**.
- Increase [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) by 0.05 from 0.40 to **0.45**.

### Stablecoin Vault Offboarding

As per [this ratified poll](https://vote.makerdao.com/polling/QmemXoCi), vault types USDC-A, USDP-A (PAXUSD-A in the chainlog), and GUSD-A will be offboarded by adjusting the below risk parameter as follows, if this executive proposal passes:

- Increase [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) to **1,500%** for all three vault types.

### MOMC Parameter Changes

As per this successful [governance poll](https://vote.makerdao.com/polling/QmXGgakY), the following changes recommended by the [Maker Open Market Committee](https://forum.makerdao.com/t/parameter-proposal-group-makerdao-open-market-committee/7355) will be made, if this executive proposal passes:

#### [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) Increases

- Increase the ETH-C Stability Fee by 0.25% from 0.5% to **0.75%**.
- Increase the WSTETH-B Stability Fee by 0.25% from 0.5% to **0.75%**.
- Increase the WBTC-C Stability Fee by 0.25% from 0.75% to **1%**.
- Increase the YFI-A Stability Fee by 0.5% from 1% to **1.5%**.

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Increases

- Increase the RETH-A Maximum Debt Ceiling by 10 million DAI from 10 million DAI to **20 million DAI**.
- Increase the YFI-A Maximum Debt Ceiling by 1 million DAI from 3 million DAI to **4 million DAI**.
- Increase the Compound v2 D3M (DIRECT-COMPV2-DAI) Maximum Debt Ceiling by 40 million DAI from 30 million DAI to **70 million DAI**.

**Note:** the approved increase to the Aave D3M Maximum Debt Ceiling has been scheduled for the next Executive Spell as this module was only recently deployed.

### Core Unit DAI Transfer

As per their ratified [MIP40c3-SP70 budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP70), a total of **648,134 DAI** will be transferred to the Growth Core Unit (GRO-001) at [0x7800C137A645c07132886539217ce192b9F0528e](https://etherscan.io/address/0x7800C137A645c07132886539217ce192b9F0528e), if this executive proposal passes.

### MKR Vesting Transfers

As per their ratified MKR vesting proposals ([1](https://mips.makerdao.com/mips/details/MIP40c3SP54), [2](https://mips.makerdao.com/mips/details/MIP40c3SP36), [3](https://mips.makerdao.com/mips/details/MIP40c3SP25)), a total of **367.9579 MKR** will be transferred to three Core Units as detailed below, if this executive proposal passes:

- **67.9579 MKR** to the Tech Ops Core Unit (TECH-001) at [0x2dC0420A736D1F40893B9481D8968E4D7424bC0B](https://etherscan.io/address/0x2dC0420A736D1F40893B9481D8968E4D7424bC0B).
- **125 MKR** to the Deco Core Unit (DECO-001) at [0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7](https://etherscan.io/address/0xF482D1031E5b172D42B2DAA1b6e5Cbf6519596f7).
- **175 MKR** to the Risk Core Unit (RISK-001) at [0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c](https://etherscan.io/address/0x5d67d5B1fC7EF4bfF31967bE2D2d7b9323c1521c).

### Recognized Delegate Compensation

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **97,468 DAI** will be distributed to fourteen Recognized Delegates as detailed below, if this executive proposal passes:

- **12,000 DAI** transferred to [coldiron.eth](https://vote.makerdao.com/address/0xb4b82978fce6d26a22dea7e653bb9ce8e14f8056) at [0x6634e3555DBF4B149c5AEC99D579A2469015AEca](https://etherscan.io/address/0x6634e3555DBF4B149c5AEC99D579A2469015AEca).
- **12,000 DAI** transferred to [Flip Flop Flap Delegate LLC](https://vote.makerdao.com/address/0x0f4be9f208c552a6b04d9a1222f385785f95beaa) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
- **12,000 DAI** transferred to [GFX Labs](https://vote.makerdao.com/address/0x869147940842bb1aa4c40e60c5e583f4911f2e02) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).
- **11,447 DAI** transferred to [mhonkasalo & teemulau](https://vote.makerdao.com/address/0xaa19f47e6acb02df88efa9f023f2a38412069902) at [0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d](https://etherscan.io/address/0x97Fb39171ACd7C82c439b6158EA2F71D26ba383d).
- **11,178 DAI** transferred to [Penn Blockchain](https://vote.makerdao.com/address/0x7ddb50a5b15aea7e7cf9ac8e55a7f9fd9d05ecc6) at [0x2165d41af0d8d5034b9c266597c1a415fa0253bd](https://etherscan.io/address/0x2165d41af0d8d5034b9c266597c1a415fa0253bd).
- **10,802 DAI** transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x92e1ca8b69a44bb17afa92838da68fc41f12250a) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
- **10,347 DAI** transferred to [Flipside Crypto](https://vote.makerdao.com/address/0x222d46d1229036c7bb6ea3f453406792ca3c3ea2) at [0x1ef753934C40a72a60EaB12A68B6f8854439AA78](https://etherscan.io/address/0x1ef753934C40a72a60EaB12A68B6f8854439AA78).
- **8,680 DAI** transferred to [JustinCase](https://vote.makerdao.com/address/0x4e324f2327fa3e567d802ddcf655f7188eb62754) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
- **3,961 DAI** transferred to [StableLab](https://vote.makerdao.com/address/0x4c28d8402ac01e5d623e4a5438535369770fe407) at [0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0](https://etherscan.io/address/0x3B91eBDfBC4B78d778f62632a4004804AC5d2DB0).
- **2,455 DAI** transferred to [Frontier Research LLC](https://vote.makerdao.com/address/0x316090e23cc44e70245ba9846404413aca2df16f) at [0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8](https://etherscan.io/address/0xA2d55b89654079987CF3985aEff5A7Bd44DA15A8).
- **951 DAI** transferred to [Chris Blec](https://vote.makerdao.com/address/0x2c511d932c5a6fe4071262d49bfc018cfbaaa1f5) at [0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170](https://etherscan.io/address/0xa3f0AbB4Ba74512b5a736C5759446e9B50FDA170).
- **939 DAI** transferred to [CodeKnight](https://vote.makerdao.com/address/0xe89f973a19cd76c3e5e236062668e43042176638) at [0xf6006d4cF95d6CB2CD1E24AC215D5BF3bca81e7D](https://etherscan.io/address/0xf6006d4cF95d6CB2CD1E24AC215D5BF3bca81e7D).
- **360 DAI** transferred to [ONESTONE](https://vote.makerdao.com/address/0x9301f3bb7a71ab4d46b17bd1f8254142fa8f26ad) at [0x4eFb12d515801eCfa3Be456B5F348D3CD68f9E8a](https://etherscan.io/address/0x4eFb12d515801eCfa3Be456B5F348D3CD68f9E8a).
- **348 DAI** transferred to [HKUST EPI Blockchain](https://vote.makerdao.com/address/0x925016c2367802632cabdf13b5fc2c1bdc2c301a) at [0x2dA0d746938Efa28C7DC093b1da286b3D8bAC34a](https://etherscan.io/address/0x2dA0d746938Efa28C7DC093b1da286b3D8bAC34a).
 
## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
