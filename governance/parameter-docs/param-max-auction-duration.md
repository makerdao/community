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

The Max Auction Duration parameter exists as a safegaurd in the liquidations system. With the switch to Dutch Auctions in Liquidations 2.0, collateral is instantly settled on a decreasing price curve, with the first bidder ending the auction. Because of this style of auction, the protocol could experiance losses if an auction continues for too long. 

Without some implementation of the Max Auction Duration or Max Auction Drawdown parameters, the protocol would be particuarly vulnerable to network congestion and lack of attentive Keepers. While functionally these parameters are very similar, the redundency of the Max Auction Duration parameter is particuarly valuable because it is independent of any underlying Oracle assumptions in contrast to the Max Auction Drawdown.

## Trade-offs

While the Max Auction Duration Parameter is intended as a safeguard in the liquidations system, it is not without dangers. One critical risk is that this parameter could become detached from the Max Auction Drawdown parameter for a major vault type. This detachment is problematic in either direction as it removes the redundency of the parameters. Likewise, if the pair of parameters detach too far from an ideal setting issues arise on both sides. If auctions are too short there is risk of liquidation not being profitable before a reset is mandated. Converesly, if auctions are set too long there is risk that they will be settled at a loss for the protocol. 

## Changes
* How are changes to this parameter made?

**Why increase this parameter?**

**Why decrease this parameter?**

## Considerations
* Is there anything little known about this parameter?
* How does this interact with other parts of the protocol?
* Are there any Emergency Shutdown considerations to take into account?
