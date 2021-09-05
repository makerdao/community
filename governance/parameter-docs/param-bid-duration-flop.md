
# Bid Duration (Flop)

```
Alias: 
Parameter Name: ttl
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, keepers bid on how little MKR they are willing to accept for the fixed Dai amount they have to pay at auction settlement. During debt auctions, each bid has a lifetime determined by the Bid Duration (Flop) parameter or `ttl`. The auction will end `ttl` after the latest bid OR when the auction duration (`tau`) has been reached. 


## Purpose
Changing the `ttl` parameter allows Maker Governance to minimize total MKR minted by ensuring that there is sufficient competition among the keepers as well as minimizing the effects of MKR price volatility during auctions. 


## Trade-offs
Keepers have to effectively make a prediction on what the MKR-DAI price will be after a period of `ttl`. 

The `ttl` allows Governance to minimize the amount of MKR minted in two ways. The first is that a small `ttl` means that keepers must account for less volatility and can hence submit lower MKR bids. The other is that a large `ttl` ensures more participation in the auctions, thereby resulting in more competitive bids.

There is a danger that if the `ttl` is too small, then there may not be enough time for other keepers to organize funds and participate in such auctions. This could result in uncompetitive auctions with extreme cases where there is only one participant resulting in arbitrarily high amounts of MKR minted. There is also a danger that if the `ttl` is too large, then realistically priced bids would only appear when the auction end (determined by `tau`) is closer than the `ttl` end. In situations where the price of MKR is dropping, this would lead to more MKR being minted than with a smaller `ttl`.


## Changes
Adjusting the `ttl` parameter is a manual process that requires an executive vote. Changes to the `beg` are subject to the GSM Pause Delay.

**Why increase this parameter?**
A `ttl` that is larger gives more time for other keepers to organize funds and participate in such auctions making the auctions more competitive by virtue of a larger number of participants.


**Why decrease this parameter?**
A `ttl` that is smaller means that keepers can make more accurate predictions resulting in lower amounts of MKR being minted since the volatility in the price of MKR has a smaller effect thereby allowing keepers to submit lower bids. 



## Considerations
`ttl` is always upper bounded by `tau` the total auction duration. 
