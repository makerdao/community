---
title: Sky Protocol Launch Season - Token and Product Launch Parameter Proposal - September 9, 2024
summary: Signal your support or opposition to the token and product launch parameters.
discussion_link: https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031
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
start_date: 2024-09-09T16:00:00
end_date: 2024-09-12T16:00:00
---
# Poll: Sky Protocol Launch Season - Token and Product Launch Parameter Proposal - September 9, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Ecosystem team. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, September 9 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

**This proposal will only take effect if the concurrent Atlas v2 Upgrade proposal passes.**

## Review

The community can vote in this poll to express support or opposition to the changes described below. In summary, this covers the following items (find attached corresponding GitHub repos, which include README files that explain all technical details):

* New Token contracts and corresponding token converters
  * [USDS](https://github.com/makerdao/sdai/tree/susds) (Upgraded DAI)
  * [SKY](https://github.com/makerdao/sky) (Upgraded MKR)
* The introduction of the [Sky Savings Rate (sUSDS)](https://github.com/makerdao/sdai/tree/snst)
* [Smart Burn Engine](https://github.com/makerdao/dss-flappers/tree/dev) upgrade and [pool migration](https://github.com/makerdao/univ2-pool-migrator) to the new tokens
* The introduction of [Sky Token Rewards (STR)](https://github.com/makerdao/endgame-toolkit/blob/master/README.md#farms)
  * Use USDS to get SKY
  * Use USDS to get 01 rewardsToken
* [GSM Delay](https://sky-atlas.powerhouse.io/#A.1.8.2_Governance_Security_Delay_Requirements-9349994e-9918-494c-9e9a-e993082ae055%7C0db30758) Changes
* Corresponding [Atlas V2](https://sky-atlas.powerhouse.io/) Active Data Updates

To learn more about Launch Season, refer to:

* [MakerDAO Endgame: Launch Season (final)](https://forum.makerdao.com/t/makerdao-endgame-launch-season-final/24740)
* [Sky has arrived!](https://forum.makerdao.com/t/sky-has-arrived/24959)
* [Atlas V2](https://forum.makerdao.com/t/atlas-v2-upgrade-poll-request/25010)
* [Endgame: Announcing the Token and Product Launch forum post](https://forum.makerdao.com/t/endgame-announcing-the-token-and-product-launch/25021/1)

### Launch Executive Proposal

* Set the Schedule Method time for the earliest spell execution: September 17, 12:00 UTC

### Deployment Requirements Before Token and Product Launch Spell

* [Tokens](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031#p-98784-new-tokens-4):
  * USDS.
  * SKY.
  * sUSDS.
* DAI:USDS and MKR:SKY converters.
* Create USDS/SKY UniV2 pool (if this does not exist already).
* [FlapperUniV2 for the Smart Burn Engine](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031#p-98784-flapper-9).
* [Splitter](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031#p-98784-splitter-8).
* [SplitterMOM](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031#p-98784-splittermom-10).
* [LitePSM USDS Wrapper](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031#p-98784-litepsm-usds-wrapper-16).
* USDSJoin.
* SKY DssVestMintable.
* SKY VestingRewardsDistribution.
* [Rewards distribution cron-job](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031#p-98784-keeper-jobs-for-sky-token-rewards-str-15).
* StakingRewards (rewardsToken: SKY, stakingToken: USDS).
* StakingRewards (rewardsToken: 01, stakingToken: USDS).

### Parameters

* New Tokens Initialization
  * [USDS](https://github.com/makerdao/nst)
  * [SKY](https://github.com/makerdao/ngt)
  * [Savings USDS (sUSDS)](https://github.com/makerdao/sdai/tree/susds)
    * Set Sky Savings Rate to **6.25%**
* Initialize token converters
  * DAI <> USDS converter.
    * DAI to USDS conversion (both ways). The exchange rate is **1:1**.
  * MKR <> SKY converter.
    * MKR to SKY conversion with an MKR/SKY conversion rate of **1:24,000**.
* USDS/SKY UniV2 Pool Migration and Smart Burn Engine Upgrade to use New Tokens.
  * USDS/SKY UniV2 Pool Migration.
    * Migrate funds from DAI/MKR UniV2 Pool to USDS/SKY UniV2 Pool.
  * Splitter Initialization:
    * `hump`: **55 million DAI**.
    * `bump`: **65,000 DAI** (USDS in practice).
    * `burn`: **100%** (1.0 * WAD).
    * `hop`: **10,249 seconds**.
  * Dss Flapper Initialization to Use New Tokens.
    * `flapper`: FlapperUniV2.
    * `pip`: OracleWrapper ([0x38e8c1D443f546Dc014D7756ec63116161CB7B25](https://etherscan.io/address/0x38e8c1D443f546Dc014D7756ec63116161CB7B25)).
    * `want`: **0.98 * WAD**.
* Sky Token Rewards (STR) Deployment.
  * SKY (Supply USDS to get Sky Token Rewards in the form of SKY).
    * DssVest.
      * Rewards Distribution Rate: **600,000,000 SKY**.
      * Rewards Distribution Cap: **800,000,000 SKY**.
      * Start Date relative to the spell cast time minus 7 days.
        * `vestBgn`: `block.timestamp - 7 days`.
      * End Date is set one year after Start Date defined by duration.
        * `vestTau`: **365 days**.
      * Call `distribute()` in VestedRewardsDistribution contract in the spell execution.
  * 01 Rewards (Supply USDS to get future token rewards. More details about this will follow soon).
* Setup new Keeper Network Job - VestedRewardsDistributionJob.
  * Interval: **7 days**.
* GSM Delay.
  * Decrease by 14 hours, from 30 hours to **16 hours**.

Please review the discussion [thread](https://forum.makerdao.com/t/sky-protocol-launch-season-token-and-product-launch-parameter-proposal/25031) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the Atlas v2 Upgrade proposal passes then the following actions will be taken:**
* These changes will be included in an upcoming Executive Vote.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
