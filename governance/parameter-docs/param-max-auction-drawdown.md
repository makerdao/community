# Maximum Auction Drawdown

```
Alias:
Parameter Name: cusp
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description
* What is this parameter?
* How does it fit in with the protocol and surrounding contracts?

The Maximum Auction Drawdown is the maximum percentage drop in collateral price during an auction before the auction is reset. Note that 'collateral price' in this context refers to the collateral *auction price* rather than the collateral *market price.* Collateral auctions use a falling price auction, where the price starts high and decreases according to some function until it has dropped by the Maximum Auction Drawdown percentage parameter.

Each vault type may have its own Maximum Auction Drawdown. 

If a collateral auction starts at a collateral price of $100, and the Maximum Auction Drawdown is set to 70%, the auction will be reset if the auction collateral price reaches $30.

## Purpose

This parameter primarily exists to prevent collateral auctions continuing past the point of sanity and auctioning off collateral at far below market price in the event an unforseen issue that prevents bids.

## Trade-offs
* What dangers does this parameter represent?
* What advantages does this parameter represent?

TBC

## Changes

Adjusting an Maximum Auction Drawdown parameter for a specific vault type is a manual process that requires an executive vote. Changes to Auction Price Multiplier parameters are subject to the GSM Pause Delay.

**Why increase this parameter?**
TBC

**Why decrease this parameter?**
TBC

## Considerations
* Is there anything little known about this parameter?
* How does this interact with other parts of the protocol?
* Are there any Emergency Shutdown considerations to take into account?

Maximum Auction Drawdown is based on the starting auction price which is equal to the OSM price multiplied by the Auction Price Multiplier.
