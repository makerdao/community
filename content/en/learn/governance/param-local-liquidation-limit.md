# Local Liquidation Limit

```
Alias: Local Liquidation Limit
Parameter Name: hole
Containing Contract: Dog
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Local Liquidation Limit sets the maximum amount of DAI debt for which collateral auctions can be active at any one time within a particular vault type (`ilk`). When the total DAI value of auctions exceeds this maximum for a particular vault type, no more collateral can be auctioned using that vault type until others are completed.

Each vault type has a separate Local Liquidation Limit. If auctions from ETH-A liquidations fill the ETH-A Local Liquidation Limit, no further auctions can be triggered on the ETH-A vault, but liquidations on the WBTC-A vault could still go to auction.

## Purpose

Much like the Global Liquidation Limit, the Local Liquidation Limit parameter exists to prevent an excess of a particular collateral type from overwhelming Maker Keepers or the broader market. While the implementation of Liquidations 2.0 settles many concerns about Keeper Liquidity, the collateral purchased at auction still has to be sold in the broader market. 

In the case of a collateral that has multiple vault types, the Local Liquidation Limit helps prevent riskier vault types from accelerating a market selloff that could trigger cascading liquidations in other vault types sharing the same collateral asset. 

## Trade-offs

While the Local Liquidation Limit provides an added measure of safety for individual vault types, setting an appropriate limit is quite difficult. If this parameter is set too high, a major collateral decline or exploit within a particular vault could quickly result in an unacceptable level of bad debt within the system. 

The main risk of setting the Global Liquidation Limit parameter too low is that a backlog of undercollateralized positions could build-up, leading to the accrual of bad debt that is above market rates by the time it goes to auction. This scenario becomes more dangerous to the protocol the longer it occurs (such as in a prolonged decline in multiple collateral assets.)


## Changes

Adjusting Local Liquidation Limit parameters is a manual process that requires an executive vote. Changes to the Local Liquidation Limits are subject to the GSM Pause Delay.

**Why increase this parameter?**

The primary reason to increase a Local Liquidation Limit would be confidence in a vault type's risk configuration combined with plenty of market liquidity for the underlying collateral asset. Provided there is enough liquidity, the community may wish to raise the Local Liquidation Limit to prevent a situation where the protocol is not able to auction off unsafe positions quickly enough.

**Why decrease this parameter?**

Conversely, the primary reason to decrease the Local Liquidation Limit is a concern for the liquidity of an underlying collateral type or the other risk parameters of a vault type. If there are concerns about the liquidity of Maker Keepers or the broader market to absorb the large sell orders prompted by liquidations, one response may be to lower the Local Liquidation Limit for vault types backed by collateral assets that have less market liquidity.

## Considerations

The Liquidations 2.0 system allows the Local Liquidation Limit to be set at a higher level than the `box` in Liquidations 1.2 because the Dutch Auction format allows for instant settlement, enabling the use of Flash Loans by Maker Keepers. However, because auctions can have near-instant settlement, the Local Liquidation Limit does always act as a rate-limit on collateral auctions.

During an Emergency Shutdown, no new collateral auctions may be started. All auctions underway during an emergency shutdown would have been subject to the Local Liquidation Limit parameters with no special considerations.
