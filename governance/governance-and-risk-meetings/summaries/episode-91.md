# Episode 91: April 30, 2020

## Agenda

- [00:00](https://youtu.be/NiHbRlTxhhY?t=2): Intro with Rich Brown
- [4:56](https://youtu.be/NiHbRlTxhhY): Governance at a Glance with LongForWisdom
- [12:40](https://youtu.be/NiHbRlTxhhY?t=760): MCD Ethereum System Liquidation Report w/ Makerman
- [1:05:05](https://youtu.be/NiHbRlTxhhY?t=3904): State of the Peg with Vishesh

## Video

<https://www.youtube.com/watch?v=NiHbRlTxhhY>

## Introduction

### Rich

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/NiHbRlTxhhY?t=2)

- Hello, everyone. Welcome to the April 30th edition of the Scientific Governance and Risk meeting. Today we will be talking about Governance at a Glance. We will hear from Vishesh about the state of the pegs, or even just singular peg. We will be hearing from MakerMan, who has done a fantastic amount of work for the ecosystem generating a report on auctions based on the events of the zero bid auctions episode. He'll be walking us through some of the numbers there and hopefully explain some of the most intimidating graphs I've ever seen.
- I don't want to do too much exposition today, but I want to draw some attention to the very cool development that we see more and more in these calls. Traditionally we divide them into the Governance section, Risk section, occasionally Smart Contracts, and Oracle sections. Those are mostly a representation of the Foundation's bootstrapped and/or internal teams. More and more often, we are allocating time to the community.
- We have community-led teams where the community begins to self-organize and assume responsibilities, get mandated by other members of the community, and simply self-organize in ways that are fantastically healthy. We're seeing an example of that today. MakerMan understood that there was work to be done in the ecosystem, and he had the skills to do it. He stepped up and took care of what I can only imagine was, or potentially will be, an enormously thankless job of modeling the events of March 12th, AKA Black Thursday. If you have a chance, give him a thumbs up in the chats. I think that's the compensation that he gets from the community, at this point, and a pat on the back for the super hard work that this represents.
- I promised to keep it short, and I will, so here's the rest of the preamble: if you have questions, please ask them if you have access to a microphone. If you don't have access to a microphone, type the issue in the sidebar, and one of the co-hosts will attempt to get to them in the opportune moment.
- Discussions happen in the [forum.](https://forum.makerdao.com/)

## Community

### LongForWisdom

#### Governance at a Glance

[4:56](https://youtu.be/NiHbRlTxhhY)

- [Maker MCD Ethereum System Liquidation report and Black Thursday Compensation Analysis](https://forum.makerdao.com/t/maker-mcd-ethereum-system-liquidation-report-and-black-thursday-compensation-analysis/2243)

  - [Liquidation Report](https://drive.google.com/file/d/1oK3zBVKz-tNVeYU1Pezzu2A-7GQqRMRp/view)
  - Not to steal MakerMan's thunder, but the most significant discussion going on in the forum is the discussion about the liquidation report, which he will present later. Lots of voters discussing possible compensation things. If more core community members want to comment on that thread, that might be beneficial.
  - Rich: Depending on how the community wants to move forward, this is going to be one of the most complex operations that need to be organized. That operation requires alignment, communication, stakeholders, and numerous other activities. It feels like the conversation might be narrowing down a bit, and that feels slightly alarming to me. If you consider yourself a stakeholder in this issue or even a trusted third party, please consider hopping into this thread and make yourself known. Also, if you have skills that you can bring to bear, I'm sure that those additional resources would be appreciated.

- [Discussion to change Stability Fee's - Hexonaut](https://forum.makerdao.com/t/discussion-change-the-stability-fee-structure/2258)
  - Hexonaut's post is related to how we currently vote weekly on ETH and BAT together, and then USDC SF separately. He discusses how we can change that structure to make it more sustainable.
  - Sam(Hexonaut): I think you covered the gist of it. I noticed that we added the Dai stability fee, and as we threw USDC in there, we added a vote for it as well. This post is to generalize the structure moving forward. So, when we add the 10th collateral, we don't have ten weekly stability fee votes. I proposed what I think a decent next step would be for generalization.
  - Rich: Can you go over a brief description of what you're proposing?
  - Sam: Sure. Since we have Dai-to-Sai, we have encoded all the fees into the `duty` parameters, the vault specific fees. I'm suggesting that we split the Stability Fee into two portions:
    - The first portion being the `base rate`, which is the global fee. That's the minimum that everything gets set.
    - And on top of that, we have a `vault specific fee`, which mostly is the risk premium. There's some discussion about whether it should be only the risk premium or if there are some other parameters that should go in there. But I want to split it out.
  - Sam: The weekly Dai stability fee remains, and we change that to the base rate vote. For peg stability week to week, we vote on the base rate. The vault specific fees are proposed when we need to change them based on risk premium. In the end, I imagine being only peg vote week to week, and that's the base rate.
  - Rich: I'm enormously engaged with this idea, naturally because it reduces my administration overhead by like 90%, so I love it. Have you had the time to look at this, Cyrus, or is it too early to present an opinion about feasibility?
  - Cyrus Younessi: The idea is something we've all been trying to veer to for a long time now. It's a great idea.
  - SamM: In terms of timeline, I'm leaving the discussion open for a week or so. If everything settles, I'll move on to a signal poll.
  - Rich: Maybe we'll dive into this again next Thursday, maybe do a more in-depth presentation for us, that would be interesting. And also, it touches on one of my favorite points recently: intention versus implementation and the path from one to the other. I like the fact that there's going to be a discussion for a week and moving into a poll as well. We need a review afterward since this involves numerous stakeholders. Let's get some thoughts, considering calendaring and resource allocation.

##### Seeking Signal

[`MIPs` vote](https://forum.makerdao.com/t/the-ratification-timeline-for-the-initial-13-maker-improvement-proposals-mips-and-2-subproposals/2169)

- Most polls are finished now. Does anyone know if the `MIPs` timing poll was successful? I didn't even look.
  - Rich: Yes, it passed. 86%.

[[WBTC] - WBTC Collateral Request For Comment](https://forum.makerdao.com/t/wbtc-wbtc-collateral-request-for-comment/2135)

- wBTC vote is still going. If you haven't voted, vote.

## Community

### MakerMan

#### Black Thursday Vault Analysis

[12:40](https://youtu.be/NiHbRlTxhhY?t=760)

[Black Thursday Compensation Analysis Forum Post](https://forum.makerdao.com/t/maker-mcd-ethereum-system-liquidation-report-and-black-thursday-compensation-analysis/2243)

- Some context: we know when Black Thursday happened. I reported the Zero bid auctions in here, with some numbers in the introduction. Liquidations of 62842 ETH is attributed to 320 vaults.

![](https://i.imgur.com/N63PUyY.png)

- When you look at the numbers, it cost the protocol \$6.65 million. Part of which was reduced by liquidation fees and other auctions.
- Maker governance did stuff: immediately stopped the auction system, changed the auction parameters themselves: lot sizes to 500 ETH, auction duration to 6 hours, adjusted risk parameters and added USDC for Dai liquidity, added a circuit breaker.
- Afterward, the community responded, including a large call for auction front-ends. This response allowed for more participants in the auction system and seemed to have helped. We signaled that we wanted to do something, and I was in this situation from the start. Because Black Thursday was an interesting Black Swan. Specifically, what happened, and how can we do better? I think this will be valuable for us in the end, even if right now it's painful. I was going to refer to all the data sets, thanks to Twicky and Bobface, who contributed data sets. These all are available on the forum.
- I wanted to look at the whole system because to understand what happens in a bad system, you have to look at it when it's good.

![](https://i.imgur.com/hbFZECe.png)

- That table is how this analysis is divided: into natural sections based on assumptions of a properly operating system and where it breaks down. I'm going to walk through the data sets.

[14:53](https://youtu.be/NiHbRlTxhhY?t=893)

![](https://i.imgur.com/Qrod517.png)

- MCD Auction performance vs. Date

![](https://i.imgur.com/snG9lFI.png)

- The second chart is auction performance by vault.
- At the 113% percent mark, Maker got its full 13% and recovered Dai liquidity. With the red dots below, that's the percent collateral returned.
- You can look at the markets below that, that scatter around zero, where keepers made or lost money relative to the market at the time. You can see the discontinuity at 3-12 and 3-13 corresponding to Black Thursday. There was another discontinuity at 3-16 when we opened up and made changes. I also don't have the ETH price chart on here I would like to but don't have the tooling and data.
- You can look at these auctions by time, and that gives you a great snapshot of what's happening for most of the period. Cross-referencing with auction number completes the picture. 3-12 to 3-13 are the days we want to focus on. ID:760 is the first point where we started getting zero bids.

![](https://i.imgur.com/T4AbQSl.png)

- (Editor note: Look at the red dots on the chart line of 20%, that's when the system is recovering an optimal amount of collateral after collateral auctions)
- Keepers come online and then bam; another chunk flew out at around 1200. Keepers came in around 2200, and we almost hit 20% again, then another discontinuity. Something was off, and auctions started getting weird.

![](https://i.imgur.com/4QxtJ60.png)

- You can look to the blue dots, follow my mouse pointer, and see keepers struggle to get online. We could use more analysis, especially as things started to return to normal.

![](https://i.imgur.com/CRInDuG.png)

- Auctions go down, but in time context, it's hard to understand the where on this graph. Trying to figure out the post-AGC (Auction Governance Change) at this end of the graph. That lays out what happened in auctions dot by dot.
- The blue line is the tab; I set to 113% because anything below 100 means the protocol loses money. The discontinuities are more clear on this graph, but you could zoom in to see each point where we hit zero. The red line is the collateral returned. In good times we're getting 20%.

[19:16](https://youtu.be/NiHbRlTxhhY?t=1156)

- Rich: All these spikes and peaks are they correlated to a slowdown? Or gas fees in the network, or is there another circumstance?
  - MM: Throughout this whole period, gas fees were around 300 GWEI. It was challenging. You'd have to do that analysis block by block, which I didn't do. The data is on-chain but good luck! This data set frames a specific context: "under severe liquidation stress and compression, what did you think you could get in a fair auction system when you get liquidated?"
  - MM: As a user, one might be like, "I read all the information, I understand that auction performance in a black swan could be instant." If the OSM is coming down fast, you will get liquidated, and get nothing back, and the protocol will lose money. No "if's, and's, or but's" about this. If the price is moving almost 20% every hour, the system is sending out liquidity hard and fast; then, the markets couldn't handle it. Everyone was trying to do everything at once led to a huge gas increase on Ethereum.
  - Rich: it seems interesting there are exogenous forces. Well, there are other factors at play here, and I would be happy to hear from other people with better analysis than me. We have several auctions happening at the same time, network congestion, and liquidity. These are the three factors that would have impacted the success of the auctions.
  - MM: Generally, that's the impression.

![](https://i.imgur.com/OxrxuVv.png)

- There's also the additional complexity of time: do you look at the auction time as when they `deal`? There's a whole period, of about 10 minutes, where things happened. So what do you call the time stamp? It seems like `deal` time was best since that's when you can act on it and take advantage of the market. You pick a time stamp for some event and then align the data with that. I don't have this by how they were `kick`ed in the first phase. I have it by when they go through `deal`. I didn't evaluate that as an analysis point, you can pull it, you can see when the deal hits and you can see when it's confirmed, we'd need mempool analysis for that. My analysis, overall, gave us an idea of what auctions look like when they're good or not. Thanks to Lev for the formula correction to 24.67% for collateral return.

![](https://i.imgur.com/EC459tv.png)

![](https://i.imgur.com/w6qJUh9.png)

- We're mostly over it now, though someone is overpaying on auctions.
- One can view the red as an indicator for when it got difficult, if you average it all out when it was good, it was around 10%. My question was just to get a look at it. I knew that every data point here was a person, 320 of them. There are hundreds of people here thrown under an onslaught. This analysis is my best to figure out what happened to them and how that looked.

![](https://i.imgur.com/cklMuzw.png)

- Breaking it down from there, I do some more analysis. The vast amount of action is in the Black Thursday and post-AGC period. You still see losses in the pre-AGC and post AGC period. We should not have losses that post to the system. In periods where I think it was stable, the biggest issue was collateral returned. Even in post AGC, where we should be good, it was almost as bad as Black Thursday.

![](https://i.imgur.com/lli4C8j.png)

- I broke these periods of auctions down, looking into bids and breaking it out there to find a result and an average. Though these aren't weighted averages, they don't have the volume underneath. What I saw universally: the one bid auctions nail us every time (in orange). The tab inefficiency was bad. Of course, this was in BT, so it's expected to be horrible. At the first table, 113% tab efficiency should be good, but 0% returned? Really?!? What happened there? That's when it was good. Even afterward, the third table and first row in orange, we have 122 returning 1.88 % with a tab efficiency of 95%; it means we lost money in total.

![](https://i.imgur.com/CHT7ehU.png)

- Post AGC, when it's supposed to be better, we get no zero bid auctions. Which is awesome. But we go and look at the yellow section; we got 12, 13, 16, 14 percent returned in here. These are for three or more bids. You can average them all out again, but post-AGC needs another careful look. I broke this down by lot size.

![](https://i.imgur.com/RRZDo8M.png)

- The smaller lots seemed to perform as good or better than the larger ones. You can easily bid up smaller auctions if you're already on the hook for that Dai. But if you look at the 500ETH lots, all paid barely 3% back. There are 76 out of 142 of those.
- There are some conclusions: the one bid auctions suck, indicated by the data. I try not to argue much. Just present the data.

#### BT Analysis Questions and Comments

[27:39](https://youtu.be/NiHbRlTxhhY?t=1659)

- Rich: This is a huge data dump, there's a bunch of stuff going on here. What do you mean by two bids? Are you suggesting that unless two people are bidding, the auction is invalid?
  - MakerMan: The recommendation is that you want two different bidders, at least that, and then ideally three bids. If you have that as a minimum requirement, it probably will get you a better result, but I didn't have the unique number of bidders at the time. At some point, I will get that data. Possibly add more even beyond that. I have the number of bids, the sequence changes, not who did them, and how many. And you want that data, ideally. So I looked at the number of bids that they received and the lot size.
  - Rich: Do you suppose that it's just too rich for people's blood or people don't want to put that value at risk?
  - MakerMan: That's the conclusion, on the 500s, is that it's just too much Dai. That's the real conclusion. The 500's are just too big.

[29:12](https://youtu.be/NiHbRlTxhhY?t=1754)

- Nik Kunkel: I haven't gone through the analysis in detail, so this is the first time I'm hearing the reasoning, and the data explained. Correct me if I got anything wrong. What I did notice is that you keep bringing up the `OSM` with regards to the price. I'm not sure if that's the right approach here. The `OSM` exists not to say "this is the price right now," but in my opinion, it exists as a buffer to protect the system from oracle attacks. It's not necessarily indicative of what the price of something currently is or should be to our best estimate. Why aren't you using the medianizer price as a reference rather than the `OSM`?
  - MakerMan: I had to do this by hand, if you give me a dataset, it can be added to the data, no problem. I need a medianizer data set marginalized to the right time points for the actual auctions themselves. I only have two datasets that followed that criteria, which happened to be the `OSM` and then Uniswap, which is also on-chain. I have both of those here. It was arbitrary what datasets I had at the time that I could use. The first thing I put in here was the hour price marks in here by hand.
  - MM: The light blue and the purple in Fig1 was me adding the hour marks on a real fine time scale. Ideally, for Black Thursday, this data is here for its own complete sake. That was just one of the metrics. I have a whole bunch of them, take your pick and give me the data for it. `OSM` is not the greatest price point to use; I completely agree! You want a good market price, and the medianizer would probably be ideal. I've not looked at that, so you're probably right. I don't understand it that well, but if it's an average and the collective price volume-weighted, great! Give me whatever you got.
  - Nick Kunkel: I can send you that data. Or send you a script, if you want to be able to ensure data integrity that you could run to collect more data.
  - MakerMan: Both would be nice because then it can be audited. That would be great, yes. And more is better in this case.

[32:28](https://youtu.be/NiHbRlTxhhY?t=1948)

- Rich: Some interesting discussions are happening on the sidebar, and I want to encourage people that have access to a microphone to jump in because the sidebar chat doesn't get captured if you wish to have your comments on the record it's essential that you jump on the mic.

[32:49](https://youtu.be/NiHbRlTxhhY?t=1969)

- Cyrus: I have a couple of comments about the lot size. Potentially an additional factor for decreased efficiency could be the six-hour `TTL` change. Since the lot size and TTL were both increased at the same time. It's hard to say how much each one is contributing to the decrease in auction efficiency. I think it's both, but it's hard to say which one is having more of an impact.
  - MakerMan: Well, I can comment right now with data.

![](https://i.imgur.com/8x6iZ1x.png)

- In table 7b, in the 50-500 lot, we're getting 11% in that range. So there's your data point, telling you that you're already doing better at the smaller lot size. I have a recommendation on this too. We should throw out different kinds of lot sizes all the time. That way, we can get data, gauge liquidation conditions, and pricing conditions over the liquidity spread. You do that simultaneously when you kick out an auction. It's a recommendation I have later. I didn't get to it. I'll pause for questions.
  - Cyrus: I'm not saying that the lot size isn't having an impact. I'm just saying that there are potentially other factors as well.
  - Cyrus: Another comment is regarding the governance trade-off. If we're trying to optimize for the average case or the worst case? One of the issues that were popping up during Black Thursdays was the insane amount of transactions and network congestion. Having to bid on, say, ten times as many auctions creates an additional burden on keepers, which was, I think, one of the main reasons for increasing the lot size. That would result in subsequent auctions, on average, performing much more poorly. But then it would potentially be more beneficial during times of extremely high network congestion. At the very least, it's a trade-off of whether we want better performing auctions on the day to day, or if we want to have better keeper activity during times of high network congestion.
  - MM: Ideally, you would want to sample this in the spread. You want to probe the network with some large size network auctions, right. Do you keep consistently pounding out at 500? I don't know if I have this as a suggestion, but one of the things I was talking about is that the sheer amount of liquidity that tries to hit the market, you need to throttle that. You can't just throw out $5 million, or $3 million, or whatever the real numbers were, half a million at a time, chunks of collateral, and expect keepers to be able to manage all that and do anything with it. Because they just don't have the liquidity to make the bids. They depend on cycling that liquidity over time.
  - MM: You need to think about a rate that your auctions can kick out stuff at, and then do it in a spread that keepers can understand. Because then you can encourage keepers who will deal with the amounts that are in the 1-10 range, or whatever Dai amount, up to a couple of thousands. And then other keepers will go from those couple thousand to ten, and then another chunk of keepers that will do the tens to 500k, maybe, in one lot. But you need to see if those keepers even remotely can handle that kind of liquidity in some way.
  - JoeQ: I don't mind decreasing from 500 down to 250.
  - MM: I agree with your first points, that timing part of this is an issue, in terms of how long you have to keep your liquidity there and how long you have to wait through the market fluctuations to get a bid. The auction process itself could use rethinking, but all of these issues are in play.
  - JoeQ: I think we should keep at least 3 to 4 hours, just in case for people to cycle through until we have a better mechanism. I don't mind decreasing the lot sizes, because the ETH price has doubled, so it's a lot of money to put up right now.
  - MM: I will say that longer auctions are better. I've been missing them as a person. Some of them just run by me, and I move on to the next one. There are not that many in good times.

[38:03](https://youtu.be/NiHbRlTxhhY?t=2283)

- LFW: A quick point on lot sizes, we could try a compromise parameter. 50 to 500 is a ten-time increase. We could try something that's less an increase, like 100 or something.
  - MM: We could do 20, 40, 80, 160, or something like that. Some kind of range like that, in factors of 2.
  - LFW: Currently, we can only do one at the time. There's only one parameter, and the system can only support having one.
  - MM: You're right; it's the contract that would require changing to do to spread out. There's a `lump` function so you can just pick a small size and change how it's fanning out; you just make that more modest and have it do it's fan-out differently, that's all.
  - LFW: If we're talking about the things that we could do immediately, we could try a compromise parameter for lot size. 100 is still twice what we had on Black Thursday.
  - MM: Yes, I agree. If you're going to do anything within the system now, definitely bring it down. And it looked like 50 was pretty good, but if we think we need additional liquidity, I don't think 100 will be enough if we run into another black swan event. 25% isn't that bad. It's the back-to-back 25% that was the real nailer. The second one was coming literally within 24 hours. Bam-bam! And that was after going down; I think 10% from $220 or $210, into the $180 range. (If I remember my prices right here as I was looking at all of this.) Price was about 10% down, and then did a 25% down, it was like Bam! And then it paused for a bit, and then within 24 hours, it did another 25% that took the OSM right down to $100. And then it just came back up quickly to \$120 or something like that.
  - Rich: I'm going to poke people in the sidebar again because it seems that they're proposing innovative solutions that are going to get lost unless that we mention them.

[40:15](https://youtu.be/NiHbRlTxhhY?t=2415)

- SamM: One idea was to throttle, I think that requires smart contract modifications? Another way we could throttle is: to put a sane minimum bid of maybe 20%, or 30% or something, just so they have to stake something, before kicking off an auction.
  - MM: I have that as a recommendation that before you even `deal` it, you can do it as a `kick` as well. That there should be a minimum required bid, that I picked as a percentage of the OSM, just because the OSM is the metric that Maker uses to determine its brain of action. When it's going to act, it's going to respond when its OSM changes, so maybe we should have other things in the systems change, and that's one of them.
  - SamM: It's minor change though, LongForWisdom, regarding the smart contracts. If there's one, it's a lot easier than putting "only so much collateral can be auctioned at a time" throttling mechanism.
  - LFW: Sure. That makes sense. [Chris shared a link to PR fix,](https://github.com/makerdao/dss/pull/107) but that's been done.
  - MM: I would encourage all the noodling on this, just put it on the forums, because I knew that this would spur tons of discussions already from several takeaways on the report, so all the stuff is good. We need it. Put it there. The more data, the better, I think, on the data and analytics.

[41:58](https://youtu.be/NiHbRlTxhhY?t=2518)

- Rich: This is a great conversation, but we're running out of time. Sorry, MakerMan, can we move back to your recommendations at the bottom of the report?
  - MM: I had the points here; you can read them. I have conclusions. The performance of the auction was impaired; we can see it. When they did come up, we got back 10-11%, you can look at these full averages. You can look at the figure and try to guess what you think the number is, what you would expect there.

![](https://i.imgur.com/rMGSotf.png)

- MM: This image illustrates the impaired performance. When we have more keepers, we have this pre-AGC period. There were still auctions even after this event that hit the 10-14% range. And post-AGC, we see examples of two times as many bidders or bids, depends on how you define it. We need to look at the bidders, and the lot sizes increase. But the total collateral is down. For vault-holders, we're kind of sucking at the auction system right now. 3.5% now, and it should be kind of normal-ish versus almost 18% before, and that's even short of the 25% theoretical, but I guess you could expect that. You could data-average this. So, the recommendations:
  - Consider rejecting `deal`s and re-`kick`ing auctions, if you don't have three bids and two unique bidders. If we can do that, I think it would help. We could debate whether it would or whether it's game-able, that's a separate issue. I just have it as a recommendation.
  - If the bid `deal` is not at least some fraction of the `OSM`, you kick it right back into the bidding system. Don't let it go. You need to flag governance to say: am I going to let this one go or not? This should be accumulated and then re-issued with some thinking behind it. If we're looking at like a third of the market, there's a certain point I have ideas on how to liquefy the system, but there's a certain point where price-drop just nails you, and there's not much that you can do about it.
  - Consider staggering and standardizing lot sizes. You want to throw different sizes. I give an idea on how to do that. You want to get a feeling for what markets will do at all times by staggering these lot sizes. If you can do that, you can sample your market by the size of the liquidity, and it will immediately give you statistics on system operations. Just a suggestion, I know it requires contract changes. I suggested going back to a lot size of 50 ETH. It shouldn't be more than 50, given what we're seeing. It's all debatable. Performance issues could be due to timing; it could be other stuff going on; we don't have enough data. I would completely agree with that.
  - It looks that longer auctions do get more bids. If you think that getting more bids makes it better, it should, but then you could go back and look. We are not getting better bids in those bigger auction sizes, and that data stands out itself. Whatever is going on in the bidding system is related to the lot size. Whether it is related to the new time element or not is unclear because we just didn't have big auctions back then. And then, I tried to run this in a compensation analysis. This will be too long if I go through all of this:

![](https://i.imgur.com/ltFGKSL.png)

- You ask, "what do you think the collateral return should be if you thought these auctions were impaired, and you were going to compensate?" It's pretty simple. And when you think about it in Ethereum, it even becomes simpler. You can always reference it to a price somehow, but how you do that, you have to decide it and run it through the data. I kind of refused to do that. Just given the number of scenarios I was already looking at.
- Evaluating collateral return deficit with a fixed number of vaults here, the 114 column in table 8 is pretty much all the auctions that fit the criteria of the nominal collateral return. 113 or under, by definition, should not get any collateral back, and these should all stay the same. This evaluation was a sanity check of my spreadsheet-database asking myself, was I doing the right thing. And hence all these numbers scale.
  - For example, there is a vault whose auction got the full tab, so the system made its 13% off them, but they didn't get collateral back. So you could argue that the system has already made 13% off of several people. Just take the differences with the last two columns. It's up to you to choose whom you're trying to make whole.
- And that's it, you go through the data, and you decide what you think. You can debate what you think the value of the ETH was at the time, and what you want to do about that. I did this only for ETH because it was already pretty time-consuming. I was looking at the data before I even had an idea I was going to have to report this. I was just curious about it. And this finally evolved into this report, and try to get as much data as I could pack into it and then do what I could with my spreadsheet versus what I need as a database. A database I can do queries on, and pull this stuff out, and do graphs, and everything is just cleaner and simpler. I just don't have those tools. So this is only the compensation report.
- You guys can look at it, Debate for yourselves what you think about it. I kind of frame the poll percentages. I made these 5% marks. 0-5, 5-10, 10-15, 15-20, 25-25, above 25, should you want to have that option.
  - Because when you look at zeroes, you're saying "no, not giving you nothing, you should have known better,"
  - 0-5 is like "mmm, I think we should give them something, because they could have done better, but not that much,"
  - 5-10 is "mmm, a little more than not-that-much, but not quite even half of what you think theoretical is."
  - 10-15 is "ah, half the theoretical."
  - then you go above that, for different reasons, and they all seem to be kind of clear framing. I think I make a post on this in the forum.
- You can do different things with these buckets, but it was my suggestion for if we're even going to poll for compensating. You kind of want to look at no and yes, and if it's yes, then "how much?" and how you figure out that as a percentage that you can then put to the full group as "alright, let's approve 13.48%," or whatever the number is. The polling, someone else will handle it. I put that in the forum as a suggestion. The rest of it is just "thank yous." This report could have errors; please audit it. Eventually, I'll release my dataset; I'm paring stuff away that doesn't need to be there, because I have a lot of excessive stuff in my spreadsheet for other reasons, and then references.

[49:42](https://youtu.be/NiHbRlTxhhY?t=2982)

- Rich: I'm going to use that as a segue to thank you, MakerMan, for all the work that you put into this. The main takeaway for me is that there's a lot of data that needs to parsing. This is the starting point, I feel, for the community to begin to solidify around a solution, around a target for ourselves, so this is exciting stuff.
  - MM: One more minute, Rich, to make a pitch to the community. So I just want to say, officially, Rich paid me 4,000 Dai for this report. It's kind of as-is, my work, I consider it done, and releasing the data kind of finalizes it for me. But I want to put those 4,000 Dai up, against like 10 for 1, and I want to raise some money to make an independent analyst group for Maker. So if anybody is interested, I'm willing to do that. I can give an address, and I think that if we can do something independently, raise some funds, get people working on something and do it independently somehow better, I think it would be great. And I would like to manage such a group, to work on analysis and help you guys out. Just an idea, you can contact me by email, it's in my report. That's it. Thank you.
  - Rich: That's amazing and super-generous. I appreciate that. We'll figure something out. The Foundation is enormously interested in bootstrapping initiatives in the ecosystem, so obviously we take arms lengths, people are doing some cool stuff, and we want to help them to do that cool stuff so that we will figure something out. There are grants programs and lots of other programs. We have resources we can bring to the process. That's a great recap, thanks again for all the work that you put into it. I encourage the community to jump into that forum thread and internalize this information. Take a look at those recommendations, and not only talk about the compensation issues, but let's continue the discussion on the improvements to the auction mechanism. In the sidebar, there are lots of really fresh ideas that need capturing somewhere, so I encourage the side chat to add those to the forums as well.

#### Questions and Comments

[53:24](https://youtu.be/NiHbRlTxhhY)

- Akash: Auctions are supposed to be last resort. Right? There should be a way. d I believe DeFiSaver has this, they're using flash loans on your current vault to unwind you before you get to the auction. That would save the user 13% of liquidation fees. Is everyone familiar with this? I think that should be promoted as a useful way to avoid the auction and paying 13%.
  - Rich: There are larger discussions here, and I'll frame it: why auctions in the first place? It's an interesting question. My understanding is that the protocol is looking for the most efficient way to handle price discovery, so obviously, auctions are an enormously efficient way of discovering price. The problem here is that people need to use auctions. So, these questions about increasing the agility of these auctions, the accessibility, and efficiency of them, versus additional ways to source liquidity. I know that lev is in the call, and I don't want to push him under this bus, but I know that lev has done some deep thinking into the auction mechanism, and he might be the person to speak to it.
  - Akash: If you have a small vault, you should be using those tools to avoid the 13% penalty fee. But if you have a large vault, then you could not use that mechanism because you have had a gigantic price impact if you're automatically interacting with UniSwap and pushing the prices around. So if that user is using a large vault, they should not use that automated mechanism because you will end up probably losing more, and you should rely on the auction mechanism that Maker has. But if you're a small user, then you could avoid the 13% penalty fee by just using something like DeFiSaver, where it automatically unwinds you. I hope that makes sense, everyone.
  - Lev: I generally agree with the thing that Akash said first. In general, this doesn't seem to be discussed enough, the `CDP` operator structure, and then it's just taken as a given that these auctions are going to happen, and people are going to be subject to the prices that they get in the auctions. When in reality, you could even make the case that no auction should ever happen because the user is going to be hit with this very high liquidation penalty already, even assuming that the auction goes very very well. The auction might not go that well. And even the most significant `CDPs` on the market, they should be able to get much less than a 13% penalty off-market for their collateral auction. You could say that no one should hold `CDPs` naked without any infrastructure that's going to avoid liquidations, so really an auction happening is a disastrous scenario where some technology has already failed before the auction has even started. And the auctions are not intended to get reasonable prices for users; they're a backstop to protect the system. There's an argument that the penalty should be 100%, in the sense that you never get any collateral back because you screwed up if you allow that to happen.
    - I'm not proposing this as a policy right now. But I'm saying that this is a valid perspective on the system, that the auction is essentially a piece of last resort infrastructure where the situation is out of the user's hand. There's no obligation to them anymore. I think it's imperative to develop and promote the development of `CDP` management infrastructure, whether that's these 3rd party services or smart contracts that you can delegate to, that rescue your `CDP` before it gets liquidated. Or maybe even services where you hire someone to manage your CDP for you. Or, if you're adventurous, software that will execute some trading strategies to self-liquidate your `CDP` under certain circumstances. All of those things, in my opinion, that everyone should be doing if you have a `CDP`. Otherwise, you're going to sleep, and you're saying, "I'm going to wake up tomorrow, and all of my stuff will be gone because I technically screwed up," and I don't think that's right.
  - Rich: There's an expectation with the protocol that people need to actively and continuously manage their positions.
  - lev: The message should be set by this very high liquidation penalty of 13%, which is saying essentially "this is not a handy way of liquidating a position, 13% is crazy." It's saying, "you really screwed up now, and we're trying to discourage this punitively." This is why I would say to Akash's last point that we need to make sure that there are solutions for large `CDPs` that can manage their `CDPs` before liquidation. I don't agree that the right thing for large `CDPs` is to let it go to auctions. You could get a much better price than that going over the counter to a market maker or going on many exchanges. Of course, that liquidity might not be atomically available on decentralized exchanges.
  - Rich: You're talking about best-case scenarios. Would OTC or liquidity providers have saved people heartaches on March 12th?
  - lev: Yes, you would've been able to liquidate at any point on March 12th, probably any of these positions. Probably pretty nasty slippage in the grand scheme of things, but probably less than 13% and also definitely much much less than what they got, which was zero.
  - Akash: I do want to add another point. For large `CDPs`, I don't know if people are correctly using all the tools available. We noticed a large `CDP` a couple of weeks ago went on Coinbase, bought a lot of Dai pushing the price extremely high. In my opinion, the correct sequence of events is: if you had a large `CDP`, you could go to the USDC vault, mint the Dai that you need, close off your ETH vault, and essentially now you have switched yourself to a USDC vault. Then slowly buy Dai and close that up, instead of aggressively pushing prices. I don't know if that makes sense to everyone.
  - lev: I think this is a great point. I agree about the general point on not using the tools available. On this specific example, I would say that compared to `CDP` users that have gotten liquidated, that `CDP` user that you described was much more effective. If I remember correctly, they ended up paying $1.04, or $1.05, so a couple of cents premium over the market before that for getting that Dai, which is much less than the liquidation cost them. Also, with this USDC play, they would then be stuck with the stability fee for some time until they managed to close it up. It would probably be a little bit more efficient. Maybe you would save a couple of cents on Dai, but basically, everyone who's getting liquidated is ten times worse than that. So the low-hanging fruit to me is that no one should be getting liquidated, every liquidation should be examined as some kind of failure.
  - Akash: I agree with that general sentiment.
  - MakerMan: I wanted to echo that as well. The idea that we could have some sort of automated vault management. A liquidation protection system that people can buy. And maybe even 3rd parties can provide through the system or independently. The more, the merrier, but Maker should offer that service itself. However, I think that all solutions should be encouraged on that. I didn't get to look at that data, but what was clear was, out of the $45 million that was liquidated, roughly $13 million went through the Maker auction itself. The rest of it kind of self-liquidated out there in the markets. A lot of the stuff went through other places; it had to. I didn't even begin to look at that. That would be an interesting data point and then analysis as well. Because we got vault holders that are here kind of like "Hey, I self-liquidated vault `2288`," he was the one that kind of nudged this a little bit. He was one guy that self-liquidated and got about 13% of his collateral back if I have him right. Every percent that we lower our fee, and they get more collateral back, potentially. It's an important issue to discuss. You have to have the right mechanics in the system. What that fee is, what you do with it, how you manage it. It's a whole different thing. I also agree with lev in particular that every auction is a failure for some participant. That is bad. It needs to be avoided. What I have it at, 120,000 ETH, out of around 2Million, I'm guessing, and I don't have the exact number in my head at the time. But it was like 10%, 10-15%. It was pretty good for a 50% drop that we only ate through that much collateral. And I think it was due to these secondary agents kind of saving our ass, really. I think we can do better. So I agree across the board.

## Analysis

### Vishesh

#### The State of the Peg

[1:05:05](https://youtu.be/NiHbRlTxhhY?t=3904)

![](https://i.imgur.com/Fkhxnr0.png)

- First things first, I know we have the vote going through about the Dai supply, but the growth of the Dai supply has continued at the rate that we identified around the 19th. That uptick did continue precisely the same pattern. As called out, this is very likely to hit the 100 Million mark and appears to have been addressed now by increasing the debt ceiling.

![](https://i.imgur.com/6boHkul.png)

- What impact is that having? Why, why not? I know a lot of people had questions, with ETH pumping so recently, the question is, what's the impact on the Dai price?
- What we saw around the start of the 29th, we saw this price start to level out and come down a bit. Then, in that exact time frame, ETH continued its run-up. We've seen this inverse relationship between ETH and Dai, particularly when ETH is volatile or crashing. When ETH is rising, and people have confidence in the continued rise of the ETH price, we generally tend to see a reversion of that behavior. There were a lot of trades at or below a dollar, right at that moment that ETH started to jump on the 29th. That makes sense because people are bullish on ETH when it's starting to jump. Potentially we see some selling of Dai and some purchasing of ETH, aka some leveraging behavior. The Dai supply has been increasing, and all of those behaviors kinds of adds up.
- As the ETH price continued to rise, then the Dai trades started to happen at a little bit higher price. We can break that down as to why, but I'm also guessing there was a fair amount of market makers that maybe picked up a little inventory as soon as it dipped. That would make a lot of sense. Given all the events and all the volatility that happened prior, it would make sense for market makers to been cleared out of inventory. And this dip would have been an opportunity for someone to repurchase Dai at a reasonable price. We would love to talk to some market makers to get that data, but if that was the case, then it would push back the Dai price a little bit. The average is still kind of sitting at \$1.015, but if we see some of the trades that continue to the trend more than 1.005 or at a dollar, then this average would naturally come down over the next 24-48 hours. That price reduction behavior would make sense with what's going on with the ETH, but there are certain combinations of market conditions where it wouldn't necessarily need to come down.
- People are in the wait and see holding pattern with ETH itself, and I think that trickles down to Dai because Dai is exceptionally responsive to general market conditions, ETH in particular. I think we would have to wait and see what happens next. I wouldn't over-index on the current Dai price because this has gone up and down in the same 48-hour period, so that data is going to be a little bit screwy. You want to give it a little time to cool down to see what happens next. If anybody was getting alarmed because Dai is not coming down, again: I would just urge a little bit of patience to see what happens next, because ETH did just do a bit of a 180 in momentum, and I think that's going to be throwing off the market a little bit.

![](https://i.imgur.com/cltvARm.png)

- If a lot of that trading activity, when Dai dipped below, were purchasing activities, it might mean that there's a lot of people sitting on Dai that are waiting to lever up at the right moment. Given the ETH price just increased, that would mean that they're waiting for ETH to come back down. I think that's a fair point to consider here, is that I usually mention this "easy come easy go" thing. If ETH price has jumped significantly in a short time frame, I think a lot of people and I would be wary of that and would not necessarily act on it and might just be waiting for that to potentially level back down before taking actions. It doesn't necessarily make a lot of sense that the Dai supply has been continually increasing over the last week or two but that the Dai price has not been continuously decreasing. Except if you consider that people have been minting that Dai but not necessarily selling it. And the reason is if they're waiting for a certain action to happen, stocking up on inventory to take some potential action, or they're just uncertain given the speed and frequency of ETH price changing, and they want things to level out a little bit before they take those actions. These are potential explanations of what's going on, but as always, we can only ever guess at people's reasoning.

![](https://i.imgur.com/lG0zzqz.png)

- Total Sai is down to 10.2 million. Total Dai is up. So that's resuming progress as normal, it seems, in terms of shutdown migration, etc. I know there are a lot of other threads in context right now on what happens when the Sai shuts down, so I'm not going to touch that. The point in terms of the total supply out there is kind of resuming a more normal state, post-Black-Thursday events, so I think that's a good indicator.

![](https://i.imgur.com/XoPs7E6.png)

- In terms of Dai from ETH utilization 98%, Dai from USDC there's 823,000 Dai from USDC, with the current debt ceiling of \$20 million, so that's a pretty small bucket right now, and I think that makes a lot of sense given that it's the more expensive option at the moment. In addition to the emergency parameters and given the fact that there's not a huge need right now for minting and selling of Dai from USDC for auctions, liquidations, etc.
- Just to clarify some of the comments in the chat: there was an executive that passed to increase the debt ceiling. That happened rather quickly. I don't think there are any other relevant questions, but if I missed something, let me know.

## Outro

### Rich Brown

#### Closing Comments

[1:14:50](https://youtu.be/NiHbRlTxhhY?t=4490)

- I'm going to wrap things up a bit. Thanks, MakerMan, once again, for that awesome presentation. Please join us in the forums, that's where governance happens. These calls are broadcast information and consensus gathering but not creating. Join us in the forums where Governance actually takes place. Keep an eye on the portal as some weighty executives are coming our way tomorrow. And thanks to everyone for joining us, this was a good call. Talk to you next week.

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

`AGC`: Auction Governance Change

`OSM`: Oracle Security Module

`TTL`: Time to Liquidation

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Juan Guillen produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
