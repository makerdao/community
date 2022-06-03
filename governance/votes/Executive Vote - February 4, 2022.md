---
title: Template - [Executive Vote] Recognized Delegate Compensation, Raise the Emergency Shutdown Threshold, MOMC Parameter Changes, Core Unit DAI Budget Stream Corrections - February 04, 2022
summary: Recognized Delegate Compensation for January 2022, increase the threshold to trigger the Emergency Shutdown Module, parameter changes from the latest MOMC proposal, correction of StarkNet Engineering and Strategic Finance DAI budget streams.
date: 2022-02-04T00:00:00.000Z
address: "0xC45c1419DA490880b4cf4e840e14D62827969B3f"

---
# [Executive Proposal] Delegate Compensation, Raise the Emergency Shutdown Threshold, MOMC Parameter Changes, Core Unit DAI Budget Stream Corrections - February 04, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- A total of 54,752 DAI will be paid to eight Recognized Delegates as part of the [Delegate Compensation Trial](https://forum.makerdao.com/t/signal-request-extend-the-delegate-compensation-trial/12686), listed in detail below.
- An increase in the threshold required to trigger the [Emergency Shutdown Module](https://makerdao.world/en/learn/governance/emergency-shutdown), from 75,000 MKR to 100,000 MKR, detailed below.
- Parameter changes from the latest proposal from the MakerDAO Open Market Committee including [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) decreases, Aave D3M Target Borrow Rate reduction, [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling) changes, and GUNIV3DAIUSDC2-A [Target Available Debt](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) increase, listed in detail below.
- The DAI budget streams for [StarkNet Engineering](https://mips.makerdao.com/mips/details/MIP39c2SP19) and [Strategic Finance](https://mips.makerdao.com/mips/details/MIP39c2SP27) will be replaced. To ensure continuity of funding, a DAI transfer constituting one month of funding will be made to each Core Unit.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some keepers are available to react to unforeseen issues with these changes.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### Recognized Delegate Compensation Payments - January 2022

As per these successful governance polls ([1](https://vote.makerdao.com/polling/QmPCbBu3?network=mainnet), [2](https://vote.makerdao.com/polling/QmbvuhYH?network=mainnet#poll-detail)) and the ongoing trial of delegate compensation, a total of 54,752 DAI will be distributed to eight Recognized Delegates as detailed below if this executive proposal passes.

- **12,000 DAI** transferred to [FlipFlopFlap Delegate LLC](https://vote.makerdao.com/address/0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b) at [0x688d508f3a6B0a377e266405A1583B3316f9A2B3](https://etherscan.io/address/0x688d508f3a6B0a377e266405A1583B3316f9A2B3).
- **12,000 DAI** transferred to [schuppi](https://vote.makerdao.com/address/0xb21e535fb349e4ef0520318acfe589e174b0126b) at [0x89C5d54C979f682F40b73a9FC39F338C88B434c6](https://etherscan.io/address/0x89C5d54C979f682F40b73a9FC39F338C88B434c6).
- **12,000 DAI** transferred to [Feedblack Loops LLC](https://vote.makerdao.com/address/0x845b36e1e4f41a361dd711bda8ea239bf191fe95) at [0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1](https://etherscan.io/address/0x80882f2A36d49fC46C3c654F7f9cB9a2Bf0423e1).
- **8,620 DAI** transferred to [MakerMan](https://vote.makerdao.com/address/0x22d5294a23d49294bf11d9db8beda36e104ad9b3) at [0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0](https://etherscan.io/address/0x9AC6A6B24bCd789Fa59A175c0514f33255e1e6D0).
- **4,807 DAI** transferred to [monetsupply](https://vote.makerdao.com/address/0x45127ec92b58c3a89e89f63553073adcaf2f1f5f) at [0x4Bd73eeE3d0568Bb7C52DFCad7AD5d47Fff5E2CF](https://etherscan.io/address/0x4Bd73eeE3d0568Bb7C52DFCad7AD5d47Fff5E2CF)
- **3,795 DAI** transferred to [ACREinvest](https://vote.makerdao.com/address/0x4d3ac33ab1dd7b0f352b8e590fe8b62c4c39ead5) at [0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D](https://etherscan.io/address/0x5b9C98e8A3D9Db6cd4B4B4C1F92D0A551D06F00D).
- **889 DAI** transferred to [JustinCase](https://vote.makerdao.com/address/0xcdb792c14391f7115ba77a7cd27f724fc9ea2091) at [0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473](https://etherscan.io/address/0xE070c2dCfcf6C6409202A8a210f71D51dbAe9473).
- **641 DAI** transferred to [GFX Labs](https://vote.makerdao.com/address/0xf60d7a62c98f65480725255e831de531efe3fe14) at [0xa6e8772af29b29B9202a073f8E36f447689BEef6](https://etherscan.io/address/0xa6e8772af29b29B9202a073f8E36f447689BEef6).

Details on the breakdown of delegate compensation for the month of January can be found on the MakerDAO forum [here](https://forum.makerdao.com/t/recognized-delegate-compensation-breakdown-january-2022/13001).

### Emergency Shutdown Module Threshold Increase

As per this [governance poll](https://vote.makerdao.com/polling/QmQSVmrh), the following change to the [Emergency Shutdown Module](https://makerdao.world/en/learn/governance/emergency-shutdown) (ESM) will be made if this executive proposal passes.

- Raise the threshold to trigger the [Emergency Shutdown Module](https://makerdao.world/en/learn/governance/emergency-shutdown) by 25,000 MKR from **75,000 MKR** to **100,000 MKR**.

For further information, please see the initial Signal Request on the MakerDAO forum [here](https://forum.makerdao.com/t/signal-request-raise-threshold-for-emergency-shutdown-module/12208).

Further details about the changes being made to the Emergency Shutdown Module have been posted by the Protocol Engineering Core Unit on the MakerDAO forum [here](https://forum.makerdao.com/t/moving-the-esm-threshold-increase-to-next-week/12895).

### MOMC Parameter Changes

As per this [governance poll](https://vote.makerdao.com/polling/QmWReBMh) on the latest MakerDAO Open Market Committee [proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-2022-01-27/12883), the following parameter changes will be made in the Maker Protocol if this executive proposal passes.

**Stability Fee Decreases**

* **ETH-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.25% from **2.5%** to **2.25%**.
* **ETH-B** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 2.5% from **6.5%** to **4%**.
* **WSTETH-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.5% from **3%** to **2.5%**.
* **WBTC-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.25% from **4%** to **3.75%**.
* **WBTC-B** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 2% from **7%** to **5%**.
* **WBTC-C** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.75% from **1.5%** to **0.75%**.
* **UNIV2DAIETH-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased from 1% from **2%** to **1%**.
* **UNIV2WBTCETH-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 1% from **3%** to **2%**.
* **UNIV2USDCETH-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 1% from **2.5%** to **1.5%**.
* **GUNIV3DAIUSDC2-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 0.25% from **0.5%** to **0.25%**.
* **TUSD-A** [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee) will be decreased by 1% from **1%** to **0%**.

**DIRECT-AAVEV2-DAI (Aave D3M) Target Borrow Rate Decrease**

* **DIRECT-AAVEV2-DAI (Aave D3M)** [Target Borrow Rate (`bar`)](https://github.com/makerdao/dss-direct-deposit#configuration) will be decreased by 0.25% from **3.75%** to **3.5%**.

**Maximum Debt Ceiling Changes**

* **GUNIV3DAIUSDC1-A** [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be decreased by 400 million DAI from **500 million DAI** to **100 million DAI**.
* **GUNIV3DAIUSDC2-A** [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam#maximum-debt-ceiling-line) will be increased by 250 million DAI from **500 million DAI** to **750 million DAI**.

**GUNIV3DAIUSDC2-A Target Available Debt Increase**

* **GUNIV3DAIUSDC2-A** [Target Available Debt (`gap`)](https://manual.makerdao.com/module-index/module-dciam#target-available-debt-gap) will be increased by 40 million DAI from **10 million DAI** to **50 million DAI**.

### Correction of Core Unit Budget Streams

The previous Executive Vote contained errors relating to the DAI budget Streams for the StarkNet Engineering and Strategic Finance Core Units. The error has been detailed by the Protocol Engineering team on the MakerDAO forum [here](https://forum.makerdao.com/t/correction-to-last-weeks-executive/13022). In order to correct this error, the following changes will occur if this executive proposal passes.

* The currently configured DAI budget streams for the StarkNet Engineering and Strategic Finance Core Units will be cancelled.
* In order to retain access to the first month’s funds during the stream update, **we are transferring 42,917 DAI** to the [StarkNet Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP19) at 0x6D348f18c88D45243705D4fdEeB6538c6a9191F1. The transfer amount of 42,917 DAI is equivalent to one month of funding under their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP47), and will be made by claiming the funds from the canceled stream plus a transfer of the difference between 42,917 DAI and the amount claimed. 
* **214,583 DAI** will be streamed to the [StarkNet Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP19) at 0x6D348f18c88D45243705D4fdEeB6538c6a9191F1 starting at 2022-03-01 and ending at 2022-07-31 as a result of their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP47). 
* In order to retain access to the first month’s funds during the stream update, **we are transferring 82,417 DAI** to the [Strategic Finance Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP27) at 0xf737C76D2B358619f7ef696cf3F94548fEcec379. The transfer amount of 82,417 DAI is equivalent to one month of funding under their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP46), and will be made by claiming the funds from the canceled stream plus a transfer of the difference between 82,417 DAI and the amount claimed.
* **412,085 DAI** will be streamed to the [Strategic Finance Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP27) at 0xf737C76D2B358619f7ef696cf3F94548fEcec379 starting at 2022-03-01 and ending at 2022-07-31 as a result of their most recent [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP46).

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
