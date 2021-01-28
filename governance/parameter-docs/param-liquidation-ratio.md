# Liquidation Ratio

```
Alias: N/A
Parameter Name: mat
Containing Contract: Spot
Scope: Ilk
Technical Docs: https://docs.makerdao.com/smart-contract-modules/core-module/spot-detailed-documentation
```

## Description

The Liquidation Ratio parameter limits the maximum amount of DAI debt that a vault user can draw from their vault given the value of their collateral locked in that vault. In practice, it expresses the minimum collateral in percentage terms that can support a given DAI debt. If the ratio of a Vault user's collateral to their debt drops below this value their vault can be liquidated. 

Each vault type has its own Liquidation Ratio that can be adjusted by Maker Governance. Note that the Liquidation Ratio applies collectively to all vaults created using a specific vault type, rather than to individual vaults.

 The Liquidation Ratio for each vault type is expressed as a percentage value of the collateral that must be present in the vault to support its debt. For example, a 150% Liquidation Ratio means that a debt of 66.66 DAI must be supported by a collateral value of at least $100. 

## Purpose

The primary purpose of the Liquidation Ratio parameter is to control the risk to the protocol that comes from a drop in the price of a collateral asset. When the value of collateral drops, vaults dropping below the Liquidation Ratio can be liquidated. By triggering liquidations at a ratio greater than 100%, there is a much greater chance that the protocol can recover at least the full value of the DAI debt. 

Requiring a Liquidation Ratio above 100% means that DAI is always backed by at least $1 of assets (outside of price fluctuations in the market.) This is what is meant when DAI is described as over-collateralized.

## Trade-offs

Setting the Liquidation Ratio of a vault type too low increases the risk to the protocol in a situation where the market price of the collateral used in that vault type is dropping. The lower the Liquidation Ratio, the higher the chance of the Collateralization Ratio of an individual vault dropping below 100%, which represents a loss for MKR Holders.

However, the higher the Liquidation Ratio of a vault type, the less capital efficient it is for vault users - they can mint less DAI for their deposited collateral than if the Liquidation Ratio was set to a lower value. Having lower ratios therefore makes vaults more attractive to vault users.

## Changes

Adjusting a Liquidation Ratio parameter is a manual process that requires an executive vote. Changes to Liquidation Ratio parameters are subject to the GSM Pause Delay.

**Why increase a Liquidation Ratio Parameter?**

Increasing the Liquidation Ratio of a vault type can be used to reduce the risk from a vault type in the face of extreme market conditions. However, increasing the Liquidation Ratio will immediately trigger liquidations for all vault users that are maintaining a collateralization ratio above the current value, but below the new value. This is likely to result in an extremely negative reaction from the affected vault users.

Increasing the Liquidation Ratio to an arbitrarily high value can be used to forcibly close all vaults within a certain vault type. This could be used if the Maker Governance decides that it no longer wants to support vaults of that type. However, this is likely to result in a negative reaction from those vault users, especially if done prematurely, or in addition to charging a Liquidation Penalty.

Increasing a Liquidation Ratio parameter should only be done for VERY compelling reasons due to the possibility for it to result in forced liquidations.

If Maker Governance wants to increase the Liquidation Ratio for a vault type, a preferable path to achieve this goal which prevents forced liquidations is to take the following actions:
1. Create a new vault-type identical to the old with the desired new Liquidation Ratio.
2. Set the Debt Ceiling of the old vault-type to zero, preventing new minting.
3. Allow vault-type A to unwind naturally without forced liquidations.
4. Allow vault-type B to replace vault-type A.

**Why decrease a Liquidation Ratio Parameter?**

One reason for decreasing the Liquidation Ratio for a vault type is that of monetary policy. Maker Governance may wish to encourage further minting of DAI, and consider the additional risk taken to be a reasonable trade-off to achieve this goal.

Alternatively, a Liquidation Ratio might be decreased to increase the competitiveness (in terms of capital efficiency) of a vault type when compared to the wider market.

Finally, Maker Governance or the Risk Domain Team may have judged that the collateral in question has become less risky, such that a lower Liquidation Ratio can be supported safely.

## Considerations

If a Liquidation Ratio parameter for a vault type is increased above the current ratio, this will trigger liquidations in vaults maintaining a collateralization ratio above the current value but below the new value if they do not react to the change in Liquidation Ratio.

Some vault types do not have liquidations enabled. For these vault types, users whose Collateralization Ratio drops below the Liquidation Ratio cannot be liquidated until liquidations are enabled for those vault types. However, they are still unable to draw additional DAI debt while their Collateralization Ratio is less than the liquidation ratio.

For USD denominated stablecoin vaults, Liquidation Ratios can be decreased to very low levels to allow arbitrage of the DAI peg. This puts an effective cap on the price of DAI while these vault types have available debt-ceiling space. The trade-offs around this decision are not covered here.






