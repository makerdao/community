
# Min Bid Decrease (Flop)

```
Alias: 
Parameter Name: beg
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, keepers bid a reducing amount of MKR they are willing to accept for the fixed DAI amount they have to pay at auction settlement. 

During debt auctions, new MKR bids must be lower than the current MKR bid by at least an amount determined by the `Min Bid Decrease (Flop)` or `beg`.  The `Min Bid Decrease (Flop)` is given in terms of a minimum percentage decrease on the current bid.

For example, if the `Min Bid Decrease (Flop)` is set to 5% and the current bid is 10 MKR for 1000 DAI, the next bid must be at most 9.5 MKR for 1000 DAI.

In practice the `Min Bid Decrease (Flop)` represents both:
* The maximum profit that keepers can make when bidding in Debt Auctions. 
* The maximum slippage MakerDAO is willing to accept during auctions to ensure sufficient keeper participation. 

## Purpose
The `Min Bid Decrease (Flop)` parameter allows Maker Governance to ensure that keepers are sufficiently incentivized to bid in debt auctions.

## Trade-offs

A small `Min Bid Decrease (Flop)` helps to reduce the amount of MKR minted in a debt auction as bids will be closer to the market value of MKR. However, if it is too low it can result in low keeper participation due to lack of perceived profit. If only a single keeper participates in an auction it can lead to significant losses for the Maker Protocol, and potentially DAI Holders.

A large `Min Bid Decrease (Flop)` ensures high keeper participation as there is an opportunity for a larger profit. It also helps to balance other costs to the keeper when making a bid, such as the effect of the price volatility of MKR over the duration of the auction, and the cost of gas when making a bid.

## Changes
Adjusting the `Min Bid Decrease (Flop)` parameter is a manual process that requires an executive vote. Changes to the `Min Bid Decrease (Flop)` are subject to the GSM Pause Delay.

**Why increase this parameter?**

This parameter should be increased to increase keeper participation in debt auctions.

**Why decrease this parameter?**

This parameter should be decreased to increase auction efficiency i.e. winning bid price vs. market price of MKR.

## Considerations
The gas cost to `kick` (trigger) a debt auction is non-trivial. If the `Min Bid Decrease (Flop)` is too low, debt auctions may not be triggered by any keeper because they are required to accept a fixed cost for an uncertain return.

"Front-running" may be an issue in debt auctions.

