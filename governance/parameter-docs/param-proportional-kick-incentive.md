# Proportional Kick Incentive

```
Alias:
Parameter Name: chip
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description
The Proportional Kick Incentive parameter controls the percentage of the target amount of DAI to raise from bidders (debt + stability fees + liquidation penalty) that will be destined to incentivize keepers when liquidating a vault or resetting an already existing auction.

## Purpose
Governance may periodically increase the Debt Floor. When this happens, it is usually because gas has become so expensive that it impacts the efficiency of liquidations — that is, the cost of calling auction-related functions may exceed the value of the collateral to be liquidated. Incentives may be used as a remedy to this potential issue and possibly as a way for the protocol to keep the Debt Floor lower. The Proportional Kick Incentive ensures that auction initialization or reset is being compensated to cover keepers gas costs and spurs the prompt liquidation of unsafe vaults.

## Trade-offs
Increasing the Proportional Kick Incentive parameter should make auctions trigger more quickly. Prompt liquidations prevent the accrual of bad debt. Increasing this parameter may also help in keeping the Debt Floor lower. A lower Debt Floor makes creating Vaults more universally accessible in terms of required capital. 

On the other hand, increasing this parameter also carries the risk of prompting the proliferation of vaults created with the sole intent of reaping the incentive by liquidating them on purpose.

## Changes
Adjusting the Proportional Kick Incentive parameter is a manual process that requires an executive vote. Changes to the Proportional Kick Incentive are subject to the GSM Pause Delay.

**Why increase this parameter?**
Increasing the Proportionate Kick Incentive may be desirable when gas prices are high enough to discourage keepers from triggering auctions timely.

**Why decrease this parameter**
TBC

## Considerations
The Proportional Kick Incentive should be kept lower than the Liquidation Penalty to discourage the farming of liquidation rewards.