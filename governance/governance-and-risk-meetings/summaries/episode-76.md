# Episode 76: March 05, 2019

## Agenda

- [00:00](https://youtu.be/ZT8flAjPKLU): Intro with Rich Brown
- [1:43](https://youtu.be/ZT8flAjPKLU?t=103): SCD and the GSM with Mariano Conti
- [19:14](https://youtu.be/ZT8flAjPKLU?t=1154): Vote Expiry with Derek Flossman
- [27:04](https://youtu.be/ZT8flAjPKLU?t=1620): State of the Pegs with Vishesh
- [34:30](https://youtu.be/ZT8flAjPKLU?t=2070): Recap of Forum Topics with LongForWisdom
- [44:53](https://youtu.be/ZT8flAjPKLU?t=2693): Collateral Onboarding with Cyrus Younessi
- [1:21:01](https://youtu.be/ZT8flAjPKLU?t=4861): End of call Discussion

## Video

<https://youtu.be/ZT8flAjPKLU>

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

[00:00](https://youtu.be/ZT8flAjPKLU)

- Welcome to the March 5th edition of the Scientific Governance and Risk meeting. We have a wide range of presenters from a wide range of stakeholder groups. I'll keep speeches minimal since we have a few presentations. Mariano is here to chat about GSM, Derek, about a vote expiring proposal, Vishesh with the Dai market analysis, Cyrus about collateral risk, and then LongForWisdom with a recap of Forum activity.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Technical

### Mariano Conti

#### SCD and the GSM

[1:43](https://youtu.be/ZT8flAjPKLU?t=103)

- The governance delay is in place. However, we only have that for MCD and not for SCD. While the migration contract is present, there is a possible attack vector(The attack being an SCD governance action allowing fraudulently generated Sai to be converted 1:1 for Dai.) To counter this, we discussed lowering the SCD Debt Ceiling and lowering the Sai migration contract Debt Ceiling in MCD.
- Right now, the biggest Sai CDP is about 8 million Sai. We may want to consider reducing the Sai migration contract's Debt Ceiling in MCD to 10 million and the SCD Debt Ceiling to 25 million.
- For the case of SCD, the smart contracts team has already figured out how to use the GSM in SCD. We are ready to put this up for a vote. I would ask the community what the best course of action is. I will be creating a post in the forums detailing why this as needed. We all know why we need a delay in governance actions; this applies to SCD. Would a poll be necessary?

#### Discussion

[3:43](https://youtu.be/ZT8flAjPKLU?t=222)

- Cyrus: There are distinctions to be made regarding what we are voting on moving forward. They are:
  - 1. To reduce the DC in the migration contract to something super low, like 10 million Sai. This isn't related to the SCD GSM; this is just an excellent precautionary move.
  - 2. A separate initiative to activate the GSM for SCD.
    - Mariano: Those are the two big ones. Lowering the regular Sai Debt Ceiling is already in the latest executive vote.
    - C: But they're not a package, correct?
    - M: No, they can be different things. Meaning, you can lower the Sai debt ceiling and then on the MCD side not accept more than, say, 10 million Sai as collateral in the migration contract.

[5:44](https://youtu.be/ZT8flAjPKLU?t=344)

- Rich: Do we need to go through the same cycle of forum poll on Monday and doing the Executive Vote on Friday? That cycle raises a question regarding the governance ecosystem: Do we want to run the risk of having it fail in the EV? Do we occasionally have decisions important enough not to put them into the forum?
  - Mariano: GSM was voted in on the same day. People may pay more attention to this if it is bundled in with other essential documents.
  - Rich: Are we even a position to subvert a process if we believe it is a higher risk?
  - LFW: We use forum polls to figure out which is the favored solution given multiple options. In the absence of alternatives, I believe it can go to an on-chain GP and then to an on-chain EV.
  - R: We don't make decisions in these calls, we just spark debates. Mariano will be putting a thread in the forum to explain this situation and add a poll Monday. Is there a precedent for skipping the Monday poll considering that we have already done this thing before? Can we just go straight into an EV?
    - LFW: Did we have a GSM GP for MCD? I believe we may have.
    - Cyrus: The recent one didn't, and went straight to EV. The first one did have a [GP first](https://vote.makerdao.com/polling-proposal/qmeqv6ajtj58in3mphkys9qsma84jckwnjcybzjqdkxccp).
    - LFW: Ideally, this should go to a forum post then to an on-chain GP.

[10:16](https://youtu.be/ZT8flAjPKLU?t=616)

- Aaron Bartsch: For the proposals that I have done: I've had to make a signal request, then an on-chain poll, and then an executive if they all pass through. If we want to make the same rules for foundation members, it should be constant for everyone. We don't have a precedent for this, though.
  - R: I agree with you, but I think it's a matter of cadence. A potential threat may require faster responses. Can you speak to the essential threat to the system, Mariano?
  - Mariano: I don't want to say that it is an emergency, but the same worries surrounding the MCD GSM apply here. The migration contract is still a significant attack vector on MCD. I think the forum polls are more for sentiment, and I think we can agree that the sentiment is in agreement regarding the GSM-based on the recent executive vote. My recommendation is to move straight to an on-chain poll on Friday.
  - LFW: Clarifying, the risks for the SCD is transferred to the risk to the MCD?
  - M: Yes, there is still a chance for an attack. There is no governance delay for SCD. Whereas a few whales with MCD are still limited in their voting consequences due to GSM, whales in SCD can get together and make substantial changes to SCD.
  - Chris S: So the risk is slightly different for SCD in the ability to mint Sai and also steal collateral. One attack vector in MCD was to put in a fake collateral type and then trigger an emergency shutdown. This would not occur in SCD, so there is a slightly different risk profile there.
  - M: Yeah, it is not 100% the same thing in both systems. However, I would still argue that an attack on MCD is a real risk due to the migration contract.

[14:32](https://youtu.be/ZT8flAjPKLU?t=872)

- Rich: Will continue this discussion [in the forums.](https://forum.makerdao.com/t/proposal-add-governance-delay-to-single-collateral-dai/1413)
- LFW: People need to understand the risks. What is the worst-case scenario?
  - Cyrus: I think the question is: Is the SCD collateral at risk as well?
  - M: Let's say a couple of whales get together, with 100,000 MKR, they can set the price of ETH in SCD at 0 and liquidate every single vault. They can set the price to infinite and then mint infinite Sai and convert it for Dai through the migration contract.
  - Gonzalo: Basically, you can set the oracle price to infinite, mint a considerable amount of Sai up until the DC and actually change the DC, and effectively claim all of the collateral in the system. Meaning you can steal almost 100% of ETH in Sai and then use that Sai to generate Dai. That is quite a decent risk.
  - Dawson: Wouldn't you reach the DC on Sai?
  - Mariano: You can change the DC to infinite and mint infinite Sai in the same transaction.
  - Dawson: If there is a malicious attack, is the best reaction to shut the system down, or can the migration be paused?
  - Mariano: There are different ways. Once a malicious spell reaches the top spot in governance, queued up to be executed in 24 hours, you can start a new vote to remove the old spell before 24 hours. You can also shut down the system. There are many things that you can do, but they require a GSM delay.
  - M: I'll make [a forum thread](https://forum.makerdao.com/t/proposal-add-governance-delay-to-single-collateral-dai/1413) detailing everything that can potentially happen, and we can vote regarding it.

### Derek Flossman

#### Vote Expiry

[19:13](https://youtu.be/ZT8flAjPKLU?t=1153)

![Spell Expiration Proposal](https://i.imgur.com/BPXvICs.png)

![Spell Expiration Technical Implementation](https://i.imgur.com/PBhkNyv.png)

#### Vote Expiry Discussion

[22:12](https://youtu.be/ZT8flAjPKLU?t=1332)

- Rich: This feels like an excellent opportunity for a forum post to share the details.

  - BrianM: Kenton and I drew up a MIP proposal for this. However, since the MIP process isn't available yet and because of timing issues, it could be an issue if our proposal would pass out-of-sync with our current polling cadence.
    - These lines of code are in the template for weekly spells that should improve turnaround time. If it's controversial, we'll pull it. In the meantime, this will go into a verified code spell, and Chris Mooney will add some resources on how to parse this out when reviewing a spell. It should disarm all our Executive Proposals after a month.
  - Rich: For the longest time, I was explaining that you can't go back in time. Framing a mental model of the application and weekly spells, analogous to a protocol and it's config files. If old proposals are passed, there is a risk they could break the system, correct? Or at least a situation where the monetary policy doesn't make sense at all.
  - BMM: Theoretically, if some of the underlying contracts got an upgrade and didn't rely on the same API, it could revert. What's a more realistic scenario is a DSR that is inappropriate for the current ecosystem.
  - R: There is significant utility here and secondary issues, too, like MKR attached to old votes. Also, UI issues as well; if they drop-off in the portal in a week anyway, I guess we wouldn't need to display the expiry date after that.
  - Derek Flossman: This is only concerning spells created by the Foundation. That doesn't include proposals from the community that might not have a built-in expiration date like ours.
  - R: If the community submits a proposal, can they opt into making it expire?
  - Kurt: It's up to the proposer of the spell, you can add an expiration in your spell. If we want this as a requirement for all spells, we have to update the voting system itself.

- `chat` Kurt: It should be noted that it's still possible for malicious actors to create and propose non-expiring proposals. Ensuring that all spells expire requires a Chief upgrade. But it's good practice to at least make our non-malicious spells have an expiration date, as it makes it easier to reason about the system and limits the opportunity for accidents.

## Risk

### Vishesh

#### Relevant links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### State of the Pegs

[27:04](https://youtu.be/ZT8flAjPKLU?t=1620)

![](https://i.imgur.com/hZKpV8R.png)

- Sai trading volumes over the last 24 hours are small, at 127,000 Sai. Sai trades have seen more unpredictability. There is also a lot of slippage on Uniswap in both directions.

![](https://i.imgur.com/1R0SDg3.png)

- Dai trading volumes have been pretty significant in the past week, approximately 80 million in volume.
- dYdX has seen the most significant trading volumes for Dai (blue dots). Oasis is second. Kyber has been relatively active in the last few weeks. Uniswap maintains a presence, as does Coinbase.

![](https://i.imgur.com/A4GkBjT.png)

- Dai trading is more or less on the peg. Dai would usually fluctuate a bit above and below peg, but in the past month, it has been on or slightly above the peg due to ETH price fluctuations. I say slightly because Dai has done a great job in holding close to peg. The only exceptions were two big trades that upended the balance in the last month, due to Kyber/Uniswap messiness.
- Concerning monetary policy, Dai has been where it needs to be on an average basis. Sometimes it may trade a bit above or below, but on average, it has been relatively consistent. In terms of adjustments in SF, we'll discuss more next week regarding how changes in monetary policy (including ETH, SF fees, and DSR) impact the peg. The point I want to drive home is that the system is regulating itself, and I don't think that you can point at changes in the SF or the DSR and assume that they were the exact levers affecting the Dai peg performance.

![](https://i.imgur.com/yvWsDSI.png)

- Total Dai and Sai supply has been kind of flat since last week. Not much impact in terms of Dai being minted or Sai being migrated. Prior to this time range, ETH went up, but now we're in a more "wait and see" holding pattern. Those major swings in ETH price are likely going to determine a lot of what happens with migration and Dai price as people decide whether to level up further or whether to liquidate their positions.

#### Analysis Questions and Discussion

[33:53](https://youtu.be/ZT8flAjPKLU?t=2033)

- Rich: I like the dashboard. Will we have access to that?
  - Vishesh: Thanks, it just launched and is live on the [Dai Descipher website](http://dai.descipher.io/) now.

## Governance

### LongForWisdom

#### Forum Recap

[34:30](https://youtu.be/ZT8flAjPKLU?t=2070)

- [Need More Explanation on Vote Proposals](https://forum.makerdao.com/t/need-more-explanation-on-vote-proposals/1386)
  - In which @Tarpmaster requests that more information be made available on the voting portal to help combat voter apathy.
  - We could work on our visibility of Governance summaries; they work so hard preparing them.
- [Should MKR governance get involved with Ethereum hard forks?](https://forum.makerdao.com/t/should-mkr-governance-get-involved-with-ethereum-hard-forks/1353)
  - In which @cyrus asks to what extent we should get involved in hard forks in general, and ProgPOW in particular.

##### Seeking signal

- [Signal Request: Reduce the frequency of the DSR Spread governance poll](https://forum.makerdao.com/t/signal-request-reduce-the-frequency-of-the-dsr-spread-governance-poll/1207)
  - @hexonaut starts a signal thread regarding the voting cadence of the DSR spread vote. Most people seem to be in favor of some increase so far.
  - [Governance Poll passed](https://vote.makerdao.com/polling-proposal/qmc3refwejnyedsicvs5zagn9sag3yxwtjfltfqvxj3trn), we will be voting on the spread every 2-weeks now.
- [Signal Request: Add Ranked Choice Voting as an Option for Governance Polls](https://forum.makerdao.com/t/signal-request-add-ranked-choice-voting-as-an-option-for-governance-polls/1274)
  - @hexonaut proposes adding the option for ranked-choice voting to the on-chain governance polling system, a proper discussion so far. Poll closed.
  - Moving to an on-chain vote soon.

#### Questions and Discussion

[35:49](https://youtu.be/ZT8flAjPKLU?t=2159)

- Cyrus: The discussion about hard forks is ongoing. We'll need some preparations.
  - R: Great point, we're battling with urgency/apathy, and a fork is a good jumping-off point. When a problematic issue pops up, battling the status quo is essential. How to deal with a fork is an enormous question. Let's keep that thread going.

[38:18](https://youtu.be/ZT8flAjPKLU?t=2298)

In response to [Signal Request: Add Ranked Choice Voting as an Option for Governance Polls](https://forum.makerdao.com/t/signal-request-add-ranked-choice-voting-as-an-option-for-governance-polls/1274)

- Rich: "Ranked-choice" is the first proposal that requires developer input. Figuring out if this is community or developer-led is worth examining. Check out the thread for discussion on that.
  - Derek: The Dev Team came together to discuss the implementation model. We had some discussions about the implementation model. It's doable, but hard to predict a timeline on how long it's going to take. Other priorities in the pipeline. I'll try to get back to everyone on those details. Process wise: do we need to update the community once we have a scope?
  - LFW: That would be good to see on the forum.
  - R: Technical aspects are important, but it's also a decision making change; that's huge to acknowledge.
  - CMooney: When you write it up, I would suggest using that general model you proposed. The difference is light and not heavy-handed. I don't see faults, and we may uncover more as we implement.

## Risk

### Cyrus Younessi

#### Collateral Onboarding

[44:53](https://youtu.be/ZT8flAjPKLU?t=2693)

![Collateral Risk Model](https://i.imgur.com/nVBCXXW.png)

![Agenda](https://i.imgur.com/GsyDxg4.png)

- Collateral Risk will become an integral part of the governance/risk process, especially after we start adding new collateral types. How it fits into the broader questions will be seen as we go, but I think we will have to touch upon the process at a weekly level. Subsequently, this will be the agenda for the next few weeks. Keep in mind that there are differences in how risk analysis is approached from risk analyst to risk analyst, so point III will be highlighting our approach.

![MakerDAO Governance and Risk](https://i.imgur.com/QlONk1t.png)

![MakerDAO Risk: Deliverables](https://i.imgur.com/u6vpM4r.png)

![MakerDAO Risk: Deliverables and Expectations](https://i.imgur.com/AZajpOB.png)

![MakerDAO at a Glance](https://i.imgur.com/KFIRuEK.png)

![Goals for MakerDAO Growth](https://i.imgur.com/7MAfi13.png)

![MakerDAO Vaults: Where's the risk?](https://i.imgur.com/waIdFS6.png)

![MakerDAO Vaults: Where's the risk?](https://i.imgur.com/GVOk3rF.png)

- As behavior can change Collateralization Ratios, the risk isn't entirely dependent on the underlying asset price but also on user behavior. An extreme example of this is the OSM delay attack, where a Vault owner would draw the max Dai they can generate since they will be liquidated anyway. Therefore, the risk to MKR holders isn't purely a function of the collateral price.
- Given that a Vault is liquidated at a 150% threshold, what would cause us to experience a sub 100% liquidation?
- How do we think about a risk that has literally never happened?

![MakerDAO Risk Model](https://i.imgur.com/0KlRuLA.png)

![Analyzing the Probability Distribution of Losses](https://i.imgur.com/JnhUeVu.png)

![MakerDAO Risk Model](https://i.imgur.com/wElYK53.png)

- Takeaways: Consideration of potential losses, how they may occur, and how we can format them as risk parameters. Minimize insolvency risk, maximize value for MKR holders.
- We will be discussing historical volatility, asset price modeling, and jump risk in next week's call.

#### Collateral Onboarding Questions and Comments

[1:09:52](https://youtu.be/ZT8flAjPKLU?t=4192)

- `chat` William Remor: Based on the oracle presentation from last week on the state of Oracles v1, isn't there even a slight possibility that a very sharp blitz drop in ETH leads into undercollateralized liquidation?
  - C: Even without the oracle delay, you could still have a very sharp drop in ETH price. The oracle delay just makes that drop easier to exploit. We attempt to quantify these things in the risk model.
  - D: Plus, there is a risk that people don't participate in auctions if the downturn is too sharp.
  - C: Right, auction efficiency, or slippage is something we deal with. That is the theme of the red band previously discussed. There are two main reasons why we may end up below 100%: The severity of the drop, also known as jump risk, and people not bidding on collateral, or what we call auction slippage.

[1:13:05](https://youtu.be/ZT8flAjPKLU?t=4385) (Question on liquidation ratios in `chat`)

- The liquidation ratio is known as an in-between parameter, which means it is not a final output. For a given collateralization ratio, you would be able to change the distribution of losses. The higher the collateral required upfront, the lower the expected losses, and the lower the value-at-risk threshold. If you require higher collateral upfront, then you can set lower SFs. You'll also require less buy-in from the surplus buffer and MKR dilution. You can set the liquidation ratio to shrink or expand the loss distribution, effectively balancing the SF and tail risk.

[1:14:14](https://youtu.be/ZT8flAjPKLU?t=4477)

- Vishesh: What are the most important factors to determine loss versus gain?
  - C: Gains come from liquidation penalties and SF's. Losses come from undercollateralized vaults. The DSR is supposed to be completely offset by the DSR portion of the SF. When risk losses, we're referring to DSR spreads and the risk premium above the DSR cost.

[1:16:16](https://youtu.be/ZT8flAjPKLU?t=4568)

- `chat` Richard Lopez: is a potential lack of participation in auctions the only source of slippage?
  - Cyrus: The auctions are where the slippage occurs. The reasons why we experience slippage might be numerous. Primarily they are a function of exchange liquidity. We assume keepers use exchanges as a liquidity source to perform the arbitrage. We use exchange liquidity as a proxy for what Maker might be able to absorb in the collateral auctions. There are other considerations, too, such as Dai slippage.
  - In an edge case, if the liquidations are strong enough, there can be a Dai shortage, which can lead to further slippage as well.

[1:18:02](https://youtu.be/ZT8flAjPKLU?t=4682)

- LFW: Is there a rate limit for how many auctions can trigger at once?
  - C: It depends on how quickly you want to offload the collateral. If we had an enormous amount of collateral liquidated, you wouldn't want to auction it off too soon as it would depress exchange liquidity. You would want to create an algorithm that balances the cost of selling fast versus waiting and spreading it out over time. Allowing for better liquidity balanced around market volatility.
  - LFW: Is it the lot size that limits the auction?
  - Mariano: For ETH, the lot size is 50 ETH. If there were 85 ETH, a keeper would create two auctions. The first would create an opportunity for 50 ETH, and the second would have a value of 35 ETH.
  - LFW: They can happen simultaneously?
  - M: Correct.
  - L: If we liquidate something ridiculous like 1K ETH, then many lots would auction and all for 50 ETH.
  - M: Exactly.

### End Discussion

[1:21:01](https://youtu.be/ZT8flAjPKLU?t=4861): End of call Discussion

- Cyrus: Next week, we'll explore risk parameters in detail. Specifically, the components of the SF, Liquidation Ratio, the DC, and then more intricacies of the model. At a lower level, thinking about Jump-risks, simulations, etc.
- Rich: Thanks, Cyrus, that will be fun to watch. Everyone keep eyes out for Mariano and Derek's posts in the forums. One last reminder for us on tying threads and discussions week over week. Last week we spoke about oracles and this week, not at all. Before that SCD shutdown and fees, then we stopped talking about it. Reflect on keeping the threads alive and see everyone next week!

## Credits

- Igor Teslya produced this summary.
- Tim Black produced this summary.
- David Utrobin produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
