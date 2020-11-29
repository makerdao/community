# Episode 90: April 23, 2020

## Agenda

- [00:00](https://youtu.be/9gzBHFiNOxs): Intro with Rich Brown - The road from Intention to Implementation
- [9:52](https://youtu.be/9gzBHFiNOxs?t=592): Governance at a Glance with LongForWisdom
- [13:34](https://youtu.be/9gzBHFiNOxs?t=814): MIP Editor and Smart Contract Domain Team with Charles St. Louis
- [22:33](https://youtu.be/9gzBHFiNOxs?t=1353): wBTC as collateral - Request For Comments with Lev Livnev
- [1:00:56](https://youtu.be/9gzBHFiNOxs?t=3656): State of the Peg with Vishesh Choudry
- [1:07:25](https://youtu.be/9gzBHFiNOxs?t=4045): Q&A

## Video

<https://youtu.be/9gzBHFiNOxs>

## Introduction

### Rich

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/9gzBHFiNOxs)

- Hello everyone, and welcome to the April 23rd edition of Scientific Governance and Risk meeting. My name is Richard Brown. I am the head of Community Development at MakerDAO and not for much longer the Interim Governance Facilitator. We have some exciting developments in that camp. I encourage everyone to head up to the forums and take a look at [LongForWisdom post.](https://forum.makerdao.com/t/its-time-for-a-second-governance-facilitator/1998/13) I proposed the addition of a new Governance Facilitator last week, maybe the week before. Very exciting things happening, so there are going to be new additions, and it also ties into another theme that we're going to be discussing today, empowered actors in the ecosystem.
- We have two new empowered actors that Charles is going to be introducing to us later on in the schedule. He will also be walking us through `MIPs` again because they are very very important and it's critical that this group and our protocol, in general, begins to internalize the implications of it, what it's going to look like, how it's going to be implemented, what it takes, what requires to get involved with that process and when. Calendaring is always a huge thing, as well. Not the sexiest thing in the world but critically important, and he'll talk about that for a bit.
- LongForWisdom will give us Governance at a Glance. How hard could that be? I don't think there's much governance happening this week, so it should be super fast to crank through that one, and, oh, this is very exciting: Lev is here! Lev is going to talk about wBTC and his post from the forum. It's a fascinating project, and obviously, Bitcoin on the Ethereum blockchain will change everything, so this is a really interesting development. Cyrus is going to be talking about risk and collateral, and then Vishesh will be here to give us the State of the Pegs.
- I want to hit a beat that I've been hitting every call for the last month. I've been refining my memes as the call progresses. The new meme is "_The path from intention to implementation_." And that's what we need to think about. MakerDAO, Maker Foundation, community, and ecosystem have aligned over the last couple of years to build a very sophisticated protocol that supports the DeFi space. To do so requires a great deal of work, time, energy, and money. As we become more successful and sophisticated, the amount of work and coordination that takes increases, and let's add some more complexity to that picture, why not. We're also externally driven, which means that we're designed to be decentralized. It's not branding, that's the core mission. We need to rapidly expand our operations outside of the walls of the Foundation, that means we need to identify empowered actors and groups of stakeholders, and give them what they need to begin to drive the bus for us and control their own levers and ultimately take control of the protocol and their own destiny (let's get dramatic). In order to do that, it requires operational overhead. It requires coordination; it requires communication; it requires Governance, humans interacting with other humans. This is a learning process for all of us as we begin to expose more hooks into the protocol and hand-off the decision-making process.
  - The community and the ecosystem, the governance community as well, signals its intention. We have tools to capture this, in the forum, the portal, with votes and polls. That guides the direction of everybody else involved in this process. What we need to do very soon is to begin differentiating between intention and implementation. I'm preaching to the converted here since this is a sophisticated group of individuals, and presumably, we all have very complicated jobs. And in those jobs, when something needs to be done, stakeholders need to be identified, plans need to be made, people need to sign off, developers, PR, content writers, smart contracts need to be developed, auditors need to be brought to the table. Nothing is simple in this world. The path from intending to do something to actually doing that thing can be complicated.
  - Right now, we have a system where we signal intentions, and recently we were seeing some examples of intentions that had dates associated with them, and those dates went into the system before any feasibility plan was associated with them. We're running into situations where the community wants something to happen, picks a date for that thing to happen, and then we have to go back try to figure out whether it's possible for that to happen, and that's backward.
  - In the absence of prior planning, it's impossible to judge bandwidth appropriately and determine scope. When you don't have those two things, it's very easy to begin a flywheel process where intention comes into the system, but implementation cannot come out of the system. Figuring out that you've hit that point frequently occurs after it's too late. We're on a situation right now. Let me see if I can list them all. Right now we have a few things on the go:
    - SCD Shutdown
    - Collateral Compensation Group
    - Dark fix
    - GSM
    - Collateral Onboarding
    - Introduction of the `MIPs` process.
- As of 11 minutes ago, we had ten separate polls in the polling system from just one week, and we're looking at more next week.
  - It's my contention that we are already stressed, as far as our cognitive load goes. Our ability to process new ideas and identify all the threads and all the projects in motion had problems weeks ago, and now things are busier. That puts us in a situation where we need to optimize process and understand how we can start attacking these problems that we have in the ecosystem, or these challenges or new issues that we want to address in a more considered and deliberate manner. That is my segue because we have a solution to this problem! And that solution is a framework called the `MIPs` process.
- I'd like to encourage everyone to internalize the fact that `MIPs` are a thing and are going to be implemented soon. I'd love for people to take some of their copious free time and head into the forums and start reviewing some of these things. If you're interested in moving the protocol if you're interested in becoming more engaged, if you have skin in this game, if you have collateral types that you want to see introduced, this is the path to do that. I'm not going to get too deep into it because that's Charles's jam. But here's my caution: everybody internalize that and know that it's coming. In early May, the format of these calls is going to change radically. We'll have new people assuming new responsibilities, we'll have a more formalized process, so if you want to be prepared for that you're going to need to do some research, I think. As usual, some generalized caution.
- Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Governance at a glance

### LongForWisdom

[9:52](https://youtu.be/9gzBHFiNOxs?t=592)

- [Action Required: State of the Peg](https://forum.makerdao.com/t/action-required-state-of-the-peg/2025/)
  - Parafi's post about the state of the peg, where they posted a fairly robust argument in support of taking action to address the Dai price disparity from the peg. I see that prompted a lot of activity, and there's a lot of discussion going on that thread. If you want to know what's going on, I suggest reading that thread and getting involved.
- [It's time for a second Governance Facilitator](https://forum.makerdao.com/t/its-time-for-a-second-governance-facilitator/1998)
  - This was the second one, and I have now responded to the thread. Read it.
    - Cyrus Younessi: Sorry to interrupt. Did you accept the position?
    - LongForWisdom: I said I would be willing to do it if ratified, yes.
- [The Release of the 13 Initial Maker Improvement Proposals (MIPs)](https://forum.makerdao.com/t/the-release-of-the-13-initial-maker-improvement-proposals-mips/1915)
  - `MIPs` are still a thing. There's a thread for each `MIP`. The discussion continues in many of them. We had a meeting run by Lucas from Centrifuge, where we discussed some of the `MIPs`. There is a link to the recording of that discussion.

##### Seeking Consensus

- [Signal Request: Calibrating `GSM` delay in light of recent market events](https://forum.makerdao.com/t/signal-request-calibrating-gsm-delay-in-light-of-recent-market-events/1979)
  - The calibration of the `GSM` delay is currently on-chain, on voting whether to change the `GSM` delay to 12 hours or 24 hours and whether to include a change in the next executive vote.
- [Signal Request: Grace period between when SCD shutdown spell is scheduled and actual shutdown](https://forum.makerdao.com/t/signal-request-grace-period-between-when-scd-shutdown-spell-is-scheduled-and-actual-shutdown/1992)
  - The problem is now finished on the Grace Period between the `SCD` shutdown spell and the actual emergency shutdown of `SCD` or global settlement of `SCD`. I believe that will not go on-chain separately, will just be included in the executive when we come to shut down. General reminder, as Rich said, there are like ten on-chain polls, which I think they're finished now, so I guess you should have voted. Timing-wise it's a little bit awkward. There are probably going to be more next week.

## Maker Improvement Proposals

### Charles St. Louis

#### Ratification of Domain Team Roles

[13:34](https://youtu.be/9gzBHFiNOxs?t=814)

- Charles St.Louis: I've been putting together a calendar diagram that [I will share in the forums.](https://forum.makerdao.com/t/the-ratification-timeline-for-the-initial-13-maker-improvement-proposals-mips-and-2-subproposals/2169) I'm not quite done yet, but I will verbally communicate it here. The current request for the comments stage is still ongoing until the timing poll occurs on the 27th. What that means is that people can go and make suggestions for the `MIP authors` to take into account. This includes the 13 initial `MIPs`, as well as the two new sub-proposals that were proposed yesterday: the first one is my proposal to get myself ratified as the `MIP editor`, and the second one is the smart contract domain team's sub-proposal to get them onboarded and ratified as well. I'm going to share those here, and I will briefly go over them after I walk through the timeline, but just in case you want to look at it before, they are in the chat.

[14:45](https://youtu.be/9gzBHFiNOxs?t=887)

- Rich Brown: Can you give a brief description about what each role is all about, what their responsibilities will be?
  - Charles St.Louis: As a [`MIP editor`](https://forum.makerdao.com/t/mip0c12-sp1-subproposal-for-core-personnel-onboarding-mip-editor/2133), there will be more in the future, but as the first one, I will support and enforce the administrative and editorial aspects of the overall `MIPs` process. Getting them onboarded to the governance cycle, making sure that proposals are formatted correctly, and there is no missing information, and that the full list is actually discussed in `MIP 0`, under component 10, which basically describes that the `MIP editors` are responsible for maintaining and managing the future `MIPs` at MakerDAO site that mirrors the GitHub, which has not yet formally been created: provide feedback and have discussions with `MIPs` sections on the forums; so that's kind of shepherding the process for `MIP 6` proposals, making sure that people know where to go and how to get the ideas out there, processing those `MIPs`; the management organization of the `MIP` and sub-proposal preambles, changing the statuses throughout their life cycles, making sure the authors and contributors are listed and updating the dates on the ratification of proposals. The `MIP editors` will also be charged with onboarding the next `MIP` editors or replacing them.
  - Charles: In terms of what some of the tasks are, as a `MIP editor`, for enforcing the MIPs framework, you basically would be:
    - Working to confirm the title accurately describes a proposal.
    - Making sure it has the correct labels and tags.
    - Assigning the formal `MIP number` as it goes through the `MIP` cycle.
    - Changing the statuses of each MIP.
    - Making sure MIPs are in the right category.
    - Working with the governance facilitators on coordinating governance and executive votes in relation to `MIPs` and getting them into the governance cycle.
  - Charles: As for the smart contract domain team, maybe Mariano wants to speak more to that. His proposal highlights what they've done in the past. The foundation smart contracts team, everyone knows them on this call, will be working particularly on collateral onboarding as we kick that off with building the collateral adapters and deploying the other necessary smart contracts, like the ionizer and oracle security module.
    - [Smart contracts Domain team](https://forum.makerdao.com/t/mip7c3-sp1-domain-team-onboarding-smart-contracts-domain-team/2134)
  - Mariano Conti: I'll just give a quick overview, as mostly everything is on the actual document. This is pretty much a formal step to take because of the `MIP` process. We will continue doing what we've been doing all along and into the near future, not just collateral onboarding, but when things need to be done, executive spells, the thing we had with the debt options that needed to be fixed, etc. I'd like to say that we're building on a very immutable blockchain that changes every 3 to 6 months via hard forks. That needs to be taken into account as well so that we can make sure that the protocol continues to run correctly as Ethereum grows. That's all I'd say. You can find the rest on the forums unless anybody has any questions.
- Charles: As I mentioned before, the Request for Comments stage, where people from the community can make comments or suggest any changes, ends the day before the timing vote, so on the 26th. Then, the 27th is when the community makes the decision on whether to proceed with the ratification vote of the initial 13 `MIPs` and those two sub-proposals, or delay ratification for one month.
  - If they do decide to change or delay the ratification for one month, this allows for competing proposals to be submitted by the community, and this would change the timeline for the actual ratification of the `MIPs`. In that case, the deadline for submitting the competing proposals would be on May 20th, and then there would be another vote where the community would come in and select the final individual `MIPs` to create the `MIP` sets. That would occur from May 23rd to May 26th. In this case, the governance ratification vote would occur on May 27th to May 30th, effectively resulting in the governance cycle beginning on June 1st.
  - If we do decide to proceed with the ratification vote of the 13 initial `MIPs` and the two sub-proposals, the governance ratification vote will occur on May 1st, and May 4th and the governance cycle will then begin on May 4th itself.
- In terms of what can happen now until the governance cycle begins: as you've seen,
  - [`MIP 6`](https://github.com/makerdao/mips/blob/master/MIP6/mip6.md) forms can start to be proposed and reviewed in the forums for collateral types to be added in the future, but note that they won't be officially valid until the ratification vote passes. But that shouldn't stop any feedback in the processing period from happening, that can go on throughout the process.
  - In terms of actually getting the collateral onboarding process kick-started, once the governance cycle is in place on May 4th, the collateral types can be formally submitted to the governance cycle on May 4th itself to the 6th. Meaning that `MIP 12` submissions that follow the `MIP 6` collateral type applications can occur during this period of time. `MIP 12` contains the requirements from the risk team, the oracle team, and the smart contracts team. In this case, the smart contracts team and the oracle's team will lay out exactly what they need to do in terms of requirements for getting that collateral type added and it will be submitted as a [`MIP 12` subproposal](https://github.com/makerdao/mips/blob/master/MIP12/mip12.md) by either the person who has submitted the original collateral application, by communicating with the domain teams directly, or by one of the domain teams submitting it themselves. As I mentioned, I will finish up this diagram highlighting everything I've just described, but that's pretty much the updated timeline on everything on `MIPs` that's going to be happening over the next couple of weeks. If there are any questions, I can answer them now.
- Rich Brown: It doesn't sound like any questions are coming. If people have questions, though, they can course them later on or type them in the sidebar or join the forum posts, so they are recorded for all time. Lev, I think you're up - do you want to walk us through the WBTC RFC?

## Lev Livnev

### wBTC As Collateral - Request For Comments

[22:33](https://youtu.be/9gzBHFiNOxs?t=1353)

- I'm going to start by posting this [wBTC Request for Comments thread](https://forum.makerdao.com/t/wbtc-wbtc-collateral-request-for-comment/2135") here in the chat. I'll be brief and then allow people to ask questions.
- The context of this is the discussion that's been going on already for a couple of days and started with the forum post called ["Action Required - State of the peg"](https://forum.makerdao.com/t/action-required-state-of-the-peg/2025), which is discussing the sustained premium that Dai has had on the marketplace for basically ever since the 12th of March. I'm not going to address the context that makes this necessary, but one of the main strategies that are under discussion there are about adding collateral types that are likely to result in Dai issuance and create supply to put down the pressure on the price and normalize and demonstrate that governance has had it under control.
- For this, I would like to propose wBTC as such a collateral type to be considered in this emergency context, which implicitly means skipping through some of the process that's currently being created for proper collateral onboarding, similarly to the other collateral types that are being discussed in this emergency context. However, to be able to propose anything I felt the need to quickly throw together some kind of framework, and I'm willing to take suggestions on what this framework should look like, but basically, it consists of these three questions:
  - Is the collateral considered, in principle, an asset that one day should be added to `MCD` with some choice of risk parameters? I think we all agree that even as an emergency measure, we wouldn't be fast-tracking some collateral that we in good faith don't expect would ever have been collateralized under normal circumstances.
  - Do we think that adding this collateral in the very near future (with some reasonable risk parameters) actually leads the Dai issuance in material quantities would affect the price of Dai in the market?
  - If the answer to the above questions is yes: what are the risk parameters that we should use while making sure that we're conservative enough and protecting the system while we're making these decisions in an accelerated time scale?
- I can go through answering these three questions through my point of view, which I think indicates that wBTC is a very strong choice of collateral to be added in this context.
  - The answer to the first question: Custodial solutions for putting assets like BTC on Ethereum are basically one of the main ways that you can get exposure to Bitcoin through Ethereum and on MakerDAO. There are other solutions that people are also working on that are more technically sophisticated and have some tradeoffs, but I think over time, it's become pretty clear this custodial solution is one of the main ones.
  - The question of whether or not to tap into BTC as collateral in general, I think almost everyone agrees that that's something that we want because the BTC lending market and BTC trading, financing, derivatives, and so on are just really huge markets, even compared to ETH. So there's really nothing bigger than BTC when it comes to cryptocurrencies. And I gave some numbers there in my post, but basically, if you look at Bitcoin derivatives, and futures, and swaps, you will see that open interest for those products is probably over five times that of ETH, and ETH coming at number 2. And ETH is our number one asset right now, so that clearly indicates that there's a lot more potential with the BTC. Likewise, the lending market for BTC is also much bigger, so when it comes to leverage seekers, which are people who would issue Dai, there's maybe heuristically like 5 BTC leverage seekers for every single ETH leverage seeker. So clearly, we would want wBTC at some point.
  - Going to point number 2, whether or not we could actually really see enough Dai created against wBTC, I believe there's a good chance that we will. I have 3 points there.
    - The massive size of the BTC lending market and the margin trading and derivatives markets. Even relative to ETH, there's really no other asset in cryptocurrency that comes close. There have been other assets under discussion, and for those assets is very hard to make the case that they could come anywhere close to ETH in terms of how much demand there would be for minting Dai, BTC is the only exception to that.
    - The second point is about rate arbitrage. We have the ability through monetary policy to set very low rates in order to encourage Dai creation, and whenever you do that, you're opening the opportunity for someone who's currently borrowing those BTC at higher rates, you are creating the opportunity to refinance there. If we choose the rates correctly, there will be a lot of people out there who have an outstanding debt against BTC. And then it's just a question of how well they will be able to access vaults, and how well will they be able to access wBTC. But the demand is necessarily there.
    - The last point, I've been speaking to traders, lenders, desks and so on who deal with BTC and I've seen a very positive response, specifically about wBTC as a vehicle, and also just in general, to be able to refinance BTC collateralized debt using vaults, were that to become available.
    - In the third point, I proposed some risk parameters for discussion. I think the most important thing there is to carry over as much as we know from ETH because the BTC market is not that different. Choose a Stability Fee that will make sure that refinancing is still attractive, so we have to be very competitive with the existing lending markets. And lastly is to make sure that we do manage the uncertainty of the custodian risk and, just, in general, the uncertainty from having gone through this accelerated process with a conservative choice of Debt Ceiling not to overextend ourselves there and basically choose a debt ceiling that we would be very happy to see filled up and we think that that would materially help the peg, but not go too far because of the constraints on the process right now. And that's about it.
- I would like to have the opportunity to have a discussion and hear some questions about this, and there are also a couple of people on this call from the wBTC and the lending communities who might be able to answer some of these questions or have something to say. I think Kirash is here from BitGo. BitGo is the custodian of wBTC. We also have Matt from CoinList, which is a lending desk, also one of the largest wBTC market makers. I'd like to turn it over now to anyone that has questions about this RFC.

#### Questions and Comments 1

[30:10](https://youtu.be/9gzBHFiNOxs?t=1810)

- Cryptowanderer: You mentioned in the chats that you guys run an 8 of 11 multi-sig wallets to add any potential market-makers or custodians - I forget the terminology that you use - that currently there is a smaller subset, including Kyber and Airswap and two others, that are actually running that wallet and that can redeem wBTC for ETH. Could you perhaps talk a little bit more about that?
  - Benedict Chan (BitGo, CTO): We have multiple roles in our ecosystem, and the people that can do redeems and mints, we call them merchants. You can view a list of them on the site [wBTC.network](https://www.wbtc.network/), it's not just a few, it's quite a handful of them, but we actually see that CoinList has been really very instrumental in setting up a portal to do one-to-one mapping that we think is far better than going through a merchant today. I think that's quite hopeful, so maybe Matt from CoinList can explain more there.
  - Matthieu Jobbe Duval (CoinList, Head of Financial Products): Thanks, Ben. The idea that we had a couple of months ago was that the wBTC minting and redeeming process has been optimized for institutions. BitGo decided to go with a merchant model where only KYCed entities onboarded via the DAO would be able to access wBTC. However that was designed, correct me if I'm wrong Ben, with the upticks that those merchants would mint large quantities of wBTC and then make it available to their final users via either an order book like Kyber, DDEX, or Diversify or via a wrapping-unwrapping functionality, which is exactly what CoinList has put in place. Of course, these platforms, Kyber, etc., they support wBTC, but they do many other things, so they are not necessarily optimized for user-friendliness specifically on that asset as they've been very successfully running other initiatives.
    - CoinList was in a unique position to simplify the whole process for retail users because we have access to extremely cheap BTC funding, uncollateralized, so we essentially minted a large portion of wBTC - about 25% of the overall wBTC issuance has been minted by CoinList. These were then made available to market makers and retail users. So at the moment, anyone who would want to access the asset simply needs to create an account at Coinlist, for example, and hit "wrap" button paying a small fee, either a fixed fee of 0.25% for retail users or a decreasing fee for entities trading with us. Of course, you might think that only CoinList is doing this, so what if CoinList disappears or goes away or pulls the plug on the asset? Now, what we've seen is that business is providing liquidity of an asset without any market risk attached to it of course because all trades are BTC vs. wBTC or vice versa, there is no actual market risk or credit risk involved in the loans, there are no margin calls of course - the assets are pegged one-to-one.
    - If we are doing it and being profitable with that business, it's going to attract other counterparties, it's going to attract other market makers supporting that same exact functionality, and the fees are going to be driven down. So, overall, this is only the start for this asset and for this access, and having Maker allowing wBTC as an asset will only bring more limelight to this part of the ecosystem in really bridging in a very efficient manner the BTC world and penetration in the retail crypto-portfolios with DeFi and what Maker is trying to achieve.

[34:35](https://youtu.be/9gzBHFiNOxs?t=2075)

- Rich Brown: I can throw a bit of a curveball here, so forgive me for this. Bitcoin tokenized on an Ethereum blockchain is sort of a Holy Grail. We've been all (well, I should not speak for all the people) I've been anxiously waiting for a long time now, and wBTC has been out for a while now. You spoke to one of the issues you have faced or maybe a solution to one of the adoption issues you faced with encouraging retail users to get involved, but can you speak to some of the other reasons why you think that wBTC didn't explode out of the gate like what are some of the challenges you've seen so far in acquiring liquidity because I'm looking at the network has a 1,000 BTC right now, is that correct?
  - Kirash: To be honest, my perspective is that wBTC is not a HODL coin. If you want to hold Bitcoin, there is no point in getting wBTC. If you're getting it, you want to do things with it, such as, use it in financial applications. The demand is partially generated from those financial applications supporting wBTC. That has been growing, and it's a snowball effect with market makers coming along and new applications supporting it. We've seen this growth and actually a big part of it, I think Akash brought up this point, is the biggest use case for wBTC is Maker.
  - RB: That's something I've been trying to wrap my head around as well. I'll say it again, I'm not a sophisticated financial thinker, but there is some part of me that wonders, "Is there some circular risk going on where the case that the success...a rapid adoption of wBTC would be spurred by its addition as a collateral type in Maker, but we have to add it as a collateral type in Maker to increase the adoption of wBTC, so potentially the protocol becomes a significant factor in that success of the token. Is there some kind of circular dependencies here that should be concerning to us?
  - Lev: I think it's very important to keep things reasonable with the choice of debt ceiling, in particular, to make sure that we don't end up in a situation where wBTC has growing pains, where we've essentially allowed it to be used in Maker to such an extent that the rest of the infrastructure can't keep up, and then something may start to strain on the create-redeem process or liquidity or somewhere else. If we were considering it as an emergency collateral type, rather than collateral type through the MIP 6 process later, I would choose a debt ceiling where we thought we would make a material impact on the peg, just like with any of these emergency assets, but one which still is not going to involve the wBTC supply going up 10x as a result and having 90% in Maker, or anything like that. And, I think that a debt ceiling in a five to ten million Dai range would be neither of those things. The other thing to consider with the existing use of wBTC is that the two largest lending market makers, by far largest in DeFi, Maker and Compound, neither support wBTC collateral. Some smaller ones, newer ones, like Aave, do allow you to borrow against wBTC, but to the larger extent, it hasn't really had this adoption because it hasn't had a chance in one of the larger applications.
  - Rich Brown: Thanks for that, makes sense.

[38:43](https://youtu.be/9gzBHFiNOxs?t=2323)

- Lev: I wanted to ask one thing about how to record this RFC, and I'd like to hear the community's view. I think it would be nice to have a poll in the forum about some of these questions considering wBTC. There've obviously also been polls in the context of the state of the peg emergency situation. But, essentially, what is the information we want to tease out from the sentiment is the answers to these three questions? Who agrees and disagrees about wBTC being a viable asset and being a helpful asset in this emergency, what people think about risk parameters, or is there some other thing that we should try to gauge?
  - RB: Well, Cyrus, you have been sort of shepherding the forum thread in the collateral type polling so far, so how does this fit into that model?
  - CY: That's kind of an open question to be honest, as it's somewhat of an unprecedented situation that we're in. As far as emergency measures go in trying to help save the peg, we just do due diligence up to the point that we can and then take it from there. In terms of forum threads and governance polls, I think we can figure that stuff out offline. I don't really think we have a clear understanding of what that would look like as of right now. We still have to hear from the engineering team about timelines and feasibility of turnaround time for adding a new collateral type such as wrapped Bitcoin. It may take a few days up to a few weeks. So depending on that process, we would structure forum polls and the governance polls differently based on the amount of time we have. The short answer is that I don't know right now, but we'll be monitoring it and helping to facilitate the process as we get more information.
  - Mariano Conti: I can speak to that later, but I would say one of my concerns is: is there going to be enough market makers to bid on liquidations of wBTC should they happen?
  - Cmooney: I was just looking at that myself. It looks on DEXes like there is about 50 BTC of liquidity before you get massive slippage right now.
  - RB: There are liquidity issues, but there are also the turnaround issues, and there is a process involved: my assumption is that there is some kind of redemption process, which is different than the way that the auctions are designed right now, where we're expecting that in a short period of time liquidity is available. Is there going to be an issue with the way that redemption works with wBTC?
  - Matthieu: Right now, talking about minting, you could get, if you're an onboarding entity, 105 wBTC in your wallet in about 2 minutes, maybe less, automatically 24/7 without any human involvement. 105 is nice, but this pool will grow as the market grows. If Maker onboards us as collateral, it would undoubtedly grow. It can grow to 500 or 1,000 wBTC in a few days. There is really no limit to how much Bitcoin we can source. Burning is exactly the same thing; it's actually even faster, probably a few seconds. You would send us wBTC, we redeem it for BTC - not just us, but other people would also do that as the market grows.
- Rich Brown: There needs to be some kind of oracle for that correct? We can't allow the debt ceiling to exceed the amount of liquidity that's available. How is that measured, or how is that allocated?
  - Lev: I think it's important to understand how redemption works because that's relevant for liquidating collateral. Since when you liquidate, liquidators buy wBTC for Dai. As Matt explained, CoinList is a very active liquidity provider there, but they're not the only one. Anyone can go through KYC, if you're a trading firm or some market maker with the wBTC DAO and be allowed to redeem wBTC from Bitgo directly. The amount of wBTC that's redeemable there is the entire supply of wBTC. It's all backed 1 to 1 with Bitcoin, and you can redeem all of it if you wanted to. Someone from BitGo can confirm, but I would assume that's the case. But there are also people like CoinList who are providing this service at a faster turnaround and also exposing this functionality to any retail user who sets up an account with CoinList. In that sense, it's very similar to the process with USDC - you can also ask with USDC how to redeem USDC for USD? Anyone who has an account with Coinbase would be familiar with that process, where there is a button that converts your USDC to USD in any amount that you desire. In that sense, the analogy there is that CoinList is like Coinbase and Centre, the company that issues USDC, is like BitGo.
  - CY: Is the Coinlist custody different than the Bitcoin custody?
  - Lev: To be clear, CoinList isn't a custodian. It's just the liquidity provider that essentially stands up in front of a retail user and says, "I'll exchange your wBTC for BTC or vice versa." The only custodian of wBTC today is BitGo, I believe.

[45:07](https://youtu.be/9gzBHFiNOxs?t=2708)

- Cyrus Younessi: Can the BitGo people chime in on any insurance coverage that you guys have regarding the deposits? I think you guys have some docs that maybe you can share later in the forums as well? Maybe talk a little bit about what would happen in case of hacks, bankruptcies, or any other such situations?
  - Kirash: Sure. It's one of the most comprehensive crypto-insurance policies in the industry and possibly one of the first. Every cold storage BitGo wallet is insured up to \$100 million. And of course, you don't leave more than 100M in a wallet. I'll be happy to share some docs, and there's obviously a route to very cheaply increase that insurance policy as well.
- Rich Brown: Who's providing the insurance?
  - Kirash: It's Lloyds. Just to echo what Lev mentioned earlier, if you run into the same issue where you need to get rid of a lot of USDC, you don't necessarily always interact with Centre. You go through Coinbase. If Coinbase's buffer isn't enough, then they will interact with Centre. The timelines of Coinbase interacting with Centre is very much the same as CoinList interacting with BitGo. As there is no wiring, because the USDC is wired to Center, it's actually faster. Not every wBTC that ends up on Maker is going to come through us. This merchants' system is designed for the liquidity providers to be independent of the custodian.
  - Benedict Chan: I can confirm that that's right. The idea here is that BitGo has all the BTC behind wBTC. It's publicly auditable, you can check the site for it, and we actually do regular, scheduled audits every month. The reason why CoinList is stepping in here and they are so valuable is because a good amount of wBTC is held in cold storage. Just like Circle probably has a certain amount of time that it needs to take to redeem USDC there, we would not be best to target for retail in terms of the amount of delays that it would take to redeem wBTC with us. Merchants can do that no problem - it's a balanced trade-off that we make for security purposes because of the cold wallets.
  - JoeQ: I wanted to say one thing: we're making a market in wBTC on Oasis, which is not doing that much, but we were the first ones to put wBTC in size onto Uniswap. I'm all for putting all sorts of Bitcoin on there, besides the wBTC, Ren, tBTC. I think that Lev pushing for this is a great idea, and we should do it, but it comes down to what Mariano said: we need people (and this is across the board as we add collateral types) to be there for collateral auctions when they happen. Now the auction duration is six hours, so it's fine, but as we grow the system, we need more people to participate in that.
  - LongForWisdom: Presumably, the merchants and liquidity providers that were mentioned are incentivized to act as keepers as well, if they can get wBTC for less than the price of Bitcoin. They can take it and swap or whatever. Is that correct?
  - BC: I would say so. I would do it if I were a keeper or a merchant. Bitcoin is arguably one of the more stable crypto assets, compared to many others.
  - Cmooney: Would any of you be willing to commit to running an auction keeper for wBTC?
  - AndyChorlian: That's a pretty large monetary commitment, I don't know if that's a fair thing to ask someone.
  - Lev: I'm definitely aware of people in the space who are involved with these kinds of things. We can take this discussion further, but I don't think it would be that hard to get an indication of interest in that.

[50:52](https://youtu.be/9gzBHFiNOxs?t=3052)

- CY: Just thinking about the roundtrip cycle for keepers. Even if you had an easy link between wrapped-Bitcoin and Bitcoin, easy redemption, or going from Bitcoin back to Dai is still somewhat of a challenge in this space, so it's definitely a more involved process than bidding on ETH.
  - Akash Patel: I kind of disagree with that. Let's just go through this process: you start with Dai and the merchants, who we handed the GUI for auctions that are now 6 hours, if you just handed them the manual GUI, where they could bid a reasonable price (and it would be great if they were running a keeper, but if that's too much even the manual GUI would help), they bid with Dai, they win the wBTC, they convert it through a couple of mechanisms now, either CoinList or the redemption process through BitGo. They get BTC, go to Coinbase and sell that BTC for USD, which they can easily convert to USDC; they can bring that USDC back to MakerDAO, mint Dai. We're talking about a stressful situation - they bring that USDC, mint Dai through MakerDAO, and they're back to Dai again.
  - LFW: There's also a USDC<->DAI market on Coinbase, which they could use.
  - Lev: Couple of things. One is that you have much longer confirmation times with Bitcoin when you're sending it to Coinbase. That's probably an additional hour right there. In the best case, which isn't too common, if you buy ETH in an auction, you can flip it straight back into Dai via Oasis or Uniswap. Whereas with wrap BTC if you don't have that wrapped BTC liquidity on the DEXes, which we don't today, then you have to go through the process you described. You don't have the option of making a quicker roundtrip.
  - MJD: The thing is that you can hedge with BTC<->DAI or BTC<->USDC. You don't need wBTC since it's 1:1 is guaranteed.
  - CY: The key for us is that we want to end up in a position where the keepers have Dai in their hands again for subsequent auctions, that's really where the cycle ends.
  - MJD: But then, they can just hedge the price exposure with whatever they like, and then it can be diversified. It can be Kyber or Coinbase to recycle and get Dai in their hands again.
  - BC: Would they not just buy Dai on Coinbase?
  - CY: It's not only the price exposure. We actually need keepers to have Dai in their hands so that they could bid on subsequent rounds of auctions. Hedging the price exposure wouldn't help in that sense, and going to Coinbase to buy Dai would involve sending the Bitcoin to Coinbase, which is just slightly longer process than ETH, speaking purely from confirmation times.
  - Lev: I think you have a good point there, especially from the confirmation times. The average wait time on a Coinbase deposit is higher than it is for ETH. To elaborate for other people, Cyrus is talking about needing to go full circle without any external financing. If you have a keeper with access to financing, with enough capital, they don't need to go full circle to liquidate something. Just as they're buying one batch of wBTC and starting that process, they can already be buying more Dai with cash they have anywhere. And keep going. We saw this in Black Thursday where a strain on the whole system hit keepers with capital strains, not enough access to Dai in the time available, and not enough liquidity in a 10-minute short window, which is why it's so important that the auction parameters have changed. With where they are now, it's more sensible for any asset.
  - Lev: The other thing I want to mention is [DeversiFi](https://deversifi.com/). It's a DEX that is also a wBTC merchant and is also pushing for trading with wBTC exposure on their platform. They're similar to CoinList, where they're making wBTC available by mirroring bitFinex BTC orderbooks. They've got reserves of BTC and wBTC to bridge these two exchanges. There's actually already deeper wBTC liquidity available on DEXes than you would expect thanks to them.
  - Lev: Lastly, it's worth mentioning that DyDx is launching this BTC perpetual swap product. It's a step forward in people trading BTC-type products on DEXes and provides a venue where traders are able to hedge BTC exposure if they are stuck somewhere in this loop because you can actually go short BTC with 10x leverage on DyDx while holding that wBTC that you just liquidated and you're trying to make this full loop. That's kind of interesting and not something you were able to do before.
  - LFW: We can have different auction parameters for BTC Vaults, we could extend times specifically for those if we felt that would work better.
  - Lev: That's true. I think in general, it's very wise to think about total round trip redemption time, confirmation times on other blockchains when you're thinking of auction parameters. You have to think about the worst-case scenario. If all liquidity and financing have dried up, you have to have participants who will be able to do a full cycle.
  - Akash: Adding USDC as a collateral type greatly helps in stressful times. The biggest issue was the USDC<->DAI conversion. Now that you're not stressing the Coinbase market, just minting it will alleviate a lot of the problems that we were seeing.
  - LFW: Sounds like that's a good point to end that segment. Maybe we should move on.
  - RB: Was just going to say the same. Let's figure out the next steps before we just change the subject. Lev has helpfully put up [a forum thread to discuss wBTC.](https://forum.makerdao.com/t/wbtc-wbtc-collateral-request-for-comment/2135?u=davidutro) The concerns, questions, and compliments that wBTC received in this conversation should be reflected there so we can all internalize it over a longer time frame. Let's do a call back to what I mentioned at the top of the hour, how we figure out moving from intention to implementation. Earlier, I raised some of the issues we'll need to address on this path. Recourse, redemption, auction keepers; that's the first rabbit hole we went down, but I'm betting there are more to address. Let's treat this as a project, to identify the stakeholders, that we understand the implications, and that there is a plan to make it happen if that's what people want. Please, join us on the forums.

## Analysis

### Vishesh

#### The State of the Pegs

[1:00:56](https://youtu.be/9gzBHFiNOxs?t=3656)

![](https://i.imgur.com/acmFTCI.png)

- We saw a huge haircut in ETH/DAI supply following the events of March 12th.
- From March 19th to April 7th, we saw that the Dai supply steadily started to increase. In the same timeframe, we saw elevated Dai price coming down from highs around $1.07/ or $1.05 steadily back to \$1.01.

![](https://i.imgur.com/YtlfqvQ.png)

- Around April 8th, there was a sudden dip of a few million in the Dai supply. Not much minting going on at that time.

![](https://i.imgur.com/qFmQewe.png)

- This corresponded to ETH's price being flat and increasing slightly, with a sudden jump on the 7th. After that sudden jump, Dai rose in minting activity but with a bit of a holding pattern. As that ETH price came up, there was some potential concern that it would come back down, many people took at \$1.01 price as an opportunity to pay down some debt and basically that led to a dip in the Dai supply.
  - Because ETH was flat for a few days, that Dai price was holding at $1.02. No new people were coming in and minting new Dai or market-making from Dai reserves that they were sitting on since many people got cleared out from all the crash events. Dai was sitting at $1.02 for about eight days.
  - Dai above peg presented a lot of concerns for a lot of people. Though what's interesting is that in the last few days the average price was coming down very slightly, about another cent or so. There were some high trades on Oasis today, but if you look at the current DyDx order books, Dai is trading around \$1.015.

![](https://i.imgur.com/4FMNuoC.png)

- Dai is trading around \$1.015.
  - The freeze in the reduction of the Peg is explainable. In terms of what happens from here, with increasing ETH price, is still uncertain. Dai is very sensitive to movements in ETH price. Everything that has been happening with Dai can be pretty well explained by reductions in reserves, uncertainty with market-making capabilities though market-making capabilities can be attributed to market conditions vs. endogenous system risk. That trade-off is something I would be mindful of, most of this is likely effected by external market factors affecting time-sensitive sentiment on leverage.
- Though there was that sharp drop in Dai supply, it does seem to be trending upward in the last couple of days.

![](https://i.imgur.com/UdzmVRP.png)

- Up to 86 million Dai from ETH. Compared to supply from a couple of weeks ago, it is up about 10 million. Appears to be loosening up, which is a positive indicator. Especially for worries about the peg perpetually staying up.
- It's potentially more difficult for Dai to move from $1.04 to $1.02 versus back down to $1.01. Then it is for moving $1.01 back down to \$1.00. In terms of expectations for a further decrease in the peg, this isn't necessarily a linear trend, and I think it does appear to have loosened up again.

![](https://i.imgur.com/jyQOSPW.png)

- This graph is good context for price performance over the past few months, with insane events occurring in mid-march and then a slight trend downward towards normalization.
- In terms of more granular normalization, and what happens in the next few days will be more important data points.
- If this supply increase continues to trend, and if the peg does trade lower, those are positive indicators for Dai.

#### Questions and Comments 2

[1:07:25](https://youtu.be/9gzBHFiNOxs?t=4045)

- Cryptowanderer: what is your opinion on the current ETH debt ceiling, are we all good? Or is an increase in order?
  - Vishesh: DC is an important parameter to talk about. The buffer in the DC is important to manage. This isn't a new conversation. The ETH DC is $90 million. There is currently $86 million Dai. As far as the likelihood of hitting \$90 Million, at the current rate, the trend could continue, and we could hit the DC. Potentially some increase is worth talking about.
  - The conversation has been had many times in this call about how to programmatically maintain the buffer. The general point that I want to make is that you want to obviously maintain a bit of slack to not hit the DC, but you don't want too much room since it introduces more risk. Say if another ETH price drop happened, you would not want an excess \$30 million DC buffer because there are scenarios that could lead to further losses. It's something to balance. You want to keep some room but not too much room. I think the conversation and many forum polls were had in the past around what exact buffer needs to be maintained. So this isn't something that I can decide right here.
  - LFW: Something that should come up.
  - V: It is close; that's for sure.

[01:09:41](https://youtu.be/9gzBHFiNOxs?t=4181)

- MM: Are you against upping it? Maybe 5 million or something? Do you have something against it?
  - V: I don't think increasing the DC about 5 million for ETH/DAi is a significant risk. The point I want to make is that rather than making specific one-off determinations, there are already conversations regarding rough percentages, or nominal numbers, about DC buffer amounts. In this specific case, I don't think a \$5 million increase is a bad idea, and there are reasonable arguments to be made for doing that.
  - MM: Is there an actionable item? At some point, we're gonna hit the ceiling unless we hit a market downturn or something. Hearing an opinion that doing 5 million wouldn't bother you is important. I think we should do it. Given what's going on with the peg and Dai liquidity, I'd rather not get pegged on the DC limit on ETH, and be stuck with USDC at 6 percent and BAT that no one is touching.
  - LFW: We should consider, if there are a bunch of changes come Friday, that we should probably increase the DC at the same time.
  - MM: I think what Vishesh is saying that we should decide what kind of buffer we need and maintain it. I have this model for facility rate usage, a model that manages the utilization. The rate that the market is telling you, based on that model, will help you determine where to nudge it. I already posted about this opinion, but I do want to second Vishesh's point about a comfortable buffer, probably as a percent of float, and go from there.
  - LFW: It would be good to pick a number if the change is gonna come quickly. Probably something that needs to go on the forums.
  - MM: Just as an actionable item: can we put up a poll to raise the DC from $90 Million to $95 Million or maybe even to a $100 Million since Vishesh doesn't want to raise above $5 Million?
  - V: I'm not saying that 5 or 10 are specific problems. There are Governance questions around what the precise buffer you want to maintain. There are specific questions that are answerable. Is it reasonably likely that we hit 90 in a week or two? That is reasonably likely based on current trends. But trends could also change.
    - The other point is that, once there is a programmatic decision regarding the DC buffer either percentage or minimal, then you don't need someone like me to say: You should increase by 5 million now or 10 million now. Those are questions for gov polls. Does that make sense?
  - Maker Man: Yeah, sounds ok to me. Just wondering if there was an actionable item for Rich and Governance. I understand your point.
  - LongForWisdom: Side chat is talking about whether an increase is urgent enough to increase in the Friday gov call. Based on the rate increase, and the rate of total Dai increase, it's been high over the past few days, somewhere around \$2.5 Million.
  - V: I don't think there is an urgent situation here. No clear, specific problem at the moment. But given the rate of increase, it is potentially likely that you hit the \$90 million within the next week or so at the current rate. Whether you want to change the process to account for that, well, that is a governance question. I don't think, either way, that there is a large specific risk there.
  - Rich: Something to consider too is the significant number of polls and activities that are culminating in the portal an hour or so ago, that are designed to increase liquidity and increase Dai creation.

[1:16:34](https://youtu.be/9gzBHFiNOxs?t=4594)

- Cyrus: Some other considerations. Tomorrow, SCD shutdown is initiating. There is a three-week delay before it actually goes into effect. Tomorrow the vote goes out, but it doesn't actually happen for three weeks. Additionally, the MKR Oracle price feed is being disabled, which is designed to allow fee-less migration. We want migration to be incentivized to occur without fees, such that the migration contract to be drained, which would otherwise be a burden for the protocol when SCD is shutdown in three weeks. Given that the incentive period starts tomorrow, it is likely that we see an uptick in migration from SCD eating away at the 2.4 million Dai. That in itself would eat up the remaining Debt Ceiling, which would limit fresh Dai generation off of ETH.
  - Vishesh: Given the delay involved, it makes sense for an earlier increase.
  - Cyrus: If we do hit the DC, I think there is a chance that we run into some problems in terms of the peg. This is not the time to put a cap against Dai generation from ETH, especially given the rising market, and people want to mint Dai. I think governance should try to make this happen. That would look like a mid-week executive vote. At this rate, maybe even a mid-weekend poll. It certainly would be helpful to include a small DC increase in the executive. May be too much in terms of Governance.
  - LFW: I think it's ok, we've done similar things before. There is a reason for this. The arguments are heavily weighted to acting sooner. The whole purpose of breaking the process to make changes with a specific goal. It makes sense to do the DC as well.
  - MM: I'd say let us put it up right now. If anyone is opposed, we should hear from them. Otherwise, we are all in agreement.
  - Cyrus: That's exactly what we want to caution against. This call isn't designed for making decisions. This is just a discussion medium. The majority of governance happens in the forums, and we should continue to do so. It may not be possible, but we may try to include this in the executive tomorrow.
  - Rich: I agree, we have a very select group of individuals on this call. North-Americans who have nothing to do at this time of day, and they all speak English. Let's be cautious about using this as a decision-making platform. We also have empowered actors in this system here. The risk team has been empowered by the community to be domain experts. Actually, we haven't talked about this in a long time. SCD still exists, and MCD is still on a long road to get ramped up as part of the MCD proposal. The risk team still is ratified to make decisions regarding the protocol. Particularly, if we have a series of initiatives that are intended to increase liquidity, yet we have a parameter that caps liquidity that we forgot about. That is slightly counterproductive. Let's perhaps try to experiment by giving people an opportunity to say no as opposed to people just trying to say yes.
  - CY: I'll put up a thread after the call.
  - LFW: Maker holders can have a chance to say no by just not voting. They can always just not vote for it.
  - Rich: I think raising ETH DC is less controversial than the changes happening with USDC vaults.
- Rich: We're 30 minutes into Q & A, and we've gone over a lot with tons to wrap up. Ten polls are completed. There is an action that the community wants us to take on Friday. Please go to the forums and bring as much consensus as possible.

#### Relevant Links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

## Common Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`GSM`: Governance Security Module

`MIP`: Maker Improvement Proposal

## Credits

- Tim Black produced this summary.
- Juan Guillen produced this summary.
- Igor Teslya produced this summary.
- David Utrobin produced this summary.
- Everyone who spoke and presented on the call as listed in the headers.
