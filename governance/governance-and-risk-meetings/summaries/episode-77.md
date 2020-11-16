# Episode 77: March 12, 2020

## Agenda

- [00:00](https://youtu.be/WuW0e6axaHQ): Intro with Rich Brown
- [7:01](https://youtu.be/WuW0e6axaHQ?t=421): Migration with Primoz
- [12:54](https://youtu.be/WuW0e6axaHQ?t=774): Debt auctions discussion with Cyrus
- [18:02](https://youtu.be/WuW0e6axaHQ?t=1081): Keeper Discussion with Smart Contracts Team
- [40:40](https://youtu.be/WuW0e6axaHQ?t=2440): Risk Discussion with Cyrus
- [56:34](https://youtu.be/WuW0e6axaHQ?t=3394): Ending Discussion

## Video

<https://youtu.be/WuW0e6axaHQ>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/WuW0e6axaHQ)

- Hello everyone, and welcome to the March 12 edition of Scientific Governance and Risk. We had presentations scheduled today, collateral onboarding and collateral risk, but there have been emerging developments in the market to discuss. At Maker and in the ecosystem, in general, it's all hands on deck.
- We had a debate about having this call; I think we should have calls even if the schedule changes or if the world around us is challenging. Today is "YOLO themed," where we're going to watch the market-situation develop and discuss what's happening. I'm open to business/agenda as usual too. Communication instead of silence is far better.
- Give us feedback about the call. We're open to suggestions or ideas.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

#### General Discussion

[2:54](https://youtu.be/WuW0e6axaHQ?t=174)

- Brian: There was a 30% drop in ETH price this morning. Oracles couldn't get price updates through because the network gas price was over 100 GWEI. That has been resolved as of now and has spurned collateral auctions. At this point, it's speculation, but some keepers have told us that high gas affects their transactions getting through. There is one keeper executing lowball bids of close to 0 Dai, utilizing 300 GWEI gas prices, but there aren't counter bids against those. The system is in a negative surplus, and minting new MKR currently has a two-day delay.
  - David: For the auctions that have zero bids, do they go through three days delay where people can add bids to them still, or do they close at a 0 bid?
  - Brian: They wrap after 10 minutes if there aren't other bids.

[4:58](https://youtu.be/WuW0e6axaHQ?t=298)

- LFW: is \$0 a valid bid?
  - Kurt: Yes. Someone is getting a lot of ETH for free.
  - LFW: That's not great.
  - D: So the person who is liquidated, they get no collateral in return, and their position is under-collateralized.
  - Kurt: They were already under-collateralized. But they don't get an amount back that they should if the markets were operating efficiently. You always expect to lose some amount of ETH, but these \$0 bids cause Vault owners to lose even the ETH they would have gotten back.
  - `(From Maker Chat)` Kurt: it's impossible to actually bid zero, most of the bids that were described as "zero" were actually one wei. 10^-18 Dai is close enough to zero for all practical purposes, of course.

## Analysis

### Primoz

#### Migration Analysis

[7:01](https://youtu.be/WuW0e6axaHQ?t=421)

![](https://i.imgur.com/8IPR35X.png)

![](https://i.imgur.com/Zt6Z7DN.png)

- Migration is doing much better than in the recent few weeks.
- Over the last few weeks, Sai slightly was pretty stable, even experiencing a small increase about a week ago. Then, three days ago, we noticed a drop in Sai supply along with some larger CDP repayments. Now, the Sai supply is about \$20 million, which is about 1.5 million lower than it was about a week ago.
- As I said before, it was mostly flat, and this decrease came mostly from 2 larger CDPs migrating. This happened because before CDPs were defending CR by depositing additional ETH. This was done to avoid repaying their debt.
- As ETH started to really drop heavily, some of these CDPs capitulated and migrated to MCD to close their positions. I'm guessing that the fallen ETH price forced this migration, as the two events coincide.

![](//i.imgur.com/bMGnn7R.png)

- This chart shows how many CDPs migrated per day. There were 5-10 CDPs migrating per day, but a steady increase can be seen in the last few days.

![](https://i.imgur.com/fnVzpvA.png)

- Here is the breakdown. About \$1.5 million Sai was replayed fully to mostly three larger CDPs. There are about 64 CDPs in total and about 81,000 Sai fees paid in MKR over the last few days.
- Also notable is quite a bit of minting in the last few weeks: there has been new minting activity, likely from keepers minting to provide SCD liquidity.
- The current drop in price corresponds to a lot of CDPs being liquidated. There were `bites`, but the auction is still not closed at 811,254 Sai below 150% We should expect penalty fees to cover from these undercollateralized CDPs. Net, this will be a positive outcome as the system will be getting more than just the SF.

![](https://i.imgur.com/2XAcekR.png)

- Here you can see how many SCD CDPs are below the liquidation ratio that are still not liquidated.

### Questions and Discussion

[11:36](https://youtu.be/WuW0e6axaHQ?t=684)

- Rich: Is there a trustable resource to track the debt of SCD and MCD systems right now, and the general health of the vaults?
  ![ General Collateralization Ratio](https://i.imgur.com/S1ZSXlc.png)
- Primoz: [saistats.com](https://saistats.com/)
- R: I was thinking about something a little more detailed. Is Makerscan up to date?
- P: Makerscan only shows the top 100 CDPs. There is also [mkr.tools.](https://mkr.tools/)

## Debt Auctions

### Cyrus

[12:54](https://youtu.be/WuW0e6axaHQ?t=774)

- The Debt auctions have a two-day trigger delay built-in. They won't begin for two days after the liquidation of the vault. This morning liquidations started. In a little less than two days, the debt auction will kick in(subsequent [executive vote](https://vote.makerdao.com/executive-proposal/adjust-multiple-risk-parameters) changed this to 6.5 Days). The issue of \$0 bids does not apply to debt auctions since they're structured differently. The current set up is as follows:
  - MKR `lot size` parameter is 250, and the `bid amount` is 50k Dai. It will attempt to offer the market a floor price of `250 MKR at 50,000 Dai`. This translates into a cost of $200 for MKR and can be thought of as the minimum price. If that auction doesn't clear, then it reinitializes at 20% lower. This would be roughly $160. It will keep dropping the price by about 20% until it receives bids and clears.
  - LFW: How long does the period go, where nothing happens, and there is a reduction in price?
  - Cyrus: That's the `tau` of 3 days, which is the max auction length. This means that if no one bids at \$200, there will be a three day period before the re-initialization at a 20% decrease.
  - What's interesting is that Governance has the option to tinker with these parameters if we're aware of the trade-off. If we don't want to mint MKR at too quick a rate, we could increase the `Debt Auction Delay`. That means bad debt in the queue can sit longer, for however long that may be. The two-day delay exists to give the collateral auction time to finish. We didn't have to worry about that until now. We wanted to provide keepers time to get their bearings and figure out what price to bid for MKR.
  - Debt auctions have significant different game theory in them versus collateral auctions. You can't arbitrage as quickly. There is a lack of clarity on what the clearing price might be. For whatever reason, it may be a good idea to spread them out over time with that debt sitting in the system.
  - Classically, the optics of bad debt sitting doesn't look great. Still, given that the ETH protocol layer is so volatile with gas prices, the community might find it a suitable trade-off to lengthen that out knowing that the bad debt may eventually clear.

## Keeper Discussion

#### Smart Contract Team Proposal

[18:02](https://youtu.be/WuW0e6axaHQ?t=1081)

- BMM: We've also discussed with the smart contract team to lower the ETH DC. We're considering raising the system debt surplus to give us some more padding in the future against similar occurrences. We're also recommending possibly lowering the ETH Stability Fee because we are above peg and lowering the DSR to a broader band to help recapitalize the system. I don't know how to propose that as this is a governance call.
  - Cyrus: Yeah, I think certainly lowering the Debt Ceiling for ETH is probably the most significant. Fortunately, we didn't hit any OSM risk on the drop. It was closer than we would have liked. Right now, there is a \$50 million empty buffer in the ETH debt ceiling that should lower immediately. In terms of the SF and DSR, that is up for discussion.
  - BMC: Also, we should consider using this time to raise the surplus buffer. Right now, it is at 500,000, which is an arbitrary number. Now that we have real-world experience of a market drop, it may be time to raise that.
  - Cyrus: Raising the surplus would still not have been enough to cover this bad debt. Ironically, this was going to be the subject of next week's presentation

[21:18](https://youtu.be/WuW0e6axaHQ?t=1278)

- Dawson: Should we talk about how auction mechanics will change in the future for debt auctions?
  - Cyrus: We don't currently have any issue with how the auctions work now.
  - D: The collateral auction issue?
  - Cyrus: We're going to wait until post-mortem to see precisely what the issue is before we discuss what the collateral auction changes should be.

[22:08](https://youtu.be/WuW0e6axaHQ?t=1322)

- Kurt: What are some medium-to-long term changes that we can make to the collateral auction?
  - Cyrus: There's nothing we can do for 24 hours because of the GSM.
  - K: We should discuss the critical issues to solve and discuss immediately.
  - Dawson: Is the most directly beneficial thing, to be participating in the auctions?
  - BM: Absolutely, the more keepers online, the better. This is venturing on speculation, but it is possible that some of the keepers online ran out of liquidity
  - Kurt: Two issues: 0 bids increase system debt and increase the amount of debt in flop auctions. The other thing is that if you're liquidated, you get nothing back. They lose all their ETH. Typically, you get a fraction of your ETH back, but in this case, they get nothing. The system has no resource for paying them back if they got screwed. Right now, the CDP holders are getting demolished.
  - Samm: I'd like to add that this is a severe point. Vault holders could lose everything, and there could be a lot of positions closing when they become aware of this.
  - K: And combine that with how congested the network is, and how high gas prices are, it is much harder to close or reinforce a position.

[25:04](https://youtu.be/WuW0e6axaHQ?t=1504)

- SamM: Should we consider emergency shutdown?
  - Kurt: I do not have MKR to vote with, but if people want to consider that, now would be the time.
  - Matthew Rabinowitz: What can we do to fix this? An ES is a catastrophic move. Is this a critical issue or a catastrophic one?
  - BMM: More than anything, we need to get keepers online and purchasing at auctions.
  - Cyrus: To what extent is this a lack of keepers issue vs. an auction issue as it relates to the ethereum protocol.
  - K: My view is that it's a problem with either the lack of keepers or their ability to bid. One keeper currently has a massive amount of capital from these auctions, and it can continue outbidding.
  - Andy: That one keeper is sitting on around 100,000 ETH
  - LMC: Because of the gas price, all of the other keepers trying to do the right thing are blocked.
  - BM: The only other thing they can do is outbid, which is suitable for Maker. The problem is when they get away with near 0 bids.
  - LFW: The other keepers aren't incentivized because they know that one keeper will just outbid them. There's no need to pay gas prices nothing.
  - Dawson: I don't think this is a protocol issue on Ethereum. I think this could be solved with a different type of auction. I think the problem is you have to submit a bid at the time of liquidation. Instead, collateral could be auctioned toward pre-registered bids at some percentage below the market rate. In this way, you can allow people to state what they are willing to purchase, effectively stacking liquidity relative to the market price of collateral being auctioned. This is done in advance, rather than waiting for insurance to be sold. This does away with transactions, avoiding the gas price issue in the issue.
  - BMC: That could essentially function like a market-making order book. I like it.
  - K: It would be a 3-month engineering project.

[28:46](https://youtu.be/WuW0e6axaHQ?t=1726)

- K: Taking a step back, ETH price has currently stabilized. So at some point, the liquidations will stop. The Keeper who is bidding at 0 will have nothing to bid on and, therefore, cannot hurt us. I'm not sure how long it will take to burn itself out or how significant the damage will be once it happens, assuming ETH doesn't take another nosedive.
  - MatthewR : How difficult would it be to change the market price in the auction set not to be 0 but still give enough value for arbitrage and thus for keepers to bid. Perhaps something like 50%.
  - K: Something like that could be pushed out pretty quickly, given the 24-hour delay. It would undoubtedly be an intermediary response and may not help in the current crisis. If ETH crashes in 5 days, this will make us more prepared.
  - MatthewR: While it's not desirable, this proposed solution seems better than ESM. I know decisions should arise in forums, but I can speak faster than I can type, and this is my recommendation.

[31:37](https://youtu.be/WuW0e6axaHQ?t=1897)

- R: This is an unusual circumstance. We've discussed technical emergencies and expediency in decision making. Now we should consider if this is a monetary emergency warrants expediency. LFW and the risk team should discuss emergency protocols and what we should be voting on tomorrow. We have to vote tomorrow, decisiveness for an executive shaped by current events would be good.

[33:07](https://youtu.be/WuW0e6axaHQ?t=1987)

- Rich Brown: Taking the role of the average joe, I've looked at the keeper docs, and I couldn't figure it out. Do we have resources to quickly help onboard a large number of keepers in the system?
  - Vishesh: I agree that the keeper system is somewhat complicated. The narrative near MCD launch around keepers was that they are a hyper-optimized and extremely complicated process. This competition was pushing the most optimized keepers to outcompete others. Right now, the problem is we don't have enough keepers. To that extent, we need someone to come in and make these keepers more accessible.
  - This circumstance is an essential and expensive lesson in liquidation mechanics for securing people's funds on the system. That was true in SCD. The ability to lose money in the auction system is faster and requires a robust network of liquidators. Accessibility is something to strive for.
  - MatthewR: We cannot allow the price to be 0. There needs to be a market incentive for maintaining the Keeper, but we do need a floor for the price. This is why I suggested 50%. The number is less significant, but it cannot be zero. I agree; this is a painful but essential lesson.

[36:30](https://youtu.be/WuW0e6axaHQ?t=2190)

- Getty: I'm one of the guys with grapefruit trading. We aren't running a keeper because the docs are not that helpful. Making keeper docs more understandable, clear, and crisp would be beneficial. Will make it a priority asap. I would be happy to start hammering this out today.
  - David: Ed Noepel is our keeper expert.
  - K: Keeper experts are frantically working to respond to this issue, but he could help you out.
  - Andychorlain: Chris Moony said they are working to have another keeper up as of a few minutes ago. We will have to wait until then.
  - Rich: Market makers are going to be critical for these situations. Let us see if there is something we can do to get them started. There is obviously a profit opportunity that is occurring right now.

[38:22](https://youtu.be/WuW0e6axaHQ?t=2302)

- LFW: How are we going to decide what we are doing in terms of spells?
  - R: We are an hour or two into gathering all of the threads and speaking with the experts. We won't have clarity until tomorrow. We'll be exploring our potential options for tomorrow's vote. This call is about throwing ideas on the table and making sure no stone has been unturned.
  - LFW: Should we talk about how bad it needs to be before we do an ES? Should we establish a number benchmark for ES?
  - R: Let's get some info from the risk team regarding what thresholds we should keep in mind for ES.

## Risk

### Cyrus

[40:40](https://youtu.be/WuW0e6axaHQ?t=2440)

- Cyrus: I don't think there is a specific threshold or event to trigger ES. This decision is at Governance's discretion. Some rules of thumb to be used are: Is the ESM less harmful than doing a flop auction for \$20 million (as an example, won't be that high). I would personally say that the flop auction is more desirable since Dai will be fully backed.
  - LFW: I'm more concerned about the Vault holders at this stage. If they get under-collateralized and close and get nothing back, they will try to leave as soon as possible.
  - SamM: I just closed my position for that exact reason.
  - LFW: Frank says that that is the risk you take for borrowing, but it's framed as 13% and not **all** of it.

[42:38](https://youtu.be/WuW0e6axaHQ?t=2558)

- Matthew R: For people who hold Dai, what does that mean for the average user?
  - BMM: Dai price at Coingecko is \$1.04, so we're still above peg for Dai holders.
  - MR: The default issue is if you have a vault and the liquidation in there. For Dai holders outside of this, it's there is no issue with collateral.
  - BMM: Dai holders shouldn't receive any losses as a result of this, it's entirely on Vault owners and MKR holders.
  - LFW: Unless there are more drops, then there's not that much liquidity, right?

[44:03](https://youtu.be/WuW0e6axaHQ?t=2643)

- Vishesh: We should chat about price, right? If you look at dYdX, the arbitrage takes the price back to USD 1.02. Much of the trading is at $1.019 or $1.025. There isn't an unbounded run-up, but it is elevated. There is no reason that it shouldn't level out. If it goes to $1.03 or $1.04, then people may start minting and selling. We can start checking the mint transactions, but it is entirely my expectation that it will not run up unbounded.
  - LFW: People will still mint for arbitrage if there is a profit to be made.

[45:54](https://youtu.be/WuW0e6axaHQ?t=2754)

- David: I'm curious about people's views around SF votes, and the DSR spread in this environment?
  - Vishesh: This is a short term effect due to crazy ETH price drops and liquidation activity. Adjusting the SF isn't going to reduce profitability or incentivize more mints. That's a longer-term lever. You can't use that for short term management to getting Dai back to the dollar peg.
  - LFW: Even if it's not to fix the short term volatility, should we not bring it down anyway? It seems like things will get worse before they get better.
  - D: Doesn't that imply "wait and see," though?
  - LFW: Perhaps. But if each price action is downward and they come in waves, they all trend downward.
  - Vishesh: A lot of folks will feel the same, good point. What I'm more concerned about is if Dai goes back to \$1. Then, if ETH is considered cheap, it could trigger a small bull surge if ETH is stable or going back up. Then, we've set up a situation in the future where it's at a higher risk on the peg drifting below a dollar. From a policy standpoint, the SF is about managing Dai trading below peg. Above the peg resettling is an arbitrage mechanism. The most significant risk here is reactivity and, again, set ourselves up for future problems based on how we react now.
  - LFW: I agree, but if ETH dumps further, we're in a worse position.
  - Vishesh: There was a good question about the liquidity crunch, which a SF doesn't fix. I doubt system participants want to participate in short term arbitrage because of that long term cost. SF doesn't factor into short term decision-making process.
  - LFW: Fair.

[50:16](https://youtu.be/WuW0e6axaHQ)

- Dawson: I'm trying to understand the price run-up. To summarize: as the price of ETH dropped, order books on exchanges filled, and folks started buying ETH/DAI and running that price up. Then, the price of DAI/USDC went up because of arbitrageurs crossing ETH/DAI and ETH/USD books. Would this chain effect cause net DAI books to go up?
  - Dawson: Because if ETH is dropping, you wouldn't expect a surplus on USD/DAI unless someone is arbitraging. Unless someone is arbitraging another DAI book like ETH/DAI. (Edit: centralized exchanges like Coinbase do not have a USD<->DAI book) Or was there a surplus on ETH<->DAI because other ETH books were drying up as people were trying to exit their positions to get Dai liquidity.
  - Vishesh: I could see the case for as liquidations are occurring, despite 0 prices, people will source Dai to engage in settlements and pay down positions. A common historical pattern where ETH crashes and Dai price tends goes up. We've seen it in the past before. If other trading pairs exacerbate that, it's possible, I didn't check though.

[52:31](https://youtu.be/WuW0e6axaHQ?t=3151)

- Vishesh: Someone asked about the Sai graph. It's the same situation since they are locked to each other. VWAP looks like a $1.026. Most recent trades at $1.04.
  - Mitote: How worried are you about a drop of ETH to \$100. Will there be 0 Dai bids and auction problems?
  - Cyrus: I think we shouldn't speculate on ETH price. It's beyond anyone's control.
  - Mitote: We could lose collateral, and that's a problem for vault holders?
  - Cyrus: I'm interested in seeing how Keeper liquidity improves.
  - BMM; It's critically important that we get more keepers online.
  - LF: If this guy out-competing everyone with huge gas fees, how much will more keepers help. Everyone else will stop competing since they don't get anything back.
  - Vishesh: I don't want to speculate too much, but someone mentioned that transactions were going through at lower gas prices. They wonder if it's a miner prioritizing their own transactions.
  - BMM: The ones I looked at this morning were at 300 GWEI, well overbidding the gas price.

### End Discussion

[56:34](https://youtu.be/WuW0e6axaHQ?t=3394)

- Cyrus: If we want to lower the SF and the DSR, what should we do?
  - Rich: I'd love for other people to interrupt. We have this risk team empowered as domain experts, and they have the authority to pull us out of the fire. Risk has latitude to put in emergency EVs. Does someone want to start a [Black Thursday forum thread](https://forum.makerdao.com/t/black-thursday-response-thread/1433?), so we can figure out the next steps? We should spend the rest of the day engaging actively in that thread.
  - LFW: Yes, we need to figure out what we are going to do.

[1:01:06](https://youtu.be/WuW0e6axaHQ?t=3666)

- akivasdubrofsky: We need to discuss how to make sure MKR price doesn't go to 0 during debt auctions in two days.
  - BMM: I think the solution is to have Keepers online ready to participate.
  - Cyrus: What are reasonable parameters for the debt auction? To maximize their efficiency, the different options are: 1) delay the start to longer than 48 hours, which we could push out 2) auction duration could be increased once they begin.
  - R: Also, mitigating damage from people exploiting this system. Risk and smart contract teams need to aggressively coordinate today and come up with a proposal for the EV tomorrow. We'll need to discuss what voting for that looks like. We still have this 24-hour delay and need an indication of timelines. If things are taking too long, we will have to initiate something today, or will we need an emergency executive today?
  - A: Is there enough capital between all community participants to buy up this debt? If there is, what is the long term damage to the ecosystem.
  - Dawson: What is the total amount of collateral to be liquidated? Is there a place to see? There is $4 million in debt but still $10 million in the queue to be settled?
  - Kurt: We could look at the collateral balance of the debt contract.

[1:04:11](https://youtu.be/WuW0e6axaHQ?t=3851)

- Cyrus: Here's the rationale for having the debt auction runs quickly; Typically, there is a lack of confidence in Dai's price if bad debt sits in the queue. I'm not getting a sense of instability in Dai. It's too expensive. That would be an argument for lengthening the auction times. Does anyone feel a burning need to clear the debt ASAP, or is it something that can wait?
  - V: Given that there is less risk in the `FLOP` auctions, it makes sense to lengthen out the collateral auctions to prevent someone from underbidding them.

[1:06:18](https://youtu.be/WuW0e6axaHQ?t=3978)

- Ak: I posted about this in the chat, but maybe we should have some kind of underwriters to search out MKR buyers to help us recapitalize.
  - Frank Cruz: You want us to decide to wait for system debt to clear or print more MKR?
  - Cyrus: It's just speculation. If the debt were large enough that the Dai community was worried about price, there would be fears of haircuts. That incentivizes Governance to clear the debt, restoring confidence in the Dai price. There are some situations where the protocol would not operate well with lingering debt in the system, and I'm speculating that this might not be one of those times.
  - Chaser: It would not hurt if we bought more time also by extending the duration of the auction.

[1:10:41](https://youtu.be/WuW0e6axaHQ?t=4241)

- Adam Skrodski: For the DSR spread, it takes Dai from DSR to the market and increasing liquidity. It helps liquidity and recapitalizes the system. What risks do you see, especially if Dai is above the peg? I think this is a quick fix without much risk?
  - LFW: Worst case is we set to 0, and then Dai floods the market, taking it off the peg.
  - Adam: Would it help to recapitalize the bad debt?
  - LFW: It should because we're not paying that portion of the SF to Dai holders.
  - Cyrus: In theory, if the community is fine with bad debt, then SF's accrue until the bad debt clears.
  - Adam: If we put 0 bid auction aside, we should have a mechanism to flash additional Dai to the market. Decreasing DSR helps with that.
  - Vishesh: I was talking about the duration of auctions earlier; the risk is something happening too quickly. If there isn't enough time for other liquidators to come in and bid at reasonable prices, you're risking losing more money.
  - Frank: So you're ok with debt staggering on and letting time pass?
  - Vishesh: Those are trade-offs you choose, but there is a more granular discussion about the values to those parameters.
  - Cyrus: The issue we're experiencing with zero bids is something outside reasonable auction parameters. We're either hitting protocol issues with gas wars or weird liquidity issues. We can revisit, but we don't' have a definitive option.

[1:16:39](https://youtu.be/WuW0e6axaHQ?t=4599)

- `chat` Snaketh4xor How does this debt auction problem affect SAI?
  - LFW: It doesn't, but there are other issues I'll add that to our thread. There is a problem where is Sai is above a dollar. Things get weird.
  - LFW: All the suggestions should go in the thread. Especially the Maker Foundation people, also a summary paragraph of what's happening would be super helpful.
  - Rich: Seconding that, it's rapidly developing, but there are domain experts making plans and suggestions. They need to coordinate; as we have clarity and next steps, they will end up on that forum post. Risk and smart contact teams are prominent, but we're interested in hearing from the ecosystem.
  - LFW: It would be good to keep it short term though.
  - Rich: We'll have to moderate that thread carefully. Expect to mute if people get crazy; we'd prefer to be pragmatic. Apathy/urgency/denial theme is a recurrent theme here when bad things happen, and then we furiously react. Afterward, we convince ourselves that the bad things aren't terrible and move on; it would be great if the ecosystem and this group can move on from that pattern.
  - LFW: We just need to figure out the most immediate necessary options, changing how auctions work or other significant changes can be discussed later.
  - R: We have a Governance ecosystem that incurs operational overhead and moves slowly. If we have a dictator, it would be so much more comfortable, but that's, happily, not the world we occupy. We need to expedite this process and see how agile we can be responding to events in the ecosystem. Offer suggestions and ask questions. Let's find clarity and do our best by EOD.
- Cyrus: Quick recap, it sounds like we're considering lowering the DSR and SF to ease liquidity concerns on Dai, delaying the debt auction to gather more info, sourcing keeper liquidity for collateral auctions (flip), and preparing for the risk of another significant ETH drop.

[1:22:21](https://youtu.be/WuW0e6axaHQ?t=4941)

- Frank: What are we voting on tomorrow?
  - LFW: What we're voting on tomorrow may change depending on this discussion. SF came out to 4% | Sai SF to 7.5% | Activate GSM for SCD change, | change migration contract debt ceiling.
  - Frank: did the votes come in this morning?
  - LFW: 4% won a few hours ago. Presumably, in response to the ETH price drop.
  - Frank: You in favor of that?
  - LFW: Overreacting can cause problems in the future. 4% is quite the change to quite the drop.

[1:24:35](https://youtu.be/WuW0e6axaHQ?t=5075)

- Mitote: Cyrus, does the foundation have internal thresholds for the emergency shutdown?
  - Cyrus: Not that I'm aware of, I don't think that's a thing.
  - Frank: Would anyone recommend that we help pass the DSR spread to 1% since it needs 15,547 MKR to pass.
  - David: If MKR voters want it to pass, they should vote on this sooner rather than later or risk having to wait for the next vote.

#### Links from the Chat

- [Black Thursday Response Thread](https://forum.makerdao.com/t/black-thursday-response-thread/1433)
- [Auction Keeper Bot Setup Guide](https://github.com/makerdao/developerguides/blob/master/keepers/auction-keeper-bot-setup-guide.md)
- [Keeper Pool from Atomica](https://docs.google.com/forms/d/e/1FAIpQLSfekQcjT5up5Uh2W_C2W0U5zJ5miLd5ott_87CW8-dDH75TZg/viewform)
- [Maker Backstop Syndicate](https://docs.google.com/document/d/1miS-snhSYBKwjQHM1MOPnLZZl9i2gj3zTcvuQWecV2M/edit#)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
