---
title: Template - [Executive Vote] Recognized Delegate Compensation, MKR Transfers, SPF Dai Transfer, RETH-A Dust Adjustment, Monetalis Updates, PSM Parameter Normalization - March 29, 2023
summary: Recognized Delegate backpay, MKR Vesting to CES-001 and SES-001, Phoenix Labs initial funding, decreasing RETH Debt Ceiling, Monetalis return of funds and DC-IAM adjustments, and implementing PSM parameter normalization following emergency actions. 
date: 2023-03-29T00:00:00.000Z
address: "0x7925c14B2E533B9CFD3662d6C87441D35820D3f9"

---
# [Executive Proposal] Recognized Delegate Compensation, MKR Transfers, SPF Dai Transfer, RETH-A Dust Adjustment, Monetalis Updates, PSM Parameter Normalization - March 29, 2023

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- A total of **3,307 DAI** will be transferred to two Recognized Delegates, as detailed below.
- A total of **307.12 MKR** will be transferred to the Collateral Engineering Services Core Unit (CES-001) and the Sustainable Ecosystem Scaling Core Unit (SES-001), as detailed below.
- A total of **50,000 DAI** will be transferred to a designated address for the initial funding of Phoenix Labs, as detailed below.
- The RETH-A [Debt Floor (`dust`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor) will be decreased, as detailed below.
- Monetalis updates:
	- Return excess MIP65 funds to the Surplus Buffer, as detailed below.
	- Removal of [DC-IAM](https://manual.makerdao.com/module-index/module-dciam) from RWA-007, as detailed below.
	- Increase of the [MIP65](https://mips.makerdao.com/mips/details/MIP65) [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling), as detailed below.
- PSM Parameter Normalization, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **16 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Recognized Delegate Compensation

As per [MIP61: Recognized Delegate Compensation](https://mips.makerdao.com/mips/details/MIP61), a total of **3,307 DAI** will be distributed to two Recognized Delegates as detailed below, if this executive proposal passes:

- **3,126 DAI** will be transfered to [London Business School Blockchain](https://vote.makerdao.com/address/0xf1792852bf860b4ef84a2869df1550bc80ec0ab7) at [`0xB83b3e9C8E3393889Afb272D354A7a3Bd1Fbcf5C`](https://etherscan.io/address/0xB83b3e9C8E3393889Afb272D354A7a3Bd1Fbcf5C).
- **181 DAI** will be transfered to [ConsenSys](https://vote.makerdao.com/address/0x40f784b16b2d405efd4e9eb7d0663398d7d886fb) at [`0xE78658A8acfE982Fde841abb008e57e6545e38b3`](https://etherscan.io/address/0xE78658A8acfE982Fde841abb008e57e6545e38b3).

_Note that the compensation for these two Recognized Delegates for February was left uncleared as they [failed to confirm their addresses](https://forum.makerdao.com/t/recognized-delegate-compensation-february-2023/20033/2). They have now been confirmed._

### MKR Transfers

As per the ratified [MIP40c3-SP17: Sustainable Ecosystem Scaling Core Unit MKR Budget](https://vote.makerdao.com/polling/QmSmhV7z), **229.78 MKR** will be transferred to the [Sustainable Ecosystem Scaling Core Unit (SES-001)](https://mips.makerdao.com/mips/details/MIP39c2SP10) at [`0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6`](https://etherscan.io/address/0x87AcDD9208f73bFc9207e1f6F0fDE906bcA95cc6), if this executive proposal passes.

Additionally, as per this successful [governance poll](https://vote.makerdao.com/polling/QmbNVQ1E), **77.34 MKR** will be transferred to the [Collateral Engineering Services Core Unit (CES-001)]( https://mips.makerdao.com/mips/details/MIP39c2SP12) at [`0x25307aB59Cd5d8b4E2C01218262Ddf6a89Ff86da`](https://etherscan.io/address/0x25307aB59Cd5d8b4E2C01218262Ddf6a89Ff86da) to correct a shortfall (explained in [this thread](https://forum.makerdao.com/t/request-to-poll-one-time-mkr-distribution-to-correct-ces-001-incentive-program-shortfall/19326)), if this executive proposal passes.

### SPF Dai Transfer

As per the ratified [MIP55c3-SP15: Phoenix Labs Initial Funding (SPF)](https://vote.makerdao.com/polling/QmYBegVf), **50,000 DAI** will be transferred to designated address [`0xD9847E6b1314f0327F320E43B51ca0AaAD6FF509`](https://etherscan.io/address/0xD9847E6b1314f0327F320E43B51ca0AaAD6FF509), if this executive proposal passes.

### RETH-A Dust Decrease

As per this successful [governance poll](https://vote.makerdao.com/polling/QmcLGa49), the RETH-A [Debt Floor (`dust`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor) will be decreased as detailed below, if this executive proposal passes:

- Decrease the RETH-A [Debt Floor (`dust`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor) Parameter by 7,500 DAI from 15,000 DAI to **7,500 DAI**.

### Monetalis Updates

1. As per this successful [governance poll](https://vote.makerdao.com/polling/QmfZ2nxw), the [MIP65](https://mips.makerdao.com/mips/details/MIP65) trustee will be instructed to sell shares and return the proceeds to the Surplus Buffer, if this executive proposal passes.

If this proposal is passed by MKR holders, MakerDAO instructs the Trustee James Asset (PTC) Limited on behalf of James Asset Trust to sell **8,540** shares of IE00BGSF1X88 iShares $ Treasury 0-1 yr UCITS ETF and **73,486** shares of IE00BYXPSP02 iShares $ Treasury Bond 1-3 yr UCITS ETF, as detailed [here](https://gateway.pinata.cloud/ipfs/Qmf7oGxgVoGKMGkzPi2T6nBSTLgrU5C7jmNqaefjJ52Zup).

2. As per this successful [governance poll](https://vote.makerdao.com/polling/QmRJSSGW), the [Debt Ceiling Instant Access Module (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) will be removed from [MIP65](https://mips.makerdao.com/mips/details/MIP65) (RWA007-A), if this executive proposal passes.

3. As per this successful [governance poll](https://vote.makerdao.com/polling/QmNTSr9j), the [MIP65](https://mips.makerdao.com/mips/details/MIP65) (RWA007-A) [Debt Ceiling (`line`)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) will be increased by 750 million DAI from 500 million DAI to **1.25 billion DAI**, if this executive proposal passes.

For more information on these changes, please review [Clydesdale (MIP65) Liquidation & DC Increase Execution Documentation](https://forum.makerdao.com/t/clydesdale-mip65-liquidation-dc-increase-execution-documentation/20258) and [The DC Increase (MIP65) - Legal Assessment](https://forum.makerdao.com/t/the-dc-increase-mip65-legal-assessment/20267). 

### PSM Parameter Normalization

As per this [post](https://forum.makerdao.com/t/proposal-psm-parameter-normalization-17-march-2023/20209) from the [Risk Core Unit (RISK-001)](https://mips.makerdao.com/mips/details/MIP39c2SP35), the following parameter changes will be made, if this executive proposal passes:

#### [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) Change

- Reduce the PSM-USDP-A `line` by 500 million DAI from 1 billion DAI to **500 million DAI**.

#### [Fee In (`tin`)](https://manual.makerdao.com/module-index/module-psm#fee-in-tin) Changes

- Reduce the PSM-USDC-A `tin` by 1% from 1% to **0%**.
- Reduce the PSM-GUSD-A `tin` by 0.1% from 0.1% to **0%**.

#### [Fee Out (`tout`)](https://manual.makerdao.com/module-index/module-psm#fee-out-tout) Changes

- Increase the PSM-GUSD-A `tout` by 0.01% from 0% to **0.01%**.
- Reduce the PSM-USDP-A `tout` by 1% from 1% to **0%**.

#### [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) Changes

- Increase the PSM-USDC-A `gap` by 150 million DAI from 250 million DAI to **400 million DAI**.
- Increase the PSM-GUSD-A `gap` by 40 million DAI from 10 million DAI to **50 million DAI**.
- Reduce the PSM-USDP-A `gap` by 200 million DAI from 250 million DAI to **50 million DAI**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To participate in future Governance calls, please [join us](https://forum.makerdao.com/tag/pubcall-:-governance-and-risk) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).

