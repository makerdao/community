# Bid Duration (Flop)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
The `Bid Duration (Flop)` parameter allows governance to control how soon after a successful bid a Debt Auction will end. Further bids reset this timer, extending the auction. A debt auction can extend up to a maximum time which is set by the `Auction Duration (Flop)` parameter at which point the auction will end regardless of the Bid Duration timer.

Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, Keepers bid on how little MKR they are willing to accept for a fixed amount of DAI that they provide. 

### Example

`Bid Duration (Flop)` = 300 seconds  
`Auction Duration (Flop)` = 24 hours  

1. A Debt Auction has been triggered and 3 hours pass with no bid.
2. Keeper A offers to take 20 MKR in exchange for 100 DAI at the 3-hour mark.
3. Keeper B has 300 seconds in which to offer a more attractive bid or else Keeper A will win the auction.
4. Keeper B offers to take 19 MKR in exchange for 100 DAI at 23 hours and 59 minutes into the auction.
5. Keeper A has 60 seconds in which to offer a more attractive bid or else Keeper B will win the auction.

## Purpose
Adjusting the `Bid Duration (Flop)` parameter allows Maker Governance to minimize the total MKR minted by ensuring sufficient competition among Keepers.

## Trade-offs
When bidding, Keepers take a risk that the MKR-DAI price will change negatively (for them) during the auction's duration, if this happens, they can lose money.

A `Bid Duration (Flop)` that is small means that Keepers take less risk that the market will move while the auction is in progress. Since the risk is lower, keepers can submit more aggressive bids which can result in less MKR being minted. However, if the `Bid Duration (Flop)` is too small, there may not be enough time for keepers to organize funds and participate in such auctions. In the extreme, an auction with only one bidder will result in arbitrarily high MKR bids and a loss of value for the Maker Protocol.

A small `Bid Duration (Flop)` also increases the risk of a more severe loss of value in the case of blockchain congestion. Rising gas prices may lock out keepers either due to technical issues or due to the additional fixed cost of gas. 

A larger `Bid Duration (Flop)` gives keepers more time to participate in auctions, hopefully encouraging a higher number of bidders. If the `Bid Duration (Flop)` is too large, there may be bids for very high amounts of MKR to safeguard against price volatility during the `Bid Duration (Flop)` period. Realistically priced bids would only appear when the auction end (determined by Auction Duration) is closer than the `Bid Duration (Flop)` period. In situations where the price of MKR is dropping, this would lead to more MKR being minted than with a smaller `Bid Duration (Flop)`.

## Changes
Adjusting the `Bid Duration (Flop)` parameter is a manual process that requires an executive vote. Changes to the `Bid Duration (Flop)` are subject to the GSM Pause Delay.

**Why increase this parameter?**

Maker Governance may wish to increase the `Bid Duration (Flop)` if too few keepers are participating in `flop` auctions to encourage greater participation or if they are concerned about blockchain congestion.

**Why decrease this parameter?**

Maker Governance may wish to decrease the `Bid Duration (Flop)` if keepers are submitting high bids due to volatility in the price of MKR during the `Bid Duration (Flop)` period.

## Considerations
`Bid Duration (Flop)` is always upper bounded by the total auction duration. If it is set higher than the total auction duration then it will have no effect. 

The `Bid Duration (Flap)` parameter fulfills  the same role as this parameter in Surplus Auctions.

A similar auction system was initially used for collateral auctions as well, it was replaced by a dutch auction system. 

