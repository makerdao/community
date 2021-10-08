
# Min Bid Increase (Flap)

```
Alias: 
Parameter Name: beg
Containing Contract: Flap
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flap-detailed-documentation 
```

## Description
During surplus auctions, excess DAI within the system is auctioned off in fixed lots for MKR. In this process, keepers bid increasing amounts of MKR for a fixed amount of DAI. MKR received this way is burned by the Maker Protocol. 

New MKR bids must be higher than the current MKR bid by at least an amount determined by the `Min Bid Increase (Flap)` or `beg`.  The `Min Bid Increase (Flap)`  is given in terms of a minimum percentage increase on the current bid.

For example, if the `Min Bid Increase (Flap)` is set to 5% and the current bid is 10 MKR for 1000 DAI, the next bid must be at least 10.5 MKR for 1000 DAI.

In practice the `Min Bid Increase (Flap)` represents both:
* The maximum profit that keepers can make when bidding in Surplus Auctions. 
* The maximum slippage MakerDAO is willing to accept during auctions to ensure sufficient keeper participation. 

## Purpose
The `Min Bid Increase (Flap)` parameter allows Maker Governance to ensure that keepers are sufficiently incentivized to bid in surplus auctions.

## Trade-offs
A small `Min Bid Increase (Flap)` helps to increase the amount of MKR burned as bids will be closer to the market value of MKR. However, if it is too low, it can result in low keeper participation due to lack of perceived profit. If only a single keeper participates in an auction it can lead to significant losses for the Maker Protocol.

A large `Min Bid Increase (Flap)` ensures high keeper participation as there is an opportunity for a larger profit. It also helps to balance other costs to the keeper when making a bid, such as the effect of the price volatility of MKR over the duration of the auction, and the cost of gas when making a bid.

## Changes
Adjusting the `Min Bid Increase (Flap)` parameter is a manual process that requires an executive vote. Changes to the `Min Bid Increase (Flap)` are subject to the GSM Pause Delay.

**Why increase this parameter?**

This parameter should be increased to increase keeper participation in surplus auctions.

**Why decrease this parameter?**

This parameter should be decreased to increase auction efficiency i.e. winning bid price vs. market price of MKR.

## Considerations
The gas cost to `kick` (trigger) a surplus auction is non-trivial. If the `Min Bid Increase (Flap)` is too low, surplus auctions may not be triggered by any keeper because they are required to accept a fixed cost for an uncertain return.

"Front-running" may be an issue in surplus auctions.

