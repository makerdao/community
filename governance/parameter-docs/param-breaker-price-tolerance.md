# Breaker Price Tolerance

```
Alias: Breaker Price Tolerance
Parameter Name: tolerance
Containing Contract: ClipperMom
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Breaker Price Tolerance parameter is a tool for mitigating the risk of a major move in the next OSM price for a particular vault type. The Breaker Price Tolerace is expressed as a number between zero and one. Practially, this parameter allows anyone to call a circut breaker that halts new auctions if the following equation is true:

```
(next_oracle_price) < (current_oracle_price) * (breaker_price_tolerance)
```

Becasue the process for calling the breaker is manual, the right side of the equation equals the minimum viable price for the next OSM reading. Any price below that product could result in the breaker being called for affected vault types. Additionally, becasue the above equation looks at the next OSM price as a function of the current OSM price and the Breaker Price Tolerance parameter must be between zero and one, we also know the following to be true:

```
(1 - (breaker_price tolerance) * 100 = Percentage drop to minimum viable price
```

Thus, if Governance felt the protocol should be protected from a 40% drop in a particular vault type, then the appropriate setting for the Breaker Price Tolerance is .6 because:

`(1 - 0.6) *100 = 40`

In the above example, anything past a 40% decline from the current OSM price could result in the circut breaker being called.

## Purpose
* Why does this parameter exist?

## Trade-offs
* What dangers does this parameter represent?
* What advantages does this parameter represent?

## Changes
* How are changes to this parameter made?

**Why increase this parameter?**

**Why decrease this parameter?**

## Considerations
* Is there anything little known about this parameter?
* How does this interact with other parts of the protocol?
* Are there any Emergency Shutdown considerations to take into account?
