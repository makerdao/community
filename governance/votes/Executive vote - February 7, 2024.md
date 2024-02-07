---
title: Template - [Executive Vote] Auction Parameter Updates, GUSD Input Conduit Management, Aave-SparkLend Revenue Share, RWA009-A doc Update, Delegate Compensation for January 2024 - February 7, 2024
summary: Update auction throughput parameters, convert remaining GUSD into Dai, transfer Dai to Aave as part of the SparkLend revenue sharing agreement, update the `doc` for RWA009-A, Aligned Delegate compensation transfers for January 2024.
date: 2024-02-07T00:00:00.000Z
address: "0x0E9AB92e3Fad77eE35a5f702Ac56c48bAAB7B0eE"

---
# [Executive Proposal] Auction Parameter Updates, GUSD Input Conduit Management, Aave-SparkLend Revenue Share, RWA009-A doc Update, Delegate Compensation for January 2024 - February 7, 2024

The Governance Facilitators, Dewiz, and Sidestream have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Changes to the liquidation limit for multiple vaults.
- The remaining GUSD in the PSM_GUSD_A_INPUT_CONDUIT_JAR will be converted to Dai and added to the Surplus Buffer.
- **100,603 DAI** will be paid to Aave as part of the SparkLend revenue share.
- The HV Bank (RWA009-A) `doc` parameter will be updated.
- Ten Aligned Delegates will receive a total of 277.62 MKR as compensation for January 2024.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.


---

## Proposal Details

### Auction Parameter Updates

