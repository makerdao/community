# Episode 71: January 30, 2019

## Agenda

- [00:00](https://youtu.be/uBodW6zm7DY): Intro with Rich Brown
- [06:16](https://youtu.be/uBodW6zm7DY?t=376): Surplus Debt Auction Discussion with Mariano Conti
- [26:30](https://youtu.be/uBodW6zm7DY?t=1590): State of the pegs with Vishesh
- [55:41](https://youtu.be/uBodW6zm7DY?t=3341): Recap of Forum Topics with LongForWisdom
- [56:35](https://youtu.be/uBodW6zm7DY?t=3395): Single Thread Focused Discussion with LongForWisdom

## Video

<https://youtu.be/uBodW6zm7DY>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/uBodW6zm7DY)

- Welcome to the Jan 30th edition of Governance and Risk meeting. Today we'll have an extra focus on Governance with LongForWisdom. Sustained engagement in our ecosystem has been an issue, but Long is going to discuss a thread that has engaged a few hearts and minds.
  - As a prompt for discussion, hopefully, we can discuss shutdown and fees, and not only the `tax` parameter. We've been talking about implementation, while I'm not convinced that the community has aligned on intentions around the shutdown. Do we want to punish free-riders? Are we optimizing to reward good actors?
  - It seems, specifically with the `tax` parameter, we went searching for a tool like a wrench. Instead, we found a hammer, and now everything looks like a nail. I'm using the well-worn metaphor to make sure that as a community we're thinking about how to choose the right tool.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## System

### Mariano

#### Surplus Debt Auctions

[06:16](https://youtu.be/uBodW6zm7DY?t=376)

![Dai stats](https://i.imgur.com/45ihV51.png)

- Latest addition to Dai stats, set to be released in 5 minutes.
- I'll be discussing Surplus Auctions. We've seen auction events happen when Vaults are liquidated, and collateral is put up for sale through an auction.
  - This Vault liquidation auction, called a [Collateral Auction](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#collateral-auction-collateral-sale), has happened about 400 times already in MCD.
  - SCD did not have Surplus Auctions. Stability Fees were paid in MKR and then that MKR went to the burner.
    - There is currently 78 MKR available to burn from SCD Stability Fees. Anyone can call the 'burn' function for this MKR from the Daistats page itself.
- For MCD, everything happens with auctions. The System Surplus buffer is 500,000 Dai, and the lot is set to 10,000.
  - This means that the system keeps a surplus of Dai as a safeguard inside the system itself.
    - There is currently 481,000 Dai in System Surplus. This number is increasing by the block.
  - The moment the system surplus hits the Buffer + Lot amount, currently set to 510,000 Dai, a surplus auction will be triggered. Before a surplus auction can be triggered, the system debt must be healed using the `Heal` function.
    - `Heal` reconciles system debt and system surplus.
- Surplus auctions happen once we surpass the `lot` size that goes beyond the maximum system surplus, called the `buffer.`
  - If the system surplus is set to 0 and the debt accumulates beyond the `debt buffer`, this will trigger a [Debt Auction](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#debt-auction).
    - The Debt buffer is currently set to 50,000.
    - In this case, MKR will be minted. This will hopefully not happen, assuming governance and risk are correctly managed.
- The first surplus auction will likely happen on Saturday or Sunday. Once a surplus auction happens, the system sells 10,000 DAI for as much MKR as is offered in the auction. Whoever wins has their MKR subsequently burned by the system after the conclusion of the surplus auction.
  - This will be the first time a surplus auction leads to MKR burned by MCD. This is a big milestone for the system.
    - This auction event is expected to happen multiple times a week following the first surplus action.
- Currently, there is 46% of Dai in DSR. Dai in DSR affects the rate at which System Surplus grows.
  - If more people put DAI into DSR, this system surplus will accumulate more slowly.
  - Governance will determine if a 500,000 Dai buffer is enough of a surplus threshold. It will also determine how much value is transferred to the MKR holders.
    - Rich: The value to the holders is potentially an irrational market, but these auctions provide greater security to the whole system. It is a recourse used to recapitalize.

#### Questions and Discussion

[09:22](https://youtu.be/uBodW6zm7DY?t=562)

- Mariano Conti Explains the property of System Debt needing to stay in the system for three days before it is available to be "healed." All healable system debt is on a 3-day delay.

[14:00](https://youtu.be/uBodW6zm7DY?t=842)

- Rich: Mariano mentioned that these actions represent an additional value to MKR holders. What are the other uses for these auctions?

  - Cyrus: When you have under-collateralized CDP's that don't recover all of the Dai from the collateral auction, then it will start to dig into the surplus before it triggers a debt auction. This is an intermediate layer, where the first line of defense is the collateral, the second line is the surplus, and then the last line would be the MKR dilution through debt auctions.

- Rich: As this is the first time this will happen, how will we see the efficiency of the surplus auction?
  - [Daiauctions.com](https://daiauctions.com/) built by Martin Sanchez. Shows all of the collateral auctions, including FLIPS for ETH, BAT, and DAI. Now it shows the Surplus Auctions too, under the FLAP tab.

[16:48](https://youtu.be/uBodW6zm7DY?t=1008)

- David: In regards to the surplus threshold being 500,000. I understand that this is how it should be, but what are the disadvantages of increasing this threshold to give more of a buffer in the case that a lot of bad debt occurs in this system?
  - Cyrus: There are some interesting trade-offs. The surplus is a somewhat more stable, more reliable source of buffer than MKR dilution. MKR volatility is obviously fairly high, and liquidity is fairly low. While you can make some estimates regarding how much value you can extract from dilution using various methods, the buffer is significantly more conservative. Depending on your estimated distribution of losses for your collateral portfolio, you may want to have more or less buffer.
    - The downside is that the more buffer you have, the more Dai is held back and does not go to the buy and burn auction.
  - D: Yeah, but that's just a floating amount, right? Once it hits that maximum, let's say like 2 million, the rate of burn will be pretty much the same. The only thing we lose is that 1.5 that wasn't burned. It's a business decision more than systemic risk.
  - C: It is a bit of a subjective decision, but I think once we dive into the details a bit, we'll have some more context. Essentially, the community will have to vote on their risk tolerance for this portfolio and how much tail risk they want to be covered by dilution and how much should be covered by the surplus, knowing that the dilution is more unreliable.
  - D: So looking out into the future, as the Dai supply grows, it makes sense to scale up that threshold based on risk appetite.
  - C: As the risk grows, you will want to have more surplus. We will want some connotative ways to determine the total amount of combined surplus and MKR dilution value that you may want for the level of risk in your portfolio. As long as the combined amount is above the threshold that you are targeting, you are generally ok. As soon as you introduce a random component to the MKR dilution, you may decide it is best to hold a bit more in surplus.

[21:17](https://youtu.be/uBodW6zm7DY?t=1277)

- Mitote: We are also considering in the future to use the buffer to pay various system expenses.

  - C: I think in time, the buffer can be used to pay out various expenses as well. It will just come out of the surplus, and if there wasn't a surplus, it would pop out as bad debt, meaning MKR will be diluted later. Assuming you don't want to dilute MKR every time you want to pay an Oracle Team, for example, it would be great to have a bit of an extra budget to pay for these operating expenses.
  - D: So the float, represented by the system surplus, must be enough to cover the system expenses plus expected losses rather than MKR dilution. If there is bad debt but a surplus, that's not going to cause a debt auction. The only time a debt auction will be issued is if we are running a deficit for long enough or if there is a big enough expense that in one shot, it completely eliminates all of the Dai in the system surplus and also causes 50,000 plus of the bad debt. So if there is 500,000 of bad debt because of a system expense, that's just gonna take away from the surplus and not necessarily cause a dilution, right?
  - C: Exactly right.
  - Mariano: Just to say, whether it's MKR dilution or taking from the surplus, you are still taking away profits from the system.
  - D: Yeah, we're managing the balance sheet.
  - C: I like to think of the surplus as pre-dilution MKR. You can kind of hold on to the surplus today, or you can have no surplus but use a debt auction at the time of a bad event to dilute the MKR and cover costs. It is a timing issue; do we want to pre-dilute MKR by not burning it in the first place.

- Makerman `chat`: "Dilution of MKR to cover DAI debts, vs. surplus DAI to cover DAI debt to me are vastly different things. One requires a market; the other does not."
  - C: Right, but the expenses to the system are denominated in Dai. So, it would make sense to hold. Or you can hold it in MKR and raise the Dai for the moment that you may need it. The latter adds more uncertainty.

## State of the pegs

### Vishesh

#### Relevant links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

[26:30](https://youtu.be/uBodW6zm7DY?t=1590)

![](https://i.imgur.com/nDzuEqY.png)
![](https://i.imgur.com/YxJCVmY.png)

- Mid to low amount of Dai trading in the last 24 hours, 2.916 million. Slightly below peg, at 0.998, but not enough to have a concern.
  - For a few days, there was a bit more Dai trading below peg then above.
  - Sometimes, dai.stablecoin.science is slightly visually misleading because of the size of the trades. You'll notice some pink area below, but there are large concentrations of trades happening above as well. It more or less balances out.
- A fair amount of that trading happening on dYdX, which has picked up in market-share since MCD launch.

![](https://i.imgur.com/exKoGWj.png)

- Sai trading has been low, at 168,000. Still trading near the dollar at \$0.998. Will monitor trading activity on Sai as we get closer to SCD shutdown.

![](https://i.imgur.com/S4EJMT5.png)

- In secondary markets, the borrow rate for SAI is 10.5%. The supply rate has a slight bump to 4.5%.

![](https://i.imgur.com/2CnIVgc.png)

- For DAI, the supply rate (7.82%) and the total amount of lending activity (14.37 million) have also increased.

![](https://i.imgur.com/V9r3udQ.png)

- Net Sai+Dai has increased to 131 million. Total amount of Sai has decreased to 24.8 million, and total amount of Dai has increased 106.7 million. Migration proceeding.
- Total Sai supply trend shows a continual net decrease.
- The DAI supply trend demonstrates a continual increase.
  - Dai supply is increasing at a rate that outpaces the amount of Sai decrease. Net, there is more Dai+Sai in existence.
    - We can say this is a reflection of sentiment for leverage in cryptomarkets.
    - Next time may discuss how ETH price affects the amount of leverage that people are seeking.

![](https://i.imgur.com/28RHH9C.png)

- Proportionally, the amount of Dai supply existing at lower CRs has increased. This demonstrates bullishness.
- Trading activity in ETH and price movements in crypto, in general, demonstrate bullishness coming into play.

![](https://i.imgur.com/O2Ancrg.png)

- Total amount of Dai in the DSR increased to 49 million (46%).
- Out of 106 million Dai issued, there is 49 million in the DSR.
  - Savings rate of 7.75% is pretty high, compared to what is out there in terms of rates for secondary lending.

#### Questions to Vishesh:

[31:57](https://youtu.be/uBodW6zm7DY?t=1917)

- David: If the utilization rate gets high enough, and the DSR rate is high enough, is it possible that people cashing out their interest could have an outsized negative impact on the peg?
  - V: Outsized, compared to what?
  - D: If you have a bunch of DAI being pooled there and people are treating it like their other investments where they are making 7% but withdrawing 3%, and they are converting DAI into USD, doesn't that create steady selling pressure on the open markets if they aren't doing it OTC.
  - V: Conceptually, that makes sense, not sure how it happens in practice. The flip side is how you absorb DAI, which falls into the immediate cashing out activity. It is hard to say if people are immediately exchanging Dai into USD in that way. That is something that we can look at some well-known off-ramps and try to see what is going on there. I think it is worth looking at Coinbase orderbooks and centralized exchanges and see what information we can get. The flip side is that when Dai is being locked into the DSR, it is being taken off the market and reducing the selling pressure on the system. What you are saying isn't inaccurate but may be balanced out. It helps to think of the DSR as a lever and what the impact of the DSR.
  - D: Technically, we can infer something if we see that the DSR is growing over time. Or we can see if it shrinks over time, over a couple of weeks, despite rate setting. That could be a really important thing to consider.
  - V: 100%. Even in aggregate terms, how much is in the DSR(utilization rate) is an important data point. We should continue to have a discussion of what that data point means because it is by no means simple. For example, you can say that if more Dai is locked into DSR that it reflects a risk-averse yield-seeking behavior in the sense that instead of leveraging up, people are looking for a safer source of yield. That is one interpretation. Another is that it is a temporary risk shelter and that those people are just waiting for the right price. There are a lot of different ways to interpret this.
    - It is important to consider the DSR not as a stand-alone thing, but as a linked behavior. What is happening prior to that Dai getting into the DSR. Is it being minted simply for the purpose of locking up in the DSR? What is happening to that Dai once it leaves the DSR? Are people cashing out to USD immediately? Those types of linked behaviors tell you the most.

[36:50](https://youtu.be/uBodW6zm7DY?t=2210)

- Makerman: This discussion is one of the many reasons why I have been advocating paying a fixed % of the SF fees generated - to have the DSR pay rate be connected to 'utilization'. In this way, both utilization and rate can fluctuate with the markets.
  - Cyrus: Isn't the variance of the utilization rate expected to decrease dramatically over time? It's relevance as a number is temporary.
  - David: Is it temporary for over five years? Ten years?
  - MM: The rate isn't going to jump around unless you have huge moves into or out of it. Or, it can change if governance decides that we're going to go from 50% to like 80%. Then you can get a different fluctuation. The markets move radically at times, and the rates can move radically at times. I think in some ways it is good for it to fluctuate with the markets. When they don't, I think behavior starts to fluctuate, and you really want to moderate behavior and let the rates move.
    - I have an example of a control system, which is: the difference between a thing operating and going all over the map vs. applying the regulation model which absolutely fixes the thing I wanted to manage and let the other thing go all over the map? It's a question of what you want to see go all over the map, the rate? Or the behavior? I'd rather see the rate move.
  - V: There is some mathematical merit to that point. If you take this assumption that DAI will be minted and burned to reflect a desire to chase yield in the DSR and that DSR is a driver of demand, then the DAI supply would fluctuate as a function of the DSR utilization in terms of the rate vs. the actual demand out there for that yield. If you assume that the demand is fluctuating widely, which is reasonable when you take into account how SCD worked and how people's behaviors were in the secondary lending markets in crypto than what would happen is: If the rates are fixed, then the supply would fluctuate widely. If the rates are variable, then the growth of the supply based on the fluctuating demand would happen more predictably. You have to choose between the rate and the behavior fluctuating widely.

[41:53](https://youtu.be/uBodW6zm7DY?t=2513)

- MakerMan: I see it in the data that the peg tends to trade below $1 USD more often than above $1 USD. Two things we should take into account. The first is, what is the actual liquidity doubts for price. The second is anyone trying to arbitrage these peg rates has to pay significant fees. A round trip is anywhere between 0.2% to over 1%. You have to expect a fair amount of fluctuation based on the fees involved to arb, and that is going to give you a fluctuation. I would like to see it trade more equally around \$1 USD instead of below it.
  - D: Vishesh mentioned that it is a very small variance, likely due to the arbitrage and market depths, but it should still be considered a healthy peg and shouldn't warrant a rate adjustment based on that alone. I think the next step for the community is to define an acceptable range before considering rate adjustments.
  - V: These are not new conversations. There have been discussions regarding:
    1. How do rate adjustments impact price?
    2. Is there a necessary or inherent asymmetry in price movements above and below peg?
    - A lot of reasons for necessary economic asymmetry above and below the dollar peg. This is much more true in SAI, but many of these points still hold true.
    - Are you necessarily going to be able to force DAI to trade at exactly $1.000 instead of $0.998 or \$1.002? What is the inherent nature of these fluctuations? What is the resting state for DAI trading? This has never been resolved. And I don't believe it will ever be perfectly balanced.
  - M: I looked at a lot of the historical data for the peg. To me, it looks like we have a system on a growth path - starting at 16-20% SFs in Sai, things started to drop, and the peg started to rise significantly. I'm seeing an increase in the demand for DAI, an average of 0.5 million in outstanding Dai with SFs at 8%. What we're seeing when the peg sags a little bit is a system that wants to grow, but there is a downward selling pressure from people minting to do that. I'm trying to get a feel for the liquidity depth on these markets; I'm interested to know how much can be sold before the peg starts to drop. I agree with you in general, and I think we're within spec. But we are down a little bit, and I think we'll be raising rates at some point. There is a reason why I want to see the DSR at above 8%, and that's explained in my post: I think it will start pulling money over from everywhere else. Anything over 8% is going to pull every piece of SAI as a carrot reward into or out of the system. And then we're just left with the CDP owners that we have to figure out how to 'encourage.' But in general, I agree with you; it's just that the peg is trading in this way due to liquidity generation.
  - V: So there is another point, and that is: there are 25 Million DAI being supplied on Compound, and that is currently chasing a rate of 7.8%, which is just a hair above the DSR rate. Those are two things to be cognizant of: DSR does not exist in a silo. It is actually all about what that DSR value is compared to everything else available out there. If that DSR were to come up 0.5%, suddenly the incentives are to chase that rate until that amount of 25 million empties out based on Compound's utilization formulas and drives that rate up. Now you achieve a steady state.

[49:14](https://youtu.be/uBodW6zm7DY?t=2955)

- V: I'm curious, if people are supplying Dai directly into the DSR vs. the Compound supply pool, would those work economically differently, Cyrus?
  - C: If the Compound rate is tracking DSR because Compound Dai is in the DSR, if the DSR went up to 8%, then there would be a reallocation. But it would take very little to push the Compound rate up to 8% and some change.
  - V: It would quickly level out for sure.
  - C: I think the dynamics have reversed from last year. Last year, the Compound rate was set somewhat independently from the SF because of inefficiencies with the Maker protocol and the lack of a DSR.
  - V: This is fundamentally different from that because at that point, there was the only supply sink. You were only talking about the amount you minted vs. the amount that you borrowed from Compound. And no doubt, the amount being borrowed has an effect on the amount of the utilization of Compound. My point is that: in the event that the DSR were higher, let's say 8%. Theoretically, some people would withdraw Dai from Compound to put in DSR. In turn, DSR utilization would go up, but DSR rate would not be impacted. Whereas the Compound utilization rate would go down, pushing up their supply rate closer to DSR.
    - The compound supply rate would theoretically go up because the amount being supplied would go down. So those would level out. The question is: how dynamic should the DSR be? If you are trying to manage the amount of secondary lending supply vs. the DSR if you care about that value, then how you set those rates does matter.
  - C: That back and forth does not affect the DAI peg. It doesn't affect the amount of outside capital coming into the DSR. But the existence of Compound allows the existence of additional liquidity for people locking up DAI such that the DSR doesn't have to go as high as it normally would have. With Compound, the DSR absorbs more of that market-share for locking of Dai.
  - V: It's a trade of, because if there is less supplied on Compound than theoretically it is more expensive to borrow off of Compound. Which theoretically puts less DAI on the streets at the end of the day. If you are putting Dai into the DSR than it theoretically has no impact on the amount of liquidity on there, the amount of Dai is just floating. So there would be no price impact. Additionally, there is also a cost in maintaining the DSR. So it is a choice.
  - MM: Since Compound has matched rates, this is a nonevent with respect to Compound. I have SAI in Nexio at 8% until they start to do DAI. But this whole idea of DAI in Compound is because you can borrow other assets against it. You can't do that in Maker, but you can in other markets. So I think you are talking about an interest rate arbitrage opportunity which doesn't exist between Compound and Maker. No one will do anything for 0.1%, and we've seen that. There are other reasons why people have their money: either to earn the return or to borrow against it. What's out there is determined by how much Maker mints and how much floats around in the system. Since Compound is basically pegged and other places are pegged to DSR, this becomes a non-issue. I don't see it having an adverse effect. It's absorbed up a ton of liquidity, which affects overall liquidity, which in turn does affect the peg.

## Governance

### LongForWisdom

#### Forum Activity Recap

[55:41](https://youtu.be/uBodW6zm7DY?t=3341)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [A summary of some organizational management concepts applied to MakerDao](https://forum.makerdao.com/t/a-summary-of-some-organizational-management-concepts-applied-to-makerdao/1194)
  - Mitote brings us a summary of some academic writing related to organizational management. Potentially lots of advice and suggestions to glean from this.
- [Should BAT SF be reduced?](https://forum.makerdao.com/t/should-bat-sf-be-reduced/1192)
  - A new member of the forum asks about the BAT stability fee and whether it should be reduced, which prompts some discussion of asset-locked to market-cap ratios and other thoughts.
- [Lowering the Sai debt ceiling](https://forum.makerdao.com/t/lowering-the-sai-debt-ceiling/1190)
  - Cyrus suggests lowering the Sai debt ceiling to 30 million and lowering the ‘target buffer’ to 5 million going forward. Discussion ensues, but it appears that the on-chain poll for the lowering to 30 million will pass. (_On-Chain poll passed_)

##### Seeking Signal

- [Should we implement a tax during SCD Shutdown to recuperate unpaid Stability Fees?](https://forum.makerdao.com/t/signal-request-discussion-should-we-implement-a-tax-during-scd-shutdown-to-recuperate-unpaid-stability-fees/1166)

  - Aaron presents a thread discussing SCD shutdown, particularly the use of the `tax` parameter. Beginning with a poll, it expanded into a discussion of several options related to the shutdown.
  - One debate is: Should we charge people more than the fees they accrued? LongForWisdom thinks no since there is a problem with having people pay more than they should have. The second point is optics since we'd have to explain `tax`: where it came from, the game-theory and the word is highly charged. If we inflict this on CDP holders, they may not use the system in the future.
  - (Options/summary from halfway in the thread):
    - Lower DC, shut down in 6 months, forgive all fee debt.
    - Swap Fee for `Tax`, shut down in 6 months, forgive debt from before migration (or starting as soon as agreed upon)-> Maker forgoes past accrued SF, but this reestablishes correct incentives for CDP holders.
    - Shutdown in 6 months, flash tax at the end, no debt forgiveness -> it's not quite the same as the above point since the flash tax would not be relative to CDP age at all.
    - Lower DC, keep managing the system, close when one of the parameters is hit (6 months, 10M supply, .05 peg deviation) -> No debt forgiveness and no trying to recuperate fees through `tax`.
    - Lower DC, manage the system for six months, stop supporting after six months, let collapse on its own, determine GS sometime in the future. -> Gives CDPs time to get affairs in order, then they’re on their own.

- [Should Maker make a Treasury to manage revenue?](https://forum.makerdao.com/t/signaling-request-should-maker-make-a-treasury-to-manage-revenue/1122)
  - In addition to the discussion thread above, Mitote creates a signal thread to gather opinions.
- [How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965) _Moving On Chain_
  - LongForWisdom combines the previous signal requests about bundling into a single request that asks for how specifically we should deal with bundled executives.

##### Thread-Focused Discussions

_Disclaimer: Some of these conversations are hard to transcribe and capture accurately. For the best recap, listen to the recording itself._

[A summary of some organizational management concepts applied to MakerDao](https://forum.makerdao.com/t/a-summary-of-some-organizational-management-concepts-applied-to-makerdao/1194)
[56:35](https://youtu.be/uBodW6zm7DY?t=3395)

- Mitote: I compiled academic reading in organizational management. The thread summarizes how stakeholders in Maker work together. Specifically, I was looking into how these groups work together to achieve a shared goal.
  - Rich: Main takeaways?
  - M: For coordination, we have to consider the independence and uncertainty of work tasks. They have various definitions. The characteristics of the functions inform the most effective coordination for the organization. [The paper on Meta organization](https://onlinelibrary.wiley.com/doi/10.1002/smj.1975) evaluates new systems thoroughly. It examines open-source or non-traditional company structures, where all the actors are autonomous but have a less traditional relationship with the organization. Much of this is surface evaluations since blockchain Governance isn't in the academic literature yet.
  - R: Will this help us to identify a structure to the DAO? We have the foundation line, but beyond that line: what is MakerDAO? What is the DAO's identity is a complex subject.
  - M: Ultimately, we want to find to migrate the tasks that the Foundation completes to the community. How do we think about the infrastructure that makes that happen? Especially for Governance, where we have to vote, ratify, and coordinate all this information. If we're coordinating that information effectively, we can try to self organize. Additionally, there is a global context of different languages and traditions.
  - R: Anything about traditional co-op models? DAO's seem to align closely with those.
  - M: This preliminary research wasn't exhaustive, but I'll look into it.

[Lowering the Sai debt ceiling](https://forum.makerdao.com/t/lowering-the-sai-debt-ceiling/1190)
[1:01:45](https://youtu.be/uBodW6zm7DY?t=3705)

- Cyrus: Lowering the debt ceiling until we get clarity on ES is the prudent course of action. There's no _severe_ attack vector. Preventing \$20 Million of space in the debt ceiling seems like a good idea. Some questions came up about lowering below current Sai supply, effectively cutting off new Sai mints. Again that concern depends on what happens with the ES discussion.
  - SamM: The reason we're talking about lowering the debt ceiling: if the poll to implement `tax` wins out, then there is an incentive to max out the Sai debt ceiling, migrate the Sai, put it in the DSR, and collect the interest without fees until shutdown.
  - Cyrus: Depends on perspective, but the additional risk would be for PETH holders. Enabling space for regular economic activity, but limiting a small amount of Sai isn't mitigating too much risk. It's overly restrictive for minimal benefit.

[Should we implement a tax during SCD Shutdown to recuperate unpaid Stability Fees?](https://forum.makerdao.com/t/signal-request-discussion-should-we-implement-a-tax-during-scd-shutdown-to-recuperate-unpaid-stability-fees/1166)
[1:04:42](https://youtu.be/uBodW6zm7DY?t=3882)

- D: How about setting a date to close the migration contract? Would that be a sensible first step towards GS?
  - C: Not sure if that's a super important factor. There are other ways to move SAI<->DAI.
  - D: An open migration contract is the simplest way for a 1:1 swap.
  - C: Presuming a date, wouldn't you want an opportunity to migrate? What would closing it achieve?
  - D: One possibility is, it would sidestep the tax and fees question. We could add weight to the tax discussion by making the open market the only solution.

[1:11:28](https://youtu.be/uBodW6zm7DY?t=4278)

- Aaron: Starting a discussion from halfway down this thread
  - Lower DC, shut down in 6 months, forgive all fee debt.
  - (relisten until 1:14:08 for full details)
- Sam: Swap Fee for `Tax`, shut down in 6 months, forgive debt from before migration(or starting as soon as agreed upon.) In this case, Maker forgoes past accrued SF, but this reestablishes correct incentives for CDP holders.
  - Sam: By swapping, we would vote just like the SF. The idea here is to prevent abuse. Pros are we don't have to lower the debt ceiling. Also, the distribution is fairer moving forward. A tax at the end penalizes people with shorter time horizons. Cons are MKR holders lose out on fees from CDP owners. Also, another drawback is incentivizing CDP owners to hold until shutdown.
  - L: It's not entirely fair because some have accrued more or fewer fees so far.
  - S: It's beneficial to people with positions open right now. Moving forward, it's fairer to everyone.
  - A: We talked about a flash tax on the last call, but I imagined a middle of the road hybrid. A swap right now and a flash tax at the end. You accrue SF's at the same rate now, but you calculate tax from this point on to the end. Adding them all together at the end is how you calculate tax. It allows MKR holders to maximize the amount they can burn. if they want to see the most revenue, that's a good compromise.
  - S: One downside with tax at the end: it's an unfair distribution since people would open/close CDP's in that period.
  - A: The difficulty with fairness is that you can't make everyone aware. It's hard to engineer a system with these assumptions. If someone doesn't follow updates, go away for six months, and return to a tax, they're surprised. The maximum chaos solution is:
    - Lower the debt ceiling and manage the system for six months. After that time, the system will do what it does, and we should let it devolve. We can move on from there. If it has crazy deviation, off the peg by 10 cents and low liquidity, we can let it go.
    - These parameters were thresholds to initiate GS. It gives the community an understanding of when MKR holders might be missing out on fees.

[MakerMan's argument](https://forum.makerdao.com/t/signal-request-discussion-should-we-implement-a-tax-during-scd-shutdown-to-recuperate-unpaid-stability-fees/1166/40?u=twblack88) from the tax/SCD shutdown thread.
[1:21:15](https://youtu.be/uBodW6zm7DY?t=4875)

- Makerman: CDP holders have an issue, game-theoretically. All these people who paid fees on time, now we're trying to forgive `tax`. I outlined in my post:
  - We should just stick to lowering the DC, to dis-incentivize minting for a free loan before exiting.
  - Like Cyrus, I suggested a time frame, constrained liquidity (below \$10 Million), and small peg deviation(.5 on the peg up or down). Once six months passes, and those conditions exist, ES can happen at **any** time.
  - We need to punish people for gaming this. A hazard that grows for CDP holders that is less of a penalty upfront isn't ideal. The tax should be a total of SF's plus some penalty percent. E.g., every week, the SF goes up a 1/2 percent.
  - We need to make people responsible for taking out debt; there's one holder with 40% of outstanding. We're doing a test to incentivize the group properly. Anyone who fails that test and doesn't close out, well, they get what they get.
  - Let's highlight one fact: the peg can/will deviate if you want to be in that volatility market than good luck to you. I'd like to see the DSR go a little higher to incentivize migration.
  - I think fairness isn't the right frame. Maker has been very clear about shutdowns, fees, and tax. Everyone has to pay fees.
  - Give my proposal a read, digest a little bit and remember that I want the conditions to be more transparent, but the exact close date more opaque. We need to incentivize all players not to reward everyone improperly.
  - When you make it conditional, then the markets will move in the rush to the door at any time. I think migration is going well, and I wrote the post since I think we'll get there.
- Sam: Your proposal is the same as Nik's, right?
- L: I believe Nik was a proponent of increased communications, a nuanced difference.
- MM: I'm saying adjust to the necessary minimum: reducing the ability to game the system. I think we'll be stuck with 3088, and that's the majority of the fees.
- S: Uncertainty is a great addition!

#### Links from the Chat

- [Dai auctions](https://daiauctions.com/)

## Credits

- Tim Black produced this summary
- David Utrobin produced this summary
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call, as listed in the headers and discussions.
