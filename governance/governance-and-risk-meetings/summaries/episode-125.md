# Episode 125: January 21, 2021

## Agenda

- [00:00](https://www.youtube.com/watch?v=9G6rUpOkJPE): Introduction
- [02:35](https://youtu.be/9G6rUpOkJPE?t=155): Governance at a Glance
- [06:23](https://youtu.be/9G6rUpOkJPE?t=383): Smart Contracts Team Update
- [10:46](https://youtu.be/9G6rUpOkJPE?t=646): Oracles Team Update
- [00:00](): Risk Team Update
- [30:00](https://youtu.be/9G6rUpOkJPE?t=1800): RWA Update
- [32:50](https://youtu.be/9G6rUpOkJPE?t=1970): Community Development + Operational Support Update
- [34:42](https://youtu.be/9G6rUpOkJPE?t=2082):PSM Update
- [35:54](https://youtu.be/9G6rUpOkJPE?t=2154): Collateral Calls Update
- [46:48](https://youtu.be/9G6rUpOkJPE?t=2808): MIPs Update
- [00:00](): VaR Calculation
- [00:00](): November MIPs Governance Poll Review
- [00:00](): Open Discussion

## Video

<https://youtu.be/9G6rUpOkJPE>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://www.youtube.com/watch?v=9G6rUpOkJPE)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk meeting number 125. Taking place on Thursday, January the 21st, 2021, at 1700 UTC. My name is LongForWisdom. I'm the governance facilitator at MakerDAO. We've got an agenda today as usual as well as some general updates. We have a few segments today concerning calculating VaR. Please, feel free to interrupt during this call. We'd love to hear from you.
- This week, we had an out-of-schedule executive on Monday to [increase the ETH-A and wBTC-A debt ceilings](https://vote.makerdao.com/executive/increase-eth-a-and-wbtc-a-debt-ceilings?network=mainnet#proposal-detail). We reached the ceiling on ETH-A, which has now passed. We are close toward reaching the ceiling for wBTC-A. However, there is now space to create DAI using ETH on ETH-A.
- We had several polls last week. The polls that completed are successful. Greenlight polls are still ongoing. We should see a lot of those changes being included within tomorrow's executive, which will also include the ETH-wBTC-UNI-LP vault and the USDC-ETH-UNI-LP vault, along with other changes.
- In terms of the governance domain, I don't think I have any substantial updates from last week. I'm continuing to onboard new contributors, which seems to be going well. I'll be giving a more substantial update next week or the week after.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Peyton Rose

#### Governance at a Glance

[02:35](https://youtu.be/9G6rUpOkJPE?t=155)

- It's been an active week for MKR holders. The surplus buffer has officially increased. We now have a little less than 6 million DAI left before our typical buy and burn operations resume. We had exciting news for the rates increase; we peaked at an all-time high in terms of stability fees generated per second. For those that don't know about it, [makerburn.com](makerburn.com) is a great way to check out the rates and stability fees. The website has a live update of system surplus. If you click on stability fees, you can see our growth rate per second. Right now, it's about $1.10 or 1.1 DAI per second, which is pretty exciting. The volume weighted average price per DAI is sitting very strong at 1.001.

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-january-14-21-2021/6145)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [RWA Risk Onboarding Sections & Using Long-Term Loans](https://forum.makerdao.com/t/poll-real-world-assets-using-long-term-loans/6109)
    - SebVentures and Williamr from the RWA team bring a pair of informal polls to get community feedback on the process and parameters for their onboarding process. They're both looking at how they describe their onboarding in terms of risk selections, what they bring to the community, and what we want to see more of to better understand how they're evaluating the products they're bringing into the forum. They're also looking into using longer-term structures for the loans using RWAs.
- [Road to DAO: the Core Unit Operating Model](https://forum.makerdao.com/t/road-to-dao-the-core-unit-operating-model/6105)
    - Juanjuan discusses the new MIP set he proposed with contributions from ElProgreso & Iammeeoh, which seeks to define the path to a fully functional DAO without Maker Foundation support. I believe Juan is going to speak to that a little further today. It's really well packaged and lays out the groundwork toward progressing to pay our own teams and operating entirely separate of the Foundation.
- [Incognito brings anonymous DAI transactions](https://forum.makerdao.com/t/incognito-brings-anonymous-dai-transactions-with-close-to-zero-fee-intro/6116)
    - Andrey_Incognito unveils anonymous DAI transactions via Incognito and asks for some collaboration with the community. Feedback is requested in terms of how we see this being used with Maker.

##### Signal Requests

- [New vault-type for ETH with a higher LR](https://forum.makerdao.com/t/signal-request-new-vault-type-for-eth-with-a-higher-lr/6069)
    - Ultraschuppi signals a new vault type for ETH after some comments from Risk concerning ways to safely increase the protocol's exposure to the ETH asset.

### Christopher Mooney

#### Smart Contracts Team Update

[06:23](https://youtu.be/9G6rUpOkJPE?t=383)

- Much like last week, every minute of our day is busy. This means I don't have my usual list of things to rattle off, but I'll mention that we are deeply engaged with auditors right now. There are several changes that we have to make to liquidations 2.0. We've been working on that. The entire team has dropped everything else and postponed as much stuff as we can. We're pretty heads down into liquidations 2.0. This is a good week for us to work on it because the community executives will be happening this week.
- The [MIP21](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917) stuff was bumped for liquidations 2.0. However, Lev's made several requested changes to the MIP21 stuff. We had pushed back last week because we wanted unit tests. Lev found a bug that none of us saw in the manual review. Lucas and the team from [MIP22](https://forum.makerdao.com/t/mip22-centrifuge-direct-liquidation-module/3930/1) will be reviewing this situation, and they are actually taking a look right now.
- Generally speaking, liquidations 2.0 is currently our high-priority-interrupt. Whenever we get feedback from the auditors, we will drop everything we're doing and focus on this. We're expecting to have most of that code pre-finished for Monday next week.
- After that, we will flip our focus back over to MIP21 and get it into Kovan. We're even hoping to prepare it for mainnet next week. As soon as that is finished, we'll flip gears over to MIP22. A good portion of the code is written, but we still need to do a full review. That's the timeline right now. And, of course, we will try to fit in LP collaterals and stuff like that.
- I want to hand it off to Sam because this week is the community executive. Sam has some stuff that he's been working on. He and Will have been working together, so maybe Sam could give us an idea of what is going on this week?
    - SamM: As Chris said, Will and I are taking care of the executive this week. There's quite a bit going into that. We have two new UNI LP, which are wBTC-ETH and USDC-ETH. We have several debt ceiling adjustments to link MANA, BAT, tUSD, and PSM, which will also get a `lerp` module that will slowly increase the debt ceiling to the 500 million target over the next 12 weeks. We will increase the dust to 2,000, review the signal results for the vault compensation for working group payouts, and then whitelist Instadapp on ETH-USD. That's it for the community executive.

### Nik Kunkel

#### Oracle Team Update

[10:46](https://youtu.be/9G6rUpOkJPE?t=646)

- Yesterday, we deployed the new LP Oracle's for the WBTC-ETH and USDC-ETH LP tokens going live tomorrow. We spoke with the auditor, [ABDK](https://abdk.consulting/) that Lev had connected us with. We scoped them out a bit, and they seem legit. They forwarded us an audit that they did for Tornado Cash, and it seemed very thorough. The timetable they gave us stated that they should be able to do it during the beginning of February, and then finish by February 15th. We should have this audit back at the very latest end of February. The turnaround time on that is going to be reasonably quick. We should be able to increase the debt ceilings relatively quickly after incorporating these changes. Given that short interval between now and then, the priority for collateral onboarding apart from the RWAs by Centrifuge and 6S should be to mass onboard LP tokens. When we get the audit results back, we can crank up the debt ceilings.
- The Oracle assessment for Centrifuge is going live later today and should be included in a polling vote by Monday.
- Development is pretty much done for Starkware. We just have to apply it for testing in our staging environment. Also, Mark Andre has compiled the MIP10 for that, which should be going live before the end of this week; That's a big one, so the polling vote will be the following Monday. There are 17 total Oracle's in that proposal. If anyone wants to look at the sources being used and give feedback on whether they think the data models chosen are correct, that would be really appreciated—especially given the sheer magnitude of Oracle's that we'll be onboarding.
- We're going to be adding Instadapp to the whitelist of the ETH-USD Oracle to begin performing similar stuff such as DeFi Saver is doing; They can save you from liquidation or manage your position.
- I want to mention a large amount of time it takes the Oracle domain team and me to write up the polling votes and stuff. I would like to propose a MIP where adding someone to the whitelist shouldn't require a governance proposal. There's usually no reason we would reject anyone. Also, it provides more money for the DAO once we turn on the Oracle fees. The only thing that needs to be checked is that the smart contract reading the Oracle value is closed out and is private. We don't want anyone to steal the Oracle value from there. They have to come to us to get the value. The Oracle domain team already completes these evaluations anyway. I'll submit this MIP proposal before the community, and we will have a discussion about it. Nonetheless, I think the Oracle domain team should just have the authority to add people to the whitelist. It is important to note that the Oracle domain team should not get the authority to remove anyone from the whitelist. That would give them leverage to disrupt protocols that are using Oracle. So in the situation that we were to remove someone, governance would step in.

#### Comments

[17:06](https://youtu.be/9G6rUpOkJPE?t=1028)

- Matthew Rabinowitz: One quick question on that, concerning ETH. Maybe there's a scenario where we as a community would like to consider giving ETH as collateral, or we can just give the pricing of ETH for free and not have a gate in or out like everything else. Given the depths of how many people use ETH as an ecosystem, it is a critical business model. I believe it'll help focus the effort of MakerDAO being the source of pricing for ETH into the network.
    - Nick: Yeah. I have thought of that before. I think it's a good idea. We should talk about it a little more on the forum to see what the rest of the community thinks.
    - David: I had Allan Niemburg from Yield Protocol on the community call this week. One of the questions we spoke about was how they relied on our Oracles without being whitelisted. They're reading the price feeds in a work-around way. Giving free access to the ETH oracle for early-stage projects is a great way to cement a future customer as they intend to support a bunch of other assets that have Maker vaults.

### Primoz Kordez

#### Risk Team Update

[19:00](https://youtu.be/9G6rUpOkJPE?t=1142)

- Yesterday, we published a [risk evaluation on a farmable cUSDC crop joint adaptor, MIP30.](https://forum.makerdao.com/t/farmable-cusdc-adapter-cropjoin-collateral-risk-evaluation/6134) We also proposed parameters for this vault type. I suggest you read the risk assessment since this vault is a bit more complicated. It has a unique risk profile compared to other vaults that we onboarded so far. We don't think that this kind of vault will be prevalent. Still, it may be heavily utilized from the start because the yields that could be achieved here by leveraging this kind of vault could measure well over 180% APY. This is after a 7% stability fee collected by Maker. This adapter could also be handy for any other LP tokens that have liquidity rewards. This is important because Maker can position itself quite uniquely.
- We also began evaluating the next batch of UNI LP tokens, which we already know have high demand. Within the upcoming days, we will be evaluating the USDT-ETH UNI LP pair, which has been greenlit recently. We may also include the DAI-USDC UNI LP pair, which is still pending to be greenlit.
- The [launching poll for the debt ceiling instant access module implementation for other vault types](https://vote.makerdao.com/polling/QmZTdfZt?network=mainnet#poll-detail) passed today. We'll need to propose parameters for each vault type. We're going to roll them out in a few batches each week or perhaps all at once; It depends on whether or not we can find an easy formula to determine all the parameters needed for each vault type. We don't believe we should implement this module for stablecoin vaults or PSM because it may limit the DAI supply when most needed, such as during liquidity crunch events. We'll probably not include an instant access module for something like PSM. It doesn't make sense if you're using the `lerp` module, that adjusts the DC anyway.
- Last week, we started preparing a budget for the risk team. The risk team consists of a decent number of people. It is already six (or even eight if we count part-time people working collateral evaluations.) We need to properly rate this core MIP proposal to understand how to propose budgets aligned with this.

#### Questions

[22:27](https://youtu.be/9G6rUpOkJPE?t=1349)

- Frank: I want to circle back to the crop joint collateral risk evaluation you put out yesterday. In that piece, you mentioned that Compound Governance might change the COMP rewards' speed, which is distributed to specific markets; in this case, it would be cUSDC. You also mentioned that it creates a problem for Maker's Governance. Do you think the Maker community should have a team of ambassadors who communicate with Compound Governance and try to build a beneficial strategy for both protocols? It's the same thing for keepers, right? I read a post regarding keepers being worried whether 15 million DAI `box` is enough. You commented there, and Greg D brought up how keepers do not have enough liquidity. You wrote that you feel that keepers have more capital these days than four months ago. Do you still feel that way, and do you think we should have ambassadors like Greg D to keep in touch with these keepers and other people in the community to make sure these keepers have enough liquidity? This is a big question, sorry about that.
    - Primoz: In regards to Compound, this is already effective. This is not an issue. The yield on USDC is acceptable. What I wrote within the risk assessment is that other upcoming governance changes are being proposed. We need to keep an eye on them. One of these changes is the cool-down period for COMP claimed. If they implement it, this may affect the adapter, but Lev should know better. There may also be other things. We'll need to keep an eye on their governance and react as soon as possible. They have a similar procedure, before something gets implemented, they will discuss it on forums. There's an active signal, which has 2 days before it is executed. I think monet_supply who is on our team has been active there. Therefore, he knows what's going on.
    - About Keepers, we know that Maker's risk is struggling a bit about mitigating risk, and we'll talk about it at the end of the call as well. The current limiting factor is being the 15 million `box.` Of course, we would want to increase that if we were confident enough that keepers had enough capital. My speculation was that perhaps the keepers' ecosystem evolved in the past six months. They should have more capital on their hands but this only speculation, and we don't have any evidence. We attempted to evaluate the keepers' on-chain reserves, but it's complicated. It's hard to look at their wallets and say this is the amount of money. The last decision we've made on 15 million `box` was more or less based on the feedback we got from keepers. It seemed small but was still good because if they said a high number, this would have been a problem. We know a high number is always beneficial if they're hostile. If Greg is here and wants to comment on this? We need a proper way to communicate with keepers to get feedback, which we are missing.
    - Gregory DiPrisco: The problem we have is that it's a very cumbersome infrastructure to run right now. There's not much incentive to run it because there aren't many auctions. You're waiting for a one-off event that may occur twice a year. As a desk deploying capital, they don't want to do that. The other issue is that many of them have compliance departments that have to approve all of these things. Suppose this infrastructure is made redundant by liquidations 2.0, which it seems like it will be. In that case, they won't want to put in the effort to go to their compliance department to get a whole set up approved for something redundant in a couple of months. If we didn't have liquidations 2.0, then I would recommend that we take a more significant initiative to go out and ensure that there are keepers. However, given the reality, it's almost pointless to do that because you're only going to be doing a significant initiative for only a few months.
- Frank: Got it. Primoz, I've been hearing old school billionaires saying there's a lot of euphoria right now in the traditional markets. How do you sleep at night? Tim Black has put out the market relay letter this week, and it shows that there's about 35 million DAI to be liquidated at $1071 ETH. What's your feeling on that? Do you think we'll be able to handle that liquidation if these whales don't pay back in time?
    - Primoz: The good part is that collateralization ratios are higher than they've ever been in the past. The portfolio looks healthier than it was ever before. Nominal exposure is still significant, which is concerning. During the last few weeks, I've been mentioning my concerns. On the other hand, I can see vault users are a bit more sophisticated. As the price falls, you may see people unwinding. However, ETH-B looks a bit worse. If you look at auctions today, they just started kicking up. It's not perfect, but we may need to do something, and we'll discuss it at the end.
    - Greg: Sounds good, thank you.

### Sebastien Derivaux

#### Real World Assets Update

[30:00](https://youtu.be/9G6rUpOkJPE?t=1800)

- We are working on the legal documents provided by Centrifuge to see if everything will work as smoothly as expected. There will be a post within the following days. We hope that there will be, at some point, a legal team at Maker to provide more insight. We are also working on figuring out how to make long-term investments, which relates to the poll on the forum. We have a lot of prospects, and a lot of people want to borrow money from Maker. Some are very good. However, it's always challenging to put those propositions inside the current structure. That's why I'm turning to the community to see if long-term lending is an option. Obviously, every time someone wants to borrow from us, I tell them it's either MIP21 or MIP22. The trust models are going through Centrifuge because we don't want to increase the Smart Contracts and Oracle teams' load. This way, we continue to use the tools we have at our disposal.
    - Lucas: If the call is going to be as short as last week, I think it would be great to have a little discussion regarding interest rates and the long-term versus short-term borrowing. I would love to see what the community says. How do we deal with the demand for longer termed assets and various interest rates compared to traditional banks and funders? Let me know if that's possible.
    - LongForWisdom: Yeah, we can definitely come back to it later if we have time. As I said earlier, we will get a relative presentation from the Risk Team. If anything, we can come back to it in a future call. It's an exciting topic.

### Amy Jung

#### Community Development & Operational Support Team Update

[32:50](https://youtu.be/9G6rUpOkJPE?t=1970)

- We want to remind people there is a limited duration beta program that the data services (an internal team in the Foundation) has dropped. The API given in the program will allow you to receive historical data on MCD vaults. It's just one piece of a whole suite of products that are coming. Therefore, if you want to participate, the details are [here](https://forum.makerdao.com/t/beta-program-for-vault-tracker-api/5732).
- It's been exciting to see a lot of the community take over many of the developments which are happening. With that in mind, moving forward, we have Anna, who's coming on to cover the community development from the calls. Beginning next week, she'll be covering those updates. We do want to consolidate some time so that all the mandated actors are able to discuss and cover. At some point, we're going to have too many facilitators. Therefore, Juan and I will consolidate our operational support roles, and we'll go back and forth with announcements every other week.

### Juan

#### Peg Stability Module Update

[34:42](https://youtu.be/9G6rUpOkJPE?t=2082)

- The PSM UI is out, which is a community-driven development. We're very happy with the final results. If you haven't seen it, check it out, it's deployed on IPFS.

#### Collateral Call Update

[35:54](https://youtu.be/9G6rUpOkJPE?t=2154)

- Yesterday, we had a call with [Harbor Trade Credits](https://harbortradecredit.com/) on RWAs. The video is already [on YouTube](https://youtu.be/7lHc8HsysmQ) if you want to check it out, and notes are coming soon. Next week, we will have Lido bringing ETH 2 staked back to ETH 1. I also have a presentation about the Core Unit Operating Model. I don't know if you want me to show it now, or we can do it at the end of the call. What do you guys think?
    - LongForWisdom: If it's five or ten minutes, we can fit it in now.

#### Core Unit Operating Model

[36:49](https://youtu.be/9G6rUpOkJPE?t=2209)

![](https://i.imgur.com/uqRdLoI.png)

- The Know Your MIP call #3 will be hosted by Prose on Monday. We're at the cadence of one call per month. A lot of people helped doing this; therefore, it's not my own work. Thanks to everyone that helped and had provided feedback on the forum.

![](https://i.imgur.com/V5kMaJE.png)

- The Foundation is following early news by now. Also, due to regulatory measures, it's not able to meet all the governance requirements.
- Sam requested a budget, which is a perfect example. Primoz had mentioned it.
- Another subject is the growing complexity. There are new teams that are showing up. Therefore, we want to approach this as a framework.

![](https://i.imgur.com/18dleWj.png)

- The core unit pricing model is the first step. It's a phased approach. The idea is to have DAO primitives. They are designed to have an easy transition and capable of accommodating the current structures with minimal changes, which is very important.
- People have been asking about Domain Teams and current MIPs. The idea is that those things will work under this new framework. We don't change everything that we receive from the newly delegated operations by the Foundation. Ultimately, anything that they won't be able to do anymore, we want to be able to do it. We wish for a coherent framework. We don't want governance only voting on things that are hard to understand and keep track of.

![](https://i.imgur.com/RG1ISsF.png)

- As I had mentioned, we want a phase-based approach. What we're focusing on right now is the initial approach with this MIP set. Adding the temporary measures that we've seen, and hopefully, we can reiterate with more MIPs and MIP sets in the future.

![](https://i.imgur.com/NXsDkP8.png)

- The plan of this MIP set was flexible and modular. The DAO has revenues and wants services in exchange. They want to maintain and grow the protocol. The Core Unit is the minimum unit to do this. The DAO can provide the recurring cash flows and expect the service in exchange. Everything is clear and listed in a MIP. A Core Unit is straightforward and very flexible. It has a name and a mandate. There are facilitators with their name under commitment. This is something that was changed based on the feedback we received from people. It used to be one, but now we think it's better to have many or many per Core Unit.
- Lastly, we have the budget, which is governance saying, "okay, you have this budget." This is the implementation, and the breakdown is the rationale behind it. The facilitator with this budget will hire contributors to become a company and hire employees to form a DAO, split into several Core Units, and bring another facilitator to help. It's quite flexible in that sense. That's what we're looking for.

![](https://i.imgur.com/mEqfzml.png)

- Moving to the next slide as an example of a Core Unit. Any resemblance to reality is pure coincidence. Let's imagine this Oracle's Core Unit. The mandate is quite complicated because they're covering a lot of tasks. The facilitator is Nick. He would place his commitment and information, governance trusts him; therefore, they accept him. That's the budget. Governance thinks it's fair, so it's agreed, and then he does a breakdown saying this is what devs cost in the industry, etc. We want to keep it very, very simple. Nick would be able to hire either contributors or a company if he needs an audit, for example, or if he wants, he can organize it in the DAO. After that, we would have various questions such as; can Nick form two Core Units? Potentially, yes. Can a domain ream split into two Core Units to specialize? Also, yes. We want to keep it flexible. We think that the current structure of having domains is not enough for everything that we want to achieve within the next year, and this is the first step.

![](https://i.imgur.com/PgtObXT.png)

- Modular approach means that we want to be compatible with current MIPs and also future MIPs. For example, you can see that someone could do a manual suck or implement a Keg in the budget. We have the MIP42 that was published for RFC this morning. That's potentially something else that could work with this budget or other implementation we may think of in the future. It could also be several budgets; One could be for salaries, and the other could be a bonus. A Core Unit could have one or multiple budgets assigned to it with different rules and require different implementations. That's somewhat the plan.
- The same goes for facilitators. This is applicable for anyone who wants to develop a multi-sig MIP or powers in a Core Unit, maybe something to do with reporting or accounting.  This would be compatible with this first step.

![](https://i.imgur.com/BnZDoGL.png)

- Next steps are for the community. We're going to do a Q&A "know your MIP" call on Monday, January 25th. That's this coming Monday at 8:00 PM UTC. Join us. Prose will post the agenda soon. Then we have also created a #Core-Unit-Operating-Model-Onboarding a Rocket Chat channel. I know that it's not the best name, but at least it's descriptive. Ideally, anyone that wants to fill in a sub proposal or has any questions can get help there, and we can all help each other.
- We are in touch with different people to get help; Legal help, for example, if someone needs to form a company. Then we will be paying those people that are helping us. That's on the pipeline.

![](https://i.imgur.com/H6YBS7Z.jpg)

- Regarding this MIP Set. I need to incorporate all the feedback. Thanks again for all the feedback that I've received.
- The second step is I'm aiming for republishing during next week. A significant change that's happening, as I mentioned, is multiple facilitators per Core Unit, but It could be one. The rest is almost cosmetic.

![](https://i.imgur.com/hWkOpcN.png)

- We can get this out by submitting it and voting. Call your whale friend for support. I'm looking at you, PlanetX. Thanks again for everything. I don't know if there are any questions or if we have time for questions. You can join us on Monday. There's also an excellent [video](https://www.dropbox.com/s/u6i4dre4txgpa92/2021-01-20%2020-17-22.mkv) that Iammeeoh posted in the forum where he goes more into details about different possibilities. Any questions?
    - LongForWisdom: I think we'll leave the questions at the end of the call. Just to keep things on track for this meeting, if that's all right. I would encourage everyone to read those over. Either now or after Juan completes the updates. It's a significant step in the DAO's development, and it's great to see. Good job to everyone that was involved.

### David Utrobin

#### MIPs Update

[46:48](https://youtu.be/9G6rUpOkJPE?t=2808)

- Happy Thursday, everybody. Today we will be going over the weekly MIPs update, as we usually do on this call. My name is David Utrobin. I am a community development lead at the Foundation and resident MIP editor in training.

![](https://i.imgur.com/DTrvDR1.png)

- I created a little slide for visualization because visualizations often help people place themselves and understand things a little bit better. We are here. Today is January 21st. The governance poll just ended, and we're coming up toward the end of week three in our January governance cycle. Next week, on Monday, we're going to have a bundled executive vote.

![](https://i.imgur.com/xUeYI1C.png)

![](https://i.imgur.com/MWkJAsg.png)

![](https://i.imgur.com/G5GOZ9t.png)

![](https://i.imgur.com/IL85kz2.png)

![](https://i.imgur.com/Ro0si65.png)

- A note on MIP42: It is a bit early since several things are in the air, such as the Keg or the governance contract redesign. There are many dependencies there, but the idea is excellent to formally include in RFC.

![](https://i.imgur.com/1kGfRH6.png)

- I would like to touch on the difference between what conception and RFC are for MIPs. Whenever a MIP is initially posted, it's in conception. After MIP editors reach out to the author to fix basic formatting and make sure nothing's going too crazy there, it gets moved to RFC. Also, with being moved to RFC, a pull request is submitted to the MIPs repository.

![](https://i.imgur.com/2qKOjHv.png)

![](https://i.imgur.com/mcKfVCh.png)

- Chris: 6S probably won't make it in on Friday. However, we're likely to get it to Kovan on Friday or next Monday.
    - David: Great, thanks for the update.
- David: Likewise, if anybody watching or listening would like any given collateral status and see the complete list and everything, the [collateral status index excel sheet](https://docs.google.com/spreadsheets/d/1IX9e2fyfz7djtDMKn5gMyGsyFxHoY75GncMbAjnSXrM/edit#gid=1077340672) is actively updated by several people involved in collateral onboarding at MakerDAO. That sheet has everything; It links to all the collateral applications, and assessments that have been done and assign every collateral application's current status. It's a great resource.

![](https://i.imgur.com/dmPTKuO.png)

## Other Presentations and Updates

#### VaR Calculation

[58:14](https://youtu.be/9G6rUpOkJPE?t=3498)

### Primoz Kordez

- Many of you have been around for a year or so perhaps remember when we had a demonstration on the general risk model we are still using to calculate risk premiums. I think we had one presentation in April last year. Then I had one in October on risk premiums on ETH vault. Andy has been kind enough to improve the model; He added correlation metrics, which measure Value at Risk on a portfolio level. This is an essential metric because Maker's risk exposure has been growing exponentially within the past few weeks. It has added many new collaterals in the last months. We have finally increased the current surplus buffer. This kind of presentation should give us some insight into how well-protected Maker truly is. The presentation should understand this risk profile and begin thinking about risk mitigation decisions because debt exposure can continue to grow. We may want to act sooner rather than later. I'll let Andy present his work, and then we'll have some discussion at the end of his presentation.

### Andy McCall

![](https://i.imgur.com/UxoMQQJ.png)

- My name is Andy. You've probably seen me in the forums. I've been around for a long time. I've been helping the risk team for the past month or two to refine the old collateral risk model and run simulations for them.

![](https://i.imgur.com/ZbU1TqY.png)

- I won't read this full disclaimer here, but this is a holdover from previous presentations that the risk team has done. More or less, this says this isn't financial advice, and you should consult your own advisers on those matters. I'll post this slide after this is done.

![](https://i.imgur.com/BfPjM29.png)

- I'll give you a brief nod to the risk team's previous work and some improvements made to the module as part of the project. That's the first half. We'll look at simulation results during the second half.

![](https://i.imgur.com/JJJq6sk.png)

- We need to talk about Value at Risk (VaR). You may hear me use this term. There is a nice little definition that comes from Wikipedia; VaR estimates how much a set of investments may lose given a period. You have a bell-curved type shape, and this red line represents the VAR at 5% on this particular bell curve. The area shaded in red is 5% of the total area underneath this curve, which is 8.2, but that's not important. This is to give you a sense of what we're talking about here.

![](https://i.imgur.com/VZ8F7zn.png)

- The nominal risk at Maker is growing. Today the max theoretical debt ceiling is approximately 2.2 billion. You'll see in this call some historic comments concerning specific media figures and making statements such as "there's this much DAI at risk in the Maker portfolio." This VaR metric helps make statements that I'm half quoting here; it says, "reasonably confident that Maker losses will not exceed x depending on your confidence in the given year." You can potentially use that sort of information to help inform your stability buffer decisions, rates decisions, and more. It gives you an easy-to-consume format to talk about how risk is growing within the portfolio. Hence, as you raise the rates, you can point to this metric and say, look where this number is going up.

![](https://i.imgur.com/iJPcOZV.png)

- Here's a link to the collateral risk model. Here's the source code. I highly recommend these two previous presentations.
- Last year, the risk team built a module that runs this Monte Carlo simulation. It helps estimate things such as expected loss to inform stability fees and evaluate risk, predicting the worst-case type losses that this vault type can generate.

![](https://i.imgur.com/A63U8zn.png)

- That model allows you to simulate a hypothetical vault type, but it has some issues. These issues revolve around the practicality of its use. There's a bunch of inputs you need to come up with to actually run a simulation, and a lot of these inputs, especially a few ones, in particular, are quite complicated to derive. Over the past month, we've written some software to quickly throw this out for a given collateral type. However, you need to account for it, not telling you the evaluated risk across the whole portfolio. You can't merely sum that up. Hence, the model needs to be improved a bit further. We can run these simulations and determine what the portfolio's overall evaluated risk is.

![](https://i.imgur.com/kkXgcyf.png)

- Slippage is one of those inputs that are difficult to evaluate. In Layman's terms, slippage is what we stand to lose at auction once somebody defaults in the position. Basically, it's a function of keepers' profit expectations plus the price impact of liquidating things. I have a link here on the YFI slippage analysis, which is also where I got this graph. I highly recommend somebody going in there and looking at it. There are five or six pages worth of random math that the risk team put together to create these four lines. I'm dumbfounded every time I look at it. I wrote a program that can do the calculation performed in the spreadsheet here.

![](https://i.imgur.com/aCFgTEj.png)

- Using this, we could determine the slippage for each collateral type. Having those slippage values allows us to look at how vaults are being collateralized. We can simulate almost every vault type and develop an evaluated risk number for each one, but that's not enough to know the portfolio. We need to understand how the losses will be correlated with each other. What we assume now is that they will be associated similarly with the price movements. As I've noted here, this is probably not a perfect assumption. Still, it is interesting in terms of risk mitigation because what it says is that the losses will be highly correlated.

![](https://i.imgur.com/96LMRUy.png)

- Here's some matrix math for you. There will be some links in the notes on how you can derive this yourself. Using that correlation metrics and the vector of your vault type losses, you can do this matrix multiplication to determine the evaluated risk of the entire portfolio, which we'll go over in just a minute.

![](https://i.imgur.com/g9Ll5Hq.png)

- With all that said, here are some figures.

![](https://i.imgur.com/lSOf4XW.png)

- This is an output of this model's slippage calculations. The only takeaway I would point out on this slide is that there have been many calls in the forum to raise the ETH debt ceiling. According to our model, you can see that we're now getting into the range where the slippage for ETH is relatively high. This is why you see pushback coming from the risk of continuing to raise the debt ceiling there.

![](https://i.imgur.com/bsFF574.png)

- The evaluated risk numbers are essential. They are based on the past 90 days of trade data. They are currently being favored because there's been a bull run happening during that period. However, a few vault types are not included in these numbers, which I have written here in gray. These are any stablecoins, the Uniswap Liquidity tokens, wBTC, and PSM. The reason for this is basically because there's some debate on how to calculate slippage. I thought it best to leave them out and ignore them. These numbers are sufficiently high where I don't feel it's necessary to talk about them too much.
- Here are a few arbitrary confidence thresholds I picked. For every number you see here, n, for example, 1-n, the model predicts the probability of single-day losses exceeding. This is the number in the right column. The model predicts a 20% chance of exceeding 86.4 million in the next 1 year period of time.

![](https://i.imgur.com/AbEQ0Yx.png)

- I want to point out which is relevant to current affairs on the forum is ETH-A versus ETH-B. These two are the highest amount of exposure from that set of vaults that were simulated. They count for almost all of the evaluated risk. You'll notice in these forum threads that various risk team members are commenting, "I don't feel comfortable raising these things." You can see how ETH-B contributes more proportional to its exposure size. It's probably not that surprising, but you get more bang for your buck in raising your risk exposure every time you increase the ETH-B debt ceiling compared to raising the ETH-A debt ceiling.

![](https://i.imgur.com/M0x1ag9.png)

- I've linked the website here to where you can find this quote. This quote says that there's a term called VAR breach that states we calculated a 20% percent chance that the loss will exceed x. It doesn't state how large that loss will be if it exceeds x. Let's say saw the model calculate a 1% chance of exceeding 1 million. Also, let's say there's a half a 0.5% chance that the loss maybe 100 billion. There's nothing wrong with the statement of a 1% percent chance that loss will exceed 100 million. Be a little bit careful with those numbers. They're often misinterpreted, and they don't speak to the nominal size of any potential VAR breach. It only speaks on the likelihood that they would occur.

![](https://i.imgur.com/sspSaKO.png)

- I'm ready for questions, but here are some potential starters on what you may do with this information, as well as some further extensions we could make to the model. I'll just take a break right here and see if anyone wants to chime in and ask questions.
    - Chris: Yeah, with those VAR values, is that a 20% chance that we'd lose 80 million over a year, or are we thinking of a single shock event?
    - Andy: It would be a single-day loss.
    - Chris: Jesus.
    - Andy: Last year, during March, a single day event created 8 million worth of bad debt. It's similar to that thing.
    - Chris: Yeah, that's very different from my intuition, so thanks for illuminating that.
- Seb: Does your model take into account a `box` of 15 million?
    - Andy: That is a good question. It does not consider the `box.` It is totally okay with liquidating infinite amounts of money in a given day.
    - Seb: Okay. Would you say the situation could worsen if the `box` is 15 million and can liquidate on the 15 million pair within six hours?
    - Primoz: With a `box` of 15 million, it really depends on price trajectory. It usually protects from worse events like zero bids. If we adjust it for the `box,` we will get more optimistic numbers. On the other hand, the model is not taking into account people unwinding before getting liquidated. We can't really model for every little thing due to human behavior. On average, the slippage curve, which is the most essential input, is still realistic. This is where the losses come at the end.
- Gregory Di Prisco: Did you say that you're using daily VAR?
    - Andy: It is the representation of the worst day. If you go back, these numbers are adjusted to predict every year. This doesn't say every five days, you should see a loss of 86 million. It's more like every 5 years. You should see something along those lines.
    - Gregory Di Prisco: Okay, for example, oracles update once per hour. Theoretically, we have hourly exposure instead of daily exposure. Is it accounting for this?
    - Primoz: No, it's simplifying it. What the model is doing is calculating losses on each day using thousands of periods. There's a one year period, and then this crash occurs, and then you have random block thousands of simulations. Therefore, you get this distribution of losses. The average of those losses is the expected loss, which is the risk premium. We use this when you set rates and want to look at the worst-case events. This is how banks do it as well. They calculate evaluated risk because they want to be hedged against worse case events. This is the number that we simulated. This is the one percentile of the worse losses that we simulated.
    - Gregory Di Prisco: Since we're using daily, isn't it safe to say we're being pretty conservation considering our liquidation exposure is hourly?
    - Primoz: Yes, and no. Even if it's hourly in one day, you can have many liquidation events every hour. There's also a `box,` and not every auction gets cleared. There's slippage daily for the whole portfolio, but I get your point. We could make an alternative simulation that would focus on a shorter time interval. It can simulate the price trajectory during the day and micro estimate that loss, which can then be extrapolated into a yearly fee. It's doable. Still, it's not how the model currently works.
    - Gregory Di Prisco: I always worry about an OSM attack where you can see a vault go under 100% collateralization. I do that for the rule of thumb for the worse hourly candle in March and overlay that into the vault and assume that will happen.
- Primoz: I just want to jump in here. I wanted to have this discussion today to think about how we could catch Maker and whether there are tools available that I've discussed. There's a surplus buffer we may need to think about increasing even further. We also need to agree that it takes time to get to a ten million figure. It could take two or three months to get to ten million from now. This may already be too late. The second thing is the `box` parameter we had discussed. It's difficult to justify a higher number, but I think it could be very beneficial. Liquidations 2.0 would improve the slippage functions; The number would be much lower. This is why liquidations 2.0 is currently a priority from the development perspective. Regarding higher liquidation ratio vaults, We will need to choose between business growth and risk management. As I said, those figures are based on the current collateralization ratio distribution, which is very healthy. The collateralization ratio can quickly change if present vaults believe that the current Ethereum price is stable and are planning to mint more DAI. This will push the ratios down there towards 250. Suppose we get to some equilibrium state that we observed in the past. In that case, we may have 50% of the portfolio lowly collateralized, and then those numbers become even worse.
    - LongForWisdom: Yep, I want to thank Andy for that presentation. That was great. This is something where people need some time to absorb and come back to within another meeting. Are we going to post that presentation anywhere else?
    - Andy: I will post it to the forum sometime after this.
- LongForWisdom: That sounds good. Alright, let me cover the thing I forgot earlier. Prose and David pointed out that I forgot to confirm that MIPs will continue to the executive votes next week. On Monday, we will have the MIPs executive vote to confirm. Six proposals will confirm and mark them as ratified once passed. Looks out for that on Monday. As usual, I will leave the call open if anyone wants to discuss more with Primoz or Andy.

#### Links from Chat

- [ABDK Consulting](https://abdk.consulting/)
- [Beta Vault Tracker API](https://forum.makerdao.com/t/beta-program-for-vault-tracker-api/5732)
- [PSM Webapp](https://forum.makerdao.com/t/psm-webapp-a-maker-community-project/6129)
- [Collateral Onboarding Call, Jan 20](https://www.youtube.com/watch?v=7lHc8HsysmQ)
- [Core Unit Op Model Onboarding](https://chat.makerdao.com/channel/core-unit-operating-model-onboarding)
- [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231)

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`DC`: Debt Ceiling

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RWA`: Real-World Asset

`PSM`: Peg Stability Module

`VaR`: Value at Risk

## Credits

- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
