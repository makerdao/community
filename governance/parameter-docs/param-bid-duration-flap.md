
# Bid Duration (Flap)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flap
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flap-detailed-documentation 
```

## Description
During surplus auctions, excess DAI within the system is auctioned off in fixed lots for MKR. In this process, keepers bid on how much MKR they are willing to pay for a fixed Dai amount. Maker received this way is burned. 

During surplus auctions, each bid has a lifetime determined by the `Bid Duration (Flap)` parameter or `ttl`. The auction will end either `Bid Duration (Flap)` after the latest bid OR when the auction duration (`tau`) has been reached. 


## Purpose
Changing the `Bid Duration (Flap)` parameter allows Maker Governance to maximize total MKR burned by ensuring that there is sufficient competition among the keepers as well as minimizing the effects of MKR price volatility during auctions. 


## Trade-offs
Keepers have to effectively make a prediction on what the MKR-DAI price will be after a period of `Bid Duration (Flap)`. 

A small `Bid Duration (Flap)` can reduce the risk of MKR-DAI price volatility for keepers. Reduced volatility should encourage keepers to submit higher MKR bids. However, if it is set too low, keepers may not have time to participate in these auctions. In an extreme case, a single participant could theoretically bid 0 MKR and still win the auction.

A larger `Bid Duration (Flap)` gives keepers more time to participate in auctions, hopefully encouraging a higher number of bidders. However, there is also a danger that if the `Bid Duration (Flap)` is too large, then realistically priced bids would only appear when the auction end (determined by the auction duration parameter) is closer than the `Bid Duration (Flap)`. In situations where the price of MKR is dropping, this would lead to the Maker Protocol burning less MKR than when a smaller `Bid Duration (Flap)` is utilized.



## Changes
Adjusting the `Bid Duration (Flap)` parameter is a manual process that requires an executive vote. Changes to the `Bid Duration (Flap)` are subject to the GSM Pause Delay.

**Why increase this parameter?**
Maker Governance may wish to increase the `Bid Duration (Flap)` if too few keepers are participating in Flap auctions to encourage greater participation.

**Why decrease this parameter?**
Maker Governance may wish to increase the `Bid Duration (Flap)` if keepers are submitting high bids due to volatility in the price of MKR during the `Bid Duration (Flap)` period.



## Considerations
`Bid Duration (Flap)` is always upper bounded by the total auction duration. If it is set higher than the total auction duration, it will have no effect. 
