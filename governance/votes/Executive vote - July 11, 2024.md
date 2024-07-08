---
title: Template - [Executive Vote] Aave-SparkLend Revenue Share, Update Keeper Network Address, Stability Scope Parameter Changes, Delegate Compensation, Spark Proxy Spell - July 11, 2024
summary: Transfer Dai to Aave as part of the SparkLend revenue sharing agreement, update the Chainlink Keeper Network Treasury Address, make Stability Fee and DSR changes as per the Stability Scope, trigger a Spark Proxy Spell.
date: 2024-07-11T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Aave Revenue Share, Update Keeper Network Address, Stability Scope Parameter Changes, Delegate Compensation, Spark Proxy Spell - July 11, 2024

The Governance Facilitators and Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:

- **219,125 DAI** will be transferred to Aave as part of the Aave-SparkLend Revenue Sharing Agreement.
- The Chainlink Keeper Network Treasury Address will be updated.
- Multiple Stability Fees and the DSR will be updated.
- $TBD MKR will be distributed to $XXX Aligned Delegates.
- A Spark Proxy Spell will be triggered at [0x91824fa4fd51E8440a122ffDd49C701F5C56D58e](https://etherscan.io/address/0x91824fa4fd51E8440a122ffDd49C701F5C56D58e).

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Aave-SparkLend Revenue Share Payment

- **Authorization**: [Support Scope 9.4.1](https://mips.makerdao.com/mips/details/MIP106#9-4-1-spark-protocol-aave-revenue-share)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/spark-aave-revenue-share-calculation-payment-4-q2-2024/24572)

If this executive proposal passes, a payment of **219,125 DAI** will be made to a smart contract controlled by Aave Governance at [0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) as part of the Aave-SparkLend Revenue Share.

### Update Chainlink Keeper Network Treasury Address

- **Authorization**: [Ecosystem Approval]($TBD)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/amend-keeper-network-chainlink-automation-v2-1/24593)

If this executive proposal passes, the Chainlink Keeper Network Treasuary Address will be updated to [0xBE1cE564574377Acb17C2b7628E4F6dd38067a55](https://etherscan.io/address/0xBE1cE564574377Acb17C2b7628E4F6dd38067a55). This is a requirement to facilitate the upgrade of Chainlink Automation for MakerDAO from v2.0 to v2.1.

The required contract call is:

`keeperRegistry20.migrateUpkeeps([54617870736745152906494510799239970615562458165653206109311709851388548258865], keeperRegistry21);`

### Stability Scope Parameter Updates

- **Authorization**: [Ecosystem Approval]($TBD)
- **Proposal**: [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-14/24594)

If this executive proposal passes, the following parameter changes will be made.

#### [Stability Fee](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) Reductions

- ETH-A: Decrease by 1 percentage point, from 8.25% to **7.25%**.
- ETH-B: Decrease by 1 percentage point, from 8.75% to **7.75%**.
- ETH-C: Decrease by 1 percentage point, from 8% to **7%**.
- WSTETH-A: Decrease by 1 percentage point, from 9.25% to **8.25%**.
- WSTETH-B: Decrease by 1 percentage point, from 9% to **8%**.
- WBTC-A: Decrease by 1 percentage point, from 9.75% to **8.75%**.
- WBTC-B: Decrease by 1 percentage point, from 10.25% to **9.25%**.
- WBTC-C: Decrease by 1 percentage point, from 9.5% to **8.5%**.

#### [Dai Savings Rate (DSR)](https://mips.makerdao.com/mips/details/MIP104#3-2-the-dai-savings-rate) Reduction

The DSR will decrease by 1 percentage point, from 8% to **7%**.

### Delegate Compensation

$TBD

### Spark Proxy Spell

**Authorization**: [Ecosystem Approval]($TBD), [Governance Poll 1120](  https://vote.makerdao.com/polling/QmTBsxR5)
**Proposal**: [Stability Scope Parameter Proposal](https://forum.makerdao.com/t/stability-scope-parameter-changes-14/24594), [[Jun 27, 2024] Proposed Changes to Spark for Upcoming Spell](https://forum.makerdao.com/t/jun-27-2024-proposed-changes-to-spark-for-upcoming-spell/24552)

If this executive proposal passes a Spark Proxy spell will be triggered at [0x91824fa4fd51E8440a122ffDd49C701F5C56D58e](https://etherscan.io/address/0x91824fa4fd51E8440a122ffDd49C701F5C56D58e). The expected inclusions are as follows:

#### [Mainnet] Spark Effective DAI Borrow Rate Reduction

The Spark Effective DAI Borrow Rate will be reduced by 1 percentage point, from 9% to **8%**.

#### [Mainnet] Increase Capacity of weETH

- Increase weETH Supply Cap Max by 150,000 weETH, from 50,000 weETH to **200,000 weETH**
- Increase weETH [Isolation Mode](https://docs.spark.fi/defi-infrastructure/sparklend/spark-lend-features) Debt Ceiling by 150 million DAI, from 50 million DAI to **200 million DAI**

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
