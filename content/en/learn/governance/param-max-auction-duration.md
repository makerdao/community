# Max Auction Duration

```
Alias: Max Auction Duration
Parameter Name: tail
Containing Contract: Clipper
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Max Auction Duration parameter sets the maximum time that can elapse before an auction needs to reset for a particular vault type. Expressed in seconds, this parameter determines when an auction can no longer settle and must be reset. 

If the Max Auction Duration is set to 9,000 seconds for a given vault type, then any auction in the liquidations system for that vault type that has been running for more than 2.5 hours will not be able to settle and will need to be reset. 

The Max Auction Duration parameter overlaps with the Max Auction Drawdown parameter in that an auction will need to be reset once either maximum is exceeded.

## Purpose

The Max Auction Duration parameter exists to prevent auctions from continuing for longer than Maker Governance wishes. It is redundant with the Max Auction Drawdown parameter and allows Maker Governance to decide whether to set the maximum duration directly or implicitly via the Auction Price Curve and Maximum Auction Drawdown parameters.

The Max Auction Duration would need to be used if the Auction Price Function for a vault type was entirely flat (offering a fixed price redemption), which may be true when liquidating stablecoin collateral.

## Trade-offs

A large Max Auction Duration increases the amount of time that keepers have to bid in the auction before it needs to be reset. On the other hand, having a shorter duration means relying more heavily on the swift participation of keepers within collateral auctions. 

If auctions are too short there is a risk of liquidations not ending profitably before a reset is required. This may be negative depending on the settings for the Flat Kick Incentive and the Proportional Kick Incentive because at each reset these incentives are paid to keepers.

The trade-offs to this parameter are heavily tied to the Auction Price Function parameter, as the shape of the curve may heavily affect the desired auction length.

## Changes

Adjusting a Maximum Auction Duration parameter for a specific vault type is a manual process that requires an executive vote. Changes to Maximum Auction Drawdown parameters are subject to the GSM Pause Delay.

## Considerations

Auction resets can only take place when either the Max Auction Duration parameter or the Max Auction Drawdown parameter are exceeded. 

During an Emergency Shutdown, new auctions are halted, but the Three-Stage Liquidations Circut Breaker determines if ongoing auctions can be reset or not. If only one additional level of the circuit breaker is triggered the Max Auction Duration will still be used to check eligibility for auction reset, but under the most severe level of the Liquidations Circut breaker no resets can be performed, thus limiting the effectiveness of the parameter.
