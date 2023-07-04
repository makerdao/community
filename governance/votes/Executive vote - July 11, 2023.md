---
title: Template - [Executive Vote] Stability Scope Parameter Changes, Smart Burn Engine Deployment, Various Budget Streams and Payments - July 11, 2023
summary: Deploy Smart Burn Engine, Change Stability Scope parameters, set up payments and streams to Aligned Delegates, Chronicle Labs and DECO
date: $2023-07-11T00:00:00.000Z
address: "$spell_address"

---
# [Executive Proposal] Stability Scope Parameter Changes, Smart Burn Engine Deployment, Various Budget Streams and Payments - July 11, 2023

The $exec_publishers and $exec_crafters have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- The Smart Burn Engine will be deployed and the old MCD_Flapper will be  disabled
- The Dai Savings Rate will be reduced from 3.49% to 3.19%
- Multiple risk parameters will be changed including Stability Fees, Maximum Debt Ceilings and Liquidation Ratios, as detailed below.
- DssCron Housekeeping Additions

If this executive proposal passes, the following **Actions** will occur within Maker Protocol:
- Aligned Delegate One-Off Compensation totaling **X MKR** will be distributed
- 125 MKR will be transfered to DECO-001
- DAI and MKR streams will be set up for Chronicle Labs, as detailed below.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. 

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Smart Burn Engine Deployment

As per [this poll](https://vote.makerdao.com/polling/QmQmxEZp) the Smart Burn Engine will be implemented and the old flapper Depreciated. The following actions will occur

- Depreciate MCD_FLAP
- Deploy FlapperUniV2
- Reduce vow.hump by 200 million DAI from 250 million DAI to 50 million DAI
- Reduce vow.bump by 25,000 DAI from 30,000 DAI to 5,000 DAI
- Set hop to 1,577 seconds
- Set want to 0.98
- Set receiver to MCD_PAUSE_PROXY
- Set pip to TBD

### Stability Scope Parameter Changes

As per the Stability Scope Facilitator, SES, [these changes](https://forum.makerdao.com/t/stability-scope-parameter-changes-3/21238) will be implemented. 

​		<u>DSR Changes</u> 

- Reduce DSR by 0.30% from 3.49% to 3.19%

  <u>Stability Fee Changes</u> 

- Reduce the ETH-A Stability Fee (SF) by 0.30% from 3.74% to 3.44%

- Reduce the ETH-B Stability Fee (SF) by 0.30% from 4.24% to 3.94%

- Reduce the ETH-C Stability Fee (SF) by 0.30% from 3.49% to 3.19%

- Reduce the WSTETH-A Stability Fee (SF) by 0.30% from 3.74% to 3.44%

- Reduce the WSTETH-B Stability Fee (SF) by 0.30% from 3.49% to 3.19%

- Reduce the RETH-A Stability Fee (SF) by 0.30% from 3.74% to 3.44%

- Reduce the WBTC-A Stability Fee (SF) by 0.11% from 5.80% to 5.69%

- Reduce the WBTC-B Stability Fee (SF) by 0.11% from 6.30% to 6.19%

- Reduce the WBTC-C Stability Fee (SF) by 0.11% from 5.55% to 5.44%

  <u>Liquidation Ratio Changes</u> 

- Reduce WSTETH-A Liquidation Ratio by 10% from 160% to 150%

- Reduce WSTETH-B Liquidation Ratio by 10% from 185% to 175%

- Reduce RETH-A Liquidation Ratio by 20% from 170% to 150%

  <u>CRVV1ETHSTETH-A 1st Stage Offboarding</u>

-  Set CRVV1ETHSTETH-A Debt Ceiling to 0

-  Remove CRVV1ETHSTETH-A from autoline

### Aligned Delegate Compensation Distribution for June 2023

TBD

### Budget Streams and Payments

The following streams will be set up for Chronicle Labs

| Budget         | DAI Amount | MKR Amount | Start Date | End Date   | Destination Address                        |
| -------------- | ---------- | ---------- | ---------- | ---------- | ------------------------------------------ |
| Chronicle Labs | 3,721,800  | 2,216.4    | 2023-07-01 | 2024-06-30 | 0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f |

As per their successful MKR Vesting Proposal, **125 MKR** will be transferred to the DECO wallet 0x68D0ca2d5Ac777F6A9b0d1be44332BB3d5981C2f, if this executive proposal passes.

### DssCron Housekeeping Additions

The following active jobs will be added to the next spell, which will bring information on contracts authorized on the Pause Proxy to the Chainlog.

| Active Jobs                                                  |
| ------------------------------------------------------------ |
| AutoLineJob [thi=1000 bps, tlo=5000 bps]: 0x67AD4000e73579B9725eE3A149F85C4Af0A61361 |
| LerpJob [maxDuration=1 day]: 0x8F8f2FC1F0380B9Ff4fE5c3142d0811aC89E32fB |
| D3MJob [threshold=500 bps, ttl=10 minutes]: 0x1Bb799509b0B039345f910dfFb71eEfAc7022323 |
| ClipperMomJob: 0xc3A76B34CFBdA7A3a5215629a0B937CBDEC7C71a    |
| OracleJob: 0xe717Ec34b2707fc8c226b34be5eae8482d06ED03        |

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).