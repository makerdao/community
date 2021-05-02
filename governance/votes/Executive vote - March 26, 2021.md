---
title: Template - [Executive Vote] Increase Debt Ceilings, Modify Risk Parameters - March 26, 2021

---
# [Executive Proposal] Increase Debt Ceilings, Modify Risk Parameters - March 26, 2021

The Governance Facilitator(s) and the MakerDAO Smart Contracts Domain Team have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote. 

---

## Executive Summary

If this executive proposal passes the following changes will occur within the Maker Protocol:
- UNIV2DAIETH-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) with the following parameters:
	- Maximum Debt Ceiling: 30 million DAI
	- Target Available Debt: 5 million DAI
	- Ceiling Increase Cooldown: 12 hours
- UNIV2USDCETH-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) with the following parameters:
	- Maximum Debt Ceiling: 50 million DAI
	- Target Available Debt: 5 million DAI
	- Ceiling Increase Cooldown: 12 hours
- UNIV2DAIUSDC-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) with the following parameters:
	- Maximum Debt Ceiling: 50 million DAI
	- Target Available Debt: 10 million DAI
	- Ceiling Increase Cooldown: 12 hours
- The ETH-B [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor)(`dust`) will be increased from 2,000 DAI to 15,000 DAI.
- The Surplus Lot Size (`bump`) parameter will increase from 10,000 DAI to 30,000 DAI.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal **does not include** an office-hours modifier and can be executed immediately once the GSM Pause Delay has expired.

If this executive proposal does not pass within **30 days** then it will expire and can no longer have any effect on the Maker Protocol. 

---

## Proposal Details

### Increase the Surplus Lot Size (bump)

Due to the positive outcome from this [poll](https://vote.makerdao.com/polling/QmeLmzsa) and associated [signal request](https://forum.makerdao.com/t/signal-request-increase-the-bump-ttl-parameters-of-flap-auctions/6842), the Surplus Lot Size (`bump`) parameter will be increased from 10,000 DAI to 30,000 DAI if this executive proposal passes.

### Increase the Debt Floor (dust) for the ETH-B Vault Type

Due to the positive outcome from this [poll](https://vote.makerdao.com/polling/QmaP9wBh#poll-detail) and associated [signal request](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-2/6704), the [Debt Floor](https://community-development.makerdao.com/en/learn/governance/param-debt-floor)(`dust`) parameter will be increased from 10,000 DAI to 30,000 DAI if this executive proposal passes.

### Increase Debt Ceiling and enable UNIV2DAIETH-A on the Debt Ceiling Instant Access Module

Due to the positive outcome from this [poll](https://vote.makerdao.com/polling/QmaZE3g6?network=mainnet#poll-detail) and associated [signal request](https://forum.makerdao.com/t/signal-request-increase-uniswap-dai-eth-usdc-eth-dai-usdc-debt-ceilings-add-dc-iam/7063), UNIV2DAIETH-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) with the following parameters if this executive proposal passes.
- Maximum Debt Ceiling: 30 million DAI
- Target Available Debt: 5 million DAI
- Ceiling Increase Cooldown: 12 hours

Note that the Maximum Debt Ceiling value represents an increase from the current debt ceiling of 3 million DAI.

### Increase Debt Ceiling and enable UNIV2USDCETH-A on the Debt Ceiling Instant Access Module

Due to the positive outcome from this [poll](https://vote.makerdao.com/polling/QmZNz7Hf?network=mainnet) and associated [signal request](https://forum.makerdao.com/t/signal-request-increase-uniswap-dai-eth-usdc-eth-dai-usdc-debt-ceilings-add-dc-iam/7063), UNIV2USDCETH-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) with the following parameters if this executive proposal passes.
- Maximum Debt Ceiling: 50 million DAI
- Target Available Debt: 5 million DAI
- Ceiling Increase Cooldown: 12 hours

Note that the Maximum Debt Ceiling value represents an increase from the current debt ceiling of 3 million DAI.

### Increase Debt Ceiling and enable UNIV2DAIUSDC-A on the Debt Ceiling Instant Access Module

Due to the positive outcome from this [poll](https://vote.makerdao.com/polling/QmZordW8?network=mainnet) and associated [signal request](https://forum.makerdao.com/t/signal-request-increase-uniswap-dai-eth-usdc-eth-dai-usdc-debt-ceilings-add-dc-iam/7063), UNIV2DAIUSDC-A will be enabled on the [Debt Ceiling Instant Access Module](https://community-development.makerdao.com/en/learn/governance/module-dciam) with the following parameters if this executive proposal passes.
- Maximum Debt Ceiling: 50 million DAI
- Target Available Debt: 10 million DAI
- Ceiling Increase Cooldown: 12 hours

Note that the Maximum Debt Ceiling value represents an increase from the current debt ceiling of 3 million DAI.

## Review

Community debate on these topics can be found on the MakerDAO [governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
