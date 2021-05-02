# Global Liquidation Limit

```
Alias: Global Liquidation Limit
Parameter Name: Hole
Containing Contract: Dog
Scope: System
Technical Docs:
```

## Description

The Global Liquidation Limit sets the maximum amount of DAI debt for which collateral auctions can be active at any one time. When the total DAI value of auctions exceeds this maximum, no new auctions can begin until others are completed. 

The Global Liquidation Limit holds across all vault types. If auctions from ETH-A liquidations fill the Global Liquidation Limit, no further auctions can be triggered on the ETH-A vault or the WBTC-A vault.

## Purpose

The purpose of the Global Liquidation Limit is to prevent the amount of collateral up for auction from exceeding what the market can handle and incurring unacceptable slippage. While the implementation of Liquidations 2.0 settles many concerns about Keeper liquidity, the collateral purchased at auction still has to be sold off in the broader market. 

The Global Liquidation Limit also performs an important role during a malicious attack on the protocol, preventing a large percentage of collateral from being moved into auctions at one time.

## Trade-offs

While the Global Liquidation Limit provides some safety for the system, setting an appropriate limit may be difficult. If this parameter is set too high, the wider market may be overwhelmed and the collateral auctions may incurr more slippage than is desireable. 

In addition to concerns noted above, having a Global Liquidation Limit that is too high during a time of major volatility could create such a demand for DAI that the peg breaks high, causing further issues with users attempting to avoid liquidation. 

The main risk of setting the Global Liquidation Limit parameter too low is that a backlog of undercollateralized positions could build-up, leading to the accrual of bad debt that is above market rates by the time it goes to auction. This scenario gets more dangerous to the protocol the longer it occurs (such as in a prolonged decline in multiple collateral assets.)

## Changes

Adjusting the Global Liquidation Limit parameter is a manual process that requires an executive vote. Changes to the Global Liquidation Limit are subject to the GSM Pause Delay.

**Why increase this parameter?**

The primary reason to increase the Global Liquidation Limit would be confidence in the underlying collateral auction system and the DAI liquidity available in the market. If the broader market has strong cross-collateral liquidity and DAI liquidity, an increase to the Global Liquidation Limit could allow for unsafe positions to be liquidated more quickly and help protect the protocol during steep market declines.

**Why decrease this parameter?**

Conversely, the primary reason to decrease the Global Liquidation Limit is a concern for the underlying collateral auction system. If there are concerns about the liquidity accessible to Keepers or the broader market's ability to absorb large sell orders without significant slippage, then lowering the Global Liquidation Limit may be advisable.

## Considerations

The Liquidations 2.0 system allows the Global Liquidation Limit to be set at a higher level than Liquidations 1.2 because the Dutch Auction format allows for instant settlement, enabling the use of Flash Loans by Maker Keepers. However, because auctions can have near-instant settlement, the Global Liquidiation Limit no longer acts as a rate-limit on auctions as it did in Liquidations 1.2.

During an Emergency Shutdown, no new collateral auctions may be started. All auctions underway during an emergency shutdown would have been subject to the Global Liquidation Limit parameter with no special considerations.
