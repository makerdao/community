# Episode 134: March 25, 2021

## Agenda

- [00:00](https://youtu.be/qI5oVwiQpEQ): Introduction
- [06:30](https://youtu.be/qI5oVwiQpEQ?t=390): Governance at a Glance
- [08:56](https://youtu.be/qI5oVwiQpEQ?t=536): Smart Contracts Team Update
- [23:00](https://youtu.be/qI5oVwiQpEQ?t=1381): Oracles Team Update
- [28:53](https://youtu.be/qI5oVwiQpEQ?t=1733): Risk Team Update
- [34:23](https://youtu.be/qI5oVwiQpEQ?t=2063): Real World Finance Update
- [38:00](https://youtu.be/qI5oVwiQpEQ?t=2280): Operational Support Update
- [44:24](https://youtu.be/qI5oVwiQpEQ?t=2664): Community Development Update
- [46:25](https://youtu.be/qI5oVwiQpEQ?t=2785): MIPs Update
- [49:45](https://youtu.be/qI5oVwiQpEQ?t=2985): February MIPs Submission Review
- [1:02:20](https://youtu.be/qI5oVwiQpEQ?t=3740): January Financial Presentation with Sebastien Derivaux

## Video

<https://www.youtube.com/watch?v=qI5oVwiQpEQ>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/qI5oVwiQpEQ)

- Hello everybody, and welcome to the MakerDAO scientific Governance and Risk meeting #134 taking place on Thursday, March 25th at 1700 UTC. My name is LongForWisdom. I'm the Governance Facilitator at MakerDAO. I'm joined by a host of Maker enthusiasts.
- I've noticed participation pick up a bit. If you want to comment or interrupt, please feel free. We like when people get involved.
- Please remember about daylight savings. However, most people have already gone through it in the UK, and possibly for others, it is coming up. Be aware that daylight savings time may affect your time for when this meeting happens.
- We have the standard agenda today, including some discussions, deeper discussions happen in the [Forum.](https://forum.makerdao.com/)

### Governance Update

#### LongForWisdom

[02:10](https://youtu.be/qI5oVwiQpEQ?t=130)

- We've had two executives in the last week. We had the regular [Friday weekly executive](https://vote.makerdao.com/executive/6054ddda17a042001ae0b052?network=mainnet#proposal-detail) and the [monthly MIPs executive.](https://vote.makerdao.com/executive/approve-march-2021-governance-cycle-bundle?network=mainnet#proposal-detail) Both of those have passed.
- Last Friday's executive contained increases to the maximum DC for ETH-A and WBTC-A. We set the maximum DC for ETH-A at 15 billion in hopes that we won't have to touch that in the near future. The WBTC-A maximum DC moved to 750 million, which should cover us for the meanwhile. We also set the debt floor(dust) on most Vault types from 2000 to 5000 Dai, except for ETH-B and non-standard Vault types such as PSM and RWAs.
- The monthly MIPs executive had a lot of stuff in it. All of which has passed. This included the Core Unit Framework, which passed three of the first Core Units, technical MIPs such as The Keg, Term Lending Module, and Liquidations 2.0. we also passed guidance for MIPs in the Multisignature Wallet Management MIP and the Parameter Proposals Group's MIP.
- This week's polls are finished. We had [a poll for ETH-B `dust`](https://vote.makerdao.com/polling/QmaP9wBh?network=mainnet#poll-detail), which was accidentally left out from last week. That poll ended with Maker holders agreeing to change the `dust` fee from 2000 to 15000, higher than the other Vault types but not yet implemented until the weekly executive vote. I was devoted to [increasing the system surplus lot size](https://vote.makerdao.com/polling/QmeLmzsa?network=mainnet#poll-detail), also known as the `bump` parameter, from 10k to 30k. Also, Governance voted to increase the DC and turn on the DC Instant Access Modules for some of the Uniswap LPs, specifically Dai, USDC, and Dai-USDC. If all goes well this Friday and [the executive](https://vote.makerdao.com/executive/increase-debt-ceilings-modify-risk-parameters?network=mainnet#proposal-detail) passes, we should see those DCs rise.
- Here is a brief update on what my Core Unit has been doing.
    - We've continued working on a project [Compass.](https://forum.makerdao.com/t/project-compass-dao-vision-setting-working-group/7079) You guys continue to take the lead and manage that process.
    - We've seen an update to the MIPs portal which hasn't been pushed to the production site yet, but we have it on staging; We've been fixing the MIPs content to make sure it all displays correctly. We hope to push that to production by the next week.
    - We've completed a stage of rewriting of MIP0, which will go through the Monthly Governance cycle. We should see that show up in the forum soon, as RFC, where it can be discussed. This rewriting concerns cutting down word count and making things more clear. Huge thanks to @blimpa for working on that. He's doing a great job.

## Weekly Updates

### Governance at a Glance

#### Elihu

[06:30](https://youtu.be/qI5oVwiQpEQ?t=390)

[Governance at a Glance: March 19 - 25](https://forum.makerdao.com/t/governance-at-a-glance-march-19-25/7199)

- Dai Summary
    - Since the beginning of this year, DAI supply grew from 1.1B to this week’s ATH of 2.9B. We are setting on the way of 3B DAI and I want to congratulate everyone on this call for making this happen.
    - Regardless of the rise in demand, DAI manages to keep its peg: the volume-weighted average price is at $1.002 for this week.
- ICYMI - Announcements
    - All 97 initiatives in the MakerDAO ecosystem (including community calls, grants, products, teams) are now [collected in one place](https://forum.makerdao.com/t/its-here-97-initiatives-from-the-makerdao-community/7151), thanks to @amyjung.
    - Also from the Operational Support Team comes the [Call for Proposals](https://forum.makerdao.com/t/call-for-proposal-grants/7166) program, serving to identify and fill any needs of MakerDAO.
    - The Project Compass [working group](https://forum.makerdao.com/t/project-compass-dao-vision-setting-working-group/7079) is now official. Their task is to establish a framework for future vision setting in the DAO.

##### Discussion Threads

- [Emerging global AML/KYC framework and DeFi (and Maker)](https://forum.makerdao.com/t/emerging-global-aml-kyc-framework-and-defi-and-maker/7104)
    - @Jacek raises the issue of KYC regulations as they relate to MakerDAO.
- [Should we burn the admin keys? An argument for minting MKR](https://forum.makerdao.com/t/should-we-burn-the-admin-keys-an-argument-for-minting-mkr/7175)
    - Building on previous discussions, @juanjuan advocates for a joint effort to discuss contributor compensation and potentially form a working group to tackle the issue of minting MKR for vesting purposes.

##### Signal Request Threads

- [Petition Letter to A16z](https://forum.makerdao.com/t/signal-request-petition-letter-to-a16z/7181)
    - Following a previous [discussion](https://forum.makerdao.com/t/proposal-petition-letter-to-a16z/7025), @iammeeoh is looking to gather consensus around a petition for a16z to get involved in governance.
- [Adjust the Surplus Buffer (March/April 2021)](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer-march-april-2021/6979)
    - @ultraschuppi is looking for consensus on raising the Surplus Buffer and potentially burning some MKR from fees.

### Smart Contracts Team Update

#### Christopher Mooney

[08:56](https://youtu.be/qI5oVwiQpEQ?t=536)

- We're not doing collateral onboarding right now. The collateral priority sheet work and collateral assessments are on hold while we work on liquidation 2.0, MIP45
- We've been working with Centrifuge on MIP22 and finished reviewing the Manager. We're taking the Manager from MIP22 and putting it in the MIP21 conduit. We reviewed that code; however, it's typically like a black box for us. The way we want to think of MIP21 is that once we've created the `urn`(vault type) and send Dai off to the conduit, the protocol will be giving someone a loan with the belief that the loan will be repaid. We did look at the Manager, and we're confident in their team. The code looked good to us. Nonetheless, the Smart Contracts team can't guarantee whether or not that code is working. We've discussed this with them. They are taking responsibility for whatever loan Governance decides to give and whatever DC is there. The following steps involve reworking the new deploy script for MIP21 to deploy their code more generically. Then they have to construct a spell that is a template off the MIP21 spell. Then they will do a bunch of RPC simulation tests as a result of that. We will deploy it to Kovan next week, and the code will be tested.
- There's been a lot of improvements to the spell readability. We've also been trying to make the Etherscan verify more usable and friendly for Governance and ourselves. It's becoming difficult for us to validate the spell on-chain. We're trying to use the API and break that up and make it easier to review.
- We've been working on fee-charging tokens like PAXG or USDT when they turn fees on. This requires work on the proxy actions. We will hand that off to UI to add those types of tokens and cycle back to PAXG once we've finished that work.
- Echidna tests for the L2 Optimism DAI bridge were run and got auditors engaged for the Sushi join adapter. ABDK(audit firm) is going to take a look at that. This is like "crop join", basically a simpler version of the crop join adapter because Sushi rewards are very simple. This also means we could add additional bits for crop join.
- There is work on DSS-autoline-readme. Many updates came back from ABDK on the LP oracle audit; No significant issues were found, and we're ready to replace oracles already there. Also, Uniswap v3 is coming out, so we will see how useful those oracles will be.
- We also had updates in Kovan with pricing.
- For MIP45, LIQ 2.0, as we construct the spell for Kovan to integrate this into the existing Kovan deploy, which is like a staging environment for the main net. We're seeing that there is a lot of minutiae in there. For example, we have a PR for `dust` consistency and the circuit breaker change that's going to be in the main code. Two PRs are going to happen. We've got the clipper mom that we discussed last week, which we're going to update to act as an instant module to circuit break the auctions. We had to change to the ilk-registry, the Dss-Exec-lib, the emergency shut down module. We've got DSS interfaces in there, and we also need to update the MIP45 doc. We will have a PR that will go out with a few minor changes suggested by auditors and clarifications. This should not invalidate MIP45.

![](https://i.imgur.com/UXsenTR.png)

- Highlighted line is where we are today.
- We're pushing the final Kovan deployment to the 31st.
- Our entire timeline was moved forward by about a week.
- LINK will be the first to go out, on the 9th followed by YFI.
    - [Parameters for LINK](https://forum.makerdao.com/t/link-a-liquidations-2-0-parameters/7180) were posted.
- Regarding centrifuge, MIP 22 could possibly go out on the 17th, 30th, or the 6th.
- Keepers and UIs seem like they should be ready on time.

##### Questions

- Chris: Any questions?
    - LongForWisdom: I have a request related to MIP21 and MIP22. It would be great if we will have documentation of those parameters, which include parameters for Governance and other stuff.
    - Chris: We have to set the token price that we create for them based on the DC. We will update that.
- Christopher Mooney: The risk team put a lot of work into the parameter selection, and people should review them.
    - LongForWisdom: I recommend anybody from Governance who has a large stake in the system to give this a review and discuss it.

### Oracle Team Update

#### Nik Kunkel

[23:00](https://youtu.be/qI5oVwiQpEQ?t=1381)

- Collateral Onboarding is stalled due to the busy schedule of the smart contracts team.
- We're wrapping our head around the Uniswap v3 update concerning the idea that liquidity is not fungible anymore. This is because you can dynamically deploy your liquidity into various ranges rather than one large continuous range. Instead of putting liquidity directly into Uniswap v3, you need middleman contracts to deploy a common strategy and issue people a token. That middleman contract will then deploy that liquidity into Uniswap. The contract can be adjusted. The thing that matters is the token represents a common chunk of the liquidity that's uniform. The question is, who is responsible for the execution side of these things?
- There is a lot of competition right now to be a lender to LP tokens. The issue is that everybody is rushing to make their own token resulting in fragmentation of total liquidity. All tokens should have shared liquidity and integration, but it's not the case right now. I'm currently speaking with AAVE and Uniswap, and other guys concerning this issue. Hopefully, we can have a gentleman's agreement.
- I've been working on the Oracle core unit. I am targeting to submit that by May 1st, 2021. This would give governance a month to review and discuss it and then give feedback before we go live in the June MIP cycle to be voted on at the end of June.

### Risk Team Update

#### Primoz Kordez

[28:53](https://youtu.be/qI5oVwiQpEQ?t=1733)

- We are making a framework for evaluating DCs of UNI LPs. I know it's not complicated. Still, we need to make sure there is UNI-ETH. We need to aggregate the full UNI DC that we have at Maker and check the limit. We need to make calculations and determine a new DC for the underlying tokens. Then we need to combine it into one aggregate DC for UNI and UNI-ETH. We should have this soon. Marcus is working on that.
- We released a proposal for the [LINK-A Liquidation 2.0 parameters.](https://forum.makerdao.com/t/link-a-liquidations-2-0-parameters/7180) Please, read it before it goes to the on-chain poll. In addition, Gauntlet [published](https://forum.makerdao.com/t/gauntlets-auction-assessment/7177) their report; I made a few comments on their proposal concerning the initial starting price parameter called `Buf`. We suggest applying a higher `buf` to prevent the expected auction duration from being too short.
- Otherwise, we're planning to make a similar proposal next week, starting with the YFI-A vault type and then proceed to other assets. The parameters won't differ much among Vault types apart from one parameter called `ilk.hole`. This parameter limits the number of pending liquidations per Vault type. It's similar to the `box` parameter under the current implementation. Still, this limits Vault-type pending liquidations, which helps us limit auction throughput per collateral. We also made a few new tools to measure risk metrics. One of them being on-chain slippage for collateral assets that are held at Maker. This actually helped us address one of the main parameters for liquidations 2.0, which is this auction throughput parameter called `ilk.hole`. It also helps us during discussions about DC, risk premiums, and such. However, this is still in beta; It's a work in progress. I suggest taking a look, and please provide feedback.
- We expect to list more metrics in the next few weeks. Then the ultimate plan is to have a live evaluated risk metric calculated for the whole Maker portfolio. This way, the community or any other risk analysts can observe MakerDAO portfolio risk in real-time. This helps us with DC, risk premiums, and even surplus buffer debates. Besides working on these tools, I'm making additional proposals for the liquidations 2.0 parameters.
    - LongForWisdom: Chris mentioned the target for the executive is the 9th. The Governance's plan would be to vote on Monday's parameters before the target, the 5th. This gives governance time to perform documentation of the parameters we've been working on. It also leaves time for comments in the forum.

### Real World Finance Team Update

#### Sebastien Derivaux

[34:23](https://youtu.be/qI5oVwiQpEQ?t=2063)

- On the collateral side, we've made progress with sub-collaterals such as People's and Harbor Trade Credit.
- The big news is that we will soon have NewSilver on-chain thanks to the Smart Contracts team and Centrifuge's work.
- To add to what @cmooney has said, we will make a DC for Tinlake, a system that will generate money from the Vault. We will use it as soon as it needs money to invest in one property because it's a real estate collateral. We expect them to take some Dai. As soon as a new investor invests in Tinlake, the contract will automatically push Dai back into the Vault to repay the debt or some of it. We will see if it works as expected.
- On other news, we had a [Core Unit presentation last Friday](https://www.youtube.com/watch?v=dyLIdGLTewo) available on Youtube, discussing what RWF is.
- We've made some progress on the analytic front. The financial statement of MakerDAO that I made on Dune Analytics is no longer working because it no longer supports the pivot table presentation. I spoke to them, and we may remake it in the future. I don't know when.
- I had meetings with many people from the Foundation on Vulcanize and other data stuff to take some expertise they have and work on a more robust solution that's not depending on a third party.
- Lastly, I've made a [budget dashboard simulator](https://forum.makerdao.com/t/discussion-core-unit-budget-incentives-and-vesting/7102/20) that I published on the forum. It's a simulator where you can add more Core Units to see what happens if you increase targets, Dai in circulation, leverage ratio, how much MKR token you want to give to all the team, and the split between teams. It's a simulator, so you can fork it as much as you want and make changes.

### Operational Support Update

#### Amy Jung

[38:00](https://youtu.be/qI5oVwiQpEQ?t=2280)

- I [posted the forum version of this update](https://forum.makerdao.com/t/operational-support-weekly-update-march-22-24-2021/7192) where you can follow all these links. If you scroll down to discussions, that's what @juanjuan and I have been working on a lot this week. There isn't a Know Your MIPs call, and, as we know about the collateral onboarding, there are no calls this week or the next. We do have one in two weeks, which is Bancor.
- We have done three launch pod sessions with Core Units: [Smart Contracts](https://youtu.be/_04sO6evht8), [Real World Finance](https://forum.makerdao.com/t/core-unit-launch-pod-sessions-session-4-real-world-finance-core-unit-rwf-001/6970), and [Content Production](https://www.youtube.com/watch?v=uLN5LaSaOU4), which is what we did yesterday. All three are now up on YouTube. Accountable came back for the community call that @Davidutro has run, so you can watch that relating to their various services.
- The next call we have is next Wednesday. We have two calls back to back. One of them is [Otonomos and OtoCo.io](https://forum.makerdao.com/t/core-unit-tools-04-through-otonomos-otoco-io-march-31st-16-00-utc/7174), which is different if you are trying to pay your contributors. That's another core unit tool if you are looking for some options for your Core Unit. Following them is the very hotly debated Framing a Framework for MKR's compensation call. This is where we will have discussions around MKR vesting, all piled into one. Try not to bring pitchforks; instead, try to bring intellectually stimulating questions and good energy. It is a debate around various perspectives.
- In terms of the Core Units and development, we have quite a few. Today Kathleen posted the [Strategic Marketing/Communication's Core Unit](https://forum.makerdao.com/tag/cpm-001). It is slightly different from the Content Production Core Unit. Still, some overlap may be there. There were questions regarding the Content Production side that might overlap. Feel free to give it a read.
- Also in RFC are Growth, Smart Contracts, Content Production, Governance Communications, and MakerDAO shop. No changes for new drafts.
- There are some interesting conversations. There is one where I summarize all the topics in the Smart Contracts thread concerning incentives, budgets, vesting, and so on. @juanjuan reproposed and framed a great way to talk about MKR specifically. Check that thread out. Many of the conversations there are what we want to discuss in the call that is happening Wednesday. He also [posted](https://forum.makerdao.com/t/1-2-3-blindspots-check-core-units-we-need/6972) vital functions not covered by current Core Units. Which is really important. We are developing from the bottom up, and there might be critical things, such as responsibilities or functions, that we might not be able to see right now. Still, in the transition after, the solution may be missing.
- I did post a [Core Unit's feedback](https://forum.makerdao.com/t/discussion-core-units-feedback/7094) discussion thread. If you have general feedback around the framework on how Core Units are being developed or anything like that, feel free to leave your thoughts and comments there.
- We proposed a new framework called "Call for Proposals." this was done because people who are not ready to jump straight into a Core Unit might want to run some proposals. If you have an idea, you want something to happen, but maybe you are not the person that wants to run it; you might just propose, "Hey, can we get some Call for Proposals around this?". Community Development just proposed one for grants. Anybody interested in potentially running a Grant Core Unit is just exploring some ideas around what grants, large or small, could happen inside the DAO. You can go ahead and propose. It's a very commit-less way. You are just proposing an idea. If you want to further pursue it into a Core Unit, you totally can. This also gives us some feedback points for various different proposals.
- Then, we have the summary of these 97 initiatives from the MakerDAO Community. I saw some great feedback and iterated on it. It is a v1 resource. That's why it's on the notion, just to get the information out there. If you want to drive it or look for a different way this can be done, please chime in and reach out.
- I want to share one thing. I just got off a call with a senior in high school. She and her friends talk about MakerDAO and its power on economics in her AP class, which is so crazy. She was also saying that there is a lot of impactful things the DAO can do. Keep that in mind! Stories like that remind us that we really do cool stuff for lots of generations.

### Community Development Team Update

#### Anna Kryukova

[44:24](https://youtu.be/qI5oVwiQpEQ?t=2664)

- This week, Sam joined the [Community Call](https://forum.makerdao.com/t/community-call-optimism-dai-bridge-mar-23-16-00-utc/7110) that @Davidutro runs to talk about the Optimism DAI bridge.
- We have a resource for all the initiatives that are going on in community development. We've been working with individuals in small groups joining some of the projects in the core community development team, working on evaluating various projects in the pipeline and the different deliverables that are still being worked on in the community development small teams.
- Foundation announced the [Sunset of the Development Grants Program.]https://blog.makerdao.com/maker-development-grants-program-sunsets/(https://blog.makerdao.com/maker-development-grants-program-sunsets/)

### MIPs Update

#### Charles St. Louis

[46:25](https://youtu.be/qI5oVwiQpEQ?t=2785)

![](https://i.imgur.com/vBNI0Gh.png)

![](https://i.imgur.com/dGPcWpl.png)

![](https://i.imgur.com/Jxaj50F.png)

![](https://i.imgur.com/ZzEV69u.png)

## Procedural

### March Governance Cycle Review

#### LongForWisdom

[49:45](https://youtu.be/qI5oVwiQpEQ?t=2985)

- I will do the March Governance Cycle Review from the Governance perspective. It was successful. In general, we passed everything we wanted to pass. We saw that the combined mixed bundled poll did not see a lot of participation, around 11000 to 12000 MKR. Still, some of the inclusion polls saw a lot of participation. The Term Lending Module had the most participation, which ended up getting to 95000 MKR. It's more than what we usually see. A lot of the others hit around 30000 or more.
- We see that participation happens for specific things that people want, which you would expect, and vice versa. It's difficult to draw conclusions from that. It's interesting how it varies over the different Inclusion polls in the various stages.

##### Discussion

- LongforWisdom: This is the chance to discuss last month's Governance cycle or next month's Governance cycle. Does anyone have any comments?
    - SamM: I've noticed that it got close to the expiry date of this month's monthly executive spell. For those who don't know, in the monthly spell, there are four days before the spell will deactivate itself and can't be passed anymore. We have a tight time frame with that. However, it passed this month. In the future, what if in these four days we have a whale who's away or something like that. We can have circumstances of voter apathy and result a monthly executive to not pass. I'm concerned about the stage we are at, in relation to triple voting to get things through. It might be a bit conservative for how quickly we need to move. For example, if one of these monthly executives doesn't go through, it would be bad. We would have to push back the Core Units forming by a month or two and be forced to rework some stuff. Of course, it could not pass for reasons that people don't want it to pass. I'm worried more about the case where people are 100% voted for it to go through but come across a voter apathy issue. We may want to consider suspending the monthly MIPs ratification section going forward. We can't do it right away but suspending that for the time being while we are in this rapid growth phase combined with this voter apathy phase is something to consider. Right now, we have an inclusion poll, a bundle poll, and we have an executive vote. That's three-levels of things that need to go through. Most of them usually get near 100% approval, which is why I'm worried about shooting ourselves in the foot with this issue.
    - CPSTL: I agree that it could result in some problems concerning the four-day-limit. Earlier this week, on the Governance domain call, we have spoken about potentially coming up with a new way to model the MIP3, aka the Governance Cycle, and make it more flexible for future approach. We could have an weekly open call on the Governance topics to chat about potential improvements to the Governance Cycle. Still, I want to hear people's opinions on suspending it in the interim.
    - LongForWisdom: echoing Sam's points, really, especially with the relationship with the final executive and how that can sometimes suffer from voter apathy; We have weekly executives every Friday. Once a week is not the best we can do but pushing for greater frequency becomes risky in terms of participation and the amount of MKR on the `hat` dropping. We've been aware that it is not ideal to have three in a 10-day-period or something of that number. In the past these things have came down to the wire. This cycle ended up being alright, but it's been a lot more on edge in previous cycles. Yes, it may be something that we should consider adjusting. We have the set of three polls going on because we have the executive at the end. For example, the second bundle poll is there because we have the executive. The advantage is that if you decide that the executive isn't needed, you get rid of the need for that second poll as well, which leaves you with just one. Most would agree this is probably better. The downside to losing the executive is that currently, the MIPs are hashed and stored on the blockchain in that spell, which is meant to be the immutable record of what MKR holders have voted for in case there's confusion or contention later over what was agreed upon. To be honest, we hash a lot of things such as polls, and we hash the executives. There's bever been a case where someone has said, "let's go back and look at the hash and figure out what we have agreed on because I'm confused and don't remember, or it was wrong". It could be overkill at this stage, right? I don't know. It's a hefty cost to keep paying for something that has never happened yet.
    - CPSTL: In addition to that, the Inclusion polls filter out the individual proposals, and then the Governance poll is the bundled poll where everyone agrees on these. Suppose you were to take out the executive, that allows the Domain Teams to take those proposals without the need of implementation, and then take them on a one-on-one basis. You could have bundled them in the future. In that case, they are a technical proposal that requires an on-chain action. The hashing aspect would only apply to the technical proposals and not the more process-oriented ones.
    - LongForWisdom: Yes, as Charles said, we discussed this last week because Sam reached out to me as well. There's a couple of ideas we have concerning how we could adjust things. I'm less keen on the idea of suspending it, and more leaning towards adjusting it because I think suspensions get weird. You suspend things and everyone gets used to it, and then it becomes the way you do things. Still, it's less legitimate because it's a temporary thing that was supposed to be a temporary change. There is also the complicating factor of the DssGov coming up as well, which slightly changes the monthly cycle requirements. We would want to build something that we know will work with that as well. We are going to think about it over the next few days. We are going to try and push a proposal out before April 7th, which could mean going into the May cycle to start implimenting in June. We will think about it a little bit next week, and we'll maybe discuss it again during the next Governance Call.
    - SamM: Chris brought up a good point. There are security considerations for these quick succession votes. The MKR on the `hat` gets dangerously low during the monthly executives due to the rapid turnover.
    - LongForWisdom: A couple of people are mentioning rapidity of things as well, and I want to avoid making the multi-cycle because we already have Governance processes that are faster if we really need to do things more quickly. Making the cycle shorter isn't necessarily a good idea because we already have tools that manage the shorter turnaround. But I completely agree with the points you've made concerning security and the fact you have to write it three times is annoying.
    - Brian McMichael: From a Smart Contracts' perspective, we run these monthly polls through the pause proxy as well. There's a chance for something to get slipped in there; it's not completely safe. Just keep that in mind. We are not actually changing anything in the system. Maybe we don't need to be running it through the pause proxy?
    - LongForWisdom: Yes. This will also involve several hours of work for Smart Contracts, others, and for myself. We will consider it next week and potentially give an update in next week's Governance call.

## Other Presentations and Updates

### Sebastien Derivaux

#### Budget Simulator

[1:02:20](https://youtu.be/qI5oVwiQpEQ?t=3740)

[MakerDAO Budget Simulator](https://docs.google.com/spreadsheets/d/1K2ebYb41BXcLzBcuUPfsxf72FThfZk61jwgx7koHfVk)

- I just put back the MKR rates. I removed them to initiate any discussion. This is just a model. All the numbers are fake. If you want to play with it, go to the "file" and make a copy to modify the parameters. You can modify all those parameters that are in yellow and orange. There are two components. One, which is a budget; it's we decide as a community that we want to make as expenses for the year. You can change the annual revenue. You can change the MKR price. We may want to have an alpha for annual revenues as expenses. Half of the expenses are used to give MKR tokens to people. It gives me good numbers to make some tests and see that all the collaterals are okay. We want the surplus buffer as the MKR outstanding target leverage ratio for understanding the target. The forecast of DAI for my scenario will be outstanding at the end of the year, which can also be changed. We can forecast that we want to have five billion at the end of the year in the budget. Still, the scenario of what we have in the budget is not a good element. What happens if DAI at the end of the period is not 5 billion but 10 billion? What if the price of the MKR token is not two thousand but four thousand?
- You can change the price of gas. I took all the sub proposals for core units. I took the budget in DAI, and removed the MKR one. For oracles, I put a random number in it. You also have a column on gas; I made those numbers up. Then you have the MKR that you want to allocate to people. The actual number is not important. If you want to spread the MKR token by the base expense, you can do it. You can change the MKR weight by whatever you want. It will automatically recompute the MKR that will be allocated to each core unit. Obviously, it also depends on this parameter. If you say that you don't allocate 25 million but instead allocate 12 million, you allocated fewer MKR tokens to people. By manipulating this column and this cell here, you can get whatever you want in the MKR token. Hence, you have the percentage of the budget used for each core unit. The most interesting part is that you have the MakerDAO P/L statement. Revenues and expenses are defined here. In this case, it's 34 million, and you get the net income as a combination of budget income and actual income. With the remaining net income, you will fill the surplus buffer. You try to achieve the target position, which is more or less the DAI at the end of the period multiplied by the target leverage ratio.
- You may want to lower the percentage for the DAI surplus buffer, and then you will get a different perspective. If there is still some income, it should be used to buy and burn MKR tokens. We start with almost 1 million MKR tokens. You issue some MKR tokens to the workforce, and you will buyback and burn some of them depending on other parameters. Then you get the end position for MKR tokens. I tried to get something that you can tune as much as you want and give you a perspective of what will happen. I know many people are concerned about having more than 1 million DAI. You can use a different scenario if you are above or below 1 million DAI. Are there any questions?
    - LongForWisdom: A few people saying that it seems very cool and useful.
    - Somebody: Seb, did you share that link in the chat?
    - Juan: You can find it in the [forum.](https://docs.google.com/spreadsheets/d/1K2ebYb41BXcLzBcuUPfsxf72FThfZk61jwgx7koHfVk)
    - LongForWisdom: Is there anything anyone would like to discuss before we end? I haven't heard from Lucas from Centrifuge. With the progress we're making on MIP22 and the Centrifuge assets, I hope they're feeling better with how things are going now. We'll leave it there. Thank you, everyone, for coming.

#### Links from Chat

- [Project Compass](https://forum.makerdao.com/t/project-compass-dao-vision-setting-working-group/7079)
- [Ops Support Weekly Update](https://forum.makerdao.com/t/operational-support-weekly-update-march-22-24-2021/7192)
- [Stratefic Marcomms Core Unit](https://forum.makerdao.com/t/mip39c2-strategic-marcomms-core-unit/7189/16)
- [Call for Proposals](https://forum.makerdao.com/t/call-for-proposals-cfps/7164)
- [Community Call](https://www.youtube.com/watch?v=BOP_9Rz4ooY)
- [Development Grants Program Sunsets](https://blog.makerdao.com/maker-development-grants-program-sunsets/)
- [MakerDao Community Events](https://calendar.google.com/calendar/u/0?cid=bWFrZXJkYW8uY29tXzNlZmhtMmdoaXBrc2VnbDAwOWt0bmlvbWRrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20)
- [Framing a Framework](https://forum.makerdao.com/t/framing-a-framework-for-mkr-compensation-wednesday-march-31-17-00-utc/7200)

## Common Abbreviated Terms

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GF`: Governance Facilitator

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
