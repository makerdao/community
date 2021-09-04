# MIP21 Write-off Delay

```
Alias:
Parameter Name: tau
Containing Contract: RwaLiquidationOracle 
Scope: MIP21 / RWA
Technical Docs: https://mips.makerdao.com/mips/details/MIP21
```

## Description
The Write-off Delay is the minimum amount of time that must pass before Maker Governance can proceed from a soft liquidation to a hard liquidation when a non-crypto native asset, or Real-World asset (RWA), is liquidated.

Unlike with crypto-native collateral, RWA collateral liquidation is triggered manually in two stages independent of collateral value.

First, a soft liquidation occurs where Maker Governance requests that the counterparty repays the loan. After the Write-off Delay has passed, Governance may trigger a hard liquidation. All the debt of the Vault facility is written off, and the amount of debt outstanding is removed from the Surplus Buffer. If there is not enough DAI in the Surplus Buffer to cover the debt, MKR will need to be minted to cover any outstanding debt.

## Purpose
The Write-off Delay provides time for RWA Vault owners to pay off debt in order to avoid a hard liquidation taking place. This is beneficial to the Maker Protocol as there is currently no means of performing an on-chain liquidation. Therefore, in the event of progression to a hard liquidation the Surplus Buffer will be drained and the Protocol may need to mint MKR to cover any shortfall.

## Trade-offs
It is in the best interest of MakerDAO to have a Write-off Delay that is attractive to borrowers, and that minimises risk to the Maker Protocol.


## Changes
Maker Governance cannot decrease the Write-off Delay; it can only increase it, which is done by calling the `init` function.

**Why increase this parameter?**

Borrowers may request a higher Write-off Delay for reasons individual to their business. It may be in the interest of Maker Governance to have a higher Write-off Delay to reduce governance overhead.

**Why decrease this parameter?**

It is not possible.

## Considerations
Governance must consider the contractual implications of a soft and hard liquidation when setting this parameter.

If MIP21 is used in conjunction with MIP22, this parameter should be set to 0 as the parameter only controls actions taken by Maker Governance and not the MIP22 process.
