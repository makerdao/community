---
title: Template - [Executive Vote] Spark Proxy Spell, Increase Spark Lend Maximum Debt Ceiling, Launch Project Funding, Approve Updates to the HVBank Facility, Whistleblower Bounty, October 2023 Delegate Compensation - November 15, 2023
summary: Execute Spark proxy spell, increase the Maximum Debt Ceiling for the Spark Lend D3M, Dai and MKR funding for the Launch Project, DAO resolution and updated standing instructions to the escrow agent for the HVBank deal, payment of whistleblower bounty, Aligned Delegate compensation for October.
date: 2023-11-15T00:00:00.000Z
address: "0x77cF3f27bF48ecD21CFe7293a31272f0aD44bfc6"

---
# [Executive Proposal] Spark Proxy Spell, Increase Spark Lend Maximum Debt Ceiling, Launch Project Funding, Approve Updates to the HVBank Facility, Whistleblower Bounty, October 2023 Delegate Compensation - November 15, 2023

The Governance Facilitators, Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:
- A proxy spell for Spark Lend will be executed to update previously polled parameters.
- The Spark Lend Dai Direct Deposit Module (D3M) will have its Maximum Debt Ceiling (`line`) increased.
- The Launch Project will receive a transfer of Dai and MKR.
- A DAO Resolution and updated standing instructions to the escrow agent pertaining to the HVBank vault will be approved.
- A whistleblower bounty of **27.78 MKR** will be paid relating to the derecognition of two Aligned Delegates.
- Aligned Delegate compensation for October 2023 will be paid out, totaling **279.49 MKR**.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Spark Lend Proxy Spell

