# Liquidation Ratio

```
Parameter Name: mat
Containing Contract: Spot
Association: Ilk
```

## Description
The Liquidation Ratio parameter controls the maximum amount of DAI debt that a vault user can draw from a vault given the value of their locked collateral. It also expresses the minimum collateral value that can support a given DAI debt, if the ratio of a Vault user's collateral to their debt drops below this value their vault will be liquidated. 

Each vault type has it's own individually adjustable Liquidation Ratio. The Liquidation Ratio for each vault type is expressed as collateral value that must be present in the vault to support a certain amount of DAI. For example, a 150% Liquidation Ratio means that a debt of 66 DAI must be supported by a collateral value of at least $100. 

## Purpose
The primary purpose of the Liquidation Ratio parameter is to control the risk to the protocol that comes from a drop in the price of an collateral asset. When the value of collateral drops, vaults dropping below the Liquidation Ratio are liquidated. By triggering liquidations at a ratio greater than 100%, there is a much greater chance that the protocol can recover the full value of the DAI debt. 

Requiring a Liquidation Ratio above 100% means that DAI is always be backed by at least $1 of assets (outside of price fluctuations in the market.)

## Trade-offs
Setting the Liquidation Ratio of a vault type too low increases the risk to the protocol in a situation where the market price of the collateral is dropping. There is more chance of the actual Liquidation Ratio of an individual vault dropping below 100%, which represents a loss for MKR Holders.

However, setting the Liquidation Ratio of a vault type too high makes it less capital efficient for vault users - they can mint less DAI for their deposited collateral than if the parameter was set to a lower ratio. Having lower ratios therefore makes vaults more attractive to vault users.

## Changes
**Why increase a Liquidation Ratio Parameter?**

Increasing the Liquidation Ratio of a vault type can be used to increase the safety of the vault type in the face of extreme market conditions. However, increasing the Liquidation Ratio will immediately trigger liquidations for all vault users that are maintaining a ratio above the current value, but below the new value. This is likely to result in an extreme negative reaction from those vault users.

Increasing the Liquidation Ratio to a ridiculously high value can be used to forceably close all vaults within a certain vault type. This could be used if the Maker Governance decides that it no longer wants to support vaults of that type. However, this is likely to result in a negative reaction from those vault users, especially if done prematurely, or in addition to charging a Liquidation Penalty.

In practice increasing a Liquidation Ratio parameter should only be done for VERY compelling reasons due to the possibility for it to result in forced liquidations.

If Maker Governance wants to increase the Liquidation Ratio for a vault type, a preferable path to achieve this goal which prevents forced liquidations is to take the following actions:
1. Create a new vault-type identical to the old with the desired new Liquidation Ratio.
2. Set the Debt Ceiling of the old vault-type to zero, preventing new minting.
3. Allow vault-type A to unwind naturally without forced liquidations.
4. Allow vault-type B to replace vault-type A.


**Why decrease a Liquidation Ratio Parameter?**

Decreasing the Liquidation Ratio for a vault type can be used to increase the attractiveness of the vault type and encourage additional DAI to be minted using that vault type. This could be done for monetary policy reasons, or for business reasons.

## Considerations
* Is there anything little known about this parameter?
* How does this interact with other parts of the protocol?
* Are there any Emergency Shutdown considerations to take into account?

There is currently no system for automatically adjusting the Liquidation Ratio parameter for a specific vault type. An executive vote is required to modify the Liquidation Ratio parameter for a particular vault type.







