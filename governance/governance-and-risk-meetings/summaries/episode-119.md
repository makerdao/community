# Episode 119: November 19, 2020

## Agenda

- [00:00](https://youtu.be/qeSHFs_n58Y): Introduction
- [02:22](https://youtu.be/qeSHFs_n58Y?t=142): Governance at a Glance
- [04:42](https://youtu.be/qeSHFs_n58Y?t=282): Smart Contracts Team Update
- [11:22](https://youtu.be/qeSHFs_n58Y?t=682): Oracles Team Update
- [21:57](https://youtu.be/qeSHFs_n58Y?t=1317): Risk Team Update
- [24:50](https://youtu.be/qeSHFs_n58Y?t=1490): Community Development + Operational Support Update
- [27:40](https://youtu.be/qeSHFs_n58Y?t=1654): Collateral Calls Update
- [31:29](https://youtu.be/qeSHFs_n58Y?t=1889): MIPs Update
- [36:34](https://youtu.be/qeSHFs_n58Y?t=2194): November MIPs Submission Review
- [37:22](https://youtu.be/qeSHFs_n58Y?t=2242): Liquidations and Uniswap LP Tokens
- [48:13](https://youtu.be/qeSHFs_n58Y?t=2893): Collateral Onboarding Handbook
- [1:00:36](https://youtu.be/qeSHFs_n58Y?t=3629): Timeline for DsChief 1.2 Revealed
- [1:08:39](https://youtu.be/qeSHFs_n58Y?t=4119): Open Discussion

## Video

<https://youtu.be/qeSHFs_n58Y>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/qeSHFs_n58Y)

- Hello everyone, and welcome to the MakerDAO Scientific Governance and Risk Meeting number 119 taking place on Thursday, November the 19th at 16:00 UTC. My name is LongForWisdom; I am the governance facilitator at MakerDAO. Please feel free if you want to interrupt or ask questions in terms of the usual preamble. We'd like you to get involved. 
- Thank you to everyone for joining. I'll briefly go through the agenda. We're gonna have the regular weekly updates and the MIPs governance poll review. We've got a couple of Nik and Charles segments talking about liquidations and useful LP tokens. Charles is going to talk a bit about the collateral onboarding handbook. 
- Before I dive into the governance update specifically, there are some questions about this meeting itself. A couple of people asked if we want to consider moving the meeting time to be one hour later to 17:00 rather than 16:00. Also, I think Matt Rabinowitz proposed leaving the meeting open after the official recording time so that people can just discuss in a more informal setting. I'm currently considering both options. There is a poll on the forum, which I will [link](https://forum.makerdao.com/t/informal-poll-moving-governance-and-risk-meeting-time-leaving-meeting-open-after-recording-ends/5216) in the chat right now. I'd appreciate it if people in this meeting could vote in those to give me some idea of what they are thinking. I think we'll discuss this more next week after seeing the poll results, but I would appreciate that.

Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[02:22](https://youtu.be/qeSHFs_n58Y?t=142)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

- This week, Derek and a couple of others have noticed that something's behaving a little bit strange with the Governance Polls. We're not considering the polls to have been decided yet. The UI is potentially incorrect. Therefore, we'll be posting on the [forum](https://forum.makerdao.com/t/technical-difficulties-with-polls-2020-11-02/4964/2) with the results once we know what's going on and hopefully fix these UI issues. 

##### Discussions

- [PSM, Flashmint, MKR tokenomics and MakerDAO security](https://forum.makerdao.com/t/psm-flashmint-mkr-tokenomics-and-makerdao-security/5161)
    - Homo_Economicus asks some questions about the future of MKR Tokenomics, which prompts lively discussion.
    - We had a cool discussion, a couple of comments and questions talking about the future of Maker economics, which prompted a lively discussion around the topic. This is obviously something people think about a lot, which is cool.
- [[Gov Poll] Vote for 0% for the Stablecoin Stability Fee!](https://forum.makerdao.com/t/gov-poll-vote-for-0-for-the-stablecoin-stability-fee/5200)
    - cyrus of Former Risk Team fame argues favoring reducing the stablecoin stability fee given the recent discussions around stablecoin vaults.
- [Small Vaults Liquidations & Incentives](https://forum.makerdao.com/t/small-vaults-liquidations-incentives/5166)
    - charlesstlouis posts a discussion about the risks and details around setting the dust parameter on behalf of the Maker Foundation in response to the post by yaronvel from the protocol.

##### Signal Requests

- [Accelerate the PSM Launch](https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094)
    - hexonaut opens a signal to accelerate the launch of the PSM (peg stability module) given recent feedback that DAI is losing market share in Latin America compared to USDC.
    - This signal ends Friday, November 20th. If you haven't voted on that, I will encourage you to do so. 68 people have voted so far. It's been a pretty good turnout. I seem to be mostly positive at this stage.

### Christopher Mooney

#### Smart Contracts Team Update

[04:42](https://youtu.be/qeSHFs_n58Y?t=282)

- I'll begin by talking about last week. We had the executive for GUSD-A, which did pass. That's subject to the 72-hour governance delay, which will happen, I think, on Monday. Even if the portal will tell you that it'll execute sooner, it has office hours modifiers. So, don't freak out or change your tooling until Monday. There's polling happening for the monthly executive. UNI and AAVE have collateral assessments, which are in review by me. However, they are totally blocked on me reviewing them. Thanks, Naz, for doing that; that's awesome. 
- As far as PAXG, we were going to put it in this week's executive. When we were implementing it, PAXG charged a fee on transfer. Therefore anytime the transfer run call is made, there's a fee that's applied. Our DssGov proxy actions work to call the joint adapter. This would mean there is a fee in the join adapter when joining and exiting. The proxy actions also hop the ERC-20 through it, which means that there would be a double-fee on inserting PAXG into our system. For what it's worth, this double-fee would apply to Tether as well if Tether were to turn on their fees. We're trying to develop a solution that would work for people who charge fees on transfer. Unfortunately, that means that PAXG will not make the cut for 2020. We're going to put it off until 2021, but more on that probably in January.
- The DssGov.Exec library is still in review. There's a lot to that, but it'll make spellcrafting much easier. I'm sure all the collateral onboarding teams are going to be psyched about that. There's no work on the collateral onboarding sheet, but the documentation is complete and has been posted. I believe there'll be more on that later, which is great news.
- The Domain Team [posted](https://forum.makerdao.com/t/2020-year-end-schedule/5218) a tentative schedule of what we think is going to happen into year-end. Thank you, Long. It turns out I can't edit it, so I don't know if I need permissions in the forums. It keeps telling me I don't have permission to edit that.
    - LongForWisdom: Okay, let me fix that.
- We're going to try and make that a living post until the end of the year and update it as we go. This is a very 'aggressive' schedule, and we will be implementing a happy path on everything. We think this is what we'll be able to pull off with that happy path. However, any randomizations, reprioritizations, or "gotcha's" with any of that may result in us to be highly discriminatory and just knock those right out until 2021. Check the schedule out. If you have any questions, feel free to post them there. 
- Governance will probably have to decide between the Flash Mint Module and the PSM for December 18th. That's probably going to come up as something that we'll need to signal for and vote on. 
- I made a [post](https://forum.makerdao.com/t/dschief-1-2-flash-loan-protection-for-maker-governance/5115) about fixing the governance Flash Loan. There's a more extended [video](https://www.youtube.com/watch?v=JkKAQo32bp4) of the history behind the flash loan fix and what we're doing for it. If you missed that, it's about a 30-minute discussion in the community call which I was on this week.
- I started putting the collateral onboarding updates in the forums. There's an announcement channel in RocketChat. That will be linking out to this forum's post. So, anybody who needs to use these things before they go live and put them in code will find the details, contract addresses, and whatnot in there.  
- Sam has continued to work on the PSM. In the coming weeks, we have the executive bundle. I'm sure that'll get rolled up later. I know the polling's not finished. Therefore, I'll probably end up talking about this later. Still, we're gonna end up pushing DsChief 1.2 out to Kovan, which I'll discuss later. 
- Friday's executive will include polling results. We have assessment work for UNI and AAVE, which are in the final review. We're still planning on doing renBTC, tBTC, and the UNI-V2-wBTCF LP token. Those are all going to have to happen by the 17th, according to the schedule. You can expect them next week. As for outstanding Domain Team reviews, we still have MIPs 14, 17, 25, 29, and 30. These are the [DAI protocol transfer](https://forum.makerdao.com/t/mip14-protocol-dai-transfer-update/3844), [the weekly debt ceiling adjustments and risk adjustments](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021), [flash mint module](https://forum.makerdao.com/t/mip25-flash-mint-module/4400), [PSM](https://forum.makerdao.com/t/mip29-peg-stability-module/5071), and [farmable cUSDC adapter](https://forum.makerdao.com/t/mip30-farmable-cusdc-adapter-cropjoin/5163), respectively.
- Regarding the Foundation Team, I'll say the auditors for Liquidation 2.0 are chosen. However, we're still working on some of the finalized details. Therefore, we're not going to announce who they are just yet. We may announce that next week as we have more info. 
- Finally, DsChief 1.2 work continues, so I'll talk about that later when we get to that segment.

### Nik Kunkel

#### Oracle Team Update

[11:22](https://youtu.be/qeSHFs_n58Y?t=682)

- Last week, we had done Kovan deployments for oracles with PAXG, UNI, and AAVE. We're basically on track to get those in before the end of the year except for PAXG based on Mooney's comments.
- We're also going to do the oracle assessments this weekend or possibly early next week for the three mentioned as well as renBTC and tBTC. So expect those two to come out pretty soon. For renBTC and tBTC, likely, we'll just recommend using the existing wBTC oracle rather than creating anything custom. It's just a matter of where they're traded and coming up with a robust data model. When the volume is lopsided, it is a little bit challenging. What we are doing would be the safest method. RenBTC is a little bit more complicated because they have a mechanism for minting and potentially burning. The idea is that even if the fundamental price for renBTC would be slightly adrift from Bitcoin due to these fees, it's almost negligible from a percentage standpoint. That means that the collateralization ratio rate has a much higher relevance regarding how much debt you can take out and whether you should be liquidated. Hence, it's actually quite feasible to just use the regular wBTC oracle in that case.
- We're in the final testing stages for the Uniswap V2 LP oracle contracts. The other thing I'm looking into right now is whether we can use them for  SushiSwap because SushiSwap should be a fork in my mind. I'm not sure how many changes they've made since they launched, but I'll have to investigate that. We'll likely be able to get the SushiSwap LP pairs for free as well, which would be appealing because the yields on those for certain pairs will be higher given that they've turned on the incentives for a few different pairs. SushiSwap is more competitive in some pairs. Uniswap is more competitive in other pairs. This means that what you use determines the best price and the majority of the volume for each of those pairs—this way, the fees tend to be better. I'm not sure if we have any greenlit polls for any of the SushiSwap LP tokens. Once we get the Uniswap LP tokens out, the community should start looking into the other ones. 
    - LongForWisdom: Cool, thanks. I think I need to say that I noticed the[ whitelisting proposal for Yearn Finance on the YFI-USD Oracle](https://forum.makerdao.com/t/mip10c9-sp14-subproposal-to-whitelist-yearn-finance-on-yfiusd-oracle/5228) on the forum earlier as well. 
    - Nik: Yeah, that came in yesterday. That's for a YFI vault that they're creating.
    - LongForWisdom: Cool.
- Chris: You see that they're also backporting our Chief Flash Loan fix into their Vaults?
    - Nik: I did not.
    - Chris: I'll find that here.
- Frank Cruz: Hey there, Nik. Quick question. About 24 hours ago, we had IndexCoop, and the SetProtocol guys hosted in the meeting with Juan. One of the things that came up during that call concerned the oracle and planning on using it. I believe it's going to be the most popular one on DeFi. You know which one I'm talking about? However, they said they were open to working with whatever we, Maker, and the community wants to use. So, my question is, when we see a MIP6 as a community, should we start telling these protocols, 'these are the oracle expectations?' How should we approach that?
    - Nik: Sure. In terms of what another protocol uses, they're free to use whatever oracles they want in their system. For our system, I don't think we should be allowing anyone to use any other oracle besides ours. It's just way too risky to basically have a dependency on an external protocol. From a cost perspective, we don't want anyone turning up the wick on us later. And from a financial perspective, it's not even a good idea to have the dependencies. If they're writing MIP6's and say that for the oracle side of things, they are using ChainLink or something like that, the answer is just straight up no. They have to use our oracle. They won't be paying for any of that stuff; it's covered by the DAO because it thinks that the stability fees generated will outweigh the costs of maintaining that oracle.
- Frank: Got it. Yeah, I think it was a question of DPI, the DeFi pulse. It catches pricing from Maker, YFI, and Balancer. It's been a little challenging for them.
    - Nik: I've been talking to Felix about that one regarding the best way to do it. There are a couple different ways. One way is from an off-chain perspective where you just pull all the index components' prices and get the appropriate weightings. The feeds in their off-chain clients come up with a number, and then they push that number to the oracles. The other way to do it is through our custom oracle smart contract, which contains the weightings. You can pull the weightings from the external contract–maybe just has them in storage–and then there's a function anyone can call to update those weightings. You link the prices to on-chain existing oracles that we have for all of the index components. Now, where this gets tricky for both of these methods is when the index updates; Whenever an asset is added or removed to the index, we would have to make changes on our end to support that change. There needs to be some kind of implicit agreement with the DPI community or whoever is controlling this. Whether they want to make changes, there needs to be a six to eight week lead time. This problem isn't unique to Maker. Everyone who integrates DPI in terms of any kind of finance-related thing where you need a price oracle will run into this problem. I think it's not an unreasonable request. I believe it's something that they're just going to need across the board. This is only one of those unique little scenarios you have when dealing with an index that can change over time.
- Juan: They did mention that, Nik. I don't want to go too much into detail. However, they did mention rebalancing when the supply changed in addition to adding or removing assets. So, that's something to consider. The lead times were touched upon, as well.
    - Nik: Okay, I'll definitely take a look at the call if it's recorded.
    - Juan: It is.

### Primoz Kordez

#### Risk Team Update

[21:57](https://youtu.be/qeSHFs_n58Y?t=1317)

- Chris had already mentioned that he made a post on the forums which explains what's on the agenda until the end of this year. On the risk side, we should meet all the deadlines apart from the tBTC evaluation. I think this shouldn't hurt us too much since the debt ceiling would likely be very small for tBTC, at least initially; We'll see about that. This means that this and next week, we will be focused on finalizing the AAVE and Uniswap evaluations so they could get onboarded in early December. RenBTC has been complete, which means it could get onboarded together with AAVE and UNI. This is assuming, of course, that other teams will have everything ready.
- After this, our goal is to finalize all three Uni LPs, of which two of them are already done. This would mean we should post evaluations until the 4th of December and then onboard Uni LPs until, I think, the 18th of December. 
- In the first week of December, we also want to have new parameters ready for the Debt Ceiling Instant Access Module, MIP27. This module should help us a lot during the Christmas holidays when we won't have regular votes. If debt ceilings are hit, this module could help us a lot by automatically increasing ceilings. We're still debating whether this module should be applied to all collateral types. I personally think it may not fit well with stablecoins since we would always want to have enough debt ceiling available in a short time in case we have a potential liquidity crunch in liquidation events or just a high DAI demand.
- On the Real-World Asset side, Sebastian published a [post](https://forum.makerdao.com/t/rwa-last-2-months-review-updates-and-looking-forward/5225) yesterday on the forums highlighting that things are moving ahead pretty well. It also included the difficulties we face by onboarding this kind of asset, which we're not used to. However, the plan is to publish the final risk evaluations for 6S, ConsolFreight, and New Silver Drop tokens in early December.

### Amy Jung

#### Operational Support Update

[24:50](https://youtu.be/qeSHFs_n58Y?t=1490)

- We've been pretty heads down. We're working with Rune on a framework and some MIPs to create objectives for developing a roadmap, onboarding budgets, and defining facilitator pay and incentives. I'm super excited about how that's shaping. It's a long process because it is, as I mentioned, pretty complicated. However, in reality, the framework itself is really simple. It's just that writing the MIPs takes a while. 
- Secondly, I've been playing a contributor role in some initiatives. For example, Autonomous MakerDAO. Check out that forum [post](https://forum.makerdao.com/t/working-group-autonomous-makerdao-update/5197). It describes all the awesome things happening in the two months since the working group has been formed.

#### Community Development Team Update

- On the community development side, we have had five meetup applications. There's still a steady stream of meetups that are happening despite Covid. I've been focused on the grants as well. We are narrowing down on the candidate for the Kleros and Maker fellowship for that legal assessment of collateral, focusing on the legal assessments. Also, then a new grants platform is going to be launching next week. I'm super excited because it's a whole platform that anyone could submit proposals. Anyone could view proposals in motion. You can see where the proposals are in terms of their milestones and status. While transitioning to that new platform, I've been reviewing and onboarding new grants as they come. 
- On that end, we are [hiring a Grants Operations Manager](https://makerdao.com/en/careers/listing/?gh_jid=4950616002) to work with me. This person would eventually probably work for DAO grants as well. If you guys know anyone, recommendations are very much appreciated.

### Juan

#### Collateral Call Update

[27:40](https://youtu.be/qeSHFs_n58Y?t=1654)

- Yesterday, we had a call with the DPI, which is the DeFi pulse index. They are working with SetProtocol to build an index of the DeFi projects out there. They mimic, I believe, the top 11 projects and Maker is there. That was yesterday, and it's already on [YouTube](https://www.youtube.com/watch?v=MrQHOiNo9eA).  People should be working on the notes to make it more clear over the forum; that's coming soon.
- Next week, we're going to have [Blocksquare](https://forum.makerdao.com/t/collateral-onboarding-call-17-blocksquare-io-wednesday-november-25-18-00-utc/5234), which is another Real-World Asset call. That's on November 25th at 6:00 PM UTC. the week after that, we're going to have Leverj. They focus on leveraged positions on smart contracts, which is on December 2nd at 6:00 PM UTC. The last one is Melon on December 9th at 6:00 PM UTC. We are trying to get a special edition thing at a different time with UPRETS real estate for another Real-World-Assets call. However, they want to have it during a Beijing time zone. So, I don't know. We're still trying to find the best time to maximize the audience. We'll get back to you on those.
- Regarding collateral onboarding, Charles posted last week the collateral onboarding handbook. It's really cool. I urge everyone that wants to learn more about the process and hopefully help on this to go and take a look. 
- I wanted to mention that tomorrow I'm going to have a call with Sam McPherson or @hexonaut. We're going to do a pilot on this initiative called '[Know Your MIP](https://forum.makerdao.com/t/know-your-mip-kym-01-pilot-peg-stability-module-friday-november-20-17-30-utc/5219).' He's going to explain a little bit more about MIP 29, which is the peg stability module. His recent signal requests to accelerate this if the community likes it. The reaction has been good, and we might do this with other MIPs as well. The agenda is already on the forum. It's tomorrow at 5:30 PM UTC.
- Finally, I wanted to say that we have created a POAP badge for Maker contributors for Q3. The Q4 is coming soon. For those that have contributed to Maker in Q3, there's the forum [post](https://forum.makerdao.com/t/poap-makercontributor-q3/5221) where you can fill out a form and get your badge. 

### Charles St. Louis

#### MIPs Update

[31:29](https://youtu.be/qeSHFs_n58Y?t=1889)

- I'm just going to [paste the written update in the chat](https://forum.makerdao.com/t/weekly-mips-update-21/5222) before I start the presentation, so everyone can reference it. 

![](https://i.imgur.com/U8dSrYf.png)

![](https://i.imgur.com/kgcjoQY.png)

- The Governance Poll Review to confirm the poll's outcomes won't happen on the upcoming Thursday due to the Calendar Exceptions MIP proposal. Just for further context, it's Thanksgiving.

![](https://i.imgur.com/Uch4hDW.png)

- We had a couple of new MIP proposals enter the RFC phase. [MIP29, the Peg Stability Module](https://forum.makerdao.com/t/mip29-peg-stability-module/5071) by SamM and the [MIP30: Farmable cUSDC adapter (CropJoin)](https://forum.makerdao.com/t/mip30-farmable-cusdc-adapter-cropjoin/5163) by Lev and Rain. 

![](https://i.imgur.com/E2XWe26.png)

- A few new pre-MIP discussions have been going on. The most recent was the [real estate tokenization protocol](https://forum.makerdao.com/t/real-estate-tokenization-protocol-a-pre-mip-discussion/5169). Another one was a [pre-MIP discussion on the incentives to align the interests of Maker Domain Teams with the MKR holders](https://forum.makerdao.com/t/pre-mip-discussion-incentives-to-align-interests-of-maker-workers-with-mkr-holders-around-burning-mkr/5162/11). Lastly, some ideas on [DAI PEG USDC-A vault fees providing analysis and suggestions](https://forum.makerdao.com/t/ideas-on-dai-peg-usdc-a-vault-fees-etc-a-basic-analysis-suggestions/5147/12) for people to consider and its ongoing discussions that are still having quite a bit of activity.

![](https://i.imgur.com/4scc7xq.png)

## Procedural

### LongForWisdom

#### November MIPs Governance Poll Review

[36:34](https://youtu.be/qeSHFs_n58Y?t=2194)

- LongForWisdom: All right, thanks, Charles. I think, as Charles just mentioned, given the confusion around the polls, we're going to hold off saying that the executive is definitely going to be on Monday. This is until we have the results confirmed by Derek. I'll include that in the post when I do the update on the other polls. As Charles said, I fully expect it to go ahead; I just want to make sure to say it definitely will.

## Other Presentations and Updates

### Nik Kunkel

#### Liquidations and Uniswap LP Tokens

[37:22](https://youtu.be/qeSHFs_n58Y?t=2242)

- I was just gonna talk about it, but now I'm kind of feeling like I should have made a presentation. Now that we're getting deeper into the weeds with the onboarding process for the Uniswap LP tokens, one of the things that came up is the liquidations process. Currently, there are no really active markets for LP tokens where they're being traded. If there are, they're definitely not doing that much volume. This leads us to this thing where keepers, especially in the next version of liquidations, can kind of win in a single transaction. However, even to an extent right now, I think what they're just doing is arbitraging. They're just going to win this auction here and then immediately dump it somewhere to capture that spread. With Uniswap LP tokens, you don't really have that. I think there needs to be a discussion in the community on how we want to handle this. If you're doing it manually, you can just buy the LP tokens. You can take them apart into the components, and then you can sell the components. Still, keepers also need to know how to price LP tokens. While that is doable, it's not entirely trivial to get the price of an LP token. Therefore, if we want to onboard Uniswap LP tokens, the keepers need to be aware of the challenges of participating in liquidations for those tokens. I want to encourage everyone to join the keeper's channel on RocketChat. Anyone interested in the liquidation side of things, especially anyone running a keeper, can discuss in there as a community about how we want to handle this and how we want to go about it. I have a couple of different things in mind, probably a little bit too long to go into on this call, but it's a topic that has to be covered. 
    - Chris: Yeah, I was just gonna say that we should create a library for both Python and Javascript that allows one to price an LP token. That way, people could just consume that library. Whatever keeper they would write, I think those are the two most popular languages for keepers. If I were to envision how they would handle it, this would be one of the ways. Also, in liquidations 2.0, there's going to have to be some whole process for unwinding these. Those keepers who implement this will have to have a more sophisticated unwinding process if they're going to arbitrage. 
    - Nik: Yeah, that's the idea. Either on the keeper side or on the Maker protocol side, you want to break the LP tokens and the components to make them easier to handle. I'm leaning towards that the keeper side as the best way to do that. I'm also attempting to see if we can build up some kind of LP market in that way where we don't actually end up having to do any weird breaking of LP tokens in the liquidation contracts. That would just be weird to make a bunch of exceptions in there and potentially riskier.
- LongForWisdom: Lev, I think you were trying to talk earlier. Did you have anything to add?
    - Lev: Yeah, I just wanted to say that MIP 30 is potentially applicable in the future to Uniswap and SushiSwap LP token collateral types. It's designed to be possible to adapt it to capture rewards on those two. I mean, Uniswap rewards have just ended. However, if those were to restart or start, or Sushiswap rewards are still a thing, I think that would really turbocharge those collateral types. Hence, it's worth considering those two things. For example, most of the work for onboarding the LP tokens like this stuff just discussed liquidations and keepers. The price feeds would apply in the same way if they were being farmed.
    - LongForWisdom: Yeah, Lev, I'm not entirely sure I caught all of that Lev because of the microphone, but perhaps you can comment on the thread.
    - Chris: Yeah, Lev, if you could just leave your public key address, and we'll all send you a little bit of DAI, get you a sweet new microphone.
    - LongForWisdom: Cool.
    - Chris: Yeah, with Zoom on Linux, it's game over. 
- LongForWisdom: Cool, does anyone else have thoughts about liquidations for Uniswap or LP tokens? It feels like the pricing issues are the primary concern because keepers should just redeem the underlying tokens from Uniswap or SushiSwap or whatever once the auction's finished. They just need to know how much they're worth.
    - Chris: Yeah, our reference implementation of keepers don't do any sort of market cycling. We put that on whoever the keeper or user is of that software to cycle their collateral back out. I think that would be fair to say for LP tokens, but if we could provide a reference implementation of pricing, that would be really helpful.
    - LongForWisdom: They said something about Uniswap themselves or any other LP token providers have worked on, right? Because it seems something that's more generally applicable rather than just...
    - Chris: That's a really good point. There may already be a library that prices these things, so we should look, and if there isn't, maybe, we create a bitcoin grant or something to have someone make one.
    - Juan: That's a good idea. I was thinking if there's a secondary market for the LP tokens that's big enough, then you wouldn't need to redeem them, just sell them.
    - LongForWisdom: So, Uniswap has an implementation of the pricing. The keeper channel in RocketChat is probably the best place to discuss this further. If anyone has thoughts or is a keeper and has concerns or questions, please leave them in that channel. Anything else you want to see on this Nik before we move on?
    - Nik: Yeah, I guess just that the action item here is to go to the keeper channel so we can discuss this more. This is not a situation where we talk about it once on the governance call as a one and done.

### Charles St. Louis

#### Collateral Onboarding Handbook

[48:13](https://youtu.be/qeSHFs_n58Y?t=2893)

[Collateral Onboarding Handbook](https://collateral.makerdao.com/)

![](https://i.imgur.com/E1CqK4h.png)

- I'm going to share the form [announcement](https://forum.makerdao.com/t/introducing-the-collateral-onboarding-handbook/5134) in the chat. With the recent launch of the collateral onboarding handbook at collateral.makerdao.com, I'd love to just give an overview of the purpose, motivation, and action items that this handbook entails.

![](https://i.imgur.com/rhVAdnE.png)

![](https://i.imgur.com/Pmq19dW.png)

![](https://i.imgur.com/b4aAIbP.png)

![](https://i.imgur.com/Hug5G7x.png) 

- The handbook contains all this great content. If you are new to the collateral onboarding process, begin with the getting started pages. The [first page is an overview](https://collateral.makerdao.com/introduction-to-collateral-onboarding/high-level-overview-of-the-collateral-onboarding-process), which provides a high-level description of the entire collateral onboarding process over nine steps. It has an absolutely wonderful diagram from the DX team at the Foundation, giving all the little details of the process, including when things are posted to RocketChat and when things are on the forums, when votes happen, and so on.
- The [next page provides an overview of the stakeholders](https://collateral.makerdao.com/introduction-to-collateral-onboarding/cob-stakeholders-overview) involved in collateral onboarding. The main stakeholders are the Maker community, Maker integrators, the Domain Teams, MKR holders (AKA governors), and the collateral application proposers.
- The next major section details the community involvement guides. There are four main guides:
     - The first one provides an [overview of the coordination and communication process](https://collateral.makerdao.com/cob-team-coordination-and-communications) between the involved stakeholders, adding collateral types to the protocol, their interaction, communication, where they communicate, and so on.
    - The next document talks about the [collateral onboarding calls that Juan has been hosting](https://collateral.makerdao.com/community-collateral-onboarding-calls) over the past couple of months. This document provides the information of the calls, such as the details for when to join, how to join, and links to the previous calls if you are curious to see which collateral proposers have come on to do AMA's and vouch for their collateral type.
    - The next document [talks about the collateral prioritization spreadsheet](https://collateral.makerdao.com/cob-prioritization-framework). It gives general information of why it was created, how it's used, and also a link to the actual public spreadsheet for anyone to see.
    - The last document [details the funding process](https://collateral.makerdao.com/collateral-onboarding-funding-grants) or grants process for this. It mainly highlights the goals of the initiative and how it incentivizes and rewards contributors for participating.
- The next four major sections are the governance process, the oracle's Domain Team guide for all their work, the smart contracts guide, and the risk guide. 
    - The [governance process](https://collateral.makerdao.com/governance-and-collateral-onboarding/untitled) goes into a little more detail than the overview page. The goal is to help understand the governance process from start to finish and learn how to coordinate and follow the necessary steps for successful collateral onboarding.
    - As for the [Oracle Domain guide](https://collateral.makerdao.com/oracles-domain/untitled), it's a comprehensive guide teaching you about how the Oracle Domain works and what they do continuously. It also goes into details about how to onboard an Oracle using the MIP10 framework.
    - As for the [Smart Contracts Domain Team guide](https://collateral.makerdao.com/smart-contracts-domain/untitled), it highlights what the Domain Team does. They do a lot of things outside of collateral onboarding, but this gives a thorough explanation of all the steps involved, such as how to create a token assessment, what resources to use, how to add collateral types to the Maker protocol code base, as well as all the requirements for testing and so on.
    - The [Risk Assessment](https://collateral.makerdao.com/risk-domain/untitled) helps understand the purpose of Risk Assessments when onboarding collateral and provides the data and methodology behind building these assessments.
 - There's a resource section for having a glossary of all the terms used throughout these guides and documents to have a go-to place to figure out all the key terms. Lastly is the resource list, which also collects all the links and resources throughout the guides in one go-to place.

![](https://i.imgur.com/o8cMqhg.png)

![](https://i.imgur.com/JxrxHg5.png)

- Frank Cruz: This is super awesome, Charles. Thank you to you and the rest of the team. My question pertains to RWA. I would imagine you're going to expand this when we get a clearer picture of how to onboard a Real World Asset. I guess what I'm saying is if this is a little too early to push this to say, and I'm going to exaggerate a bit here, to tokenize the New York Jets? It may be a little too early, right?
    - Charles: So, with the Real-World Asset progress, there are currently two for those who aren't familiar with Matthew Rabinowitz and Centrifuge. As we go through those processes, I've been documenting them. Once we get to a state where we're comfortable with the RWA onboarding, we'll have a pretty extensive guide detailing the difference between the ERC-20 collateral onboarding or more crypto-related versus RWA. So, yeah, it's definitely in progress, and it will be more formalized as we experience the current RWA onboard.
    - Frank: All right, thank you.
    - Charles: I would be keen to know about the NYJ you want to tokenize, though.
- LongForWisdom: Thank you for that Charles, I guess I would just like to quickly race through Charles's point. This documentation feels like a huge step forwards in terms of decentralizing the collateral onboarding process. Saying that this is the first time we've actually had transparent processes laid down for how to actually go about doing Domain Assessments for each of the domains and what needs to happen has preached to me to onboard something. Therefore, it's a huge step forward, in my opinion. Thank you, Charles, for helping put it together or for coordinating to putting it together.
    - Charles: Yeah, I definitely want to give a shout-out to everyone involved. There were quite a bit of people working on this. By no means was it just myself. The integrations team at the Foundation, the DX team, and the Marcoms team, and some community contributors were involved. Thanks, everyone.
    - LongForWisdom: Yeah, I know the Domain Teams themselves, so I obviously helped source all the content. 

### Christopher Mooney

#### Timeline for DsChief 1.2 Revealed

[1:00:36](https://youtu.be/qeSHFs_n58Y?t=3629)

![](https://i.imgur.com/kdkj9ZQ.png)

- This is a little bit more detail on the timeline. We're currently in that code review first step. I know the timeline says the 13th of November and the week of the 16th, but we're finishing up the code review right now. We just made some changes to the tests and whatnot, and we'll probably merge that today or tomorrow. Then I'm hoping that tomorrow afternoon after we do the executive or some of us in the morning begin working on an executive to deploy DsChief 1.2 to Kovan. That'll probably sit in review for the weekend. I'm hoping that we can deploy it to Kovan on Monday so that anybody who needs to integrate with DsChief 1.2, which means any UI and governance portal stuff, will be ready next week. Of course, next week is also a holiday in the US; it's the week of Thanksgiving, and the executive is on Black Friday. On the 27th, we'll put the executive up for mainnet, and people can begin voting on it. This is where we're going to want things to hopefully be pretty aggressive on the voting. I'm skeptical that we'll get involvement on that week. I'm guessing it won't be until the following Monday, the 30th, or the first of December where we're finally garnering enough votes to pass the executive. Once that passes, we're in a 72-hour delay. This period of time is pretty critical. We want to keep as much MKR on the hat as possible, just defending the old chief before the executive's actually executed and the old chief loses its permissions. Once the executive is executed, the old chief loses its authority to manipulate the system. The new chief is granted authority to manipulate the system. However, it's not active yet. At that point, we can pull all of our MKR out of the chief 1.2, the old chief, and we can put it onto. I think we're gonna use address zero or proposal zero to launch the new chief. Currently, there's a hundred thousand MKR threshold hard-coded to launch that new chief. Once we get to the hundred thousand MKR mark, we'll be able to activate it. Then the new chief will work, except it'll be flash loan resistant or actually maybe even proof. Although I don't wanna say proof because someone noted that recently and then they got flash loaned, so we'll be flash loan resistant after that point.
- I wanted to mention that we should have a signal poll for how much MKR we should hard code into the chief to activate it. I believe 100,000 MKR is a reasonable number that we can typically hit. However, we have to keep in mind that many custody providers Coinbase Custody Anchorage have or are all tooled up to vote on the old chief and may need to adapt their code to allow their people to vote on the new one. We may not easily get the 100,000, so we might want to consider something that's still resistant. I guess the new chief will resist the flash loans anyway, so maybe we really want to think about like 80 or 75 to activate the new chief. That's it. Sorry that it was longer than I was expecting. You got to stop me when I start yammering. 
    - LongForWisdom: No, no, I think that was fine, Chris. that was a good explanation. We'll probably just discuss the hard-coded amount and figure out a number rather than polling. It doesn't feel like a thing that would really benefit from polling in this case. 
- Chris: Yeah, if anyone has a strong opinion on that, then please let Long or myself know.
    - LongForWisdom: I don't think it's gonna be drastically different from the 80 to 100 range; it'll be either somewhere in there or slightly around.
    - Chris: Pretty much yes, we will also re-enable the osm mom and the flipper mom, so that's the ability to freeze oracles and enable and disable liquidations.
    - LongForWisdom: I guess the question is, would we also consider changing the GSM as well?
    - Chris: Yes, actually, maybe we should consider changing the GSM as well. I don't see why we couldn't go back to 12 at that point, but... 
    - LongForWisdom: Yeah, I think it might be something we poll on again because it's potentially worth discussing. I believe it's true that 12 hours is not a realistic time to get together a sufficient amount of Maker to cancel something if needed.
- Primoz: I was mostly asking to find out how gas-intensive this all is because we're going to make so many other changes and inclusions mid-December.
    - Chris: How gas-intensive the new chief is?
    - Primoz: No, sorry. If we do all the collateral onboarding, everything that's following in December, and then include these two votes as well, is it possible we're gonna fill the whole block?
    - Chris: Well, the chief is gonna go out on its own. We're not bundling anything with it aside from pushing us back into the state we were in before disabling the moms. All of the collateral onboarding stuff which is going to come in the following weeks will be separate. Although we're going to have to see how it pans out. We have such an aggressive schedule that we may hit deployment limits, so the contracts themselves may overrun the size of contracts that we can put into a block. Then we'll have to split them. Of course, there's only 12 million gas available in a block. We'll have to see if we run it to either that limit or if we also possibly run into execution limits. Those are the two things that we'll end up having to look at in the executives that come after this.
- LongForWisdom: Cool, yeah, excellent Chris, yeah, something's becoming more relevant now that we have more collateral types. 

## Open Discussion

##### Descriptive Header

[1:08:39](https://youtu.be/qeSHFs_n58Y?t=4119)

- LongForWisdom: If anybody has any sort of questions or comments about any of the topics that have come up in this call, now would be a good time to voice them and spend five to ten minutes to discuss. I guess Derek is here. I'll ask Derek if there's been any movement on the polls. I'm figuring out the results.
    - Derek: Good question. Sam's pulled the data for me. I'm just checking within the Foundation to make sure that we get all the data we need. From our first take, it looks like the new portal wasn't correctly counting negative transfer votes. When I look at the old portal again, there's a discrepancy with who the winner is. At the moment, seems like one percent but because of that discrepancy, let us just check the on-chain data first before coming back to you with a final answer. We're working through it, and I'll post on the forum or in the chat once we get some final numbers.
    - LongForWisdom: Thanks, Derek. I'll update the same thing on the forum once the results come out.
- joshlevine: Yeah, there's one thing I would mention real quick if you don't mind. Regarding the polling, we should verify it against on-chain data. Still, as far as I can tell, the old portal is correct with that specific poll's tally. It has to do with how it was running the instant runoff voting algorithm. I'm talking about the lower stablecoin stability fee poll. However, one thing to note is that even though the portal says that there is a winner, it's kind of erroneous because no individual option has more than 50 percent, which technically, if you're following the strict instant runoff voting rules, means that nothing is won. So, there's no clear mandate going forward if that's the result, just as an FYI.
    - SamM: Yeah, I'm just looking at the initial data. It seems like a lot of people have voted for only one thing. I would recommend doing multiple votes in ranked-choice voting.
    - LongForWisdom: I'll just comment on that briefly as well. In general, for the ranked-choice polls, I do try to specifically say in the 'next steps' section what will happen if we don't get a majority. For this poll, I did include a statement saying if the result gains a majority of votes, then the stability fees will be changed. Therefore, the absence of any of the options having a majority results in a default, which is for us to not change the stability fees. I was briefly talking to Primoz before the call about what we would do in this situation. Primoz can maybe talk about it if you want.
- Primoz: Yeah, sure. I see things that if stability fees stay as they are, that essentially means tomorrow we will already start to have `flap` auctions. Since we can't really make any executive votes for about two weeks or more, we're definitely going to spend fees from stablecoins, which is about 50k per day. In about 20 days until the next executive, you're going to spend 1 million on stablecoin fees on `flop` auctions. I don't necessarily see this as a problem if we already know that the PSM will be implemented. We're going to implement a low fee because doing this will collect the stablecoin accrued fees, which will measure about 4 million. However, suppose we don't do that around the 15th or 20th of December. In that case, the total accrued fees on stablecoins will measure to four million, which is the same amount as the surplus buffer. It really comes to the question of what do we think about PSM? We clearly didn't have a vote from Maker holders. In case this doesn't get implemented with a low fee, those fees are actually not necessarily going to be collected in the future. In that sense, we would probably need to immediately increase the surplus buffer in the next possible executive vote. The other option is proposing a two percent fee on stablecoins. It is kind of a vote in the middle in some sense if I look correctly. I'm not really sure. However, if it doesn't pass, we have a problem. We have other votes this week, and we want this executive to pass. I'm not sure if it's wise to propose two percent right now.
    - SamM: Yeah, it's unfortunate. Only 15 percent of the vote went for 'no change.' Many people want to lower to some degree, but it seems people just didn't check off enough votes; that's a problem.
    - Derek: Looking at the old portal, which is correct like joshlevine said, the winning vote was one percent, and that's from first choice 3000 MKR and transferred votes 23.000 MKR, which is a 37 percent amount.
- LongForWisdom: Yeah, Greg, to answer your question; We think the new UI is definitely wrong at this point. There is no clear winner for the poll. The top three options have are 37, 35, and 15 percent.
    - Gregory Di Prisco: Will that result in a change or no?
    - LongForWisdom: No, which is what I was saying. This is due to no single option being greater than 50 percent.
    - SamM: Yeah, but from a technical perspective, that's true. I mean, this is kind of a weird case because it's pretty clear that a lot of people want it lower to some degree, and they're fighting over which degree it's lowered.
    - LongForWisdom: Yes, I agree. This is why we're discussing it. Two percent is potentially a compromise option because, as you say, it's correct that most people seem to want to lower it to some degree.
- MakerMan: Aren't we just dealing with this one vault, though? I don't understand why we didn't only attack this one vault with a low SF to buy us time just in one shot, one number.
    - LongForWisdom: I mean, you can't start this if you're on a single vault right now because I'm not sure what you mean.
    - Chris: It's all CR 101 collateral types. They all went out around the same time. Therefore, they're all hitting their expiration dates.
- SamM: A conservative, safe option to me appears to be lowering to three percent because 70 percent of the vote is lower than that.
    - LongForWisdom: Yeah, I guess. I don't hate three percent about how that actually affects the fees and the implementation timeline. I guess what I'm saying is how much better than four percent is three percent in this case?
- SamM: Gives us another week or so?
    - Matthew Rabinowitz: Yeah, something is better than nothing.
    - LongForWisdom: My question is, does a weak extra help a lot?
    - SamM: This is problematic because now we're locked out of the executives for two weeks, and we don't know the result. Do people even want the PSM? We're very undetermined right now. One thing I did want to say, which Primoz mentioned, is increasing the surplus buffer. Option three of the stablecoin action plan is currently the main plan we are proceeding with until there's a vote otherwise to override it.
    - LongForWisdom: Previously, I guess, was to drop them to zero percent and then replace them with newer Vaults, wasn't it? Potentially, it is more evidence that people want to lower them to some extent. All right, I think Primoz and I will discuss this after the call. This isn't the best place to decide what we're doing and consider whether we want to include a change to reduce it by one, two, or percent in the executive.
    - SamM: That seems like a reasonable compromise.
- LongForWisdom: All right, so it's 25 past the hour. I think we'll wrap up the call. A couple of final reminders: next week is Thanksgiving. The call falls on the 26th. Therefore, we're gonna go ahead and skip that call next week. There'll be no governance call on the 26th of November. I don't think there's a huge benefit in having it when half of the participants will be busy enjoying themselves. I'll post this in the forum as well. Hopefully, everyone will get the memo. I'd like to remind everyone once again to vote in that poll I mentioned at the beginning of the call about whether we want to move this time for the call an hour later because, in this case, the people in this call are the main stakeholders for that vote. It's not gonna go on-chain or anything, but it's for the people here to determine if that's gonna be a thing or not.

#### Links from Chat

- [Changing the Governance Call Time Poll](https://forum.makerdao.com/t/informal-poll-moving-governance-and-risk-meeting-time-leaving-meeting-open-after-recording-ends/5216)
- [2020 Year End Schedule](https://forum.makerdao.com/t/2020-year-end-schedule/5218)
- [yEARN Vaults](https://github.com/iearn-finance/yearn-vaults/pull/96)
- [RWA 2-Month Review](https://forum.makerdao.com/t/rwa-last-2-months-review-updates-and-looking-forward/5225)
- [Autonomous MakerDao](https://forum.makerdao.com/t/working-group-autonomous-makerdao-update/5197)
- [Grants Operation Manager Role](https://makerdao.com/en/careers/listing?gh_jid=4950616002)
- [Know Your MIP](https://forum.makerdao.com/t/know-your-mip-kym-01-pilot-peg-stability-module-friday-november-20-17-30-utc/5219)
- [Weekly MIPs Update](https://forum.makerdao.com/t/weekly-mips-update-21/5222)
- [MakerDAO Keeper](https://chat.makerdao.com/channel/keeper)
- [Uniswap v2 Periphery](https://github.com/Uniswap/uniswap-v2-periphery/pull/49/files#diff-1ca606855db4c3aae71e6ff06e4d93cf326acb5eeaa92f38e7dde3143f80618aR115-R116)
- [Intro Collateral Onboarding Handbook](https://forum.makerdao.com/t/introducing-the-collateral-onboarding-handbook/5134)
- [Polling Proposal Tally](https://v1.vote.makerdao.com/polling-proposal/qmu1eaca9kx2rf7rzvuhwzgym6xe9rrxxvdybicm2jgcz6)

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GF`: Governance Facilitator

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RP`: Risk Premium

`RWA`: Real-World Asset

## Credits

- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
