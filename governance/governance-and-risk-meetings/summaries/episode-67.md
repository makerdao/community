# Episode 67: January 02, 2020

## Agenda

- [00:00](https://youtu.be/dRG1TThjv5c): Intro with Rich Brown
- [21:28](https://youtu.be/dRG1TThjv5c?t=1288): 'A Governance Model' with SamM
- [44:31](https://youtu.be/dRG1TThjv5c?t=2671): Migration Risk with Cyrus
- [54:07](https://youtu.be/dRG1TThjv5c?t=3247): State of the Pegs with Vishesh

## Video

<https://youtu.be/dRG1TThjv5c>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`ES`: Emergency Shutdown

`DC`: Debt Ceiling

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/dRG1TThjv5c)

- Welcome to the first Governance and Risk call of the new decade. We'll have a reasonably low-key intro into the new year and do our best to get back up to date.
  - SamM, community rockstar, will talk about the DSR spread and MakerDAO's governance model. He began this conversation a month ago on the forums.
  - Cyrus will speak about the Migration.
  - Vishesh will speak on the State of the Pegs.
- We have an unusual situation with the GSM. An article went up on Medium about a potential exploit that sparked some passionate public conversation. In summary:
  - Anyone with a significant amount of money could co-opt the governance process. This attack isn't particularly threatening, as any organization with stock or crypto governance project has the same worry. Fortunately, this concern was in the white paper from the beginning.
  - The response to this type of threat was the Governance Security Module(GSM) that would impose a time delay on any governance actions. There was a rally of MKR holders, approximately 130k of MKR, was being staked on the existing Executive Vote, securing the system. Which is an amazing show of strength for the ecosystem. I don't want to get the details incorrect, but I saw somewhere that it was the largest amount of MKR staked on an executive.
  - The execution got weird, however.
  - The secured executive significantly raised the bar to **_pass_** the GSM adjustment. There are several lessons here in a war between urgency and apathy, and how rapidly they can trade places in this space. It reminds me of Devcon, where we stopped voting because everyone was in Japan.
  - Perhaps the GSM was not timed well with the end of the year. We had a healthy active Executive with 100k+ MKR staked, and the GSM Executive Vote proposed to secure the system even more. The GSM vote didn't pass. Now what? Ideally, we can discuss how to mitigate governance issues, or issues resembling this situation in the future.
- We keep running into planned ecosystem management versus the real world. Continuous approval voting served us well in SCD, but let's look at this new world we inhabit.
  - Another essential question: does the community want the GSM? The conversation got a lot more nuanced on the forums since there are tradeoffs that the article didn't do well at highlighting.
- Join us, as always, in the [FORUM](https://forum.makerdao.com/) to discuss.

#### Questions and Discussion

[07:23](https://youtu.be/dRG1TThjv5c?t=443)

- David: I think everyone recognizes the legitimacy of the reasoning for a zero delay period at this stage, but since the system is so new, we didn't convince holders that this is the appropriate time to set a non-zero delay. The trade-off is important to consider. Since the attack risk was an edge case, it might not have sparked too much urgency in MKR holders.
  - Rich: Good point, I noticed urgency and apathy are the two ends of the spectrum. The vote brought up agility vs. security and how to handle those trade-offs. Over the week, the debate got more nuanced, which is always great to see. Maybe the community thought the GSM just wasn't a good idea.

[09:23](https://youtu.be/dRG1TThjv5c?t=563)

- David: Should it be re-polled? Or re-voted on in the next vote?
  - Rich: It's not for us to say since this is a community lead initiative. Maybe the urgency was misplaced.
  - Mariano Conti: I would say there were trying circumstances around that poll. My recommendation would be to poll again sometime soon. The smart contracts are there, and it's in the white paper. The idea is to have the GSM delay sooner, rather than later. Not sure about the best timing. 0 delay forever is not in our best interest.
  - Cyrus: Did anyone check the vote stats? Distribution of voters in the portal? We might have had community consensus, but a few larger holders didn't follow through. It's possible the will of the community didn't align with larger MKR holders.
  - Rich: We're opening a barrel of worms since we haven't defined what the community _really_ is. I tend to overlap voters and community members in the forum with those who actually vote. I'm not sure the distinction I have is what everyone else notices.
  - Matthew: The foundation can't say "we will do this," but could they or the risk teams, at least, present a recommendation? I think this is a theme we're going to come back to frequently now. Needing a recommendation.
  - Rich: Agree, I keep coming back to that too. We have this amorphous group with plenty of ideas. Ideas need to surface with ownership and a campaign behind them. Expecting these thoughts to organically emerge and have enough stickiness to move governance on their own may be naïve. We haven't seen enough examples of that. The question becomes:
    - Does the community continue with empowering actors? At a certain point, we're going to need legal opinions and have to publish these. Who will do that is, again, another question.
    - The GSM is a thing, and we saw a peak and valley of sentiment and engagement. It followed the tail of social media, everyone was furiously upset, and then two weeks later, they found something else to worry about. How do we make sure that we don't lose the thread on threats to the protocol? How do we resurface what matters? My preference here is a forum thread accompanied by a vote.

[17:08](https://youtu.be/dRG1TThjv5c?t=1028)

- Richard Burton: "Protocol politicians are going to be interesting."
  - Rich: This is something I've been looking forward to for a while. More people get engaged as the stakes get higher. To connect to a point earlier: who is willing to campaign for which ideas? I look forward to a future where people self-organize and coordinate around an issue, E.G., a higher or lower DSR. Potentially using some tooling to make sure their votes are accurate.

[18:13](https://youtu.be/dRG1TThjv5c?t=1093)

- Cyrus: Instead of doing a one time fix for the GSM. E.G., another executive. Maybe we should put together a process for votes that don't pass? We could rerun the executive or rerun the governance poll and then the executive. Something so we don't continue to cycle issues.
  - Rich: Like poking the poll?
  - Cyrus: Yes, a generic or general process to these situations.
  - Matthew: We should be careful. Might have been merely timing around the holidays, it's not the best to keep surfacing the vote. We should avoid a narrative that is "people wanted to do it, but they didn't get the chance to." When the underlying scenario is that the vote should have been a 'no.'
  - Rich: Right.
  - Cyrus: That should all be surfaced in the Governance Poll, right? The Executive is designed just to ratify what we've already voted on in the Governance Poll.
  - Matthew: If there is sufficient turnout on the polling side, yes. If the voting turned out to have 1k in favor, then we needed 80K to get it through an Executive.
  - Rich: Obviously, there is thresholding, which makes me nervous. Perhaps a qualification, if you assume vote strength based on the number of voters or not, isn't best.
  - Cyrus: The GSM poll was healthy, maybe part of the process can be that the Executive is rerun to avoid the issue with _just_ 1k MKR voting.

## Governance

### SamM

#### DSR Spread Presentation

[21:28](https://youtu.be/dRG1TThjv5c?t=1288)

![](https://i.imgur.com/Il7v2AY.png)

![](https://i.imgur.com/WOdeyJ1.png)

![](https://i.imgur.com/5ULyZQe.png)

![](https://i.imgur.com/MOzCiI0.png)

![](https://i.imgur.com/IZCArl3.png)

![](https://i.imgur.com/oMZ6rdQ.png)

- Ed. Slides corrected to reflect trading price below a dollar(0.98) not above the dollar at \$1.02(as seen in the recording.)

![](https://i.imgur.com/LIVLmAj.png)

- The approach of voting on the Spread, versus voting on each rate manually, provides an easier question to answer for voters.
  - We can maintain peg stability by only voting on the `Global Stability Fee` and having the `DSR` follow it around minus some constant(the spread.)

![](https://i.imgur.com/nmeaPl2.png)

- Splitting the votes into `Peg Stability` & `System profit/growth control` is conceptually easier for voters. Defining the function of each vote, and keeping it one function, one vote is the main idea.

![](https://i.imgur.com/agtIqr5.png)

![](https://i.imgur.com/XBmWBgr.png)

- We have system parameters that are changed by governance votes that can be framed in a specific way.
- For individual SFs, we go by the calculated Risk Premium of the Vault type.
- The `Global Stability Fee` is the monetary policy tool.
- The `DSR Spread` determines the rate of the surplus we allow the system to accrue.

![](https://i.imgur.com/AmyzcRE.png)

#### Questions and Discussion

[23:57](https://youtu.be/dRG1TThjv5c?t=1437)

- Rich: Explain "separation of concerns?"
  - SamM: Splitting of votes for peg stability and risk parameters. They should be separate to create clarity for voters.
  - Rich: I.E., the 'rollup' model for the executive, you're saying that's a problem.
  - SamM: Yes, we could have groups for peg stability or.
  - David: If it's trading above, you would want more demand and less supply right.
  - SamM: ahh, you're right. I'll fix to reflect below a \$1 not above.

[30:16](https://youtu.be/dRG1TThjv5c?t=1816)

- Rich: Thanks, Sam! OK, we need to clarify a few things. What are some examples of flexibility we would lose?
  - Cyrus: I'm not sure it's even less flexible. Maybe. Sam, your thoughts?
  - SamM: Technically, it's the same parameters just encoded a different way. It's more an interpretation to restrict ourselves from moving the SF for peg stability. I'm asserting that we make an unambiguous and less complicated choice.

[32:20](https://youtu.be/dRG1TThjv5c?t=1940)

- Xenofon: Looking at the cons, "low volatility assets priced out" is my worry. Those assets, like tokenized real estate, are much more stable and less volatile than other collateral we could use. I would like to examine why and how this would be a problem. How would these fees push out low volatility collateral from DAI?
  - Cyrus: I'd like to take that point and clarify. I wouldn't consider this negative as part of the proposal. The proposal to think about the spread is just a different framing. If we wanted to include a lower volatility type, we could just make a vote on a negative spread if the DSR was too high. E.G., if the DSR was at 5% and we wanted to the SF to be 3%, then the poll on that vault fee would have negative ranges, and we'd be, technically, fine. The point is valid but not necessarily under a spread format.
  - Sam: Are you saying to run the DSR spread at a negative amount or the vault fees?
  - Cyrus: The spread between the DSR and the total SF for that collateral type. The framing I use is: Governance polling is just a way to reflect community consensus in the system in regards to the parameters. A poll's design should allow the community to express what they want. E.G., for the DSR spread in the presentation, the community would want to vote on the base DSR and then vote on a risk premium spread for the collateral types. As long as the spread could be negative in the polls for safer collateral types, it's okay.

[35:55](https://youtu.be/dRG1TThjv5c?t=2155)

- SamM: Also wondering why we're subsidizing collateral types if we're trying to reduce the supply of DAI? Because we raise interest rates to reduce supply.
  - Cyrus: Interesting question, but that's another discussion. Multiple reasons: if the launch of MCD was a metaphorical "open for business" sign, it's not easy to get the word out to collateral partners. Having a rate in line with traditional expectations makes more business sense and more sense from a diversification perspective. Different collateral types would improve the risk profile of the overall collateral portfolio.

[37:25](https://youtu.be/dRG1TThjv5c?t=2245)

- Xenofon- Can you envision a situation where some collateral doesn't get the same rate of return as other collateral?
  - Cyrus: Yes, different collateral types should have different SFs.
  - Xenofon: Do we have anything written about this?
  - Cyrus: Yes, and we have some stuff coming in the next couple of weeks.

[39:45](https://youtu.be/dRG1TThjv5c?t=2385)

- Matthew: Looking at the chart right now, if ETH-B is 2%, what is the total cost of capital for borrowing against that collateral type? 6?
  - SamM: Correct.
- Matthew: Can we look one or two slides before to the equation for the DSR.
- Cyrus: Shouldn't the Global SF equal the DSR?
  - SamM: If the spread is at 0%, it would.
  - Cyrus: I'll review and think back. I think the idea is on point. Just curious what the poll would be here?
  - SamM: We haven't reviewed the Vault Stability Fees yet, but it would be:
    - what's the `DSR spread`? and
    - What's the `Global SF`?

## Risk

### Cyrus

#### Migration Review

[43:47](https://youtu.be/dRG1TThjv5c?t=2627)

![](https://i.imgur.com/mSua07E.png)

- Dai supply has been steadily increasing, up to 73 million, up about ~5 million from the last call a couple of weeks ago. The migration is slowing but is still going at a decent pace for this stage.
- We just passed an Executive Vote that changed Debt Ceilings. MCD ETH Debt Ceiling up to 100 million, while the SCD ETH Debt Ceiling was lowered to 70 million.

#### Sai Analysis

[45:35](https://youtu.be/dRG1TThjv5c?t=2735)

![](https://i.imgur.com/rUtt0Rd.png)

- Sai is now below 40 million.
- Collateralization Ratio has been improving slightly as well.
- I think we can consider continuing to lower the Debt Ceiling on Sai. I don't think there is a need for that much of a buffer anymore.
  - At launch, we were anticipating a bit more market activity and the potential need for market makers to absorb some of the extra supply from the secondary lenders.
  - The secondary lending supply is starting to diminish for Sai. I think it's an unnecessary risk to have a 30 million additional buffer in the Sai DC right now.
- DSR UR is at 41%, which is an all-time-high. This is partly because of Compound and OKex integrating DSR.
- One interesting thing about Sai is that there are still about 6 million Sai in Compound. The Dai markets have full functionality now so you can borrow against deposited Dai. There really isn't much reason for the Compound Sai to be sitting there. The rate differential isn't huge, but we are reaching the point where we can consider that compound Sai to be somewhat sticky.
- MKR in the burner is at around 10,000 - represents over 1% of MKR in supply that has been burned. Still, around 2.5 million in unpaid SCD fees, which is about half of where we were when the migration started/when MCD launched. Interestingly, one really large CDP accounts for about 1/3 if the unpaid fees.
  - There is a conversation to be had around unpaid fees - the three largest CDP's account for about 40% of the unpaid fees.
- According to Santiment, about 6 million Sai hasn't moved in more than a year. Between unpaid fees and some inactive Sai and the migration showing signs of slowing down, we can start putting together estimates for our target for Sai supply for our plan for Emergency Shutdown, for our plan for fees, and so on.

#### Questions and Discussion

[49:57](https://youtu.be/dRG1TThjv5c?t=2993)

- Guilherme Remor: On the Santiment measure, is it Sai in wallets or Sai that is also in contract?

  - Cyrus: It's for inactive wallets. Not for anything locked in SLPs.

- Cyrus: There has been a considerable amount of Sai activity that has been borrowed and migrated over, potentially exploiting that ~1% arbitrage. I don't have those exact numbers, but it might be something interesting. We can look at those numbers and estimate that those market makers won't be closing their CDP's and that they are waiting for emergency shutdown.

  - We'll need to start tying together these different pieces of information in order to plan out what we will do over the next several months.

- Cyrus: On the distribution of Sai wallets, about 100 addresses hold roughly 30 million or 2/3 of remaining Sai. Just another interesting data point when thinking about the future.

  - [Santiment Sai network activity, check under "Percentage of Active Coins"](https://graphs.santiment.net/makerdao-pro#network_activity)

- Cyrus: Does anyone have any thoughts on Emergency Shutdown or target Sai supply? (No comments)

- Cyrus: Overall, migration is going well; Dai supply still growing. There is not much urgency as far as I can tell. Pegs are more or less fine, but I will let Vishesh touch upon that.

### Vishesh

[54:07](https://youtu.be/dRG1TThjv5c?t=3247)

#### Relevant links

[Live Migration Data](https://sai2dai.xyz)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/4thMGaV.png)

![](https://i.imgur.com/8Y4EhMW.png)

![](https://i.imgur.com/yW5U2IB.png)

- The total volume on Dai has been pretty light in the past 24 hours.
- Over the last week, it has been relatively light as well but dipped slightly below the peg. Tiny trading volume compared to usual, things have been quiet over the holidays.
- The overall price is slightly below the peg. The average has been between $0.99 and $1.00. Nothing to be severely concerned about, in my opinion.
- It's been interesting to see the MCD Dai microstructures emerge at lower volumes. Everything normalizes at higher volumes. When you have really light trading days, you can see Uniswap spread over all the price ranges, centered right around the weighted average. Oasis follows a similar curve, with a little bit lower spread.

#### Secondary Lending Platforms

- As far as what has happened to Sai on Secondary Lending Platforms, it kind of died a little bit, which is theoretically good for the migration.
- Understanding what's going on in SLPs is important for when we talk about DSR spread as a major lever for governance and deciding what happens to monetary policy. It doesn't make sense to always only think of DSR vs. Stability Fee since those are just two variables. There are more to consider.

![reference link](https://i.imgur.com/ZwTmlnH.png)

- There are at least 4 important variables, which are:
  - DSR
  - Stability fee
  - Average Borrow Rates
  - Average Supply Rates
    - These four variables and how they relate to each other is an important thread to follow up on.
- Currently, for Sai, supply rates are falling lower while the borrow rates have come up. Volumes have cratered pretty significantly across all platforms, which is good for MCD.
- For Dai, we've seen a solid 20 million in supply and about 9 million in borrow on Compound alone.
- Dai rates are kind of low compared to what we may have seen in the past for Sai. I think there are some naturally different dynamics for how secondary lending has been working for MCD vs. SCD. The major notable difference is the fact that there is a DSR now for Dai.
  - If we are triangulating what may be different now vs. before, that(the existence of DSR) seems to be the only major piece that actually legitimately functions differently. So this is going to be something that is interesting to monitor.
  - In the absence of, let's say, \$30 million DAI locked UP into DSR; in the SCD universe, there would be much higher borrow rates and yields. It helps that the Stability Fee is significantly lower now, but even during the migration, we saw the supply rates jump up above the Stability Fee at certain points.

![](https://i.imgur.com/7zLZN0C.png)

- Monitoring the SLP Borrow rates versus the Stability Fees is interesting.
  - The Compound borrow rate is very close.
  - It is slightly cheaper to borrow Dai from Maker (at least for ETH collateral).
  - It is slightly more attractive to supply Dai to the DSR than it is to Compound.
    - There is a difference in risk parameters; the rates are close.

![](https://i.imgur.com/EmnwivL.png)

- I also ran the Collateralization Ratios of Vaults in MCD. This is the visualization of the different buckets of Vaults, according to their CR level.
- CR is the primary indicator of financial risk for individual Vaults, so this can be seen as the overall risk profile of the system. There is, of course, a lot more in regards to how these numbers behave and how users react to the market over time, so see this visualization with a grain of salt.

![](https://i.imgur.com/GCC752s.png)

- The top 12 CDPs account for half the Dai supply from ETH Vaults. Above are their Collateralization Ratios. The average CR is ~270%.
  - There are comparatively low CRs for a decent chunk of the Dai supply.
  - Everything colored below 300% collateralized is red/yellowish color. This is roughly half of the Dai Supply. The higher CRs at about 325 and higher are green.
  - You can see that a comparatively small chunk of the total Dai supply is more than 350% collateralized; this compares closer to what things were like during the majority of SCD's life cycle.
  - Note the accumulation of risk, perhaps due to higher risk tolerance with MCD. Or perhaps its an effect of the low ETH price.
- Top 3 Vaults account for 23 million out of ~72 million Dai from ETH.
  - It's interesting to note the concentration of Dai at the top.

![](https://i.imgur.com/Pv8PMkm.png)

- The total Sai+Dai supply has leveled off slightly. When this value starts to go down, it may signify the beginning of the end of the migration. Things are quieting down now.

![](https://i.imgur.com/ToRpMnC.png)

- We need to be considering and visualizing out the interplay between the deltas of different borrow and supply rates out there. For the DSR, we should be watching outside supply rates. For Stability Fees, we should be watching outside borrow rates.
  - For MKR governance, a big point is the spread between the DSR and Stability Fee.
  - I think we should visualize the rates in the greater ecosystem and how they relate to Maker's native rates.

#### Questions to Vishesh

[1:06:58](https://youtu.be/dRG1TThjv5c?t=4017)

- SamM: It's my view that Maker leads these rates. Shouldn't SLP roughly follow that?
  - Vishesh: We've had this discussion in the past with SLP borrow rates versus the SCD SF. The 'leading' versus 'lagging' relationship was unclear. Generally, the rule was that a SF change would have an impact on SLP rates. However, once the SF is left stable, what happens to the SLP rates? What happens to these rates becomes an indicator of the market's supply and demand levels of Dai/Sai.
    - We haven't created a good measure for Dai demand yet. These SLP rates are good signals to help us make informed decisions. The problem is that there are a number of confounding variables. What you do to the Stability Fee doesn't have a 1:1 impact on Dai's price stability. We haven't clearly figured that out. Though Maker is theoretically leading, you won't be able to make predictions about SLP rates on a time scale.
  - SamM: Eventually, as we continue to move our rates in one direction or the other, we hit an equilibrium point, right? Isn't that enough to make some inference about the relationship between the rates?
    - Vishesh: This is all about managing that equilibrium point. How to manage a sudden change in ETH price impacting the DAI price. So managing short-term and medium-term stability. We've seen a low SF in the past work, and likewise, a high SF work. When ETH price swings, that becomes a problem, and you need to offset the impact. Given the current ETH price, it's hard to pick a SF or DSR to match the appropriate equilibrium.
    - SamM: Right, but theoretically, there should be able an ideal number. If we keep moving around, we should hit it at some point.
    - Vishesh: In terms of moving around the spread or the SF?
    - SamM: SF
    - Vishesh: It's helpful to talk about the impact of each parameter here. The SF primarily serves to impact the overall supply, and the DSR serves to impact the absorption of the oversupply or provide a small amount of additional low-risk yield for people who want to lock up some capital and collect a small, stable 4%(DSR) over time.
    - Vishesh: Visualizing out a combination of those two parameters, theoretically, what you are managing is supply and demand. The usage of that DSR should increase when demand decreases due to supply increase. If, for example, you see a cratering in the ETH price and leverage becomes increasingly more attractive, DSR is not gonna make much of a difference. What is going to have an impact is the Stability Fee.
    - Vishesh: Hence, the Stability Fee is a significantly more important parameter for the peg, while DSR is significantly more impactful on SLP rates.

[1:13:39](https://youtu.be/dRG1TThjv5c?t=4416)

- Guilherme: I'm interested in the graph you presented about the Collateralization Ratios for MCD Vaults. Have you noticed a recent impact of risk on low volatility? Or is that something that has been observed for a while.
  - Vishesh: That graph is not a time series but represents a current state. From my observation, that has not changed significantly since the launch of MCD. What I have noticed is that it appears to be a bit different from what I observed in the past with SCD.
    - In terms of whether it is responsive to market volatility or not, I think that those CRs are a more long-term representation of user behavior and risk tolerance vs. yields. It may be more of a function of yields and stability fees rather than being primarily influenced by market volatility.
    - Given these lower rates, it may be that that's a reason for the higher risk. Something to consider is what are the variables that drive risk. There is more to consider than just market volatility. For example, as ETH drops in price, there is an influx of collateral that enters the system as a whole.

[1:16:48](https://youtu.be/dRG1TThjv5c?t=4608)

- Guilherme: How should we handle the variability in risk profiles among Vault owners? The assumption here is that we are considering risk appetites among Vault owners, but in reality, people have different appetites, and we should keep that in mind when assuming behaviors.

  - Vishesh: In theory, this is a dynamic Dai supply with multiple different risk profiles already baked into it. At the moment, there is one rate for all of it. But as you segment it out, and as you dynamically adjust different risk profiles to have different rates(through different Vault types ETH-A ETH-B ETH-C), you are theoretically reducing economic waste in the system. That's a better way of thinking about it.

- Rich: Wrapping it up, that's the end of the 1st G&R for 2020 thanks to all for presenting and see you in the forums and next week.

#### Links from the Chat

- [SamM's slides](https://docs.google.com/presentation/d/10x5Z0111Lt6tOMsqhiZop53QiLLSRxqaQKVvyPY6D-U/edit?usp=sharing)
- [Santiment MakerDAO Data](https://graphs.santiment.net/makerdao)

## Credits

- Tim Black produced this summary
- David Utrobin produced this summary
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers)
