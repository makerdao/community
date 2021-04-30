# Episode 130: February 25, 2021

## Agenda

- [00:00](https://youtu.be/O0mCnMk4aNM): Introduction
- [00:58](https://youtu.be/O0mCnMk4aNM?t=58): Oracles Team Update
- [02:25](https://youtu.be/O0mCnMk4aNM?t=145): Introduction (Part II)
- [05:52](https://youtu.be/O0mCnMk4aNM?t=352): Governance at a Glance
- [08:21](https://youtu.be/O0mCnMk4aNM?t=501): Smart Contracts Team Update
- [11:05](https://youtu.be/O0mCnMk4aNM?t=665): Risk Team Update
- [16:08](https://youtu.be/O0mCnMk4aNM?t=968): Real World Finance Update
- [18:20](https://youtu.be/O0mCnMk4aNM?t=1100): Operational Support Update
- [27:10](https://youtu.be/O0mCnMk4aNM?t=1630): Community Development Update
- [41:36](https://youtu.be/O0mCnMk4aNM?t=2496): MIPs Update
- [47:20](https://youtu.be/O0mCnMk4aNM?t=2836): Auctions Performance Presentation
- [57:20](https://youtu.be/O0mCnMk4aNM?t=3440) Discussion
- [01:08:45](https://youtu.be/O0mCnMk4aNM?t=4125): Open Discussion

## Video

<https://youtu.be/O0mCnMk4aNM>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/O0mCnMk4aNM)

- Hello everyone, and welcome to the MakerDAO Scientific Governance and Risk meeting number 130 taking place on Thursday, February 25th at 17:00 UTC. My name is LongForWisdom. I'm the governance facilitator at MakerDAO. I'm joined by a host of Maker people. As usual, we've got an agenda to get through. Some updates involve the regular folks. I'll briefly review the preamble. Feel free to interrupt at any point. We like to hear from all of you. Please don't be shy.
- Usually, we'd have governance first. However, Nick is going to be tied up, so we're going, beginning with Oracles.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Update

### Oracle Team Update

#### Nik Kunkel

[00:58](https://youtu.be/O0mCnMk4aNM?t=58)

- I apologize for the ad hoc nature of the call. I'm going through the airport right now. Nonetheless, we launched the Starkware update to the oracles. This is officially MakerDAO's first success in L2 oracles. It's a big deal, and I'm thrilled that we get to partner with dYdX to do this. dYdX released their alpha mainnet release. In about a week or two, give or take, the public mainnet release will be out, which will be using Maker oracles. That's really cool. Brian and Chris will speak about this in a bit.

## Introduction (continued)

### Agenda and Preamble (continued)

#### LongForWisdom

[02:25](https://youtu.be/O0mCnMk4aNM?t=145)

- We've seen the weekly executive and polls, which had passed. The previous week's executive had onboarded UNI-V2-WBTC-DAI and UNI-V2-AAVE-ETH LP tokens for those pairs. We increased the DSR to 0.01%. We increased the ETH-A maximum DC from 1.5 billion to 2.5 billion. We increased the system surplus buffer to 30 million.
- In terms of polls this week:
    - We had a rates proposal to increase the ETH-A and ETH-B stability fees, which passed.
    - We had onboarded the UNI-V2-DAI-USDT LP pair, which had also passed.
    - We had a poll to lower the PSM-USDC-A toll out(`tout`) parameter, which is the amount you pay when you are taking USDC out of the PSM in exchange for DAI.
    - We also voted to set an initial flash mint module fee. We still don't know precisely when the flash mint module will be implemented, but we do have a starting value for the fee.
    - Finally, we had a poll for decreasing the stablecoin vault DC, which was the only poll that did not pass. This Friday's executive should include the rates proposal and onboard UNI-V2-DAI-USDT and lower the PSM-USDC-A toll. That covers the polls and executives this week.
- In terms of governance domain work, we continue to various onboard contributors such as Prose, Eli, and Pablo. The MIPs portal we showed off last week is still in progress. We have been working on feedback points, proposals and cleaning up existing MIPs to make them more standardized. We've also done work on MIP amendments to make the amendment side of MIPs a little bit easier, thanks to David. We have also worked on the usual MIPs, governance, and related stuff. There's a lot of MIPs that have been submitted for the next cycle. March is going to be busy for MIPs.

## Weekly Updates

### Governance at a Glance

#### Elihu

[05:52](https://youtu.be/O0mCnMk4aNM?t=352)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-feb-19-25-2021/6735)

- Hello everyone, my name is Eli. I'll be going through Governance at a Glance this week.
- First up, as the price for ETH has dropped, about 10 million dollars were liquidated in Maker this Tuesday. In a turbulent market such as this, the DAI supply didn't move much. It's now sitting at 2.3 billion. DAI volume-weighted average price has been constant at 1.001.
- As far as announcements go, Juan is starting a core unit launch podcast series to inform Maker users on specific core unit's proposals, budgets, and executions. You can listen to it during this Wednesday's growth core unit launch pod session.

##### Discussions

- [Core Units I wish existed](https://forum.makerdao.com/t/core-units-i-wish-existed/6248)
    - Iammeeoh introduces the idea of a Hiring and Careers Core Unit, and Juan highlights a potential Legal Core Unit's tasks.
- [Why deploy on xdai?](https://forum.makerdao.com/t/informal-poll-why-deploy-on-xdai/6582)
    - The discussion is going strong, with several contributors analyzing the pros and cons of a xDAI-based solution.
- [EuroDAI](https://forum.makerdao.com/t/discussion-eurodai/6521)
    - Creating a version of DAI pegged to the European Union’s currency? Head here to discuss.

##### Signal Requests

- [Increase PSM-DC and set Debt Ceiling for USDC-A/B to 0 ](https://forum.makerdao.com/t/signal-request-increase-psm-dc-and-set-debt-ceiling-for-usdc-a-b-to-0/6692/5)
    - New ultraschuppi advocates to:
        - set the DC for USDC-A and USDC-B to 0
        - stop the `lerp` to 500M and instead
        - set a new debt ceiling for PSM-USDC
- [Adjusting Dust Parameter](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-2/6704)
    - New Given the consequences of high gas prices in a declining market, monet-supply proposes raising the dust parameter.
- [Adjust ETH-A DC-IAM-line](https://forum.makerdao.com/t/signal-request-adjust-eth-a-dc-iam-line-2021-05/6688)
    - New ultraschuppi proposes raising the line for ETH-A from the current 2.5B with voting options up to 15B.
- LongForWisdom: Thank you, Eli. There are a few other signal requests that are ongoing from the previous week as well. I'm going to leave those open for this meeting, and I'll close them towards the end of the meeting. If you haven't voted, please have a look.

### Smart Contracts Team

#### Brian McMichael

[08:21](https://youtu.be/O0mCnMk4aNM?t=501)

- Chris realized 15 minutes ago that we had a kickoff call with trailofbits overlapping this meeting. We just got off a call where we deployed MIP21 to Kovan. Therefore, I'm not entirely prepared right now, but I'll go through it live.
- The interim reports for Liquidations 2.0 have been received from PWC and Quantstamp. We are working on responses. As you have noticed, we've just begun the interaction with trailofbits as well.
- This week, we're planning on adding DAI-USDT LP tokens to the mainnet. Those contracts for the `flips` and `joins` were deployed this morning.
- Sam is working on the spell this week.
- We've agreed with Centrifuge to begin slotting a couple of hours a week working on MIP22 considerations, which should initiate after we get MIP21 to mainnet.
- Also, MIP45 has been updated and formally submitted this week. We've also heavily worked on MIP21, and as I mentioned, we just got it deployed this morning. That's a significant milestone for us.
- On the people front, we are in the process of interviewing candidates. It's a touchy subject because of the transition. In regards to that, I would like to announce that Kurt has rejoined the Foundation team. We are very excited to have him back. This should help our bandwidth quite a bit.
- Kurt: Yeah, thanks. I told Long that I prepared a speech; it's short. Nonetheless, hello, I'm back. It's good to be back. I'm looking forward to Daoing it up in here. That's it. That's the speech. Thank you all very much.

### Risk Team

#### Primoz Kordez

[11:05](https://youtu.be/O0mCnMk4aNM?t=665)

- In terms of collateral evaluations, last week, we posted the previous UNI LP evaluation, the DAI USDT UNI LP.
- We also proposed parameters for ETH-C vault type. It should go into an on-chain poll next week. The proposed parameters for ETH-C are a 3.5% stability fee, 175% liquidation ratio, and 1 billion DC with a gap parameter of 100 million. This vault, if the executive vote passes, should be available in approximately ten days. We can expect some refinancing from ETH-A to ETH-C. Hopefully, we can lower risk exposure to ETH by increasing the overall ETH collateralization ratio, one of the main goals.
- Mark has been finishing research on renBTC, which should be posted soon. Based on findings, we believe we should postpone onboarding of a lower liquidation ratio renBTC-B vault. The liquidity metrics and redemption risks are not very promising. We already see that auctions with lower liquidation ratio vaults such as ETH-B are not encouraging. We should postpone onboarding lower liquidation ratio renBTC until liquidations 2.0 is implemented.
- Monet-supply made a [signal yesterday](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-2/6704) inquiring about a higher `dust` limit. Everyone is aware of the recent gas prices and what this means for Maker retail users, and how it negatively affects liquidations. We could make certain variations of `dust` limits based on the vault's liquidation ratio. Monet-supply proposed that we could afford slightly lower `dust` on ETH-C than ETH because auction efficiency is usually higher with higher collateralized vaults. Please take a look at this signal and vote for the current `dust` limit.
- I also want to urge people to reconsider voting on PSM USDC. This DC should be higher than 500 million. A one billion debt ceiling would be better, especially if we're going to set stablecoin vault DCs to zero. Let's suppose we migrate USDC stablecoin vaults to PSM. In that case, we would be at over 500 debt utilization. We want to have at least twenty percent of DAI supply available in PSM to have quick mint availability in times of a DAI liquidity squeeze. In terms of risks, the 500 DC is way over the limits if anything goes wrong with USDC.
- Finally, I made [another post today](https://forum.makerdao.com/t/flip-auctions-parameter-adjustment-proposal/6732) regarding changes in some `flip` auctions parameters, particularly the collateral auctions. These changes are based on findings of keepers capital from Tuesday's auctions. To sum it up, we proposed a lower auction and bid duration from 6 hours to 4 hours—a slightly higher box from 15 million to 20 million. We also proposed a higher back value for UNI LPs and ETH-B vaults because auctions didn't clear up successfully. That keeper participation is a bit lower.

### Real World Finance

#### Sébastien Derivaux

[16:08](https://youtu.be/O0mCnMk4aNM?t=968)

- There has been progress within the accounting part of real-world finance. I have updated the P&L of MakerDAO. It is now a complete financial statement, including assets and liabilities. This will be useful when I reiterate the balance sheet management, which is the extension of the strategic reserves. More on this will be coming soon.
- I'm working to move from Gene Analytics to another third party because the spreadsheet's SQL query is becoming very large. It's about five hundred lines of code, and it's not one hundred percent correct. There is still some work to be done. We had good progress on many collaterals. Things are moving well, especially on SolarX. There is a MIP6 in the forum, which is interesting for two reasons:
	- It's a big-sized asset. They are looking for 100 million dollars to invest in solar farms in the New York state.
	- They are using the trust model from 6S. It's the second collateral that is following this system and would be quite interesting to see.
- The MIP6 is correct. However, the team is working with SolarX to make it more proper. Stay tuned for this. If you have any questions, please ask.
    - LongForWisdom: It would be cool if we can help in renewable energy generation.

### Operational Support

#### Amy Jung

[18:20](https://youtu.be/O0mCnMk4aNM?t=1100)

- I posted the weekly updates to allow everyone to follow along and use the links. We've been primarily working on helping core units within their early development from the idea stage up to get it running. We did the Dss.Gov incentives in Know Your MIP, which Juan hosted, and Peyton generously presented. There's a lot of excellent discussions there. I would recommend looking at the recording. This is not going to move into formal submission this month.
- For collateral onboarding, we had Kane and Kevin [present from Synthetix regarding SNX and SUSD](https://forum.makerdao.com/t/collateral-onboarding-call-28-synthetix-wednesday-february-24-21-00-utc/6650), which are separate proposals but are grouped into one. Still, there was a lot of interesting discussion around liquidation oracles and how it might all work. Next week there will not be a collateral onboarding call. There's no project lined up, but we will be repurposing the time to do the core unit launch pod session with the growth core unit. Next Wednesday will involve that session.
- Regarding updates on the core units, we have [the resource board](coreunit.makerdao.network) where you can keep track of drafts. Standout feedback that we've heard is it being difficult to know who's drafting and what stage things are at. We're doing our best to keep these updated. We're collecting resources there—stuff like accountable or Opolis, which brings me to the second point.
- [Opolis presented in the community call this Tuesday](https://forum.makerdao.com/t/community-call-opolis-for-makerdao-contributors-and-teams-feb-23-17-00-utc/6620), which includes a presentation and set of slides. Go ahead and check it out. They're not ready for international yet. However, I would suggest checking that out. Check out the core unit I Wish Existed if you are lingering on what to do, where to begin, or if others may need help.
- The launch pod sessions will explore the idea of digging deeper into some core units. It may involve some topics such as what their core unit will be structured and its purpose. We had three that moved into formal submission, which governance will do their cycle on.
- Essentially, the core unit framework itself is going into formal submissions. We dropped the amendments to MIP24. We added operational support responsibility to set core unit IDs if the governance domain cannot cover them. Risk and governance both updated their budget. There were some discussions around budgeting that I recommend. Then real-world finance updated its mandate to be more detailed. We also have the growth core unit that has been moved into the RFC phase. The two that are new in drafts are governance communications, which had a declaration of intent that passed, and oracles that Nick is working on are still in the drafts phase. He said they would be for a while.
- Concerning the core units, many big picture conversations were discussed. They involved the clarity and alignment of MakerDAO's vision objectives and roadmap.
    - Currently, the concept is that these core units are autonomous teams coming from the bottom up. It can be helpful for us to have something that stands across time. Schuppi brought this up; a small working group with governance started to draft what this process might look like for us through the DAO.
    - Standardization at a higher level is also an important topic. Core units are drafted by everyone bringing their own stack. There were things such as should MKR vesting be at a high level where it's across all contributors or all facilitators. We've discussed standardizing some of the budgeting processes to assign a governance multi-sig where the funds will only go directly into there. Then core units themselves could use their own multi-sig or their own process to pull those funds out. The idea is to minimize some of the friction points for proposing, drafting or making a core unit come to life.
    - Anna is going to share an internal hackathon for the community development team. She'll just share a section of the outcome and what a group of people learned from that process. A lot of conversation concerns facilitator remuneration. Please, include your thoughts on how core units might be drafting their own or keep an eye out in general.
    - As we're developing these core units, we have a lot of talent coming into the system. People will begin to either leave the foundation or transitioning into the DAO. We'll see a lot of talent move in and out. We don't have the smoothest DAO onboarding process as of yet. However, that is something that I've heard a lot of interest from various community members around.
- Juan: If anyone has a core unit going live or voting sooner than later and they want to host a call, reach out, and we'll happily host you. Also, if we happen to miss anything on the board, please, ping Amy or me. We'll correct it as soon as possible. Thanks
- LongForWisdom: Great, thank you, Amy and Juan. Amy had mentioned the operational support and governance. We're running into the point where we need to figure out medium-term goals for the DAO as a whole, which is the priority of this working group. This is exciting because these are complex governance and coordination problems.

### Community Development

#### Anna Kryukova

[27:10](https://youtu.be/O0mCnMk4aNM?t=1630)

![](https://i.imgur.com/Avv6n3c.png)

- My name is Anna. Some of you might know me from community development. Today I wanted to speak about the state of comm-dev of 2021 and some of the things we've been working on. Just to reiterate and remind everyone, the Foundation's purpose is to bootstrap MakerDAO, which also includes bootstrapping a community development function that you can think about as a department but also as a group of people made up of some foundation employees, including independent contributors, and even simply community members and stakeholders that are working together on various projects to benefit MakerDAO.

![](https://i.imgur.com/APqE2ax.png)

![](https://i.imgur.com/0cX60Ha.png)

- Over the last few years, we've designed and built and seeded many of these programs and pillars. Some of these are related to learning. One of the projects unveiled last year focused on building this portal for community development that includes many topics such as governance and MakerDAO involved and how anybody can learn about various topics. There are tutorials onboarding, guides, and in-depth resources. Other programs may focus on creating maintenance and doing summaries of these calls of governance and risk. There's also CDIPS, grants, and a lot of these projects that help create this community. Many things are changing, and the function of this is beginning to shift; we're moving towards this new paradigm where the function and ways will revolve around empowering community members to self-organize and work on these meaningful projects that benefit the Maker community.

![](https://i.imgur.com/prTREmv.png)

![](https://i.imgur.com/FLUY0vC.png)

- With the introduction of core units, it's becoming the vehicle where someone in the community can take over a project, redefine it, and run it in the DAO. A lot of what we've been working on in community development recognizes that people can take new opportunities. I think about them in three different ways:

![](https://i.imgur.com/7yRBq1G.png)

- Over the last couple of weeks, we've started thinking a lot about this timeline. It's not linear, but it does have some markers by which we can judge the timeline.

![](https://i.imgur.com/A8T1IOc.png)

![](https://i.imgur.com/cEgMH55.png)

- To answer this, we introduced this experiment called Hack Future Work.

![](https://i.imgur.com/GEIeFQe.png)

- This is almost like an internal hackathon that takes this prompt:

![](https://i.imgur.com/rvryYVM.png)

![](https://i.imgur.com/fjVDIKo.png)

- The results are several units, which were shared in the community development RocketChat. We also had a meeting where many of the core units were presented. One of them was a concept around social Defi, and this was the badges group that we have in the forum. It involved creating a gamified voting experience and proof of reputation. This core unit thought about what it looks like if it were an independent core unit beyond community development. Several other units also included messaging a content production house, community onboarding, various forms of marketing units that presented, and then this design core unit. Actually, this one here is a good example of one of the things we've been working on. Shout out to Shea, who designed these fantastic images that I'm using to present with. She's a community member who created many of these branded assets and will be working on putting together a style guide for anyone in the community who wants to use these assets. Suppose they're putting together content and community-generated resources. In that case, you can use these to post on the forum, YouTube, and across the ecosystem. That's just one example of something that we've been working on with independent contributors and community development.

![](https://i.imgur.com/7upyiw7.png)

- Then, as we rendered this hackathon, we had some takeaways and feedback.

![](https://i.imgur.com/ETInCSR.png)

- LongForWisdom: Thank you, Anna. How is the whole group feeling as a whole, and what are the various options for getting involved? Is it going positively?
    - Anna: I think this is really a great exercise for us to take as a group. I have to recognize that there are different paths. The programs aren't only to continue to run on autopilot. There are going to be other paths that people can take. I think this experience is positive in many ways and surfaced many of these questions that we just did a retro yesterday. Actually, I'm hoping to share more of this as time goes on, maybe on the following calls. There are questions to go over, such as what are the discussions that this surfaced? How are people feeling? What could be helpful? Overall, it's positive, and everyone's excited that there's a lot of various opportunities.
- Iant: One of the questions I've always had sitting in the back of my mind is performance and performance assessment. When people are brought on, I would assume there must be some sort of framework that the community operates under that determines whether or not someone is succeeding or not performing at their position. That is then voted upon by Maker holders to some extent? I have no idea. Still, I wondered if that's something that came up and or perhaps cooking in the background for you guys to think about a framework like that.
    - Anna: I think someone else can add to this. one thing I wanted to add about this surfaced from our hackathon. Whenever we started filling this out, we had to understand how we would judge value, propose something, or explain the value of a core unit whenever it is still uncertain around objectives and goals. This is the part that Amy was talking about. Coming up with a more unified vision will clarify how these core units can fit within these objectives and how someone can describe value. As far as the second piece of the question, I don't know if someone else wants to answer further.
    - LongForWisdom: Maybe Juan or Amy can elaborate on measuring performance.
    - Amy: There's a layer that's talking about individual performance, and then we're also talking about performance as a core unit. Essentially, the facilitator is the person that is responsible for the performance of that core unit, whether or not they are within the team. They could be a project manager in the team, but then they hold that responsibility. I think we're talking about facilitators for the core unit that comes up on the core unit level. Each core unit will have its own version of how the team measures its own performance, which intertwines to that higher level of how we know that these facilitators perform the things they said they're going to do. That's why we work so hard on getting that mandate to be straightforward and setting objectives. However, as Anna said, that higher level I've been hearing about is missing. If we go through a process where everyone agrees on this higher level, then we go, 'okay, well did we accomplish this goal?' it is a little subjective. Still, there are ways that we can measure if we were to accomplish this goal as a group or if there are points that we didn't accomplish. If we didn't, what went wrong? We'll have to perform a collective process to gather that. The other point concerns market competition. If you're not doing a great job as a core unit, it will be realized at some point. Someone else will actually be able to step up and say, 'hey, actually, we want to do it like this.'
    - LongForWisdom: I think Matthew brought this subject up a few times. The way it's set up is that you need to apply relative to whether your budget is changing. Or just reapply for budgets regardless. At the very least, the request for more funds is an opportunity for Maker holders to ask what they do with the funds and how well has it been going.
- Iant: Cool, thank you, guys.

### MIPs Update

#### Charles St. Louis

[41:36](https://youtu.be/O0mCnMk4aNM?t=2496)

 ![](https://i.imgur.com/EZEyScH.png)

 ![](https://i.imgur.com/Nlji0pK.png)

 ![](https://i.imgur.com/zJkfXV6.png)

- LongForWisdom: The number 32 is slightly terrifying in terms of how many things might be submitted. It's going to be fun. We're going to be combining some of the proposals. For example, the core unit for the MIP set example will go in as one inclusion poll because all the MIPs are interdependent. We may do that for the initial core units and the combination of the mandates, budget, and facilitator mandate. Sam's asking what's the Gov poll limit for grouping votes. Sorry, what do you mean by that, Sam?
    - Sam: It's not that important. I believe Derek or somebody mentioned there was an upper limit on the number of votes that can be grouped.
    - Derek: Initially, it was about 32. I have to go back and have a look. But we had looked at that, and it's relatively high.
- LongForWisdom: We should be okay. Just for convenience on voting and making polls purposes, we're going to group some of them. At least the ones that are related, such as the core unit proposals. Alright, so Akiro asked what's happening with the UNI-LP oracle audits? As far as I know, they're still ongoing. I believe that Nick is gone at this point, but they're in progress as far as I know.

## Other Presentations and Updates

### Auctions Performance Presentation

#### Primoz Kordez

[47:20](https://youtu.be/O0mCnMk4aNM?t=2836)

![](https://i.imgur.com/MOWaxJ9.png)

- This table is covering auctions on Tuesday. To sum up a few stats, about ten million liquidated on Tuesday. Ten million debt is about 260 auctions. Maker collected more or less all the penalty fees, which is 1.2 million.

![](https://i.imgur.com/UpIFdVJ.png)

- Maker collected most of the penalty fees. 60,000 penalty fees were missing. Most of it was missing on ETH-B auctions. You can see here at the green line how much Maker had collected.

![](https://i.imgur.com/JEzqWU2.png)

- Red means that Maker didn't make a penalty fee, and there was no revenue. This line shows how much vaults got back from the remaining collateral.

![](https://i.imgur.com/MXKjUUK.png)

- If vaults have a liquidation ratio of 130 on ETH-B and the penalty fee is 113, there's 17% that vaults could get back. But since there is no considerable amount of competition amongst keepers, I'd say they make 50 to 20 percent of the money on auction vaults. Basically, we didn't get anything back on the ETH-B vaults, and that's because the liquidation ratio is much lower. There's not much available capital above 113. It's not necessarily that ETH-B auctions are worse. Keepers take a certain amount of capital, and since the liquidation ratio is lower, that means there's less left over for vaults. That's why we're not proposing lower collateralized vaults. At least until we have liquidations, 2.0 implemented. It's important to note that there are not many unique bidders. Here is the average number of bidders per auction. You can see that there's only one or two the majority of the time.

![](https://i.imgur.com/DWpMIrB.png)

- There are more bidders on renBTC. A bidder bid 50,000 DAI for zero renBTC. This vault made quite a high yield. In general, there is quite a lot of irrationality in some bids. You can see that a few bidders bid above market price for renBTC. Whereas if you look at ETH-B, some bids were fairly below market price. This is why keepers made a lot of money here. There's a similar situation for ETH. It's not as obvious because the liquidation ratio is higher on average. There are better bids on ETH-A verse ETH-B. One thing that's positive about this and something that makes us reconsider the auction duration time is how much time it took to get healthy bids. We have a six-hour auction duration because we may get zero bids if it's too short. Here you can see there's still a lot of zero bids.

![](https://i.imgur.com/nNU9ECd.png)

- On ETH vaults, 20% of all bids are all zero bids. That's why we have a longer auction duration of six hours. You could see that most of the healthy bids came in earlier, within the first hour. Today, we proposed to shorten the duration from six hours to four hours. This is beneficial for the liquidation capacity. Currently, we can liquidate 15 million, which is the `box` parameter, every six hours. If you shorten this to four hours, you can make six cycles a day rather than four. I didn't mention that because the low efficiency of ETH-B vaults makes us propose a higher back value for ETH-B. We have already proposed a higher back value for UNI LPs due to low keeper participation. Suppose we increase the back value for ETH-B, which is the minimum bid increase from 3% to 5%. In that case, we may get more keepers participating or at least improve the bidding. There doesn't appear to be any downside to this, as vaults already lose all of the value. I think it makes sense.
- The last proposal we had is to increase the `box` parameter by a very small amount. Leeks made an excellent analysis; he checked all of the keeper wallets and estimated the amount of capital they hold, over 100 million dollars of capital. It is not all liquid or in stablecoin form. He's suggesting that a 30 million `box` would be appropriate. I think the same, but I'm a bit cautious because we are not seeing a lot of competitiveness here among keepers. Even though keepers have more capital, if we increase `box,` we have a higher amount of liquidation. This means we would have even less competition, and the bids could go even lower. That's why we proposed a modest increase in `box` from fifteen to twenty million. This is our proposal analytics:

![](https://i.imgur.com/ZZmUDH2.png)

- To shorten the auction and bid duration for all `flips` to four hours, increase blocks from 15 to 20 million, and decrease back for UNI LPs and ETH-B from 3% to 5%. That's pretty much it, but there's one other thing that we also need to address. It concerns gas prices. A lot of auctions got kicked with a certain delay. For instance, here is one vault with the total amount of debt liquidated at 1.5 million. It took almost one hour to start the auction, which is a considerable delay. It shouldn't happen like that. This is happening because kicks are expensive due to gas prices. A kick can cost about $800 in gas. Now imagine this for 500 auctions. That's about $150k, and there's not a massive advantage of kicking an auction. There's no incentive to kick it, and that's why we have these delays. One idea to fix these problems is that we should have several actors performing these kicks. These people would have to get funded, and they would potentially perform these kicks to keep auctions ongoing.

#### Discussion

[57:20](https://youtu.be/O0mCnMk4aNM?t=3440)

- Iant: Primoz, I agree entirely with you, and I volunteer to do that right now. I spent $88,000 in kicks on Tuesday night. I'm happy to volunteer to help work something out. Thank you for your analysis here.
    - Primoz: Thank you. I spoke with DeFi saver guys today. They said they saved a bunch of Maker loans. Yeah, I think they represent 40 million of debt, so they probably are protecting 200 million of that. They probably spent 400 ETH in fees, well, the users who pay from the collateral. Gas prices are getting really high to manage liquidations or protection.
- SamM: I just want to say that liquidations 2.0 solves this issue because there's a built-in incentivization system. We need a solution until we get liquidations 2.0.
    - Kurt: Not to rain on your parade, but it's not actually confident that it solves it because those transactions are done in the clear and can be front-run by generalized front runners. You're still at risk of the commons' tragedy where you know to determine a vault is under collateralized requires you to do work; you have to run a continuous database of vaults and keep track of all of them as well as servicing the ones that are undercollateralized. However, if you always get front-run when you try to liquidate something, that could still eat away the incentive no matter how large it is because you can be bid up to whatever the value of the incentive is on the gas price. So it's not entirely clear whether or not this solves the problem.
    - BrianMcMichael: Even without the front runners, the gas is a fixed rate plus a percentage of the vault. When we see two thousand or three thousand gwei transactions, we could easily get to a case where the recompense doesn't cover the gas to kick it off. We might still need a backstop for liquidations 2.0.
    - d_zap: To chime in really quickly and add to what Primoz said, if the other advantage of passing this over to Maker is that it will be organized or coordinated, somebody could write a contract to kick lots of auctions at once, which will save money. With every individual kick, you've got a 21,000 gas baseline for what the transaction costs. In contrast, obviously, if you string together 100 kicks, then you will save that much from every auction. That's definitely more efficient if you have a huge number to get through.
    - BrianMcMichael: That's actually a super simple contract to write. You still need somebody to handle the database and monitor the blockchain and outstanding vaults, which is still a resource-intensive task. There is still some expense that isn't directly reflected on-chain there.
    - Primoz: It's good to have more than one actor doing this. We don't want everybody to rely on this one actor. If something fails, it's a problem. We need a backup as well. A few people doing this would make sense.
    - Kurt: We're researching ways to possibly mitigate that front-running threat on the kicks. In 2.0, so far, there's no clear solution that makes the problem go entirely away. We have solutions that decrease the severity. We'd also prefer to not have a single centralized entity that relies on kicking auctions.
    - BrianMcMichael: Maybe we don't want to do liquidations when gas is 3,000 gwei anyway. Even if we kick them off, who will bid on them? It might be its own kind of stock market circuit breaker that prevents us from getting zero bids anyways.
    - LongForWisdom: One other point is that if we end up getting EIP-1559, that changes the fee market, right? I don't know if that's positive or negative, but that probably affects how high the gas can spike for how long.
    - Christopher Mooney: We might get an opcode where we could maybe use the opcode to compensate people.
    - LongForWisdom: I've heard that before as well.
    - Kurt: The hope for EIP-1559 is it reduces the volatility in gas. The average price will still be the same, but if it makes things more predictable, it would probably help compensate for it.
    - LongForWisdom: One minor note about the kick incentive is that I don't know if it has to exceed the cost of gas for it to be worthwhile because you still potentially get to all the auctions. It may not always need to exceed the kick cost but just offset it by 80 or 90%.
    - BrianMcMichael: We need to have the incentives aligned. We don't pay people to call drip right now. They're incentivized to do it. Maybe we need to think about the incentive mechanism behind it.
    - Primoz: Auctions should get kicked, and that's why we have this. However, one vault wasn't kicked for a few hours, and he was able to save himself. It's not something we would want to rely on, of course. Many vaults are active; if you look at the largest ones in the last six hours, they can save themselves.
    - JoeQ: I just want to add, something we can consider is a lot of this is happening at three or four o'clock in the morning. I know we're transitioning to four-hour durations, and I'm really happy about that. Still, we have it extended out for specific timeframes because some people go to sleep, and the market goes way against them. That's something to think about.
- Kurt: While we're on the subject of making certain liquidations happen reliably, various external projects are working on solving these problems with a sort of cooperative game theory. One example that people might be familiar with is b-protocol which is actually built on Maker protocol. They have dedicated liquidators that line up and volunteer to liquidate things in a predetermined deterministic fashion. You don't have everything going to the miners or just no guarantee of return. I think that's an interesting avenue to explore as well.
    - Christopher Mooney: Joe, you'll work the mandated actors, and we'll establish something even if we have to use the multi-sig that the mandated actors set up. I just want to make sure that this problem is solved as soon as possible.
    - JoeQ: I'll coordinate with Primoz and the community to figure something out. Primoz had mentioned there should be a backup actor. There's so much money at risk. I believe that's necessary.
    - Christopher Mooney: I'll volunteer to be a backup.
    - Iant: I'll volunteer independently as well.
- LongForWisdom: Great to see some concrete actions come of that.

#### Open Discussion

[01:08:45](https://youtu.be/O0mCnMk4aNM?t=4125)

- LongForWisdom: I believe the crux of the question concerns how Maker holders can judge how well core units are doing. You have many Maker holders not paying attention to what's going on.
    - Juan: One of the solutions that Matt brought up during the last call was to make sure that it's not the default, yes. Someone can stay complacent forever. As you mentioned earlier, there's the budget, so as long as we make the budget non-default, yes, then it should be fine. The coordinates should fight a bit to keep providing value to the DAO and show that the budget is useful. It's essential to find the right balance. You don't want to hire someone and tell them they have employment security for the next day and a half, but let's see what happens after that.
    - Christopher Mooney: We have to find a model, right? I agree that it's going to be difficult. How will we effectively fire teams for not performing? The easiest thing I could think of is an annual review where MKR holders either re-elect that team for the next year or the team gets axed. That's probably the easiest one to start. For measurement, we should set out our goals for the year, and MKR holders will see what percentage of the goals have been met.
    - Juan: Yeah, but you can do the same with the budget. That's what I meant. Each core unit is proposing a budget for three months. We could extend it for longer.
    - Matthew Rabinowitz: Maybe it's possible to not only set it as binary zero and one but to have the same budget and some scale between zero and two hundred percent chunked into 25%. You can combine what Chris outlined as you maybe only met 75% of your targets, but perhaps that was just the situation. Maybe the budget shouldn't change, or perhaps it needs to be increased for performance.
    - Juan: Totally, and another tool that we're using for this is that a core unit could potentially have several budgets. As an example, we'd like to try with Amy bootstrapping a grants program. One of the budgets that we're going to propose is purely for grants. If governance doesn't think this is a good idea, the rest of the core unit could vote on the general budget and vote down on this grant budget that we will try to incorporate.
- LongForWisdom: I think that it should be interesting to see how it would work. Forcing an annual vote may not work in some cases. For example, the governance team is not doing well. There's an annual vote; it will be difficult for governance to vote to ax the only team or the only smart contracts team. There needs to be some way of governance expressing dissatisfaction where an alternative can put themselves together. Having no one is worse than having someone who is not doing good in some cases.
    - Christopher Mooney: You could bake that in at the end.
- Juan: This was less of a controversial topic than we thought.
- Iant: In terms of this specific problem in this structure, we use moving forward to analyze it or build a solution. Is it on com dev, or is there no real team that is quote on quote responsible for figuring this thing out? The way I see it, this will require research and then hopefully a testing phase of some sort.
    - Juan: The short answer is no. this is not assigned to a specific team. This is something that we could work towards. However, because this is a DAO, I trust a lot in the smart people I'm working with. If something is not working, I will find a way to fix it. I think looking for every contingency in advance may not be the best solution. We will find a way, and we will share the best practice as we go along.
    - LongForWisdom: I think what you'd find is that the other domains are the first to notice if one of the core units isn't doing a great job. What I expect to happen is that when it comes around to annual renewal time, the rest of the core units would have organized an alternative on the down-low so that governance has a choice which would be the smoothest reaction. This may lead to some bad feelings for the existing people but to some extent, that's unavoidable.
    - Juan: I think we'll find an organic solution. As long as we keep attracting the right talent, we should be fine.
    - Derek: Juan, I'm thinking that there shouldn't be any surprises for a team throughout the year if we're diligently focused on our expenditures, tasks accomplished, and tasks that haven't been accomplished for certain reasons. It should be known as we go throughout the year to stand with the community and other domain teams. I'm hoping that will be quite open, and if we're falling below the mark, we know we need to step up.
    - Juan: I agree. Maybe some core units are scratching an itch that won't be there a year from now. I think you're thinking about the essential core units. The most essential ones will always be there. Some other core units are more experimental. For example, if there is a goal of expanding DAI into the Antarctic and then three months later, this isn't going as expected, or it's going great, that's why organically, we will expect a lot of reporting. Seb has been working on that. There are various initiatives on reporting transparency.
    - LongForWisdom: There are sub proposals to add, remove, modify or replace core units, right?
    - Juan: There is the possibility.
    - LongForWisdom: There are governance processes to do these things, but in practice, we haven't done them. We don't know what the fallout will be.
    - Juan: In the coordinate MIPs, we tried to cover these cases where someone can propose, for example, they want to offboard this guy or onboard someone, and then there are emergency procedures as emergency core unit facilitators if something is not going as planned. We are trying to think of worst-case scenarios and make it work. Amy is saying that the challenge is who does the challenge. That's very interesting. Sometimes, the issue with human beings may be that we don't want to be the bad guys in the room, and therefore we don't give the most honest feedback.
    - Matthew Rabinowitz: At the end of the day, MKR has everybody working on this together. Collectively speaking, it's the money of all MKR holders. Therefore, the vote of that matters.
    - Juan: Any other comments or questions?
    - LongForWisdom: There's a lot more that I could say, but we're getting close to the time, and it makes more sense to discuss on the forum.
- Christopher Mooney: When we're thinking about budgets, we have the real risk of running into the same issue that governments run into where the voters vote with their emotions. There may be a point in the future where our income falls like it was in the depths of the bear market. This would require a contingency for what we do with teams and our budget if we begin to run out of money at that point. We have to be careful with what we approve.
    - LongForWisdom: You're right, Chris. that situation is inevitable, and we will cross that bridge when we come to it. Let's wrap this up now. Thank you, everyone, for coming and discussing today, and I look forward to seeing you on the forum and next week's call.

#### Links from Chat

- [Community Call Feb 23rd](https://youtu.be/DB00V5RxAT4)
- [MIP39 Core Unit Framework](https://forum.makerdao.com/t/mip39-core-unit-framework/6096)
- [Roadmap](https://forum.makerdao.com/t/road-to-dao-the-core-unit-operating-model/6105)

## Common Abbreviated Terms

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GF`: Governance Facilitator

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`LR`: Liquidation Ratio

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
