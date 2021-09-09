
# Min Bid Increase (Flap)

```
Alias: 
Parameter Name: beg
Containing Contract: Flap
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flap-detailed-documentation 
```

## Description
During surplus auctions, excess DAI within the system is auctioned off in fixed lots for MKR. In this system, new bids must exceed the previous highest bid by at least an amount determined by the `Min Bid Increase (Flap)` or `beg`.  The `Min Bid Increase (Flap)` is given in terms of a minimum percentage increase on the current bid.

For example, if the `Min Bid Increase (Flap)` is set to 5% and the current bid is 1 MKR for 1000 DAI, the next bid must be at least 1.05 MKR for 1000 DAI. 

MKR received through this process is subsequently burned. 

## Purpose
Changing the `Min Bid Increase (Flap)` parameter allows Maker Governance to strike a reasonable tradeoff between having worthwhile auctions for keepers, thereby ensuring sufficient keeper participation and efficiency for MakerDAO to maximize the amount of MKR burned.



## Trade-offs
The `Min Bid Increase (Flap)` represents the slippage MakerDAO is willing to accept during auctions to ensure sufficient keeper participation. 

A small `Min Bid Increase (Flap)` helps in optimizing the MKR burned as bids will be closer to the market value of MKR. However, if it is too low, it can result in low keeper participation. This is because the volatility in the price of MKR as and gas prices can be high enough that the only the most efficient bots win the auction. Insufficient keeper participation could lead to long-term losses such as zero MKR bids if only one keeper is participating in a specific auction. 

A large `Min Bid Increase (Flap)` ensures high keeper participation as there are more opportunities to profit from the slippage accepted by MakerDAO. It also limits the effects of price volatility of MKR or changes in gas prices on the winning bid. However, if the `Min Bid Increase (Flap)` is too large, it would result in less MKR being burned as a profitable but slightly higher MKR bid than the current bid is prevented.




## Changes
Adjusting the `Min Bid Increase (Flap)` parameter is a manual process that requires an executive vote. Changes to the `Min Bid Increase (Flap)` are subject to the GSM Pause Delay.

**Why increase this parameter?**
This parameter should be increased to increase keeper participation in the auctions.


**Why decrease this parameter?**
This parameter should be decreased to increase auction efficiency i.e. winning bid price vs. market price of MKR.



## Considerations
One risk is "front-running" or malicious miners. They may replace an honest keeper's bid with an equivalent bid of their own, forcing honest keepers to increase their MKR bid amount by two `Min Bid Increase (Flap)` increments instead of just one. This could become especially important as the bid reaches the current market rate for MKR<->DAI.

A second consideration is that the gas cost to `kick` an auction is higher than the cost to bid. If the `Min Bid Increase (Flap)` is too low, auctions may not get kicked by anyone since there will be bots that bid only on kicked auctions.
