---
title: Template - [Executive Vote] Delegate Compensation, Whistleblower Bounty, Parameter Updates, Keeper Network Update, Launch Project Funding, Bug Bounty Payout, Spark Proxy Spell - May 16, 2024
summary: Delegate Compensation for April 2024, whisleblower bounty and buffer payment for the offboarding of TrueName, stability fee and DSR updates, an update to a keeper network job, Dai and MKR funding for the Launch Project, payment of a bug bounty reward, execute Spark proxy spell.
date: 2024-05-16T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Delegate Compensation, Whistleblower Bounty, Parameter Updates, Keeper Network Update, Launch Project Funding, Bug Bounty Payout, Spark Proxy Spell - May 16, 2024

The Governance Facilitators and Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- A total of TBD MKR will be distributed to TBD Aligned Delegates as compensation for May 2024.
- 20.84 MKR will be distributed as part of a whistleblower bounty.
- Multiple stability fees will be reduced, as will the Dai Savings Rate.
- A keeper network job will be updated.
- 5,358,007 DAI and 1,969.17 MKR will be transferred to the Launch Project.
- A total of 55,000 DAI will be distributed as part of a Bug Bounty payment.
- A Spark proxy spell will be triggered.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Delegate Compensation for May 2024

$executive_entry_description_1

### Whistleblower Bounty

* **Authorization:** [Atlas 2.6.6](https://mips.makerdao.com/mips/details/MIP101#2-6-6-aligned-delegate-operational-security)
* **Proposal:** [Forum post](https://forum.makerdao.com/t/ad-derecognition-due-to-operational-security-breach-april-5-2024/24043)

As a bounty for the information leading to the derecognition of TrueName delegate, the following transfer will be made, if this executive proposal passes:

- Transfer **20.84 MKR** to forum user Compacter at [0xbbd4bC3FE72691663c6ffE984Bcdb6C6E6b3a8Dd](https://etherscan.io/address/0xbbd4bC3FE72691663c6ffE984Bcdb6C6E6b3a8Dd).

### Parameter Updates

#### [Stability Fee (SF)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) Changes

* **Authorization:** [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-13-under-sta-article-3-3/24250/2)
* **Proposal:** [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-13-under-sta-article-3-3/24250)

If this executive proposal passes, as per the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following SFs will be changed:

- Decrease the ETH-A Stability Fee by 2 percentage points from 10.25% to **8.25%**.
- Decrease the ETH-B Stability Fee by 2 percentage points from 10.75% to **8.75%**.
- Decrease the ETH-C Stability Fee by 2 percentage points from 10.00% to **8.00%**.
- Decrease the WSTETH-A Stability Fee by 2 percentage points from 11.25% to **9.25%**.
- Decrease the WSTETH-B Stability Fee by 2 percentage points from 11.00% to **9.00%**.
- Decrease the WBTC-A Stability Fee by 2 percentage points from 11.75% to **9.75%**.
- Decrease the WBTC-B Stability Fee by 2 percentage points from 12.25% to **10.25%**.
- Decrease the WBTC-C Stability Fee by 2 percentage points from 11.50% to **9.50%**.

#### [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) Change

* **Authorization:** [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-13-under-sta-article-3-3/24250/2)
* **Proposal:** [Forum post](https://forum.makerdao.com/t/stability-scope-parameter-changes-13-under-sta-article-3-3/24250)

If this executive proposal passes, as per the recommendation of the Stability Scope Advisory Council Member, BA Labs, the following change to the DSR will be made:

- Decrease the DSR by 2 percentage points from 10.00% to **8.00%**.

### Keeper Network Job Update

* **Authorization:** TBD
* **Proposal:** TBD

If this executive proposal passes, the Keeper Network's D3MJob will be updated through the following contract calls:

- `sequencer.removeJob(0x1Bb799509b0B039345f910dfFb71eEfAc7022323)`
- `sequencer.addJob(0x2Ea4aDE144485895B923466B4521F5ebC03a0AeF)`

The updated code may be seen in this GitHub [Pull Request](https://github.com/makerdao/dss-cron/pull/24).

### Launch Project Funding

* **Authorization:** [Accessibility Scope 9.1](https://mips.makerdao.com/mips/details/MIP108#9-1-launch-project-budget)
* **Proposal:** [Forum Post](https://forum.makerdao.com/t/utilization-of-the-launch-project-under-the-accessibility-scope/21468/16)

If this executive proposal passes the following tansfers will be made to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F):

- Transfer **5,358,007 DAI** to the Launch Project.
- Transfer **1,969.17 MKR** to the Launch Project.

### Bug Bounty Payout

* **Authorization:** [Support Scope 13.1](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-29806/24240/2)
* **Proposal:** [Forum Post](https://forum.makerdao.com/t/bounty-payout-request-for-immunefi-bug-29806/24240)

If this executive proposal passes the following transfers will be made as part of the Bug Bounty Program:

- Transfer **50,000 DAI** to the bug reporter at [0xa24EC79bdF03bB325F36878573B13AedFEd0717f](https://etherscan.io/address/0xa24EC79bdF03bB325F36878573B13AedFEd0717f)
- Transfer **5,000 DAI** to Immunefi at [0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18](https://etherscan.io/address/0x7119f398b6C06095c6E8964C1f58e7C1BAa79E18)

The post-mortem for this report may be found in this [forum post](https://forum.makerdao.com/t/post-mortem-for-immunefi-bug-report-29806/24239).

### Spark Proxy Spell

TBD when address available

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
