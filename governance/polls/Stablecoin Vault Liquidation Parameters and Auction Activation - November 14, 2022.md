---
title: Stablecoin Vault Liquidation Parameters and Auction Activation - November 14, 2022
summary: Signal your support or opposition to adjusting the liquidation parameters and activating auctions on USDC-A, USDP-A, and GUSD-A.
discussion_link: https://forum.makerdao.com/t/usdc-a-usdp-a-gusd-a-liquidation-parameters-auctions-activation/18744
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
start_date: 2022-11-14T16:00:00
end_date: 2022-11-17T16:00:00
---
# Poll: Stablecoin Vault Liquidation Parameters and Auction Activation - November 14, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Maker Community and the [Risk Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP35). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, November 14 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes for USDC-A, USDP-A, and GUSD-A:
* Enable Liquidations.
* Use [Linear Decrease](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#linear-decrease) for [Auction Price Function (`calc`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function).
* Set [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to 0.
* Set [Proportional Kick Incentive (`chip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-proportional-kick-incentive) to 0.
* Set [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to 0.
* Set [Auction Price Multiplier (`buf`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-multiplier) to 1.
* Set [`tau`](https://manual.makerdao.com/parameter-index/collateral-auction/param-auction-price-function#tau) to 4,320,000 seconds (72,000 minutes, or 1,200 hours). This results in an estimated 10bps drop in price every 72 minutes, or 50 days until the price reaches 0.
* Set [Max Auction Duration (`tail`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-duration) to 43,200 secpnds (720 minutes, or 12 hours). This implies a minimum price of 0.99.
* Set [Max Auction Drawdown (`cusp`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-max-auction-drawdown) to 0.99. 
* Individually set the [Local Liquidation Limit (`ilk.hole`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-local-liquidation-limit) for the vault types as follows:
  *  USDC-A - 20 million DAI
  *  USDP-A - 3 million DAI 
  *  GUSD-A - 300,000 DAI

Please review the discussion [thread](https://forum.makerdao.com/t/usdc-a-usdp-a-gusd-a-liquidation-parameters-auctions-activation/18744) to help inform your position before voting.

For more information on the motivation behind these changes, please see the initial [signal request](https://forum.makerdao.com/t/signal-request-clear-vaults-bad-debt-in-the-makerdao-protocol/18376) from @nonstopTheo.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* These changes will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows.
* It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
