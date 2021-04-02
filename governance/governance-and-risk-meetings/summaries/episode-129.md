# Episode 129: February 18, 2021

## Agenda

- [00:00](https://youtu.be/zDZ_Xa7ANZA?t=1): Introduction
- [04:35](https://youtu.be/zDZ_Xa7ANZA?t=275): Governance at a Glance
- [08:50](https://youtu.be/zDZ_Xa7ANZA?t=530): Smart Contracts Team Update
- [19:18](https://youtu.be/zDZ_Xa7ANZA?t=1158): Oracles Team Update
- [26:20](https://youtu.be/zDZ_Xa7ANZA): Risk Team Update
- [29:04](https://youtu.be/zDZ_Xa7ANZA?t=1744): Real World Assets Update
- [36:19](https://youtu.be/zDZ_Xa7ANZA?t=2179): EIP 1559
- [38:19](https://youtu.be/zDZ_Xa7ANZA?t=2299): Operational Support Update
- [43:12](https://youtu.be/zDZ_Xa7ANZA?t=2592): MIPs Update
- [47:50](https://youtu.be/zDZ_Xa7ANZA?t=2870): MIPs Portal
- [55:46](https://youtu.be/zDZ_Xa7ANZA?t=3346): Oracle Sensitivity Changes
- [1:02:15](https://youtu.be/zDZ_Xa7ANZA?t=3735): Open Discussion

## Video

<https://youtu.be/zDZ_Xa7ANZA?t=1>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/zDZ_Xa7ANZA?t=1)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk Meeting number #129 taking place on Thursday, February 18th at 17:00 UTC. My name is LongForWisdom. I am the governance facilitator for MakerDAO. As usual, we've got an agenda to get through. We'll have our regular updates by the usual suspects. Feel free to interrupt and ask questions. We'd love to hear from you. If we run short on time, I'll move the meeting along, but please feel free to ask and get involved.
- Let's begin with the weekly governance updates. We saw a couple of executive votes finally pass at the beginning of the week. The week before last week's had passed, thereby onboarding a couple of new collateral types, which the UNI-V2 LP tokens for DAI-USDC and ETH-USDT. Last week, we had a bunch more stuff happening; UNI-V2-LINK-ETH was onboarded. We also had UNI-V2-UNI onboarded and DCIAM's activated for UNI-A, AAVE-A, COMP-A, LINK-A, YFI-A, and WBTC-A.
- We had a collection of stability fee changes, courtesy of the rates group. These changes were mostly upwards but with some exceptions. We approved the interim DAO budget, which has been funding the multisig made up of five mandated actors for 100,000 DAI. I believe 50% of that has been spent. The remaining 50% is held for covering unexpected expenses. That covers the executive changes.
- Polls this week finished over an hour ago. We saw the ETH-A max debt ceiling signal conclude with over 1 billion. This puts us at 2.5 billion, which is the ETH-A max debt ceiling. Therefore, it will be going into the DCIAM parameter. We also saw DCIAM's approved for LRC-A, BAL-A, MANA-A, KNC-A, WBTC-A. We saw the surplus buffer poll pass requesting from 10 million to 30 million DAI. And we saw onboarding polls for UNI-V2-WBTC-DAI and UNI-V2-AAVE-ETH both pass as well.
- Also, we voted to increase the DSR from 0% to 0.01%. All of these things that I just mentioned will be on the executive for Friday. However, I defer to the Smart Contacts team in their update. In terms of the governance domain itself, it's been working on the budget and mandates feedback. We posted the sub proposals for Gov Alpha, which is the core unit to cover governance. I recently submitted the following version of that based on the feedback. Thank you, everyone, for helping to shape those. It's much appreciated. Otherwise, we've just been doing the usual stuff, keeping governance going—all sorts of things.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Peyton Rose

#### Governance at a Glance

[04:35](https://youtu.be/zDZ_Xa7ANZA?t=275)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-feb-12-18-2021/6644)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Three-Point Summary

- The 2B DAI mark sits firmly in the rear-view mirror, with DAI supply at 2.25B.
- With the latest SF increase, the protocol is generating 80M DAI in annualized fees.
- You might have heard this somewhere, but the [VWAP for DAI](http://dai.descipher.io/) this week was $1.001

##### ICYMI Announcements

- Aaron_Bartsch put together a fantastic tutorial for [adjusting DCs with the IAM](https://forum.makerdao.com/t/tutorial-adjusting-a-vaults-debt-ceiling-with-the-iam/6514)
- [MIPs Portal V1 launched](https://forum.makerdao.com/t/mips-portal-a-community-developed-site-to-explore-all-our-mips/6616): A community developed site to explore all our MIPs is live, thanks @smaugho and team!

##### Discussions

- [EuroDAI](https://forum.makerdao.com/t/discussion-eurodai/6521)
    - SebVentures discusses possible paths forward for a long-desired DAI pegged to the Euro.
- [[RWA] Things I don't like about Real-World Assets](https://forum.makerdao.com/t/rwa-things-i-dont-like-about-real-world-assets/6597)
    - e18r inspires a discussion about the push for RWA and the challenges of the asset class.
- [Should we explore launching on Binance Smart Chain? ](https://forum.makerdao.com/t/should-we-explore-launching-on-binance-smart-chain-venus-protocol-endangers-dai/6535)
    - smaugho explores options for cheaper transactions on the Binance Smart Chain.

##### Signal Requests

- [Increase ETH-A DC IAM gap](https://forum.makerdao.com/t/signal-request-increase-eth-a-dc-iam-gap/6603)
    - Aaron_Bartsch and ultraschuppi's powers combine to bring an ETH-A DC-IAM gap signal request. Voting ends tomorrow, Feb. 25th.
- Adjustments to 'beg' and 'chop' parameters for [UNI LP](https://forum.makerdao.com/t/beg-and-chop-adjustments-for-uni-lp-vault-types/6602) and [ETH-B Vaults](https://forum.makerdao.com/t/signal-request-adjust-the-eth-b-auction-parameters-beg-and-chop/6621)
    - primoz and @Jiecut signal adjusting the 'beg' (auction bid increment in %) and 'chop' (penalty fee) for UNI LP Vaults and ETH-B, respectively.
- [Move to Percentage IAM](https://forum.makerdao.com/t/signal-request-move-to-percentage-iam/6607)
    - Planet_X signals community preference on switching the Debt Ceiling Instant Access Module increases over from a flat amount to a percentage.

### Christopher Mooney

#### Smart Contracts Team Update

[08:50](https://youtu.be/zDZ_Xa7ANZA?t=530)

- I'm going to go through a list of the things that we've done and call out anything that's interesting. Thank you, Long, for covering the spell executives.
- We haven't done any work on the collateral onboarding priority sheet this week. That's mainly because a lot of the priorities are complete. For collateral assessments, we got done UNI-V2-AAVE-ETH and UNI-V2-WBTC-DAI. Those two-LP tokens are going in this Friday's executive. We also have a UNI-V2-DAI-USDT collateral assessment complete. Last week, I mentioned that we were thinking about ETH-C and WBTC-B because we never had an original assessment, therefore we can't point at it. However, we decided we're not going to do that. They're already in the system. It's basically the same token.
- Collateral to Kovan; We're still getting MIP21 to Kovan. We're working through the iterative steps. There are more updates to the DssExec library and as well as our tooling. Some of which blew upon us this week. We had to put a lot of work in on that for Liquidations 2.0, which is MIP45. We still have some minor changes to the RFC, although those are happening outside of the RFC that everyone can see. That's for auditors to have a chance to look at the existing RFC. Then we're going to take their feedback and change that. In any case, we're coming close to a deadline on having that in for a finality. We want to lock it in before we make the formal submission. There are several minor enhancements for Liquidations 2.0, which are mostly gas savings. Audit work for Liquidations 2.0 is coming along well. PWC may have an interim report for us on Friday, as well as Gauntlet. However, I don't know about QuantStamp as of yet.
- MIP21, real-world assets; Sam found two critical bugs in the `draw` and `wipe` function. They aren't exploits. I want to highlight this because neither the authors wrote it, some of the original authors of the protocol itself, and every other engineer who works in the protocol had already looked at this. Some of us have been explicitly burned by this in the past, and we all still missed it. Sam found it yesterday. I know these things seem like they take a while, but there's a reason. It's because these little things can pop up. We also have more robust requirements in the liquidator module and several improvements to the test. We're going to get that spell in today or tomorrow.
- Centrifuge, which is MIP22, is on hold until MIP21 is finished, or at least until we get blocked on MIP21. Then for security, there are some updates to the DEFCON spell that Naz worked on. We're going to be shipping those, but they're blocked on stablecoin circuit breakers. We want to turn the circuit breakers off to reduce the governance attack surface on stablecoins. The circuit breakers are still on for the UNI-V2-DAI-USDC and the PSM. Therefore, in this executive, we will have two housekeeping items where we turn off the circuit breakers for both collateral types. That will then allow our DEFCON spells to be improved, and then we won't have to hard code all our stablecoins. We'll deploy those after that change is live.
- Miscellaneous items; We deployed the `flips` and `joins` for UNI-V2-AAVE-ETH, UNI-WBTC-DAI. You'll be able to find updates in the collateral updates channel. We've updated the deploy scripts for some of the old LP tokens. We allowed Kovan to diverge from the mainnet. We're going to try and backfill Kovan with all of the LP tokens, which is not an easy job. We're not in control of those markets, or there may already be markets there; therefore, the pricing won't be accurate. However, there was a bug in the Oasis UI for DAI-USDC. Some people may have noticed that the UNI-LP token wasn't filling up. This probably would have been caught if we were able to stage it in Kovan and check it out. Nonetheless, the UI is just running on the mainnet right now. We're hoping to see if we can come up with a solution that will catch that. If anyone's planning on testing there, those tokens aren't going to be very useful due to inaccurate prices and whatnot. Also, the ordering of the tokens may flip. There are lots of problems trying to deploy those on there. There's a PR in review that Sam had made for dealing with fee-charging tokens such as PAX-G and USDT. We'll get around to reviewing that. If anyone else on the Smart Contracts team has something they wanted to say, please speak up.

##### Questions

- Brian McMichael: A question came up regarding our staffing. There's been a lot of ideas in the community for things that we can do. However, there's not enough bandwidth to do them all safely. With the Foundation's transition and what comes next, there's been some hesitation on behalf of the Foundation to hire more staff for our team. We are interviewing now. These people will have to understand that there will be this transition, and nobody knows what comes next. We're working on that. Even if we hire up, it takes six months to get an engineer up to speed in a traditional engineering job. The Maker system is dense and intractable. We need to allocate more time before we expect any new devs will be running at full capacity. I don't know what the timeline is. However, the sooner that happens, the sooner we'll be in a good place and be able to hire and retain new engineers.
    - Frank Cruz: Brian, Schuppi mentioned that he spoke to a couple of his buddies who were devs. That wouldn't help, right? He tried to get talented people off the street to start working on something the community wants to push forward?
    - Brian McMichael: We can use help with the collateral onboarding. We've got this idea to run devs through a pipeline where we can have them on collateral onboarding and weekly spells where they're manipulating parameters. This will get them under our wing. Chris will then turn them into complete crypto punks in an iterative process from there.
    - Frank: I got it. This is the reason why a lot of devs don't want to leave. Once you master solidity, you don't want to work at Solana with rust docs or that sort of stuff.
    - Brian McMichael: Solidity is the easy part. It's the mentality that this is actually like hardware; This is space code. It's fun to add things to this, but it's also very dangerous to do it right the first time. We're all brainwashed to think that the MCD system is the best. But it is very fragile. We need to keep that in mind when we're building on it.

### Nik Kunkel

#### Oracle Team Update

[19:18](https://youtu.be/zDZ_Xa7ANZA?t=1158)

- Later today, we're going to be deploying the AAVE-ETH and WBTC-DAI LP Oracles for the collateral onboarding. We have fingers crossed that gas prices are low because each oracle deployment costs 500 dollars during the past few weeks. Also, Starkware oracles are going live tomorrow. It's the first time our oracles will be used on L2, which is a big step for us. This has been in the pipeline for a while.  I am very proud to partner with DYDX on that one.
- Teams come up with much more advanced testing and staging environment. That's going to allow us to start testing releases more thoroughly. More importantly, it allows us to begin testing many releases in parallel, which used to be an issue. If we do this collateral onboarding cycle every week, our staging environment is monopolized by collateral onboarding. We have all these other things that we want to test. However, we don't feel they can be tested in that one-week type of cycle. It's been difficult trying to squeeze in between the gaps. This is going to let us test unlimited things in parallel and releasing things more rapidly. Right now, we have four different builds in staging.
- One of the things that are in testing right now is called a patched Scuttlebutt client. What does that mean? Well, back during Thanksgiving, we had an oracle outage for a few hours. What happened there was that the Scuttlebutt protocol, which is a peer-to-peer protocol that is used to buy the oracle feeds to send price messages around, has a hard-coded limit on the state size. Think of it as if Ethereum had a max state size limit, and all of a sudden, if you hit that limit, it just falls over and dies. We had investigated the code, and it was a hard-coded line somewhere that states it can't get bigger than 4.6 gigabytes. Based on our investigations, there's no reason why that limit was there. We've changed that value to a higher number, and then we spammed that staging network with a bunch of messages to see if we can get it over the previous limit. We checked if any of the behavior got wonky—the initial tests for that look really promising. We've easily broken over the previous limit. However, a lot of further testing is still done to ensure that it's actually stable. That's going to be really important. Right now, at the clip with which we are adding new collateral, the Scuttlebutt state size fills up about every six to eight weeks. That means that we have to wipe the state and go to a new Scuttlebutt network. We have to do a new migration every six to eight weeks, which is just annoying and a waste of everyone's time. Hopefully, we can migrate to this patched version for the subsequent migration, and then we won't have to do one of these migrations for at least a year. We could set the value even higher. We wouldn't have to do it for about five years. I think it's better to be safe before you overflow some random variable and a dependency somewhere. You don't want to go out that far.
- On the new oracle's front, we are looking at doing LP oracles for Curve and Balancer. We have a general idea of how to build those from a design point of view. It's definitely early in the R&D stage. We haven't really coded them up as of yet, but they look promising. We're also looking at Uniswap V3. Unfortunately, I can't give many details about that. I've also been working on Oracle's core unit proposal. I wouldn't say it's coming out soon, but definitely over the next couple of months. Lastly, we're investigating how to reduce the oracle gas expenditures, which I'll talk more about later.

### Primoz Kordez

#### Risk Team Update

[26:20](https://youtu.be/zDZ_Xa7ANZA)

- There aren't many updates from our side this week. We're dealing with developing a methodology of defining parameters for liquidations 2.0, which requires us to stress some historical price crashes for various combinations of auction price curves and other parameters in liquidations 2.0. There can be nine auction parameters supplied to each vault type. You can imagine how many combinations are possible. We're initially focusing on ETH-A. We'll propose a few price curves and combinations of other parameters and explain the pros and cons.
- There's also regular onboarding work on UNI LP collateral evaluations. Monet-supply is doing a great job publishing them each week. This week he's working on whether we should publish DAI-USDT-UNI-LP. next week, we'll potentially cover LRC-ETH-UNI-LP and YFI-ETH-UNI-LP.
- Marco is spending some time on renBTC liquidity and particularly potential risks to better understand renBTC liquidity in times of distress. This will be important if we increase the DC or onboard renBTC-B with a lower liquidation ratio. After that, we'll add parameters for the ETH-C vault high liquidation ratio vault. In the upcoming days, I'll make a post on the proposed parameters for ETH-C. There will likely be a poll.
- Finally, we made one poll this week on potentially increasing *back* parameters for UNI LP, minimum bid increment, and penalty fee. We aren't seeing enough keeper participation there, so please look at this signal and vote if you haven't already.

### Real World Finance

#### Sébastien Derivaux

[29:04](https://youtu.be/zDZ_Xa7ANZA?t=1744)

- We have produced some documentation that I hope is a bit clear because it's a complex subject. There is documentation that explains all the new terminologies that we are using. There is no longer a minimum underlying quality ratio.
- We have produced a dashboard, a fake one, to understand how we are tracking the SPVS and performance of the assets after we have made an investment. I want to thank the future legal team for helping us. Marin from the Kleros Fellowship helps us better understand some of the contracts' critical components. I also want to thank the business development team for all the work they have done because we have many new people who are coming to us thanks to them. We have a lot of work and many partners to onboard for the future.
- I want to highlight that we are still delaying the process. Some of our partners have difficulties keeping track of everything because we are dealing RWAs with real people. When we commit to them, they are trying to start to do things for this deadline. Sometimes it's a bit difficult to have a good understanding. It's mainly NewSilver or ConsolFreight because they are doing business and turn some people down when we cannot deliver. That's a bit sad. It's something we need to keep in mind for the future.
- Lastly, we made a risk assessment review that we will present shortly.
- Will Remor: In a nutshell, we had a little hole that we put in about a month ago, which was midway through some of our onboarding assessments. We wanted to get feedback from the community on the sessions' different sections. These assessments are a little lengthier than other assessments because we're analyzing the deals' structures and the different types of risks. But we're taking into account industry and things like that. We went out to the community and asked them for feedback on whether parts of the assessment would see more effort, greater focus, or greater conciseness. And we inquired about letting us know so that we could provide value for the people. But at the end of the day, they are voting on them. It's part of our interactive process with the community. We've got a few responses on it, which was globally positive. We've identified ourselves in the team and see a few points where we can make some improvements. One of the biggest takeaways is that the community wants a more focus on some levels of summary of what we provide for it. This includes an executive summary where they pointed out concerning the apparent risks of each individual deal that we get through the door? How can we provide just a TLDR version and include the core points into it? I think we are going to make a significant effort on that. Then we'll test the ground with the community. We'll be publishing that executive summary with a link to a more detailed version of the assessment so that people can know enough to make their decisions. However, if they want to drill down into the assessments' details, they can do that. This is probably the next point following on from here. Feel free to make any further comments in the chat, and we'll take that into account. Thank you, everyone. We're conscious that it's not always easy for the community, given that sometimes there are sensitive aspects, contracts, and things like these behind those deals. We have to go back to the asset originators and the people we work with to ask for consent on what we can publish and not publish.

### Trent Van Epps

#### EIP 1559

[36:19](https://youtu.be/zDZ_Xa7ANZA?t=2179)

- LongForWisdom: All right, I think we're going to take a short detour from the agenda to briefly go to a guest that we have. Some of you may have noticed that we have seen [a request on the forum regarding whether MakerDAO supports the EIP 1559.](https://forum.makerdao.com/t/signal-request-does-makerdao-support-eip-1559/6646) This went up just before the call, and we have Trent here from Ethereum. Trent is going to tell us a little bit about that signal.
- Trent: Most of you recognize me from ETH global if you do at all. I'm currently working on a small project with the core devs and Tim Baiko concerning the incoming lead on hardfork coordination and client implementations. I'm working with him to get feedback from various Ethereum applications, including you wonderful people as the MakerDAO community. Just before this call started, I published the request for a signal. There's already been good discussion and feedback. I want to voice it on the call that you can find us anywhere on Twitter or Discord. I'll try to hang out in the Rocketchat a bit, but we can be reached if you have any questions or concerns. And, obviously, we'll be watching that thread. I think that's all I have. We're very interested in what the MakerDAO community has to say. We'll be collecting feedback and thoughts from the resulting discussion. There's a more extensive panel discussion on the 26th that we'll be presenting the results at. Thanks for the time.

### Juan

#### Operational Support Update

[38:19](https://youtu.be/zDZ_Xa7ANZA?t=2299)

- We have had quite a week. For Know Your MIP, last week, we performed term lending module MIP43 with Alan and Lev. The video is already on Youtube if you want to check it out. This Friday, Prose will be holding the DssGov's incentives. Join us this Friday. It's going to be interesting.
- Regarding collateral onboarding, we had had Fortunafi yesterday for RWAs with the team from Centrifuge. The recording is on Youtube. Next week we're going to have a call with Synthetix somewhat later than the usual time. Instead of having it at 18:00 UTC, we'll have it at 21:00 UTC. That's because Kain from Synthetix is in Sydney.
- Next is core unit updates. If you go to core units.maker.network, we have created a core unit corner. We can see all the sub-proposals drafted with links and clarifications from the various community members. We put in there anything related: any videos, links, small FAQ, and other resources. If you guys want to check anything or have any questions, that's an excellent place to start and keep things organized.
    - David Utrobin: I had a quick question. Were there any changes made during this RFC period to any of the core unit MIPs? I'm curious if there's a summary anywhere for those changes.
    - Juan: There is no summary. If you think that's useful, we could pull it, but that's probably already in GitHub now.
    - David Utrobin: Even just a heuristic coverage of what was changed. Your experience during this RFC period would be interesting to me.
    - Juan: Sure, I think the heuristic is longer to compile and analyze than what you make it sound, but we can try working something out if you think that's useful.
    - David Utrobin: No worries. I was just looking for a quick and brief update. Don't go through more trouble than it's worth.

### David Utrobin

#### MIPs Update

[43:12](https://youtu.be/zDZ_Xa7ANZA?t=2592)

![](https://i.imgur.com/Gxsuu2W.png)

![](https://i.imgur.com/ISd65GC.png)

- We are currently in week three of the February governance cycle. As many of you know, there were no formal submissions this month. There were no MIP votes this month besides the greenlight polls that began on Monday.
- Feel free to check out [Charles's MIPs update](https://forum.makerdao.com/t/weekly-mips-update-27/6649). It lists and links all of these MIPs.

![](https://i.imgur.com/tzKVhhz.png)

![](https://i.imgur.com/ydfgMgp.png)

![](https://i.imgur.com/Yf2B56L.png)

![](https://i.imgur.com/HcPvMEz.png)

![](https://i.imgur.com/YB3d4u9.png)

![](https://i.imgur.com/f2T8CrW.png)

![](https://i.imgur.com/lgnIjKa.png)

![](https://i.imgur.com/sCddkOJ.png)

![](https://i.imgur.com/jByv02W.png)

## Other Presentations and Updates

### Adrián Rivero(@smaugho)

#### MIPs Portal

[47:50](https://youtu.be/zDZ_Xa7ANZA?t=2870)

- Hello everybody, my company works in the creation of the MIPs portal. It's challenging to find things on GitHub. We're consulted for building this portal to show all the MIPs. I presented it on the forum, and here it is. This is a work in progress. It is the first iteration, and it's completely functional. We are listing all the main MIPs with their status and relevant links to the MIP on GitHub. So far, they can be filtered by. There is an available search that would permit you to search for any MIP you want to find. The search is quite general, but we are defining some elements at the moment. It could change the behavior in the future. The portal also has filtering, so you can filter by status. If somebody is looking for a specific status, it can filter for more than one. You can then navigate to the details of a given MIP, where we have a general index for navigation. We have the information pulled directly from GitHub, so of course, this is similar to what we'll see on GitHub. The data is also analyzed. You see here on the right that we are extracting information directly from the MIP. There is more work being done here. We expect to extract much more information shortly. With this portal, it'll be possible to add much more information. The software will detect this information and will make it accessible from here. There will be links to the MIPs on the forum where discussions are being held. All the poll requests are being shown here for expectations. There is work being done to link the request specifically to this MIP. There is also work being done right now regarding the soup proposals. As you can see, we are listing only the proposals. We are trying our best to follow all the guidelines within the design and creation of components. We are working on proposals for displaying the soup proposals, which are coming soon. However, they are not available right now. Also, each MIP has a sentence, including a paragraph summary. I added the repository. If anyone wants to contribute to the development, that would be great. In the repository, we detailed the general architecture of the system. At the moment, we are indexing all this information on the backend. We have a webhook so that whenever any change happens on this repository, it will call the backend, updating the index. That will reflect directly here.
    - Juan: Can we see the feedback button? It should be on the bottom right of the website. It appears to be hidden currently.
    - Adrián Rivero: Please feel free to make recommendation requests. We are happy to hear from the community to help improve the portal.
    - LongForWisdom: Great, Thank you Adrián, we're looking forward to having further development on that in the coming months.

### Nik Kunkel

#### Oracle Sensitivity Changes

[55:46](https://youtu.be/zDZ_Xa7ANZA?t=3346)

- It's no surprise that gas prices have been really high. You've seen people complaining that the gas prices are high, but it doesn't just affect users. It affects us as a protocol as well. One key example is oracles. To update an oracle, we are spending an obscene amount of money on gas. It's within the $20,000 per day range. I'll let you do your own mental math about what this comes out to in a year; It's a lot. And this is after we've done our tech optimizations to cut down gas usage relative to the previous version of oracles. Something has got to give here. We've looked at a variety of things, such as zero-knowledge proofs. We've looked across the board, but the fact of the matter is that there is no good solution. There are only solutions that come with trade-offs. One of those trade-offs is that you update the oracle less frequently. I've been talking with Primoz about this concerning the risk perspective because there is more collateral risk from a reviewer's liquidation point if you update less often. Collateral may not get liquidated as quickly, and that's more risk for the protocol.
- Juan has done a fantastic job. He compiled data showing the frequency of oracle updates at various oracle sensitivities. What is sensitivity? Right now, for significant assets like ETH and wBTC, we update them on a half of a percent type of sensitivity. That means that every time the price you see in the market differs from the price that the oracle is reporting by half a percent, the oracle is updated. For non-major assets, we update about every one percent.
- What Juan has done here map out if we were to select a different sensitivity regarding oracle updates' frequency. It's mapped out by asset. The important thing here is that you don't compare the various assets because these collateral types were onboarded at different times. There may be a discrepancy between them. Therefore, you can't really do relevancy between Comp token or YFI token. But what you can do for each asset is identify how the number of updates you need to make changes depending on how much you manipulate the sensitivity. ETH, for example, did about 2700 updates. If we were to raise that to about three percent sensitivity, we would get that down to 608 updates. That will be the order of magnitude change we could expect in terms of the number of transactions we'd have to do. This is directly proportional to the decrease in cost that we'd have. Right now, we're spending about $20,000 a day. If we did something like this, we could get this cost down to $5,000 a day, which would be a huge improvement.

#### Open Discussion

[1:02:15](https://youtu.be/zDZ_Xa7ANZA?t=3735)

- Matthew Rabinowitz: Are you doing updates based on percentage change or with frequency?
    - Nik: We do both. The trigger for the medianizer is either a time-based update or a sensitivity update. I believe the time is a little over four hours, but we rarely hit that. It's almost always the sensitivity that gets hit. First, that's on the medianizer front for the oracle security module that gets updated at the top of every hour. That is a fixed variable. No matter what, you're doing 24 transactions a day on the oracle security module. Then you have to add the number of transactions that you're doing on the medianizer, and that's for each asset.
    - Matthew Rabinowitz: The reason I ask is that it falls into the trend we spoke about last week concerning risk. If the price is going up, it's not a risk question. It's only a risk when pricing is going down.
    - Nik: Yes, that's a very astute observation. I've discussed with the main digit actors as well as Primoz. Essentially, it's for assets that have larger liquidation ratios above 150%. We would feel comfortable raising the sensitivity of those by either 3% or 4%. Looking at the ones we have here, that would be KNC, ZRX, MANA, LRC, BAL, BAT, and AAVE. Then the ones that are starred, which are YFI, UNI, and LINK, should be on here. We are still unsure about these. we have more DAI minted against the assets. Hence, the system has more exposure to them. There is essentially more risk, but I still think the cost savings are likely worth it. I'll leave the decision on those three up to Primoz and the rest of the risk team.

![](https://i.imgur.com/yfHdgle.png)

- Primoz: The way this would affect vaults is that they would potentially be liquidated a bit later. As Nik said, we're talking about a small percentage figure compared to the liquidation ratio that we're using for these vaults. I don't see a huge difference in changing risk profile by implementing this from a market perspective. Some could even argue that this could be positive for vault users that want to unwind. They would actually have more time to unwind. There may be some other implications such as integration risks and so on. Still, I'll let others working on integrations explain any downsides. In regards to market risk, it's not a huge problem, in my opinion.
    - Will?: Nik and Primoz, can I make a suggestion on this one? Don't base it only on the liquidation ratio perspective. Some of those assets also have liquidation ratios due to their volatility. Wait to increase the sensitivity with some volatility denominator standard deviation or whatever just to make sure that you're still appropriately weighing the level of downside risk appropriately.
    - Primoz: That's a good point. I think the percentages that we're talking about are a bit small. It's not a massive change in market risk profile. Then you have the auction, which is something random on its own. I personally don't see a huge problem.
    - Christopher Mooney: The point I wanted to make is that a lot of the focus has been on the cost and additional risk that it makes for Maker. However, this was brought up and is being suggested in the mandated actor's group. We have customers of our oracles, and this affects them. Nik, were you planning on doing this across the board for everything or limiting this to price feeds where we're the sole consumer?
- Nik: Yes, right now, it's going to be limited to ones where we're the sole consumer. Fortunately, that's the majority of them. The way that the distribution of our oracle demand is spread out is between ETH and wBTC. Those are the ones that we're not changing. They're on a higher sensitivity of a half percent. Those are the most expensive ones to run. I think it's totally worth it, especially since the Maker protocol's amount in exposure to those is huge. You definitely want to make sure your oracle for those is as accurate as possible. We also see people frequently request the oracle security module. They're not using it because it's a gauge of a fair market price. Instead, they're using it because they want to perform vault management. The only thing they care about is that Maker will liquidate on the following price update in an hour or not. It doesn't really matter if we change the sensitivity of the medianizer from an OSM point of view. The customer just cares about liquidation coming, yes or no, in the future. That is something that we're going to have to look at. We could say that if you want to use an oracle, our default is 3-4% sensitivity. If you want a more sensitive one, then you can pay for the gas. I just want to bring up that this problem is not only exclusive to us. Chainlink has the same problem but much, much worse. This is an ecosystem-wide problem. The long and short result is that DeFi needs oracles, and DeFi cannot be run without oracles. There are two paths from here. Either people pay up because they realize running these oracles is too expensive. It's a service that they need to invest a significant amount of money into. The other way is that people stop caring about the decentralization of oracles. If a decentralized oracle costs $100,000 a year, why would I pay that when I can run my own little bot sending a price update. This would be cheaper in gas, but it's not decentralized. Our industry is full of people who are very ideologically driven and believe in decentralized finance because of the decentralized aspect. When we get an influx of new users, will those values be passed down to these new users? Is DeFi simply the latest casino? The idea of valuing decentralization is really lost where decentralization is a meme or a word without any real meaning rather than a principle by which to design and use systems. That sounds a bit somber, but that's kind-of where we're at. If you look at Binance smart chain, it's an EVM in which many validators are all run by Binance. It's not decentralized at all, but the growth has been insane. What do you make of that? On the one hand, you can say that Binance is a massive exchange with many users. It's effortless for them to funnel their users onto the Binance smart chain. You could also say that there's a lot of people who use the Binance smart chain who don't care about decentralization. Thus, to each their own. From a business point of view, that's something we need to take a look at. Are our oracles simply a necessary expense right now for the Maker protocol, or is this a business we want to get into? We know there is a need in the industry. Can we serve that need?
- Somebody: Does ETH 2.0 change anything at all?
    - Nik: Yes and no. ETH 2.0 will bring a proof of stake where you get a 3x improvement in scale and sharding. Presumably, people would be running on various shards. That being said, it's not this pretty picture that everyone makes it out to be because you need to be on the same shard if you want to have composability. That means that if Maker is on a shard, where does everyone else want to be? Does Uniswap want to be on the same shard as Maker? Probably, or maybe it's the other way around. So you have this effect where everyone wants to live in Manhattan, but the cost to do a transaction on the DeFi shard will still be expensive. It'll be like prime real estate. That being said, other things that generate a lot of activity right now don't have to be on that shard. We will see some reduction, but it is unclear what degree and what the costs will look like. Nonetheless, I am sure that the prominent DeFi protocols in a world where ETH 2.0 is launched are that they will just be printing money. Even if the oracles are expensive, they can afford it. This I am 100% sure of.
- LongForWisdom: There were other questions in the sidebar that we could get to. Who wants to go?
    - Nik: Someone asked about the UNI LP oracle audit. It's currently underway. We have the initial feedback, but it's still ongoing. The way this usually works is they give you an initial report. Then, we review the report, fix any issues, or argue that something they cited isn't really an issue. After that, they go back and make a final report, which is what's published. We're still a good week out from getting the initial report.
    - Nik: Tim also asks if we have any idea how much our customers are willing to pay for the oracles? Right now, it's all free. To be honest, I think we have to keep it free. It's the only way to gain market share. It doesn't cost us that much more. We have to make these oracles either way for the Maker protocol. Expanding the usage to customers doesn't cost us anything more. To give them a price wouldn't make sense. You can look at the big picture of how critical oracles will be in the future. Chainlink market cap is a ridiculous number. For their business's size at the moment and its profitability, yes, that's a ridiculous number. Still, if DeFi scales the way I believe it will, then oracles will be a huge business. We want a piece of that pie. This is not the time to be cost neutral on oracles. We're fortunate to be in the position where Maker protocol is making a ton of money. We should be investing that money. I think this is an excellent bet.
    - Frank Cruz: With regards to flash loans. If you lower it to 3% or 4%, let's say on AAVE, would that entice people even if they realize the sensitivity is down?
    - Nik: Not quite sure what you mean. The collateralization ratio is significantly higher than this 3 or 4% sensitivity change. In the worst case, if the oracle is off by 4%. The collateralization ratio is 175. There's no way to do a flash loan and run away with money because you still have to be significantly over collateralized.
- LongForWisdom: We're approaching the end of the meeting. Any last questions or comments before we wrap up?
    - Nik: I see Aaron had another question concerning our oracle customers' payment structure and how it is going to look like? That's up for debate. My personal opinion is that now is not the time to worry about charging people. Instead, we should focus on getting as much market share as possible. This pie is going to keep growing, and you want to secure your position in the pie.
    - Tim: Yes, but then we shouldn't worry too much about the money we have to spend on the oracle, right?
    - Nik: Yes. Now, if there are no customers that are using it, then let's cut costs. Let's say that a customer wants a sensitive UNI oracle. We can take a look at whether we want to take a loss on that one or make a deal that subsidizes the actual cost. Those kinds of things are still up for debate. If anyone in the community feels strongly about that, I will work on a proposal with them.
    - Juan: Going to the other side of the spectrum, you could have the oracle update every 0.1% move, and you will have a transaction on every block, which will be very expensive. However, that's not a reason to not do it. It'll make things more optimal.
    - David Utrobin: Is it true that if there are enough customers for a given oracle, everybody's overall cost goes down, and we could charge less for oracles?
    - Nik: Yes, that's true. To do that, we need market share. We need a critical mass of users, which we do not yet have. This is my goal. I want my core unit to take the business component of oracles much more seriously. We need to scale this up. We have a real opportunity here. Our oracles are just as good as Chainlinks', and from a gas point of view, they're ten times better. We need to leverage that and market it.
    - Matthew Rabinowitz: Are you talking about expanding the scopes of MakerDAO to include pricing crypto assets as well as others using those oracles?
    - Nik: Yes, and I think that we are uniquely positioned. I believe in a future where many RWAs want to use Maker as a credit facility. If you're going to be onboarded to Maker, you'll need Maker oracles to price your stuff. It's essentially a moat business. Suppose the protocol says we don't take Chainlink oracles because we only accept Maker oracles. In that case, this will drive business to us. People want to use us as a credit mechanism. There's a lot of ways where we can get customers which Chainlink can't poach from us. It's intrinsic to using Maker in the first place. There are many ways to carve out a significant chunk of the market, which gives us a massive advantage to our oracle business. I'll have my core unit proposal out in the next few months, and it'll be extensive.
- LongForWisdom: Thank you, Nik. That was a very valuable discussion on the value that oracles could bring. We'll wrap up here. Thank you, everyone, for coming.

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

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
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
