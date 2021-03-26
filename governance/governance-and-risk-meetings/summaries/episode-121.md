# Episode 121: December 10, 2020

## Agenda

- [00:00](https://youtu.be/g9qiFqShqNQ): Introduction
- [02:54](https://youtu.be/g9qiFqShqNQ?t=174): Governance at a Glance
- [08:02](https://youtu.be/g9qiFqShqNQ?t=482): Smart Contracts Team Update
- [18:32](https://youtu.be/g9qiFqShqNQ?t=1112): Oracles Team Update
- [28:11](https://youtu.be/g9qiFqShqNQ?t=1691): Risk Team Update
- [34:58](https://youtu.be/g9qiFqShqNQ?t=2098): Community Development + Operational Support Update
- [41:10](https://youtu.be/g9qiFqShqNQ?t=2470): Collateral Calls Update
- [43:49](https://youtu.be/g9qiFqShqNQ?t=2629): MIPs Update
- [46:42](https://youtu.be/g9qiFqShqNQ?t=2802): Kleros/Maker Fellowship Introduction to Marvin
- [55:00](https://youtu.be/g9qiFqShqNQ?t=3300): State of the Peg with Vishesh Choudry
- [1:12:19](https://youtu.be/g9qiFqShqNQ?t=4339): PSM Implementation Update

## Video

<https://youtu.be/g9qiFqShqNQ>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/g9qiFqShqNQ)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk meeting number 121 taking place on Thursday, December 10th at 16:00 UTC. I'm joined by a collection of Maker focused people, and we've got an agenda as usual for today. My name is LongForWisdom. I'm the governance facilitator at MakerDAO. Feel free to interrupt people as they're talking. We'd love you to get involved. If it's a problem for anyone, then we'll let you know.
- I'll briefly skim through the agenda before we get started. There's some housekeeping stuff I'm going to go through during the intro. We've got weekly updates from each of the main domains with a couple of extras. We've got a couple of segments this week. And we've got an introduction from Marvin, the Kleros Maker fellow that Amy has recently spoken about. Vishesh is going to be doing the state of the peg. Then hexonaut, also known as Sam McPherson, is going to give us an update on the PSM implementation progress. Finally, we'll descend into anarchy and discussion as usual.
- As I mentioned last week, we will be moving the time for this call to one hour later. I think we'll start doing that in January because it's a nice and clean separation into a new year. Hopefully, we won't get people confused when it happens. Therefore, next week we'll continue to be at 16:00 UTC, and then in January, we'll move to 17:00 UTC. The times will always reflect in the agendas. If you're not sure, just check the agenda.
- We won't be having this call or weekly governance cycles for two weeks over the holiday periods. Those weeks are the week starting the 21st and the 28th. That pretty much covers Christmas and New Year.
Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[02:54](https://youtu.be/g9qiFqShqNQ?t=174)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [Rates Changes Proposal 7 Dec 2020](https://forum.makerdao.com/t/rates-changes-proposal-7-dec-2020/5533)
    - Primoz posts this month's rate updates proposal for discussion before moving to an on-chain poll.
    - LongForWisdom: One of the most active discussions was on the rates change proposal proposed this Monday by the rates group. I imagine Primoz will talk about this a little bit more in his section, but that's met some discussion, which is great. It's good to get feedback from everyone when crafting those proposals.
- [Road to the PSM](https://forum.makerdao.com/t/road-to-the-psm/5353)
    - Hexonaut continues to update the community on the status of the PSM implementation and deployment process.
    - LongForWisdom: Hexonaut has continued to update the thread "Road to the PSM," which keeps everyone up to date on the progress with the PSM implementation. I think it's going very well, and as I said, we'll let him talk about that a little bit later.
- [Launching Oasis on IPFS](https://forum.makerdao.com/t/launching-oasis-on-ipfs/3755)
    - MagoCrypto proposes launching an oasis mirror on IPFS, which raises questions on what it means for the DAO to take responsibility UI's into the Maker Protocol.
    - LongForWisdom: We also had an interesting thread from user MangoCrypto talking about launching Oasis on IPFS, basically mirroring the Oasis site on IPFS, which I thought was an interesting discussion as it opens the question of whether the DAO is responsible for that mirror or the mirror of UI's in general, which is an interesting question.
- [On the priority of real-world assets: Where do we stand?](https://forum.makerdao.com/t/on-the-priority-of-real-world-assets-where-do-we-stand/5424)
    - Spin from Centrifuge comments on the prioritization of real-world assets in the Maker Protocol and asks what else MKR Holders can do to get those assets prioritized.
    - LongForWisdom: The RWA priority thread continues to respond and build excitement for RWA, which we're all looking forward to over the next few weeks or months.
- [Introducing DssGovRewards](https://forum.makerdao.com/t/introducing-dssgovrewards/5394)
    - Hexonaut introduces rewards for MKR Voting and asks for feedback from governance in this direction.
    - LongForWidom: Finally, the DssGovRewards thread from SamM has seen many comments from various people discussing the relative benefits of rewards for locking MKR in the Chief versus MKR burn and a lot of other stuff.

##### Signal Requests

- [PSM Parameters](https://forum.makerdao.com/t/signal-request-psm-parameters/5532)
    - Primoz puts forward some signals to determine the initial parameters of the PSM deployment.
    - LongForWisdom: The PSM parameter signal has been set up by Primoz to help determine the PSM implementation's initial parameters, assuming everything goes well in terms of implementation. I'd encourage everyone to look at that because it's a fairly big deal.
- [Vault Compensation Working Group Payment](https://forum.makerdao.com/t/signal-request-vault-compensation-working-group-payment/5562)
    - Monet-supply proposes payment for the black Thursday compensation working group from the system surplus.
    - LongForWisdom: We had a signal request from MonetSupply on behalf of the vault conversation working group, which is still a little bit of a blast from the past at this point. That signal request deals with reimbursing that working group for hours, organizing the compensation proposals, and managing that process. There's been some discussion about the various things we need to consider when paying people from the protocol. It's worth noting this is this would be the first signal request that has proposed taking money from the protocol to pay for something; therefore, it's potentially a landmark thing.
- [YFI Vault Options](https://forum.makerdao.com/t/signal-request-yfi-vault-options/5425/22) & [Adjust ETH-B Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-eth-b-debt-ceiling/5282)
    - Primoz describes some of the options for the YFI-A Vault and asks for the community to weigh in.
    - Ultraschuppi signals on increasing the ETH-B Debt Ceiling.
    - LongForWisdom: The only other two signal requests went to on-chain polls, which finished a little while ago dealing with the ETH-B Debt Ceiling and the YFI vault options. The YFI and the ETH-B polls have passed, as did many other polls proposed this week.
    - Chris M: What did the stablecoin poll end up as?
    - LongForWisdom: That passed, twenty-four thousand to six thousand, so 78% in favor.
- Other governance updates. As was mentioned before the recording started, we have still had yet to successfully migrate to the new DsChief. Maybe Chris can talk a little bit about that more in a minute, but if you haven't voted for or haven't moved your MKR from the old Chief to the new Chief, please consider doing so.

### Christopher Mooney

#### Smart Contracts Team Update

[08:02](https://youtu.be/g9qiFqShqNQ?t=482)

- Quick update for last week: DsChief 1.2 is now out. We're still waiting to launch it. We have almost 67.000 MKR on the Chief, on that zero proposal. Once that has hit the 80.000 mark, anyone can go to Etherscan and call the launch function, to which I dropped a link earlier. You just hook up your web3 client to launch. That'll launch the Chief. There's no delay after that. We can immediately start using the Chief with the next executive.
- In terms of collateral assessments, we did MIP22 this past week. That's the Real World Assets. Specifically, in this case, the New Silver's Drop Tokens. I think we're still working with Centrifuge and those guys to make a few updates.
- Regarding collateral onboarding for Kovan, we have UNI, renBTC, and MIP27, which is the Debt Ceiling Instant Access Module, or the Debt Ceiling Auto Line. All of that is in Kovan now. It was passed earlier today. All of that stuff is active in Kovan and can be played with. I'll have an update in Rocketchat a little bit later. We're still working on the DS executive. That stuff is still in review. Well, It's actually finished; it's just that there's a lot to it. It's a pretty hefty review. We didn't do any collateral onboarding work in the priority sheet. Still, I think there was a priority sheet work hit by another team, so we'll wait for that.
- As for the domain teamwork, we've been working on MIP21, which is the Real World Assets for 6S. MIP22, which is the one I mentioned earlier. We've also been working on MIP27, which is the Debt Ceiling Instant Access Module. Naz did killer work collateral onboarding UNI into Kovan; everything looked great. The same goes for Sam with renBTC into Kovan. Sam is still working on the PSM. Just to clarify, there's a post in the forums about how [the Foundation isn't going to be involved with the PSM](https://forum.makerdao.com/t/foundation-statement-on-the-psm/5521). This is truly the DAO being autonomous here.
- During the coming week, we're going to be putting AAVE into Kovan, MIP21 into Kovan, and the UNI-v2-DAI-ETH LP Token into Kovan. In the Friday executive, tomorrow, we'll have the polling results for UNI, renBTC, and MIP27. The DC Instant Access Module will be what we vote on Friday. Presumably, the Chief will launch by then, if it hasn't launched by noon on Friday. The stuff that's scheduled for this week gets bumped, and we can't get to AAVE, MIP21, or the UNI-V2-DAI-ETH LP tokens until next year. I don't know if that'll set a little urgency, but if you were sitting around waiting for something to happen, now is the time to put your MKR on the Chief to launch it.
- Collateral assessment work still needs to be done for tBTC. We still have outstanding Domain Team reviews for MIP14,17,25, 29, and 30. As for the Foundation, we've mostly been assisting with a really aggressive schedule for the end of the year. We're not really on our own tasks right now, but we've been helping out. Also, the Foundation has two new smart contract team members; Tanner and Emilio. Welcome, guys; you're desperately needed. We're super psyched to have you. That's it, anyone has any questions?

#### Questions and Comments

- Frank: Chris, Regarding MIP27. I'm just trying to understand. Could you clarify if it's just going to be ETH, right? There's no UNI?
    - Chris: MIP27 is going to be deployed with ETH-B, which is a secondary Ethereum collateral type. I think we just want to dip our toe in the water with it and see if it works. If it's functional, then we'll possibly expand it out to other collaterals after that.
    - Frank: That's not going to go to the next executive, right, until 2021, is that right?
    - Chris: Yeah, it'll be in 2021. I think Risk will want to develop parameters for each of the different collateral types, and then we'll activate it.
- Frank: And, with regards to the griefing attacks, is that something that's going to be battle-tested before being deployed? On Kovan, maybe?
    - Chris: Concerning any griefing attacks, we're on ETH-B right now, which means they're less effective. I think the position that we're taking comes from the benefits of having the instant ability to adjust the debt ceiling both upwards and immediately downwards. Both those benefits outweigh the downside that a whale may choose to grief the debt ceiling on the downside to hard cap it. ETH-B is a really good experimental case for that. If we find that there's griefing, it's no different than if we were at a capped debt ceiling on a particular collateral type. We could deal with it within the next weekly executive cycle. Therefore, as I said, it's not worse than that. The benefits are pretty great because we don't have to spend as many cognitive resources, Risk, smart contracts work, and governance cycles always chasing the debt ceilings.
- Lev: I just want to say that I'm a bit concerned that maybe the scope of the issue is a bit broader than just griefing because it could be that it naturally happens due to the turn in debt. When the instant access module gets poked, the debt ceiling moves down a lot easier than it goes up. You could imagine some scenario where it is always staying near the bottom range because of the dynamics without even adversarially grieving it. As we think about solutions for improving it later, I would think of it as not even requiring an adversarial situation to have it malfunction.
    - BrianMcmichael: I totally agree with that, Lev. I think the initial proposal of 12 hours might be too long because of that concern. As people are pulling out, we would have to be expecting people to be putting in at the same rate. Otherwise, the ceilings are just going to keep declining, and if that's only 12 hours. It might be a while before we can bump it back up. I think the original plan and the design were to expect around one hour to match the OSM times to avoid an OSM attack. However, I think that's a variable that's up to Governance, and we would have to see it in practice.
- LongForWisdom: Cool, thanks for the discussion. I think the main thing is just to see how it pans out, right? This is the reason we're currently doing it with only ETH-B. It's a reasonably failure-risk-free way of testing it. That brings up one other thing I should possibly mention. In the polls this week, there was one poll for increasing the ETH-B debt ceiling, and there was also the poll for implementing the DCIM on ETH-B. It's worth noting that the DCIM on ETH-B will override the debt ceiling increase, to the point where there's not really any point in doing both. Given that they both passed and assuming smart contracts is still OK with deploying it, we'll just do the DCIM rather than the ETH-B manual debt ceiling increase.
- Chris: I agree with that.

### Nik Kunkel

#### Oracle Team Update

[18:32](https://youtu.be/g9qiFqShqNQ?t=1112)

- This past week, we published the postmortem for the oracle outage. I didn't really see much discussion or many questions about it on the forum. Still, if anyone has any follow-up questions, I'm more than happy to answer them.
- We also published the collateral onboarding assessments for three of the Uniswap-v2 LP tokens, for USDC-ETH, for DAI-ETH, and for WBTC-ETH. Even though we've done all three assessments, the oracle contract we wrote for these tokens is bespoke. If we were to wait for an audit before onboarding these LP tokens, it could be quite a few months. Therefore, we've chosen to pursue a strategy where we would release one of them with a fairly low debt ceiling after we've done some meticulous internal reviews. Essentially, that's almost like a bounty in the sense that someone can hack the contract and steal up to that low debt ceiling that we set. That's the bounty program that we're instating. That being said, it would just be DAI-ETH. Then USDC-ETH and WBTC-ETH would be on hold until we either have more confidence in the new smart contract oracle overtime or get formalized audits completed.
- We've put Kovan oracles into a staging environment. So far, everything seems to be working nominally. I've tried it against a few randomly different LP pairs to start checking that everything is working.
- In terms of whitelisting, I think we have a proposal from YFI by Yearn on the YFI vault. The polling vote was two weeks ago, which passed. However, it didn't go into that week's executive because we started the Chief migration instead. I think we're still about 14.000 MKR short. If the Chief migration completes tomorrow, then we can put it into tomorrow's executive.
- Furthermore, there's a whitelisting proposal from Gnosis for settling prediction markets. The first proposal is for the ETH oracle security module. I've been talking to Christian, and I understand that there's quite a few more coming. That poll will go live on Monday. I actually think it's interesting that they chose the oracle security module over the medianizer. The oracle security module just adds a delay. It's only effectively updated at the top of the hour, once per hour. When you're a customer, you have this decision that you have to make depending on how you're using the oracle price; Do you want the oracle to be more sensitive, or do you want the oracle to be more secure? In the case of an oracle attack, there's nothing we can do to protect you from the medianizer value becoming some malicious value. We can do things to protect you from the oracle security module value becoming a malicious value. Therefore, they're different trade-offs on the scale of security versus sensitivity. We've seen in the past that the only organizations or projects that are using the oracle security module are doing so because they are using it to manage their vaults. They wanted to know what the price would be an hour from now so that they won't get liquidated. Gnosis is the first project that seems to be using the oracle security module and is not doing vault management. I thought this is rather notable. Everyone else seems to be taking the more sensitive oracle's trade-off space than the secure one.

#### Questions and Comments

- Lucas Vogelsang: I wanted to pick up the conversation on the New Silver oracle because it seems the only thing there that is missing is the oracle assessments. Smart contracts and Risk are out. With the schedule over the holidays, I was curious about your idea on the timeline and prioritization?
- Nik: I think it will be following the release of the Uniswap LP oracles. I've been putting in a couple of months' worth of work into that. We're basically in the home stretch; therefore, all my attention is focused on this at the moment. After that, I would be looking at the real-world asset stuff and getting those assessments out.
    - Lucas Vogelsang: Do you think that it's realistic to aim for a first executive of the year timeline? I'm asking because New Silver is getting ready to have loans. We'd love to see this happen. I know it's not your only priority, but I believe knowing a timeline would be super helpful.
    - Nik: I think I can get the oracle assessment in before the end of the year. Then, pending what comes out of that executive, if it requires us building anything new, it may or may not be the first executive when we get back.
- Lucas Vogelsang: Long, from a governance point of view, what are the dates for polls in the first executive?
    - LongForWisdom: The first polling week would be the week beginning on the fourth. I don't know whether smart contracts would be ready to implement something that went in that week on the 8th. Usually, they ask for an extra week to manage the...
    - Chris: We could certainly start putting MIP22 into Kovan that week. Lucas, we'll work with you on getting that in Kovan so that it would be prepped next week for mainnet.
- Lucas Vogelsang: Yeah, that would be feasible on our end.
    - LongForWisdom: I would say the 8th or the 15th. I think the 15th is probably more likely, but it's possible.
- Lucas Vogelsang: Nik, that's great to hear. If it is out by the end of the year, it will be able to get going to the polls in the first week. That's very exciting, thanks.

### Primoz Kordez

#### Risk Team Update

[28:11](https://youtu.be/g9qiFqShqNQ?t=1691)

- Regarding collateral evaluations, we only have one more plan to be released until the end of the year or potentially two. The one that we're still missing and is in progress is tBTC. The other two remaining collaterals were actually just published today. These were wBTC, UNI LP, and ConsolFreight Drop Tokens. We also started looking at farmable cUSDC Cropjoin Adapter Implementation, which is MIP30, which is probably the next focus collateral that'll be evaluated from our side. This one might need a more careful evaluation of economic risk. Still, hopefully, we can have something proposed by the end of the year.
- On the real-world asset side, Sebastian informed me that most of the work is currently focused on building monitoring tools for real-world assets. In terms of the other things we've worked on over the past few weeks, the PSM risk assessment has been published. It compares the PSM with the current implementation of low liquidation stablecoin vaults and the risks and benefits. I also published the signal on the remaining PSM risk parameters, which need to be decided. Parameters that are still missing are starting the debt ceiling and the stablecoins included in the PSM. We also released an updated risk premium table. This served the Rates group to propose rates, which was actually done this week. Rates proposed a published report and should move onto an on-chain poll and executive if passed next week. We're hoping to execute all of the ten stability fee changes in one executive vote on the 18th. We hope we don't hit the block limit.
- Finally, I also published a [risk evaluation on the debt ceiling instant access module.](https://forum.makerdao.com/t/eth-b-dc-iam-initial-parameters/5512) This was already discussed. We did a test run with ETH-B. Parameters were proposed from our side, and we'll see next year how we move on to other collaterals.
- For the next few weeks, as I mentioned, we'll focus mostly on the cUSDC CropJoin Implementation. I also commented on the b.Protocol proposal about renBitcoin-B vaults, which, at first look, seems to be an interesting proposal. But you also need to get some feedback from other domains because the implementation requires some code changes on the Maker side.
- Finally, we'll be monitoring things, of course, assuming the executive votes pass as planned. If not, we'll potentially need to propose some parameter changes due to limited governance during the holidays. Suppose something happens to the stability fee being disabled on stablecoins. In that case, we may need to propose a higher surplus buffer, for example.

#### Questions and Comments

- LongForWisdom: Alright, thanks, Primoz. Could you comment on the forum concerning the YFI stability fee raise?
    - Primoz: Yeah, I made a signal a week ago. There were a few options. The winning vote is actually the YFI B-wall with a higher liquidation ratio. However, since we can't execute this year, the next winning vote was to increase the debt ceiling to 30 million. By calculating risks and doing analysis, the vault type with such a debt ceiling was risky, and the calculated risk premium was ten percent. This was the option that they chose, and of course, some people thought this doesn't make sense because we're not going to see a 30 million debt utilization. If we don't see that, then the 10% stability fee doesn't make sense. I agree with that. The problem was probably because I provided only one option: a stability fee equal to the risk premium. However, I think what I should do the next time is to inform the community about the risk premium. Still, it's actually up to the community to decide whether this already implies we're going to see a lower debt exposure. That's why we should initially propose a lower stability fee that equals a lower risk premium. Then, in the end, we actually propose a lower stability fee in the rates proposal. We did another calculation of vault type that has a slightly better collateralization ratio. This got a nine percent risk premium, which was the rate we chose. However, it remains to be seen. If we see a lot of repayment and that exposure decreases, we'll probably need to go with a lower stability fee. It's about trying to find the balance. It's not necessarily easy to assume what will be exposed in advance and then apply the applicable stability fee. We learned something, and for the next time, we'll probably choose a different methodology. As I had said, the initial problem was the YFI B-vault isn't doable, and that's why we needed to go with this proposal.
    - LongForWisdom: Thank you, Primoz. I think we saw the on-chain poll for the YFI pass, so I don't believe that Maker voters necessarily disagree with the outcome. I don't think there's anything to apologize about, but I agree that maybe more options in the future might be good.

### Amy Jung

#### Community Development Team Update

[34:58](https://youtu.be/g9qiFqShqNQ?t=2098)

- One of the support domain pieces is maintaining the health of the other domains and keeping everyone updated. Therefore, I did want to bring up a concern that I know has been discussed but around this domain team burnout. I just wanted to remind people and any new community members that we're in the middle of this transitioning of core responsibilities from the Foundation to the DAO. The Foundation is quite limited in its ability to support certain things, as you can see in cases such as the PSM. I see our teams juggling many things such as core development work, new features, MIPs, monitoring, onboarding new contributors, and then a bunch of less obvious things that take away attention and time, such as optimizing coordination processes and being able to communicate with the community. Just for context, I did want to highlight that the smart contracts team has been onboarding two contributors; Sam and Naz. Risk has onboarded around seven contributors and then working on two risk tooling grants. Then we have three proposed new facilitators; Juan, Seb, and Sam. Thinking about how we are shifting to become more responsive rather than reactive and intentional in the way we're scaling and nurturing quality growth takes a little more time. All this being said, the work is set for this year. Next year will be another exciting year, but I think we should really consider consolidating before speeding up again. That's something that I wanted to share with the larger community.

#### Questions and Comments

- Frank: Hi Amy, as the DAO is going to be the frontrunner, are you planning to give the community an update on how things are going to work when the DAO does take over for 2021, and even in 2022? Are you and Juan going to do community calls where you're going to explain how it will work and where we're going to get to retain people like Chris Mooney, Nik, etc.?
    - Amy: Yeah, I think our best-case scenario is that everybody who's currently working the DAO is ushering this smooth transition as our goal is. And this will continue. For example, I may leave the Foundation but continue my work as a facilitator. We call it "building rockets" in that each of these teams will be working with the DAO in its own form. So, there will be support. Juan and I will support the domain teams; we'll be communicating a lot more. Juan is also taking many great initiatives right now that are bridging a lot of these transitional moments. As I said, with the Foundation, we're limited to what we can support. We're helping bridge a lot of the primary core responsibilities and then be able to communicate that. You'll see next year we will get a little more reporting on what this means for the DAO, how's the DAO supported, etc., which will be coming from the support domains and not necessarily from a Foundation point of view. Did that answer your question?
    - Frank: Yeah, totally, and I guess with regards to tools that are going to be needed, I think you're already doing the research on that. I mention this because I was in some seminar. I heard that a former FBI spoke about moving to a decentralized state, which is a bit weird going from FBI to now building software tools for decentralized organizations? It got me thinking last night; what will have to be implemented to run the DAO and get everybody paid, and how do you think about benefits? Besides MKR and DAI, do people need a 401k and Health Benefits in the US or other countries?
    - Amy: Exactly, I actually just got off the call with Opolis. They're building this network. I think it's being able to pull different resources going back to what you were saying about the FBI guy. We have to think a lot about tech ops and dev ops, which we're actively discussing. It is one of those things which is strange to think of it in a decentralized way; what is the processes for that, that happens in a kind of trusted and trustless manner? However, we're definitely thinking about it. We're trying to get other legal communities involved. There's also Marvin, who's going to speak and introduce himself in the beginning. It's all in the research phase. We're trying to gather the resources and then share them with the community.
    - Frank: Nice, bright future ahead, looking forward to it.

### Juan

#### Collateral Call Update

[41:10](https://youtu.be/g9qiFqShqNQ?t=2470)

- We had a pretty busy week. On Monday, we had a really interesting call with Lev and Rain, where we went through the second "know your MIP." It was very, very interesting. We covered MIP30. Well, they covered MIP30; I was more on the question side of the discussion. MIP30 is the farmable CUSDC adapter, i.e., the CropJoin that was mentioned previously. This happened on Monday. Then, On Tuesday, we had the b.Protocol team and also Naz from WFIL.network. They presented their project and the collateral. Yesterday, we had Mona from x.Melon protocol, which is being renamed into Enzyme protocol. This is also very interesting. I'm going to post the links on the sidebar.
- Next week, we will have a Real-World Assets wrap up kind of thing. Seb and Lucas are going to be there. They're going to be three asset originators. We're going to have a look back on 2020 and foreshadow 2021. The three originators are Harbor Trade Credits, Peoples Company, and Fortunafi. I'm expecting a very interesting call. This will happen on Wednesday the 16th at 6:00 PM UTC. I think it's quite impressive to look back at what each team at Maker has accomplished in the last couple of weeks or months. It seems that time is flying. I think it's good what we're achieving. We need to also celebrate what we're building and not just focus on rushing towards infinity.

### Charles St. Louis

#### MIPs Update

[43:49](https://youtu.be/g9qiFqShqNQ?t=2629)

- I have a couple things I want to talk about. Still, as you mentioned, because there's no governance cycle this month, it is relatively short. Therefore, I'm just going to give a verbal update. I will be posting an update on the forums as usual.
- A couple of new proposals came in, as Amy mentioned earlier, for some domain team onboarding. SamM has proposed himself as a Smart Contract's Domain Team Facilitator. SebVentures has also proposed himself as a Risk Team Facilitator, which is pretty awesome to see. In terms of some new pre-MIP discussions, we had a couple come up. There's one by Matthew Rabinowitz for throttled surplus buffer. There also ongoing discussions that are still pretty active on delegation of authority and real-estate tokenization, and of course, the liquidations 2.0 technical summary.
- In terms of quick collateral onboarding updates, there were three governance polls for collateral onboarding that went live on Monday and have passed today. They are for AAVE, and UNI-USDC-ETH, and UNI-DAI-ETH.
- There are now seven collateral types awaiting an executive vote past the governance poll stage: renBTC, RWA aka 6s, UNI, AAVE, two UNI LP tokens that I just mentioned, and PAXG. The executives scheduled for them are one on December 11th for both UNI and renBTC. On December 18th, the executive for the RWA, AAVE, and then the UNI LP token for DAI-ETH. The rest have been unscheduled but are awaiting an executive.
- The community greenlight pools for December will be published on the fourth. That's on Monday and will end on December 28th. And this month, they cover DPI, WFIL, and WZEC.

## Other Presentations and Updates

### Marvin

#### Kleros/Maker Fellowship Introduction to Marvin

[46:42](https://youtu.be/g9qiFqShqNQ?t=2802)

- Marvin: It's nice to be here and around some intelligent people; thank you for having me! My name is Marvin, I'm going to share my video. I am lucky and feel the immense burden of contributing to this community to build out this infrastructure for real-world assets. A bit about myself, I'm originally from the Bahamas, a small island in the Caribbean. I'm based primarily in Nairobi, Kenya, I'm currently in Ethiopia, I travel around the African continent. One of the things I do and am passionate about is Raise, which we started two years ago. The goal is to build security tokens and real-world assets. If you know the Bahamas, you know it's the offshore entity tax haven; we don't call it tax evasion; we call it the offshore financial center. That's the fancy way of saying it. We thought 2019 would be all the rage for real-world assets, but we were very wrong. We decided to build a platform that simplifies diligence of real-world assets; we've been making it for the past 2 years. It's finally in the right place now, and I'd love to show it. We bided our time to build out infrastructure to do due diligence on companies before they would launch to eventually create a database oracle that would link to smart contracts. It seems like we're finally here, so that's what I do and how I spend my time. Otherwise, I'm a securities lawyer by trade; I've built out and designed legal systems in the past. I also spend a lot of time in the crypto community, and I'm happy to be here.  Let me know if there are any questions. I'd be glad to share the platform on the screen for a couple of seconds, so you get a sense of what I do daily.
- LongForWisdom: We can share your screen briefly.

![](https://i.imgur.com/8Yf8Gnc.jpg)

- Marvin: What we build at Raise is securities infrastructure for the African continent, which is where we focus on time and energy in the capital markets here. You're looking at a live version of the Raise platform. Two years ago, when we started out, the first thing we said was how does someone build out security token real-world asset infrastructure. The answer was evident to us. First, you have to digitize this stuff. Many people are talking about real-world assets, but many things don't even exist digitally; deeds are still paper-based, especially in Africa. The first step we started out with was digitizing it. You're looking at a live version of Raise; there are three components to the platform. We have one that's focused on organizing corporate structures and subsidiaries. I can find out an annual return for subsidiaries, documents, and board members we can track. We can see who is on the board and who is not on the board. Most notably, we structure asset data for private companies to see a list of shareholders and all of the different assets stored here.

![](https://i.imgur.com/eRy0qLp.jpg)

- For Yele Alade, as an example, we'll store his common shares; we know exactly how many common shares he has. Each shareholder is tied to an email, and we create an electronic share certificate for each of the different certifications. This visual representation of what you see in a centralized database stores asset data programmable assets for private companies. So we create for each one, and we store all of the rights and preferences. Basically, we digitize an entire corporate structure. What we started building out this year is basically a security token issuance platform.

![](https://i.imgur.com/J6i4k7j.jpg)

- This Cap Table that you see here is connected to something that we call a Deal Room. From this Deal Room, what we do for a company is we structure all of its diligence data. I can change up the different terms and add that it's convertible debt; since the Cap Table data is connected to the actual Deal Room, investors can simulate exactly what their investment can look like in the future. This is based on actual company data and all of the diligence data. The Cap Table is organized and structured in this deal room. From this deal room companies and documents and all this stuff that I can go on forever about, you can invite investors, and those investors come in.

![](https://i.imgur.com/Dz4BIjX.jpg)

- After you've invited them, they can invest in the company directly through the platform. When they invest, we update the Cap Table here and issue an electronic certificate. That's what the platform is currently to get a sense of. That is the context in which I think I will be a helpful fellow. We have a team that only thinks about securities all day; all I think about are real-world assets all day and hopefully how they will not disrupt the crypto and MakerDAO community's financial freedoms. I hope that was an excellent introduction to Raise and myself. Glad to meet everybody; thank you again for the time and the kind messages.
- LongForWisdom: I am looking forward to seeing the outcome of the fellowship. We are grateful to have you here. Thank you.

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[55:00](https://youtu.be/g9qiFqShqNQ?t=3300)

![](https://i.imgur.com/wZcwwnf.png)

- All right, we've crossed over a billion DAI. Still around 430 million from ETH-A. We're up to almost 10 million from ETH-B. That's pretty much capped out. 3 million from BAT-A. 420 million from USDCA. A tiny amount from USDC-B. Up to 113 million from WBTC. 52 million from TUSD-A. Smaller amounts from KNC, ZRX, and Mana, and then 18 million from PAX-A and smaller amounts from USDT-A, COMP-A, LRC-A, 5.7 million from LINK-A, and 17 million from YFI.

![](https://i.imgur.com/lFfgbSy.png)

- Just to touch on where the DAI peg is and has been. We've seen this consistent long-term price around $1.01 for a while. This has come down in the past month compared to two months or three months before, say, $1.06-$1.07. The peg has moved a little bit during specific time frames. We've seen instances of a few large trades executed at significantly elevated prices. These are particular instances that warranted double-clicking on.

![](https://i.imgur.com/9ehvrEc.png)

- This one, in particular, is interesting. It turns out there is a particular transaction; the short answer is arbitrage. Still, a specific transaction is part of the series of transactions that exchanged many trades in the process. It exchanged 90 million DAI on Curve for USDC and then basically trading back that DAI. The top-level in this trade was a rather large flash loan and swap, which is basically a pure arbitrage opportunity that the trader was seemingly trying to take advantage of. Ultimately, that's something to double click on further if people are curious, but the long and short of it is that's what these blips are.

![](https://i.imgur.com/eKbfg4K.png)

- If we look, however, at the last 14 days or so. You'll see that this price has been fairly consistent, around $1.007. The other thing to note is that the volumes on that have been slightly higher in the last couple of weeks relative to a month ago.

![](https://i.imgur.com/5pStSzU.png)

- There's been some amount of uptick in trading activity there. It's also a bit more distributed onto multiple different sources than prior or is a bit more dominated by Uniswap and then the secondary, DYDX.

![](https://i.imgur.com/byx6Gj9.png)

- What you see here is still the lion's share. Obviously, it's Uniswap, but we also see this decent chunk full of SushiSwap. DYDX seemed like a slightly diminished proportion of the trades. Then, Coinbase sees a very slight uptick even though it's a small amount overall for the DAI-ETH trades. The USDC graph echoes these price movements but with the trading dominance occurring on a curve.

![](https://i.imgur.com/DVOW3AQ.png)

- If we look at some of these vaults, we see that for ETH, the largest liquidation wall right now is around 418 dollars with roughly 120 million DAI. If you see here, the largest single chunk of the ETH portfolio is 103 million, and that is roughly around 200 percent collateralized. Therefore, you see the most extensive ETH vaults; 56 million are the largest at 320 percent collateralized, 18 million at 380 percent collateralized. At least for this, the 70 million chunk at the top of the sheet (references both the 18 and 56 million vaults) is reasonably well collateralized. The highest risk scenario in the top few is this 17 million vault with 200 percent collateralization and at least two 13 and 11 million, respectively, at 200 percent collateralization. Beyond that, it's a bit of a long tail aggregation of vaults adding up to this column here (signals big middle column in the first chart).

![](https://i.imgur.com/cK5UwP1.png)

- For ETH-B, now we're actually seeing some traction in this. 2.6 million is the largest ETH-B vault with collateralization around 190 percent. It makes sense that we see lower collateralization ratios in this bucket. Still, there's kind of a curvature, which is interesting, and then there is a slight wall at around 380 dollars per ETH. That's a projected liquidation of 7.7 million. Nothing too crazy there, but there is clearly an appetite for these lower collateralization ratios.

![](https://i.imgur.com/4pqNnAn.png)

- Additionally, if we look here, you can see that there's a projected liquidation amount with a price of 1.00 or slightly above a dollar. The nuance of that is if we look at these vaults as has been discussed prior, you have a lot of vaults that are basically at a distribution of 100.1-100.8 percent collateralized. Some of these most enormous chunks, you can see from the table basically that even the top five to seven vaults there are added up, that's roughly 200 million DAI with 100.1 or 100.2 percent collateralized. And then, that continues throughout the smaller vaults. This is a situation that everyone is very clearly aware of. The total amount of DAI that is below 101 percent collateralization is roughly 400 million at this point. That is a continually growing situation, as was discussed over the last couple of months. I would say that the due date for crossing 100 percent collateralization is ever rapidly approaching.

![](https://i.imgur.com/jhGmkDW.png)

- As for WBTC, we see a chunk liquidation of 78 million at a 14.2 thousand price. This is just something to keep an eye on, especially as markets were a little more volatile in the last week or two. If there is a significant downswing, you could see large amounts of liquidations all at once. Part of the risk scenario is that there has been some rebalancing of collateralizations as the nominal prices of assets have risen. Obviously, people like to book profits, etc. There's been some perceived stability in those prices, so I think people have felt a little more comfortable adjusting accordingly. If it drops back down, then that's your massive liquidation risk scenario. Those nominal amounts of liquidations are huge in that the ratio of issuance versus market liquidity is probably very high right now.

![](https://i.imgur.com/mIXXn7X.png)

- For YFI vaults, this is dominated by one large vault. Most people are aware that's 10.2 million that's roughly 220 percent collateralized. That's your projected liquidation wall of 11.6 million at a price of approximately 19.9 thousand. That's something that could get liquidated very soon.

#### Questions and Comments

- Frank Cruz: Hey, Vishesh, I guess we have an idea who these large votes are for the WBTC-A and the YFI. In other words, I would imagine there are large institutions, VCs, hedge funds, or crypto Twitter influencers that can load up, and it wouldn't matter if gas prices are 1000?
    - Vishesh: In terms of gas prices, we know that some of the usages of WBTC, for example, are managed positions through protocols, large companies, DeFi company issuance, etc. However, if the question is, would a potential crash event creating a bottleneck on gas cause issues with liquidations in WBTC or ETH? The answer is; it's possible. Especially if you consider the state of the market right now and consider that multiple different collateral portfolios have seen tremendous amounts of issuance in the last 90 days or so. You can also consider that gas prices are pretty high in nominal terms. If you adjust for inflated ETH price, those gas prices are lower, but that's been a discussion that's been had on crypto Twitter as well. The end result is in a crash scenario. If there is a crunch on gas, then yes, there is the risk of running into issues. Also, individual positions being managed positions doesn't necessarily mitigate that entire issue. For example, we saw for ETH, though a few large positions fall into some of these buckets. Actually, some of those larger positions are the better-collateralized positions. So you can see there's a mix. Some large positions are at 200 percent collateralization, but others are significantly higher. There would be a significant amount of  DAI liquidated if there was a market crash. I think if that occurred, there would be a crunch on gas prices, and yes, you might run into some issues. So, that's something to consider.
    - Frank Cruz: Part of that question was if do you have confidence yourself, and this is your opinion of course, and no one else's, do you have faith that some of these large holders can find the courage and deposit more collateral?
    - Vishesh: I do not know these large owners, and so I couldn't say.
    - Frank Cruz: Got it, okay, cool. I guess my thinking is if Mnuchin wakes up on the wrong side of the bed tomorrow morning and decides to do some funky stuff, I think you said we could have a flash crash. I'm just hoping that these guys can man-up and deposit some collateral.
- Gregory DiPrisco: I would just keep in mind that we have the litter box set to 15 million DAI. Even if one of those large vaults were liquidated, the maximum amount of DAI that could get bid in that period is 15 million.
    - LongForWisdom: That would be an exciting 24 hours.
- Vishesh: The realistic outcome you would expect long term is the same amount of sales you have to deal with. However, the initial impact is probably that if there was such a mass liquidation event, you'd basically just have a bunch of stalled liquidations.

### SamM

#### PSM Implementation Update

[1:12:19](https://youtu.be/g9qiFqShqNQ?t=4339)

- Since last week, Primoz submitted his risk analysis as expected. On the smart contract audit front, Quantstamp has agreed to give us an express audit with a target end date of the 18th or the 19th. Hopefully, it will be the 18th. If all goes according to plan there, we should be good to push things out next week. Primoz also set up some risk parameter polls. Currently winning is the one with a 500 million debt ceiling for USDC only to start, and we add in some of the others later on in 2021. These polls don't close until tomorrow, so people can change their votes now. USDC has at least 50% of the weight in PSM deployments. Nonetheless, the spell is ready, the contracts are on Kovan, and we should be good to launch next week as expected. Any questions?

- LongForWisdom: If 500 million or 750 million debt ceiling were chosen, we might consider reducing the debt ceiling on other stablecoin vaults?
    - SamM: Yes, Primoz put that up on contingent on over 500 million winnings. We would zero out the debt ceilings of the current stablecoin low collateralization ratio vaults. Makes sense to me. The PSM is strictly better.
    - LongForWisdom: Cool, alright, any other questions?
- Sam: One thing I forgot to add. When it gets deployed, an additional module called the LARP module will move the tin parameter from 1% to .1% over a week so we can maximize fee collection as arbitragers pick that up as it goes down.
- Gregory: How exactly does that work, by the way?
    - Sam: When the executive spell is crafted for next week, it will launch the LARP module, which anybody can call. Depending on how far it is from the launch date, it will set the tin parameter lower and lower until we hit our target value of .1%.
    - Gregory: Got it, thanks.
- LongForWisdom: I'm pretty sure we'd see market makers keep that relatively up to date so they would pay fewer fees using the PSM.
    - Sam: Whoever is arbitraging on this will want to code that in as they're arbitraging. The LARP is going through the audit as well.
- LongForWisdom: Alright, one question that Greg brought up earlier was that we could potentially consider delegating the ability to do oracle whitelisting to the Oracle Team. I am not sure if we have time for a full discussion on that now, but if anyone wants to create a forum, I think Nik and I discussed it a few months ago at one point. If Nik is still here and has any thoughts, maybe he could briefly share them.
    - Nkunkel: I reserve judgment until the future.
- LongForWisdom: Fair enough! Cool, we'll leave it there then. If anyone wants to continue discussions, feel free to do it here. Thank you, everyone, for coming!

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

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
