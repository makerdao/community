---
title: Adjust the Debt Floor (dust) - January 23, 2023
summary: Rank your preferred options to resolve adjusting the Debt Floor (Dust) for multiple collateral types.
discussion_link: https://forum.makerdao.com/t/discussion-adjusting-dust-parameter-november-2022/18767
parameters:
    input_format: rank-free
    victory_conditions:
        - { type : instant-runoff }
    result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Option 1 - Broad Reduction 
   2: Option 2 - Limited Reduction
   3: No Change
start_date: 2023-01-23T16:00:00
end_date: 2023-01-26T16:00:00
---
# Poll: Adjust the Debt Floor (dust) - January 23, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [Risk Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP35). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, January 23 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community can vote in this poll to rank their support of the following options to changing the [Debt Floor (Dust)](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-floor):
* Option 1 - Broad Reduction
  * Reduce `dust` for ETH-A, WBTC-A, and WSTETH-A to **5,000 DAI**
  * Reduce `dust` for ETH-C, WBTC-C, and WSTETH-B to **2,500 DAI**
  * Reduce `dust` for ETH-B and WBTC-B to **15,000 DAI**
  * Reduce `dust` for CRVV1ETHSTETH-A, LINK-A, YFI-A, and MATIC-A to **10,000 DAI**
* Option 2 - Limited Reduction
  * Reduce `dust` for ETH-A, WBTC-A, and WSTETH-A to **7,500 DAI**
  * Reduce `dust` for ETH-C, WBTC-C, and WSTETH-B to **3,500 DAI**
  * Reduce `dust` for ETH-B and WBTC-B to **25,000 DAI**
* No Change
  * Keep `dust` unchanged across all collateral types. 

Please review the discussion [thread](https://forum.makerdao.com/t/discussion-adjusting-dust-parameter-november-2022/18767) to help inform your position before voting.

## Outcomes

**If a non-'Abstain' option receives more votes than each other option (excluding 'Abstain') and the votes for that option exceed 50% of the total votes cast then that option is deemed the winner and the following actions will be taken:**
* If the winner represents a change from the status quo, this change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If no option has enough votes to exceed 50% of the total votes cast, then no further actions will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
