# Liquidation Penalty

```
Alias: Liquidation Penalty
Parameter Name: chop
Containing Contract: Dog
Scope: Vault Type (Ilk)
Technical Docs:
```

## Description

The Liquidation Penalty parameter controls the fee vault owners must pay when their position is liquidated due to insufficient collateral. For a vault holder to receive any collateral back from the liquidations process, the debt and Liquidation Penalty must be covered by the collateral auction.

Each vault type has its own Liquidation Penalty that can be adjusted by Maker Governance. Note that the Liquidation Penalty applies collectively to all vaults created using a specific vault type, rather than to individual vaults.

The Liquidation Penalty is expressed as a percentage of collateral rather than a fixed amount. For example, if a debt of 100 DAI is liquidated on a vault type with a 13% Liquidation Penalty then an auction will be triggered with the goal of recovering at least 113 DAI using the collateral in the liquidated vault.

## Purpose

Generally, the Liquidation Penalty may be thought of as a fee to incentivize proper collateralization for vault owners. As a risk parameter, its primary function is to ensure the system does not accumulate unbacked DAI. The Liquidation Penalty gives vault users an added incentive to keep their positions over-collateralized while providing the system additional revenue to mitigate potential losses due to liquidations. The Liquidation Penalty also plays an important role acting as a deterrent against liquidation-related attacks by adding some friction to the liquidation process.

## Trade-offs

The larger the Liquidation Penalty is, the more vault users are incentivized to keep their position safely funded. Having more heavily collateralized positions makes the DAI ecosystem safer.

However, larger Liquidation Penalties increase risk to vault users. As a result, the cost of borrowing through MakerDAO may be too great or users may choose to leave their vaults more heavily collateralized. This would reduce the attractiveness of the Maker Protocol in comparison to competitors and may reduce DAI generation.

The higher the Liquidation Penalty, the less likely it is that a vault user will have collateral left over after a liquidation event. While appropriate to incentivize proper vault maintenance, the Liquidation Penalty can cause a risk to the system when set too low, and discourage DAI generation if set too high.

## Changes

Adjusting the Liquidation Penalty parameter is a manual process that requires an executive vote. Changes to the Liquidation Penalty are subject to the GSM Pause Delay.

**Why increase a Liquidation Penalty Parameter?**

Increasing the Liquidation Penalty should result in more revenue for the system during liquidation events. While there are fiscal considerations tied to this parameter, the main reason to increase the Liquidation Penalty is due to the risk or perceived risk of a collateral type during liquidation. Collateral that is less desired or riskier to hold due to price fluctuation may lead to an increase in the Liquidation Penalty to account for potential losses due to inefficient auctions.

When increasing this parameter care should be given to PR and communication. Vault users that are unaware of a increase may feel victimized if they are then liquidated and lose more collateral than they expected.

**Why decrease a Liquidation Penalty Parameter?**

Decreasing the Liquidation Penalty should result in less system revenue during liquidation events while increasing the chances that vault owners receive collateral back after liquidation. While there may be business reasons to decrease this parameter, the main reason to decrease the Liquidation Penalty would be confidence in the auction system. Decreasing the Liquidation Penalty ultimately decreases the expected cost of maintaining a vault position, leading to more incentive for DAI creation.

## Considerations

As this parameter directly affects the risk of vault holders and the system, changes to the Liquidation Penalty parameter should always be done with great care.

The Liquidation Penalty should always be higher than the sum of liquidation rewards (`tip` and `chip`) so as to prevent the farming of incentives, a practice whereby an attacker purposely liquidates their own vaults in order to reap the liquidation rewards.

Particularly important to vault holders is the notion that the Liquidation Penalty represents the minimum loss during a liquidation event, not the maximum. As vault holders will only receive collateral back in excess of the debt liquidated and the Liquidation Penalty, there is no guarantee the auction of collateral will be enough to cover both.

During an Emergency Shutdown, no new collateral auctions may be started. All auctions underway during an emergency shutdown will be subject to the Liquidation Penalty parameter with no special considerations. 
