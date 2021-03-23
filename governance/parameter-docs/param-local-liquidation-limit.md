# Local Liquidation Limit

```
Alias: Local Liquidation Limit
Parameter Name: Hole
Containing Contract: Dog
Scope: System
Technical Docs:
```

## Description

The Local Liquidation Limit sets the maximum amount of debt (plus liquidation penalties) that can be up for auction within a particular vault type (`ilk`) at any one time. When the amount of unsafe debt exceeds this maximum for a particular `ilk`, no new auctions from that `ilk` can begin until others are completed. 

## Purpose

Much like the Global Liquidation Limit, the Local Liquidation Limit parameter exists to prevent an excess of a particular collateral type from overwhelming Maker Keepers or the broader market. While the implementation of Liquidations 2.0 settles many concerns about Keeper Liquidity, the collateral purchased at auction still has to be sold off (or swapped) in the broader market. In the case of a collateral that has multiple vault types, the Local Liquidation Limit helps prevent riskier vault types from accelerating a market selloff that would cascade to other vault types supporting the collateral in question. 

## Trade-offs

While the Local Liquidation Limit provides an added measure of safety for individual vault types, setting an appropriate limit is quite difficult. If this parameter is set too high, a major collateral decline or exploit within a particular vault could quickly result in an unacceptable level of bad debt within the system. With that said, if the parameter is set too low a sharp decline in a particular collateral could result in a backlog of unsafe positions that require liquidation. If the collateral value continues to decline in this situation, the protocol could again be met with an unacceptable level of bad debt within the system.
## Changes

Adjusting the Local Liquidation Limit parameters is a manual process that requires an executive vote. Changes to the Local Liquidation Limits are subject to the GSM Pause Delay.

**Why increase this parameter?**

The primary reason to increase a Local Liquidation Limit would be confidence in a vault type's risk configuration combined with plenty of market liquidity for the underlying collateral. Provided there is enough liquidity, the community may wish to raise the Local Liquidation Limit to prevent a situation where the protocol is not able to auction off unsafe positions quickly enough.

**Why decrease this parameter?**

Conversely, the primary reason to decrease the Local Liquidation Limit is a concern for the liquidity of an underlying collateral type or the other risk parameters of a vault type. If there are concerns about the liquidity of Maker Keepers or the broader market to absorb the large sell orders prompted by liquidations, one response may be to lower the Local Liquidation Limit for the collateral's available vaults in order to prevent liquidation auctions from flooding the broader market.

## Considerations

While the Liquidations 2.0 system allows the Local Liquidation Limits to be set at a higher level than Liquidations 1.2 (the Dutch Auction format allows for instant settlement, enabling the use of Flash Loans by Maker Keepers), the risk of setting the parameter too high does not fade away. In addition to concerns noted above, having a Local Liquidation Limit that is too high during a time of major volatility for a major vault type could create such a demand for DAI that the peg breaks high, causing further issues with users attempting to avoid liquidation. 

The main risk of setting Local Liquidation Limit parameters too low is that a backlog of undercollateralized positions could build-up, leading to the accrual of bad debt that is above market rates by the time it goes to auction. This scenario gets more dangerous to the protocol the longer it occurs, meaning that setting a Local Liquidation Limit too low would be most dangerous in a prolonged decline of a major collateral type.

During an Emergency Shutdown, no new collateral auctions may be started. All auctions underway during an emergency shutdown would have been subject to the Local Liquidation Limit parameters with no special considerations.
