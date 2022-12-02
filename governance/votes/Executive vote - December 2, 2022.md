---
title: Template - [Executive Vote] Compound D3M Onboarding, Activating Stablecoin Liquidations, Oracle Feed Whitelisting, Starknet Relay Upgrade, and MKR Vesting - December 2, 2022
summary: Onboards the Compound Dai Direct Deposit Module, activates Liquidations 2.0 for GUSD, USDC, and USDP vaults, whitelists rETH oracle, updates Starknet Fee Relay, and transfers MKR vesting for DUX-001.
date: 2022-12-02T00:00:00.000Z
address: "0x08DbDBCF56aC587b4E6d6c6ecC5F242Ea569e5CB"

---
# [Executive Proposal] Compound D3M Onboarding, Activating Stablecoin Liquidations, Oracle Feed Whitelisting, Starknet Relay Upgrade, and MKR Vesting - December 2, 2022

The Governance Facilitator(s), Starknet Engineering Core Unit, and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- [Liquidations 2.0](https://docs.makerdao.com/smart-contract-modules/dog-and-clipper-detailed-documentation) and corresponding parameters will be activated for GUSD-A, USDC-A, and USDP-A Vaults, as detailed below. 
- [Starknet GovRelay](https://forum.makerdao.com/t/starknet-changes-for-executive-spell-on-the-week-of-2022-11-29/18818) will be updated, as detailed below.
- 180.6 MKR will be transfered to the [Development & UX Core Unit (DUX-001)](https://mips.makerdao.com/mips/details/MIP39c2SP18), as detailed below. 

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- Compound v2 [DAI Direct Deposit Module (D3M)](https://manual.makerdao.com/module-index/module-dai-direct-deposit) will be onboarded and activated, as detailed below. 
- A new [rETH oracle address will be whitelisted](https://forum.makerdao.com/t/whitelist-light-feed-for-reth-oracle/18908), as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Activate Liquidations on Stablecoin Vaults

As per [this poll](https://vote.makerdao.com/polling/QmZbsHqu), liquidations auctions will be turned on for GUSD-A, USDC-A, and USDP-A Vaults as detailed below, if this executive proposal passes.

For more information on the rationale behind this change, please see the initial [signal request](https://forum.makerdao.com/t/signal-request-clear-vaults-bad-debt-in-the-makerdao-protocol/18376) proposing this change.

#### Vault Parameters

* Use [Linear Decrease](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#linear-decrease) for [Auction Price Function (`calc`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function).
* Set [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to 0.
* Set [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) to 0.
* Set [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to 0.
* Set [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) to 1.
* Set [`tau`](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#tau) to 4,320,000 seconds (72,000 minutes, or 1,200 hours). This results in an estimated 10bps drop in price every 72 minutes, or 50 days until the price reaches 0.
* Set [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) to 43,200 seconds (720 minutes, or 12 hours). This implies a minimum price of 0.99.
* Set [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) to 0.99. 
* Individually set the [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) for the vault types as follows:
  *  USDC-A - 20 million DAI
  *  USDP-A - 3 million DAI 
  *  GUSD-A - 300,000 DAI

### Starknet GovRelay Upgrade 

As per this [request for executive inclusion](https://forum.makerdao.com/t/starknet-changes-for-executive-spell-on-the-week-of-2022-11-29/18818), this executive proposal will update the Starknet Fees for the GovRelay if passed. For more information on the need for these fees, please see [this post](https://forum.makerdao.com/t/starknet-changes-for-2022-10-26-executive-spell/18468) or this [documentation](https://docs.starknet.io/documentation/architecture_and_concepts/L1-L2_Communication/messaging-mechanism/#l1-l2_message_fees).

### DUX-001 MKR Vesting

As per this [poll](https://vote.makerdao.com/polling/QmSYLL9K#vote-breakdown), 180.6 MKR will be transfered to the [Development & UX Core Unit (DUX-001)](https://mips.makerdao.com/mips/details/MIP39c2SP18) Auditor's Wallet, [0x5A994D8428CCEbCC153863CCdA9D2Be6352f89ad](https://etherscan.io/address/0x5a994d8428ccebcc153863ccda9d2be6352f89ad), if this executive proposal passes. You can view the methodology and original proposal for the team's vesting [here](https://mips.makerdao.com/mips/details/MIP40c3SP27).

### Compound v2 DAI Direct Deposit Module (D3M) Onboarding

As per this [poll](https://vote.makerdao.com/polling/QmWYfgY2#vote-breakdown), the Compound v2 D3M will be onboarded with the following parameters, if this executive proposal passes. 

#### Vault Parameters

* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line): **5 million DAI**.
* [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap): **5 million DAI**.
* [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl): **12 hours**.
* [Target Borrow Rate (`bar`)](https://manual.makerdao.com/module-index/module-dai-direct-deposit#target-borrow-rate-bar): **2%**.

#### Threads and Assessments 

Please review the following resources containing information about The Compound V2 D3M to inform your position before voting.
* [Proposal Thread](https://forum.makerdao.com/t/signal-request-should-maker-prioritize-onboarding-a-compound-d3m/11997)
* [Initial Risk Core Unit Evaluation](https://forum.makerdao.com/t/compound-d3m-risk-assessment/12580)
* [Maker Open Market Committee (MOMC) Evaluation With Updated Risk Parameters](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-28-october-2022/18564)
* [Protocol Engineering Core Unit Evaluation](https://forum.makerdao.com/t/direct-compoundv2-dai-direct-deposit-module-technical-assessment/17307)
* [Collateral Engineering Services Core Unit Compound and cDAI Evaluation](https://forum.makerdao.com/t/compound-d3m-compound-protocol-cdai-erc20-token-ces-domain-team-assessment/14993)
* [MIP 50: DAI Direct Deposit Module](https://mips.makerdao.com/mips/details/MIP50)

### rETH Oracle Whitelisting

As per this [request for inclusion](https://forum.makerdao.com/t/whitelist-light-feed-for-reth-oracle/18908), [0xa580BBCB1Cee2BCec4De2Ea870D20a12A964819e](https://etherscan.io/address/0xa580BBCB1Cee2BCec4De2Ea870D20a12A964819e) will be added to the rETH medianizer if this executive proposal passes. This light feed was part of the [onboarding Oracle assessment](https://forum.makerdao.com/t/mip10c3-sp22-proposal-reth-oracle-collateral-onboarding-oracle-assessment/15564) for rETH and was erroneously missed when lifting feeds for the new collateral. 

To see a complete list of Oracle feeds, please see the [MIP10c17 listing](https://mips.makerdao.com/mips/details/MIP10c17SP#specification).
 
## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
