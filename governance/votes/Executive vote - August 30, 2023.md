---
title: Template - [Executive Vote] Management of ConsolFreight (RWA003-A) Default, ESM Authorization, Chainlog Updates, Budget Management, Spark Proxy Spell - August 30, 2023
summary: Take steps to manage the potential default of the ConsolFreight facility, authorize the ESM on the Vow, multiple chainlog updates, cancel GovAlpha budget streams, Launch Project payments, trigger a Spark proxy spell.
date: 2023-08-30T00:00:00.000Z
address: "0xf9a88bBABBe4b5b907D28322649c504cA9897892"
---
# [Executive Proposal] Management of ConsolFreight (RWA003-A) Default, ESM Authorization, Chainlog Updates, Budget Management, Spark Proxy Spell - August 30, 2023

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Steps will be taken to manage the potential default of the ConsolFreight (RWA003-A) loan, as detailed below.
- The ESM will be authorized on the Vow, as detailed below.
- Updates will be made to the Chainlog addresses for the BlockTower Andromeda vault (RWA015-A), as detailed below.
- `FLIP_FAB` and `FLIPPER_MOM` will be removed from the Chainlog, as detailed below.
- The Dai and MKR budget streams for the GovAlpha Core Unit will be canceled (`yank`ed), as detailed below.
- Dai and MKR transfers for the Launch Project will take place, as detailed below.
- A proxy spell for Spark Protocol will be triggered, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Management of ConsolFreight (RWA003-A) Default

