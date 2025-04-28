---
title: Template - [Executive Vote] STAR2 Allocation System Updates, Increase GSM Pause Delay, Add Emergency Spell to Chainlog, Top-up of the Integration Boost, Launch Project Funding, Spark Proxy Spell, STAR2 Proxy Spell - April 30, 2025
summary: Update STAR2 Allocation Parameters for Technical Test, Increase the GSM Pause Delay, Add EMSP_SPBEAM_HALT to the Chainlog, Transfer funds for Integration Boost, Transfer funds for Launch Project, Execute Spark proxy Spell, Execute STAR2 proxy spell.

date: 2025-04-30T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] STAR2 Allocation System Updates, Increase GSM Pause Delay, Add Emergency Spell to Chainlog, Top-up of the Integration Boost, Launch Project Funding, Spark Proxy Spell, STAR2 Proxy Spell - April 30, 2025

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR/SKY Holders should vote for this proposal if they support the following alterations to the Sky Protocol.

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **actions** will occur within the Sky Protocol:
- STAR2 Allocation System will be updated as described below.
- The [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) will be increased.
- EMSP_SPBEAM_HALT Standby Spell at [0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0](https://etherscan.io/address/0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0) will be added to the Chainlog.
- **3,000,000 USDS** will be transfered to top off the Integration Boost at [0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7](https://etherscan.io/address/0xD6891d1DFFDA6B0B1aF3524018a1eE2E608785F7).
- **5,000,000 USDS** and **30,000,000 SKY** will be transfered to the Launch Project at [0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F](https://etherscan.io/address/0x3C5142F28567E6a0F172fd0BaaF1f2847f49D02F).
- A Spark proxy spell at [0x9362B8a15ab78257b11a55F7CC272F4C4676C2fe](https://etherscan.io/address/0x9362B8a15ab78257b11a55F7CC272F4C4676C2fe) will be executed.
- A STAR2 proxy spell at [0x0c9CC5D5fF3baf096d29676039BD6fB94586111A](https://etherscan.io/address/0x0c9CC5D5fF3baf096d29676039BD6fB94586111A) will be executed.


**Voting for this executive proposal will place your MKR/SKY in support of the actions outlined above.**

Unless otherwise noted, the actions listed above are subject to the [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Sky Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to [**18 hours**](https://sky-atlas.powerhouse.io/#A.1.8.2.1.2_Pause_Delay_Current_Value-09d2514b-3169-4755-a654-2c774456980d|0db30758e055d2d0).

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Sky Protocol.

---

## Proposal Details

### STAR2 Allocation System Updates

- **Authorization**: Governance [Poll 1235](https://vote.makerdao.com/polling/QmepaQjk), [Poll 1243](https://vote.makerdao.com/polling/QmedB3hH)  
- **Proposal**: [Forum Post](https://forum.sky.money/t/technical-test-of-the-star2-allocation-system/26289)

If this executive proposal passes, then the following updates to the STAR2 Allocation System will be made.

#### Whitelist STAR2 ALMProxy

- The STAR2 ALMProxy will be whitelisted on the LitePSM by preforming a `kiss` call.

#### STAR2 [Debt Ceiling Instant Access Module](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4_Debt_Ceiling_Instant_Access_Module_(DC_IAM)/071d42e3-8a21-4401-852e-0b52c49768bb%7C57eaf45219bea3b430c2) Changes

- Increase ALLOCATOR-BLOOM-A [DC-IAM `gap`](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.2_Target_Available_Debt_(gap)/c1e17312-3744-4360-81f4-03564f0dd09d%7C57eaf45219bea3b430c268bb) by 40 million DAI from 10 million DAI to **50 million DAI**.
- Increase ALLOCATOR-BLOOM-A [DC-IAM `line`](https://sky-atlas.powerhouse.io/A.3.8.1.1.2.4.1_Maximum_Debt_Ceiling_(line)/6f1a913d-9436-4b70-816b-e317672737d6%7C57eaf45219bea3b430c268bb) by 90 million DAI from 10 million DAI to **100 million DAI**.

### Increase the GSM Pause Delay

- **Authorization**: [Governance Poll 1243](https://vote.makerdao.com/polling/QmedB3hH)
- **Proposal**: [Forum Post](https://forum.sky.money/t/parameter-changes-poll-april-21-2025/26290)

If this executive proposal passes, then [GSM Pause Delay](https://sky-atlas.powerhouse.io/#A.1.8.2.1_Pause_Delay-a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) will be increased by 30 hours, from 18 hours to **48 hours**.

### Add Emergency Standby Spell to Chainlog

- **Authorization**: [Protocol Facilitator Approval](https://forum.sky.money/t/proposed-housekeeping-item-upcoming-executive-spell-2025-04-30/26304)
- **Proposal**: [Forum Post](https://forum.sky.money/t/proposed-housekeeping-item-upcoming-executive-spell-2025-04-30/26304)

If this executive proposal passes, then the EMSP_SPBEAM_HALT Standby Spell at [0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0](https://etherscan.io/address/0xf0C6e6Ec8B367cC483A411e595D3Ba0a816d37D0) will be added to the Chainlog.

### Top-up of the Integration Boost

### Launch Project Funding

### Spark Proxy Spell

### STAR2 Proxy Spell

## Review

Community debate on these topics can be found on the Sky [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
