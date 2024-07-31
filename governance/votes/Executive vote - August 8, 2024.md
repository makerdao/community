---
title: Template - [Executive Vote] Bug Bounty Payments, ClipperMomJob Update, Aligned Delegate Compensation, 6S Capital Stability Fee Increase, Monetalis Clydesdale and Coinbase Custody DAO Resolutions, Spark Proxy Spell - August 8, 2024
summary: Pay bug bounty rewards, activate a new Clipper Mom keeper job, pay Aligned Delegate compensation for July 2024, increase the 6S Capital (RWA001-A) Stability Fee, approve a DAO Resolution pertaining to Monetalis Clydesdale and Coinbase Custody, trigger a Spark proxy spell. 
date: 2024-08-08T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Bug Bounty Payments, ClipperMomJob Update, Aligned Delegate Compensation, 6S Capital Stability Fee Increase, Monetalis Clydesdale and Coinbase Custody DAO Resolution, Spark Proxy Spell - August 8, 2024

The Governance Facilitators and Sidestream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Maker Protocol:

- A total of **110,000 DAI** will be paid to two addresses as part of the bug bounty program.
- A new version of the Clipper Mom keeper job will be activated.
- A total of **TBD DAI** and **TBD MKR** will be distributed to TBD Aligned Delegates as compensation for July 2024.
- The 6S Capital (RWA001-A) Stability Fee will be increased to **9%**.
- A DAO Resolution with the hash TBD for Monetalis Clydesdale will be approved.
- A Sparx Proxy Spell will be triggered at TBD.

**Voting for this executive proposal will place your MKR in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**16 hours**](https://mips.makerdao.com/mips/details/MIP113#10-1-1a).

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Bug Bounty Payments

- **Authorization**: [Support Scope 13.1](https://mips.makerdao.com/mips/details/MIP106#13-1-bug-bounty-program-for-makerdao-critical-infrastructure)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-32005/24605)

If this executive proposal passes, then the following payments as part of the bug bounty program will be distributed.

- **100,000 DAI** will be transferred to [0xA4a6B5f005cBd2eD38f49ac496d86d3528C7a1aa](https://etherscan.io/address/0xA4a6B5f005cBd2eD38f49ac496d86d3528C7a1aa).
- **10,000 DAI** will be transferred to [0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18 (immunefi.eth)](0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18).

A technical explanation of the rationale for the bug bounty payment can be found in this [forum comment](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-32005/24605/3).

### ClipperMomJob Update

- **Authorization**: [Forum post](https://forum.makerdao.com/t/executive-inclusion-clippermomjob-update/24774/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/executive-inclusion-clippermomjob-update/24774/)

If this executive proposal passes, the Keeper Network's ClipperMomJob will be updated through the following contract calls:

- `sequencer.removejob(0xc3a76b34cfbda7a3a5215629a0b937cbdec7c71a)`.
- `sequencer.addjob(0x7E93C4f61C8E8874e7366cDbfeFF934Ed089f9fF)`.

The chainlog entry for CRON_CLIPPER_MOM_JOB will also be updated to the new address. The new ClipperMomJob is deployed at [0x7E93C4f61C8E8874e7366cDbfeFF934Ed089f9fF](https://etherscan.io/address/0x7E93C4f61C8E8874e7366cDbfeFF934Ed089f9fF) and the code is available on GitHub [here](https://github.com/makerdao/dss-cron/tree/clipper-mom-try-all-classes).

### Aligned Delegate Compensation

- **Authorization**: [$link_to_approval]()
- **Proposal**: [$link_to_proposal]()

If this executive proposal passes, then $executive_entry_3_implications.

### 6S Capital [Stability Fee](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) Increase

- **Authorization**: [Forum post](https://forum.makerdao.com/t/rwa-001-6s-capital-update-and-stability-fee-proposal/24624/2)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/rwa-001-6s-capital-update-and-stability-fee-proposal/24624/)

If this executive proposal passes, the 6S Capital (RWA001-A) Stability Fee will be increased as follows:

- Increase the RWA001-A Stability Fee by 6 percentage points from 3% to **9%**.

### Monetalis Clydesdale and Coinbase Custody DAO Resolutions

- **Authorization**: [$link_to_approval]()
- **Proposal**: [$link_to_proposal]()

If this executive proposal passes, the following DAO Resolution authorizing the actions needed for the winddown of the Monetalis Clydesdale and Coinbase Custody facilities will be approved:

- Approve Monetalis Clydesdale and Coinbase Custody DAO Resolution with IPFS has TBD.

### Spark Proxy Spell

- **Authorization**: [Poll](https://vote.makerdao.com/polling/QmdFCRfK)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/jul-27-2024-proposed-changes-to-spark-for-upcoming-spell/24755)

If this executive proposal passes, a Spark Proxy Spell will be triggered at TBD. The proxy spell will activate the Lido Liquid Staking Token (LST) yield oracle and the linked Interest Rate Model for the mainnet ETH market on SparkLend with the following parameters:

- [`base rate`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **0%**.
- [`variableRateSlope1Spread`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **0%**.
- [CappedFallbackRateSource `upperBound`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **5.5%**.
- [CappedFallbackRateSource `lowerBound`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **2%**.
- [CappedFallbackRateSource `defaultRate`](https://github.com/marsfoundation/sparklend-advanced?tab=readme-ov-file#rate-sources): **3%**.
- [`slope 2`](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#variable-interest-rate-model-parameters): **120%**.

The following contracts will be used:

- Chronicle LST Oracle: [0x08669C836F41AEaD03e3EF81a59f3b8e72EC417A](https://etherscan.io/address/0x08669C836F41AEaD03e3EF81a59f3b8e72EC417A).
- Rate Range Enforcement: [sparklend-advanced/src/CappedFallbackRateSource.sol at master · marsfoundation/sparklend-advanced · GitHub](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/CappedFallbackRateSource.sol).
- IRM: [sparklend-advanced/src/RateTargetKinkInterestRateStrategy.sol at master · marsfoundation/sparklend-advanced · GitHub](https://github.com/marsfoundation/sparklend-advanced/blob/master/src/RateTargetKinkInterestRateStrategy.sol).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
