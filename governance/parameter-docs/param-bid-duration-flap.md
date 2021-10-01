
# Bid Duration (Flap)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flap
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flap-detailed-documentation 
```

## Description
The `Bid Duration (Flap)` parameter allows governance to control how soon after a successful bid a Surplus Auction will end. Further bids reset this timer, extending the auction. A Surplus Auction can extend up to a maximum time which is set by the `Auction Duration (Flap)` parameter at which point the auction will end regardless of the Bid Duration timer.

Surplus Auctions are used to auction off excess DAI for fixed lots of MKR, which is then burned. In this process, keepers bid on how much MKR they are willing to pay for a fixed DAI amount. 

### Example

`Bid Duration (Flap)` = 300 seconds  
`Auction Duration (Flap)` = 24 hours  

1. A Surplus Auction has been triggered and 3 hours pass with no bid.
2. Keeper A offers to give 10 MKR in exchange for 100 DAI at the 3-hour mark.
3. Keeper B has 300 seconds in which to offer a more attractive bid or else Keeper A will win the auction.
4. Keeper B offers to give 11 MKR in exchange for 100 DAI at 23 hours and 59 minutes into the auction.
5. Keeper A has 60 seconds in which to offer a more attractive bid or else Keeper B will win the auction.

## Purpose
Adjusting the `Bid Duration (Flap)` parameter allows Maker Governance to maximize the total MKR burned by ensuring sufficient competition among Keepers.

## Trade-offs
When bidding, Keepers take a risk that the MKR-DAI price will change negatively (for them) during the auction's duration, if this happens, they can lose money.

A `Bid Duration (Flap)` that is small means that Keepers take less risk that the market will move while the auction is in progress. Since the risk is lower,  keepers can submit more aggressive bids which can result in more MKR being burned. However, if the `Bid Duration (Flap)` is too small, there may not be enough time for keepers to organize funds and participate in such auctions. In the extreme, an auction with only one bidder will result in arbitrarily low MKR bids and a loss of value for the Maker Protocol.

A small `Bid Duration (Flop)` also increases the risk of a more severe loss of value in the case of blockchain congestion. Rising gas prices may lock out keepers either due to technical issues or due to the additional fixed cost of gas. 

A larger `Bid Duration (Flap)` gives keepers more time to participate in auctions, hopefully encouraging a higher number of bidders. If the `Bid Duration (Flap)` is too large, there may be bids for minimal amounts of MKR to safeguard against price volatility during the `Bid Duration (Flap)` period. Realistically priced bids would only appear when the auction end (determined by Auction Duration) is closer than the `Bid Duration (Flap)` period. In situations where the price of MKR is dropping, this would lead to less MKR being burned than with a smaller `Bid Duration (Flap)`.


## Changes
Adjusting the `Bid Duration (Flap)` parameter is a manual process that requires an executive vote. Changes to the `Bid Duration (Flap)` are subject to the GSM Pause Delay.

**Why increase this parameter?**

Maker Governance may wish to increase the `Bid Duration (Flap)` if too few keepers are participating in `flap` auctions to encourage greater participation or if they are concerned about blockchain congestion.

**Why decrease this parameter?**

Maker Governance may wish to decrease the `Bid Duration (Flap)` if keepers are submitting low bids due to volatility in the price of MKR during the `Bid Duration (Flap)` period.

## Considerations
`Bid Duration (Flap)` is always upper bounded by the total auction duration. If it is set higher than the total auction duration, it will have no effect. 

The `Bid Duration (Flop)` parameter fulfills  the same role as this parameter in Debt Auctions.

A similar auction system was initially used for collateral auctions as well, it was replaced by a dutch auction system.
