
# Bid Duration (Flap)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flap
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flap-detailed-documentation 
```

## Description
During surplus auctions, excess DAI within the system is auctioned off in fixed lots for MKR. In this process, keepers bid on how much MKR they are willing to pay for a fixed Dai amount. MKR received this way is burned. 

During surplus auctions, each bid has a lifetime determined by the `Bid Duration (Flap)` parameter or `ttl`. The auction will end either `Bid Duration (Flap)` after the latest bid OR when the Auction Duration (`tau`) has been reached. 


## Purpose
Changing the `Bid Duration (Flap)` parameter allows Maker Governance to maximize total MKR burned by ensuring sufficient competition among the keepers as well as minimizing the effects of MKR price volatility during auctions. 


## Trade-offs
Keepers have to effectively predict what the MKR-DAI price will be after a period of `Bid Duration (Flap)`.

A `Bid Duration (Flap)` that is small means that keepers can make more accurate predictions. Since the volatility in the price of MKR has a smaller effect, it encourages keepers to submit higher bids and this results in more MKR being burned. However, if the `Bid Duration (Flap)` is too small, there may not be enough time for keepers to organize funds and participate in such auctions. This could result in uncompetitive auctions with extreme cases where only one participant results in zero MKR bids.
	
A larger `Bid Duration (Flap)` gives keepers more time to participate in auctions, hopefully encouraging a higher number of bidders. If the `Bid Duration (Flap)` is too large, there may be bids for minimal amounts of MKR to safeguard against price volatility during the `Bid Duration (Flap)` period. Realistically priced bids would only appear when the auction end (determined by Auction Duration) is closer than the `Bid Duration (Flap)` period. In situations where the price of MKR is dropping, this would lead to less MKR being burned than with a smaller `Bid Duration (Flap)`.


## Changes
Adjusting the `Bid Duration (Flap)` parameter is a manual process that requires an executive vote. Changes to the `Bid Duration (Flap)` are subject to the GSM Pause Delay.

**Why increase this parameter?**

Maker Governance may wish to increase the `Bid Duration (Flap)` if too few keepers are participating in `flap` auctions to encourage greater participation.

**Why decrease this parameter?**

Maker Governance may wish to decrease the `Bid Duration (Flap)` if keepers are submitting low bids due to volatility in the price of MKR during the `Bid Duration (Flap)` period.



## Considerations
`Bid Duration (Flap)` is always upper bounded by the total auction duration. If it is set higher than the total auction duration, it will have no effect. 
