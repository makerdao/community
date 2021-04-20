# Episode 137: April 15, 2021

## Agenda

- [00:00](https://youtu.be/buCIWmkckng): Introduction
- [05:17](https://youtu.be/buCIWmkckng?t=317): Forum at a Glance
- [08:15](https://youtu.be/buCIWmkckng?t=495): Smart Contracts Team Update
- [14:23](https://youtu.be/buCIWmkckng?t=862): Oracles Team Update
- [16:15](https://youtu.be/buCIWmkckng?t=975): Risk Team Update
- [22:10](https://youtu.be/buCIWmkckng?t=1330): Real World Finance Update
- [26:58](https://youtu.be/buCIWmkckng?t=1618): Operational Support Update
- [29:57](https://youtu.be/buCIWmkckng?t=1797): Community Development Update
- [33:56](https://youtu.be/buCIWmkckng?t=2036): MIPs Update
- [39:05](https://youtu.be/buCIWmkckng?t=2345): April MIPs Inclusion Review
- [39:45](https://youtu.be/buCIWmkckng?t=2385): Open Discussion

## Video

<https://www.youtube.com/watch?v=buCIWmkckng>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/buCIWmkckng)

- Hello everyone! Welcome to the Scientific Governance and Risk meeting #137, taking place on Thursday, April 15th at 17:00 UTC. My name is LongForWisdom. I'm the Governance Facilitator at MakerDAO.
- If you have comments or you want to ask questions, please do interrupt.

##### Governance

- Last week, we had a discussion about passing executives. Things were looking slow. Thankfully, after that call, we have gotten heavier participation from some larger MKR holders, which is good to see. We managed to pass the executives during the past two weeks. These executives included [Core Unit budget distributions for April](https://vote.makerdao.com/executive/increase-debt-ceilings-provide-april-core-unit-budgets?network=mainnet#proposal-detail) involving increases to the DC. Last week, we had a [NewSilver drop](https://vote.makerdao.com/executive/onboard-new-silver-series-2-drop?network=mainnet#proposal-detail) to go into the protocol.
- This week, the plan is to have Liquidations 2.0 in the executive because it is a significant change. We will turn that on for Link and authorize all the Liquidations 2.0 contracts.

##### Polls

- We had a set of inclusion polls as part of the monthly Governance cycle this week, which had all passed. We will have a MIPs update later.
- We also had a signal based on the [petition letter to A16z pushed by iammeeoh](https://forum.makerdao.com/t/signal-request-petition-letter-to-a16z/7181) that passed; There were 4000 MKR in favor and almost none against it. We did have 8000 MKR abstaining, which is interesting. It feels like people are unsure when voting on this sort of thing.
- We also passed the [parameter changes proposal](https://vote.makerdao.com/polling/QmRRzmnF?network=mainnet#poll-detail). The poll for that succeeded with 60000 MKR in favor. We will probably push this back by one week due to Liquidations 2.0. It will go into next week's executive rather than this week.

##### Governance Alpha

- The Governance Core Unit posted a [delegation plan](https://forum.makerdao.com/t/governance-and-delegation/7455) to the Forum that introduces delegation and shares the path we will take forward. This was also an open call for people that would be interested in potentially being delegates. If you are interested, please reach out to me. We've also been continuing with onboarding Prose and Elihu. We've got an initiative to perform an inventory of the current MIPs we've got. We want to look at them and find any that may be obsolete given some of the new changes. If we were to find any, we might perform some edits on them.

##### Signal Request Forum

- I did some minor category changes in the Forum to make Signal Requests neater. When you now access the Signal Request Category, you'll see the active Signal Requests instead of seeing a huge thing showing everything in existence. The MIPs portal work continues. Generally, this week I've been dealing with internal Governance software processes, like getting people paid.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Forum at a Glance

#### Peyton Rose

[05:17](https://youtu.be/buCIWmkckng?t=317)

[Forum at a Glance - Forum Thread](https://forum.makerdao.com/t/forum-at-a-glance-april-9-15/7509)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Three Point Summary

- The bulls are out in force with MKR price hitting an ATH above 3,300 DAI :sunglasses:
- ETH-A usage is currently sitting just above 1.75B DAI, closing in on the first vault type to pass 100M DAI in annualized stability fees.
- DAI peg is stronger than ever, with [DAI Deschipher](http://dai.descipher.io/) reporting a 7-day VWAP of $1.0!

##### Announcements

- ETH-A continues to be utilized. We are up to cover over 1.75 billion, and we are close to passing 100 billion in annualized stability fees. According to DAI decipher, other great news is that the Peg is looking outstanding, sitting around at 1$ flat.
- [Announcing MakerDAO’s Community Blog 2!](https://forum.makerdao.com/t/announcing-makerdaos-community-blog/7424)
	- Tim made the post, and he's working with a bunch of other really great people in terms of giving us space where you can contribute, write articles, explain things that are happening in the Maker ecosystem.
- [@mrabino1 shared the 6s - RWA001-A - Document Roadmap](https://forum.makerdao.com/t/6s-rwa001-a-document-roadmap/7413)
	- Take a look at all the awesome work being done to onboard Real-World Assets!

##### Discussions

- [Activating MKR Staking Rewards](https://forum.makerdao.com/t/discussion-activating-mkr-staking-rewards/7480)
    - @hexonaut breaks out the diagrams on how much Staking Rewards could pay MKR holders who lock their tokens in Governance.
- [A Series of Questions About Strategy](https://forum.makerdao.com/t/a-series-of-questions-about-strategy/7487)
    - @seth asks some critical questions about the future growth of DAI and the Maker protocol.
- [Informal Poll - Increasing the SourceCred payments](https://forum.makerdao.com/t/informal-poll-increasing-the-sourcecred-payments/7489)
    - @mrabino1 asks the community how they would feel about increasing payments to contributors via SourceCred.

##### Signal Requests

- [Adjust Liquidation Ratio for UNI-V2-DAI-USDC-A Vault Type](https://forum.makerdao.com/t/signal-request-adjust-liquidation-ratio-for-uni-v2-dai-usdc-a-vault-type/7444/1)
    - @monet-supply signals lowering the liquidation ratio for UNI-V2-DAI-USDC-A to encourage more participation in the pair.

### Smart Contracts Team Update

#### Christopher Mooney

[08:15](https://youtu.be/buCIWmkckng?t=497)

- The Coinbase IPO and Berlin hard fork happened yesterday. There was a bug in the open Ethereum clients that caused them all to have a consensus error. All the open Ethereum nodes across Ethereum froze. We've been working on making sure things are ok. Oracles are the most critical infrastructure. This is a well-planned failure case at the foundation. We should continue to take care of this issue in the DAO. Still, we have plenty of node redundancy; we run Dai on parity. We could flip over anything that was on parity. The fix is out. The parity node should come back online, which you should see across the ecosystem.
- The MIP22 spell went to the mainnet and passed. We're waiting for that to execute tomorrow. We had to cycle back and deal with some issues in Kovan, such as changes in the token name, which were updated on Kovan. I posted those updates in the collateral onboarding updates channel. Everything is patched up in Kovan so that Kovan matches the mainnet.
- With regards to MIP45, which is Liquidations 2.0, it's already been on Kovan. The addresses are in the collateral onboarding updates channel. We're working on the Dss deployment scripts to finalizing. In parallel, we've been working with lots of different teams, keepers, and other services to ensure Liquidations 2.0 works.
- We updated the HackerOne bug bounty program to reflect the new contracts—happy bug hunting for anyone out there. We will update the MIP45 audit links later today. You can go to [security.makerdao.com](security.makerdao.com) to view the audit reports. One of them is missing, but we will get them out.
- We're preparing for YFI next week. We've got the tight cadence that will begin happening. We have to go to Kovan with next week's bundle while also going to mainnet with the prior bundle that will persist for about the next 4-5 weeks.
- We got some review of the Sushi Join Adapter happening. ABDK, who's auditing it, came back with a response. We're currently looking at those and are planning to get it done to send back responses by next week.
- There's also `OmegaPoker` in review, and the delegate voting contract that LongForWisdom alluded to earlier is under development.

### Oracle Team Update

#### Nik Kunkel

[14:23](https://youtu.be/buCIWmkckng?t=862)

- Last night, we had the Berlin hard fork. There is no issue with the oracles upfront, and everything is working as expected.
- Regarding the Defi Saver, we have voted them to be a light feed. They're dealing with some stuff on their end right now. They haven't set up their light feed just yet,. I don't think they're key to this week's executive vote. We can try to do it next week and add in the executive vote.

### Risk Team Update

#### Primoz Kordez

[16:15](https://youtu.be/buCIWmkckng?t=975)

- We released liquidations parameters for the YFI vault today, which is supposed to have a new liquidation system implemented the following Link. Link is this week, and YFI will be next week.
- Also, next week, we're proposing ETH and WBTC liquidation parameters that will likely be slightly different due to liquidations ratios being a bit lower. We might want to settle these auctions a bit earlier; instead of 40 mins expected auction duration, we propose a shorter duration for vault types like ETH-B. These vaults have higher risks of MKR. Packaging proposed parameters are mostly identical to those we recommended last year. However, we're still waiting for the PAXG team to answer the [concerns](https://forum.makerdao.com/t/paxg-collateral-onboarding-risk-evaluation/4833/10) brought up on the forum. We're waiting on feedback following contact of this MIP. @Monet-supply made a post regarding [increasing the minimum threshold for emergency shut down](https://forum.makerdao.com/t/informal-poll-should-we-raise-the-minimum-mkr-needed-to-call-end-cage-for-emergency-shutdown/7277/16).
- We're mostly focused on the risk web app, which I mentioned in one of the previous calls. We plan to have all the risk recommendations, risk premiums, DC, and value risk calculations all in one place on a web app. community members or future analysts can look at how we calculate things as well as automating calculations. The amount of assets in the Maker portfolio is increasing and will continue to grow. Once we finish liquidations, we will be onboarding assets.
    JoeQ: Let's discuss the liquidation times for those vaults. That's the problem we had before. I know we've worked towards it. We can have open hours to discuss it before we go live on the big ETH vault.
    - Primoz: We can happily have this discussion along with incentivizing Gigs.
    - Wouter: You spoke about the expected auction duration. Is that the moment when the price curve hits the OSM price?
    - Primoz: No, that's when the price curve hits the market price, which depends on whether the market price is steady from the time the OSM price feed we got. It's 40 minutes on average, but if the MKR price increases, it's earlier. If the price crashes additionally, it's later.
    - Wouter: You run different simulations and took the average?
    - Primoz: Yeah.

### Real-World Finance Team Update

#### Sébastien Derivaux

[22:10](https://youtu.be/buCIWmkckng?t=1330)

- Aes released [a framework for evaluating the MKR price.](https://forum.makerdao.com/t/a-framework-for-valuing-mkr/7442) Some may be reading it because the MKR price is rising but still under the model's fair value. It's still a good value for the purchase. This is not investment advice.
- Thanks to the Operational Support team, we have a [new finance website](https://finance.makerdao.network/Finance-MakerDAO-79759e3715e444fea3a76c41ad8cbc3d) that tracks every main item we have under Finance, such as presentations and stuff.
- Big news: New Silver onboarding was done on Monday and validated the next day. It will be in the executive tomorrow. We expect to potentially have the first draw on the loan next week. There's a [call tomorrow](https://forum.makerdao.com/t/focus-on-01-focus-on-rwf/7508) discussing that focusing on RWF in more detail. If you have questions on this collateral, feel free to join, and we can discuss that or any other subject you like.
- Lastly, we have onboarded for two collaterals regarding scheduled collaterals; 6S is midway through the onboarding process. We discussed with the Smart Contracts team to onboard at least one collateral per month beginning June. We have a pipeline of almost ten collaterals to onboard, which will fill until the end of the year. This might lead to prioritizing or pruning the pipeline. I'm not sure how to do it. I still need to figure out what needs to be done. If you have thoughts about how you want `RWA` to be onboarding in the next few months or prioritizing, that would be helpful. There are many paths we could take from here. One path would be to onboard the smallest collateral because we are still in the experimental phase. Hence, onboarding the smallest is less risky. Even if there is a problem, it wouldn't be as significant. However, it doesn't move the needle. We still have a lot of USDC to use. Another option is to decide that some collaterals are better. Solarex is a project to use 100 million Dai. That may be more interesting because Solar farming is in the NY state. It may be less risky compared to trade finance companies, but, at the same time, trade finance companies can help us reach new customers in Asia. There's always a trade-off, and it's not clear what should be decided. At some point, the Community should participate in the discussion and give any feedback.
	- LongForWisdom: Regarding the concerned need to choose a direction, it is a complex subject. Others may feel similarly. If you are looking for direction, it's worth putting together potential options you had mentioned and documenting them with more detail, pros, and cons, etc.
    - Seb: Yes. I will post a summary in the forum to trigger the discussion.

### Operational Support Update

#### Juan Guillén

[26:58](https://youtu.be/buCIWmkckng?t=1618)

[Operational Support Weekly Update: March 22- 24, 2021](https://forum.makerdao.com/t/operational-support-weekly-update-march-22-24-2021/7192)

- We want to provide more visibility to different core units. We're launching tomorrow with real-world finance. This is a space where existing core units can detail information and take questions from the community on what they are doing. We're happy to make one with you.
- We had a declaration of intent on EURO-DAI. The [KYM number 6](https://forum.makerdao.com/t/know-your-mip-kym-07-declaration-of-intent-eurdai-friday-april-09th-13-00-utc/7362) last Friday with Seb and ultraschuppi went well.
- We had a call yesterday with a SolidBlock. 2 weeks from now, we will have MCO2, which neutralizes carbon emissions.
- Monday, we will have a call with David on the Governance Communications Core Unit. On Wednesday, we will have Sustainable Ecosystem Scaling by Wouter and me.
- Amy posted the [representative of working groups](https://forum.makerdao.com/t/framing-a-framework-for-mkr-compensation-wednesday-march-31-17-00-utc/7200/3). This will help those less connected regarding the [Maker compensation working group](https://forum.makerdao.com/t/mkr-compensation-working-group-membership/7460) LongForWisdom had posted.
    - LongForWisdom: We are waiting to fill in the third-party slots, and then we will begin.

### Community Development Team Update

#### Anna Kryukova

[29:57](https://youtu.be/buCIWmkckng?t=1797)

- For the last couple of months, our focus has been wrapping upon many projects, including navigating the transition from community development as a department bootstrapped by the foundation to people and projects transferring over to the DAO.
- I will spotlight a few projects today.
    - [Design - Brand Assets](https://github.com/makerdao/community/issues/1243)
    - [Figma - Brand Assets](https://www.figma.com/file/07xFcvqC1ryhCUQHqFwSbH/Maker-Comm-Dev-%E2%80%93-Brand-Assets?node-id=3162%3A2149)
- One of the contributors in community development, Shea, has been working on the community development portal. Many illustrations have created a project called [brand assets](https://github.com/makerdao/community/issues/1243) which takes inspiration from foundations branding. However, we made our own to use for the community. Shea created a document where anybody can create graphics. There's also a PowerPoint presentation, including instructions.
- The community development portal launched a [Maker Community Blog](https://blog.makerdao.com/) where anyone from the community can contribute to.

### MIPs Update

#### David Utrobin / Charles St. Louis

[33:56](https://youtu.be/buCIWmkckng?t=2036)

- ![](https://i.imgur.com/yUOUkkQ.png)

- ![](https://i.imgur.com/Ggl48fA.png)

- ![](https://i.imgur.com/SNerh97.png)

- ![](https://i.imgur.com/yd6X9wL.png)

- ![](https://i.imgur.com/j9DM1Cq.png)

- ![](https://i.imgur.com/oxZy8uq.png)

- ![](https://i.imgur.com/apZUvXE.png)

## Procedural

### April MIPs Inclusion Review

#### LongForWisdom

[39:05](https://youtu.be/buCIWmkckng?t=2345)

- Last week's MIP inclusion polls have all passed and will continue through next week's monthly Governance bundle poll.

#### Open Discussion

[39:45](https://youtu.be/buCIWmkckng?t=2385)

### Emergency Shutdown Module

- LongForWisdom: We want to discuss the emergency shutdown module MKR threshold in more detail. For those who don't know, this is the amount of MKR required to trigger an emergency shutdown in the protocol. It's currently set to 50,000 MKR. It's useful if, in the event of a Governance attack for MKR holders gracefully shut down the protocol. It's useful in minority threats encouraging Governance to reach a consensus on some things rather than leave a significant part of MKR holders unhappy. In the past, it has been a backup in case there's any critical bug that we weren't able to safely fix. Smart Contracts team can discuss this more, especially around Liquidations 2.0.
    - Chris Mooney: I'll take that invitation. Tomorrow we are planning on releasing a [forum post that discusses the ESM](https://forum.makerdao.com/t/emergency-shutdown-module-threshold-change/7526). We have to update the ESM as part of the Liquidations 2.0 update. For the end to function properly, it needs to be able to yank existing auctions. We will update the ESM, and since there are no administrative functions on the ESM, this seems like a good time to update the amount of MKR in the threshold. We could do it at a different time, but we are already making these changes. Therefore, we may do it tomorrow. That's the general point of the discussion. Does anybody want to weigh in on that?
    - LongForWisdom: When you stated that it has no administrative functions, do you mean to change the MKR value? Would we need to redeploy and replace the contracts?
    - Chris Mooney: Yes, that's right. The module itself is extremely pure because there is no Governance ability for us to change anything in it. Because it is partly intended to be used in a Governance attack, we have to pre-deploy it with the values we want. If we were to do that, we have to update it for Liquidations 2.0. We would then also update it if Governance has decided they want to change the MKR value.
    - Brian MacMichael: This is something that came out of the mandated actors' call and maybe a little bit of risk, as well. Due to the spell being tomorrow, there's no chance to go through a full Governance cycle. I don't think anybody has any opposition to raising the MKR threshold. It's very expensive, but the number of assets under management is greater than when we had deployed the system. We would like to know if anyone has strong objections against raising the threshold, in which case it would have to go through a full Governance cycle.
- Kurt: Just to add a little color on how to think about this threshold. This is one of the most complex and hotly debated areas of Maker protocol Governance game theory. You don't want the threshold set too low because then it's too cheap for somebody who doesn't like the system or has a big MKR short to come and cause chaos and shut the thing down. On the other hand, if you set it too high, you might have trouble rallying that amount of MKR in an emergency scenario where it needs to be used. One of the purposes is as an honesty minority can shut down the protocol and protect it from a Governance attack. It doesn't make sense to set it to an amount of MKR that's more than half of the circulating supply. That module would be pointless, then. It'll be weird to raise the threshold as the MKR price increases. Usually, you would think that it would go in the opposite direction. One way to go about trying to set it is to target a certain amount for security. There are other considerations such as MKR distribution and considering how many large individuals it would theoretically take, etc. It's something that requires careful game-theoretic consideration, and that's why it tends to be hotly debated.
    - Primoz Kordez: @Monet-supply from our side recommended this threshold to be raised to 75,000 MKR. I think it's a good value because we see that the amount of MKR bought on borrowed is currently 50,000. There are, of course, downsides to increasing very high. As Kurt said, it's mostly related to how quickly we can trigger an emergency shutdown. I believe that we have recently shown that we can get some MKR activated very quickly through a bit of campaigning. I think that the 75,000 MKR threshold is good. I even think a 100,000 could work, but it will be more difficult if we need to react, for instance, within an hour or so. This issue concerns knowing who the biggest MKR holders are, how quickly they can react, and how we can reach out to them. Monet-supply also suggested preparing a continuity plan to give us a better idea of the appropriate amount.
    - Monet-supply: My [post](https://forum.makerdao.com/t/informal-poll-should-we-raise-the-minimum-mkr-needed-to-call-end-cage-for-emergency-shutdown/7277/16) was fairly long-winded. The idea is we need to find the correct balance based on evidence of MKR threshold vs. safety. The obvious threshold for that is the amount of MKR you can short. Suppose an emergency shutdown happens out of the blue. In that case, the token might be worth hardly anything at that moment, so we need to find the balance between making sure that it's more than you can borrow on AAVE and other places but also low enough where we can actually reach the threshold. Figuring out what's too high involves testing a regime for some of these emergency situations and implementing those who have significant holdings who want to participate. We need to be professional with emergency shutdown testing. That is something I'll be working on in the next couple of weeks.
    - Brian McMichael: For those that are not familiar with the ESM, it irrevocably burns the MKR that's depositing to it. Even if someone borrows the MKR, they are committing to burning that MKR forever. In the case of a shutdown, if we were to redeploy the system and the burner or if multiple burners were honest participants, we would be able to mint back to those people.
- LongForWisdom: It's worth noting the potential shorting situation. Anyone making a short attack would need enough MKR to sell before triggering a shutdown. They need to have enough MKR to lock in the contract and more MKR to sell to profit. I don't know how much that would be, but they would need an excess of the ESM amount, probably by at least 10 or 20%.
    - Monet-supply: You need to have enough MKR tokens to trigger the ESM, but you could short pretty much everything in DeFi based if Dai blows up. You need enough MKR to trigger it, but there are innumerable ways to profit from Maker blowing up.
    - LongForWisdom: I agree. You need the capital to trigger the shutdown and also to spend on the shorts. However, there is an absence of heavy opposition. We are going to conclude that the increase to 75,000 is in the Liquidations 2.0 update. As Brian said, it does skip the regular Governance Cycle, but it saves us a little bit of time. We had the off-chain Governance poll that supported the increase. We also had the report that @monet-supply produced, which suggested 75000 to be a good amount.
    - Kurt: There is a strong argument that you should aim to be higher than what someone could borrow on the market. With the MKR supply up to a million, being at 7.5% of total supply, seems like a reasonable threshold.
    - LongForWisdom: I agree. I don't see a problem with it being 75,000. We could rally up that MKR if we needed to in an emergency.
    - Christopher Mooney: Yes, we technically just did.
- Kurt: We want to think about having some sort of voluntary opt-in like a pager system for big MKR holders who want to be on call. Their availability is the hardest part of getting the ESM triggered in time. Hopefully, you have a Governance delay of two days as for most cases. For extreme cases, if it's an oracle attack, you may only have an hour. In which case, it might be better to use the oracle freeze module, but you still need to rally enough MKR holders to overtake the `hat,` which could lead to even more MKR. The DAO should think about having an organized system to send out an emergency alarm and be able to get sufficient MKR liquidity online ready to act in a short time frame.
    - Wouter: That is something that may be in scope for a new Core Unit proposal.
    - LongForWisdom: This is something that we are going to start looking at in Gov Alpha. We will try to put together emergency contact details for some of the larger MKR holders. As you said, this will be important going forward.
    - Kurt: Ideally, you would have a broadcast system that people could subscribe to. Privacy would be respected, of course.
    - LongForWisdom: Yes. that would be ideal. It would just be a matter of contacting large MKR holders and getting them to sign up.
    - Wouter: One of the challenges is not the only situation we might want to set the alarm for. For example, Liquidation events happening on-chain to do with other signals that indicate suspicious behavior. That might need different responses from different people. Looking a little bit further ahead, it will be good to have a service that allows different profiles of responders to subscribe to different alarms. One that I think will come up soon concerns minor expectable value alarms where you can compare the distribution of blocks that are being mined by different miners to the distribution of MKR transactions that are being mined. These are all examples of various alarms that may require different responses. It would be nice to have a service where you can see these scenarios and subscribe to the ones you would like to help with.
    - LongForWisdom: That's a fantastic idea.

### Liquidations 2.0 Module

- Payton: I have a question regarding the Liquidations 2.0 Module. Looking into many newer auction-based methods for making token sales or trying to avoid the MEV problem, many of them are similar to the Liquidations 2.0 parameters. I'm curious about how simple it would be to decide to mint and sell MKR or do an open market operation? Could we use the Liquidations 2.0 framework to achieve the fundraise? In this case, could we reverse the tokens if we take Dai for collateral while trying to get MKR?
    - Brian McMichael: There are a lot of patterns out there for the Dutch auction-style. We would not be able to use Liquidations 2.0 because it's so tight to the existing Vaults. However, there is plenty of precedent torque for Dutch auctions if you want to perform a capital raise.
    - Christopher Mooney: Are you speaking about collateral liquidations or about surplus and debt auctions?
    - Payton: That is interesting. I haven't thought about surplus and debt auctions. We were having the minting vs. not minting argument. Having a way to buy in an open market would be important if you try to avoid minting.
    - Christopher Mooney: Yes. A further off-plan is to shift these `flap` auctions to something similar to the Dutch auction mechanism. We could do the same with `flop` auctions. `Flop` auctions start out a little high. Therefore, we pick a different starting price for the `flop` auction, which is wildly low at this point—that may be a parameter that we should consider updating. The downside is that both of these auction types kick off from the Vow, a hardcore contract to change in our system. we are much better off doing collateral liquidation and seeing how this stuff performs. There is a yearly horizon plan where we hope to replace the Vow and get features like having `ilk` specific sin cues, which are the delays between `flop` auctions. We also want to add the Dutch auctions into `flap` or `flop` auctions for the surplus and debt auctions.
    - Payton: That's awesome! I had no idea. Cool!
- Christopher Mooney: The whole team needs to do something not auction-related for a few months at least!
- Payton: I wonder why! Hint: CropJoin.
- Nik Kunkel: We've got the audit now.
    - Christopher Mooney: Yes, that was in my update. We are looking at CropJoin right now.
    - Nik Kunkel: There were no major issues found in the audit. We saw a couple of rounding errors, and everything else is cleaned up.
    - Brian McMichael: We have these little things that shouldn't take very long to get out the door, such as the `box,` the `keg,` the flash mint, and things like that which we pushed off for Liquidations 2.0. We will still be working on Liquidations 2.0 for the next couple of months. We will be getting these piecemeal out of the door every week. The spells involved are quite large. We're not going to be able to do them all at once unless we can figure out a pattern for multi-part spells, but we might be rolling these out two or three at a time until we get up to speed.

### CropJoin, LPs, and v3

- Payton: Concerning CropJoin, are we looking for the Sushi implementation, or does the audit work for something like Compound?
    - SamM: Compound is more complex than Sushi because it relies on recursive leverage. We want to go with Sushi first, but it could pave the way for implementing Compound.
    - Christopher Mooney: It's an extensible base class. Therefore, it should be easy for us to take advantage of other types of Crops; we just need to write the code on top.
    - Brian McMichael: We found a good market fit with these Uniswap LP tokens. However, v3 brings some concerns with loss of liquidity. Sushi doesn't plan to upgrade, which will give us plenty of liquidity.
    - Nkunkel: Balancer, Bancor, and other similar tokens will probably follow their own unique growth instead of copying each other or copying Uniswap. The Uniswap v3 did screw us over, but I am optimistic with LP tokens over the long term.
    - Brian McMichael: This doesn't mean Uni v3 won't work. We need the community or Uniswap team to standardize a token version of their new model if we cannot use their official model.
    - Nkunkel: It's also about liquidity being actively managed in v3. Suppose somebody submits a huge order that absorbs all the liquidity in a person's position. In that case, that can cause people to end up all in one token. A lot of LPs are removing their liquidity or temporarily performing infinite bound liquidity. However, tokenizing a particular LP range will require knowing the most efficient range width. Too small of a range will cause a loss of uniformity. Too large will risk more capital efficiency.
    - Kurt: As the market figures it out, passive strategies will naturally come out and become implemented by the community.

#### Links from Chat

- [Gov and Delegation](https://forum.makerdao.com/t/governance-and-delegation/7455)
- [Maker Status](https://makerdao.statuspage.io/)
- [Malfunction Brings Down ETH Block Explorer](https://digitalcoinowner.org/2021/04/15/client-malfunction-brings-down-ethereums-most-popular-block-explorer/)
- [Maker Security](https://security.makerdao.com/)
- [Framework for Valuing MKR](https://forum.makerdao.com/t/a-framework-for-valuing-mkr/7442)
- [Focus on RWF](https://forum.makerdao.com/t/focus-on-01-focus-on-rwf/7508)
- [Ops Support Weekly Updates](https://forum.makerdao.com/t/operational-support-weekly-update-april-9-15-2021/7510)
- [Archive Posts](https://github.com/makerdao/community/issues?q=is%3Aissue+is%3Aopen+label%3AArchive)
- [Design Issue](https://github.com/makerdao/community/issues/1243)
- [Figma & Assets](https://www.figma.com/file/07xFcvqC1ryhCUQHqFwSbH/Maker-Comm-Dev-%E2%80%93-Brand-Assets?node-id=3162%3A2149)
- [Weekly MIPs Update](https://forum.makerdao.com/t/weekly-mips-update-32/7464)
- [MIPs List](https://mips.makerdao.com/mips/list)
- [MIPs Tracker](https://www.notion.so/b6e7223840874da6937748228b73b213?v=9a2b165297be474788377dccef08b407)

## Common Abbreviated Terms

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GF`: Governance Facilitator

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RWA`: Real-World Asset

`RWF`: Real-World Finance

`SC`: Smart Contracts

## Credits

- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Sai Teja produced this summary.
- Gala Guillén produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