* **Authorization**: [Governance Poll](https://vote.makerdao.com/polling/QmWLyYW7)
* **Proposal**: [Forum post "[Stability Scope Auction Parameters Changes #1] Liquidation Throughput Limit"](https://forum.makerdao.com/t/stability-scope-auction-parameters-changes-1-liquidation-throughput-limit/23508)

If this executive proposal passes, the following auction parameter changes will be changed:

#### [Local Liquidation Limit (ilk.hole)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-5-8-local-liquidation-limit-hole-) Changes

* Increase the WSTETH-A Local Liquidation Limit (ilk.hole) by 15 million DAI from 15 million DAI to **30 million DAI**.
* Increase the WSTETH-B Local Liquidation Limit (ilk.hole) by 10 million DAI from 10 million DAI to **20 million DAI**.
* Decrease the WBTC-A Local Liquidation Limit (ilk.hole) by 20 million DAI from 30 million DAI to **10 million DAI**.
* Decrease the WBTC-B Local Liquidation Limit (ilk.hole) by 5 million DAI from 10 million DAI to **5 million DAI**.
* Decrease the WBTC-C Local Liquidation Limit (ilk.hole) by 10 million DAI from 20 million DAI to **10 million DAI**.

#### [Global Liquidation Limit (Hole)](https://manual.makerdao.com/parameter-index/core/param-global-liquidation-limit) Change

* Increase the Global Liquidation Limit (Hole) by 50 million DAI from 100 million DAI to **150 million DAI**.

### GUSD Input Conduit Management

* **Authorization**: [Ecosystem Appoval](https://forum.makerdao.com/t/executive-spell-gusd-input-conduit-management/23597/2)
* **Proposal**: [Forum post "Executive Spell GUSD Input Conduit Management"](https://forum.makerdao.com/t/executive-spell-gusd-input-conduit-management/23597)

If this executive proposal passes, the following actions will be taken to `push` the remaining GUSD out of the PSM_GUSD_INPUT_CONDUIT_JAR, exchange it for Dai, and add it to the Surplus Buffer:

1. Raise Debt Ceiling of PSM_GUSD_A to **597,660 DAI** - accounting for the GUSD rewards and the remaining 0.91 DAI debt still present in the vault.
2. Call `push(uint256 amt)` on the [PSM_GUSD_A_INPUT_CONDUIT_JAR](https://etherscan.io/address/0x6934218d8b3e9ffcabee8cd80f4c1c4167afa638) contract with an `amt` of **597,659**, depositing the contents of the contract to the PSM and receiving an identical amount of Dai into the [PSM_GUSD_A_JAR](https://etherscan.io/address/0xf2e7a5b83525c3017383deed19bb05fe34a62c27) contract.
3. Call `void` on the [PSM_GUSD_A_JAR](https://etherscan.io/address/0xf2e7a5b83525c3017383deed19bb05fe34a62c27) contract to deposit the Dai to the Surplus Buffer.
4. Decrease Debt Ceiling of PSM_GUSD_A back to **0 DAI**.

This will have the following net results:

1. Debt Ceiling remains at 0 after the transaction has executed.
2. Dai minted from PSM_GUSD_A increases to 597,659.91 DAI.
3. GUSD balance of [MCD_JOIN_PSM_GUSD_A](https://etherscan.io/address/0x79a0fa989fb7adf1f8e80c93ee605ebb94f7c6a5) increases to 597,659.91 GUSD.
4. GUSD balance of [PSM_GUSD_A_INPUT_CONDUIT_JAR](https://etherscan.io/address/0x6934218d8b3e9ffcabee8cd80f4c1c4167afa638) decreases to 0 GUSD.
5. Surplus Buffer increases by 597,659 DAI.

### Aave-SparkLend Revenue Share

* **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/spark-aave-revenue-share-calculation-payment-2-q4-2023/23593/2)
* **Proposal**: [Forum post "Spark - Aave Revenue Share Calculation & Payment #2 [Q4 2023]"](https://forum.makerdao.com/t/spark-aave-revenue-share-calculation-payment-2-q4-2023/23593)

If this executive proposal passes, the following Dai transfer will be sent as part of the revenue sharing agreement between SparkLend and Aave defined in the [Support Scope](https://mips.makerdao.com/mips/details/MIP106#9-4-1-spark-protocol-aave-revenue-share).

* Transfer **100,603 DAI** to [0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c)

### RWA009-A `doc` Update

* **Authorization**: [Ecosystem Approval](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/20)
* **Proposal**: [Forum comment](http://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/19)

Due to the passage of a recent DAO Resolution for the RWA009-A vault, the `doc` parameter is out-of-date. If this executive proposal passes, it will be updated as follows:

* Set the RWA009-A `doc` to [QmPzuLuJ5Xq6k6Hbop1W5s4V9ksvafYoqcW9sU5QRwz5h1](https://gateway.pinata.cloud/ipfs/QmPzuLuJ5Xq6k6Hbop1W5s4V9ksvafYoqcW9sU5QRwz5h1).

### Delegate Compensation for January 2024

* **Authorization**: [Atlas Section 2.6.3](https://mips.makerdao.com/mips/details/MIP101#2-6-3-aligned-delegate-income-and-participation-requirements)
* **Proposal**: [Forum post](https://forum.makerdao.com/t/january-2024-aligned-delegate-compensation/23604)

If this executive proposal passes, the following transfers for Aligned Delegate Compensation will be made to qualifying Aligned Delegates.

| Delegate    | Address                                                                                                               | Amount (MKR) |
|-------------|-----------------------------------------------------------------------------------------------------------------------|--------------|
| 0xDefensor  | [0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9](https://etherscan.io/address/0x9542b441d65B6BF4dDdd3d4D2a66D8dCB9EE07a9) | 41.67        |
| BLUE        | [0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf](https://etherscan.io/address/0xb6c09680d822f162449cdfb8248a7d3fc26ec9bf) | 41.67        |
| BONAPUBLICA | [0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3](https://etherscan.io/address/0x167c1a762B08D7e78dbF8f24e5C3f1Ab415021D3) | 41.67        |
| Cloaky      | [0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818](https://etherscan.io/address/0x869b6d5d8FA7f4FFdaCA4D23FFE0735c5eD1F818) | 41.67        |
| TRUE NAME   | [0x612f7924c367575a0edf21333d96b15f1b345a5d](https://etherscan.io/address/0x612f7924c367575a0edf21333d96b15f1b345a5d) | 41.67        |
| PBG         | [0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2](https://etherscan.io/address/0x8D4df847dB7FfE0B46AF084fE031F7691C6478c2) | 13.89        |
| UPMaker     | [0xbb819df169670dc71a16f58f55956fe642cc6bcd](https://etherscan.io/address/0xbb819df169670dc71a16f58f55956fe642cc6bcd) | 13.89        |
| vigilant    | [0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61](https://etherscan.io/address/0x2474937cB55500601BCCE9f4cb0A0A72Dc226F61) | 13.89        |
| WBC         | [0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47](https://etherscan.io/address/0xeBcE83e491947aDB1396Ee7E55d3c81414fB0D47) | 13.89        |
| JAG         | [0x58D1ec57E4294E4fe650D1CB12b96AE34349556f](https://etherscan.io/address/0x58D1ec57E4294E4fe650D1CB12b96AE34349556f) | 13.71        |

This is a total of **277.62 MKR**.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

---

## Resources

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
