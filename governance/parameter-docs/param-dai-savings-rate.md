# Dai Savings Rate

```
Alias: DSR
Parameter Name: Pot_dsr
Containing Contract: Pot
Scope: System
Technical Docs: https://docs.makerdao.com/mcd-developer-guides/developer-guides-and-tutorials#dai-savings-rate-dsr
```

## Description
The Dai Savings Rate allows Dai holders to deposit Dai into the contract and earn interest paid in Dai. Maker Governance can alter the rate at which interest accrues.

The Dai Savings rate is usually expressed as a percentage and can be any value greater than 0%. Therefore, the DAI Savings rate cannot be negative.

The Dai Savings Rate can also be turned off by Maker Governance - rendering the interest rate in effect to be 0%.

## Purpose
Maker Governance can utilise the Dai Savings Rate to encourage Dai holders to deposit Dai to the Dai Savings Rate contract. Higher amounts of Dai within the Dai Savings Rate
should reduce the market supply of Dai and act as a means to control the Peg.

## Trade-offs
In essence, a higher Dai Savings Rate results in upward pressure on Dai price, and a lower Dai Savings Rate will reduce this pressure.

The higher the Dai Savings Rate, the greater the incentive to deposit DAI and earn interest. However, removing Dai from the markets may lower liquidity in certain liquidity 
pools, leading to increased slippage when trades occur. Similarly, it is advisable to keep the Dai Savings Rate lower than vault stability fees to ensure that
The Maker Protocol maintains a positive cash flow.

If Dai remains consistently above the Peg, it would seem ill-advised to maintain a high Dai Savings Rate as this will prevent the price from returning to the Peg.

## Changes
Adjusting the Dai Savings Rate parameter is a manual process that requires an executive vote. Changes to the Dai Savings Rate are subject to the GSM Pause Delay.

**Why increase this parameter?**

The primary reason for increasing the Dai Savings Rate is to encourage Dai holders to lock their Dai in the contract - thus removing it from the market. Raising the Dai Savings 
Rate may be considered if Dai is trading below the Peg.

**Why decrease this parameter?**

Decreasing the Dai Savings Rate should result in less Dai locked in the contract and increase Dai's supply on the market. In addition, lowering the Dai Savings Rate might be 
considered if Dai trades above the Peg to reduce price pressure upwards.

Maker Governance may also wish to decrease the Dai Savings Rate when The Maker Protocol experiences a drop in revenue. If Maker Governance does not reduce the Dai Savings Rate 
when income falls, the Maker Protocol could potentially encounter negative cash flows. Negative cash flow would reduce the System Surplus Buffer, and if necessary,
The Maker Protocol may need to mint MKR to cover any shortfall.

## Considerations
When Dai is deposited in the Dai Savings Rate, interest is paid from accrued stability fees. Therefore, increasing the Dai Savings Rate will cause the System Surplus Buffer to
fill more slowly and will reduce the amount of Dai available for FLAP auctions.

In the event of an Emergency Shutdown, the Dai Savings Rate will be set to 0 to prevent the total debt of the system from increasing.

