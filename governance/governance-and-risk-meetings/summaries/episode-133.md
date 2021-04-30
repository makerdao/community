# Episode 133: March 18, 2021

## Agenda

- [00:00](https://youtu.be/Y6PHmjt32jI): Introduction
- [02:00](https://youtu.be/Y6PHmjt32jI?t=120): Governance Team Update
- [10:02](https://youtu.be/Y6PHmjt32jI?t=624): Smart Contracts Team Update
- [17:40](https://youtu.be/Y6PHmjt32jI?t=1060): Risk Team Update
- [22:40](https://youtu.be/Y6PHmjt32jI?t=1360): Real World Finance Update
- [29:27](https://youtu.be/Y6PHmjt32jI?t=1767): Operational Support Update
- [34:18](https://youtu.be/Y6PHmjt32jI?t=2058): MIPs Update
- [37:00](https://youtu.be/Y6PHmjt32jI?t=2248): March MIPs Governance Poll Bundle Review
- [01:00:30](https://youtu.be/Y6PHmjt32jI): Liquidation 2.0 Oracle Risks
- [1:10:10](https://youtu.be/Y6PHmjt32jI?t=4210): Incentives and Vesting Discussion

## Video

<https://youtu.be/Y6PHmjt32jI>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/Y6PHmjt32jI)

- Hello everyone, and welcome to the MakerDAO scientific Governance and Risk meeting #133 taking place on Thursday, March 18th at 1700 UTC. My name is LongForWisdom. I'm the Governance facilitator of MakerDAO. I run these meetings, and I'm joined by a bunch of awesome Maker people. You are all probably a little bit sick of hearing me saying this by now.
- A quick reminder about daylight savings before I dive into my sections; for some people, this has already happened, but it's coming in the next few weeks for others. This meeting is defined in terms of UTC. If you are in a country with daylight savings, the meeting time will shift by one hour.
- If you have comments or questions, please interrupt. We like hearing from the Community. Please get involved.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Governance

#### LongForWisdom

[02:00](https://youtu.be/Y6PHmjt32jI?t=120)

- We will briefly go through the executives and polls that we had last week.
- Last week's executive passed, which brings us the [ETH-C vault type](https://vote.makerdao.com/executive/stability-fee-changes-onboarding-eth-c?network=mainnet#proposal-detail), a new vault type using ETH as collateral with a lower stability fee and a higher liquidation ratio. It also brings stability fee adjustments to some of the UNI V2 LPs. The complete list is on the portal. We should see that execute soon.
- This week's polls are now finished. We had the [Optimism Dai Bridge poll](https://vote.makerdao.com/polling/QmWWRWkY?network=mainnet#poll-detail), which passed. It confirms that the Community, Maker holders, want the Smart Contracts team to pursue Optimism's Dai Bridge as described on the Forum.
- We had the [monthly MIPs Governance poll](https://vote.makerdao.com/polling/QmS2rykD?network=mainnet#poll-detail) pass, which is good to see because there are many juicy MIPs included.
- We saw the poll to [increase the `dust` parameter for most vault types](https://vote.makerdao.com/polling/QmSuFZx5?network=mainnet#poll-detail) pass.
- We were supposed to have another `dust` parameter poll specifically for ETH-B. However, it didn't go from the portal because there was an error in the poll that we missed until Wednesday, so we decided to skip it next week. This shouldn't cause grief because ETH-B is currently maxed out anyway.
- We had other polls to [increase ETH-A](https://vote.makerdao.com/polling/QmQrPyC3?network=mainnet#poll-detail) and [WBTC-A maximum debt ceilings](https://vote.makerdao.com/polling/QmQGirCV?network=mainnet#poll-detail). For ETH-A, the poll passed to move the debt ceiling from 2.5 billion to 15 billion. For WBTC-A, the polled passed to move the debt ceiling from 350 million to 750 million. This reflects the fact that people are sick of micromanaging this now that we have the Debt Ceilings Instant Access module. The rough consensus is to use the Stability Fee to manage usage in the future rather than strict limits.
- We have greenlit polls still active for [nine potential collateral assets](https://forum.makerdao.com/t/maker-relay-ep-36/7039). If you haven't voted for these, please consider doing so.
- The executive this Friday will include the ETH-A and the WBTC-A maximum debt ceiling increases and the `dust` parameter change for those vault types.
- We will also have an executive on Monday, the [monthly MIPs executive](https://vote.makerdao.com/polling/QmS2rykD?network=mainnet#poll-detail). It will include the final ratification of the MIPs in March's Monthly Governance Cycle.
- In terms of the Governance Team itself, we are working on a couple of things. The SourceCred payouts' funding is transitioning to be paid by GovAlpha, which is the first Governance Core Unit dealing with SourceCred and organizing that transition. A couple of us have been working on MIP0 changes to make it more streamlined, easy to understand, and more accessible. I've been working on Liquidations 2.0 parameter documentation. Elihu has been working on the Vision Setting Working group. The MIPs portal work continues; however, not quite ready for showing anything new just yet.

### Governance at a Glance

#### Payton Rose

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-march-12-18/7085)

##### Three-Point Summary:

- Another day, another DAI: supply hits yet another ATH with 2.85B DAI in circulation.
- The protocol has passed another major milestone, [hitting 100M DAI in annualized stability fee revenue](https://forum.makerdao.com/t/100mm-yearly-fees-reached/6991).
- [DAI Descipher](http://dai.descipher.io/) is back to full functionality, showing a weekly VWAP for DAI at $1.002

##### ICYMI - Announcements

- Artists are [given a chance to win Dai and have some featured artwork at MakerDAO](https://community-development.makerdao.com/en/contribute/contest) by creating a visual piece based on one of the original [MakerDAO Core Principles](https://community-development.makerdao.com/en/learn/MakerDAO/core-principles/). We still have two more weeks for submissions.

##### Active Discussions

- [NFT Vaults](https://forum.makerdao.com/t/discussion-nft-vaults/6980)
@Aaron_Bartsch points to [Beeple’s 5000-day NFT sale for $69 Million](https://www.theblockcrypto.com/linked/98047/christies-beeple-auction-ends-digital-art) and asks how Maker could serve NFT vaults.
- [1, 2, 3, Blindspots check! Core Units we need?](https://forum.makerdao.com/t/1-2-3-blindspots-check-core-units-we-need/6972)
@juanjuan asks for a conversation to ensure we are not leaving behind key assets in the Core Unit transition.
- [[Proposal] Petition Letter to A16z](https://forum.makerdao.com/t/proposal-petition-letter-to-a16z/7025)
@iammeeoh discusses drafting letters to VC holders of MKR to encourage governance participation.

##### Signal Requests

- Highlighted Signals
    - [Increase Uniswap DAI-ETH, USDC-ETH, & DAI-USDC Debt Ceilings + add DC-IAM](https://forum.makerdao.com/t/signal-request-increase-uniswap-dai-eth-usdc-eth-dai-usdc-debt-ceilings-add-dc-iam/7063)
    @NikKunkel signals raising the Debt Ceilings and implementing the DC Instant Access Module for many of the UNI-V2 vault types.
    - [Adjust the Surplus Buffer (March/April 2021)](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer-march-april-2021/6979)
    @ultraschuppi signals raising the Surplus Buffer (again), with @SebVentures giving some helpful risk analysis concerning what a “safe” SB looks like for Maker’s current portfolio.
- Other Active Signals
    - [Adjust ZRX-A DC-IAM-line](https://forum.makerdao.com/t/signal-request-adjust-zrx-a-dc-iam-line/6993)
    - [Adjust COMP-A DC-IAM-line](https://forum.makerdao.com/t/signal-request-adjust-comp-a-dc-iam-line/6992)
    - [Adjust YFI-A DC-IAM-line](https://forum.makerdao.com/t/signal-request-adjust-yfi-a-dc-iam-line/7055)
    - [Adjust PSM-USDC DC](https://forum.makerdao.com/t/signal-request-adjust-psm-usdc-dc/7072)

### Smart Contracts Team Update

#### Christopher Mooney

[10:02](https://youtu.be/Y6PHmjt32jI?t=624)

- We're expecting to do the address rehearsal with Matt, but we could not do so due to the busy schedule.
- For MIP22, we sat with Centrifuge and found a very good path to shoehorn this into MIP21 format. Changes we need to make are very minimal. We will review that, and there is a chance that MIP22 becomes the MIP21 collateral type. Their entire kit may go to Kovan early next week, which is very exciting.
- Security team review work is happening. Once it gets reviewed, we will release some docs on the roadmap there.
- Yesterday, we had the SC core discussion, and MIP45, which is Liquidations 2.0, has been under development.
- We deployed Liquidations 2.0, our release candidate 1, into Kovan. This is its own sort of bespoke deployment of multi collateral DAI into Kovan. It's not like a normal Kovan staging environment. I dropped all the addresses for the deployment in the #collateralonboardingupdateschannel. Feel free to check it out. Also, take a look at the config file. We made it easy to iterate and test.
- We changed few things like tail and cusp between collateral so that could see different expirations. Suppose keepers are going to test that out. In that case, they can try different things such as integrations, integration partners, or any UIs. Feel free to start using that or at least test the code.
- We're going to move on working on the Spell for Kovan as part of our staging environment.
- We've worked on Ilk-registry changes for Liquidations 2.0. Quantstamp and PWC finished with their final audit reports. TrailofBits and Gauntlet are still ongoing. Several things came out for the clarifications to the MIP. There are also additions to those audit reports now that they have finished. We want to add that into MIP45 at some point. Long, we will be working with you because it's an informal submission. We don't want to change yet, but maybe we can submit a link in the comments to the poll request. There are no substantial changes, just typos, and invariants that have been updated.

![](https://i.imgur.com/SWuxXrs.png)

- We will put up the bug bounty program at the same time as mainnet deployment.
- I want to bring up that we're working on an issue this week. Which pushed back Kovan deployment. We're hoping for Monday. If there are any integrators in here crunched for time, please let us know.

### Risk Team Update

#### Primoz Kordez

[17:40](https://youtu.be/Y6PHmjt32jI?t=1060)

- We're currently writing a report on LINK-A proposed parameters for liquidations 2.0. Chris mentioned specific risks that will be addressed later in regards to liquidations 2.0. We're evaluating to set some more conservative parameters to mitigate these risks as much as possible. Gauntlet has also finished the report, and they're planning to publish findings on the forum sometime soon. The proposed parameters for LINK-A should be based on our own analysis results and the one made by Gauntlet. We might make a few adjustments when proposing parameters for LINK, such as, for instance, having a bit less aggressive price curve function because LINK has a high liquidation ratio. Next week, we should have this report with parameters released. I hope we can get enough feedback from other teams in due time.
- The other thing we're also working on now is a new framework for evaluating UNI-LP risk premiums and their debt ceilings. Nik proposed higher debt ceilings for some UNI LPs. We believe apart from auction risks; those debt ceilings are reasonable when looking at the liquidity of underlying tokens. It is harder to evaluate the risk associated with auctions right now for UNI-LPs. We still haven't had a more significant liquidation event to see how many keepers truly bid on these auctions when more money is stake. Still, it does make us more comfortable knowing that there were actually no zero bids for UNI-LPs at the same time when certain UI's had a bug. Despite low participation in these auctions, there was still some activity. Also, some of the UNI LP's collateralization ratio distribution is very healthy. For DAI-ETH, for instance, the median collateralization ratio is about 300. This is high considering the daily liquidation ratio is only 125, presenting fewer risks and lower liquidation probability. I think we can safely increase debt ceilings on UNI-LPs. We also hope that if we have a more significant liquidation event, we will see a decent amount of keepers bidding by increasing the minimum bid amount.
- Besides actively working on liquidations 2.0s and UNI LPs, there's also some background work, mostly on optimizing our risk calculations. We're trying to convert risk files to more robust settings and get calculations for AWS so that metric can be shown publicaly on web dashboards. We're currently working on optimizing slippage curves which are essential when making decisions on debt ceilings or auctions throughout liquidations 2.0. We started to use a 1inch API, which will probably make an excellent tool to measure on-chain liquidity, becoming more important. That's all I had for today. If there are any questions, please ask.

### Real-World Finance Update

#### Sébastien Derivaux

[22:40](https://youtu.be/Y6PHmjt32jI?t=1360)

- Centrifuge assets will migrate to use MIP21, interacting with MakerDAO directly. This will bring a lot of velocity to some RWAs. That's good news for Centrifuge and the team.
- We might have solved another issue we had on RWAs, which is the USD-DAI edging cost. People in the real world don't want to use Dai. They want to use US dollars because there is always a risk of price variation in Dai. We know this will no longer be the case. However, people still want to be guaranteed that using the PSM brings us stability with USDC. Through USDC, you have stability with USD. There is still some work to be done on this front to see if we should do another PSM for RWAs or anything else to see if it will work well in the future. I think that the USDC PSM will be increased. There should be enough space for the next few months.
- Regarding 6S and RWAs in general, I had a good chat with a lawyer who will help us on the legal front specializing in structured finance. After the meeting, the lawyer was reading the Maker White Paper, which is great to hear. He understood why everything is complicated with Maker. I'm not sure that it was a compliment, but I took it as a positive comment.
- We have bad news concerning analytics. Last week I told you that in June, they would change some widgets being used. There will no longer be any pivot table. Currently, the financials for Maker no longer work because the front-end isn't working. I will try to see what they can do and other analytics platforms we can use to do that. It's a similar issue to what Primoz is facing. We'll have a discussion around this later today. We are working a lot with data, so hang tight.
- We have made progress on Fortunafi. We had a good chat with them and People's Company for a new round of negotiation. I hope everything will be fine. It could be difficult to negotiate on good terms with them, but everything looks great.

#### Discussion

- Frank Cruz: Does the RWAs team see any risks with Dai by losing opportunities? We see new platforms coming on and new stable coins looking to bring RWAs into the blockchain ecosystem. You have Centrifuge waiting, and there are new protocols like Acala coming online pretty soon. Yesterday's launch of Tether USD made a lot of headlines. Do we see a risk here on losing those opportunities since it takes some time to get things going?
    - Sébastien Derivaux: I don't think there is a direct risk for Dai because Centrifuge is doing more and more business, up to 5 million now and increasing quite quickly. They are still on Dai. Also, other competitors that are tokenizing RWAs are no longer using Dai. We had a discussion with Goldfinch that is onboarding RWAs, and they use USDC. That is not good news for us, but it will only pay at the margin. Another thing that can be important, and maybe we should focus more on, is to use RWAs to gain Dai's market share. Let me explain that: Many companies in Asia are using USDT for daily transactions. They are not using Dai because USDT was first. However, you cannot get a loan in USDT. Suppose we can find a way to give them loans in Dai, backed by invoices and inventory. In that case, it might bring some visibility for Dai to popularly utilized stable coins. In the U.S., not many people are using Dai or UDSC for daily transactions. They are used mainly for farming, which is not the best use case. However, they are using it for doing cross-border business in Asia. By bringing loans to those businesses, we might increase Dai's value proposition for them. This idea is still ongoing. Otherwise, I don't see USDC doing a business line on RWAs or stuff like that. We clearly have competitors that want to bring RWAs and not choosing Dai.
    - Frank Cruz: Thank you!

### Operational Support Update

#### Juan Guillen

[29:27](https://youtu.be/Y6PHmjt32jI?t=1767)

[Operational Support Weekly Update: March 12-18, 2021](https://forum.makerdao.com/t/operational-support-weekly-update-march-12-18-2021/7089)

- We're going to do EUR-DAI for the *Know Your MIP*  call next month in April.
- Regarding collateral onboarding; we're working on the ETH-C vault and RWF as well. We will have Bancor on a collateral call on April 7th, 2021. Then we will have a solid block for RWF on April 14th, 2021.
- For the core unit updates, we have revamped the [notion page](https://coreunit.makerdao.network/) used to present the core units and try clearing more of the feedback we've received. Feel free to give us more feedback on potential improvements.
- Last week LongForWisdom and his team came for [session number 2 for launching pod sessions.](https://forum.makerdao.com/t/core-unit-launch-pod-sessions-session-2-governance-alpha-core-unit/6847) Last Friday, we had [Sablier for the core unit tools.](https://forum.makerdao.com/t/core-unit-tools-02-through-sablier-march-12th-17-00/6866) On Tuesday, we had [AccountAble with David](https://forum.makerdao.com/t/core-unit-tools-03-accountable-for-makerdao-teams-march-16-16-00-utc/7035), and yesterday we had [Smart Contracts core unit with Derek.](https://forum.makerdao.com/t/core-unit-launch-pod-sessions-session-3-smart-contracts-core-unit/6946)
- Tomorrow, Seb will be presenting the RWF core unit, which will be voted on very soon. Next Wednesday, Seth will be presenting the content production core unit.
- Regarding core units in RFC, we have the same four. David posted the Governance Communications proposals to RFC. Please give feedback.
- Touching on interesting topics of conversation, we've had a blind spot check. We also had a call yesterday with Seth. He started working on things we should cover, map the whole space, and analyze which Core Unit would take over which aspects.
- Maker vesting has been a heated topic these last few days, and we've been prepared a post on it.

#### Discussion

- LongForWisdom: How does Operational Support think the onboarding on Core Units are going?
    - Juan: It depends upon what your metric is. It's exciting to see that three core units took the first cycle already. It's going well based on the MKR token holders' reaction and the feedback we have got. We don't know how the community reacts to different core units being proposed, especially when moving them forward to the voting area. It would be interesting to see. We haven't still got any core unit rejections as of yet.

### MIPs Update

#### David Utrobin

[34:18](https://youtu.be/Y6PHmjt32jI?t=2058)

[MIPs Update #30](https://forum.makerdao.com/t/weekly-mips-update-30/7083)

![](https://i.imgur.com/hndulia.png)

![](https://i.imgur.com/yZ9a02B.png)

![](https://i.imgur.com/NjUliH8.png)

![](https://i.imgur.com/e9M8Oec.png)

![](https://i.imgur.com/j57ttFe.png)

![](https://i.imgur.com/PrArntk.png)

![](https://i.imgur.com/zyasQse.png)

![](https://i.imgur.com/eR3c1eo.png)

## Other Presentations and Updates

### Kurt Barry

#### Liquidation 2.0 Oracle Risks

[37:00](https://youtu.be/Y6PHmjt32jI?t=2248)

- Today, I would like to convey information on risk concerning Liquidations 2.0, which stems from some previous risk discussions.
- The case concerns a price reported by oracles that is very low relative to the true market price. This could happen due to an oracle attack or malfunction. You could have a flash crash with a quick recovery but the oracles still manage to catch the bottom, or it could result from market manipulation.
- In Liquidation 1.2, you have an auction settlement price that is not related to oracle price because of how the English auction price works. The Dai target buffer, `box` parameter, combined with an enforcement time for settlement results in limits to the rate at which vaults are put on auction. This minimizes your market slippage risk and prevents total liquidation all at once. In an oracle price drop anomaly, liquidations 1.2 is fairly robust and minimizes losses to the system. **In Liquidations 2.0, on the other hand, the liquidated collateral is offered for sale near the oracle's reported price at the start of the auction.** This envisioned scenario considers that starting price is way below the market price. Therefore the auction will be quickly bought out, thereby locking in some systematic loss. Further, the purchase clears the DAI target buffer (`box`), which is the whole parameter, and that allows more liquidations to immediately occur. **The net effect of that is in the same oracle price fault scenario all vaults affected by the collateral will be liquidated in a short order limited by Ethereum block space.** There will be big losses to the system.
- We are not defenseless against this. We have a 1-hour delay applied to prices, giving MKR holders time to react using instant access modules to freeze oracles or disable liquidations. Still, there is an increased severity if a bad price gets through relative to liquidations 1.2. The incentive for a malicious actor to try to cause this to happen grows proportionally to the collateral in the system, which is not sustainable because this put lot of pressure on the oracle security module as we scale up. While this isn't a new problem, and we have oracle freeze functionality which we feel is sufficient for 1.2, the additional severity caused by dependency on oracle price for starting the auctions and how they can be cleared much more quickly calls for an additional measurement put in place to contain the risk in Liquidations 2.0.
- Any questions?
    - LongForWisdom: Just to summarize, this issue is less in 1.2 because those auctions start low and go as high as market price, wherein 2.0 the auction starts at oracle price and goes downward?
    - Kurt: Pretty close. In 1.2, the auction price isn't related to the oracle price in anyway—it is whatever participants bid for that collateral. However, in 2.0, the auctions start selling near to the oracle price. A little bit above it, there is a risk parameter that governs that. If the drop is significant compared to the true price, you can still start an auction below the market price.
    - Chris: One more distinction, in Liquidations 1.2 is that the `box` parameter is similar to a true independent rate limit on Dai's amount that we would request. That's because the auctions have a particular `ttl` or `tau` that needs to clear. Whereas in Liquidations 2.0, which are more efficient in the sense that we don't have that time window. You can imagine the extreme case being if we clear the whole, there's no independent rate-based time limiter. Therefore, all the collateral might go into this extreme tail-end risk, which could quickly go out into the auctions.
    - Kurt: In some scenarios, that's a feature. Suppose you have a real market decline and want to quickly sell your collateral before the market goes further down. In that case, Liquidations 2.0 is better in this scenario. The system's dilemma is when a low price comes in, and the system doesn't know whether the markets have dropped or if it's an oracle system fault. Oracle fault risk is much more severe in 2.0. While designing 2.0, we had a Black Thursday event, and we believe that 2.0 is over-optimized to deal with that case. We want to begin thinking about oracle risk now.
- Christopher Mooney: Imagine OSM price as the starting point, plus the buffer is less than the market price. In any case of that condition, auctions can settle instantly. You can liquidate more, take them, and repeat all in a single block. The extreme tail risk concerning an oracle malfunction attack, if that OSM price is one-way, adds a buffer of approximately 25% of the original price, then we let the entire set of collateral out for one-way auctions, all of it. It would be a very low probability risk but extremely high impact if it were to happen.
- Kurt: Whereas with Liquidations 1.2, you'd have an initial wave of auctions that would get triggered but would then settle near the market price, taking the current lifetime of auctions left to finish, which is usually 4 hours. Only the `box` parameter will show the Dai amount required by auctions. Meaning only some fraction of collateral gets liquidated. After 4 hours, the oracle price is fixed or recovered. It is then left with a certain number of Dai collected which were wrongly liquidated. The system would be fine because the auctions should settle near the market price rather than the oracle price. This has much less severe consequences relative to Liquidations 2.0.
- So, let me update the recommendations from the smart contracts team. The system currently faces significant risk from the real market downturns and Dai liquidity crunches with Liquidations 1.2. There are aspects of risk that are better under Liquidations 2.0 than 1.2, which is why we designed it.
- We can significantly decrease this false price drop risk within the short term through a special permissionless circuit breaker that we can add. It will allow anyone to disable liquidations anytime the collateral's next price is lower by configurable percentage relative to the current price. This would be similar to how the debt ceiling instant access module works where anyone can make changes to the debt ceiling but is only subject to specific protocols within the smart contract code. The risk can be based on a threshold decided by the Risk Team. This is a simple module that could limit down-side loss. It can be deployed within a couple of weeks. More details are coming up in the code and additional in-depth information. However, we believe a more robust mitigation system should be implemented within the system itself in the long run. Everyone should understand that this can take significant time. We chose this plan because it allows the phased rollout of Liquidation 2.0 to simultaneously implement additional risk mitigation, which shouldn't cause any further potential delays.
- We need to keep integrators updated in advance concerning the planned upgrade, which will install permanent mitigations and give them guidance on repair tools as quickly as possible.
- Any Questions or Discussions?

#### Discussion

[49:20](https://youtu.be/Y6PHmjt32jI?t=2960)

- LongForWisdom: This would be primarily on the Risk Team to suggest a sensible setting for that parameter based on volatility?
    - Kurt: Right.
    - Primoz: We would look at worst-case drops based on historical data for each asset along with a 1-hour window. Also, we would call a circuit breaker for each collateral type.
    - Kurt: Right, Each collateral has a separate price feed. We could configure them. Potentially, it would add additional complexity. Suppose you have three ETH variants that are all relying on the same price feed. In that case, you could create a meta circuit breaker that breaks all three of those collaterals relying on the same underlying feed simultaneously. But the simplest version is creating one for each collateral.
    - LongForWisdom: assuming that this is permissionless and price drops a significant amount, is anyone able to come in and freeze liquidations? If that were to happen, would we then need to turn them on again?
    - Kurt: We're finalizing the design, but we have an idea on how we could make that reactivation permissionless as well. When the circuit breaker gets tripped, you will save the most recent good oracle price. Suppose in the future the current oracle price has a relation to that recent price. In that case, whether it's less than the max allowed price drop or if it's gone higher, that could allow permissionless reactivation. You wouldn't necessarily need a governance action to restart in every case. However, it may vary for unique situations.
    - Chris: There needs to be a keeper checking the price updates. It's going to peek and peek to compare those prices. Every 1-hour, a keeper needs to look at those values and determine whether anything is out of bounds. It would have to send the successful transaction there. Otherwise, we would be in trouble.
    - Sam: Can you freeze it with the upcoming medianizer price, or does it use the OSM price?
    - Kurt: OSM has two prices: current price and following price of the remaining period. The circuit breaker is meant to be used when the current price is still a reasonable value. The following price will be the significant price drop. The circuit breaks before the bad price (following price) can be taken into the system.
    - LongForWisdom: How will it interact or change the buff instead of freezing liquidations? Can we do that?
    - Kurt: I guess we could, but that has its edge cases and risks. If the price of a one-way is coming in and we need to reset the buff, we must find a method to set the price back to something reasonable. Prices can get crazy. It's interesting to think about this, but then it gets much more complicated.
    - Chris: We've already had many engineers thinking about this for over a year. We took the final culmination of all of those studies. We sent it off to three auditors for proper audits as well as a simulator. We received feedback from integrators. The existing code that's there currently has been reviewed with a fine-tooth comb. Most of the changes we want to make are robust fixes that would invalidate some of that review and audit work. And so, this thing being on the side is simply an instant access module. It's the lightest touch version of mitigation to the tail risk that we could think of without invalidating audits at this point. We will cycle back since the impact is severe in the edge case, and there are mitigations that we could put in place. In the meantime, we recommend this solution.
    - LongForWisdom: It makes sense to me. How would you set the buff in relation to the price? Say you have the freeze at -40%, would you set the buffer to an inverse amount? Is the biggest drop before the freeze matched by the buff? Not sure if that makes sense.
    - Christopher Mooney: Yea, and then what happens in the next time quantum?
    - LongForWisdom: If it drops above the delta, you do the freeze? I'm thinking of a situation where someone knows exactly what the freeze is, and then it goes right up to that point.
    - Christopher Mooney: You're highlighting the risk of this module in the idea that an attacker or manipulator may be able to get the price right to the edge, which is very unlikely in a malfunction.
    - LongForWisdom: Let's discuss some of the things that can go wrong for the oracles concerning attacks or manipulation.
    - Christopher Mooney: I assume there will be primary, secondary, and tertiary systems keeping them afloat. We think that if all of those systems were to fail, rather than nose-diving the plane into the ground, we would add a parachute. Does anyone on the Oracles team want to speak on mitigations currently in place that help prevent oracle price manipulation?

[01:00:30](https://youtu.be/Y6PHmjt32jI)

- Marc-Andre: I'll reiterate some of the fundamental protections that we have in place. First, we have 26 different fees pushing prices. For an effective oracle attack to happen, they have to collude among themselves. That's rare, however not impossible, especially if the stakes are high. The risk of this happening without us detecting it is relatively small. The pricing information comes from more or less the same places, various off-chain or centralized exchanges. If the pricing information gets corrupted in several exchanges, that could be a problem as well. These are risks that exist. There's very little to completely protect against them. The biggest layer of protection that we have today is the oracle security module. This 60-minute delay gives us a chance to react if something bad happens. We know that zero risk doesn't exist. However, as you said, Chris, it's good to think about these types of scenarios and to make sure that we're protecting against them. We always have to keep in mind that things that are safe today remain safe if we multiply the total value of the protocol by 100 or 1000. Things that might not be credible threats today may one day become much larger threats.
- Chris: Under liquidations 1.2, if you can collude and create one of the oracle attacks, there's no benefit to the attacker. Liquidations 1.2 has a `box`, and you're in theory discovering a market price you're not going to monetarily benefit at least on Maker from manipulating the oracle price; however, under 2.0, if you can think of this failure scenario as if you're positioned correctly to grab all the collateral when this happens all of a sudden this makes it advantageous to try and perform an oracle attack. We want to steer away from any attack vectors that scale with total value locked. It's a good idea to put on more robust mitigation here to prevent that risk from scaling as Maker becomes more successful. We have the total value locked.
    - LongForWisdom: Sometimes, I'll think about it from the other side; if you want to clear and attack the oracles, your first barrier is getting what the quorum is. So, like 14 of 26 feeds to screw Maker over without telling anyone. If one defects and tells Nik or Mark, then we know, and the gigs up. Even if that all goes well, you have to be prepared for a governance reaction to disable the OSM. Then you want this last protection. Even if you know governance doesn't react fast enough on the OSM, you then have this final blocker that stops any drop beyond a certain amount and therefore limiting your total upside. I am not worried.
    - Nik: There are layers of defense here, right? With the oracles, there's not just any one thing that you point to. Suppose you do have an oracle attack from the feeds and manage to queue up a price in the OSM. In that case, you have about one hour to freeze the oracle security module before that price takes effect in the Maker protocol. Right now, we're relying on the fact that you can pull off a governance vote in that one hour to freeze the OSM. It is not guaranteed that you can rally enough of the MKR to have that governance vote within that one hour. I've been thinking about whether there can be some kind of permission multi-sig that maybe the signers are the mandated actors. Maybe there are five of them on it, and you need three out of five. The only power that the multi-sig would have is that they're allowed to effectively freeze the oracle. That might be a good extra layer of protection. I haven't discussed it much with the other mandated actors. I'm not sure if they want that kind of responsibility or liability.
    - LongForWisdom: I think that's a discussion that we'll have to have another day as we're running a little low on time. Nik, do you want to do a more general oracle update? There's been some good news recently.
- Nik: For those of you who saw the [forum post](https://forum.makerdao.com/t/signal-request-increase-uniswap-dai-eth-usdc-eth-dai-usdc-debt-ceilings-add-dc-iam/7063), this may not be that new, but we have gotten the results back from ABDK for the LP oracle. They have some feedback on things that they wanted us to change. However, there were no critical or high-priority items that show that the oracle price could be manipulated or is dangerous to use our oracle in the current configuration we have. we do plan to make those changes. We do plan to redeploy the oracles. We will work on the blocker in terms of the LP oracle's security. That blocker has been relieved, so we can look to increase some of the LP tokens' debt ceilings. I put the signal request together after the mandated actors discussed it on the weekly call. We recommended that we adjust the USDC-ETH, DAI-ETH, and USDC-DAI vault types. We made the recommendation of 50 million for USDC-ETH, 30 million for DAI-ETH, and 50 million for DAI-USDC. So far, it looks like the community agrees with that assessment.
    - LongForWisdom: It's been encouraging to see that response there. We'll end that poll on a Friday.

### Amy Jung

#### Incentives and Vesting

[1:10:10](https://youtu.be/Y6PHmjt32jI?t=4210)

![](https://i.imgur.com/maBDdc0.png)

- This will all be in [a post](https://forum.makerdao.com/t/discussion-core-unit-budget-incentives-and-vesting/7102) a little bit later.

![](https://i.imgur.com/n5KpOII.png)

- I want to keep up the idea that there are many nuanced discussions. Hence, the way the framework is done. The budget includes the incentives, the salary, and operational costs. That stuff makes conversations difficult to create in one thread, which is why we want to pull some of that out. There are different points to it: I read a lot about salary itself, the incentives, the amount of the incentives, vesting, and the incentives' structure, the sourcing of MKR and its mechanics, the social contracts around MKR and minting, and then whether this should be a consistent approach across core units rather than a proposal per core unit.

![](https://i.imgur.com/HM5NdbC.png)

- I want to pull in some of the things Derek covered in his YouTube video call, which concern "why" the compensation package is being proposed. We discussed different parameters that we talk through, which are cliff or streaming. There are conversations regarding what that vesting may look like and so on.

![](https://i.imgur.com/uYOwgNr.png)

- There's this discussion around the social contract of minting and MKR. There's some discussion around the power to mint, the reason for minting, and minting being conflicting to some of the ideologies that are under discussion.
- With minting itself, there was some proposal on how we could think about minting and what that amount could be.
- A little bit about the burner too, if it were to come from there instead of burning MKR. There was an interesting conversation in the call about buybacks as a vector attack by front runners. A little more emphasis on why MKR should be set aside or that minting might be a more effective mechanism. Everyone has unique opinions on it. Juan has a diagram explaining why, which I won't go through in detail right now.

![](https://i.imgur.com/6isbIdG.png)

- I also want to propose some other ways to think about incentives, and not just regarding vesting or MKR in general. There was some discussion around options. We can think about performance-based bonuses and so on. It could be either rewarding specific amounts to core units instead of each core unit proposing something for itself. We're also thinking about how this could tie into the work we're doing with source cred.

![](https://i.imgur.com/jNH0Up4.png)

- Other questions came up as well; one is whether we should scale and standardize this for other teams? Part of it could be to reduce potential future competition. Can there be a wider framework because there are specific approaches that different core units want to have? There are aspects around what happens if a contributor jumps between core units, and what does that package look like for vesting? What are the plans for the foundation MKR and could this be used for that? If we're thinking about performance, then what it looks like, and how feasible it will be?
- That was a super brief overview. I was planning for a discussion, but we can save it for last week.
- LongForWisdom: There may be a separate call to specifically talk about this topic soon.

![](https://i.imgur.com/bZNWNFn.png)

## Common Abbreviated Terms

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RFC`: Request For Comment

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Gala Guillen produced this summary.
- Sai Teja produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
