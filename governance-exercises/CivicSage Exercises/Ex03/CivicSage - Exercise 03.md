---
title: Template - [Executive Vote] SF and DSR Decrease, March 2024 AD Compensation, Q1 2024 AVC Member Participation Rewards, Aave-SparkLend Revenue Share, USDP Push Out of Input Conduit, Whitelisting of New Address in the RWA015-A, Spark Proxy Spell - April 22, 2024
summary: Decrease ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C Stability Fees, decrease DSR, pay-out AD compensation for March 2024 and AVC Member participation rewards for Q1 2024, transfer Dai to Aave as part of the SparkLend revenue sharing agreement, convert USDP to Dai and deposit to the Surplus Buffer, whitelist a new BlockTower address in the RWA015-A output conduit, trigger a Spark proxy spell on Ethereum and Gnosis.
date: 2024-04-22T00:00:00.000Z
address: "0x65eEEfa08204b9717502398Abf37C52D91fb6693"

---
# [Executive Proposal] SF and DSR Decrease, March 2024 AD Compensation, Q1 2024 AVC Member Participation Rewards, Aave-SparkLend Revenue Share, USDP Push Out of Input Conduit Management, Whitelisting of New Address in the RWA015-A Output Conduit, Spark Proxy Spell - April 22, 2024

The Governance Facilitators, SideStream, Dewiz, and Phoenix Labs have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- ETH-A, ETH-B, ETH-C, WSTETH-A, WSTETH-B, WBTC-A, WBTC-B, WBTC-C [Stability Fees (SF)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-) will be decreased.
- The [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) will be decreased.
- The following pay-outs will be made:
    - A total of **214.55 MKR** will be distributed to eight Aligned Delegates (AD) as compensation for March 2024.
    - A total of **175.14 MKR** will be distributed to nine Aligned Voter Committee (AVC) members as participation rewards for Q1 2024.
    - A total of **238,339 DAI** will be paid to Aave as part of the SparkLend revenue share.
- The following housekeeping activities will be conducted:
    - **84,211.27 USDP** will be pushed out of the MCD PSM PAX Input Conduit Jar.
    - A new BlockTower address will be whitelisted in the RWA015-A output conduit.
- A proxy spell for Spark Protocol on Ethereum and Gnosis will be triggered, including following changes:
    - [Ethereum] Decrease of Effective DAI Borrow Rate.
    - [Ethereum] Activation of SparkLend External Security Access Multisig.
    - [Ethereum+Gnosis] Upgrade of Pool Implementation to Disable Flashloan into Borrow Feature.
    - [Gnosis] Onboarding of New Assets: sxDAI, EURe, USDC and USDT.
    - [Gnosis] Refresh of Existing Market Parameters
    - [Gnosis] Change of xDAI Oracle.

**Voting for this executive proposal will place your MKR in support of the changes outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **30 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Decrease of [Stability Fees (SF)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-stability-fee-sf-)

