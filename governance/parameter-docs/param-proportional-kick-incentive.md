# Proportional Kick Incentive

```
Alias: Proportional Kick Incentive
Parameter Name: chip
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Proportional Kick Incentive parameter represents a reward in DAI paid to the keepers that trigger collateral liquidation auctions in the Maker Protocol.

The Proportional Kick Incentive is set as a percentage and represents a portion of DAI based on the debt of the vault that is being liquidated. The DAI is rewarded for each liquidation auction at the point the auction is triggered.

Each vault type has its own Proportional Kick Incentive that may be adjusted separately by Maker Governance.

## Purpose

The Proportional Kick Incentive exists to ensure that auctions are triggered quickly and reliably even in times of high gas fees on the Ethereum blockchain.

## Trade-offs

Having a large Proportional Kick Incentive parameter should cause the liquidation auctions of large vaults to trigger quickly and reliably. However, this incentive directly cuts into the revenue of the Maker Protocol.

Setting the parameter too low may result in liquidation auctions not being triggered quickly enough to avoid a net loss for the Maker Protocol. 

If this parameter is set higher than the Liquidation Penalty for vaults, it provides an opportunity for attackers to exploit the system by liquidating their own vaults to harvest the DAI incentive. 

## Changes

Adjusting a Proportional Kick Incentive parameter is a manual process that requires an executive vote. Changes to a Proportional Kick Incentive are subject to the GSM Timelock.

**Why increase this parameter?**

Increasing a Proportionate Kick Incentive may be desirable when gas prices are high enough to discourage keepers from kicking auctions quickly and reliably. 

Having quick and reliable liquidations decreases the chances of accruing bad debt when the price of a collateral asset is falling.

**Why decrease this parameter?**

It is important that this parameter be reasonably lower than the Liquidation Penalty to make auction-related attacks less attractive to malicious actors. 

Governance may want to reduce this parameter if it determines that it is 'overpaying' keepers that trigger liquidations. 

## Considerations

The Proportional Kick Incentive parameter should be set such that: `Proportional Kick Incentive < Liquidation Penalty`

The combination of liquidations incentives should be set such that the following is true: `Flat Kick Incentive + Proportional Kick Incentive < Liquidation Penalty + Liquidation Gas Costs + Vault Creation Gas Costs`.

If both the Proportional Kick Incentive and the Flat Kick Incentive are non-zero. A keeper triggering a valid liquidation will receive both.

Resetting a failed auction will also award the triggering keeper the Proportional Kick Incentive. 

The funds for the Proportional Kick Incentive are removed from the surplus buffer and may trigger MKR minting if there is no DAI available within the surplus buffer.