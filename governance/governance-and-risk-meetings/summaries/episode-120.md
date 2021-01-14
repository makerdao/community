# Episode 120: December 03, 2020

## Agenda

- [00:00](https://youtu.be/gadMkrlm5dY): Introduction & Announcements
- [04:03](https://youtu.be/gadMkrlm5dY?t=243): Governance at a Glance
- [06:42](https://youtu.be/gadMkrlm5dY?t=402): Smart Contracts Team Update
- [14:56](https://youtu.be/gadMkrlm5dY?t=896): Risk Team Update
- [22:50](https://youtu.be/gadMkrlm5dY?t=1370): Community Development + Operational Support Update
- [23:56](https://youtu.be/gadMkrlm5dY?t=1436): Collateral Calls Update
- [25:23](https://youtu.be/gadMkrlm5dY?t=1523): MIPs Update
- [30:40](https://youtu.be/gadMkrlm5dY?t=1839): November MIPs Governance Cycle Review
- [50:50](https://youtu.be/gadMkrlm5dY?t=3051): Walkthrough of the DsChief v1.2 Migration Process
- [57:09](https://youtu.be/gadMkrlm5dY?t=3429): Oracles Team Update
- [01:09:34](https://youtu.be/gadMkrlm5dY?t=4173): PSM Implementation Update
- [01:11:12](https://youtu.be/gadMkrlm5dY?t=4271): Open Discussion over the prioritisation of Real-World Assets

## Video

<https://www.youtube.com/watch?v=gadMkrlm5dY>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/gadMkrlm5dY)

- Hello everyone, and welcome to the MakerDAO Scientific Governance and Risk meeting number 120 taking place on Thursday, December 3rd at 16:00 UTC. My name is LongForWisdom. I'm the governance facilitator at MakerDAO. I'm joined by a bunch of Maker related people and anyone interested. We've got our usual agenda today and a couple of segments as well. As for the preamble, if you have comments, questions, or want to interrupt, please do. Someone will let you know if it becomes a problem. We'd love to hear from you, so please don't be shy.
- All right, I'll just briefly go over our agenda. I'm going to cover some administrative stuff related to this call and Governance. First, we're gonna have the usual weekly updates from the Domain Teams. We're going to have the MIPs governance cycle review for November a little belatedly. Then we've got segments from a couple of people; We've got Derek, who will do a walkthrough of the DsChief version 1.2 migration process. Sam will give us an update on the PSM implementation. Finally, we've got Spin or Lucas from Centrifuge, who will speak about RWA's prioritization.
- I guess I'll kick us off with a list of administrative things I had mentioned. A couple of weeks ago now, I thought I put up a poll asking if we wanted to both move the time of this call and potentially leave the call open after the recording ends. I don't think anyone was against leaving the call open after the recording ends, so I'm happy to start doing that. In terms of the time, I think there was a majority to move the call one hour later, so I think we will be going ahead with that. If anybody desperately wants to stay at the same time, please go and vote in that poll. It's just an informal poll on the forum. If we do end up doing that, we'll probably do it starting sometime next year because I want people to notice that the call time is changing. Ideally, this will give a couple of weeks of notice. I think we'll plan that for the 7th, which I believe is after the first call in January. Unless the poll changes in the next few weeks, we'll move it to one hour later, 17:00 UTC beginning January 7th.
- I wanted to mention the other administrative point was Governance over the winter holidays, which ties into what I just said. I don't think we'll be having a meeting during the weeks of both the 21st and 28th. I don't think we'll be having weekly governance cycles as well. We're unlikely to get a large voter turnout on the 24th. On the 31st, which is the date that the polls would end, I feel that people are going to be busy with family and things. In addition, having these calls is rather pointless because everyone's going to be away. I'll remind everyone again next week but just be aware that the Scientific Governance and Risk Call isn't going to occur on the 24th or 31st.
Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[04:03](https://youtu.be/gadMkrlm5dY?t=243)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote on active threads, that would be much appreciated.

##### Discussions

- [On the Priority of real-world assets: where do we stand?](https://forum.makerdao.com/t/on-the-priority-of-real-world-assets-where-do-we-stand/5424)
    - Lucas from Centrifuge comments on the prioritization of real-world assets in the Maker Protocol and asks what else MKR Holders can do to get those assets prioritized.
    - LongForWisdom: Lucas from Centrifuge has started a thread on RWA's priority, talking about where we stand currently and asking what else Maker holders can do to prioritize those assets. This drew some debates. We're going to have Lucas bring up that debate later in the call as well.
- [Introducing DssGov Rewards](https://forum.makerdao.com/t/introducing-dssgovrewards/5394)
    - Hexonaut introduces Rewards' implementation for MKR Voting and asks for feedback from governance in this direction.
    - LongForWisdom: We had Sam McPherson create a thread talking about DssGov rewards describing a potential implementation for rewarding users that lock MKR in the governance contract.
- [MakerDAO accounting and implications](https://forum.makerdao.com/t/makerdao-accounting-and-implications/5346)
    - SebVentures describes the accounting in the Maker Protocol and starts a discussion about its implications.
    - LongForWisdom: Seb from SebVentures posted an interesting post about MakerDAO accounting and its implications on the DAO and protocol. I thought this was very interesting as well as a recent discussion. Therefore, we'd encourage people to check those out if they have a few spare minutes.

##### Signal Requests

- [Adjust ETH-B Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-eth-b-debt-ceiling/5282)
    - Ultraschuppi signals on increasing the ETH-B Debt Ceiling.
- [YFI Vault Options](https://forum.makerdao.com/t/signal-request-yfi-vault-options/5425)
    - Primoz describes some of the options for the YFI-A Vault and asks for the community to weigh in.
- [Adjust YFI-A Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-yfi-a-debt-ceiling/5318)
    - Ultraschuppi also signals to increase the YFI-A Debt Ceiling.
- LongForWisdom: I hope people are aware that we're in the middle of migrating to the new Governance Contracts. I'm anticipating Chris will give us a rundown of that in a moment. We've also got a few polls and actions scheduled for December, next week and the week after, and then executives on the 11th and 18th.

### Christopher Mooney

#### Smart Contracts Team Update

[06:42](https://youtu.be/gadMkrlm5dY?t=402)

- Let's do last week first, and I'll take a brief pit stop in DsChief when we get there. Obviously, we didn't have the weekly executive the previous week. We missed it because we needed to arrange some of the UI stuff to smooth the governance transition. That went out on Wednesday, and then it finally garnered enough votes and was scheduled, I think this morning, depending on your time zone. It was scheduled a few hours ago. But recall the 72 hours delay, which probably means that with the office hours modifier, we aren't going to be able to cast it until Monday during those EST office hours. This part is pretty critical, so for the time being, we want to make sure that everybody keeps their MKR on the hat. We don't want to transition over to the new system. I don't think it's in the UI. It's probably not that big of a problem but let's just make sure that the old chief stays secure during this transition.  Lev had reached out this morning, and this is a pretty palm-sweating migration. There's a lot of anxiety and worry. We have a bunch of tests that validate this works in Kovan and in the mainnet. Still, those are simulations of what reality will be, so I think our confidence is high that this will go just fine. However, you can't know for certain. If anybody else with smart contracting skills has a stake in the protocol and cares, please feel free to validate that the mainnet chief will do what it's supposed to do. In that case, the old chief is disabled after the transition. The new chief is anointed and capable of passing executives. Otherwise, we will have a radically governance minimized protocol, and that's not good. Monday, once we are all cast on the old chief, it will be disabled. The new chief is capable of taking people migrating over. It needs to be launched, so we'll have everybody on Monday start to move over to the new chief, and we have to garner 80 thousand MKR to launch it. Once it's launched, the hat will be secure with that 80 thousand or more MKR. We can then continue with the executives the way we have been going, except this time without the flash loan risk. That was my detour into the DsChief.
- I'll also mention in the executive that we moved the GSM delay. A few stakeholders came together and just thought about the risk balance of having a GSM delay that was too short versus one that was too long. We're balancing risks about setting that parameter in opposite directions for 48 hours, which ended up being where we collided. I think we could lay out all of those arguments at some point and let Governance choose precisely where they believe the right risk balance is. Maybe we can recycle that once we do it, but this won't be until a new year. For now, the GSM delay will be 48 hours after this has passed. Does anybody have any questions about the migration DsChief 1.2?
    - Derek: Yeah, Chris, DsChief hasn't passed yet. It's very close. What passed a couple of hours ago was the ETH-B debt ceiling spell that had this 72-hour pause on it. We're approximately 69 thousand MKR, and I think the governing proposal has 83 thousand at the moment. So we're close, but...
    - Chris: Yeah, we're close. People, please keep moving your MKR over and voting on that new chief. I misunderstood the conversation that we had this morning. I didn't realize it was the old spell that had passed.
    - Derek:  No worries. It took me a while too. With the delay on there, we have overlapping spells. It's a tricky one, but I think your comment still stands that Monday is probably the expected time for it to be executed with the office hours on there.
    - Chris: Okay, cool. Any other questions about the migration? Anyone thinks they want to independently verify that the spell does what it says it does?
- In regards to collateral assessments, we've finished UNI. AAVE is still in review. We're going to add a few little things to it, and then we'll push it out, but the deadline for that right now is Friday. The AAVE assessment is almost complete. Every other assessment that we needed for the end of the year is finished, except for tBTC, which was moved over. We've done renBTC and Uniswap v2 for wBTC-NF. We didn't do any collaterals in Kovan last week because of all the Chief work. There's still the Dssexec lib that needs a review. We also did a little bit of work in the collateral onboarding sheet to assess RWA's priorities and where they fell on the sheets.
- For the domain teamwork, we posted about the GSM delay. I made some updates to the schedule post for the end of the year. Sam is still working on the PSM. There's been a lot of activity around PSM. For the coming week, we have the collaterals going to Kovan, which we're working on right now for UNI, renBTC. We're doing MIP27, the Debt Ceiling Instant Access Module.
- We've got all of those happening at the moment. However, we still need to do the tBTC collateral assessment, and there are many domain team reviews on MIPs14, 17, 25, 29, and 30 that we still have to get to. We're so packed towards the end of the year that most of that stuff is off. The Foundation team got the auditors chosen. They did a bunch of work on the  DsChief stuff and assisted with our really aggressive schedule for the end of the year.

### Primoz Kordez

#### Risk Team Update

[14:56](https://youtu.be/gadMkrlm5dY?t=896)

- We have quite a lot of updates as well from our side. We have been pretty busy the last couple of weeks. We published a few evaluations. There were two evaluations published for Uni LP [DAI-ETH](https://forum.makerdao.com/t/uni-v2-dai-eth-collateral-onboarding-risk-evaluation/5336) and [USDC-ETH](https://forum.makerdao.com/t/uni-v2-dai-eth-collateral-onboarding-risk-evaluation/5336). ETH-renBTC is also going to be published within the upcoming days. We also published AAVE, Uniswap, and renBTC some time ago. As Chris mentioned, they are supposed to be onboarded really soon. the only one we missed was tBTC, but we aim to release it before the year-end.
- On the Real World Asset side, as was mentioned last week, the [6S risk assessment was published](https://forum.makerdao.com/t/sixs-rwa-001-collateral-onboarding-risk-evaluation/5352). The on-chain poll to onboard it also looks good; I think it passed. Another evaluation for RWA was released this week for a [New Silver Drop Token](https://forum.makerdao.com/t/ns-drop-collateral-onboarding-risk-evaluation/5418), and Philinje made an evaluation. We already started working on monitoring tools for this collateral type. Another risk assessment is shortly following for Consolfreight's Drop Token. It was delayed due to some additional checks, but we have the draft ready, and it's going to the internal review. The quickest Real World Asset we can have implemented looks to be the one from 6S. At this point, it remains in the hands of Matthew and his team to have a legal structure with everything in place.
- There was also a lot of work from our side during the past few days on MIP27, the debt ceiling instant access module. We needed to propose parameters for this model. The idea was to have some kind of test run to implement it for at least three assets that could see most of the holidays' benefits. However, as I noted on the forum yesterday, we found that this module might lead to unintended behavior. There are possibilities somebody could make the debt ceiling fully utilized by performing certain repay and mint activity actions. Meanwhile, he could lower the debt ceiling, so we are actually in contact with the smart contracts team to see if this could be fixed somehow or adjusted shortly because if not, we're unsure that this model can be implemented or could be implemented only for ETH-B and assets which reap most of the benefits. In any case, if it doesn't go through, we'll probably just be on the safe side and propose some increased debt ceilings starting next week for the holidays in hopes that we won't have this issue with executive votes and hitting debt ceilings.
- Large work was also done on finalizing the updated risk parameters for all collateral types. Next week we should release a table that includes updated risk premiums and debt ceilings for each collateral type. The plan is to help the rates group meet next week because there's a monthly meeting scheduled. We have some assets in the portfolio of which risk metrics have changed since they were onboarded. That is why we might need to make some adjustments for both the stability fee and debt ceiling. For instance, BAT is a good example where both risk premium and debt ceilings are no longer appropriate. This same table also includes proposed maximum debt ceilings. This is something that the instant access module for debt ceiling actually needs .so we were also planning to use this same table. It's going to be updated monthly for debt ceilings as well.
- Next week, we aim to work on monthly updates on a report for rates. As I mentioned, the rates group has a monthly meeting, so we may propose some changes due to this updated premium table. We also intend to propose some debt ceiling adjustments. I'm also planning to write a risk report on the PSM implementation. We still need to discuss which stablecoins we want to initially include in PSM and in what proportions. We might also need to discuss if disabling the stability fee for stable coins won't be passed. I think it will, but you never know. In such a case, we might need to start thinking of increasing surplus buffer to prevent under-water vaults.
- Finally, we're watching closely the outcome of the vote for Compounds adjustment to their liquidity mining scheme, the reward scheme, where they plan to limit DAI borrowing. This could positively affect the DAI peg if users from Compound start switching to another favorite yield farming asset. So that's it from risk, does anybody have any questions?
     - Frank Cruz: Yeah, Primoz. not to get off the subject, but the USDCB vote debt ceiling is 30 million. Do you think there's a need to increase that in case we have a big sell-off? USDCA is almost at the debt ceiling of 485. do you think it's necessary to bring that up to 100 million, or is it unnecessary? Has the risk team looked at that or thought about that?
     - Primoz: That's a good point. There was some discussion if this vault type is needed. First of all, I think it is precisely required for this kind of event when you have liquidity drying up. You really need it for liquidation events. In terms of what kind of debt ceiling should be applied there, I would say it really depends on what happens when we implement the PSM and what sort of thing we choose when it's going to be more evident what kind of buffer is needed. I found some calculations for the number of stablecoins necessary to go to 1.001 if we choose 0.1. but yeah, it really depends on the whole picture after the PSM is implemented and the peg stabilized. We will need some kind of buffer on the PSM as well, and then on top of it, as you mentioned, we would need one on USDCB, and probably a bigger one might be required just in terms of what's the current DAI exposure. So yeah, good point.
     - Frank Cruz: Alright, cool, so you guys have been thinking about that, awesome.

### Amy Jung

#### Community Development Team Update

[22:50](https://youtu.be/gadMkrlm5dY?t=1370)

- I wish I had more to update for this week, but a lot of the work I've been doing is Foundation related. I have been reviewing a few really exciting grants. I can't wait to announce those. One of the things that I want to mention is that we did choose a fellow for the Kleros and Maker legal assessment for collateral fellowship. He will be joining a call to introduce himself at some point by the end of this year. There's not much else for me to mention.

### Juan

#### Collateral Call Update

[23:56](https://youtu.be/gadMkrlm5dY?t=1436)

- Yesterday, we had a [call with Leverej](https://forum.makerdao.com/t/collateral-onboarding-call-18-leverj-wednesday-december-2nd-18-00-utc/5356) where they showed us a bit about their platform and the work that they were doing with L2. That was quite interesting. Next week we're going to have [Mona Lisa from Melon Protocol](https://forum.makerdao.com/t/collateral-onboarding-call-18-melon-protocol-wednesday-december-9th-18-00-utc/5449). that's next Wednesday the 9th at 6:00 PM UTC. I wanted to comment that I managed to convince Lev to join me at a teapot party and explain [MIP30](https://forum.makerdao.com/t/mip30-farmable-cusdc-adapter-cropjoin/5163). That's going to be the second session of "Know Your MIP" this [Monday, December the 7th at 5:00 PM UTC](https://forum.makerdao.com/t/know-your-mip-kym-02-mip30-farmable-cusdc-adapter-cropjoin-monday-december-7th-17-00-utc/5464). Yeah, teapot party, sorry maybe that was a bad joke. Those are the three updates from me, are there any questions?

### Charles St. Louis

#### MIPs Update

[25:23](https://youtu.be/gadMkrlm5dY?t=1523)

- There's not a whole lot going on this month due to the recently ratified Calendar Exceptions MIP, but I'll just share my screen to provide a quick update.

![](https://i.imgur.com/1fekDzr.png)

- This week and for the next couple of weeks, there won't be many MIPs updates other than proposals moving from different statuses, new proposals coming in along with new discussions. But yes, due to the Calendar Exceptions MIP accepted in November, there won't be a governance cycle this month.

![](https://i.imgur.com/zwAs9Q5.png)

![](https://i.imgur.com/Z6WCqxZ.png)

- As always, for more details on the status of collateral onboarding, check out the prioritization framework spreadsheet that can be found in the forums and on [collateral.makerdao.com](https://collateral.makerdao.com/). Also, there is an update in RocketChat called Collateral Onboarding Updates External, which you can join to get updates from the domain teams on their specific areas and progress of testing, mania deployments, etc.

![](https://i.imgur.com/O92vyyy.png)

![](https://i.imgur.com/bp4P4Fh.png)

## Procedural

### LongForWisdom

#### November MIPs Governance Cycle Review

[30:40](https://youtu.be/gadMkrlm5dY?t=1839)

- We'll just go into the review. Then we can segue that into general discussions on the MIP proposal move to all get approved. Some of those were fairly important such as the ratification of the operational support domain, which is pretty significant because it expands the scope of what the DAO does. It's awesome and definitely needed. we also saw the declaration tip for source code funding, which I think is potentially significant because that implies that MKR holders are willing to more generally fund the governance community and the activities they take part in on the forum. This is good because no guarantee was going to be the case. As mentioned, the debt ceiling and access modules should also be pretty big. Does anybody have any thoughts on the previous governance cycle or the next one?
- Lev: It would be nice to get a bit more feedback since MIP30 is in the RFC phase. This is the time to talk about it in hopes that we could get that live in January.
    - LongForWisdom: That's true. I'd encourage people to leave feedback.
    - Lev: Just an update on the timing there. I'm planning to submit that in early 2021, which I believe is the next opportunity to submit as part of the normal governance cycle.
    - LongForWisdom: That'd be correct. We've recently seen it tend to work better for submitting MIPs when as much of the code and checks tests have been completed before them being formally submitted. That eases up the burden on the smart contracts subsequent to them being approved. How far along is that sort of stuff is with MIP30?
    - Lev: It's very far along. All of the things you've mentioned have been completed before the MIP was even proposed to RFC. Integration tests and RPC tests are all there. There hasn't been any iteration on the code since we've published the MIP. If other suggestions come up, we'll make pull requests to make sure it's transparent. There isn't any plan to make any other changes currently.
- LongForWisdom: Cool, do you have any plans in the direction of audits? Having briefly looked at the change, it seems to be more involved than some of the changes we've had recently.
    - Lev: I think it's a good question for the community as well as the Smart Contracts Domain Team to weigh in on because we haven't yet had a precedent for getting external audits organized and funded as a community effort before. So I'd be interested if anyone wants to make any suggestions there. What's currently planned is to get more feedback from folks in the community and the smart contracts team regarding the extent of the community's review until now.
    - LongForWisdom: Yeah, as you said, we haven't had a precedent for the community organizing and paying for audits yet. Though we do have MIP14 that has been passed now. In theory, we're supposed to use that to spend funds for the protocol.
- Lev: There's an issue I wanted to raise concerning, since you mentioned it's obviously good to have as much fixed technically before the MIP is formally submitted, Do you think the supply is all the way up to the actual spell? The spell is usually something that the smarts contracts domain team was preparing toward the end of the process. The way the spell is written depends on what else is going into that bundle executive and the state of the system of the time that it's being added. It's not something that you can necessarily freeze at the mid-proposal stage. Do you have an opinion there on what the role is?
    - Chris: Yeah, I can give an opinion on that. The most that we'd want to see from the spell are authorizations and stuff like that to understand what the spell is going to do. We don't need to make the entire spell while it's in the MIP approval process. What would help us is after it makes it through that process, whatever team is responsible that submitted the proposal, begins working on a spell to help integrate it into the system. Then we can lift parts of that and would make things much more manageable. Otherwise, we're going to bottleneck. In fact, we kinda already are; we already had to create the collateral priority sheet for the collaterals that we're adding, and a lot of the MIPs are starting to pile up. As far as MIP30 goes, I'm super excited about it, and everything so far looks great. So I think you guys have supplied what you need to at this point.
    - Lev: That's great to hear. Just to confirm, you think it's best to start work on the spell once the MIP has been formally submitted. Specifically, in the case of CropJoin, the system authorizations are part of the RFX integrations test. That part is kind of there but not in the form you could actually copy and paste into a spell.
    - Chris: That's all I think we'd really want to know ahead of time. The technical MIP is just a sort of authorizations. This way, you can think about what it has access to while you're auditing. With regards to auditing in general, it does seem like we should start using MIP14 or some other way to get auditors that are familiar with the codebase to take a look at our code. Auditors right now are really far out. We were hoping to have everything finished and audited by the end of December. Still, now it was pushed to January due to busy schedules. This may even extend into February or the end of Q1 to get just the audits complete. So as you can tell, auditors are really far out. I'm just setting the expectation that if we start leaning on auditors, it very well could add another 6-month delay to any technical MIP that we put out there. Something worth thinking about is if we want to put someone on retainer and basically have a dedicated firm that is always auditing their stuff. We sat down with a good chunk of auditors and went through each one of them. We had a conversation for an hour about their capabilities, how many people they put on the team, what types of tooling they bring, and their methodologies. We stacked all of those auditors against each other and said, okay, we're going to choose a number of auditors, so let's make sure we get wide coverage of formal verification and manual audit and some tooling stuff. We looked to see if we could get a good breadth of coverage. That's how we've chosen them in the past, and because we've previously done that work, we can say these are the people the foundation has already worked with. Therefore, the DAO should consider putting some of these guys on retainer or working with those projects.
- Frank Cruz: Chris, circling back to deploying spells. I know on the forum you've mentioned that MIP22 regarding something you could do with port over to MIP21. Can you elaborate on that a bit more?
    - Chris: Yeah, so MIP21 and MIP22, for context, are the two significant real-world asset cases that we have right now. They're both a bit special in that they don't use the MKR protocols liquidation system or the MKR protocol oracle system. They have their own implementations of those things in various ways, but there are important common threads. We still have to plum in liquidations and emergency shutdowns. The work that's happening on MIP21 is to shut the protocol down and still have DAI holders have a claim on the token that would represent MIP21. A lot of that work can kind of be brought over to MIP22 as the RPC or simulation tests that we'd run against those to make sure that the integrations worked correctly. The idea is not to duplicate code but to make sure that everything passes the same test. If it doesn't, we have a really good reason as to why but for the most part, the two implementations are very different. It's not like we can lean on too much, but at least there are a few areas where they should check the same boxes.
- Frank Cruz: Cool, thanks, and circling back real quick. Maybe some people have a few questions about real-world assets. Is the Gauntlet thing still on the table for 2021 for the DssGov?
    - Chris: Gauntlet is doing an economic simulation of liquidations 2.0 right now. They're still working on it. They have plenty of time to still do that because other auditors are delayed. So yeah, Gauntlet is still doing their thing. I don't know if there was a plan for having them on DssGov, or is that a slip of the word?
    - Frank: Yeah, I hate to put you on the spot, but I thought you were going to bring them on one day to give us feedback.
    - Chris: Oh right, there is still a plan written down to schedule another sort of community session where the Risk Teams show up, and we talk about individual risk parameters. We were hoping to have Gauntlet step in on that conversation as well, but at this point, that's probably not going to happen until next year. However, that may be better because Gauntlet will have a good mastery of what those options are and probably give us some helpful feedback.
    - Cruz: Thanks, man.
- MakerMan: One last thing. I'm hearing from you about this crunch on smart contracts. Everything is broadening in Maker and is all landing in the smart contract zone either operationally or just by writing contracts, executing, or auditing all that jazz. The thought about decentralizing these Maker functions brings up the general question of how you feel that is landing on you? Do you need more resources? Not just funding but also people. I just feel like we're going to end up under a crunch. Is that a concern for you? Do you see a way for the community to help mitigate it?
    - Chris: Yeah, I think it is a concern. The foundation is obviously trying to handoff as much as it can to the community. The foundation has also been providing these resources. We're down 3 engineers on the foundation side. We've got another engineer starting next week, which is great, but we've also gotta bootstrap people in. Then we've got the grants, which is great. They are really helping with collateral onboarding. Sam is obviously amazing as well. Nonetheless, we're definitely bottlenecked on our technical capabilities to get through all of this. We have the priority sheet for collateral onboarding. We may need to think about the priority for these next MIPs. Overall I've been getting concerned about DeFi in general; at the rate that DeFi is moving, the number of exploits happening, the insanity of how dangerous things are, and things are not being audited. Right now, Maker is a cornerstone of DeFi. I think it would be a mistake for us to compromise the strict adherence to the way we audit, review, formally verify all of our contracts just to have more speed. I think Maker should really focus on being a more solid protocol as something that you could rely on. At some point, I think we should get more people to look at this. The decentralization of it is still going to be a tricky process, but that's another conversation. At what point does everyone feel comfortable where one of the core engineers working on this doesn't have to review stuff that's been going into the protocol. That's also a weird thing for us to feel safe about. Long was asking what we would do for the next monthly cycle, and a little piece of me feels maybe we should pump the breaks, just a little bit, to make sure we get through. We've got a lot of really good stuff lined up. Let's get some of these amazing features out with a lot of focus on trying to make sure they're secure and safe. If we try to push too much, we're going to make a mistake. We've got too many collaterals under custody at this point.
    - Makerman: I share your view on that, and I just see it as a building thing. Suppose we don't provide resources either in the centralized fashion through Maker or through governance in terms of finances. In that case, I foresee this whole space broadening. I agree with you. I have serious concerns about how this thing is broadening. We have regulations that have dealt with various collapses of financial systems.
- LongForWisdom: I hate to interrupt, but we have to move on.
- Makerman: I just want to know what we can do. I don't know if we're going to get to our Decentralized Smart Contracts Team within a year.
- Brian: This is a space-grade code. We have to do this right the first time. This isn't typical financial software. We can't restore from backups. I'm concerned about what may happen when we take off.
- LongForWisdom: Thank you for that Brian, Let's move on now.

## Other Presentations and Updates

### Derek Flossman

#### DsChief v1.2 Migration Walkthrough

[50:50](https://youtu.be/gadMkrlm5dY?t=3051)

- What I'm going to do is basically refer to the forum post. I'll iterate a little bit of what Chris said earlier. I will walk through the top 4 steps of voting on a proposal to authorize the new chief and remove the permissions from the old chief. That's the executive proposal that's on the portal now. If you haven't voted for it, please do so. Then once that spell is scheduled, we'll have a 72-hour delay and office hours. Expect that to be Monday or Tuesday; that's when the new chief gets the authority. The permissions from the old chief are removed, but it's not yet activated. This will occur when you vote on the new chief. To do that, you have to withdraw from the old chief and deposit in the new chief and vote as you usually do.

![](https://i.imgur.com/QVEHo91.jpg)

- The process that I'll walk you through now is this process of withdrawing, deposit, and vote.

![](https://i.imgur.com/KxySYx1.png)

- In the portal, you'll see a box at the top of the screen on the executive page. You'll be able to withdraw MKR to your wallet, and you'll approve that.

![](https://i.imgur.com/MgC6z2c.jpg)

- You will then see a box that shows you the ability to deposit either to use a hot wallet or a hot wallet with a cold wallet. In this instance, let's look at the hot wallet only.

![](https://i.imgur.com/g82iBnA.jpg)

- So that's number one. Click here to deposit directly into the new chief. In this case, I have 3.5 MKR, so I will deposit that in. once you confirm the transaction, you'll see in the voting contract how much you have. The note will tell you, please vote on the new chief, which is a separate transaction.

![](https://i.imgur.com/WKVYgLd.jpg)

![](https://i.imgur.com/oVcUWaj.jpg)

- The executive proposal will appear here as it usually does. However, the second scenario uses the hot/cold wallet setup. There is option two on the list to create a voting proxy if you wanted to do that. This set of screens will be very familiar if you've done this before. It walks you by selecting your voting wallet, typically the hot wallet, which you choose from a drop-down list, followed by choosing a cold wallet. In my case, I was using a ledger. Click the wallet address, and here you'll see the 3.5 MKR I've withdrawn from the old chief. Confirm those transactions and link the wallets together. Confirm the locking of the MKR in the proxy. Now you're able to go back to start voting, which will return you to this screen and invite you to vote on the activate proposal.

![](https://i.imgur.com/GzB9sZF.png)

- A few things as I was walking through this that may help people make sure everything works. Make sure the contract data is enabled on ledger devices. Make sure you have enough ETH in your wallet to confirm the transaction. When setting up the voting proxy, pay attention to which wallet is automatically selected as your hot and cold wallet. When doing a lot of testing, it was a thing that came up where I had to make sure I'm looking at the right wallet. Otherwise, you should be good to go.

![](https://i.imgur.com/li1NYkv.jpg)

- Quick reminder, please vote. I think we're about 12000 short. I expect that we'll get through it relatively soon, which will set us up for next week. We'd like to get through this phase relatively quickly because we also have executives lined up for the following Friday. Bear in mind that the final vote to activate the new chief also has a 48-hour delay on that spell being activated. We've included the reduction from 72 hours to 48 hours in the current executive on the portal.
- Chris: Yeah, so after we migrate over to launch the new spell, there's a 48-hour delay on the launch?
- Derek: Yes
- Chris: So the launch can happen. We can start migrating over right away, and the launch can happen once we hit 80,000 MKR. We don't have to wait on the GSM delay to launch the new chief. Then that executive on the 11th will be subject to the 48-hour delay.
- Derek: Yes, perfect. That was all from me. Ill put this up on the forum post I initially mentioned. Any questions? Let me know if anything is confusing. I'll do a short video and walk through if people feel that would be helpful.
- LongForWisdom: Great, thank you, Derek. Sorry if you were a little rushed.

### Nik Kunkel

#### Oracle Team Update

[57:09](https://youtu.be/gadMkrlm5dY?t=3429)

- This week's update is a little bit different than the other week. I need to talk to you guys about something rather serious. Last Wednesday, between the hours of 22:46 UTC and 02:23 UTC, we experienced an oracle outage. During that time, none of the oracles were updated. The cause was tracked down to be related to a bug in Scuttlebutt, one of the dependencies that we use in the Oracle stack. Scuttlebutt is the kind of P2P "gossip network" that we use for feeds and relayers to "gossip their price messages around."
- We're not aware of any liquidations that were affected by this at this time. There are no liquidations that were triggered or were failed to trigger due to the oracle outage. Stepping into the root cause analysis, Scuttlebutt's works are almost similar to a blockchain in that messages are hash-linked. You can think of it like how each block has a hash pointing to the previous block. Every time you post a message, you include a hash to the previous message. This means that it has the same kind of immutable properties as blockchains because you can't go and edit a message from the past. The hash would change, and you can't delete a message from the past because there would be a break in this kind of chain of hashes linking back to the first message. One of the property results is that every node and every peer on the network needs to have this state locally. The state is relatively uniform, so everyone, for the most part, has the same local state size. It essentially keeps growing over time as more messages gossip on the network.
- So, what really happened here? Well, there's actually a hard-coded limit in Scuttlebutt due to an offset codec that it uses. This hard-coded limit is about 4.2 gigabytes. After that limit is reached, it's not a graceful failure. Basically, the Scuttlebutt client will just seize up, and it will never restart.
- This was not something new to us. We've actually been aware of this issue going a long while back, as far as September 6th of 2019. we extensively tested the oracle v2 code base for about a year before multi collateral DAI even launched. This was one of the issues that we ran into and documented. We calculated how often we would encounter this message. The factors are that there are a certain number of feeds. There's a certain number of collateral types. There's also a certain frequency at which you have to update the prices of assets. Therefore with the feed and the number of collateral types, we projected far enough into the future that we wouldn't exceed the limits of those models. We saw that the frequency of price updates is actually much, much bigger than during our testing phase. We were led to believe that we had about 18 months to migrate to a new Scuttlebutt network with the original calculations before we would hit this issue. Nonetheless, as it stands, we're earlier than 18 months. MC multi-collateral DAI just turned one a few weeks ago. We hit this threshold much, much quicker than we had initially anticipated.
- what are we doing about it? Since we launched the Maker oracle protocol, our goal has just been de-risking the oracles across the board. The aim is that we have a hundred percent uptime, and we want to be redundant on different levels. On the one hand, we want to be infrastructure redundant so that no one piece of infrastructure can go down that will affect us. On the other hand, we want to have implementation redundancy, so there's no one tool that we rely on where a bug in the tool affects every person on the network that we don't experience any downtime from that. We call this infrastructure redundancy and implementation redundancy. Regarding implementation redundancy, we've been quite busy working on it for the past year. This includes coming up with multiple price tools. Instead of just using a single price tool called Setzer, we have another price tool called Gofer. The idea is that you would run both in parallel. If one doesn't work, the node and the feed would just flip over and use the other. This is on the pricing tool side. One of the things that we're working on right now is the transport layer side. The transport layer is this network where price messages can be transmitted and distributed. Scuttlebutt right now is the only transport layer. But we've been working for the past quarter and a half on integrating lib p2p as another transport layer that would be in parallel. What's frustrating about this is that had this event happen, if we were to hit this state size limit, say two months in the future, it wouldn't have affected us in the slightest. We would have already had lib p2p integrated. In terms of mitigations, we've already been working on this for quite some time. It's actually quite frustrating the timing of this how it happened.
    - LongForWisdom: Sorry to interrupt, but we need to move on soon, so try and cover your last points quickly.
    - Nick: I'll just wrap up really quick.
- I'm just going to skim through a swift timeline. All of this will be posted in a forum post that the oracle domain team is coming up with, so you'll get all the nitty-gritty details. Essentially, we found out about the issue when a community member notified us that they were having an issue with one of their relays. We quickly identified the cause as the known Scuttlebutt issue. We immediately started reaching out to feeds to assess the situation. After we figured out that this was going to be an issue that was critical and quite time-sensitive and that it could lead to a loss of quorum between the oracles, we decided we needed to execute an emergency migration. This entailed setting up a new Scuttlebutt network and getting everyone all the feeds and relayers migrated over. The goal was that we needed 13 feeds because the quorum for the oracle is 13, so we needed 13 of the feeds to migrate over as quickly as possible. We alerted all the customers of the oracles of the impending downtime. The oracles were not down yet, but we knew based on our calculations of the state size growing that they would be within an hour. We notified them ahead of time of the impending outage so they could take precautions on their end. The oracle domain team drafted together some documentation and tested it for release to the feeds. Then the feed started slowly coming online. As I said earlier, it took us three and a half hours to hit the required quorum level of 13. Afterward, the oracles started updating again. After that, over the next 12 hours or so, we filled out the rest of the feeds and got them on board. That's it on my end for the event's description, happy to answer more questions in the chat or on RocketChat later. We'll have the post mortem out shortly in the forum.

### SamM

#### PSM Implementation Update

[01:09:34](https://youtu.be/gadMkrlm5dY?t=4173)

- Last week, the vote to accelerate the PSM launch passed. As per the vote instructions, I set up a post that I mentioned in the chat to track the PSM launch progress. There's sort of 4 key things that need to be done.
	- Smart contract audits; I reached out to a few community members. Some have gotten back to me, and I'm waiting on others to go over the contract to make sure it's all good and do some more informal audits. I'm also in discussions to get a more formal audit in place, and more on that to come.
	- The second piece is risk analysis. We should have that next week so stay tuned for that.
	- I've deployed the contracts to the Kovan. I'm just waiting on the Kovan deployment process to merge that in, and then we'll have it on Kovan.
	- The final step is deployment to the mainnet. Any questions, feel free to ask me on rocket chat
- LongForWisdom: Thank you, Sam.

### Lucas

#### Open Discussion over the prioritization of Real-World Assets

[01:11:12](https://youtu.be/gadMkrlm5dY?t=4271)

- Lucas: I started a forum thread outlining what's happening with real-world assets. I just want to give a brief timeline to get everyone in the same picture. Some of the first world real assets and MIPs were accepted or voted in sometime in May. Since then, we've been working. This was not even the beginning of this initiative of bringing real-world assets into Maker. Since then, we have had continuous discussions about collateral onboarding calls. We've started with a real-world assets working group that began assessing the risk. I'm super happy to see that we now have the first real-world asset going live sometime soon with the risk assessment and all the other domain work being done. Although there are others and for which New Silvers' risk assessment has been out since Tuesday, I believe. ConsolFreight is hopefully to follow soon. Centrifuge is doing a lot of the leg work necessary to bring those on. In that work, we actually did a few things. We proposed a sub proposal for MakerDAO to declare the intent to onboard Centrifuge assets according to the framework we've explicitly outlined with the MIP13csp5. MIP22 also outlined liquidations and how Maker is to integrate with Centrifuge based assets. Both of those were posted on the forums in September and approved by community vote. It was then ratified, and we've now been working on it. At the same time, we've been getting mixed signals from domain teams and the Maker community concerning these assets' priority. Centrifuge has brought a lot to the first world assets; we have New Silver now ready to start originating the first loans the minute the spell gets executed. They are already looking at assets that fit within the bounds that the Risk Team has agreed upon. We started working on a spell and have been working with the community. Nevertheless, we've had this apparent signal request that ended with a vote on-chain that was very heavily in favor of prioritizing real-world assets. But this is still taking much longer than we are hoping to. We're doing everything that we can to get this ready into one of the following executive spells. I wanted to bring this up as a topic to discuss in general. One of the examples right now on the forum is that it seems like renBTC and a bunch of other coins is ranked higher than these assets that we have that are ready to diversify their collateral base to generate a significant amount of DAI and generate a significant amount of liquidity in the system are not seeing the attention that I believe they should get.
- My question to the domains team is, what could we do to speed these things up? I think the Maker community has often indicated that Centrifuge assets and real-world assets are something that we want to see in production.
    - Chris: The domain teams are all feeding back into that collateral priority sheet that I linked in the sidebar. We've got several collaterals that the community has greenlit. There are several different teams. There's the sort of greenlit score itself. I don't know if Governance has some feedback, but we give it a gut check on each of these metrics. Then that rolls up into a score. One thing that we can do in the sheet to prioritize real-world assets, we could ask if this is a real-world asset or not? If it is, we could add additional weight to that column, which might adjust the score and move real-world assets above some of the other things on the list. That would be where I would kick the discussion off. What we should do is funnel all assets into the priority sheet. If it's done well and we iterate on it, we should see the most bang for the buck for the protocol. Suppose we believe that we should diversify into real-world assets as that community poll had suggested. In that case, we certainly could add an additional rating score that could bump all real-world assets up the list a little bit more. That's where I would start.
- Lev: What's actually still required from the domain teams to get MIP22 onto a collateral onboarding poll similar to the 6S one that has just finished?
    - Chris: What we need are domain team assessments. We would start with New Silver, and we need a domain team assessment from smart contracts and oracles. So we need those two assessments. I'm working with Lucas to see if we could review that, but it's not just as easy as grabbing an ERC20 and knowing what the stack looks like. There's certainly more involvement, and we don't really know what we might find when we dig into it. The areas that Lucas and I have already talked about would be similar to MIP21; what we do in an emergency shutdown and make sure the code can handle an emergency shutdown and be able to yank tokens. In MIP21, we sort of wave hands, and liquidations happen via the trust. Still, liquidations are actually taking place on-chain using the Centrifuge contracts. I have not dug into that code yet, so we still have to dig in and ensure that liquidations are safe. I don't know if the Risk Team has evaluated that. The same thing can be said about oracles. We get a standard oracle price from these audits that the rep does. For MIP21 and for MIP22, they're sort of providing their own pricing. Therefore, we're bypassing our oracles, so we're getting both pricing and liquidation from Centrifuge contracts. that need some sort of heavy screening to make sure that's correct.
    - Nkunkel: It's not that it needs scrutiny or that it's correct. I think it's incentive misalignment. I don't see how you can have an issue with an asset having the ability to change the price on the fly. The Maker protocol is taking on a considerable amount of risk. I don't really think that there's no oracle here. There needs to be a layer in between whatever the Centrifuge price is and the price the system is using.
- Lucas: Can I address this point. Centrifuge and I are not the issuers. We are a team of people who have been working for more than 2 years on addressing this issue of how we allow issuers like New Silver to do this. I'm standing here asking and outlining the process and everything we're doing to make this safely. I'm not asking for a 200 million dollar debt ceiling to retire in the Bahamas. We're talking about slowly ramping up these assets with a scope that allows these asset originators to get the first experience for us to prove out this can be done. That this is something that the DAO can do. In the last 1.5 years, we haven't been able to show this. We want to grow this ramp, right? Seb, Will, and Phil have worked over the last couple of weeks tirelessly assessing these businesses. They are assessing what's going on. Are you insinuating that we're doing something here that will lead to them walking away with the 4 million or 5 million dollars proposed as a debt ceiling for New Silver? Are you worried that this is something New Silver will do when their entire business and reputation are on the line?
    - Nkunkel: I don't think we should frame it like that. We have crypto where we can build trustless systems. We don't actually have to trust anyone. Trying to fall back on those weaker guarantees is not something that's really appealing to me. There is some oracle risk there. And when I say some, I mean significant oracle risk. I would like there to be some layer of obstruction in between that gives the system some protection to dampen that risk.
- Sebastian: In response to the price that is given from Centrifuge, that is something that we have discussed with Lucas. We might want to set the price, and the risk team decided that we wanted another price. If there's an underlying collateral ratio, which is screened manually by the risk team. Suppose the pool assets go below this ratio. In that case, we'll ask for the pool to be liquidated, thereby basically asking for drop prevention. We need to be sure that the pool doesn't borrow too much DAI on the system. It's actually a bit different from 6S. There is no price at all, and everything is on-chain. Centrifuge is more on-chain than 6S. However, I agree that it's more complicated to integrate.
    - Lucas: The risk team looked at the credit risk, businesses, and whether giving them 5 million DAI is a reasonable thing to do. We are talking about a price feed that the risk team has already looked at. Is this a lender that we can safely give 5 million provided that they spend it on the right stuff? There is a process in place to do this. This is not a collateral type where anyone in the world can open a vault and try to manipulate a price feed and profit by tricking Maker into minting DAI that wasn't supposed to be minted. We're talking about New Silver having a process to originate loans and how they agreed on with the real world assets working group. I reached out to the oracles domain team at least 5 times in the past 6 months explaining how we're doing this and showing how we could address this. I don't think this was a lack of trying. We still need to do this, yet we stand here suddenly saying, oh, this is not ready. The community said real-world assets should be prioritized.
    - Nkunkel: Yeah, my team, in particular, is working with a limited number of resources. We have this constant collateral onboarding that goes on every month. It takes up a considerable amount of our time. We have the community telling us we want to do LP tokens. We've been working on that.
    - Lucas: I think the community said they want to do real-world asset tokens and not LP tokens. I'm happy to put out a signal request about this, but that's bullshit.
- Lev: We've already had a collateral prioritization signal request for real-world assets. It was pretty decisive.
    - Nkunkel: So we did. We recently finished the oracle assessments, risk assessments, and technical assessments.
    - Lucas: Everyone in the Maker community said that real-world assets are getting a special fast track outside of the normal onboarding process because they're new and special. The community said we should prioritize them. I don't think that saying we have one is an excuse for saying that Centrifuge shouldn't get its work done.
    - Nkunkel: That's not the point I'm trying to argue at all.
    - Lucas: So when is it getting done?
    - Nkunkel: I don't want to give you a date and then lapse on that date. I just don't know. We have spoken in the past, but The problem is that is was too wishy-washy. There was nothing to really look at. At some point, we said a third party would be validating the price and giving us the price. Then we would query the price from the third party. This doesn't seem to be the case anymore.
    - Lucas: Risk has assessed this without external oracles. No external oracles were promised in this risk assessment.
    - Nkunkel: That's just from the risk side. Whether you said that I'm pulling the price from someone else or from you, there's still an oracle. The oracle just happens to be you.
    - Lucas: There is no off-chain oracle feeding in the price. We look at how much has been borrowed and make sure that the value of the collateral within Maker will get repaid. There's no oracle here.
    - Nkunkel: You provide a value that extends the amount of credit that someone can get against the token. Which formula you use on your side to determine this doesn't matter. You have the ability to set that price.
    - Lucas: Up to 5 million DAI. We do have that ability. The New Silver can say how much their assets are worth. The real-world assets working group and risk team monitor what they say and how they're providing info. In a way, that is very similar to what 6s is doing. We have an entire process here, and in the end, if this value is assessed to be not correct, liquidation will be triggered. we have a process in place that will get Maker the DAI back specifically, which is MIP22.
- Sebastian: For the sake of getting a solution for the drop token, the price is not that difficult. It's a constant price plus the accrued interest. Maybe the accrued interest is too complex to compute, but it starts with a price, say maybe $100.
    - Nkunkel: It's not about what formula you're using to price it. I'm sure that's all fine. It is from a risk perspective that the issuer has the power to set the price, and that, to me, is a huge conflict of incentives. There needs to be some abstraction between the issuer and the protocol that protects the protocol from this. This is a misalignment of incentives.
    - Sebastian: If you can use a constant, it would be a bit of a loss for Centrifuge because they will not be able to borrow as much. We are speaking about 8% per year. It doesn't change the world. Getting a constant is much easier, I guess.
- Juan: These are two different topics that we should discuss separately; oracle risk and prioritization. I think that Nik's job, before anything else, are to protect the protocol. I believe that Nick's concerns are entirely valid, and we should work towards mediating any type of risk. Protecting the protocol should be the first priority for anyone working for the protocol, even if the community wants to prioritize real-world assets. I think Chris said in the chat, it's not that we're rejecting the proposal. It's just a matter of prioritization and bandwidth that each team has. I think there has been quite a lot of progress, especially since Seb started guiding the real world assets. It's easier to achieve in the shorter term for scaling the protocol and making sure the Maker holders will have value. That's what we're looking for at the end of the day. I don't think that we should mix both topics. One of the solutions was what external people can do to help speed things up. We mentioned for us, it's much easier to review things than to create them from scratch. Any project that can already give us reports is always much easier than starting from scratch and doing all the heavy lifting. That's one of the solutions that we're proposing. Hopefully, we can see this happening because I think that's something that everyone wants. We shouldn't mix these topics up.
- Sebastian: Just to come back to the collateral prioritization sheet. One issue was that real-world assets were penalized for good reasons because they are a bit riskier. However, the collateral prioritization sheet didn't consider the fact that the community and governance voted on making them a priority. I think the issue is on this point specifically. There was a senior request to make it a priority. On another side, there was a collateral prioritization sheet that didn't include the senior request event. Therefore, it was two separate pieces of information, and everyone could merge this information differently.
- LongForWisdom: I'd like to make a quick point here if I can. The prioritization of real world assets like that happened in the past. As a result, the domain teams prioritized a real world asset to work on, 6S. 6S isn't at the top of the collateral onboarding framework. That was picked explicitly because the community voted for onboarding real-world onboard assets. Whether that was a mismatch of expectations that the community expected the domain teams to drop everything and work on all of the real-world assets in exchange for the domain teams interpretation to get at least one real-world asset going and continue to do the things that we're currently doing with the other crypto assets.
    - Nkunkel: I'm not rejecting the Centrifuge collateral onboarding proposals in any way; I'm not saying no. I'm saying it needs work, just like everything else needs work. That's the issue that we're dealing with. It's not that we're choosing to ignore this. Everything is a priority, and there's only so much that our teams can handle at once. It looks like right now, I'm the bottleneck here because the risk side has been completed, and it seems like the smart contracts side is a little farther along than I am. Going into the New Year, I will prioritize real-world assets more. It's not a question of this doesn't work, it's this has a certain impact on the system that doesn't look favorable and so we need to retool how that works. So Seb you mentioned that we could use a constant but that would affect the issuer, Centrifuge, negatively because they dont get to use the value accrual to improve their collateralization or to extend their credit so what if there was a tradeoff in between so for right now for stablecoins we use a smart contract called the dsvalue and the owner of this dsvalue can poke it with a value and that's the value that gets set. What if instead of having this value controlled by the issuer we have the value controlled by Maker Governance and we commit Governance to once a quarter including in an executive to update the price according to the formula that risk uses or I think we recently passed instant access modules MIP, the risk team could be trusted to have an instant access module to change the price that's in the dsvalue contract, either of those solutions are much more pallatable to me then having the issuer be able to control the price at will, because even though in the latter scenario you're trusting the risk team it's not as much of a incentive misalignment by trusting the risk team then by trusting the issuer of the token. That's my only concern here.
- Sebastian: I fully understand you because when we started the risk assessment, we saw that the price of the pool should come from the formula, which maybe could be good or not, but we decided that it was not the work of the asset originator or the technical provider to set the price of the asset, you should do it on your side and what you suggest is just fine.
- LongForWisdom: Let's wrap up the call here.
- Lucas: Nik, would you be able to stay on a little bit longer?
- Nkunkel: I have at least until the top of the hour
- LongForWisdom: We'll do the wrap-up stuff then. Going into the holidays, we won't have calls during the weeks of the 21st and 28th.

#### Links from Chat

- [Poll to Leave Meeting Open After Recording](https://forum.makerdao.com/t/informal-poll-moving-governance-and-risk-meeting-time-leaving-meeting-open-after-recording-ends/5216)
- [2020 Year End Schedule](https://forum.makerdao.com/t/2020-year-end-schedule/5218)
- [Collateral Call Leverj](https://forum.makerdao.com/t/collateral-onboarding-call-18-leverj-wednesday-december-2nd-18-00-utc/5356)
- [Collateral Call Melon](https://forum.makerdao.com/t/collateral-onboarding-call-18-melon-protocol-wednesday-december-9th-18-00-utc/5449)
- [Kknow Your MIP](https://forum.makerdao.com/t/know-your-mip-kym-02-mip30-farmable-cusdc-adapter-cropjoin-monday-december-7th-17-00-utc/5464)
- [DsChief Migration Steps](https://forum.makerdao.com/t/dschief-v1-2-migration-steps/5412)
- [Road to PSM](https://forum.makerdao.com/t/road-to-the-psm/5353)
- [Collateral Priority Sheet](https://docs.google.com/spreadsheets/d/1IX9e2fyfz7djtDMKn5gMyGsyFxHoY75GncMbAjnSXrM/edit?pli=1#gid=0)

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
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
