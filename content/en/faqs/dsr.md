<StatusBanner sticky>

These are legacy guides and will not be maintened. You may be looking for the <Button  secondary inline to="/learn/Dai/dsr/">DSR page</Button>

</StatusBanner>

# Dai Savings Rate

## What is the Dai Savings Rate?

The Dai Savings Rate (DSR) is a variable rate of accrual earned by locking Dai in the DSR smart contract. Dai holders can earn savings automatically and natively while retaining control of their Dai. The DSR smart contract has no withdrawal limits, deposit limits, or liquidity constraints. The rate is actively set by MKR token holders through [on-chain governance.](/learn/governance/on-chain-gov/)

The DSR is also a monetary policy tool used by Maker governance to influence demand for Dai.

## How does the DSR work?

Dai holders can lock their Dai into the DSR smart contract at any time. Once locked, Dai continuously accrues to the users balance, based on the current DSR.

For more technical details on how the DSR works, visit [Pot - Detailed Documentation](https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation) on our [Documentation.](https://docs.makerdao.com/)

## Are there any range limits to the DSR, can it be negative or zero?

There are no hard limits to what the DSR can be set to. The exception being that it is not possible for the DSR to be set to a negative rate with the current code-base. In theory, it’s possible for MKR governors to commission a rewrite of the code to be able to support negative rates. Whether this would make sense is another question. Negative rates on the DSR might not be effective, since users would simply withdraw their Dai.

## Does Dai automatically earn the DSR?

No. Dai only earns the rate if it is deposited into the DSR smart-contract.

## Is the DSR its own smart contract?

Yes, the DSR is a part of the [Rates Module.](https://docs.makerdao.com/smart-contract-modules/rates-module) This module is responsible for collecting Stability Fees and distributing Dai to DSR users. For a better understanding of the smart-contract structure of the Maker Protocol, visit our [Documentation Portal.](https://docs.makerdao.com/)

## When users lock Dai into the DSR, is that Dai pooled?

Yes, all Dai locked into the DSR is technically pooled together. However, the system tracks deposits on an individual basis.

## Do DSR accruals compound or are they only earned on the principal?

In the code, DSR is continuously compounding at a growth rate of x% per second. For example, when the DSR is set to 2%, it will be accumulating at 1.0000000006279371924910298109948‬% per second. Practically, users experience an annual compounding of the displayed rate. For example, if the DSR was 2%, assuming the user put in 100 Dai, at the end of the first year they would have 102.00, and at the end of the second year they would have 104.04.

Technical documentation about how Rates work in the Maker Protocol can be found in our [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module) documentation.

## What is the formula for the expected accruals earned through the DSR?

Although the DSR compounds at a growth rate of x% per second, in practice the user experiences an annual compounding of the displayed rate. The easiest way to calculate how much one would earn using the DSR is to use an Annual Compounding interest formula. A [Compound Interest Calculator](https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php) can serve this purpose, simply make sure `Compound (n)` is set to `Annually (1/yr)`.

Formula:

```
A = P(1 + r)^t
```

Where:

| Variable | Value                                                         |
| -------- | ------------------------------------------------------------- |
| A        | ending value of your deposit                                  |
| P        | the principal deposit amount                                  |
| r        | the annual interest rate \(decimal\)                          |
| t        | the number of years the principal amount will stay in the DSR |

## Will there be any constraints, like minimum lockup time or withdrawal limits?

Dai in DSR has no liquidity or time constraints. There is no minimum lockup time and no withdrawal limit for Dai in the DSR. Users can freely enter into and out of the DSR, only needing to pay the Ethereum transaction fee.

## Does Dai earned by the DSR get calculated and paid out at the time of withdrawal, or is it continuously added to the user’s balance?

The amount earned is recalculated and counted towards each user’s balance multiple times a day. In practice, the DSR compounds once a year and is paid out pro-rata at the time of withdrawal. The displayed rate is what a user would earn on their principal in one-year using a simple interest calculation. For example, if the DSR is 2% and a user deposits 100 Dai they can expect to have 102 Dai in exactly 1 year.

Technical documentation about how Rates work in the Maker Protocol can be found in our [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module) documentation.

## How is the DSR being used by MKR token holders as a monetary policy tool?

The DSR is a global parameter that can be raised or lowered to influence demand for Dai. Raising the DSR incentivizes users to hold more Dai, leading to higher demand for Dai, whereas lowering the DSR has the opposite effect of reducing demand for Dai. This is reflected in the spot market price of Dai; if Dai is trading below a dollar, then the DSR can be raised to increase demand for Dai which would bring up the price of Dai. Conversely, if Dai is trading above a dollar, then the DSR can be lowered to reduce the demand for holding Dai which may help bring down the price of Dai.

## Where can someone find information to better understand the economic impact of the DSR?

The [In-Depth Analysis](https://awesome.makerdao.com/#in-depth-analysis) section of the Awesome-MakerDAO resource library offers comprehensive literature on this topic. This section is always expanding as more information becomes available.

## Does the DSR reduce the MKR burn rate?

To answer this question accurately, one must understand what the value of the DSR is. The DSR is a cost to the system, but it is also one of the most important drivers of demand for Dai. The value that it brings as a monetary policy tool and source of Dai demand largely outweighs its cost.

## Are Stability Fees structurally higher due to the existence of the DSR?

Yes.

## Where can I find more technical information about the DSR?

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation of the DSR is included in the [Pot - Detailed Documentation](https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation) subsection. And documentation about how Rates work in the Maker Protocol is located in the [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module) section.
