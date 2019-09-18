---
id: stability-fee
title: Stability Fee
---

## What is the Stability Fee?

The Maker smart contracts collect a Stability Fee which is calculated against the total amount of DAI drawn against collateral held in a CDP. This a variable rate fee which can change when MKR holders vote on proposals put forth by the Interim Risk Team at MakerDAO.

## When do I have to pay the Stability Fee?

When you pay down your debt by returning DAI to your CDP, you will be charged an outstanding fee _proportional to the amount of DAI being returned_. The fee can be paid in MKR tokens or in Dai.

## Do I have to pay the new fees on old debt?

No. Stability Fees are never applied retroactively. After a fee change, users will accrue a Stability Fee at the new rate from that point forward, much like a variable interest rate on a loan.

## What is the purpose of the Stability Fee?

The Stability Fee is a Risk Parameter designed to address imbalances in supply and demand for the Dai token which could result from periods of low or negative growth in the cryptocurrency markets.

The mechanism behind the fee is a simple one; as the market demand for Dai _decreases_ the fees associated with minting new Dai will _increase_, the inverse will be true when market demand grows. This rebalancing alters the incentives for CDP owners to mint or burn Dai and can have a stabilizing effect on the soft-peg.

## Why does the Stability Fee Change?

When it is observed that Dai is consistently trading above or underneath the target price of \$1, this may signal an imbalance between the macro Dai supply and demand for Dai. The Stability Fee is a rate that primarily affects the Dai supply since it alters the cost of creating Dai. The cheaper it is to borrow Dai, the more users are incentivized to do so. Conversely, when the fee is higher, fewer users will want to borrow Dai. MKR Token holders are able to set this rate to maintain the health of the peg.

If Dai trades consistently above \$1, this means that demand is outweighing supply and market participants are willing to pay a premium to purchase Dai. If this is happening too consistently, it signifies a need to lower the Stability Fee to incentivize more Dai creation.

If Dai trades consistently below \$1, this means that supply is outweighing demand and the market is flooded with too much Dai. If this is happening too consistently, it signifies that the Stability Fee needs to be raised to slow down Dai creation.

Unfortunately, it is not possible to perfectly predict the impact of a fee change prior to its implementation, as the results are entirely dependent on the market's reaction. As time goes on, there will be better data available to support a predictive model or even a more robust reactive model that will help fine-tune the Stability Fee.

## How is the Stability Fee calculated?

The Stability Fee is calculated _continuously_. It is denominated in Dai and can be paid in DAI or MKR. As shown in the formulas below, this type of compounding refers to a form of accrual that is measured in tiny increments instead of weeks, months, or years. This produces a fee that is very close to what one would expect from an annualized compounding. This format was chosen due to the highly variable lifetime of CDPs. As there are no minimum restrictions on how long a CDP has to remain open, it is important for the system to track extremely small accruals effectively.

Let's look at the various results from applying different types of compounding structures, given a debt of 100,000 DAI that has been held for 365 days.

### Formulas

Where:

**A** = Interest

**P** = the principal investment amount \(the initial deposit or loan amount\)

**r** = the annual interest rate \(decimal\)

**n** = the number of times that interest is compounded per year

**t** = the number of years the money is invested or borrowed for

