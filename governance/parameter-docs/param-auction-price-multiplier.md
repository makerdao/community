# Auction Price Multiplier

```
Alias:
Parameter Name: buf
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Auction Price Multiplier parameter is a multiplier that is applied to the starting price of a collateral auction. 

Each vault type has its own Auction Price Multiplier that can be adjusted by Maker Governance separately. This multiplier is intended to be greater than 1.0x because Liquidations 2.0 uses falling price auctions. This means that it is generally preferable for the auction price to begin above the market price, and then fall to the correct value over some amount of time.

If a user is liquidated and the OSM (Oracle Security Module) price is $100 and the Auction Price Multiplier is set to 1.6x, the starting auction price would be $160.

## Purpose

The primary purpose of the Auction Price Multiplier is so that when falling price collateral auctions begin the Maker Protocol does not begin the auction lower than the current market price in the general case. An ideal outcome for the Maker Protocol is for collateral auctions to start slightly above the market price and then fall to the market price as quickly as possible.

## Trade-offs

In a situation where a drop in collateral prices triggers liquidations but is swiftly followed by an increase in collateral prices, the Protocol runs the risk of starting an auction at a lower price than the market price. This is bad for the vault holder because the collateral will be sold at a discount. If this discount exceeds the liquidation penalty, this can also be bad for the Maker Protocol. An Auction Price Multiplier greater than 1.0x reduces the likelihood of this situation, as the starting auction price is artificially increased.

The advantage of the Auction Price Multiplier greater than 1.0x is best illustrated with an example. 

Imagine that ETH drops from $1000 to $800 and liquidations are triggered for multiple vaults. Due to the OSM (Oracle Security Module), these liquidations are delayed by one hour. In that one hour, the ETH price then increases to $900. 
* With an Auction Price Multiplier of 1.0x, the collateral would be sold instantly for $800, $100 below the market price. 
* With an Auction Price Multiplier of 1.2x, the auction would start at $960 and a short time later would drop to $900 and close just below the market price.

However, the downside to a higher Auction Price Multiplier is that in a situation where the market price of a collateral type *continues* to drop, the falling price auction may never reach the market price before it expires. In this situation sale of the collateral is delayed and the result is an overall worse price than if the Auction Price Multiplier had been lower.

This negative effect of the Auction Price Multiplier can be mitigated by setting an Auction Price Function that compliments the multiplier. For example by setting a higher Auction Price Multiplier in combination with an exponentially decreasing Auction Price Function. For more details on the Auction Price Function, see the appropriate documentation.

## Changes

Adjusting an Auction Price Multiplier parameter for a specific vault type is a manual process that requires an executive vote. Changes to Auction Price Multiplier parameters are subject to the GSM Pause Delay.

**Why increase this parameter?**

An Auction Price Multiplier parameter might be increased for a specific vault type if in the general case auctions were starting at prices below the market price.

**Why decrease this parameter?**

An Auction Price Multiplier parameter might be decreased for a specific vault type if in the general case auctions were being regularly reset due to the price reaching the Max Auction Drawdown price.

## Considerations

The Starting Price for an auction is calculated using the OSM (Oracle Security Module) price feed multiplied by the Auction Price Multiplier.
