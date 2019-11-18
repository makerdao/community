# Dai Savings Rate

## What is the Dai Savings Rate?

The Dai Savings Rate(DSR) is a variable return that is earned by holding Dai in the DSR smart-contract. This rate is set by MKR token holders who participate in MakerDAO governance.

## Are there any range limits to the DSR, can it be negative or zero?

There are no hard limits to what the DSR can be set to. The exception being that it is not possible for the DSR to be set to a negative rate with the current code-base. In theory, it’s possible for MKR governors to commission a rewrite of the code to be able to support negative rates.

## Does Dai automatically earn the DSR?

No. Dai only earns the rate if it is deposited into the DSR smart-contract.

## Is the DSR its own smart contract?

Yes, the DSR functions as a part of the [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module). This module is responsible for collecting Stability Fees and distributing Dai to DSR users. For a better understanding of the smart-contract structure of the Maker Protocol, visit our [Documentation Portal.](https://docs.makerdao.com/)

## When a user lock their Dai in the DSR, does it pool all the locked Dai together?

Yes, all Dai in the DSR contract is technically pooled together. Though, the system tracks deposits on a per-user basis.

## Does the DSR compound or is it only earned on the principal?

DSR is continuously compounding interest at a growth rate of x% per second. When the DSR is set to 2%, for example, it will be accumulating at 1.0000000006279371924910298109948‬% per second, meaning that at the end of year one the user will receive 2% on the principal. Assuming the user put in 100 Dai, at the end of year one they would have 102.00, and at the end of year two, they would have 104.04. 

Technical documentation about how Rates work in the Maker Protocol can be [found here.](https://docs.makerdao.com/smart-contract-modules/rates-module)

## What is the formula for the expected return earned through the DSR?

Although the DSR compounds at a growth rate of x% per second, in practice the user experiences an annual compounding of the displayed rate. The easiest way to calculate how much one would earn using the DSR is to use an Annual Compounding interest formula. A calculator for interest can be found [here](https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php), simply make sure Compound(n) is equal to one.

Formula:

```Annual Compounding Interest
A = P(1 + r)^t`
```

Where:

  | Variable              | Value |
  | ------------------------- | ----- |
  | A | ending value of your deposit |
  | P | the principal deposit amount |
  | r | the annual interest rate \(decimal\) |
  | t | the number of years the principal amount will stay in the DSR |

## Will there be any constraints, like minimum lockup time or withdrawal limits?

There is no minimum lockup time and no withdrawal limit. Dai in DSR has no liquidity or time constraints. The user can freely enter in and out of the DSR, only needing to pay the Ethereum transaction fee.

## Does Dai earned by the DSR get calculated and paid out at the time of withdrawal, or is it continuously added to the user’s balance?

The amount earned is recalculated and counted towards each user’s balance multiple times a day. In practice, the DSR compounds once a year and is paid out pro-rata at the time of withdrawal. The displayed rate is what a user would earn on their principal in one-year using a simple interest calculation. For example, if the DSR is 2% and a user deposits 100 Dai they can expect to have 102 Dai in exactly 1 year.

Technical documentation about how Rates work in the Maker Protocol can be [found here.](https://docs.makerdao.com/smart-contract-modules/rates-module)

## How is the DSR being used by MKR token holders as a monetary policy tool?

The DSR is a global parameter that can be raised or lowered in order to influence Dai demand. When DSR is raised it incentivizes users to hold more Dai. When it is lowered, there is an opposite effect where holding Dai is less attractive. This is reflected in the spot market price of Dai, where if Dai is trading below a dollar the DSR can be raised to increase Dai demand, which would bring Dai price up. Conversely, if Dai is trading above a dollar the DSR can be lowered to lower the demand for holding Dai, which would bring Dai price down.

## Is there information or a model MKR holders can look at to better understand the economic impact of the DSR?

If there is one, it can be found in the [“In-Depth Analysis”](https://awesome.makerdao.com/#in-depth-analyses) section of the Awesome-MakerDAO resource library. As time goes on additional research and resources will become available.

## Does the existence of DSR mean that MKR is burned at a lower rate?

To answer this question accurately, one must understand what the value of the DSR is. The DSR is a cost to the system, but it is also one of the most important features which attracts an enormous amount of demand for Dai. The value it brings as a monetary policy tool and source of Dai demand largely outweighs the cost.

## Are Stability Fees structurally higher due to the existence of the DSR?

Yes.

## Where can I find more technical information about the DSR?

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation of the DSR can be [found here.](https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation) Documentation about how Rates work in the Maker Protocol can be [found here.](https://docs.makerdao.com/smart-contract-modules/rates-module)
