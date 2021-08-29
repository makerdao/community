# Dai Savings Rate

```
Alias: DSR
Parameter Name: Pot_dsr
Containing Contract: Pot
Scope: System
Technical Docs: https://docs.makerdao.com/mcd-developer-guides/developer-guides-and-tutorials#dai-savings-rate-dsr
```

## Description
The Dai Savings Rate is a tool that Maker Governance can use to adjust the interest rate paid to DAI holders who have deposited DAI into the Dai Savings Rate contract (`Pot`). Maker Governance directly controls the Dai Savings Rate.

The Dai Savings Rate is usually expressed as a percentage and can be set to any value. However, even though Maker Governance can set the Dai Savings Rate to a negative value, this will not affect the balances held within the `Pot`. The balances within the `Pot` will not decrease because the drip function will revert if negative.

## Purpose

The Dai Savings Rate aims to enable Maker Governance to encourage DAI holders to deposit DAI within the `Pot`. Higher amounts of DAI within the `Pot` should reduce the market supply of DAI and act as upwards pressure on the DAI peg.

## Trade-offs

Increasing the Dai Savings Rate is a trade-off between increased DAI demand and decreased DAI liquidity and may also result in increased expenses for the Maker Protocol.

Decreasing the DAI Savings Rate will decrease the expenses of the Maker Protocol but may simultaneously reduce DAI demand.

## Changes
Adjusting the Dai Savings Rate is a manual process that requires an executive vote. Changes to the Dai Savings Rate are subject to the GSM Pause Delay.

In essence, a higher Dai Savings Rate results in upward pressure on Dai price, and a lower Dai Savings Rate will reduce this pressure.

**Why increase this parameter?**

The primary reason for increasing the Dai Savings Rate is to increase DAI demand. This increase in demand is achieved by encouraging DAI holders to deposit DAI to the `Pot` - thus removing it from the market, which should create upwards pressure on the Peg. Therefore, raising the Dai Savings Rate should be considered if DAI is trading below the Peg.

Increasing the Dai Savings Rate should make DAI a more attractive asset for holders than other stablecoin assets and help integration with the Maker Protocol, for example, if other DAPPs with stablecoin holdings deposit to the `Pot` to earn interest.

**Why decrease this parameter?**

The primary reason to decrease the Dai Savings Rate is to reduce DAI demand. Reducing the Dai Savings Rate should result in less DAI deposited in the `Pot` and increase market supply. In addition, it may be advisable to decrease the Dai Savings Rate if DAI trades above the Peg to reduce upwards price pressure.

Maker Governance may also wish to decrease the Dai Savings Rate when The Maker Protocol experiences a drop in revenue. If Maker Governance does not reduce the Dai Savings Rate when income falls, the Maker Protocol could encounter negative cash flows. Negative cash flow would reduce the System Surplus Buffer, and if necessary, The Maker Protocol may need to mint MKR to cover any shortfall.

## Considerations
When DAI holders deposit DAI to the `Pot`, interest is paid from accrued stability fees. Therefore, increasing the Dai Savings Rate will cause the System Surplus Buffer to fill more slowly and reduce the amount of Dai available for `Flap` auctions. If the Dai Savings Rate is set too high, the Maker Protocol could have negative cash flow and eventually need to print MKR.

Maker Governance should recognise that a negative interest rate will not work as intended as balances within the `Pot` cannot decrease.

Any changes to the Dai Savings Rate may affect PSM usage behaviour. For example, increased upward pressure on the Peg caused by the Dai Savings Rate may require increased PSM usage to balance.

In the event of an Emergency Shutdown, the Dai Savings Rate will be set to 0% to prevent the total debt of the Maker Protocol from increasing.
