# Breaker Price Tolerance

```
Alias: Breaker Price Tolerance
Parameter Name: tolerance
Containing Contract: ClipperMom
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Breaker Price Tolerance parameter is a tool for mitigating the risk of a major move in the next OSM price for a particular vault type. The Breaker Price Tolerance is expressed as a number between zero and one. Practically, this parameter allows anyone to trigger a circuit breaker that halts new liquidation auctions if the following equation is true:

```
next_oracle_price < current_oracle_price * breaker_price_tolerance
```

The right side of the equation represents the minimum acceptable price for the next OSM reading. Any price below that product could result in the breaker being called for affected vault types. 

It may be easier to understand this parameter in terms of the maximum percentage drop allowed:

```
(1 - (breaker_price tolerance)) * 100 = Maximum Percentage Drop
```

If Governance feels the protocol should be protected from a 40% drop in a particular vault type, then the appropriate setting for the Breaker Price Tolerance parameter is 0.6.

In the above example, anything past a 40% decline from the current OSM price could result in the circuit breaker being called.

## Purpose

The Breaker Price Tolerance is designed to protect against a sharp decline in the OSM price feed. Liquidations 2.0 increases the severity of attacks on the OSM price feed because of the switch to falling price auctions. Because auctions now start at their highest price point and move downward - catastrophic losses may occur if the auction were to start significantly below market rates. 

While this parameter is designed to combat an Oracle attack, it also offers a further safety net during a legitimate market downturn.


## Trade-offs

Like many parameters, Governance should avoid setting the Breaker Price Tolerance too far in either extreme. 

If set too high this parameter becomes too sensitive, risking breaker shut-offs during normal market movements and adding a risk of collateral continuing to fall while liquidations are prematurely paused. This may result in significant bad debt for the Maker Protocol.

Conversely, setting the Breaker Price Tolerance too low is similar to not having one in the first place. Because the starting price for each auction is based on the OSM price, bad debt can accrue quickly if there is a sharp decline in the OSM price feed combined with a Breaker Price Tolerance that is set too low. 

## Changes

Adjusting the Breaker Price Tolerance parameter is a manual process that requires an executive vote. Changes to the Breaker Price Tolerance are subject to the GSM Pause Delay.

**Why increase this parameter?**

The Breaker Price Tolerance parameter should be increased when Governance wants to limit the percentage drop of a particular asset before the breaker can be called. That at its most extreme (setting this parameter to 1.0), any price drop would enable the calling of the circuit breaker. The closer the Breaker Price Tolerance parameter is set to one, the more likely it is that the breaker can be called.

**Why decrease this parameter?**

If Governance wishes to allow for more price volatility from a particular vault type, a decrease in the Breaker Price Tolerance parameter can be pursued. As the Breaker Price Tolerance parameter approaches zero, the underlying collateral would need to experience almost a 100% drawdown before liquidations can be halted. 

## Considerations

Re-enabling liquidation auctions on a vault type after the breaker has been triggered requires an executive vote. Importantly though, re-enabling liquidation auctions *does not* require governance to wait for the GSM Pause Delay.

During an Emergency Shutdown, the Breaker Price Tolerance parameter is not relevant as no new auctions may be triggered.