# Episode 37: May 30, 2019

## Agenda

The theme for this call will be 'Collateral Risk'.

- [00:00](https://youtu.be/EmIaugA2fis?t=2): Intro from Rich Brown
- [38:14](https://youtu.be/EmIaugA2fis?t=847): Analysis from Vishesh
- [42:55](https://youtu.be/EmIaugA2fis?t=2532): Matthew Rabinowitz: Recap and thoughts
- [45:35](https://youtu.be/EmIaugA2fis?t=2732): Comments from Cyrus
- [55:57](https://youtu.be/EmIaugA2fis?t=3359): Post-Call Questions & Discussion

### Summary & Introduction

#### Rich [00:02](https://youtu.be/EmIaugA2fis?t=2)

- Don't be hesitant to give us feedback, questions, comments, and concerns about these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.
- Steven will no longer be doing the opening and closing of these calls. Instead, he will be participating throughout the call as a regular participant.
- [04:27](https://youtu.be/EmIaugA2fis?t=267): Governance and Voting overview
  - Executive Vote went a couple of weeks without passing.
  - The Governance Poll that we ran on Monday didn't reflect the current state of the system because of the unpredictable timing of the Executive Vote passing.
  - Our requirements are evolving faster than the governance portal is evolving.
  - The issue of voting on one thing at a time is very limiting.
  - Despite a stable peg, MKR holders still decided to lower the fee. This signaled to the wider ecosystem that the fee does go down.
  - Peg recovery is a situation that does occur and can be effectively dealt with. Now we have a historical reference point to point to moving forward. Our success here also helps the confidence of arbitrageurs.
  - Cyrus Comment: It's interesting to reflect on the very negative social media messages over the last two months. It's important to be aware of the fact that some policy decisions will not be popular, and we need to keep our trust in the scientific governance process as a basis for our decision making.

### Risk

#### Vishesh: Analytics: [14:06](https://youtu.be/EmIaugA2fis?t=847)

[Vishesh's Graphs](http://makerdao.descipher.io/) [DAI 24hr VWAP Graph](http://dai.descipher.io/)

_No video of graphs this week_

**Dai Price**

![](https://i.imgur.com/chmJN7J.jpg)

- 24 hour VWAP price has had a semi-normal distribution. It's been centered around \$1 for the past few weeks. The average has been pushed up above a dollar in the past few days which is actually contrary to what we expected. This speaks to the fact that Dai price is fairly well supported despite the ETH price rise.

![](https://i.imgur.com/T0r0zK1.jpg)

- The volume has been relatively healthy hovering around 2-3MM. The Daily Volume has been significantly higher in the last 3 weeks than it has been in the last 3 months.
- The majority of volume has been on Oasis. Uniswap being in second place.
- The Dai price had been coming up fairly steadily, then since the bull run things have been pretty quiet.
- The decision to drop the stability fee was very recent, and we usually see a lag in response to SF changes so we will have to wait and see what the effect of the decrease will be. Initial signs are quieter than expected.

![](https://i.imgur.com/lkXsXhu.jpg)

- The simple moving volume weighted average has been consistently rising over time, as Dai has proved that it can punch up above the peg. Similarly, ETH price has been tracking those exact movements. Some of the behavior we were observing months ago in the ETH/DAI relationship has reversed over the past few weeks.

![](https://i.imgur.com/pcCGTgh.jpg)

- Regarding Wipes, Draws, and Supply
  - Supply has not significantly changed in the past couple of weeks.
  - It's been down consistently since April, except for a brief runup in mid-April.
  - There has been a lot of movement in Dai, but supply has not changed significantly.
  - Daily Volume has been significantly higher in the last 3 weeks than it has been in the last 3 months.
  - I think a lot of the activity on Dai recently has been on these Secondary Lending Platforms. This is worth exploring.

![](https://i.imgur.com/w3EZuG4.jpg)

- The Age of Debt has come down significantly in the past couple of weeks.
- This means more old loans being paid back, and newer loans being created. This is an indicator of the circulation of debt.
  - [19:24](https://youtu.be/EmIaugA2fis?t=1167): Rich asks, Is this healthy?
  - Vishesh: I believe it is, circulation of debt is important. It's good for fees realized, and also as the costs are realized and effected in the short term it's healthier for users.
- I think there is a potential sign that age of debt will level out, which is expected. However, no conclusions about this yet. I believe there will be a moving equilibrium point based on the Dai supply level.

![](https://i.imgur.com/GLaYbbv.jpg)

- Collateralization Ratio has remained high, but there have been a number of withdrawals of ETH from the system. As ETH price appreciates, people can back out some of their collateral.
  - [26:20](https://youtu.be/EmIaugA2fis?t=1580): Cyrus & Vishesh discuss the maturity of the market

![](https://i.imgur.com/sLtKNgQ.jpg)

- Secondary Lending Stats

  - Interesting to see, there is a balance between Maker and Compound for Dai loan origination. It seems that some of the new Dai that would have been drawn out in this market scenario are being drawn out from other platforms, not from MakerDAO. This gives us a better understanding of why supply has remained steady.
  - [34:27](https://youtu.be/EmIaugA2fis?t=2073): Rich asks, at what point does this become a concern for us? Some discussion ensues.
  - We need to constantly wrestle with the question of, "What is Maker's relationship to the ecosystem"

    ![](https://i.imgur.com/c500tNa.jpg)

  - Repayments: There are more repayments on Maker than any other Lending Platform. So if you can see that origination is similar, but more repayments occur on the Maker platform, this gives a measurable refinancing metric.

#### Matthew Rabinowitz: Thoughts on the future of the Stability fee and DSR: [42:12](https://youtu.be/EmIaugA2fis?t=2532)

- A continuation from last week:
- I'm putting together a working group to think about a PID system recommending a Stability Fee and DSR.
- If we can start putting together corollary data that might guide the recommendation engine of this PID-like system.
- Looking for an AWS engineer who knows a bit about machine learning. Please reach out to u/mrabino1 on Reddit.

#### Cyrus [45:35](https://youtu.be/EmIaugA2fis?t=2732)

- The main takeaway for me is the static Dai supply, despite the huge ETH rally.
- We should potentially look at some alternative indicators like ETH Market Sentiment or demand for Leverage.
- [47:32](https://youtu.be/EmIaugA2fis?t=2857): Cyrus and Vishesh Discuss whether the lack of Dai generation is concerning.

**Collateral Risk Intro & Discussion 51:08**

- These discussions will now be increasing since monetary policy has been less urgent.
- This is a brief introduction to how we are thinking of it internally.
- Monetary policy is very reactive, but with the collateral risk, this is a more proactive and forward-thinking process.
- We will soon be exploring questions such as:
  - What kind of Risks are we looking for?
  - How do we quantify them?
  - How do we blend fundamental analysis and quantitative modeling?
  - How do we build out the collateral portfolio and maintain it?
  - What is the governance process by which we add collateral?
  - What is the governance process by which we interact with Risk Teams?
- I suggest re-reading Steven's 3-part Governance Framework as a primer. They really set the tone for the scientific approach that we have been emphasizing for the past year.
  - [MakerDAO Governance Risk Framework Part 1](https://medium.com/makerdao/makerdao-governance-risk-framework-38625f514101) \| [Part 2](https://medium.com/makerdao/makerdao-governance-risk-framework-fc8939f3d4ehttps://chat.makerdao.com/direct/cyrus?msg=YdFpJa2uz8MoJu5oP9) \| [Part 3](https://medium.com/makerdao/makerdao-governance-risk-framework-part-3-7a4c620f4077)
- We are working on some additional documentation as well.
- The overarching question here is How do we get from inputs to outputs.
  - How do we assess collateral and determine their Risk Parameters.
  - We need to work through assessing it on many different levels both qualitative and quantitative.
- I think there are very elegant answers to almost all the questions. It's a matter of iterating and building it out piece by piece.

#### JoeQ [46:43](https://youtu.be/EmIaugA2fis?t=2803)

- OTC desks are finding it harder to source large blocks of Dai.

### Post-Call Questions & Discussion [55:57](https://youtu.be/EmIaugA2fis?t=3359)

- [55:57](https://youtu.be/EmIaugA2fis?t=3359): Vishesh asks, What type of work are we planning around looking at intercorrelations between these assets, and looking at the basket of assets that exist on Maker as Portfolio analysis? How do we look at collateral as a bucket versus considering them each as stand-alone pieces?
- [59:32](https://youtu.be/EmIaugA2fis?t=3572): Cyrus talks about one example for Collateral assessment; ETH/BTC versus something like Tether.
- [01:04:30](https://youtu.be/EmIaugA2fis?t=3870): Maker is a live TCR. We will basically be a ratings agency.
- [01:07:17](https://youtu.be/EmIaugA2fis?t=4061): How is the community going to be presented analysis from all these teams on all these potential collateral assets.
- [01:16:30](https://youtu.be/EmIaugA2fis?t=4590): Does the directionality of the price affect the Risk Parameters and overall risk assessment of the collateral?
- [01:21:03](https://youtu.be/EmIaugA2fis?t=4863): Any thoughts on how to scale up Governance to manage the growing collateral portfolio. How do we get to the point where we can add 100s of collateral types?
- [01:28:01](https://youtu.be/EmIaugA2fis?t=5281): Comments on the model that uses SPVs for certain security tokens.

### Links from the Chat

- [Loanscan.io](https://loanscan.io/)
