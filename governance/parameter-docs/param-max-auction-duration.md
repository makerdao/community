# Max Auction Duration

```
Alias: Max Auction Duration
Parameter Name: tail
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Max Auction Duration parameter sets the maximum time that can elapse before an auction needs to reset for a particular vault type. Expressed in seconds, this parameter can determine when an auction can settle or when it needs to be reset. 

For example, if the Max Auction Duration is set to 9,000 seconds for a given vault type, then any auction in the liquidations system for that vault type that has been running for more than 2.5 hours will not be able to settle and will need to be reset. The Max Auction Duration parameter works in tandem with the Max Auction Drawdown parameter in that an auction will need to be reset once either maximum is exceeded.

## Purpose

The Max Auction Duration parameter exists to prevent auctions from continuing on for too long, resulting in the potential of uncollected fees and bad debt for the protocol. The Dutch Auction format is used in Liquidations 2.0, meaning that collateral is instantly settled on a decreasing price curve, with the first bidder ending the auction, paying less the longer the auction is open. 

Without some implementation of the Max Auction Duration or Max Auction Drawdown parameters, the protocol would be particuarly vulnerable to network congestion and lack of attentive Keepers, as the lack of bids would drive the sale price of the collateral to zero. While functionally these parameters are very similar, the redundency of the Max Auction Duration parameter is valuable because it is independent of any underlying Oracle assumptions in contrast to the Max Auction Drawdown.

## Trade-offs

While the Max Auction Duration Parameter is intended as a safeguard in the liquidations system, it is not without dangers. One critical risk is that this parameter could become detached from the Max Auction Drawdown parameter for a major vault type. This detachment is problematic in either direction as it removes the redundency of the parameters. Likewise, if the pair of parameters detach too far from an ideal setting issues arise on both sides. If auctions are too short there is risk of liquidation not being profitable before a reset is mandated. Converesly, if auctions are set too long there is risk that they will be settled at a loss for the protocol. 

However, when considered with other risk factors and set appropriately to the Max Auction Drawdown, the Max Auction Duration parameter grants reasonable flexibility for Governance to adjust and optimize for Keeper strategies. Additionally, the ability to set the Max Auction Duration individually for different vault types is a huge advantage for risk management.

## Changes

Adjusting the Maximum Auction Duration parameter for a specific vault type is a manual process that requires an executive vote. Changes to the Max Auction Duration are subject to the GSM Pause Delay.

**Why increase this parameter?**

The Max Auction Duration might be increased when Governance feels comfortable with the potential to settle a vault type's auctions for a smaller percentage of the starting auction price. Increasing this parameter results in the potential for longer auctions with lower settlements, giving more time for Keepers to become aware of the auctions before they are reset. This could be particuarly helpful in an extended market correction where each auction reset would lower the starting auction price and thus the minimum amount the auction could close for as well.

**Why decrease this parameter?**

Conversely, Governance might be interested in decreasing the Max Auction Duration when they want to reduce the variability of auction settlements. Decreasing this parameter leads to shorter auctions with a tighter range on the collateral sale price. While issues of collateral liquidity could motivate a decrease in the Max Auction Duration, such a change might also be warrented when changing other risk parameters (such as the Liquidation Ratio) that have a measured effect on the safety margins when auctioning collateral from a particular vault type. 

## Considerations

The Max Auction Duration parameter plays a crucial part in pertecting the integrity of liquidations. Auction resets can only take place when either this parameter or the Max Auction Drawdown parameter are exceeded. 

During an Emergency Shutdown new auctions are halted, but the Three-Stage Liquidations Circut Breaker determines if ongoing auctions can be reset or not. If only one additional level of the circut breaker is triggered the Max Auction Duration will still be used to check eligibility for auction reset, but under the most severe level of the Liquidations Circut breaker no resets can be preformed, thus limiting the effectiveness of the parameter.
