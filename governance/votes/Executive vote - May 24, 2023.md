---
title: Template - [Executive Vote] Coinbase Custody (RWA014) Onboarding, Keeper Network Amendments, Core Artificial Intelligence System (CAIS) Bootstrap Funding, Spark Lend GNO Onboarding and Associated Changes - May 25, 2023
summary: Onboard Coinbase Custody as RWA014-A, Amend Maker Keeper Network DAI streams with new parameters, DAI transfer for Core Artificial Intelligence System (CAIS) bootstrap funding, Onboard GNO on Spark Lend and set the GNO Debt Ceiling on Maker to zero.
date: 2023-05-25T00:00:00.000Z
address: "0xB70254F2C2C342fB3B168cDa1E43db1E43Ab8DE1"

---
# [Executive Proposal] Coinbase Custody (RWA014) Onboarding, Keeper Network Amendments, Core Artificial Intelligence System (CAIS) Bootstrap Funding, Spark Lend GNO Onboarding and Associated Changes - May 25, 2023

The Arbitration Facilitators, dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Maker Keeper Network DAI [dss-vest](https://manual.makerdao.com/module-index/module-token-streaming) streams will be amended with new parameters, as detailed below.
- A total of **100,000 DAI** will be transferred to the Protocol Facilitators to bootstrap the Core Artificial Intelligence System (CAIS), as detailed below.
- The Debt Ceiling for GNO-A will be set to 0 DAI, as detailed below.

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- RWA014 (Coinbase Custody) will be onboarded as a new vault type, as detailed below.
- GNO (Gnosis) will be onboarded to Spark Lend, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues with their bots in the event of early liquidations on new collateral types.

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
* [RWA Agreement](https://manual.makerdao.com/parameter-index/vault-risk/param-rwa-agreement): `QmT2Dr1tTw4idtVXZHxjT5Cs22KsNJyZgmYy9LGf9kR7vU` - [view here](https://gateway.pinata.cloud/ipfs/QmT2Dr1tTw4idtVXZHxjT5Cs22KsNJyZgmYy9LGf9kR7vU).

#### Relevant Smart Contract Information

* **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`. 
* **RWA_TOKEN_FAB:** `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
* **SYMBOL:** `RWA014`.
* **NAME:** `RWA-014`.
* **ILK:** `RWA014-A`.
* **RWA014:** `0x75dCa04C4aCC1FfB0AEF940e5b49e2C17416008a`.
* **MCD_JOIN_RWA014_A:** `0xAd722E51569EF41861fFf5e11942a8E07c7C309e`.
* **RWA014_A_URN:** `0xf082566Ac42566cF7B392C8e58116a27eEdcBe63`.
* **RWA014_A_JAR:** `0x71eC6d5Ee95B12062139311CA1fE8FD698Cbe0Cf`.
* **RWA014_A_OUTPUT_CONDUIT:** `0xD7cBDFdE553DE2063caAfBF230Be135e5DbB5064`.
* **RWA014_A_INPUT_CONDUIT_URN:** `0x6B86bA08Bd7796464cEa758061Ac173D0268cf49`.
* **RWA014_A_INPUT_CONDUIT_JAR:** `0x391470cD3D8307AdC051d878A95Fa9459F800Dbc`.
* **RWA014_A_OPERATOR:** `0x3064D13712338Ee0E092b66Afb3B054F0b7779CB`.
* **ETH_Address_A (USDC Wallet In):** `0x2E5F1f08EBC01d6136c95a40e19D4c64C0be772c`.

#### Additional Information

Please review the following forum threads containing information about RWA014 (Coinbase Custody) to inform your position before voting:
* [Initial MIP Forum Thread](https://forum.makerdao.com/t/mip81-coinbase-usdc-institutional-rewards/17703).
* [CES Domain Team Assessment](https://forum.makerdao.com/t/rwa014-coinbase-custody-interim-ces-domain-team-assessment/19171/1).
* [Updated Technical Assessment from dewiz](https://forum.makerdao.com/t/rwa014-coinbase-custody-interim-ces-domain-team-assessment/19171/2).
* [Steakhouse Financial Legal Assessment](https://forum.makerdao.com/t/coinbase-custody-legal-assessment/20384).

### Keeper Network Amendments

As per [this poll](https://vote.makerdao.com/polling/QmZZJcCj) the following Keeper Network parameters will be amended, as detailed below, if this executive proposal passes.

#### Gelato Network Parameters

- **Short Name**: GELATO
- **Website**: [https://app.gelato.network/]( https://app.gelato.network/)
- **Requested Window Size**: 13
- **Requested Budget**: 1,500 DAI / day
- **Requested Stream Duration**: 3 years
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: [0x0B5a34D084b6A5ae4361de033d1e6255623b41eD](https://etherscan.io/address/0x0B5a34D084b6A5ae4361de033d1e6255623b41eD)
- **Gelato Treasury**: [0xbfDC6b9944B7EFdb1e2Bc9D55ae9424a2a55b206](https://etherscan.io/address/0xbfDC6b9944B7EFdb1e2Bc9D55ae9424a2a55b206)

#### Keep3r Network Parameters

- **Short Name**: KEEP3R
- **Website**: [https://keep3r.network/]( https://keep3r.network/)
- **Requested Window Size**: 13
- **Requested Budget**: 1,500 DAI / day
- **Requested Stream Duration**: 3 years
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: [0xaeFed819b6657B3960A8515863abe0529Dfc444A](https://etherscan.io/address/0xaeFed819b6657B3960A8515863abe0529Dfc444A)
- **Keep3r Network Treasury**: [0x4DfC6DA2089b0dfCF04788b341197146Ea97f743](https://etherscan.io/address/0x4DfC6DA2089b0dfCF04788b341197146Ea97f743)

#### Chainlink Automation Parameters

- **Short Name**: CHAINLINK
- **Website**: [https://chain.link/automation]( https://chain.link/automation)
- **Requested Window Size**: 13
- **Requested Budget**: 1,500 DAI / day
- **Requested Stream Duration**: 3 years
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: [0xfB5e1D841BDA584Af789bDFABe3c6419140EC065](https://etherscan.io/address/0xfB5e1D841BDA584Af789bDFABe3c6419140EC065)
- **Chainlink Network Treasury**: Not being added in this spell

#### TechOps Services Parameters

- **Short Name**: TECHOPS
- **Website**: [https://techops.services]( https://techops.services)
- **Requested Window Size**: 13
- **Requested Budget**: 1,000 DAI / day
- **Requested Stream Duration**: 1 year
- **Requested Minimum Payment**: 4,000 DAI
- **Requested Buffer Max**: 20,000 DAI
- **Vest Target**: [0x5A6007d17302238D63aB21407FF600a67765f982](https://etherscan.io/address/0x5A6007d17302238D63aB21407FF600a67765f982)

#### Cancel Previous Chainlink Automation Stream

As a new stream is being setup for Chainlink Automation the old stream DAI stream ID 16 for this keeper will be cancelled.

Please review the discussion [thread](https://forum.makerdao.com/t/poll-notice-amend-keeper-networks/20757) to help inform your position before voting.

### CAIS Bootstrap Funding

As per [this poll](https://vote.makerdao.com/polling/Qmc6Wqrc), a total of **100,000 DAI** will be transferred to the Protocol Facilitators at [0x6E51E0b5813152880C1389E3e860e69E06aD04D9](https://etherscan.io/address/0x6E51E0b5813152880C1389E3e860e69E06aD04D9) to bootstrap the Core Artificial Intelligence System (CAIS). 

Please review the [MIP106, Article 10.3.1.1A](https://mips.makerdao.com/mips/details/MIP106#10-3-1-1a-) for more details on the CAIS Bootstrapping Budget and the discussion [thread](https://forum.makerdao.com/t/funding-request-for-core-artificial-intelligence-system-cais-project/20867) to help inform your position before voting.

### Spark GNO Onboarding and Maker GNO-A Debt Ceiling Reduction

As per [this poll](https://vote.makerdao.com/polling/QmXdGdxS) GNO (Gnosis) will be onboarded to Spark Lend as detailed below, if this executive proposal passes. Additionally, the [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) for the GNO-A vaults in the Maker Protocol will be set to **0 DAI**, if this executive proposal passes.

#### Spark Onboarding Parameters

* **Token:** `GNO`.
* **Token Address:** [0x6810e776880C02933D47DB1b9fc05908e5386b96](https://etherscan.io/address/0x6810e776880C02933D47DB1b9fc05908e5386b96).
* **Oracle:** Maker Medianizer via adaptor.
* **Oracle Provider:** Chronicle.
* **Mainnet Oracle Address:** [0x4A7Ad931cb40b564A1C453545059131B126BC828](https://etherscan.io/address/0x4A7Ad931cb40b564A1C453545059131B126BC828).
* **GNO Borrow Enabled:** No.
* **GNO Collateral Use Enabled:** Yes.
* **[Isolation Mode](https://docs.sparkprotocol.io/developers/features/isolation-mode) Enabled:** Yes.
* **Isolation Mode Debt Ceiling:** 5 million USD.
* **Loan To Value:** 20%.
* **Liquidation Threshold:** 25%.
* **Liquidation Bonus:** 10%.

#### Activate Isolation Mode for DAI Market On Spark Lend

This setting change will allow DAI to be borrowed using isolation mode enabled assets as collateral on Spark Lend. 

This is a one-off change that is required given the onboarding of GNO as the first isolation mode enabled asset on Spark. It will apply to all future assets onboarded in isolation mode.

#### Reduce GNO-A Debt Ceiling to Zero

In order to manage maximum total exposure to GNO (Gnosis), the GNO-A vault in the Maker Protocol will have its Debt Ceiling reduced to **0 DAI** and will be removed from the Autoline.

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