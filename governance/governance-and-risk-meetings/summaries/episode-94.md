# Episode 94: May 28th, 2020

## Agenda

- [00:00](https://youtu.be/e9GDaRhGZC8): Intro with Rich Brown
- [06:09](https://youtu.be/e9GDaRhGZC8?t=369): Governance at a Glance with LongForWisdom
- [17:45](https://youtu.be/e9GDaRhGZC8?t=1065): Oracles with Nik Kunkel
- [28:40](https://youtu.be/e9GDaRhGZC8?t=1720): MIPs with Charles St Louis
- [44:39](https://youtu.be/e9GDaRhGZC8?t=2679): State of the Pegs with Vishesh Choudry
- [58:51](https://youtu.be/e9GDaRhGZC8?t=3531): Open Ended Discussion with LongForWisdom

## Video

<https://youtu.be/e9GDaRhGZC8>

## Introduction

### Agenda Summary and Talking Points

#### Rich

[00:00](https://youtu.be/e9GDaRhGZC8)

- Welcome to the May 28th edition of scientific Governance and Risk meeting, my name is Richard Brown. I am the head of Community development at MakerDAO, and finally, after a long and tense wait, I am no longer the only Governance Facilitator. Today is a big day for me. Governance has evolved in many many ways in the past two years and has become fantastically complicated, which was the plan, I guess? Well, let's call it sophisticated to be charitable. Lots to do, lots of threads to manage, issues like consensus, debate, and coordination are a large _large_ project. I wear many hats, and I don't have the bandwidth to devote the attention to what's happening here actually deserves. I haven't been quiet about that.
- I've been enormously interested in expanding the pool of resources community has for itself to make sure the Governance machine keeps running. Happily, the hero we needed arose: LongForWisdom showed up. It turns out that this is the best possible universe. He is interested in Governance and helped out. He basically kicked ass in general. And through the power of meritocracies and open Governance was elected. Anyways, he blew us all away; being willing to step up and adopt the responsibilities of a Governance Facilitator is no small feat. It's a thankless job; the amount of work involved is tremendous. But there is a considerable amount of plus sides. It's absolutely fascinating work.
- One of the things MakerDAO is good at is being on the leading edge of the curve. Doing things that haven't been done before, or, at least, at this scale. That's a fascinating place to be. There are many interesting problems to solve, and having someone like Long come along with the capacity and insight is a huge win for the ecosystem. I'm enormously happy to announce that he is now the other Governance Facilitator. Potentially outranking me since I'm just an Interim-GF.
- He was ratified via executive vote, a non-trivial thing, and to do that, people needed to pull out hardware wallets and move value around on-chain to vote. A value of about \$25 million in MKR supported his election and ratification. This is an encouraging day for all of us, but I'll give him a pass on a speech. I think he'll say something like, "thanks, I guess?"
- On the agenda we have Governance at a Glance, an update on the Oracle MIPs, Charles will do the weekly MIPs update, and soon after, we'll do housekeeping for MIPs as outlined in [the governance cycle](https://github.com/makerdao/mips/blob/master/MIP3/mip3.md), then State of the Pegs.
- Agenda is light today, comparatively, which gives more opportunity for Q&A. If people have a topic to discuss, then we can dig into those issues later. For example, one thing I keep seeing resurface is liquidations and how we deal with IOU tokens in the Protocol. Things like that, larger threads that were raised recently but not exhaustively explored.
- Discussions happen in the [forum.](https://forum.makerdao.com/)

## Governance

### Governance at a Glance

#### LongForWisdom

[06:09](https://youtu.be/e9GDaRhGZC8?t=369)

- I'll briefly thank everyone for the trust they placed in me; that's gratifying, thank you. Expect for the first few weeks to be slightly chaotic as we try to figure out how work is being split. Once that's over, we'll prepare to get more done.
- Rich: Rousing speech! [laughs]
- LFW: I put my all into it [*laughs*] I was frantically googling famous speeches earlier but figured "I have a dream..." was a bit over the top.

#### Discussion threads

- [Business Policy of Rate Setting](https://forum.makerdao.com/t/business-policy-of-rate-setting/2609)
  - Primoz's thread. Well worth a read.
- [Really bad form to group process votes on the SF structure with a USDC fee rise](https://forum.makerdao.com/t/really-bad-form-to-group-process-votes-on-the-sf-structure-with-a-usdc-fee-rise/2599)
  - Interestingly, in this thread, Rune made a post sharing mechanism to upgrade the system we have technically. The easiest way to fix things is to design a build a spell that's always active. Then build the system _on top_ of DSchief. Making migration easier etc.
- [Regulatory Recourse - Quantifying Centralized Stablecoin Risk](https://forum.makerdao.com/t/regulatory-recourse-quantifying-centralized-stablecoin-risk/2624)
  - Using regulatory recourse as an input on how risky Stablecoins are.

#### Signaling & other notable threads

- [Change Monetary Policy Votes to Ranked Choice](https://forum.makerdao.com/t/signal-request-change-monetary-policy-votes-to-ranked-choice/2589)
- [Change the Frequency of the Base Rate Poll to Monthly](https://forum.makerdao.com/t/signal-request-change-the-frequency-of-the-base-rate-poll-to-monthly/2613)
  - The majority so far prefers to keep the votes to weekly since we're still trying to stabilize Dai and don't want to negatively affect our response time. And also, we just moved to the new SF structure, so before reducing the cadence, we should make sure that works as intended.
- [Signaling process guide](https://forum.makerdao.com/t/practical-guide-to-the-signaling-process/2623)
  - I wrote this new and improved guide to help if community members want to do signaling threads.
- [Discussion - Add on-chain governance metadata](https://forum.makerdao.com/t/discussion-add-on-chain-governance-metadata/2625)
  - See discussion at 14:08.

#### Discussion 1

[10:14](https://youtu.be/e9GDaRhGZC8?t=614)

- Cyrus: Can we have a brief recap on ranked-choice voting?
  - Sam: Ranked-choice voting is a different form of voting than "first past the post"(which we've been using.) This is where the option with the highest plurality wins the vote overall. Ranked-choice allows you to select multiple choices, 1st 2nd 3rd. With an instant runoff voting as the algorithm to determine the winner, it reallocates the votes towards an overwhelming 50% majority. This system is great for having more than two options where first past the post may not fit well. For a simple Yes/no decision first past the post or ranked-choice are equivalent. However, for things like fee votes and the vote from last week base rate and two variants, ranked-choice is far superior. Ranked-choice allows you to be more clearer in your preference.

[14:08](https://youtu.be/e9GDaRhGZC8?t=851)

- SamM: A problem I'm seeing emerge right now is as we add more layers of abstraction between the smart contract parameters and Governance; It's not clear how we keep track of these. Starting with the DSR spread, which isn't a system parameter, it's a Governance construct. Last week splitting the fees between the base rate and the risk premium. As well, last week, there were a couple of threads for debt ceiling caps on all centralized Stablecoins. As we add not-code level abstractions, it helps to keep these numbers on-chain. Maybe the MakerDAO team could add their insights or thoughts.
  - Cmooney: I can say we've had a ticket internally for other concerns, but it's related. The subject is an `Ilk` registry on-chain; so that you could see the amount of collateral(s) that are there. Spells are getting long-winded, and people have trouble interacting without the ability iterate them on-chain. We do need an on-chain source of these things. At the very least, committing to the concepts of those things and what they are would be nice to have. Beyond nice to have, in the case of an `Ilk` registry, it's almost a necessity. People should consider it, and it would be the right technical move.

## Oracles

### Oracles and MIP 10

#### Nik Kunkel

[17:45](https://youtu.be/e9GDaRhGZC8?t=1065)

#### MIP10 helping the Oracles Team

- I've been quiet on Oracle things for a while. The new MIP system was a big deal for us because [MIP 10](https://github.com/makerdao/mips/blob/master/MIP10/mip10.md) covers all of the governance functionality that we need.
- Before we were doing these ad-hoc, bespoke actions every single time. Now there are actual processes. When people approach us to use or create an oracle, it's straightforward to point them to MIP 10, they can post it in the forum, and they're all set.

#### DeFi Saver applied for whitelisting on the oracles

- DeFi Saver applied for whitelisting on all of our collateral oracles for their automation software. That's the one that saves Vaults when they get below a certain threshold. In my opinion, we should support applications like this, to help prevent Vault liquidations; third-party services like these are covering vaults in distress.

#### Feeds

- Feeds are the data providers for Oracles. Governance controls the membership of Feeds. There are both dark-feeds (anonymous entities) and light-feeds (public organizations that are stakeholders in the ecosystem). Currently, the light-feeds are:
  - dYdX
  - 0x
  - SetProtocol
  - Gnosis
  - Maker Foundation
- We just got an application this week from Kyber to run a light-feed. Personally, I think it's a great thing. I think we need more light feeds. I think we need more stakeholders in the ecosystem to become light-feeds. The more we have this decentralized web of providers, the more robust our Oracles will be.
- It still ends up being a multi-sig, though multi-sigs work pretty well. There hasn't been an order of magnitude of improvement to replace multi-sigs. It's more of an incremental improvement in our current architecture, of getting more reputable organizations to run light-feeds. I'm already in talks with a couple of potential partners to help them through the filing process for filling out the MIP and where to post it on the forum.
- Partners still need a lot of handholding, but I think we're going in the right direction. Now I can point to these examples so they know how to proceed in the future. I believe that in the coming weeks, we'll see a lot of Oracle related applications.

##### Discussion 2

[22:04](https://youtu.be/e9GDaRhGZC8?t=1324)

- Nik: I see a question in the chat about enabling fees.
  - Nik: Back in September, we passed the [Responsible Oracle Migration Proposal.](https://forum.makerdao.com/t/proposal-responsible-oracle-migration/509) Part of that was giving oracle services away for free for one year from the day when the individual entity gets access to them. That's still the case. I think this is helpful in one respect because it helps us onboard a bunch of groups that otherwise if they had to pay for Oracles, would not be able to pay for them right now. And it allows us to get access to these young companies that need time to bootstrap first. I don't think we should be stalling innovation in the space. There are a lot of DeFi applications that need oracles, so if we can provide them, I think we should. Even if it doesn't make us that much in the short term. In the medium term, we can institute fees, offset oracle costs, or start to profit from them. I think the free oracle model is a good one right now, at least from a growth perspective.

[24:06](https://youtu.be/e9GDaRhGZC8?t=1446)

- LongForWisdom: Crispy on the `chat` asks what is the annual costs of running an oracle. I'm not sure if he's talking about the stipend or actual cost of running things.
  - Nik: Each of the feeds gets paid 1,000 Dai a month. Currently, that is funded by the Foundation. The intention is that when Stability Fees start to pick up again, and Governance has a stream of revenue, the Protocol is going to start paying for this. Those are the major costs. Then there's also the gas cost for the relayers, so technically everyone can run a relayer, and there are some game-theoretic reasons for why you would want to run a relayer if you're a keeper or if you're a speculator who wants maximum leverage. In the short term, those are not enough, and you need people running them on an altruistic basis or a compensated basis. There's a bunch of partners who are running relayers. There's a bunch of Maker Foundation relayers; I'm running one or two relayers, I always encourage people to run them as well. The ultimate thing is that there need to be at least some relayers that have guaranteed uptime because the Protocol compensates them in some manner. I haven't quite thought through how that should work, but it's something on my to-do list. Given that there are 20 feeds, that's 20k a month times 12 months a year, that's about 240k to 260k annually.
  - Nik: The cool thing is that to make a new oracle, there are some fixed costs. You need to spend developer resources to program that oracle, you need to roll out the update to the feeds, you need to make sure that the update has been thoroughly tested, then point the relayers to it and you now have this extra fixed gas costs. Not set in the sense of the gas price, but in the sense that every new oracle has minimum gas units annually that you will be adding to your expenses. The cool thing is that to whitelist a new entity costs us nothing. The more people you can get whitelisted on a single oracle, the more your per-customer costs are coming down, or from another perspective, the more profit you can make out of that oracle.

[27:19](https://youtu.be/e9GDaRhGZC8?t=1639)

- I see another question: Can you describe what it means to have access to an on-chain oracle?
  - Nik: Governance puts an entity on the whitelist, and the whitelist lets people read an oracle price. If you're not on the whitelist, you can't read the oracle price from the v2 oracles.
  - LongForWisdom: just to specify, that's on-chain contracts that can't read the oracle price.
  - Nik: Yes. Everyone reading the blockchain off-chain can do whatever they want. Anyone reading the blockchain can also query the Coinbase price, that's not the business that we're in.

## Maker Improvement Proposals

### Weekly Update

#### Charles Saint Louis

[28:40](https://youtu.be/e9GDaRhGZC8?t=1720)

#### LongForWisdom as a Governance Facilitator

- This week's activity, the executive vote to affect LongForWisdom went out on Monday, and the vote passed today. So now, officially, LongForWisdom is a Governance Facilitator. So his proposal can now be officially marked as accepted.

#### Community Greenlight Polls Published

- Additionally, on Monday, we ran the first community greenlight polls.
- Just to clarify, the polls will run for two weeks as of Monday. There was a little confusion as [MIP9](https://github.com/makerdao/mips/blob/master/MIP9/mip9.md) had a few inconsistencies in the language, but the thought behind the two weeks is to give people that aren't as active in the governance process a chance to vote. Also, to provide forum updates as well as display current results over two weeks so people can be more updated.
- With that being said, I do plan to propose an amendment to make them last the last two weeks of the governance cycle and correct certain inconsistencies as well to make them work better with the governance cycle flow. I'll get to more amendment details later.

#### Governance Cycle Review

- The Governance Facilitators will perform a Governance Cycle Review that they feel is necessary to summarize and discuss the last governance cycle of May. This meeting can also be used as an opportunity to discuss any upcoming governance cycle or potential submissions for June's governance cycle.
- So with that, I'd like to do a recap of the May governance cycle:
  - The first governance cycle is coming to an end.
  - We've had the first MIP sub-proposal go through the governance process and get successfully ratified, which is a pretty significant milestone, at least in my opinion.
  - [MIP13, the Declarations of Intent](https://forum.makerdao.com/t/mip13-declarations-of-intent/2461), has been introduced by LongForWisdom.
  - [MIP14, the Protocol Dai Transfer](https://forum.makerdao.com/t/mip14-protocol-dai-transfer/2462), by LongForWisdom as well, and is the RFC phase.
  - [MIP15, the Dark Fix Mechanism](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578), by Wil Barnes.
  - All of these proposals are currently in the Request For Comments phase, so don't forget to give feedback or request changes from the author, so that they can work the fixes and better reflect the community sentiment towards them.

#### Ammendments to the MIPs

- Lastly, as we went through the first governance cycle, we learned about what works and how to improve it for the future. Especially the collateral onboarding flow, and making people aware of the processes that are occurring during a governance cycle. As a result, I drafted four amendment MIPs to address some of the confusion and make things more consistent and also make the governance cycle and the collateral onboarding processes more efficient for everyone. So I'm going to propose these amendment MIPs later on so you can all dig into them on the forums. I will give a quick overview of what the changes will entail.
- The plan is to amend MIP6, MIP8, MIP9, and MIP12.
  - [MIP6 amendment](https://github.com/makerdao/mips/blob/RFC/MIP4/MIP4c2-Subproposals/MIP4c2-SP1.md): Changes are to remove the requirement of needing Domain Greenlights before being eligible for a community greenlight poll. This amendment would allow collateral applications to be eligible for MIP9 Community Greenlight polls at least two weeks after the MIP6 application has been proposed, moving the Domain Greenlight process to after the polls have concluded.
  - [MIP8 amendment](https://github.com/makerdao/mips/blob/RFC/MIP4/MIP4c2-Subproposals/MIP4c2-SP2.md): It will be some tweaks to reinforce the above point I just mentioned and to effectively highlight that domain greenlight should occur after the community greenlight poll happens, allowing the domain teams to use the community greenlight poll results to make a more informed decision and proceed with their domain work with the backing of community sentiment.
  - [MIP9 amendment](https://github.com/makerdao/mips/blob/RFC/MIP4/MIP4c2-Subproposals/MIP4c2-SP3.md): This amendment proposes some minor language edits and separation of components. So taking the two components and separating them into four, to further clarify as well as address some of the inconsistencies that I've detailed earlier about MIP9. More specifically, this consists of information about the duration of the polls, when they occur, how long they occur for, and general updates regarding the scoring framework for the polls. We have also updated the poll template to reflect better and have more information in the poll itself so people can click on it when they vote.
  - [MIP12 ammendment](https://github.com/makerdao/mips/blob/RFC/MIP4/MIP4c2-Subproposals/MIP4c2-SP4.md): This is the process where the domain teams bundle their work and submit a sub-proposal including their work to formally enter the governance cycle, ultimately going through the cycle and, if it gets ratified, the collateral type is added to the Protocol. So this consists of some changes to allow the onboarding collateral process to operate more efficiently.
- An amendment is a MIP with the explanation of the intentions behind it, as well as a link to the PR that edits the active MIP in question.
- I have the intention of proposing them for June's governance cycle so that we can get these areas cleaned up and allow the future governance cycles to be more efficient as soon as we can.

#### Next Week's Activity

- Next week's activities; this will be the 1st week of the 2nd ever governance cycle.
- On Monday, from June 1st to 4th, is the official formal submission period for June's governance cycle where MIPs or sub proposals in the request for comments phase can enter the governance cycle and wait for approval for the governance facilitators to formally start the process in [week 2 with an inclusion poll](https://github.com/makerdao/mips/blob/RFC/MIP3/mip3.md#week-by-week-breakdown-of-the-monthly-governance-cycle).
- Next Thursday, the Governance Facilitators will do the submission review as part of the governance meeting in which they will determine which of the proposed MIPs are following the guidelines defined in MIP0 and if they should get included in the inclusion polls.

#### Collateral Onboarding

- I'll talk a bit about collateral onboarding. Both the TUSD and the USDC-B governance polls passed successfully today, meaning that they will go for an executive vote.
  - Note that these assets are still following the weekly cycle and not the monthly governance cycle, as I've previously mentioned. This is because we're still in the transition period.
  - You can check out the results on the voting dashboards.
- Given that the community green light poll will conclude in 2 weeks, the MIP12 proposals that include the domain work for the agreed-upon collateral assets will not be ready for the June governance cycle. It will be more likely that they enter July's governance cycle.

#### Community Greenlight Poll Scoring

- I wanted to go over the CGP scoring briefly because I got some questions about it.
- The score is the yes votes minus the no votes. If a score is greater than zero, then it is effectively greenlit. If it's less than zero, it's deferred.
- So these polls provide this reasonable first approximation of which assets the domain teams should prioritize going forward and which ones they should work on. However, this prioritization is not binding on the domain teams, and they have the freedom to determine the order in which they work on the assets that have passed community greenlight.
- I'll post [this update on the forums](https://forum.makerdao.com/t/weekly-mips-update-3/2678) as usual and keep an eye on RocketChat for the amendments that will come out later today or tomorrow.

## Governance

### Governance Cycle Review

#### LongForWisdom

[37:43](https://youtu.be/e9GDaRhGZC8?t=2263)

#### Introduction

- I'll go through the explanation briefly. Week 4 of the governance cycle includes a Governance Cycle Review, in which the Governance Facilitators summarize and discuss the previous governance cycle and potentially open the discussion around the upcoming governance cycle and what could be in it.

#### Review

- In terms of the last governance cycle, there was a proposal that onboarded me as a governance facilitator. I'll go through the different polls that have happened and what sort of participation they got and what weight of MKR landed on each poll.
  - [The Inclusion poll](https://mkrgov.science/poll/160) had 20 unique voters. The yes-weight was 5.7k MKR, and there was 400 MKR, so there was quite a lot of participation in that one.
  - [The second poll](https://mkrgov.science/poll/164), normally, would have been the bundled poll, which included everything in the inclusion poll. In this case, it was the same poll again, mostly. That one only had nine voters and 5,000 MKR-weight on yes, and 0 MKR on no. The number of voters dropped off on this. I suspect, in this case, it was because it was the same as the previous vote. We'll pay attention to what sort of participation levels the various stages of the governance cycle get as we go forward.
  - The last stage was to do [the executive](https://mkrgov.science/executive/0x9713187b6d7c8d54ac041efdbac13d52c2120fb9), which ended with some 70k MKR in support, most of which was added today.
- I think overall, there was a reasonable participation level for the first governance cycle. Ideally, next cycle, we will see more than one MIP or sub-proposal. The inclusion poll will be meaningful, and that will determine what's included in next month's cycle. Does anybody have any thoughts on the upcoming MIPs? Charles briefly went over them. That was MIP13, Declaration of Intent; MIP14, Protocol Dai Transfer; And MIP15, Dark Fix Protocol.

#### Discussion 3

[40:48](https://youtu.be/e9GDaRhGZC8?t=2448)

- Charles St. Louis: as for MIP15, I believe, it's not going to fall on the June cycle. It's going to follow the Request for Comments phase detailed in [MIP 0](https://github.com/makerdao/mips/blob/master/MIP0/mip0.md), which is a 3-month long period because it's not officially like a MIP2 proposal.
  - LFW: Yes, you're right. To clarify, MIP2 is the MIP that states that the feedback on frozen periods can be skipped mostly for the first few months. I haven't fully yet decided if MIP13 and MIP14 will go into the next Governance cycle, as there's some discussion on MIP13 specifically. I think MIP14 will probably go in. MIP13 I'm unsure about. I don't know how many people here have read it, but if anyone has and has any comments, feel free. Rich, is there anything that you wanted to discuss the upcoming governance cycle or the previous governance cycle?

[42:05](https://youtu.be/e9GDaRhGZC8?t=2528)

- Rich Brown: The 2 MIPs that you submitted have relatively broad implications for the governance environment. I don't want to put you on the spot immediately. Usually, I love doing that. So maybe next week, or after the top of the hour in the Q&A session, maybe you can talk about them?
  - LongForWisdom: Yes.
  - Rich Brown: For the uninitiated, LongForWisdom put up 2 MIPs into the forums that are pretty weighty and allow the community a level of autonomy that it's never enjoyed in the past, and there are significant implications there. Most of them are positive. It allows the community to come up with an idea and propose funding for it through governance. Usually, the community is hamstrung because of the question of "who's going to pay for that?" This set of MIPs answers that question. This is a method that allows the protocol to have true autonomy over its own funds. Though it is worth thinking more deeply about the potential issues that might exist.
  - [Forum Thread for MIP13](https://forum.makerdao.com/t/mipx-protocol-dai-transfer/2462)
  - [Forum Thread for MIP14](https://forum.makerdao.com/t/mipx-protocol-dai-transfer/2462)

## Analysis

### The State of the Pegs

#### Vishesh

[44:39](https://youtu.be/e9GDaRhGZC8?t=2679)

![](https://i.imgur.com/VXVVVoI.png)

- At a glance, total Dai still around 120 million.

![](https://i.imgur.com/BwDmMmO.png)

- This chart is the last 30-days of Dai performance.
- At the end of April/beginning of May, Dai was at an elevated price.
- Dai price started to come down in line with the ETH price rise. Dai touched and even dipped below peg on May 24th.
- Then on May 20th, just as Dai price was coming down, ETH price took a dip and caused Dai price to jump back up (May 24th - May 28th.)
- As ETH started to come up, Dai did its inverse behavior, moving down closer to the peg. Last time ETH dipped and came back up, there was a positive correlation with Dai. This time, it resumed its negative correlation.
  - As ETH started to pump, people did take some leverage and sold some Dai. This pump helped to bring DAI price down a bit. Immediately after that, the ETH price started to come back down, Dai's price resumed its trend.
- Kind of funny, but that scenario illustrates how Dai has this negative correlation to ETH in normal times and starts to exhibit a positive correlation during potentially riskier times.
- ETH price in the last few days began to come back down a bit, and DAI price has started to rise a bit. Now they are back dancing in perfect lockstep with negative correlation.
- ETH has been wobbling for the last couple of months, and now Dai has started wobbling in correlation. This means that leverage behavior sensitivity isn't just based on sentiment or global perception of crypto or system-specific risk but has now resumed a total market-price dependency. Which means that people are once again willing to lever up, speculate, and trade. Confidence appears to be restored, but it is still early and is something to watch.

![WBTC Chart](https://i.imgur.com/n6UEpxJ.png)

- Dai from WBTC jumped up to about 4.5 million when added and then jumped another time in the last week to 9.5 million. Seeing some solid utilization, 96%.

![ETH/DAI chart](https://i.imgur.com/yuROAvM.png)

- DAI from ETH has been holding steady at 104/105 million.

![USDC chart](https://i.imgur.com/2CZAQsM.png)

- Dai from USDC; During the March event, it had 7.5 million of utilization. It came back down in April and was sitting fairly low until it was made significantly cheaper. Following some refinancing from Compound, it topped out around 11-13 million in early May.
- Around the 20th, when a conversation about SF increases started, along with a decline in ETH price, we saw a large refinancing (possibly back to Compound) and a drop of about 3 million. Then some smaller drops in the last few days. USDC Dai supply has come down a little bit, but before the 24th, it was free money. Given the system parameters for liquidations, and that there appears to be short-term low volatility risk collateral type, it was desirable for people to be using this asset. And it still is very attractive, just likely less so. It would be interesting to watch how much utilization this gets and what causes it to change.

![](https://i.imgur.com/3Tj5672.png)

- USDC Collateral supply much more stagnant than the Dai supply. Those using the USDC Dai pool don't move the amount of collateral much they just fluctuate Dai minted from it. They're comfortable keeping USDC parked and utilizing it more heavily when needed.
- There was a \$3 Million USDC dip in collateral on May 26-27.

![](https://i.imgur.com/GVQJ5VM.png)

- To touch on the relative collateralization between different assets.
  - ETH has maintained a semi-trimodal collection of collateralization ratios. A decent chunk at 200-250, 300-350, and 500+ with smaller distributions for the interceding values. That coincides with the three main sections of liquidation walls you see(in the screenshot below.)

![](https://i.imgur.com/wK27YbR.png)

- That represents multiple risk profiles embedded in the same asset.
- As ETH diversifies into various risk profile offerings, as in multiple ETH Vault types, you'll see these walls get more uniform for each one. They'll segment out, and users will seek the Vault type that matches their risk profile the most.
- There is a small wall at \$138, so that is something to be aware of. A lot of users view it as the lowest risk scenario.

![](https://i.imgur.com/SszKzq9.png)

- Not worth going into the collateralization for WBTC since movements are minimal.

![](https://i.imgur.com/Jq3pnfH.png)

- For trading volume, similar to previous seven-day trading volumes.
- Globally, this is still a low volume for seven days. Even though peg is functioning well, it's lower volumes than we have seen in the past. I would take my comments there with a grain of salt.

![](https://i.imgur.com/Q6EpPam.png)

- As far as USDC goes, chunks appear at 120-130 and 140-150% levels.
- A chunk exists that is 20 points over-collateralized, people are keeping a bit of a buffer. Some wiped down USDC debt but still keeping USDC parked for when they need it.

![](https://i.imgur.com/COSGOBE.png)

- In a 90-day time frame, though the prices were crazier, there was much more substantial volume in April and early May than we've seen in the last few weeks.
- Thought the prices look better, it's good to keep trading volume in the back of our minds. What will be interesting to watch, in terms of Dai, is where some of these larger trades occur? Larger trades do encounter more slippage when there are lighter volumes. Some Uniswap trades went well below peg due to slippage and size. It moves averages more dramatically. Will look to add in some stuff for USDC Dai trades for next time, that would be good to look at.

#### Relevant Links

[MCD system stats](http://daistats.com)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)

## Open Ended

### Open-ended Discussion

[58:51](https://youtu.be/e9GDaRhGZC8?t=3531)

#### LFW MIP 13 and 14 recap

- The main implication for both of these MIPs is that you could spend Dai from the Protocol via an executive vote. It's technically possible, but there has never been a clear process outlined for the community. We will now be able to spend Dai if we all vote for it, which, as Rich said, is a significant change.
  - [Forum Thread for MIP13: Declarations of Intent](https://forum.makerdao.com/t/mipx-protocol-dai-transfer/2462)
  - [Forum Thread for MIP14: Protocol Dai Transfer](https://forum.makerdao.com/t/mipx-protocol-dai-transfer/2462)
- MIP14 is a reasonably simple process. One can create a sub proposal with supporting information, including a receiving ETH address, that is then discussed and goes through the governance cycle. When it makes it to the executive, we can use this process to transfer Dai out of the Protocol to the specified address.

[01:00:01](https://youtu.be/e9GDaRhGZC8?t=3601)

- Cyrus: What do you think about Governance and Risk teams having discretionary accounts? Would there be a series of restrictions? Checks and balances before funds go out? It seems like it could be quite risky.
  - LFW: Ultimately, once we've further explored these things, we can figure out what sorts of checks and balances would work. What checks or balances do we want to impose on ourselves? Through an executive, we can do whatever we want, ultimately MKR token holders can find someone as long as they want to.
  - LFW: I don't see the governance risk here as significantly different from any other governance risk. Part of the responsibility of MKR token holders is governing the Protocol responsibly. Part of that responsibility is to use the tools the Protocol has, like spending Dai, for its needs.

[01:01:34](https://youtu.be/e9GDaRhGZC8?t=3694)

- Sam: Is there spam protection for this? Or any thoughts on how to keep low-quality content from coming through?
  - LFW: Potentially. Spam _has_ been considered in the MIPs process. This is why Gov facilitators get to gatekeep what goes into the inclusion poll. If too many are submitted, then we can determine "ok there's too many of low quality" or "ok there's 10 or 15, and we just won't vote on them this week." Generalized, but potentially this MIP could include something about refunding to an address. There is no way to enforce that someone pays to post a MIP to the forum; there isn't smart contract logic that prevents people from posting whatever they want.
  - Sam: We probably don't need it yet. It could be a useful tool to consider eventually. Since money is attached, I just expect this to be a vector that might be spammed.
  - LFW: Presumably, the first part of a MIP is to post something on the forums. We could potentially have a social layer like "burn this much Dai, or else we won't submit your proposal."
  - Sam: That's what I was thinking.
  - LFW: Something to preoptimize for.
  - Sam: Just a thought not necessary at this stage.

[1:03:56](https://youtu.be/e9GDaRhGZC8?t=3836)

- LFW: Daniel, in the chat, asks, "Is there a clear example of what the community would want to spend DAi on immediately?"
  - LFW: I imagine people haven't given much thought yet. The one glaring thing is the MKR holders vote to compensate vault holders who lost money on Black Thursday. If that's to be done, then money needs to come from somewhere. The Protocol is currently the only place.
  - LFW: There was some discussion about preventing Debt Auctions. If you pull Dai out of the Protocol when it has no surplus to support it, it triggers Debt Auctions that issue MKR and raise 50,000 Dai at a time. We could add a process to spread Dai payouts over time as a solution against MKR dilution.
  - Lev: Wouldn't it be reasonable that you don't just use this trigger for deficit spending? It sounds extreme to me to casually start minting MKR to pay for stuff.
  - LFW: I've left it as generic as possible to avoid strict controls. For any specific proposal to mint MKR, you could imagine there will be extra scrutiny. The onus is on MKR token holders to pay attention to the MIPs process.
  - Lev: One could still see value in terms of setting expectations and set to spend out of the available surplus. You're not opening the door for anything to happen; you're opening it to spending the money that's been saved in ways we want.
  - LFW: Is there ever a situation of wanting to spend money we don't have? The question is, do you want to have a MIP process to specify that or not?
  - Lev: I agree with you, given that's a hard decision to plan for. It's challenging to make a process around it. Many people on this call would say we should NEVER do that, and others may be in favor depending on circumstance. There is a split about spending out of pocket versus the surplus. Spending the surplus is probably not controversial.

[1:08:18](https://youtu.be/e9GDaRhGZC8?t=4098)

- LFW: MIP13 is a little more involved. It allows Governance to declare that they want something to happen, basically setting up a bounty and the subprocess for fulfilling it.
- LFW: Main criticisms have been that bounties are primitive(which I agree with.) There is no pay in advance for the first attempt at engaging with the work. It's very much, doing the work first and then get paid later if the client likes it.
- There's a discussion to take the MIP "as is" or take it without the bounty parts. Or to go with the primitive bounty system and try to improve it later.
- Feel free or leave comments [in the forum thread.](https://forum.makerdao.com/t/mipx-protocol-dai-transfer/2462)

[1:10:00](https://youtu.be/e9GDaRhGZC8?t=4200)

- Cyrus: Question for monetary policy and market makers. Dai price seems to be consistently just above \$1. Is there a massive hidden bid that keeps it above a Dollar? It's been a few weeks hovering just above the dollar mark.
  - Sam: I would think the USDC buffer is blocking that.
  - Cyrus: That's what I think too. There aren't large resting bids on Coinbase. It seems like any medium-sized order would push the price below a dollar. It's not happening, so maybe it is USDC folks trying to cover. Curious to hear if market makers have any anecdotal thoughts on that.
  - Joe: I agree with that analysis.
  - Vishesh: It makes sense, considering so many people's inventories have been cleared in a month, they would look for opportunities to replenish. There have been two incidents where Dai got close to or dipped below a dollar; during both, Dai price snapped back. I would presume there is a fair amount of orders below a dollar waiting to replenish inventories.

[01:12:53](https://youtu.be/e9GDaRhGZC8?t=4372)

- Rich: That's the end of Q&A, and that was a cool call! Looking forward to the future with, the now, double capacity for Governance throughput on the facilitators. Thanks, Nik, Sam, Long, and everyone else who asked questions. Vishesh, as always, the graphs are a delight. Thanks, everyone!

#### Relevant Links

- [Radiolab podcast about ranked-choice voting in Ireland](https://www.wnycstudios.org/podcasts/radiolab/articles/tweak-vote) posted in chat by Chris Powers
- [Sam's Maker Analytics site](https://www.mkranalytics.com/vaults/USD/USDC-A?stats=Dai%20Supply%2CCollateral%20Locked&start=1582866000&end=1590724799&granularity=Daily)

## Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Juan Guillen produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
