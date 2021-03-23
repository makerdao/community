# Global Liquidation Limit

```
Alias: Global Liquidation Limit
Parameter Name: Hole
Containing Contract: Dog
Scope: System
Technical Docs:
```

## Description

The Global Liquidation Limit sets the maximum amount of debt (plus liquidation penalties) that can be up for auction at any one time. When the total amount of unsafe debt exceeds this maximum, no new auctions can begin until others are completed. 

## Purpose

The practical purpose of the Global Liquidation Limit is to prevent the amount of collateral up for auction from exceeding what the market can handle. While the implementation of Liquidations 2.0 settles many concerns about Keeper Liquidity, the collateral purchased at auction still has to be sold off (or swapped) in the broader market. The Global Liquidation Limit also performs an important role during a malicious attack on the protocol, preventing a large percentage of collateral from being moved into auctions at one time.

## Trade-offs

While the Global Liquidation Limit provides some safety for the system, setting an appropriate limit is quite difficult. If this parameter is set too high, the failure scenario is not much different than not having a Global Liquidation Limit in place. With that said, if the parameter is set too low a sharp decline in collateral markets could quickly turn into a failure scenario where unsafe debt is not sold off quick enough to keep DAI properly collateralized. 

## Changes

Adjusting the Global Liquidation Limit parameter is a manual process that requires an executive vote. Changes to the Global Liquidation Limit are subject to the GSM Pause Delay.

**Why increase this parameter?**

The primary reason to increase the Global Liquidation Limit would be confidence in the underlying collateral auction system. If Maker Keepers and the broader market have strong cross-collateral liquidity, an increase to the Global Liquidation Limit could allow for unsafe positions to be liquidated more quickly and help protect the protocol during steep market declines.

**Why decrease this parameter?**

Conversely, the primary reason to decrease the Global Liquidation Limit is a concern for the underlying collateral auction system. If there are concerns about the liquidity of Maker Keepers, or the broader market, to absorb the large sell orders prompted by liquidations, one response may be to lower the Global Liquidation Limit which would prevent too much collateral from being auctioned off at once.  

## Considerations

While the Liquidations 2.0 system allows the Global Liquidation Limit to be set at a higher level than Liquidations 1.2 (the Dutch Auction format allows for instant settlement, enabling the use of Flash Loans by Maker Keepers), the risk of setting the parameter too high does not fade away. In addition to concerns noted above, having a Global Liquidation Limit that is too high during a time of major volatility could create such a demand for DAI that the peg breaks high, causing further issues with users attempting to avoid liquidation. 

The main risk of setting the Global Liquidation Limit parameter too low is that a backlog of undercollateralized positions could build-up, leading to the accrual of bad debt that is above market rates by the time it goes to auction. This scenario gets more dangerous to the protocol the longer it occurs, meaning that setting the Global Liquidation Limit too low would be most dangerous in a prolonged decline of multiple collateral types.

During an Emergency Shutdown, no new collateral auctions may be started. All auctions underway during an emergency shutdown would have been subject to the Global Liquidation Limit parameter with no special considerations.
