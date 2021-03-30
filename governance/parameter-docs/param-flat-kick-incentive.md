# Flat Kick Incentive

```
Alias: Flat Kick Incentive
Parameter Name: tip
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description
The Flat Kick Incentive parameter represents a constant reward paid to keepers (callers of `Dog.bark`) expressed in DAI.

## Purpose
This parameter serves the double purpose of offsetting the gas costs incurred by keepers when liquidating vaults and making the liquidation of small vaults more attractive.

## Trade-offs
Increasing the Flat Kick Incentive parameter should make auctions kick reliably even for smaller vaults where the amount of collateral up for auction may not be attractive for keepers. In turn, having auctions kick reliably for smaller vaults may help in keeping a lower Debt Floor.

On the other hand, it is important not to make this parameter so high that it will represent an opportunity for attackers to exploit the system by liquidating their own vaults to reap the incentives.

## Changes
Adjusting the Flat Kick Incentive parameter is a manual process that requires an executive vote. Changes to the Flat Kick Incentive are subject to the GSM Timelock.

**Why increase this parameter?**
Increasing the Flat Kick Incentive parameter may be necessary in times of high gas fees that would otherwise demotivate the liquidation of smaller, less attractive vaults.

**Why decrease this parameter?**
Decreasing the Flat Kick Incentive parameter should be considered when gas prices go down and smaller vaults are being liquidated reliably. Decreasing this parameter should also be considered when its correlation with the Proportional Kick Incentive (`chip`) and the Liquidation Penalty (`chop`) is such that attempting the farming of liquidations rewards is an attractive option for attackers.

## Considerations
TBC