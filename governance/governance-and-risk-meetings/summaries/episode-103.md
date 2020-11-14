# Episode 103: July 30, 2020

## Agenda

- [00:00](https://youtu.be/eIL6rpL54-s): Introduction with LongForWisdom
- [02:05](https://youtu.be/eIL6rpL54-s?t=125): Unscheduled Governance Meeting on July 29th with LongForWisdom
- [03:34](https://youtu.be/eIL6rpL54-s?t=214): Governance at a Glance with LongForWisdom
- [13:48](https://youtu.be/eIL6rpL54-s?t=828): Smart Contracts Domain Team Update with Wil Barnes
- [16:10](https://youtu.be/eIL6rpL54-s?t=970): Keepers Update with JoeQ
- [17:53](https://youtu.be/eIL6rpL54-s?t=1073): Oracles Domain Team Update with Nik Kunkel
- [18:37](https://youtu.be/eIL6rpL54-s?t=1117): Risk Domain Team Update with Cyrus Younessi
- [35:45](https://youtu.be/eIL6rpL54-s?t=2145): Weekly MIPs Update with Charles St. Louis
- [44:30](https://youtu.be/eIL6rpL54-s?t=2670): Governance Cycle Review with LongForWisdom
- [51:30](https://youtu.be/eIL6rpL54-s?t=3090): State of the Peg with Vishesh Choudry
- [1:03:42](https://youtu.be/eIL6rpL54-s?t=3822): Open Discussion with LongForWisdom

## Video

<https://youtu.be/eIL6rpL54-s>

## Introduction

### LongForWisdom

[00:00](https://youtu.be/eIL6rpL54-s)

- Hello, everyone, welcome to 103rd MakerDAO Scientific Governance and Risk meeting. Today is Thursday, July 30th. My name is LongForWisdom. I am one of the MakerDAO Governance Facilitators. I am joined by a host of people who are interested in Maker things.
- We are going to change up the agenda slightly. We are going to have an update section going forward. This is mainly for the domain teams but also for anybody else who has updates about specific topics. We previously had many five-minute sections that don't make sense to call out directly during the meeting. We will go through with the main people and see if they have anything to say for each meeting. Afterward, we will go through the procedural stuff and then move onto any presentation and discussion topics.
- Discussions happen in the [forum.](https://forum.makerdao.com/)

## Updates

### LongForWisdom

#### Unscheduled Governance Meeting Yesterday

[02:05](https://youtu.be/eIL6rpL54-s?t=125)

- Yesterday, on July 29th, we had an unscheduled Governance and Risk meeting to discuss the continued peg deviation combined with the fact that we are rapidly approaching the debt ceiling for ETH-A and USDC-A. We felt that taking action sooner rather than later was advisable. We convened the rest of the meeting to get the community's opinion on the direction before putting up an executive. This executive has now passed and is currently waiting on the governance security module delay before it can be activated.
- There is a link on the [forum](https://forum.makerdao.com/t/emergency-peg-management-governance-and-risk-meeting-wednesday-july-29-6-00-pm-utc/3446) for that call. We will speak about the circumstances a little bit later during the risk updates section.

#### Governance at a Glance

[03:34](https://youtu.be/eIL6rpL54-s?t=214)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in active threads, that would be much appreciated.
- We have had a lot of forum interactions over the last few days. Activity is probably the highest it has ever been, which is, on the one hand, good, but on the other hand, it gives us a lot more information for everyone to absorb. I am going to try to point people towards the relevant bits.

#### Discussions

- [We Should be Lowering the Base Rate - Forum Thread](https://forum.makerdao.com/t/we-should-be-lowering-the-base-rate/3439): Hexonaut advocates for using the Base Rate lever to adjust the overall stability fee when making monetary policy decisions as opposed to changing the risk premiums.
  - Sam MacPherson: I just put up a thread advocating that we should be lowering the base rate. This thread, in particular, isn't about lowering the base rate versus risk premium. I was just saying that we have the tools to spur supply growth with Dai, and we should use these tools. I felt that a lot of people were voting at a base rate of zero for week after week. That vote behavior seems like it is from partially misunderstanding how the mechanism works. I am glad to see that people shifted their vote to a -4%, which is fantastic and hopefully will help with the peg.
- [Discussion on Uniswap liquidity - pooling as a potential tool - Forum Thread](https://forum.makerdao.com/t/discussion-on-uniswap-liquidity-pooling-as-a-potential-tool/3444): befitsandpiper opens up a discussion on the potential of Uniswap liquidity tokens held in reserve instead of Dai.
- [TUSD Update: TrustToken Response to Implementation Concerns - Forum Thread](https://forum.makerdao.com/t/tusd-update-trusttoken-response-to-implementation-concerns/3407): Rafael Cosman, CEO of TrustToken responds to some of the concerns highlighted by the Maker Foundation smart contracts team concerning the TUSD token.
  - LongForWisdom: I was very impressed with the response and willingness by Rafael to compromise based on Maker's requirements. I would encourage people who are voting on TUSD to address that.

#### Signal Requests

[06:14](https://youtu.be/eIL6rpL54-s?t=374)

- LongForWisdom: There have been quite a lot of signal requests in the last week mainly from Aaron and those who have taken the initiative and proposed a bunch of things, which is excellent on the one hand and, on the other hand, demands a lot of attention from governance. I would advise everyone who is creating signal requests to try avoiding overload of governance attention if possible. There isn't any strict limit, but I encourage everyone to keep this in mind when creating signal requests.
- [Increase System Surplus Threshold - Forum Thread](https://forum.makerdao.com/t/signal-request-increase-system-surplus-threshold/3316)
  - Aaron_Bartsch asks whether it is the right time to increase the system surplus threshold.
  - LongForWisdom: The system surplus threshold is currently at 500,000, and Aaron asks if we should increase it.
- [Should MKR be added as collateral - Forum Thread](https://forum.makerdao.com/t/signal-request-should-mkr-be-added-as-collateral/3350)
  - Aaron_Bartsch does some initial polling around the inclusion of MKR as collateral. Worth noting that outside of emergencies, collateral onboarding needs to happen through the monthly governance cycle, but this can serve as an indicator to sentiment for the domain teams.
  - Vote concluded majority, "No."
- [Add ETH-B Vault - Forum Thread](https://forum.makerdao.com/t/signal-request-add-eth-b-vault/3349)
  - Aaron_Bartsch polls the community around the introduction of an ETH-B Vault type. Worth noting once again that outside of emergencies, collateral onboarding needs to happen through the monthly governance cycle, but this can serve as an indicator to sentiment for the domain teams.
  - LongForWisdom: One point I have made on this is that collateral onboarding, outside of emergencies, follows the monthly governance cycle. Therefore, these signal requests will be more advisory and unlikely to go into the weekly cycle and rather more advisory toward the domain teams as to their direction. I still encourage people to vote in them because they are high signals for the domain teams.
- [Increase ETH-A Risk Premium - Forum Thread](https://forum.makerdao.com/t/signal-request-increase-eth-a-risk-premium/3377)
  - Aaron_Bartsch also asks whether we should adjust the ETH-A risk premium.
- [Increasing the 'dust' amount - Forum Thread](https://forum.makerdao.com/t/signal-request-increasing-the-dust-amount/3445)
  - Jiecut asks if the `dust` parameter should increase, considering the sustained elevation in gas prices over the last few months.
  - LongForWisdom: The `dust` parameter is essentially the minimum amount of Dai debt one can create from a vault. It is currently 20 Dai, but due to high gas prices, there is a question of whether this amount is too low and should be increased.
- [Adjust the BAT Risk Premium and Debt Ceiling - Forum Thread](https://forum.makerdao.com/t/signal-request-adjust-the-bat-risk-premium-and-debt-ceiling/3334)
  - Jiecut asks if the BAT-A risk premium and debt ceiling should be adjusted. Note that the BAT-A debt ceiling was changed in the most recent executive vote.
  - LongForWisdom: Yesterday's executive included The debt ceiling change, but the signal continues for the risk premium.
- [TUSD Update (Forum Poll): Concerns Surrounding the TUSD Collateral Type - Forum Thread](https://forum.makerdao.com/t/tusd-update-forum-poll-concerns-surrounding-the-tusd-collateral-type/3225)
  - Lucasmanuel from the Maker Foundation Smart Contracts team asks how governance wishes to move forward with the TUSD collateral type considering the recent contract upgrades.

#### Discussion 1

#### ETH-B

[8:48](https://youtu.be/eIL6rpL54-s?t=528)

- Cyrus Younessi: I think the ETH-B has been slowly gaining a lot of support, and there are many good arguments for it. At this point, it's just a matter of resources on the back-end trying to put it together and get it going. I think that's a good, positive idea. We have been talking about the `dust` amount on the engineering side internally as well.

#### Dust

[9:20](https://youtu.be/eIL6rpL54-s?t=560)

- Cyrus Yonessi: I think there is an argument to make for increasing the `dust` amount, which is ironic because just a few months ago, we were discussing if it should be lower to accommodate more people. It is funny how the Ethereum congestion blew up. Certainly, I think we can kind of do a gas analysis and try to figure out some threshold where below that amount, it doesn't make sense to do liquidations. I think that if I had to guess, the `dust` amount should probably go up. Of course, this does introduce user adoption trade-offs, which is something to consider.

[12:38](https://youtu.be/eIL6rpL54-s?t=758)

- Christopher Mooney: I will reiterate on the `dust` limit. For liquidators, it's wildly non-economical to liquidate Vaults with 20 Dai debt, the current `dust` amount. Sort of back of the envelope numbers probably has us somewhere around a `dust` value of 100 to 200 Dai. Somewhere around there. I would say a minimum of 100. Maybe we should go higher in anticipation of the future. I am not sure.
- Monet Supply: Also, from a usability perspective, I feel like allowing people to open a vault for such a small amount when the gas fees are so high is not good.

#### Risk Premiums

[10:21](https://youtu.be/eIL6rpL54-s?t=621)

- Cyrus Younessi: Regarding risk premiums for ETH and BAT and all of them, I think this is just one of those never-ending discussions where you are always going to have people on different sides. Some people are just religiously committed to defending the peg at all costs. Others feel that we should be compensated for all the risks that the protocol is bearing these days. I think that would be something interesting to poll, generically, in a governance poll. Something that says if we should start charging risk premiums on all the assets slowly over the coming weeks versus treating them as a case by case basis. I think it is just a general plan if we want to do something like that or not.

#### Taking Advantage of the Negative Base Rate

[11:22](https://youtu.be/eIL6rpL54-s?t=682)

- Sam MacPherson: I would like to point out that, since the base rate is negative, we could set the ETH-A and BAT-A risk premiums without actually affecting the stability fees.
  - LongForWisdom: Yes, I was going to make that point, as well. If the base rate is going negative, it might be an excellent chance to set them to what we think would make sense as risk premium and not affect the peg.
  - Cyrus Younessi: For down the line when the base rate goes back up, everything will sort of fall into place?
  - Sam MacPherson: Yes, exactly.
  - Cyrus: Sure, yes, that sounds like a good idea.

### Wil Barnes

#### Smart Contracts Team Update

[13:48](https://youtu.be/eIL6rpL54-s?t=828)

[Collateral Status Index - Forum Thread](https://forum.makerdao.com/t/collateral-status-index/2231)

- Wil Barnes: I want to make a note on the [MIP12 checklist assessments](https://github.com/makerdao/mips/blob/master/MIP12/mip12.md#mip12c3-collateral-type-checklist-for-governance-approval) that we are doing. We are turning them out for each collateral type right now. This morning, [Tether](https://forum.makerdao.com/t/usdt-erc20-token-smart-contract-technical-assessment/3462) and [PAXUSD](https://forum.makerdao.com/t/paxusd-erc20-token-smart-contract-technical-assessment/3461) were posted. The [PAXG assessment is also available on the forum](https://forum.makerdao.com/t/paxg-erc20-token-smart-contract-domain-community-assessment/3443).
- This is a concerted effort to get more community members involved in this process and look at the contracts' technical details. Everyone should take a look and comment on these if you are comfortable. Going forward, we have a pretty big collateral status next-listed and a pretty big backlog of the collateral types we need to have this done. If anyone is interested in doing this and helping out, we can set up meetings weekly or bi-weekly to do this. I will link the [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231) for the collateral types that we're evaluating. You can reach out to me or befitsandpiper. The more people involved in looking at the contracts and just the things that we are looking for, the more helpful. If you have any questions, please reach out.
- befitsandpiper: I wonder if we can do the same thing with the Risk with the Oracles teams. I reached out to Cyrus on forums just right before this meeting. I think it would be nice to be able to do this with all the domain teams.

### JoeQ

#### Keepers Update

[16:10](https://youtu.be/eIL6rpL54-s?t=970)

- JoeQ: Just as a public service announcement for everyone that the new MIPs came in and we updated the liquidation system smart contracts so now you can bid with the Dai you had before. Everyone needs to update. As with an open-source protocol like this, people sometimes don't pay attention. I don't want to be the boy who cried wolf, but there weren't as many people participating in the first couple ETH auctions that we had. I want to make sure that everybody knows that you should update your contracts and then also your keepers. So, it's out there, and we have full participation in auctions. As the system is growing exponentially now, I want to make sure that everyone is there if we have something like a mini March 12th. Thank you.
- Iant: If anyone is interested in getting more information on how to perform on that update, please, go to the [keeper's channel on rocketchat](https://chat.makerdao.com/channel/keeper).
- LongForWisdom: I want to say that keepers are pretty essential for making sure everything goes well when things go badly. I encourage everyone to share this with any keeper friends you may have.

### Nik Kunkel

#### Oracles Team Update

[17:53](https://youtu.be/eIL6rpL54-s?t=1073)

#### Argent and MyCrypto

- Currently assisting Argent with setting up their new light feed. I don't think that will be ready for tomorrow's executive, but it should be ready for next week's.
- We've got a new application from MyCrypto to become a light feed. We can [discuss that on the forum](https://forum.makerdao.com/t/mip10c14-sp6-proposal-appoint-mycrypto-as-a-light-feed/3383) as well.

### Cyrus Younessi

#### Risk Team Update

[18:37](https://youtu.be/eIL6rpL54-s?t=1117)

#### Unscheduled Meeting and Executive Vote

- Yesterday we held an unscheduled executive vote and meeting during the recent upward pressure on the Dai price. We spoke a bit about where that pressure was coming from: seeing all-time highs in the Compound COMP-Dai farming, also a surprise new farm from a YFI fork. That fork has sucked already 60 million Dai, which is not insignificant.
- Even we saw the peg go down to 1.01 over the weekend, it quickly shot back up to 1.03 and above.
- On Monday, we have put out an unscheduled vote to increase the debt ceilings for ETH-A and USDC-A, and they were both gobbled up in under 48 hours. The speed of hitting the DC shows how high the demand for Dai is.

#### Raising the Debt Ceilings

- I think it makes sense to make a substantial DC increases to reduce the governance overhead.
- Those DC passed in executive early this morning.
  - ETH-A is going up by 80 million.
  - USDC-A is going up by another 60 million.
- Additionally, there were increases for:
  - WBTC.
  - USDC-B, the emergency reserve for keepers.
  - BAT as well.
- Later today, when the governance delay has ended, and the vote is officially live we will start monitoring the demand for this additional Dai supply and take it from there.

#### Moving Forward

- There are undoubtedly some good discussions to have around:
  - Increased risk to the system
  - Liquidations
  - Centralization
- In the absence of any short term solution, I believe that the community is more or less on the same page for increasing these DCs.

#### Discussion 2

[22:00](https://youtu.be/eIL6rpL54-s?t=1320)

#### The Risks of Raising the Debt Ceiling

- Brian McMichael: I think that one of the reasons we have the debt ceilings we do is to protect us from a technical risk where someone could utilize that debt ceilings through some unforeseen exploit. We have a situation like that now, where we have unprecedented demand. Is there any reason that you could foresee why we wouldn't want to double or triple the existing debt ceiling? What kind of risks would that pose?
  - Cyrus Younessi: It's pretty straightforward; if ETH crashes, the Protocol will struggle to efficiently liquidate a couple hundred million Ether in the current Ethereum Network congestion environment, and the current Dai liquidity environment. I tend to think we passed that danger threshold a while ago. At this point, we have to seriously revitalize the circuit-breaker discussions and start talking about operational protocols for how something like that might look, in case ETH were to correct back down.
  - Kurt: On top of the sheer size of the amount we might have to sell into the market in a liquidation event, there's another risk involved with having a DC much higher than utilization. In one of those events, someone might see that, and if the decline is significant enough, it's profitable to throw ETH into the Protocol and pull a bunch of Dai out, which will be worth more than what ETH is about to be worth. This is the OSM risk, as you have an hour warning before price drops trigger a liquidation.
- befitsandpiper: Is there a reason we haven't increased the oracle refresh to fix that OSM risk?
  - Christopher Mooney: We would never be able to respond to an oracle attack if the delay was 15 minutes.
  - Kurt: The more you lower that time, the more you mitigate the OSM attack. But as you lower that time, you increase the risk that if something goes wrong with the oracles, there's some actual manipulation of the oracle prices, we have much less time to react. An hour is already quite short, to be honest.

#### Reducing the Executive Votes

- Brian McMichael: I agree with all of that, but we're making emergency executive every two or three days. Is the community okay with that, or should we consider more substantial increases?
  - Christopher Mooney: The Smart Contracts team hates it. I will say that much.
  - Kurt: There's also the possibility of adding an Instant Access Module that would allow more frequent and periodic debt ceiling increases based on utilization, and that would not require an executive vote every time. That's [MIP17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021), as Charles is calling in the chat.
  - LongForWisdom: From a governance perspective doing emergency votes multiple times a week is also not ideal. If we can and feel safe about getting ahead of things, I would prefer if governance signaled to do that, rather than leaving it for the Risk team to react as an emergency response.

#### Instant Access Module

- Cyrus Younessi: Not to put you on the spot, Kurt, but what's the status on the Instant Access Module for DC upgrades? I think that's something that's been discussed a few times in the past.
  - Kurt: Gonzalo implemented one quite a while ago. We can deploy whenever the Community wants. We can discuss on the forums about what the parameters should be, or if there should be any tweak to its behavior. It's not complicated from a technical perspective, at all.
  - LongForWisdom: Just as a personal note, I've heard about Instant Access Modules before, and I understand the theory of how they work. I don't know if we ever had a communication of what they are and how they work in practice in detail on the forums.
  - Charles St-Louis `chat`: Short definition of an Instant Access Module (IAM) - a module that provides a way to change the Maker Protocol without going through an Executive Vote and the subsequent delay in the Governance Security Module.

#### MIP17 Prepares IAM Logic

- Charles St. Louis: On that point, one of the main reasons for [proposing MIP17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021) was to introduce the logic to implement debt ceiling adjustments or risk premium adjustments and have it somewhat as a manual process. If it works successfully, use that logic and transfer it into a more automatic tool, such as an IAM. So MIP17 is this testbed to see if this logic works in the short run and then think IAM in the long run.

#### Liquidation Risk

- Iant: I haven't read MIP17, but I'm curious about how we handle liquidation risk, and how do we handle the amount of collateral, and what is deemed an acceptable amount of risk that we should lever up and when not to, and where do we draw that line and why. I don't have the right answer for this, and I just go with my gut feeling. What numbers or analysis have you done? Or is there anything you could concretely refer to as to reasons why you have that opinion? It's so hard for me to construct an eloquent opinion on the topic.
  - Cyrus Younessi: The gut feeling is an essential part of it. Certainly, one very cool tool is Vishesh's [Liquidation Price Graph](http://makervaults.descipher.io/). It shows you the price points you will get specific amounts of collateral liquidated. The distribution is reasonably smooth, but occasionally you see these vast increases from large vaults. After March, we informally talked to a bunch of different keepers to get a sense of how available Dai liquidity was out there to bid on keepers. It's just a small percentage of the total Dai supply. Those numbers are hard to pin down, but if you're liquidating 100 million of ETH collateral, you're not going to instantly find 80 million of liquid Dai to bid on that on that.
  - Iant: So that's where we set it up? Anywhere around 100 million, we should be careful?
  - Cyrus Younessi: That's the first pass, intuition. We've also done some risk modeling in terms of liquidity and order book depth and try to bake in a slippage discount for how much the price would suffer from an increase in the amount of collateral selling. That tends to break down around 200 million of ETH collateral. That's the unofficial number we were targeting back in April-May, which we have blown through. We have some grants out, with some quant firms doing more sophisticated liquidity analysis. We're waiting to hear back on that as well. Ultimately, it's a hybrid of academic approaches as well as practical trader approaches. Just intuitively, if ETH falls 50% and we have to liquidate some 100-150 million of ETH collateral, that doesn't inspire much confidence for me.

#### Rate Limiting Liquidations

- befitsandpaper: Would rate-limiting the liquidations help the issue, or would it make things worse, since while waiting, the price of collateral could fall more. I mean, only liquidating up to X amount of collateral per hour.
  - Cyrus Younessi: We discussed that during Black Thursday as well, and that discussion naturally converged into the circuit breaker implementation. Instead of trying to figure out discrete numbers or implement some sort of complicated logic where there's just a big red button to push where we can just put a pause on all liquidations if needed.
  - Christopher Mooney: For Liquidations 2.0, I worked on a PR that can rate limit by outstanding Dai for the next version of liquidations. So we may have that in Liquidations 2.0.
  - Iant: That is awesome.

##### Bitcoin Liquidations

- Akash: I have a question. Has that Quant firm, or you guys, done the same kind of analysis for Bitcoin? I know that wBTC or whatever other variant is not Bitcoin, but how much Bitcoin liquidity is out there for this kind of the same scenario.
  - Cyrus Younessi: We haven't done wBTC, which would be the relevant metric here. The market cap has blown up so much over the past few weeks that we would have to revisit that anyways. I don't know off the top of my head, but Bitcoin is wildly more liquid than ETH, in my opinion.

### Charles St. Louis

#### Weekly MIPs Update

[35:45](https://youtu.be/eIL6rpL54-s?t=2145)

[Weekly MIPs update #10 - Forum Thread](https://forum.makerdao.com/t/weekly-mips-update-10/3429)

![Cover Slide](https://i.imgur.com/qeCGOY0.png)

![This Week's Activity](https://i.imgur.com/2ySE1fC.png)

- Five proposals plus adjustments were added to the Maker Protocol.
- I will share a thread of what it means for the Maker Protocol to have all these five proposals implemented. In short:
  - We added a Weekly Governance Cycle to focus on things that need quicker action than the monthly cycle.
  - Meta-parameter adjustments that are not directly related to Smart Contracts.
  - A subproposal that proposes to remove the DSR spread.
  - Adding MANA as a collateral type.
  - An upgraded liquidation system V1.1

![Next Week's Activity](https://i.imgur.com/sHjwl3R.png)

![Collateral Onboarding](https://i.imgur.com/QcM5ETy.png)

- Wil Barnes: [collateral assessments available here](https://forum.makerdao.com/c/risk/6)
- On the right, you can see the list of current community greenlight polls. Another reminder to vote, if you haven't.

![Proposals in the RFC Phase](https://i.imgur.com/fO6IxkZ.png)

- There are a few proposals still in the Request For Comments phase. It doesn't look like most of them will be ready for the August cycle.

![MIP17 Working Group Call](https://i.imgur.com/3yawk9a.png)

- It could be ambitious, but we'll try to get them done.
- The call was extremely productive. I wish I could put together more slides based on it.
- Planet_X has volunteered to help join as an author for the DC adjustment proposal together with me. Hopefully, proposing it for August. It could be a little ambitious, but we're going to work over the next six days to see if we can formally submit it on time.

![Join the community](https://i.imgur.com/f8Ma9Ew.png)

#### MIP17: Weekly Actual Debt Ceiling and Actual Risk Premium Adjustments

- [Working call notes - Forum Thread](https://forum.makerdao.com/t/mip17-working-group-call-summary-next-steps/3464)
- [MIP17 Working Group Results and Action Items - Forum Thread](https://forum.makerdao.com/t/mip17-working-group-call-summary-next-steps/3464)
- [A short twitter thread for what the implementation of the five proposals means for Maker](https://twitter.com/CharlieStLouis/status/1288127698263347206)

#### Discussion 3

[42:45](https://youtu.be/eIL6rpL54-s?t=2565)

- Akiva Dubrofsky: Why do some proposals have to extend the RFC process if they have met the deadlines?
  - Charles St. Louis: When a proposal is submitted, it has a dedicated amount of time that it has to be in the request-for-comments phase, called the Feedback Period. There's also a frozen period where the proposal can't be edited, to make sure that no last-minute edits can sneak in before it gets submitted. Based on [MIP 0](https://github.com/makerdao/mips/blob/master/MIP0/mip0.md), we have a timeline for the feedback period, which is three months. The Dark Fix Mechanism is going through that period.

## Procedural

### LongForWisdom

#### Governance Cycle Review

[44:30](https://youtu.be/eIL6rpL54-s?t=2670)

##### Overview

- We had seven proposals proposed at the beginning of the month. We had the governance poll bundle and approved five. Then we saw those five proposals pass in an executive vote.

##### MKR Participation

- We saw more MKR participation in the inclusion polls. Specifically for MIP17 and the MIP12 amendments. We saw a lot of people voting against, to keep things out of the governance cycle bundle, which was interesting. We tended to see more negative responses than favorable responses. The ones that did make it into the governance poll had an average of 6,000 MKR, whereas MIP17 was voted against by, I think, 20,000 MKR.
- I guess people are more concerned with removing dangerous things than approving wanted things. Or it could be the reflection that fewer people felt super strong about the passing that proposal.
- We saw more participation in the governance bundle, though. I think 18,000 MKR voted this time around. I think it was 4,000 in June and 5,000 in May, so a valuable increase, which is good.

##### ETH-A Debt Ceiling Added to the Executive Vote

- In terms of the final executive, it's worth mentioning that we opted to include the ETH-A DC in the final mix executive, which is not ideal because the whole point of going through the entire cycle and having inclusion polls is that everyone knows what's in that final executive. Unfortunately, we were in a situation where the issues with the peg and the state of the debt ceilings forced our hand a bit. It's possible that affected how quickly the MIP proposals passed, or the fact that it passed. I don't think it's controversial, but we do need to be aware.
  - Charles St. Louis: I think we also need to highlight how unanimous the poll was. If it was a closer call between the yes and the no, then it could be a problem.
  - LongForWisdom: It's potentially a problem. If it's something that we put into the vote that didn't go through, the cycle is controversial, and you risk throwing away a month's worth of governance away that people otherwise agree with. It's risky, but I agree. In this case, the reason I bundled them was because I didn't think that it was a huge problem. We got lucky in the fact that it wasn't a huge problem in this case.

#### Governance Next Cycle

[48:40](https://youtu.be/eIL6rpL54-s?t=2920)

- LongForWisdom: Charles already went over the RFC MIPs. Is there anything anybody's excited to see moving through the governance cycle? Is there anything anyone thinks it needs more work? Akiva implied that he planned on submitting his [Declaration of Intent on Forward Guidance](https://forum.makerdao.com/t/mip13c3-sp1-declaration-of-intent-forward-guidance/3130) for the next cycle. Does anybody have thoughts on it?

#### MIP13 Summary

- Akiva Dubrofsky: I updated it a lot. The main point is that it establishes a Vault Holder Advocacy Group, which aims to work with risk teams to provide forward guidance and more transparency on what the risk parameters are going to be. Historically, Maker has provided this fluctuating rate, which didn't matter to people if the market was fluctuating because of the base rate or DSR. If you see my presentation on the [Community Call this week](https://www.youtube.com/watch?v=mOC5n9mfyxQ), you will see that lots of people are involved in hedging the base rate. This hedging opens the question: is Maker going to be transparent with other risk parameters?
  - LongForWisdom: If I can summarize, I think the goal is to provide more reassurance to vault holders that the risk premiums are not going to change willy-nilly.
  - Akiva Dubrofksy: Exactly. We want to optimize transparency and stability in the risk premium.

## Risk

### Vishesh

#### Relevant Links

[MCD System Stats](http://daistats.com)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

#### The State of the Peg

[51:30](https://youtu.be/eIL6rpL54-s?t=3090)

![DaiStats](https://i.imgur.com/PrVfY1d.png)

- Total Dai is around 330 million, which is pretty significant.
- Dai from ETH is about 250 million.
- We have about 2 million Dai from BAT.
- 50 million Dai from USDC-A.
- 20 million from WBTC.

![ETH-A <-> Dai Supply](https://i.imgur.com/R2FGQLj.png)

- In the last 24 hours, we saw a jump in the amount of Dai minted from ETH, up to about 240 million.

![USDC-A <-> Dai Supply](https://i.imgur.com/QiC8Ri4.png)

- USDC-A has been volatile recently. There are a few significant positions that have opened and closed for short periods.
- Net is still up at about 58 million Dai.

![WBTC-A <-> Dai Supply](https://i.imgur.com/zuXd15M.png)

- The WBTC supply is still capped out.

![BAT-A <-> Dai Supply](https://i.imgur.com/iO3qFI8.png)

- BAT gained some utilization and then lost some utilization in that same time frame.

![Dai.Descipher.io](https://i.imgur.com/iWLVHfc.png)

- As far as the peg itself, we saw this mostly elevated price while a lot of the farming activity is going on for YFI. As that farming opportunity unwound, peg came back down.
- We're still seeing tremendous amounts of trading volumes for Dai during that same time frame.

![Uniswap trades](https://i.imgur.com/yCIrSor.png)

- Crazy price trades were getting executed on Uniswap, which we tend to see when there's a lot of volume and volatility.
- Dai price was sitting fairly steady just slightly above the peg for a couple of days, and then it started to rise again in the last 48 hours. People are concerned if further yield opportunities will crop up. Additionally, with Compound activity and yields, if those rates could persist or grow.

![Collateral Risk](https://i.imgur.com/gicYeKu.png)

- The ETH pool got riskier. There's a consistent amount over the last couple weeks of Dai minted from ETH at a very low CR. There's been a shift downward from higher CR to this mid-to-low 200-250% collateralized bucket, which is rebalancing in terms of the amount of collateral.
- Even though ETH has risen in price, and that initially pushed up collateralization ratios, people did the usual: they withdrew collateral or minted more Dai to risk-adjust to that higher nominal ETH value.

![Liquidation Walls](https://i.imgur.com/WbwnCFl.png)

- As Cyrus alluded to these liquidation walls, we have a pretty large one at about $200 ETH. At that price drop, you would see 113 million Dai liquidated. At $155 is 190 million Dai. Even at \$230, you would see 34 million Dai liquidated, which in percentage terms is not quite that large, but if you compare it to what it would have been a problem for mass liquidations, say, like three months ago, 34 million is nothing to sneeze at either.

![3 Day Dai VWAP Breakdown](https://i.imgur.com/8qqlxTb.png)

- As I said, we've seen a tremendous amount of trading activity in the trading volume for Dai as well. This volume is something to remain aware of in the context of a lot of insane yields, risks, etc.
- For DAI/ETH trades, it's mainly been dYdX and Uniswap.

![EtherScan - Balancer Pool Token](https://i.imgur.com/N6BhGV9.png)

- We all know that there's been a tremendous amount of activity on the Balancer pools, the curve farming, and now with the most recent fork of YFI pools too. That's got a solid 62 million Dai.

![Compound](https://i.imgur.com/EAvnsWk.png)

- If you look at Compound net value, there's about 145 million Dai deposited.
- In addition to the new YFII pool, we're looking at upwards of 200 million Dai sitting in these farming opportunities. With a total Dai supply of 330 million, that's tremendous domination. And that's low-balling it too, as other sources have not been included.
- We have discussed if this is going to be a lasting trend or are these short-term opportunities. I think we had it right when we said that the genie is out of the bottle, and this is a continuing trend, but for as long as assets like USDC outpace the supply of Dai. Still, Dai continues to have a premium or be very heavily used, Dai is likely going to be used for farming.
- The insane yields of YFI kicked off a bit of a frenzy. I'm sure that people will try to reproduce those yields in many different forms. Whether it's going to hit the same yields is very uncertain, probably not.
- If you look at the yields that you can get with the COMP farming, that's very likely to persist. To some extent, farming opportunities creating Dai demand is a new normal that needs to be addressed and have the community plan around.
- What to do about this outside of increasing the debt ceilings each time they max out? If you're doing that ad infinitum, you are ballooning the risk that the system is taking on, and you're always chasing your own tail. If you continue to increase the DC, at what level will these yield opportunities no longer be as profitable? Will that actually ever be the case?
- Again, this is just spurring a discussion on how Dai is being used and what risks that inherently brings.

#### Discussion 4

[1:01:52](https://youtu.be/eIL6rpL54-s?t=3711)

#### Being Ready for a Dai Crunch

- Vishesh: Some chat comments worth mentioning around liquidations. If we have an ETH price pullback that would be problematic, we all know ETH is a repetitive beast. ETH price has been rising and rising. It has been wobbly or flat in the last couple of days. There's a potential for a pullback, and you need to be aware that that could cause liquidity crunch on Dai. That could push the Dai price up further. Having keepers and liquidity ready to act on those auctions is extremely important.

## Open Discussion

### LongForWisdom

#### Negative Base Rate

[1:03:42](https://youtu.be/eIL6rpL54-s?t=3822)

- LongForWisdom: Akiva is saying to talk about the negative base rates. This is the first time we've had a negative base rate, which means MKR holders are actively deciding to subsidize risk on the Protocol in exchange to make Dai minting easier. Given the current situation, I think that it makes sense.
- befitsandpiper: There are a few collaterals that we aren't hitting DCs on. Particularly the new smaller collateral types, which would be most affected by this negative base rate.

#### MIP17 Reiteration

- Charles St. Louis: If we, as a community, look at improving and prioritizing MIP17 rewrite for DC adjustments, getting more people in the discussion and having a community-built proposal to figuring the best solution, we can get it into the August governance cycle. I have a process for handling this in the future, leading to maybe the IAM. So I do encourage everyone to go to that [forum thread](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021) to chime in so we can make this proposal as good as it can be. Sorry for the tangent, but I just wanted to reiterate that.

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

`IAM`: Instant Access Module

## Credits

- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Juan Guillen produced this summary.
- Tim Black produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
