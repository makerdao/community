# Maximum Auction Drawdown

```
Alias:
Parameter Name: cusp
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description
The Maximum Auction Drawdown is the maximum percentage drop in collateral price during a collateral auction before the auction is reset. 'Collateral price' in this context refers to the collateral *auction price* rather than the collateral *market price.* Collateral auctions use a falling price auction, where the price starts high and decreases according to the Auction Price Function until it has dropped by the Maximum Auction Drawdown percentage parameter.

If a collateral auction starts at a collateral price of $100, and the Maximum Auction Drawdown is set to 70%, the auction will be reset if the auction collateral price reaches $30.

The Max Auction Drawdown parameter overlaps with the Max Auction Duration parameter in that an auction will need to be reset once either maximum is exceeded.

## Purpose

This parameter primarily exists to prevent collateral auctions from continuing past the point of sanity and auctioning off collateral at far below market price in the event of an unforeseen issue that prevents bids. It is redundant with the Max Auction Duration parameter and allows Maker Governance to decide whether to set the lowest price directly or implicitly via the Auction Price Curve and Maximum Auction Duration parameters.

## Trade-offs
Setting this parameter too low may result in collateral auctions selling collateral for below market price in the event of unforeseen disruptions that prevent bids. 

On the other hand, setting this parameter too high may delay successful auction resolution due to the auction being reset too frequently. Frequent resets also result in the protocol paying out additional kick incentives (both proportional and flat.) 

## Changes

Adjusting a Maximum Auction Drawdown parameter for a specific vault type is a manual process that requires an executive vote. Changes to Maximum Auction Drawdown parameters are subject to the GSM Pause Delay.

## Considerations

Maximum Auction Drawdown is based on the starting auction price (`top`), which is equal to the OSM price multiplied by the Auction Price Multiplier (`buf`).

The Maximum Auction Drawdown parameter sets one of the two conditions that can independently prompt an auction reset, the other being the Maximum Auction Duration.