# Episode 112: October 01, 2020

## Agenda

- [00:00](https://youtu.be/aOnWcbVZ_9E): Introduction
- [01:35](https://youtu.be/aOnWcbVZ_9E?t=95): Governance at a Glance
- [04:40](https://youtu.be/aOnWcbVZ_9E?t=280): Smart Contracts Team Update
- [23:15](https://youtu.be/aOnWcbVZ_9E?t=1395): Oracles Team Update
- [25:05](https://youtu.be/aOnWcbVZ_9E?t=1505): Risk Team Update
- [27:30](https://youtu.be/aOnWcbVZ_9E?t=1650): Community Development Team Update
- [31:00](https://youtu.be/aOnWcbVZ_9E?t=1860): Collateral Calls Update
- [33:05](https://youtu.be/aOnWcbVZ_9E?t=1985): MIPs Update
- [43:05](https://youtu.be/aOnWcbVZ_9E?t=2585): September Governance Cycle Review
- [45:08](https://youtu.be/aOnWcbVZ_9E?t=2708): Forum NFT Badges
- [51:52](https://youtu.be/aOnWcbVZ_9E?t=3112): Rate Setting V2
- [56:22](https://youtu.be/aOnWcbVZ_9E?t=3371): State of the Peg
- [01:06:35](https://youtu.be/aOnWcbVZ_9E?t=3995): Open Discussion

## Video

<https://youtu.be/aOnWcbVZ_9E>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/aOnWcbVZ_9E)

- Hello, everyone! Welcome to the MakerDAO scientific Governance and Risk meeting number 112, taking place on Thursday, October 1st at 16:00 UTC, same time every week. My name is LongForWisdom. I am the MakerDAO's Governance facilitator, for those that do not know.
- Let us go through the general rules of the meeting: anyone is free to interrupt and make comments if they want to. Feel free to do that, and if it becomes a problem, I will let you know.
- Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[01:35](https://youtu.be/aOnWcbVZ_9E?t=95)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in the active threads, that would be much appreciated.
- Looking at the forum this week. There had been a couple of good discussions and a couple of good signals.
- We have had a discussion that's been going on for a couple of weeks by Derek, which will have some new discussion added onto it. Derek provided an update on using snapshots to improve signaling and pools, which prompted a little discussion.
- We had a thread about theorizing around the legal structures of MakerDAO from sub ventures, discussing some of the various legal structures that could be put in place to manage a DAO. And then we also had an informed poll and some discussion around what rate-setting version two would look like from Hexonaut.
- There have been some discussions in terms of seeking consensus for signal requests. We have had one from Aaron Bartsch for increasing the system surplus buffer, so this is the buffer that accrues Dai stability fees. It is a fair and well discussion, given that it controls whether we start burning MKR or we delay burning MKR or whether we burn some MKR and then stop again later on as we increase the buffer. Aaron has also proposed an ETH-B Vault collateral type, trying to crowdsource some of the initial parameters using forum polls following the rate and risk team's presentation on ETH-B. There is a full signal request up for the rates V2 proposal from Hexonaut which goes into details of what we are proposing for rates V2 and figuring out how to manage setting rates on all of these Vault types going forwards.
- I am trying to make some minor changes to the forum, probably next week, in terms of switching categories around a little bit to hopefully make it easier to read and keep track of what is going on. So keep a lookout for that. It is not groundbreaking changes. It should be more about cleaning old categories that do not work and maybe adding a couple for signal requests and some stuff that could be separated from Governance because that category is getting big.

##### Discussions

- [Using Snapshot to Improve Signaling and Polls](https://forum.makerdao.com/t/using-snapshot-to-improve-signaling-and-polls/3810/28)
  - Derek provides an update on using snapshot to improve our governance process which prompts further discussion.
- [Legal structures of MakerDAO](https://forum.makerdao.com/t/discussion-legal-structures-of-makerdao/4390)
  - SebVentures opens a discussion on the legal structures of MakerDAO.
- [Informal Poll: Guidance on Rates V2](https://forum.makerdao.com/t/informal-poll-guidance-on-rates-v2/4444)
  - Hexonaut starts an initial informal poll to help gauge the community’s opinions on setting rates.

##### Signal Requests

- [Increase the Auction Surplus Buffer (System Surplus)](https://forum.makerdao.com/t/signal-request-increase-the-auction-surplus-buffer-system-surplus-september-2020/4469)
  - Aaron_Bartsch proposes adjustments to the protocol surplus buffer either before or after MKR is burned.
- [Add ETH-B Vault Collateral Type](https://forum.makerdao.com/t/signal-request-add-eth-b-vault-collateral-type-september-2020/4435)
  - Aaron_Bartsch proposes adding an ETH-B vault and uses this signal thread to crowdsource the initial parameters.
- [Rates V2](https://forum.makerdao.com/t/signal-request-rates-v2/4481)
  - Hexonaut proposes the existence of a working group whose responsibility it is to propose rate changes in response to risk and the wider DeFi environment.

### Chris Mooney

#### Smart Contracts Team Update

[04:40](https://youtu.be/aOnWcbVZ_9E?t=280)

- Last week, the domain team worked towards the collateral onboarding priority sheet. There is much work across all of the domain teams right now to come up with a priority sheet for collaterals, which we are all refining. We are optimistic; maybe next week we will have a pretty good priority sheet for taking all these green lights and turning them into something.
- We did a full review of MIP21, which is related to RWA addition. It is a technical MIP. We have looked over that and think it is ready for voting, so please, consider approving it.
- We did the same thing for MIP20, which is the Vox. We have reviewed the code and the MIP and I will emphasize that I think that the Vox is just a Governance tool that we could use, we do not need to turn it on yet, but it is nice to hedge our bets if peg management does not work out for us, so please consider that.
- For the monthly spell, we have got COMP, LRC, and LINK added as collateral types on Monday. All of those are up, so if you guys want to create positions on those, feel free.
- We also reviewed the TUSD adapter implementation. There is a fix in the TUSD adapter implementation that re-enables their legacy ERC20 token, that looks good. We are going to try to get that into this Friday's executive for approval.
- There is also some internal work on creating much documentation around collateral onboarding to possibly have collateral onboarding teams in the future, so more to come on that.
- In the coming week, more work on what I just mentioned, the collateral onboarding teams. Then, we have a whole new list of collateral types. We know we are probably going to break the MIP structure a bit or put it on temporary hiatus while we have more adaptability to onboard collateral, but right now, the domain teams are tentatively thinking of doing LEND, PAX Gold, YFI, BAL, UNI, renBTC, possibly TTC and GUSD in these coming month and maybe we will be able to do that more on a weekly cycle we get there.
- There is some tooling happening around executives to make them a little bit easier to write. Furthermore, covered on our list is the final review of the Flash Mint Module in the MIP submitted by SamM for Flash minting Dai.

##### Discussion

- Brian McMichael: Just to clarify, when you say the Vox and the RWA are ready for voting, we did identify that there might be some things that need to be changed in the RWA adapter to integrate appropriately with our new liquidation system. So, I would not say that the code is ready there; it just needs some updates. I think the Vox is ready to go.
  - Chris Mooney: Yes, that is a good point because this was a little bit of a question mark as well. When we approve a technical MIP, I like to think of it as ratifying an RFC or something. It is nice to have some prototype code, it is nice to think through and see if it will work, but there is still a whole checklist that we need to go through to build an executive and deploy it. That includes a lot of the security roadmap, possibly formal verification, audits, a bug bounty, more extensive code review, crafting all of the deployment spells. There is still much stuff that happens, so really, if you ratify the technical MIP, I think there is still one more step, which is the technical implementation, which would eventually find its way into an executive. So, those are mostly locked down, but there are still a few changes.
- LongForWisdom: One thing I probably should have mentioned in my updates was that with the conclusion of the September MIP cycle, Chris, Brian, Lucas, and Will are all officially ratified as Smart Contracts team members, which is cool. Congratulations to them all for meeting everyone's approval.
- Lev Livnev: Charles, can you clarify the point you just made in the comment about iterating on the code after the proposal has been accepted but not while it is being voted on? Can you explain when is a good time to incorporate changes in the code, and what is the process to follow?
  - Charles St Louis: I am keen to get everyone's perspective on this, but the main reason why I said that was because if the solution in the future needs to be improved or iterated on in any capacity, you can do so after it has been voted on, but if it is changing while the vote is happening, there is potential for sneaking in some things that people might overlook. However, the idea is that if something needs to change in the future, you can make that change. It is just not worth being voted on. For example, the liquidations 1.1 and 1.2 have been improvements, so you might have to have a follow-up proposal to incorporate these changes, but I think we should have an open discussion about how the technical process could work.
  - Lev Livnev: Yes, I think it is reasonable that we do not have a moving target while being voted on. Could you also clarify if there is a process for this final last mile when something goes into an executive? For example, is there a stage where the executive spell is actually voted by a domain team or something like that? What ratifies the executive spell is the executive spell's actual vote but is there a Governance stage before that?
  - Charles Saint-Louis: I can let Chris and Brian and the rest of the domain team answer the more technical details of it, but once the week-three Governance poll approves the MIPs, the domain team begins creating the technical implementation for the spell for the executive vote on the following Monday. However, maybe Chris or Brian can talk more about the actual steps.
- Chris Mooney: Yes, I can say that internally whenever we are building an executive spell, there is a kind of laundry list of things that need to go through, and it is just an enormous amount of code review and integration testing, and ultimately all of that is going to culminate in an approval list so that it is viewable in the voting portal. So, let us say, Lev, you are going to work on one of these executive spells and hand it off to us; we would put it through the same ringer that we would if anyone of us wrote it individually, so it would probably end up going through that process. I do not know if there is a formal MIP around that. Maybe we will need one, or maybe we do not. I do not know if that answers more of your question there.
  - Lev Livnev: Yes. That makes sense, and also what Charles said also seemed reasonable. I am wondering, is it a fair approximation to say that once the proposal has been accepted, the stage between that and the spell being executed, we can imagine is the same process for any spell that's currently being proposed and executed? The domain team is either preparing it or reviewing it if someone else has proposed it on their schedule and to the same standard. And then, once that is done, but only then, it is proposed as an executive.
  - Chris Mooney: I think that makes the most sense.
- Lucas Vogelsang: I had a question about MIP21 and MIP22 proposing code, but they do not foresee a specific executive spell to be deployed. They are just general-purpose frameworks. This is not described in the MIP process, but what is the process from going from the general code that has been accepted to someone still needing to write a spell and then deploy it, and is that then another MIP proposal?
  - Lev Livnev: I think that is exactly what we were talking about. Furthermore, for context, MIP20 does not have an executive spell either, and I think there is no precedent for MIPs coming with an executive spell in particular because the executive spell might have to be tailored to the state of the system at the time. Moreover, it would be absurd to have to ratify an executive spell and then execute it because it is executed through a vote. So, my understanding is that when it goes through the MIP process, it falls into the same funnel as any other executive spell for which we do not have a special multi-week process for accepting those as a Community.
- Chris Mooney: I would strongly recommend that we do not create a MIP process around the executive spell just because there is so much tooling and dynamic coding that happens around that. The process is frequently changing; we are updating it to be continuously more secure. It would just be hard that one process alone would take so much MIP work. We are probably much better off too. Once it is ratified, we would work with the smart contracts domain team to start to craft the spell, and I think that is the right path forward. If anyone objects, let me know, but that's my guess.
  - LongForWisdom: I think the original plan was that when technical MIPs were envisioned, all of the code, including the spell code, would be completed before the MIP was even proposed, and then the MIP was proposed and then when the MIP got to the final stage and was ready for an executive vote, all of that code would be included in that final executive spell. I do not think this works out super well for the reasons you guys have just described in practice. So, as long as it does not become a problem, where something gets ratified and then for whatever reason it just does not get implemented for ages, that is potentially a problem because it has been ratified, but then it never happens, but so far we have not seen any issues with that. If that problem starts coming up, we can start looking at building a process that prevents it from happening.
- Brian McMichael: We are updating our process for creating the spells and some behind-the-scenes things are going on for Governance itself, and for changing the way the votes get processed. Any spell that is created right now might not work with the new process.
- Lucas: What is the best way forward for the MIP22 then? Furthermore, I think we are at a similar spot with MIP21.
  - Chris Mooney: That was not on my radar. Did MIP22 get proposed for this cycle?
  - Lucas: It has been in the RFC phase for a month, and before that discussion was about to happen, we were considering whether we wanted to propose it or not, and I think the deadline for that is today if I am correct.
  - Charles St-Louis: The deadline is next Monday to Wednesday to formally submit it. But, in this last week, it is the frozen period, so you cannot make any more changes as a way for a community to look at the final state of it and make sure you do not make any last-minute changes before it goes up for votes, for security reasons. If it has been in RFC for a month, you can go ahead and propose it, but if you want to continue doing RFC for another month or another six months, it is totally up to you as the author of the proposal.
  - Lucas: The challenge is that there was not any feedback from the smart contracts domain team.
  - Chris Mooney: Lucas, I will put that on our list. We will get to you in the coming week and review your MIP. Do not worry about the executive spell for it; we'll review the declaration of intent, the technical MIP, and any code you have with it. We will try to get through all of that, and then we will give it a thumbs-up or thumbs-down, and we will push it through the process, and after that, we will worry about making an executive for it.
  - Lucas: Today I was working on this with Martin Lundfall a bit, and we have been making improvements that, I guess, would now need to be added after the frozen period if we plan to submit it or should we not formally propose it and maybe skimp around the process that we have in place a bit.
- Chris Mooney: It may be a question for Charles. Charles, I pushed the PR to MIP21 today to make the flipper work with liquidations 1.2, so we want it to be frozen there?
  - Brian McMichael: Let me chime in here. I see very few situations where some code might come in that we do not want to change just because, with the domain experts, we know how this might integrate with the system, we would probably want to beef up tests around it, might discover things. I am leery of just accepting code as written and submitted.
  - Chris Mooney: Let us say with my PR, for example, we could easily vote on this, it is a change that's going to have to happen before we can push it live, that we can certainly review it after this process is complete, you know maybe the changes for Martin are the same for Lucas's MIP22. I do not know, Charles, do you have an opinion?
- Charles St-Louis: Could you rephrase the question, please? I am confused. Are you asking if you are allowed to be a contributor to the code?
  - Chris Mooney: No, it is that for both of these MIPs, the code should have been frozen yesterday according to what you are saying, and I was wondering how much liberty the domain teams have after that deadline. We will give them a thumbs-up or thumbs-down before being voted, I would assume. After that process is complete, rather than just crafting an executive, we may need to make some changes for security reasons or end up engaging in an audit, something like that, that shows us we need to make a change. Do the domain teams have the liberty to do that? I am hoping the answer is yes.
  - LongForWisdom: Technically, it is like a massive gray area, like so many other things. I think it is fine at this stage. The technical MIP process was written for these kinds of situations in the future. Loads of people would be raising loads of code changes, and they would need to be super locked down before they voted on them. We are not there yet, so I would not worry about that too much for now.
  - Charles Saint-Louis: Yes. The only thing that I would suggest is that, if changes are being made concerning anything, be very transparent and open about it, saying "we have done this - this is why" so that people are aware and it does not look like things are just snuck in. However, yes, I agree with Long 100%.

### Nik Kunkel

#### Oracle Team Update

[23:15](https://youtu.be/aOnWcbVZ_9E?t=1395)

- We can review the stuff that passed in the executive that we submitted last Friday. We had a bunch of whitelisted proposals go through:
  - Kyber was whitelisted on the ETH-USD Medianizer.
  - DDEX got whitelisted on the BTC-USD Medianizer.
  - We had the custom job for Opyn on the auction platform they were using. - The V1 Oracle that we had deprecated, and they did not add logic to configure that, so what we did was wire up the V1 Oracle to the V2 stuff, so one would just read from the other. That has passed.
  - Yearn Finance also got whitelisted on the BTC-USD Oracle for their new BTC delegated Vault that they are cooking up.
- That is it from the Oracle's front. I do not think there are any new proposals for this week, so we are just working on the collateral types for October right now.

### Primoz Kordez

#### Risk Team Update

[25:05](https://youtu.be/aOnWcbVZ_9E?t=1505)

- We are currently putting much effort into developing the new framework for the ongoing calculation of Risk Premiums, Debt Ceilings, and competitive rates for each Vault type. The idea here is to make it less quantitative and more agile to provide these inputs to Governance on a more regular basis. This is also partially related to this new initiative about rate setting where the Risk team will more regularly provide inputs to the so-called rates working group, and I think Sam will talk about it later a bit more.
- Balancer and yEarn collateral evaluations should be released next week. We had to delay a bit for AAVE and PAXG, and they will probably go through the weekly cycle. So I was still in the middle of the migration. We still do not have any information on AAVE's new tokenomics and will also be delayed because there are some technical specifics related to the ERC-20 token contract.
- As Chris already mentioned, we are working together with other domain teams on a new approach for prioritizing collateral proposed to be onboarded. Priority will likely be given to those assets which have high potential to generate Dai, but of course, we are also adjusting this list by constraints such as difficulty to add particular collateral and risks associated with it.
- Lastly, there are some organizational efforts within the Risk domain team. We are defining specialized roles within the team, committing new members, and so far, it looks great. We were able to attract some outside members, and we also created a template for collateral onboarding, making it easier for new members to perform risk evaluations.
  - LongForWisdom: Congratulations on becoming a ratified Risk domain team!

### Amy Jung

#### Community Development Update

[27:30](https://youtu.be/aOnWcbVZ_9E?t=1650)

- There are two roles that I am working on, which is the continuity of Community Development, which is where we focus on the development of community and contributors. We have a portal launching soon with tons of community-generated content and resources like FAQs. It can be anything from people who are new to Dai, how Governance works, etc. and that will be live very soon. The Forum Badges team will give an update, and there is a Governance Communication team who has been writing summaries for these calls and introducing the new idea of Snippets, which are short versions of this, and we have noticed that many people like that as well. So a lot is going on around how to improve that Governance Communication area. We do have our development grants as well. We will be introducing a new process, and this is where people in our ecosystem can apply for funding. Our two newest grantees are SaveDai and CuraDai. On the people side, we are also looking for obviously more developers, so we are trying to cultivate programs where we are improving many potential contributors who would be interested in engaging with MakerDAO.
- The second part, mostly what I have been working on recently, is around DAO operational work, focused on bridging smooth resource management and distribution. There are many stakeholders to coordinate with, so I appreciate the patience people had been giving. I will be introducing a new MIP soon, a support domain. This domain would cover bootstrapping general operations for potential domains that are difficult to scale quickly. So something like HR or Legal. We have been working a lot on how we actually can have legal domain teams and what community members would be interested in covering that. Furthermore, the second piece is around cross-domain coordination. I think the smart contracts team brought up this onboarding documentation and process initiative, where we focus on how we make that process smoother and more inclusive of all levels. The third piece to the support domain would be grants management and distribution, which is a lot of the work we have been doing, and many of our community members are also grantees. It is a way of onboarding a lot of the people who participate in the DAO.

### Juan

#### Collateral Call Update

[31:00](https://youtu.be/aOnWcbVZ_9E?t=1860)

- As was mentioned by Chris and Primoz, we have been working on a collateral framework to provide more transparency regarding which collateral types we are focusing on, why, and the priority in which they are tackled.
- Yesterday, we had a Real-World Asset call with Seb Ventures. Matthew from 6S Capital was there, Lucas and Lea from Centrifuge, and Priyanka from Openload joined us. So we are further advancing on that front as well. Hopefully, we can see real progress soon. If you want to join us, contact [@SebVentures](https://chat.makerdao.com/direct/TCLpK9eYYAedB4AsDd3avFPcEiYbDNpAmW) on RocketChat.
- Regarding upcoming calls; Next week, we will have Brian from Cash Gold joining Matt Luongo from Keep network that will be presenting TBTC, which is October 7th at 5 PM UTC. We are thinking of doing an exceptional call next week. It would be like a double session around RWA. We have to figure that out with Seb. We will have RAM BTC, and we are still trying to get Uniswap or Balancer, which have not been yet confirmed. That will be October 14th. Then, on October 21st, we are going to have Greg from Urostasis and Crypto.com.

### Charles St. Louis

#### MIPs Update

[33:05](https://youtu.be/aOnWcbVZ_9E?t=1985)

![](https://i.imgur.com/BCu2HWN.png)

- As a follow up, Sam created the technical MIP for the declaration of intent that will go into a governance cycle depending on when he wants to submit it formally.

![](https://i.imgur.com/QYZtY38.png)

![](https://i.imgur.com/n6i1dho.png)

![](https://i.imgur.com/jXZp5Lt.png)

![](https://i.imgur.com/Smgh3qu.png)

![](https://i.imgur.com/kRPGLYP.png)

- There will be a knowledge transfer documentation resource for anyone interested in getting set up with a grant to work on things such as risk assessment, collateral adapters, and learning how to do these things.

##### PlanetX

- The present version of MIP17 is a re-work of the older MIP17, and it did not pass. We had a meeting about why it did not pass, and we are not exactly sure why but the older version tried to automate the setting of the debt ceiling (DB) and the rates, which was possibly a bit too much.
- The present version deals with the setting of the debt ceilings only, I will [link the latest thread](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-adjustments/4312) in the chat. So please read through and comment. It is not a very complicated MIP; all it does is introduce a new term called Target DC, a very high figure compared to the present DC. Just for the sake of argument let us say double or even triple the current debt ceiling.
- This is typically a figure that will be set by the risk team, and as long as the outstanding debt is below this figure, we will let MIP17 handle the weekly setting of the DC.
- As long as the utilization is between 70 and 90%, nothing happens. If it rises above 90% the next week, there will be a 20% increase. If it falls below 70%, we will deduct 20%. With this formula, we aim to keep utilization pretty high. That is enough for MIP17, interested people can look at it, and we have aimed to produce a simplified version of MIP17, and any questions can be written to me or comment on the forum.

## Procedural

### LongForWisdom

#### September Governance Cycle Review

[43:05](https://youtu.be/aOnWcbVZ_9E?t=2585)

- In the previous months, I looked at how much MKR was voted in the various parts of the process, but I am not convinced anyone's super interested in that. So I am going to skip that this time. I can bring it back if anyone cares.
- I think we will talk about what Charles already covered regarding what we did last month. To summarize it, we onboarded three assets. We uploaded some domain team members, which is fantastic, and the declaration of intent for the Flash Mint module passed, which was also very cool.
- Next month, Charles will cover this as well, but we hope that we see some of the MIPs that have been in RFC for a little while getting formally submitted, and I guess we will see which ones are next Wednesday.
- From a personal point of view, it is good to see the domain team members increasing, which is great. It is good to see more assets being added.

## Segments

### Aaron Anderson

#### Forum NFT Badges

[45:08](https://youtu.be/aOnWcbVZ_9E?t=2708)

![](https://i.imgur.com/jzboF4n.png)

- Aaron Anderson: This morning, there was a [post](https://forum.makerdao.com/t/badges-are-live-in-the-maker-forum/4503) on the forum announcing that Maker Forum Badges went live. Some folks have already redeemed them, and now you can see them next to one's avatar as little icons representing the badges they have. There are some bugs to work out, so please report the issue on GitHub if you see run into one.

![](https://i.imgur.com/IIZOCgo.png)

- To redeem them, once you are in the forum, click on your icon, go to preferences; at the bottom of the screen, you will see a button that says import maker badges. If you click on it, you will be prompted to sign a message that says your username. Sign that and it will unlock badges.

![](https://i.imgur.com/FtwRtdU.png)

![](https://i.imgur.com/TcHUH3H.png)

- Whenever you click on a badge, you can see all the steps you need to get the badges.

![](https://i.imgur.com/g7ToT8v.png)

- You can see all the badges; there are 33 of them. Of these 33, 25 can be post badges that show up next to your name, and there are eight that do not become post badges. That is because I can only fit so many, and the ones that do not get in are the penultimate of any given series, seen in the second to last.

![](https://i.imgur.com/Nyv69xx.png)

- We get two for sending DAI. If you send ten DAI, it will not show up here, but if you send twenty, it will. The same goes for voting on polls. If you vote on polls, you will get a badge. If you vote on twenty, you will not get a badge, but if you vote on fifty, then yes.
- You are just signing a message, so they cost no gas to redeem. The back-end of this also has NFT's that are on-chain that you will be able to redeem and use for other parts. They are non-transferable NFT's so they will stick with the account that redeems them.
- At this time, are there any questions?
  - Brian McMichael: So it is just a signature, the account is not tied to your forum account, in any way, I assume?
  - Anderson: We do not store it. It goes through a LAMDA function that processes it and checks it against the Merkle tree, so there is a contract on-chain that updates regularly, which is interacting with governance and maker contracts, and that is what we are checking against and getting proof from. That way, only the people that are entitled to a badge and can prove it by signing that signature can get it, but other than that, we do not save any of the information.
- Brian McMichael: Can I link multiple accounts to my forum account?
  - Yes, you can. To redeem badges from multiple accounts, disconnect your account and click the redeem button again. Big shout out to scottrepreneur and several developers for helping out on the frontend.
- Christopher Mooney: That is amazing work.
- Nik Kunkel: Is this right now? Are the badges live?
  - Aaron Anderson: Yes. We had several people redeem already, and if you run into any issues, feel free to submit the repo where this is hosted and submit an issue. Today I will add a template for that to grab any pertinent information like your account or transaction or that sort of thing.
  - Nik Kunkel: Cool. I will run through that right now, see if I can get any feedback.
- LongForWisdom: Thank you, Aaron. I look forward to seeing those in the forum more, so that is going to be awesome.

### SamM (Hexonaut)

#### Rate Setting V2

[51:52](https://youtu.be/aOnWcbVZ_9E?t=3112)

- Basically, a few of us have been meeting over the past two weeks to modernize the rate-setting mechanism because it is beginning to show some strain under the new assets and market conditions and all that kind of stuff.
- Some current issues that we see with it:
  - The smart contracts team has a hard time following base rate changes and applying them to the end stability fees. They have to keep track of all of this.
  - Another issue is that Governance should not be changing RP directly or should stop calling it RP. We find lots of tweaking or people at least saying they want to tweak the RP for reasons that are not related to risk, so it is a little confusing.
  - Base rate changes are affecting all assets instead of only a few that have a similar profile. RP should be ideally measured and reported continuously instead of just one time.
  - We may not necessarily want the RP to be equal to the final markup used on top of the base rate.
  - There is no mechanism for taking competition into account, and in particular, farming assets do not fit into our rate-setting paradigm at all. They really should be getting set based on the yield they generate.
- We are proposing the formation of a new rates-forming-group that sits between risk governance and the smart contracts team, and then we grant more rate-setting autonomy to this group so they can be more flexible with how they update stability fees.
- We will add a market competition based rate-setting methodology that initially the risk team will be handling. For example, this will be as if someone was charging 5% to borrow a link against our competition, and maybe we can undercut them a bit, but still, we want the rates to stay as high as possible, but we could still undercut our competition.
- Another goal is to minimize governance overhead with the number of polls they have to vote on.
- Continual transparency of how these rates are set. This marks a shift in how Governance deals with rates, and we think it is more appropriate for Governance to be setting higher level, plain English directives, such as "set the SF on stablecoins to a percentage" or even, for example, "we want to focus on growth over profit" or something like that. Having this sort of rigid formula is not working anymore. Please go and vote and comment on that.
  - LongForWisdom: I would encourage everyone to look over that proposal because we will no longer be voting weekly on the base rate if it passes. I encourage everyone to read over that proposal and understand what the changes will look like and provide feedback if you feel it is the right or wrong move.

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[56:22](https://youtu.be/aOnWcbVZ_9E?t=3371)

![](https://i.imgur.com/7l9LGZo.png)

- Just to recap; High level with roughly 900 million DAI minted, which is good to say. What we have is:
  - 350 million from ETH
  - 4 million bat
  - 360 million USDC-A
  - 84 million WBTC
  - 50 million TUSD
  - 30 million PAX
  - Smaller amounts at KNC, ZRX, MANA, USDT-A, COMP, LRC and LINK
- What we are seeing is the primary DAI supply being set up primarily of PAX, TUSD, WBTC, USDC-A, BAT-A, and ETH. It means that ETH is outnumbered by stablecoins. That is just something to be aware of.

![](https://i.imgur.com/1rcbGOw.png)

- In terms of where DAI has been trading and performing from a peg standpoint; things have been pretty stable. I think that's the theme of the week.

![](https://i.imgur.com/VucbUkF.png)

- What we saw was a lot of smaller trades with the price holding and hovering around 1.01 USD. The ETH price has been holding steady but occasionally rising a bit. That is kind of the backdrop of what we are looking at as of yesterday.

![](https://i.imgur.com/qZ3El2J.png)

- The trading volumes have been a bit lighter over the past couple of weeks and we still see a huge chunk of that being Uniswap trades for the DAI-ETH pair.

![](https://i.imgur.com/OiArKZz.png)

- When we look at USDT we saw a huge amount of that being Swerve and Curve, and what we saw on the last week was mainly Curve and again pretty much smackdown on the 1.01 USD with some of that variance in price decreasing, which tends to happen when we start to look at smaller trades because it is those larger trades that tend to push liquidity upwards or downwards, resulting in more or less slippage.

![](https://i.imgur.com/i256WKl.png)

- For USDC we see again Curve dominating that volume. There was a couple of weeks ago more volume on Swerve and then again same story of around the 1.01 USD with decreased variation.

![](https://i.imgur.com/zc3pCyX.png)

- For the DAI-USD pair, it tends to have a lot more noise naturally, but again sitting more or less around the 1.01 USD.

![](https://i.imgur.com/L7BLeQi.png)

![](https://i.imgur.com/Yhu5j7O.png)

- Not much has changed in terms of the DAI supplies other than the growing share of stablecoin minted DAI, but we did see some movements over the past week in some of the system parameters such as introductions of new collateral types recently, etc. Overall, these system parameter changes don't appear to have had a huge impact on the DAI supplies with the exception of the movement of DC. so we're looking at a DC of about 1.4 billion.
- What we've seen is a growing utilization of these DC as the goal posts get moved.

![](https://i.imgur.com/HVdcr1W.png)

- For example, we saw the PAX-A utilization hit around 30 million now that we have got a 60 million debt ceiling it will be interesting to watch whether this will see increased utilization and shoot up closer to the limit again.

![](https://i.imgur.com/UWgz4Q5.png)

- Overall, what we are looking at is the top few places where that DAI ends up right now. You've got Uniswap, Curve, Swerve, Sushiswap, Yearn, and Aave are some of these largest pools of DAI. Basically, look at 230 million DAI just on the top two out of the 900 million minted, it is a pretty significant share, that is kind of the same old story as the last couple of months, with liquidity pools and farming opportunities dominating that DAI supply.

![](https://i.imgur.com/xVHo6OA.png)

- The other obvious mention is Compound where you have roughly 200 million excess supply sitting the same as it has been for quite a while.

![](https://i.imgur.com/r1mdGtw.png)

![](https://i.imgur.com/znUMBfB.png)

![](https://i.imgur.com/7c5Jho2.png)

- There are a few large positions that are around 196, 195, and those are probably the biggest market risk positions to watch but that is seemingly less risky than some of what we have been looking at a week ago. That's a potential positive. Though that is very likely due to movements in ETH price which is always something to take into account versus manual or managed movement in the amount of collateral that is backing these debt positions.

## Open Discussion

[01:06:35](https://youtu.be/aOnWcbVZ_9E?t=3995)

- Akash: MANA is the first thing. These are my personal opinions. Uniswap and Balancer have very low liquidity for that collateral. I think the reason the Community should take a look at that. If that were to go to Liquidations, I do not know what kind of reasonable prices they would get. So I am hoping the Community can take a look at that.
- The other issue was taking a look at the USDC-A Vault, and I was hoping the Risk team or Vishesh or anybody could understand those Vaults and, if liquidations were to be turned on and DAI is trading at 1.01, what are the implications or what is the potential shortfall of payments necessary to the Maker Protocol. It is hard to grab this data, which brings another point: I would like the system to be more transparent where anybody could look at all the Vaults and, in a very transparent way, understand the collateralization ratios. Right now, it takes a little bit of expertise to go through the blockchain, but in SCD or the original Dai version, where there were MKR tools, it was much easier for literally anybody to grab that data and analyze it and excel. So I think better tooling is needed for the entire Community.
  - Primoz Kordez: I agree with you; there's some tooling needed, but you can get those data points, I believe, from Vishesh's website, so if you are interested in collateralization ratios for USDC, I think you can get them there. All in all, what is the strategy with USDC? We discussed it a little bit. Currently, if you look at the collateralization ratios for USDC-A, I believe the lowest one is 100.8. Ideally, when you ask about turning liquidations on, you would be doing this manually with some strategy in place, and you would be doing this when the DAI price is much lower than now, but in that case, those Vaults would unwind anyway, right? What we need to discuss here is what is the timeline, when do we want to see turning off those stability fees because we are collecting virtual fees, you know? However, we know we are not going to collect them, and we have about three months. One of my ideas was that we could shut down fees at about 100.5 collateralization ratio when most of the Vaults are there because this still creates some incentive for Vault users to actually come back and unwind those loans if DAI price is, of course, below 1.005, so they still have some capital in the over-collateralization part. That is one potential idea. Otherwise, in that, we can control most of it in three months, so I am not worried about it and, as I said, you can see those Vaults winding down every time the price of DAI goes below 1.01, there is a natural incentive for those Vaults to unwind. Although the recent unwinding that we saw in recent days, you see some of that, I think it was about 35 million decreasing USDC-A. Part of that is purely related to USDC Vaults farming Dai somewhere, and now the stablecoins farming rates fell a bit, and you are seeing people that farm Dai with USDC Vaults, they are unwinding some of them because they want to get USDC back, right?
- Nik Kunkel: About that, you suggested that once we hit a certain average collateralization ratio, then we turn off the stability fees. What is the argument against the alternative for it, where you keep the stability fees on? Doesn't it just come out as a wash anyway, right? Because a system thinks its additional collecting fees, but it is not because if these Vaults were ever to get liquidated, all those fees would be a loss anyway. However, at least people opening new positions would be paying net positive stability fees versus in your scenario, even new people coming to open a position they are not going to be paying any fees. So can you explain that a little bit more? I am sure you have a great reason for that!
  - Primoz Kordez: Why not just manually liquidate then and why rely on them unwinding themselves? Why is that better? When there is a clear incentive for Vaults to unwind, you are sure that you are collecting your fees. Whereas, if you do manual liquidation, there are some unknowns there, they are going to be Auctions and keepers bid as much as they bid, and there might be some slippage applied, so you never know what the loss is there. Whereas, if you shut down fees and hope that those Vaults return unwind, you exactly know that you will collect all the Dai and all the fees, if that happens, of course. That is why I still prefer market-wise unwinding.
  - Matthew Rabinowitz: Wouldn't that also create a situation where, if you are collecting fees, once it gets over the threshold, will also be burning a bunch of MKR on somewhat fictitious fees and in reverse, if we have an unwind, you are ultimately diluting MKR by the same amount, by turning it off, you would impede both steps, no?
  - Nik Kunkel: But what you can do is just increase the size of the surplus buffer, and then you never go through the whole MKR dilution and burning and then dilution again. Because before it prints MKR, it dilutes MKR, it grabs it from the stability fee, the surplus buffer first, as a primary, right? It is just accounting in my mind. There is no knowing how much slippage do we have when we burn and how much slippage do we have when we dilute. There would not ever be a burn and a dilution if we set the parameters correctly.
- Kurt: If I can jump in quickly. It is certainly preferable if you are going to leave fees on route to collect surplus buffer and keep enough in it to cover all those fees, so you do not have to have that, the inefficiencies that would come from first burning MKR and then reminting it. So, it is better to keep the buffer. However, the final point I want to make is that they will always be as inefficiencies in the liquidation process. One place where this comes from is the minimum bid increase parameter, which is a percentage currently set at 3% for all collaterals, so even if you had a 100% collateralization ratio Vault (if you theoretically sent that to Auction), you'd probably only get back 98 DAI on it. You are looking at a high probability of losses and inefficiencies with liquidations, even if everything goes correctly.
- Nik Kunkel: I mean, for stablecoins, we would almost 100% lower that threshold, right?
  - Kurt: Oh, it is set at 3% right now.
  - Nik Kunkel: Well yes, but we do not have the liquidations turned on for stablecoins. If we were to turn them on, then presumably we would lower that parameter to something like 1% or maybe even 0.5%, but 1% at least. Because otherwise, we are just taking a stupid amount of losses. I think that the missing thing here is the fact of liquidations 2.0, right? That is really what will help us in this scenario, right? Because they have an instant settlement in a single transaction, which means people can use flash loans, so the capital requirements go way down, and people can directly arb against things like Curve and Uniswap. Having an auction keeper, not have to put up capital and can immediately trade against Curve. You will get a much more competitive price just because of the amount of liquidity that there is on Curve.
- Kurt: You can certainly minimize the risks involved with liquidations as the liquidation system either by changing parameters or by launching improvements to it. The question is how much more risk or disruption is there with doing a liquidation versus getting these things to unwind naturally.
- LongForWisdom: I think Brian made quite a good point in the sidebar. If Dai is below peg at the time liquidations happen, then in theory, you have the potential to gain if Dai is below a dollar during the liquidation time.
  - Kurt: And if DAI is above a dollar, the opposite will happen where you will get even less DAI then you expect.
  - Primoz Kordez: Yes, but if Dai is below peg, those Vaults will not unwind themselves. You would not even be relying on Liquidations unless Vaults are clearly abandoned. However, that is the idea of self-unwinding. If there is still some over collateral inside, Dai is below, and they will unwind themselves. You would not even need to liquidate them.
  - Brian McMichael: 101%; I mean, there were plenty of opportunities to take a flash loan and take the arb and walk away from the Vault entirely. We cannot count on the original Vault holder to unwind their Vault, because they may not even have access to it, depending on how they coded it.
- LongForWisdom: It would maybe be good to start a thread about the various actual options for winding down stability fees because it has been discussed in the Calls and the Chat, but it has not been a forum post that summarizes the various options.

#### Links from Chat

- [Governance at a Glance](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Weekly Actual Debt Ceiling Adjustments](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-adjustments/4312)
- [Maker Badges](https://github.com/naszam/maker-badges)
- [Badges Went Live](https://forum.makerdao.com/t/badges-are-live-in-the-maker-forum/4503)
- [Signal Request Rates V2](https://forum.makerdao.com/t/signal-request-rates-v2/4481)

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
- Everyone who spoke and presented on the call, listed in the headers.
