
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

During surplus auctions, each bid has a lifetime determined by the Bid Duration (Flap) parameter or `ttl`. The auction will end `ttl` after the latest bid OR when the auction duration (`tau`) has been reached. 


## Purpose
Changing the `ttl` parameter allows Maker Governance to maximize total MKR burned by ensuring that there is sufficient competition among the keepers as well as minimizing the effects of MKR price volatility during auctions. 


## Trade-offs
Keepers have to effectively make a prediction on what the MKR-DAI price will be after a period of `ttl`. 

The `ttl` allows Governance to maximize the amount of MKR burned in two ways. The first is that a small `ttl` means that keepers must account for less volatility and can hence submit higher MKR bids. The other is that a large `ttl` ensures more participation in the auctions, thereby resulting in more competitive bids.

There is a danger that if the `ttl` is too small, then there may not be enough time for other keepers to organize funds and participate in such auctions. This could result in uncompetitive auctions with extreme cases where there is only one participant resulting in zero MKR bids. There is also a danger that if the `ttl` is too large, then realistically priced bids would only appear when the auction end (determined by `tau`) is closer than the `ttl` end. In situations where the price of MKR is dropping, this would lead to less MKR being burned than with a smaller `ttl`.


## Changes
Adjusting the `ttl` parameter is a manual process that requires an executive vote. Changes to the `beg` are subject to the GSM Pause Delay.

**Why increase this parameter?**
A `ttl` that is larger gives more time for other keepers to organize funds and participate in such auctions making the auctions more competitive by virtue of a larger number of participants.


**Why decrease this parameter?**
A `ttl` that is smaller means that keepers can make more accurate predictions resulting in higher amounts of MKR being burned since the volatility in the price of MKR has a smaller effect thereby allowing keepers to submit lower bids. 



## Considerations
`ttl` is always upper bounded by `tau` the total auction duration. 
