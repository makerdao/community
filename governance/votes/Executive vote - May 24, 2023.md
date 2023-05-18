---
title: Template - [Executive Vote] Coinbase Custody Onboarding, Keeper Network Amendments, Core Artificial Intelligence System (CAIS) Bootstrap Funding, Spark GNO Onboarding and Associated Changes - May 24, 2023
summary: Onboard Coinbase Custody as RWA014-A, Amend Maker Keeper Network DAI streams with new parameters, DAI transfer for Core Artificial Intelligence System (CAIS) bootstrap funding, Onboard GNO on Spark Protocol and set the GNO Debt Ceiling on Maker to zero.
date: 2023-05-24T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Coinbase Custody Onboarding, Keeper Network Amendments, Core Artificial Intelligence System (CAIS) Bootstrap Funding, Spark GNO Onboarding and Associated Changes - May 24, 2023

The Arbitration Facilitators and -->$exec_crafter??<-- have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Maker Keeper Network DAI [dss-vest](https://manual.makerdao.com/module-index/module-token-streaming) streams will be amended with new parameters, as detailed below.
- A total of **100,000 DAI** will be transferred to --->$address<--- to bootstrap the Core Artificial Intelligence System (CAIS), as detailed below.
- The Maximum Debt Ceiling for GNO-A will be set to 0 DAI, as detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- RWA014 (Coinbase Custody) will be onboarded as a new vault type, as detailed below.
- GNO (Gnosis) will be onboarded to Spark Protocol, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Coinbase Custody (RWA014) Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmdRELY7) Coinbase Custody will be onboarded as RWA014-A as detailed below, if this executive proposal passes.

#### Collateral Parameters

* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): **0%**.
* [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): **500 million DAI**.
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): **100%**.
* Oracle Price: **500 million DAI**.
* Debt write-off timelock (`tau`): **0**.
* Liquidation Process: Will use the established RWA collateral contracts. See [MIP21](https://mips.makerdao.com/mips/details/MIP21) for details.
* [RWA Agreement](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement): **TBD** --> $I added this, please check <---

#### Relevant Smart Contract Information

* **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`. 
* **RWA_TOKEN_FAB:** `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
* **SYMBOL:** `RWA014`.
* **NAME:** `RWA-014`.
* **ILK:** `RWA014-A`.
* **RWA014:** TBD
* **MCD_JOIN_RWA014_A:** TBD
* **RWA014_A_URN:** TBD
* **RWA014_A_JAR:** TBD
* **RWA014_A_OUTPUT_CONDUIT:** TBD
* **RWA014_A_INPUT_CONDUIT_URN:** TBD
* **RWA014_A_INPUT_CONDUIT_JAR:** TBD
* **RWA014_A_OPERATOR:** TBD
* **ETH_Address_A (USDC Wallet In):** TBD --> $This is different from the previous exec text, please check <---

#### Additional Information

Please review the following forum threads containing information about RWA014 (Coinbase Custody) to inform your position before voting:
* [Initial MIP Forum Thread](https://forum.makerdao.com/t/mip81-coinbase-usdc-institutional-rewards/17703).
* [CES Domain Team Assessment](https://forum.makerdao.com/t/rwa014-coinbase-custody-interim-ces-domain-team-assessment/19171/1).
* [Updated Technical Assessment from dewiz](https://forum.makerdao.com/t/rwa014-coinbase-custody-interim-ces-domain-team-assessment/19171/2).
* [Strategic Finance Core Unit Legal Assessment](https://forum.makerdao.com/t/coinbase-custody-legal-assessment/20384).

### Keeper Network Amendments

As per [this poll](https://vote.makerdao.com/polling/QmZZJcCj) the following Keeper Network parameters will be amended, as detailed below, if this executive proposal passes. -->$Mention old parameters below?<---

#### Gelato Network Parameters

- **Short Name**: GELATO
- **Website**: [https://app.gelato.network/]( https://app.gelato.network/)
- **Requested Window Size**: 13
- **Requested Budget**: 1,500 DAI / day
- **Requested Stream Duration**: 3 years
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: 0x0B5a34D084b6A5ae4361de033d1e6255623b41eD
- **Gelato Treasury**: 0xbfDC6b9944B7EFdb1e2Bc9D55ae9424a2a55b206

#### Keep3r Network Parameters

- **Short Name**: KEEP3R
- **Website**: [https://keep3r.network/]( https://keep3r.network/)
- **Requested Window Size**: 13
- **Requested Budget**: 1,500 DAI / day
- **Requested Stream Duration**: 3 years
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: 0xaeFed819b6657B3960A8515863abe0529Dfc444A
- **Keep3r Network Treasury**: 0x4DfC6DA2089b0dfCF04788b341197146Ea97f743

#### Chainlink Automation Parameters

- **Short Name**: CHAINLINK
- **Website**: [https://chain.link/automation]( https://chain.link/automation)
- **Requested Window Size**: 13
- **Requested Budget**: 1,500 DAI / day
- **Requested Stream Duration**: 3 years
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: 0xfB5e1D841BDA584Af789bDFABe3c6419140EC065
- **Chainlink Network Treasury**: $PENDING

#### TechOps Services Parameters

- **Short Name**: TECHOPS
- **Website**: [https://techops.services]( https://techops.services)
- **Requested Window Size**: 13
- **Requested Budget**: 1,000 DAI / day
- **Requested Stream Duration**: 1 year
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: 0x5A6007d17302238D63aB21407FF600a67765f982

Please review the discussion [thread](https://forum.makerdao.com/t/poll-notice-amend-keeper-networks/20757) to help inform your position before voting.

### CAIS Bootstrap Funding

As per [this poll](https://vote.makerdao.com/polling/Qmc6Wqrc), a total of **100,000 DAI** will be transferred to -->$wallet_owner$<--- at -->$address <--- to bootstrap the Core Artificial Intelligence System (CAIS). 

Please review the [MIP106, Article 10.3.1.1A](https://mips.makerdao.com/mips/details/MIP106#10-3-1-1a-) for more details on the CAIS Bootstrapping Budget and the discussion [thread](https://forum.makerdao.com/t/funding-request-for-core-artificial-intelligence-system-cais-project/20867) to help inform your position before voting.

### Spark GNO Onboarding and Maker GNO Debt Ceiling

As per [this poll](https://vote.makerdao.com/polling/QmXdGdxS) GNO (Gnosis) will be onboarded to Spark Protocol as detailed below, if this executive proposal passes. Additionally, the [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) for the GNO-A vaults in the Maker Protocol will be set to **0 DAI**, if this executive proposal passes.

#### Spark Onboarding Parameters

**Token:** GNO  
**Token Address:** [0x6810e776880C02933D47DB1b9fc05908e5386b96](https://etherscan.io/address/0x6810e776880C02933D47DB1b9fc05908e5386b96)  
**Oracle:** Maker Medianizer via adaptor  
**Oracle Provider:** Chronicle  
**Borrow Enabled:** No  
**Collateral Enabled:** Yes  
**[Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled:** Yes  
**Isolation Mode Debt Ceiling:** 5 million USD  
**Loan To Value:** 20%  
**Liquidation Threshold:** 25%  
**Liquidation Bonus:** 10%  

#### Activate Isolation Mode for DAI Market On Spark Protocol

This setting change will allow DAI to be borrowed using isolation mode enabled assets on Spark Protocol. It is a one-off change that is required given the onboarding of GNO as the first isolation mode enabled asset on Spark.

#### Reduce GNO-A Debt Ceiling to Zero

In order to manage maximum total exposure to GNO (Gnosis), the GNO-A vault in the Maker Protocol will have its Debt Ceiling reduced to zero.

#### Additional Information

Please review the following forum threads containing information about this onboarding to inform your position before voting:
* [Proposal thread](https://forum.makerdao.com/t/onboarding-of-gno-to-spark/20831).
* [Updated risk evaluation](https://forum.makerdao.com/t/onboarding-of-gno-to-spark/20831/9) by BA Labs. 

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).