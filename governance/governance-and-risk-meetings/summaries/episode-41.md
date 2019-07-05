# Episode 41: June 27, 2019

## Agenda

- [00:00](https://youtu.be/pOA-TIOQBs8?t=1): Intro from Rich Brown
- [03:02](https://youtu.be/pOA-TIOQBs8?t=182): Analysis from Vishesh
- [23:37](https://youtu.be/pOA-TIOQBs8?t=1417): Cyrus's Presentation: Single CDP Credit Risk Model
- [01:16:47](https://youtu.be/pOA-TIOQBs8?t=4607): Matthew Rabinowitz Discussion

## Summary & Introduction

### Rich [00:00](https://youtu.be/pOA-TIOQBs8?t=1)

- Discussion about things in the call continue in this Reddit Thread.
- Don't be hesitant to give us feedback, questions, comments, and concerns about these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.

## Risk

### Vishesh: Analytics on Monetary Policy [03:02](https://youtu.be/pOA-TIOQBs8?t=182)

[Vishesh's Graphs](http://makerdao.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price: [03:02](https://youtu.be/pOA-TIOQBs8?t=182)

- The peg has been fairly steady. A slight drift and increase in variance over the past month or so. Which is nothing to worry about.
- In the past 24 hours we've seen a huge spike in trading volume. Dai price has done fine in the face of that.
- In the last 24 hours we've seen more Dai trading above a dollar, mostly Due to ETH selling(booking profit in Dai).
- There has been some profit booking with ETH rising.
- We've also seen some liquidations, which resulted in sale of ETH collateral as well.
- In large selling periods Dai price doesn't seem to spike up as much as it has in the past, and vice versa when there is a large buying period we don't see as much of a downward impact on Dai price either.

#### Dai Supply: [07:16](https://youtu.be/pOA-TIOQBs8?t=436)

- When profit booking happens we usually see a commensurate decrease in Dai supply or a commensurate rise in Collateralization Ratio because of fear of liquidation.
- The supply has been rising consistently, it's at around ~87MM at the time of this call.
- There were a ton of wipes and draws in the past week. Especially in the last 24 hrs we saw a lot of activity on both mints and burns.

#### Age of Debt: [09:59](https://youtu.be/pOA-TIOQBs8?t=601)

- Has been consistently cratering since just after the 19.5% SF adjustment. The fall had slowed down after the 16.5% SF adjustment, but in the past few days it has begun to fall again because of what is going on with ETH price. Not much more old debt being paid back, but there has been a fair amount of new debt being created.
- Old debt being paid back has slowed down, but there is a lot of new debt being issued.

#### Collateralization Ratio: [19:02](https://youtu.be/pOA-TIOQBs8?t=1144)

- Collateralization Ratio has been continuously rising over time. I think as ETH has been rising over time, people have perceived a greater height to fall from so they have maintained a high average Collateralization Ratio.
- In the past few days we saw many people removing collateral from the system as well.
- During a drop in ETH, we will likely see the opposite mechanic of people adding collateral to their CDPs. Though I am not 100% certain of that, just an educated guess.

#### Secondary Lending Platforms: [20:35](https://youtu.be/pOA-TIOQBs8?t=1233)

- Both Borrow and Supply volumes have gone up in the past week. The borrow outpacing the supply.
- DyDx usually has a higher borrow rate than compound, but usually has a lower supply rate as well.

#### Questions to Vishesh

- [09:09](https://youtu.be/pOA-TIOQBs8?t=549): Is short term debt as indicated by MKR burned as a result of large wipes a useful thing to look at?
- [10:59](https://youtu.be/pOA-TIOQBs8?t=661): Can you explain `Open Dai Days`, and other metrics on the Age of Debt graph?
  - `open_dai_days` = `(AVERAGE)Amount of Days current debt has been open`/`The amount of open debt`
  - `closed_dai_days` = `(AVERAGE)how many days was it outstanding at close`/`The amount of closed debt`

### Cyrus: Single CDP Credit Risk Model: [23:37](https://youtu.be/pOA-TIOQBs8?t=1417)

- We will talk about calculating stability fees and expected losses.
- We are in the process of doing the quantitative modeling.
- In a few weeks we will circle back to the collateral onboarding process, and then resume with the quant stuff.
- This is a mini-outline for the quantitative stuff: ![Quantitative Analysis Outline](https://i.imgur.com/42kEo5H.jpg)

#### Recap

![Recap from last week](https://i.imgur.com/OPEmdQC.jpg)

#### Credit risk: [28:15](https://youtu.be/pOA-TIOQBs8?t=1696)

- Credit Risk is a difficult problem because of the unpredictable nature of the underlying assets.
- Some function of historical data makes sense.
  - eg: Corporate debt of an energy company
  - Collect data on the energy sector over the last several decades, and compute historical default frequencies.
  - Or, conduct a fundamental analysis on the company in conjunction with historical data and compute metrics (Credit ratings can often be a proxy for this)
  - Often times, underlying asset value is not even observable.
- Does this work with CDPs?
  - The answer is probably not, since we don't have enough data that spans a wide enough time period for the underlying asset: ETH.
  - We can use it as a starting point, but in and of itself it is not sufficient.
- Approach (slide at bottom)
  - Build up intuition with academic model
  - Explore tradeoffs
  - Salvage what we can and simplify
  - Explore new set of tradeoffs
  - Iterate

#### Single CDP Model: [32:23](https://youtu.be/pOA-TIOQBs8?t=1943)

![Single CDP Model 1](https://i.imgur.com/P5qks9f.jpg)

- Debt is a function of stability fee, time, and user behavior.
- Technical considerations also exist. For example, the Oracle Security Module which delays the feed price by an hour may incentivize defensive draws of Dai.

![Single CDP Model 2](https://i.imgur.com/16c8nSx.jpg)

![Next Steps](https://i.imgur.com/lyWpCTz.jpg)

- I like to think of it as looking at the loans themselves versus looking deeper at the underlying asset (modeling F vs modeling At)
- You can't always model based on the underlying, sometimes you need to model based on the debt since it's almost impossible to model directly by assessing the underlying.

![Stochastic Model Assumptions](https://i.imgur.com/A10IOGV.jpg)

- if you go through all of these assumptions you can create a Merton Model (slide below).
- If you assume a collateral asset behaves a certain way, you can begin to model it.

![Stochastic Model](https://i.imgur.com/IfFmbpI.jpg)

- The first assumption we can relax is "no early liquidations"
- Next we can get rid of the assumption that "The asset price can't gap up or down", therefore we add a jump process(slide at the end).

![Risk Rating](https://i.imgur.com/VOWQwzn.jpg)

- We've made it this far without using our risk rating for the underlying asset.
- We can incorporate our risk rating into our stochastic process.
- What we want to care about are the qualitative aspects of a collateral asset that impact the frequency and severity of jump moves.
- Won't be able to go over all the stochastic model assumptions, but we will in future calls.

#### Next Steps: [52:16](https://youtu.be/pOA-TIOQBs8?t=3136)

![Next Steps 2](https://i.imgur.com/97Cdy8D.jpg)

- We need to migrate first from Single Asset, Single CDP to Single Asset, Multiple CDP model.
- Sharpen up behavior function and apply to simulation of distribution of CDPs
- Sharpen up conversion of Risk Rating into stochastic model
- All of this, to calculate an Expected Loss.
- Lots of research to do in order to sharpen all of these considerations. Which is moving forward.

#### Expected Loss to Risk Premium: [54:30](https://youtu.be/pOA-TIOQBs8?t=3270)

![No Risk CDP](https://i.imgur.com/s59eSUG.jpg)

vs

![Risky CDP](https://i.imgur.com/b8F4ZbT.jpg)

#### Basic Plan: [56:45](https://youtu.be/pOA-TIOQBs8?t=3406)

![Basic Plan](https://i.imgur.com/K4aanNT.jpg)

- Key insight is the payoff structure of a risky CDP is behaviorally equivalent to the sum of a risk-free CDP and an implicit short put option on the underlying assets.
- It's not actually a put option. This is just a heuristic used to help model the Expected Loss.
- Expected Loss = Price of implicit put option with a strike price of `K`
- The yield of this CDP is the stability fee `s`

![Example](https://i.imgur.com/i1pAMIn.jpg)

#### Was all this worth it? [59:14](https://youtu.be/pOA-TIOQBs8?t=3556)

![Was all this worth it](https://i.imgur.com/nXy9k44.jpg)

- Tradeoffs
  - A fair amount of complexity
  - assumes normally distributed returns, which underprices fat tails
  - Not particularly suited to asset classes without a lot of historical data
- Empirical models
  - better distribution of tails
  - ass in qualifier risk premium adjustment
- Expert models
  - Defer to someone who claims to know what they're talking about.

### Rich: Signaling, Debate, and Discussion: [01:01:13](https://youtu.be/pOA-TIOQBs8?t=3673)

- The deep discussion venue that we have currently is Reddit, which is insufficient. We will be releasing a forum for Governance and Risk in order to better facilitate deeper debates and discussions.
- We will be able to take some of the really amazing insights in Reddit, and transition them into something more like eth.research.
- We can spend days, weeks, and even months debating the finer points without losing visibility of these subjects.
- We recognize the need for a long term, very detailed, discussion forum.

### Cyrus & Rich: The Debt Ceiling: [01:04:19](https://youtu.be/pOA-TIOQBs8?t=3859)

- I've been noticing that the Dai supply has been coming closer to the Debt Ceiling.
- There is some risk involved with not increasing the Debt Ceiling.
- It might be time to start looking at the option of increasing the Debt Ceiling.

#### Comments

- [01:06:52](https://youtu.be/pOA-TIOQBs8?t=4012): Vishesh
  - We know we don't want to hit the Debt Ceiling. This is fairly agreed upon, but we can debate it not.
  - What is the downside for the Debt Ceiling being slightly higher if we're not going to hit it?
  - In what scenario should we worry about the Debt Ceiling?
  - Some of the answers are clear. The one caveat is if the Debt Ceiling is increased, and someone aggressively votes down the stability fee, this is the risk scenario.
  - Hopefully Governance understand we shouldn't do both of those things.
  - The more excess supply lives on Secondary Lending Platforms, the less we should worry about us hitting the Debt Ceiling.
  - When the stability fee is higher, the supply moves slower and vice versa.

#### Matthew Rabinowitz: [01:16:47](https://youtu.be/pOA-TIOQBs8?t=4607)

- Discussion about risk driven stability fees for Collateral Packages & usage of the DSR.
- How will we handle voting on Risk Premiums?
  - or will we not vote on it at all, and simply outsource it to a risk team?
  - or will we be taking the median or average recommendation from a number of risk teams?
- The greatest concern for the entire project is how to maintain the various Stability Fees for the tranches in each Collateral Package in order to accurately price them according to the actual risk premiums of each option.

#### Question & Discussion points for Matthew

- [01:23:03](https://youtu.be/pOA-TIOQBs8?t=4983): Rich's response to Matthews points.
  - How does this all work? We don't know. However, we are not unprepared. The Foundation internally, and the community, have been considering these points carefully for the last 8-12 months.
  - The Governance community of MakerDAO is ultimately the group that helps us answer these questions.
  - The next step in answering these questions is gauging community involvement in these issues and decisions. We are hoping to see what that looks like through the new forum we are launching that will enable us to have longer tail conversations about various topics in Governance.
  - Improving our signaling methods and releasing our next version of the governance portal will help.

#### Links from the Chat

- [Vishesh's Graphs](http://makerdao.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Slides

<details>
  <summary>Click to expand!</summary>
  
![Credit risk](https://i.imgur.com/G0fknoU.jpg)
![Approach](https://i.imgur.com/2p2CNW3.jpg)
![Single CDP Model 1](https://i.imgur.com/P5qks9f.jpg)
![Single CDP Model 2](https://i.imgur.com/16c8nSx.jpg)
![Next Steps](https://i.imgur.com/lyWpCTz.jpg)
![Stochastic Model Assumptions](https://i.imgur.com/A10IOGV.jpg)
![Stochastic Model](https://i.imgur.com/IfFmbpI.jpg)
![Risk Rating](https://i.imgur.com/VOWQwzn.jpg)
![Next Steps 2](https://i.imgur.com/97Cdy8D.jpg)
![No Risk CDP](https://i.imgur.com/s59eSUG.jpg)
![Risky CDP](https://i.imgur.com/b8F4ZbT.jpg)
![Expected Loss to Risk Premium](https://i.imgur.com/M9hSp25.jpg)