Following the [notification](https://forum.makerdao.com/t/consolfreight-rwa-003-cf4-drop-default/21745) of an impending default in the ConsolFreight (RWA003-A) pool and [approval](https://forum.makerdao.com/t/consolfreight-rwa-003-cf4-drop-default/21745/5) from the relevant Scope Facilitator for an urgent executive inclusion, the following actions will be taken, if this executive proposal passes.

- Reduce the RWA003-A [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) by 2 million DAI from 2 million DAI to **0 DAI**.
- Call `tell` on the RWALiquidationOracle for RWA003-A - this will allow Centrifuge to begin the unwinding process for this position.

### ESM Authorization on the Vow

As a result of the [recommendation](https://forum.makerdao.com/t/overlooked-vectors-for-post-shutdown-governance-attacks-postmortem/20696) from the outgoing Protocol Engineering Core Unit and the [approval](https://forum.makerdao.com/t/spell-contents-2023-08-30/21730/5) of the Responsible Facilitator, the following action will be taken, if this executive proposal passes.

- Authorize (`rely`) the [Emergency Shutdown Module](https://docs.makerdao.com/smart-contract-modules/shutdown/emergency-shutdown-module) on the [Vow](https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation).

This action fixes some attack vectors that could have been exploited during Emergency Shutdown, the reports of which have resulted in payments via the bug bounty program.

### BlockTower Andromeda (RWA015-A) Input Conduit Chainlog Additions

As per this [forum post](https://forum.makerdao.com/t/spell-contents-2023-08-30/21730#blocktower-andromeda-input-conduit-chainlog-updates-2) and [approval](https://forum.makerdao.com/t/spell-contents-2023-08-30/21730/5) from the Responsible Scope Facilitator, the following updates to the Chainlog will be made, if this executive proposal passes.

- Update `RWA015_A_INPUT_CONDUIT_JAR` to `RWA015_A_INPUT_CONDUIT_JAR_USDC`.
- Update `RWA015_A_INPUT_CONDUIT_URN` to `RWA015_A_INPUT_CONDUIT_URN_USDC`.
- Add `0x13C31b41E671401c7BC2bbd44eF33B6E9eaa1E7F` as `RWA015_A_INPUT_CONDUIT_JAR_GUSD`.
- Add `0xAB80C37cB5b21238D975c2Cea46e0F12b3d84B06` as `RWA015_A_INPUT_CONDUIT_URN_GUSD`.
- Add `0x79Fc3810735959db3C6D4fc64F7F7b5Ce48d1CEc` as `RWA015_A_INPUT_CONDUIT_JAR_PAX`.
- Add `0x4f7f76f31CE6Bb20809aaCE30EfD75217Fbfc217` as `RWA015_A_INPUT_CONDUIT_URN_PAX`.

These changes will allow flexible repayment of stablecoins through the BlockTower Andromeda facility, allowing the Arranger Structure to make payments to the Maker Protocol in USDC, GUSD, or USDP.

*Note*: On a technical level, the updates to the current `RWA015_A_INPUT_CONDUIT_JAR` and `RWA015_A_INPUT_CONDUIT_URN` will require them to be removed and re-added to the chainlog with their new names.

*Note*: The USDP conduits are being labeled as PAX to remain consistent with other labels associated with the USDP PSM in the chainlog.

### Chainlog Cleanup

As per this [forum post](https://forum.makerdao.com/t/spell-contents-2023-08-30/21730#flipper-chainlog-cleanup-3) and [approval](https://forum.makerdao.com/t/spell-contents-2023-08-30/21730/5) from the relevant Scope Facilitator, the following items will be removed from the chainlog, if this executive proposal passes.

- `FLIPPER_MOM`.
- `FLIP_FAB`.

These contracts are no longer used in the Maker Protocol as we have moved all liquidations to the Clipper (Liquidations 2.0) system.

The spell will also remove the `owner` and `authority` from the FLIPPER_MOM as part of this process. These actions will effectively sever its ties with Maker Governance, removing the permissions it has on the Protocol contracts. In the (unlikely) event a new collateral type is being onboarded with the intention to use Flipper liquidations, a new FLIPPER_MOM will need to be deployed.

### Cancel (`yank`) GovAlpha Budget Streams

As part of the [voluntary offboarding](https://forum.makerdao.com/t/advance-notice-of-govalpha-offboarding/21281) of GovAlpha, the budget streams are no longer required. The following actions will be taken, if this executive proposal passes.

- `yank` DAI stream ID 17.
- `yank` MKR stream ID 34.

### Launch Project Funding

Per this forum [post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/4) from the Accessibility Scope Facilitators and the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget), the following budget transfers from the Launch Project budget will take place, if this executive proposal passes.

#### DAI Transfer

- Transfer **941,933 DAI** to the Launch Project Multisig at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

#### MKR Transfer

- Transfer **210.83 MKR** to the Launch Project Multisig at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### Spark Proxy Spell

As part of this executive proposal, a [Proxy Spell](https://forum.makerdao.com/t/executive-proxies-and-spark-protocol/20976) for Spark Protocol at [0xFBdB6C5596Fc958B432Bf1c99268C72B1515DFf0](https://etherscan.io/address/0xFBdB6C5596Fc958B432Bf1c99268C72B1515DFf0) will be triggered if this executive proposal passes.

This Proxy Spell includes the following changes to Spark Protocol:

#### ETH Market Parameter Changes

Per this successful governance [poll](https://vote.makerdao.com/polling/QmULJKwK), the following parameter changes will be made:

- Decrease ETH market [variableRateSlope1](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) by 0.2% from 3% to **2.8%** - this effectively reduces the optimal borrow rate from 4% to 3.8%.
- Increase ETH market [Optimal Utilization](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#interest-rate-model) by 10% from 80% to **90%** - this allows for better rates to suppliers at the optimal utilization.
- Increase ETH market [variableRateSlope2](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters) by 40% from 80% to **120%** - this effectively increases the maximum borrow rate from 84% to 123.8% which reduces the possibility of the lending pool being at 100% utilization rate by accelerating the rate increase.

Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark-for-next-upcoming-spell/21685) to help inform your position before voting.

#### Increase wstETH Supply Cap

Per this successful governance [poll](https://vote.makerdao.com/polling/QmbMR8PU), the following paramter change will be made:

- Increase the Spark Protocol wstETH [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps) by 200,000 wstETH from 200,000 wstETH to **400,000 wstETH**.

Please review the discussion [thread](https://forum.makerdao.com/t/phoenix-labs-proposed-changes-for-spark-for-next-upcoming-spell/21685) to help inform your position before voting.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).