- **Authorization:** [Ecostystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-12-under-sta-article-3-3/24132/2)
- **Proposal:** [Forum post "Stability Scope Parameter Changes #12; Under STA Article 3.3"](https://forum.makerdao.com/t/stability-scope-parameter-changes-12-under-sta-article-3-3/24132)

If this executive proposal passes, the following SFs will be **decreased by 3.00%**:

- ETH-A SF: from 13.25% to **10.25%**.
- ETH-B SF: from 13.75% to **10.75%**.
- ETH-C SF: from 13.00% to **10.00%**.
- WSTETH-A SF: from 14.25% to **11.25%**.
- WSTETH-B SF: from 14.00% to **11.00%**.
- WBTC-A SF: from 14.75% to **11.75%**.
- WBTC-B SF: from 15.25% to **12.25%**.
- WBTC-C SF: from 14.50% to **11.50%**.

This proposal follows the recommendation of the Stability Scope Advisory Council Member, BA Labs.

### Decrease of [Dai Savings Rate (DSR)](https://manual.makerdao.com/parameter-index/core/param-dai-savings-rate) 

- **Authorization:** [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-12-under-sta-article-3-3/24132/2)
- **Proposal:** [Forum post "Stability Scope Parameter Changes #12; Under STA Article 3.3"](https://forum.makerdao.com/t/stability-scope-parameter-changes-12-under-sta-article-3-3/24132)

If this executive proposal passes, the DSR will be **decreased by 3.00%** from 13.00% to **10.00%**.

### March 2024 Compensation for Aligned Delegates (AD)

- **Authorization:** [Atlas Section 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)
- **Proposal:** [Forum post "March 2024 Aligned Delegate Compensation"](https://forum.makerdao.com/t/march-2024-aligned-delegate-compensation/24088)

If this executive proposal passes, the total of **214.55 MKR** will be paid out as March 2024 AD Compensation in the following transfers to the qualifying Aligned Delegates:

| Delegate | Address | Amount (MKR) |
|--|--|--|
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 41.67 |
| Cloaky | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) | 41.67 |
| TRUE NAME | [0x612F7924c367575a0Edf21333D96b15F1B345A5d](https://etherscan.io/address/0x612F7924c367575a0Edf21333D96b15F1B345A5d) | 41.67 |
| BLUE | [0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf](https://etherscan.io/address/0xb6C09680D822F162449cdFB8248a7D3FC26Ec9Bf) | 39.75 |
| vigilant | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 13.89 |
| Pipkin | [0x0E661eFE390aE39f90a58b04CF891044e56DEDB7](https://etherscan.io/address/0x0E661eFE390aE39f90a58b04CF891044e56DEDB7) | 13.89 |
| UPMaker | [0xbB819DF169670DC71A16F58F55956FE642cc6BcD](https://etherscan.io/address/0xbB819DF169670DC71A16F58F55956FE642cc6BcD) | 12.93 |
| JAG | [0x58D1ec57E4294E4fe650D1CB12b96AE34349556f](https://etherscan.io/address/0x58D1ec57E4294E4fe650D1CB12b96AE34349556f) | 9.08 |

### Q1 2024 Compensation for Aligned Voter Committee (AVC) members

- **Authorization:** [Atlas Section 2.5.10](https://mips.makerdao.com/mips/details/MIP101#2-5-10-avc-member-participation-rewards)
- **Proposal:** [Forum post "AVC Member Participation Rewards - Q1 2024"](https://forum.makerdao.com/t/avc-member-participation-rewards-q1-2024/24083)

If this executive proposal passes, the total of **175.14 MKR** will be paid out as AVC Q1 2024 compensation in the following transfers to AVC members:

| AVC Member | Address | Amount (MKR) |
|--|--|--|
| IamMeeoh | [0x47f7A5d8D27f259582097E1eE59a07a816982AE9](https://etherscan.io/address/0x47f7A5d8D27f259582097E1eE59a07a816982AE9) | 20.85 |
| DAI-Vinci | [0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a](https://etherscan.io/address/0x9ee47F0f82F1A6F45C4E1D25Ce95C321D8C8356a) | 20.85 |
| opensky | [0xf44f97f4113759E0a57756bE49C0655d490Cf19F](https://etherscan.io/address/0xf44f97f4113759E0a57756bE49C0655d490Cf19F) | 20.85 |
| ACRE DAOs | [0xBF9226345F601150F64Ea4fEaAE7E40530763cbd](https://etherscan.io/address/0xBF9226345F601150F64Ea4fEaAE7E40530763cbd) | 20.85 |
| Res | [0x8c5c8d76372954922400e4654AF7694e158AB784](https://etherscan.io/address/0x8c5c8d76372954922400e4654AF7694e158AB784) | 20.85 |
| Harmony | [0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3](https://etherscan.io/address/0xE20A2e231215e9b7Aa308463F1A7490b2ECE55D3) | 20.85 |
| Libertas | [0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f](https://etherscan.io/address/0xE1eBfFa01883EF2b4A9f59b587fFf1a5B44dbb2f) | 20.85 |
| seedlatam.eth | [0xd43b89621fFd48A8A51704f85fd0C87CbC0EB299](https://etherscan.io/address/0xd43b89621fFd48A8A51704f85fd0C87CbC0EB299) | 20.85 |
| 0xRoot | [0xC74392777443a11Dc26Ce8A3D934370514F38A91](https://etherscan.io/address/0xC74392777443a11Dc26Ce8A3D934370514F38A91) | 8.34 |

### Aave Revenue Share Payment

- **Authorization:** [MIP106: Support Scope Bounded Mutable Alignment Artifact (9.4.1: Spark Protocol Aave Revenue Share)](https://mips.makerdao.com/mips/details/MIP106#9-4-active-ecosystem-agreements-list-controller)
- **Proposal:** [Forum post "Spark - Aave Revenue Share Calculation & Payment #3 [Q1, 2024]"](https://forum.makerdao.com/t/spark-aave-revenue-share-calculation-payment-3-q1-2024/24014)

If this executive proposal passes, **238,339 DAI** will be paid out from the Surplus Buffer to the smart contract [0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c), controlled by Aave Governance, as part of the Spark Protocol-Aave Revenue Share.

### Push USDP Out of the Input Conduit

- **Authorization:** [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-04-18/24084/3)
- **Proposal:** [Forum post "Proposed Housekeeping items (Upcoming Executive Spell - 2024-04-18)"](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-04-18/24084)

If this executive proposal passes, the following operations will be performed:
- Raise the PSM_PAX_A Debt Ceiling to **100,000 DAI**.
- Call `push(uint256 amt)` on the the PSM_PAX_A_INPUT_CONDUIT_JAR contract with an amount of **84,211.27 USDP**, depositing the contents of the contract to the PSM and receiving an identical amount of Dai into the PSM_PAX_A_JAR contract.
- Call `void()` on the PSM_PAX_A_JAR contract to deposit the Dai to the Surplus Buffer.
- Decrease Debt Ceiling of PSM_PAX_A back to **0 DAI**.

This will have the following net results:

- The PSM_PAX_A Debt Ceiling remains at 0 DAI after the transaction has been executed.
- Dai generated from PSM_PAX_A increases by **84,211.27 DAI**.
- USDP balance of MCD_JOIN_PSM_PAX_A increases by **84,211.27 USDP**.
- USDP balance of PSM_PAX_A_INPUT_CONDUIT_JAR decreases to **0 USDP**.
- Surplus Buffer increases b'Proposed Housekeeping items (Upcoming Executive Spell - 2024-04-18)y **84,211.27 DAI**.

The above activities follow the recommendation of the Governance Facilitators in collaboration with the spell team.

### Whitelist New BlockTower Address in the RWA015-A Output Conduit
- **Authorization:** [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-04-18/24084/3)
- **Proposal:** [Forum post "Proposed Housekeeping items (Upcoming Executive Spell - 2024-04-18)"](https://forum.makerdao.com/t/proposed-housekeeping-items-upcoming-executive-spell-2024-04-18/24084)

If this executive proposal passes, the following wallet address, controlled by BlockTower, will be whitelisted in the `RWA015-A` output conduit:

- [0x6759610547a36E9597Ef452aa0B9cace91291a2f](https://etherscan.io/address/0x6759610547a36E9597Ef452aa0B9cace91291a2f)

### Trigger Spark Proxy Spell

If this executive proposal passes, the SparkLend Proxy Spell on Ethereum at [0x151D5fA7B3eD50098fFfDd61DB29cB928aE04C0e](https://etherscan.io/address/0x151D5fA7B3eD50098fFfDd61DB29cB928aE04C0e) will be executed, containing the following items:

#### [Ethereum] Decrease of Effective DAI Borrow Rate

- **Authorization:** [Ecostystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/stability-scope-parameter-changes-12-under-sta-article-3-3/24132/2)
- **Proposal:** [Forum post "Stability Scope Parameter Changes #12; Under STA Article 3.3"](https://forum.makerdao.com/t/stability-scope-parameter-changes-12-under-sta-article-3-3/24132)

If this executive proposal passes, the Effective DAI Borrow Rate for Spark Protocol will **decrease by 3.00%**, from 14.00% to **11.00%**.

This proposed change follows the recommendation of the Stability Scope Advisory Council Member, BA Labs.

#### [Ethereum] Activation of SparkLend External Security Access Multisig
- **Authorization:** 
    - [MIP113: Governance Scope Bounded Mutable Alignment Artifact (10.3.1: Multisig Freeze of SparkLend)](https://mips.makerdao.com/mips/details/MIP113#10-3-1-multisig-freeze-of-sparklend) 
    - [Endgame Edge Team (Governance Scope Facilitator) Approval](https://forum.makerdao.com/t/sparklend-external-security-access-multisig-for-freezer-mom/24070/2)
    - [Governance Poll 1104 (April 15, 2024)](https://vote.makerdao.com/polling/QmVXriiT)
- **Proposal:** [Forum post "SparkLend External Security Access Multisig for Freezer Mom"](https://forum.makerdao.com/t/sparklend-external-security-access-multisig-for-freezer-mom/24070)

If this executive proposal passes, the SparkLend External Security Access Multisig with the Ethereum Address [0x44efFc473e81632B12486866AA1678edbb7BEeC3](https://etherscan.io/address/0x44efFc473e81632B12486866AA1678edbb7BEeC3) will be activated with the following conditions:
- The multisig will be able to activate or disable the GSM delay exception SparkLend Freezer Mom without a governance spell.
- Maker governance will be able to reverse the action via a spell or remove the multisig access in case of malicious use.
- Initial multisig setup will be 2/5, with the following SparkLend signers:
    - VoteWizard (Governance Facilitator)
    - LDR (Governance Facilitator)
    - Hexonaut (Phoenix Labs)
    - MonetSupply (BA Labs)
    - Rema (BA Labs)

#### [Ethereum+Gnosis] Upgrade of Pool Implementation to Disable Flashloan into Borrow Feature
- **Authorization:**
    - [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/7)
    - [Governance Poll 1100 (April 9, 2024)](https://vote.makerdao.com/polling/QmZND8WW)
- **Proposal:** 
    - [Forum post "[Apr 4, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033)

If this executive proposal passes, the flashloan-to-borrow feature in SparkLend will be disabled to reduce risk and bring the pool code in line with the v1.19.2 release upstream version of Aave V3.
This action follows a recommendation from Phoenix Labs.

#### [Gnosis] Onboarding of New Assets to SparkLend
- **Authorization:**
    - [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/7)
    - Governance Polls (April 9, 2024):
        - [1097 for onboarding Savings xDAI (sxDAI)](https://vote.makerdao.com/polling/QmcRdMyA)
        - [1098 for onboarding Monerium EUR emoney (EURe)](https://vote.makerdao.com/polling/QmSh8gyC)
        - [1095 for onboarding Circle USDC (USDC)](https://vote.makerdao.com/polling/QmfGV2vt)
        - [1096 for onboarding Tether USDT (USDT)](https://vote.makerdao.com/polling/QmSYZSCQ)
- **Proposal:** 
    - [Forum post "[Apr 4, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/3)

If this executive proposal passes, the following collaterals will be onboarded with the listed parameters:

**Savings xDAI (sxDAI)**
* Collateral: Yes
  * Max LTV: 70%
  * Liquidation threshold: 75%
  * Liquidation bonus: 6%
  * Liquidation protocol fee: 10%
* Isolation mode: No
* Efficiency mode: No
* Borrowable: No
* Supply cap: 40,000,000 sxDAI
* Borrow cap: N/A

**Monerium EUR emoney (EURe)**
* Collateral: No
* Isolation mode: N/A
* Efficiency mode: N/A
* Borrowable: Yes
  * Base borrow rate: 0%
  * Optimal borrow rate: 7%
  * Max borrow rate: 57%
  * Optimal Utilization: 90%
  * Reserve factor: 10%
  * Borrowable in isolation mode: No
  * Siloed borrowing: Yes
* Supply cap: 5,000,000 EURe
* Borrow cap: 4,000,000 EURe
* Oracle: EURUSD

**Circle USDC (USDC)**
* Collateral: No
* Isolation mode: N/A
* Efficiency mode: N/A
* Borrowable: Yes
  * Base borrow rate: 0%
  * Optimal borrow rate: 12%
  * Max borrow rate: 62%
  * Optimal Utilization: 90%
  * Reserve factor: 10%
  * Borrowable in isolation mode: Yes
  * Siloed borrowing: Yes
* Supply cap: 10,000,000 USDC
* Borrow cap: 8,000,000 USDC
* Oracle: Fixed 1:1 USD pricing

**Tether USDT (USDT)**
* Collateral: No
* Isolation mode: N/A
* Efficiency mode: N/A
* Borrowable: Yes
  * Base borrow rate: 0%
  * Optimal borrow rate: 12%
  * Max borrow rate: 62%
  * Optimal Utilization: 90%
  * Reserve factor: 10%
  * Borrowable in isolation mode: Yes
  * Siloed borrowing: Yes
* Supply cap: 10,000,000 USDT
* Borrow cap: 8,000,000 USDT
* Oracle: Fixed 1:1 USD pricing

#### [Gnosis] Refresh Existing Market Parameters
- **Authorization:**
    - [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/7)
    - [Governance Poll 1099 (April 9, 2024)](https://vote.makerdao.com/polling/QmUhT32b)
- **Proposal:** 
    - [Forum post "[Apr 4, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/3)

If this executive proposal passes, the following updates will be made to Gnosis market parameters, including a significant adjustment of the xDAI interest rate model to align with current conditions and the introduction of sxDAI as collateral:

**xDAI Parameters:**

* Collateral: Yes
  * Max LTV: 0%
  * Liquidation threshold: 75%
  * Liquidation bonus: 5%
* Isolation mode: No
* Efficiency mode: No
* Borrowable: Yes
  * Base borrow rate: 0%
  * Optimal borrow rate: 12%
  * Max borrow rate: 62%
  * Optimal Utilization: 90%
  * Reserve factor: 5%
  * Borrowable in isolation mode: Yes
  * Siloed borrowing: No
* Supply cap: 20,000,000 xDAI
* Borrow cap: 16,000,000 xDAI

**Cap Parameter Changes:**

* GNO supply cap: 100,000 GNO (100,000 GNO decrease)
* wstETH supply cap: 15,000 wstETH (5,000 wstETH increase)

#### [Gnosis] Change of xDAI Oracle
- **Authorization:**
    - [Ecosystem Team (Stability Scope Facilitator) Approval](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/7)
    - [Governance Poll 1106 (April 15, 2024)](https://vote.makerdao.com/polling/QmVsKsGa)
- **Proposal:** 
    - [Forum post "[Apr 4, 2024] Proposed Changes to SparkLend for Upcoming Spell"](https://forum.makerdao.com/t/apr-4-2024-proposed-changes-to-sparklend-for-upcoming-spell/24033/6)

If this executive proposal passes, the oracle for xDAI will be changed from the Chainlink DAI price feed to a fixed 1:1 USD pricing.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
