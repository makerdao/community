---
title: Template - [Executive Vote] Parameter Changes, Switching MKR Vesting Source - December 10, 2021
summary: Changes to wstETH-A and MATIC-A Parameters, replacing current MKR vesting streams with streams funded by the Protocol Treasury MKR.
date: 2021-12-10T00:00:00.000Z
address: "0xA867399B43aF7790aC800f2fF3Fa7387dc52Ec5E"

---
# [Executive Proposal] Parameter Changes, Switching MKR Vesting Source - December 10, 2021

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- Changes to wstETH-A [Debt Ceiling Instant Access Module](https://makerdao.world/en/learn/governance/module-dciam) and Liquidation Parameters, as detailed below. 
- Changes to MATIC-A [Debt Ceiling Instant Access Module](https://makerdao.world/en/learn/governance/module-dciam), as detailed below.
- Previously approved MKR Vesting Streams will be replaced with MKR sourced from the Protocol Treasury (Pause Proxy) instead of minting new MKR.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes listed above are subject to the [GSM Pause Delay](https://community-development.makerdao.com/en/learn/governance/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### wstETH-A Parameter Changes

As per this successful [governance poll](https://vote.makerdao.com/polling/QmYuK441?network=mainnet#poll-detail), the following wstETH-A parameters will be updated if this executive proposal passes.

* Increase the wstETH-A [Maximum Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/module-dciam) from 50 million DAI to 200 million DAI. 
* Increase the wstETH-A [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam) from 3 million DAI to 20 million DAI.
* Decrease the wstETH-A [Debt Ceiling Increase Cooldown (`ttl`)](https://makerdao.world/en/learn/governance/module-dciam) from 8 hours to 6 hours.
* Decrease the wstETH-A [Auction Price Multiplier (`buf`)](https://makerdao.world/en/learn/governance/param-auction-price-multiplier) from 1.3 to 1.2.
* Increase the wstETH-A [Local Liquidation Limit (`ilk.hole`)](https://makerdao.world/en/learn/governance/param-local-liquidation-limit) from 7 million DAI to 15 million DAI.

Please review the [discussion thread](https://forum.makerdao.com/t/wsteth-a-parameters-adjustment-dec-1st-2021/11934) to help inform your position before voting.

### MATIC-A Parameter Changes

As per this successful [governance poll](https://vote.makerdao.com/polling/QmdzwZyS?network=mainnet#poll-detail), the following MATIC-A parameters will be updated if this executive proposal passes.

* Increase the MATIC-A [Maximum Debt Ceiling (`line`)](https://makerdao.world/en/learn/governance/module-dciam) from 20 million DAI to 35 million DAI. 
* Decrease the MATIC-A [Target Available Debt (`gap`)](https://makerdao.world/en/learn/governance/module-dciam) from 20 million DAI to 10 million DAI.

Please review the [discussion thread](https://forum.makerdao.com/t/matic-debt-increase-proposal-for-last-executive-of-2021/11989) to help inform your position before voting.

### Replacing MKR Vesting Streams

As per this successful [governance poll](https://vote.makerdao.com/polling/QmYdDTsn?network=mainnet#poll-detail), the following MKR vesting streams will be canceled and replaced by streams funded by the Protocol Treasury (Pause Proxy) if this executive proposal passes.

1,051.25 MKR will be streamed to the **[Oracles Core Unit (ORA-001)](https://mips.makerdao.com/mips/details/MIP39c2SP13)** starting July 1, 2021 through July 1, 2022 at **0x2d09B7b95f3F312ba6dDfB77bA6971786c5b50Cf** in accordance with their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP15). A 1-year cliff is in place, making MKR claimable on July 1, 2022.

803.18 MKR will be streamed to the **[Growth Core Unit (GRO-001)](https://mips.makerdao.com/mips/details/MIP39c2SP4)** starting July 1, 2021 through July 1, 2022 at **0x7800C137A645c07132886539217ce192b9F0528e** in accordance with their active [MKR budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP23). A 1-year cliff is in place, making MKR claimable on July 1, 2022.

13,930 MKR total will be streamed to 14 team members of the **[Protocol Engineering Core Unit (PE-001)](https://mips.makerdao.com/mips/details/MIP39c2SP7)** as detailed below, in accordance with their active [budget proposal](https://mips.makerdao.com/mips/details/MIP40c3SP7). All team members have a 1-year cliff and will have their 995 MKR streamed over 4 years.

| **Address**                                | **Stream Start Date** |
|--------------------------------------------|-----------------------|
| 0xfDB9F5e045D7326C1da87d0e199a05CDE5378EdD | 2021-05-01            |
| 0xBe4De3E151D52668c2C0610C985b4297833239C8 | 2021-05-01            |
| 0x58EA3C96a8b81abC01EB78B98deCe2AD1e5fd7fc | 2021-05-01            |
| 0xBAB4Cd1cB31Cd28f842335973712a6015eB0EcD5 | 2021-05-01            |
| 0xB5c86aff90944CFB3184902482799bD5fA3B18dD | 2021-05-01            |
| 0x780f478856ebE01e46d9A432e8776bAAB5A81b5b | 2021-05-01            |
| 0x34364E234b3DD02FF5c8A2ad9ba86bbD3D3D3284 | 2021-05-01            |
| 0x46E5DBad3966453Af57e90Ec2f3548a0e98ec979 | 2021-05-01            |
| 0x18CaE82909C31b60Fe0A9656D76406345C9cb9FB | 2021-05-01            |
| 0x301dD8eB831ddb93F128C33b9d9DC333210d9B25 | 2021-05-01            |
| 0xBFC47D0D7452a25b7d3AA4d7379c69A891bD5d43 | 2021-05-01            |
| 0xcD16aa978A89Aa26b3121Fc8dd32228d7D0fcF4a | 2021-09-13            |
| 0x3189cfe40CF011AAb13aDD8aE7284deD4CD30602 | 2021-06-21            |
| 0x29b37159C09a65af6a7CFb062998B169879442B6 | 2021-09-20            |

For more information on the rationale for this streaming change, please see [this thread](https://forum.makerdao.com/t/signal-request-should-we-mint-new-mkr-for-protocol-expenses-or-fund-them-with-mkr-from-the-makerdao-treasury/11629) to inform your position before voting.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
