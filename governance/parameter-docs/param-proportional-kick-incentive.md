# Proportional Kick Incentive

```
Alias: Proportional Kick Incentive
Parameter Name: chip
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description
The Proportional Kick Incentive parameter controls the percentage of the auction amount that will be destined to incentivize keepers when liquidating a vault or resetting an already existing auction.

## Purpose
The Proportional Kick Incentive exists to ensure that auctions are triggered quickly and reliably even in times of high gas fees on the Ethereum blockchain.

## Trade-offs
Increasing the Proportional Kick Incentive parameter should make larger, more urgent auctions trigger quickly and reliably.

However, there is a risk that increasing this parameter could prompt the multiplication of vaults created with the sole intent of reaping the incentive by liquidating them on purpose.

## Changes
Adjusting the Proportional Kick Incentive parameter is a manual process that requires an executive vote. Changes to the Proportional Kick Incentive are subject to the GSM Timelock.

**Why increase this parameter?**
Increasing the Proportionate Kick Incentive may be desirable when gas prices are high enough to discourage keepers from kicking auctions quickly and reliably. Having quick and reliable liquidations decreases the chances of accruing bad debt when the price of a collateral is plummeting.

**Why decrease this parameter**
It is important that this parameter be reasonably lower than the Liquidation Penalty to make auction-related attacks less attractive to malicious actors.

## Considerations
The Proportional Kick Incentive should always be kept lower than the Liquidation Penalty to discourage the farming of liquidation rewards, the practice whereby vaults are purposely liquidated by their owners in order to reap the liquidation incentives.
