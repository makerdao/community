---
title: Template - [Executive Vote] Base Network SkyLink Bridge Initialization for USDS and sUSDS, Star Allocation System Initialization for Spark, Add New Validators to Medianizer - October 31, 2024
summary: Initialize the Base Network SkyLink bridge for USDS and sUSDS, initialize the Star Allocation System for Spark, add new validators to Medianizer.
date: 2024-10-31T00:00:00.000Z
address: "0x3f6e730C77496aAB65655b3A5BDF6242C6eee4Cc"

---
# [Executive Proposal] Base Network SkyLink Bridge Initialization for USDS and sUSDS, Star Allocation System Initialization for Spark, Add New Validators to Medianizer - October 31, 2024

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:

- The Base Network SkyLink bridge for USDS and sUSDS will be initialized.
- The Star Allocation System for Spark will be initialized
- New validators for Medianizer will be added.

**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### Base Network SkyLink Bridge Initialization for USDS and sUSDS

- **Authorization**: [Ecosystem Approval](http://forum.sky.money/t/spell-contents-2024-10-31/25421/6)
- **Proposal**: [Forum Post](https://forum.sky.money/t/spell-contents-2024-10-31/25421)

If this executive proposal passes, then the Base Network SkyLink bridge for USDS and sUSDS will be initialized by calling [`TokenBridgeInit.initBridges`](https://github.com/makerdao/op-token-bridge/blob/0f935505c0dc74ce3db2a9998320a56119321814/deploy/TokenBridgeInit.sol#L63) with its parameters set as follows:

- [`l1BridgeInstance`](https://github.com/makerdao/op-token-bridge/blob/0f935505c0dc74ce3db2a9998320a56119321814/deploy/L1TokenBridgeInstance.sol#L19):
  - `govRelay`: [0x1Ee0AE8A993F2f5abDB51EAF4AC2876202b65c3b](https://etherscan.io/address/0x1Ee0AE8A993F2f5abDB51EAF4AC2876202b65c3b)
  - `escrow`: [0x7F311a4D48377030bD810395f4CCfC03bdbe9Ef3](https://etherscan.io/address/0x7F311a4D48377030bD810395f4CCfC03bdbe9Ef3)
  - `bridge`: [0xA5874756416Fa632257eEA380CAbd2E87cED352A](https://etherscan.io/address/0xA5874756416Fa632257eEA380CAbd2E87cED352A)
  - `bridgeImp`: [0xaeFd31c2e593Dc971f9Cb42cBbD5d4AD7F1970b6](https://etherscan.io/address/0xaeFd31c2e593Dc971f9Cb42cBbD5d4AD7F1970b6)
- [`l2BridgeInstance`](https://github.com/makerdao/op-token-bridge/blob/dev/deploy/L2TokenBridgeInstance.sol):
  - `govRelay`: [0xdD0BCc201C9E47c6F6eE68E4dB05b652Bb6aC255](https://basescan.org/address/0xdd0bcc201c9e47c6f6ee68e4db05b652bb6ac255)
  - `bridge`: [0xee44cdb68D618d58F75d9fe0818B640BD7B8A7B7](https://basescan.org/address/0xee44cdb68D618d58F75d9fe0818B640BD7B8A7B7)
  - `bridgeImp`: [0x289A37BE5D6CCeF7A8f2b90535B3BB6bD3905f72](https://basescan.org/address/0x289A37BE5D6CCeF7A8f2b90535B3BB6bD3905f72)
  - `spell`: [0x6f29C3A29A3F056A71FB0714551C8D3547268D62](https://basescan.org/address/0x6f29C3A29A3F056A71FB0714551C8D3547268D62)
- [`cfg`](https://github.com/makerdao/op-token-bridge/blob/0f935505c0dc74ce3db2a9998320a56119321814/deploy/TokenBridgeInit.sol#L49):
  - `l1Messenger`: [0x866E82a600A1414e583f7F13623F1aC5d58b0Afa](https://etherscan.io/address/0x866E82a600A1414e583f7F13623F1aC5d58b0Afa)
  - `l2Messenger`: [0x4200000000000000000000000000000000000007](https://basescan.org/address/0x4200000000000000000000000000000000000007)
  - `l1Tokens`:
    - [0xdc035d45d973e3ec169d2276ddab16f1e407384f](https://etherscan.io/address/0xdc035d45d973e3ec169d2276ddab16f1e407384f) (USDS on Mainnet)
    - [0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD](https://etherscan.io/token/0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD) (sUSDS on Mainnet)
  - `l2Tokens`:
    - [0x820C137fa70C8691f0e44Dc420a5e53c168921Dc](https://basescan.org/address/0x820C137fa70C8691f0e44Dc420a5e53c168921Dc) (USDS on Base)
    - [0x5875eEE11Cf8398102FdAd704C9E96607675467a](https://basescan.org/address/0x5875eEE11Cf8398102FdAd704C9E96607675467a) (sUSDS on Base)
  - `maxWithdraws`: `type(uint256).max` for each token
  - `minGasLimit`: 500,000
  - `govRelayCLKey`: BASE_GOV_RELAY (chainlog key for govRelay)
  - `escrowCLKey`: BASE_ESCROW (chainlog key for Escrow)
  - `l1BridgeCLKey`: BASE_TOKEN_BRIDGE (chainlog key for L1TokenBridge)
  - `l1BridgeImpCLKey`: BASE_TOKEN_BRIDGE_IMP (chainlog key for L1TokenBridgeImp)

This will initialize a new SkyLink bridge that will facilitate bridging USDS and sUSDS between mainnet and Base. More information on these contracts and on the bridge deployment process can be found at the [MakerDAO OP Token Bridge repository](https://github.com/makerdao/op-token-bridge/tree/0f935505c0dc74ce3db2a9998320a56119321814).

### Star Allocation System Initialization for Spark

- **Authorization**: [Ecosystem Approval](http://forum.sky.money/t/spell-contents-2024-10-31/25421/6)
- **Proposal**: [Forum Post](https://forum.sky.money/t/spell-contents-2024-10-31/25421)

If this executive proposal passes, then the [Star Allocation System](https://forum.sky.money/t/star-allocation-system-framework/25325) for Spark will be initialized by executing the actions below:

- Initialize shared components for the Allocator System by calling [`AllocatorInit.initShared`](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInit.sol#L88) with the following parameters:
  - `oracle`: [0xc7B91C401C02B73CBdF424dFaaa60950d5040dB7](https://etherscan.io/address/0xc7B91C401C02B73CBdF424dFaaa60950d5040dB7) (AllocatorOracle)
  - `roles`: [0x9A865A710399cea85dbD9144b7a09C889e94E803](https://etherscan.io/address/0x9A865A710399cea85dbD9144b7a09C889e94E803) (AllocatorRoles)
  - `registry`: [0xCdCFA95343DA7821fdD01dc4d0AeDA958051bB3B](https://etherscan.io/address/0xCdCFA95343DA7821fdD01dc4d0AeDA958051bB3B) (AllocatorRegistry)
- Initialize Allocator ILK for Spark Star by calling [`AllocatorInit.initIlk`](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInit.sol#L97) with its parameters set as follow:
  - [`sharedInstance`](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInstances.sol#L19):
    - `oracle`: [0xc7B91C401C02B73CBdF424dFaaa60950d5040dB7](https://etherscan.io/address/0xc7B91C401C02B73CBdF424dFaaa60950d5040dB7) (AllocatorOracle)
    - `roles`: [0x9A865A710399cea85dbD9144b7a09C889e94E803](https://etherscan.io/address/0x9A865A710399cea85dbD9144b7a09C889e94E803) (AllocatorRoles)
    - `registry`: [0xCdCFA95343DA7821fdD01dc4d0AeDA958051bB3B](https://etherscan.io/address/0xCdCFA95343DA7821fdD01dc4d0AeDA958051bB3B) (AllocatorRegistry)
  - [`ilkInstance`](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInstances.sol#L25):
    - `owner`:  [0xbe8e3e3618f7474f8cb1d074a26affef007e98fb](https://etherscan.io/address/0xbe8e3e3618f7474f8cb1d074a26affef007e98fb) (MCD_PAUSE_PROXY)
    - `vault`: [0x691a6c29e9e96dd897718305427Ad5D534db16BA](https://etherscan.io/address/0x691a6c29e9e96dd897718305427Ad5D534db16BA) (AllocatorVault)
    - `buffer`: [0xc395D150e71378B47A1b8E9de0c1a83b75a08324](https://etherscan.io/address/0xc395D150e71378B47A1b8E9de0c1a83b75a08324) (AllocatorBuffer)
  - [`cfg`](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/deploy/AllocatorInit.sol#L62):
    - `ilk`: ALLOCATOR-SPARK-A
    - `duty`: **1000000001607468111246255079 (5.2%)**
    - [`gap`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.2_Target_Available_Debt_(gap)-c1e17312-3744-4360-81f4-03564f0dd09d|57eaf45219bea3b430c268bb): **10,000,000 DAI**
    - [`maxLine`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)-6f1a913d-9436-4b70-816b-e317672737d6|57eaf45219bea3b430c268bb): **10,000,000 DAI**
    - [`ttl`](https://sky-atlas.powerhouse.io/#A.3.8.1.1.2.4.3_Ceiling_Increase_Cooldown_(ttl)-58f5315f-938f-464c-b2d2-f611145d469a|57eaf45219bea3b430c268bb): **86,400 seconds**
    - `allocatorProxy`: [0x3300f198988e4C9C63F75dF86De36421f06af8c4](https://etherscan.io/address/0x3300f198988e4C9C63F75dF86De36421f06af8c4) (SparkProxy)
    - `ilkRegistry`: [0x5a464c28d19848f44199d003bef5ecc87d090f87](https://etherscan.io/address/0x5a464c28d19848f44199d003bef5ecc87d090f87)
- Whitelist [Spark ALM Proxy](https://etherscan.io/address/0x1601843c5E9bC251A3272907010AFa41Fa18347E) on the LitePSM by calling `IPSMLike(MCD_LITE_PSM_USDC_A).kiss(almProxy: 0x1601843c5E9bC251A3272907010AFa41Fa18347E)`.

This will initialize the Spark Allocator System with a Maximum Debt Ceiling of 10,000,000 USDS and a fee of 5.2%. More information on these contracts can be found at the [dss-allocator repository](https://github.com/makerdao/dss-allocator/tree/226584d3b179d98025497815adb4ea585ea0102d); an overview of the system implementation can be found at the [README file](https://github.com/makerdao/dss-allocator/blob/226584d3b179d98025497815adb4ea585ea0102d/README.md) therein.

### Add new validators for [Median](https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation) (Medianizer)

- **Authorization**: [Ecosystem Approval](http://forum.sky.money/t/spell-contents-2024-10-31/25421/6)
- **Proposal**: [Forum Post](https://forum.sky.money/t/spell-contents-2024-10-31/25421)

If this executive proposal passes, then _all_ validators below:

- ETH Global validator - [0xcfC62b2269521e3212Ce1b6670caE6F0e34E8bF3](https://etherscan.io/address/0xcfC62b2269521e3212Ce1b6670caE6F0e34E8bF3)
- Mantle validator - [0xFa6eb665e067759ADdE03a8E6bD259adBd1D70c9](https://etherscan.io/address/0xFa6eb665e067759ADdE03a8E6bD259adBd1D70c9)
- Nethermind validator - [0x91242198eD62F9255F2048935D6AFb0C2302D147](https://etherscan.io/address/0x91242198eD62F9255F2048935D6AFb0C2302D147)
- Euler validator - [0x1DCB8CcC022938e102814F1A299C7ae48A8BAAf6](https://etherscan.io/address/0x1DCB8CcC022938e102814F1A299C7ae48A8BAAf6)

will be added to _each_ of the median contracts below:

- BTC/USD at [0xe0F30cb149fAADC7247E953746Be9BbBB6B5751f](https://etherscan.io/address/0xe0F30cb149fAADC7247E953746Be9BbBB6B5751f)
- ETH/USD at [0x64DE91F5A373Cd4c28de3600cB34C7C6cE410C85](https://etherscan.io/address/0x64DE91F5A373Cd4c28de3600cB34C7C6cE410C85)
- WSTETH/USD at [0x2F73b6567B866302e132273f67661fB89b5a66F2](https://etherscan.io/address/0x2F73b6567B866302e132273f67661fB89b5a66F2)
- MKR/USD at [0xdbBe5e9B1dAa91430cF0772fCEbe53F6c6f137DF](https://etherscan.io/address/0xdbBe5e9B1dAa91430cF0772fCEbe53F6c6f137DF)

These additions will ensure that a sufficient number of price sources are being used by the Medianizer to generate prices.

For more details about the Oracle Module, you can refer to this [link](https://docs.makerdao.com/smart-contract-modules/oracle-module#id-3.-key-mechanism-and-concepts).

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
