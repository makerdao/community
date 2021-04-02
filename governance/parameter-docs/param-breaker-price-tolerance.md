Breaker Price Tolerance
Alias: Breaker Price Tolerance
Parameter Name: tolerance
Containing Contract: ClipperMom
Scope: Vault Type (Ilk)
Technical Docs:
Description
The Breaker Price Tolerance parameter is a tool for mitigating the risk of a major move in the next OSM price for a # Breaker Price Tolerance

```
Alias: Breaker Price Tolerance
Parameter Name: tolerance
Containing Contract: ClipperMom
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Breaker Price Tolerance parameter is a tool for mitigating the risk of a major move in the next OSM price for a particular vault type. The Breaker Price Tolerance is expressed as a number between zero and one. Practically, this parameter allows anyone to call a circuit breaker that halts new auctions if the following equation is true:

```
(next_oracle_price) < (current_oracle_price) * (breaker_price_tolerance)
```

Because the process for calling the breaker is manual, the right side of the equation equals the minimum viable price for the next OSM reading. Any price below that product could result in the breaker being called for affected vault types. Additionally, because the above equation looks at the next OSM price as a function of the current OSM price and the Breaker Price Tolerance parameter must be between zero and one, we also know the following to be true:

```
(1 - (breaker_price tolerance)) * 100 = Percentage drop to the minimum viable price
```

Thus, if Governance felt the protocol should be protected from a 40% drop in a particular vault type, then the appropriate setting for the Breaker Price Tolerance parameter is .6 because:

```
(1 - 0.6) *100 = 40`
```

In the above example, anything past a 40% decline from the current OSM price could result in the circuit breaker being called.

## Purpose

The Breaker Price Tolerance is designed to protect against a sharp decline in the OSM price feed. Liquidations 2.0 has a unique vulnerability with the OSM price feed because of the switch to Dutch Auctions. At the most basic level, since these auctions start at their highest price point and move downward as the auction continues, there could be catastrophic losses if the auction were to start below market rates. While this parameter is designed to combat an Oracle attack, it also offers a further safety net during a legitimate market downturn.


## Trade-offs

Like many parameters, Governance should avoid setting the Breaker Price Tolerance too far in either extreme. If set too high this parameter becomes too sensitive, risking breaker shut-offs during normal market movements and adding a specific risk of collateral continuing to fall while liquidations are prematurely paused. In this scenario, the beginning of a sell-off could trigger a breaker for a popular vault type and by the time liquidations are resumed the protocol could be staring at a bunch of bad, building debt that should have been liquidated at the start of the decline. Conversely, setting the Breaker Price Tolerance too low is similar to not having one in the first place. Because the starting price for each auction is based on the OSM price, bad debt can accrue quickly if there is a sharp decline in the OSM price feed combined with a Breaker Price Tolerance that is set too low. 

As volatile as many of the accepted collaterals accepted by the protocol are, it is worth noting that massive down days are pretty rare. Additionally, tripping a breaker is only problematic to the safety of the protocol when the underlying collateral continues to sell off in price. Even if a collateral type were to experience a 40% drop in a single day, leading to a circuit breaker, the problem would only compound if the asset continues dropping at a face pace.

## Changes

Adjusting the Breaker Price Tolerance parameter is a manual process that requires an executive vote. Changes to the Breaker Price Tolerance are subject to the GSM Pause Delay.

**Why increase this parameter?**

The Breaker Price Tolerance parameter should be increased when Governance wants to limit the percentage drop of a particular asset before the breaker can be called. Note that at its most extreme (setting this parameter to 1.0), any price drop would enable the calling of the circuit breaker. The closer the Breaker Price Tolerance parameter is set to one, the more likely it is that the breaker can be called.

**Why decrease this parameter?**

Alternatively, if Governance wishes to allow for more price volatility from a particular vault type, a decrease in the Breaker Price Tolerance parameter can be pursued. Decreasing this parameter allows for a greater percentage drop to occur before a vault type is eligible for a circuit breaker. Note that as the Breaker Price Tolerance parameter approaches zero, the underlying collateral would need to experience almost a 100% drawdown before being eligible for the circuit breaker. 

## Considerations

During an Emergency Shutdown, the Breaker Price Tolerance parameter is not relevant as no new auctions may begin to start with. While there are many ways to address the "starting price problem" with Dutch Auctions, this parameter is unique in that it does not rely on inflating the starting auction price as a safeguard. Additionally, the parameter allows for flexibility between different vault types, which is particularly helpful for collaterals like ETH with various Liquidation Ratios.
