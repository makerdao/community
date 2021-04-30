# Episode 126: January 28, 2021

## Agenda

- [00:00](https://youtu.be/iTAYgzYS2D8?t=000): Introduction
- [04:32](https://youtu.be/iTAYgzYS2D8?t=272): Governance at a Glance
- [11:07](https://youtu.be/iTAYgzYS2D8?t=667): Smart Contracts Team Update
- [19:41](https://youtu.be/iTAYgzYS2D8?t=1181): Oracles Team Update
- [28:10](https://youtu.be/iTAYgzYS2D8?t=1690): Risk Team Update
- [31:37](https://youtu.be/iTAYgzYS2D8?t=1897): Real World Assets Update
- [37:55](https://youtu.be/iTAYgzYS2D8?t=2275): Operational Support Update
- [44:35](https://youtu.be/iTAYgzYS2D8?t=2675): Community Development Update
- [47:25](https://youtu.be/iTAYgzYS2D8?t=2845): Peg Stability Module Update
- [50:13](https://youtu.be/iTAYgzYS2D8?t=3013): MIPs Update
- [59:02](https://youtu.be/iTAYgzYS2D8?t=3542): January Governance Cycle Review
- [01:04:40](https://youtu.be/iTAYgzYS2D8?t=3880): Open Discussion

## Video

<https://youtu.be/iTAYgzYS2D8?t=000>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://www.youtube.com/watch?v=iTAYgzYS2D8)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk Meeting number #126 taking place on Thursday, January 28th at 17:00 UTC. My name is LongForWisdom. I am the governance facilitator at MakerDAO. Please feel free to interrupt and voice any opinions or comments. We would love to hear from you.
- Today's agenda involves regular updates. We have the Governance Cycle Review for January. We have no specific segments for today, so we'll open up to some discussion and Q&A.

**Weekly Update**

- This week has been reasonably busy on the governance side. I began working on Core Unit Proposals for the governance domain. I've also been coordinating with other people working on this proposal to ensure our results are consistent. Once production is complete, it should clarify some of the medium-term goals for the governance, which we've pushed off for the time being.
- We saw the Centrifuge New Silver Drop poll had passed an hour ago, and therefore we'll see that coming into executive; We can't set a date on this just yet.
- We proposed the ETH-A-DC IAM executive for this Friday. Primoz may speak on this later. Ideally, we would have a non-chain poll for these parameters, but given that the markets have been moving quickly and it's been bullish, we've seen the debt usage heavily increase. I wrote up some governance-focused documentation for the DC IAM module, available on the community portal, and linked it to the executive.
- I've continued to onboard Prose and Eli, which seems to be going well.
- Several governance-related MIPs will go public within the next couple of days. Prose is working on three of them. These include the DssGov Rewards, Governance Rewards MIP, and a managing multi-sig. There is possibly one more, but we'll see.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Peyton Rose

#### Governance at a Glance

[04:32](https://youtu.be/iTAYgzYS2D8?t=272)

- This week, I did add a new mini section to the governance at a glance. I would love some feedback on that. I'm calling it 'in case you missed it' announcements to cover things that aren't discussions, aren't signal requests, but should still probably be highlighted in the meeting.
- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-jan-22-28-2021/6254)
If you have the time to read over and vote in active threads, that would be much appreciated.

**Three-Point Summary:**

- Total DAI supply hits another ATH above 1.6B.
- Debt Ceilings have been raised, and the revenues have followed! DAI revenue per second up to 1.30.
- The [DAI VWAP](http://dai.descipher.io/) holds steady (currently at $1.001), despite some severe volatility of ETH.

**ICYMI Announcements:**

- The [USDC PSM Interface](https://ipfs.io/ipfs/bafybeieu4rmtva3c44tefr4hmlfak73vja3c4q23bgzpcdy5u3ua3xc25i/) is live with plenty of room before we hit the DC.
- Blimpa has brought Maker News to your inbox! [Sign up here](https://makerdaoupdates.substack.com/). They're currently testing out sending the governance snippets from this call and a maker relay version. Go ahead and sign up for that, and, of course, any feedback you have to provide would be welcome.

##### Discussions

- [IAM DC ETH-A Parameters](https://forum.makerdao.com/t/iam-dc-eth-a-parameters-27th-jan-2021/6235)
    - Primoz details the Risk Team's assessment of increasing ETH exposure to the platform and what steps might be taken to mitigate the risks.
- [Crash "in slow motion" scenario analysis](https://forum.makerdao.com/t/crash-in-slow-motion-scenario-analysis/6204)
    - SebVentures expands on last week's VaR presentation, showcasing a different platform risk posed by the Box parameter.

##### Signal Requests

- [Adjust ETH-A Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-eth-a-debt-ceiling-2021-03/6187)
    - Ultraschuppi signals another increase to the ETH-A debt ceiling as vault users continue to utilize the collateral.
- [Raise DSR](https://forum.makerdao.com/t/signal-request-raise-dsr/6241)
    - Ultraschuppi signals for varying levels of increase to the Dai Savings Rate, 0% since September.
- [Adjust the Surplus Buffer](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer-2021-2/6250)
    - Ultraschuppi signals the Surplus Buffer's raising, with options to continue MKR buyback and burn operations during the raise.

##### Ongoing Initiatives

- [📣 Calling all Projects!](https://forum.makerdao.com/t/collateral-calls-calling-all-projects/3715)
    - Juanjuan sets up a signup thread for projects wishing to present on the bi-weekly collateral call. Know any potential collateral partners that you want to present? Refer them here.
- [Collateral Status Index ](https://forum.makerdao.com/t/collateral-status-index/2231)
    - Confused about the current status of the various collateral types that have been discussed recently? Check out this post to find out the status and current position of each within the onboarding process.
- [Weekly MIPs Updates](https://forum.makerdao.com/tag/mips-update)
    - Davidutro and charlesstlouis bring the latest updates in the world of MIPs.
- [MakerDAO Standard Governance Processes ](https://forum.makerdao.com/t/makerdao-standard-governance-processes/4298)
    - LongForWisdom writes a brief overview of the currently operating governance processes in the Maker community. Confused between Signals, Declarations, and MIPs? Look no further.
- [The Official Welcome Thread](https://forum.makerdao.com/t/the-official-welcome-thread/771/4)
    - A welcome and introductions thread. Not strictly speaking governance, but if anyone new or old wants to introduce themselves, now is your chance!
- [Wanted: Join the Summary Team ](https://forum.makerdao.com/t/wanted-join-the-summary-team/4318)
    - Davidutro asks for anyone interested in producing call summaries to get in touch. Grants available.
- [MIPs in the Request for Comment phase](https://forum.makerdao.com/tag/rfc)
    - MakerDAO could always use help reviewing MIPs in RFC.

#### Discussion

- Prose: Tim will speak about the signal request on Adjusting the Surplus Buffer. He can give a brief explanation as to what's on there.
- Tim Shuppener: Thank you for putting me on stage. We are continually fighting right now to keep up with the demand of DAI. I've been spamming the forum with a lot of debt ceiling increases for ETH-A, and basically, all of them are answered by people saying that we do have a severe issue with risk here. Of course, increasing only the surplus buffer is not a direct effect that we will see. Still, it's probably one of the best things we can do besides raising the stability fee. I would not go ballistic with a stability fee like we did last year. We had something along the lines of 15% on ETH-A. I would rather stop burning or pause burning and instead accumulate into the surplus buffer to, at least, hold up some of the risks that we are going to be exposed to. The surplus buffer is going to get filled in five to seven weeks. Therefore, we have plenty of time left; there's no urgency. However, just from the comments, we saw on Primoz's thread regarding the IAM-DC parameters and my signal about the ETH-A debt ceiling, plenty of people asked: what else can we do? In that matter, I have the feeling that it's about time to raise that question right now. If it's needed to prolong the signal, I'm fine with that. We could do it for three weeks, but I don't think that anything will change. It's probably going to get worse.
- Prose: Thanks for that update. I want to highlight that signaling to increase the surplus buffer also gives people the option to vote whether they want a percentage to be still directed towards the MKR buyback and burn.
- David: This coming Tuesday's community call will hold a panel discussion about the surplus buffer, which includes a ton of people who are very active in governance.

### Christopher Mooney

#### Smart Contracts Team Update

[11:07](https://youtu.be/iTAYgzYS2D8?t=667)

- Last week, we had a weekly executive on the 22nd, which passed. Some of these are getting so long I'm going to point out just the highlights. We added two new collateral type LP tokens, which are UNI-V2-WBTCF and UNI-V2-USDCF. The tUSD debt ceiling went to zero, and the PSM USDCA was set up to be lerped up to 500 million. `Dust` for all of the collateral types went to 2000 DAI.
- Also noteworthy is that this is the first time we've done this with the protocol, but the vault compensation working group payment was approved for 12.700 DAI, and there was an oracle whitelist for Instadapp that got approved in that spell. Everyone did a great job getting on that. On Monday, we had the monthly executive, which went out and passed.
- For last week, we had two collateral assessments that Sam did for UNI-V2-DAI-USDC and UNI-V2-F-USDT. These two-LP tokens are probably going in next week. However, no collateral has gone to Kovan, and I'll make a note of this. We probably won't see this with the LP tokens because they're considerably difficult to get on Kovan. We need the entire Uniswap kit to be there and function correctly. We were able to do it with the first one, which I think was a good test case, but it's tough to create this for our test nets and Kovan. Therefore, right now, most of these are going straight up to the mainnet. While we are doing LP tokens, you probably will not see them going into Kovan.
- There was more review of the Dss.exec lib, which occurred last week. We did a quick check on a few LP Tokens that might be coming and gave them a short assessment for work on the collateral priority sheet. The other teams have been working on that as well.
- Regarding domain teamwork, many team members were heads down, making some updates to liquidations 2.0 and working with the auditors. We've been going back and forth with PWC. We have another session with QuantStamp to do a full walkthrough with them tomorrow. We have a code frozen version of that, which I'm going to link down ***[here](https://github.com/makerdao/dss/tree/c8a134429192a089bed6cc65ae8b73203fbb8374).** If anyone wants to take a look at it and understand it, there's a clip.sol a dog.sol, an abbakai.sol, and some changes in the end that are most of the relevant parts that you'd pay attention to there.
- Our team was also heads down in review on MIP21. We went through another pass of MIP21 and then kicked that back for some changes. The next day, we grabbed MIP22, and we went through a pass of MIP22 and kicked that back for some discussion and changes. I think what we're going to do with those MIPs is that whoever makes it through that review process first and gets to the end, where our team is signed off on it, will be the first one that ends up going out.
- For next week, we don't have any monthlies. Hopefully, like I just said, we're going to put MIP21 or MIP22 on Kovan next week. The Friday executive for next week should have that UNI-V2-DAI-USDC and UNI-V2-F-USDCF in there. We're also working on assessments for UNI-V2-UNI-F, LINK-F, and AAVE-F.
- Regarding domain team reviews, we still have MIP25, a flash mint module that we have to look at. We've got MIP30, which is the farmable cUSDC CropJoin Adapter. We're looking at both of those, and I think there's some other stuff I had not mentioned. We may try and get the Vox out because it requires just a light touch quick review, and then after that, we can push it out. Also, Let's discuss the keg soon as well.

##### Questions

[16:32](https://youtu.be/iTAYgzYS2D8?t=992)

- Emilio:  I think it's important to mention the advancements that Tanner has made in formal verification.
- Chris: Yeah. The Foundation has a new team member, Tanner, who's been driving the push towards finding the right sets of tools that we can use for fuzzing, formal verification, and the types of security guarantees that we can give. We're hoping to apply that to the liquidations 2.0. Tanner's been pretty heads down in that almost tangentially to our workflow. Thank you, Tanner, for the work.
- LongForWisdom: Tim, would you like to read out your question?
- Tim Schuppener: I'm not sure if I got your point.
- Chris: Sure, I mentioned that the surplus buffer grows off interest rates that go towards all of the various vaults we have. At some point, people need the DAI generated from those interest rates. They need to be able to find it on the market to pay down their positions. That means there's some inflection point where if the protocol hoards too much of those interest rates, it will end up breaking the peg's high because there would be strong demand for DAI. I know that the PSM is looked at to regulate the peg, but it would regulate the peg at the expense of absorbing a bunch of other stable coins. Therefore, we don't have a peg breaking high issue. Instead, we'll ingest more of the USDC in the PSM or whatever other stablecoins we put there. Just worth noting that there are reasons for that surplus buffer to hit the market.
    - Tim Schuppener: I agree. I doubt that the inflection point is at two to three percent. On the con side of the initial signal, DAI is taken out of circulation and hurting the supply side in the surplus buffer. Looking at the amount of DAI getting minted right now by non-stable coin assets is so big that I doubt we are near this inflection point.
    - Chris: Yeah, I think we outpaced that inflection point by quite a bit over the last year. I felt a year ago that we would have seen this in the market but not today.

### Nik Kunkel

#### Oracle Team Update

[19:41](https://youtu.be/iTAYgzYS2D8?t=1181)

- Brian and I are finalizing the details that [ABDK](https://abdk.consulting/) requested from us. We'll be packaging and sending that off to them to begin the audit of the LP oracle. We're all very excited about that. As we add more LP tokens, we increase our exposure to that oracle. At some point, we do want to raise the debt ceilings on those because, as we've seen with all three of the LP tokens that we've onboarded, they've all filled up to the three million debt ceiling maximum in less than 24 hours. The demand is there.
- Given that we've seen that type of untapped demand. We're going to be pursuing and aggressively adding more LP tokens; All the ones that Moony listed out earlier. I think this is the right call. However, after that, we're in this 'what do we do now position?'. After UNI-ETH, LINK-ETH, and AAVE-ETH, the remaining LP tokens are not very liquid. The question is, what do we do after that? Do we try to start seeding new liquidity pools that currently don't have the liquidity to generate significant fees? It's a chicken and the egg problem. If there's no liquidity, then no trades are going through, and no fees are being generated, and so no one's putting in any liquidity. But if you can jumpstart that liquidity, you can generate fees.
- It's not that anyone has to start manually trading on Uniswap between DAI-WBTC or DAI-USDT. It's purely a function of the routing that the aggregators or even Uniswap users will start routing trades through that liquidity pool. That's an option that we can investigate. There's no guarantee we can manage to boost liquidity in those. Therefore, it might not be the best use of our time. An alternative is that we start focusing on other LP tokens. Case and point, SushiSwap has a ton of liquidity. It's a fork of Uniswap to use the same LP oracle that we use for Uniswap without really any changes. However, the caveat is that no one will use those if they don't get the Sushi Rewards. You're getting something like 80% APY on some of those Sushiswap pools. Most of the rewards are not coming from the trading fees. The majority of the rewards are coming from the Sushi allocation you get. Therefore, by onboarding the raw LP tokens, users won't get those Sushi tokens. This means it may not be desirable to utilize.
- I don't know if I want to call it out. Maybe I'll let Sam talk about this, but he's made some exciting changes to the CropJoin adapter that might make something like this possible. Sam, do you want to want to jump in real quick>
    - Sam: I opened a pull request to extend the CropJoin to support the SushiSwap Master Chef Rewards Distributor. I don't know if many people know this, but CropJoin has two pieces. There are the general rewards token joint adapter, and then there's the compound-specific strategy. The CropJoin itself is generalized. You can use it for any rewards program, including Uni and SushiSwap. It's straightforward to add in these different adapters. I have an incomplete pull request, but we'll use it to leverage our existing CropJoin, which had just passed in the MIPs proposal for SushiSwap.
    - Nik: Maybe prioritizing MIP30 for next month, which is CropJoin, might be a good idea. After we get MIP30, we can do it for Sushi and earn those Sushi Rewards. To give an example, I think the DAI-ETH pair is offering 70% APY right now on Sushi. If you let people take a 3x leverage on that, you're giving them 210% APY. You can charge a healthy cut in stability fees if you'd like to do that. Those things have tremendous potential for DAI generation and stability fees. So that's the next big plane we want to tackle.
- Going back to oracles, another thing is that Uniswap, at one point, will release Uniswap V3. That means that this huge demand we have for our Uniswap V2 tokens could disappear relatively quickly. However, I highly doubt that SushiSwap is working on any L2 stuff from my conversations with them. I think the Uniswap stuff is more of a sustainable type of revenue, at least in the near term
- Mark Andre, one of the guys on my team, is becoming much more active and taking up this type of governance liaison role. He posted a proposal in the oracle forum to create 17 different Starkware oracles for DYDX. We are currently testing those, and I think the poll should go out for those on Monday. If the polling vote passes, the executive will probably not be on the following Friday. It would get staggered a couple of weeks because we still need to work on some smart contracts stuff with Starkware to ensure that everything's hooked up. That'll be very exciting because it will be the first time we do any oracle work on L2.

### Primoz Kordez

#### Risk Team Update

[28:10](https://youtu.be/iTAYgzYS2D8?t=1690)

- Monetsupply just finished risk evaluations for two UNI LP's, which are DAI-USDC and USDT-ETH. Both evaluations are currently in review and should be published within the coming days to onboard next week. As Chris mentioned, we'll also be working on an additional batch of evaluations for Uni LPs. This would be UNI-ETH, LINK-ETH, and AAVE-ETH, and of course, these pairs have high potential because they reach high capitalization with high APY. It shouldn't be a problem for us to list them.
- I published a proposed parameter for the debt ceiling instant access module for ETH-A. I offered this change to be included in tomorrow's executive. We don't want to have another event of full debt ceiling utilization for ETH-A. We have an urgent vote because these are pretty annoying for the smart contracts team, of course, and for business-related reasons. They also mentioned the increases in debt exposure on ETH-A might lead to us increasing rates more aggressively because this will be our only tool to compensate for increased risk if we won't be limiting debt growth with debt ceilings. It's less likely to increase surplus buffer in the short term or even `box` parameter or liquidations 2.0 because it won't be released this month. Rates are our only tool to lower debt exposure growth if it starts ballooning. We'll discuss this next week. We have rates meetings, and the rates proposal should also be out early next week.
- We'll work on an additional set of debt ceiling instant access parameters for other vault types within the upcoming weeks. We'll start with the most active ones in terms of DAI minting, which would be renBTC-A, LINK-A, and UNI-A. Then we can have this module implemented for the majority of vault types.
- That's it for the week. There's, of course, a lot of ongoing regular work. We are currently updating risk premiums. We need them for the rates group next week. As we mentioned, I'm finishing a budget proposal. I'm planning to catch the deadline next week for the monthly cycle, so it should be out early next week or the end of the week. Finally, Andy's developing VaR modules.

### Sebastien Derivaux

#### Real World Assets Update

[31:37](https://youtu.be/iTAYgzYS2D8?t=1897)

- Thank you all for onboarding me as a risk facilitator under the previous framework and just in time to move to the next framework of Core Units. I've passed a post to analyze what would happen if there is a crash in slow motion. Slow-motion is a term within crypto. It's still a big crash but slower than what we can expect relative to a black Thursday event. The news is not good. Even if the drop is small every hour, we still lose a lot of money, but we can hope that some people will manage their vault. If the gas price is not too high, it will end well for us. The good thing is when the simulation shows that we earn a lot of money. Earlier this month, when there is volatility, either we earned a lot of money or lost a lot. Each time it's different.
- Regarding RWAs, we have published the Centrifuge contract documents. We studied all the Centrifuge assets documents concerning New silver and ConsoleFreight, which will be released soon. There are more than 100 pages of contracts, and we haven't seen any stoppers in them. There's some small stuff to figure out. I want to point out that everything currently being done for New silver and ConsolFreight is for small experiments. Small being less than five million, just like we do for the PSM and UNI LP. when we grow to a bigger experiment of collateral types, even if New Silver increased the depth exposure, we would add new layers of securities exists. We are working to find how we can increase or scale RWAs because there are still many issues that need to be solved. We are working on the legal implications of scaling the RWAs and how we can lend for the long-term to provide capital for other types of real-world collaterals and third-party providers managing portfolio RWAs. These will decrease the load on MakerDAO and help move the exposure or the load to the third party, which will allow us to increase the scale of RWAs without being a huge bank. Something like that will be published soon regarding workflow for Asset Originator. It isn't very easy for our necessary originators from traditional finance to understand how MakerDAO functions and the governance polls and everything. It's always a bit messy to discuss with them because there was no clear framework.
- Lastly, we had many meetings with collateral prospects under evaluation and other people that can help us shape how we can grow MakerDAO, at least when dealing with traditional finance. That leads to the Core Unit proposal I have published in the forum. There is one difference between RWAs, which is moving to Real World finance. It's a small difference to include some other stuff we are working on, usually concepts in traditional finance but are not used in Defi. For instance, all the things related to accounting and knowing if there is some DAI in the surplus buffer are mainly the implication of these questions. There is a meeting next week on Tuesday.
- Also, we want to make the interface with traditional finance. While we grow, I expect that MakerDAO will have more interaction with conventional finance with financial institutions. We already have contacts with them to have an interface and work in the same language because there is a big issue on the language barrier between traditional finance and DeFi.
- In the current proposal, there is one sentence to explain how governance can influence the Core Unit's work. This is key, at least for this Core Unit providing competencies, but we can work on what governance thinks is a good thing. Any input is always welcome because we want to work for the DAO, whatever that means.

### Amy Jung & Juan

#### Operational Support Update

[37:55](https://youtu.be/iTAYgzYS2D8?t=2275)

- As I mentioned last week, we're going to combine powers, which means I'll be giving the update this week. Next week, Juan will be speaking, and vice versa. Before I begin, I want to give Juan a chance to say something, given he's now our newly mandated operational support joining me. We have two facilitators, myself and him, Juan do you want to say something?
    - Juan: I think we're happy to be here and form a part of this community. I believe that the people I've interacted with already know my passion and enthusiasm. I don't know what else to say, to be honest.
- Awesome. There are two main things when it comes to collateral onboarding. In the calls that we did for collateral onboarding last week, we had [Lido](https://www.youtube.com/watch?v=wZWmh3FLaZY) protocol, which is building on the Ethereum 2.0 beacon chain. Users can earn staking rewards.
- This upcoming week is [Reinno](https://forum.makerdao.com/t/collateral-onboarding-call-26-reinno-wednesday-february-3-18-00-utc/6242) tokenized RWA that are giving loan collateral tokenized real estate assets as the collateral for a loan. That's going to be happening in next week's call.
- Lots are happening on the Core Unit. Our domain as well as seen lots of work on the proposal. We're hoping to get it in by the 3rd. You'll be seeing something slightly more polished than what we originally put in with our MIP28.
- I did post a [TLDR](https://forum.makerdao.com/t/tl-dr-core-unit-mips-submission-process/6245) Core Unit. This gives you the super "long to didn't read." However, you should read all of the frameworks and give feedback on them. It will provide you with the short story of the submission requirements, the processes, and the time frames. I know it is hard to keep up with governance timelines, but the main takeaway is that it takes about two months to go through. One month is the minimum for a request for comment (RFC), and then it goes into the monthly cycle. February 3rd is the timeline for getting it into the March cycle, which would be ratified at the end of March. The next one is April.
- As Seb has mentioned, a few Core Unit proposals are coming in already. I saw that some people started giving feedback, which is always great. As far as RWAs, smart contracts also put one in the chat centered around what they're thinking. Theirs is thorough in terms of their team philosophy. You'll see a variety of different applications and details. Then, we'll be submitting one for operational support, and Primoz will go for it. - - You can join the [#core-unit-operating-model-onboarding rocket chat channel](https://chat.makerdao.com/channel/core-unit-operating-model-onboarding). That's where you can post something before you make it a MIP. This is great if you want to discuss a Core Unit you want to work on. That being said, there is also this [Core Units I wish existed](https://forum.makerdao.com/t/core-units-i-wish-existed/6248) post that IMEO recently posted, which is great for brainstorming and giving feedback on things that you want to initiate a Core Unit for but maybe you necessarily don't want to start that Core Unit.
- This [youtube video](https://www.youtube.com/watch?v=iOu_x8OelEQ&t=2957s) is a recording of the Core Units overview, including this blockchain accounting service called accountable.dk from Dennis. He talks about incorporating employee payments, taxes, fiat payments of what you might have encompassed a blockchain company if you're thinking about starting a core unit as well—highly recommended. It's super useful. You can always reach out to him for more questions as well.
- On behalf of operational support, we'll be gathering services that we hear—for example, Dennis, one of them. We'll also have Opolis. You'll see a stream of people who might present their services to offer facilitators or contributors working in the DAO.
- Last but not least, we have a [Know your MIP](https://forum.makerdao.com/t/know-your-mip-04-keg-streaming-payments-module-friday-february-5th-18-00-utc/6237) number four that's going to focus on keg streaming payments. The first half will be Prose presenting the non-technical side. A MIP is coming with that. Then, our favorite, Sam, will talk about the technical questions concerning how the keg may work. This might be useful if you're working on a Core Unit and have questions regarding how you want to receive your budget. I've heard a lot of other questions around that. I Highly recommend checking that out next Friday.

### Anna Kryukova

#### Community Development Team Update

[44:35](https://youtu.be/iTAYgzYS2D8?t=2675)

- My name is Anna. Some of you may have seen me or worked with me in community development. I have a few updates for you.
- This month, we had many applications come in for the meetup program that David runs. We had 16 applications, and 14 were accepted. There's also a Latin American DAI action group that's completing its second quarter of operations. They will do a retro and provide more metrics about what that program was and could accomplish. Then on Tuesday, Seth and Kevin from Source Cred came to the community call with David. They spoke about some new weight changes in the forum implementation. If you'd like to see that, I'm going to drop the replay in the chat. Updates are coming to Substack, so if you would like to see updates from this call, we put together a summary posted in the forum. If you would like to provide more feedback on what kind of updates are beneficial, you can drop that feedback in this thread and sign up for updates. A team in community development works hard to put out a Maker Relay every Monday. If that is something that the community would like to receive via Substack, you can put your requests in this thread.
    - LongForWisdom: Great, thank you, Anna. Does anybody have any questions on community development? One note on the Source Cred, the weights are changing slightly in the future for the Source Cred DAI distributions. Hopefully, this won't have too late to affect individuals with volatility in the first week. Please keep track of how that changes and provide feedback. Please read up on the changes to try and give them a better idea of what we're going for.

### Sam MacPherson

#### PSM Update

[47:25](https://youtu.be/iTAYgzYS2D8?t=2845)

- SamM: There's not much to besides the increase on the debt ceiling.
- LongForWisdom: In the future, there's potentially a lot of cool stuff we could do with the PSM or that kind of paradigms like other stablecoins and other potential parameters we can fill with, right?
- SamM: For sure.
- LongForWisdom: Interesting to see how that evolves over the next little while.

### Charles St. Louis

#### MIPs Update

[50:13](https://youtu.be/iTAYgzYS2D8?t=3013)

![](https://i.imgur.com/D0VJvma.png)

![](https://i.imgur.com/x1GA8nr.png)

![](https://i.imgur.com/35j5TVv.png)

![](https://i.imgur.com/5ZNKlF5.png)

![](https://i.imgur.com/OtL0uqw.png)

![](https://i.imgur.com/X6ylQeT.png)

![](https://i.imgur.com/vshh4Y7.png)

- If you have any ideas for MIPs. Please, go ahead and post them in the pre-MIP discussions. It's an active part of the whole forums if you do have any new ideas to go there or post in Rocketchat.

![](https://i.imgur.com/bHzxtMy.png)

## Procedural

### LongForWisdom

#### January Governance Cycle Review

[59:02](https://youtu.be/iTAYgzYS2D8?t=3542)

- LongForWisdom: This week is the Governance Cycle Review. This is supposed to look back on the cycle, see how it went, and then look forward to the next cycle. We saw seven proposals entered into the January cycle. Six made it past the inclusion polls and were successful. The only proposal that we didn't continue was the declaration of intent to engage Nexus Mutual to ensure that Maker protocol.
- The successful proposals were significant. We ratified three new mandated actors, and we've already covered it, but congratulations to Sam and Juan. We also approved two technical proposals, which are formalizing the PSM and including CropJoin. In terms of voting, the exec passed reasonably quickly this month. Previously, we've seen it go down to the wire, but it's good that it didn't happen this week. We didn't have any particular problems last month with the cycle. This is your chance to chime in and say if you disagree with me, but it didn't seem like any significant controversies or concerns.
- Looking forward, I'm not sure what we're going to see in February. There's a lot of MIPs in RFC that could potentially be submitted. If you are planning on submitting things in February, feel free to chime in. I think we're going to see quite a lot in March. We should be prepared for that, especially if we see budget proposals and the actual Core Unit MIPs themselves.
    - Charles: I wanted to have an open conversation regarding the former submission deadline because sometimes people forget if we're going to keep it from Monday to Wednesday.
    - LongForWisdom: We should discuss it. It's potentially problematic for us to change or start ignoring bits of MIPs. For each of the MIPs that's formally submitted, we need to do inclusion polls. Therefore, having that open until Friday might be awkward in terms of governance facilitators having to cue up the polls over the weekend and reading through all the MIPs, making sure that they're valid to be submitted. Perhaps it doesn't always get done as much as it should do, but we're supposed to do that. I think Thursday would be the latest. That still leaves the problem of us wanting to amend the MIP or something in some way, which is annoying because it's a lot of effort.
- I guess we'll think about it a little bit. Wednesday should be considered the deadline; if anybody is having a lot of trouble finishing anything and asking for an extension, that's fine. We can consider that as a case-by-case thing. In general, if you haven't gotten in touch with me and or Charles by Wednesday and you're planning to submit something, you should tell us that it's going to be late. Hopefully, that covers any confusion.

## Open Discussion

[01:04:40](https://youtu.be/iTAYgzYS2D8?t=3880)

- Sébastien Derivaux: I want to talk about medium-term lending loans with MakerDAO. After a post I made on the forum, most people agree in the community to lend some DAI for an extended period. Hence, currently, all vaults are endless. You can borrow as much as you want for as long as you want, except at some point, you will have stability fees that will increase if governance wants you to find a new loan elsewhere. That doesn't work for the real world because you cannot increase stability fees when you have an asset, for instance, like real estate. People need some stability. The idea was to lend for, let's say, five years at 2% or 3% or whatever and not changing it afterward. We shouldn't be stressed about the daily fluctuation. How does it change from what we're doing already? As we saw, we are lending. We are liquidating when there is a drop in the ETH or BTC price, which works well until it doesn't. If there's only some vault to liquidate, we make a lot of money we are all happy. We've made 25% of revenues this month from liquidations, but it doesn't help to liquidate something else when it fails. You can have some fee-generating assets like Uniswap pools in crypto; however, with something like rent where you are getting paid every month a certain amount. If your Maker loan fees are lower, you know that with the rent, you can pay the stability fees and decrease your Maker loan. After some time, you can finish your Maker loan by getting the rent in. That works well when you have a real estate portfolio. If someone doesn't pay his rent, it's not a big deal. That's always the idea with real-world assets, which changed how we see the loans we provide to our customers. This idea may be a bit better in the real world because we are making short-term loans with the real world. Hence, in the case of mature, there is a 1-year notice in New Silver's case. It's only three years. They are building something or renovating a real estate property, and they are selling it. That works well if they can sell it. If they cannot sell it, there are two choices, and the same with ETH. If you cannot sell ETH at $1000, the only buyer bids it at $100. Do you want to sell ETH at $100 and take a loss of 90%? It doesn't make any sense. For ETH, there is no fee revenue accumulating to pay for the loan. However, if you invest in real estate, you have the rent coming every month, which will likely be the same every month. There will be a small variation, but there will be no stress to liquidate if the rent is there because some revenues cover the loan. For some assets, not for all but some, it may be smarter to focus on the borrower's ability to pay the loan rather than the collateral value on the day to day basis. That was the thought we had, and  Lucas was interested as well.
    - Lucas: I think you also have to consider how long we will be in a 0% DSR environment. If we start onboarding these long term loans and have 200 million DAI worth of 3% loans, we're then pushing the DSR up to 5% because no one wants to have DAI. or we can drive the adoption of DAI through the DSR. I'm thinking back to how it was a few months ago. Still, how do those various factors come in? What do we think is going to happen with the DSR? What is the base rate that we should have?
    - Sébastien Derivaux: Monet is writing that our asset duration should match our liability durations. It's not an easy question. There is still some theoretical work to be done. DAI can be very long term because people can only redeem DAI at an emergency shutdown. Maybe, Monet, you want to comment as well?
    - Monet Supply: I'll comment more in the thread, but I know that traditional financial institutions generally put a lot of work to ensure that their asset and liability durations are matched. If market interest rates move up or down, their position doesn't change too much. However, if we are still committed to continuously maintaining the DAI price at one dollar, we have all of our liabilities be zero duration assets. If we lend out money for long durations while the DAI price goes below one dollar, we have to raise short-term rates, which pushes down the value of our long-term assets. I think it creates a position where MakerDAO loses money when the DAI price goes down, which may be dangerous.
    - Primoz: We are talking about duration risk here, and that's why RWAs would be more suited for short term loans. It's easier to control the supply and protect the peg. If you're going to use long term loans, we have this duration risk exactly which Monet has described. It's more of an issue. I would always prefer to use short term loans, but I know this becomes an issue for borrowers.
    - Lucas: Short-term loans have to be insanely cheap for the money. They are insanely cheap on Wall Street.
    - Monet Supply: Maybe a solution is to find people who want to hold a long term DAI investment. How banks manage their duration risk is they'll sell long term bonds or certificate deposits that have a long duration so that if they loan somebody money for five years and have a CD that they owe somebody back in five years, they're hedged.
    - Sébastien Derivaux: Yeah, but a surplus buffer can be seen as a long-term liability even in all cases. Hence, we have at least a long-term buffer, and even above that, there is still some room to work. It's an open question. I don't have all the answers, but I think it's something to work on.
    - Matthew Rabinowitz: As an example, in commercial real estate, this is why transactions are a snapshot of the appraised value on closing and also why you don't do routine appraisals every six months or every year. 95 to 98% of the value is not in the dirt. Instead, it's in the cash flow stream.
    - Sébastien Derivaux: Having long term assets is always good to pay the workforce of MakerDAO. We will have some expenses. If we lend for five years, we know that we will get stability fees for the next five years to cover all of our expenses. All the vaults can be shut down, or the vault can be closed at any time, and that will leave no income from it.
    - Matthew Rabinowitz: It's also an open question concerning what happens when the DSR begins to increase. What happens to the surplus buffer net number that's caused by real-world assets? It should get compressed because, as you've outlined, the market external to Maker is efficient. If it starts pushing real-world assets, they'll refinance. When they refinance externally, the probability of coming back isn't so certain.
    - LongForWisdom: If I remember your forum posts correctly, Seb, we were trying to figure out what proportion of long term assets would we want in comparison to short term assets. Ideally, we'd like some of both because there's always going to be some base level demand for DAI. It's not certain, but you can have maybe 10% of the portfolio on long-term assets that we never think we need to recover 90% of the DAI, right?
    - Sébastien: The post's aim was primarily to know if it's something we should work on. Whether the governance and community have already decided that Maker will only make short-term loans, that wasn't clear. The community answered that it makes sense to work on this subject, and it doesn't make any sense to make it if it's not a good idea. There are some issues with the DSR, but Monet and Sam are talking about it. Even in crypto, we have the yield protocol. There is a MIP to integrate YFI-DAI into Maker. That's already some medium-term and most likely long term assets that would be difficult to sell. The final price is always the same, but if the interest rates are moving, the bond price, YFI-DAI, will change this time. We would not want to sell something and have a loss if you know at the end we will make a profit. It's a work in progress.
    - Matthew Rabinowitz: It's going to evolve into making sure the amortization schedules of whatever the ending borrowers are will imply that the principal gets returned during the term of the cash flow such that that concern you've got at the very end doesn't matter.
- LongForWisdom:  Okay, that exhausts this topic. Does anyone else have any other topics they want to discuss before we close up?
    - Chris: Did the PSM put Vishesh out of work? Are we never going to see him again?
- LongForWisdom: Vishesh mentioned hes going to take some of January off. Hopefully, we'll see him back in February.

#### Links from Chat

- [STABLECOINS: THE BEDROCK OF DECENTRALIZED FINANCE
Expert View Featuring Greg Di Prisco](https://www.realvision.com/shows/expert-view-crypto/videos/stablecoins-the-bedrock-of-decentralized-finance)
- [Review on MIP22 is](https://github.com/centrifuge/tinlake-maker-lib/pull/18) and (https://github.com/centrifuge/tinlake-maker-lib/pull/23)
- [[UNI-V2-ETH-USDT] ERC20 Token Smart Contract Technical Assessment](https://forum.makerdao.com/t/uni-v2-eth-usdt-dai-collateral-onboarding-application/6231)
- [[UNI-V2-DAI-USDC] ERC20 Token Smart Contract Technical Assessment](https://forum.makerdao.com/t/uni-v2-dai-usdc-erc20-token-smart-contract-technical-assessment/6232)
- [MIP39c2-SP1: Adding Core Unit (Real-World Finance)](https://forum.makerdao.com/t/mip39c2-sp1-adding-core-unit-real-world-finance/6224)
- [[Farmable cUSDC Adapter (CropJoin)] Collateral Risk Evaluation](https://forum.makerdao.com/t/iam-dc-eth-a-parameters-27th-jan-2021/6235)
- [Core Units Overview + Blockchain Accounting Service (incorporating, employee payments, taxes, fiat payments, etc)](https://www.youtube.com/watch?v=iOu_x8OelEQ&t=2957s)

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
