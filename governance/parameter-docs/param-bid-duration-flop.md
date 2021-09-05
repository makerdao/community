
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

A `ttl` that is small means that keepers can make more accurate predictions resulting in lower amounts of MKR being minted since the volatility in the price of MKR has a smaller effect thereby allowing keepers to submit lower bids. 

However, if the `ttl` is too small, then there may not be enough time for other keepers to organize funds and participate in such auctions. This could result in uncompetitive auctions with extreme cases where there is only one participant resulting in arbitrarily high amounts of MKR minted.


If the `ttl` is too large, then there may be bids for very large amounts of MKR to safeguard against price volatility during the `ttl` period. Realistically priced bids would only appear when the auction end (determined by `tau`) is closer than the `ttl` end. In situations where the price of MKR is dropping, this would lead to more MKR being minted than with a smaller `ttl`.


## Changes
Adjusting the `ttl` parameter is a manual process that requires an executive vote. Changes to the `beg` are subject to the GSM Pause Delay.

The efficiency of the auction process is a key indicator used by Governance to determine whether to lower or raise the `ttl`. If keeper participation is high, then the `ttl` can be decreased and vice versa. 

Another more subtle indicator is to see if realistic bids only appear towards the end of the auction (determined by `tau`) during periods of volatility. This indicates that the `ttl` is too long.

## Considerations
`ttl` is always upper bounded by `tau` the total auction duration. 
