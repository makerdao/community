# Episode 79: March 18, 2020

## Agenda

- [00:00](https://youtu.be/AIW7lFg6gBI): Intro with Rich Brown
- [06:00](https://youtu.be/AIW7lFg6gBI?t=360): Flop Auction Parameters Forum Post Overview with Rich CL
- [22:32](https://youtu.be/AIW7lFg6gBI?t=1352): Demo of Debt Auction UI with Adrian Le Bas
- [31:45](https://youtu.be/AIW7lFg6gBI?t=1903): Circuit Breakers, USDC collateral, the potential Dai liquidity crunch with Cyrus
- [1:12:43](https://youtu.be/AIW7lFg6gBI?t=4363): SCD Shutdown Discussion with Aaron Bartsch
- [01:36:05](https://youtu.be/AIW7lFg6gBI?t=5760): Maker Backstop Syndicate Overview

## Video

<https://youtu.be/AIW7lFg6gBI>

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

### Rich Brown

[00:00](https://youtu.be/AIW7lFg6gBI)

- We had deeply technical discussions yesterday, and the day before, today, we'll dive deeper into a few issues. We need to use these calls to surface ideas that go to the forums for Governance. Keeping our life-cycle of finding signal here > bringing it to the forum > and refining signal to bring to the voting portal. Let's brainstorm and keep up the momentum.
- We'll review the flop(debt) auction parameter discussion. The community needs to take action to protect users and shore up the system. We can alter these decisions in the future, but we need to take corrective action.
- We'll also discuss SCD shutdown and circuit breakers. There has been a lot of armchair economics lately, but we're here in this group to stay ahead of the trends. Since our ecosystem is adversarial by nature, it designs protections, immunity, and check and balances in the absence of meta-rule books. One of these checks and balances are circuit breakers. We'll discuss how this affects the ecosystem writ large.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Governance

### Rich Cuellar Lopez

#### Flop Auction Parameters Forum Post Overview

[06:00](https://youtu.be/AIW7lFg6gBI?t=360)

- [Forum Thread](https://forum.makerdao.com/t/flop-debt-auction-parameter-adjustment-discussion/1665/4)
- Rich CL: Scheduled debt auctions are coming up. They may fail to attract bids, given the current starting parameters being very close to the market price. We want to mitigate the risk of no-bids due to a lower spot price than the MKR price that the auctions are currently configured to start with. Some options:
  - 1. Let the auctions go on as is, no parameter change.
  - 2. Delay the auctions for a couple of days, week, or indefinitely.
  - 3. Change the lot size (`dump` parameter), the length of the auction `tau`, or the discount factor from one failed auction into another (`pad` or the padding).
- Rich CL: On a high level, increasing the lot size will bring the implied MKR price down. Increasing the discount factor(`pad`) means the implied MKR price will drop faster on a failed auction. There are other options outlined in the forum post.
  - Aaron Bartsch: Spot prices are hovering at $200. We should keep it for $200, seems like market prices are keeping to the auction prices.
  - Dawson: Agree. dyDx trading at 200\$ per MKR since there is a Dai premium.
  - Aaron: Dump price is 'guaranteeing' price.
  - David: I wouldn't say that guaranteeing is a strong word.
  - LFW: Might be correlated to following auction price, but may not be causal.
  - Cyrus: Not a 1 to 1 correlation.
  - Dawson: One risk I've been thinking about is how buyers will be turning over the MKR tokens. It may be sold in the secondary markets, and there is about 200k worth of MKR sitting on books across exchanges. The secondary markets don't have the liquidity/demand to support massive MKR sales, meaning the price may falter in the auctions.
  - Cyrus: We may see bidders taking the long-term position on these markets because of the thin liquidity on secondary markets. It's going to be tough to arbitrage the auction against the secondaries. Because of the minimum bid price, you can't even discount the bid price against the market price. In some ways, this could be good for the community because if we see bids tomorrow, it will be from long-term investors. If we don't, we will see that keepers require arbitrage against market price and will have to wait for a few cycles of auction re-initializations.
  - Dawson: That's a good point; people may buy without arbitrating the auctions. The worst-case maybe that MKR tokens are bought upfront; as liquidity dries up everyone participating is out of funds (since they're buying for long term) or arbitragers aren't buying because they're waiting for a price drop, will see a delay, and then with a significant drop, they'll start arbing on the secondary markets at a lower price. Do we just want that to be more efficient? Would it be better with a price discovery that's quicker?
  - Rich CL: It seems to me that if you can avoid failed auctions and bad debt sitting on the queue for a while, then setting a lower implied price may be better for these auctions since it would attract more participants. If we change the parameters and the auctions stabilize at \$200 per MKR, that's great, but we should try to fortify the health of auctions without relying on speculation.
  - LFW: Despite the big push to get lots of people involved in the auction for keepers, we may see people looking to buy MKR from secondary markets because they don't have the technical knowledge or capital to buy into these auctions. They might be waiting on lower prices in the secondaries. It's possible we'll see more liquidity as the auctions go on.
  - Rich CL: The Maker backstop syndicate will be there to make sure the auctions don't fail for too long.

[17:26](https://youtu.be/AIW7lFg6gBI?t=1046)

- David: Does the backstop syndicate have a technical solution for participating yet? I haven't been following along.
  - `chat` multiple people: [contract is deployed](https://github.com/backstop-syndicate/dai-backstop-syndicate) and [deployment link on etherscan](https://etherscan.io/address/backstopsyndicate.eth#code)
  - Rich B: They have a repo :point_up_2:
  - Scott Bigelow(Epheph): People pool in before the first auction for the backstop syndicate. Contracts should deploy today, not sure where the front end is. To be fair with reward distribution, you will need to be part of it before the auction gets started. The hard part is marketing it out to everyone to get liquidity. It's kind of a race to get the liquidity in there.
  - Rich Brown: We'll schedule a presentation for the end of this call if you're willing since the auction is tomorrow.
  - Cyrus: As it currently stands, based on last night's forum poll, auction parameters will stay as-is. This isn't such a clear cut issue. If there are any changes to be made, they need to be addressed as soon as possible. It will take some time to deploy any changes, especially in the case of keeper parameters (in addition to technical risks).

## Technical Development

### Adrian Le Bas

#### Flop Auctions UI Presentation

[22:32](https://youtu.be/AIW7lFg6gBI?t=1352)

![](https://i.imgur.com/MaMEXKR.png)

- The user will come in with a Wallet that has Dai. They will have to approve a few transactions before starting (alongside accepting the TOS).

![](https://i.imgur.com/q63S1zj.png)

![Bid data](https://i.imgur.com/sNmmnjT.png)

- Auction data will be shown, including auction start time, bid values, lot size, as well as potential end times shown with the `deal` event type.

![Won auction](https://i.imgur.com/rZItVcA.png)

- You can see this winning auction for .94 MKR(Disregard numbers since it's Kovan.)

![](https://i.imgur.com/e8PDlZ4.png)

- The default flow will be to deposit DAI into the VAT(adapter) at 50,000 Dai increments. Users will enable the debt auctions, and bid for the respective auction.
- They can choose an instant bid or a custom bid. Custom allows you to change the MKR amount. While instant bid takes the most recent bid and adds the minimum bid increase amount as your bid.
- **Use the [keepers](https://chat.makerdao.com/channel/keeper) channel to reach out with feedback.**

#### Questions

[28:12](https://youtu.be/AIW7lFg6gBI?t=1692)

- David: Is there an expected domain that it will be hosted at?

  - Adrian: Likely auctions.makerdao.com but subject to change.

- Rich: Is it going to be able to handle a significant number of auctions?
  - A: We expect them to be handled fine, with 100+ auctions happening at once. We're working to optimize the queries currently. We're confident about the `flop` auctions. At a later stage, we'll be working on `flip` auctions.
  - Rich: Can we get a glossary function for some of the parameters?
  - A: It's on the roadmap for tomorrow.
  - LFW: Can we do a tutorial run through before the auction starts?
  - A: Walkthrough will be during this call tomorrow. If we want to do it before the auctions start, happy to do that.
  - LFW: Since auctions don't end before or during the call, then we could do a tutorial on a live auction.

## Risk

### Cyrus

#### Circuit Breakers, USDC collateral, the potential Dai liquidity crunch

[31:45](https://youtu.be/AIW7lFg6gBI?t=1903)

- Yesterday we started talking about the circuit breaker and USDC as collateral. While we have these tools in our arsenal, we haven't discussed when or how to use them.

![](https://i.imgur.com/SjOG2b8.png)

- Three major changes to Maker in the last week.

![](https://i.imgur.com/XU2jDm8.png)

- Today we'll be discussing the keeper liquidity issue.

![](https://i.imgur.com/WtsVTJF.png)

- The last step of converting ETH back into Dai involves sending it to the centralized exchange like Coinbase. It may be easier to assume that you can cycle through Uniswap, but this is not always feasible given network congestion. It may take a couple of hours for keepers to convert ETH into Dai, probably around 6 to 8 hours.
- 2/3 number is not ideal for Dai owners, but will be addressed with better and better Dai liquidity.

![](https://i.imgur.com/5XHm91e.png)

![](https://i.imgur.com/SwXwgAG.png)

![](https://i.imgur.com/AnkdOZg.png)

![](https://i.imgur.com/Aa1qWlu.png)

- This liquidation freeze is structured so that it is not subject to the governance delay. The reason for 1-hour notice is because of the OSM delay. You have 1-hour advance notice that the liquidations at a lower price will be triggered.
- Additionally, there is a price volatility risk in freezing liquidations. The alternative is a severe liquidity shortage, which almost certainly results in poorer prices received through the auctions.

![](https://i.imgur.com/mD0aQJB.png)

![](https://i.imgur.com/TwmAi8N.png)

![](https://i.imgur.com/8KdYvtv.png)

- Surgical oracle prices are a purely technical and theoretic solution since there would be enormous social layer implications.
- Losses for Maker in another huge debt auction would be enormous.
- ESM cost/benefit analysis is not well understood. We need to understand how and when to use this as an option. It isn't only in the event of technical issues, and I am not certain if it is a viable option in terms of such a liquidation event.
- It would take 4 hours to pass a change for the USDC debt ceiling. The auction is 6 hours. The community would have to act incredibly quickly. Technically it is possible, but it has fairly high coordination costs.

![](https://i.imgur.com/rRrtEmh.png)

![](https://i.imgur.com/vFMPqMg.png)

- 1000% is an arbitrary number, of course. The high SF USDC Vault would only be used for keeper events in the case of a liquidity crunch. The USDC at lower SF would be used for day-to-day peg management. We need to align on a target use case for USDC.

![](https://i.imgur.com/tOjYMvY.png)

#### Questions and Discussion

- LFW: With OSM, we'd have seven hours versus six.

[55:13](https://youtu.be/AIW7lFg6gBI?t=3313)

- LFW: I think it would make more sense to launch a second USDC Vault type rather than adjusting the original one. People who opened positions at 20% wouldn't appreciate a severe increase.

[56:50](https://youtu.be/AIW7lFg6gBI?t=3410)

- Rich CL: Regarding circuit breakers in the most recent liquidity crunch, keepers were ground to a halt with high gas fees. In that scenario, would they still be able to signal to prevent a new set of liquidations and be able to get the circuit breaker initiated?
  - Cyrus: If the 6-hour bid duration is insufficient, then you wouldn't be able to trigger the circuit breaker for the current set of auctions that have already begun. They could potentially freeze any further liquidations until the network issues are fully sorted out.
  - RichCL: I think the circuit breaker is a pretty strong protective measure. But I am wondering what is the signal to trigger the circuit breaker?
  - David Utrobin: One of the implicit signals is that auctions may start clearing at a higher and higher discount to the market price.
  - EphEph: The problem is, many liquidations are triggered simultaneously, and that signal may be too late.
  - David U: Projected liquidations could be another method.
  - Cyrus: One of the assumptions is that we have an estimate for the starting base of keeper liquidity. You can know in advance which amounts keepers can handle and which they cannot. The community can still trigger the circuit breaker in situations where the signal isn't sent from the keeper. I don't think auction keepers would ever complain about the circuit breaker being triggered as it gives them more time to source additional Dai. The risk is mainly to the protocol as it introduces volatility risk of the collateral being auctioned, potentially not being worth the trade-off to wait. Perhaps we need to come up with an estimate of keeper liquidity and governance can decide on the spot whether the keepers can handle the wave of liquidations.
  - Rich CL: Perhaps there is a way to source this signal from other measures, such as the price of collateral, even hours in advance.

[1:02:05](https://youtu.be/AIW7lFg6gBI?t=3725)

- Makerman: Three of these scenarios that Cyrus laid out don't have resolution marks. We need exit strategies for what we will do.
  - David U: Do you mean prepared executive votes and stuff like that for the scenarios Cyrus outlined?
  - MM: When do you do what? I see two options here. We don't want to ES this thing when everything is disjointed. So we need to stop the auctions, letting MKR holders ride collateral through a potentially ugly event. ES in that situation throws the loss on Dai holders, while Vault owners are generally protected since they can withdraw the net of their position after ES. I keep coming back to needing clarity on each of these scenarios about who gets hammered. We should know the implications for all the entire ecosystem participants: Vault owners, Dai holders, and MKR holders. We should have an understanding of what our actions mean for all parties involved.
  - MM: We should consider getting SCD out of here while the market still looks ok. People should be able to clear out their positions.
  - Rich: The point is totally valid. We need to have clarity on our contingency plans.

[01:06:35](https://youtu.be/AIW7lFg6gBI?t=4066)

- Cyrus: [This link](http://makervaults.descipher.io/) is a dashboard that demonstrates the amount of collateral to be liquidated at every price point. If all the community can see an estimate of the needed keeper dai liquidity, then they can know in advance at what price points they would need to trigger a circuit breaker, and at what price point we would need more severe measures. I think the community can come up with some general heuristics.
  - Vishesh: If you need 30 million Dai to cover short-term liquidations, USDC can be used to improve the liquidity in the case of a higher Dai price. You can essentially use a 1.25 multiplier on the amount of capital that you need for the liquidations in order to determine the amount of USDC that you would need. This you can then set to 1.26 or 1.27 to have a collateral buffer. Using the same site, in terms of USDC, you can see how much of it is collateralized.
  - As of yesterday, a huge chunk of the collateral (between 130-140%). When this thing is being heavily utilized, people will probably ride the line for the collateral cutoff for USDC. You can effectively call it 126% or 127% multiplier. Then you don't even need Dai; you just need dollars or USDC(to boost Dai liquidity.)

### Aaron Bartch

#### SCD Shutdown Discussion

[1:12:43](https://youtu.be/AIW7lFg6gBI?t=4363)

[Forum Thread](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673)

#### Discussion

[1:16:26](https://youtu.be/AIW7lFg6gBI?t=4586)

- ScottB: It is worth noting that as of this morning, almost all liquidations occurred on SCD. ETH is likely to be under-collateralized.
  - Rich: I was unaware, thanks for sharing with everyone! It's important to clarify the risks from SCD on MCD. Aaron, do you have any thoughts on that?
  - Cyrus: My only opinion is that the community treats this with some level of urgency and determination because there is an odd situation where the PETH holders are at risk if ETH goes down and these underwater CDPs don't get bitten. In terms of the `tax` situation or date, I have no comments at the moment. The least desirable outcome would be the ES of SCD.
  - LFW: In the event that we see another major market movement downwards, we would have to ES SCD, which would be bad for PETH and Sai holders. Do we want to just call it now, and allow people to exit with a fair distribution of value between all system participants?
  - Lix: I was wondering if the shutdown could wait until after the flop auctions. My thinking is that the MKR price would probably take a big hit if we get none of the SFs back.
  - SB: If you look at the liquidations on SCD, the $70 ETH price point seems to be the major marker. If it falls below $69, there is like 2 million Sai left.
  - MakerMan: Let's waive the fees in the system, screw it. We got the system down to \$15 million Dai, which is pretty great. The remaining consideration is the timeline of SCD and the PR that ES of SCD will cause. Given the risks, we should unload SCD sooner rather than later. The PR optics would be good if we forgive fees. We just need to give enough PR notice about this. I recommend a seven-day schedule to shut it down. I'm also concerned about the UIs being available for SCD ES participants to be able to do what they need to do.

[1:27:00](https://youtu.be/AIW7lFg6gBI?t=5242)

- `chat` LFW: How does the migration contract affect MCD in the event of a SCD ES?

  - Cmooney: the function that [I just linked](https://github.com/makerdao/sai/blob/master/src/tap.sol#L126-L130) is when the `cage`(ES) function is called.
  - Another bothersome function that is only available after ES is one that allows you to mint Sai against collateral at the fixed oracle price.
  - We must shut down the bridge before we execute ES on SCD.
  - Gonzalo: We would also want to remove the Sai we have in MCD as well. Since that collateral would need to be auctioned. We should immediately stop the bridge from Sai to Dai, but keep the bridge open to go from Dai to Sai. If we still have Sai funds in the migration contract, we would have to liquidate them.
  - Cmooney: Just thinking out loud, but would one method to do this be
    - use USDC to mint Dai = Sai in migration
    - convert Dai to Sai, emptying the migration contract
    - [relisten]
  - cmooney: Could be anyone, not just us. This is assuming there is some incentive. I haven't fully thought it through.
  - `chat` Kurt: after SCD shutdown, SAI essentially becomes wrapped Ether with extra steps.

- Rich: The actionable step is that we all need to have the same mental model of what will mechanically happen during this process. We need to consider the business and risk perspectives. We need to think about timing. It sounds like we need a forum thread to be kicked off and audit the previous SCD Shutdown threads.

### Scott Bigelow (Epheph)

#### Backstop Syndicate

[01:36:05](https://youtu.be/AIW7lFg6gBI?t=5760)

- Super short, there is no working demo to walk through yet. The backend UI and contracts aren't quite linked up yet.

![](https://i.imgur.com/qRF6D7u.png)

- The UI will look something like this. It will give users the options to deposit Dai, exchange Dai, and to withdraw at any point before the auction starts.
  - Once the first bid is placed, there can be no more deposits. Thus preventing late entrants from getting the MKR rewards.
  - The backstop syndicate version has an encoded price at 100 Dai per MKR, though other instances can be spun up to participate at a different price point.
  - The system mints tokens to those who deposit Dai, and those tokens can be used to redeem a proportional amount of Dai and MKR back from any won auctions.
  - There are some changes being made; we are working through the deployment process and making sure this will function in the real world.
  - Since its 100 Dai per MKR, it will give us some time to properly set up if the auctions get no bids. This project may be irrelevant if the auctions receive bids from the start.

#### Questions and Comments

[01:38:57](https://youtu.be/AIW7lFg6gBI?t=5937)

- Rich: How flexible is the price point?

  - Eph: Each price point is a parameter that can be changed in different instances. Though the official deployed contract would have a hardcoded price point. It's really just designed to be a backstop.
  - Eph: We may be launching with two versions; one at 100 and another at 150.
  - Rich: I have a huge personal appreciation for the effort put into this. I want to extend an offer. Let's talk offline; we have resources available to potentially help this code get audited.
  - Eph: Dharma said they would be potentially putting up 1 million, so the code should definitely go through some significant level of scrutiny. An audit would be great.

- LFW: Personally, I would be very nervous using this without an audit.

- Rich: Is there a projection for when its ready to be on mainnet and functional?

  - Eph: hopefully, by the end of the week. It will be a task of raising Dai from the community. Though this is only necessary if tomorrow's auctions don't receive bids.

- MakerMan: If it's utilized, and its 50% used, do people get half the MKR they pledged for?

  - Eph: You can claim a proportional amount of Dai/MKR after the end of the auctions, based on initial Dai deposited.

- Cyrus: Having something like this on standby for future flop auctions would be super useful. Tools and infrastructure like this will only make the ecosystem more efficient.

#### Links from the Chat

- [Signal Thread: SCD Shutdown](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673)
- [Dai Backstop Syndicate Technical Repo](https://github.com/backstop-syndicate/dai-backstop-syndicate)
- [Backstop Syndicate FAQ](https://docs.google.com/document/d/1miS-snhSYBKwjQHM1MOPnLZZl9i2gj3zTcvuQWecV2M/edit#)
- [Lix graph for tax during SCD shutdown](https://ibb.co/ZV6dSc2)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
