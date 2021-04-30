# Episode 124: January 14, 2021

## Agenda

- [00:00](https://youtu.be/LDH15WZ1MmU?t=000): Introduction
- [02:40](https://youtu.be/LDH15WZ1MmU?t=282): Governance at a Glance
- [08:48](https://youtu.be/LDH15WZ1MmU?t=518): Smart Contracts Team Update| Part 1
- [09:50](https://youtu.be/LDH15WZ1MmU?t=590): Oracles Team Update
- [15:57](https://youtu.be/LDH15WZ1MmU?t=957): Smart Contracts Team Update| Part 2
- [27:45](https://youtu.be/LDH15WZ1MmU?t=1665): Risk Team Update
- [32:26](https://youtu.be/LDH15WZ1MmU?t=1945): Community Development + Operational Support Update
- [38:16](https://youtu.be/LDH15WZ1MmU?t=2296): Collateral Calls Update
- [41:25](https://youtu.be/LDH15WZ1MmU?t=2485): MIPs Update
- [47:42](https://youtu.be/LDH15WZ1MmU?t=2862): January MIPs Inclusion Review
- [48:50](https://youtu.be/LDH15WZ1MmU?t=2930): Open Discussion

## Video

<https://youtu.be/LDH15WZ1MmU>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://www.youtube.com/watch?v=LDH15WZ1MmU&t=4s)

- Hello, everyone, and welcome to the MakerDAO Scientific Governance and Risk meeting number 124, taking place on Thursday, January the 14th at 1700 UTC. I'm the MakerDAO governance facilitator. My name is LongForWisdom. As always, we've got a little bit of an agenda to get through.
- We have some general updates and then get into the discussion. Please feel free to interrupt and talk or ask questions. We want to hear from you. So please, don't be shy to contribute. As mentioned previously, the meeting time has changed to 17:00 UTC, which will be going forward. Another advantage of this meeting is one hour later is that I can now tell you the poll results on this meeting because the results will be available.
- Alright, let's move into weekly updates. I  prepared a governance update today, separately from Governance at a Glance:
    - For this week, we had inclusion polls for seven proposals; all but one of those passed. I believe the only one not to pass was the declaration of intent for the Maker Protocol Insurance cover from Nexus Mutual. The others passed.
    - We had two Oracle related polls; whitelisting SetProtocol on multiple Oracles and whitelisting Gnosis on multiple Oracles.
    - We had an onboarding call for the UNI-V2-WBTC-ETH liquidity pool token, which also passed.
    - We had the rates proposal, which passed 70K. I was impressed to see that much.
    - We also saw 70k on the inclusion poll for CropJoin. This gives us some idea of the popularity of that with Maker holders.
    - We saw an increase in the system Surplus buffer poll pass.
    - Adjusting the flap auction parameters passed based on last week's discussions.
    - We saw investigating the implementation of the WBTC-B vault type with a lower liquidation ratio also pass. That will be added to the collateral sheet soon, and we'll see some of these other changes in the executive tomorrow.
- In terms of what Governance has been going on. My main focus for the last while has been onboarding, specifically Prose11 and Eli. That process seems to be going reasonably well so far. I'm looking forward to getting both of them more heavily involved. You may not have seen Eli too much yet, but he will be around a lot more in February. In general, Governance is going well. Maintenance tasks, by which I mean running this meeting, running polls each week, running the executive each week, is taking up most of my time, meaning some things have been slipping. These include writing the documentation I've been talking about, parameter docs, and reviewing stuff other people are writing. I'm confident that Prose and Eli coming on will help mitigate the difficulty. Therefore, I'm not too worried at this stage.
- David Utrobin and Charles St.Louis have continued to take the lead on the MIPs work. The process is working reasonably well. We've recently been planning to work on a MIPs portal. This portal will allow the community to more easily access and navigate around MIPs. Juan is leading that project, and we'll have more to share about it soon. I'm not quite at the point where we have anything concrete to present, but that should be coming soon.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Payton Rose

#### Governance at a Glance

[02:40](https://youtu.be/LDH15WZ1MmU?t=280)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-2021-01-14/6048)
If you have the time to read over and vote in active threads, that would be much appreciated.

**Three-Point Summary:**

- This week's market volatility brought some liquidations, with total DAI supply falling off an ATH to 1.4B.
- The PSM's demand brings the new vault type to its DC, with plenty of room still available for legacy USDC-A vaults.
- The DAI VWAP for last week was very strong, with most trades between $0.999-1.002.

##### Discussions

- [Adjusting the BOX Parameter](https://forum.makerdao.com/t/discussion-adjusting-the-box-parameter/5965/12)
    - OneBiteLawnOrder brings a valuable discussion surrounding increasing the `box` Parameter given the currently large DC of ETH vaults. We may want to reevaluate the size of the BOX Parameter
- [What happens if DAI loses it's peg and goes to $2 for example?](https://forum.makerdao.com/t/what-happens-if-dai-loses-its-peg-and-goes-to-2-for-example/5973)
    - BlueCat questions how the system protocol reacts to a severe swing in DAI price. If DAI were to lose its PEG, how would that affect liquidity pools and price?
- [Creating a Bite-Rebate Contract for Keepers Acting on Small Vaults](https://forum.makerdao.com/t/informal-poll-creating-a-bite-rebate-contract-for-keepers-acting-on-small-vaults/5979)
    - I posted an informal poll forwarding an idea by yaronvel from B.Protocol, who provided some preliminary code that could rebate the gas fees incurred by calling "bite" on smaller vaults.

##### Signal Requests

- [Increasing Dust Parameter](https://forum.makerdao.com/t/signal-request-increasing-dust-parameter/5963)
    - Monet-supply signals an increase to the `Dust` Parameter (minimum DAI debt) above 500 DAI in light of high gas prices discouraging keepers from calling "bite" on smaller vaults.
- [Debt Ceiling Adjustments, 11th Jan 2021 ](https://forum.makerdao.com/t/signal-request-debt-ceiling-adjustments-11th-jan-2021/6005/4)
    - Primoz signals new Debt Ceilings in light of some recent Signal Requests and evolving risk management.
- [Rolling out the Debt Ceiling Instant Access Module (DC-IAM)](https://forum.makerdao.com/t/signal-request-rolling-out-the-debt-ceiling-instant-access-module-dc-iam/6008)
    - LongForWisdom signals rolling out DC-IAM for current and future vaults given the passing of MIP27, which is the debt ceiling instant access module. We are currently taking the same actions for ETH-B, which has been successful.
- [Interim DAO Operating Budget](https://forum.makerdao.com/t/signal-request-interim-dao-operating-budget/5924)
    - Hexonaut proposes an interim budget for the Autonomous MakerDAO working Group to cover expenses such as the first PSM audit. Polling ends 2021/01/19.
- Payton: There are still a few ongoing projects, and people looking for help as well. So check out the [Governance at a Glance](https://forum.makerdao.com/t/governance-at-a-glance-2021-01-14/6048) post and follow those links. Thanks.
    - LongForWisdom: Thank you very much, Prose. That pretty much covers Governance at a Glance. Tim, you had just asked how much more participation we need for DC. I am pushing for more people to respond because it is only five days long, and there were less than 30 when I had checked. Usually, I would like to see at least 30. But as you say, given that no one is voting "NO," we'll probably extend it to next week even if we don't see more than 30.

### Nik Kunkel

#### Oracle Team Update

[09:50](https://youtu.be/LDH15WZ1MmU?t=590)

- As Long mentioned earlier, we had two Oracle proposals pass. They were for about five different Oracles a piece. Those were, I believe, SetProtocol and Gnosis. It's encouraging to see that after having been longtime customers, they're trying to expand, and the first people they look to for Oracle's is MakerDAO. We're building some customer loyalty there. That's great to see.
- On the Starkware side, DYDX has a pending proposal for 17 Oracle's with the catch that they want them on L2. They don't want them on Mainnet. Production on this is underway. We expect to have their release deployment in testing by the end of this week. Then, after about two weeks of testing, I think we would feel pretty comfortable to begin deployment. The deployment will align with the launch date that DYDX has planned for its new platform.
- We also have some leads, courtesy of Lev, for some auditing firms with the Uniswap LP Oracle. The smart contracts team, Amy, and I will be meeting with these firms next week to discuss the scope and terms. They indicated that they would have time starting at the beginning of February, which is much earlier than I can guarantee you any other auditing firm would have taken on such a project. If we can get the audit done during the first half of February and then implement any of the changes they cite, we could be looking at raising debt ceilings on the LP Oracle on any of the LP tokens by the end of February. That'll be huge!
- On that note, there was a forum signal request to raise the DC on the DAI-ETH-A LP token. The community voted that they wanted a 12 million DC. However, Primoz and I believed that setting the debt ceiling that high in one go is quite a significant risk. We're not super confident yet about the new LP token Oracle code. The fact that we launched this at the end of December and nothing terrible has happened yet, means our confidence has increased. Therefore, we are prepared to get more exposure to the LP token Oracle, just not quite 12 million as of yet. Primoz and I think that the direction to go here is not necessarily to raise the debt ceiling on DAI-ETH-A. Instead, we believe it may be more effective to onboard some of the other large LP tokens like USDC-ETH and WBTC-ETH; giving those a low 3 million debt ceiling, and that way, we set ourselves up for success. Hopefully, during February, all that's left will be to crank up the dial on the debt ceilings pending a successful audit. That is a better plan rather than trying to jack up the DAI-ETH debt ceiling right now. We can then begin adding more LP tokens, which will take a month. However, we recognize that the community wants to use DAI-ETH because the debt ceiling has been full since day one.

#### Questions

- Lucas: Nick, do you have an update on the New Silver 2 Oracle assessment? If we're still aiming for the 29th governance spell, it would need to be out this week, right?
- Nick: Yes, I'm still on track with that. I'm hoping to have it out by Sunday.
- Lucas: Thank you.

### Christopher Mooney

#### Smart Contracts Team Update

[15:59](https://youtu.be/LDH15WZ1MmU?t=957)

- We have been in audits and all over the liquidations 2.0 codebase. I think everyone would agree that liquidations 2.0 is probably our top priority right now.
- This week, we kicked it off with PwC, who's auditing us. We have a kickoff with QuantStamp afterward. We worked on MIP21 this week. We're hoping to have it in Kovan by Wednesday. However, MIP21 is still missing unit tests. We're hoping to get those unit tests in before putting it to Kovan. So, I think MIP21 is going to slip at this point. Right now, all the tests we have are working; it looks like we're 99.5% of the way there. We've almost got MIP 21 ready to go, which will then segue into MIP22. MIP 22 has been doing a pretty good job. They've already got a bunch of tests. I need to cycle back and see if we've gotten feedback on the original MIP22 and whether or not all of that feedback was addressed. We want to lift some of the tests that we have for both MIP21 and MIP22. In summary, we're working on them, and as I said, with a higher priority being Liquidation 2.0 as it comes along.
- As far as other collaterals, I think Emilio ended up working on the LP Uniswap V2 LP for USDC-ETH. That's ready for Kovan. Tanner and I started working on the LP tokens for FWBTC. I think we're optimistic that next both those LP tokens will be available next Friday.
- Aside from that, I don't have any of the other usual stuff. I can talk a lot concerning smart contracts. But we're swamped over here, and things are going well.

#### Discussion and Comments

- Brian McMichael: I want to jump in and add that concerning the Real World Asset adapters, we've got MIP21 and MIP22. These are two Real World Asset proposals, but with very different approaches. Suppose we want to scale RWA to any length right now. In that case, we can put these bespoke adapters on there and add these real-world adapters. If people are going to integrate dashboards, and backstop protocols, and things like that, we need to find a way to standardize these adapters if we hope to scale up. This means we will be reviewing MIP22 once we finish up MIP21 and see what efficiencies are presented by bringing these two together. Ideally, we'd like to get to a point where we can kick these things off like we kick off standard collateral. But right now, we've got this very bespoke process that's not scalable at all. Give us a little more time to work on that. We had to hold the red card up this week because of the unit tests on MIP21. The team probably isn't going to have time to work on those unit tests. I think some other community actors, namely, Will or Lev, or maybe, Sam... there are contract funds available to take care of that if you guys want to get that out. Thanks.
- Lucas: I have one thing to say about MIP22. Seven MIP6 proposals want to use MIP22 or any improved version of it if we improve along the way. Hopefully, we can get to some scale there. That's the idea.
    - Chris: Yeah, MIP22 will be reusable for all of those. It will hold the same sort of format and style. What we'll do is to take the lessons we learned from MIP21 and 22 and come up with a circuit proposal. This will be an overall "generic" MIP that will work for most real-world assets. We can use that template and knock these things out.
    - Lucas: I have one question I thought might be interesting for the Governance community. I know we don't concern ourselves too much with Kovan. But how is the Maker test instance managed in Kovan? Who's doing something with it? Are there several? What's the testing process? Also, I couldn't find any information online concerning the people that want to test with it.
    - Brian: I can chime in here. If you go to [changelog.makerdao.com](changelog.makerdao.com), there is a Kovan branch track where you can see all of our addresses on Kovan. We have internal teams and tech op teams that use it, especially with new collateral types. They need to test out Oasis and make sure that everything works. I don't know how to work with RWAs because they're authorized liquidation processes. But yeah, we do use those internally. We have a tech ops team that maintains it. This will be an interesting discussion to have with the community at some point.
    - Lucas: Yeah, but who is the authority on the hat? Who's the authority in that system?
    - Chris, Our smart contracts team has enough MKR to Kovan MKR for voting. We're MKR whales, at least somewhere. What will happen is when MIP22 is ready to lead up to the executive where we would want to push it to mainnet, Will has built the entire spell for it. The MIP22 stuff will lift all of the integration tests you've written, all that code, and we'll put it into this one Kovan spell, which mirrors the spell that we'll make in the mainnet. We'll do a heavy review on that. Any other changes we make will be pushed into the chief. Then, we have the same type of keeper that manages mainnet is managing casting stuff in Kovan. It'll lift it and then cast it. At this point, we can live-test it with Kovan. If you want to see how it integrates with the system, now, the only way to do that is deploy a separate instance of MCD in Kovan or deploy it on a test net. You can use DSS deploy scripts to do that. But that's probably a lot of engineering work that I wouldn't do. It's up to you guys if you want to do some pre-testing or test net. I hope this answers your question.
    - Lucas: I think we'll skip integration testing. Thankfully, we can use our PC testing for mocking out, giving ourselves enough MKR to manipulate Kovan and mainnet DSS, so that's fine. I think we're getting too much into the technical details. Thanks for answering.
    - Chris: Sam pointed out one correction, which is that next week is the community executive. That means that the week after will be the executive that we work on.
    - LongForWisdom: I would say we're still trying to figure out what we should put in the community executive. And whether we should put some of the regularly scheduled stuff in there. I don't think we know for sure what's going to go on that. But it might include the Uni LPs and stuff, or it might not.
- Matthew Rabinowitz: Chris, just for clarity. The target for MIP21 is next week?
    - Chris: I think it's going to slip from that target because we want to have it in Kovan the week before. Let's cycle back and see if we can get someone to write the unit tests for MIP21. It's looking good.
- Chris: I had a question about Governance. I had brought up and then didn't have the time to make the post about removing the moms from the stablecoins so that you can't instantaneously circuit break the moms. Is that in the Governance process?
    - LongForWisdom: It is now because I had forgotten about it until this point. If you want to write up the posts or something about it, you can write a blog post saying what it is and why we're doing it. I can put it on a list for tomorrow's exec. That's assuming you guys are ready to do it tomorrow. Otherwise, we can also do it next week.
    - Chris: Yeah, we can do it tomorrow. I'll see if I can get to that today.
    - LongForWisdom: To summarize. We want to remove permissions for the liquidations `mom` to allow liquidations to be activated for stablecoins without waiting for the DS-Pause to unlock.
- Brian: I would like to bring up one more smart contract; It's mentioned in the sidebar. We intend to have a community executive with the community writing their spell. I want to point out that the smart contracts team does intend to review this spell except for anything that we cannot review for specific reasons. So, please, keep that in mind. We intend to review the community spell that's going out next week, and we will comment on it. But this will be the first community crafted and organized spell, which is exciting.
    - LongForWisdom: I mean, technically, we sort of did one the first time, but yeah, it's the first time it will be formally integrated into the process.

### Primoz Kordez

#### Risk Team Update

[27:45](https://youtu.be/LDH15WZ1MmU?t=1665)

- We don't have a considerable amount of updates this week. We're mostly working on risk modeling and valued risk calculations. There will be a related post by Andy following shortly. We published the tBTC evaluation that was mentioned last week. I have also made two signals this week. One is for debt ceiling changes, and the other is for `flap` auction adjustments. `Flap` auction adjustments won't be effective because there was a confirmed vote to increase the surplus buffer to 10 million. However, I still think everybody agrees that `flap` auction adjustments were needed. Regarding our proposed debt ceiling adjustments, I hope more people can vote on it because we're still low on votes. Nevertheless, I think a broader discussion should be held regarding whether we should make a group that will be more agile and reactive to the debt ceiling changes than what we currently have. This would be beneficial. The current environment is more volatile, but debt ceilings changes are associated with rate changes, so we may want to have this included in the same group that manages rates. A broader discussion needs to happen if the community prefers this. I also think that fewer debt ceiling changes will be required if we start implementing an instant access module for other vault types. We may need to configure parameters for the instant access module itself. I think the group could be beneficial here. I also want to mention another signal vote for the `dust` parameter. The current winning vote is 2000 DAI, which means the `dust` increases from 500 DAI to 2000 DAI. If nothing changes until tomorrow within the signal poll, there will be a new `dust` value next week.
- Other than that, I'm mostly involved in regular risk analysis work. I'm also planning to start a simplified version of the budget proposal for risk. A similar proposal to the one Sebastian recently released. In order for the Risk Team to be compensated by the DAO and also to communicate more clearly from our side about the team vision regarding the risk domain and the milestones that we want to achieve. That's all for our side.
    - LongForWisdom: Thank you for that. I want to come back to the point you made about folding-in the DC changes with the rates group. We should talk about this more because I don't want us to end up in a situation where we start centralizing one group's power, right. Or at least if we are doing that, we are clear about why we are doing it. We should discuss how we could remove that barrier in the future. I want to remind people of some things. The rates group is writing a MIP that will help govern what that rates group does. This MIP will potentially make it possible for multiple rates groups. This would mean that we may see competing proposals if someone or some group wanted to set up an alternative group. I'm more comfortable with this because that will safeguard the decentralization rather than keeping it fixed to one group.

### Amy Jung

#### Community Development Team Update

[32:26](https://youtu.be/LDH15WZ1MmU?t=1945)

- I was working a little more within the community development side during this week. We don't have too many updates for this call. However, I do want to mention that we now have the [Maker Relay in audio form](https://anchor.fm/voicesofmkr/episodes/Voices-of-MKR-Relay-Ep--27-eosi86). If you're going to listen to it, feel free to share that link with anyone who wants to know what's happening in Maker these days.
- We did want to mention that in December, we had 13 events of community meetups. We're still going strong on those. Feel free to join if there are people interested in attending the meetups. It's always a good opportunity.

#### Operational Support Update

[33:14](https://youtu.be/LDH15WZ1MmU?t=1994)

- I do want to give the classic disclaimer that I am still an employee of the Foundation. There's a limitation of things that I could work on or lead. I'm a little bit less flexible about what my dream operational support role is. Nonetheless, I'm lucky to be working very closely with Juan. He's a core component of why he should be a facilitator on the team with me. The Autonomous MakerDAO working group is clearing through a lot of work, which is awesome. Therefore, most of what I'm doing is coordination. I just want to remind people that we don't get to evangelize many of the things that I see the community working on. But there's so much happening. The DAO is growing at a swift pace.
- I'm focusing on administration stuff such as paying out grantees and things like that and working a lot on recruiting and onboarding. It's a unique situation to recruit for the DAO because we have a much more structured onboarding process than in a regular organization. I've been doing a lot of one-on-one onboarding for contributors and grantees. We get a sense of what that experience might look like in a DAO form.
- There are a few areas in identifying to get better at actively signaling some of the needs that I see in the community. We are looking for people in the community to lead some of these areas. Nick mentioned an independent audit security team. I think that's a huge aspect of coordinating and leading audits. If someone has experience in security and things like that, please speak to me. Written descriptions of these will soon be available in the forum.
- Concerning the legal domain, there are a few people that I am speaking with who are interested in contributing to the legal side coming soon as well. This kind of HR function revolves around recruiting, hiring, and potentially something such as compensation guidance that I think we're probably going to get into in the next few weeks. There are also master lists that I had mentioned as a resource for knowing all the projects and what's happening. When you look at what Yearn has, the joke I made is that it has roughly ten projects on their website, and we have 90. That means it's not as easy for us to state everything that's happening, who's organizing it, and what's active or inactive. It's going to be a pretty big master resource.
- Also, David, LongForWisdom, and I are working on writing emergency process procedures. That's a significant intake that we're going to have by mid-February, hopefully. There's a lot of pieces coming towards it.
- One point that I did see in the forum, to clarify right now, is that many pieces have to do with the difference between interim solutions and longer-term solutions. There's a little hesitation when it comes to it. 100K, for example, the interim DAO budget, should be thought of as smaller steps growing into something larger. I don't know how clear that is to everyone. Some teams are working on the longer-term and more structured ways of thinking about how the DAO will operate. This is not just on the operational side. Things are coming that are only interim, and therefore it may be proposed as such. I'm helping craft the communications around this so that these things are clear to everybody.
    - LongForWisdom: Great, thank you, Amy. I would also echo that as well, especially the part regarding interim solutions versus long term solutions. A lot of the stuff we're doing in the interim is not things we would want to do long-term. Please don't consider the interim things to be permanent or things that we should be doing permanently.

### Juan

#### Collateral Call Update

[38:16](https://youtu.be/LDH15WZ1MmU?t=2296)

- A quick word to echo what Amy was saying. I've been working with different groups on several fronts, and hopefully, we'll have more information next week. One of the topics is about decentralization; Anything that has to do with more permanent ways of being decentralized and organizing the whole thing.
- Long already mentioned in the tools section that one of these topics is the MIPs portal. We're trying to build a UI that can help people navigate through the MIPs. Hopefully, we'll have an MVP soon. Then we can start playing with it and giving feedback and have a tool we can use to understand the MIPs and how to work with them. I'm helping Peyton with the MIPs tracker. He's doing all the heavy lifting, but I'm helping him to build a tool that mimics what we did for the collateral onboarding. That way, we can prioritize which MIPs we should focus on. This will help more clearly communicate to the community and help ourselves along with the different teams to understand what's missing.
- Concerning the collateral calls, we had a call yesterday with the xDAI team regarding the MIP6 application mistake. We also had Patricio from POAP, the Proof of Attendance Protocol, jump in, and explain why they moved to xDAI [the call is already on YouTube](https://www.youtube.com/watch?v=C1dbId69vJo&t). You can check it out on the MakerDAO YouTube channel.
- Next week, we have a [Harbor Trade Credit](https://harbortradecredit.com/). We'll have another real-world asset call. They were with us at the end of December. We'll have them again with Seb, Leia, and Lucas from Centrifuge. Same time on Wednesday.
- The following week, we'll have the team from [Lido](https://lido.fi/) which are bringing staked ETH 2.0 back to ETH 1.0. There's a lot of questions for them as well. The agenda is coming soon. Anna from the snippets team, sorry for that. I don't have it yet.
    - LongForWisdom: Thank you, Juan. I'm losing track of how many different meetings you are setting up, which is probably a good sign.

### Charles St. Louis

#### MIPs Update

[41:25](https://youtu.be/LDH15WZ1MmU?t=2485)

![](https://i.imgur.com/qQkte0Y.jpg)

![](https://i.imgur.com/QpVKf5m.jpg)

![](https://i.imgur.com/9RsdN2K.jpg)

![](https://i.imgur.com/uPfJxIY.jpg)

![](https://i.imgur.com/W21W5Qf.jpg)

![](https://i.imgur.com/YdNdzWi.jpg)

- Charles: That is my update for the MIPs. I do have another update; a little bit more of a bittersweet one. After two years of working at the Maker Foundation, I have officially left. My last day was this Tuesday. I will still be around in the community. I'm still the MIP editor and will keep supporting Governance, MIPs RWA, and DAO initiatives. I just wanted to make this clear to everyone. Thanks.
    - LongForWisdom: Great, thank you, Charles. I'm glad to hear you're sticking around in terms of the DAO. I would not like to have to handle the MIP stuff on top of the governance facilitator stuff.

## Procedural

### LongForWisdom

#### January MIPs Inclusion Review

[46:50](https://youtu.be/LDH15WZ1MmU?t=2810)

- LongForWisdom: Let me do the MIPs inclusion review. As Charles mentioned, all but one of the inclusion polls passed. I see no reason why the ones which passed cannot continue into the MIPs bundle poll on Monday. The one that did not pass was the declaration intent for Nexus Mutual insurance for the Maker protocol, which will not be included. It may be resubmitted in the future if the author wishes to do so.

## Open Discussion

[48:50](https://youtu.be/LDH15WZ1MmU?t=2930)

- LongForWisdom: We have 20 minutes left if anyone wants to start a meaty discussion. We could briefly discuss onboarding, which Amy had mentioned. I had a conversation with Primoz about this before. Primoz, would you like to talk to speak about this briefly?
    - Primoz: There's not much to say. Most of my team consists of community members. When I see nice replies on forums, it's much easier to get in touch with them and then see if they cover the risk work. People who come to the forums know something about Maker, which could be quite complicated. I remember that we had tried tweeting out to get people to join the risk team at Maker sometime in the past. Some ambitious people applied. It's tough to start in the beginning. Things could be complicated, and working on risk could be challenging. It's much easier if people know about it because then we don't need to educate them. I feel great that community participation is growing on forums. For example, last week, there was a call about auctions. Andy made great insights, and he's going to hopefully help us with auction analytics, which is one of the angles that we've been missing in the past. That's my impression about how to deal with such things.
    - LongForWisdom:  Any other thoughts on this?
    - Brian: I just wanted to say, welcome to the smart contract side. Decentralized engineering is very stressful. There's an orchestration that generally happens. We could work together to make this succeed, and I look forward to it! Welcome aboard, and we'll see you making that executive next week. I'm excited about that.
    - SamM: Thanks, I appreciate that. Long, could I run over the PSM? There have been some updates.
- SamM: The PSM was filled out last week. This week, 1inch added the PSM as one of the liquidity providers. We've started seeing some trades going through there via 1inch. They're pretty quick. Next week we'll be crafting the community executive. The plan is to increase the PSM debt ceiling to 80 million and attach a `lerp` module to increase it by an additional 33 million each week until reaching the 500 million target after 12 weeks. This is a nice balance between being cautious and moving towards the governance mandated goal. The UI will be ready soon as well.
    - LongForWisdom: Great, how have you found onboarding in terms of the smart contract stuff? Do you have any thoughts on what can make it difficult or easy?
    - Chris: Careful, Sam, I'm listening.
    - SamM: It's been great a great experience so far. I love working with everybody on the team. I've enjoyed getting more involved over the past several months. I'm happy people enjoy the work that I'm doing, and I'm excited to do even more.
    - Brian: We have weekly meetings focused on planning and things like that. I want to get you involved in those. It depends on your time, but we'll figure something out.
    - SamM: I'll be there.
- Amy: I also want to mention that one of the things working for us when you're hiring through a community. One of the principles is organic first. Instead of putting a job listing and people applying, you say here's some stuff that needs to be done, or people self identify and say this is the stuff that I think should be done, and then they do it. Sam is the master of that. If we want to continue, a lot of things that we've been seeing which have been working are having something such as autonomous MakerDAO when we identify a few key areas and then can have people fill in their skillsets. Maybe once or twice, I've seen where people's skillsets don't necessarily fit exactly, and we've recalibrated a little bit. Sometimes you might see that, but usually, that's been working for us. It's like a slow and steady route rather than just bringing on people and having a formal recruiting committee. That's the state we're in right now.
    - LongForWisdom: This is something I've noticed for a little while up until this point. We don't have a massive flood of people coming. Every month that passes, we pick up 1 or 2 intelligent and awesome people who stay. That's great to see because it shows that the protocol has power in terms of people enjoying working and wanting to stay. It's interesting how it evolves. It's good to see.
- LongForWisdom: Any other questions? Feel free. Maybe it's worth mentioning some of the auction stuff again. It was a relatively significant part of last week's meeting. We saw the poll pass this week for updating the `beg` and the `ttl` for the `flap` auctions. We haven't seen it implemented yet, so we don't know how much of an effect it will have. Has anyone been following the auctions and have any idea on whether or not they've gotten better or worse?
    - Chris: I was following the `flap` auctions. I had a conjecture last week. Due to gas prices, we weren't seeing people do the `flap` and then attend to take that initial bid. That's why we ended up in this sort of zero bid scenario. The gas prices fell significantly a few days ago. They weren't cheap, but they were around where they were a year ago. They were about 60 or 50 gwei, and all of a sudden, the zero bidding auction keeper and the other auction keeper that was participating when gas prices were low both came back and started `flapping` exactly how you'd expect. That's a pretty clear signal that the beg is set too low for that type of behavior and high gas scenarios.
    - LongForWisdom: That's good to hear. It's one of the things you end up keeping an eye on.
    - Chris: Has has anyone put any thought into the idea of finding a community member that would be willing to bite liquidations for the rest of the auction types out there? We'd end up reimbursing them for bites or giving them some amount of money to call bites or something like that, at least until we get to liquidations 2.0, where we have an incentive mechanism.
    - LongForWisdom: This is similar to what B.Protocol was proposing. It's possible that they'd be willing to run a bot to do that. They were talking about keeping low debt vaults below or near the `dust` limit. Maybe they'd be willing.
    - Chris: That's an excellent point. We could subsidize the `dust.`
    - SamM: I was going to say that this has become a bit of a problem. We require these altruistic bites. I'm developing the PSM `flipper` as well, and currently, the design requires these altruistic biters. Like Brian is said, we need something like the keeper network or Dss Chron. We will need to address this more permanently.
    - Brian: Liquidations 2.0 will essentially have direct governance controlled incentivization of barks? Will we be able to pay those out directly? It's the interim we need to be worried about and any new modules that don't conform to them.
    - SamM: Right.
    - Prose11: I know Yearns code from B.Protocol that he whipped up was essentially allowing a call of bite with rebate rather than bite and filling up a smart contract with some DAI to pay out those gas rebates.
    - LongForWisdom: Essentially, a wrapper contract around the bite could be filled with DAI and provide rebates.
    - SamM: That's what Dss-Chron does. It will provide these rewards for anybody that wants to call bite.
    - Prose11: I like the idea, but it also seemed like a few people were willing to contribute DAI, which was neat and unexpected. B.Protocol was one of them.
    - LongForWisdom: I think we need to get an idea about how much it would cost to subsidize what we want. If anyone is interested in investigating that more thoroughly, please do.
    - Brian: If we're talking about filling up new roles, I think Chris brought it up last week. We need more of a product manager type of roll that works with front-end developers, smart contracts, documentation developers, and MIP editors to take care of a project for the full life cycle. We can add a new smart contract, but new developers can't come in and quickly get up to speed on it without the documentation. If it's not documented, integrators may decide it's not worth taking the time to integrate. Documentation is important. The UI is important. One of the things we realized on Black Thursday is that we didn't have a good UI for the auctions. We assumed people would come in and use them. Having someone who can facilitate all of the aspects around releasing a new item would be insanely beneficial. The Foundation takes care of this now. I want to toss it out there as an idea and an opportunity for someone to coordinate.
    - LongForWisdom: That's a good point. We want to document all of these parameters.
    - Brian: Every time we add a new adaptor or module on, somebody has to learn that when they come in, they need to get their head in the system. Whenever we add a new thing, if it's not streamlined, that's another cognitive overhead item. Documentation is essential, as well as accessibility for the community and integrators.
    - LongForWisdom: Since we're talking about new roles, this reminds me of something that someone had posted on the forum. This was an informal poll asking whether MakerDAO should employ a recruiter who will go out and find people that we need to get certain things done.
    - Tim Black: I think that can make onboarding easier. If you have clear expectations upfront, it is easier to sort and find people who could fill those things.
    - LongForWisdom: That works better for some things than others. It works reasonably well for Governance and smart contracts.
    - Amy: Many of the things that I've been fielding regarding the interim solutions versus the long-term solutions is that the DAO can offer something like that. We're not a traditional company that offers XYZ. I've had many conversations and set expectations in terms of getting to receive DAI. There are different ways you can coordinate that. It will also help once things are a little more decided on in the DAO. Then we could go ahead and be more active on it. I'm very patient about it, but I think that's why being involved in these conversations is pretty important. It begins to set the benefits of working in the DAO.
- LongForWisdom: That's important. There are many things that the DAO will initially have trouble dealing with in terms of benefits. We need to figure out what aspects of DAO employment are great and recognize some things we can't cover, and compensate for that in terms of salary loss. Working for the DAO is pretty cool in general. Anyway, it's time to wrap up.​

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`RWA`: Real-World Asset

## Credits

- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers
