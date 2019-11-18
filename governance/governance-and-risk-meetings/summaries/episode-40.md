# Episode 40: June 20, 2019

## Agenda

- [00:00](https://youtu.be/lSfXtvCplwc?t=1): Intro from Rich Brown
- [09:10](https://youtu.be/lSfXtvCplwc?t=552): Analysis from Vishesh
- [25:02](https://youtu.be/lSfXtvCplwc?t=1502): Cyrus's Collateral Risk: Quantitative Analysis
- [01:02:12](https://youtu.be/lSfXtvCplwc?t=3738): Matthew Rabinowitz Conversation about DSR and VaR Relationship

## Summary & Introduction

### Rich [00:00](https://youtu.be/lSfXtvCplwc?t=1)

- Discussion about things in the call continue in this Reddit Thread.
- Don't be hesitant to give us feedback, questions, comments, and concerns about these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.

#### Governance: [01:15](https://youtu.be/lSfXtvCplwc?t=80)

- Our poll this week, up until the very end, was set to lower the Stability Fee to 15.5%, but in the end the poll option for raising the fee to 17.5% won out.
- Community recognized this, there was discussion and campaigning, and as a result it seems like MKR voters responded.
- We're still dealing with voter apathy in the Governance polls.
- Discussion about Cadence and Governance engagement can be found in this [thread](https://www.reddit.com/r/mkrgov/comments/c12grh/governance_skip_this_weeks_stability_fee_poll_and/)

## Risk

### Vishesh: Analytics [09:10](https://youtu.be/lSfXtvCplwc?t=552)

[Vishesh's Graphs](http://makerdao.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price: [09:10](https://youtu.be/lSfXtvCplwc?t=552) + [15:50](https://youtu.be/lSfXtvCplwc?t=951)

- Things have been going well for Dai, price has been broadly stable. Though there is an observable drift down recently. No telling if it's a real problem yet.
- Since the 16.5% SF, the Dai price has drifted down a little.

#### Dai Supply: [11:30](https://youtu.be/lSfXtvCplwc?t=690)

- Dai supply has risen quite a bit in the past two weeks. We went from 80MM -> 85MM.
- A few large positions seemed to have refinanced back into Maker. This may possibly be a delayed effect of the 16.5% Stability Fee decrease.
- Average age of debt level, which has been dropping since the 19.5% Stability Fee adjustment, has halted around the time the 16.5% SF adjustment. This seems to be a stable level for this metric. The rate of the amount of loans that are paid back has stopped changing.

#### Collateralization Ratio: [14:25](https://youtu.be/lSfXtvCplwc?t=867)

- Even though people seem to be refinancing their debt back into Maker, because we are seeing the Collateralization ratio remain at high level signals that people are not being as aggressive with leverage.

#### Secondary Lending Protocols: [16:55](https://youtu.be/lSfXtvCplwc?t=1015)

- The overall outstanding borrow and supply volumes exploded long term, but since then they have remained fairly steady.
- The increase in supply is primarily attributed to Maker, since borrow volumes on SLPs didn't increase.

#### Questions to Vishesh

- [18:30](https://youtu.be/lSfXtvCplwc?t=1110): We look at SLPs as leading or potentially driving the SF equilibrium point. Does the Debt ceiling have an effect on the usage of SLPs? Or is it a totally separate metric all together?
  - The Debt Ceiling becomes a factor the closer we get to it. However the SLPs serve the function of eating up inefficiency. SLPs ease the pain of supply/demand imbalances.
- [22:15](https://youtu.be/lSfXtvCplwc?t=1335): Seems like you have moved from looking at ETH price in terms of the current price vs moving avg, to now just looking at outright price, any insight into how you're thinking about this metric?

### Cyrus: Quantitative Analysis: [25:02](https://youtu.be/lSfXtvCplwc?t=1502)

- Slides can be found below.
- The goal is to take everything we know about a given collateral, and to give it a Risk rating.
- We will eventually talk about how the Risk rating affects parameter selection.

#### Goals and Strategy: [28:05](https://youtu.be/lSfXtvCplwc?t=1685)

- Philosophical Goals

  - Dai becomes the first unbiased world currency
  - Promote the stability and integrity of Dai
  - Facilitate safe and responsible growth of Dai supply
  - Create sensible approach to hard problems

- Operational Goals
  - Define what the various risk parameters represent
  - Build scientific models that calculate the parameters
  - Understand weaknesses, vulnerabilities, and failure modes
  - Tie in decentralized governance into the entire process
  - Tie in monetary policy/DSR
  - Build tools to monitor system health and aid us in updating our risk parameters
- Strategy
  - Modular Approach
  - Start Academic -> Move to Pragmatic
  - Build a simple model with various assumptions, which we will relax one by one.
  - Conservative liquidity analysis
  - Conservative correlations
  - Conservative debt ceiling analysis
  - Example analysis will be done on ETH

#### Inputs: [35:46](https://youtu.be/lSfXtvCplwc?t=2146)

- Collateral application
- Trading profile
  - collect trade history
  - curate for wash trading
  - calculate/compile metrics such as historical variance and daily returns
  - collect order book data for more robust liquidity analysis
- Historical CDP statistics
  - Time series of collateralization ratio distributions
- Current CDP distribution
  - Current Collateralization Ratio distribution

#### Outputs: [28:27](https://youtu.be/lSfXtvCplwc?t=2309)

- Preliminary outputs
  - Due diligence report
  - Risk rating
  - Liquidity analysis
    - Delta of SF with respect to Liquidation Ratio
    - Create as many combinations of parameters as you want
  - Collateral-specific Risk Premium(RP+DSR-adjustment=total_StabilityFee)
- Secondary outputs
  - Correlations
  - Portfolio modeling
  - Stress tests and simulation
  - Economic capital
- Ultimate outputs
  - Debt Ceiling

#### Building Blocks: [40:50](https://youtu.be/lSfXtvCplwc?t=2454)

- CDPs
  - Traditional loans are a contextual starting point to help explain CDPs, which are different in many ways.
  - A CDP is a Dai denominated loan
  - How is the risk of a loan evaluated?
  - A traditional lender cares about nonpayment of any promised payments that give rise to economic loss
  - Two areas of focus are: Default and Collateral
- Default
  - To quantify this default or credit risk, a good starting point is to think about loss distributions. Different types of loans have different distributions.
  - How much of your loans do you expect to get back on average. Or, alternatively, expect to not get back , also known as the _Expected Loss_(EL)
  - Intuitively, the EL is the mean of a distribution whose individual losses depend on 3 factors
    - the amount loaned out, or _Exposure Amount_(EA)
    - The likelihood of not getting paid back, or _Probability of Default_(PD)
    - The amount you don't expect to recover, or _Loss Given Default_(LGD)
  - Very generalized models applies to all collateral types

#### Expected Loss: [47:42](https://youtu.be/lSfXtvCplwc?t=2862)

##### Slides

![](https://i.imgur.com/TuvebOc.jpg)
![](https://i.imgur.com/WDvCyHn.jpg)

#### How to calculate PD and LGD: [51:25](https://youtu.be/lSfXtvCplwc?t=3089)

- Reputation infers the likelihood of repayment
- Credit scores, employment, and other metrics are a proxy for reputation
- Backwards-looking metrics: data mining, historical default frequencies
- Forward-looking metrics: "You're a good guy, I trust you"
- Disincentives to default (credit score penalty, Liquidation penalty, etc.)
- Still, defaults happen and there are repercussions.

#### Collateral

- For obvious reasons, lenders sometimes prefer secured loans with pledged collateral in addition to reputation.
- As the amount of pledged collateral goes up, credit spread goes down.
- Default is much less painful for the lender due to the liquidation value of the collateral (i.e.: much smaller LGD). Variance reduction.
- Mortgages are secured loans where the collateral is the property. Incentivizes repayment.
- There are now two ways for this loan to go bust: nonrepayment, or collateral value falls.
- In a mortgage, the collateral is typically stable-ish, so focus can still remain on likelihood of repayment.
- In a collateral-only model, we need to update our PD and LGD definitions.
- A CDP has no term, and no scheduled repayments (non-payment is no longer a thing).
- Probability of default for a CDP is now proxied by the probability that the asset price crosses a barrier threshold (with a few minor modifications for behavior)
- Loss Given Default is now the expected liquidation value of the collateral through the recourse process (hint: this is where the liquidation ratio comes in)
- These are the two key parameters we need to reason about as we calculate the Expected Loss of the CDP and the associated credit spread (our collateral risk-premium)
- Some care to be taken with EA as well.

#### Questions for Cyrus

- [45:08](https://youtu.be/lSfXtvCplwc?t=2708): How do we best define default in the context of MakerDAO?

#### Matthew Rabinowitz: [01:02:12](https://youtu.be/lSfXtvCplwc?t=3738)

- This is a continuation from what we talked about last week.
- Defining and measuring the risks is one part of this, while another part is the problem of how we will go about maintaining the risk distribution for every type of collateral that is brought onto the system.
- We need to answer the question of how do we make sure risky assets are appropriately priced in the system?
- Main question: When MCD comes out, are we going to be voting in the risk premiums per asset package? or are we planning on voting for the risk premiums plus a flat DSR on each asset package?

#### Question & Discussion points for Matthew

- [01:12:02](https://youtu.be/lSfXtvCplwc?t=4322): We've been dancing around this topic for a couple of weeks. It seems there are two separate issues: How do you determine whether risk parameters have been properly calibrated, versus, do you need to change the universal nature of the function of the DSR and make it more targeted? I understand if there is oversupply it is simple to say the DSR should be calibrated to soak up excess Dai. Separately there's the point that that functionality can be taken advantage of by a given asset, if that asset's risk parameters are not set properly. Then the question is why don't we tackle this problem at its root and fix the risk parameters if they are improperly calibrated?
- [01:14:02](https://youtu.be/lSfXtvCplwc?t=4442): Another problem is that your solution is penalizing assets that are latecomers to the collateral pool.

#### Links from the Chat

- [Reddit Discussion Thread about Governance Cadence](https://www.reddit.com/r/mkrgov/comments/c12grh/governance_skip_this_weeks_stability_fee_poll_and/)
- [Vishesh's Graphs](http://makerdao.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### All the Slides

![Quantitative Analysis Outline](https://i.imgur.com/L6NPg8y.jpg)
![Philosophical Goals](https://i.imgur.com/GuC1UeU.jpg)
![Operational Goals](https://i.imgur.com/DhEHstE.jpg)
![Strategy](https://i.imgur.com/1aWhqdT.jpg)
![Strategy 2](https://i.imgur.com/SJ0YYj9.jpg)
![Simple Risk Model](https://i.imgur.com/lMvpQvq.jpg)
![Inputs](https://i.imgur.com/n9Fgwoz.jpg)
![Outputs](https://i.imgur.com/WmGKu5e.jpg)
![CDPs](https://i.imgur.com/cZBDfni.jpg)
![Default](https://i.imgur.com/tOPlyZk.jpg)
![Expected Loss](https://i.imgur.com/cePUWpe.jpg)
![Example](https://i.imgur.com/YmXXUch.jpg)
![How to calculate PD and LGD?](https://i.imgur.com/txAypRA.jpg)
![Collateral](https://i.imgur.com/3ZxYJEe.jpg)
![Debt types](https://i.imgur.com/b7cUhyZ.jpg)
![Collateral](https://i.imgur.com/23Iwdyt.jpg)
