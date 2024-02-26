---
title: SparkLend Ethereum - Activate Cap Automator - February 26, 2024
summary: Signal your support or opposition to activating the SparkLend Cap Automator.
discussion_link: https://forum.makerdao.com/t/feb-22-2024-proposed-changes-to-sparklend-for-upcoming-spell/23739
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
start_date: 2024-02-26T16:00:00
end_date: 2024-02-29T16:00:00
---
# Poll: SparkLend Ethereum - Activate Cap Automator - February 26, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of Spark Protocol and the Stability Facilitators. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, February 26 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to activating the SparkLend Cap Automator. This new feature will enable dynamic adjustments to borrow and supply caps. The core mechanism is similar to the [Debt Ceiling Instant Access Modules (DC-IAM)](https://manual.makerdao.com/module-index/module-dciam) used for Maker core vaults and will help reduce governance overhead in maintaining the supply and borrow caps for various assets.

If approved, the module will be activated with the following max limit (max), buffer size (gap), and cooldown (ttl) parameters for the covered assets:

#### WETH

* Supply cap
  * `gap`: 150,000 WETH
  * `ttl`: 12 hours
  * `max`: 2 million WETH
* Borrow cap
  * `gap`: 10,000 WETH
  * `ttl`: 12 hours
  * `max`: 1 million WETH

#### wstETH

* Supply cap
  * `gap`: 50,000 wstETH
  * `ttl`: 12 hours
  * `max`: 1.2 million wstETH
* Borrow cap
  * `gap`: 100 wstETH
  * `ttl`: 12 hours
  * `max`: 3,000 wstETH

#### rETH

* Supply cap
  * `gap`: 10,000 rETH
  * `ttl`: 12 hours
  * `max`: 80,000 rETH
* Borrow cap
  * `gap`: 100 rETH
  * `ttl`: 12 hours
  * `max`: 2,400 rETH

#### WBTC

* Supply cap
  * `gap`: 500 WBTC
  * `ttl`: 12 hours
  * `max`: 5,000 WBTC
* Borrow cap
  * `gap`: 100 WBTC
  * `ttl`: 12 hours
  * `max`: 2,000 WBTC

#### sDAI

* Supply cap
  * `gap`: 50 million sDAI
  * `ttl`: 12 hours
  * `max`: 1 billion sDAI
* Borrow cap: n/a - not a borrowable asset

#### USDC

* Supply cap
  * `gap`: n/a
  * `ttl`: n/a
  * `max`: 60 million USDC
* Borrow cap
  * `gap`: 6 million USDC
  * `ttl`: 12 hours
  * `max`: 57 million USDC

#### USDT

* Supply cap
  * `gap`: n/a
  * `ttl`: n/a
  * `max`: 30 million USDT
* Borrow cap
  * `gap`: 3 million USDT
  * `ttl`: 12 hours
  * `max`: 28.5 million USDT

Please review the discussion [thread](https://forum.makerdao.com/t/feb-22-2024-proposed-changes-to-sparklend-for-upcoming-spell/23739) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* Phoenix Labs will prepare a Spark spell to include this change on SparkLend Ethereum.
* An upcoming Executive Vote will include a proposal to execute the Spark spell.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

Code developed by Phoenix Labs to automate the caps on SparkLend: [GitHub - marsfoundation/sparklend-cap-automator](https://github.com/marsfoundation/sparklend-cap-automator).

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
