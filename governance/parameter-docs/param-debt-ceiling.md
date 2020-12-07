# Debt Ceiling

```
Alias: N/A
Parameter Name: line
Containing Contract: Vat
Scope: Ilk
Technical Docs: https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation
```

## Description

The Debt Ceiling parameter controls the maximum amount of DAI that can be minted using a specific vault type across all vault users. If a user tries to mint DAI and the amount of DAI minted would put the vault type's amount of DAI minted above its Debt Ceiling, the transaction will fail and no DAI will be minted.

Each vault type has its own Debt Ceiling that can be adjusted by Maker Governance. Note that the Debt Ceiling applies collectively to all vaults created using a specific vault type, rather than to individual vaults.

Additionally, there is a Global Debt Ceiling parameter that is not covered in this entry. For a user to mint DAI from their vault, there must be space available in both the vault type's Debt Ceiling and the Global Debt Ceiling.

The Debt Ceiling for each vault type is expressed in absolute rather than relative terms, so 1,000,000 DAI rather than 10% of the Global Debt Ceiling.

## Purpose

The primary purpose of the Debt Ceiling parameter is to allow Governance to control the amount of DAI that can be created using a certain vault type. Controlling the amount of DAI minted from a vault type limits the risk exposure to the collateral used within that vault type. It also limits the risk from the combination of system parameters that are used within a vault type - for example, a very low liquidation ratio combined with high stability fees.

## Trade-offs

Increasing the Debt Ceiling parameter for a vault type allows more DAI to be minted using that vault type. In most cases, this is positive as Maker Governance will almost always want more DAI to exist given that the price peg to $1 can be maintained.

However, increasing the Debt Ceiling and allowing DAI to be collateralized heavily by a single asset increases the risk from a black swan event that is localized to that asset.

Having a large amount of 'open space' between the Debt Ceiling for a vault type and the current amount of DAI minted using that vault type represents a risk. In the event of a significant drop in the price of the collateral used within this vault type, holders of that collateral can shift the loss onto the Maker protocol by minting DAI and leaving Maker to deal with the bad collateral. This risk is known as the 'OSM Timing Attack' because it is only possible due to the one hour delay on price updates from the OSM (Oracle Security Module.)

Leaving a large amount of 'open space' in the Debt Ceiling for a vault type also means that the DAI supply can change rapidly in a way that may harm the DAI price peg.

## Changes

Adjusting the Debt Ceiling parameter for a specific vault type is a manual process that requires an executive vote. Changes to Debt Ceiling parameters are subject to the GSM Pause Delay.

**Why increase a Debt Ceiling Parameter?**

The primary reason for increasing the Debt Ceiling for a vault type is to allow more DAI to be minted using that vault type. This is usually positive, because it means additional fees captured by the protocol, and increased DAI supply. 

This reason is usually only valid if it is predicted that the current Debt Ceiling will be reached and will prevent further minting.

**Why decrease a Debt Ceiling Parameter?**

The primary reason for decreasing the Debt Ceiling for a Vault type is to decrease the risk and impact of the 'OSM Timing Attack' described above.

A Debt Ceiling can also be lowered below the currently utilized amount of debt for the vault type to deprecate or temporarily prevent DAI from being minted using that vault type.

The parameter can also be used to encourage diversification between vault types that are based on similar assets. For example, decreasing the Debt Ceiling on USDC-A could be used to shift stablecoin usage towards TUSD-A or PAX-A.

The Debt Ceiling might also be lowered as an attempt to affect monetary policy, though in the past Maker Governance has preferred to use the stability for this purpose.

## Considerations

The Debt Ceiling for a vault type can be exceeded as stability fees accrue to vaults within that vault type. 

If a Debt Ceiling parameter for a vault type is dropped below the current amount of DAI minted using that vault type, this does not have any negative effects beyond preventing further mints from vaults using that vault type.






