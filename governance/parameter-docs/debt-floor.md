# Debt Floor

```
Alias: Dust, Minimum Debt
Parameter Name: dust
Containing Contract: Vat
Scope: Ilk
Technical Docs: https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation
```

## Description

The Debt Ceiling parameter controls the minimum amount of DAI that can be minted using a specific vault type for an individual vault. If a user tries to mint DAI and the amount of DAI minted would not put the vault's amount of DAI minted above its Debt Floor, the transaction will fail and no DAI will be minted. Likewise, if a user attempts to pay back debt such that their debt will equal less than the Debt Floor and greater than zero, the transaction will fail and no DAI will be paid back.

Each vault type has its own Debt Floor that can be adjusted by Maker Governance. Note that the Debt Floor applies to each vault created using a specific vault type, rather than to the vaults in aggregate. This differs from the Debt Ceiling.

The Debt Floor for each vault type is expressed in absolute terms.

## Purpose

The primary purpose of the Debt Floor is to prevent users from creating multiple vaults with very low debt amount and collateral. Keepers may be reluctant to liquidate smaller vaults because the reward is low in comparison to the gas costs of liquidation and bidding in the subsequent auction. This is a problem because the Maker Protocol relies on prompt liquidations to prevent the accrual of bad debt.

## Trade-offs
Increasing the Debt Floor limits the minimum size of vaults such that Keepers are able to profitably liquidate vaults where the collateralization ratio has dropped beneath the liquidation ratio.

However, increasing the Debt Floor has a negative effect on vault usage. The higher the Debt Floor is set, the harder it becomes to test the vault functionality of the Maker Protocol without risking significant capital. Setting the Debt Floor too high can exlude users with less capital from using Maker Vaults completely.

## Changes
There is currently no process or system in place for automatically adjusting the Debt Floor parameter for a specific vault type. An executive vote is required to modify the Debt Floor parameter for a particular vault type. Changes to Debt Floor parameters are subject to the GSM Pause Delay.

In the past, Maker Governance has modified the Debt Floor of all vault types in lockstep, rather than setting different values for each vault type.

**Why increase this parameter?**
Maker Governance may wish to increase this parameter if gas prices on the Ethereum network have been at sustained high rates. This indicates that Keepers may have trouble liquidating small vaults because the cost of gas will exceed the relative reward of bidding on collateral in the case of smaller vaults.

**Why decrease this parameter?**
Maker Governance may wish to decrease this parameter if they wish to make Maker Vaults more open to use to those with a smaller amount of capital.

Alternatively, if gas prices on the Ethereum network have dropped to consistently lower rates, it may be possible to lower the Debt Floor parameter for a vault type without negatively impacting liquidations.

## Considerations
* Is there anything little known about this parameter?
* How does this interact with other parts of the protocol?
* Are there any Emergency Shutdown considerations to take into account?

Vaults with a debt amount lower than the current Debt Floor will not be able to draw or payback additional DAI unless it puts their total debt over the Debt Floor, or drops it to zero. However, they will not be forceably liquidated or suffer any immediate negative consequences.