# Episode 104: August 06, 2020

## Agenda

- [00:43](https://youtu.be/ZLgbKyTHPY8?t=43): Intro with LongForWisdom
- [02:41](https://youtu.be/ZLgbKyTHPY8?t=161): Governance at a Glance with LongForWisdom
- [07:45](https://youtu.be/ZLgbKyTHPY8?t=465): Smart Contracts Domain Team Update with Mariano Conti
- [08:18](https://youtu.be/ZLgbKyTHPY8?t=498): Oracles Domain Team Update with Nik Kunkel
- [09:19](https://youtu.be/ZLgbKyTHPY8?t=559): Risk Domain Team Update with Cyrus Younessi
- [10:24](https://youtu.be/ZLgbKyTHPY8?t=624): Collateral Call update with Lucas Vogelsang
- [15:39](https://youtu.be/ZLgbKyTHPY8?t=939): Weekly MIPs Update with Charles St. Louis
- [19:46](https://youtu.be/ZLgbKyTHPY8?t=1186https://youtu.be/ZLgbKyTHPY8?t=1186): MIP Submission Review with LongForWisdom
- [21:55](https://youtu.be/ZLgbKyTHPY8?t=1315): MIP13c3-SP1 Presentation with Akiva Dubrofsky
- [29:40](https://youtu.be/ZLgbKyTHPY8?t=1780): State of the Peg with Vishesh Choudry
- [51:56](https://youtu.be/ZLgbKyTHPY8?t=3116): Discussion on Peg Deviation

## Video

<https://youtu.be/ZLgbKyTHPY8>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:43](https://youtu.be/ZLgbKyTHPY8?t=43)

- Hello, everyone, welcome to 104th MakerDAO Scientific Governance and Risk meeting. Today is Thursday, August 6th. My name is LongForWisdom. I am one of the MakerDAO Governance Facilitators. I am joined by a host of people interested in Maker. We have a fairly large agenda for today. Anybody is free to interrupt and ask questions during any point of this call.
- Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Governance at a Glance

### LongForWisdom

#### Forum Recap

[02:41](https://youtu.be/ZLgbKyTHPY8?t=161)

- We had a few interesting conversations this week on the forum. I feel like real-world assets have been a theme this week. I have seen some really interesting posts.
- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in the active threads. That would be much appreciated.

##### Discussions

- [How MakerDAO can be a competitive lender in the Credit Tenant Lease marketplace](https://forum.makerdao.com/t/how-makerdao-can-be-a-competitive-lender-in-the-credit-tenant-lease-marketplace/3521) by @mrabino1.
  - LongForWisdom: The post mrabino1 made explains what this is, which is fortunate because I have no idea. I encourage people to give it a read. It is quite a long post with some meaty discussion around it.
- [Initial Thoughts and Questions for Including Real-World Assets in the Maker Protocol](https://forum.makerdao.com/t/initial-thoughts-and-questions-for-including-real-world-assets-in-the-maker-protocol/3511) by @g_dip.
  - LongForWisdom: We have some good discussion going on in here.
- [Subreddit Repost: Reducing Dai Redemption Value To Fix Peg](https://forum.makerdao.com/t/subreddit-repost-reducing-dai-redemption-value-to-fix-peg/3525) by @FourthStreet.
  - LongForWisdom: I think this is thought-provoking compared to some of the other ideas. I encourage people to read this if they have a few minutes.

##### Signal Requests

[04:10](https://youtu.be/ZLgbKyTHPY8?t=250)

- A lot going on in the forums. I mentioned it last week, but it is still true this week.
- [Should Emergency Action be Taken to Raise the WBTC-A Debt Ceiling?](https://forum.makerdao.com/t/signal-request-should-emergency-action-be-taken-to-raise-the-wbtc-a-debt-ceiling/3519) by @jiecut.
  - Jiecut presents a signal toward increasing the wBTC debt ceiling as an emergency measure to further help the Dai peg. As most of you know, it is still slightly above peg as we have been for the last few months. This signal has already met the participation and consensus requirements to take place as an emergency measure and will be included in the executive on August 07th along with the base rate change.
  - I believe those are the only two things slated for this week's executive. I encourage people to vote on that thread and discuss it even though we have already figured out what is happening.
- [Should we change the RPs for various collateral types?](https://forum.makerdao.com/t/signal-request-should-we-change-the-rps-for-various-collateral-types/3484) by @befitsandpiper.
  - befitsandpiper asks whether we should take the opportunity to adjust risk premiums for collateral assets at a time where we can take advantage of the negative base rate to prevent peg impact.
  - LongForWisdom: Because we reduced the base rate to 4%, we can change the collateral type of risk premium without directly affecting the stability fee. It's a good opportunity to change them without messing around with the peg or affecting anything concretely. That's a good way to set ourselves up for something in the future.
  - Cyrus Younessi: To clarify, the point of setting the risk premium, although the stability fee wouldn't change. I think the idea is that in the future when rates do start to go back up, we won't have to go back to change individual assets. The base rate adjustment should be sufficient, right?
  - LongForWisdom: Yes, that's the hope, which is to set them to sensible values so that when we're in a position, we can raise the base rates and that everything kind of works out nicely with the risk-adjusted values.
- [Increase System Surplus Threshold](https://forum.makerdao.com/t/signal-request-increase-system-surplus-threshold/3316) by @Aaron_Bartsch.
  - Aaron asks whether it is the right time to increase the system surplus threshold.
- [Increasing the 'dust' amount](https://forum.makerdao.com/t/signal-request-increasing-the-dust-amount/3445) by @Jiecut.
  - Jiecut asks if the ‘dust’ parameter should be increased considering the sustained elevation in gas prices over the last few months.
- [Adjust the BAT Risk Premium and Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-the-bat-risk-premium-and-debt-ceiling/3334) by @Jiecut.
  - Jiecut also asks if the BAT-A risk premium and debt ceiling should be adjusted. Note that the BAT-A debt ceiling was changed in the most recent executive vote.
- [Increase ETH-A Risk Premium](https://forum.makerdao.com/t/signal-request-increase-eth-a-risk-premium/3377) by @Aaron_Bartsch.
  - Aaron is also asking whether we should adjust the ETH-A risk premium.
- [Add ETH-B Vault](https://forum.makerdao.com/t/signal-request-add-eth-b-vault/3349) by @Aaron_Bartsch.
  - Aaron polls the community around the introduction of an ETH-B Vault type. Worth noting once again that outside of emergencies, collateral onboarding needs to happen through the monthly governance cycle, but this can serve as an indicator to sentiment for the domain teams.
  - LongForWisdom: Although the last two signals passed, they depend on the winning options that leave this in the hands of the risk team.
  - Cyrus Younessi: We saw the forum polls on the ETH-A risk premium and the ETH-B collateral type as well. We spoke with the team about it yesterday. We are working on it. Stay tuned.
- [Should MKR be added as collateral?](https://forum.makerdao.com/t/signal-request-should-mkr-be-added-as-collateral/3350) by @Aaron_Bartsch.
  - Aaron does some initial polling around the inclusion of MKR as collateral. Worth noting that outside of emergencies, collateral onboarding needs to happen through the monthly governance cycle, but this can serve as an indicator of sentiment for the domain teams.
  - LongForWisdom: This failed to pass. People tend to vote against this.

## Smart Contracts Domain Team Update

### Mariano Conti

#### Smart Contracts Domain Team Update

[07:45](https://youtu.be/ZLgbKyTHPY8?t=465)

- I don't think there's anything too interesting unless anybody thinks of anything. We are still talking to the TrueUSD team, and we will have more updates soon on that. Other than that, there is nothing urgent.

## Oracles Domain Team Update

### Nik Kunkel

#### Oracles Domain Team Update

[08:22](https://youtu.be/ZLgbKyTHPY8?t=502)

- We have a polling vote coming up on Monday for potentially adding MyCrypto as a light feed. If you want to review that proposal you can [view it on the Maker forum.](https://forum.makerdao.com/t/mip10c14-sp6-proposal-appoint-mycrypto-as-a-light-feed/3383/2)
- Next week I will be submitting [a few oracle-related proposals.](https://forum.makerdao.com/c/oracles/13) One of them being a change for the quorum. We've been adding a few light-feeds consistently in the past few months, so we have a lot more, but we haven't ever really changed the quorum since we started, so I think we can safely raise that now and boost the security a little bit.

## Risk Domain Team Update

### Cyrus Younessi

#### Risk Domain Team Update

[09:23](https://youtu.be/ZLgbKyTHPY8?t=563)

- We submitted [MIP12 for blueprint for the LRC token](https://forum.makerdao.com/t/lrc-mip12c2-sp2-collateral-onboarding-risk-evaluation/3549) yesterday onto the forums.
- Later this week, today or tomorrow, we should see submissions for PAX and USDT (or Tether).
- Then, on the backlog for some time, in the next few weeks, there is LINK (or Chainlink). That is a mini-update on collateral evaluations from us.

## Collateral Onboarding Call Update

### Lucas Vogelsand

#### Collateral Onboarding Call

[10:27](https://youtu.be/ZLgbKyTHPY8?t=627)

- For anyone who hasn't been or hasn't heard about them, we have been intermittently doing [collateral onboarding calls.](https://forum.makerdao.com/t/collateral-onboarding-call-bi-weekly-on-wednesday-at-17-00-utc-19-00-cet-10am-pst/3614) They started leading up to the first MIP8 or MIP9 votes to talk through some of the different collateral types. And we, me and Lea from our team, are starting to kick them off again. We were doing them as part of the Maker Community to create a forum to talk about governance and risk topics that are not governance and risk topics yet because those collateral types are still very early on the stage. But of course, hopefully, the idea of this call is that the Maker Community can get a better understanding and see what's coming.
- For the format that we're going to start experimenting with, which is open for feedback, we will do a call on Wednesday at 5:00 pm UTC for roughly an hour every two weeks. The first one will be next week, where we will ask two projects to give a quick presentation on the collateral that they are interested in submitting or getting included in MCD, maybe some slides to get a good overview on a particular topic and following that twenty minutes of discussion. So ten minutes of slides, twenty minutes of discussion, times two, should get us roughly to an hour.
- We will be keeping this as open as possible, inviting anyone to join, both those who are presenting in the call but also those who just want to participate in the discussion. If you have a collateral type that you think should be discussed, we will be setting up a process for how to request it, and most likely this will just be a forum thread where you can submit that you want to get on and we'll do our best to fit people in and hopefully see many of you guys on the call next week, on August 12th.

#### Discussion 1

- LongForWisdom: I think that having a collateral focused call it's going to become almost a requirement as we continue. Not to say everyone always needs to show up, feel free to pick and choose things that you are interested in, but we're getting to a point where many points of collateral types are being submitted, it's easy to miss the point on how collateral types can potentially be useful. These calls will hopefully help the community to get a better understanding of some of the more exotic applicants or assets.
- befitsandpiper: Didn't we already have an onboarding collateral call?
  - LongForWisdom: Yes, Lucas ran a few previously intermittently.
  - Lucas Vogelsang: We've done this in a less formal way; we have had an almost two-month-break. We're kicking them off again with the new wave of MIP6 applications and all of the activity. I think it's a good thing to start having them again; it will be very similar. We'll post the recordings in the forum. I can't commit to doing summaries myself, but it would be great if someone does want to volunteer to put down some notes and keep an archive for everyone else to see.
  - LongForWisdom: Juan just said he would do summaries, which is very nice of him.

## MIPs

### Charles St. Louis

#### Weekly MIPs Update

[16:10](https://youtu.be/ZLgbKyTHPY8?t=970)

![Cover Page](https://i.imgur.com/NYjjjaY.png)

![This Week's Activity](https://i.imgur.com/7LyH9HL.png)

- Akiva will talk about the Declaration of Intent later in this call.
- Loopring's collateral onboarding application includes the work requirements from the Risk, Smart Contracts, and Oracle's teams.

![Next Week's Activity](https://i.imgur.com/GCQ4x8W.png)

![Collateral Onboarding](https://i.imgur.com/6P6XV3s.png)

- The collateral that failed greenlight polls could still go on, it's just a signal for the domain teams to gauge sentiment with respect to the community on what they think are great collateral types to be added to the Protocol.

![MIP17 Working Group](https://i.imgur.com/y4MJrSj.png)

![Join the community](https://i.imgur.com/IVyuiPR.png)

### LongForWisdom (Governance Facilitator)

#### MIP Submission Review

[19:44](https://youtu.be/ZLgbKyTHPY8?t=1184)

- The formal submission review is a chance for Governance Facilitators to say which MIPs have been fully submitted and whether they are going to continue to inclusion polls. As Charles said, there have been three sub-proposals submitted.

##### Off-boarding Rich Brown as a Governance Facilitator

- One to [off-board Rich Brown as Governance Facilitator.](https://forum.makerdao.com/t/mip0c13-sp1-subproposal-for-core-personnel-offboarding/3508) To be clear this is more of a formality to officially remove Rich from his position in terms of the MIPs and the DAO as opposed to the Foundation. I would suggest everyone votes in favor of this, even if you like Rich because it's a proposal to reflect the reality of the situation. If we all vote against, it's not really going to change anything; it's just going to mean that someone technically has permission to do things when they really shouldn't do.

##### Loopring Collateral Onboarding Sub-Proposal

- Another one, as Charles mentioned, is the [LRC collateral onboarding sub-proposal.](https://forum.makerdao.com/t/mip12c2-sp4-domain-work-requirements-for-lrc/3558)

##### Declaration of Intent

- The last one is Akiva's [MIP13c3-SP1 sub-proposal](https://forum.makerdao.com/t/mip13c3-sp1-declaration-of-intent-forward-guidance/3130), which is a Declaration of Intent.

##### All Submissions Included

- All three submissions seem fine to me and will continue to the Inclusion Polls next week.

### Akiva Dubrofsky

#### Declaration of Intent Sub-Proposal

[22:00](https://youtu.be/ZLgbKyTHPY8?t=1320)

![Cover](https://i.imgur.com/9qlJ9J2.png)

- This is a presentation on MIP13, Component 3, Subproposal 1, under LongForWisdom's Declaration of Intent MIP.
- I wrote this myself and with my business partner, Vitaly.

![Mission Statement](https://i.imgur.com/wRuUVU3.png)

- Risk parameters are moving a lot today.
- For Vault holders, it's not entirely clear why they're being changed. It sometimes feels that it's not fair to them.

![The problem](https://i.imgur.com/d4XM2lR.png)

- We're going to see later that the real economy does aim for stability in many respects. If we're asking if Maker can reach its growth objectives, we have to think if Maker can interoperate with the real economy. Can it provide stability not just to Dai holders, but also provide stability to vault users.

![Control Panel](https://i.imgur.com/Ci7nrbn.png)

- Central banks are always looking to create optimal stability, sometimes there are unstable reference rates like LIBOR, and those can also be hedged. If Maker is trying to act like a central bank, then Maker should also optimize for stability.

![Vault Holder Advocacy Group](https://i.imgur.com/V3cuFyi.png)

- That is why we have created the Vault Holder Advocacy Group, and I want to specify that this is a sell-side initiative.
- Until today, anything that has happened in MakerDAO has been buy-side initiatives. Meaning all groups are representing MKR holders.
- We're laying the groundwork here of what is to become sell-side groups, where these groups are not compensated by MKR holders, but they are groups representing Vault users. Its intention is that sell-side groups work together with buy-side groups, each representing their own best interest, to achieve mutual goals.

![Variables](https://i.imgur.com/Um7tALI.png)

- When we think of the factors that can change risk parameters, this goes back to Steven Becker's [series on governance and risk.](https://blog.makerdao.com/makerdao-governance-risk-framework/) There are:
  - Endogenous: Variables related to a collateral type. We would look at what variables can change in terms of collateral types, such as the custodian, the volatility, and the liquidity. Part of the job of the group would be to identify these and advocate for guidance on these variables from the risk teams.
  - Exogenous: Related to what's happening in other markets, and we can maybe make inferences of related risks from other things happening in the market and how that relates to the collateral types in a collateral portfolio.
  - System-Related: A subcategory of exogenous. For example, monetary policy can influence risk premiums.
- Just like we introduced a separation of concern, where risk parameters should be considered separate from monetary policy, this should actually not be in the voting construct of risk premium and base rate. This should actually be a governance-wide mandate where we separate monetary policy decisions from risk decisions.

![Milestones](https://i.imgur.com/TVOlvhl.png)

- We are going into the August cycle now.
- If we can get that, we're going to create a working group by inviting everyone in September.
- Hopefully, we will have some forward guidance in October.
- If we do this, hopefully, by 2021, we can start to see the development of the sell-side domain teams, which will increase the maturity of MakerDAO.

![Why now?](https://i.imgur.com/wIZssWb.png)

- Corporate users predictability.
- Corporate users can't justify changes like this to their board, where interest rates are going all over the place.

![Contact](https://i.imgur.com/uUIPfD7.png)

#### Discussion 2

##### Declaration of Intent

[27:23](https://youtu.be/ZLgbKyTHPY8?t=1643)

- LongForWisdom: How the Declaration of Intent fits with this? I guess it's the creation of this group and an intention to take into account the group results when it comes back with suggestions?
  - Akiva Dubrofsky: It's exactly that. We just want to know that MakerDAO is going to take the results of the working group seriously. We want to know that we can have some influence in bringing stability to Vault users.

## Risk

### Vishesh Choudry

#### Relevant Links

[MCD System Stats](http://daistats.com)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

#### The State of the Peg

[30:26](https://youtu.be/ZLgbKyTHPY8?t=1826)

![](https://i.imgur.com/AVqTMSY.png)

- We had a steady-state of about \$1.01. Started to see a price run-up explained as a function of yield farming activity and drawing up liquidity for Dai. Basically ending a lot of arbitrage on 07/26.

![](https://i.imgur.com/7p6bAyi.png)

- The mental calculus has been that as more Dai is minted, anyone who is market making on Dai has the variables: "I can make a 2, 3, maybe 4% profit in the short-term vs. a 600% annualized yield."
- If you think about that yield, that is a 2-3% yield a day. Which means in a couple of days, you could make your money back with a different kind of risk compared to arbing the peg. Obviously, a different kind of risk, with un-audited smart contracts and new activities, but you're also theoretically not holding the bag on some Dai risk. It's a differential type of risk and theoretically a yield that is just as, if not more, attractive.
- You can see why there is very little arbitrage in these time frames. Also, a lot of liquidity of Dai is drying up and being dumped into these yield farming protocols. You see a dip back in the Dai peg, coinciding with the end of major yield opportunities with the YFI farming pools.

![](https://i.imgur.com/epk2Wwi.png)

- Hard to tell whether this rise in Dai price is coinciding with increased yields on Compound versus forks of the YFI farming pool. Around this time frame, we saw 40-60 million Dai sitting in the YFI fork Balancer pool. That dried up too, coinciding with a drop in Dai price.
- The trend is a spike around an opportunity and then subsequent drop back down to a normalized price, which makes a lot of sense if you think about the circumstance.
- As these yield farming opportunities dry up, and you see volumes shift back to stable, long-term opportunities like Compound; though there is a discussion about the time frame there, it's certainly longer than these other fixed-timeframe YFI type farming opportunities. When short-term yield farming goes away, peg returns to a steady state sitting a bit above \$1.01.
- There is a lot of common sense reasoning about why Dai is above a dollar. It goes back to if you have 1 USD and have access to 1 USDC or 1 Dai, which one would you rather try to hold? Would you swap 1 USDC for 1 Dai for farming/supplying to platforms for yield, etc.? The answer is, for a lot of people, yes. Not only that, but for \$1.05 USD, they will still buy it. Paying the extra cent premium is worth it to:
  - Get these extra yields.
  - Pay down debt.
  - Pay to have access to the call option on the illiquidity of Dai. People realize that if I buy Dai and hold it, for when Dai price goes up (liquidity, liquidation), they can make money.
- Users are arbing up the peg even when it is above a dollar. Dai is heavily used and limited supply compared to say USDC, it's a staple in DeFi. When you put together limited supply and high demand, it makes sense that the asset carries a premium. Dai also gives access to passive yield opportunities simply by holding it, so it makes sense that people put a premium on Dai. There is a broader conversation beyond SF changes in regard to maintaining Dai. Those fees don't control the long term premium on Dai. The long term premium comes from the fundamental nature of how the asset works, how it's used, and its supply.
- In regards to the scale of the supply, the scale of hundreds of millions and not billions, that scale causes it to run up quickly when it is stressed if you think about liquidity on the open market versus transaction volume. We've known that Dai is a comparatively illiquid asset for a while, and once it was demonstrated that you could arbitrage it effectively, it did not stay below peg for a while. Now, we're on the flip side of that scenario where Dai has so many uses and access to so much passive yield it stays elevated.
- In the past, being bullish on ETH led to Dai price going down as people tried to lever up on ETH, selling Dai, and making the price go down. Now, it is interesting to see that all of these supply sinks (or demand generators) are now more prominent drivers of Dai price. It's a different model of how Dai is used as opposed to its history with ETH. This means we must have a broader conversation for Dai use. Ideally, that conversation will address monetary policy to address Dai's use for high-profit opportunities. It is currently cheap and easy to mint, which has led to large volumes of it being minted and being primarily supplied to yield farming opportunities.

![](https://i.imgur.com/21BubyF.png)

- Total supply of 364 million Dai Total. With a total of 568 million possible DC.
- Dai from ETH 282 million, Dai from BAT 2.6 million, not capped out. 47 million dai from USDC, not capped out.

![](https://i.imgur.com/w5ZFnmc.png)

- 40 million dai from WBTC, capped out. Smaller amounts from all the other vault types.

![](https://i.imgur.com/vH3RMdX.png)

- Looking at WBTC supply as the ceiling moved, it got capped out pretty quickly.

![BAT](https://i.imgur.com/w4jqHKg.png)

- BAT<->Dai supply shot up again in late August because of yield farming opportunities in July.

![ETH](https://i.imgur.com/irMK4OA.png)

- ETH has shown a steady linear growth pattern since MCD launch. It was transposed down after the March 12th event. Despite that, the trend resumed. This suddenly accelerated as yield opportunities became more attractive for Dai. There is a huge interest in using ETH as collateral to maintain exposure to that asset while minting Dai for yield opportunities. It has shot-up to 290 million rather quickly over July and more recently. Whether this is a continuing stable demand for Dai or whether it is a short-term craze for the yield opportunities that exist is still a question. My personal rule of thumb is to expect that when things shoot up, suddenly, they have a chance to come down suddenly. If these yield opportunities dry up or have a different asset as their primary target, we will have to consider whether demand is sticky or transient. If 130+ million Dai is dumped on the market, we'll be dealing with a different peg problem.

![](https://i.imgur.com/yGqqRKn.png)

- As far as USDC, it's been more fickle with several actors moving overall supply. Primarily used by traders since it's the most profitable/least risk asset to mint Dai. Especially since it's less than ETH. It's 47 million now.

![](https://i.imgur.com/12yVGJD.png)

- We're looking at 270 million Dai being supplied on Compound, which is a significant chunk of the 374 million that exists. More of half of that is on Compound.

![](https://i.imgur.com/PNoRbXm.png)

- There is this Balancer pool of the YFI fork that dropped 40 million dai in there, jumped to 60, and then back down to 16 million.

![](https://i.imgur.com/6HJQAm4.png)

- About five million in the curve Dai pool and more sitting out in significant yield pools. That's why we spend a lot of time talking about yield pools and where the Dai supply is and where it's going. It's a huge chunk of the equation at the moment. There are topics to be discussed, whether it's good or bad, and what impact that has on the peg long term. Also, whether the supply of Dai and how that supply is used is taking liquidity from other potential use cases, alongside the risk that it creates. There are some outstanding ideas on what risk and for whom, and what benefits it generates.
- Limited amount of insolvency that MKR can cover. MKR exits to be an insurance policy as Dai and collateral pool grows.
- As the Dai supply continues to grow, the risk that the insurance from MKR underwriting continues to grow. Ironically, during that same time frame, the premium that insurance policy generates is at zero. How much can you underwrite that risk continuing to grow?
- There's a conversation around the peg: are these monetary tools really moving the peg at all? Or is the peg moving at its own accord from external factors? It's IMHO the latter. The SF has a very small fee over time and in comparative percentage terms small. Even if there was a higher fee on the ETH Collateral portfolio, it's not a very large fee compared to the risks of yield that those Dai holders are taking on when they use that Dai in the first place. In the grand scheme of things, I would not expect that SF is significantly impacting how Dai is used. Is it the right tool for the right job right now? Or is there a conversation to be had about other mechanisms to put in place and better arb or control the peg to keep it stable. The simple answer is during these time frames, the amount of Dai sitting on order books above a dollar is a proxy for how much market making you would have to undertake to arb the peg back down to a dollar. Theoretically, there is a number of money you could mint to sell and arb the peg back down, purchase that Dai back afterward, and prep for the next swing. Continually making that large scale market activity. The problem is that it is less profitable than things you can do with that capital on the Dai portfolio. That profitability is what makes it difficult to keep the peg stable at the moment.
- Obviously, you want to bifurcate that discussion from the .01 premium that exists over time. What to do about it? Why does it exist? Do we understand why that exists? Are there things to be done about it? By no stretch is this a simple conversation. There is a lot going on here; the first and most important thing is to ask the right questions.

#### Discussion 3

##### The Impact on MKR of Trapped Dai in an External Protocol

[51:56](https://youtu.be/ZLgbKyTHPY8?t=3116)

- Nosagie: Assuming there is some hack, a lot of the Dai that's been used in these performing protocols becomes inaccessible?
  - Vishesh: It's a little tough, but you asked if there's a hack on one of these platforms, is the MKR cap high enough to cover that risk. Very complex question there. We can touch on what are the complexities involved; I'm not going to pretend to sit here and give you a simple yes or no answer. If you think about it, say 210 million excess Dai supply on Compound. If there is some critical failure in Compound and all of that 210 million was at risk and insolvent. What the market cap of MKR is, it's not as simple as saying, "is the market cap of MKR greater than that amount?" And let's say, all of that value is lost tomorrow, it's not a question about knowing if the MKR could cover that. It's a question of, what is the subsequent series of dominoes, how much of a hit would the MKR price take if an event like that occurred if there is a large mass liquidation event, is there first some impermanent loss to the MKR price?
  - We have seen this before when the DeFi community knows that the MKR is going to take a hit in terms of losses, there is some injury to the MKR price. And we saw a lot of this occurring before when we had to have those secondary auctions for MKR, etc. There is some math to be done in terms of how much the market cap can cover. I think it's the correct question to be asking right now. What kind of risk is ballooning as the supply continues to grow and continues to be locked up in three or four contracts? As far as the technical question of how risky are those contracts, that is not something that I can pretend to be able to answer. You want to have really well-versed smart contract developers to talk about the contracts that are out there, how good they are, some percentage value of how risky they might be.
  - Again, a lot of the time, risk evaluation is going to be relative work. It's how risky something is compared to something that we all expect. At the end of the day, I think, that's how a lot of pricing works, what is expected and what is unexpected, and it's about identifying how far out of what is expected in terms of risk or loss would a contract really go. There is an embedded complex smart contract evaluation question there as well. You can also look at it common sense-wise, if you have 374 million of an asset and 210 million is in one contract, and something goes wrong with that one, there would be a huge potential loss event. So you have to think about how much of that risk you are willing to take on and compare it to a multiple of the current market cap of MKR and what ratio you are really comfortable with. Because, at the end of the day, a lot of that risk management is about what ratios are the community or the shareholders comfortable with.

##### Types of Actions to Bring Down the Peg

[56:20](https://youtu.be/ZLgbKyTHPY8?t=3380)

- Nosagie: Assuming this yield farming craze goes on for a long period of time, do we have any emergency solutions, or are we just going to have to sit with the peg staying above one?
  - Vishesh: Not sure what you mean by emergency solutions. Because there have been a number of emergency actions that the community has taken, but I think that it would be good to have a holistic conversation around the types of actions that are being taken in terms of moving stability fees, moving debt ceilings, introducing more assets. Are those sufficient measures for bringing the peg back down to a dollar, do you expect the peg to come back down to a dollar, even with all those measures in a short to medium time frame, is this the long term aspect of how Dai works now or are there other measures that you need to put in place to help bring that down? I'm not sure it's necessarily appropriate to call that emergency actions, and that's a conversation for the community to be had, so I don't want to call out that assumption, but it very well could be, it's a community call on that.

##### Flooding the Market with Dai

[58:28](https://youtu.be/ZLgbKyTHPY8?t=3508)

- Gregory Di Prisco: Right now, it feels like we are very reactionary when I think we would be doing ourselves a service to be more proactive. What I mean by that is, everybody is uncomfortable with raising debt ceilings at a very rapid pace and sometimes for a good reason, but they are especially uncomfortable with it because we are not getting compensated for this with stability fees. A potential solution is to make ourselves more uncomfortable temporarily to solve the problem almost permanently. What I mean is, you would raise the USDC debt ceiling quite high and incentivize people to use that facility, and that would flood the market with Dai in the short term. As we've seen via this yield farming craze, is that the demand is not instant, the demand has been growing almost linearly with time, as far as I can tell, where new entrants into the market want the yield, and then the Dai demand goes up incrementally. If we were to give the market a lot of Dai very fast, I think the peg would go below a dollar. Once the peg is below a dollar, you can put stability fees up, and you can manage further supply-demand proactively. Then, I believe, we could grow the supply with a positive stability fee. Basically, it raises the baseline by putting it at a new normal.
  - Vishesh: In theory, yes, flooding the market with Dai supply theoretically achieves your goals. But how do you intend to proactively get a bunch of Dai flooded onto the market? Because right now, you are not even maxing out all of your debt ceilings that have been raised.

##### Lowering the Collateral Ratio

[1:00:31](https://youtu.be/ZLgbKyTHPY8?t=3631)

- Gregory Di Prisco: My idea would be to keep USDC at a 101% collateral ratio and make a non-binding commitment to keep the stability fee at zero for the foreseeable future until it's maxed out.
  - Vishesh: Lowering the collateral ratio... Again, the backdrop of all of this is in pretty much everything you are talking about, is some form of increased risk, so that should be an important backdrop, theoretically, lowering the collateral ratio of USDC is one way to improve the amount of utilization of the existing debt ceiling and that part makes sense, but I don't necessarily think that would be enough. If you are talking about flooding the market with more Dai liquidity to help bring the peg back down, there are two assumptions that are inherent there. One of the problems, there's been a significant increase in debt ceilings and also a hugely significant increase in mintings, but when that Dai is created, it doesn't make it into the open market. It just goes and gets deposited in more yield farming opportunities. I really love the suggestion to start thinking about this proactively instead of reactively, because I think that it has been a huge problem. A lot of the actions that have been taken in terms of peg management are pretty reactive. My question is: how do you proactively catalyze more market-making activity?

##### Collateralization Ration as a Form of Debt Ceiling

[1:02:40](https://youtu.be/ZLgbKyTHPY8?t=3760)

- Gregory Di Prisco: I want to point out that, whatever the collateralization ratio is on USDC, that effectively puts a ceiling on the Dai price. Because if you are a yield farmer, you are not going to buy Dai for a $1.02 if you can mint it at $1.01.
  - Vishesh: There will always be people that would rather purchase it than hold USDC and deposit it and mint it in the Maker smart contract. That bucket will always exist, but I get what you are saying for sure. Currently, by and large, the Dai price does seem to sit around $1.01 when it's not being stressed by crazy yield farming opportunities, so wouldn't it then just continue to sit at $1.01?
  - Gregory Di Prisco: I don't think so, but I would like to hear some other opinions too.
  - Sam MacPherson: There's an interesting effect if we put out a hard cap on the price; it may provide a shelling point such that people may be more inclined to short-sell before that point.

##### Unexplored Consequences of Low Collateralization Ratios

[1:04:25](https://youtu.be/ZLgbKyTHPY8?t=3865)

- Cyrus: For me, there are unexplored consequences of super-low liquidation ratios. I just think it needs some careful thoughts before we go that far. Things like liquidations, stability fee accrual, oracle live price feeds. I don't know if it came across clearly to everyone, but essentially what a low liquidation for USDC does is it allows users to deposit their USDC, draw Dai, and walk away. They essentially abandon their vaults. The good thing is that the liquidation ratio puts a cap on the Dai price because it's essentially in a closed-loop arbitrage. The downside is that there will be all these abandoned vaults in the protocol, and we don't really have a very clear action plan on that going forward beyond that. So that's my immediate concern.

##### Proactive Peg Management

[1:06:16](https://youtu.be/ZLgbKyTHPY8?t=3976)

- Andy Tulhope: Vishesh, you were about to give us some insights on what you feel it would be proactive peg management and we got sidetracked again into the debt ceiling. Would you perhaps have any further comments on what you think would constitute responsible, proactive management of the peg?
  - Vishesh: I feel like people think I'm always on the cusp of giving a silver bullet answer. I don't think we've necessarily come up with a good comprehensive solution that solves all the problems and also maintains really good risk management. That's because a lot of the problems and the solutions that we are talking about are inherently an increase of risk in exchange for an attempt to solve a problem. That's a mental calculus that the community is going to have to do in terms of the level of comfort. As far as proactive peg management, currently, if you just increase the debt ceiling or lower the liquidation ratio, which does increase utilization on a percentage basis. Let's say you've done that and it hasn't solved the peg problem, what is the solution? I'm just asking to ask this question of what actual direct management solution is put in place where you are either yourself arbitraging the peg or causing someone to arbitrage the peg. Right now the core problem is nobody wants to mint dai and sell at \$1.01 because a) there are far more profitable things they can be doing with their capital or b) they are concerned that they are going to be sitting there holding that bag for a while before the peg returns back to or below a dollar. I see a lot of indirect solutions, but what are the more proactive and direct solutions to that question? I'm not giving you the answer; I'm just trying to make sure we are asking the right question. Happy to answer anything further.

##### Uncertainty Hinders Arbitrage

[1:09:23](https://youtu.be/ZLgbKyTHPY8?t=4163)

- Wil Barnes: We don't reliably return to the 1:1 parity, I think we did it only once during crop rotations, and I think it would make sense if we did that often, but we don't. So the sticking point you just said about owning bags for however long is probably one of the big things people don't really know when we'll be back in parity or even below parity. You can't arbitrage the peg if you don't know when it will be back in parity. Chris Mooney summarized it nicely: we do go back to it eventually; we went to it last week after all the YFI yield farming was over, but we didn't save it for very long, and then we went back up. So, I think that if people were going to go mint Dai or if you are going to arb the peg back down, you basically have their collateral sitting in a vault until it's arbed and then people just may be sitting on that collateral with risk however long until we go down to peg.

##### Is 1.01 the Current Floor?

[1:10:44](https://youtu.be/ZLgbKyTHPY8?t=4244)

- Vishesh: Brian brings up this question in the chat, and I think it is a very legitimate question, "is a $1.01 the current floor?" Post YFI farming, although there is a lot of slippage and trades coming back down below a dollar, it wasn't even long enough to make it into a 24-hour volume-weighted average price, so that average price did not hit parity even though individual trades did. That is an important point to consider. As far as Brian's question is a $1.01 the steady-state and how hard are you trying to push it back down to a dollar. There is a counter to that question, which is the way the system is defined, the peg is one dollar, so if there is a disconnect between the way the peg is defined in the system and what the peg is realistically on the market, what does that do to the confidence in the system. Those are the two things to consider: how hard are you going to push yourself to squeeze the peg from $1.01 to $1 versus what is the narrative disconnect between a steady stated $1.01 and the system definition of $1.

##### Raising the WBTC Debt Ceiling by 100 Million

[1:12:43](https://youtu.be/ZLgbKyTHPY8?t=4374)

- JoeQ's: This is a function of yield farming. My idea is to go and bump the WBTC market cap by 100 million. What does that do? You have a 100 million Dai come on the market, is that all going to be absorbed by the yield farming? No. And the reason why it's going to come on the market to sell Dai is they are going to sell and Dai for USD, because they're borrowing bitcoin at zero meanwhile the interest rate arbitrage versus the overall market is around six to eight percent. So, we'll fill up the vault dramatically and bring down the peg big time. There may not be a 100 million we can vote on as governance and community, but I think that MKR holders can bring down the peg pretty fast.
  - LongForWisdom: There is currently a [signal request to increase DC for WBTC](https://forum.makerdao.com/t/signal-request-should-emergency-action-be-taken-to-raise-the-wbtc-a-debt-ceiling/3519), scheduled for Friday. The exact amount is still in debate. I think 80 million was the maximum on that signal.
  - befitsandpiper: 80 million DC is already almost all of the WBTC supply. If we increase it to 100 million, are there ramifications about increasing the DC beyond the current supply?
  - LongForWisdom: One point is the total capital of WBTC can expand fairly easily, I think.
  - Wil Barnes: No one is arbing the peg. I'll concede that we did not touch the peg. It was at parity for a brief time. It's been four and a half months now since we've been able to maintain the peg for just a reasonable period of time, so no one is going to even bother to arb the peg, in my opinion.
  - Sam MacPherson: I see the WBTC total supply at 200 million.
  - befitsandpiper: Right now, it says we have a utilization rate of about 40% on [Dai Stats](https://daistats.com). I don't know how often that is updated.
  - Sam MacPherson: Is that of the total supply or how much Dai is minted from that?
  - LongForWisdom: There are two Utilization metrics. Percentage of the debt ceiling used and percentage of the total supply locked in Maker.
  - Mariano Conti: Utilization is at 100%. There's 40 million Dai from WBTC, with a 40 million DC. That is about 10% of the total Dai supply, assuming 400 million Dai. And 43% of all WBTC is locked up. So almost half is locked in Maker.
  - Sam: I was not accounting for CR ratio. You're correct. We would be at around 80% of the supply if we doubled it.

##### Outro

- LongForWisdom: I would encourage people to ask longer form questions on the forum and just, in general, to have more discussion on there as well. We've had many suggestions on the call today that I'd love to see as a signal or as discussions. We'll leave it there for today and hope to see you all next week!

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GF`: Governance Facilitator

`GP`: Governance Poll

`RP`: Risk Premium

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

## Credits

- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Igor Teslya produced this summary.
- Gala Guillen produced this summary.
- Juan Guillen produced this summary.
- Tim Black produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