*Authorization*: Governance Polls [1](https://vote.makerdao.com/polling/QmaBLbxP), [2](https://vote.makerdao.com/polling/QmZwRgr5), [3](https://vote.makerdao.com/polling/QmQPrHsm), [4](https://vote.makerdao.com/polling/QmRG9qUp), [5](https://vote.makerdao.com/polling/QmQjKpbU)\
*Proposal*: [Forum post](https://forum.makerdao.com/t/proposal-to-adjust-sparklend-parameters/22542)

If this executive proposal passes, a proxy-spell [0xDa69603384Ef825E52FD5B8bEF656ff62Fe19703](https://etherscan.io/address/0xDa69603384Ef825E52FD5B8bEF656ff62Fe19703) will be executed for SparkLend containing the following major items:

- Increase the Spark Lend Gnosis Chain wstETH [supply cap](https://docs.sparkprotocol.io/developers/sparklend/features/supply-borrow-caps#supply-caps) from 5,000 wstETH to **10,000 wstETH**.
- Reduce the Spark Lend Ethereum Dai market [Loan-to-Value (LTV)](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value) from 1bps to **0**.
- Reactivate the WBTC market on Spark Lend Ethereum with the following parameters:
	- Maximum [Loan-to-Value LTV](https://docs.aave.com/risk/asset-risk/risk-parameters#loan-to-value): **70%**
	- [Liquidation Threshold](https://docs.aave.com/risk/asset-risk/risk-parameters#liquidation-threshold): **75%**
	- Liquidation penalty: **7%**
	- [Supply Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#supply-caps): **3,000 WBTC**
	- [Borrow Cap](https://docs.sparkprotocol.io/developers/features/supply-borrow-caps#borrow-caps): **2,000 WBTC**
	- [Reserve Factor](https://docs.aave.com/risk/asset-risk/risk-parameters#reserve-factor): **20%**
	- Base rate: **0%**
	- Optimal rate: **2%**
	- Max rate: **302%**
	- Optimal utilization: **60%**
	- [Efficiency mode or eMode](https://docs.sparkprotocol.io/developers/features/efficiency-mode-emode): **No**
	- [Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode): **No**
	- Debt ceiling: n/a
		- ~$78,000,000 effective risk exposure (~10% of TVL, ~155% of Maker surplus)
- Increase the Spark Lend Ethereum rETH and wstETH [supply caps](https://docs.sparkprotocol.io/developers/sparklend/features/supply-borrow-caps#supply-caps):
	- Increase the rETH supply cap from 60,000 rETH to **80,000 rETH**.
	- Increase the wstETH supply cap from 400,000 wstETH to **800,000 wstETH**.
- Adjust the Spark Lend Ethereum **and** Gnosis Chain ETH [interest rate model](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#interest-rate-model) parameters:
	- Base rate: **0%**
	- Optimal Rate: **3.2%**
	- Optimal Utilization: **90%**
	- Maximum Rate: **123.2%**

### Adjust Spark Lend D3M Maximum Debt Ceiling (`line`)

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmVbrypf#poll-detail)\
*Proposal*: [Forum Post](https://forum.makerdao.com/t/proposal-to-adjust-sparklend-parameters/22542)

If this executive proposal passes, the following change will be made to the Spark Lend Direct Deposit Module Maximum Debt Ceiling:

- Increase the DIRECT-SPARK-DAI [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) from 400 million DAI to **800 million DAI**.

### Launch Project Funds Transfer

*Authorization*: [Forum Notification](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/6)

If this executive proposal passes, the following transfers will be made to the Launch Project as part of the funding defined in the [Accessibility Scope](https://mips.makerdao.com/mips/details/MIP108#9-launch-project):

- Transfer **2,200,000 DAI** to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- Transfer **500.00 MKR** to [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).

### DAO Resolution Pertaining to HVBank (RWA009-A) and Updated Standing Instructions to Escrow Agent

*Authorization*: [Governance Poll](https://vote.makerdao.com/polling/QmNgKzcG)\
*Proposal*: [Forum Post](https://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264/19)

If this executive proposal passes, a DAO Resolution and updated standing instructions to the escrow agent pertaining to the HVBank facility will be approved. These are broken down as follows:

#### Updated Standing Instructions to Escrow Agent

*IPFS link*: https://gateway.pinata.cloud/ipfs/QmWVWXckY482WLTtCFv3x45DFioV1K8mfRM3FVrodqUDud

```
EXHIBIT A

STANDING WRITTEN INSTRUCTIONS TO ESCROW AGREEMENT

Wilmington Savings Fund Society, FSB, as Escrow Agent
500 Delaware Avenue, 11th Floor
Wilmington, DE 19801

Attention: Corporate Trust Department – RWA
Master Participation Trust Email: structuredfinance@wsfsbank.com

November [_], 2023

Written Instructions

Ladies and Gentlemen:

Reference is made to the Escrow Agreement dated as of July 12, 2022 (the “Escrow Agreement”), among RWA Foundation, as trust sponsor (the “Trust Sponsor”) , RWA Master Participation Trust and Wilmington Savings Fund Society, FSB, as escrow agent (the “Escrow Agent”). Capitalized terms used herein but not otherwise defined shall have the meaning assigned to such terms in the Escrow Agreement.

Incoming

From time to time, amounts will be deposited into the Escrow Account, from a brokerage account of the Trust Sponsor held by Galaxy Digital Trading Cayman LLC (the “Brokerage Account”).

Pursuant to the Escrow Agreement, the undersigned hereby instructs the Escrow Agent, within two (2) Business Days after deposit into the Escrow Account of amounts received from the Brokerage Account, to disburse from the Escrow Account by wire transfer or internal transfer to the account identified below:

Bank Wells Fargo Bank, NA
Address 240 Montgomery St.
San Francisco, CA
ABA No. 121000248
Account No. 2000003496376
SEI Trust Company CTF Christiana Trust Div of WSFS

Further Credit to:

Account Name RWA Foundation Participation Funding Account
Participation Funding Account No. CH134267-0

Outgoing

Further, from time to time, amounts will be deposited into the Escrow Account, from the Participation Funding Account, the Participation Receipt Account or the Authorized Investments Income Account identified below:

Account For Further Credit:
Participation Funding Account CH134267-0
Participation Receipt Account CH134267-1
Authorized Investments Income Account CH134267-2

Pursuant to the Escrow Agreement, the undersigned hereby instructs the Escrow Agent, within two (2) Business Days after deposit into the Escrow Account of amounts received from the Participation Funding Account, the Participation Receipt Account or the Authorized Investments Income Account (as the case may be), to disburse from the Escrow Account by wire transfer to the Brokerage Account identified below:

Receiving Bank Routing No: 021000018
ABA Swift IRVTUS3N
Receiving Bank Name: The Bank of New York Mellon
Receiving Bank Address: 240 Greenwich Street, New York NY 10017
Beneficiary Name: Galaxy Digital Trading Cayman LLC
Beneficiary Address: 101 Hudson Street, FL 21 Jersey City, NJ 07302
Beneficiary Account: 8901637157

We confirm that these instructions are merely to facilitate our own internal requirements and that we remain fully liable to you under the terms and conditions of the Escrow Agreement between us. You have no liability for losses resulting from errors in these instructions. The undersigned agrees that all action taken by the Escrow Agent in connection with this direction letter are covered by the fee and indemnification provisions set forth in the Trust Agreement.
```

#### DAO Resolution to Approve New Galaxy Payment Instructions

*IPFS Link*: https://gateway.pinata.cloud/ipfs/QmSbwqULr66CiCvNips93vwTrvoTe4i2rJVmho7QfmyqZG

```
MAKERDAO RESOLUTION

Date: Dated as of related Executive Vote on MakerDAO
Purpose: Approval of New Payment Instructions to Galaxy Digital Trading Cayman LLC

Reference is made to:
1. The Amended and Restated Articles of Association (the “Articles”) of the RWA Foundation (“RWAF”), dated July 13, 2022, pursuant to which RWAF’s operations are governed.
2. The Escrow Agreement dated as of July 12, 2022 (the “Escrow Agreement”), between RWAF, as trust sponsor (the “Trust Sponsor”), RWA Master Participation Trust and Wilmington Savings Fund Society, FSB, as escrow agent (the “Escrow Agent”).

Capitalized terms used herein and not otherwise defined shall have the meaning given to them in the Articles and the Escrow Agreement.

Whereas:
3. Clause 4.16 of the Articles mandates the directors of the Trust Sponsor to implement all DAO Resolutions (subject to applicable law); and
4. Clause 4a. of the Escrow Agreement, provides that the Trust Sponsor shall deliver Instructions to the Escrow Agent instructing the Escrow Agent to distribute funds from the Escrow Account as specified in such Instructions and the Trust Sponsor may make and the Escrow Agent shall accept (1) an amendment to existing Instructions or (2) replacement Instructions; provided that, in each case, such amendments or replacement Instructions shall require signature by the Verification Agent confirming its verification of the Affirmative MakerDAO Vote approving such amendment or replacement Instructions.

Authorizations:

In accordance with the governance protocols of MakerDAO on the date specified above and pursuant to clause 4.16 of the Articles, this DAO Resolution approves and ratifies the following actions:
5. Subject to the approval of the Verification Agent, the director of the Trust Sponsor is instructed to promptly provide new outgoing instructions to the Escrow Agent, as outlined below (“New Instructions”):

Receiving Bank Routing No: 021000018
ABA Swift IRVTUS3N
Receiving Bank Name: The Bank of New York Mellon
Receiving Bank Address: 240 Greenwich Street, New York NY 10017
Beneficiary Name: Galaxy Digital Trading Cayman LLC
Beneficiary Address: 101 Hudson Street, FL 21 Jersey City, NJ 07302
Beneficiary Account: 8901637157

6. The director of the Trust Sponsor is instructed to take or enter into all required actions and agreements
with third parties solely to facilitate the implementation of the New Instructions.
```

### Whistleblower Bounty

*Authorization*: [Forum Post](https://forum.makerdao.com/t/ads-derecognition-due-to-operational-security-breach/22532)

If this executive proposal passes, the following whistleblower bounty will be paid to forum user Venice Tree as per [The Atlas](https://mips.makerdao.com/mips/details/MIP101#2-6-6-aligned-delegate-operational-security):

- Transfer **27.78 MKR** from the Pause Proxy to [0xCDDd2A697d472d1e8a0B1B188646c756d097b058](https://etherscan.io/address/0xCDDd2A697d472d1e8a0B1B188646c756d097b058).

### Delegate Compensation for October

*Authorization*: [Atlas 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)\
*Proposal*: [Forum Post](https://forum.makerdao.com/t/october-2023-aligned-delegate-compensation/22732)

If this executive proposal passes, the following distributions will be made for October Aligned Delegate Compensation, totaling **279.49 MKR**:

| Delegate    | Address                                                                                                               | Amount (MKR) |
|-------------|-----------------------------------------------------------------------------------------------------------------------|--------------|
| 0xDefensor  | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 41.67        |
| TRUE NAME   | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 41.67        |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 41.67        |
| Cloaky      | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) | 41.67        |
| Navigator   | [0x11406a9CC2e37425F15f920F494A51133ac93072](https://etherscan.io/address/0x11406a9CC2e37425F15f920F494A51133ac93072) | 40.33        |
| vigilant    | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 13.84        |
| UPMaker     | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 13.89        |
| PBG         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 13.89        |
| PALC        | [0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A](https://etherscan.io/address/0x78Deac4F87BD8007b9cb56B8d53889ed5374e83A) | 13.44        |
| BLUE        | [0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf](https://etherscan.io/address/0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf) | 12.97        |
| JAG         | [0x58D1ec57E4294E4fe650D1CB12b96AE34349556f](https://etherscan.io/address/0x58D1ec57E4294E4fe650D1CB12b96AE34349556f) | 4.45         |



## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