**e** = [Euler's number](https://www.mathsisfun.com/numbers/e-eulers-number.html)

- **P** \(1 + r/n\)^nt - P = A: Annual Compounding
- **P** \(1 + r/n\)^nt - P = A: Monthly Compounding
- **P** \(e\)^rt - P = A: Continuous Compounding

### Simplified

Calculated with annual compounding, the future Stability Fee is:

```text
100,000 × (1 + (12.5% / 1)) ^ (1 × 1) - 100,000 = 12,500 DAI
```

Calculated with monthly compounding the future Stability Fee is:

```text
100,000 × (1 + (12.5% / 12)) ^  (12 × 1)  - 100,000 = 13,241.60 DAI
```

Calculated with continuous compounding the future Stability Fee is:

```text
100,000 × 2.7183... ^ (12.5% × 1) - 100,000 = 13,314.94 DAI
```

The difference between annual and continuous compounding fees on a 100,000 DAI debt, at 12.5% APY, works out to about **814.94 DAI**. Let's take a look at a couple more examples of how a stability fee gets calculated in practice.

### A Simple Example

Given that:

- A CDP exists with a debt of **1000** **DAI**
- The CDP has been open for **30** **days**
- The current value of an MKR token is **1000** **DAI**
- The Stability Fee is **5%**
- A user pays back a portion of the debt in the amount of **50** **DAI**

The total Dai denominated cost for paying back **50 DAI** on a **1000 DAI** debt that is **30 days** old is **0.208 DAI**, or approximately 21 cents USD.

The Dai denominated debt must now be converted to MKR for payment. The CDP owner owes 0.00021 MKR.

### A Detailed Example

The total Stability Fee accrued in the CDP can be calculated like this:

> \(\(\(Borrowed DAI \* \(1 + Current Stability Fee in decimal format\)\) ^ \(Age of Debt in days/365\)\) - Borrowed DAI \) = Total Stability Fee owed in DAI

When we plug in the values we've already used above we see the fees in DAI owing:

```text
(1000 * (1 + 0.05) ^ (30÷365)) - 1000 = 4.018 DAI
```

Now that we have the total fee in DAI, we can convert that to MKR. Assuming an exchange rate where 1 MKR is worth 1000 DAI:

```text
4.018 ÷ 1000 = 0.004018 MKR
```

And, as the user is repaying 50 DAI, they will be expected to pay the fee accrued on that amount:

```text
(50 * (1 + 0.05) ^ (30÷365)) - 50 = 0.2009 DAI
```

Now converted to MKR:

```text
0.2009 ÷ 1000 = 0.0002009 MKR
```

The user will need **0.0002009 MKR** in their wallet to cover the accrued fee on **50 DAI** after **30 days**.

After the transaction has been completed, the total amount of fees remaining in the CDP will be:

0.004018 - 0.0002009 = **0.0038171 MKR**

## What does the system do with the collected fees?

Once the fees have been collected, the smart contract platform transfers the MKR to a contract called the [Burner](https://etherscan.io/address/0x69076e44a9c70a67d5b79d95795aba299083c275).

Any MKR that resides in the burner wallet before actually being destroyed is permanently out of circulation, as no one can remove funds from that address.

## Where can I see my currently accrued Stability Fee?

[Old CDP Dashboard](https://dai.makerdao.com/): The outstanding balance owed on a CDP is shown in the "Governance Debt" column on the DAI Dashboard.

[New CDP Portal](https://cdp.makerdao.com/): The outstanding balance owed on a CDP is shown in the right panel that appears when you click "Payback"

There are also a number of third-party tools that can be found in the [Watch your Dai section](https://awesome.makerdao.com#watch-your-dai) of the Awesome-MakerDAO Repository.

## How does the fee alter supply and demand?

An increase in the Stability Fee results in a higher cost of borrowing for CDP users, thus dampening the Dai supply by making CDP usage less attractive. Conversely, a decrease in the Stability Fee \(cost of borrowing\) will incentivize the additional creation of Dai, acting as a policy tool to tweak supply growth.

## How do I calculate the impact of variable Stability Fees?

You can use this simplified formula to determine accrued Stability Fees:

> \(\(Borrowed DAI \* \(1 + Current Stability Fee in decimal format\)\) ^ \(Age of Debt in days/365\)\) - Borrowed DAI\) = Total Stability Debt owed in DAI

The fees on a 10,000 DAI debt over the course of 31 days at 5.0%:

```text
(10000 x (2.7183...) ^ (5.0%*(31/365)) - 10000 = 42.474 DAI
```

And at 10.0%:

```text
(10000 x (2.7183...) ^ (10.0%*(31/365)) - 10000 = 85.2937 DAI
```

## How can I learn more about the Risk Teams and communicate with the Foundation about current or future changes to the system?

Please consider joining our weekly [Governance and Risk](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) meetings where we discuss these issues in greater detail. Agendas are posted regularly to [r/MakerDAO](https://www.reddit.com/r/MakerDAO/). Also, check out the [Governance section](https://awesome.makerdao.com#governance) in the Awesome-MakerDAO repository.

## Is there a limit to the range of the Stability Fee changes?

The Risk Team will propose the thresholds for altering the Stability Fee \(rate of change over time, deviation of the peg, sampling times\) and present them for approval to Maker voters.

## How can CDP owners mitigate fee change risk?

There are a few options users may wish to explore in order to hedge against fees.

MKR demand may be positively correlated with the Stability Fee increases. If the relationship is meaningful and persists, CDP participants may be able to hedge a portion of their stability fee exposure by holding MKR.

Users seeking fixed-term and fixed-rate loans may be able to hedge against any future fee swings by finding a counterparty who is willing to enter into a fixed term loan on other lending platforms.

The best risk management strategy, though, is to get involved with the governance process and ensure that your vote is cast when proposals are being ratified.

## What happens if a fee change vote is rejected?

If a rate change vote fails, it may result in a drop in the price of Dai if the current imbalance continues. If it persists, then the only choice left to the Foundation may be to trigger an Emergency Shutdown to ensure the economic security of Dai holders.

The voting mechanism is the primary way for the community to manage the peg, through the fine-tuning of the policy tools. There are no "backdoors," no one can change Risk Parameters in the system unilaterally.

## How often will the Stability Fee change?

It is not possible to schedule or make predictions about when the fee should change or what the new rates could be.

The Interim Risk Team continuously monitors the results of previous changes and may propose adjustments of a similar or differing magnitude when necessary. It is hard to tell how quickly and how significantly the market will react, and for that reason, the Risk Teams will approach any adjustments on a case-by-case basis.

Due to the risk of manipulation, there will always need to be some level of discretion and signal processing required to determine exactly how Stability Fees should be adjusted. Fully automatic and algorithmic processes are vulnerable to manipulation and will need to be carefully considered.
