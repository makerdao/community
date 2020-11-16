# Episode 114: October 15, 2020

## Agenda

- [00:00](https://youtu.be/gqnzAG8ky2s?t=0000): Introduction
- [01:17](https://youtu.be/gqnzAG8ky2s?t=0077): Governance at a Glance
- [04:28](https://youtu.be/gqnzAG8ky2s?t=0268): Smart Contracts Team Update
- [08:47](https://youtu.be/gqnzAG8ky2s?t=0527): Risk Team Update
- [12:00](https://youtu.be/gqnzAG8ky2s?t=0715): Community Development + Operational Support Update
- [16:11](https://youtu.be/gqnzAG8ky2s?t=0971): Collateral Calls Update
- [18:31](https://youtu.be/gqnzAG8ky2s?t=1111): Oracles Team Update
- [23:08](https://youtu.be/gqnzAG8ky2s?t=1385): MIPs Update
- [52:22](https://youtu.be/gqnzAG8ky2s?t=3143): October MIPs Inclusion Review
- [46:43](https://youtu.be/gqnzAG8ky2s?t=2803): State of the Peg with Vishesh Choudry
- [53:21](https://youtu.be/gqnzAG8ky2s?t=3201): Open Discussion

## Video

<https://www.youtube.com/watch?v=gqnzAG8ky2s&feature=youtu.be>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/gqnzAG8ky2s)

- Hello, everyone. Welcome to the MakerDAO scientific Governance and Risk meeting number #114 taking place on Thursday, October 15th, at 16:00 UTC. My name is LongForWisdom. I'm MakerDAO's Governance Facilitator. A bunch of Maker people joins me as usual. I don't think we have anything super exciting for today's agenda—just the standard updates, including the MIP stuff, state of the peg, and an open discussion.
- I want to give a quick reminder about time-zones. It's the time of year when people start switching time zones. This meeting is set for 16:00 UTC, which means the time will change for people outside UTC. Just be aware of that over the next few weeks.
- We are currently working on better documentation for the system parameters that we frequently change, such as collateralization ratios, debt ceilings, and stability fees. I don't know how many people here will get much out of them. Still, I'm hoping it will be easier for new users to pick up signals and governance decisions that involve those parameters if they have something to read, which will help them understand the tradeoffs with those parameters.
- Deeper discussions happen in the [Forum.](https://forum.makerdao.com/)

## Governance

### LongForWisdom

#### Governance at a Glance

[01:17](https://youtu.be/gqnzAG8ky2s?t=77)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [MakerDAO Should Begin Moving Away from The Dollar](https://forum.makerdao.com/t/makerdao-should-begin-moving-away-from-the-dollar/4708)
  - Nanook [posted a thread](https://forum.makerdao.com/t/makerdao-should-begin-moving-away-from-the-dollar/4708) suggesting that MakerDAO should start moving away from the dollar, which prompted some discussion. Various people are chiming in on the dollar's benefits over something like the SDR and vice-versa, which is interesting.
- [Liquidations 2.0: Technical Summary](https://forum.makerdao.com/t/liquidations-2-0-technical-summary/4632)
  - I'm going to highlight the liquidations 2.0 technical summary that Chris posted. Chris Mooney from the smart contracts team posted it the other week and continues to promote a discussion, which is good because the more we can discuss liquidations, the better it will turn out.
- [Wanted: Governance Help](https://forum.makerdao.com/t/wanted-governance-help/3277)
  - I also need to highlight that there is still help wanted for governance people. If you are interested in contributing to Governance with an end the goal for finding more Governance facilitators, please, let me know. I can find something for you to do, and we can discuss it.

##### Signal Requests

- [Increase the Auction Surplus Buffer by 2 million (System Surplus)](https://forum.makerdao.com/t/signal-request-increase-the-auction-surplus-buffer-by-2m-system-surplus-october-2020/4716)
  - Primoz from the risk team proposed-The first increase in the surplus buffer by 2 million.
- [Approve Maker Representatives as an oversight role for Real-World Assets](https://forum.makerdao.com/t/signal-request-approve-maker-representatives-as-an-oversight-role-for-real-world-assets-october-2020/4656)
  - A signal request from Matt Rabinowitz proposes a list of initial Maker representatives as described in his MIP related to onboarding. I would encourage people to vote on those before Friday and when it goes on-chain on Monday.
- [Add ETH-B Vault Collateral Type](https://forum.makerdao.com/t/signal-request-add-eth-b-vault-collateral-type-september-2020/4435)
  - I also wanted to highlight that the ETH-B vault collateral type passed on-chain and should be going into the executive tomorrow. I'm sure Chris will be able to tell you more about this.

## Weekly Updates

### Chris Mooney

#### Smart Contracts Team Update

[04:28](https://youtu.be/gqnzAG8ky2s?t=268)

- We did not have an executive vote last week, which is the first time in; I don't even know if I remember the last time we didn't have a weekly executive. There are no parameters changed; it was pretty crazy. I mentioned last week that we're slated to look at PAXG to do a collateral assessment, but that was incorrect because [befitsandpiper did a collateral assessment on PAXG](https://forum.makerdao.com/t/paxg-erc20-token-smart-contract-domain-community-assessment/3443) back in July, so that's already complete. We just deployed [ETH-B to Kovan](https://github.com/makerdao/spells-kovan/pull/22), so if you're a keeper, integrator, UI, or you want to test it, it's out on Kovan. That's the pull request right now. You can find the address there. We'll update the [changelog.](https://changelog.makerdao.com/)
- There was some work on a tool between Brian and Lucas. They're working on something called the Chainlog, a play on words for the changelog, and I think that's complete. I don't know if either one of you guys is on the call if you wanted to give a brief update or if you're going to save that for a presentation later but... (checks to see if they're in the call). No, I think they're still in an L2 call.
- We did a little bit of work on the collateral onboarding sheet. Lucas tried to give them a sort of gut check on the assessments there, which hopefully starts to kind of complete that sheet; someone else will probably present the sheet later.
- We moved the joint adapters that were in DSS deploy over to DSS gem joins. This is to help with collateral onboarding, and so doing that, Sam and I were onboarding Balancer trying to walk through getting it installed on Kovan using that documentation. There's a whole bunch of new collateral necessary documentation that will be coming, and Balancer is sort of halfway to Kovan right now. We're still walking through that, so I'd expect that next week.
- We also covered Liquidations 2.0. We had a [discussion](https://forum.makerdao.com/t/agenda-discussion-liq-2-0-stakeholder-discussion-wednesday-october-14-2020-1700-utc/4631) yesterday about it; I don't know if we need to have more of these. Please post any questions you might have there or if we have time at the end of the call, just bring up any questions.
- There was some discussion about the peg, which is a way for the protocol to remediate people. We did a little bit of work with that trying to accommodate some of the requests that we've had. I know it's not formally submitted yet, but it's something that we're working on.
- In the coming week, we'll expect an ETH-B Vault on Mainnet, which will happen tomorrow. Then we expect to get BAL totally on Kovan, YFI on Kovan, and then GUSD on Kovan, though that may not happen next week, probably the week after.
- We're still working on collateral assessments for UNI, RUN, VPC, and TBTC, and we need to do a domain team review of MIPs 14, 17, 22, and 25. Just to set expectations, for the next two weeks, the Foundation's smart contracts team is trying to get a sort of code complete for liquidations 2.0. Most of our resources will ensure that code is complete to send it off to auditors and whatnot.

### Primoz Kordez

#### Risk Team Update

[08:47](https://youtu.be/gqnzAG8ky2s?t=527)

- We're finalizing GUSD and package evaluations. They should be posted in the upcoming days by Marco.
- We'll also start focusing on new assets to be evaluated. We mostly rely on this new prioritization sheet that was more or less filled on our end. According to some preliminary results, Uniswap and REN tokens rank pretty high we already started assigning these evaluations to our new analysts.
- We're also finalizing a collateral evaluation template, which should help us with onboarding new analysts. People will just mostly need to follow the steps and make evaluations. Of course, they need to have some decent knowledge about the space. In general, I think this should attract many more analysts willing to do this kind of work in the future.
- I made a [post](https://forum.makerdao.com/t/discussion-increasing-surplus-buffer/4644) that LongForWisdom mentioned already about increasing surplus buffer to 4 million, which should hopefully go to on-chain vote this Monday.
- We are also preparing a table with risk premiums and competitive rates for each asset. Monet Supply and I are working on this. This thing will be published next week along with the report from the rate-setting working group about potential rate changes. We don't really plan to propose massive changes to rates in the upcoming week, but the whole idea is to demonstrate to the Governance the new format we intend to report changes to rates and its thought process. Ideally, this should lead to less overhead with Governance making rate changes and make rates more predictable and stable.
- Finally, there's a one really great tool that our community member Lix made; this was based on our [wanted post](https://forum.makerdao.com/t/wanted-risk-domain-monitoring-tools/4168) where we were looking for someone who can perform the on-chain analysis to reveal how real-world users are utilizing their DAI in various liquidity mining venues. The whole point of this was to better understand our users and address liquidation risks because if users are long DAI, those risks are much lower. We got some really cool results; they should be published on forums by Lix. Potentially he might also come to the next governance call and present some of the stats.

### Amy Jung

#### Community Development Team Update

[12:00](https://youtu.be/gqnzAG8ky2s?t=715)

- It's going to be pretty short this week. We just announced our [Kleros and Maker fellowship](https://blog.kleros.io/kleros-maker-fellow-on-decentralized-finance/). If you guys don't know what Kleros is, Kleros is a decentralized decision-making protocol. A critical use case for them has been to focus on verifying compliance around crypto assets, so that's great for us. In the fellowship, the fellow would be working on a framework that helps assess the code risk profile and legal compliance. This is a six-month fellowship for someone interested, ideally a researcher, so feel free to share with anyone you think might be interested. I think the applications are closing in about two weeks, and we've already got some great applicants.
- The second piece is that we will be launching a grants platform soon, so hopefully, this will help get some great and more transparent grant applications in the pipeline, and people will be able to view them. Anyone in the community would be able to view them as well.
- Most of my time has been spent working on this growth-focused minimum operational framework that I mentioned. It's almost ready for feedback in maybe two weeks. That's going to include a budget and incentive proposal and some kind of roadmap in the general timeframe for what implementation might look like and guidance documents.
- Just a reminder, we try to [upload](https://www.youtube.com/c/MakerDAO/playlists) our public calls as soon as they are done, usually around the same day or so.
- Suppose you're interested in what community development has been building, we did [a demo day on last week's community call.](https://youtu.be/vkPaT_7EEbs)
- Our [liquidations 2.0 Stakeholder discussion call](https://youtu.be/IMSusgznlYk) is up too. The collateral onboarding calls as well.
- I'm going to hand over to David, who has a quick message about the governance call summary team.
  - David: Thank you so much, Amy; as some of you know, we produce a high fidelity summary of this call, in particular, the Thursday call, and so we are looking for people in the community who are interested in helping us produce those. We have a couple of people taking live notes; for example, Juan and my buddy Pavel are both working on them for this call right now. We also have a QA role available. Suppose you or anybody you know is interested. In that case, this is a really great way to earn a little bit of DAI and impact the community by helping to produce a great archivable resource for anybody looking at these governance calls. So yeah, feel free to reach out to me on RocketChat; It's @David.u. Or just join us in the [Gov call summaries channel on rocketchat](https://chat.makerdao.com/channel/gov-call-summaries) and voice your interest there. I'll happily onboard you and put you on to how we do things. Thanks, Amy.
- LongForWisdom: Anybody has any questions? I would just like to say that I get to see the summary guys working on the stuff each week. They are very diligent at doing it and getting everything sorted out, so a big thanks to those people for doing that. If you're interested, please get in touch with David.

### Juan

#### Collateral Call Update

[16:11](https://youtu.be/gqnzAG8ky2s?t=971)

![](https://i.imgur.com/tf4R0BW.png)

- Regarding collateral onboarding, as I think Primoz mentioned it, or maybe it was Chris, we are working on a framework that I think we'll publish on Monday if everything goes well, but I'm very excited to see how it progressed. Here's a very short preview.

![](https://i.imgur.com/eFckB3l.png)

- Regarding the calls, we had an exciting call yesterday with REN and Uniswap. So Loong Wang from RenVM and Hayden from Uniswap came and answered some interesting questions and had great debates. If you want to see the video, it's already up in the [forum](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-11-wednesday-october-14-18-00-utc/4629); Amy posted it. The notes are coming soon; I think Gala and Pablo are already working on them.

![](https://i.imgur.com/gmIkkwK.png)

- Next Wednesday, on the 21st at 5 p.m UTC, we'll have Gregory Klumov from Stasis speak for EURS and then we'll have the Crypto.com team joining us as well. Join us, bring your questions and see you all there.

![](https://i.imgur.com/gPS6tDB.png)

- Coming soon, but I don't want to give any project away until it's confirmed. I want to talk about a couple of very interesting projects. I hope to have something confirmed very soon, and if you guys know someone who might be interested in joining us and presenting their project, please reach out either to them or me. We'll gladly talk to them to organize something.

![](https://i.imgur.com/Avbpohq.png)

### Nik Kunkel

#### Oracle Team Update

[18:31](https://youtu.be/gqnzAG8ky2s?t=1111)

- Apologies for being late; I had to wrap something up. Regarding updates on the oracle domain team side, you know we did the work for BAL and YFI. Oracle assessments are underway; in terms of the release package, we're deep into testing now, and we're kind of slated to start releasing that into production in about a week. We'd probably need a week to do the production deployment from there, so I think that's perhaps the biggest bottleneck for collateral onboarding of YFI and BAL, but I believe we are on track to do it by the end of the month.
- In terms of the status of other work we've been doing, I think I've mentioned this in a few comments on the forum and talked to a couple of you, but we've been working on a Uniswap LP Token Oracle. So that contract is looking pretty solid at the moment. We're starting to get some more formalized reviews, so I've asked Hayden to take a look at it. We've had conversations with Lev as well where he said he wanted to potentially take a look. I think the idea is that after a round of incorporating their feedback, we can feel pretty comfortable deploying that into production around the November timeframe to begin onboarding the first Uniswap LP tokens. However, with the caveat, we should probably have the debt ceilings quite conservative at first as we undergo audits simultaneously. As many of you might know, the audit process can be quite time-consuming, not in the sense that the audit itself takes very long but that the waitlist for auditors can be quite large, so we can't promise that the audit will come back quickly. We can't jack up the debt ceilings on these things, but I think, at the very least, we can start incorporating them into the protocol and setting us up for that down the road.
- In terms of BAL pool tokens, we haven't started the oracle for that. Still, it likely will follow the same design pattern that we used for the Uniswap oracle with the caveat that BAL pools have more dynamic allocation of assets between them instead of just the standard 50/50. But that seems more like a bolt-on type of thing than anything that fundamentally changes the larger design. So, that's it for me, does anyone have any questions?
  - LongForWisdom: There will be protocol whitelisting stuff next week as well?
    - Nik Kunkel: Yeah, so I submitted the polling votes for those, so B protocol wants to get whitelisted for the ETH-USD oracles with both the medianizer and the oracle security module. I've checked out the code; it looks clean. It seems like it's handling the data safely so that those polling votes will go out next Monday.

### Charles St. Louis

#### MIPs Update

[23:08](https://youtu.be/gqnzAG8ky2s?t=1385)

![](https://i.imgur.com/Hd5sM0L.png)

![](https://i.imgur.com/hbfdXTK.png)

![](https://i.imgur.com/C97UvqU.png)

![](https://i.imgur.com/QNXJaPF.png)

![](https://i.imgur.com/xH2JqoO.png)

![](https://i.imgur.com/6r3VLBf.png)

- It should be noted that the proposals that have entered the RFC phase are the same as last week:
  - [MIP17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021), which is a rewrite of the original one that was looking at DC adjustments as well as RP adjustments. However, this one is now proposed by PlanetX, and it's only for the weekly actual DC adjustments. I highly recommend checking that out, looking at the logic, and seeing if people agree is how we should move forward.
  - [MIP24](https://forum.makerdao.com/t/mip24-emergency-response/4009) is an emergency response system proposed by John Athman, which was proposed a couple of weeks ago, but it should be eligible for November.
  - We have the [MIP25](https://forum.makerdao.com/t/mip25-flash-mint-module/4400) Flash Mint Module by Sam, and that was a follow-up to the declarations of intent for creating a flash module for Maker. This is the technical implementation of that intent.
  - Next, we have the [MIP26](https://forum.makerdao.com/t/mip26-dssgov-governance-contract-redesign/4589), which is the Governance contract redesign, called DSS-Gov. It includes a vote delegation functionality.
  - Then, there is the [MIP 27 Debt Ceiling Instant Access Module](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625), which you can think of as an automated version of MIP17, although there are some differences. So if you're looking at MIP27, then you should look at MIP17 to compare and see if the manual processes transfer over to the automatic one.
  - Lastly, as Amy mentioned, there's [MIP28](https://forum.makerdao.com/t/mip28-operational-support-domain-definition/4627), which is the operational support domain definitions, ultimately defining the entire support domain and if it were to be approved, what the actions the domain would take in helping facilitate and running the DAO.
- In terms of sub-proposals, we had a [source cred funding proposal.](https://forum.makerdao.com/t/mip13c3-sp6-sourcecred-funding/4545)
- We had another [sub-proposal](https://forum.makerdao.com/t/mip28c7-sp1-subproposal-for-operational-support-domain-facilitator-onboarding/4628) as a follow-up to MIP28 to onboard Amy as a support facilitator.
- Lastly, there is the [sub-proposal for Calendar exceptions](https://forum.makerdao.com/t/mip4c2-sp6-calendar-exceptions/4546/4), which is an amendment to potentially skip, for lack of a better term, the December governance cycle.
- Lastly, there are still two pretty active new proposal ideas discussed in the forums for my update. The first one is the [flapper distributor](https://forum.makerdao.com/t/flapperdistributor-a-way-to-distribute-system-surplus-while-minimizing-governance/4591). This is a way to distribute system surplus while minimizing governance processes and [the proposal idea](https://forum.makerdao.com/t/replace-the-mechanism-to-burn-mkr-with-a-treasury/4415/17) for replacing the mechanism to burn MKR with the treasury, which has had some good discussions and debates in there.
- If anyone has any questions about what's happening next in polls or votes, feel free to ask in the forums or during this call before LongForWisdom begins the governance review.

#### Discussion

[29:00](https://youtu.be/gqnzAG8ky2s?t=1740)

- LongForWisdom: Thank you, Charles. I trust that if anyone has thoughts or comments on the inclusion polls, I know some of them are quite close, like the MIP21. Does anyone have any thoughts on that or the others that they want to share? Lev, did you want to share anything, or are you good?
  - Lev: I just wanted to say that there was also a [poll](https://forum.makerdao.com/t/different-approach-to-rate-setting/3889) about a different approach to rate setting. If it were able to be used, that would have to be holistically considered together with the rate-setting thing, so I guess at some point there ought to be a discussion about when, if ever, which would fit into the rates working groups deliberations.
  - LongForWisdom: Just reiterate that in case anyone missed it. Lev said that the MIP20 brings in the lever to operate on negative rates essentially. It's not clear how that would interact with the rate-setting working group was voted through as well, which is fair. I think we'll have to figure that out if it comes up. Anyone else?
  - Lev: It's probably worth adding that it was implicit considering the latest discussion around MIP20. Many people are speaking in support of it, including myself. However, we weren't proposing that MIP20 is something that will necessarily be used immediately or that there was an imperative to turn it on in the short term. I'm wondering if anyone believes that it should be used in the near future or if nobody wants to use it right now?
  - LongForWisdom: I'm not 100% sure, but does anybody want to chime in? Activating would be a whole new discussion. We'd have to make a poll to discuss this in more detail.
- Frank Cruz: What's the next step for RWA to be going to the executive? Is it another greenlight poll?
  - Charles: We just completed the inclusion polls. Now is the opportunity for them to move forward to be rejected. When the inclusion polls have successfully passed, they will be bundled up in a governance poll for the MKR community to vote on. If that passes, it will go onto the executive vote.
  - Frank Cruz: Okay, it's a bundle. Yes, I get it. Centrifuge and Matt can begin working on getting it ready?
  - LongForWisdom: It's not fully signed off. It won't be until the executive passes. But this is a positive sign for both of them. However, the bundle still can fail.
  - Frank Cruz: There are another sixty days to have at least one RWA with a debt ceiling?
  - Charles: I wouldn't speculate on a timeline. The team should speak on their timeline and proposals.
  - Lucas: We have been pushing it with full force. We are working with the risk team to develop and understand what the sensible parameters are. I don't want to commit to a timeline. We need to go through the executive vote, the forum based poll, and the inclusion poll. We need to go through the same process as other collateral types.
  - Chris Mooney: This is a slight bit different than normal collaterals in that real-world assets are going to require some reasonable expense on behalf of Lucas and Matt in the real world to sort of set up whatever legal structures they have. Imagine we get all this to the executive. These guys spend a few hundred thousand dollars trying to get legal stuff in order; there are many risks for them if we don't approve that executive. I'm just flagging this for the future. Maybe we want to think about getting the code totally ironed out and approved in an executive with a zero debt ceiling because then it's pretty much guaranteed that all you'd have to do is set up the parameter. That way, they would take a lot less risk with real-world expenses. Maybe Lucas or Matt want to speak on that. But I'm just flagging that it's slightly different from adding collateral that's already on Ethereum.
  - Matthew Rabinowitz: That's exactly the way I contemplate what you just said, Chris, it's precisely that. Without being presumptuous, assuming everything goes well the remainder of this month. The executive implemented is kind of at our discretion. In contrast, putting together trust and trust counsel and all sorts of enforceability opinions would be contemplated that there would be an approved debt ceiling. Still, it would be conditionally set at zero, which will take up until the point where I can prove or demonstrate to the community that I implemented what I said I would implement. We'll put together; I wouldn't call it a cheat sheet, but basically a cheat sheet of all the terms to go look at "document A page 37," etc. That basically would be my hopes or expectation that as soon as we have that after that, the executive could follow what would allow it to be in effect turned on.
- Lucas: From a technical point of view, though, it's precisely the same, right? Because the only way the debt ceiling could then be raised would still be with an executive vote. The question is, and there are two options we can of getting the technical side through. If that part is actually ready before the legal setup is ready, it makes sense. Still, if we are in a place where we have the legal setup ready at the same time, then we could also just opt to sort of start with the non-zero debt ceiling? Still, I do agree it could make a lot of sense to get the technology and get the tech in place knowing full well though that we need the same kind of votes and the same kind of governance process for both instances.
  - Chris: I guess you're right; you have the same risk. Even if we deploy all the code and ready with a zero debt ceiling, Governance could still choose not to vote that final executive, which is still a risk.
  - Matthew Rabinowitz: It is a risk but respectfully, if we've gone through the executive and we implement what we said we were going to do, not implementing the final executive could almost be construed as a governance attack some point.
  - Lucas Vogelsang: It's at least a breakdown of the process. Like we do have all these many steps before reaching consensus as a community, I mean, as long as people are allowed to vote on the final referendum, I look at it as Democracy. You have the community's final vote, but yeah, it would be a bit of a breakdown of the process, I think if we ended up being in that situation.
  - LongForWisdom: Yes, it would not be good, and if it were to happen, we would have to dig into that situation and figure out why. Unless there was an apparent reason, we'd probably end up voting again and assume it was some kind of fluke if we didn't have any feedback from the people that voted against.
- Lucas Vogelsang: I have a question for you, Charles, because you said the initial executive passing from Matt's proposal sets a debt ceiling to zero, and a follow-up executive vote is required using the weekly cycle. Here, the assumption is that the technical changes go through this normal prolonged process of a new MIP. Then, the follow-up set activating it or putting it to something greater than zero is going through a shorter cycle. Is that correct?
  - Charles St-Louis: Yes, if I am correct and just to your point earlier about when your proposal is passed for the liquidation system for the Centrifuge based assets, so if that passes, the actual onboarding of those assets will not go through the monthly cycle. They'll follow the newly approved collateral onboarding cycle, a weekly process that only requires a governance poll to gauge sentiment. If it passes, it can move on to an executive, which can happen within 30 days unless there are certain exceptions or unique cases. As you mentioned earlier, we wouldn't have to go through the governance inclusion and monthly executive process. It would be the weekly process for those assets once they're prioritized, of course.
- Brianmcmichael: It sounds like these are two distinct votes; There's the vote to prove the technical decision, but then the second vote is just to raise the fee or the cap, but it's also the Governance's chance to evaluate the legal documentation and ensure that those are up to snuff, right? So there's a little more to it socially than just the debt ceiling limit increase?
  - LongForWisdom: Yeah, I think that's true. So the way I picture this happening, assuming all these MIPs go through the monthly cycle, is layout the intention that Governance has agreed to do. They also lay out the technical parts, so what we would have then is, you know, once Matt and Lucas come back with the legal stuff that we're waiting on, then that'll be posted in the forum. The domain teams will also do their evaluations of the assets and set up all the stuff they need. Then we'll have the governance poll for onboarding it with certain parameters, which might be zero to start with. That will link to all those various threads, the evaluations, and the legal docs and stuff. So I think it'll be four votes that still need to pass. I'm not trying to count them. It would be like the MIPs, the Governance, this monthly government's bundle, the monthly governance executive, the weekly poll to confirm initial parameters, and then the executive to actually put the code in and deploy these parameters.
- Lucas Vogelsang: So, what does this mean? Coming back to Frank's question, how long will it take with the four votes?
  - LongForWisdom: So, the first two are part of this monthly cycle. They'll be finished by the end of October, and then the two votes after that; the weekly cycle poll and the weekly executive will happen at some week in the future, possibly in different weeks depending on how long or depending on how busy the smart contracts team is but that can be whenever we have all the information we need. That's somewhat dependent on you guys and somewhat dependent on the domain teams to do the evaluations.
  - Chris: So, in a perfect world, it could be in the first week of November, but ultimately it comes down to job priority right now.

## Procedural

### LongForWisdom

#### October MIPs Inclusion Review

[52:22](https://youtu.be/gqnzAG8ky2s?t=3143)

- LongForWisdom: I forgot to do the MIPs inclusion review, so I'll just do it now. All the inclusion polls that have passed will be included in the bundle poll next week. I don't see any reason, why not. They all passed the inclusion, so there's no reason to exclude any of them. They will all continue.

## Other Presentations and Updates

### Vishesh Choudry

#### The State of the Peg

[46:43](https://youtu.be/gqnzAG8ky2s?t=2803)

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

![](https://i.imgur.com/1U67Aig.png)

- Total Dai supply is just above 900 million.

![](https://i.imgur.com/rHGIZBx.png)

![](https://i.imgur.com/ewZ42Wi.png)

- Peg has been holding steady for the past week.
- The more significant thing to note is that lighter volumes for DAI<>ETH pairs and DAI<>USDC have been around 1.08 or 1.09. We've seen a couple spikes from Uniswap trades with some degree of slippage.

![](https://i.imgur.com/seGF3nt.png)

- ETH price during that time frame has been slightly rising. There is uncertainty on what's going on with farming yields or leverage activity in the wake of that.

![](https://i.imgur.com/cH6l2q2.png)

- Primarily Uniswap but not as high.

![](https://i.imgur.com/AhMIYVv.png)

- Before this, it was a higher average price and higher trading volume.

![](https://i.imgur.com/2FnsBib.png)

- \$280 ETH liquidation wall.

![](https://i.imgur.com/iQvXxP7.png)

- Prices that would have liquidated earlier, but the curve is smoother. At the end of the day, we've had this wall at around 200-250% collateralized.
- Simply through price raise, collateral management has been better. Less motion because of ETH price.

## Open Discussion

[53:21](https://youtu.be/gqnzAG8ky2s?t=3201)

- Frank Cruz: This might be a bit too early, but I was wondering with regards to yesterday's discussion of liquidation 2.0 if we've set up a short meeting with the Gauntlet about what precisely the parameters are that we will be testing and things of that nature. Yeah, maybe it's a little too early, right?
  - Chris Mooney: So we have a regularly scheduled thing with them at this point. Last I checked, they were attempting to get the deploys ready, so we are trying to unblock them on deploying liquidation 2.0 into their kit. They have to kind of mock-up this whole deploy thing, so they're not quite there yet. They're trying to build their infrastructure out using liquidations 2.0 right now.
  - Frank Cruz: So you think having them come on would be a good idea, or it's too early?
  - Chris Mooney: I'd say probably too early right this moment. Maybe in another couple of weeks. I'll bring it up in the next call we have with them.
  - Frank Cruz: Cool. And I think Lix had drawn up a nice little graph. Do you think the community members should come up with scenarios where there might be an attack or if liquidations 2.0 might have some issues, etc.?
  - Chris Mooney: Yeah, to that end on the call yesterday, I had kind of said, you know, this is the time if anyone can think of how they might want to exploit liquidations 2.0, how they would use it to turn a profit, you know, whatever types of exploits they can come up with. I mean, put your black hats on and think about liquidations 2.0 because we need to fix any of these types of attack vectors or add something that would make a risk that we didn't see yet. You can post in the forums or just message us directly.
  - Frank Cruz: Thanks a lot, Mooney.
- LongForWisdom: I actually have a follow-up question regarding the gauntlet stuff. Will they be testing various price curves for the auctions? Is that part of what they're going to be testing?
  - Chris Mooney: I believe we discussed that they would even possibly suggest the ideal sort of parameters in some cases, so I'm expecting that's sort of the data set that they give us and also if you weren't in the call yesterday, we were also kind of hoping, you know, this is more of like software as a service with them, but we were hoping that this entire kit would be available to Maker off into the future so we would be able to maybe once a week or whenever run a simulation on all of our assets and see what types of things that that scenario would have suggested for risk parameters. So we could see things change over time, right? That's probably in the meeting.
  - LongForWisdom: Yeah, that sounds great. That would be very useful, I'm sure. I imagine risk would appreciate having more tools like that.
- LongForWisdom: Maybe talk briefly about the potential surplus buffer increases because I know there was a signal a couple of weeks ago from Aaron that was sort of inconclusive. The more recent one by Primoz has been a little bit more positive. Does anyone have any thoughts on increasing the buffer, keeping the buffer the same, or anything like that?
  - LongForWisdom: Okay, I guess that's not a terribly interesting topic today. I would say that the most compelling point is that the total DAI supply has increased by a reasonable amount. The surplus buffer hasn't increased to match that, so it would make sense to increase it in terms of just keeping risk about the same.
- Primoz Kordez: I think the other question about the surplus buffer is what do we do after five weeks? Should we keep increasing it until we reach a 100% collateralization ratio? What's the general strategy with the crude fees on stable coins? There was some question on forums: is there a strategy to lower stability fees on those stable coin vaults? This means that the collateralization ratio will drop slower, and thereby if DAI price falls, you will see self-unwinding, which is positive because you wouldn't really need to liquidate them and all the unknowns related to it. On the other hand, if we make these fees really low, we have this self-unwinding, it will take more time to reach DAI parity because when the DAI price is falling when you have this self-unwinding, everybody who's self-unwinding is buying DAI, right? So the Dai price will fall over as well, but you will faster decrease the stablecoin exposure on the positive side. So my answer was that actually, Governance needs to decide what's the priority here. Do we want to decrease stablecoin exposure as fast as possible, but then the DAI price will just fall slower. That means that we'll have lower fees on stablecoins, possibly going lower than 4%. Or because we can have this extreme scenario where you could just increase stablecoin fees, let's say to 50%. You would decrease the collateralization ratio to 100% in about less than a week. Then, basically, until the DAI parity is reached, you wouldn't see any stablecoin unwinding. So the DAI parity could be reached quickly if you, of course, have the scenario of lower demand and higher supply. The stablecoin will still stay in the portfolio until that point. So basically, it's up to the Governance how long do they want to tolerate these stablecoins. I know that the only way out is to increase the DAI supply or hope that the DAI demand falls. Other than that, we still have some tools to manage the pace of unwinding.
  - LongForWisdom: Yeah, that was an interesting point. I pretty much didn't consider that it would speed up unwinding, or like the speed of the exposure or that decreasing would increase. That did make a lot of sense. Cool, all right, it doesn't seem like anyone's waiting to dive in and discuss something, so we can probably finish the call a little early this week.
- David Utrobin: There's one thing I would love to mention, actually. In line with what Primoz was saying, there is also another tactic. All of the vaults in USDC-A, obviously some of them will reach 100% quicker than others. Still, I think there was discussion both in the forums and at the end of last week's governance call concerning the idea of zeroing out the debt ceiling on USDC-A and then separately monitoring those vaults and opening up a USDC-C facility with the same parameters as USDC-A. What that would do is basically help us divide up the positions and not have to worry about some amount of them and still basically allow that arbitrage of the DAI Peg down to whatever, a dollar and a penny, because of that 101% CR. Nevertheless, then it would give us far more control over the USDC-A positions. So if anybody has any thoughts or comments on that, I'd love to hear them.
  - LongForWisdom: I think there have been a couple of things proposed at this point, maybe three or four different strategies we could take. I believe that one would probably be good, so I think we will end up in the same situation with the USD-C vaults, so I don't think the full that's used immediately I think it would still be spread over a few weeks or a month or two months or something. I think we still see some vaults in USDC, which had lower ratios than others.
  - Gregory Di Prisco: There is a chat in Governance and risk where Sam and myself were talking. You can save a little bit of efficiency on the auctions by trying to stop them around 100, but it's really, in my opinion, really minor compared to the amount of mental overhead we'll have to do to achieve it. I can see the argument for either direction, but personally, I don't think it's essential. So I don't think it's not an emergency thing where we need to do this. We can take a couple of weeks, analyze the quantifiable efficiency gains, and then decide on that.
  - SamM: Yeah, I'm definitely in the other camp on that. Even if we have like 0.1% or 0.01% auction inefficiency, it may end up costing us potentially tens or hundreds of thousands of dollars, in the end, to run it below 100%.
  - Gregory Di Prisco: Yeah, that could be right. I think we should try and put a model together. I can help with that, too.
  - Matthew Rabinowitz: And that's if you do auctions, right? At the same time, the real objective is to drive down the DAI price and have people close out their own positions. And then we don't have any loss, no?
  - SamM: Yeah, exactly, that is the ideal scenario: closing out their own positions.
  - LongForWisdom: Yeah, so obviously, the lower the positions go under, like 100% collateralization, the lower the DAI price has to go for people to close out. I think that's how it works, right?
  - David Utrobin: Yeah, that's right.
  - Primoz Kordez: That is why it makes sense to lower stability fees on stablecoins if you want to have a higher possibility of self-unwinding. But then, as I said, on the other hand, you might not be maximizing the fee collection, and it will take longer for the high price to fall. As I said, you will have the self-unwinding happening quicker, which is a positive. It is tough to say, right? Is it 2% or 4%? How can you really time the DAI price decrease with the fees accrued to make it really perfect? It's pretty much impossible because of the DAI price decrease; you know, there are many variables included to estimate when we can see supply. We could control supply to some extent or hope to onboard cool assets, but there's a demand side.
- Matthew Rabinowitz: Sorry, and I do have one question related to that: so if we ultimately one day went through and did this manually, at some point, I agree with Greg that the mental cognitive overhead right now is probably not worth it; maybe it might be in a couple of weeks, a month or two or six. But wouldn't there still be a 13% liquidation penalty for those parties?
  - Gregory Di Prisco: No.
  - Matthew Rabinowitz: Why not? Why wouldn't we?
  - David Utrobin: Well, I believe the auctions would try to recover 13% on whatever the debt is, but it's just not going to get it.
  - Kurt: David said it correctly. The keepers won't bid more than the collateral's fair market value, and there's no way to force them to do that. They will sit there hoping to get 13%, but they just wouldn't get it. We'll get approximately the value of the collateral minus some inefficiency factor.
  - Matthew Rabinowitz: Understood, now I'm not entirely familiar with how the keeper side of it works. I didn't know there was a 13% ding in effect on the principal at that stage.
  - MakerMan: Hey, can I chime in a little bit? So the only buffer for any kind of anything is that 1% there. That's it, there is no 13%. The second thing is that the interest rate is running into the surplus buffer, right? So you can kind of run the numbers, but you've got to run them against what's already gone into the surplus buffer. So the clock is kind of ticking on several things. I don't consider this an emergency. I hear many people saying, well, if we can get the DAI price down somehow, get people to close, that that's kind of an ideal situation, but we've been in this boat for a while, and I don't easily see us getting out of it. There's no 13% anywhere. We've got 1% to work, and that clock has been ticking into that 1% for a while now.
  - Matthew Rabinowitz: Understood, got it.
  - David Utrobin: And that's why it's probably not a bad idea to advocate for lowering the stability fee on USDC-A to extend that clock a little bit for Governance. I don't know if I'm missing something that might make that a bad idea.
  - SamM: Yeah, I'm definitely in favor of lowering the stability fee at some point.
  - David Utrobin: Especially since we're maxed out on the surplus buffer right now, and we're doing the surplus auctions, it might be responsible to lower the stability fees on USDC-A.
  - MakerMan: I mean, loosely speaking, some of that DAI that we thought we had that we are now buying MKR with we kind of don't have. You kind of really want to pull that back until you solve this problem.
  - Gregory Di Prisco: Well, that's not true. We have the DAI that we burned so far. It'll become a problem in a couple of months, but the DAI getting burned now is definitely ours to keep.
  - Matthew Rabinowitz: I do, however, want to caution or recommend, at least to the community, the notion that we're changing the stability fee on anything less than the underlying risk that's associated with the collateral. I think it sets a dangerous precedent from my perspective only to move the stability fee, in effect trying to mix monetary policy with risk policy.
  - MakerMan: There was one thought I had on this USDC-C because the one thing about opening that up, and I don't want to get into the details of, is that in effect that will reset the clock. Anything that goes in there, whatever the stability fee is, that clock starts when that facility opens.
  - David Utrobin: Yeah, absolutely. My whole point about the USDC-C thing is that you get to, basically, have more control over those positions where you don't have to manually liquidate. Still, you have more control since you can set the stability beyond each of those facilities as you need.
- Longforwisdom: I think there are some costs to adding new vault types. Obviously, the smart contracts team has to do deployments and things, right, and Governance has to vote on these things each time. So there are other costs as well. It's a quarter past the hour, so it's time to think of wrapping up. Any final points that anyone wants to make? Anything that anyone wants to point out?
  - Primoz Kordez: Yes, actually just one, I think. We need to have ETH-B vaults go live so that the debt ceiling is 20 million. I mentioned that we made the analysis. Actually, Lix made a really nice tool to measure how much of the vaults use DAI to farm on ETH vaults. One-third of that we can directly link to debt with DAI being farmed mostly on Compound and, particularly on Uniswap, a smaller part on Curve. I was thinking, if ETH-A vaults migrate to ETH-B, then their yield is boosted by 15-16%. The rate is not going to be as high. There's still going to be a positive outcome, so I am thinking that if those ETH farmers are rational, we should see a quick utilization of ETH-B vaults 20 million. Then I guess we'll need to decide how to go forward because, as I said, in theory, all the hundreds of millions of those vaults could migrate to ETH-B. We will need to decide our risk tolerance because we know there are some risks there and so on. This is just something to watch out for this weekend.
  - MakerMan: In general, I like that idea. I've kind of been an advocate of multiple vaults on the same collateral type with different parameters because you can use those with how the markets react and use them to give you a better gauge as to what the markets like either in terms of rate or liquidation ratio or whatever. They are a helpful tool even though inherently managing them will be much more complicated, which I agree with right out of the gate.
- LongForWisdom: Thank you for that very much, MakerMan. I agree that it will be interesting to see what happens after that goes live. I think we've come to the end of our time, so I guess we'll all go our separate ways. Thank you all for coming to this meeting. See you all next week. Thanks, guys!

#### Links from Chat

- [PAXG Domain Community Assessment](https://forum.makerdao.com/t/paxg-erc20-token-smart-contract-domain-community-assessment/3443)
- [Kovan Spells Pull GitHub](https://github.com/makerdao/spells-kovan/pull/22)
- [Kleros Fellowship](https://blog.kleros.io/kleros-maker-fellow-on-decentralized-finance/)
- [Maker YouTube Channel](https://www.youtube.com/c/MakerDAO/playlists)
- [RFC Proposals](https://forum.makerdao.com/c/MIPs/rfc/15)
- [Different Approach to Rate Setting](https://forum.makerdao.com/t/different-approach-to-rate-setting/3889)

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

- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Gala Guillen produced this summary.
- Tim Black produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.​
