---
title: Template - [Executive Vote] SBE Surplus Buffer Upper Limit Update, RWAF and Harbor Trade Credit DAO Resolutions, Spark Proxy Spell - May 30, 2024
summary: Smart Burn Engine Surplus Buffer Upper Limit Update, RWA Foundation (RWAF) and Harbor Trade Credit (RWA004-A) DAO Resolutions, execute Spark Proxy Spell.
date: 2024-05-30T00:00:00.000Z
address: "0x7B55617f7F04F7B45eE865fF9066469Fbe28a632"

---
# [Executive Proposal] SBE Surplus Buffer Upper Limit Update, RWAF and Harbor Trade Credit DAO Resolutions, Spark Proxy Spell - May 30, 2024

The Governance Facilitators and Dewiz, Sidestream, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following actions will occur within the Maker Protocol:

- The Smart Burn Engine (SBE) Surplus Buffer Upper Limit will be updated.
- A RWA Foundation (RWAF) DAO Resolution will be approved.
- A Harbor Trade Credit (RWA004-A) DAO Resolution will be approved.
- A proxy spell for Spark Protocol will be triggered.

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Smart Burn Engine (SBE) Parameter Updates

- **Authorization:** [Forum post](https://forum.makerdao.com/t/smart-burn-engine-vow-hump-surplus-buffer-upper-limit-reconfiguration-update-7/24348/2)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/smart-burn-engine-vow-hump-surplus-buffer-upper-limit-reconfiguration-update-7/24348)

If this executive proposal passes, the following SBE parameter will be changed:

- The [`vow.hump` (SBE Surplus Buffer Upper Limit)](https://mips.makerdao.com/mips/details/MIP104#9-1-smart-burn-engine-parameters) parameter will be increased by 5 million DAI from 50 million DAI to **55 million DAI**.

### Approve RWA Foundation (RWAF) DAO Resolution

- **Authorization:** [Forum post](https://forum.makerdao.com/t/dao-resolution-banking-setup-for-rwa-foundation/24362/2)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/dao-resolution-banking-setup-for-rwa-foundation/24362)

If this executive proposal passes, the following DAO Resolution pertaining to RWA Foundation (RWAF) will be approved:

- RWAF DAO Resolution with IPFS hash [Qmb8vLDH6wT4Y2axnJX1JSKVKHTG3jzX3U3novw886H8UR](https://ipfs.io/ipfs/Qmb8vLDH6wT4Y2axnJX1JSKVKHTG3jzX3U3novw886H8UR).

### Approve Harbor Trade Credit (RWA004-A) DAO Resolution

- **Authorization:** [Forum post](https://forum.makerdao.com/t/harbor-trade-credit-workout-process/24367/4)
- **Proposal:** [Forum post](https://forum.makerdao.com/t/harbor-trade-credit-workout-process/24367)

If this executive proposal passes, the following DAO Resolution pertaining to [Harbor Trade Credit (RWA004-A)](https://makerburn.com/#/collateral/RWA004-A) will be approved:

- RWA004-A DAO Resolution with IPFS hash [QmUiYTRy4BkV681tfFe3Ksj6gdLEq27w34MqLw5LvRaBoD](https://ipfs.io/ipfs/QmUiYTRy4BkV681tfFe3Ksj6gdLEq27w34MqLw5LvRaBoD).

### Trigger Spark Proxy Spell

- **Authorization:** [Ecosystem Approval](https://forum.makerdao.com/t/may-21-2024-proposed-changes-to-sparklend-for-upcoming-spell/24327/3), Polls [1](https://vote.makerdao.com/polling/QmQHu69a), [2](https://vote.makerdao.com/polling/QmWdmh1e), [3](https://vote.makerdao.com/polling/QmT5e8NG), [4](https://vote.makerdao.com/polling/QmZhjzUg)
- **Proposal**: [Forum posts](https://forum.makerdao.com/t/may-21-2024-proposed-changes-to-sparklend-for-upcoming-spell/24327)

If this executive proposal passes, a Spark proxy spell at [0x7bcDd1c8641F8a0Ef98572427FDdD8c26D642256](https://etherscan.io/address/0x7bcDd1c8641F8a0Ef98572427FDdD8c26D642256) will be triggered. This proxy spell will take the following actions:

#### [Mainnet+Gnosis] Turn Off Siloed Borrowing for All Stablecoins

- Turn off [siloed borrowing](https://docs.sparkprotocol.io/developers/sparklend/features/siloed-borrowing) for Circle USD (USDC) and Tether USD (USDT) on both Ethereum and Gnosis.
- Turn off siloed borrowing for Monerium EURO e-money (EURe) on Gnosis.

#### [Mainnet+Gnosis] IRM (Interest Rate Model) Update

 If this executive proposal passes, the following changes will be implemented on the SparkLend [markets](https://app.spark.fi/markets):

##### Ethereum:

###### ETH
- Reduce slope 1 by 0.3% from 2.8% to **2.5%**
  
###### Circle USD (USDC)
- Change slope 1 to DSR + 1%
- Reduce slope 2 by 5% from 20% to **15%**
  
###### Tether USD (USDT)
- Change slope 1 to DSR + 1%
- Reduce slope 2 by 5% from 20% to **15%**
  
##### Gnosis:

###### ETH
- Reduce slope 1 by 0.7% from 3.2% to **2.5%**
- Reduce optimal utilization by 10% from 90% to **80%**
  
###### DAI
- Reduce slope 1 by 3% from 12% to **9%**
- Reduce slope 2 by 35% from 50% to **15%**
- Increase optimal utilization by 5% from 90% to **95%**
  
###### USDC
- Reduce slope 1 by 3% from 12% to **9%**
- Reduce slope 2 by 35% from 50% to **15%**
- Increase optimal utilization by 5% from 90% to **95%**
  
###### USDT
- Reduce slope 1 by 3% from 12% to **9%**
- Reduce slope 2 by 35% from 50% to **15%**
- Increase optimal utilization by 5% from 90% to **95%**
  
###### Monerium EUR e-money (EURe)
- Reduce slope 1 by 2% from 7% to **5%**
- Reduce slope 2 by 35% from 50% to **15%**
- Increase optimal utilization by 5% from 90% to **95%**

#### [Mainnet] Update Morpho Vault Supply Caps

- Increase the supply cap of the [sUSDe 91.5% LLTV pool](https://morpho.blockanalitica.com/markets/1247f1c237eceae0602eab1470a5061a6dd8f734ba88c7cdc5d6109fb0026b28/) by 50 million DAI from 50 million DAI to **100 million DAI**.
- Increase the supply cap of the [sUSDe 86% LLTV pool](https://morpho.blockanalitica.com/markets/39d11026eae1c6ec02aa4c0910778664089cdd97c3fd23f68f7cd05e2e95af48/) by 200 million DAI from 200 million DAI to **400 million DAI**.

#### [Gnosis] Disable Governance Bridge Security Delay

- Lower the bridge security delay for SparkLend governance on Gnosis by 2 days from 2 days to **0 days**.
- Set the minimum security delay limit to **0**.


## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
