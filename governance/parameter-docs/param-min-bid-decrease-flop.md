
# Min Bid Decrease (Flop)

```
Alias: 
Parameter Name: beg
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, keepers bid on how little MKR they are willing to accept for the fixed Dai amount they have to pay at auction settlement. 

During debt auctions, new MKR bids must be lower than the current MKR bid by at least an amount determined by the `Min Bid Decrease (Flop)` or `beg`.  The `Min Bid Decrease (Flop)`  is given in terms of a minimum percentage decrease on the current bid.

For example, if the `Min Bid Decrease (Flop)` is set to 5% and the current bid is 10 MKR for 1000 DAI, the next bid must be at most 9.5 MKR for 1000 DAI.

## Purpose
Changing the `Min Bid Decrease (Flop)` parameter allows Maker Governance to strike a reasonable tradeoff between having worthwhile auctions for keepers and efficient auctions. 


## Trade-offs
The `Min Bid Decrease (Flop)` represents the slippage MakerDAO is willing to accept during auctions to ensure sufficient keeper participation. 

A small `Min Bid Decrease (Flop)` helps in optimizing the MKR minted as bids will be closer to the market value of MKR. However, if it is too low, it can result in low keeper participation. This is because the volatility in the price of MKR and gas prices can be high enough that only the most efficient bots win the auction. Insufficient keeper participation could lead to long-term losses such as arbitrarily high MKR bids if only one keeper is participating in a specific auction. 

A large `Min Bid Decrease (Flop)` ensures high keeper participation as there are more opportunities to profit from the slippage accepted by MakerDAO. It also limits the effects of price volatility of MKR or changes in gas prices on the winning bid. However, if the `Min Bid Decrease (Flop)` is too large, it would result in more MKR being minted as bids cannot be fine tuned by an amount smaller than the `Min Bid Decrease (Flop)`.




## Changes
Adjusting the `Min Bid Decrease (Flop)` parameter is a manual process that requires an executive vote. Changes to the `Min Bid Decrease (Flop)` are subject to the GSM Pause Delay.

**Why increase this parameter?**
This parameter should be increased to increase keeper participation in the auctions.


**Why decrease this parameter?**
This parameter should be decreased to increase auction efficiency i.e. winning bid price vs. market price of MKR.



## Considerations
One risk is "front-running" or malicious miners who may replace an honest keeper's bid with an equivalent bid of their own. This would force honest keepers to decrease their MKR bid amount by two `Min Bid Decrease (Flop)` decrements instead of just one. This could become especially important as the bid reaches the current market rate for MKR<->DAI.

A second consideration is that the gas cost to `kick` an auction is higher than the cost to bid. If the `Min Bid Decrease (Flop)` is too low, auctions may not get kicked by anyone since there will be bots that bid only on kicked auctions.

