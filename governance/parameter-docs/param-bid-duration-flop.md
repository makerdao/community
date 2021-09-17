
# Bid Duration (Flop)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, keepers bid on how little MKR they are willing to accept for the fixed Dai amount they have to pay at auction settlement. During debt auctions, each bid has a lifetime determined by the `Bid Duration (Flop)` parameter or `ttl`. The auction will end `Bid Duration (Flop)` after the latest bid OR when the Auction Duration (`tau`) has been reached. 


## Purpose
Changing the `Bid Duration (Flop)` parameter allows Maker Governance to minimize the total MKR minted by ensuring sufficient competition among the keepers as well as minimizing the effects of MKR price volatility during auctions. 


## Trade-offs
Keepers have to effectively predict what the MKR-DAI price will be after a period of `Bid Duration (Flop)`.

A `Bid Duration (Flop)` that is small means that keepers can make more accurate predictions. Since the volatility in the price of MKR has a smaller effect, it encourages keepers to submit lower bids and this results in less MKR being minted. However, if the `Bid Duration (Flop)` is too small, there may not be enough time for keepers to organize funds and participate in such auctions. This could result in uncompetitive auctions with extreme cases where only one participant results in arbitrarily high MKR bids.
	
A larger `Bid Duration (Flop)` gives keepers more time to participate in auctions, hopefully encouraging a higher number of bidders. If the `Bid Duration (Flop)` is too large, there may be bids for very high amounts of MKR to safeguard against price volatility during the `Bid Duration (Flop)` period. Realistically priced bids would only appear when the auction end (determined by Auction Duration) is closer than the `Bid Duration (Flop)` period. In situations where the price of MKR is dropping, this would lead to more MKR being minted than with a smaller `Bid Duration (Flop)`.


## Changes
Adjusting the `Bid Duration (Flop)` parameter is a manual process that requires an executive vote. Changes to the `Bid Duration (Flop)` are subject to the GSM Pause Delay.

**Why increase this parameter?**
Maker Governance may wish to increase the `Bid Duration (Flop)` if too few keepers are participating in `flop` auctions to encourage greater participation.

**Why decrease this parameter?**
Maker Governance may wish to decrease the `Bid Duration (Flop)` if keepers are submitting high bids due to volatility in the price of MKR during the `Bid Duration (Flop)` period.



## Considerations
`Bid Duration (Flop)` is always upper bounded by the total auction duration. If it is set higher than the total auction duration, it will have no effect. 

