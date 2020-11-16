# Episode 113: October 08, 2020

## Agenda

- [00:00](https://youtu.be/M-oHe86l1f0?t=000): Introduction
- [02:33](https://youtu.be/M-oHe86l1f0?t=153): Governance at a Glance
- [06:48](https://youtu.be/M-oHe86l1f0?t=408): Smart Contracts Team Update
- [14:14](https://youtu.be/M-oHe86l1f0?t=854): Oracles Team Update
- [18:27](https://youtu.be/M-oHe86l1f0?t=1107): Risk Team Update
- [20:53](https://youtu.be/M-oHe86l1f0?t=1253): Community Development Update
- [34:50](https://youtu.be/M-oHe86l1f0?t=2093): Collateral Calls Update
- [38:18](https://youtu.be/M-oHe86l1f0?t=2298): MIPs Update
- [49:37](https://youtu.be/M-oHe86l1f0?t=2977): October MIPs Submission Review
- [50:47](https://youtu.be/M-oHe86l1f0?t=3047): State of the Peg with Vishesh Choudry
- [56:45](https://youtu.be/M-oHe86l1f0?t=3407): Open Discussion

## Video

<https://youtu.be/M-oHe86l1f0>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/M-oHe86l1f0)

- Hello, everyone, and welcome to MakerDAO scientific Governance and Risk meeting #113 taking place on October 08th, 2020, at 16:00 UTC. My name is LongForWisdom; I'm MakerDAO's Governance Facilitator. I'm joined by a bunch of other Maker people, 31 and counting. I think we have some meaty updates from the various domains, so hopefully, it'll all balance out.
- A quick preamble for those who haven't been here before. Feel free to interrupt and ask questions if you want to while someone else is presenting or talking. I'll let you know if it becomes disruptive, but please, we'd love to hear from you.
- Before we dive in, I just wanted to give everyone a reminder. It's the time of the year where daylight saving becomes a thing again. This meeting used to be set in the PST time zone, and it's now set to UTC, which means it will jump for one hour for those in the Pacific time zone, I think, where it wouldn't have before. Just be aware that it's going to move by an hour when your daylight savings stuff happens. I can do this reminder for every meeting this month.
- Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Governance

### LongForWisdom

#### Governance at a Glance

[02:33](https://youtu.be/M-oHe86l1f0?t=153)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- We had some good discussions this week.
- Primoz from the Risk Domain team recently [posted](https://forum.makerdao.com/t/discussion-increasing-surplus-buffer/4644) on the Forum about the surplus buffer and the stablecoin issue I alluded to earlier. This is interesting and it explains some of the problems we are going to face with the stablecoin vaults and the surplus buffer.
- We had a cool [thread](https://forum.makerdao.com/t/calling-community-members-to-be-a-maker-representative/4519) from Matt Rabinowitz calling community members to fill the new role of the Maker Representative, which is a role that will help make an interface with companies in the real-world through the goal of onboarding RWA. It's pretty interesting there, and we have more people than I expected to be volunteering for that role, which is great to see. Thanks to all who did volunteer. I believe there's going to be a signal request following up shortly, if not already.
- We also had S_ben from SourceCred [post](https://forum.makerdao.com/t/sourcecred-trial-final-report/4569) the final report from the trial. We've continued the trial. However, this is a summary of the first three months. By objective and subjective metrics, it seems to have gone reasonably well; at least it's been more positive than negative, which is good, and I think it matches my anecdotal impressions.
- Signal consensus-wise, I don't think we had any new signal requests this week, but we've got some that finished recently. Matt Robinowitzhad just [mentioned](https://forum.makerdao.com/t/signal-request-approve-maker-representatives-as-an-oversight-role-for-real-world-assets-october-2020/4656) in the chat regarding approval of Maker Representative for RWA. We had "Should we take a more flexible and transparent approach to collateral onboarding," which was on-chain this week, and it has passed, which is cool to see. Stay tuned for some updates on that later in the meeting.
- The [signal request](https://forum.makerdao.com/t/signal-request-add-eth-b-vault-collateral-type-september-2020/4435) to add ETH-B for a collateral type also passed on-chain although there's a note on that and the smart contracts team will give an update on that as to when it will happen.
- Next week, we have the [Rates V2 signal request](https://forum.makerdao.com/t/signal-request-rates-v2/4481) moving on-chain.
- Also worth mentioning is that the [signal request to increase the auction surplus buffer](https://forum.makerdao.com/t/signal-request-increase-the-auction-surplus-buffer-system-surplus-september-2020/4469) has ended without reaching consensus whether to either increase before or after we begin doing `flap` auctions.
- Other Governance things I want to note: I mentioned this last week, but I've made some updates to the forum, changing some categories around a little bit. We now have a Collateral Onboarding category, which will have everything to do with collateral onboarding and other minor changes. If you have any feedback, let me know. I hope it's a positive change. People have told me they liked it, so that's good.
- I've also [scheduled](https://forum.makerdao.com/t/meeting-governance-q-a-sessions/4633) a new meeting, entirely optional, on Monday afternoons at 17:00 UTC. It will be a loosely structured and formal meeting to give those of MakerDAO a chance to ask questions about Governance. I will be there every week, but there's not any set agenda. It's kind of a "show up and ask questions" if there are things that you don't understand, or things you want more clarity on.

##### Discussions

- [Increasing Surplus Buffer](https://forum.makerdao.com/t/discussion-increasing-surplus-buffer/4644)
  - Primoz from Risk talks about some of the reasons to increase the surplus buffer.
- [Calling community members to be a Maker Representative](https://forum.makerdao.com/t/calling-community-members-to-be-a-maker-representative/4519)
  - mrabino1 speaks about the Maker Representative role and puts out a call to the community to measure interest.

##### Signal Requests

- [Should we take a more flexible and transparent approach to onboarding collateral?](https://forum.makerdao.com/t/signal-request-should-we-take-a-more-flexible-and-transparent-approach-to-onboarding-collateral/4380)
  - [This vote](https://vote.makerdao.com/polling-proposal/qmvazjqnlxuewwgtet9dyfkrnyhuxim6grpp8ufafm3gxf) suggesting changes to the collateral onboarding process is currently on-chain, ending very soon.
- [Approve Maker Representatives as an oversight role for Real World Assets](https://forum.makerdao.com/t/signal-request-approve-maker-representatives-as-an-oversight-role-for-real-world-assets-october-2020/4656)
  - mrabino1 proposes to get a formal signal from the community whether they would like to approve and implement a Maker Representative for RWA.
- [Add ETH-B Vault Collateral Type](https://forum.makerdao.com/t/signal-request-add-eth-b-vault-collateral-type-september-2020/4435)
  - Aaron_Bartsch proposes adding an ETH-B vault and uses this signal to crowdsource the initial parameters.
- [Rates V2](https://forum.makerdao.com/t/signal-request-rates-v2/4481)
  - hexonaut proposes the existence of a working group whose responsibility it is to propose rate changes in response to risk and the wider DeFi environment.
- [Increase the Auction Surplus Buffer (System Surplus)](https://forum.makerdao.com/t/signal-request-increase-the-auction-surplus-buffer-system-surplus-september-2020/4469)
  - Aaron_Bartsch proposes adjustments to the protocol surplus buffer either before or after MKR is burned.

## Weekly Updates

### Chris Mooney

#### Smart Contracts Team Update

[06:48](https://youtu.be/M-oHe86l1f0?t=408)

- There's a big update this past week.
- Last week, we did the weekly spell, which changed the base rate to zero. We also increased the debt ceiling on PAX and USDA to 100 million, and we approved the new TUSD implementation, which I think went live yesterday, October 7th.
- The team also did collateral assessments for YFI as well as BAL and GUSD. In the mandated actor meetings, we discussed LEND and AAVE and decided that we would table that for now. They are in the middle of a migration, and we want to see their new token consumption. We want to see them dogfood their token first. Once they think their token is ready, then we should add the token. I don't know if there will be any objections to that, but I think that's probably the safest course of action.
- Brian and Lucas worked on some tooling for executive spells, and we did two big things.
  - We pushed our [Spells: Kovan Repository](https://github.com/makerdao/spells-kovan/) public. These are all of the spells that we use to create executives for anything we would deploy in Kovan.
  - We also pushed the [Spells: Mainnet Repository](https://github.com/makerdao/spells-mainnet/) public.
- The mainnet repository starts with the executive spell that deployed MCD, so it has a full history of everything we've done since the deployment of MCD there. That's going to be very useful if you are an integrator or especially for all the people that are working on technical MIPs. You can now get an idea of not just what the executive spells look like but, more importantly, the thing that's been private this entire time has been our integration tests against those deployed executives. If people see other things that they want to update, ways to make it safer, take a look at those integration tests. That would be great.
- We also [posted](https://forum.makerdao.com/t/liquidations-2-0-technical-summary/4632) a Liquidations 2.0 technical summary; Please read through that. Next week we are planning to have a [stakeholder discussion for Liquidations 2.0.](https://forum.makerdao.com/t/agenda-discussion-liq-2-0-stakeholder-discussion-wednesday-october-14-2020-1700-utc/4631) Suppose you are expecting to use the new liquidation system or use the old one and want to know stuff about transitioning. In that case, this is probably one of the last opportunities the community is going to have to be able to add suggestions which may change the code and design before we perform a code freeze, so please check that discussion out. I think it's on October 14th.
- We've also [posted](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625) the debt ceiling instant access module technical MIP. Review that, if you get a chance. This should, hopefully, set debt ceiling adjustments to automation with a few parameters adjustments so that we won't have to deal with manual intervention all the time.
- Also, something very exciting is that we'll probably have some `flap` auctions coming up. We did a little [update](https://github.com/grandizzy/dockerized-auction-keeper) to the dockerized auction keeper for anyone that wanted to spin up auctions. I think that if you look in the keeper channel, there's a [video](https://www.youtube.com/watch?v=1gONHZFK0Mo) on how to use the auction keeper to do `flap` auctions but the dockerized auction keeper should be very turnkey. Just read the section titled "[README](https://github.com/grandizzy/dockerized-auction-keeper/blob/master/README.md)" and once you get it going and it should spin up without very much effort. Check that out if you get a chance.
- We also posted the [MIP26 for dss-gov](https://forum.makerdao.com/t/mip26-dssgov-governance-contract-redesign/4589), which is going to be a replacement for ds-chief and should have many more features which the community had asked from Governance. Check that out. You could make suggestions, and we would probably be able to mutate code.
- For the coming week, we are planning on working on the collateral onboarding priority sheet. It's a framework for how we're going to allow particular things to bubble up to the top. The domain team will probably be going through and assigning weights to stuff on that sheet. I'm sure someone will talk about that later.
- We are planning to move the join adaptors that we have to a different sort of "easy-to-use" public repository in attempt to make documentation for collateral onboarding easier.
- We will work on collateral assessments for UNI, PAXG, REN, BTC, and tBTC. Hopefully, we will get to all of those, but I don't know how long it will take. This is something that may require many weeks to complete.
- I want to mention that ETH-B is probably not coming out this Friday because it was too short notice for the smart contracts team, so we will likely be working on onboarding ETH-B as collateral for not this executive, but the executive after that. Even though the poll said tomorrow, we need another week.
- The domain team is planning on reviewing MIP14, MIP17, MIP22, and MIP25.

##### Discussion

- LongForWisdom: I'm just going to make it clear that the ETH-B postponement is largely my fault for not communicating properly. Apologies, and I'll try to avoid that in the future.
  - Chris Mooney: Well, now we're on a more adaptable collateral onboarding.
  - Brian McMichael: Even so, we don't want to be in a position where we're writing code and deploying contracts if there's a possibility that it may not pass.
- LongForWisdom: I have another question regarding the liquidations 2.0 stakeholders meeting. Will you be running a similar meeting for the dss-gov changes at some point?
  - Chris Mooney: Yes, I think that's probably a really good idea, I didn't have it on my list, but I will schedule something.
    - LongForWisdom: That will be great. Thanks!

### Nik Kunkel

#### Oracle Team Update

[14:14](https://youtu.be/M-oHe86l1f0?t=854)

- We resubmitted the oracle assessments for YFI, PAXG, and BAL. We also submitted the MIP12 yesterday on behalf of the other domain teams for Yearn(YFI) and Balancer(BAL.) That was mostly to secure some of the collateral onboarding for the month, but now since the vote passed to do a simplified collateral onboarding, we should be able to tackle at least a couple more for the month.
- Concerning longer-term projects, we have an internal Oracle running for Uniswap to LP tokens, so that works. I wouldn't say it's production-grade yet, and to feel comfortable putting something like that in production, I think it probably needs some more work and some more sets of eyes. We'll try to run that by Hayden as well as some smart contract wizards that we know within the space. I can share the source code for that pretty soon. I want to finish running up some tests to get the low-hanging fruit, and then we'll open-source it so everyone can start pointing what is wrong with the thing. Hopefully, we can get Uniswap LP tokens soon. I think that will be a big deal considering how much liquidity some of those have. The USDC, DAI, ETH, REP, and BTC seem to be pretty popular pairs on Uniswap at the moment.
- We are also starting to look at the Balancer side of what we can do for a Balancer oracle. It's a little bit different. Uniswap has a unique way of calculating normalized types of reserves. Normalized being if you construct atomic transactions, you can move the two assets' ratios using the flash load. With Uniswap, you can reconstruct a normalized ratio immune to that ratio imbalance, but with Balancer, that seems to be a little bit harder. I'll be talking with Fernando to see what he thinks the best solution will be for that particular issue.

### Primoz Kordez

#### Risk Team Update

[18:27](https://youtu.be/M-oHe86l1f0?t=1107)

- We published [YFI](https://forum.makerdao.com/t/yfi-collateral-onboarding-risk-evaluation/4575/5) and [BAL](https://forum.makerdao.com/t/bal-collateral-onboarding-risk-evaluation/4600/3) collateral risk evaluations this week. Evaluations were made by our new members Will and Monet Supply, and I think it's cool to see more community participation inside the Risk Team at Maker.
- PAXG and GUSD also are being finalized and will be released within the upcoming week. But what we are also currently working on is ranking assets from the greenlight pool that aligns with the new flexible approach to collateral onboarding, which has just passed today. I think this was mentioned already. Nonetheless, we're filling this newly established prioritization table that should be publicly available soon, and hopefully, we should soon have all the proposed assets ranked, which should give us a better idea of priority when we evaluate them for collateral onboarding.
- We also started preparing a new framework for calculating ongoing risk premiums and competitive rates. This is in line with the post that Sam published where the idea is to start using new rates setting approach, I think, on October 19th. The idea is that we would already have some document prepared where we would suggest specific rates on this analysis that would be applicable, and it would finally be proposed by this so-called rates working group.
- Finally, as LongForWisdom had mentioned, I posted this text in forums today suggesting to increase surplus buffer due to the fees on the debts from stablecoin collateral explaining that I believe we can't rely on full collection and therefore, it might be a bit inappropriate to start using that money for surplus auctions. I think we can debate it a bit later where I can outline some of my thoughts.
  - LongForWisdom: Yes, we will bring this up for debate another time.

### Amy Jung

#### Community Development Team Update

[20:53](https://youtu.be/M-oHe86l1f0?t=1253)

- I'll begin with the Community Development side. We have a really exciting collaboration that will happen soon with Kleros, and it's going to be a co-fellowship for a collateral legal assessment framework. There is going to be [an official announcement](https://blog.kleros.io/kleros-maker-fellow-on-decentralized-finance/) coming soon. You guys are getting the first teaser.
- The second piece I want to mention is that Governance Communications, as you guys have seen, have been creating these snippets that are shorter versions of both the G&R summaries and Maker Relays. One thing is, if you guys have feedback, whether you think it's is great or don't use it at all, or how it could be better, all comments and feedback are really useful for the team. It allows us to improve Governance Communications.
- We had six meetups granted and hosted during September. We continue to fund meetups for all individuals interested no matter where they're from. Please, if you have people who are interested or maybe you want to host a meetup, [you can reach out.](https://community-development.makerdao.com/en/funding/meetup-funding)
- I want to bring light onto our [YouTube channel](https://www.youtube.com/channel/UC4jqZlzQHUhzqf5rMd5ywTw) because we have all video recordings of the collateral calls and G&R calls. Most of these videos have summaries attached to them as well. In additon, we have Community calls. The most recent video is about how to participate in a surplus auction with ETH.
- You've seen badges go live last week. Please, redeem your badges on the [Forum](https://forum.makerdao.com/). I know that some people have been doing it and that is pretty awesome.
- We also funded another grantee and will be announcing more grants soon.

![](https://i.imgur.com/Ckh07fK.jpg)

![](https://i.imgur.com/Not7vWj.png)

- Yesterday, I posted a new MIP for an Operational Support Domain on [MIP28](https://forum.makerdao.com/t/mip28-operational-support-domain-definition/4627). By the way, these have QR codes for the forum post itself. I know it's pretty long, which is why I want to give an overview of what it is. It's going to be pretty intimidating when you see it but essentially you have the main domain information in the first component, then there's facilitator information in the next three, there's no support facilitator and contributor list but I will get to that in a second. The last two components are pretty standard; There's nothing crazy in it but I am proposing myself as a facilitator which I'll get into in a little bit as well.
- I'm going to cover the first component regarding main domain information and what the operational support domain is supposed to be. It's mostly focused on development and management of distributed operations at MakerDAO. What does that mean? If people have worked in operations or if you know people in operations, it's hard to pinpoint what exactly that is because it varies from company to company, or organization to organization. This is something that I'll get into more details in a bit as well, but mostly it concerns cross-collaboration as we're going to have more and more domain teams as well as individuals, which will make sure that MakerDAO's resources are allocated more efficiently across the teams. I just added a small bit covering the philosophy. I believe that one of the main objectives is to keep the domain teams independent and autonomous in terms of how they organize their own teams and resourcing, as well as getting and receiving the resources. This is something to keep in mind in terms of how I envision this domain moving forward.

![](https://i.imgur.com/AtIzYNW.jpg)

- The support domain has three main functions:
  - One is General Operations, which I'll get into in a little bit.
  - Then we have the Cross-Domain Team Coordination as I mentioned across different domains, across the different teams. As we grow more, it's just going to get a little bit more complicated. Right now we have a good amount that is more self-sufficient.
  - Finally, we have Grants Management and Distribution, which is a lot of what we've already been doing. It's just now formalized a bit more into a role.

![](https://i.imgur.com/VX0Mo4L.jpg)

- I've separated them in two kind of functions: short-term and long-term. We are in this transitional state where the DAO is just getting settled into the growth period soon. Because of that, we obviously don't have a lot of domains and therefore the short-term function of this operational support is actually just to bootstrap some of these initial ones. It's mostly because we don't want to pop up too many domains very quickly, so it's kind of alleviating that pressure and a part of that is around the third function, which is how we bridge and manage these resources from the Foundation. The Foundation is a good resource; it's a validated point of how we've been able to bootstrap the development. Now we are trying to decentralize a lot of these operations.
- Then, there's been questions around financials and related things but going from Foundation operations to decentralized MakerDAO is not a clear one-to-one, and we're just trying to facilitate that in a secure way because we do have shared managed resources. That's where we are trying to iron out the details.
- Part two is this idea of a minimal operational framework concerning how resources are distributed, what resources are distributed, and then the guidance documentation around them that will be coming soon. This is mostly what I've been working on. As I mentioned, it is not that straightforward, therefore we are trying to work out something transparent that is really simple and easy for people to understand.
- The final short-term function is about support. We're going to be more hands-on with the domain teams. We know it is a weird transitioning, especially if there are teams coming from the Foundation. As we grow, we are hoping to make that a little bit more scalable.
- That leads into the long-term functions. There will be a way that we need to identify what kind of bottlenecks and opportunities there are for us to be more effective in the coordination. Currently, we are just trying to get things done but you guys are starting to see a piece of that when it comes to Collateral Onboarding, for example. We are doing this as we speak, but it's just more formalized. I think it's important that we incubate the smaller working groups and proto teams early on to catch and identify them. We will be able to nurture that so they can turn into a more formalized team.
- Then, as I mentioned, the budget proposals and payments are coming soon. We're working with finance now to figure out:
  - What would be a good kind of MIP framework for that as well as the onboarding.
  - How should the main teams onboard.
  - What do they need, etc.
- Eventually this is a piece of the account permissions, so we are going to have shared MakerDAO resources, which are going to be owned by the [Dai Foundation](https://forum.makerdao.com/t/announcing-the-dai-foundation/1046). We are trying to figure out what that process looks like.
- The final piece is a sub proposal that's attached to the domain. That is all about what the domain itself is and what it's supposed to do. I'm not going to go into details to sell you my credentials. You can do that in this separate QR code that will lead you to the sub proposal, but essentially this is a lot of the work that we've already been doing. We're just formalizing it a little bit more. For me personally, I'll just be working a lot more on the resourcing: the people side, how we help individuals and keep this diverse background and recruit more people into working for domains as well as the onboarding, what does that experience look like, and then the grants and bounties that we're currently doing. I'll be creating incentives, for example, the [Collateral Onboarding grants](https://forum.makerdao.com/t/collateral-onboarding-grants/4252) are a part of them.
- I really encourage you check the MIP itself and ask any questions.

##### Discussion

- LongForWisdom: I would just say, personally, that I've been working with Amy more since Rich left, and I've been continously impressed by her. Thank you for making my life easier. I hope this will pass and you'll make everyone else's lives easier as well, which you have been doing so far. Does anyone have any questions now?
- Frank Cruz: Would you say that you could recommend people who already work in HR, Finance? If you have friends or friends of friends that work in that department, or if there's something that you think someone can do as a side gig, or does it require 100% focus in order to be effective?
  - Amy: As our process currently fits, anyone can propose themselves as a facilitator or a contributor. We actually do have someone that will be helping on the cross-domain collaboration side. I don't want to out people because I think we haven't yet went through the full conversations, but a lot of the resources, for example, we are getting support from a lot of the people in the Foundation in order for the Foundation to have a people's team. We are welcoming contributors at that level, I think more thoughts by experts in certain areas are always welcome such as in Legal or Finance. Definitely feel free to introduce them, and if they feel that they want to represent themselves, they can as a support facilitator.
- Frank Cruz: Zooming out into the future, two years from now, I guess you couldn't have an attorney that works for a large law firm and then also works for the Foundation, right? That just wouldn't work. I mean, to convince somebody to go from Finance or HR into this field, they might not understand it. So to recruit someone that has already been working for a large company who are the head of HR, it might be difficult to get them to come to work for the DAO in the year 2023. I'm just thinking ahead, but maybe too far ahead.
  - Amy: If I'm hearing this correctly, there are kind of part-time options or ways to experience what someone can get from ground zero and transition to working in the support domain. That's essentially the onboarding stance that we want to clarify. I think that everyone has that question across the board; "how do I work for the DAO," "how much do I have to know," and things like that. This is something we are building. There is definitely part-time opportunity, which is also part of why we have grants. Grants are a great way to propose something if someone is not necessarily wanting to work full-time for the DAO but still want to contribute to something like a legal assessment framework. We are trying to create the structure for people to be more on the contributor level where they can be loosely tied. It doesn't necessarily have to be a full-time job, and then there are also domain facilitators who are able to be more focused on that as full-time. There is some kind of leveling in terms of commitment. What's important is that Governance just wants to know exactly who is working full-time and where these main resources are going.

### Juan

#### Collateral Call Update

[34:50](https://youtu.be/M-oHe86l1f0?t=2093)

- Chris and Primoz already mentioned that they've been working a lot on the framework to be able to prioritize different collateral types and be able to be as transparent as possible with the broader community in order to have a sort of scientific mechanism that is be able to focus our energies, so ideally this will help all the domain teams come together.
- Yesterday, we had a very interesting call, and this is looping back to what you mentioned earlier during GaaG regarding the post by Matthew Rabinowitz. He made a concise presentation, and then he answered many of the questions that every participant had. It was very interesting. The [video](https://www.youtube.com/watch?v=6UiF3gB215M) is already on YouTube. Gala is already working on the notes for that, but we should have like a summary to help with that topic. If you want to join the 'RWA' working group, reach out to @SebVentures on RocketChat or in the Forum. We're happy to move this forward.
- The last topic we had yesterday, an exciting call with Matt Longo from Keep Network and Fernando from Balancer Labs. It was super enjoyable; again, the [video](https://www.youtube.com/watch?v=cPDwGHxuNtY) is on YouTube so you guys can check it out.
- Next week, Wednesday 14th at 5 PM UTC, we're going to have Lung, the CTO from REN BTC–I hope I am not mispronouncing his name–as well as Hayden from Uniswap. We'll be discussing these two exciting projects. Please join us. The agenda is already in the [forums](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-11-wednesday-october-14-17-00-utc/4629). Join us; I believe these calls' beauty is when people show up and have interesting questions, which makes them rich conversations.
  - LongForWisdom: Yeah, great, thank you. I don't often go to those meetings, but I went to the last one with Matt from Keep and Fernando. It was good, it was interesting,and you learn more about both projects. There were some great questions from various people.

### Charles St. Louis

#### MIPs Update

[38:18](https://youtu.be/M-oHe86l1f0?t=2298)

![](https://i.imgur.com/ZuFQM8s.png)

![](https://i.imgur.com/trtlSLA.png)

- We had a lot of MIP proposals come in this month, which is very exciting.
  - We had [MIP14](https://forum.makerdao.com/t/mip14-protocol-dai-transfer-update/3844/11), which allows the protocol to transfer Dai to specific addresses.
  - [MIP20](https://forum.makerdao.com/t/mip20-target-price-adjustment-module-vox/3196), It's the target price adjustment module which was extensively talked about for the last couple of months, proposed by Led.
  - And then we had two RWA proposals.
  - Lastly, we've got [MIP23](https://forum.makerdao.com/t/mip23-domain-structure-and-roles/4021) domain structures, and roles, which is a new structure on how to onboard domains and manage them and looking at the roles of facilitator and contributors and how those are structures and communicate together.
- If anyone of the authors wants to speak after I finish my segment, they can go ahead and give an overview of what those proposals are, as well as anyone in the call who has injected these documents on GitHub or the forums.

![](https://i.imgur.com/Qss9NAe.png)

![](https://i.imgur.com/2BVLuEE.png)

- We've also seen a lot of new proposals come into the RFC Phase. Those MIPs are:
  - [MIP17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021), which is a rewrite of the original one that was looking at DC adjustments as well as RP adjustments. However, this one now is proposed by PlanetX, and it's only for the weekly actual DC adjustments. I highly recommend checking that out, looking at the logic, and seeing if people agree is how we should move forward.
  - [MIP24](https://forum.makerdao.com/t/mip24-emergency-response/4009) is an emergency response system proposed by John Athman, which was proposed a couple of weeks ago, but it should be eligible for November.
  - We have the [MIP25](https://forum.makerdao.com/t/mip25-flash-mint-module/4400) Flash Mint Module by Sam, and that was a follow-up to the declarations of intent for creating a flash module for Maker. This is the technical implementation of that intent.
  - Next, we have the [MIP26](https://forum.makerdao.com/t/mip26-dssgov-governance-contract-redesign/4589), which is the Governance contract redesign, called Dss-Gov. It includes a vote delegation functionality.
  - Then, there is the [Debt Ceiling Instant Access Module](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625), which you can think of as an automated version of MIP17 although there are some differences. So if you're looking at MIP27, then you should look at MIP17 to compare and see if the manual processes transfer over to the automatic one.
  - Lastly, as Amy mentioned, there's [MIP28](https://forum.makerdao.com/t/mip28-operational-support-domain-definition/4627), which is the operational support domain definitions, ultimately defining the entire support domain and if it were to be approved, what the actions the domain would take in helping facilitate and running the DAO.
- In terms of sub-proposals, we had a [source cred funding proposal](https://forum.makerdao.com/t/mip13c3-sp6-sourcecred-funding/4545). I haven't looked at that one yet. If anyone is on this call and wants to provide more information, please do.
- We had another [sub-proposal](https://forum.makerdao.com/t/mip28c7-sp1-subproposal-for-operational-support-domain-facilitator-onboarding/4628) as a follow-up to MIP28 to onboard Amy as a support facilitator.
- Lastly, there is the [sub-proposal](https://forum.makerdao.com/t/mip4c2-sp6-calendar-exceptions/4546/4) for Calendar exceptions, which is an amendment to potentially skip, for lack of a better term, the December governance cycle.
- Look these over. If people are opposed to them, we could perhaps do a shorter type of governance cycle or go over the weekly cycle in the meantime. But it's a topic that people should go over and consider, and I think, LongForWisdom, if you want to talk a bit more about that after my segment, please do.

![](https://i.imgur.com/Ra2RUVl.png)

- The Collateral Prioritization Framework will be made public, either today or soon. I guess someone else can provide an update on when it will be public, but this will be very good, as Juan mentioned, because it will provide transparency and a general idea of which risks and metrics are being taken into consideration when the domain teams are deciding which collateral types they want to prioritize for each cycle's onboarding.

![](https://i.imgur.com/jjygP2N.png)

- If you're interested in that, you can go check them out under the [proposal ideas](https://forum.makerdao.com/c/MIPs/proposal-ideas/21) category on the forums. If one of the authors wants to talk about any of their proposals now, I think he can go ahead.
  - Matthew Rabinowitz: I'll be covering mine. Rather than taking too much time of the community for this call, I've set up a call, and it starts at the end of this call to do an extended Q&A. I'm going to leave the [link](https://forum.makerdao.com/t/doi-off-chain-asset-backed-lender-to-onboard-real-world-assets-extended-q-a/4296?u=mrabino1) for the Zoom meeting for the forum post. If you can join for that meeting, that would be great to answer any questions about it and talk about setting up a secure lending structure to the loan capital to off-chain projects.
- LongForWisdom: Great, thank you, Charles and Matt. Anyone else wants to describe their MIP's briefly? I think we heard about many of them a couple of times already, so maybe that's not super necessary. I guess I will just briefly talk about mine.
  - The [proposal](https://forum.makerdao.com/t/mip4c2-sp6-calendar-exceptions/4546) to skip the December monthly governance cycle is because the default ends, I believe, on December 28th, which is not great for several reasons. Everyone's going to be busy, So I think it's unlikely that it will come out with particularly representative results even if it does go forward, which is why I suggested that we skip it for December. We'll still have the weekly cycles, though we might skip the very last weekly cycle again. If you guys have feedback on that, feel free to drop it in the forum thread.
  - The other element that I pressed was MIP23, the domain structure MIP, which defines a template for domains to define themselves using the MIPs process such as Amy's operation MIP. An example of that template use seemed to go reasonably well. It may have been super complicated for some people, but what I'm hoping is that template is better than just trying to write the whole thing from scratch.

## Procedural

### LongForWisdom

#### October MIPs Submission Review

[49:37](https://youtu.be/M-oHe86l1f0?t=2977)

- Ok, there are eight proposals, five MIPs, and three sub proposals. All of them seem to meet the requirements to be formally submitted. All eight of those will have inclusion polls on Monday, October 12th. We won't include the collateral onboarding sub-proposals as part of this monthly cycle because we will be including it in the weekly cycle.

## Other Presentations and Updates

### Vishesh Choudry

#### The State of the Peg

[50:47](https://youtu.be/M-oHe86l1f0?t=3047)

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

![](https://i.imgur.com/zoACK8G.png)

![](https://i.imgur.com/g4iAp2t.png)

- There's not much to say about this week. If you look at the volume for DAI-ETH trading, it's been comparatively lower than, let's say, a couple of weeks ago. It's been sitting pretty much smackdown at a 1.01 USD and exhibits the same distribution of trades across different exchanges. It doesn't change much. The price graph looks very similar to two weeks ago, or more or less for the last month, with mid to low volume trading pretty much around 1.01 USD as well as minor fluctuations in both directions. I think the general sense is that with uncertainty in ETH price and with an absence of the creation of a bunch of new farming opportunities in the last couple of weeks, things have been comparatively quiet.

![](https://i.imgur.com/ylMOy6l.png)

![](https://i.imgur.com/dajxVcm.png)

- If we look at some of the collateral types, we saw a smoothening of the liquidation ratio walls for ETH, except for the lowest one, which has persisted, and still around 280 USD. The funny thing is that with ETH price moving, that wall has stayed. There's been some collateral management there, but we've seen this kind of sloping distribution of collateralization ratios of most risky to least risky, so the interesting thing is that overall this is an increase in the liquidation risk for ETH.

![](https://i.imgur.com/9bID6Am.png)

- We're sitting at around 860 million DAI minted, 340 million ETH, about 360 million from USDC-A, 75 million from WBTC-A, 56 million from TUSD, 300 thousand from MANA, and 25 million from PAX, as well as smaller amounts from LINK, LRC-A, COMP, ZRX, KNC, USDCB.
- So, it's the same story as last week; A decent chunk of the collateral portfolio is essentially in stablecoins, and there hasn't been significant movement in those minted amounts, nor have there been significant movements in price over the last week. Therefore, I would say it has been pretty quiet.
- If there's a specific thing people are curious about, I'm happy to answer. However, the general idea is that there hasn't been much movement over the last week.
  - Matthew Rabinowitz: Do you see a slowdown with the number of vaults created? Or a slowdown in the number of collateral per Vault?
    - Vishesh Choudry: Well, if we look at collateral per Vault, there are a fair amount of vaults that are smaller with little amounts of both debt and collateral, and there are also a fair number of vaults that have a quantity mid-to-large of collateral but very little debt in them. That's this bucket; there's about 17 million DAI from ETH, at least, where you have vaults with very little debt but have some collateral sitting in there. They still exist. Maybe we can touch on creation rates next time, but in terms of where most of the debt lives for each collateral type, that has not changed. Where you have, say the top five or six vaults, for ETH, it's even much more significant for WBTC and the stablecoins where you have a few of the largest vaults accounting for a substantial chunk of the debt there. I would say ETH is one of the more robust portfolios where you have a lot more distribution of this debt, but even still by and large, when it comes to vault types, a few large users account for a decent chunk of your core supply. Any other questions?

#### Discussion

[56:45](https://youtu.be/M-oHe86l1f0?t=3407)

- LongForWisdom: Okay, so we're going to be moving into the more general Q&A, discussion section. Maybe Primoz, you want to start a discussion around the surplus buffer and stablecoin stuff?
- Primoz: Yes, sure. So, I made this post today, and I will drop the [link](https://forum.makerdao.com/t/discussion-increasing-surplus-buffer/4644) here in the side chat. The post concerns around potentially increasing the surplus buffer. We need to think about the day we're going to be filling the two million surplus buffer and, from then, are we going to have `flop` auctions? The issue I'm having is that I believe on a daily term we are accruing about 50.000 DAI of fees from debt on stablecoin collateral. The problem I'm seeing is that we know those fees won't be collected entirely. We are aware of the issue we're having with a low collateralization ratio and the outcome via self-unbinding or liquidations, and there are some uncertainties. How effectively can we collect those fees that the system accrued? And, from my standpoint, at least from a Risk's perspective, it doesn't seem reasonable to be spending money which we don't know if we're going to be able to fully collect. It is a risk to spend it on `flop` auctions because if we are to do so, what we are effectively doing is that once the money is spent on `flop` auctions, when we have this unwinding, we will realize that just a proportion of the accrued fees, the surplus buffer, can be drained. This is because 50 thousand per day is 1.5 million per month, so if we postpone this and then we do unwinding at some future date, potentially, if we unwind it with a lower collection of fees, we would be draining our surplus buffer. I want to avoid this because the surplus buffer is meant to protect against unexpected losses. However, in this case where we already know there might be some impediment, which is why I was suggesting we already increased the surplus buffer to avoid the situation. Long story short is that the more `flop` auctions we're going to have, unless we don't increase the surplus buffer, the higher probability of `flop` auctions will follow in the future because we would be just wearing the 2 million surplus auction. This is something that I want to avoid, and that's why I was proposing to increase the surplus buffer.
  - Chris Mooney: You know, the alternative here is that we change the stability fee from stablecoin down to zero. That would be another way to keep the surplus buffer the same. There's one nice benefit to having the surplus buffer kicking off `flap` auctions, which is that you could think of MKR as the sort of buffer in case we end up in undercollateralized territory and we need to mint a bunch of MKR via `flop` auctions to re-collateralize our system or to take care of that bad debt, which happened right after black Thursday. That ends up removing this kind of cushion in MKR - like the amount of buffer that we have of value accrued there. So one of the nice things about `flap` auctions is that they sort of wind it back up again and provide a cushion if we need to mint MKR. The other nice thing about `flap` auctions is that we're above peg, and these auctions will release some of that debt onto the market. So, I think that `flap` auctions are important. Whatever needle we throw right here, I agree that this is a moderately urgent issue that we should figure out. It would be nice that we could keep the `flap` auctions in place so that they would have their own even small impact on the peg and rewind that capacity and the cushion up in MKR.
  - Primoz: Yeah, I agree on the positive effects of `flap` auctions. In regards to shutting down or disabling stability fees, maybe a downside of that is that for all the new positions that are being potentially established, you wouldn't be charging anything but, you know, the new positions are mostly the ones where you can collect some fees so you wouldn't be maximizing your return if you disable those fees prematurely. Therefore, I'm not sure if that's so wise. Otherwise, I agree. Also, I forgot to mention that the last time we increased the surplus buffer to two million was right after black Thursday, and the DAI supply was around 100 million. I'm not sure, but now that the DAI supply is much more significant. We know that half of the supply is on stablecoin, but the other half is still at least four times bigger, so just from a risk standpoint, we should have a larger surplus buffer. Ideally, you should always aim toward a percentage of the DAI supply. Only from a risk standpoint was I going to propose we increase it. This thing has some trade-offs, but it's up to the community. From a risk standpoint, I need to mention this.
  - Christopher Mooney: You brought up a great point there. We can collect some fees on these vaults; we have to cut them off at some point. That makes me wonder what if, as we get closer, let's say within a 10th of a percent, we're at the one-to-one sort of ratio? Those vaults would be liquidated either way. What if we had some executive that swept them into a new vault type, and then some kept that vault type around for when we get offloaded either through liquidations or something else so we'd be able to collect the specific fees on these things. Therefore, when they're all tapped out we sweep them off to some other vault?
  - Primoz: I'm not sure that I'm following if I'm honest.
  - Kurt: Imagine how different it would be from zeroing out the DC on the existing collateral type, and shutting off fees and then starting a new one.
    - Christopher Mooney: It's effectively the same thing.
    - Kurt: How would you implement what you proposed because you'd never actually want to loop over all open vaults or something in an executive, right?
    - Christopher Mooney: Yeah, the only downside there with what I'm suggesting is that if you did end up looping over whichever ones were bad, you wouldn't do that on-chain, but you could find them and effectively trigger some manual sweep. Facility A(FA) remains the collateral type that everyone uses. We can slide everything over onto another vault type that has liquidations frozen temporarily. We get to collect the maximum fees on everything. Otherwise, we have to shut down FA and then move over to some other type, and there would be some stuff in FA where we don't collect the maximum fees.
    - LongForWisdom: You mean the USDCA, right?
    - Christopher Mooney: Yes, that's what I meant.
    - LongForWisdom: Yes, just double-checking.
- SamM: So, I don't think I quite understand. What would be the point of pushing them over to this new Vault facility?
  - Christopher Mooney: You get to collect the maximum amount of fees until they're at a one-to-one ratio, but you know you can't. You know that you're going to accrue bad debt if you liquidate them, so you move them over to some other vault, and they just become Maker reserves at that point until we're below peg. Then we unleash auctions in them and create some DAI demand that brings things back up.
  - Sam M: So, would the owner still be able to close them?
  - Christopher Mooney: No, I think this would be we like the vault itself. It has gone out to liquidations. This would be the equivalent to saying you've lost your collateral because it's under-collateralized and it would move over to this other vault type so...Anyways, this might be too complicated. As I said, I literally just thought about it.
- brianmcmichael: And the result here is that the protocol ends up owning these stablecoins, so it seems kind of similar to the PSM idea in that we end up holding these stablecoin bags.
  - Kurt: Pretty much. So long as they never get to a point where it's profitable to repay them, then the protocol will end up owning them one way or another. So I don't think it's technically feasible to try to do mass seizures and execs or something of that sort. You could change the way liquidations happen to these vaults and then give some incentive for keepers to do it for you, but I'm not sure it's worth the hassle of trying to isolate the ones that are underwater versus the ones that aren't. I propose in the future we introduce new collaterals with a fixed window for taking advantage of them so that they're all on the same schedule and every three months or something, we introduce a new USDC collateral. I mean, give the people a week or two weeks to join it, and then basically they're all on the same fee collection schedule, and you could shut them off as they get to that under-collateralized point.
    - Matthew Rabinowitz: But at that point you're basically just gating. Let's say you have a waterfall of USDC-A, B, C, all the way to F and, as A fills up, you shut off the debt ceiling, drop it down to zero and now you're blocking the entrance if you will, which will force it into letter "B." No?
    - Kurt: Yeah, exactly.
- Gregory di Prisco: Can I chime in quickly? I've been thinking about this a lot for the last month, and I want to clarify a couple of points. There is nothing wrong with letting these vaults go under 100%. It doesn't harm the protocol unless we start burning MKR with that DAI. I would advocate that instead of us spending our resources on something that's not a problem, we monitor the surplus buffer like Primoz initially suggested. First of all, this isn't even a problem until any vault in USDC-A is under 100%, which isn't going to happen for at least 45-50 days at this SF, and even from there, you watch that debt and every week if you need to increase the surplus buffer to make sure that that debt doesn't burn MKR, then that's all you have to do. I don't think that this is a major problem yet.
- LongForWisdom: So, Primoz made a point with me the other day, that it's all well and good, but if there would be a bad debt situation which happens, then it will be canceled by the surplus buffer which doesn't exist, and DAI will not longer be 100% backed. That is also something to consider.
  - Primoz: Yes, that's a bit of an edge case. Well, maybe not an edge case, guys, but yeah, basically, if you have a loss event and the surplus gets drained, you would develop an ambiguous situation.
  - Kurt: Yeah, from a risk perspective, if you know that you have a large amount under-collateralized or underwater, specifically vaults, which have actual bad debt and you know that's in the surplus buffer, then you need a little extra cushion on top of your surplus buffer in case of emergencies. However, that's a risk related discussion in order to evaluate the pros and cons.
- Gregory Di Prisco: Yeah, I think that's a risk related discussion. Also, keep in mind, if the worst-case scenario happened and there was unbacked DAI, the Maker holders could manually trigger an option and raise funds. It's no different; it's just a different sequence.
  - LongForWisdom: Yes, that's true. We would then be forced to potentially liquidate them when we're above peg.
  - Gregory Di Prisco: Now we do the `flop` auction.
  - LongForWisdom: No, but this is the point; flop auctions wouldn't trigger because the protocol would think we had enough money, but we actually wouldn't have enough because the USDC vaults would be underwater.
  - Gregory Di Prisco: Yes, but I am saying is you will have to do it manually.
  - LongForWisdom: Yeah, I guess you probably could do that.
  - Gregory Di Prisco: And this is such an edge case that if we get to that point, I would rather deal with it manually anyway.
- Christopher Mooney: How do we envision performing the increases regarding this? Would we do this every week, or go up by a little by the amount of bad debt we believe we've accrued to keep the buffer accounting for that?
  - Gregory Di Prisco: I would do it monthly, but I'm lazy.
- Sam M: There is a practical limit, as well. If we go below 100% collateralization, we may begin treading into a territory where we wont be able to gain anything on that. Therefore, there should be a practical set for lower limit. We can't just run it forever.
  - Primoz: Yes, I suggest we go month by month, but still do some monitoring between the months in order to see how the protocol behaves through supply and demand. We will have a better view of this over time. Personally, that's how I would do it.
- Kurt: I'll emphasize again that as long as you keep the collective fees and the surplus buffer, or assert that you maintain enough surplus buffer to cover those unbacked fees, you are never actually in a situation where you're losing money because you can always liquidate, or otherwise sell, the vaults in some way. As long as you got the collected fees there and you haven't spent them, you're okay, and you can hold onto it with the hope that eventually DAI goes below a dollar. You can recover some portion of the value of those fees. An emergency shutdown isn't affected either as long as there's enough surplus buffer to cover the unbacked DAI, whereas there will still be dollar parity. Finally, yes, it does become a little bit of a thing to manage if you have to watch it closely.
- Sam M: Regarding liquidations, though, if we were to turn those on, some inefficiencies would lead to an overall loss that's greater than the fees collected so far. That's supposing the price is stable.
  - Gregory Di Prisco: Yeah, but I would say there's no universe in which we should turn on these liquidations unless DAI is below a dollar.
  - Sam M: I agree.
- Kurt: Even if you do turn on liquidations and DAI is below peg; it depends on whether you're going to use the current auction system or if you want to wait for the new auction system, which is probably going to be more efficient. I think you would get very close to the value of the collateral back if you did it carefully. As you said, there is a possibility for some inefficiency there. How big do we estimate that inefficiency to be and factor that into the risk discussion?
  - Matthew Rabinowitz: If you fast forward the video, let's say an entire calendar year to do a gross exaggeration if I understand it correctly, it's a declining return. We're capturing value today because of an RP that's associated with it, and over the time of one entire calendar year, if we got into that scenario, we would in effect be giving back those return where we wouldn't earn anything from it. We would have "stability." DAI would be a proxy wrapper at that point for USDC, which would be the same as if we set the stability fee to zero percent if we were to wait an entire calendar year. Is that fair?
    - Sam M: If we waited an entire calendar year, the leading vaults would be at 97% collateralization with USDC-DAI, and that would lead to overall losses. I don't know, but we would have to get the price drop below 97 cents for those vaults to close themselves out; it would probably very likely go into liquidations at that point, in which case we're getting some loss due to auction efficiency. This is why I would say there should be a lower bound of approximately 100%, where we should turn off SF because they're no longer giving us anything. We might even take on losses in the long run.
    - Gregory Di Prisco: Wait, Sam, I don't understand that at all. If they're at 97 cents, but that extra three cents is sitting in the surplus buffer, we need to liquidate them at 97 cents. Why would we forgo the fees on all of the overcollateralized vaults to prevent that from happening?
    - Sam M: Sorry, when I said 97 cents, I meant 97% collateralization. If DAI returns to a dollar, they're still under-collateralized by three percent.
    - Gregory Di Prisco: Yeah, but we already collected that money; it's sitting in the surplus buffer. We only need to get those vaults out of the system at their current collateralization ratio.
    - Juan: Yes, but if those go to auction, there's going to be 3% in bad debt that's going to have to be...
    - Kurt: Well, I don't think we'd liquidate them that stupidly. We'd set the peg to a lower value or use a different auction mechanism for them at that point. That's something we have control over as the DAO.
    - LongForWisdom: The three percent difference between the 100% CR and the 97 percent ratio is that it exists in the buffer, which is kind of what Greg is saying. Therefore, it's not lost; it's just in the buffer, and when the auction happens it then subtracts three percent from the buffer, which thereafter goes back to what was.
    - Sam M: Yeah, but that's a neutral operation. I don't understand why we would run stability fees past 100 percent collateralization.
- Matthew Rabinowitz: The point is that if everybody were at 100%, then you're right. Some that will be at 100% and some at 102%. As an example, for the ones that are at 102, you would continue to charge a fee and either manually liquidate the ones that are at 100 or wait for them to lower. This is for when the blended number is below 100, but even then, the people above 100 are still generating value for the protocol.
  - Sam M: Yeah, sure, that's a fair point.
  - Kurt: Basically you could either come very close to breaking even or if you get the situation where DAI goes below 100, then you could get positive income.
- LongForWisdom: Ok, we're getting a little late, so we're going to wrap up here. I feel like we're slowly converging on some shared understanding of how this works because we've discussed throughout a couple of meetings. I'd encourage everyone to join in on the forum threads and try and figure out what the various options are, and what the benefits and downsides to each option are. Once we have that figured out, we can then move towards figuring out options and getting an agreement on what we want to do. Thank you, everyone, for their points on this. Are there any final reminders or anything before we close out the call?

#### Links from Chat

- [Approve Maker Representatives as an oversight role for Real-World Assets](https://forum.makerdao.com/t/signal-request-approve-maker-representatives-as-an-oversight-role-for-real-world-assets-october-2020/4656)
- [Governance Q&A Sessions](https://forum.makerdao.com/t/meeting-governance-q-a-sessions/4633/2)
- [YFI Assessment](https://forum.makerdao.com/t/yfi-erc20-token-smart-contract-technical-assessment/4626)
- [BAL Assessment](https://forum.makerdao.com/t/bal-erc20-token-smart-contract-technical-assessment/4630)
- [GUSD Technical Assement](https://forum.makerdao.com/t/gusd-erc20-token-smart-contract-technical-assessment/4603)
- [Spells - Kovan](https://github.com/makerdao/spells-kovan/)
- [Spells - Mainnet](https://github.com/makerdao/spells-mainnet/)
- [Liquidation 2.0 Stakeholder Discussion](https://forum.makerdao.com/t/agenda-discussion-liq-2-0-stakeholder-discussion-wednesday-october-14-2020-1700-utc/4631)
- [Dockerized Auction Keeper](https://github.com/grandizzy/dockerized-auction-keeper)
- [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231)
- [DoI - Off-chain Asset-backed lender to onboard Real-World Assets](https://forum.makerdao.com/t/doi-off-chain-asset-backed-lender-to-onboard-real-world-assets-extended-q-a/4296)
- [Increasing Surplus Buffer](https://forum.makerdao.com/t/discussion-increasing-surplus-buffer/4644)

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
- Jose Ferrari produced this summary.
- Artem Gordon produced this summary.
- Gala Guillen produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
