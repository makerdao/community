# Episode 136: April 8, 2021

## Agenda

- [00:00](https://youtu.be/AfzhqSu7MwM): Introduction
- [04:25](https://youtu.be/AfzhqSu7MwM?t=265): Forum at a Glance
- [07:02](https://youtu.be/AfzhqSu7MwM?t=418): Smart Contracts Team Update
- [14:55](https://youtu.be/AfzhqSu7MwM?t=895): Oracles Team Update
- [19:10](https://youtu.be/AfzhqSu7MwM?t=1151): Risk Team Update
- [24:14](https://youtu.be/AfzhqSu7MwM?t=1454): Real World Finance Update
- [25:40](https://youtu.be/AfzhqSu7MwM?t=1540): RWA-001 Update
- [27:03](https://youtu.be/AfzhqSu7MwM?t=1623): Operational Support Update
- [34:54](https://youtu.be/AfzhqSu7MwM?t=2094): MIPs Update
- [39:15](https://youtu.be/AfzhqSu7MwM?t=2362): February MIPs Submission Review
- [41:34](https://youtu.be/AfzhqSu7MwM?t=2494): Recent Government Issues Discussion with LongForWisdom
- [1:04:07](https://youtu.be/AfzhqSu7MwM?t=3849): NewSilver Onboarding Presentation with Sebastien Derivaux
- [01:22:45](https://youtu.be/AfzhqSu7MwM?t=4963): Open Discussion

## Video

<https://youtu.be/AfzhqSu7MwM>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/AfzhqSu7MwM)

- Hello everyone! Welcome to the MakerDAO Governance and Risk meeting #136 taking place on Thursday, April 8th at 17:00 UTC. My name is LongForWisdom. I'm the Governance facilitator for MakerDAO.
- [Last week's executive](https://vote.makerdao.com/executive/increase-debt-ceilings-provide-april-core-unit-budgets?network=mainnet#proposal-detail) is yet to pass, and it is tied to the topic I'll be bringing up later. Regarding polls this week, we had the [surplus buffer poll](https://vote.makerdao.com/polling/QmRmXKoJ?network=mainnet#poll-detail) to increase the system surplus buffer, which passed for the 25 burn option. This will move to an executive once the buffer is nearly complete. We will soon see action on that in an executive. We had a poll for [appointing DeFi Saver as an Oracle Light Feed](https://vote.makerdao.com/polling/Qmby2Ur5?network=mainnet#poll-detail), which passed. We are not quite ready yet to put this into an executive. We need to work on a DeFi Saver setup. We had a poll [confirming the Link-A Liquidations 2.0 Parameters](https://vote.makerdao.com/polling/QmPtNp9a?network=mainnet#poll-detail), which also passed. This may not make it into the executive this week, neither. On the bright side, this week's executive should include onboarding NewSilver, which is the first Centrifuge asset that we've considered onboarding.
- The Governance Core Unit continued working with onboarding Payton and Elihu into the various things a Governance Facilitator does. We have been working with SourceCred to cover the grants and the payouts considering that Gov Alpha is taking from that instead of the Foundation's grants program. We spend a lot of time at the end of last week on the Liquidations 2.0 parameter documentation. We managed to mostly finish it. Suppose you are confused as to what any of the parameters in Liquidations 2.0 mean. In that case, you can take a look at the description on the Community Portal. It will be linked in polls and executives. Work continues on the MIP's portal to standardize its content and to tidy things up.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Forum at a Glance

#### Elihu

[04:25](https://youtu.be/AfzhqSu7MwM?t=265)

[Forum at a Glance - Forum Thread](https://forum.makerdao.com/t/forum-at-a-glance-april-2-8/7376)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Three Point Summary

- The protocol reached a new ATH of Total Value Locked this week: $8.2B
- DAI supply rose to $3.17B
- The System Surplus is now at $22M

##### ICYMI - Announcements

- Following the [call](https://forum.makerdao.com/t/framing-a-framework-for-mkr-compensation-wednesday-march-31-17-00-utc/7200) last week, members of the MKR Compensation Working Group will soon be selected. Apply here:
    - [Community Member Holding no/little MKR](https://forum.makerdao.com/t/wanted-framework-for-mkr-compensation-working-group-community-member-holding-no-little-mkr-representative/7268)
    - [Large MKR Holder Representative](https://forum.makerdao.com/t/wanted-framework-for-mkr-compensation-working-group-large-mkr-holder-representative/7267)
    - [3rd Party Representative](https://forum.makerdao.com/t/wanted-framework-for-mkr-compensation-working-group-3rd-party-representative/7266)
    - [Proposed Core Units Representative](https://forum.makerdao.com/t/wanted-framework-for-mkr-compensation-working-group-proposed-core-units-representative/7265)
    - [Current Core Units Representative](https://forum.makerdao.com/t/wanted-framework-for-mkr-compensation-working-group-current-core-units-representative/7264)

##### Discussions

- [Direct deposit DAI module (D3M)](https://forum.makerdao.com/t/discussion-direct-deposit-dai-module-d3m/7357)
    - @ethwarrior and the Aave team bring forward a discussion on utilizing the D3M (as per MIP50) on Aave to expand DAI’s Layer 2 reach and provide the DAO with a new revenue stream.
- [Maker and the (de)central bank meme 3](https://forum.makerdao.com/t/discussion-maker-and-the-de-central-bank-meme/7327)
    - @prose11 talks about Maker the brand and a potential DAO2DAO future.
- [Should We Raise the Minimum MKR Needed to Call End.Cage for Emergency Shutdown?](https://forum.makerdao.com/t/informal-poll-should-we-raise-the-minimum-mkr-needed-to-call-end-cage-for-emergency-shutdown/7277)
    - @ElProgreso discusses raising the MKR requirement to initiate an Emergency Shutdown.
- [Discord chat](https://forum.makerdao.com/t/informal-poll-discord-chat/7252)
    - @iammeeoh proposes launching a MakerDAO Discord channel.

### Smart Contracts Team Update

#### Christopher Mooney

[07:02](https://youtu.be/AfzhqSu7MwM?t=418)

- We have not done any work on the collateral onboarding priority sheet. We sent Naz to review all the items on the sheet. He added entries that we will sort and prioritize. Also, there were no collateral assessments this week, but we do have PAX-G on Kovan. Please review and use it.
- We sent out NS2-DRP, which was the MIP22 collateral that we were about to push on to Kovan. We will be updating the end contract as part of Liquidations 2.0. There is a potential change to `vow` that will be coming next year. Both of them need to be changed by the manager. We also changed the name of the token from NS2-DRP to RWA002.
- We deployed all of the MIP22 Centrifuge NewSilver contracts to the main net yesterday with the token ID and everything else we need. Now the spell that will execute that and put it on the protocol is being crafted; that's another significant milestone. Expect a release on Friday.
- We optimized `MegaPoker` and there's some audit checking and PRs for LP token Oracle contracts. I don't know if the complete audit is complete.
- Regarding Liquidations 2.0, we slid dates out by one more week. The main net release will now be next Friday. We want to make sure that things are safe before deployment. The spell itself looks good, and hopefully, we will deploy it on to Kovan today.
- Last week, we completed the ESM and Ilk registry updates. The spell is technically complete. It's in review, as well as the Dss interfaces.
- We're also working on the MIP45 Kovan description. We're waiting on PWC to review the changes that we're making to the MIP.
- We're going to construct an audit debrief to get the audits and discuss with the community concerning actions we took, did not take, and why things will land in the forums at some point.
- We're waiting on [security.makerdao](https://security.makerdao.com/) for the audit reports to be posted. There's PR of it with a couple of other reports, and I think we're waiting to hear from PWC before posting their reports. They are a big auditing firm. It is not a typical action for PWC to publicly release audits. We're trying to bring them into the 21st century, and they are trying to accommodate us.
- There are no updates on Optimism L2 this week. There are an exciting forum post and announcement on [MIP50](https://forum.makerdao.com/t/mip50-direct-deposit-module/7356) d3m. Sam will briefly speak about it.
    - Sam: Yesterday, I introduced MIP50, which is the direct deposit module. So this allows the Maker to directly inject Dai liquidity into secondary markets. It's a cool addition to act as a decentralized bank and provide liquidity to secondary markets. It's a shift, and people will vote for their opinion, but I think it's an interesting proposal from Aave.
- Christopher: There is background work happening in the community concerning the OKRs and that Derek has been working on.
    - BrianMcMichael: There have been many ancillary contracts that we noticed when preparing the spell for MIP45, which need to be updated. It's cans of worms that come one after another.
    - Christopher: We just need to be safe.

### Oracle Team Update

#### Nik Kunkel

[14:55](https://youtu.be/AfzhqSu7MwM?t=895)

- [The DeFi Saver Light Feed polling vote](https://vote.makerdao.com/polling/Qmby2Ur5?network=mainnet#poll-detail) passed. It's not going to go into this Friday's executive because we need to set up the feed infrastructure on their end. It should go into the executive next week.
- I want to thank the Smart Contracts team, especially Kurt, for helping us get the finalized changes and responses to the ABDK audit for the UniSwap LP Oracle. ABDK uses that to compile a finalized publishable report. Hopefully, we can get that out soon. At that point, we would also redeploy the existing UniSwap LP Oracles to conform to the changes that were made. Most of which were styling-based changes, but there were also some significant gas improvements. We made 12% gains on gas relative to what we have deployed on-chain. 94% of the remaining gas that's 'left to optimize' is storage operations. This is very close to the edge in terms of gas optimizations. Regarding bank for your buck, we won't need to optimize it any further, especially with V3 around the corner.
- The patched version of SSB is running well in staging. We have considerably pushed the state size of that, and it's been stable. We are releasing that into production within the next couple of weeks. Right now, we've been having to frequently migrate the protection system every few months due to the state size issue. The SSB is going to ultimately relieve us of that issue.
    - LongForWisdom: Will the Uniswap LP oracles be deployed following the audit updates from ABDK?
    - Nik: Yes.

### Risk Team Update

#### Primoz Kordez

[19:10](https://youtu.be/AfzhqSu7MwM?t=1151)

- After spending time on Liquidations 2.0 parameters, we're again becoming more focused on onboarding and evaluating new collaterals. The Smart Contracts team has solved the issue concerning PAX-G transfer fees. We have a task to evaluate our past risk assessment, which was done in October and have this asset onboarded within the upcoming weeks. We also updated the [collateral onboarding sheet](https://docs.google.com/spreadsheets/d/1IX9e2fyfz7djtDMKn5gMyGsyFxHoY75GncMbAjnSXrM/edit#gid=0) to see which collaterals are interesting or have high benefits to add next. It depends on the other teams and how much bandwidth they have to again begin onboarding more collaterals. We need to propose Liquidations 2.0 parameters for other assets. After completing LINK, we are proceeding with YFI and then delivering them for ETH, renBTC, and smaller assets. I may propose quicker implementations for liquidations 2.0 parameters implemented for Uni LPs because we recently proposed higher DC on Uni LPs. The aggregate DC for Uni LPs is now over 200 million. Liquidations 2.0 is really needed for Uni LPs as soon as possible.
- This brings me to the next topic, the [latest proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-7-april-2021/7358l). It's now called Parameters Changes Proposal. This group used to manage rates proposed in a separate post to mandate proposing rate changes and changes related to DCs and DAI savings rates. This week we proposed changes to both rates and DCs. This, in my opinion, will make governance much more agile, especially when it comes to reacting to changes needed to DCs and for the proposal itself. We didn’t propose any rate change for the two largest two. That's the first time in four months, despite debt still growing. We will feel a bit more relaxed once liquidations 2.0 is implemented. Risk-wise, it’s looking much better, and because we finally saw some unwinding on the PSM and USDC stablecoin vault, we want to keep the momentum going. We also [proposed changes to both rates and DCs for other smaller vaults](https://vote.makerdao.com/executive/increase-debt-ceilings-modify-risk-parameters?network=mainnet#proposal-detail). This is related to either better or worse collateralization metrics for vaults as well as liquidity metrics of underlying assets. This liquidity metric is becoming a continuously more important factor now, with liquidations 2.0 on the field.
- We finally proposed a few DC increases for Uni LPs, perhaps a bit more conservative than the model suggested. This is because, as a set, we may need a few more weeks to implement Liquidations 2.0 for Uni LPs. I'm more optimistic on faster migration of LP liquidity from V2 to V3, making Maker Uni vaults unwind faster than expected. We will lose a lot of this demand in a short period if this happens faster than projected. There's not much to do until we have Uniswap V3 vaults supported at Maker.
- That’s everything from my side. Next week we'll spend more time on various forum topics. Also, a post required input from our side regarding [KAVA DAI implementation](https://governance.aave.com/t/the-maker-direct-deposit-dai-module-d3m/3514). There's also a post about [increasing the Maker threshold for an emergency shutdown](https://forum.makerdao.com/t/informal-poll-should-we-raise-the-minimum-mkr-needed-to-call-end-cage-for-emergency-shutdown/7277). We're still evaluating what the proper recommendation is, so stay tuned for that.

### Real-World Finance Team Update

#### Sébastien Derivaux

[24:14](https://youtu.be/AfzhqSu7MwM?t=1454)

- We released the [financial report for March](https://forum.makerdao.com/t/financial-report-2021-03/7286/8).
- This week's big topic is onboarding NewSilver, but I will detail that more in a later segment. Most of the team worked on this topic for the majority of the week.
- We are still making progress with other asset originators. We have worked on an onboarding schedule for other assets. We need to speak with the rest of them to see if we have a realistic schedule before presenting it to the Community. This should be completed by next week.

### Real World Assets - 001 Update

#### Matthew Rabinowitz

[25:40](https://youtu.be/AfzhqSu7MwM?t=1540)

- The long-awaited documentation for putting together the trust structure is imminently about to be released. We had a speed bump, which has caused so many delays. I'll be posting the effect equivalent of a table of contents and begin populating with the Core the material of all the legal structures involved and work our way forward from diligence to documentation. We will be finalizing the trust agreement whenever that is finalized. It is not yet finalized but is a work-in-progress. It's approaching a stage where the Community needs to get involved and have time to digest its diligence. I can explain the speed bump during the call's unrecorded section. The documents will be coming shortly.

### Operational Support Update

#### Amy Jung

[27:03](https://youtu.be/AfzhqSu7MwM?t=1623)

[Operational Support Weekly Update: March 22- 24, 2021](https://forum.makerdao.com/t/operational-support-weekly-update-march-22-24-2021/7192)

- I'm excited to finally announce that Juan and I have been a little bit quiet on developing our Core Unit, Operational Support - because we have been working on a merger with @Wouter's Core Unit. This new Core Unit is called [Sustainable Ecosystem Scaling](https://forum.makerdao.com/t/mip41c4-facilitator-onboarding-sustainable-ecosystem-scaling-core-unit/7370). Juan will go into more details. Still, I will update what this means for Operational Support.
- First of all, it's a big level-up from where we left off. It will retain a lot of our core mandate, but it will give more structure and strategy. The biggest change is that SES will continue to incubate a selected limited number of Core Units because it functions as an incubator. Whereas we have been covering all of the Core Units, this Core Unit will not cover the DAO-wide Operational support in its traditional sense; Things like DAO resources, accounting, reporting, and so on.
- We outline a little more detail into many of the projects we have been working on as Operational Support. Many will be moving into the merger, but we will continue to support them in the next months.
- Juan will be onboarding as a Facilitator into SES. @Wouter will be the Core Unit team lead for that group. As for me, it's cool to come full circle. I'm handing my Facilitator hat and going back to where I was two years ago, which is as a contributor. I will be joining SES as a contributor. Meanwhile, we will finish a lot of the projects at Operational Support.

#### Sustainable Ecosystem Scaling

##### Juan Guillén

[29:37](https://youtu.be/AfzhqSu7MwM?t=1777)

![Sustainable Ecosystem Scaling](https://i.imgur.com/TGhBdll.png)

- We will do a specialized call for this. Therefore, I will be brief today. This Core Unit is aligned with our mandate. With Wouter and the whole team that we are onboarding, we will reach a whole new level.
- Dai has already established itself as a decentralized stable coin. Now we have the next big challenge: how do we grow and scale in a decentralized ecosystem, which is mainly uncharted territory as of now. Suppose we have a Core Unit that is mainly focused on research and on very hands-on applications. In that case, we can have this circle of continuous improvement. Having the Governance and the Forum be both the input and the output, we can visualize and identify the problems and their risks to prioritize them. We will complete the circle and then find talent and incubate them. We want the sponsorship part because we believe it is important to get things going quickly. Finally, to complete the circle, we want to be axed on the advisory part. We want to have continuous improvement, self-accountability and auditing, transparency, and best practices. For us, that is very important. We want to do it for ourselves and set a standard for the other Core Units to follow. We also want to be the trusted third party if we were to need to do something like a dark spell. We would be able to manage that process and safeguard it.
- That is good for a very quick introduction. We have posted the [MIP's set](https://coreunit.makerdao.network/Core-Unit-Corner-f79281d7617b4a61b958c30d3ea768af?p=c4105e1746234a6e86dc4b19e9bb13f3) in the Forum and on Github, and we are waiting for your feedback. Please read it and let us know what you think. We also have an open [Discord channel](https://discord.com/invite/Gr3sDQZv6Y).
- We will do a Core Unit Launching Pod Session to have a more in-depth conversation about this. I'm excited to be part of this and to introduce the rest of the team.
	- Amy Jung: I'm going to include regularly scheduled updates. If you scroll down to our post, I just want to point out that there's a [Know-your-MIP #7 tomorrow for EuroDAI](https://forum.makerdao.com/t/know-your-mip-kym-07-declaration-of-intent-eurdai-friday-april-09th-13-00-utc/7362). There is a Core Unit Launch Pod Session coming up for Gov Comms. There are the recordings for the MKR Compensation Framework as well as the Community Call about grants. All recordings are up on Youtube as well. A few teams have gone into formal submission. Also, I would recommend checking out a [post by @Jacek](https://forum.makerdao.com/t/emerging-global-aml-kyc-framework-and-defi-and-maker/7104) from the DAO and the Maker Foundation regarding KYC-AML, legal and regulatory areas that are happening. [The BD-Growth Core Unit](https://forum.makerdao.com/t/mip39c2-sp4-growth-core-unit-gro-001/6715) wants to increase the communication with Maker. That post is a great way to encourage this conversation around what they have been working on and what you would like to see. I would like to give a shout-out to the RWF team for continuously completing their monthly reports.

### MIPs Update

#### Charles St.Louis

[34:54](https://youtu.be/AfzhqSu7MwM?t=2094)

![](https://i.imgur.com/lea8wsi.png)

![](https://i.imgur.com/4ISDSMH.png)

![](https://i.imgur.com/1RI1M1g.png)

![](https://i.imgur.com/7y6ZGma.png)

![](https://i.imgur.com/BZ8V7WO.png)

## Procedural

### MIPs Submission Review

#### LongForWisdom

[39:15](https://youtu.be/AfzhqSu7MwM?t=2362)

- I will confirm that all the proposals that move into inclusion polls next week will be grouped as core unit proposals to have one poll for three of them, facilitator, mandates, and budget parts.
- I double-checked the budget proposals for the Core Units submitted. I just want to remind authors to add required budget implementations such as payment addresses and expected date of payments for the contributors if everything passes because this is all public.
    - Seb: I thought about this earlier, but there is an issue here because maybe you lost your keys or whatever you want to change your address. It's becoming quite difficult because we have to do the whole MIP process over again.
    - LongForWisdom: For something like that, it's fine. We won't force people to go through the budget MIP again to change the address. It just needs to be posted publicly, saying we're changing from this address to that address, for this reason, then update the process over time.

## Other Presentations and Updates

### LongForWisdom

#### Recent Governance Issues

[41:34](https://youtu.be/AfzhqSu7MwM?t=2494)

- It's becoming more difficult now to get enough MKR to pass executive proposals. We've not thus far had any weeks where we've not passed it before that Friday. This next executive looks like we might hit that this week gave that it's Thursday, and we need 50K to pass. We're thinking of ways to mitigate this issue because there are security aspects with relationships. There are governance efficiency issues if we can't pass these things effectively.
- We've discussed some possibilities to resolve this. One option is to involve the staking rewards proposal to encourage people to leave MKR in the governance contracts. Another option is a form of delegation.
    - Brian: Dss Gov is the next big project that we're planning to tackle on the smart contract's end. It's coming, but there is no definitive time frame as of yet. Trying to get little things like `box` and `flash` knocked out for some quick wins. Nonetheless, we might need a shorter-term solution to get things done.
    - Kurt: Dss Gov envisioned a big monolithic update may be slow-moving to address these more urgent problems. I think Dss Gov is now a code word for the highest priority things, and how do we address them in a timeline that makes sense.
    - Sam: This can be deployed for both Dss Gov and the current chief because it uses the IOU token. It doesn't require Dss Gov. due to recent high revenues; we can offer pretty high APY to people locking MKR into the chief.
    LongForWisdom: It's worth mentioning that these will have to come from the surplus buffer through DAI, which would have to burn for funding.
    - Sam: Yeah, this would be redirecting the entire burner, but these are rates that are high enough to attract some of the MKR that's currently sitting in Aave, which is getting more and more dangerous; it's currently like at about 85% of that `hat` available for borrow. We can start chipping away at that with higher yields rather than offering 0%. If we were to redirect the entire burner, the APY would be 50% on a 10% lock up.
    - LongForWisdom: Just to clarify, we would not use the entire burner to fund. There have been discussions concerning the APYs, but Governance will decide the movement of funds. Chris can talk more about options like delegation.
    - Chris: I read some code way back when we were in Osaka; The idea is that you could use the voting proxy that we have, which has hot and cold wallets, to act as a delegate. Instead of locking into your own vote proxy, you will lock into a voting proxy that delegates the voting. Then it handles all of the primitives of dealing with the chief for voting the same way the current proxy does. Because it's a proxy, you can also take those IOU tokens and do something with them or make a proxy itself the thing that does something. This is the methodology that I was thinking of, but I don't know if you guys want to use Multi-sig or something like that as the delegate. There is a lot of design space here. Still, it is theoretically possible to bolt delegation on top of the existing voting system. Everything needs to be thought through.
- Chris: Suppose you're doing MKR rewards. In that case, you don't want to get trapped in a situation where many people show up to farm the rewards and then drop that MKR on a `hat` that passes that single executive. No one cares about MKR sitting there farming rewards because then we can never pass executive. We need to focus on the problem that we're solving here. It's like governance participation; We need people to participate every week, deciding whether the executive should go through.
    - Sam: With Gov rewards, it's like targeting an individual who is currently holding MKR in Aave because they are getting a good yield. they want to vote all for all things being equal, but APYs are too high. Those are the users I want to target.
    - Matthew: The danger is the 50K MKR sitting on the proposal back in December that hasn't been moved. That's currently where the `hat` is right now. If people just put MKR in the most recent `hat` and earn those rewards and just forget it, we may want the rewards only valid for the `hats` if the MKR is on the top 3 recent `hats. You don't want them to vote blindly. You also don't want it to sit out there and forget it.
    - Sam: To be clear, this Gov reward is for locked up MKR in chief. They don't have to vote to get this. I don't think we should require them to vote because this will not force people to vote. It's like a get the MKR out of Aave incentive.
    - Chris: If they show up and vote on that week's executive as they are getting in the chief but then walk away, we're locked out.
    - Sam: Maybe we could ramp it up gradually?
    - Chris: We can also have the delegation decay in the voting proxy so you can slowly decay someone's delegation.
    - Sam: We need to careful.
    - LongForWisdom: If we can't pass this week's executive, putting up another isn't going to help us. We have to pass it. If we don't, we will have to skip this week, which pushes back everything else. This is something we need to resolve.
    - Chris: We have Liquidations 2.0 going through right now. We may not pass much of anything else.
- Payton: There is fear around messing with the inherent incentive of the buyback and burn model. I don't know if that's a smart way to cap that or if it's us realizing that's going to be a risk we have to take. A large amount of criticism could be looped into that, taking tax advantage structure, making it nontax advantaged, potentially messing up the entire incentive structure for MKR holders.
    - Sam: It's a concern, but I don't want to mess around worrying about taxes when we have like existential threat here. We can come up with a better tax strategy later, but right now, we need to do something, maybe delegation rewards or Gov Rewards.
    - Sebastian: The main issue we have right now is that we cannot pass any executive as of today. We need to find a way to encourage people to vote.
- Chris: Going back to Sai, we had many executives that did not pass back in those days. Is this similar to the current situation where we cannot get people in?
    - LongForWisdom: There is no guarantee that this is a participation issue. For whatever reason, people did not like this executive. Your concern is unlikely because some of it has been signed off in terms of the Core Unit Budgets. The only possibly contentious ones are [increasing the PSM DC by 1 billion Dai](https://vote.makerdao.com/polling/QmUsKRJj?network=mainnet); it could be that people just really don't want that. We previously had a poll for that, which went well. It's hard to tell.
- Phill: Is there a way to reimburse gas costs?
    - Chris: There will be in the Hard Fork.
    - Kurt: There are ways you can do it right now; You have the record of transactions, and you know someone who mints Dai out the executives into a Merkle Claim Contractor has a third party sending Dai.
    - Phil Chang: I'm assuming that is the main deterrent.
- Sam: I think it's an Aave issue due to relatively more efficient allocations of capital.
    - Kurt: Voter apathy is a big problem, but it's difficult to measure why more people aren't voting.
    - nKunkel: The amount of MKR in Aave is not that much concerning relative to the outstanding supply of MKR. There is a ton of MKR out there that is (1) not voting and (2) not being used for farming yield through Aave. The focus is delegation. Some people have MKR but are not willing to delegate that MKR. If we can figure out why this is, we may not have to spend a lot of money from surplus.
    - Matthew: We should think of the shortest critical path to help break through the log jam. We need something where a `hat` can only be the governing proposal if it's less than 120 days old.
    - Sam: It's at 50k because Aave is at 43K, which is blocking people who borrow and then nuking the protocol.
    - Seb: I think they can vote on December 1st and the new one at the same time, right?
    - Sam: Maybe they can't vote.
    - Brian: We have to address that investors don't want to work for their money but instead want money to work for them. A lot of investors buy tokens to be burnt and collect the gains from that long-term solution. They are automating as much as possible so that we don't have to rely much on that, but in the short term, I would love to delegate and avoid transactions every week. It's a lot of overhead to keep track of everything.
    - Matthew: To address your point, you outlined about nuking the protocol. In parallel to any suggestion of changing the structure of the `hat,` it's a question of what will be posted in the forum once we get consensus. However, raising the emergency shutdown from 50K to something more material is in line.

### Sebastien Derivaux

#### NewSilver Onboarding

[1:04:07](https://youtu.be/AfzhqSu7MwM?t=3849)

![](https://i.imgur.com/Qh4u8bp.png)

![](https://i.imgur.com/cpP4bHZ.png)

![](https://i.imgur.com/64GXsVx.png)

![](https://i.imgur.com/cvKMAru.png)

![](https://i.imgur.com/XnY0RvE.png)

![](https://i.imgur.com/GGIL6UY.png)

![](https://i.imgur.com/UdO0a04.png)

![](https://i.imgur.com/AKkRD2f.png)

![](https://i.imgur.com/BKDyXeu.png)

![](https://i.imgur.com/H2UK5ZX.png)

![](https://i.imgur.com/Y34dVV4.png)

#### Discussion

[01:22:45](https://youtu.be/AfzhqSu7MwM?t=4963)

- Juan: There is a lot to unpack, and I would like to ask a hundred questions about each slide. Maybe we should schedule a different call. I don't know if it's interesting for the community to call specifically for this, but I think it would be useful.
    - Seb: Yes, sure, that's something we can do.
    - Payton: We don't have recourse on the loan script? If they go bad or bankrupt by force rather than voluntarily. We just have to eat the loss, right?
    - Seb: What loan are you speaking of? The underlying one? The one NewSilver is making to the borrowers?
    - Payton: It's actually our vault that I'm speaking of. If NewSilver were to go completely under, then we don't have any real collateral, correct?
    - Seb: That's not quite correct because we still have the drop tokens. If we are not repaying, that means that my investment is not replaced. It's just 100 Dai, which I had an issue with within KYC from a legal company. I didn't add the cash to invest more with my public account.
- Kirill: Hi everyone, this is Kirill from NewSilver. I apologize for being late. I want to answer Payton’s question. Let's say NewSilver goes bankrupt. The collateral is assigned to the SPD, which is bankruptcy remote. It will have an independent director. The vault is still collateralized by the loans, which will never go to zero because this is U.S.-based real estate. The chance of it going to zero would probably mean there's a nuclear war going on or something crazy like that. There is a chance that the borrower could default on the loan. In that case, have various mechanisms to collect. Toward the end of the collection, which is only about 5% or so of all of the loans that default, we could go to foreclosure, which means a delayed collection. But we still collect, and it does not go to zero.
    - Seb: Yes, and inside the SPV, the operating agreement says that as soon as the SPV gets some money from the loans, it is obliged to put it in the Uni pool, a smart contract. Even if there are no contractual obligations, the smart contract will do what the smart contract will do.
    - Payton: That makes sense. It's the practical function in that we need to mark it down because all of these legal processes could take a while to get paid back. We write it as a total loss, and then whatever collateral we're able to scrape back gets added back into the buffer.
    - Seb: Yes, exactly.
    - Payton: Got it, thank you, that was very helpful.
- Seb: I looked at the SPV that was used during subprime. The level of safety of this SPV is quite similar to the real estate mortgage-backed securities during the crisis. And during the crisis, the loss on subprime was less than 1%. On the non-subprime, it was a loss of 2%. Even if homes in the U.S. decreased by 25%, we might not lose anything.
    - Nik: The default assumption is 50% recovery in a worst-case scenario. Our collateral ratio will cover four of those, which is 200% losses.
    - Seb: We would need the whole market to collapse, but we have a protection of 25% or something like that. The other case that can happen is that one or two borrowers will default, which will happen. It hasn't happened for NewSilver until now. I am on the risk side, so I will state that it will happen at some point. If that does happen, we will not care because it's way above the buffer we have in this pool. We can wait for four borrowers to default before having to care.
    - LongForWisdom: Thank you very much, Seb. I think we're coming to the end of the meeting. As Juan said, maybe we should organize a separate meeting to cover this in more detail for those that are interested.
- Lucas: We plan a community call focused on Centrifuge that we hope to discuss in more detail. I will post it on the forum. Seb is attending as well. That will a good place to ask questions.
- Juan: Tomorrow, we have the EuroDai with Tim Snoopy and Seb. For anyone interested, it is at 1:00PM UTC. It's the KYM section #6. Come join us.
- LongForWisdom: Thanks, everyone. Goodbye.

#### Links from Chat

- [Parameter Changes Proposal](https://forum.makerdao.com/t/parameter-changes-proposal-ppg-omc-001-7-april-2021/7358)
- [Ops Support Weekly Update](https://forum.makerdao.com/t/operational-support-weekly-update-april-5-8-2021/7381)
- [MIP51 Monthly Gov Cycle](https://forum.makerdao.com/t/mip51-monthly-governance-cycle/7366)
- [Safesnap](https://blog.gnosis.pm/introducing-safesnap-the-first-in-a-decentralized-governance-tool-suite-for-the-gnosis-safe-ea67eb95c34f)
- [MKR Balances](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2#balances)
- [MKR Token Holder Chart](https://etherscan.io/token/tokenholderchart/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2)

## Common Abbreviated Terms

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RWA`: Real-World Asset

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Gala Guillen produced this summary.
- Sai Teja produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
