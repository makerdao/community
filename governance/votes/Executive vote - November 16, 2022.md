---
title: Template - [Executive Vote] Parameter Changes for RWA-007-A (Monetalis Clydesdale), Enable rETH-A DC-IAM, Housekeeping Changes - November 16, 2022
summary: Parameter changes for Monetalis Clydesdale, activate the DC-IAM on rETH-A allowing DAI generation, housekeeping changes for RWA vaults and the chainlog.
date: 2022-11-16T00:00:00.000Z
address: "0xDe7FC6DD8F96c02E823278ff58Fa3624ff1A97A9"

---
# [Executive Proposal] Parameter Changes for RWA-007-A (Monetalis Clydesdale), Enable RETH-A DC-IAM, Housekeeping Changes - November 16, 2022

The Governance Facilitator(s), the Collateral Engineering Services Core Unit, and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap), and [`doc`](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameters for RWA-007-A (Monetalis Clydesdale) will be updated, as detailed below.
- The [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line), [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap), and [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) for rETH-A will be updated, as detailed below.
- Housekeeping updates to the [`doc`](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameters for RWA-008-A and RWA-009-A.
- Housekeeping updates to the chainlog.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### RWA-007-A Parameter Changes

As per this [forum post](https://forum.makerdao.com/t/nov-16-2020-executive-contents/18747) from [Collateral Engineering Services Core Unit (CES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP20) Facilitator @monkey.irish, the following changes will be made to the RWA-007-A (Monetalis Clydesdale) vault type, if this proposal passes:

* The [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 250 million DAI from 250 million DAI to **500 million DAI**.
* The [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) will be increased by 50 million DAI from 50 million DAI to **100 million DAI**.
* The [`doc`](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) parameter for RWA-007-A will be updated to **QmejL1CKKN5vCwp9QD1gebnnAM2MJSt9XbF64uy4ptkJtR** - [IPFS Link](https://gateway.pinata.cloud/ipfs/QmejL1CKKN5vCwp9QD1gebnnAM2MJSt9XbF64uy4ptkJtR) - to reflect the most recent instuctions that can be found [here](https://forum.makerdao.com/t/mip65-monetalis-clydesdale-documentation-hq/17923#mip65-establishment-and-deployment-instructions-4).

The forum post outlines the rationale for using this approach rather than the initially planned two-vault structure for the [MIP65](https://mips.makerdao.com/mips/details/MIP65) implementation.

### RETH-A Parameter Changes

Now that Maker's rETH oracles have reached quorum, the following parameter changes that were approved in the rETH-A [onboarding poll](https://vote.makerdao.com/polling/QmfMswF2#poll-detail) will be made to the rETH-A vault type, if this proposal passes:

* The [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be set to **5 million DAI**.
* The [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) will be set to **3 million DAI**.
* The [Ceiling Increase Cooldown (`ttl`)](https://manual.makerdao.com/module-index/module-dciam#ceiling-increase-cooldown-ttl) will be set to **8 hours**.

### [`doc`](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement) Variable Housekeeping Updates for RWA Vaults

As per this [forum post](https://forum.makerdao.com/t/nov-16-2020-executive-contents/18747) from [Collateral Engineering Services Core Unit (CES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP20) Facilitator @monkey.irish, the following changes will be made to the RWA-008-A (SocGen) and RWA-009-A (HVBank) vault types, if this proposal passes:

* Update the RWA-008-A `doc` from QmdfzY6p5EpkYMN8wcomF2a1GsJbhkPiRQVRYSPfS4NZtB to **QmZ4heYjptvj3ovafADJpXYMFXMyY3yQjkTXpvjFPnAKcy** - [IPFS Link](https://gateway.pinata.cloud/ipfs/QmZ4heYjptvj3ovafADJpXYMFXMyY3yQjkTXpvjFPnAKcy).
* Update the RWA-009-A `doc` from QmQx3bMtjncka2jUsGwKu7ButuPJFn9yDEEvpg9xZ71ECh to **QmeRrbDF8MVPQfNe83gWf2qV48jApVigm1WyjEtDXCZ5rT** - [IPFS Link](https://gateway.pinata.cloud/ipfs/QmeRrbDF8MVPQfNe83gWf2qV48jApVigm1WyjEtDXCZ5rT).

### Chainlog Housekeeping Changes

As per this [forum post](https://forum.makerdao.com/t/nov-16-2020-executive-contents/18747) from [Collateral Engineering Services Core Unit (CES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP20) Facilitator @monkey.irish, the following changes will be made to the chainlog, if this proposal passes:

* Change `RWA007_A_INPUT_CONDUIT_URN` to `RWA007_A_INPUT_CONDUIT`.
* Change `RWAXXX_A_INPUT_CONDUIT_JAR` to `RWAXXX_A_JAR_INPUT_CONDUIT`.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
