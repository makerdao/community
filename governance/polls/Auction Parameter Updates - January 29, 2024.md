---
title: Auction Parameter Updates - January 29, 2024
summary: Signal your support or opposition to the listed auction parameter updates.
discussion_link: https://forum.makerdao.com/t/stability-scope-auction-parameters-changes-1-liquidation-throughput-limit/23508
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2024-01-29T16:00:00
end_date: 2024-02-01T16:00:00
---
# Poll: Auction Parameter Updates - January 29, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Scope Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, January 29 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes:
* Increase the WSTETH-A [Local Liquidation Limit (`ilk.hole`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-5-8-local-liquidation-limit-hole-) by 15 million DAI from 15 million DAI to **30 million DAI**.
* Increase the WSTETH-B [Local Liquidation Limit (`ilk.hole`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-5-8-local-liquidation-limit-hole-) by 10 million DAI from 10 million DAI to **20 million DAI**.
* Decrease the WBTC-A [Local Liquidation Limit (`ilk.hole`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-5-8-local-liquidation-limit-hole-) by 20 million DAI from 30 million DAI to **10 million DAI**.
* Decrease the WBTC-B [Local Liquidation Limit (`ilk.hole`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-5-8-local-liquidation-limit-hole-) by 5 million DAI from 10 million DAI to **5 million DAI**.
* Decrease the WBTC-C [Local Liquidation Limit (`ilk.hole`)](https://mips.makerdao.com/mips/details/MIP104#14-3-1-5-8-local-liquidation-limit-hole-) by 10 million DAI from 20 million DAI to **10 million DAI**.
* Increase the [Global Liquidation Limit (`Hole`)](https://manual.makerdao.com/parameter-index/core/param-global-liquidation-limit) by 50 million DAI from 100 million DAI to **150 million DAI**.

Please review the discussion [thread](https://forum.makerdao.com/t/stability-scope-auction-parameters-changes-1-liquidation-throughput-limit/23508) and analysis from BA Labs to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in an upcoming Executive Vote.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
