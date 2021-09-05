
# Min Bid Decrease (Flop)

```
Alias: 
Parameter Name: beg
Containing Contract: Flop
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation 
```

## Description
Debt Auctions are used to recapitalize the system by minting and auctioning off MKR for a fixed amount of DAI. In this process, keepers bid on how little MKR they are willing to accept for the fixed Dai amount they have to pay at auction settlement. During debt auctions, new MKR bids must be lower than the current MKR bid by at least an amount determined by the Min Bid Decrease (Flop) or `beg`.  The `beg` is given in terms of a minimum percentage decrease on the current bid.

For example, if the `beg` is set to 5% and the current bid is 10 MKR for 1000 DAI, the next bid must be at most 9.5 MKR for 1000 DAI.

## Purpose
Changing the `beg` parameter allows Maker Governance to strike a reasonable tradeoff between having worthwhile auctions for keepers, thereby ensuring sufficient keeper participation and efficiency for MakerDAO to minimize the amount of MKR minted.


## Trade-offs
The `beg` represents the slippage MakerDAO is willing to accept during auctions to ensure sufficient keeper participation. 

The `beg` parameter allows Governance to minimize the amount of MKR minted by ensuring sufficiently high keeper participation and hence competitive auctions. It also allows Governance to ensure that auctions are efficient i.e. the winning auction bid is close to the market value of MKR. 

A `beg` that is too low can result in low keeper participation. This is because the volatility in the price of MKR as and gas prices can be high enough that the next bid, despite being a smaller MKR amount, is still more profitable than the current bid. Even though this would result in less MKR minted for a specific auction, it makes the auction process inaccessible to all but the most efficient bots. Insufficient keeper participation could lead to long-term losses such as arbitrarily high MKR bids if only one keeper is participating in a specific auction. On the other hand, if the `beg` is too large, it would result in more MKR being minted as a profitable but slightly lower MKR bid than the current bid is not allowed.





## Changes
Adjusting the `beg` parameter is a manual process that requires an executive vote. Changes to the `beg` are subject to the GSM Pause Delay.

**Why increase this parameter?**
This parameter should be increased to increase keeper participation in the auctions.


**Why decrease this parameter?**
This parameter should be decreased to increase auction efficiency i.e. winning bid price vs. market price of MKR.



## Considerations
One risk is "front-running" or malicious miners. They may replace an honest keeper's bid with an equivalent bid of their own, forcing honest keepers to decrease their MKR bid amount by two `beg` decrements instead of just one. This could become especially important as the bid reaches the current market rate for MKR<->DAI.

A second consideration is that the gas cost to `kick` an auction is higher than the cost to bid. If the `beg` is too low, auctions may not get kicked by anyone since there will be bots that bid only on kicked auctions.

