# Episode 45: July 25, 2019

## Agenda

- [00:00](https://youtu.be/YYb3xB_WCfQ?t=1): Intro from Rich Brown
- [07:54](https://youtu.be/YYb3xB_WCfQ?t=474): Recap of Forum Topics from David Utrobin
- [26:22](https://youtu.be/YYb3xB_WCfQ?t=1583): Analysis from Vishesh

### Rich: Summary & Introduction [00:00](https://youtu.be/YYb3xB_WCfQ?t=1)

- In this call we talk about Risk, Risk Parameters, Collateral Types, Governance Issues, and more.
- Over time the topics of the conversation change based on what is currently most important.
- We won't always be talking about purely Risk, like in the past.
- We will aim some of the conversation today towards Governance.
  - Governance is not a solved problem.
  - MakerDAO is on the leading edge for solving Governance issues like: How do we organize lots of people around the world? How do we organize when the stakes are high? What do the mechanisms and processes look like? How do we gather signal?
  - We will be pursuing this in earnest because MCD is coming. When MCD launches depends on two factors. One is the mechanics, the code, audits, etc. The second is Governance and the community.
  - We have a lot to do in the Governance and Risk Community. We need to optimize this process as much as we can.
- Decision making does not happen in these calls. The venue is too restrictive.
- We hope the decisions will be made on the [forum](https://forum.makerdao.com/) itself. We are already beginning to see this happening.
- To bridge what's happening on the forum with the listeners and participants of this call, David is going to do a Recap.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

### David: Forum Activity Recap [07:54](https://youtu.be/YYb3xB_WCfQ?t=474)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Meta Governance: Signal Requests](https://forum.makerdao.com/t/meta-governance-signal-requests/55)
  - Uses polls in the forum to establish governance community consensus on various open questions.
  - 13 votes 100% agreed to use forum polls for temporary soft consensus.
  - Concerns about non-MKR holders voting in these polls. Hopefully, a better solution emerges soon.
- [Signal Request/ Should we modify the SF voting cadence and stepping?](https://forum.makerdao.com/t/should-we-modify-the-sf-voting-cadence-and-stepping/26/5)
  - Consensus forming around biweekly cadence for SF changes as evidenced by both a poll in the comments of this thread (79%/21% in favor, 16 votes) & also as seen in discussions on RocketChat.
  - Hard to say if there's "real" consensus here.
  - Vishesh makes a good point arguing for a biweekly cadence for the SF, in that reacting too quickly to the Dai price may not give enough time for the effects of the previous changes to be seen.
- [Signal request/ Poll: Define standard stability fee changes based on recent price of DAI](https://forum.makerdao.com/t/signal-request-poll-define-standard-stability-fee-changes-based-on-recent-price-of-dai/132/)
  - There is a lot of pushback in this thread.
  - Open questions still exist about the parameters: VWAP? 1 day? 3 days? 7 days? What's the lag time for effects to kick in?
  - Not a lot of strong consensus.
- [Signal Request/ Should we move to exponential rate stepping for stability fee polls?](https://forum.makerdao.com/t/signal-request-should-we-move-to-exponential-rate-stepping-for-stability-fee-polls/40)
  - Saw positive support (16 votes total, 75%/25% in favor)
- [Ongoing Initiative/ Meta: Coordinating Collateral Due Diligence](https://forum.makerdao.com/t/meta-coordinating-collateral-due-diligence/101)
  - Call to action for community members to do Due Diligence on Collateral in the onboarding process.
  - 27 votes in the poll volunteering to do the work.
  - Cyrus said to wait on this since a lot of due diligence is being handled by integrations and risk team internally. More info rolling out about this in the next couple of weeks.
- [Ongoing Initiative/ Systemic Risk Directory](https://forum.makerdao.com/t/systemic-risk-directory/157)
  - This thread puts a poll to unique risks and seeks a signal about our concern for each. It also links the discussion thread for each listed risk.
- [Ongoing Initiative/ Estimating DAI/USD from the eth2dai order book instead of dex trades](https://forum.makerdao.com/t/estimating-dai-usd-from-the-eth2dai-order-book-instead-of-dex-trades/92)
  - Fascinating analysis. Curious to hear discussion about this method of collecting Dai price.
  - This method would eliminate the VWAP metric but could be replaced by some other weighted average.
- [On The Horizon/ Navigating the waters between now (SCD) and MCD with the DSR](https://forum.makerdao.com/t/navigating-the-waters-between-now-scd-and-mcd-with-the-dsr/80/)
  - What is the best way to transition over, step by step? Mrabino gave a good 1st take on a wise method to set it up.
- [On The Horizon/ Is anything wrong with the DSR and Stability Rate calculations as planned for MCD?](https://forum.makerdao.com/t/is-anything-wrong-with-the-dsr-and-stability-rate-calculations-as-planned-for-mcd/39/)
  - Under the currently proposed system and policy, there is no adequate tool that can be used to curtail a high demand for a single collateral package without negatively affecting other collateral packages, especially those with lower risk premiums.

## Risk

### Vishesh: Dai Analytics [26:22](https://youtu.be/YYb3xB_WCfQ?t=1583)

#### Relevant links

[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price: [26:22](https://youtu.be/YYb3xB_WCfQ?t=1583)

- The peg is good at the moment, almost squarely at \$1.
- The trading volumes recently are relatively low, today around 3.9MM. They are light, but not so small that we should be concerned about Dai price distortion.
- We had been below the peg on average for the first weeks in July, but have since recovered.
- Some of the driver of the Dai price is the Eth price, not just the Stability Fee.
- We've entered into a bit of "periodicity" with what's going on with Dai. Meaning you can see the lag in the result of the past Stability Fee adjustments.
- The correlation between the Stability Fee and the Dai Price is not a very strong relationship, but when you see it in the context of multiple variables, it begins to make sense.
- At the time of the 20.5% SF adjustment, ETH was experiencing sudden downward price movement. During the decrease, we didn't see any immediate effect on the Dai price, but after the ETH decrease, it began to move back up to \$1.
- Leveraging behavior affects the Dai price most; the Stability Fee is like a sensitivity parameter to Dai.
- The volatility of Dai has decreased compared to the past (Early March)

#### Dai Supply: [36:25](https://youtu.be/YYb3xB_WCfQ?t=2189)

- You can see some periodicity in the repeated patterns under very different Stability Fee rates.
  - See March-May & June-Aug sections of the Dai Supply chart on http://makerdao.descipher.io/
  - Dai was far more volatile during the March-May period, the supply was higher, oversupply higher, but in terms of nominal price and supply, it wasn't a huge difference.
- Dai is a very high time-preference currency, very often (at least when it comes to dealing with CDPs)
- At a higher Stability Fee we are seeing less Dai volatility.
  - I think this may also be attributed to higher confidence in the ability to arbitrage Dai as well.
  - Also, I believe less oversupply is also lowering the volatility.
- With the 20.5% SF, and a tremendous amount of stress on the people longing ETH, we saw a considerable decrease in supply from 93MM down to 78MM.
- This recent supply drop has been a legitimate destruction of oversupply.

#### Circulation & Age of Debt: [41:45](https://youtu.be/YYb3xB_WCfQ?t=2508)

- Open debt had decreased in age while closed Dai debt has increased to the point where its higher than the age of open debt.
  - Effectively this means more old loans are getting paid back. Repayment of old debt is a useful metric. It keeps unrealized fees lower. It decreases overall risk, and it increases the financial efficiency of the Dai economy.
- The decrease in `open_dai_days` ties into the metric of more of the new debt being drawn out of newer CDPs and less new debt has been created recently, while more old debt has been closed out. This makes sense considering the enormous drop in the Dai supply recently.

#### Collateralization Ratio: [43:52](https://youtu.be/YYb3xB_WCfQ?t=2632)

- With the 20.5% increase, CR had run-up due to wipes of Dai and not an equivalent removal of collateral.

#### Secondary Lending Platforms: [48:25](https://youtu.be/YYb3xB_WCfQ?t=2906)

- This is where the magic has been going on for the past week.
- We saw the Dai market on Compound increase by about 10 MM, 30MM+ market now.
- I don't want people to think this massive Dai supply drop is a bad thing. It's not that simple. It was a destruction of oversupply, there may be some slight decrease in demand (it would be stupid to exclude that scenario), but this is not the whole picture.
- The Weighted-Average-Borrow-Rate(WABR) has come up within spitting distance from the Stability Fee because of the interest rate model update and overall utilization of SLPs.
- Compound utilization has been consistently high.
  - Excess amount of supply is very low, less than 2MM total usually.
- 38% of total supply of Dai is being borrowed on SLPs.
  - This isn't something to be worried about per se.
  - The narrative of SLPs taking market-share away from Maker is mistaken.
  - At least half of the decrease in the Dai supply can be reasonably explained by increased awareness and usage of SLPs.
- The increased amount of SLP usage has made the market more efficient. Awareness is up. This explains a good portion of what's going on with the decrease in supply.
- This does not signal a decrease in demand but instead looks like an increase in market efficiency.

#### Questions to Vishesh

- [31:00](https://youtu.be/YYb3xB_WCfQ?t=1864) Rich: How hard is it to figure out the sensitivity level of the SF to the ETH price and Dai peg? Is it possible to determine?
  - It is possible. When I initially ran the numbers, I found a very reliable r^2 value when looking at the relationship between ETH and Dai price using SF as a modifier. It was in the range of 60-70% before the recent crash. While direct relationship between ETH and Dai price was 20-30%.
  - There are proxies for understanding leveraging behavior that we need to use since we don't have a direct variable that shows leveraging behavior. Looking at some of these proxies is decent, but a more holistic view is looking at the ETH & Dai graphs and asking yourself questions to help you understand what's going on.
- [45:22](https://youtu.be/YYb3xB_WCfQ?t=2722) David: Are the # of ETH locked in CDPs with 0 Dai debt an important metric to keep track of? Is this being filtered out in these charts?
  - In terms of total collateral in the system, I believe I am still counting this ETH. Though most of the calculations I do I filter out 0 debt CDPs. I've graphed them before. It's an edge case and is not a significant portion of the ETH supply in the Dai Credit System.
- [55:45](https://youtu.be/YYb3xB_WCfQ?t=3345) David: Do you see parity between the Maker SF and Borrow rates on SLPs as a significant point of data?
  - It is significant. Dai is inherently asymmetric. If you drop the Stability Fee below the Compound borrow rate, you will incentivize refinancing.
  - Refinancing back to Maker might happen quicker since the rate is more predictable than the Compound borrow rate.
- [01:00:09](https://youtu.be/YYb3xB_WCfQ?t=3609) David: What would we have to see for rates on Dai borrowing to become naturally lower?
  - The question is, when do you consider data-driven reasons for decreasing the stability fee? You watch excess supply and utilization rates on SLPs. You ask, to what extent is there an excess Dai supply and to what extent can that shield the demand curve from the Stability Fee being potentially too high.
  - You don't lower the Stability Fee to lower it; you should only lower it when the data shows that it is too high. This is an important subtle point that gets lost.
  - I think it's dangerous to make decisions that are not based on any good reasoning.
- [01:09:30](https://youtu.be/YYb3xB_WCfQ?t=4173) Psybull: Is the SF being above the max cap of Compound an issue? I'm afraid it creates an issue where it will always be incentivizing refinance to the point of 100% utilization constantly. I worry this could create an adverse feedback loop.
  - I am more worried about the rates being higher than the Maker SF. This would cause refinancing and an increase in Dai supply.
  - I think it's in Maker's best interest for SLPs to have lower borrow rates.
  - It could be bad for the peg during a scenario where the supply rate is higher than the SF.
- [01:19:30](https://youtu.be/YYb3xB_WCfQ?t=4770) Psybull: What do people think about posting their voting rationale?
  - David: It's good when it's done well. It gives newcomers the ability to see the reasoning for other voters. However, the cognitive overhead seems like a lot. Though it may be useful to have as an option.
  - Vishesh: I agree with your conclusion but going to push back on the reason. I think there is a problem in Maker Governance in that there is a disconnect between the conversation and what the votes end up being. I believe in order to have effective governance we need to resolve that gap. I think there is a lack of visibility into the thought processes and rationale behind voter decisions.

#### Links from the Chat

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
