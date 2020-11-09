# Episode 78: March 17th, 2020

## Agenda

- [8:26](https://youtu.be/v_OtobM_Mrg?t=506): Vamsi's presentation on Debt Auctions(flop auctions)
- [23:10](https://youtu.be/v_OtobM_Mrg?t=1388): Dockerized auction keeper presentation overview by Marc Andre
- [32:00](https://youtu.be/v_OtobM_Mrg?t=1978): Potential executive vote to lower minimum bid on Debt Auctions
- _SCD shutdown discussion, tabled for Wednesday_
- [1:05:54](https://youtu.be/v_OtobM_Mrg?t=3952) Circuit breaker discussion and USDC overview/recap
- [1:26:33](https://youtu.be/v_OtobM_Mrg?t=5193): SCD migration

## Video

<https://youtu.be/v_OtobM_Mrg>

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

#### Summary & Introduction

[00:00](link)

- Welcome to the Daily Governance and Risk call. We'll be having these daily to discuss the rapid series of measures to combat market instability and risks.
- We all know that one year in crypto feels like ten years in the traditional world. Real-world is moving at a fast pace, so we have to move even faster. With open governance, we need consensus, decision making, and signaling. But we also have to be agile to get things done.
- This is an experiment in how governance happens when markets are frothy. Though this is a challenging series of lessons, these calls will serve as a learning experience for posterity. We've already made decisions in the past week to strengthen the protocol, but, as we've seen, nothing is permanent. We have the coming weeks to refine and review everything that happened over the past week to get things right.
- Market frothiness has raised a few other issues, also agendas for post-mortems. The quick moves in the market recently accelerated several plans we've had from the beginning. USDC was one of them, alongside discussing conditions for SCD shutdown. As the ecosystem becomes murkier, it's essential to understand these dynamics.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Debt Auctions(flop auctions) Presentation

### Vamsi

[8:26](https://youtu.be/v_OtobM_Mrg?t=506)

![](https://i.imgur.com/XYGGgcd.png)

![](https://i.imgur.com/6OYOUWr.png)

- We have both debt and surplus. (Which is why that calculation shows as a negative total on Dai stats.)

![](https://i.imgur.com/nmltsYp.png)

![](https://i.imgur.com/1H3ktQZ.png)

![](https://i.imgur.com/xj3ASea.png)

![](https://i.imgur.com/ArzyKrB.png)

![](https://i.imgur.com/8TdKnKR.png)

![](https://i.imgur.com/chNItUx.png)

- Slight typo, lot size starts at 200. Later on, Cyrus talks about potentially adjusting this to a number that makes more sense.

![](https://i.imgur.com/IfTpme2.png)

![](https://i.imgur.com/ZNGV646.png)

#### Questions and Comments

`chat` Kurt: Last time I calculated, the flop start time was approximately 14:30 UTC on March 19th (10:30 AM EDT)

## Dockerized auction keeper presentation overview

### Marc Andre

[23:10](https://youtu.be/v_OtobM_Mrg?t=1388)

![](https://i.imgur.com/jMlsQMX.png)

![](https://i.imgur.com/M7S3SNb.png)

- Auction keepers are a piece of software that participate automatically in Maker debt auctions.
  - Flip Auction: Also known as a Collateral Auction, an auction for liquidating vaults.
  - Flap: Also known as a Surplus auction, it burns system surplus by acquiring and destroying MKR.
  - Flop: Also known as a Debt Auction, mints MKR to cover system debt.

![](https://i.imgur.com/Ec9GwbY.png)

- You need capital in addition to software to participate.
- More capital means more simultaneous auction participation.

![](https://i.imgur.com/QKOw1KO.png)

- [Link to the Dockerized Auction Keeper](https://github.com/makerdao/dockerized-auction-keeper)
- Dockerized auction keeper is up for easier out-of-the-box use.
- Keepers require optimization to improve auctions; the dockerized model is a solid start but requires individual tweaking for further optimization.

![](https://i.imgur.com/QvDbZdL.png)

- New sharding functionalities allow for multiple accounts to work around the limit of 50 transactions per specific address.

#### Questions and Comments

[29:02](https://youtu.be/v_OtobM_Mrg?t=1742)

- Rich Brown: You mentioned strategies for-profit motives, but what about altruistic bidders? Preventing low balling etc.
  - MA: If you want to be altruistic, you can bid with the market price. When auctions work well, the winner gets a few BIPS off market price.

[30:01](https://youtu.be/v_OtobM_Mrg?t=1802)

- Charlie: Is there a read-only version of this software? Rather than submitting a price model, it can just collect data?
  - MA: I haven't seen one, but I can't imagine it would be difficult to set one up. I'm not aware of such a configuration at this point.
  - Andychorlian: There are sites like [daiauctions.com](https://daiauctions.com/) that run that, but currently, I don't know of a setup that runs a script on a node. If there is enough demand, I can probably put something together.

[31:15](https://youtu.be/v_OtobM_Mrg?t=1875)

- Kentonpresscott: As a comment on the last slide, in terms of keeper bid-only settings to limit node and server constraint, the latest GitHub commit now has bid-only as the default option.

## Governance and Risk

### Cyrus

#### Potential executive vote to lower minimum bid on Debt Auctions

[32:00](https://youtu.be/v_OtobM_Mrg?t=1978)

- Flop auctions are beginning at approximately 10:30 AM Eastern this Thursday. If the system accrues further liquidation penalties, this time could push back. Due to yesterday's surge in liquidation penalties, it was pushed back from 6:30 AM to 10:30 AM. On the accounting side of the system, some of the bad debt clears out and the auction pushes back.
- One of the critical questions that have been discussed is the starting price. The current structure is 250 lot of MKR for 50,000 Dai. While illiquid, the implied USD price is \$200 per MKR.
  - That 200 number was chosen back in November during the MCD launch. Due to recent development, a massive crash in collateral prices could lead to a crisis of confidence in the amount of Dai. As a result, flop auctions were created to get bad debt out of the queue as soon as possible, 48 hrs after bad debt accrues. A 2/3rd discount was built into the system at $600 for the post-crisis MKR price was set to about $200.
  - We did not see that crisis of confidence in Dai. The Dai price has remained stable, reflecting the community's belief that Maker's long-term prospects are fine. There is less urgency to clear out the bad debt, so long as it gets cleared out eventually; which is partially why the extension from 48 hours to 6.5 days was suggested and passed.
    - Now, there is a case where if the MKR spot price is below the 200 Dai per MKR starting bid, then we may see no bids. In this case, the auction would be put back 72 hours(three days.) In this case, the price would drop from 200 to 166 Dai per MKR. The question is: should we propose a governance vote to change the starting price to avoid potentially pushing the auction back? Or do we want to keep it as is? There is an argument to be made that even if the spot price is below 200, due to illiquidity, the auction might stil clear just fine. An executive vote can be used to either increase the lot size or decrease the bidding amount such that the starting price is reduced a bit. We would need to do this before the auctions start this coming thursday(with a 4 hour governance delay.)

#### Questions and Comments

[38:50](https://youtu.be/v_OtobM_Mrg?t=2330)

- LFW: Any thought of decreasing the re-initialization delay?
  - Cyrus: That hasn't been discussed, but it is a good idea. The auction duration could be reduced, so it would only take a day or two to recycle if the price isn't optimal. Certainly, from a governance friction perspective, doing nothing is the easiest thing to do. A 4th executive vote in the last week is a lot. Will there even be a considerable difference in the debt auction if the starting price is 200 vs. 150 given that the public exchange spot price of 200 isn't significant when dealing with a quantity of 5 million Dai worth of MKR.

[40:18](https://youtu.be/v_OtobM_Mrg?t=2418)

- Rich: What are the risks of the various options? What happens if we allow the price discovery to occur past the intital auctions?
  - Cyrus: The most significant risk is branding/optics, as in debt sitting in the queue for longer than people would like. If the starting price for MKR is too high, then people can just wait three days, and that further increases uncertainty. There is no issue in lowering the bid price, but what should it be reduced to? Could it be $150 or even $100? We could even reduce it down to a single dollar.
  - I'm speculating here, but we don't want someone to zero bid the debt auction in the case of a liquidity crisis, and MKR dilutes like crazy. The free-market approach says to start at a low number and let the keeper community do its thing. But for better or worse, the minimum bid tool is here.

[43:25](https://youtu.be/v_OtobM_Mrg?t=2605)

- Charlie Noyes (From Paradigm): We agree with Cyrus's point regarding not having to wait three days for the auction reconfiguration. I can see anxiety in the community regarding the debt, not clearing. I think we'd be supportive of adding a margin of safety to minimum bid price or reducing the time for the spot price in going down to three days. Those aren't super strong feelings, but it makes sense optically. It is best for this debt to get out as clearly and cleanly as possible.

[44:42](https://youtu.be/v_OtobM_Mrg?t=2682)

- Emilainobonassi: A price reduction is an opportunity for speculators. If there is a reduction to, say \$100, it could lead to people shorting MKR. If lowering the price could affect the system by introducing speculation, it may be better to reduce time delays instead of providing for more agile responses. This, to me, is a better signal than lowering a price.
  - Cyrus: There is no good rationale for lowering the price arbitrarily. We could drop to a dollar, but that could open us up to an attack. Some people may look at that approach as a free-market, but we should understand the risks involved in this decision.

[48:30](https://youtu.be/v_OtobM_Mrg?t=2910)

- 0age(person talking for the backstop syndicate): From my perspective, regarding the backstop-syndicate, the risk is one sophisticated keeper mounting an account to steal collateral and execute malicious upgrades. A community of users that rely on Dai is stronger when there is less opportunity for attack. Regardless of where the auction price starts, a 100 Dai for 1 MKR is a good shelling point with broad consensus. Some people are trying to buy into Maker who are willing to pay, then some opportunistic people are trying to scalp Maker, and finally, there is the third group of people who just want to help.
  - Auctions that begin higher and then trend down is preferable. This gives those in the community without the capital and sophistication a chance of participation and contribution to the backstop syndicate. The real goal, in our case, is not to buy Maker but to make sure that Maker is sold. If more people come in at a higher price, it's a win-win. For us, if the price starts at $1, the idea is still to bid at $100.
  - There will be a hundred auctions going on at once. Our intention is signaling support for the Dai ecosystem and helping prevent a considerable chunk of Maker from selling at low prices and centralizing into a few hands. We'll go in whatever direction is decided. But I don't think it makes sense to have no one bidding if the spot price is not accurate. The thing that worries me about the time that the auctions are running is: if the `ttl` is being pushed out, then the auction compresses into a smaller window.
  - Cyrus: Another idea is the step size in between failed auctions. It is currently at 20%, so if an auction fails at $200, it would fall to $160. We can set the step to 50%, aggressively lowering the bid price between auctions.
  - Cmooney: I think 20% is a decent parameter because it stops slippage. The three-day delay may not be great.

[55:49](https://youtu.be/v_OtobM_Mrg?t=3349)

- Nik Kunkel: Changing the auction model as a whole right now, as some are suggesting in chat, is not reasonable. Smart contracts are not something you can whip up overnight; we are constrained by the current auction model. We should be focusing on when the auctions start, starting price, and duration. Let's focus on what we can change now.

[57:28](https://youtu.be/v_OtobM_Mrg?t=3448)

- David: Priority is not having the first round of flop auctions be re-initialized. Would it make sense to vote on 20% below the current spot price the day before the flop auctions start?
  - Aaron Bartsch: Won't someone just dump MKR on the open market?
  - Cyrus: Relying on a last-minute executive is not best.
  - David: We know we have backstop syndicate, and other public signals, who would bid at \$100 maybe we could use that as a start for the flops?
  - Cyrus: Nice in theory. I agree that it's a reasonable starting bid, but I don't want to cater to the minimum bids based on certain keepers.
  - David: There is competition, Paradigm, Dharma, Backstop syndicate, and several others. If we start at whatever we know to be the lowest public signal then that might be a good benchmark.
  - Cyrus: I just hope to have an unbiased way to determine that number.
  - Charlie: I would second not tailoring around keepers, but picking a market price, \$100 is about willingness to purchase at that price point.

[1:01:11](https://youtu.be/v_OtobM_Mrg?t=3671)

- Rich: Let's trust our process and get up a forum post; it comes down to what the risks are. Summarize options. Put up a poll. Then move from there.
  - LFW: Agreed
  - Rich: Best timeline for this?
  - Cyrus: Forum post today, governance poll tomorrow. Any executive may not pass in time, so we should all be cognizant of that.
  - Rich: Sounds ominous, could we clarify?
  - Cyrus: If it doesn't ratify in time then current parameters will stay
  - Cmooney: If we change the settings, it changes the bidding model strategies too. I wouldn't allow an executive to change into those active auction plans.
  - LFW: Good point will add to the summary.
  - Rich: There is a normal cadence; let's be aware of the overhead. Governance needs to happen in the Forum. We don't make decisions on the call. We need to articulate the timing, reasoning, and options. Which is best when written on the Forum, let's work together to get this post up.

### Cyrus

### USDC and Circuit breaker discussion

[1:05:54](https://youtu.be/v_OtobM_Mrg?t=3952)

- Super brief recap. On Thursday, we had two main issues: network congestion and Dai liquidity. We haven't had a chance to properly address these issues and how they interrelate with each other. Increasing `ttl`(auction duration) to six hours was primarily to hedge against network infrastructure issues. Eth congestion led to bidding issues etc. Adding the delay allowed keepers to deal with that.
- What this didn't give us was a proper solution to the Dai liquidity issue.

![](https://i.imgur.com/9ETXGme.png)

- Vishesh added [more tools](http://makervaults.descipher.io/) to examine how much Dai will get liquidated at different price points (the middle chart in purple).
  - If ETH hits say $80, then around $6 million Dai will need active keeper bidding. If it hits $70, that's $11 million. $60 Eth is $26 million. At $55 or lower, it's $55 million Dai that gets liquidated. These numbers are no joke. This risk wasn't properly processed by the community in the fast-moving context of the past few days.
  - `ttl` doesn't affect auction keeper liquidity problems. If the price this in that lower bound, I have a gut feeling that keepers won't get the $50 MM Dai they need for the auctions. This isn't a function of exchange liquidity, centralized or decentralized. Even if they could handle $50 million worth of ETH, with a 30% buffer, it is possible it's the Dai liquidity that's the problem.
  - The basic premise for the circuit breaker: slow the rate of liquidations should they occur. An example: if $20 mil is on the table a mechanism to liquidate in $5 million chunks, then keepers would be able to recycle the Dai they use in auctions to continue bidding. Let's say a keeper has $10 million at their disposal, and $30 million is up for bidding. If they could recycle their proceeds to bid on the next batch, that would be doable.
  - Changing the auction format is a month's long process. Working on slowing down the collateral liquidating, is where the liquidation freeze mechanism discussion started. If you have a one hour delay based on the oracle, then governance can rally a vote to freeze the liquidations.
  - Also, we have to deal with unfrozen accounts, and that situation was the impetus for adding USDC as a collateral type. Since many DeFi players have large capital balances in USDC, rather than Dai or Eth. Adding USDC as a collateral type allows USDC based keepers to mint Dai and bid on the auctions. Yesterday Dai also hit \$1.10, evident signs of a liquidity crunch (in peg terms). We tracked some of the USDC denominated Dai, and most of it has gone to push the peg back to normal.
  - IMHO, allowing keepers an opportunity to mint Dai for auctions, is vastly more important than adding USDC for the peg.

#### Questions and Discussion

[1:16:00](https://youtu.be/v_OtobM_Mrg?t=4560)

- David: To summarize, the circuit breaker is relevant because it gives a chance for mass liquidations to parse into lots and no liquidity crunch. The addition of USDC allows for keepers to leverage that asset for temp liquidity participating in auctions. It helps Dai price because it reduces crunch.
  - Cyrus: Correct. If we triggered vault liquidations at a vault price of say $60 or $50, there would be no set of auction parameters that would allow them to grab enough liquidity to bid on the auctions. We now have two tools: bid auction duration, keeper sourcing Dai liquidity (through USDC as a collateral type). Using it to arb the price down is an additional side effect.
  - I'm framing this as "risk" because of the broader community sentiment towards USDC. If we only wanted to target auction keeper liquidity but not have USDC be permanent. You could, for example put a 1000% SF on USDC. Since it would make no sense. Except for that one instance where ETH nosedives and an enormous amount of collateral need liquidation.
  - In such a situation, keepers know that there is a Dai shortage, they could get 50% or higher returns by bidding well. Even in that high fee circumstance, it would make sense to borrow in a 6-hour duration. If we correctly parse the nuances of the liquidation structure, having USDC in the mix, and how to use the circuit breaker.

[1:19:52](https://youtu.be/v_OtobM_Mrg?t=4792)

- `chat` Matthew Light: It might be worth telling everyone on the call that people can immediately generate USDC from USD on Coinbase with no cost. The addition of USDC is essentially equal to adding US dollars as collateral

[1:20:19](https://youtu.be/v_OtobM_Mrg?t=4819)

- `chat` is there any evidence of active keepers with large USDC balances?

  - (see the following section)

- `chat` Matteo Leibowitz: Are keepers correctly incentivized to alert MKR holders to trigger the circuit breaker? It seems like in most instances, they'd be better off just letting auctions proceed and bidding low.
  - `chat` cmooney: we can know if keepers are tapped out too. If we start seeing liquidations below market that are accumulating to system debt.

## Primoz

### Analysis

[1:26:33](https://youtu.be/v_OtobM_Mrg?t=5193)

![](https://i.imgur.com/DC9Ez7J.png)

- Last week we had one of the most active weeks this year in migration. Sai supply dropped by $4.5 Million, and the migration contract was $2.5 Million.

![Collateralization Ratio](https://i.imgur.com/tkyLEpg.png)

- Since SCD CR was much higher than on MCD, we didn't see nearly as many liquidations.

![CDP repayment activity](https://i.imgur.com/RP7tOj5.png)

- CDP repayment activity: 170 CDPs repaid or got liquidated in the last week, about \$4.7 Million in debt repaid.

![CDPs migrated](https://i.imgur.com/zLMcxWf.png)

- The day after Ether crashed, many CDPs migrated.

![Data on migration](https://i.imgur.com/BUIuHda.png)

- 1st hypothesis is: in the last few weeks, CDPs could deposit additional Ether to fight liquidation. Now they capitulated, extra exposure wasn't worth it. The only way to close the position was to migrate.
- 2nd hypothesis: SCD is a bit different than MCD; it could have been fear of more significant losses in the system, which would dilute PETH. That would lead to compounding losses.
- There is less flexibility in SCD. You can deposit more ETH or migrate, so it seemed that my guess from the past few months (that falling Ether would force their hand) turned out correct. Also, a reminder that penalty fees go to PETH holders. \$200K in interest paid to the system as a result of these migrations.

![Migrating Sai](https://i.imgur.com/oLqq7Ok.png)

- This is a chart of Sai flowing into the migration contract. Spike on Thursday, likely because there is a premium on Dai, which you can get by migrating. The other option is depositing Dai in secondary markets. There were bite's today, but no one was bidding. This morning I saw many of them clearing out. There are still a few CDPs with liquidation ratios below 150%, when the peg returns that should alleviate itself.

![](https://i.imgur.com/w1i8DpJ.png)

- Cyrus showed how much debt liquidates in MCD. In SCD, the situation might be better, but if ETH price goes to $60, most of the debt gets wiped. $80 or even \$70 is fine since there is liquidity in the migration contract. If the price drops that low, then we have a Sai liquidity crunch. We mentioned SCD shutdown, however these should be some polling about that.

![](https://i.imgur.com/9ABgKUb.png)

- I checked how much Sai supply is inactive, holders that don't move have almost \$10 million Sai. Hard to say when the incentive to migration will arrive.

#### Questions

[1:35:47](https://youtu.be/v_OtobM_Mrg?t=5747)

- Cyrus: Also, just to point out, the keeper liquidity problem is even worse in SCD than in MCD. In MCD, we have the USDC collateral type and the liquidation freeze. If the price drops, the CDPs go underwater, but keepers can't come up with the liquidity.
  - Primoz: We have the buffer in the migration contract.

[1:43:21](https://youtu.be/v_OtobM_Mrg?t=6201)

- David: Also wanted to mention this, it's a little out of order, but `cat` doesn't have authority on the USDC flippers, so USDC liquidations aren't available without another executive vote.
  - Cyrus: Great point! In the forum post, we mentioned that the collateral type initialized with frozen liquidations. Even SF accruals will not trigger USDC vault liquidations.

![](https://i.imgur.com/pQnD0bf.png)

- Cyrus: As a brief early analysis of Dai backed by USDC, the primary value of backing by USDC is that it allows keepers to maintain liquidity. You can see here that much of the USDC minting was used for peg arbitrage.

#### Links from the Chat

- Vow contract is [here.](https://etherscan.io/address/0xa950524441892a31ebddf91d3ceefa04bf454466#readContract)
- [Maker Vaults Analytics Dashboard from Vishesh](http://makervaults.descipher.io/)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
