# Episode 108: September 03, 2020

## Agenda

- [00:00](https://youtu.be/PIix4PnpVk0?t=000): Intro with LongForWisdom
- [09:47](https://youtu.be/PIix4PnpVk0?t=587): Governance at a Glance with LongForWisdom
- [02:00](https://youtu.be/PIix4PnpVk0?t=120): Smart Contracts Team Update with Wil Barnes
- [03:25](https://youtu.be/PIix4PnpVk0?t=205): Oracles Team Update with Nik Kunkel
- [05:40](https://youtu.be/PIix4PnpVk0?t=340): Risk Team Update with Cyrus Younessi
- [08:15](https://youtu.be/PIix4PnpVk0?t=495): Collateral Call with Juan Guillén
- [16:05](https://youtu.be/PIix4PnpVk0?t=965): MIPs Update with Charles St. Louis
- [24:13](https://youtu.be/PIix4PnpVk0?t=1453): Setting Risk Premium for ETH-A with Primoz Kordez
- [52:25](https://youtu.be/PIix4PnpVk0?t=3145): Vault Compensation Update with Monet_Supply
- [56:30](https://youtu.be/PIix4PnpVk0?t=3390): State of the Peg with Vishesh Choudry

## Video

<https://youtu.be/PIix4PnpVk0>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/PIix4PnpVk0)

- Hello, everyone, welcome to 108th MakerDAO Scientific Governance and Risk meeting. Today is Thursday, September 3rd at 16:00 UTC. My name is LongForWisdom. I am the current MakerDAO Governance Facilitator. I am joined by a bunch of people both within Maker and without. I will briefly review the agenda. Anybody is free to interrupt and ask questions during any point of this call.
- There is a quick request by JoeQ reminding everybody to run auction keepers. If you have friends who may not be running auction keepers, try to get them to run auction keepers. Auction keepers are important and as we scale Dai it's important to try to scale the number of keepers as well.
- Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Forum Recap

## Domain Team Updates

### Wil Barnes

#### Smart Contracts Team Update

[02:00](https://youtu.be/PIix4PnpVk0?t=120)

- We deployed PAXUSD and Tether to Kovan this morning, and right now, we are working on the spell to deploy the main net, which will go live tomorrow.
- Mostly this week and last week, with liquidations 1.2 just behind this, it's been continuing efforts on liquidations 2.0, with more concrete plans in the coming weeks.
- The spell from yesterday, increasing ETH debt ceiling to 540 million, was executed about seven hours ago this morning on September 3rd. So the ETH debt ceiling is now 540 million, and the global debt ceiling is secured at 708 million. Those are the highlights right now.
- LongForWisdom: To elaborate briefly on the Executive yesterday, which was triggered by the risk domain team due to the high uptake on the yETH Vault that was released recently.

### Nik Kunkel

#### Oracle Team Update

[03:25](https://youtu.be/PIix4PnpVk0?t=205)

- Last week, we had fast-tracked the yEarn vote because we were concerned about the peg state and saw a lot of potential in the yETH Vault type in helping us bring the peg down. So far, from what we've seen, that does seem to be the case. It's quite astounding how quickly they've been able to stockpile ETH into that Vault. It looks like we will be able to leverage a lot of growth out of that. Ultimately, I think that that was the right call.
- Looking forward, this Friday, Argent, and MyCrypto have finished setting up their light feeds. So, we will include their Keys, which they've posted in the forum, and signed a message with. We'll be adding their keys as light feeds for the oracles in the Executive this coming Friday.
- Then, tBTC is about to relaunch their new version, so they had to deploy new contracts. We need to do a polling vote to swap their oracle whitelisting from the previous address they were using, on version one, to address their new version two deployment.

### Cyrus Younessi

#### Risk Team Update

[05:40](https://youtu.be/PIix4PnpVk0?t=340)

- We will be releasing a COMP evaluation in a few days. We had our independent risk grantee submit a ChainLink evaluation to us last week, and we're going through that and reviewing the work and vetting it. That should also get released sometime later this week or early next week, probably, but I'm hoping in time for the governance cycle.
- We evaluated the c-tokens, which is going to be published soon. We are not recommending those; we are not submitting an application for collateral evaluation there, we'll leave that up for the Community if there's interest. But we analyzed it, and they're undoubtedly interesting candidates. Much of that analysis can be used for other similar assets like yCRV or whatever else comes down that path, so I'm excited to share that.
- Also, Loopring will get resubmitted as well, but it's going to be the same evaluation as last time.
- Unfortunately, I don't think PAXG is going to make it into this cycle. We just ran out of time with all this stuff going on in the ecosystem right now on top of the risk transition. We couldn't get to that one for this cycle, but we will for sure next month.
- Primoz is going to give a presentation on the ETH-A risk premium, which we spent a lot of time on.

## Collateral Calls

### Juan Guillén

[08:15](https://youtu.be/PIix4PnpVk0?t=495)

- My name is Juan, and with the help of Lea and Lucas from Centrifuge, we have been organizing these collateral calls, where different projects present for ten minutes. Then we have a discussion for 20 minutes open to everyone to ask questions and discuss the different collateral types.
- So far, we've had New Silver and Matthew Rabinowitz from 6s Capital and then ShuttleOne and ArCoin.
- This coming Wednesday, September 9th at 5 PM UTC, we're going to have Rafael Cosman from TrustTokens, who's going to discuss TUSD, TCAD, TAUD, and TGBP, and we'll also have 1inch that's going to be talking about Mooniswap.
- So, September 9th at 5 PM UTC I'm going to post the link to the agenda in the forum. Then two weeks later, we're going to have Stani from Aave discussing their token and Tyler Winklevoss from Gemini discussing GUSD.
- If you would like to discuss a project, I'm also going to post in the chat the forum to show your interest, and we can schedule the call for that.

### LongForWisdom

#### Governance at a Glance

[09:47](https://youtu.be/PIix4PnpVk0?t=587)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [SourceCred Pilot Extension](https://forum.makerdao.com/t/sourcecred-pilot-extension/3892)
  - LongForWisdom shares that the SourceCred pilot is being extended for another three months. After those three months elapse, and pending governance approval, we'll attempt to fund the initiative from the Maker Protocol.
- [Different Approach to Rate Setting](https://forum.makerdao.com/t/different-approach-to-rate-setting/3889)
  - Primoz describes an approach to rate-setting based on the market rates available elsewhere that may be more sustainable for the Protocol in the longer term.
    - Primoz Kordez: I was thinking about how we are rating the rates currently. Maybe some things are not really in line, and so I have this different proposal that says that currently when we're setting rates to a hostage of Dai back, you know if we raise rates, we might endanger the whole situation with the price. But if we can save that thing for an instant, with just one of our tools, such as a lower liquidation ratio for USDC, we can manage the rates with more flexibility. In a sense, that way, we rely more on setting the rates properly, so we compensate the risk and position ourselves better in the DeFi whole ecosystem. That's particularly important now when we have seen most of the Dai minting done by farmers. Probably, raising rates wouldn't necessarily mean that there will be many unwindings and endanger the peg. I am not even sure if we need that tool to protect the peg. We should be prepared for that, but it is just a different strategy as we advance. It's something we haven't discussed and has some business logic to it, but it's something we haven't focused on. There are other things as well, but perhaps we can have this discussion next time, so we don't take too much time.
    - LongForWisdom: If this sounds interesting to any of you either positively or negatively, please, read over the threads and comment on your thoughts. This represents a direction in terms of rate-setting, so it would be good to get as much input as possible.
    - LongForWisdom: The other main thing that I want to mention, which is not a discussion but just the source cred pilots that most of you are aware exist, has been extended for another three months. There's a [link](https://forum.makerdao.com/t/sourcecred-pilot-extension/3892) in Governance at a Glance to see the details. Currently, the plan is that after those two months elapse, we will put the proposal to Governance that the Protocol will fund the source credit rewards going forward. There will be more coming out as we get toward the end of these few months. If anybody wants to read the plans, it's available in the link.

##### Signal Requests

- [Adjust the BAT Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-the-bat-debt-ceiling/3919)
  - befitsandpiper asks if we should increase the BAT-A debt ceiling as it's currently at 100% utilization.
- [Add a DC Trigger for planned raises](https://forum.makerdao.com/t/signal-request-add-a-dc-trigger-for-planned-raises/3878)
  - Aaron_Bartsch proposes that we add a trigger point at which on-chain polls for debt ceiling raises should happen without the need for a quorum
  - LongForWisdom: It's asking if once we get to 90% utilization that we should automatically put a poll on chain instead of requiring a signal request.
- [Limit Vaults to a maximum % of global DAI supply](https://forum.makerdao.com/t/signal-request-limit-vaults-to-a-maximum-of-global-dai-supply/3879)
  - Aaron_Bartsch asks if we should limit the debt ceiling on vaults to a maximum percentage of the global DAI supply.
  - LongForWisdom: The intention is to keep the previous proposal in line in case things get crazy.
- [Quantitative easing to fix the peg (aka Manual PSM)](https://forum.makerdao.com/t/signal-request-quantitative-easing-to-fix-the-peg-aka-manual-psm/3902)
  - SebVentures asks if we should pursue a quantitative easing plan using USDC and a new vault type limited to use by the Protocol.
  - LongForWisdom: He's asking if we should set up a USDC vault with a 100% liquidation ratio, which is limited to use by the Protocol for forcibly halving the Dai peg or shorting the Dai peg.
- [Should we reduce the USDC-A collateralization ratio?](https://forum.makerdao.com/t/signal-request-should-we-reduce-the-usdc-a-collateralization-ratio/3886)
  - Aaron_Bartsch asks if we should decrease the USDC-A collateralization ratio to promote peg stability.
  - LongForWisdom: I suppose this is prompted by his signal request post mentioned above.
- [Increase WBTC Debt Ceiling](https://forum.makerdao.com/t/signal-request-increase-wbtc-debt-ceiling/3731)
  - Aaron_Bartsch proposes increasing the wBTC debt ceiling again to accommodate the increased usage.
  - LongForWisdom: Starting Monday and finishing just before this call, I suspect it has passed.
- [Reddit Moderator for r/MakerDAO](https://forum.makerdao.com/t/taken-reddit-moderator-for-r-makerdao/3486/5)
  - LongForWisdom: David Utrobin recently posted a Help Wanted thread searching for a Reddit moderator for MakerDAO. I think we currently have one candidate, but it will be useful to get two or three more to get things moving and looking nice. If you are interested in that, please, leave a message in the thread.

## MIPs

### Charles St. Louis

#### Weekly MIPs Update

[16:05](https://youtu.be/PIix4PnpVk0?t=965)

![](https://i.imgur.com/864Y4jm.png)

- This week's activity as mentioned last week was a gap week between August and September's governance cycles.

![](https://i.imgur.com/oEvs4ND.png)

- After the formal submission period, myself as the MIP editor will make the respective changes in the GitHub to make sure that it reflects those changes.

![](https://i.imgur.com/jFS4EAf.png)

![](https://i.imgur.com/RXMr6Yf.png)

- I wanted to share some collateral onboarding stats to show everyone how far we've gotten over the last few months.

![](https://i.imgur.com/FO5qDQw.png)

- I've added this bit to reiterate on the updates from before although the domain teams have already covered it.

![](https://i.imgur.com/xpzwGBX.png)

- We have a couple of new proposals over this last week, which is exciting. These two are both technical MIPs. I will add the links for [MIP21](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917) and [MIP22](https://forum.makerdao.com/t/mip-22-centrifuge-direct-liquidation-module/3930). Please, take a read. If they are formally submitted, they can potentially make it before the end of the October's cycle but that is completely up to the authors, of course.
- I don't have a summary for the subproposal but if Matt was on the call with us, he would give it. I suggest giving the [subproposal](https://forum.makerdao.com/t/mip13c3-sp4-declaration-of-intent-commercial-points-off-chain-asset-backed-lender-to-onboard-real-world-assets-as-collateral-for-a-dai-loan/3914) a read because it is very exciting.

![](https://i.imgur.com/QgAUKop.png)

- As usual, there are the typical candidates that are still in the RFC phase. I just wanted to provide updates on when they are available to be formally submitted by the author.
- If anybody wants to get involved with MIP17 and push it forward, please, message me.

![](https://i.imgur.com/erhprCM.png)

- The Vault Liquidation Mechanism for Centrifuge Trade Finance Assets was a precursor to the actual MIP22 posted by Centrifuge.
- The Debt Ceiling Instant Access Module related to MIP17's concept of having adjustments for the debt ceiling but in a more automatic fashion controlled by governance with less governance friction.
- The first bullet under active discussions is an accidental duplicate.
- I will post my follow-up thread on the forum as usual if anybody wants to see it as opposed to hear it.

## Other Presentations and Updates

### Primoz Kordez

#### Setting the ETH-A Risk Premium

[24:13](https://youtu.be/PIix4PnpVk0?t=1453)

![](https://i.imgur.com/B3Q1Vc4.png)

- Today, we are presenting much anticipated calculations on ETH-A risk premium. Spoiler alert, there won't be one specific pin-pointed number from our side but there is going to be a range provided. I will explain how this makes sense from our side.

![](https://i.imgur.com/dVqclqv.png)

- We are using a model showcased earlier from this year. This model uses GBM and it uses jump risks. It simulated ten thousand of paths. We are interested in getting the distribution of losses from which we can then get a risk premium or so-called average loss.
- We outlined three scenarios where each one uses different inputs called variable inputs for calculating outputs. These three are the most important when it comes to such modeling.
- The Auction slippage curve tells us when keepers come to auctions to bid. They normally bid below 100% because there are certain slippages used which I will explain later.
- The Collateralization Ratio Distribution tells us what amount of debt lies below certain collateralization ratio.
- The Jump risk is something that we apply on top of the GBM model to model the crashes of Ether price for instance with what happened on Black Thursday.

![](https://i.imgur.com/5pBvZSt.png)

- We keep this input fixed for Ether.
- The most important is the standard volatility. This is just from historical data.
- The liquidation penalty is fixed.
- Another thing that is important but outdated is the debt ceiling. I was making calculations a few days ago before we knew why it worked. This debt ceiling was the old nominal number and therefore the outputs maybe a little outdated but in some sense I think they aren't necessarily outdated. I will try to explain that at the end.

![](https://i.imgur.com/s5Xpnbf.png)

- This is how we modeled the auction slippage curve. It uses its own model, which I won't go into much detail here because that will require another call.
- Basically, we are using different inputs to model auction slippage for an upside case.
- Collateral slippage is when people acquire ether from the auction they need to flip it on exchanges and they won't be able to sell it at market price if they acquired a lot of ETH.
- Keeper target profit is something that keepers just do.
- Dai slippage is when keepers don't hold Dai and instead might buy it. If there's a shallow liquidity, it might cause lower bids from their side. Luckily, we have a lot of liquidity now in curves, so this is not as constraining anymore.
- For the keeper capital we just used some numbers for the upside case and downside case. Keeper capital is important as well because if keepers wouldn't have enough capital, we would then be hoping that there is enough liquidity from outsiders that are able to bid on these auctions, which might be infrastructure-wise not fit for everyone.
- The bid discount is just an input if keepers need to mint Dai instead of buy it, they might bid lower on auctions because it just creates additional friction from the keeper's side.

![](https://i.imgur.com/tISW8HM.png)

- For the downside case, of course, the curve is a bit more steeper. There are higher slippages, which mean lower bids.

![](https://i.imgur.com/ST28PU7.png)

- The auction slippage curve is varied for different scenarios.

![](https://i.imgur.com/AcxuKS6.png)

- This is the second important input. I want to be clear that we did historical testing in the sense that we used historical data. The issue is that when we use only historical data from earlier this year we would see that Ether crashed at most up to only 35% but then we see days like Black Thursday happen.
- We decided to take a stress test approach instead by putting some numbers in different cases. The numbers shown are basically calculating the output showing us what we are hedged against.
- These crashes are applied on top of the GBM.

![](https://i.imgur.com/i0yejk5.png)

- This tells us what amount of debt is liquidated when we have a price drop. This all comes down to how well collateralized the vaults are.
- When we modeled for three different cases we lowered the cumulative distribution below a certain level of collateralization because I still believe that since we have all of these automated tools such as the DeFi server and yETH as well as a one hour time span due to OSM, we are able to unwind before we have a price drop. There will be some unbinding before we have a price drop but the question is how much. We approached this is by thinking that during a downside case we would have less unwinding and vice versa with an upside case.
- We did use some historical data on this but the issue is that this is strictly related to user behavior, which changes all the time. Especially now that DeFi is currently related to farms and this data can change all the time.

![](https://i.imgur.com/u7kJQNX.png)

- This models for severe price drops using lower collateralization ratios, which results in a lot of debt liquidated.

![](https://i.imgur.com/2W5zAE5.png)

- Keep in mind that this is not an average of simulations. This is just one of the simulations.
- In this case, a 50% drop would result in almost half of debt liquidated resulting in liquidation of 150 million Dai.

![](https://i.imgur.com/WR3uutV.png)

- Whatever is below 100% collateralization is essentially MakerDAO's loss.

![](https://i.imgur.com/avjecQm.png)

- Out of the thousands of simulations we get a distribution of losses. This is how it looks like. What we are interested in is the average loss of 21.6% Dai.
- The second variable is not related to risk premium. It looks at the tail of losses and shows us that we still need to be protected against the worst case losses in a sense that we need to know that Maker capital is able to dilute itself.
- Essentially, if we agree with the inputs used, the results tell us that we should charge over 20% risk premium and have 30% of Dai available in Maker capital.

![](https://i.imgur.com/h3Rllnf.png)

- This upside case is the other extreme. The highest drop here is only 40%. Historically, however, we have not seen such high drops very often, so maybe the upside case here is pessimistic.

![](https://i.imgur.com/P9NxN3c.png)

- You can see that in this case we don't get as much Dai liquidated.

![](https://i.imgur.com/QO7urgW.png)

- If you apply the slippage curve which is more optimistic, you would get a positive outcomes. You wouldn't see any losses because there is a penalty fee applied to it. The protocol is actually earning money instead of incurring any losses.

![](https://i.imgur.com/mOZF6qR.png)

- The risk premium is actually a negative number and shouldn't be charging anything to vaults because the protocol is actually making money. The worst case losses are zero and Maker doesn't need to dilute itself.

![](https://i.imgur.com/LpYqu0X.png)

- The inputs for the base case are somewhere in the middle. The collateralization ratios and Ether drops are more stable between the upside and downside cases shown earlier.

![](https://i.imgur.com/Wa0geSa.png)

- In this case, 70 million Dai liquidated is only 20% of the whole exposure.

![](https://i.imgur.com/0d1znjk.png)

![](https://i.imgur.com/CoGWQmg.png)

- The average loss of 4.2% shows that this should be the risk premium.

![](https://i.imgur.com/09dixJy.png)

- Maybe somebody is disappointed because we came up with this huge range between 0 to 20% but I wanted to present that there is actually not a big difference between the inputs we used, however, the outputs are quite different.
- We want to make sure that modeling these inputs is subjective in some sense. Even though we are using historical data, trying to assess as much as possible what the outcome will be is very difficult because it comes down to user behavior.
- A good example is say we have a lot of debt at 200%. If we run this simulation, it will show that there will be a lot of liquidations because we are modeling that not every user is awake and prepared to unwind itself.
- However, this is not the case with yVault on some users. They are using automated tools that better protect themselves as well as Maker.
- It comes down to user behavior and if you wanted to model this in an ideal scenario, you would need to assess every vault, which is how banks do it.
- Here we aggregated things because it was more simple but really it's not as simple because the whole methodology is complex.
- The final point is when governance decides which risk premium should be applied we should look at the current environment and see what's happening with liquidity and debt exposure to try to somehow move from one side to another side in order to assess risk premium.
- Another option is if governance wants to be protected against the downside case because it could realistically happen and then this would require a 20% risk premium. But if we set this up, the loan portfolio would see a lot of unwinding and people will leave. But we will have lower numbers if we run the model again and again.
- Eventually we will get a balance. Right now we need to be sure what we are doing with this information.

##### Discussion

[40:40](https://youtu.be/PIix4PnpVk0?t=2440)

- Sam MacPherson: I am seeing this worst jump once per year, like -40% to -50%. In the Black Thursday event nothing had happened like that before so, I'm wondering if it's reasonable to think that it will happen once per year or should we be looking more at once per five-years or ten-years event? And how does that affect the numbers?
  - Primoz: That's a very good point. This is what I wanted to address basically. Our main goal is here to show what's the mechanics and what are the cause and effects. But this number is important, right? If you just think about it, if you have 150% collateralization and if you don't have more than 33% jump and all Auctions clear up with not really a huge slippage we have a big jump and auctions clear up without a big slippage, then you would expect no losses. And this was what was happening most of 2019. We had liquidations, they were quite severe, but the jumps were just around 30% so we were always protected. But once you get to this 45-50% it all becomes much different because you get to losses initially. From 150 you initially get below 100 collateralization level and Maker is already incurring a loss and then you put slippage on top of it and it's quite different.
    - To your point, what numbers should be applied? Like I said, this is not something that you want to use historical data on, especially in crypto. Ideally, you would like to crowdsource this information somehow. Maybe that's a way to go. I'm not really sure on how to approach such things in the best way. Or you could say, you want to be hatched against this, let's say against 35, but then when you have an year with more than a 35% jump, you are not going to be compensating the loss for your risk premium, which is going to be lower.
  - Wouter: Would it make sense to turn the logic upside down and see these probabilities as targets? As you said, the policy is that we are protected against a drop of this size every year or every two years. I think that's turning the logic upside down, but it may actually make more sense if it's anyone's guess what the real numbers are.
  - Primoz: Yes, this is where perhaps I wasn't clear. This is this approach where you basically want to be hatched against a certain scenario: you said it in advance, then you see what's the risk premium and then you pursue that risk premium because you want to be hatched against that. Was this what you were thinking? Because this was one of the approaches I had in mind but perhaps I just wasn't clear.
  - Wouter: Yes, I think we are probably saying the same thing. Thank you for the clarification.
  - Sam MacPherson: What are the next steps for setting the ETH-A risk premium? Should we poll on what people want to set this to?
  - Primoz: Not sure if this is a question for me or Long. If you ask me, personally, I think we definitely need to update them. Here is the reason why I made the last post. How it's going now is that when we want to change the rate for a particular asset, we either change the rate base or we either set the risk premium. What I think is not proper is to set the risk premium higher just because we think we can also charge more in some sense. Because, we might get to an occasion where we're going to charge more but the risk is not proportional to that necessarily. So, I think risk premium is totally different topics to stability fees. Maybe there's something for future debates about what I was proposing there, but definitely we need to refresh all the risk premiums that should come specifically from the risk side not from the side where we increase risk premiums just because we wanted to reach higher stability fee and we were intuitively saying "ok, the risk increase, let's increase risk premium because we want to have higher rates." But what I was referring to in this post is, if you are increasing the rates, the important part is we should just know what the real risk premium is and then we compare it with it and then if you see a deficit or surplus, we should have a better guidance of what we are doing in terms of risk.
  - Sam MacPherson: Yes, I completely agree with that. The risk premium should be exactly set by the risk team only and not just Community popularity votes, in my opinion.
  - LongForWisdom: From my perspective, in terms of setting the stability fee or risk premium, I guess normally we would want to look at Primoz's model and potentially, I think, maybe we would want to look at this model and potentially poll on inputs. It could be a method of doing it, right? Like crowdsourcing, we can figure out what things we expect to happen or what sort of levels people are expecting from the market. I'm not sure how scientific that would be but that would be one way of doing it. The other method is just what we've been doing so far, right, and just poll directly on the value, like we've been doing for the other assets so far.
  - Will Remor: I have a comment to that. I think it's what Primoz was mentioning during the call. It's important to always have the Community, to be open to potentially discuss some of the models and validate and have some scrutiny. I think that's a healthy thing that actually helps the risk team to also think about things that we are not considering during the model. As every model is only as good as its assumptions, so it's totally a valid discussion to have there. But, I think, as Primoz was saying, it's important as well that the data, particularly when the data is actually available with some historical wreath, like ETH for example, is taken into account when actually doing those inputs. Although, we may not have ETH crashes happening at a 50% level every time, this market is highly volatile. We are not talking about shares or housing. So, it's important to take into consideration some of those aspects because we cannot control so much actually the main driver of some of those jumps, which is a user behavior. I think the approach there from Primoz, it's that it's important to always look at historical data, to historical distributions and then use some of that to take into account into the model. Because this model here, is not a predictive model in a sense, it's more like a stress testing and stress testing are based on scenarios, it's always based on what is some of the worst things that can actually happen so that you can have buffers to prepare for that. Therefore, with that in mind, after the scenarios are covered, you can have a discussion about what if once we have those scenarios in place, what is the likelihood of such a scenario being this bad in the next 12 months or so. Then, once you have plotted that, you have put your risk premiums in place, you can go back to the data on a forward-looking view. Whether those scenarios that are put together will may be too risk-adverse and then, looking at the data, the actuals versus the forecasted, you can try to potentially recalibrate some of those risks that you thought were maybe higher or lower than you expected, in which case you would have to go back to the data and potentially increase them if they were lower than expected. I think it can be relatively dynamic but it's important to base on the data and to look at some of the worst points of it and try to have a buffer for it rather than after the fact diluting MKR or doing things on a reactive basis rather than proactive.

### Monet_Supply

#### Vault Compensation Update

[52:25](https://youtu.be/PIix4PnpVk0?t=3145)

- I have a super short update on Vault Compensation.
- I just posted in the Vault Compensation Plan v2 thread, you can read the short post at the end. Essentially, we're planning next poll going live on this coming Monday, September 7th, and running for two weeks until September 21st.
- There's more clear details on how the Compensation calculations work that I put in that final post. I feel like I didn't do a great job of explaining it in my initial post. So, for anyone who is not totally clear on how the compensation works, feel free to reach out to me on chat but also look at that post.
- One important update, is that I have made an oversight when listing the initial MKR amounts that would be the maximum required for each compensation percentage. I had been mistakenly multiplying the compensation, the collateral deficit percent by the debt tab rather than the value of the collateral at the time of liquidation. The post explains more of what I was talking about, but all of the numbers for MKR, because of that oversight, need to be multiplied by the 150% liquidation rate ratio. So, everything is going to be 1.5 times larger. All of the numbers should now be a 100% correct for the maximum amount that will be required. Hopefully that will give everyone a clear idea of what they're voting for as they consider these upcoming decisions.
- One other note is: if the poll doesn't get at list 50% support for one of the Compensation options or if it resolves as opposing the current Compensation Plan but supporting Vault Compensation in principle, the working group, myself and everyone else involved, have determined that that would be a signal that we need a change of leadership. So, we would be available to anyone else who wanted to take the lead on the process. If a vote results either inconclusively or opposing the current Compensation Plan, I guess we consider that as a vote of no confidence and we would be letting someone else from the community take the lead at that point.

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[56:30](https://youtu.be/PIix4PnpVk0?t=3390)

- Pretty eventful week! Total Dai supply up to 520 million Dai. 430 or so from ETH, 5 million bat, 6.22 million from UCSD, 78 million from WBTC, and 5 million from USDC-B.

![](https://i.imgur.com/2UIzl0Q.png)

- Crazy amount of DAI-ETH trading volume. ETH price has gone up and down. Dai price basically steady at 1.01 and 1.02 and then come down to 1.0004 in the last couple of days. There is a lot of volatility with that number. Individual trades were still occurring at 1.03 and trades below peg. A fair amount of slippage given a tremendous amount of volume pushing through. Since those trades are on Uniswap that explains the slippage.

![](https://i.imgur.com/07cDnlR.png)

- You can see the breakdown of volume and just here, in terms of DAI <-> Eth, there's 230 million in trading volume . THis is high for a seven day average and a huge chunk on Uniswap.

![](https://i.imgur.com/WeEZM23.png)

- For DAI<->USDC it echoes that same price movement where in the last few days it's come down a bit closer to the peg. A large part of the volume came from Curve.

![](https://i.imgur.com/WeEZM23.png)

- DAI<->USD is also volatile but still showing a similar trend. With a decent chunk on Coinbase and some Kraken trades with fair amount of slippage.

![](https://i.imgur.com/gsmGBjL.png)

- DAI<->USDT similar price behavior, with a large chunk on trades on Curve.

![](https://i.imgur.com/gsmGBjL.png)

- Looking at underlying Dai supply, with BAT, we touched on this prior: utilization has come up as we hit 5 million mark.

![](https://i.imgur.com/YiKP5zI.png)

- For WBTC holding steady at it's cap where it's been for a bit.

![](https://i.imgur.com/gBk6iVy.png)

- USDC-A falling in utilization.

![](https://i.imgur.com/gBk6iVy.png)

- ETH-A however, in the last week it's been steady and growing. But the past two days with yETH vault activity the supply exploded. Again. From 350-420 million. In terms of big picture the Dai ETH supply has been growing and each time a new yield farm is discovered we see this curve accelerate.

![](https://i.imgur.com/UffuywO.png)

- In this time frame, with less opportunities the curve flattened. but again we're in the growth phase of the Dai ETH supply. We have to watch how much that can continue to grow.

![](https://i.imgur.com/vYWUgTn.png)

- Compound was one of the primary source for excess DAI supply, just about 160 million in the DSR and a similar amount in excess supply in compound. This supply had been a higher value so we're seeing some shift in capital deployment.

![](https://i.imgur.com/SODjqFd.png)

- We see 100 Million in Curve.

![](https://i.imgur.com/mxv6sSk.png)

- 92 million of that is from yEarn. 70 from yETH and 22 from direct deposits.

![](https://i.imgur.com/3HNI5Da.png)

- When that number hit 70 million deposits paused. It will be interesting to watch with the multisig with the cap and the amount of mintings. If the cap moves again it's likely the demand is more than 70 million. The supply minted for that source is reasonably expected to grow.

![](https://i.imgur.com/wtb447i.png)

- This is the vault for the yETH deposits. That 70 million is sitting at 200% CR. A lot of this is set programmatically, Primoz talked about the risk management of this and it's on the lower end of collateralization. Yet it's managed more automatically than most vaults are. Weighing the type of that risk will be an interesting discussion.

![](https://i.imgur.com/WVbYlJV.png)

- Just to be aware, a tremendous amount of Dai supply is 250 % collateralized or lower. Which present a fair amount of risk.

![](https://i.imgur.com/1jB3eik.png)

- A 15% drop in ETH would result in 25 mil Dai getting liquidated. If it hits \$303 then its 130 million Dai being liquidated. That amount of Dai can bully the current available liquidity for Dai. We need to be aware of the types of risk that are stacking up, in terms of liquidation events. Right now, especially with the large amounts locked in these vaults, the potential for a single wall mass liquidation is a risk to consider.

![](https://i.imgur.com/xJxCUbU.png)

- An additional 20 million Dai in Balancer pools.

##### Risk for Collateral Types

[01:06:10](https://youtu.be/PIix4PnpVk0?t=3970)

- Makerman: With transaction fees going higher, is there some concern about risk clumping in some of this? I guess the smaller things we're not too worried about, 10 million and under. Like WBTC in particular, as an example, what are the risks there?
- Vishesh: In terms of the other Collateral type Vaults, these collateral types are in large clumped into large single-user Vaults. A decent percentage of this supply, of these Collateral types, is like that. So, you see 30 million of the WBTC is in a single-user Vault and then we have 21 million, 12 million, etc. Basically, there is a large grouping, or a fair amount of clustering, in the distribution of debt in Vaults. I'm not sure if that was specifically your question, I didn't understand what you wanted to know about transaction fees but, yes, there is definitely a component of the risk to be aware of, that you have right now with the way things are working. A few large users or a few single-contract Vaults, etc. where a very large chunk of the supply is clustered into let's say five to ten positions. There are quite a few Vaults within each Collateral type, but in terms of percentage of debt, it is pretty heavily clustered. So, there is risk clumping. Now, whether that's due to high transaction fees or not. Their transaction costs 100% but also just the nature of the way capital is deployed. What I think is going on more is, you see a few trading groups and a few smart contract projects where you have automated yield farming, etc. You see a few of these opportunities, where there's large amounts of capital that just by the nature of their size dwarf what individual users tend to do. So, it's not quite the same as saying like traditional industry in definition of industrial usage, but to some extend you are seeing more firms and projects and companies using these kinds of Vaults. It is a bit more of an industrial than a commercial usage of these products, and I think that causes the clustering of capital and, by extension, the clustering of the risk. I don't think it's specifically due to high transaction fees but that definitely contributes.

## End Discussion

##### Long Term Vision For MakerDAO

[01:10:45](https://youtu.be/PIix4PnpVk0?t=4245)

[Long Term Vision For MakerDAO](https://forum.makerdao.com/t/long-term-vision-for-maker/3969)

- Sebastien Derivaux: It's not related to the meeting but, MakerMan just made a post in the forum for a long-term vision for MakerDAO. I did something similar ten days ago, so I just wanted to tell everyone that you can pass by. I think it would be very interesting.
- LongForWisdom: Yes, it would be nice to see what people think on that. Thank you everyone for coming and I will see most of you again next week!

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GF`: Governance Facilitator

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

## Credits

- David Utrobin produced this summary.
- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- Gala Guillen produced this summary.
- Tim Black produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
