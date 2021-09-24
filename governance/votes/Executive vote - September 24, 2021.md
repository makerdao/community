---
title: Template - [Executive Vote] Adjusting Auction Parameters and Testing Layer 2 Components - September 24, 2021
summary: Adjusting Auction Parameters for ETH-A, ETH-B, ETH-C, WBTC-A and testing configuration of L2 components, including the governance relay and L2 DAI.
date: 2021-09-24T00:00:00.000Z
address: "0x0ed5a04DdE29f90bB00529608D3f17C1ffF778A0"

---
# [Executive Proposal] Adjusting Auction Parameters and Testing Layer 2 Components - September 24, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The following adjustments to Auction Parameters will be made:
  - **Decrease** the [Auction Price Multiplier (buf)](https://makerdao.world/en/learn/governance/param-auction-price-multiplier) for ETH-A, ETH-C, and WBTC-A vaults from 1.3 to **1.2**
  - **Increase** the ETH-A [Local Liquidation Limit (ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) from 30 million DAI to **40 million DAI**
  - **Increase** the ETH-B [Local Liquidation Limit (ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) from 15 million DAI to **25 million DAI**
  - **Increase** the ETH-C [Local Liquidation Limit (ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) from 20 million DAI to **30 million DAI**
  - **Increase** the WBTC-A [Local Liquidation Limit (ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) from 15 million DAI to **25 million DAI**
- Multiple **test actions** will take place for Layer 2 DAI solutions on Optimism and Arbitrum, with the intention of denying the Protocol Engineering Core Unit's Deployer Keys if successful. 


**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of liquidations taking place with the new auction parameters.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Adjusting Auction Parameters for ETH-A, ETH-B, ETH-C, and WBTC-A

As per the result of [this poll](https://vote.makerdao.com/polling/QmfGk3Dm?network=mainnet#poll-detail), the following changes to Auction Parameters for ETH-A, ETH-B, ETH-C, and WBTC-A will occur if this executive proposal passes.

- **Decrease** the [Auction Price Multiplier (buf)](https://makerdao.world/en/learn/governance/param-auction-price-multiplier) for ETH-A, ETH-C, and WBTC-A vaults from 1.3 to **1.2**
- **Increase** the [Local Liquidation Limit (ilk.hole)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) as detailed below:
  - ETH-A Local Liquidation Limit from 30 million DAI to **40 million DAI**
  - ETH-B Local Liquidation Limit from 15 million DAI to **25 million DAI**
  - ETH-C Local Liquidation Limit from 20 million DAI to **30 million DAI**
  - WBTC-A Local Liquidation Limit from 15 million DAI to **25 million DAI**

For more information on the rationale behind these proposed changes, please view [this post](https://forum.makerdao.com/t/adjusting-auction-parameters-for-eth-a-eth-c-and-wbtc-a-vault-types/10331) from the Risk Core Unit. 

### Layer 2 Test Actions

As per [this post](https://forum.makerdao.com/t/friday-24th-september-2021-executive-spell-l2-technical-detail/10500) multiple Layer 2 test actions will take place if this executive proposal passes. 

This element will test the configuration of L2 components, including the governance relay and L2 DAI. Once it is confirmed that Governance has control over all L2 systems, the Protocol Engineering Core Unit will **manually** `deny` its deployer addresses, meaning Governance will be the only authority retaining full control of the token bridges.

For more information, please see this post on [A Proposed L2 Risk Framework](https://forum.makerdao.com/t/a-proposed-l2-risk-framework/9518) or these posts on the [Arbitrum Bridge](https://forum.makerdao.com/t/official-dai-token-bridge-now-live-on-arbitrum-one/10438) and [Optimism Bridge](https://forum.makerdao.com/t/official-dai-bridge-on-optimism/9329).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
