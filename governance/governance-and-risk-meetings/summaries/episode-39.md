# Episode 39: June 13, 2019

## Agenda

The theme for this call will be 'Collateral Risk'

- [00:00](https://youtu.be/MBdpqqMZRNg?t=25): Intro from Rich Brown
- [14:02](https://youtu.be/MBdpqqMZRNg?t=1442): Cyrus's Collateral Risk: Onboarding and Due Diligence
- [01:00:06](https://youtu.be/MBdpqqMZRNg?t=3611): Analysis from Vishesh
- [01:15:30](https://youtu.be/MBdpqqMZRNg?t=4530): Matthew Rabinowitz ideas about DSR and VaR Relationship

### Summary & Introduction

#### Rich [00:00](https://youtu.be/MBdpqqMZRNg?t=25)

- Discussion about things in this call continue in this Reddit Thread.
- Don't be hesitant to give us feedback, questions, comments, and concerns about these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.

##### Governance [03:40](https://youtu.be/MBdpqqMZRNg?t=221)

- We're seeing some rational behavior with the voters, in the form of voters being fairly engaged with Data coming out of these calls and discussions. The stake weight is being applied conservatively, hovering around the point where we stay where we're out.
- Minor competition between a 1% decrease and preferring the current stability fee. The winner this week was keeping the fee at 16.5%.
- If things were off the rails we would see voters try to manipulate the interest rate for their own agendas, so it seems all incentives are aligned.
- We have a basic Governance system that works. We're willing to experiment at this stage and try to iterate on the Governance System.
  - Question to the community: Do we need to vote every week? And how do we answer this?
  - We would love to see discussion about this happen below in this thread.
  - Do we Poll next week for a SF adjustment? Or can we skip one week to do a cadence poll, since we may only hold one at a time currently.
- Other questions revolve around participation, voter apathy, sufficient MKR lockup in the Governance system, etc..
  - As MKR participation in governance lowers, security of the system is lowered as well. _(This is especially true in SCD, since there is no Governance Security Module)_
- I'm becoming more and more a fan of becoming a fan of promoting community built solutions to the Governance system. Whether it's front ends, notification tools, and more, we want to encourage our community to develop these types of categories.

#### Questions & Short discussion

- [12:33](https://youtu.be/MBdpqqMZRNg?t=754): Can we vote in community delegates for deciding cadence and topics for polling?
- Rich says delegation may be a great idea, but there are many things to consider
  - Can other people handle this through some community built tool?
  - What are other things to consider? Veto power? Risk of a central arbiter to manage Governance Polls.
  - The foundation does not have resources currently to do this on our own, it's not our current responsibility to develop it.
- Vishesh's comment on the topic:
  - Delegation is the Foundations responsibility since it greatly affects voter participation and has such huge implications.
  - Rich answers: We are for the initiative, but we aren't necessarily the ones who need to develop it.
- David's comments:
  - Large MKR stakeholders also have this in their interests. They should consider funding grants privately to build solutions on their own.
- Cyrus:
  - This is still very early stage governance, we may see more participation with the rise of collateral discussions and votes.

### Risk

#### Cyrus: Collateral Risk: [14:02](https://youtu.be/MBdpqqMZRNg?t=1442)

- The general process, as we've covered before, is onboarding collateral. This is followed by due diligence, where the data is collected for the qualitative model. Then we transition into converting the data to fit into a quantitative model.
- Today we will talk a bit about the onboarding process, but more so about Due diligence.
- [27:20](https://youtu.be/MBdpqqMZRNg?t=1640): Onboarding Application will consist of:
  - Technical Audit
  - Risk Audit
  - Counterparty Audit
  - Filter and Sort
  - Governance Implications
- [29:49](https://youtu.be/MBdpqqMZRNg?t=1789): Due Diligence
  - Goals:
  - We need to conduct an assessment to gain a qualitative assessment of the risks embedded in the collateral in question
  - After this assessment, we need to convert this into numerical scores that can be input into a model that determines risk parameters.
  - [32:50](https://youtu.be/MBdpqqMZRNg?t=1970): Classifying the asset happens first
  - Bearer assets
    - Type of token
    - Recourse is a non-factor
    - Downside has a high correlation
  - Registered assets/STOs
    - Type of security
    - Issuer analysis
    - Recourse analysis
  - [36:18](https://youtu.be/MBdpqqMZRNg?t=2179): Understanding other classifications
  - Base layer tokens
  - Utility Tokens
  - Work tokens
  - Governance tokens
  - Staking tokens
  - Security tokens
  - [39:15](https://youtu.be/MBdpqqMZRNg?t=2358): Fundamental Analysis
  - Team
    - Experience, professional network, leadership
  - Technology
    - Progress, quality, core product, roadmap, adoption
  - Community
    - Sentiment, PR, social signals
  - Business potential
    - TAM, competition, strategy
  - Token
    - Distribution, design, funding, legal structure, exchanges
  - Valuation Model
    - Helps gauge downside volatility and debt ceiling (ex. height of bull market)
    - Bearer Assets use token valuation models
    - STOs use standard valuation models
  - What's the worst that can happen with (Estimated Shortfall calculation) & How will the market treat these going forward:
    - Money tokens - SoV risks
    - Utility tokens - Velocity risks
    - Work tokens - Fork risks
    - Governance tokens - Value capture risks
    - Staking tokens - Technical risks
    - Security tokens - Counterparty risks
  - [49:13](https://youtu.be/MBdpqqMZRNg?t=2953): Risk Analysis
  - Adversarial thinking/edge cases
    - Recourse analysis
    - Exchange delistings
    - Poor operational management/leadership
  - Event risk not seen in historical trading record
    - Centralized collateral
  - Trader's instinct
  - [53:00](https://youtu.be/MBdpqqMZRNg?t=3180): Scoring Framework
  - Create ratings framework and apply to collateral
  - Convert everything into numerical inputs
  - [Example: ETH!](https://i.imgur.com/pO35b1I.jpg)
- [55:47](https://youtu.be/MBdpqqMZRNg?t=3347): Philosophy
  - I think we will be seeing a lot of Conservatism
  - Common Sense
  - Patience
  - Unbiasedness
  - Scientific Governance
- Community Involvement
  - Verify data from collateral applications
  - Help create diligence reports
  - Reach out! @cyrus on rocket chat

#### Questions during Collateral Risk section

- [31:11](https://youtu.be/MBdpqqMZRNg?t=1871): Akiva asks, Isn't the risk more to do with bad liquidations specifically? Based on comments from Vishesh's analysis last week.
  - Vishesh answers, bad is specific to the parameter you're talking about. Not all liquidations are bad, but when you talk about liquidations above a certain size or frequency that's what you need to guard against. There are examples of different risks that would ultimately affect this end.
- [35:09](https://youtu.be/MBdpqqMZRNg?t=2109): David asks, are bearer assets vs non-bearer assets the two main classifications that all others should fall under? Or are these just broad strokes?
  - Cyrus answers, there aren't assets that fall outside of these categories. Differentiating by the presence of counterparty risk is a worthwhile distinction for risk modeling.
- [38:10](https://youtu.be/MBdpqqMZRNg?t=2290): David asks, this next set of classifications can overlap between bearer and non-bearer right? They are just a more particular way of classifying assets.
- [50:46](https://youtu.be/MBdpqqMZRNg?t=3046): David asked about how we can come at "Trader's Instinct" as a legitimate metric. Is it a feeling, or an actual risk?
  - Cyrus answers, first one needs to recognize that there's something wrong and how bad it can get. Even considering these risks are beneficial.
- 58:06](https://youtu.be/MBdpqqMZRNg?t=3486): Vishesh asks, once initial modeling is done and parameters selected, how often should we reevaluate an asset?

#### Vishesh: Analytics [01:00:06](https://youtu.be/MBdpqqMZRNg?t=3611)

[Vishesh's Graphs](http://makerdao.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

##### Dai Price: [01:00:06](https://youtu.be/MBdpqqMZRNg?t=3611)

- The last week has been fairly stable. In the last 24hrs ETH price jumped and we are now seeing a depressed Dai price.
  - This may be a short term effect or it may be a result of lowering the SF too much. It's hard to tell currently.
  - This change may also be a topic worth considering for future governance votes.
- Trading volume has shrunk over the last two weeks and has spiked up again last night
  - These spikes coincide with 2 things: selling of ETH to cash out profit for Dai, or more often people selling Dai to lever up on ETH.
    - Based on what's been going on with secondary lending rates, I believe it is the latter. That people are levering up again.
- Dai/ETH price relationship:
  - The trend between Dai price and ETH price has lightly tracked, but we're starting to see a bit of divergence from that, but it is too soon to say.

##### Dai Supply: [01:03:33](https://youtu.be/MBdpqqMZRNg?t=3823)

- Supply had been consistently going down, but in the last few days this has picked up. 83mm Dai at the time of this call.
- How do we know with confidence what's a trend versus a short term movement?
  - Time is what generally tells us that.
  - As we look at long-run averages we'll get a better picture.
- Circulation of debt:
  - The trend has been very clear. There wasn't a huge impact on the amount of old debt being paid back, or the amount of new debt being taken up as the SF was increasing to 19.5%.
  - Once we hit 19.5% the significant impact caused old debt to be paid back, which coincided with the increased usage of Secondary Lending Platforms.
  - Amount of unique users interacting with CDPs has continually increased, which is a good metric in terms of usership and practice.
  - Over time, a larger portion of the debt is being drawn out from existing CDPs.

##### Collateralization Ratio: [01:08:00](https://youtu.be/MBdpqqMZRNg?t=4087)

- We saw a huge runup in the CR after April. But as Eth price came down a bit after the spike we've seen deleveraging behavior in the form of people withdrawing collateral from the system and paying back Dai.
- In the past couple of days the CR has ticked up again, which may mean 16.5% is still attractive for leverage seekers.

##### Secondary Lending Protocols

- The borrow/supply volumes remained steady for the past couple of weeks. However, they shrank a bit recently, even with the uptick in Dai supply. This may signal that people are interested in refinancing debt back to MakerDAO with this lower rate.
- Next week I will do more of an overview of lending.

##### Questions to Vishesh

- [01:11:50](https://youtu.be/MBdpqqMZRNg?t=4312): Rich asks, have you seen any evidence of people willing to buy cheap Dai? In light of the evidence that it does return to the peg eventually.
  - It is difficult to measure people's "willingness" to buy Dai below \$1, but the same kind of stressors that have caused Dai price to drift consistently below the peg have now had a lessened impact on Dai Price. I think this is happening likely because there's more confidence in Dai-peg arbitrage.

#### Matthew Rabinowitz: [01:15:30](https://youtu.be/MBdpqqMZRNg?t=4530)

- In last week's Narrative of MakerDAO went through the Math of what the SF would look like in a Multi Collateral World.
- Currently the SF is almost purely a policy tool to tweak supply and a reference for knowing the buy/burn ratio of MKR. In MCD the SF becomes the culmination of the DSR + Operating expenses + Risk Premium of the collateral package.
- Ignoring Operating expenses like Risk Teams and Oracles, there is a natural tradeoff between the DSR and the Risk Premium that gets associated with that collateral package.
- Very interesting conversation about the relationship between VaR and DSR rate, and how they should be mathematically related in order to prevent high-interest rates on safe assets.

#### Links from the Chat

- [Matthew's Slides](https://docs.google.com/presentation/d/1t0uuDfWwUvCwN2Ot5pchxX1TmCrVv54QVzsPdwWX58I/edit#slide=id.p)
- [Vishesh's Graphs](http://makerdao.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### **_Priority Topics for Discussion in the comments below_**

- Do we need to vote every week? And how do we answer this?
- We would love to see discussion about this happen below in this thread.
- Do we Poll next week for a SF adjustment? Or can we skip one week to do a cadence poll, since we may only hold one at a time currently.
