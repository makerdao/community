# Episode 122: December 17, 2020

## Agenda

- [00:00](https://youtu.be/1skpcjr182Y): Introduction
- [05:05](https://youtu.be/1skpcjr182Y?t=305): Governance at a Glance
- [09:24](https://youtu.be/1skpcjr182Y?t=564): Smart Contracts Team Update
- [13:57](https://youtu.be/1skpcjr182Y?t=837): Oracles Team Update
- [18:50](https://youtu.be/1skpcjr182Y?t=1129): Risk Team Update
- [26:12](https://youtu.be/1skpcjr182Y?t=1572): PSM Implementation Update
- [29:36](https://youtu.be/1skpcjr182Y?t=1776): Community Development + Operational Support Update
- [33:08](https://youtu.be/1skpcjr182Y?t=1988): Collateral Calls Update
- [36:00](https://youtu.be/1skpcjr182Y?t=2160): MIPs Update
- [39:04](https://youtu.be/1skpcjr182Y?t=2343): Collateral Onboarding Review
- [42:30](https://youtu.be/1skpcjr182Y?t=2550): MakerDAO, Year in Review
- [49:40](https://youtu.be/1skpcjr182Y?t=2980): Open Discussion

## Video

<https://www.youtube.com/watch?v=1skpcjr182Y&feature=emb_logo>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/1skpcjr182Y)

- Hello everyone, and welcome to the MakerDAO Scientific Governance and Risk meeting number 122, taking place on Thursday the 17th of December at 16:00 UTC. My name is LongForWisdom; I am the governance facilitator for MakerDAO. We have the usual agenda for this call. It will include updates from the major groups. We also have a couple of segments from various people for a yearly review. And then we will wrap things up. Feel free to interrupt to make comments or questions. You're more than welcome to do so. We'd love to hear from you, so feel free to chat.
- A couple of reminders concerning this call and the holidays. In January, we'll be adjusting the time of this call back by one hour to 17:00 UTC. I think that's slightly easier for people in the US west coast. Keep an eye out for that in January. It will be on the agenda.
- As for my second point: this will be the last call for this year. For the next two weeks, we will suspend the usual governance cycle given the holiday periods. I think many people will be out of action, so it makes sense to take a break for those two weeks. This gives everyone a break, which is nice because people have been working hard. All right, I think that covers my introduction. Before we jump into updates, Lucas, do you want to say something briefly?
Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Lucas Manuel Leaving Maker

- Lucas: Hi, everyone. My name is Lucas. I'm on the Smart Contract team at Maker, I am a mandated actor as well. I just wanted to tell everyone that tomorrow will be my last day at the Maker Foundation and as a mandated actor. I loved working here and learning a lot from all of you guys. I am stepping down as a mandated actor. Hopefully, I'll have enough bandwidth to come back and help out in the future. Thanks for all the good times, and I hope to stay in touch with all of you. Thank you.
    - LongForWisdom: Thanks for letting us know. I should share the sad faces of those in the chat. It's been great having you around and chatting with you. Anybody else wants to say anything for Lucas?
    - Christopher: I'll say something. I just wanted to say thank you, Lucas, for everything you've done for the project. I've interviewed a lot of people in my life. When we first interviewed Lucas, I walked in with a sort of playbook of how I would go through the interview. He already had all the multi-collateral DAI code up, he was running simulations through it, and he just blew the interview out of the water. He didn't disappoint after we hired him either. You've been super useful. It is probably a bit of a unicorn when it comes to finding somebody who joins a team and comes up to speed and starts working on stuff. It's a significant loss, but we wish you the best in your future endeavors. I hope you find the time to eventually come back and help us see 10 billion DAI or something like that.
    - Lucas: Thank you, Chris, that means a lot. I've loved working for you guys, and it's been great, so thanks for that.
    - Brianmcmichael: This is definitely a setback for the team, but you've been great, and we wish you the best at the next thing.

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[05:05](https://youtu.be/1skpcjr182Y?t=305)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [MakerDAO Contributors compensation brainstorm](https://forum.makerdao.com/t/discussion-makerdao-contributors-compensation-brainstorm/5625)
    - SebVentures brings forth how the DAO will pay contributors once the Maker Foundation steps aside.
    - We had an active discussion started by SebVentures. He initiated a brainstorm around how contributors in MakerDAO should be compensated. It was a critical topic and had a good level of engagement. I encourage people to read if people are curious about that and leave a comment with their thoughts.
- [OPINION: 2021 Till Infinity] MakerDAO: Community Owned and Operated](https://forum.makerdao.com/t/opinion-2021-till-infinity-makerdao-community-owned-and-operated/5642)
    - ElProgreso details his thoughts on retaining and attracting talent as MakerDAO enters a new stage of autonomy.
    - We had a piece from ElProgreso on a similar topic: MakerDAO community-owned and operated, which talks about retaining and attracting talent as MakerDAO enters a new stage of autonomy and growth.
- [TUSD is undergoing a material change to its ownership structure. Is there a process for reducing exposure in the event of a material change?](https://forum.makerdao.com/t/tusd-is-undergoing-a-material-change-to-its-ownership-structure-is-there-a-process-for-reducing-exposure-in-the-event-of-a-material-change/5691)
    - shane points to a recent shift in a decently collateralized asset for Maker. Check out the discussion and share your opinion about what this means for the DAO.
    - We had a threat from Shane pointing to a shift that we've recently just seen in TUSD. The ownership of either MKR and TUSD token, at least possibly the trust token company, has some discussion going on there. We can discuss this a little bit later if we have time because I know a couple of people feel strongly about it.
- We had some other more extensive discussions continuing. Hexonauts, [Sam McPherson introducing dssGovRewards](https://forum.makerdao.com/t/introducing-dssgovrewards/5394) continued to see discussion. As has the thread from MagoCrypto proposing to [mirror Oasis on IPFS.](https://forum.makerdao.com/t/lets-launch-oasis-on-ipfs/5583)
    - hexonaut introduces Rewards for MKR Voting and asks for feedback from governance in this direction.
    - MagoCrypto proposes launching an oasis mirror on IPFS, which raises questions on what it means for the DAO to take responsibility with UI's into the Maker Protocol.

##### Signal Requests

- [Vault Compensation Working Group Payment](https://forum.makerdao.com/t/signal-request-vault-compensation-working-group-payment/5562)
    - monet-supply proposes payment for the black Thursday compensation working group from the system surplus.
    - The vault compensation working group signal poll continues. I believe it's ending soon. I know this wasn't the fondest memory for many of us. Still, if you have opinions on the working group's payment, I will encourage you to leave your comments and vote.
- [PSM Parameters](https://forum.makerdao.com/t/signal-request-psm-parameters/5532)
    - Primoz puts forward some signals to determine the initial parameters of the PSM deployment.
    - We had the signal request for the PSM parameters, which is on-chain this week, and it's now finished. I still haven't checked the results because, for some reason, I always forget each week. I'm assuming it passed.
- Over the last few weeks, I spoke about documenting some of the governance parameters. Those documents are now live. They're on the community development portal and will be linked to relevant polls. Hopefully, this means for users voting for the first time or aren't familiar with the system can understand things, for example, the stability fee, the debt ceiling, the dust parameter, the debt floor parameter, or the surplus buffer, and etc. You can understand what these parameters are, what they do, what they mean, and the trade-offs between changing them before voting. We're also going to continue to work on the documentation. Some of the new things we're bringing in, such as the PSM or the DCIM, will probably happen within the new year. We also had a couple of people asking how the Debt Ceiling Instant Access Module works under the hood and what the gap parameter means specifically. I think documenting that will be useful.

### Christopher Mooney

#### Smart Contracts Team Update

[09:24](https://youtu.be/1skpcjr182Y?t=564)

- Last week we finally saw the DsChief v1.2 activated, which was great; it launched. My palms have officially stopped sweating not only because we launched it but also because we put through the first executive. Now we know that it's working. That was a little unnerving, but I can talk about it now since we're past it.
- Last week, the executive included the DC auto-line for ETH-B. It had UNI and renBTC as collateral types and some number of changes. I think we set stablecoins to zero, and we added an oracle approval for YFI as a proxy. There was an assortment of stuff in there, and all of that went through and passed, which is great.
- This week, we've been working on AAVE, UNI-V2-DAI-ETH LP tokens, and MIP21, which is Real-World Assets. This has been a pretty difficult executive to try and get through. For one thing, it came on the heels of a major executive from last week, so we had to start late on this one. Even with the AAVE edition, I'm sure everyone saw the smart contract bug that AAVE had in their token. That's a little unnerving. The LP tokens require a huge oracle code update to work, and that's been a little bit non-standard for us. Therefore, that process is taking a bit longer.
- Will and I have been working on MIP21, and I regret to say that I think we're going to have to push it off to the next cycle. We're just not finished. I got some of the deploy stuff working, and we're still working on the tests. However, it still needs a big final review because there are still several tests that need to be completed. It's just not quite ready this week, but I'm pretty confident that it'll be prepared for the first round of executives next year. Sorry to everyone who's been pushing on that really hard, but this one slipped.
-  We still have the Dss.exec lib in the review. None of us have looked at it yet, although I think we're going to switch to using that for next year. This will probably happen first thing before we do any additional collateral deployments.
- There's no onboarding work from our team or in general. I wanted to thank Naz for the work that he did on AAVE. I wanted to thank Will for his work on MIP21, and Lucas for the LP tokens. Also, Brian's the one constructing the spell, and Sam, I believe, is still working on his implementation of the PSM. Although you know we have no input into that, everyone's been working really hard to execute the end of the year; thank you.
- I don't think I'm going to go over what we're gonna do next week, and so that's pretty much it for smart contracts since we won't reconvene until next year.

### Nik Kunkel

#### Oracle Team Update

[13:57](https://youtu.be/1skpcjr182Y?t=837)

- Apart from the things that Chris Mooney just mentioned, we've mostly been working on the Uniswap LP oracle. We've had the base code for it for almost a couple of months now. We've just been adding the scaffolding around it in terms of the admin functionality. There's also a fee that Uniswap has that isn't turned on right now. It's not a trading fee, but it's a protocol fee. It's deducted from whenever you mint or burn LP tokens. Therefore, whenever you're adding or removing liquidity to one of the pools if the fee is turned on and siphons off 0.05 percent. We had a back and forth for a while regarding whether it's even worth implementing. It really has such a minimal effect on the LP token price. The much more relevant thing is that you have the one-hour oracle security module delay in an OSM environment. Therefore, you have much more slippage and price difference slippage just from waiting that one hour time period than you ever would from this point zero five percent fee being turned on or off.
- Ultimately, we did settle in the direction of correctness. We ended up implementing it to an extent. It is not ideal because we usually want to code-freeze things a while before we put them into production, but the change is relatively minor. It's basically just an "if" branch off the regular happy path, so it should probably be fine. That being said, anytime you deploy new contracts, especially ones that have the complexity that the new Uniswap LP token has, there's always a risk attached. Not only do we have regular collateral risk, but now we have significant smart contract risk. That smart contract risk is not a surprise to us. We knew that this would be the case and hence why we recommended the debt ceiling to be reasonably low at the start.
- Tomorrow, we get the first LP pair in. Early next year, I would hope that we get a lot more of the other ones in, such as USDC-ETH, WBTC-ETH, and a couple of the other high liquidity pairs. It applies to the SushiSwap pairs as well. Therefore, if there are some high liquidity pairs, this all translates over. But to start with, we'll have the debt ceiling really crippled for the first one. In effect, this will just act as a bounty. If there is some kind of exploit in the oracle contract, someone should exploit it, and we can only lose up the debt ceiling.
- That's the state of things. Now that we've delivered on the LP stuff, we're basically going to start taking a closer look at the real-world asset. That's going to be our priority going into the next year.

### Primoz Kordez

#### Risk Team Update

[18:50](https://youtu.be/1skpcjr182Y?t=1129)

- In regards to collateral evaluations so far, we've managed to perform all of the evaluations that were planned. tBTC is still missing, but it's in the final review, so it should be released soon. We're also looking at the collateral priority spreadsheet to decide which assets to evaluate next. It seems that the highest-ranked collaterals are liquidity mining-based tokens. This probably means we should first have a yield farming feature implemented if we want to attract some demand for this kind of collateral. This is why we started working on the cUSDC crop joint risk assessment. We're currently making simulations on the parameters that were already proposed for USDC; Particularly how a 110% liquidation ratio would work out when we start supplying larger amounts of uSDC in Compound. I hope we can get the risk assessment ready for the end of the year to begin onboarding farming assets for early next year. We were also assessing the situation with tUSD. There was a discussion about wheter we should start reducing exposure to tUSD after this recently announced acquisition from Asian investors. I noted in the forums we had discussed that we will be mitigating this potential risk tomorrow if the PSM vote passes. The executive vote also included to set the debt ceiling on current stablecoin vaults zero. This should be mitigated, but personally, I think there's no real reason to rush at this point because we still might see some of these vaults unwind on their own. Still, it's worth discussing how we could potentially reduce exposure to tUSD and prepare some kind of plan. Whether having some sort of controlled liquidation or selling collateral directly by the protocol remains to be seen. Regarding our other work, we are lately working on improving our value risk models, which are being improved to start accounting for correlations between collateral assets. This should provide governance a good input to start assessing how well the current surplus buffer protects us against certain events. We got a lot of help from Andy, who is another known member from forums. He was accommodating at improving the value risk model, and we should have results soon. Additionally, there was also one other community member. The tool he developed monitors DAI liquidity and DAI flows between larger addresses that he was able to whitelist. This helps us assess the state of DAI markets and DAI holdings. I suggest taking a look at it. That's it from our side this year if anyone has any questions.
    - LongForWisdom: Do we have an ongoing review process for improved collaterals, or is it up to the DAO to act If something changes?
    - Primoz: Is this meant for the collaterals that are already onboarded?
    - LongForWisdom, I think so, yes.
    - Primoz: I'm not really sure how to answer this.
    - LongForWisdom: Do we monitor the developments with the current collateral types and potentially change things if they need to be changed?
    - Primoz: We measure liquidity and assess the risk premiums and debt ceilings if this was the question. When we published the spreadsheet where risk payments and debt ceilings were updated, we went through this every month. We proposed some changes to specific debt ceilings and interest rates. But other than that, it's a regular onboarding process.
    - Frank: Hypothetically, if we had to delist one of the collaterals, has there been a risk analysis for such a situation?
    - Primoz: So far, we haven't had such a situation, but it's a good question concerning how to perform it. Ideally, you lower the debt ceiling to zero, and then you need to have a liquidation plan. There has been no such occasion yet. I guess we could have a framework on how to do it in place. Good point.
    - Frank: Got it, and concerning USDC, are we looking at doing another debt ceiling lift?
    - Primoz: The plan is to reduce the debt ceiling on current stablecoin vaults to zero. In addition, reduce the PSM debt ceiling, which will initially include only USDC, has a debt ceiling of 500 million that was voted. Sam should comment on it, but the idea was to start with USDC. Then, next year, we would begin to including other stablecoins into PSM. If you want to create diversification, we would limit USDC and increase the debt ceiling. So we'd force the diversification.
    - Frank: Got it, thank you.

### SamM

#### PSM Implementation Update

[26:12](https://youtu.be/1skpcjr182Y?t=1572)

- We've got a bit of a new situation this week in that there will be a community executive vote in addition to the regular Friday executive. I'm going to be putting together the community-run executive. The idea is to deploy them simultaneously and have the portal list the Maker foundation's standard executive on Friday as usual. We wait until that one passes and add the PSM executive. Included in that PSM executive are changes to the debt ceiling. All the stablecoins except USDT and USDCb vault will be zero, and the PSM will be added with a 500 million debt ceiling. That's all good to go. Still waiting on the audit. Hopefully, it will be coming in today or tomorrow. All systems are a go as far as I can see. Any questions about this process?
    - Matthew Rabinowitz: Regarding procedure, how are you adding it to the voting portal?
    - Sam: It'll be added just the same. We want to have the regular Friday executive pass first and then list the PSM executive. Whenever it passes, maybe Monday or something like that. Still, it's worth mentioning that we'll run it with a longer expiry because we plan to run it over the entire holiday break. We don't have any other executives coming in. We'll give it a bit longer time to pass because there may be fewer people's availability. I don't know when that's going to pass, but that's the idea.
    - Frank Cruz: We're going to need a push from the community, right? Because I don't see any VCs jumping in. What's the hat right now?
    - Christopher: 63,000 is on the hat.
    - Frank: So we're going to need like 63,000 community members. This is going to be good.

### Amy Jung

#### Community Development Team Update

[29:36](https://youtu.be/1skpcjr182Y?t=1776)

![](https://i.imgur.com/VFpunmB.png)

- Charles and Guy will go through a little bit more high-level end-of-year review. However, I  just thought I would give a little fun positive note of activity. We had some great calls this year, such as the community collateral calls that Juan has been running. We have community calls that David and extended hosts have been running. And then, of course, these governance and risk calls. We also have the community that's been creating Maker Relays, which are summaries of all the different activities for governance to see. We have around six working groups if not more.

![](https://i.imgur.com/FNnrOKY.png)

- This is the one that I really wanted to share with everybody—forum activity. I think we use the forum due to the significant communication that goes in governance. Still, it's scarce that we actually see which activities are involved. Therefore, I did a little digging through and starting with how many likes. We had 25.900 total likes. Everyone's participating in posts that they're liking.

![](https://i.imgur.com/nWtit9V.png)

![](https://i.imgur.com/3s5jxfF.png)

- The total user daily visit: the number of users visiting every day, is a whopping 37k, which's up 582% from last year. The exciting thing is the new user sign-ups. We only had 484 last year, and this year we had 1700, which is up 350%.

![](https://i.imgur.com/4xZskwS.png)

- This is the most impressive one. We had 12000 new posts this year compared to 1500 last year. That is incredible growth as well as the number of new topics that were created.

![](https://i.imgur.com/z5zGGWt.png)

- These are just some brief overviews. I'll be doing a wrap-up that I'll share in the forum. Thank you to everyone who's been contributing to the community members. Thanks to LongForWisdom, the governance facilitator for managing the forum's craziness as well and onward for next year, it's going to be great.
    - LongForWisdom: Thanks, Amy. I will just say those are slightly terrifying numbers from my perspective as the person who has to moderate the forum. If anybody's interested in forum moderation as a role going forward, let me know. But yeah, I think we've definitely seen growth over the last year.

### Juan

#### Collateral Call Update

[33:08](https://youtu.be/1skpcjr182Y?t=1988)

- Yesterday, we had the last collateral call of the year. We did the wrap-up for real-world assets. I'm going to post the link in the chat in a second. We basically had three asset originators, Harbour Trade Credit, People's company, and Fortunafi. The three of them are working with Centrifuge to bring real-world assets into the blockchain. It was quite interesting. Unfortunately, we did not have enough time to explore each project in depth. Maybe we'll have to invite them next year to do a more specific session for each one of them. The YouTube video is already online; Amy posted it. Thanks for that.
- The other thing that I wanted to comment on was what Amy already said. I think we had around 30 projects presenting. Looking back, it was quite rewarding, to be honest. I wasn't expecting that when I started getting a little bit more involved in Maker. I think that people here are too smart and hence too humble to say it, so I guess that I'll have to say it; it's been a pleasure getting to know a lot of you more and seeing your work been really, really good. I'm not going to start giving out names because there are a good 15 to 25 people that I've been enjoying working with and seeing your point of view in different meetings. It's been great. Thank you for that. How's that for a speech, Long?
    - LongForWisdom: It was great. It was short, and I liked it. Brian makes a good point in the sidebar. Juan is most definitely one of those smart and humble people. Please do embarrass him with your congratulations and gratitude when you get a chance.

## Other Presentations

### Charles St. Louis

#### MIPs Update

[36:00](https://youtu.be/1skpcjr182Y?t=2160)

- All right, this is the last weekly MIPs update for the year. It's been a fantastic year with a lot of progress. Before I get into the fun stats, I wanted to mention two new proposals in the conception phase. They will be transitioning into the RFC phase. Just making some comments on the proposals in terms of the formats and structure; The first one is MIP31, which is for active reserve based on the Uniswap V2 contract. Then there's MIP32, which is the PSM for Compound MIPs exposure. This proposal proposes to provide an extension for the PSM. The extension allows the PSM to leverage USDC via DAI using CD. It also converts this USDC to cUSD using the same joint adapter. These two proposals were proposed by Alexis.

![](https://i.imgur.com/O4aZC8l.jpg)

- We have 8 proposals in the request for comment phase, and I've gone over them a few times already. Still, there are a few new ones that I have yet to mention. Those are the sub proposals for domain team onboarding for smart contracts. That is from SamM, which is really awesome to see. Additionally, an onboard risk proposal from SebVentures. We also have the proposal to onboard Juan as the domain support facilitator to work with Amy, who was onboarded during the last governance cycle. We have the governance communication declaration of intent; if it were to pass, it would display the intention of MakerDao to onboard. Or it would welcome a proposal from a governance communications domain team. Lastly, we have the Maker protocol cover with Nexus Mutual, which is also a declaration of intent. If that passes, MakerDao will welcome the proposal for Nexus Mutual to cover maker protocol.

![](https://i.imgur.com/fTHVeQ6.jpg)

- The prenup discussions which are always being discussed are the Throttled Surplus Buffer, The Delegation of Authority, Real estate tokenization protocol, and the PSM based on cDAI.

![](https://i.imgur.com/U925L8n.png)

### Charles St. Louis

#### Collateral Onboarding Review

[39:04](https://youtu.be/1skpcjr182Y?t=2343)

![](https://i.imgur.com/uY7WJdP.jpg)

- In terms of our collateral onboarding updates, we had three governance pools for collateral onboarding that all passed. The executive vote to onboard UNI and renBTC went live on December 11th and executed on December 14th, adding them to the Maker protocol. We have 5 collateral types awaiting the executive vote. That's the RWA-001, 6S, AAVE, Uniswap LPs for USDC, ETH, DAI-ETH, and PAXG. As the other domain teams mentioned, we will be seeing the executive onboard AAVE and UNI-V2-DAI-ETH LP token tomorrow. Lastly, we have the community green light polls for December published on Monday running until December 28th. This is for the DPI index, wrapped FileCoin, and wrapped Zcash. Go and vote and provide your input on those over the holidays.

![](https://i.imgur.com/BSqoNRm.jpg)

- I wanted to get into some stats about the progress we've made over the last 7 months. This is pretty incredible, with two more to be added before the end of the year. It's been great to see all the involvement of every team throughout the year. We have seen 78 MIP6 applications for collateral onboarding. Since launch in May, we've seen 33 MIPs proposed with 20 of them accepted. 44 sub proposals came through with 37 of them accepted and some in progress. At the very least, decentralization is hot right now. I've been speaking to many community members, and the forums are as active as ever. We're going to have a really great 2021. So with that, I just wanted to leave it in a happy holiday. Thank you, everyone, for the great work.

### Guy

#### MakerDAO Year in Review

[42:30](https://youtu.be/1skpcjr182Y?t=2550)

- I'm Guy Brandon. I work with the Marcoms team. I came on to the team at the beginning of the year. I mainly work on blogs at the moment. I dropped a link to our annual review. I'm going to give some edited highlights of developments. Only a few things are of interest to the Maker ecosystem. It's been a rough year, but it was a whole rubicon year for crypto and DeFi. Arguably, MakerDAO was the largest beneficiary of that. At the beginning of the year, multi collateral DAI was a little over 6 weeks old. Within about 3 weeks, the amount of DAI had reached the 100 million mark. That changed dramatically later in the year. We know that DeFi has been a massive driver of DAI adoption but what we've also seen is DAI finding its niche in various different sectors. You can look at the blog post about DAI gaming initiative, which launched in March. One of the critical use cases that we've identified is that DAI is a very attractive currency for gamers for various reasons. We've also seen DAI gain traction in the NFT space, which is growing really fast at the moment. This includes a lot of digital arts and other collectibles. It's carving out a role as a currency for the digital art and culture market, which is really cool. Coronavirus pandemic caused very heavy volatility across the global markets in March, including crypto. That market downturn served to prompt several community discussions around various improvements to the Maker protocol, which have come about in the following months and will continue. There have been a few immediate and medium-term changes. The liquidation system is one of the big ones. We saw liquidations 1.2 launched in September. In the context of major upgrades, I think we can also include the DS Chief upgrade which we saw very recently mitigate the risks of flash voting. It's also worth mentioning the voting portal upgrade, which has made it a lot easier for people to vote. Throughout the year, this process of decentralization that was already well underway has continued and accelerated. At the end of March, there was the transfer of MKR token control to Governance. A major action was the approval of the MIPS framework in April. This was massive step forward for decentralization. I think some of the things that people have shared shows that confidence was not misplaced. The community has been entirely responsible for changes to the protocol since. June was when DeFi adoption really started to accelerate. Then July saw that spill over to the Maker protocol, and that's when we saw total value locked and DAI generation really take off. TVL and DeFi have increased by 2000% this year. A significant milestone for DAI was reached 5 weeks ago when the amount of DAI reached 1 billion, which is a pretty cool milestone. Check out that infographic on the blog if you haven't already. It's well worth mentioning that ETH 2.0 has officially launched a few weeks back. That is going to be a very long process to complete the set of upgrades to that network. but that will have pretty huge implications for ETH, Maker, and DeFi as a whole. The last thing worth mentioning is that Tomorrow's vote around real-world assets is an unprecedented and breakthrough development.
- A few key stats, thank you, Amy, for yours; these are just some edited highlights. Roughly this time last year, we've seen the DAI supply increase about 15 times. We have 9 times more collateral types. There was a mistake on the blog, which will be updated because we finalized that text before the last text was approved. TVL is up almost 8 times. We have 6 times the number of vaults. The last one is the number of integrations has nearly tripled. It has been a pretty impressive year.
    - LongForWisdom: Thank you, Guy; quick correction, the real-world assets spell is being pushed to January. That brings us to the end of our scheduled agenda. Any questions?

## Open Discussion

### tUSD Acquisition

[49:40](https://youtu.be/1skpcjr182Y?t=2980)

- LongForWisdom: Maybe we can discuss tUSD a little bit. I know that's been a hot topic on the forum recently. To give us an overview of what we're talking about. A couple of days ago, Shane posted a thread relating to an announcement from the tUSD team talking about how they have been acquired by another group and would be running it. They're going to continue running tUSD, but they will have different owners. The CEO left a comment in the forum reassuring users that there wouldn't be any profound changes. Any thoughts for discussion?
    - Christopher Mooney: Has anyone figured out who the Asian consortium is at this point?
    - Gregory Di Prisco: It's Tron; they just use that as a cover.
    - LongForWisdom: It's not entirely clear, but there was a similar language used when the same consortium acquired Poloniex, which did increase Tron related content on that site.
- SamM: If we want to take the route of unwinding exposure, there are two ways to do that. We could wait for liquidations 2.0 and turn them on. That could work. Another alternative is to liquidate the current tUSD vault into the tUSD PSM when we add that in and then maybe set the out fee to 0% to clear it out as fast as possible.
    - Christopher: I think it would still stay on the books. There's probably an alternative liquidation where we create a custom liquidator that can be called. It gets the collateral that the liquidator then cycles on the market for something like USDC, gUSD or PAX-USD and then puts that into the PSM. Thereby getting the DAI back and paying the position. If we would do that, then whatever delta exists on the market for those pairs will be accrued as a loss. It's going into the collateral buffer or the system surplus buffer. Those are options.
    - LongForWisdom: Any option that involves liquidation potentially upsets a subset of users. Although we assume that those vaults have been abandoned, there's a good chance that some of them haven't, right? Especially now that the stability fees are 0%. There's a good chance that some of the creators of those vaults are just holding them.
    - Gregory Di Prisco: Is it possible to turn on stability fees so that the large ones are under 101% at least?
    - Christopher: Almost the entire thing. It's as though 51 million tUSD is already underneath the collateralization ratio. Almost the whole lot can be liquidated.
    - Gregory: Those users wouldn't have much reason to be upset.
    - LongForWisdom: Well, they may because they knew there were liquidations enabled when they set up the vaults. Maybe it would be fine, but I would expect someone to be annoyed.
    - SamM: We definitely need to give fair warning about that, but I mean, we are going to need to introduce a stick to these vault holders at some point; otherwise, they'll just hold at 0% fees indefinitely and get a no-risk short position on DAI.
    - BrianMcMichael: There's no economic reason to come back for that anyways unless they buy DAI for a low price, which we haven't seen in months.
    - Christopher: In general, we should give a fair amount of warning and create a custom liquidator in the next year that lets people know that okay, this is going to start liquidating people, and as it liquidates them, it moves those positions over into the PSM. They can top up or pay their positions down if they need to. I think that's the right approach. It lets them keep their short position if they want. Otherwise, they have to pay it back.
- Lev: Since we're doing so much for the stable coins, it would be very useful to have a `flipper` module that sells stuff at a DS value over a private price that we could swap into situations like this where governance would say they're happy to get rid of the tUSD or on 1 basis point below the dollar. Thereafter, you can put that on and see how long it takes to clear. It's basically a PSM for liquidations, and it would be simple to implement.
    - LongForWisdom: Yeah, that's a good point.
- Primoz: No need to rush today, but we need a plan. There may still be some unwinding. I'm just looking at the vaults, and 10 million vaults are positive. If they unwind when PSM is enabled, there should be a small profit. Maybe we see some unwinding. I think that if someone starts blacklisting tUSD at Maker tomorrow, the whole acquisition becomes worthless. Still, of course, if something wrong happens, we need a plan before it happens. Suppose we need to wait for liquidations 2.0. In that case, I think we can focus on the one Lev proposed where we adjust the `flipper` and set some sort of price to measure the cost for Maker. The benefit will be higher because those vaults have some additional value of over 100%. The PSM idea makes sense to me.
    - LongForWisdom: It's worth mentioning that no one necessarily decided that we need to get rid of tUSD right? That's the whole debate.
    - Juan: It's good to speak about a plan for any collateral type we may have in the future. We need to make sure that we have a decent plan, including communicating to the vault holders. Preparing for any emergency doesn't mean we need to pull the trigger after we know the plan.
    - LongForWisdom: Good point.
- brianmcmichael: Regulators are going to push even harder in 2021 and beyond. Stablecoins can potentially provide an existential risk to the protocol because of the blacklist risk. A lot of people think that won't happen. Still, there are talks in the process that it might.
    - LongForWisdom: Good perspective there. We need to have some sort of plan in place to deal with stablecoin related issues.
- Joe Quintilian: Just an idea. At some point while we transition to the full DAO here, perhaps somebody can come up with a MIP where we have a governance relations person that works for the DAO. That way, we're included in the conversation with USDC, PAX and everyone else.
    - Juan: You looking for a job, Joe?
    - Joe Quintilian: I have enough already, but that's just an excellent point that's been brought up.
    - Juan: We need to have a plan or at least some guidelines that we know there, and we can follow when it happens. Brian has a great point.
    - Joe Quintilian: I still think they're going to be worked out. I think we'll see an explosion of growth with stablecoins next year. Our most significant role is managing the risk. Yesterday on CNBC, Glen Hutchins, the former head of the NY Federal Reserve, came out and said stablecoins are exploding and will continue to do so.
    - LongForWisdom: Thanks, Joe. You're always welcome to comment.
- Gregory Di Prisco: I want to point out that there's a potential alternative to taking on stablecoins to maintain the peg, which is to set up a structure as Matt has with MIP21. To have a trust where we can potentially send DAI with the express intent of that trust selling DAI and holding dollars in a bank account. At least that way, the beneficiary of that trust is the Maker holders, and there's no blacklist risk.
    - Sebastian: You could be blacklisted by the government.
    - Gregory De Prisco: They would have to go through the judicial system to freeze them. They couldn't just click a button.
    - Mathew Rabinowitz: The issue with stablecoins is that Circle has the sole and absolute authority to do it by themselves at their discretion. People have recourse if they do that. But it is up to them if they decide to do that. Something like that could work, but the challenge is that the deposits are only secured up to a certain amount with the FDIC. The next follow on is if that account has an investment and adviser. You were allowed to buy U.S. treasuries with it. Now you've taken it one step further where it's backed by treasuries at this point, which is the full faith and credit of the U.S. government.
    - brianmcmichael: Uniswap LP tokens are going to help a lot. We can put tokens in USDC and USDT pairs, and they're both black-listable on their own. It's possible that the Uniswap exchange could get blacklisted. However, we can still extricate the tokens from our system, and they'll be dealt with in the greater DeFi ecosystem. There is a lot of access to liquidity there, which is a lot safer for the protocol.
- SamM: I see a trend as protocols keep building on top of each other. This blacklist is going to turn into you blacklist all of DeFi and less of blacklisting specific addresses. Circle will probably not want to ax all DeFi USDC. We either go down together or we don't. That would be a death sentence for their currency.
    - Mathew Rabinowitz: They've already done it once or twice under totally justified circumstances, and there are mechanisms to help offset stablecoins. One of the benefits of doing the PSM model, in general, is that we're going to know this is how much we need to displace continuously and with precision.
    - SamM: Yes.
    - Christopher: It's actually my favorite aspect of the PSM.
    - LongForWisdom: It's something I think is really cool as well.
- Christopher: We have moved off from the original topic, but does anyone have other opinions about tUSD, its change of ownership, and possibly whether Justin Sun and Tron are in control of it?
    - Juan: I think Greg brought up excellent points in the forum about the custody of the tUSD changing and then if the blacklisting function will go towards the so-called consortium. The date is what should give us a sense of urgency or not. Regardless, we should work towards something, but the urgency is not clear right now.
    - Christopher: So we don't have a date yet?
    - LongForWisdom: No, the CEO said several weeks. I asked him to be more specific, but we may not get an answer.
- brianmcmichael: Maker is a risk protocol, right? Every token that we take on gives us some amount of risk, and the idea is that we offset that with the stability fees. That's the insurance premium, right? We might decide the risk premium for tUSD is too high for anyone to actually use it, and then at that point, we may have to delist it. I don't think we should completely throw it out. We just need to manage the risk now that it has changed.
    - LongForWisdom: Yeah, that's a way of putting it.
    - Matthew Rabinowitz: If we just take the central bank's corollary to a banking model, banks cannot change hands without receiving consent from a central bank. In this context, it happened without consent. By looking at the numbers, a party could decide to mint DAI based on it. I agree with what you just said about the risk parameters and the risk premium associated. Still, in parallel to that, my personal vote would be to lower the debt ceiling immediately to inhibit taking on additional risk until we quantify that in parallel to raising stability fees. If the tUSD that's outstanding is potentially already underwater. It's more about limiting the damage as much as possible.
    - Sam: The debt ceiling is going to zero in the PSM vote.
    - LongForWisdom: On their list, it would be Friday, but potentially maybe Monday or Tuesday.
    - Matthew: That's making the assumption that those things pass in sequence.
    - LongForWisdom: Yes, you're right. that is not guaranteed, obviously.
- Frank Cruz: With regards to the consortium of tUSD, would it be a vote of confidence if a16z stays on board? Speaking of a16z, Horowitz got named to the Coinbase board of directors. I think that is a vote of confidence for DAI, in my opinion. Just wondering what you guys think of that if they stay with the consortium. I know they invested in tUSD. What is their thinking behind going to Tron? It would be nice to know are they doing it because they don't see the scalability in Ethereum. They want to go to Tron, and maybe they'll go to Algorand next. These are questions that we just don't know yet.
    - Lucas Vogelsang: I don't know about tUSD, but a lot of the other US Dollar backed stable coins are shipping versions of their token on every blockchain out there. I think the change of ownership is more of just them doing a token for Tron and seeing how others act. I know quite a few other token projects in the Polkadot ecosystem and so on.
    - Frank Cruz: Lucas, in your opinion, if a16z sold their stake in tUSD, How do you view that?
    - Lucas Vogelsang: I wouldn't weigh it that much, to be honest, because most of these VC funds don't actively manage their portfolio. Certainly, if they write off a project, they won't care about trying to sell it. Of course, maybe they would but not because a particular VC fund sells or doesn't sell. They've made a bunch of other bad investments. I think that's not a vote of confidence.
- LongForWisdom: Cool, alright, if no one has anything else to add, we'll end the call here. There will be no meeting next week.

#### Links from Chat

- [Maker Year in Review](https://blog.makerdao.com/makerdaos-year-in-review-2020/)
- [Collateral calls recap](https://forum.makerdao.com/t/all-your-collateral-calls-are-belong-to-us-2020-recap-upcoming/5718)
- [RWA call](https://www.youtube.com/watch?v=6R3Px59h2z4)
- [TUSD post](https://forum.makerdao.com/t/tusd-is-undergoing-a-material-change-to-its-ownership-structure-is-there-a-process-for-reducing-exposure-in-the-event-of-a-material-change/5691)
- [MakerDao Yearly Review](https://blog.makerdao.com/makerdaos-year-in-review-2020/)

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
