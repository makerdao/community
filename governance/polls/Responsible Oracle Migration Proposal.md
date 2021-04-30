---
title: Responsible Oracle Migration Proposal
summary: If this mandate is accepted by the community, it will signal support for the Responsible and for the general scope of the initiatives outlined in the proposal.
discussion_link: https://forum.makerdao.com/t/proposal-responsible-oracle-migration/509
poll_rules: The voter may select to vote for one of the poll options or they may elect to abstain from the poll entirely
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Responsible Oracle Migration Proposal

## Introduction

For additional context, please review the [Oracles V2 Announcement](https://blog.makerdao.com/introducing-oracles-v2-and-defi-feeds/) and listen to the [Governance Call](https://www.youtube.com/watch?v=7jKNv8DMxmQ&t=1h1m13s) from September 5th, 2019. This proposal addresses primitives introduced in the [Oracle Incentives Restructuring proposal](https://forum.makerdao.com/t/proposal-oracles-incentives-restructuring/476).

**This proposal will have no effect if the Oracle Incentives Restructuring proposal is not ratified by MKR governors.**

**If accepted, this proposal will:**

1. **Waive the Oracle Fee and allow any entity to be added to the whitelist. This will enable them to read prices from one or more Oracles for free for one year. The one year interval is specific to each entity.**
2. **Guarantee the Oracle V1 infrastructure will stay live until at least global settlement of SCD (Single Collateral Dai).**

Conducting the migration from Oracles V1 to Oracles V2 in this manner makes a lot of sense from a variety of angles.

## Benefiting Users

It's necessary to contextualize the state of the Oracle ecosystem as it is today. MakerDAO's Oracles were the first on the Ethereum mainnet, dating as far back as May 2016. They are a completely open, public utility that anyone can access. This led to them being integrated in dozens of projects.

In particular, proliferation throughout the DeFi ecosystem and Ethereum initiatives such as ENS, made them a vital keystone. Unfortunately, due to the Oracle’s permissionless nature, it is unknown just how many projects have integrated the Oracles.

One of the reasons for integrating a whitelist into the Oracles in the first place is to get this transparent visibility of "who is using the Oracles" and "how are they using them". Considering this entangled ecosystem of users, it is imperative that Maker governors act as good-citizens and conduct the migration to Oracles V2 in a responsible and thoughtful manner. "Pulling the rug out" so to speak is not a viable option.

By overlapping Oracles V1 and Oracles V2, and waiving the Oracle Fee for one year, we give our users, and the ecosystem, time to plan their migration in a way that is convenient for them and their users. Take, for example, Gnosis who is using Oracles V1 in their DutchX Exchange. The DutchX smart contracts require a one month delay for swapping the Oracles. This is on top of the time it takes for Gnosis’ operations to evaluate, plan, and conduct the Oracle swap. By extending the service period of Oracles V1, and permitting free access to Oracles V2, we alleviate time pressures and facilitate the migration process.

## Bootstrapping the Ecosystem

New projects are built on Ethereum everyday. Many of them require Oracles, but lack the resources to purchase them. If given the opportunity to succeed, many of these projects could become future customers.

By offering Oracles for free for one year, we may find an equilibrium point where MakerDAO can take a leadership position through supporting innovation and still benefit from a long-term relationship. After the one year trial, projects will have the option to continue the service by paying the Oracle Fee as set by MKR governors. At that point, these projects will have already built their product on top of the Oracles, have a good sense for how reliable and valuable the Oracle service is, and may view Maker on good-terms due to the one year of free service. That is an exceptional position to be in when convincing customers to purchase the Oracle service.

## Free Trial Application Process

To apply for the one year free trial, prospective clients will need to submit a proposal to the [Oracles Forum](https://forum.makerdao.com/c/oracles). This application must include several pertinent pieces of information for MKR governors to evaluate and verify.

**Oracle Access Proposal Format:**

1. Which Oracle(s) are desired (i.e., ETHUSD, ZRXUSD). Note this can include Oracles that don't exist yet and are not collateral types in the Maker Protocol.
2. The contract address(es) that need to be whitelist.
3. Confirmation that the smart contract(s) source code has been verified on etherscan.
4. Confirmation that the applicant understands the Oracle prices must have a private scope within their system. In other words, there is no public facing variable that can be queried by any entity to circumvent the whitelist.
5. A plain english description of how the Oracle data will be utilized.
6. Keybase username for point of contact. This will be utilized to alert and discuss potential future updates, migration plans, and for emergency scenarios such as an Oracle attack.

It is the responsibility of the Oracle Team(s) and MKR Governors to verify the information posted in applications. MKR Governors may modify the format of the Oracle Access Proposal and request additional information at any time. At the end of the evaluation cycle, all approved applications will be rolled up into a single executive proposal which will add them to the relevant Oracle whitelists.
