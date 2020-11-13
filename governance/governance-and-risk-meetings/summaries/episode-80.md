# Episode 80: March 19, 2020

## Agenda

- [00:00](https://youtu.be/N03Aw8lzJFE): Intro with Rich Brown
- [5:00](https://youtu.be/N03Aw8lzJFE?t=303): Flop Auction Presentation Including Visuals with Vamsi
- [12:31](https://youtu.be/N03Aw8lzJFE?t=750): Auctions UI Walkthrough with Adrian Le Bas
- [28:05](https://youtu.be/N03Aw8lzJFE) USDC Risk General Discussion with Cyrus Younessi
- [57:03](https://youtu.be/N03Aw8lzJFE?t=3423): Discussion on Adding More Stablecoins to Spread Risk with LongForWisdom

## Video

<https://youtu.be/N03Aw8lzJFE>

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

## Introduction

### Rich

#### Brief Overview of Agenda

[00:00](https://youtu.be/N03Aw8lzJFE)

- Morning everyone and welcome to Thursday, March 19th, for a regular schedule Governance and Risk call. We've had these daily because of an aggressive focus on monetary policy and governance in the last few days. We have more individual items to discuss today, as opposed to longer threads in the past week. LongForWisdom has a list of topics to dig into, based on top forum activity.
- One of the topics from LFW is how to manage PR as a community.
- We should also consider the topic of onboarding other stablecoins to spread out potential risks of introducing USDC. We can assign risk profiles to certain collateral, so we'll consider that for other assets.
- We'll have a presentation regarding the flop auctions as well as their UI. These auctions are going on right now and are very important.
- Please get on the mic today to keep the conversation vibrant. This is the place for campaigning, discovery, review, etc., if you have opinions about how the protocol should move. Those threads go to posts on the forms; those posts become polls, those polls become action. That's the lifecycle, and if you feel strongly about anything, this is open governance, and it works.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Technical

### Vamsi

#### Flop Auction Presentation with Visuals

[5:00](https://youtu.be/N03Aw8lzJFE?t=303)

![](https://i.imgur.com/oKpE0it.png)

![](https://i.imgur.com/Hy3aadB.png)

![](https://i.imgur.com/poTG3wF.png)

![](https://i.imgur.com/3bl9hgA.png)

- Bid expiry resets after a new bid, at 3% less.

![](https://i.imgur.com/jnKtHKx.png)

![](https://i.imgur.com/aS1zseD.png)

![](https://i.imgur.com/2GQxS9r.png)

![](https://i.imgur.com/aaqhEXC.png)

#### Questions and Comments

[10:07](https://youtu.be/N03Aw8lzJFE?t=609)

- David: Just to clarify. In flop auctions, if there is a bid, the timer restarts the six hours auction duration? If they keep bidding, the clock moves up to a maximum of 3 days?
  - Vamsi: Basically, yes. The auction will still end after the three-day mark, which is the maximum auction duration (tau).
  - D: This isn't the case for collateral auctions.
  - V: The only reason that isn't the case for collateral auction is that both the bid and the auction time expiry is 6 hours.

### Adrian Le Bas

#### Auctions UI Walkthrough

[12:31](https://youtu.be/N03Aw8lzJFE?t=750)

![](https://i.imgur.com/M3cHqV1.png)

- We'll go through this again, like yesterday, but a little more calmly. You can see live auctions on mainnet. I'm currently on Kovan.
- A reminder that this app is seven days old, so it's still in beta.

![](https://i.imgur.com/yTYnmj5.png)

- These are the current auctions happening right now. Looking at the `tau` and `ttl `. Grey is the `tau` of the whole option.

![](https://i.imgur.com/0v1j9BX.png)

- We did add a glossary with descriptors. We'll edit the text to make it clearer and correct any typos in the next few hours.

![](https://i.imgur.com/bsUoyJf.png)

- Filters should help with exploring Mainnet auctions. If you're participating or want to display on-going auctions, you can do that here. If you can't connect your keeper via the wallet UI, you can filter by bidder ID.

![](https://i.imgur.com/pOOU9hT.png)

- Assuming you are connecting with a cold wallet, you'll have to authorize the transactions to unlock your balances.
- Deposit and withdraw goes to your locked amount in the Vat. You can see the authorized amounts at the top of the screens.

![](https://i.imgur.com/NwgeZ2L.png)

- Assuming your balances are right, you can pick an auction in the `kick` state, or you can find one that has `dent`, and you can outbid that current bidder.

![](https://i.imgur.com/TkDFv0j.png)

- Now you're the current winning bidder. You'll also see the error thrown if you aren't within the 3% adjustment, as Vamsi explained earlier.

![](https://i.imgur.com/uZ1ezSs.png)

- One thing to keep in mind, as an active bidder, is that the `filter by bidder ID` functionality becomes more relevant for you. You can use them to keep an eye on the auctions you're participating in. If you win, you can press the deal button and can get the MKR in your wallet faster. Bots will be calling `deal`, the function to settle the auction, automatically but if something happens to them, you can use this button on the UI to `deal` manually.

- Petru: As a note, when you're the successful bidder, there is no transaction incoming of MKR coming to your address. There is just a change in the smart contract, updated with your address. When you are the **winning** bidder, you'll see a 'mint' event in the smart contract. If you check your balance, there will be an update without having any new inbound transactions.

- Adrian: We're going to continue to work on the UI to squash bugs, make sure it's performing well and can run 100 parallel options. We feel good about the cache API. Once it's good, we're going to jump into `flip` auctions and then later `flap` auctions.

### Quesitons

[22:29](https://youtu.be/N03Aw8lzJFE?t=1348)

- `chat` Devin: So are there only 13 auctions going on right now? How do I see if there are any auctions with 0 bids? When will more auctions kick-off?

  - The liquidation and collateral auctions happen over time, and the rest of the auctions will happen over time as well. The question was answered in the chat by Cyrus.

- `chat` BrainMcMichael: By comparison, if you dump 50k Dai into Dex.ag right now, you'll get 182 MKR at a price of 274.23 each. Current auctions are still a 20% discount to the market.

[23:50](https://youtu.be/N03Aw8lzJFE)

- Rich: Have we seen a complete life cycle occur yet? Or is it still going?
  - C: It will take 6-72 hours to see the complete life cycle of a given auction. You can see the system debt go down in real-time in Dai stats. Every time an auction is started, the system recognizes that some of the debt is cleared.
  - The MakerDAO backstop syndicate is also up and running. The barrier to entry is much lower now, thanks to the UI.

[26:13](https://youtu.be/N03Aw8lzJFE?t=1573)

- Cyrus: There is also a bit of a rally in the crypto market right now, so there is a noticeable difference in pricing. An interesting edge case with auctions too, where if the market rally continues, we may see more and more bids. This first round of auctions may conceivably take one or two days as more and more people take advantage of the longer duration. Three days is the upper bound, though.
  - LFW: Good for the system?
  - Cyrus: Correct.
  - Kurt: More precisely, it's good for MKR holders. As the auctions continue with higher bidding, the system gets more recapitalized. The higher things go up the less dilution of MKR.

## Risk

### Cyrus

#### USDC

[28:05](https://youtu.be/N03Aw8lzJFE)

- There has been an enormous amount of discussion and chatter in the [forums regarding USDC.](https://forum.makerdao.com/t/usdc-peg-arbitrage-vs-auction-liquidity/1695)
- The community should be targeting the specific use cases for the USDC collateral type. The primary reason for adding this collateral type is to provide liquidity to auction keepers who face a shortage of Dai during heavy auction active days. Dai liquidity was a critical factor in zero-bidding last week.
  - At the same time, severe dislocation in the Dai price trading at $1.08/$1.09, a lot of regular keepers are using the USDC collateral type to help arbitrage the price back down. While it's not easy to draw perfect causation, the Dai price has improved significantly since USDC has been added. 6 million Dai has been generated in a short amount of time. Tracking this Dai on-chain, it is easy to see that a lot of it has been hitting dexes and secondary lending platforms for peg arbs. I think it's reasonable to assume that the Dai being generated is helping the Dai price.
    - The Downside is we are rapidly eating away at the 20 million DC of USDC as it is currently at only 14 million of room left. If we suffer another extreme price drop, auction keepers will once again have reduced Dai liquidity capacity from the USDC collateral type.
  - The most elegant solution that I've seen is to add a separate USDC collateral Vault type. One can be allocated toward arbitrage, with the other reserved for auction keeper liquidity. The methodology is to price out one use case vs. another. Some of the risk that I've been working on is trying to estimate what the ROI on Dai peg arbitrage might be, based on Dai requirements and length of time of potential trade, with a subsequent increase in SF above that number.
  - The question is: how high does that SF need to be? I'm not quite sure right now. Initial estimates are 50% SF range. If you can borrow Dai at 50% less SF, and make some assumptions based on how long it takes to make the trade, it will potentially not be worth it to sell at $1.03 or $1.04. There is also the separate question of: why would we want to cap the amount of DC for peg arbitrage? Why not allow as much USDC as possible so that the peg can quickly return to one dollar USD? The answer is if that's the case, we're likely to see perpetual day-to-day exposure of USDC in the collateral pool. This may be undesirable to the community. For the auction keepers, it would only be in the system for a short burst of time. Potentially a couple days or weeks, if that, which is significantly less long-term exposure. Governance may not want to accommodate too high of a DC.

### Discussion and Comments

[34:25](https://youtu.be/N03Aw8lzJFE?t=2065)

- '`chat` Matt Lucas: Why keep two separate facilities(Vault types) for USDC rather than just keep a single one with high SF and treat it _only_ for emergency liquidity for auction keepers?
  - That was another idea. I think the short-term improvement to the Dai peg is welcome. In terms of demographics, I think keepers are flexible in how they make money. This question is more about what kind of USDC exposure does governance wants to have: perpetual day-to-day in one case and short-bursts in another.
  - ML: We would be much more comfortable in keeping this only as an emergency facility. While bringing the Dai price back down is welcome, it is less pressing than the potential black-list risk of USDC on an on-going basis. To me, it isn't worth the trade-off.
  - C: I tend to agree with you. At the very least, we need some more discussion on the Dai peg use-case.
  - LFW: On the peg case, that does also help in the case of a liquidity crunch. While we want auctions to be successful, we also want Vault owners to close their vaults before they get liquidated. They will be more willing to do that and lose less if Dai is closer to one dollar.
  - Kurt: There is an inherent systemic risk in arbitrage based on USDC since it won't go up in price with the rest of the crypto markets. When someone arbitrages the Dai peg with USDC, they depend on the Dai peg to go back down to where they can profitably close their position. If the Dai peg doesn't come back down and fees accumulate, there will be a liquidity crunch of people closing positions before they go negative.
  - LFW: I see it more as spreading the risk out, spreading the crunch out across a longer time scale.
  - Kurt: You're spreading the risk out, hoping the markets will recover. But if they don't recover, it can be worse. It's a gamble.
  - Cyrus: There is clearly a use-case for the peg arbitrage, but we need to spend enough time pricing the risk and figuring out what kind of exposure we want. For the auction keeper liquidity, the exposure risk is significantly lower because we would essentially not expect to have USDC in the collateral portfolio unless it was an extreme situation, and you wanted to assume that risk. For right now, we're coming up to a position where we may not have the auction liquidity that we need(if ETH crashes badly.) Governance will have to do some work to sort these issues out.

[39:16](https://youtu.be/N03Aw8lzJFE?t=2356)

- LFW: Are you able to estimate the debt ceiling that we need for auction keeper emergency liquidity? Is someone else working on that?
  - C: I don't know if we have a great way to estimate that, but looking at the liquidation price points and how much Dai needs to be liquidated for keepers as a whole are all research points that need to be undertaken.

[39:53](https://youtu.be/N03Aw8lzJFE?t=2394)

- Rich CL: If we keep the USDC open and lower the SF, in terms of day-to-day exposure of USDC collateral, is there a number to which Risk would be comfortable keeping the SF and not affect the other factors? In this way, we can mitigate the peg effect in future crunches but maybe not make affect other use-case opportunities.
  - C: That's the million-dollar question. It depends on what you are trying to optimize for. If something happens and Maker has to eat a 20 million dollar loss, I think Maker would survive and eventually stabilize through flop auctions. But that isn't desirable. This solution involves estimating the sort-of likelihood that such an event can happen. If the risk happens at 5-10% over the next year vs. less than 1%, it's risk/reward, and these trade-offs will be decisions that governance will have to make in order to derive a debt ceiling that reflects their tolerance.

[41:15](https://youtu.be/N03Aw8lzJFE?t=2537)

- LFW: Something to consider with changes to SF on the current USDC package is that the people who are currently using it for peg arbitraging may be annoyed.
  - C: Yeah, that probably wouldn't be a good idea. If governance wanted to reduce peg arbitrage, then lowering the debt ceiling and taking it from, there would be the best idea.
  - LFW: I guess the main thing is to figure out the split of debt ceilings between the two. I feel like no one is super keen on increasing from 20 million.
    - C: It's still very early. There is still a lot of data analysis that needs to go on. The peg arbitrage needs to be heavily analyzed. One criticism is: if keepers are only minting Dai from USDC when it is above the peg and then trying to cover their positions at one dollar, then the net effect could potentially be neutral. People are willing to mint Dai using ETH as collateral, whether peg is above or below. But if the keeper use case for minting Dai from USDC is too narrow, it may not be giving MakerDAO the tangible benefits that we hope for.
  - Matthew R: Well, the primary use case would be to bring the Dai amount down from above one dollar. It probably isn't as useful today, until the markets mature, to help pull it up.
  - Cyrus: Right, so if Dai is minted when it is above a dollar and then keepers try to buy Dai back at a dollar, is the net effect that significant in terms of benefit?
  - LFW: The point is spreading it. In a crunch, Dai from everything is going down. Some ETH holders will be more risk-averse than others during a crunch. As the price becomes less volatile, it will invite more people to come in. As the confidence in ETH improves, more people will return to ETH as a collateral type. This dampens Dai volatility and spreads out the effect.
  - C: I tend to agree with you, just putting up arguments that I've heard. I think it does dampen volatility.

[46:38](https://youtu.be/N03Aw8lzJFE?t=2798)

- R: Speaking of volatility dampening, we saw yesterday [a link that was circulating](https://collateralswap.com/), the idea being that people are swapping from an ETH vault to a USDC vault in times of volatility. Have you had a chance to give this some thought?

  - C: I saw that link but haven't had the opportunity to explore it properly.
  - Primoz: I can talk about it. These tools allow you to swap collateral without really closing a position in the sense of buying Dai on the market with ETH that you withdraw from your vault. The flash loan is used to repay your vault so you can just do an ETH to USDC trade and then open up a new vault with USDC collateral to issue the same amount of original Dai and repay the flash loan. This means that you, as a user, do not depend on the liquidity of ETH to Dai, which is great because that liquidity is more available for market makers and keepers. This means less pressure on the ETH to Dai liquidity.

- R: Matthew, can you tell this about repo substitution. Is that what this is similar to?
  - MR: Fundamentally, the Maker credit facility(Vault) is a repurchase agreement. Whenever you have a repo outstanding(in the real world) with collateral A, you can do a number of substitutions swaps for different collateral. It depends on the rules, but almost never are you able to do an unlimited amount of substitution. In effect, this flash-loan- refinancing-out-and-then-substitution tool is exactly this. The whole point is the potential to hit the USDC limit and then go right back down.

[55:40](https://youtu.be/N03Aw8lzJFE?t=3341)

- Cyrus: Regarding the debt ceiling for peg arbitrage: There are tools that estimate the number of sell bids on the USDC<->DAI pair. Governance can estimate how much Dai needs to be sold to get the peg back down. Roughly about \$5 Million biddings above a dollar right now. Neat data point to track.

## Governance

### LFW

#### Adding More Stablecoins to Spread Risk Discussion

[57:03](https://youtu.be/N03Aw8lzJFE?t=3423)

- LongForWisdom: There is a range of stablecoins out there to consider. USDC has a certain risk profile, and we could augment the total system risk by potentially adding more stablecoins. The loss is less if we decide to do another.
  - I don't think people have done much thinking about the differences in risk between them; it's just a general argument that if there were more, there is still a diversity benefit.
- Rich: What would be the options?
  - LFW: TUSD would be the first we can look at. PAX and Tether were mentioned, though I'm not a fan of Tether at all.
  - SamM: USDC is definitely the highest in terms of Dai pair liquidity.

[01:02:27](https://youtu.be/N03Aw8lzJFE?t=3749)

- Rich CL: When is the proverbial dust settle, how will we know if USDC was effective as a collateral type?
  - SamM: Dai price is going down, so it seems like it is working.
  - Rich: That's the difficulty of changing things in a dynamic environment. There isn't a clear evidence trail that demonstrates the effects of changes. Hopefully, we'll see something in the next few weeks.
  - Vishesh: The question isn't the effectiveness of stablecoin collateral. People will constantly be looking to arbitrage if there is an opportunity. There is a question of the risk of USDC fundamentally as a collateral type. It's more about having a conversation about the qualitative risks of USDC as collateral.
  - Rich: So you're saying because we took one type of risk here(USDC,) doesn't mean that we can justify it to take the same risk over there(different stablecoin collateral.)
  - Vishesh: Yes, and you also added it during a specific time for a specific solution. It doesn't make a blanket "OK" that this is a "low-risk" decision.

[01:08:15](https://youtu.be/N03Aw8lzJFE?t=4094)

- Samm: Using the USDC Vault Stability Fee is a way we can control for how short term we want USDC collateral in the Maker Protocol. If we go back into a bull market, USDC should go back to 0. If we want shorter borrowing windows, we can crank up the Stability Fee.
  - Mitote: We don't know how USDC is going to behave, and when we rushed it in in this manner, we didn't do a full analysis of the situation. We brought it in for emergency response. We don't' fully know if it's working, but we think it is. That shouldn't set a precedent for the future.
  - Sam: The way the parameters are set, it shouldn't cross zero unless there are emergencies.
  - MR: We've been discussing stablecoins as collateral for a long time. Primarily as a market-maker opportunity. Though we added it in because of the recent emergency, in extreme times, it helps with peg problems. It's primarily an arbitrage tool.
  - Sam; Yes, but the timeframe of the position gets lower, the higher the SF is. We can have the control that way is what I'm saying.

[01:10:58](https://youtu.be/N03Aw8lzJFE?t=4260)

- BrianMM: whatever the debt ceiling is for USDC is probably what's going to be the loss that's incurred if USDC has its own black swan event.
- BMM: Gonzalo has been working on a governor-throttle for collateral types we want to keep a tight DC on. Where it can adjust every hour, but it doesn't' allow a flood to the debt ceiling all at once. It will be worth the community to consider.

[01:13:38](https://youtu.be/N03Aw8lzJFE?t=4418)

- CMooney: For any custodied collateral type, we always risk black swan of `join-adapter` getting black-listed. We need to price in that risk, except for emergencies where we have an `IAM`(Instant Access Module) implemented.
  - BMM: Agreed, and we lost 5.6 Million in these flops. But if we lost \$20 MM in a flash because of USDC, that makes the current situation look like peanuts.
  - LFW: So does that mean there's an argument for using it for liquidity and not as a peg management tool.
  - Rich: The risk teams should be able to give us a portfolio overview of the risk. The protocol should be able to manage the risk based on what limits we decide to impose. Is it right that the protocol needs to absorb the risk of losses by USDC as collateral, and so should set parameters accordingly for that? Do we just need to set the limits?
  - Cyrus: That principle still holds. This is more a technical question of preventing Maker from being exploited in otherwise normal times. One workaround would be to have a USDC Vault type for auction keepers but set DC to zero. When the time comes when it is needed, we could increase the DC through an executive vote. The only fear is a race-against-time given auction dynamics and trying to get votes in on time. The trade-off of \$20 MM DC sitting unused.
  - MR: you say unused, but flash loans and substitutions make it murkier. It could easily repay in a block. It depends on the sophistication of flash loans.
    - LFW: We would still see on transaction on-chain.
  - LFW: We don't have to have \$20 MM all the time. We could be more reactionary with amounts.
  - MR: 100% agree. It rips the band-aid for the first time having off-chain collateral. What those risk parameters look like around something that theoretically could be confiscated. That's the rest of the world. Real-estate, for example, stocks, or treasuries, bring the rule of law to the protocol. Having a low DC keeps it constrained but allows us to be agile.
  - CM: We may want to constrain the DC to the system surplus once we add that backup. That way, if we ever took a hit, it would be limited to the surplus, and the MKR dilution wouldn't need to happen.
  - LFW: That's a good idea, actually.

[01:20:37](https://youtu.be/N03Aw8lzJFE?t=4838)

- Mitote: I think we need to think about the practical governance aspect. Will we be able to pass these changes during future emergencies given MKR voter response time?

[01:21:37](https://youtu.be/N03Aw8lzJFE?t=4892)

- LFW: I guess we need to settle about USDC, so do we need immediate changes? Since we added it to aide in auctions, do we need to change anything now that the risk in the short term seems lower?
  - MR: Was our reasoning only auctions? The prime objective should be peg at 1.00000. It's still useful to have it out there for the arbitrage capability to help the peg.
  - Cyrus: Yeah, I don't' disagree with that, Matthew. To answer LFW's question, we can all benefit from more research. Taking more time to process the situation is important.
  - Rich: Agree. There are post-mortems to do. We're still in the thick of it. Using that information will allow us to think about this more clearly next week.

[01:25:14](https://youtu.be/N03Aw8lzJFE?t=5114)

- Rich: I would like to talk about correcting misconceptions as a community. Does that align with your topic of PR(public relations) LFW?
  - LFW: Yeah, currently, the DAO can't speak authoritatively. We have a voting voice but not for talking to the outside world. Perhaps we can revisit this topic on our next call
  - Rich: Maybe there can be a group in the community that handles that. I think we should devote more time to it on the call tomorrow.

#### Links from the Chat

- [Flop Auctions Dashboard](https://auctions.makerdao.com/flop)
- [Daiauctions.com](http://daiauctions.com)
- [if anyone wants to participate in the syndicate, list your info here](https://docs.google.com/document/d/1miS-snhSYBKwjQHM1MOPnLZZl9i2gj3zTcvuQWecV2M/edit#heading=h.tel4eqi48x61)
- [CollateralSwap idea website](https://collateralswap.com/)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
