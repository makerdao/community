# Liquidation Penalty

```
Alias: Liquidation Penalty
Parameter Name: chop
Containing Contract: Dog
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Liquidation Penalty parameter controls the fee vault owners must pay when their position is liquidated due to insufficient collateral. For a vault holder to receive any collateral back from the liquidations process, the Liquidation Penalty must be paid in full. The parameter may be changed for each vault type.

The Liquidation Penalty is expressed as a percentage of collateral rather than a fixed amount, so 13% rather than an amount of DAI.

## Purpose

Generally, the Liquidation Penalty may be thought of as a fee to incentivize proper collateralization for vault owners. As a risk parameter, its primary function is to ensure the system does not accumulate unbacked DAI. The Liquidation Penalty gives vault users an added incentive to keep their positions over-collateralized while providing the system additional revenue to combat liquidation costs. 

## Trade-offs

The larger the Liquidation Penalty is, the more vault users are incentivized to keep their position safely funded. Having more heavily collateralized positions makes the DAI ecosystem safer.

However, increases to the Liquidation Penalty pass on risk to vault owners. As a result, the cost of borrowing through MakerDAO may be too great, or users may choose to leave their vaults more heavily collateralized, leading to less DAI generation in the system.

Additionally, the higher the Liquidation Penalty, the less likely it is that a vault user will have collateral left over after a liquidation event. While appropriate to incentivize proper vault maintenance, the Liquidation Penalty can cause a risk to the system when set too low, and discourage DAI generation if set too high.

## Changes

Adjusting the Liquidation Penalty parameter is a manual process that requires an executive vote. Changes to the Liquidation Penalty are subject to the GSM Pause Delay.

**Why increase this parameter?**

Increasing the Liquidation Penalty should result in more revenue for the system during liquidation events. While there are fiscal considerations tied to this parameter, the main reason to increase the Liquidation Penalty is due to the risk or perceived risk of a collateral type during liquidation. Collateral that is less desired or riskier to hold due to price fluctuation may lead to an increase in the Liquidation Penalty to account for potential losses due to low auction participation.

**Why decrease this parameter?**

Decreasing the Liquidation Penalty should result in less system revenue during liquidation events while increasing the chances that vault owners receive collater back after liquidation. While there may be market reasons to decrease this parameter, the main reason to decrease the Liquidation Penalty would be confidence in the auction system. Decreasing the Liquidation Penalty ultimately decreases the expected cost of maintaining a vault position, leading to more incentive for DAI creation.

## Considerations

Adjusting the Liquidation Penalty parameter should always be done with great care. As this parameter directly affects the risk of vault holders and the system, changes in either direction could be met with negative consequences. 

Particularly important to vault holders is the notion that the Liquidation Penalty represents the minimum loss during a liquidation event, not the maximum. As vault holders will only receive collateral back in excess of the debt liquidated and the Liquidation Penalty, there is no guarantee the sale of the collateral will be enough to cover both.

During an Emergency Shutdown, no new collateral auctions may be started. All auctions underway during an emergency shutdown will be subject to the Liquidation Penalty parameter with no special considerations. 
