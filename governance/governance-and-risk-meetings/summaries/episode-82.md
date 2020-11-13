# Episode 82: March 24, 2020

## Agenda

- [00:00](https://youtu.be/erh25lnaIo0): Intro with Rich Brown
- [6:14](https://youtu.be/erh25lnaIo0?t=373): `Flop` unblocking with Kurt
- [38:08](https://youtu.be/erh25lnaIo0?t=2288): Compensating vault holders that were completely liquidated with LongForWisdom
- [1:35:57](https://youtu.be/erh25lnaIo0?t=5754): Q&A Capstone

## Video

<https://youtu.be/erh25lnaIo0>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

## Introduction

### Rich

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/erh25lnaIo0)

- Welcome to the March 24th edition of the Governance and risk meeting. My name is Rich Brown, and I'm the Interim Governance Facilitator. It's been a furiously active 10-days for the foundation and ecosystem since Black Thursday. We've had a ridiculous amount of work. There is a sizeable contingent of people at the foundation that haven't stopped working since Black Thursday. My heart goes out to all of them because I know how that feels like.
  - We have a point in time here where we can take a breath and try to figure out what just happened. Numerous teams, external consultants, and domain experts that are reviewing all kinds of information, going through code and chain analysis, people are making models. They are trying to figure out what this downturn did to the DeFi space. What it did to the protocol, seeing how it responded, and figuring out the ways it needs to be improved in the future. It's a more complicated process than people might expect, and we've taken a bit of heat for not having something published sooner. There is a delicate balance between best guesses or providing empty calories to the ecosystem versus having something with substance, veracity, and science behind it. And we chose the second, so information is coming soon about what happened.
  - But there are other issues in the ecosystem that need to be addressed. We've made some changes to the protocol; the governance ecosystem has come together to adapt rapidly to an environment that's adversarial, which is the environment the protocol was designed for, that we all signed up for. Hopefully, we come out of the other end of this process a stronger and more robust protocol. But, the decisions that have been made in the last couple of weeks obviously are not written in stone. They can be updated and improved upon. That's what the next couple of months will be about as we try to figure out what universe we're living in now and what tasks we need to do to shore up the ecosystem.
  - We have other issues at hand. Like the technical issues with the `flop` auctions that I won't speak on, I'll let Kurt pick that up.
  - The other major discussion we need to talk about is the impact of the 0 bid auctions. This is a huge conversation, and the implications that will be had by our community and ecosystem are wide-ranging and are hard to predict. I'm looking forward to this like you wouldn't believe. It's hard to imagine, but this will become a marvelous teaching moment for our community. Examining this moment will help our community and Governance ecosystem. We have a bad situation here. We're at a point where the community has the levers, sophistication, processes to self organize, and the human resources to pull that together, which is unbelievably heart-warming and encouraging.
  - The discussion to be had is the 0 bid auctions. A lot of people were impacted by that. And the community has a decision to make about how it wants to respond to the situation.
    - There are several threads in the forum: [one](https://forum.makerdao.com/t/black-thursday-vault-owners-report-thread/1566) is more a testimonial of who is impacted, [another](https://forum.makerdao.com/t/compensating-vault-holders-that-liquidated-at-0-bid/1541/2) about potential technical solutions; and the other one escapes me. More about this from LongforWisdom in a minute.
    - What we want to do today is to have a public discussion about what was in those signal threads. What this looks like for our protocol, and what actions the community feels best is to take. From my perspective, this is going to be one of the most important activities that the community has engaged in so far. We've hit a lot of milestones and have done a lot of amazing work. And in the brand new world of protocol governance, this is going to be one of the first tests of "What happens when things go wrong." I'm very much looking forward to that conversation.
  - Kurt will go first, Kurt, do you have a presentation?
- Discussions happen in the [forum.](https://forum.makerdao.com/)

## Flop Auctions

### Kurt

#### Blocked Flops and Debt Auctions

[6:14](https://youtu.be/erh25lnaIo0?t=373)

- [Forum post: Everything you need know about Flop Auctions](https://forum.makerdao.com/t/blocked-flops-debt-auctions-everything-you-need-to-know/1748)
- [Kurt's slides](https://docs.google.com/presentation/d/1nnpPBiOLEWi81q8zrHoIWH4s3iQaKrCSaR68AafzQJo/edit#slide=id.p)

![](https://i.imgur.com/tAM96ie.png)

![](https://i.imgur.com/CZRUorP.png)

![](https://i.imgur.com/kpnHQbh.png)

- **green words represents terms in the system**

![](https://i.imgur.com/XZRLM0v.png)

- **Red words represent alternative nomenclature not used in the code, can be found in literature like [Pymaker](https://github.com/makerdao/pymaker)**
- `Awe` always has a non-zero balance.
- System surplus/deficit aren't precise terms, as the total credit of the system may either be positive (surplus) or negative (deficit) when you subtracted the `Awe` from the `joy`.

![](https://i.imgur.com/cCkmmVQ.png)

![](https://i.imgur.com/XUDFJwJ.png)

![](https://i.imgur.com/sO5dCvp.png)

![](https://i.imgur.com/tRaheZB.png)

![](https://i.imgur.com/w8ShUWH.png)

![](https://i.imgur.com/emagf4A.png)

![](https://i.imgur.com/r4MwvaL.png)

![](https://i.imgur.com/xQAARKl.png)

![](https://i.imgur.com/8Y1rB6z.png)

- In `heal`, debt is healed by canceling out `woe` with `joy.`

![](https://i.imgur.com/CONKo4K.png)

![](https://i.imgur.com/vnK4y2C.png)

- In `kiss`, debt is healed by canceling out `Ash` instead of `woe`.

![](https://i.imgur.com/6H7Kkau.png)

- If we are close to a debt auction, we can use `kiss` as demonstrated below:

![](https://i.imgur.com/sRwmsEM.png)

![](https://i.imgur.com/C15MHik.png)

![](https://i.imgur.com/aQnyby1.png)

- Here, we cancel out the `Ash` with the `joy`.

![](https://i.imgur.com/s51MICF.png)

- This leaves us with no `Ash`, no `joy`, no surplus. We can proceed to a flop auction.

![](https://i.imgur.com/Ukl7pdx.png)

- `Heal` takes `woe` and gets rid of it. That means there isn't enough `woe` to initiate the flop auction.

![](https://i.imgur.com/T7AAgm2.png)

- The system should have been able to flop because the system was in a state where it should have a debt auction to cancel out the `woe`. Instead, the heal function was called, the `woe` was healed, and we could not have another flop auction.

![](https://i.imgur.com/sLq8wET.png)

- Once you miss the flop auction, you cannot restart it without some sort of intervention.

![](https://i.imgur.com/1ENd4ic.png)

![](https://i.imgur.com/73n5utW.png)

![](https://i.imgur.com/fLr6G7n.png)

- We've processed through the whole `sin` queue, so there aren't more flop auctions that are expected in the future. This means that the debt is stuck as `ash`.

![](https://i.imgur.com/V7O3c3f.png)

![](https://i.imgur.com/ksig4ui.png)

- This keeper update requires compliance, which is difficult in a blockchain world. This will make things better, but it isn't a complete solution.

![](https://i.imgur.com/7rEz0PG.png)

![](https://i.imgur.com/2VltPPk.png)

#### Questions and Comments

[13:56](https://youtu.be/erh25lnaIo0?t=836)

- LFW: You mentioned an array of sin for users. Is that the vaults themselves, or the owners of the vaults? What does that look like in practice?
  - K: We'll discuss that more on the next slide. There is no association between sin balances and vaults whatsoever. Backed debt is assigned to a vault holder, but it is not `sin` because there is collateral there, which is backing.

[32:46](https://youtu.be/erh25lnaIo0?t=1966)

- Rich: Do we require a mid-week executive to change any potential parameters, or do we wait until Friday?
  - Kurt: We should do this promptly. With Flop auctions not complete, people will be holding Dai with a multiplicative effect and high demand for Dai. This can affect many people and is especially true given the state of the peg. It would help if we can complete it sooner. Even if we're unsure of the effects, we reduce the number of variables that might be affecting the peg. The sooner we do it, the less chance we are taking that the market conditions will change. If we do it before Friday's Executive, we'll avoid mixing monetary policy with a technical fix.
  - LFW: Once we do this, do we have to wait 6.5 days for flops to be triggered again?
  - Kurt. No, you could start flops as part of a spell, but it would be better to include a hard-coded time for the auctions to stop. There is no 6.5-day delay.
  - Rich: The point I want to raise is that there are issues with continuous approval voting. Urgency/apathy/denial cycles are common, with apathy setting in at the end of urgency. We have MKR on the executives due to the urgency, but once these disasters pass, it gets hard to ratify regularly scheduled executives. There are other factors too, but the flip side is that after 9 pm on Thursday, enough MKR moves before Friday's executive vote and bumps the emergency one out of the queue. We need to consider how much MKR needs to move. If technical and monetary policy go in together, it improves the likelihood that something goes through; this is important for the community to consider.

## Compensating Vault Holders Discussion

### LongForwisdom

#### Compensating Vault Holders

[38:08](https://youtu.be/erh25lnaIo0?t=2288)

- I imagine most of you are aware of these threads. Vault holders are demanding/expecting compensation due to the auction and some extent the oracle system not working as intended. If anyone has thoughts on this, feel free to jump in. The context is: Vault owners were liquidated due to \$0 bid auctions. Also, the on-chain oracle wasn't updating in a timely matter. There are a lot of points on the other side saying we shouldn't compensate people and summarizing all sides is difficult.
- One point is that Oasis Borrow defines a liquidation penalty at 13%. Most vault holders believed that this was the max penalty on top of their debt. That is not correct, but potentially this is a UI messaging failure.
- There is also the PR/optics for compensation to consider. Again, points to be made on both sides, namely the code is on the chain and auditable. The issue is if we compensate users now, do we set an expectation that we'll do the same in the future?
  - Mitote: There is a [signaling thread](https://forum.makerdao.com/t/signal-thread-do-we-compensate-vault-holders-that-were-completely-liquidated/1713) also posted by Joshua.
  - LFW: MM opened [the first thread](https://forum.makerdao.com/t/compensating-vault-holders-that-liquidated-at-0-bid/1541), there is [a second in which the vault holders are reporting their losses](https://forum.makerdao.com/t/black-thursday-vault-owners-report-thread/1566), and Joshua's too. Also, it's worth noting that forum polls have a drawback. Naturally, Vault owners are in the forums and vote on polls. I think a potential solution is to have multiple on-chain proposals for MKR holders to vote on.
  - Rich: I hope that people affected by this situation are on the call, so thoughts or comments, please add them to the discussion. Long you touched on some of the key points and really important issues. I think this will be one of the most important discussions that the community engages with. It relates to core philosophical principles that need to be addressed here. Immutability, compensation, code as law, reputational impact, opening doors that are difficult to close the future. There are mechanical and implementation issues that come up depending on how we handle this. Let's brainstorm on some options; I imagine that, based on how vocal people have been on this call, that there are strong opinions on this call. The sooner we toss out ideas, the sooner we can arrive at a consensus on the forums.
  - Mitote: An obvious main point to clarify is liquidations and uncertainty. Especially if there is more risk of losing your collateral. There is no algorithm for compensating vault holders.
  - Rich; That's an interesting discussion to start with. Easier than philosophy. Hasn't there been some numbers discussion in the forums?
  - Mitote: MakerMan has brought up numbers.
  - MM: You can look at where people liquidate, someone posted the math. 66% +13% hits, and you get no more than 21% back (including the liquidation penalty). I take a business focus; at most, you get 10.5% back. I've refrained from posting this, but you can look at zero bid auctions as the most significant issue. Someone else posted a different scenario, but I split them into classes. \$0 bids and then everything else.
  - If I rough the numbers out as a total, 69K ETH was lost, so 10% of that is 6900 ETH split again by whomever and however. Max exposure makes sense. Vault #2288 flipped half of his ETH; 2500 at \$75. You can see a fair amount of sophisticated activity to redeem this loss. If the auctions were functioning faster, you wouldn't have found that great a bid price, ETH was congested, and Dai peg was off, it would have even been harder. Based on the current system structure, the idea that you get 13% and you get your collateral auctioned off at your liquidation price is unreasonable. Only tit-for-tat would have that kind of "good" pricing.
  - There are two reasons, and I try to look at the whole community, advocating for vault and Dai holders. From their perspective:
    - Vault owners didn't understand the full nature of the risk(s).
    - They didn't expect to be liquidated at \$0 bid. Which is the real crux?
  - Those issues (alongside some venting and opinion surfacing) is why I put the threads up, especially the compensation thread. We're getting a decent amount of drive by's, unfortunately. I thought of these threads as a cathartic mechanism for the entire system to come in and digest together.

[49:49](https://youtu.be/erh25lnaIo0?t=2989)

- Rich: We appreciate it, and I want to dig into it a bit there, thank you(MakerMan) for taking the initiative in the forums like that. Are there two camps forming? "Because the number 13 is on the site, we all expected that only 13% would be seized" vs. "we didn't get what we thought we should have gotten from the auction mechanism." Is there a big dichotomy like that? or is it more people agitating for what should have happened in those 0 bid auctions?
  - LFW: There isn't a strict dichotomy. Considering the 0 bid auctions as a separate class from the other auctions might not be the best idea. Other vaults got un-favored pricing, even though it wasn't strictly a 0-bid.
  - MM; If auctions go at 60-70%, the protocol eats a lot of the loss. The deal here is auctions hitting way below wipes people out, and Maker eats the rest. That's why I think digesting it is so hard. In terms of the way the system functions, if the bids are 80 or 70% of your liquidation value back. They already got 2/3 their ETH value for liquidating them.
  - LFW: I think communication about penalties is worth examining. Is that our responsibility? or should users have to research liquidations and understand that?
  - MM: On the protocol perspective, the onus is on them. They should have researched that. I've seen auctions go in the real world, and things hit at 1-3% of actual resale value. Talking about distressed assets? "pft" we don't even have liquidity in there. Liquidity is a truth no one is facing. Those liquidity mechanisms can be improved, but they were given a loan and had that money in hand. If they lose that ETH and have Dai on hand and they can't pay it back, well, that's how the system works.
  - Mitote: The issue is that the interfaces didn't address it. All the information is available, but without explicit pointing to the risk(s) is the point.
  - MM: How do you include the information like that for every interface? In crypto, it's like every investment. "Don't put more in than you can lose." Nothing is guaranteed, particularly in the last market drop. I wanted people to blow off steam on the 0 bid auctions, which I felt needed a proposal to remedy. Even if the proposal was something like; If the OSM price and the live price is like 20% off, Maker should just ride the collateral through. Screw the auction. If you have an 80% price dislocation, you might as well auction MKR and print money, no point to pad it with an auction.

[56:28](https://youtu.be/erh25lnaIo0?t=3388)

- LFW: Two points struck me. One is that people lost all their Dai, but they leveraged up, and no one forced their hands to do that.
  - MM: Correct.
  - Rich: While you dig up the second point, we heard from one side of the aisle, are there other contrary opinions, anyone affected by the situation want to share opinions?
  - LFW: The second point, the UI, is a good topic. The protocol can't be responsible for every UI, though.
  - Mitote: We could communicate with groups making UI's. There isn't an infinite number; the biggest ones at least could have better messaging.
  - LFW: Anyone can write a UI on the protocol, and we can't stop that.
  - Mitote: We're not responsible for all of them, but I think getting the messaging to the most popular ones is possible.
  - LFW: I don't think that's hard to do; it's impossible to take responsibility for even half of them. We can't be responsible for some amount of teams building UI's.
  - MM: The normal system is a banking system that has laws and rules about who can make loans. What the rules are for liquidations is what we're missing, it throws the onus on Governance and the system therein to be clear about the system and the hazards thereof. I don't know how to communicate this to people: "you are responsible for your own money." Systems and laws exist outside to protect people, do we want to get to the point where regulators come after the protocol based on their assumptions. E.g., informing people of the real risks and hazards. It sucks that we had to go through this as an example.
  - LFW: It would be nice to hear from the compensation side. In the sidebar, one point is "the personal responsibility is not directly important, the goal is giving users the confidence to use the system in the future. Especially for those who got burned."
  - Mitote; We don't want to give confidence when we aren't confident.
  - LFW: That's where I have an issue too. If we compensate now, then we're setting up expectations for the future. If confidence comes as a result of being compensated in a situation like this, it's not sustainable.
  - Mitote: Since we communicated in a way that presented confidence when we shouldn't have, maybe we compensate users this time. Moving forward, we can be a lot more clear in our communications, so future compensation under a similar scenario is not warranted.
  - MM: We could always provide our own insurance. Buffer the surplus in advance. Setting the system to be more robust. Sacrificing the PR on 0 option bids is a tougher call.
  - MM: If that ETH had all liquidated at a fair price, I don't think there would have been enough Dai to soak it up. Like \$75 in the crash, I don't know if that would have even cleared. I still think it would have been below the 75% threshold the way the market moved. While I have a PR sympathy, to appease people at whatever number it is: 6K ETH and divide it up. Pick a number 10% or something; right now, we have these holes that make it difficult.
  - LFW: Insurance is an interesting idea for later. Coming back to effective communications. We need to be clear about what do we mean by "we." Is it because Oasis UI wasn't clear is that why we compensate? Some set of users used DeFi saver.
  - MM: I think our documentation should include a significant disclaimer about the hazards and risks.
  - LFW: Core maker sites have that, and yes, I agree.
  - MM: I read Reddit and Maker documentation. It wasn't that difficult to surface the risks. I guess we could make it blatantly obvious. The hazards of owning Dai, owning MKR, opening vaults, etc. There is a slew of risks with holding Dai and liquidity risks, for example.

[1:05:22](https://youtu.be/erh25lnaIo0?t=3922)

- Charlie: I've been asking some questions in the sidebar: have we calculated on the part of Vault holders, what the cumulative liability is (in the rosiest case)?
  - MM: Approximately 13 or 14K ETH.
  - LFW: It would be good to do this math.
  - Charlie: We should have that math and get a number on the table. Beyond philosophically, there is a difference between an abstract and a number. If we scope the discussion down to how much of an amount is there, it makes it easier. Setting a better precedent for the community.
  - LFW: we need all the data. What would users have expected? What was the price? What's the worst and best case of what they should have gotten back. Basing on oracles and keeper activity at that moment. If we approach this with clear numbers and a spectrum (in the best case you would have gotten **X**, in the worst-case **Y**, in the market probably **Z**), then we could determine what a reasonable price would be for compensation if we chose that. Someone taking the lead on that would be helpful. We're going to need a list of vaults, scraping the chain, applying those heuristics, and having concrete data points.
  - Rich: There is auditing that needs to get done. Knowing where the vaults came from, and people signaling actual ownership of these things would be helpful.
  - LFW: is there anyone who wants to take that lead and compile that data?

[1:09:01](https://youtu.be/erh25lnaIo0?t=4141)

- MM: If we look at this article, the max is 13K ETH, we can use this as a heuristic.
  - Jernej: Does this assume keepers didn't profit?
  - Charlie: The number is assuming they bid the fair market price.
  - MM: The number assumes they got the liquidation price. That's the assumption of the liquidation price for the money priced at auction.
  - LFW: This is the thing about including keeper data in the numbers. They need to make a profit so they would pay a little less.
  - Kurt: let me add color on calculating that number: at liquidation, the value of your ether is 150% the value of your debt. There is a 13% liquidation penalty. The debt bumps from there.
  - Let's use numbers: $100 Dai on $150 ETH debt needs to raise \$113. In the auction, there is a technical detail where the price can only change 3% each time. Expecting keepers to bid rationally falls within a range of where bidding stops for keeper profitability. Adding that in, (150-116) / 150 gets to that 21% figure.
  - MM: That's about right.
  - LFW: This is helpful to give us a general overview that needs a big old spreadsheet. All the liquidated vaults, all the prices they got hit at, and the price range that would have happened optimally. Pulling the data from the chain with scripts. To make a fair decision.

[1:12:53](https://youtu.be/erh25lnaIo0?t=4373)

- MM: We know the total ETH in the 0 bid auctions. I think it's best to split the difference here. Portion it out at 10% of what they were liquidated at to all the 0 bid liquidated vaults.
  - LFW: To compensate at all, we need that data.
  - MM: That's all in [that medium article](https://medium.com/@whiterabbit_hq/black-thursday-for-makerdao-8-32-million-was-liquidated-for-0-dai-36b83cac56b6). I haven't confirmed it, but the data looks correct.
  - LFW: I don't think a manual review is necessary, but it would make sense to verify the data and apply for the same compensation. Plus, an output list of all the vaults.
  - Charlie: I have a couple of suggestions; data first party on the 0 liquidated vaults. Data on a range of scenarios based on what holders could have been anticipating receiving had they not been liquidated at zero. The chat has surfaced some of the factors. We know the upper band, we could apply a constant modifier to it(or with the data, we could get more sophisticated.) At that point, we'd have hard data on, in a range of scenarios, what they expected to receive. From there we have two mechanisms do we remedy this
    - One is diverting SF's to it.
    - Minting new MKR through flop auctions.
  - Charlie: I'm not suggesting we should compensate them, but just establishing how to look at it. Regardless of knowing the risks, Something went idiosyncratically wrong. Optically this isn't fantastic. It makes it a lot easier to have any conversation without the information displayed. Ultimately if it's \$1 Million, or something, that's not that much money to compensate people.
  - LFW: The philosophical examination is: the DAO should have consistent decision making. Anytime we make a decision, it sets a precedent. In the future, if we want to make a decision, we need to think about how/why that might be different in the future. While they seem less important than optics, we must consider the reasons why.

[1:17:56](https://youtu.be/erh25lnaIo0?t=4676)

- Charlie: I'm not sure if the analysis is out of if this has been discussed, but there was most certainly an attack on the 0 bids. The mempool dynamics at the time is indicative of a specific attack(not someone who wrote better keeper software when everyone else's went down.) It looks like an incredibly sophisticated attack to me. It's not like this happened by chance. They exploited an opportunity from the Maker specific infrastructure/software and the greater environmental conditions. It was specifically exploited by an intelligent actor. It's not like it "just happened, and could again." I label it as a different conversation because of that reason, personally.
  - LFW & MM: Share the analysis once you get it!
  - Charlie: I spoke with some people, including Phil Daian, people from the ETH Foundation, Blocknative, Lev Livnev, and others. There is quite a bit of brainpower behind analyzing it. This was likely a novel mempool attack targeting different infrastructure layers in a new way; It seems quite likely that it was premeditated.
  - MM: Then, any discussion about compensation comes secondary to understanding if there was an attack on the greater ETH infrastructure layer. I'd been waiting on hearing for system attack vectors
  - Charlie: I apologize for drawing out the conversation this way without concrete data. There is no evidence for miner collusion; there is evidence for attacking multiple layers across the stack. I think that analysis will come out in a week.
  - MM: That'll transform the optics. We should table compensation until understanding all the details.

[1:22:38](https://youtu.be/erh25lnaIo0?t=4958)

- Rich: Well, we don't need to halt. There is work to be done, internal analysis, etc. The outcome and the decisions for the community can be affected by all kinds of post-mortems and chain analysis in the coming weeks. There is still utility in models and what things look like in the short term.
  - MM: Kurt suggested another group doing on-chain analytics comparing their findings to the [medium article.](https://medium.com/@whiterabbit_hq/black-thursday-for-makerdao-8-32-million-was-liquidated-for-0-dai-36b83cac56b6) We can't decide without all the information.
  - LFW: Agreed.
  - Jernej: Could we at least communicate what the prerequisites are to vault owners to continue this discussion.
  - LFW: Great point, and we don't have to stop conversations. Before we make a decision, we need that analysis. There was also a question being raised about compensating people for Dai being off-peg.
  - Rich: We need to understand if this is an adversarial ecosystem of competing protocols fighting for mindshare and network effects or if it's the other model, the real-world model, with all kinds of rules and regulations. In our world, we've seen Opyn and Nexus Mutual spawn themselves up to hedge against those risks. Discussing compensation for peg deviation, at that point, I don't know what the protocol would look like.

[1:26:14](https://youtu.be/erh25lnaIo0?t=5174)

- William Remor: One suggestion for communications. I know Maker can't take responsibility for every UI using the underlying protocol. The point is: liquidations happens due to risk appetite for vault owners. There is still probabilistic math on system collateralization. Communicating to vault owners a probabilistic loss about how much collateral they could lose in a significant event would move responsibility back to them. That puts it on them for putting their money in the system and taking on that risk. That's one way of communicating it on the main interface. That they shouldn't leverage. It could be based on math, looking at price valuations upfront. I think it would help folks who leverage.
  - LFW: Models about how likely something is going to go wrong might be beneficial. Showing it to them upfront, we can assume that Oasis UI, maybe, would do it. But I don't know how to force people to be aware.
  - Mitote: You can advertise the models, risks, and everything we do know about how it all works.
  - LFW: I agree we haven't that hasn't been overly advertised. We can't guarantee that someone has seen it.
  - Mitote: If this is the main focus, you can work with the biggest ones, so more people see it.
  - MM: When you borrow Dai, have a chart with the 90/80/60--->10 % on your collateral price. If someone sees that 75% mark and 0 collateral, how could you complain about the liquidation price visible? Asking "what do I get if it's below 20" that seems ridiculous to me. Even TOC that says: "do you understand these risks" then get Dai.
  - LFW: We could make an API that populates that info into anyone who builds a UI.
  - WR: I think the way it provides extra information to take on the risk. The way Vishesh does with the distribution of collateralization ratios. It makes the risk appetite clear. Understanding that risk is key, if you don't get it, you probably shouldn't be in the space. Risk rather than greed should be the measure.
  - MM: I posited to Vishesh that now that we have the chart that you are talking about, I want those 90, 80, 60-50, 20, I want to those as lines on a running a chart so that you have a chart of risk appetite vs. the snapshot that gives us every once in a while or that we can look at. We need a graph of this risk appetite. What I'm seeing is, when the markets settle down, you can tell me what you see, but I've seen that the system goes back to this 10 percent down, and we lose 10 percent of our collateral. 50% down, and it's 50% of our collateral. Only when the markets have taken a hit does that start to skew, but then over time, it starts to normalize. It's almost like a risk-collateral optimization game that our people are plying. And it looks like we kind of land in similar areas. Right now, we go down 50%; we lose just about 50% of our collateral. I found it interesting to observe over time that it looks like the risk appetite kind of change, but it looks like a market event not necessarily because of the risk appetite changes. And what the risk ratios do over time is important, and we need to see them as data for science.
  - WR: I've observed similar dynamics around that, and it was counterintuitive from a risk perspective. I could not understand it from the human aspect of greediness going into that.
    - Mitote: Cyrus has also pointed out that qualitative models are really important aspects of risk analysis will be important for future model making and understanding of risk and collateral. It's more complicated than just what price and how much collateral incurs losses. But I do think that this is a good place to start.

### Post-discussion Brief by Rich

[1:35:57](https://youtu.be/erh25lnaIo0?t=5754)

- This won't be the last discussion we have on this topic. We will have some takeaways and some people working on these models. There has been speculation about the root causes of these issues, hopefully, some more clarity about what happened and why. We should have a post-mortem coming either at the end of this week or the beginning of next week. Discussions will be continued in the forums. Zoom has upgraded its infrastructure, so this should be online in the next hour. Please try to spread this to as many stakeholders as possible. We will pick it up again on Thursday.

[1:37:50](https://youtu.be/erh25lnaIo0?t=5870)

- Rich: We need to have a discussion on flop auctions and timing for the Executive to go on Thursday. Please consider the urgency.
- MM: Is that the only thing going into this Executive?
  - R: This Executive can either be the flop auctions and SF's for Sai/Dai/USDC or ONLY the flop auctions to avoid mixing technical fixes and monetary policy. Or we can have a flop auction on Thursday's Executive, hope that it passes within 24 hours, and then have the monetary policy votes on Friday.
  - MM: I think that the flop auctions temporary fix is important. We need to get this off our plate to see how the Dai peg is doing. Monetary stuff can wait, I would like to see the SCD DC go form 20 to 15 million. Can we do flop auctions first and revisit the other stuff in another executive?
  - Rich: We'll get a forum thread with a poll asking how the community wants to handle this week's Executive.
  - CN: We should be better about participating in the forums. Personally, if we could not start the flop auctions on the weekend, I would appreciate it.
  - Kurt: From a technical perspective, because we can't expect executive decisions, we can put some technical logic for the auction to start at, say, 9 am on a weekday.
  - CN: That would be awesome. It was a long weekend at 3 am on the West Coast.
  - Kurt: Volunteered to make [this forum thread.](https://forum.makerdao.com/t/signal-thread-finishing-flops-and-current-executive/1795/5)

#### Relevant Links

- [MCD system stats](http://daistats.com)
- [SCD system stats](http://saistats.com/)
- [DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)
- [Forum post: Everything you need know about Flop Auctions](https://forum.makerdao.com/t/blocked-flops-debt-auctions-everything-you-need-to-know/1748)
- [Kurt's slides](https://docs.google.com/presentation/d/1nnpPBiOLEWi81q8zrHoIWH4s3iQaKrCSaR68AafzQJo/edit#slide=id.p)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
