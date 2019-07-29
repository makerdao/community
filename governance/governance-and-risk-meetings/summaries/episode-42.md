# Episode 42: July 4, 2019

## Agenda

- [00:00](https://youtu.be/5QDgbgfG8qc?t=7): Intro from Rich Brown
- [11:31](https://youtu.be/5QDgbgfG8qc?t=692): Analysis from Vishesh
- [52:06](https://youtu.be/5QDgbgfG8qc?t=3126): Matthew Rabinowitz Discussion

## Summary & Introduction

### Rich [00:00](https://youtu.be/5QDgbgfG8qc?t=7)

- Discussion about things in the call continue in this Reddit Thread.
- Don't be hesitant to give us feedback, questions, comments, and concerns about these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.

#### Governance

- Something interesting happened in the Governance poll this week. We saw an example that we've seen in the past, where the direction of the Governance Poll shifted in the last few hours. The winning poll is a raise of the Stability Fee to 18.5%.
- This goes to show that when there is voter apathy, a smaller number of people will be able to push forward proposals to Executive votes.
- We soft-launched a [forum](https://forum.makerdao.com/) for Maker Governance conversations. It is better than the r/mkrgov subreddit in that it helps conversations avoid from being buried, it is more convenient for posting research, and it is a place where better conversations can happen.
- The forum will also help with governance in that it well be a place where we will be able to see clearer signals of the Governance communities consensus on various long-form conversations and topics. The Forum has a light reputation system built-in as well as a polling system. This alongside the new Governance update will help us by enabling more robust signaling.

## Risk

### Vishesh: Analytics on Monetary Policy [11:31](https://youtu.be/5QDgbgfG8qc?t=692)

[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price: [11:31](https://youtu.be/5QDgbgfG8qc?t=692)

- The peg is low enough where we should pay attention to it, but it could recover on its own. Therefore, no action is necessary in my opinion.
- The Debt Ceiling is coming very close, which is something we need to pay attention to.
- ETH is probably the culprit, but the lower stability fee appears to increase sensitivity of the system to price movements.
- Question to the community is, when we see some imbalance in the peg how long do we wait before we should act considering the peg could recover on its own?
- The ETH price was running up for most of the month, with a sharp drop in the last week. ETH and Dai does have some correlation, but it changes over time with other variables. I believe when people are levered up on ETH, Dai tracks ETH differently than when there is less levering going on.

#### Dai Supply: [19:28](https://youtu.be/5QDgbgfG8qc?t=1168)

- The supply has been increasing.
- Cumulative loans issues has increased from 300MM to 360MM since early June, a 20% increase. This is an acceleration in the amount of Dai that is being issued.
- As the supply was steady between 19.5 & 16.5%, it is a data point that somewhere in between was a relatively steady state for Maker at that time. It's not just the SF in isolation. Secondary Lending rates and volumes became a buffer layer.
- As the stability fee was reduced to 16.5%, similarly ETH was making a price trend reversal around that time (first week of June). At this time period it seems people began seeking leverage on ETH again. This contributed to increase of supply.
- I keep seeing this debate about the Stability Fee, what it is, what its effects are, and how all of these things would be happening if we never raised the Stability Fee. My answer is that it's not that simple. The Stability Fee is like the sensitivity to the system, while ETH price actions are the signals that trigger change in user behavior.

#### Circulation of Debt: [22:56](https://youtu.be/5QDgbgfG8qc?t=1376)

- The average age for open debt has been dropping due to large amounts of new debt being drawn out. Additionally, we saw a lot of older debt be paid back since the 19.5% SF adjustment in early May.
- While average age of old debt is still dropping, we are seeing that debt age at time of close has remained steady. This just means more new debt is being issued without being paid back in short timeframes.
- In the past week or two, some newer CDPs are being used for loans.

#### Collateralization Ratio: [25:05](https://youtu.be/5QDgbgfG8qc?t=1505)

- In May we saw the Collateralization Ratio come up nominally with price. We then saw the decrease happen with price as well, but with an additional intensity. This reinforces our thinking about user behavior around ETH price movements.
- When we see the collateralization ratio move down with ETH there are more liquidations and will tend to cause users to top up their CDPs, this is why the move downward seems muted. Conversely, when ETH goes up users are not too quick to pull collateral out of their CDPs in anticipation of a correction.

#### Secondary Lending Platforms: [28:38](https://youtu.be/5QDgbgfG8qc?t=1718)

- I added two new metrics of the lending rates on variable term platforms (dYdX & Compound).
- On a weighted average basis, how much are people paying to borrow or receive Dai.
  - You can see in the past week where the rates came down a bit and have recently begun to run up again.
  - The spread between the Maker Stability Fee and Rates rends to be around 3-4%.
- Outstanding borrow & supply volumes is the second metric.
  - The amount of borrowed Dai on Secondary Lending Platforms came out of the amount of Dai that would have theoretically been minted out of CDPs.
  - Total borrow volume of Dai from both CDPs directly and SLPs has been consistently increasing. Even though the Dai supply came down during this time. I see this is a good thing, as it narrows the gap between supply and demand.
  - Supply on SLPs has jumped in the past couple of weeks. As long as this supply exists, there is that buffer that I've been talking about. When I see this supply grow it makes me think there is an oversupply rather than an increase in demand. Of course it's not so simple, and we should consider ideas around supply on SLPs.

#### Paid & Unpaid Stability Fees: [36:17](https://youtu.be/5QDgbgfG8qc?t=2177)

- The spread between paid and unpaid stability fees has been increasing lately.
- Theoretical risk exists in the case for unpaid accrued stability fees in the context of migrating to MCD. It is very hard to define if the risk here actually exists.

#### Questions to Vishesh

- [39:00](https://youtu.be/5QDgbgfG8qc?t=2347): What's the proportion of the Dai supply that is being lent out on Secondary Lending Markets?
  - Between dYdX & Compound it's 19.5/90MM Dai.
- [41:05](https://youtu.be/5QDgbgfG8qc?t=2469): Can you help me better understand the concept of revenue in MakerDAO?
  - Revenue is a misleading term in Maker. Stability Fees are paid and cause the deflation of MKR. So overall it's appreciation prevalent.
- [41:57](https://youtu.be/5QDgbgfG8qc?t=2517): Is there a way to have deeper analysis on Dai in SLPs? Helping us understand the lifecycle of various groups of Dai?
  - Possible? Yes. Have I done it? No. This will require a lot heavier chain analysis.
- [44:18](https://youtu.be/5QDgbgfG8qc?t=2658): In relation to Vishesh's idea of letting the Dai peg return on its own in short time frames, isn't it in our interest to try to get Dai trading above and below the peg as frequently as possible in order to build confidence in Market Makers and other players in Dai markets? Why shouldn't we take an aggressive approach with Stability Fee adjustments?
  - (Watch video for full answer)It's not so simple.
- [49:41](https://youtu.be/5QDgbgfG8qc?t=2981): The velocity of arbitrage with Dai is a little slower then fiat backed coins. Do you think this would speed up in the future? or do you think speed is important at all?
  - How fast Dai oscillates above and below the peg is important. I think when that arbitrage cycle is slower this is more risk for the system and market makers. I don't think it's necessarily a problem. However, as Dai becomes more liquid and heavily transacted on that cycle will speed up. But I can't speak to its actual importance.

#### Matthew Rabinowitz: [52:06](https://youtu.be/5QDgbgfG8qc?t=3126)

- The main point I want to chat about is as we migrate from SCD to MCD it's not just about where we're going, but there needs to be clarity about the steps we need to take to do so successfully.
- When we switch to MCD we will be bifurcating the two different ways we've been looking at Stability Fees and Monetary Policy.
- Currently our Risk Policy is mixed with our Monetary Policy.
- Each asset we onboard will have an associated Risk Premium attached to it, by which their Stability Fees are defined. This is in order to make any Dai minted from it riskless (95%).
- The question is, how do we go from SCD to MCD?
- One way to approach this is to pretend we were pricing the current ETH CDP type under its actual Risk Premium. My guess is that it would be far lower than 16.5%.
- We will need rough consensus from the Governance community about how we will handle Monetary Policy in MCD, if we hope to price CDP types fairly according to their Risk Premiums.
- [Related thread](https://forum.makerdao.com/t/navigating-the-waters-between-now-scd-and-mcd-with-the-dsr/80)

#### Question & Discussion points for Matthew

- [01:00:55](https://youtu.be/5QDgbgfG8qc?t=3655): Is the bigger question, "Do we use Stability Fees as a lever to control Monetary Policy in MCD?"
- [01:08:46](https://youtu.be/5QDgbgfG8qc?t=4126): Primoz: I think the DSR is going to be the main lever to adjust for Dai supply & demand imbalances. The monetary premium exists, in that we use the Stability Fee to fund the DSR. However, you have other levers, like Debt Ceilings, you can use to adjust for imbalances.
- [01:15:21](https://youtu.be/5QDgbgfG8qc?t=4521): Would it make sense to use Debt Ceilings as a policy tool to manage Dai oversupply?

#### Links from the Chat

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
