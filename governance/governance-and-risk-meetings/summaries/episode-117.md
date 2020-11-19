# Episode 117: November 05, 2020

## Agenda

- [00:00](https://youtu.be/QMamu42apgo): Introduction
- [01:51](https://youtu.be/QMamu42apgo?t=111): Governance at a Glance
- [03:56](https://youtu.be/QMamu42apgo?t=236): Smart Contracts Team Update
- [07:38](https://youtu.be/QMamu42apgo?t=458): Risk Team Update
- [11:48](https://youtu.be/QMamu42apgo?t=708): Community Development + Operational Support Update
- [13:19](https://youtu.be/QMamu42apgo?t=799): MIPs Update
- [26:00](https://youtu.be/QMamu42apgo?t=1561): Collateral Calls Update
- [27:54](https://youtu.be/QMamu42apgo?t=1674): November MIPs Submission Review
- [45:55](https://youtu.be/QMamu42apgo?t=2755): State of the Peg with Vishesh Choudry
- [1:02:41](https://youtu.be/QMamu42apgo?t=3761): Open Discussion

## Video

<https://youtu.be/QMamu42apgo>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/QMamu42apgo)

- Hello everyone, and welcome to the MakerDAO Scientific Governance and Risk Meeting number 117, taking place on Thursday, November 5th, at 16:00 UTC. My name is LongForWisdom; I'm the governance facilitator for MakerDAO. I am joined by many people from Maker. However, it's slightly less than usual due to the impact of daylight savings time despite my reminders over the last few meetings. Hopefully, they'll drift in shortly. All right, so we've got a shorter agenda than usual. This week, we don't have any presentations or specific segments, but there are a couple of polls this week. We have a couple of things to discuss, and so we'll go over those. Just a reminder that if you have something to say or you have comments on what's being said, please interrupt; it's honestly fine. We'd love to hear from you. If it becomes a problem, then someone will let you know, but please err on the side of action.
- I'm going to do the MIPs formal submission review for November. I have the regular segment from Vishesh for the state of the peg. Then we're going to spend some time discussing stablecoins again and potentially the flash loans stuff that happened the other week. Let's remind people about time zones. I'll go over the story once again; this meeting is set in UTC time, now at 16:00 UTC, so be aware that the meeting time may vary when daylight saving times change. Cool, all right, I'll get started with governance updates, then I'm just going to go through governance at a glance.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[01:51](https://youtu.be/QMamu42apgo?t=111)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)

If you have the time to read over and vote in active threads, that would be much appreciated.

- We've had several active discussions this week. Possibly the most active one was the thread I posted about reacting to the October 23rd executive. I highlighted some of the issues that I thought were created by the flash loan incident and opened the discussion.
- The change to increase the GSM pause delay passed, and it's now been increased to 72 hours, which will help counteract the risk from flash loans. I think that pretty much covers governance updates for the week so let's do let's get to the other domains and other weekly updates.

##### Discussions

- [Reacting to the October 23rd Executive](https://forum.makerdao.com/t/reacting-to-the-october-23rd-executive/4961)
    - LongForWisdom highlights the issues created by the flash loan on October 23rd and opens the discussion to responses. So far, most responders favor taking no action.
    - LongForWisdom: So far, most people seem to favor us taking no action, which is fine,. Unless we hear otherwise from several other people, we'll let the matter drop although, of course, we may have time to discuss it more in this meeting if people want to.
- [Governance - forget about whales](https://forum.makerdao.com/t/governance-forget-about-whales/4995)
    - Planet X creates a write-up discussing some of the issues we're facing in governance and suggests some reasons that larger MKR Holders aren't voting.
    - We had a cool post from Planet X, where he discusses some of the issues we're facing in governance as well as low participation. He suggests some of the reasons that larger Maker holders aren't voting and kind of summarize some nice takeaways, which I thought were good. This gathered some discussion, which was generally favorable. I don't believe Planet X is here, but that was a good post so thank you to him for creating it.
- [Discussion: Voting Incentives/Changes](https://forum.makerdao.com/t/discussion-voting-incentives-changes/3884/4)
    - FabianSchuessler revives a thread discussing changing the voting incentives, which triggers some further discussion on the issue.

##### Signal Requests

- [Should the Maker Community burn attacking borrowed MKR in the event of a governance attack leading to protocol redeployment?](https://forum.makerdao.com/t/signal-request-should-the-maker-community-burn-attacking-borrowed-mkr-in-the-event-of-a-governance-attack-leading-to-protocol-redeployment/4903)
    - LongForWisdom seeks to understand and communicate community sentiment around borrowed MKR and its use in governance attacks.

### Christopher Mooney

#### Smart Contracts Team Update

[03:56](https://youtu.be/QMamu42apgo?t=236)

- This one's going to be quick because of the randomization for the work that we did last week, but as LongForWisdom just mentioned, the weekly executive for the GSM delay going from 12 to 72 hours has passed. The authorizations were removed from the oracle freeze module now, so we have no way to freeze oracle feed outside of waiting the 72 hours. Also, a phrase best promoted by Greg is 'in the `box` we trust' meaning that we can no longer trigger the liquidation circuit breaker. We're relying pretty heavily on that the box will limit our exposure to auctions not performing well.
-  An update on the foundation, we've been trying to come together with a few plans with regards to flash loans. We worked at a couple different paths and then sort of compared the pros and cons between each one of those. I think we're gonna have a proposal for everybody soon so that we can get both of those modules back in place and maybe even reduce the GSM delay again. Still, our solution should prevent flash loans in governance.
- Nothing for monthly stuff, obviously. There were two collateral assessments, which are almost complete. Sam worked on those but we have to still run them through, like static analysis and other types of tests, and then we'll post those.
- There's nothing to Kovan, although GUSD is ready, so I'm gonna see if I can do GUSD to Kovan tomorrow. The DssGov executive is currently in review. This is what'll make spells a little bit easier to create. It'll also improve the documentation around collateral onboarding.
- There was a domain team review we did on [MIP 27](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625) for the debt ceiling instant access module. That's up for formal submission now. I covered everything else so, except this Friday's executive will have YFI and BAL and whatever other polling results have come out.
- For collateral assessments, we're still planning on uni, renBTC, and TBTC, and we have to review [MIP 14](https://forum.makerdao.com/t/mip14-protocol-dai-transfer-update/3844), [17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-adjustments/4312), and [25](https://forum.makerdao.com/t/mip25-flash-mint-module/4400).
- The auditor discussions for liquidations 2.0 have concluded. Now we're just comparing them at this point.

### Primoz Kordez

#### Risk Team Update

[07:38](https://youtu.be/QMamu42apgo?t=458)

- We're mostly dealing with testing the new model for evaluating risk parameters for all vault types. We ran a few tests. We already saw that MANA, for instance, currently doesn't have an appropriate debt ceiling, which is why we proposed a decrease last week. We should go into executive tomorrow. We'll see what kind of results we get for other assets, particularly those that were onboarded a while ago became less liquid in the last few months. BAT possibly also has a bit too high of a debt ceiling but, as I said, we need to run a few tests first.
- There are also pending collateral evaluations on uniLP, as I said, mostly trying to figure out how to value LP tokens and assign them volatility. That's mostly related to the impermanent loss actually affects price movements of LP tokens. That's in progress.
- The renBTC evaluation was also finalized by external analysts. They're proceeding with evaluating actual REN tokens as well. The renBTC report should be released soon, but there's one issue that we need to figure out. Which price or record do we want to use? We aren't sure if BTC-USD is the price oracle used for renBTC is actually a good price oracle. That's related to the potential new upcoming implementation of ongoing fees. This could affect the renBTC price on the market, which would mean our price oracle wouldn't fit well. There's actually no other price oracle except the one from Curve, which we obviously wouldn't want to use.
- Then, finally, the team that's working on the RWA side of risk is currently working on an asset evaluation model for NewSilver. The idea is to have an internal model for evaluating those loans used as collateral so we can have our own assessment of depth coverage, which in reality shouldn't hopefully be much different from the one provided by Centrifuge. And then for MIP 21, the off-chain asset-backed lender implementation, there's ongoing work for risk assessment of the whole implementation. More specifically, I think Sebastian is currently focusing on evaluating the credit tenant list space industry and assessing tenants that were proposed, which at the end account for a large amount of risk exposure in the proposed model. And that's pretty much it from our side.
- LongForWisdom: Cool, I think Chris maybe had a comment.
    - Chris: I was noticing that there's a price divergence between BTC and wBTC on the Ethereum network and that we're using the BTC oracles, and I don't know if that may factor into our calculation as well. Also, the same considerations we're applying to REN with their fee model, which I think is absolutely correct, we may need to also apply to wBTC because there's a not-insignificant number of wBTC to get swapped for renBTC to see them moved across the bridge. So yeah, those are two things to think about.
    - LongForWisdom: Cool, yeah, I think that's a valid point.

### Amy Jung

#### Community Development Team Update

[11:48](https://youtu.be/QMamu42apgo?t=708)

- There is a [poll in the forum](https://forum.makerdao.com/t/poll-included-cdip30-voices-of-makerdao-podcast-updates-and-deliverables/4999) to do a kind of podcast version of the governance updates. So if you guys have any feelings towards that, please put your comments in that post.
- We are launching our community development portal internally, as in facing this community tomorrow, so keep an eye for that. It's going to be really exciting. This is where you can go for educational resources around community development and programs that support how we can grow this community.
- We will have badges on the mainnet coming up in the next couple of weeks.
- We do have a super cool grantee, one of our grantees in Curadao, CuraDai, which uses digital currency backed by Dai. It is doing some really great things on the island of Curadao, [check that out](https://curadao.io/).

### Charles St. Louis

#### MIPs Update

[13:19](https://youtu.be/QMamu42apgo?t=799)

![](https://i.imgur.com/l2ftioN.png)

- So this month, we have quite a bit of proposals coming through, like last month. Mainly four MIPs and three sub proposals.

![](https://i.imgur.com/zeZTCNy.png)

- We have the [emergency voting system](https://forum.makerdao.com/t/mip5-emergency-voting-system/1907), which replaces MIP 5 created by Davidutro and Jtathmann.
- We have the [flash Mint Module](https://forum.makerdao.com/t/mip25-flash-mint-module/4400) by Sam, which was voted in last month via a declaration of intent, and this is the follow-up technical implementation for it.
- We have the [debt ceiling instant access module](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625) to modify the debt ceiling in a more automatic fashion.
- And, lastly, we have [MIP 28](https://forum.makerdao.com/t/mip28-operational-support-domain-definition/4627) the operational support domain definition.
- We have [calendar exceptions](https://forum.makerdao.com/t/mip4c2-sp6-calendar-exceptions/4546), specifically removing the December governance cycle due to the potentially less active community during that month. This helps make sure that no proposals get lack of participation due to people being away for the holiday season.
- We have [Sourcecred funding](https://forum.makerdao.com/t/mip13c3-sp6-sourcecred-funding/4545) to continue on that initiative, which is really awesome.
- Lastly, we have the [sub proposal to onboard Amy](https://forum.makerdao.com/t/mip28c7-sp1-subproposal-for-operational-support-domain-facilitator-onboarding/4628) as the operational support domain facilitator.

![](https://i.imgur.com/fTm3T3B.png)

![](https://i.imgur.com/5ysrxLB.png)

- Inclusion polls have a particular threshold of three thousand MKR. The 'yes' votes for them have to be greater than the 3000 MKR plus 'no' votes for the proposals to proceed to the next stage of the governance poll followed by the executive.
    - LongForWisdom: Cool, great, thanks Charles. We can spend a little more time talking about some of those proposals, but first, I'll just confirm that all those seven submissions will be moving to inclusion polls next week. I think they're all fine. So there's maybe a couple of things we could perhaps discuss in terms of those proposals. We can just potentially discuss calendar exceptions because, especially now that the DAO is expanding, there's more stuff going on. It makes it harder for everyone to keep up during holiday periods. While they're all worldwide holiday periods at all sorts of different times, the community does seem to be mainly focused on the US and EU, which share the Christmas and New Year holidays; Basically the winter holidays. Does anyone have any thoughts in favor of or against these, such as specifically not doing things on those dates or thinking that we should carry on doing things on those dates?
    - Charles: Right, even apart from the MIP itself, which talks about the December governance cycle, there's also the question of the weekly cycle, specifically at the end of December and, also at the end of November for Thanksgiving, which I think is on the 26th which falls on Thursday. I imagine that most of the US people will not be present for that meeting which makes the question of whether we should have it considering that that's most of the domain teams.
    - Chris: Yeah, I'm okay with not having it.
- LongForWisdom: Does anyone else have thoughts?
    - Frank Cruz: Does this mean that RWA is not coming into fruition before December 31st? Maybe I'm misunderstanding.
    - LongForWisdom: For Real-World Assets, I think it's unlikely they're going to be in this year, but I could be wrong.
    - Sébastien Derivaux: Yeah, we are working full time on onboarding those from the risk perspective, but there is also some smart contract work to do; it's the first time...
    - Chris Mooney: On the smart contract side, there's nothing that's really going to hold us back as far as governance red tape. So we'll just be working on the code from now until whenever it's ready. If it's in a weekly cycle, in theory, it could land before the end of the year code-wise, but then there's a lot of other work that needs to be done in the real-world to line that up. So I don't know if it'll be ready by the end of the year, but the code easily could be.
- Frank Cruz: Cool, and with regards to DssGov, is that something that's a 2021 event as well?
    - Chris Mooney Yeah, that's definitely going to be 2021 at this point. I think we worked out the rough timeline for DssGov with the MIP cycle if we don't have a December cycle and, If I'm correct, I think it was January for the RFC. Then you'd have February for the formal submission, so it could go live along the lines of February or March. Something around there. Charles, go ahead and correct me if I'm wrong.
    - Charles: Yeah, so I mean there's a couple possible avenues you could take if you were to submit it for RFC over December or at any point during November. It would fulfill its requirements after a month of being in review with that one week, in the end, being a frozen period where no changes can be made, so technically it could be potentially implemented by the end of January, but it depends when it's submitted for RFC and that RFC period is one month.
    - Chris Mooney: Okay, that's good to know maybe we can come up with something by December and speed it up a month.
- Frank Cruz: Charles, if the community wanted to also include incentives into the DssGov contract, does somebody have to generate a MIP, or how does that work?
    - Charles: From the MIP perspective, or MIP author perspective, once this proposal enters the RFC period, it's when community members can provide any feedback and ideas for consideration to the author of that proposal, so it's up to them to ultimately include any changes that the community suggests. If they do think that incentives could be worked in, they could make the changes to implement that. However, if not, then that proposal would still go forward when they formally submit it. So it's up to the author to make these decisions. Of course, working with the community is encouraged, but yeah, does that answer your question, Frank?
    - Frank: Yeah, yeah, so I guess what I'm saying is if we want voting incentives to be coded into that DssGov contract, do we wait for the foundation, or do we as a community take the initiative? Obviously, there's a lot of things we got to figure out; The game theory and the economic theory. There are different ideas on the forum, but I'm just wondering if we're gonna have to wait to liquidations 2.0 to get incentives or if we could get it going in 2021? I guess that's what I'm thinking out loud.
    - Charles: Yeah, I would. If Chris or anyone else working on DssGov wants to chime in, I would say that you can make your case in the comments and provide possible solutions for them to consider once it's in RFC. But yeah, it's ultimately up to them to include whether they think it's achievable or not.
    - Chris Mooney: Yeah, I'll say we haven't put a lot of thought into incentives on the technical side so, although there are a number of us that are sort of fans of thinking about this, if you guys want to come up with a couple options and have the whole community figure out exactly if there's going to be incentives what they should look like, it would be ideal to have that while we were before or during the RFC period so that we could figure out how we wanted to handle that.
    - Frank Cruz: Cool, thank you.
- LongForWisdom: Yeah, I would say that I think the incentives side and the potentially having some sort of option for a vote lockup are both reasonably important. I'm hoping to pursue making those changes in DssGov. If the community members also want to see specific features, then yeah, just watch out and make sure you make that known.

### Juan

#### Collateral Call Update

[26:00](https://youtu.be/QMamu42apgo?t=1561)

- This week, we did not have any call as our friends in the US had significant events, so we figured that it was better to skip and not compete for attention there.
- Next week we're going to have [Paperchain](https://forum.makerdao.com/t/pc-drop-mip6-application-paperchain-drop-tokenized-music-streaming-invoices/2215). For those that don't know Paperchain, they do analytics on the streams for Youtube, Spotify, and whatnot for artists and labels. They can anticipate how much revenue they get, so based on that, they advance part of the revenue. They are working with Centrifuge, and they will be coming to present their drop token and their project. If anyone wants to join us next [Wednesday 11th at 6PM UTC](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-15-wednesday-november-11-18-00-utc/4983).

## Procedural

### LongForWisdom

#### November MIPs Submission Review

[27:54](https://youtu.be/QMamu42apgo?t=1674)

- LongForWisdom: This week, we saw the poll for the stablecoin action plan fail by 50.38% to 49.60 %, so maybe we can spend a little time discussing the various options for stablecoin builds, kind of in the context of this whole failing, and perhaps highlighting what the proposed option was and discussing the other options. Does anyone want to give a brief summary of the option that was presented?
    - Sam: Sure, I could do that. Basically, 3 options were presented. Option 1 is to increase the surplus buffer and having this currently unbacked DAI cancel out in the surplus buffer. The second option is to turn off the stability fees sometime in December when it hits a 100% collateralized ratio. The third option is to turn off the stability fees and set the debt ceilings to zero on all the stablecoin vaults on December 11th. Thereafter, we create new mirrored elk types for all of these, which have the same parameters but different debt ceiling and stability fees set up back to what they were before. This is the start of a rollover into a new vault type option. Because it failed, my instinct is to move on next week to basically put a rank choice poll up and go wide and see what people want to do about this because we do have to do something. We do have to pick a plan. It's not something that we could just start burning MKR and not deal with. That's my view. I'm glad to hear anybody's thoughts on that.
- JoeQ: I just want to step in and reiterate that we have to do something, no matter what, even if it fails along the way a few times, we have to figure a plan out.
    - Greg: I think we could keep increasing the surplus buffer. It seems really easy.
    - Sam: I think we will need to go to another vote.
    - LongForWisdom: I agree. We need consensus on whatever option we're going for. I think that ranked choices are probably the way to proceed, given that it was all we had this week. Whether we want to or not, I don't know if there are other options or how feasible.
- Chris: What world is most granular here? We get some amount of MKR burned for the assets that we're making fees on because that's important both to release that DAI supply from the fees into the markets so that people can repay their vaults. It's also important to build up the system safety net in MKR. I'm sure that MKR holders like that burn as well, but those two primary reasons are two good reasons to continue to have some MKR burnt. What gives us the granularity where we can handle both the stability fee increases from stablecoins to have the sort of capacity either in the surplus buffer or have some amount of `flap` options that we release the other stuff into the general markets? Would that be the rollover option?
    - Sam: Yeah.
    - Chris: Unfortunately, with the rollover option, there's a lot of additional overhead that we have to think about. I mean, that's a lot of additional stuff. There are more keepers, more `ilk` types, and a lot more engineering that goes into that, but it's not terribly difficult. I just don't think it's a strategy that we'd want to pursue.
    - LongForWisdom: I think the complexity with that strategy is that it requires us to adjust the surplus buffer to burn some MKR at some point but not too much. And then increase it as well as maintain some ratio via updating it at good times, right?
- Matthew: I have a technical question that's kind of related to this. Just humor the scenario where we continuously increase the buffer. Whatever it is now, we just slowly ratchet it up, and ultimately we get it; just humor it to 20 million. All this issue goes away because of whatever external event happens and then we decide we want to lower it back down to 2 million. Am I correct, or am I wrong? Would that mean that if we lowered it from just say 20 back to 2 million, we'd have to ratchet it down slowly to not trigger a monster of either minting or buying back of MKR? Is that correct?
    - Chris: Yeah, We'd have to ratchet it down slowly; otherwise, you'd just instantaneously release a ton of `flap` options, which would probably create an enormous amount of market pressure on MKR, which would likely push up the price quite a bit. I don't know if that answers your question, though.
    - Matthew: It's just something that we should all be mindful of, that if we take this thing from 2 to 4 million to 20, just as an example, that when we want to take it back down to 2 million as an example, then we'd have to have to include some interim steps so we wouldn't cause a price squeeze.
- LongForWisdom: It's worth noting that if we were on that route when we liquidated the vaults which are below collateralized, the difference would come out of the surplus buffer, between their current collateralization level and like 100%, so the buffer would decrease by some amount when we announce those liquidations.
    - Matthew: I'm not implying that there would be liquidations. I'm only commenting that let's assume that all the DAI that would be in the buffer would be legit and good. None of it would be classified as bad debt since everybody paid off their vault. What would be in that buffer would actually benefit the Maker burned. We would just need to be mindful not to slam it back down to avoid an MKR purchase tsunami.
    - LongForWisdom: I agree with you we should never drop it down by a large amount. I don't think the scenario you're hinting at is likely given the current situation. To ensure that the DAI in that buffer is all good DAI that we actually have, we need to liquidate the vaults below collateralization. If we have vaults that are below collateralization, 100% collateralization...
- Kurt: If I can, I'd just like to throw a monkey wrench into that scenario as well for people to think about. If we do end up with, say, 20 million of the legitimate surplus, is the best use of that by buying MKR, or should it be invested back into the team or infrastructure to focus on growth or onboarding real-world assets actions like that? It's not clear that the buy and burn are incredibly economically efficient from a DAO success perspective.
    - LongForWisdom: Yeah, I think that's a good point that touches on a completely different issue, but it's definitely worth mentioning.
- Chris: You want MKR holders to be incentive aligned the right way, so MKR holders probably do need a bit of a burn to target success in the system. I agree with Kurt that part of targeting that success is to fund teams. It also solves the problem of the deeper scam in the fiat monetary system where the debt that we're accruing needs to be on the market so that people can repay their loans; otherwise, we're going to see upward pressure on the peg. So at some point, we're paying teams, or we're putting that DAI on the market to burn MKR that pressure relief felt needs to exist both for the peg so that you can kind of balance the accounting for DAI. Even if we pay teams, in theory, those teams would eventually offload that DAI in the markets, which is exactly what you want.
    - LongForWisdom: I think this plays into the concept of strategic reserves and the declaration of intent for which went through recently. If we want to maintain margin levels of reserves, it may not be good to do it in DAI but maybe with something else.
- Kordez: I think one of the issues is that we don't have a mechanism where we could actually take the fees in the surplus, the ones from stablecoins and then the rest of the fees. Its kind of 50/50 now. I think 40000 per day comes from crypto collateral and another 40000 from stablecoins. So, if you could take 40000 from crypto collateral we could spend that money for other MKR burn or for teams or whatever but this would only be done if we had the flapper distributor, but this would be very useful to solve the issue that Chris mentioned, still spend the DAI for this stuff and on the other end save DAI that might not be collected at the end.
    - Sam: And also keep in mind, if you want simplicity, we could just turn off the fees once we've captured most of the value. That's always available.
    - LongForWisdom: Yeah, I think that is the simplest solution to just turn off the fees. Obviously, the downside is that we do lose some of that value in the vaults.
    - Matthew: You lose the value for the people that show up now after you do that.
    - LongForWisdom: Yeah, for any vaults that are still above 100% collateralization.
    - Sam: I mean, if we could hit 90%, the vast majority of the vaults are underwater, and around this sort of bleeding edge, so we would be able to capture a fair amount of the value, and yes, we'd miss newer vaults, but there are tradeoffs, right so is it worth the effort of going for option three or continuously increasing the surplus buffer? Just something to consider.
    - LongForWisdom: Yeah, it's definitely a nontrivial amount of governance work to align these plans. Even if governance is split between multiple plans, it means that you run the risk of us being partially through implementing the winning plan and having part of it fail. Then you have half a plan, which is no longer valid, or you implement the first half. When it comes to doing the second half, you can't get people to agree, so there is some risk level, especially if there's no firm decision on one of the plans.
    - Kurt: If it becomes impossibly hard to reach some sort of consensus on this, we could always just put 3 different executives into the chief and let MKR holders decide directly within its own chain.
    - LongForWisdom: Yeah, I supposed the front end supports keeping Maker on the old proposal now, right, so maybe that's doable? But the danger of doing that before has been splitting the Maker on the hat, right?
    - Kurt: I think with the new front end support, it'll be fine. I guess the trick becomes, at what point do people concede to defeat? That could become tricky. Maybe I retract that suggestion without thinking it through a little bit more.
    - LongForWisdom: Yeah, it's definitely a possibility.
    - Kurt: You could always pick the one that looks like it has the most consensus and just has a stated plan of record. If this doesn't pass in a week, we'll put the next one up and then the next one, so then it just takes longer, but you don't have this splitting votes three ways kind of thing.
    - LongForWisdom: Yes, that's fair. As I mentioned, I think the next step would be doing a random choice vote with the various options. I think that's the obvious next step, and hopefully, that could result in something that has a consensus. Still, if not, then we'll have to think about other solutions to get an agreement.
- Chris: I'll add one comment just so people think about this as well, we've been thinking about this sort of happy path, but everyone remembers we had a 500000 surplus buffer that liquidated itself in 20-30 minutes on black Thursday, that exists as an emergency protection and we could find ourselves in a similar situation where auctions are suboptimal or for whatever reason we end up losing that surplus buffer. It's just worth thinking through that unhappy path like now we have all that bad debt built up in these stablecoins, and we'd have no surplus buffer.
    - LongForWisdom: Yeah, that situation could be quite bad in terms of governance, assuming that we take the path where we've let the vaults go into 100% collateralization, and the DAI is sitting in the buffer collateral type, and that buffer disappears to match the bad debt from ETH and then we're in a situation with no surplus buffer, DAI is not backed 1:1, and we have to decide whether to liquidate stablecoins at a loss or mint MKR until the DAI is fully backed again. Neither of which are particularly good choices, doing that does have some risks.
- LongForWisdom: On a positive note, let's move on. Any other points? Maybe we can focus on action points at the end. I would like to see more discussion in the forum instead of just reiterating options and confirming that it'll go up as a ranked-choice vote. I think that makes sense as the next step, yet maybe we could have a more thorough discussion about the various options and the various tradeoffs.

## Other Presentations and Updates

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[45:55](https://youtu.be/QMamu42apgo?t=2755)

- So, just to overview where we're at, We're still at around 955 million DAI minted. We have about 345 million of that is from ETH, half a million is from ETH-B, 3.3 million is from BAT, 401 million is from USDC-A, 100 million is from wBTC, 56 million is from tUSD, a little less than half a million is from MANA, 23 million is from PAX, and about 4.8 million is from LINK. DAI is sitting basically the same price since the last week or so. The DAI price has been holding roughly $1.01. If we look at DAI-USDC, trading volume has been pretty light, but the prices have been sitting pretty steady at 1.01. The latest is at $1.008. These prices down here of about $1.006 are roughly as close as DAI seems to get to the dollar mark.

![](https://i.imgur.com/FW8P24U.png)

- If we look at the long-term price graph, you can see that there have been moments where it gets close to touching around August 13th, September 3rd, September 19th. At these points, it hit $1.003. More or less, this is extremely consistently sitting between 1.012 and 1.007, occasionally 1.006.

![](https://i.imgur.com/tpwvVlM.png)

- In terms of DAI-ETH trades, it echoes the same thing, if not a bit more consistently. At the very least, that average price is always $1.01, except at the end of October. When the ETH price was surging, a slight dip in the DAI price recovered itself. Then in the last week, it has been sitting around that $1.01 price.

![](https://i.imgur.com/H6NgRZb.png)

![](https://i.imgur.com/TKH2fZX.png)

- DAI-USD is a similar story in terms of the big picture but a lot more volatility in the prices of those trades. In the last week or so, though, it's still kind of looking a bit more consistent matching what DAI-USDC has been doing. And then DAI-USDT always pretty much tracks DAI-USDC.

![](https://i.imgur.com/z9DuGb0.jpg)

- In terms of where all that DAI is sitting, it's still pretty much 280 million or so in Compound, another 200 million in Uniswap, a solid 63 million in BarnBridge, and other fifty or sixty million in the top few Curve pools. Then there's also 15 million on Binance, 12 million on another Binance address. So in terms of how DAI is being used, things are looking pretty consistent with how they were prior. And in terms of price, the trading activity seems pretty consistent with its being doing in the long run.

![](https://i.imgur.com/JsuVHzZ.png)

- In terms of the individual vaults, if you look at the ETH collateral portfolio, the largest bucket of ETH debt is roughly 190% collateralized, so we see here the top few vaults are 290% and 312% collateralized. This is good news because the couple of largest positions that account for 64 million of the overall debt are roughly 300% collateralized on average, which is pretty solid.

![](https://i.imgur.com/uOOQ86W.png)

- There's 13 million collateralized at 190%. It interestingly seems to drops back down to this 188% collateralized mean. There is a decent percentage of smaller vaults that are 188% collateralized, which is very interesting.

![](https://i.imgur.com/Mt7GdQz.png)

- These two buckets represent those two largest vault positions. In terms of liquidations, right now, ETH's price at $318 has a pretty large liquidation wall of 90 million DAI. This is a conversation regarding the degree of liquidity out there. The degree of a buffer we have in the event of, say, 100 million dollars of DAI is liquidated. Because at this point, the overall DAI supply, not just on ETH, but also on all the other collateral types, probably far outweighs the amount of surplus and/or liquidity sitting out there on DAI. So in the event of a massive liquidation, even though it may not be particularly large compared to the total pool of DAI debt, it could still have a pretty large impact on DAI or surplus and bad debt.

![](https://i.imgur.com/adT6o9d.jpg)

- LINK has one large vault that's 4.2 million and 280% collateralization to touch on some of the other vault types. Again it depends on expectations of market volatility for LINK price as to whether it is safe. You can't necessarily judge the same collateralization ratio for two different collateral assets the same way. In ETH terms, that'd be a very safe collateralization ratio, but it's a bit more of a judgment call on whether or not you think it is for LINK.

![](https://i.imgur.com/ZJFQwtN.jpg)

- Let's look at some of the larger stablecoin positions. For USDC-A, basically, 378 million still, which is pretty much the exact same number that we talked about last time, is sitting at 101% collateralized. Hence, we have a decent chunk of the collateral portfolio that's 100.5% collateralized currently. These were 100.6% last week, and then I could do a more granular breakdown there. Still, another decent chunk is 100.5, 100.6, and 100.7% collateralized, respectively. Then 100.6 is one of the largest means in terms of the breakdown of these buckets. You can at your leisure poke around at some of these positions and see that for yourself.

![](https://i.imgur.com/1W6lB1i.jpg)

- In terms of the 56 million, basically, these are not terribly distributed. Only about 21 to 27 million among the few largest positions. Though its kind of the same story is USD-C in terms of these being 100.5, 100.6, 100.7% collateralized. So it's kind of more the same. I'd consider this additional 56 million pool as another problem to consider.

![](https://i.imgur.com/Gp56lWW.jpg)

- PAX is another meaningfully sized position. Of the 23 million, you have roughly 21 million that's in the four largest positions. You have two of them, approximately 15 million, approximately 100.5% collateralized, so not exactly the same scenario as some of these other ones. You still have this other 3 million vault that's 101.9% collateralized, so I would say roughly 16 million in PAX-USD debt, similar to what's going on with USD-C right now.

![](https://i.imgur.com/az2IhsY.jpg)

- And then the other significant position to keep an eye on is wBTC. The largest bucket of wBTC is roughly 200% collateralized, and that's about 78 million of it. Of the largest positions, it's pretty representative. Look at the 2 largest wBTC positions. You'll see that the first accounts for 77 million, which is 200% collateralized. The next largest is 17 million, which is 340% collateralized, which is pretty solid. 200% collateralization based on expectations of market volatility for BTC price, you can consider whether 200% is safe or not. Obviously, there's lower market volatility for this than for ETH, but that's the mean for wBTC. I think that's it for collateral types for now. I can go back and double click on anything that anyone wants to see more of.
    - LongForWisdom: Thank you, that was awesome, very thorough as usual. It's definitely interesting seeing all the ratios and the different vaults and how they vary and stuff. That's interesting. All right, anyone has any questions for Vishesh?

#### Discussion

- Frank Cruz: What's the history of that wBTC vault? Is that the institution that opened it a while back? Vishesh, do we have any history on that ETH address?
    - Vishesh: Yeah, I can pull up for you the, so I'm gonna add in the individual actions that were taken on each vault position so people can sort of look back and see, for a given collateral type, what's its history, but this, the largest two positions because they do kind of juggle between them, one of the largest two positions has not changed significantly I think pretty much since wBTC started that was one large institutional user it is also slipping my mind right now which user that was, but I can find out for you and let you know.
- Frank Cruz: Cool, so this is kind of normal behavior for the right, to be under 200% collateral and...?
    - Vishesh: Yes, so these positions have been sitting around a similar collateralization percentage for a little while, but the 47 million one that was updated on the 26th and the 30 million dollar one interacted with their vault on the 24th. It hasn't been a significantly long time since they at least interacted with the Vaults, so you know that they're managing or keeping an eye on those positions.
    - Frank Cruz: Ok, yeah, Primoz said that it's either Alameda or a Nexo.
    - Primoz: Yeah, I'm not claiming that; it's just that I think the third one is probably a Nexo. I think you can even check it and Etherscan. The two largest ones seem to be Alameda, but I'm not claiming. I can just see they're kind of involved in farming, sushi swaps, and this kind of stuff. So it might be them, which is on the one hand good because we're kind of sure they have systems in place to defend against liquidations. They have DAI. It's kind of positive usually.
- LongForWisdom: Alright, cool, any other questions for Vishesh?

## Open Discussion

[1:02:41](https://youtu.be/QMamu42apgo?t=3761)

- Cool, alright, that pretty much brings us to the end of our planned agenda items. Does anybody have any sort of more general questions or anything they want to ask or discuss before we finish? At this meeting, I mentioned the flash loan stuff from the other week. Is anybody interested in talking about that? Does anybody disagree with, so I might mention that the thread's prevailing opinion appears that we should do nothing? Does anybody disagree or agree?
    - Nkunkel: I don't necessarily disagree, but I would like to kind of take the devil's advocate position here. We are letting the impact of a vote happen on the system where the vote wasn't legitimate. so there is a precedent that we're setting here that technically the b.Protocol guys shouldn't be whitelisted right now on the oracles because that vote was never ratified legitimately, right? So from a pragmatic point of view, what would happen here? We would do a vote to like un-whitelist them and then say you can reapply, and there will be another vote to whitelist you again, and if that passes, they can then we're back to the same spot we are now. Now, personally, I don't want to do that. I think that's a lot of work. Still, I also don't like the precedent that we're setting here in terms of saying this vote was illegitimate. Nevertheless, we're just gonna go along with it and just twiddle our thumbs instead. It seems kind of wrong in retrospect.
    - LongForWisdom: Yeah, I think that's a fair point, and it's probably a good summary of my views on it as well. Anybody else has any inputs?
    - Chris: Yeah, I mean, I struggled with this a little bit, I mean, we've known about the flash loan risk, but I think when Nick is saying illegitimate, you know, I think it comes down to saying that the intention is that Maker voters have skin in the game and I think we all agree that that's sort of the right incentive mechanism for Maker and this violates that premise and so you could say this violates the intention of what we wanted and that's why the vote doesn't seem legitimate. However, this was a known risk, and the code did allow it. The DssChief is much older than flash loans. I mean, that voting contract was written long before flash loans were a thing, so there may be a kind of code is law argument here as well. We say okay. You know it happened. this has been great. Now we just take proactive actions to make sure that the system better codifies what we all agree it should codify regarding the future's intentions. So that's my thought on it. I don't even know if I would go as far as to say the vote wasn't legitimate. Still, I definitely don't feel like I can make a strong argument on it. Like I said, it feels as if it definitely violated intentions. The surplus buffer was also part of that vote, so that would mean the surplus buffer would need to drop back down to two million if we resolved it in the future.
- LongForWisdom: Yeah, good points, the point that kind of gets me sticking on is what Nick mentioned about precedent, right, wherein this case the vote was something that in general everyone thought was a good thing, everyone kind of wanted for b.Protocol to be whitelisted on the oracles, the poll was in favor, the executive, I'd like I cannot hesitate to say that I suspect it probably would have passed maybe not this one but in the future, if we put it on again which we probably would have I suspect it would have passed, but in the future that might not be the case, this might be something that's far more controversial, it's possible but if you think about the black Thursday compensation vote, if this had happened on that vote I suspect that we would be overturning it as a result or at least re-voting on it, so the point that worries me is that we're doing something different based on the content of the vote rather than based on the intentions of what should have happened.
    - Chris: If it makes you feel better, I'm probably in the minority on this, but I was fine with whitelisting b.Protocol, but I wanted to see some of the slack taken out of the MKR dilution before us increasing the surplus buffer, I did a 'no' vote on that executive for that reason, and so it was passed in a way to me in a very illegitimate way, but I'm at peace with it because the code was written so that it could happen and I don't know if anyone is more offended about it than me based on the content of the vote I don't know.
    - Matthew Rabinowitz: I would even go further and just say yes, it violated the spirit of it but in the same way we have laws about you can't put up a poster of something insulting or something defamatory against somebody, and then later someone says well I didn't put up a poster, I just wrote about it. That's still a violation of the spirit, but one is slander, and the other is liable, so the solution is let's just defend against it and move on.
    - Chris: Fully agree.
    - LongForWisdom: Yeah, I think that's the intention, right? We'll just try to protect against it in the future. The danger is that it happens again before we get a chance to happen, which would be not great.
- Juan: I wanted to add something to what Nick said. There are two different topics, and one is a little bit of the precedence that we might be setting and that I won't say that if it is too much work. It's not that fruitful to just reverse everything and do everything again. Yeah, we might set that precedent, but at the same time, if we do everything necessary to protect the protocol and make sure that this does not happen again. We make it clear that we are not in favor of this with different techniques. LongForWisdom mentioned, and he put up a vote in the forum for burning the Maker used with bad intentions, so that could be one of the ideas, for example. Still, I think we might need to separate the message we're sending with things such as with Long's proposal. The other one of just reversing everything because it's the right thing to do. If we have too much work to do and grow the protocol in different ways, I think we should not go for the reversal. It's my personal opinion.
    - LongForWisdom: I think that's kind of a good point. To some extent, this kind of played into why I posted that thread. Because at the very least, by sort of making this a discussion and making it something that we talk about in terms of what are we going to do, we set the precedent that we don't just automatically say that it's okay, right? We do at least discuss the issue, discuss the incident every time it happens hopefully, and decide again based on the individual situation. So yeah, I'm hoping that helps a little bit, but we'll see. The signal you mentioned, Juan, is specifically related to burning Maker in the event of an actual malicious attack, which results in the Maker protocol being redeployed. So, unless something catastrophic happens, an emergency shutdown is called, or whatever, wouldn't apply to the issue that we saw on the 23rd, which was just a group pushing an executive proposal over the line. That's kind of again a different situation.
- Juan: And maybe to keep going on that topic what you're proposing, or well I don't know if you were proposing it, Long. Maybe you want to remain neutral, but you didn't seem to have an opinion there or at least you didn't make it public. However, that seems to hurt people lending their Maker instead of whoever's performing the attack. I don't know if we want to think of different ways of deterring people from trying it, but maybe that's something else.
    - LongForWisdom: Yeah, I mean it sounds kind of bad when you put it like that, but that's kind of the intention of the signal, it's that if you are lending your Maker and it's used to attack someone, then the harm will fall on you rather than necessarily the person that is actually making the attack because the fact is that if you are lending Maker and then an attack happens then, that attack wasn't possible without the lent Maker necessarily which then shifts the responsibility around slightly.
    - Juan: Yeah, I commented on that. On average, I think the lending Maker's API is 0.56 percent last time I checked, so I don't believe that people are lending Maker for that API. I think they're doing it to belong Maker and use their capital for other things. Whatever it is, I don't know. It could be even buying a car or paying down part of the mortgage, so I think that's not necessarily a bad thing. I don't know if we should be punishing people that are using the capital for something else, so that's why I was a little bit torn between punishing them and not.
    - LongForWisdom: Yeah, I mean that part of it makes sense, right? They can use the capital for a lot of things. And this is where it gets a little complicated. We could allow Maker to be used as collateral in the Maker system, which has the advantage that it can't be then re-lent out to someone else. Of course, that introduces other risks in terms of something such as the circularity of the Maker token and decreasing prices. So I mean, almost the ideal situation is for another lending platform to offer Maker as collateral but not lend it out that isn't like the Maker platform or the Maker protocol.
    - Juan: But I don't know if it makes economic sense for any platform to just accept Maker and not lend it out. It's as if you only have one side of the platform.
    - LongForWisdom: Yeah, it may not. Avid does it with its own token. They allow users to deposit it and use this collateral to borrow things.
    - Juan: I don't know if people have anything against and I'm asking because I honestly kind of think far enough, but what would be bad things about having a sort of Maker inflation, so if you deposit Maker in the vault, you're earning I don't know one percent API on your Maker, I think that might help, I don't know.
- LongForWisdom: Yeah, I think Frank mentioned voting incentives earlier in the call. I agree that's one of the advantages of having voting incentives because that incentivizes people to keep their Maker locked up in the governance contract rather than having it elsewhere. Right, I think we're maybe reaching the stopping point for this meeting. Does anyone want to make any final point or reminders or anything? Alright, looks like no. I think we've had some positive discussions this week both on stablecoins and on the governance flash loan stuff, which is great. As always, the place to continue these discussions is in the forum. So if you have any comments or think of something else that you want to make public, please use the forum threads. All right, thank you, everyone, for coming.

#### Links from Chat

- [CDIP30 - MakerDAO Podcast](https://forum.makerdao.com/t/poll-included-cdip30-voices-of-makerdao-podcast-updates-and-deliverables/4999)
- [CuraDAO Website](https://curadao.io/)

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
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
