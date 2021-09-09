
# Bid Duration (Flop)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, keepers bid on how little MKR they are willing to accept for the fixed Dai amount they have to pay at auction settlement. During debt auctions, each bid has a lifetime determined by the `Bid Duration (Flop)` parameter or `ttl`. The auction will end `ttl` after the latest bid OR when the auction duration (`tau`) has been reached. 


## Purpose
Changing the `Bid Duration (Flop)` parameter allows Maker Governance to minimze total MKR minted by ensuring that there is sufficient competition among the keepers as well as minimizing the effects of MKR price volatility during auctions. 


## Trade-offs
Keepers have to effectively make a prediction on what the MKR-DAI price will be after a period of `Bid Duration (Flop)`. 

A small `Bid Duration (Flop)` can reduce the risk of MKR-DAI price volatility for keepers. Reduced volatility should encourage keepers to submit lower MKR bids. However, if it is set too low, keepers may not have time to participate in these auctions. In an extreme case, a single participant could theoretically bid arbitrarily high amounts of MKR and still win the auction.

A larger `Bid Duration (Flop)` gives keepers more time to participate in auctions, hopefully encouraging a higher number of bidders. However, there is also a danger that if the `Bid Duration (Flop)` is too large, then realistically priced bids would only appear when the auction end (determined by the auction duration parameter) is closer than the `Bid Duration (Flop)`. In situations where the price of MKR is dropping, this would lead to the Maker Protocol minting more MKR than when a smaller `Bid Duration (Flop)` is utilized.



## Changes
Adjusting the `Bid Duration (Flop)` parameter is a manual process that requires an executive vote. Changes to the `Bid Duration (Flop)` are subject to the GSM Pause Delay.

**Why increase this parameter?**
Maker Governance may wish to increase the `Bid Duration (Flop)` if too few keepers are participating in Flop auctions to encourage greater participation.

**Why decrease this parameter?**
Maker Governance may wish to increase the `Bid Duration (Flop)` if keepers are submitting low bids due to volatility in the price of MKR during the `Bid Duration (Flop)` period.



## Considerations
`Bid Duration (Flop)` is always upper bounded by the total auction duration. If it is set higher than the total auction duration, it will have no effect. 

