# Ep60: November 07, 2019

## Agenda

- [00:00](https://youtu.be/KrutexQ0Cs4): Intro with Rich Brown
- [14:32](https://youtu.be/G8ga8vjMWkw?t=872) : Migration Risk with Cyrus
- [17:08](https://youtu.be/G8ga8vjMWkw?t=1028): Auctions with Cyrus
- [52:51](https://youtu.be/G8ga8vjMWkw?t=3171): Recap of Forum Topics with David Utrobin
- [58:46](https://youtu.be/G8ga8vjMWkw?t=3526): Sai Market Analysis with Vishesh

## Video

<https://youtu.be/KrutexQ0Cs4>

## Terms

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`Sai`: SCD Dai

`Dai`: MCD Dai

`sCDP`: SCD CDP

`mCDP`: MCD CDP

## Introduction & Governance

### Rich

### Summary & Introduction

[00:00](https://youtu.be/KrutexQ0Cs4)

- Welcome to Nov 7th edition. Today we talk about governance and risk. We're joined again by Cyrus to chat about migration, specifically in regards to auctions and their parameters.
- Give us feedback about the call, speak up in the chat, or hop on the mic and let us know what you're thinking. MakerDAO employees, this is the place to ask questions or contribute as well.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)
- We hit the debt ceiling this week. The community empowered an actor to work on behalf of the community by electing an Interim Governance Facilitator, namely me, to take action around specific decisions in regards to proposals and votes.
  - The poll that enabled a $10 million buffer on top of the Debt Ceiling took a month of debate to arrive at. Unfortunately, it seems like $10 million is not enough, judging by how quickly it was broken through in the last few days. Enabling the Interim Governance Facilitator to place an executive in the system when the buffer is breached without needing an additional Governance Poll worked. But it also raised the question: How will we have a flexible system that adapts to unexpected situations?
  - E.G., What happens if we need 20 million or more in the course of a week? What happens if the Debt Ceiling is at risk in a few blocks? We have a proposal currently that doesn't grab all the outlier cases or 'what if's.' Specific language about the debt ceilings cap is intentionally ambiguous, and we want to be careful about governance actors in the face of changing need(s). This discussion point: "why are we waiting?" comes up again and again.
  - The worry with acting too quickly is the additional questions it raises. E.G., What qualifies an emergency? Who determines what that emergency is? Crisis for whom? How do we get more eyes from the community on the decision we need to make? Previously our cadence was weekly and reliable. Monday poll, Friday executive, etc. combined with homework we ask of the ecosystem. As governance continues to need more agility or emergency powers, there has to be a middle ground where we can have a sense of urgency on the executive without forgoing due process.
  - One suggestion is firing up an executive right after this regularly scheduled call, giving everyone a day to respond and deliver. This action feels best and isn't an abuse of power.
- We need to perform an audit of our governance: Our processes and mechanisms, weekly cadence, tooling, polls, and other pain points. In two weeks, we'll have quite a few parameters to manage, alongside two debt ceilings from two ecosystems. Let's get a forum post, a working group, or mini initiative going to make sure we get this right and improve our agility and effectiveness.
  - In this case, with the debt ceiling, it worked out, but the more significant issue is that stress fractures in governance will become more evident as MCD arrives.

## Risk

### Cyrus

Today we're talking about auctions and migration risk.

#### Migration Risk Brief Review

[14:32](https://youtu.be/G8ga8vjMWkw?t=872)
![](https://i.imgur.com/Vf8PJ8O.png)

- The overarching risk theme was SAI liquidity both for CDP owners sourcing SAI to migrate but also, more importantly, the secondary borrowers who might not use the migration contract. Sourcing SAI in the public markets shouldn't be a problem as this starts. However, eventually, when liquidity dries up for SAI, then the ES will need to be triggered. See last week's call for a more comprehensive overview of the migrations risks.

#### Auctions

[17:08](https://youtu.be/G8ga8vjMWkw?t=1028)
![](https://i.imgur.com/MzWVono.png)

[18:04](https://youtu.be/G8ga8vjMWkw?t=1084)
![](https://i.imgur.com/ZQTOvzu.png)

- Auctions in a blockchain world are a little complex. There are compelling arguments for not having GUI's at the beginning. Auctions can happen at any moment, 24 hours a day. It makes the most sense for automated bots to participate in the auctions.

[20:41](https://youtu.be/G8ga8vjMWkw?t=1241)
![](https://i.imgur.com/wzj1glW.png)

- Keepers do have to bid for the entire `lot size` of an auction. Large liquidations will be broken down into multiple auctions. The larger the `lot size`, the longer the auction would take, which is the downside.
- `Lot size` and `bid duration` are the most interesting from a game-theoretic perspective.
- An example that highlights the importance of the `bid duration` is if someone comes into an auction with a `bid duration` set to one hour. That's an hour of market risk that they might price into their bids as a discount, underbidding the auction. Thus, the Maker Protocol receives less DAI. The other detail is that if the set `bid duration` is too small, then you run into network risk (high gas costs, full blocks, downtime, etc.)
- A `minimum bid increment` too low means that last-minute keepers can come in for a low cost and win the bids with a very small increased offer.

[26:12](https://youtu.be/G8ga8vjMWkw?t=1572)
![](https://i.imgur.com/6ogLtIL.png)

- This is an example of a collateral auction for a liquidated CDP.
- A keeper liquidated the CDP once it is below the Liquidation Ratio. The liquidation penalty is then applied to the total Dai borrowed.
- Collateral auctions have two phases. In the first, participants bid on the entire lot of collateral up until the required Dai needed to cover the liquidated CDP. The second phase occurs once the amount of required Dai is reached, then the auction locks in the bids and begins a reverse auction where bidders compete for how much less collateral they are willing to accept for their bids.

[31:12](https://youtu.be/G8ga8vjMWkw?t=1872)
![](https://i.imgur.com/G8kEsqQ.png)

- ~\$10,000 `Lot size` is an amount we feel is balanced. It's large enough not to cause thousands of little auctions while being small enough that relatively any keeper doing this seriously should be able to absorb.
- 10-minute `bid duration` is a middle ground between network issues and market risk.
- The `minimum bid increment` is meant to mimic the current SCD discount structure on collateral sales. E.G., If someone comes close to 97% of the collateral amount, then it's not rational to outbid them; this increment guarantees that 3% profit.

[32:43](https://youtu.be/G8ga8vjMWkw?t=1963)
![](https://i.imgur.com/XtFeIPd.png)

- Surplus Auctions should happen uniformly when SF's are collected. In surplus auctions, bidders lose when MKR rallies since their bid denominated in MKR is an exchange from MKR to Dai.

[35:30](https://youtu.be/G8ga8vjMWkw?t=2130)
![](https://i.imgur.com/ELGyOh9.png)

[36:17](https://youtu.be/G8ga8vjMWkw?t=2177)
![](https://i.imgur.com/ANQ129d.png)

[40:36](https://youtu.be/G8ga8vjMWkw?t=2436)
![](https://i.imgur.com/JfGjxKX.png)

- Earlier, we didn't implement a maximum on closing the debt. If there was some amount small amount of bad debt, even as low as a dollar, a keeper could come in to bail out the shortfall for 1 DAI and in return, ask for 1 trillion MKR. The protocol will now impose a limit depending on the size of the debt.

[42:46](https://youtu.be/G8ga8vjMWkw?t=2565)
![](https://i.imgur.com/JqCsv1R.png)

- Including the `maximum initial bid` is like a reverse auction.

[45:57](https://youtu.be/G8ga8vjMWkw?t=2757)
![](https://i.imgur.com/osq3z61.png)

- Fairly recently, we increased the `lot size` to accommodate an edge case. During the migration, if a bunch of SAI holders migrates to earn the DSR, but no CDP owners have moved yet, there could be a shortfall in stability fees triggering one of these debt auctions.

[47:07](https://youtu.be/G8ga8vjMWkw?t=2827)
![](https://i.imgur.com/PIS4zm7.png)

- The poll issues were my fault, and we do need to come to a consensus on a short-term solution and future mitigation of this happening again.
- Technically governance voted on an incomplete set of parameters. Unfortunately, due to the second issue, the best option is to run a new Poll on Monday.
- We can't launch an Executive with parameters that are different than the governance poll. We'll need to run another one with the missing parameter.

#### Questions and Discussion

[19:40](https://youtu.be/G8ga8vjMWkw?t=1180)

- Rich: Could you elaborate on a compelling reason for no GUI's on the auctions?
  - Cyrus: A lot of these are designed for market makers because they have access to deeper liquidity reserves. There is no pre-set time for auctions, and they can trigger at any time of day, which is better for automated bots.

[26:12](https://youtu.be/G8ga8vjMWkw?t=1572)

- PatrickD: Is there documentation available for average traders who understand ETH too?
  - Cyrus: Yes, there is plenty of documentation available. There are even open-source auction bots. Links:
    - [auctions-101](https://github.com/makerdao/developerguides/blob/master/keepers/auctions/auctions-101.md)
    - [auction-keeper](https://github.com/makerdao/auction-keeper)

[29:57](https://youtu.be/G8ga8vjMWkw?t=1797)

- Rich: Maybe this a question for the engineers, but is there a name for this type of auction?
  - Cyrus: English auction, I believe. It's what everyone is familiar with when they think of options(bids increasing on the price of the shortfall). The tricky part is the inversion of the recovered collateral, how much "they are willing to walk away with." There are resources for this and endless amounts of research on the topic.

[37:10](https://youtu.be/G8ga8vjMWkw?t=2231)

- Lawson: In the bidding auction process, is there locking of the DAI in that time frame necessary to purchase it?
  - Cyrus: In the surplus auction, the DAI is what you're bidding on. The protocol has the reserve pool where it collects the DAI from liquidations.
  - Lawson: To clarify, whatever the asset is your purchasing with, is there locking of that asset once you submit your bid?
  - Cyrus: You'll bid some amount of MKR and then it's permanently locked until you win or someone outbids you
  - Lawson: If there are multiple bids for the same amount, how is that managed? First in line or...?
  - Cyrus: Correct, it's first in line since each new bid has to hit the minimum bid increment.
  - Lawson: I liken this to where you receive bids for assets that are all the same but just for differing amounts. It seems like there could be an approach for bidding that includes "I'm willing to pay this amount more or less." Also, a parameter for a reputation for keepers while creating the order book. I.E., "what has this person done with me recently." These parameters would fit a process in the future where it would look at those and share equally while accounting for regular keepers. It feels like a process where you're trying to account for multiple people in similar bids.
  - Cyrus: Agree on that process, and that's a great point. These parameters are subject to change, as well. The choice of parameters has a significant impact on auctions, so we need to standardize these numbers before building that system of reputation.

## Sai Analysis

### Vishesh

[58:46](https://youtu.be/G8ga8vjMWkw?t=3526)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Insights

[58:46](https://youtu.be/G8ga8vjMWkw?t=3526)
![](https://i.imgur.com/MoFy0uj.png)

- We hit the debt ceiling. Supply exploded. Since Nov 04th, we saw roughly \$10 million DAI minted.

![](https://i.imgur.com/hTM3msB.png)

- Total borrow volume drastically dropped, \$13 million between DyDx and Compound.
- Couple large mintings on the 4th and the 6th did not make their way directly onto the market. Which begs the question:
  - How is it being used?
  - It's possible people are just holding onto it for the migration.
- Not all of what's been going on has been explained by refinancing.

![](https://i.imgur.com/NP1uZiq.png)

- Supply volume has remained steady. It's not clear that the recent new DAI was sold onto the market or supplied on SLPs.

![](https://i.imgur.com/uLXwrWL.png)

- We've been talking about this buffer between the stability fee and the Compound borrow rate. It's been interesting to watch, and because the fee dropped from 12% to 10% to 9% to 5%, the Compound borrow rate remained steady between 13% to 11.5%. Then, on the 4th, it dropped about 1.5% because the volume dropped from 22 million to 16 million. 12 out of 22 million, which is a significant portion.

![](https://i.imgur.com/MgMBzoM.png)

- 24HR VWAP.
- Despite the large mintings of DAI, we didn't see the price immediately crater. This indicates that the new DAI didn't make it to the market. More or less stable on the peg and not a lot of volume across exchanges.

![](https://i.imgur.com/1TmNpqM.png)

- 7D VWAP
- Volume overall 7-day is lower than usual, only 9.93 million. Prices are stable as usual.
- Uniswap has some volume towards the lower end, likely due to slippage. Obviously, some DAI sold on the market.
- Liquidity crunch may be coming, so maybe people are holding to prepare for that. Curious about the stability during that. It will be unclear whether it will sell for other collateral or a profit.

![](https://i.imgur.com/nlipkcz.png)

- DyDx and Compound utilization rates are down too.

![](https://i.imgur.com/TcVWk5J.png)

- CDP collateral went up, and in the grand scheme of things, the time frame from July to December was a dip in debt. Not sure how sustained this 10 million growth will be.

![](https://i.imgur.com/H5oaOHL.png)

- One thing we haven't spoken about for a while is excess supply. I don't know how sustained this Dai supply growth will be. This 22 million excess supply makes for a tricky situation.
- The difference in rates on Compound with excess supply creates a bit of an economic anomaly. This excess supply is not very effective at shielding DAI from the potential effects of oversupply depressing the price. It is more expensive, so people aren't going to seek the \$21 million if we hit the Debt Ceiling. As the Debt Ceiling increases, there is the potential for economic risk.

#### Questions to Vishesh

[1:07:39](https://youtu.be/G8ga8vjMWkw?t=4059)

- Rich: Governance stress again. We have a Poll Monday, Executive Friday. Both are fairly clean. Regularly each Friday we vote on SF, soon multiple polls get wrapped into a single executive. What happens when we have a series of polls that may create friction or contention with each other? Will this lower engagement? Create weak executives? What if people are drawing DAI because they believe that they can profit off the coming crunch? With a debt ceiling continuously rising, are we feeding this opportunity?
  - Vishesh: It doesn't seem that it's only for refinancing. There may be some degree of hoarding behavior going on. "Nefarious" might not be the right word; profit-seeking behavior combined with fear and risk is how I see it. It's not a coincidence that we saw Sai demand pop overnight. Migration is coming, so it's not like it's unrelated. However, guessing incentives and reasoning is tricky. The data indicates some hoarding, as the DAI didn't dump on the market. Those trades (DAI for ETH, etc.) were made quicker in the past.
  - Rich: Interesting, and we're giving out \$20 million more DAI.
  - Vishesh: Again, we need to be considering why we're increasing the supply cap. This weird thing is happening with the secondary lending rates. You can't just point to the 22 million on Compound and say that's a direct accounting for that buffer. It's not as 1:1 as it was in the past.
  - Rich: It's certainly interesting! We have an upper bound at how high the ceiling can go. We can't reinterpret proposals and the wording matters here. E.G., "the debt ceiling poll expires at MCD launch." Hopefully, we don't hit the cap by next Monday, so we don't need to raise it again.

### David Utrobin

#### Forum Activity Recap

[52:51](https://youtu.be/G8ga8vjMWkw?t=3171)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Ask Forgiveness Not Permission: Five Tenets for a Productive DAO](https://forum.makerdao.com/t/ask-forgiveness-not-permission-five-tenets-for-a-productive-dao/749)
  - Effective productivity in the DAO. Do things first, then ask forgiveness later. I highly suggest reading this one; it's a great discussion about proper action.
- [Inclusion of a DAI Stability Index, to MKR holder risk profile](https://forum.makerdao.com/t/inclusion-of-a-dai-stability-index-to-mkr-holder-risk-profile/710)
  - This thread is about getting more MKR to vote and incentives to keep the peg. Popped up on the call last week thanks to PatrickD for taking on an action item and opening the thread!
- [Maker Governance Analytics Dashboard](https://forum.makerdao.com/t/maker-governance-analytics-dashboard/722)
  - [New Governance Dashboard](https://mkrgov.science/)
  - From the Protofire team. Add feedback in the thread; they're looking to improve this via community input.
- [[UNI-V1] Uniswap Liquidity Tokens as Collateral](https://forum.makerdao.com/t/uni-v1-uniswap-liquidity-tokens-as-collateral/711)
  - UNI v1 liquidity tokens as collateral thread. Lots to consider here on paper, so let's talk about those considerations, pros, and cons.
- [[Proposal] Migration Risk Construct](https://forum.makerdao.com/t/proposal-migration-risk-construct/724)
  - Cyrus posted the migration risk construct. Not too much discussion there.

## General Questions and Discussions

[50:10](https://youtu.be/G8ga8vjMWkw?t=3010)

- Rich: Next week, we'll have another governance meeting and an extra clean up poll. This will position us to have the executive by the 15th, and then we can ratify the risk construct in time.

[55:00](https://youtu.be/G8ga8vjMWkw?t=3300)

- New Maker governance dashboard launched, quite a bit to digest there. As we're blazing new territory here, there is a lot to learn about how votes change, etc. This tool also helps us identify any of those "stress fractures," I mentioned earlier. Soliciting the community for improvements, join us in the forums to discuss. It also allows us to address engagement going beyond just what, how, and why; the dash lets us start subdividing emergent categories of users looking at them, demographically. We're going to see parties form "hawks, doves...YOLO-ers."
- [Nov 5th community call](https://youtu.be/StPYVt3UQK8?list=PLLzkWCj8ywWP1NPbyf69PUUCus_KsG7FI&t=203) Leonardo, from Protofire, did a walkthrough and demo of the dashboard.

[1:15:38](https://youtu.be/G8ga8vjMWkw?t=4538)

- Rich: Lawson had some great questions about more automation in governance and less granular human management. Generally, we talk about magic algorithms when it comes to risk management, but we've been having discussions about how we deal with governance itself.
- David: While we assemble these questions, one more shill for the Community call on Tuesdays. If you are an integrations partner, user, or interested party. We're dedicating the first 30 minutes for migration questions, Lolike will attend to help answer.<Spelling?>
  - Aaron goes to David's house. Hence screencap.
- Rich: Dig into the migration plan; the name is a bit of a misnomer. It's more than a risk construct; it's precisely what MCD will be.
- Cyrus: Read the auction guides in the chat too!
