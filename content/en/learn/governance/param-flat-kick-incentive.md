# Flat Kick Incentive

```
Alias: Flat Kick Incentive
Parameter Name: tip
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Flat Kick Incentive parameter represents a reward in DAI paid to the keepers that trigger collateral liquidation auctions in the Maker Protocol.

The Flat Kick Incentive is a fixed amount of DAI that is rewarded for each liquidation auction at the point the auction is triggered.

Each vault type has its own Flat Kick Incentive that may be adjusted separately by Maker Governance.

## Purpose

The purpose of this parameter is to offset the gas cost of triggering vault liquidations if gas costs on the Ethereum blockchain increase to the point where liquidations are not being triggered promptly.

## Trade-offs

Increasing the Flat Kick Incentive parameter should cause auctions to be triggered more reliably even for smaller vaults where the amount of collateral up for auction may not be attractive for keepers. In turn, having auctions trigger reliably for smaller vaults may allow governance to maintain a lower Debt Floor.

However, if this parameter is set higher than the gas cost to both create and liquidate vaults, it provides an opportunity for attackers to exploit the system by liquidating their own vaults to harvest the DAI incentive.

A further trade-off is that the funds for this parameter are removed from the surplus buffer, meaning that liquidations of very small vaults may cost governance more than it gains through the Liquidation Penalty.

## Changes
Adjusting a Flat Kick Incentive parameter is a manual process that requires an executive vote. Changes to a Flat Kick Incentive are subject to the GSM Timelock.

**Why increase this parameter?**

Governance may consider increasing the Flat Kick Incentive for a vault type if high gas prices are preventing the liquidation of smaller vaults within that vault type.

**Why decrease this parameter?**

Governance may consider decreasing the Flat Kick Incentive for a vault type if smaller vaults are being liquidated reliably. 

A decrease to this parameter should be **strongly** considered when in combination with the Proportional Kick Incentive and the Liquidation Penalty the farming of liquidation incentives is a viable option for attackers.

## Considerations

The Flat Kick Incentive parameter should be set such that: `Flat Kick Incentive < Liquidation Gas Costs + Vault Creation Gas Costs`

The combination of liquidations incentives should be set such that the following is true: `Flat Kick Incentive + Proportional Kick Incentive < Liquidation Penalty + Liquidation Gas Costs + Vault Creation Gas Costs`.

If both the Flat Kick Incentive and the Proportional Kick Incentive are non-zero. A keeper triggering a valid liquidation will receive both.

Resetting a failed auction will also award the triggering keeper the Flat Kick Incentive. 

The funds for the Flat Kick Incentive are removed from the surplus buffer and may trigger MKR minting if there is no DAI available within the surplus buffer.