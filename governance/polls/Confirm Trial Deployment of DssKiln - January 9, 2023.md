---
title: Confirm Trial Deployment of DssKiln - January 9, 2023
summary: Rank your preferred options for a trial deployment of DssKiln.
discussion_link: https://forum.makerdao.com/t/poll-notice-confirmation-of-trial-dsskiln-deployment/19346
parameters:
    input_format: rank-free
    victory_conditions:
        - { type : instant-runoff }
    result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Burn 3 million DAI worth of MKR, as approved
   2: Burn 2 million DAI worth of MKR
   3: Burn 1 million DAI worth of MKR
   4: Burn 0.5 million DAI worth of MKR
   5: Do not burn any MKR
start_date: 2023-01-09T16:00:00
end_date: 2023-01-12T16:00:00
---
# Poll: Confirm Trial Deployment of DssKiln - January 9, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the GovAlpha, Protocol Engineering, and Risk Core Units. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, January 9 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community can vote in this poll to rank their support of the following options:
* Burn 3 million DAI worth of MKR as [previously approved](https://vote.makerdao.com/polling/QmWCy8Bc#vote-breakdown) by Governance in June 2022.
* Proceed with the burn, but reduce it to 2 million DAI worth of MKR.
* Proceed with the burn, but reduce it to 1 million DAI worth of MKR.
* Proceed with the burn, but reduce it to 500,000 DAI worth of MKR.
* Do not burn any MKR using DssKiln at this time.

Please review the discussion [thread](https://forum.makerdao.com/t/poll-notice-confirmation-of-trial-dsskiln-deployment/19346) to help inform your position before voting.

Depending on the outcome of this poll, a follow-up poll may be required to settle on values for:

* The `lot` - the maximum quantity of tokens to be sold per `hop`.
* The `hop` - the minimum number of seconds that must pass before the `lot` can be sold.
* The `yen` - the ratio of spot price to the Uniswap TWAP price over the past `scope` - defaults to 100%.
* The `scope` - the time period of price data from the Uniswap TWAP against which `yen` will be measured - defaults to **1 hour**.

## Outcomes

**If a non-'Abstain' option receives more votes than each other option (excluding 'Abstain') and the votes for that option exceed 50% of the total votes cast then that option is deemed the winner and the following actions will be taken:**
* If the winner represents a change from the status quo, this change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If no option has enough votes to exceed 50% of the total votes cast, we will proceed with the previously approved implementation.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
