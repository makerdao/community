# Episode 72: February 06, 2019

## Agenda

- [00:00](https://youtu.be/nzMwDpIWTCU): Intro with Rich Brown
- [2:37](https://youtu.be/nzMwDpIWTCU?t=157): Mkrgov.science demo with LongForWisdom
- [29:11](https://youtu.be/nzMwDpIWTCU?t=1751): Recap of Forum Topics with LongForWisdom
- [29:46](https://youtu.be/nzMwDpIWTCU?t=1786): Forum Discussion
- [44:44](https://youtu.be/nzMwDpIWTCU): Migration Analysis with Primoz
- [57:48](https://youtu.be/nzMwDpIWTCU): Questions and Discussion

## Video

<https://youtu.be/nzMwDpIWTCU>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/nzMwDpIWTCU)

- Welcome to the February 06th edition of the Governance and Risk call. LongForWisdom will walk us through a new iteration of the Governance dashboard. I'd love for this group to evaluate it together. We love feedback and suggestions for improvement, so please feel free to tell us.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

### LongForWisdom

#### Dashboard Presentation

[2:37](https://youtu.be/nzMwDpIWTCU?t=157)

![](https://i.imgur.com/3ESESTc.png)

- [This is the Governance Analytics dashboard](https://mkrgov.science/) created with the team at Protofire.
- The home page has several metrics that bring insights into Maker Governance data. Each of these metrics views are interactive. E.g., staked MKR or votes. Hopefully, we can start to illuminate Governance operations or overhead.

![](https://i.imgur.com/5z6iq4F.png)

- We've also added help text/context to each of these metrics(they're the `i` in the top right corner.) The insight includes links to the sub-query.
- One common complaint is the widget has a slow loading time. It's often querying the blockchain, we've had this discussion before and will come up with improvements.

![](https://i.imgur.com/XwV4x7a.png)

- MKR responsiveness measures how quickly votes go live. On average, 25K MKR responds to an executive the first day it goes live. Responsiveness gives a baseline idea of how much MKR we could rely on for emergency responses. Also, if an executive is popular, you can see the visual indicator.
- It's an average figure, and there is some nuance with that calculation.

![](https://i.imgur.com/GcZRQ3V.png)

- Similar view for polls. Breakdown of responsiveness per day.

![](https://i.imgur.com/6SfGpsD.png)

- `Voters` has a leader board. You can expand it to a larger list with 'view all.'

![](https://i.imgur.com/2GILBfY.png)

- If you click on an address, you can see how it's voted, including links to polls or executives.

![](https://i.imgur.com/yc1ZS0A.png)

- Executives overview including `top` and `uncast`, which helps to discern if MKR is gathering on an old executive.
- `Time to pass` the average time an executive takes to pass, you can see they've mostly passed in a single day.
- `MKR distribution by Executive` Helping display the hat.

![](https://i.imgur.com/ElR8ZGJ.png)

- List of most recent polls.

![](https://i.imgur.com/I2UcaEp.png)

- Deeper view of executives, including the current hat.

![](https://i.imgur.com/zNCdKGN.png)

- Similar view for polls, you can also search by name.

![](https://i.imgur.com/hrdtaUD.png)

- A deeper view of polls information.

![](https://i.imgur.com/fkdNKui.png)

- Individual poll details here to dive deeper.

![](https://i.imgur.com/zkO4Okm.png)

- Vote breakdown is now more visible, you can see whales voting patterns, or when people change their votes, it makes it easier to see capitulation.
- The leaderboard here shows who has contributed most by address size.

![](https://i.imgur.com/GKxULzq.png)

- Executive votes also include filtering and sorting. One point is the metadata only pulls title and status, coming from the Foundation's dashboard pending a new API endpoint.

![](https://i.imgur.com/Wm527C8.png)

- Page two of this executive vote. Including the breakdown vs. current hat.
- `Approvals by address` size is interesting, though it's not Sybil safe. We've complained about whales, but now that trend is more visible, and voting is more distributed than we thought.

#### Questions and Discussion

[7:33](https://youtu.be/nzMwDpIWTCU?t=453)

- Rich: We could split polls up by hours though right since the cap is usually a week?
  - L: I suppose we could, sometimes polls can be longer than a week, though. A cap might be a good idea.
  - D: The data is mixed since some polls have a longer duration.

[9:17](https://youtu.be/nzMwDpIWTCU?t=557)

- D: Those are vote proxy addresses, right?
  - L: Need to double-check. They don't attach to the contract, so they may not be proxies. The dashboard might be missing cold or hot wallet interactions. Regardless, if you click on the address, you can see how it voted.

[14:24](https://youtu.be/nzMwDpIWTCU?t=864)

- D: Do we have the same level of detail for Executive Votes? I know executives don't auto-populate their information as polls do.
  - L: The data lives on GitHub, and a hash on chain links back to the poll, so we don't have the same for executives at the moment.
  - D: Conceptually, in the future, couldn't we just vote directly from this page?
  - L: Yes!

[18:48](https://youtu.be/nzMwDpIWTCU?t=1128)

- R: You can see the volume and also the distribution. As long as it's reasonably flat, you can assume an alignment.
  - L: Perhaps.
  - R: It doesn't say what they voted for.
  - L: That's an option we don't have, but we could look into displaying which vote by address size.

[20:01](https://youtu.be/nzMwDpIWTCU?t=1201)

- C: How could we use this to make Governance more efficient? What voting information we should address in future governance.
  - L: Much of these metrics are for current and not historic state. We don't track efficiency, though health and distribution is kind of close.
  - E.g., 62k on the hat could be larger and, thus, safer. Tracking what increases voter participation is more complicated. `Total votes` kind of tracks efficiency. `Rate of change on votes` adds insight too.

[21:49](https://youtu.be/nzMwDpIWTCU?t=1309)

- Matthew: Any way to check about sitting on an old executive? Showing what might be theoretically lost?

  - L: Perhaps. One measure I've been evaluating is "how active is MKR." The idea of that is daily, monthly, and quarterly activity would help us spec out what is available in an emergency. Diving into that metric would be helpful.
  - D: It shows us who the protocol politicians will be too.
  - L: Once we have vote-delegation, then yes, people will point to votes and say, "rely on me for consistency." Assuming, of course, we have delegation in the future.

- Mitote `chat`: If the address holding the MKR has other non-voting activity we can know if they didn't get hit by a bus right?:
  - L: Potentially a "time since last active" for addresses that are larger maker holders. Tons of ideas we could do to confirm activity.

[26:42](https://youtu.be/nzMwDpIWTCU?t=1602)

- Kenton: Does anyone know the status on mkr.tools? If there might be a v2?
  - R: Pretty sure he needs a robust API, so he doesn't have to scratch it out for MCD. Taking the opportunity to plug the community grants and team. The models are the same in Governance and with the community grants. We are interested in evaluating proposals that look like this dash.
  - R: That's how Protofire did it. They came with an idea and went through the grants process. Low and behold, we have this as a result.

#### Forum Activity Recap

[29:11](https://youtu.be/nzMwDpIWTCU?t=1751)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Should BAT SF be reduced?](https://forum.makerdao.com/t/should-bat-sf-be-reduced/1192)
  - A new member of the forum asks about the BAT stability fee and whether it should be reduced, which prompts some discussion of asset-locked to market-cap ratios and other thoughts.

##### Seeking signal

- [Should we have another executive vote regarding the Governance Security Module?](https://forum.makerdao.com/t/should-we-have-another-executive-vote-regarding-the-governance-security-module/1209)
  - In which I ask for more information about the risks and benefits of activating the governance security module, and ask other people’s opinions on the matter.
  - Next Thursday, there is a segment that is prepared by Wouter.
- [Signal Request/Discussion: Should we implement a tax during SCD Shutdown to recuperate unpaid Stability Fees? 1](https://forum.makerdao.com/t/signal-request-discussion-should-we-implement-a-tax-during-scd-shutdown-to-recuperate-unpaid-stability-fees/1166)
  - Continuing the thread from Aaron, where he presents a thread within which to discuss SCD shutdown, particularly the use of the tax parameter.
  - This expanded into a discussion of several options related to Emergency Shutdown.
- [Signal Request: How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965)
  - I combine the previous signal requests about bundling into a single request that asks for how specifically we should deal with bundled executives.
  - Regroup Monday to find out when this goes on-chain.

#### Discussion

[29:46](https://youtu.be/nzMwDpIWTCU?t=1786)

- David: BAT SF question, is it ever possible to have an SF lower than the current DSR? My understanding is no because you could just issue that DAI and put in the DSR for that spread.
  - C: We've talked about subsidizing other collateral and locking it in the DSR. If it's small amounts. It's technically possible, e.g., when the Sai SF was lower than the DSR. People would mint Sai, migrate, and lock it up; nothing broke, although that's not the best behavior.
  - D: For example, BAT SF is 5% while the DSR is 8.75%; in this situation, although they would be able to mint Dai and earn on the spread, some portion of the borrowing would be healthy, not just there to capture the spread.
  - C: If we wanted to do that for BAT, I'm not sure why we'd do it specifically for BAT, but it's possible.
  - L: The main benefit is diversification or subsidizing for diversification. Dai that's created and locked up is essentially parasitic since it will go back into the DSR, gaining only diversification.
  - MR: If you lock in DSR, it's pure risk. Especially since the downside is on a volatile price change and liquidations. It costs the Maker community capital to subsidize the collateral.

[34:53](https://youtu.be/nzMwDpIWTCU?t=2093)

- Cyrus: The Sai supply is still going down, so Aaron's thread is relevant but not urgent. Until we see the resulting interactions slow down (E.g., closing CDPs and SFs, etc.), it's still a premature discussion. There is still migration every week. For example, a large DeFi platform migrated \$1-2 million Sai. The peg is drifting and getting weaker, though.
  - L: I saw a large trade on Uniswap for \$.90
  - C: That provides incentives for CDP holders to repay.
  - S: Unless they're waiting for ES, where they get fees forgiven due to peg drift.
  - David: `chat` Does it make sense to publicly say that the Sai peg is not reliable, or is becoming less and less reliable as the supply dwindles?
  - C: People selling Sai right now are bearing the cost of forgiven fees. If it drops to \$.90 for a more extended time.
  - D: Who is the buyer?
  - C: Who is the seller? Why are people selling Sai?

[37:52](https://youtu.be/nzMwDpIWTCU?t=2272)

- Matthew: Going back to our core objective, if the risk profile stays the same, and we keep lowering the debt ceiling to amount outstanding. Risk is hedged, and the system is exposed. The risk doesn't go away, but it just shuts it off. The SFs get waved. When I went through this cycle, asking for opinions from other professionals, we asked: what advantage do we gain if the risk doesn't change? The only thing that changes is recouping fees in MKR. If the peg drifts no one is using it much right, it's unusable?
  - C: It's not great for the Maker brand to have an old version and see the peg drift. Secondly, if ES isn't going to happen soon, that hurts the peg further.
  - M: Trying to find a perfect solution isn't going to work. It's a communication issue.
  - D: Does it make sense that if the migration contract exists and significant liquidity is in it and available, that we're still providing an "out" and taking care of the end-user?
  - L: We're assuming bad actors, but there hasn't been enough liquidity for someone as large as 3088.
  - M: Tools exist for partial transfers.
  - D: Also, we're not here to guess motives. We just provide a solution where possible.
  - L: 3088 could be waiting for ES without having to pay a ridiculous amount. Trying to source his balance on the open market, it's also not in the migration contract, is going to be impossible.

## Risk

### Primoz Kordez

#### Analysis

[44:44](https://youtu.be/nzMwDpIWTCU)

![](https://i.imgur.com/gmSe4Cr.png)

- Dai Supply went up about 5 million to a total of 111.7 million Dai.
  - Net minting was not that high, ~2 million Dai over the last week.
- There is a lot of Sai being migrated to MCD, about 3 million over the last week.
  - Two days ago, a large sum was migrated from Nexo, roughly 1.4 million Sai.
  - About 1.7 million of the 3 million Sai was used by CDP's to migrate to MCD as well.
  - Two larger CDPs migrated last week, paid about 100,000 in fees.

![](https://i.imgur.com/KFgQrLQ.png)

- The total supply of Dai+Sai is still increasing at a similar rate. Only a net 2 million Dai was printed last week, which is low considering the recent ETH price rally. Historically, large increases in ETH correspond to increase DAI minting.

![](https://i.imgur.com/kZtLWXj.png)

- Defiexplorer.com/stats shows aggregate repayments and draws for collateral being added in MCD. This can be used to check how much Dai was generated in MCD.
- You can see a large withdrawal of ETH; this pushed the amount of ETH locked in MCD bellow 2 million. I'm guessing that this is happening because the CR is very high, at 381%, CDP owners are withdrawing the unnecessary capital from collateral.

![](https://i.imgur.com/wRw7k3u.png)

- What surprised me is how high the Sai CR is at 427%, as it is usually lower than the Dai CR. I'm guessing this is due to general inactivity in SCD - Half of the debt is in CDP's that are inactive for more than six months. These CDP's are simply not migrating. They aren't even withdrawing collateral.
- Sai DC is at 30 million. As the Sai supply is at 23.2 million, the SCD DC leaves about 8 million.

  - Cyrus: Wouldn't the Sai CR be one of the few indicators of CDP owner activity? That behavior shouldn't differ that much from MCD to SCD. You can't go by the Dai supply because they won't be adding or wiping debt due to risks from the peg and potential tax.
  - P: Exactly, this was my point. If you think about it, we've seen even higher CRs. The ratio itself is related to leverage. One theory is that they are not active. The other is that they are ok leaving ETH in collateral without removing it and converting it to something stable. This might tell you that they are really bullish. I'm leaning toward the first option that they are inactive.
    - C: If they wanted to leave it in deliberately, then so would the MCD CDP holders. Why would there be a difference?
    - P: True.

- There is a buffer of 8 million available for Sai minting, including Sai burned in the migration contract. This should be enough if there is a sudden SAI liquidity shortage if new Sai needs to be minted.
  - On the other hand, there are debates that perhaps we don't want to have too high of a buffer. We don't want to see unnecessary Sai printing.

![](https://i.imgur.com/5H0J6CG.png)

- Because of this, I checked if there was any Sai minting in the last few weeks. From the top 100 CDP data from MakerScan, you can check how much is minted. The numbers are actually low; I haven't noticed any new SCD CDP's trying to mint a significant amount of Sai.
  - At most, you can see some CDP's using SCD and minting a few thousand Sai.

![](https://i.imgur.com/492UIdy.png)
![](https://i.imgur.com/xwyMoIo.png)

- Dai in DSR at an all-time high at 55 million Dai, probably because the DSR is also at an all-time high at 8.75%.
- I noticed that on Compound, the DAI lending market surpassed the USDC lending market.
  - Just last month, I saw the Dai supply in Compound go from 20 to 30 million. I'm also guessing this ratio will increase in favor of Dai vs. USDC. The last time we saw Dai lenders dominating USDC was five months ago, even before the migration.
  - I believe the Dai rate will dominate because the supply rate is much higher for Dai. The unutilized part goes to DSR. In Compound, this isn't the case.
- Sai still has some liquidity in Compound, not sure why this is not reducing. In the last few weeks, remaining Sai liquidity has become sticky.

![](https://i.imgur.com/dbiHkqu.png)

- cDai supply in Compound increased to almost 30 million in USD.

![](https://i.imgur.com/vrT9rzR.png)

- This graph shows grouped addresses by the amount of Sai held. There are three categories: those holding 10,000 Sai to 100,000 Sai, ones holding 100,000 - 1 million Sai, and the ones holding 1 million+ Sai. These 300 addresses hold 22 million of the Sai, which is 90% of the Sai supply.

![](https://i.imgur.com/B19IRn0.png)

- 300 addresses are represented by these wallets.

![](https://i.imgur.com/RqM5LzH.png)

- Only 100 Sai holders represent 80% of the supply.

![](https://i.imgur.com/XVDaZV0.png)

- Top 100 CDP holders reflect a similar metric, with 85.58% of Dai held.
- We are waiting for 100 Sai addresses to match with the 100 top CDP's. If they migrate all at once, we would only be left to 10-15% of supply available currently at a few million Sai.
- Estimating 200-300 people who we are waiting for migration of the last few million Sai.

![](https://i.imgur.com/87pycIr.png)
![](https://i.imgur.com/MOjivrx.png)

- I've checked which CDP's have migrated. This table showed two weeks ago when I wanted to estimate how the debt is structured in CDP, including who is wiping the debt and minting the debt. I wanted to see what changed in the last 17 days.
  - I've noticed that migration is still going on. Since Jan 20th, 8 CDP's have migrated for a total of 4 million Sai debt repaid and 336,724 in fees paid.
  - These CDP's who have migrated were active during the migration period. We are still not seeing any activity in the formerly inactive CDP's, even in the last few weeks.

![](https://i.imgur.com/OtkD0wg.png)

- Around 10 CDP's migrate daily, proving that migration is still under way. I'm not sure whether this page shows partial or complete migration.

![](https://i.imgur.com/vYidtwv.png)

- Here I've noticed a large increase in migration contracts. This is the spike I noticed two days ago when Nexo migrated.

#### Questions and Discussion

[57:48](https://youtu.be/nzMwDpIWTCU)

- David: There was a thread about revisiting the Governance Security Module framework. I was curious about Derek's perspective on whether it's appropriate to bring this up again? Do we want a process defined and spec-ed out for solving potential bugs to get around a delay? If one existed.
  - Derek: The latest on that was that Wouter Kampmann was having a conversation with the smart contracts team yesterday evening. He is going to come back to us next week.
  - C: They are working on middle-of-the-road, hybrid solutions to get us the best of both worlds for the short term. We need to be a bit more patient with waiting for the technical team to respond.
  - S: He said they have a positive result, seems promising.

[59:21](https://youtu.be/nzMwDpIWTCU?t=3559)

- SamM: About two weeks ago, I started a poll for reducing the frequency governance vote about the DSR spread. I feel as though weekly votes are excessive.
  - R: Recap fo the thread would be nice. I'm the poor sap that has to enter these things every week. I agree with the content of this poll.
    - Do we feel like the ecosystem understands what a spread is? As opposed to the previous votes? Have they internalized what this thing actually implies?
    - Mostly, the range is a back-and-forth between MKR maximalists and DSR maximalists/interest seekers. We've seen the ecosystem settle on this. We've done it for two weeks, and we have feedback based on current market conditions.
  - Cyrus: I have a few thoughts on that. We should keep repeating information about the spread to keep the community informed. There are still two polls, only now it's spread instead of DSR, with the SF poll. There are no gains in efficiency. The spread is representative of underlying collateral that should be a slow-moving number.
    - The spread should not be changing from week to week, presumably because the quality of the collateral should not be something that changes often. In theory, we could reduce that frequency.
    - The community should vote on the DSR spread, and, barring any significant events, they shouldn't need to think about that again for a month or a quarter. Instead, they would vote on SF's instead, reducing the number of polls every week.
  - D: To see if people understand the spread vs. manual rate setting, we might need to compare the polls from the spread vs. the polls from DSR adjustment. Perhaps we can compare the addresses from both.
  - S: The initial DSR spread had ~72k MKR voting. I can't recall a governance poll that had a higher number.
  - L: Confirmed, it's one of the top votes.

[1:03:08](https://youtu.be/nzMwDpIWTCU?t=3788)

- Rich: Related topic starter, our voting cadence: this discussion of operational overhead and cognitive overhead that directly leads to apathy in engagement. Though potentially inflammatory, we need a discussion about conclusive poll result evidence. Are those effective lever mechanisms? For example, this week, unusual activity in the market due to ETH prices may have played a larger role than the results of the governance poll.
  - Ideally, Scientific governance means knowing our actions affect the market and measuring it. I am not convinced that we're at that point yet. Let's not lose sight of the fact that our initiatives may or may not have an impact.
  - Polls and votes every week may not give us enough time to determine whether our activity is effective. Cyrus, is there a way for us to determine the effectiveness of our governance activity statistically?
    - Cyrus: I don't think we can ever definitively prove causation.
    - R: Well, can we narrow it down? With a sufficient data set, we may be able to determine that there is an effect. I want to know if, for example, the market will provide homeostasis for something like the peg vs. us making changes every week and potentially affecting the market. Would historical data be able to determine this?
    - Cyrus: Regardless of whether it had any effect or not, the data will show that it was effective because the peg is still exactly where it needs to be.
    - R: I think the data will show a sizable amount of time where the peg remained stable despite us not doing anything. I want to know whether this will be the case over, say, six weeks of no voting vs. week to week voting. I know that no one can predict the market and that it is an irrational space, but it's worth devoting some thought regarding whether what we do on a week-to-week basis affects the market.
    - C: We'll put some resources into that. It will be hard to prove a definitive cause-and-effect relationship.

[1:08:48](https://youtu.be/nzMwDpIWTCU?t=4128)

- D: Do we lose anything from reducing the cadence? For example, biweekly?
  - R: I've seen a weak executive vote go through, and there was little impact on the peg.
  - L: I think testing different cadences is a good idea. We can define a trial period of a certain amount of time to test this idea.
  - R: I'm just concerned about the human cognitive pitfall of trying to find a narrative through graph information. People grasp for correlations that may not be there.

[1:11:27](https://youtu.be/nzMwDpIWTCU?t=4287)

- Vishesh: This is not a new conversation. We have additional complexity because of the DSR. Sifting out what is going on is not easy. It's not clean. It will be hard for us to reuse data from the SCD world for the MCD world due to fundamental differences.
  - The other point is that the stability of the peg is not attributed to the stability fee. Mostly, it is due to differences in the ETH price ecosystem, due to increased aggregate amount of Dai supply and demand (compared to the past), and a lot more maturity in the liquidity of Dai and people's desire to market make Dai.
    - A lot of factors at play, many of them attributed to the stability of the peg. This correlation is harder to measure; people cling to the SF as a driver of determination because it can be estimated, and that is human psychological bias. I think there are external forces we do not include that are, likely, driving a lot more than we think.
  - R: We can't underestimate the impact of this dawning awareness from the ecosystem: we're actively managing the peg. This encourages external factors to take it seriously, to hedge, to look for arbitrage opportunities. The confidence of actually having things happen could potentially have more current value than the lever-action of moving things a couple of data points every single week.
  - Cyrus: Anecdotally, there is plenty of evidence that shows that SF going up increases public response from the community about fees.
  - R: I'm not saying that these actions aren't practical. I just don't know whether seven days is enough of a time to measure the effects vs. perhaps some other confounding factors contributing to the impact. Maybe we need to wait every two or three weeks.
  - C: Broadly, it works, but do we have to require a signal increase, and, if so, is it worth the overhead? That's a good question.
  - SamM: As an example of overhead/confusion, this week, I missed a data point and accidentally voted to change the SF amount instead of keeping it in the same. I wonder about those parameters affecting other voters.

[1:17:20](https://youtu.be/nzMwDpIWTCU?t=4640)

- Rich: To give the executive the maximum amount of time to pass, I put these up Sunday at ~ 11 PM. For the last few weeks, this has been nerve-wracking. With an almost 50/50 split on executive votes anticipating an accurate poll range for the following week is difficult. It's guesswork on whether an executive will pass. If an executive passes quickly, then it could skew the polls since they don't represent the correct range.
  - The other thing, these polls go in with a snapshot of the system that is three hours old, how can we operate under such short time-frames for votes?
  - C: Can acknowledge some positive impact. If it were completely useless, we would see executive polls without change.
  - R: That viewpoint assumes rational actors. Executives reflect the current state of the system. People are reactive instead of observing long-term trends.
  - V: I agree with Rich. Knee-jerking is the usual reaction from the community. When the peg is below, there is a call to raise SF. When above, it's there to lower the SF. Not saying that the actual quantitative impact of changes is predictable, the urge to react is.
    - We don't have a clear picture of that impact's repercussions, but we know that it has **an** impact. There isn't a definite end to end process. The point to consider: what is the effect of your actions and the most direct way to solve problems?
    - For example, if the peg is low because of too much floating Dai, you raise SF to pay back debt purchasing some Dai. The question colors the actions. E.g., with a lowering peg motivating actors, what are they doing that for? is there enough of a delta between those rates? Will that increased SF motivate a move to Compound? With a 1-2% change in SF, you're not likely to change positions based on ETH. The change would be for the peg; by soaking up Dai on the open market, they would fix the price.
  - With the DSR, though, the additional lever. Is that a more direct way to soak up Dai on the open market? My answer is yes. 9% is pretty attractive and has a high utilization. Do you want the DSR to be a flat yield lever? Or something that you move to pull Dai off the market.
  - R: Excellent points. Two avenues: how do we determine the impact and where to get that information. What mechanisms are in place that could explain them. With enough background noise and pretty graphs, are people inclined to arbitrage?
    - Have we seen new mechanisms? I agree with Vishesh that DSR has a significant impact. SF is a more nebulous stick that has long term effects for MKR holders.
    - The immediacy is less concrete. Are we hurting ourselves, asking people to do research every week? Or are we maintaining momentum? Should we consider a system where cause & effect are more transparent?

[1:26:06](https://youtu.be/nzMwDpIWTCU?t=5166)

- V: A good framing is what does it take to justify making those changes? You'd have to be confident that the correlation takes less than seven days to track
  - R: Also, wouldn't it also be a direct correlation, somewhat? E.g., 'the SF moved this much,' and the 'peg moved that much.' Within a standard deviation.
  - V: The direct correlation opens a discussion about how you choose to measure the peg. It's stylistic to look at a 24-hour weighted average.
    - If the volume is low and you're looking beyond 24 hours, yet timely overall volume is below the peg, say 25 hours ago, it averages out to above the peg. Looking at that price to drive decisions with flexibility is my point.
  - C: What about Mondays, look at the 24-hour weighted price, and if it's within a small percentage, we forgo the vote?
  - V: My point is that 24 hours might be too naive to find the nuance of levers' effects.
  - R: E.g., a 30-day, 7-day, and 24-hour snapshot would be helpful.
  - V: Different momentum changes would help to narrow it down. If the price has cratered in 24 hours, that would be a reasonable correction.
  - R: Another question: if it craters, how long until it recovers? With a significant deviation, how much would Governance activity correct the peg?
  - V: The presupposition is that governance activity is correcting the peg. There is the time involved with ETH price changes. Arbitrage takes time, order books change, and that requires more in-depth study.
  - R: Let's say I'm an uneducated user and see ETH has jumped to \$212, but the peg hasn't done anything, where is the reconciliation?
  - V: I see the peg stability at $212 Eth vs. $160 is two different conversations/viewpoints. Having a more holistic discussion, outside of price, is essential. It's primarily about time frames. I would be shocked if Governance actions on a weekly scale can quickly correct economic instabilities.
  - R: I have the same skepticism. It seems more like forward guidance that is more social and has cultural implications.
  - V: It would be more interesting to see when the peg drifts and recovers on its own without Governance action. In the SCD world, this didn't happen, because changes would happen before reverberating outward. The peg's autonomy is an important data point, what does the system do if Dai goes below peg, does it get worse, or does the system recover?
  - R: We don't need to play chicken with the system, but experimenting with the cadence might be a good first step. The community could decide, "two weeks, let's try." From there, we could figure out the baseline and make the next change.

[1:34:39](https://youtu.be/nzMwDpIWTCU?t=5679)

- L: From sidebar conversation in `chat`, I agree with Vishesh, we should evaluate larger time frames.
  - Sam suggested a seven-day exponential decay version.
  - I then suggested multiple moving averages: 24 hours, 7-day, 30-day.
  - Sam argued it might be more relevant to weigh today versus yesterday.
  - V: The gist was, empirically, it would make sense to weight today heavier than yesterday. The question is, are larger trades or recent trades more critical? Which means it's different now. If a trade is 10x larger, do you weight 10x more, if a trade is one day old, is it weighted 2x or more? Determining that scale is a super nerdy quantitative discussion.
  - L: Could there be a cool graph?
  - V: (Sighs in revelatory awesome-ness) Yes, that would be fun to mockup.
  - Sam: I could add that to Dai peg.
- R: I'd love to see that addition to Dai peg. Thanks all!

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
