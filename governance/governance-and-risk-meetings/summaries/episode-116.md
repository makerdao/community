# Episode 116: October 29, 2020

## Agenda

- [00:00](https://youtu.be/0v3E_kpLxFg): Introduction
- [02:08](https://youtu.be/0v3E_kpLxFg?t=128): Governance Discussion
- [25:41](https://youtu.be/0v3E_kpLxFg?t=1541): Smart Contracts Team Update
- [29:56](https://youtu.be/0v3E_kpLxFg?t=1796): Oracles Team Update
- [33:09](https://youtu.be/0v3E_kpLxFg?t=1989): Risk Team Update
- [39:28](https://youtu.be/0v3E_kpLxFg?t=2368): Community Development + Operational Support Update
- [40:36](https://youtu.be/0v3E_kpLxFg?t=2436): Collateral Calls Update
- [43:31](https://youtu.be/0v3E_kpLxFg?t=2611): MIPs Update
- [49:24](https://youtu.be/0v3E_kpLxFg?t=2964): October Governance Cycle Review
- [50:45](https://youtu.be/0v3E_kpLxFg?t=3045): Nexus Mutual Insurance with Hugh Karp
- [01:06:15](https://youtu.be/0v3E_kpLxFg?t=3975): State of the Peg with Vishesh Choudry
- [1:18:11](https://youtu.be/0v3E_kpLxFg?t=4691): Conclusion

## Video

<https://www.youtube.com/watch?v=0v3E_kpLxFg>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/0v3E_kpLxFg)

- Hello everyone, and welcome to the MakerDAO scientific governance, meeting number 116, taking place on Thursday, October 29th, at 16:00 UTC. My name is LongForWisdom; I'm the governance facilitator for MakerDAO. I'm joined by people interested in Maker. We've got a bit of an agenda today. We're going to start off talking about the recent issues with flash loans. I think that's probably on top of everyone's minds, so we'll talk about that a little bit and get some discussion going first. We'll then carry on with the usual agenda, which includes the regular weekly updates and the governance cycle review. We have a segment by Hugh Karp from Nexus Mutual, who will talk about insurance for the Maker protocol. Hopefully, if we've got time, there will be a segment from Vishesh talking about state of the peg. Alright, so I guess some preamble stuff; if you're in the meeting, feel free to interrupt and contribute to this call when people are talking. We'd love for you to join in, and if it becomes a problem, someone will let you know, so please don't be shy.
- I'd also like to do my usual reminder regarding time zones and daylight saving. This meeting is in UTC; daylight savings has happened for me, but I think it might be perhaps on Sunday for a couple of other zones such as EST. Be aware that after that changes, this meeting might shift slightly.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussion: Flash Loans and Securing the Maker Protocol

[02:08](https://youtu.be/0v3E_kpLxFg?t=128)

- [Flash Loans and securing the Maker Protocol](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901/19)
- I posted a forum post the other day talking about how on the October 23rd executive a flash loan was used to pass an executive. This was a standard plan executive. It wasn't malicious, but it did highlight that flash loans can be used to influence Governance. That led to a re-evaluation of the flash loan risk and the potential for malicious executives to be posted and passed using flash loans, which was deemed a risk that we should probably deal with. So, I'm going to post the forum post for people to read. There's a bit of a summary there. We talked about some actions, the main one being to encourage more Maker to get on the hat proposal, which helps prevent malicious changes. I'm also including an executive spell to increase the GSM module pause delay from 12 hours to 72 hours and deauthorize some of the modules that could skip that pause delay. Chris, do you want to talk about what's been going on regarding the changes and how you found the issue?
  - Chris: Yeah, I think that's probably a good idea. So I actually wanted to bring up that in a way, there was kind of two incidents. The first is that, sure enough, last Friday's executive finally went live on Monday via a flash loan, which is probably not great considering that most of the mechanism design behind MKR is that MKR holders have skin in the game, and that's alarming enough to prompt a re-evaluation of the flash loan risk. Then, shortly on the heels of that, a second incident where on the 27th, the amount of MKR, for the first time ever, that was available in the open markets for flash loans exceeded the amount that was in the hat. So, in our minds, that's the huge urgency about flash loans right now. It's that for a brief window of time, if you were paying attention, you could've flash loaned and pushed in a malicious governance proposal from "zero" to "scheduled." This would've put a lot of urgent burdens and work on us to try and drop that proposal as well a lot of organizing MKR and trying to clean up the mess. So those are the two incidents. Right now, we think that that risk is probably going to persist; I know it's mitigated right now because we have enough MKR on the hat, quite a bit on the hat, over 120 thousand MKR last time I checked - I don't know, somebody can drop that number in the sidebar - so what we did is we sort of weighed the risks of having, first of all, we had a few instant modules outside the governance delay, so the modules inside the governance delay, one of them is to freeze the oracle feeds and since, so we initially put that in place because there's a feed list and over time we've been adding a lot more feeds on the list. The more feeds we have on the list, the less likely we will suffer an oracle attack, so there's still a risk there. We want the ability to freeze those feeds. However, the risk that somebody maliciously freezes a feed with a flash loan is greater at this point than the risk that we have feed corruption with somebody manipulating the price. So we're thinking we need to put the oracle freeze. We're actually just going to remove its privilege so that you have to go through the GSM delay if you want to freeze the oracles. And then the same thing with liquidations. The liquidation circuit breaker we added after March 12th was to circuit break the liquidations if they weren't performing correctly. Since then, we've also upgraded to liquidations 1.2, which has the box and limits our upside exposure on how much bad or ill-performing liquidations could reek on the protocol. So the problem is that instant modules are there; an opportunist could try and attempt to disable the circuit breaker . We have circuit breakers on USDC-A, which is probably the most alarming, so someone could instantly turn that circuit breaker off. Then all of that USDC-A that's up for liquidation would be liquidated on the market right away. Because of flash loans, the risk of that also became more significant than we believe the risk of what the circuit breaker was trying to solve because of the box's addition in liquidations 1.2. Again, we're going to remove the privileges from that; we will put it behind the GSM delay. Then, with regards to the GSM delay, 12 hours if a malicious governance action gets scheduled, which one very well could, is a short time to sort of muster enough MKR holders and take action. I think we could do it, but we thought mustering the MKR holders is probably the more challenging bit, so we suggest 72 hours for the governance delay. That would give us, imagine if something terrible happened on a Friday, that provides us an entire weekend to act plus a day to align enough MKR holders. So those are the three recommendations. To reiterate, they are;
    - Extend the GSM delay from 12 hours to 72 hours.
    - Remove privileges from the OSM freeze module.
    - Remove privileges from the flipper or the liquidation circuit breaker.
- Chris: I'm happy to take any questions, or if anyone wants to have some discussion, that'd be great.
  - Kunkel: Yeah, I just want to chime in on what the tradeoffs here are. You mentioned that one of the tradeoffs is that the oracle freeze module is now subject to the governance delay, which we're now proposing to be three days or something. So right now, if there is an oracle attack, it happen in several ways. But the two main possibilities that I see are either that someone manages to compromise a bunch of the feeds to reach a quorum and submit a malicious oracle price. The other is that someone looks at what price sources we're using for an asset and then tries to manipulate those markets temporarily to get the feeds to legitimately post this distorted market price. Now, in the past, it goes through an OSM delay, so the oracle security module delay is one hour, and so in the past, we would've had this one hour time window to basically fix this. And by fixing it usually what we mean is that we would activate this kind of oracle freeze. The tradeoff here is that any kind of oracle freeze is now subject to the governance delay of three days, then if there's an oracle attack, I mean we're suffering through that attack, we don't have a mechanism to actually freeze the oracles in time before the malicious price takes effect so it's not that we get this flash loan governance protection for free you know, there are tradeoffs. I agree that the risk of a general governance attack through flash loans, given the amount of liquidity in the market, is much greater than the risk of an oracle attack. I just want the community to know exactly what they're giving up here.
- Kurt: I would like to jump in there really quickly to make the point that the next priority following this immediate sort of emergency action executive would be to find a way to safely re-enable the ability to instantly freeze oracles or trigger a liquidation circuit breaker. We're still kicking around the best way to do that. Still, that process is of drawing rapidly to a close. Within the next couple of days, there should be a concrete recommendation put out by the smart contracts team to suggest the best way to do that. Then, the community can go forward based on that.
  - Nkunkel: One thing I would like the community to consider is, perhaps if they want to give the oracle domain team an instant access module to be able to freeze them but that, to be fair, is a big step in the centralization of power so I would totally understand if there's some reluctance to do that. But that would definitely be one option.
  - Kurt: I'll add that all the things we're working on are fully decentralized MKR controlled mechanisms, but that could be an even shorter-term intermediate step. Just give authority to the oracles domain team.
  - LongForWisdom: Alright, thanks for adding that color Nick and Kurt. Anyone else has any comments or questions or anything?
- Brian: Hey, Nick. If you were to have your own flash loan or your own instant access module, would you need to be able to flip the OSM's individually, or would it be sufficient to flip them all at once?
  - Nkunkel: It would be great to have the granularity to toggle them individually because, as I said earlier, there are two styles of attack. If you can manipulate all of the feeds directly or blackmail all the feeds, you may change all of the prices because you have the quorum to do that. But in the alternative attack where you're manipulating the price sources, the attacker would only be able to manipulate one oracle. Therefore, it would be quite disruptive if we only have to fix one of them to shut down all of them. I mean, it's the difference between; 'you can't use KNC over the next day(s) versus 'you can't use the Maker system at all.'
  - Brian: That sounds good. We can iterate on this offline.
  - LongForWisdom: Great, thanks a lot, Brian. As I was saying, if anyone else has any questions or comments or thoughts, please chime in, I'd love to hear from more of the community.
- Brian: I would like to state from a non-technical perspective. If you, as the community, want to help, your Maker on liquidity pools can attack the system. You would be encouraged to add it to the hat to protect the system. This is something that we've known since December when [Micah Zoltu posted the medium post about this exact thing](https://medium.com/coinmonks/how-to-turn-20m-into-340m-in-15-seconds-48d161a42311). Since then, the liquidity available has just been increasing. We are now strongly incentivized to increase technical solutions for this. However, there is still the option for the community to do their part to protect the hat.
  - Chris: Yeah, maybe I'll just echo from a non-technical perspective. Let's assume in the next week or two we've got a nice fix for flash loans. That still doesn't remove the risk that one of the lending platforms that just lets you take out an MKR loan for a certain period. That's not going to be an economically viable attack as well. This really does mean that if you're an MKR holder, you should be careful about where you're providing MKR liquidity. I think I'll leave it at that and maybe just leave that discussion for everyone else, so even once we solve all these problems, there's still going to be a little bit of a risk. I mean, that delay helps us,but once we have those instant access modules back in place, if your an MKR holder, you need to be thinking about these things.
  - SamM: So, I posted about this in the chat, but I was thinking about maybe a solution where we could split the value from Maker with the voting capability from it and potentially make some sort of new token that holds the value of Maker through technical means, and it does not allow for voting. I had an idea for this to create a new token called non-voting Maker where you can mint it by locking up your Maker. Still, to un-mint, you can only do it if you've previously locked up Maker, so it's not fully fungible. I posted a little sample code for this, so it's just some food for thought, I'm still going through the economics in my head, but I was thinking maybe something like this could be a solution.
  - Brian: Now, Sam, we already do have the IOU tokens. So when you deposit your Maker onto the voting contract, you get transferable tokens. I mean, there's probably no reason why you couldn't create a Uniswap liquidity pool to do that. Obviously, we don't encourage that because it does separate the value of the Maker token from your voting rights. Still, I think we might already have the solution.
  - SamM: Okay, well, if that exists, then maybe encouraging whales to use that so they can use their Maker's collateral without giving up their voting rights?
  - Brian: The only thing is the IOU tokens are essentially deposited slips for the Maker, so you'd have to...
  - LongForWisdom: I think they're quite the same. That's probably something to pursue offline or on the forums. Does anyone else in the community have comments or thoughts on this because I'm kind of aware that we've reacted to this fairly strongly without doing the usual signaling or polling process? Hopefully, the reasons for that are fairly obvious. Hopefully, people think they're valid, but please feel free to comment if you've got any thoughts.
- Matthew: I mean, you're basically talking about splitting up the equity. Basically treating it like preferred equity and common equity where preferred equity could vote, and common equity wouldn't be able to vote, but ultimately the MKR that wouldn't be able to vote would be traded at a super discount because at the end of the day the real value of MKR truly ends up being the fact that it can vote. The real question turns out to be how we put together a system that defends from the flash loans today, and then puts together an economical solution where it has a cost. We can always talk later about putting together incentives to let people keep MKR in the hat or in the executive contract. Still, in general, there needs to be a cost associated with borrowing the MKR to put into that executive. Clearly, once it's passed one or two blocks, it's one thing, but if people have, let's just say a one month delay before your voting rights would be usable, there's an economical cost not only to borrow it but to keep borrowing it for a sustained amount of time. You basically dissipate all of the terms. But if you bifurcate those two and get rid of the voting rights, I just think the MKR that wouldn't have any voting rights would trade for nothing.
  - SamM: Well, I don't think that's the case. I mean, it's useful as collateral to take out a loan or something like that, you can, like the price is valuable.
  - Matthew Rabinowitz: But that's my point, though. It's only valuable if it's tradable. Its value is driven around its voting rights from my perspective.
  - LongForWisdom: Okay, I think maybe going a little bit off-topic here in terms of the specific solutions. To your point, Matt, I think we will all be looking at the economics around voting and things more with the DssGov update. I spoke to Chris a little bit about it the other day. I hope we're going to talk about it more in the future to figure out how we can incentivize people to keep Maker locked up in the governance contract. I also hope we talk about how voting with borrowed Maker can make it more problematic or costly. So, Chris made another point in the chat, which I'm going to echo because it's essential. The Maker holders are providing liquidity on, for example, MM's. While there is a risk there from this flash loan, that is also valuable in other ways because we need MKR liquidity to do `Flap` and `Flop` auctions and make Maker tradeable. There are tradeoffs to doing that. If you are doing that with Maker, I suggest just being or trying to stay aware of just how much Maker is on the hat and in the governance contract versus how much is being provided for liquidity. Alright, any other comments before we move on?
- Lev: I just wanted to say that for the purposes of this problem, there are three different ways that people are providing liquidity that might be problematic. The first is lending platforms like AAVE and Compound. I mean, Compound doesn't currently have MKR but it presents the same idea. Some of those lending platforms might support flash loans; for example, like AAVE. The second way is AMMs that have their liquidity accessible with flash loans. So Ubisoft v2 is an example of such an AMM. Also, the ones that don't natively support AMMs like Unicode v1. Balancer can still be used in combination with another flash loan by trading a borrowed asset back and forth during one transaction. Still, there's also AMMs that doesn't make your assets essentially flash-loanable, such as Lunaswap. Therefore, it's actually not inherently the case that if you're providing liquidity in some sense to MKR that you're actually making it available for flash loans. It's worth keeping in mind that there's more nuance there.
  - LongForWisdom: Great, thanks for making that point, Lev.
- LongForWisdom: All right, I think we'll try to move on. If anyone has more thoughts about this, the forum thread links about this are a good place to make your arguments, leave your concerns or points. I would encourage everyone to do so. Chris mentioned earlier that two things happened here. I would like to echo that, and that's the first one, which is the more pressing issue concerning the risk of a malicious attack. Still, there's a second issue where people can pass proposed executives that benefit them using flash loans even if they don't own MKR. But this is less of a problem. However, it's still an issue, and it's something we're going to have to figure out how to deal with as well, which we've already even started thinking about. So we're dealing with a more immediate, pressing issue. However, there is still another issue we have to deal with, which will hopefully be addressed in the coming weeks. So, for now, let's move on to updates from the major teams. All right, I think I'm going to skip Governance at a Glance for this week. It is [updated on the forum](https://forum.makerdao.com/t/governance-at-a-glance/84) if anyone's interested. Otherwise, governance updates have just been me dealing with this mostly and recruiting people to help with Governance related things. If you have anything extra to say about smart contracts, Chris, feel free; otherwise, we can move on.

### Christopher Mooney

#### Smart Contracts Team Update

[25:41](https://youtu.be/0v3E_kpLxFg?t=1541)

- Yeah, I'll see if I can go through it pretty quick. Most of it is, obviously, we got randomized onto this, so things changed a little bit. So, the weekly executive for the surplus buffer going from two million to four million passed. Also, the B.Protocol approval for OSM and medianizers passed. I want to lighten the mood a little bit here and say that I think it's fair to say that the Kurt curse is still in effect. So, for those that don't know, for a while, whenever Kurt would make an executive spell, it would never pass. When he deployed the spell, that transaction hash had a 0XDAD at the front, which was a little alarming. It was then flash-loaned to pass, and it has now randomized us, so maybe we'll keep Kurt off the executive spells for a while. We love you but...(jokingly laughs).
- The monthly executive bundle passed, and we did no collateral assessments.
- We pushed WIFI-A a to Kovan. Sam's been working on GUSD-A this week to Kovan. There's still a little bit of tooling work that happened on the DSS executive. There are no changes to the collateral onboarding priority sheet. The documentation for collateral onboarding is in final review and will probably be posted reasonably soon. There are no domain team reviews from last week, so this coming week we've got this executive that we talked about. Then, we're going to put off probably WIFI and Balancer until maybe next Friday. Still, it's hard to say if we end up pushing some other, more urgent change to try and fix the flash loan thing that'll take priority. So if there's nothing there, then WIFI and BAL can go out probably as they're pretty much ready to go.
- Assessment work: I think we're going to do some of the Uniswap v2 tokens because we're targeting the end of November for Uniswap v2. USDC–ETH-A and DAI–ETH-A are the two at the top of the priority sheet. Still on that list is just UNI, renBTC, and TBTC.
- Domain team reviews, again this is more backlog for [MIP 14](https://forum.makerdao.com/t/mip14-protocol-dai-transfer-update/3844), [17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021), and [25](https://forum.makerdao.com/t/mip25-flash-mint-module/4400). The foundation's continuing to engage auditors for liquidations 2.0. Now that team has been sort of randomized onto working on it; Probably hoisting some features back from what we were going to do for DSSGov, but that's not set in stone yet, so we don't know. Still, they're working on the mitigation for the events this week.
- Also, I'm gonna post a link. I don't know who in this channel–maybe Charles will mention it, but [there's a collateral onboarding updates external channel](https://chat.makerdao.com/channel/collateral-onboarding-updates-ext). I don't know if people can just join that. It's in the sidebar. It's a read-only channel aside from domain team actors. Everyone is encouraged to sit there if they're waiting on alerts for testing a new collateral type in Kovan or if they're waiting until something gets pushed to production to begin testing any aspect of this stuff. That's the sort of pipeline where the pipeline announcements will go anywhere from people using UI's to other domain teams and all the way down to people running keepers to know they need to update their keepers to manage these new collateral types.

### Nik Kunkel

#### Oracle Team Update

[29:56](https://youtu.be/0v3E_kpLxFg?t=1796)

- Besides that someone wanted to use our oracle so bad that they flash loan attacked us; I don't know how to feel about that. Besides that whole thing, there weren't any polls or any other executive stuff that happened in oracle land.
- As far as what we're working on, this week, we deployed the Balancer and YFI oracles, so those are ready to go. Still, like Chris Mooney said, basically, we may push off the onboarding for those in favor of doing executives for the flash loan attack fixes.
- In addition, I've basically completed all the stuff on the tech side for PAXG and for the AAVE token, as well as for GUSD. Those should be ready to go shortly.
- Right now, I'm exclusively just focusing on the LP token oracles because it's a significant change from our regular oracle stack. It's basically a standalone smart contract, so we're basically trying to just get as many eyes as possible on it.
- The other thing is that this is a contract that we're going to want to get audited, but it would take forever if we did do that because of how busy most auditors are. It will take a day to finally onboard the LP tokens. I think the healthy trade-off here is that we can onboard the LP tokens targeting the end of November. Still, we'll just have to really restrict the debt ceiling so if there is some kind of bug that the damage is contained. In parallel, we can be seeking audits. As the audit results come back, we may need to make some changes and redeploy the oracle or hear back that everything's okay. As we go through those, we can feel more comfortable raising the debt ceiling to more reasonable levels. But the good news is that once we have a contract in place for one of them, we can easily deploy it for all of them, so you only get that huge kind of friction once, and then you get all the other ones for free.

### Primoz Kordez

#### Risk Team Update

[33:09](https://youtu.be/0v3E_kpLxFg?t=1989)

- There's ongoing work on collateral evaluation currently finalizing renBTC, but as Nick said, starting to focus more on UniLP tokens as was agreed between domain teams. UniLP is a bit non-standard to evaluate from our side. Still, we think if something like ETH-DAI or ETH-USDC would actually de-risk the portfolio due to the lower volatility of such assets. Also, I think a higher debt ceiling could be applied from our side because, for instance, if you release something like ETH-DAI's collateral, such worlds' unwinding should carry less slippage because collateral itself holds DAI. The only missing part is whether we can soon implement a feature that will have farming supported by worlds that would definitely attract more demand than otherwise.
- As for rate changes this week, the rates working group [proposed one change, which is to lower the ETH-B stability fee from six percent to four percent](https://forum.makerdao.com/t/rates-changes-proposal-26-oct-2020/4877). We believe six percent is currently too high, especially since farming yields dropped. The cost of capital now plays a more important role when people decide to leverage. I still think it was a good experiment to see the borrow rate threshold on lower liquidation ratio ETH-Wall types. By lowering it to four percent, we might get a clearer signal from Maker users about rate sensitivity if it gets passed.
- There's already a signal on stablecoin fees, which I think just ended today. It seems stability fees on stablecoins will remain unchanged at four percent. They will remain at four until leading stablecoin worlds reach a hundred percent collateralization ratio. I think this should be in mid-December. This means we might also need to have another discussion about potentially raising the surplus buffer. I think that might not be necessary because the four million surplus limit that is effective now will be reached only a few weeks before we disable decent stablecoins. I think the best thing to do is to wait until we are close to the limit and then evaluate the whole situation.
- And then the last thing I want to point out is that Maker now has a lot of unutilized debt ceiling for certain world types. It's hard to manage it efficiently without having instant access modules that I think need 27 AMMs to implement. But still, we might want to decrease certain debt ceilings such as those for ETH-A, where there's more than 200 million unutilized. There is also a bit of a problem with MANA, where liquidity metrics got much worse in the last few weeks. We might need to decrease the debt ceiling even below the current depth exposure, currently at about 400,000 DAI. The new models that we use now, which are being tested for risk parameters, are suggested a debt ceiling between 200 or 300,000 DAI. That's because liquidity really got worse. Much of the volume happens just on Huobi Exchange. We know there's usually some wash trading there. I was actually thinking next week we might want to do a larger executive vote on debt ceilings, where we first propose a debt ceiling increase for renBTC and Link. Link was already signaled. Then, at the same time, propose a decrease for ETH-A and potentially also ETH-B. Simultaneously, we decrease for MANA and USDT because there's a signal which is still pending. Still, it seems a majority voted for a decrease to 2.5 million, so I'll make a post soon about this debt ceiling proposed changes. If they are agreed on between the community, they could go into this Monday on-chain pool.
  - LongForWisdom: Great, thank you very much. Yeah, I think any questions or anything or comments on that can probably go in the [forum thread](https://forum.makerdao.com/t/signal-request-debt-ceiling-adjustments-29th-oct-2020/4931) Primoz posted.
- Matthew Rabinowitz: One quick question just on prioritizing items where you outlined that there's a Uniswap LP priority. Simultaneously, there's been a poll about RWA's prioritization, just curious which ones are getting priority.
  - Primoz: On our side, there's not really a significant difference because the RWA is now covered by separation; I'm involved as well, but Sebastian and Will, and Phil are working on them. UniLPs on our site are covered by so-called regular evaluators, so we shouldn't really have a problem with that. This is for the risk domain.
  - Chris: For smart contracts, I think we, in all cases, just need to do the normal token assessment of what's going to go in for the RWA. Matt, I think I had reached out and sort of mentioned something about that earlier, but then we're just going to start trying to push it through the onboarding process. We'll build the sort of deployment spells and whatnot that we need to push RWA, and while we're doing that, I'm sure we'll find certain complications or other things that we need to work on. Still, I think it's going to be an ongoing process, so I would say that's our baseline. We'll be working on RWA while we're also doing these sort of easier ERC-20s.
  - Matthew Rabinowitz: Thank you.

### Amy Jung

#### Community Development + Operational Support Update

[39:28](https://youtu.be/0v3E_kpLxFg?t=2368)

- I'll be pretty short here to save everyone some time. I did [submit the operational support domain for formal submission](https://forum.makerdao.com/t/mip28-operational-support-domain-definition/4627/2), so both the domain itself, a MIP for the domain, and then the sub proposal proposing myself as an operational support facilitator.
- I'm also working on submitting a budget MIP soon. I do hope in two weeks we will be launching our grants platform, which would allow applications to be a little bit more visible to everyone. Also, in my presentation, I'll give a little bit more about what the process is and all a lot of the data that we've collected on how we award and distribute those grants.

### Juan

#### Collateral Call Update

[40:36](https://youtu.be/0v3E_kpLxFg?t=2436)

![](https://i.imgur.com/cL807eK.png)

- Yeah, just a quick update from my side. Yesterday, we had two calls. The first one was ConsolFreight with Alejandro and Ernest. There were also people from the Centrifuge team; SebVentures was there. It was quite interesting.

![](https://i.imgur.com/cYVAve6.png)

- After that, we had the Curve Finance team with Michael, Angel, Charlie, and Julian joining us. It was a very interesting call. Actually, Julian tweeted to get the CRV token passed as he saw that participation was relatively low, at around 3%. I don't know if that helped with the poll or not. We discussed which other liquidity tokens could be brought to the maker ecosystem.

![](https://i.imgur.com/A9YCRw9.png)

- Just a quick reminder if you're good at any of these topics as well as risk or data analytics, speak with Primoz. For oracles or anything backend-related, speak with Nick. Chris Mooney for smart contracts. For any full-stack developer or comms, speak to Tim and Amy. Governance is LongForWisdom, and for note transcriptions, speak with David.

![](https://i.imgur.com/tmM8AdO.png)

- The application for the Kleros Maker Foundation fellowship is still open, so there's still time to apply. [There's a forum link](https://blog.kleros.io/kleros-maker-fellow-on-decentralized-finance/) with more information.

![](https://i.imgur.com/3L17RAW.png)

- And finally, we created a small makerDAO contributor POAP. I didn't put in the slide that it was for Q3. We are also going to be doing another one for Q4. It's a shiny NFT for your Ethereum wallet with the people from the POAP protocol, as Amy announced, I think, last week. So yeah [fill out the google form](https://docs.google.com/forms/d/1zrhmjJKWyVwIXwwzeESpjC82ReYPXW_qj4DFvnaUzPg/viewform?edit_requested=true) either on the link or the QR code, and we'll make sure that it's in your wallet soon.

![](https://i.imgur.com/LTUisOf.png)

### Charles St. Louis

#### MIPs Update

[43:31](https://youtu.be/0v3E_kpLxFg?t=2611)

![](https://i.imgur.com/DJdXnwa.png)

![](https://i.imgur.com/MeSGTK2.png)

- So if anyone wants go check these out then go check out these proposals if you haven't already. [MIP 14](https://forum.makerdao.com/t/mip14-protocol-dai-transfer-update/3844), [MIP 20](https://forum.makerdao.com/t/mip20-target-price-adjustment-module-vox/3196), [MIP 21](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917), [MIP 22](https://forum.makerdao.com/t/mip22-centrifuge-direct-liquidation-module/3930), [MIP 23](https://forum.makerdao.com/t/mip23-domain-structure-and-roles/4021).

![](https://i.imgur.com/vPODG9T.png)

![](https://i.imgur.com/teiqlXJ.png)

- I still have yet to get in contact with Planet-X about his intention to potentially submit the MIP17 weekly actual debt ceiling adjustments, and Derek for the Governance Contact Redesign and the Debt Ceiling Instant Access Module.
- Lastly, we've got the emergency Response. DavidUtro is taking over from John. He does also plan to submit that to November's governance cycle. I believe the final changes have already been incorporated if you want to check that out.
  - David: A quick note on MIP24; it actually replaces MIP5.
  - Charles: Yes, so that is the emergency proposal defining the way to put up last-minute votes as well as emergency offboarding of governance facilitators if they were to act maliciously. And, David, if you want to talk more about the details of that, feel free to do that when I conclude this segment.

![](https://i.imgur.com/E46vuEH.png)

- The collateral prioritization framework has been made public if someone could share that [link](https://docs.google.com/spreadsheets/d/1IX9e2fyfz7djtDMKn5gMyGsyFxHoY75GncMbAjnSXrM/edit?usp=sharing) in the chat. I know Juan also mentioned it. It was published last week, so maybe people have already seen it, but that will be an excellent tool for the domain teams to help assess and prioritize all the collateral applications that have come through the cloud onboarding process and help inform their decisions what to work on next.

![](https://i.imgur.com/baxH8uP.png)

## Procedural

### LongForWisdom

#### October Governance Cycle Review

[49:24](https://youtu.be/0v3E_kpLxFg?t=2964)

- All right, so I'm gonna do a really brief government cycle review, so as Charles said, we passed, I think, five MIPs, and three sub-proposals. These are all reasonably hefty MIPs with a lot of implications. We've had protocol DAI transfer, which is the first time we've set up a process to transfer DAI out of the protocol to someone for some service. We approved MIP20, which, once smart contract work has been done, would allow us to enable negative rates on DAI; not that we necessarily would, but we would have that option. There are the real-world assets MIPs, and there's some structural stuff as well. I see a lot of heavy things. If anyone has thoughts about how the cycle's gone, I think the forum is probably better at the stage as it's a really short time. I know Charles does a MIPs update post. If anyone has kind of pressing thoughts or comments they want to make, I would suggest putting them on that post.

## Other Presentations and Updates

### Hugh Karp

#### Nexus Mutual Insurance

[Thread: MakerDAO Protocol Cover using Nexus Mutual](https://forum.makerdao.com/t/makerdao-protocol-cover-using-nexus-mutual/4761)

[50:45](https://youtu.be/0v3E_kpLxFg?t=3045)

![](https://i.imgur.com/2p8kxyj.png)

- Thanks to everyone. It's good to be here. I'm Hugh Karp, and I'm the founder of Nexus Mutual. I suggested a potential coverage for MakerDAO as a protocol, so It's basically building a tailored policy for MakerDAO and Nexus. The main objective is to address the potential for MKR's pro-cyclical issue when it comes to bad debt. Basically, you have this issue where MKR is burned at high prices when you're accruing fees. Then if there's an event, usually the price may drop. Then you mint more MKR at that low price to pay off the bad debt. So we're aware that Nexus could, in the future, cover a larger section or a more massive chunk of potential bad debts that might accrue to the protocol. Still, Maker is currently bigger than Nexus at the moment. So there are limits that Nexus has, so the primary use would be for a dampening of MKR's pro-cyclical nature. The idea is that if you look over a cycle of paying costs in terms of the cover versus the claims that you get back, assuming that that's negative EV over the life cycle, there's still a significant positive benefit from the actual value of MKR that's net, burned or minted. I can go through that.

![](https://i.imgur.com/MUzyj5q.png)

- So, the proposal in summary and all of this stuff can be tweaked. Something to put out there is that you could buy tranches of cover on Nexus, say three million DAI worth. If bad debt was to exceed five million DAI, then one trench would claim as paid. And, at 10 million, then you paid two trenches, so six million in total, and so up to sixty percent of the bad debt is covered. I think it's essential that not all of the bad debt is covered because we still want alignment of interest between Maker's risk management. So I think that that's important, but this is really a potential dampening mechanism. Regarding limits and pricing and stuff like that, the total maximum cover right now on Nexus would be about 12 million DAI. It'll grow as Nexus grows, so you could, for example, purchase four-three million tranches. The minimum pricing actually got dropped last week to 2.6% per annum. The actual price is determined by staking the number of people that want to back it, so it is kind of unknown at this point, but that gives you a range of what the pricing might be if this was to proceed. In general, if there's a known decent amount of demand, I would expect a substantial amount of taking on Nexus. That's what we've seen in the past, so there's obviously a bit of a range. It depends on the staking, but it kind of gives you a flavor for where it might end up.

![](https://i.imgur.com/2GwOHu2.png)

- To give you an example of what could happen using Black Thursday as an example, apologies, but I didn't quite get the numbers right I've tried to get the right ones. I believe there's about 5.3 million of bad debt accrued, resulting in nearly 21,000 MKR being minted. If you had the protocol cover, you would have avoided minting something close to 12,000 MKR. Essentially you pay that at the MKR price pre-event, which is the higher price rather than, the lower price, then you still save, in terms of MKR, minting over the whole cycle. So that's it. I wanted to keep it short. That's the main proposal.

![](https://i.imgur.com/Uk9T7EO.png)

- In terms of other key questions that other people have asked, claims assessment, how claims assessments are done because that's a pretty important one. The Nexus Mutual members vote on claims, and I guess one of the key things is why they would approve to pay a claim, and that's the fundamental thing we're doing at Nexus. All of the incentive mechanisms are designed to ensure that legitimate claims are paid. I won't go into massive detail about all of that right now. Still, you can definitely look it up, and there are two layers to the incentive structure to pay genuine claims. It's probably more of a corporate financial type decision here rather than ensuring tail risk or something like that because it's a bit different right now given Nexus's size versus Maker's size. However, I still think there's potentially a lot of value here in it because the pro-cyclical nature of MKR has, I guess, been discussed quite a few times in the past. So yeah, I might just stop there, and if anyone has any questions, I'm more than happy to answer them.

#### Discussion

[57:30](https://youtu.be/0v3E_kpLxFg?t=3450)

- LongForWisdom: I would say that when I initially read this, I kind of didn't understand the benefits before I kind of understood the effect as in the kind of cyclic nature of implementing and burning, so I thought that was so once again I realized how it would help, I thought that was good, I know a couple of you in the forum were quite positive and others were quite negative. If any are here and would like to comment, I'd appreciate it.
- Frank Cruz: So Hugh, I guess the downside is that Nexus Mutual doesn't survive the next 5 or 10 years or even less? Suppose Nexus Mutual governance doesn't approve the payout. What would be the difference between just going out to Barclays and getting insurance from them instead of Nexus Mutual, in your opinion?
  - Karp: I think the first one is you'd struggle to get any cover just because it's so tailored, and they don't understand the details right now. The second one is the payment could be made on-chain directly into the right contract. Still, then that would directly avoid the minting of MKR. Hence, there's a direct level of integration there that can provide a significant benefit in terms of voting for actual auctions taking place. Honestly, I think you'd spend 6 months going around various insurance brokers and not really getting anywhere because this isn't a standard product at all.
  - Frank Cruz: Got it. I guess you're saying that for someone like Lloyds to cover one of these protocols is way out there, maybe in the future but not now.
  - Hugh Karp: Yeah, exactly, and they give you cover in US Dollars, and then you'd somehow have to get the claim payment into the protocol. There are quite a lot of details behind it. Even if they were to come up with something like this, they're quite risk-averse. The regular insurance industry is very risk-averse on this stuff right now. They just don't understand it. Anyway, long story short, I don't think it would be worth while.
- LongForWisdom: You mentioned something that gave me a thought. Usually, the way that the protocol works in bad debt is that 'flop' payment is triggered in a fixed amount of time after the bad debt happens. I think it may be a week, So I question how quickly would Nexus Mutual governance kind of approve or deny payment. It would need to happen before that time would expire.
  - Karp: Exactly, so 36 hours minimum payment should be finalized within 72 hours. It could go a bit longer than that, so it's not absolutely guaranteed to get under your kind of week, but in nearly all circumstances, it would.
  - LongForWisdom: Ok, thanks.
- Kordez: Are those prices fixed & static, or If you fixed the long portfolio of MKR, would the pricing change, or is it fixed for a determined time?
  - Karp: The pricing is fixed for whatever covered period you purchased, and then let's say you bought cover for a year that would be a fixed price, and then let's say that expired and you wanted to renew it and over time have different risk parameters than Nexus mutual stakers may have a different opinion and the renewal rate may be higher or lower depending on the staking at that point, but it's a fixed rate and doesn't vary.
  - Kordez: Ok, Thanks. How do you manage that the capital is locked inside Nexus, I read something about it but could you just explain?
  - Karp: Yes, we have this concept called the MCR, which is our minimum capital requirement, which is required to back the covers that we've written. No one can take the funds out of Nexus unless we have funds above our MCR. It's not absolutely guaranteed because insurance companies aim to be undercollateralized to diversify risk. We don't always have more money than potential liabilities, but the whole point is that we have a certain amount of money that has a very high likelihood of paying all legitimate claims.
  - Kordez: Ok, thanks, and who calculates those MCR parameters?
  - Karp: It's kind-of done with a flat factor based on the cover outstanding, and then we run a more complicated model off-chain.
  - Kordez: Ok, Thanks.
  - Karp: This is tailored to cover bad debt accruing in the protocol, so it's a bit different from our standard product that we just offer right now.
- LongForWisdom: So I guess you're saying that it would cover bad debt regardless(of the source.
  - Karp: Yes, it is debt regardless of how it perpetuates.
- LongForWisdom: Any other questions before we move on? Thank you so much for coming and doing the presentation.

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[01:06:15](https://youtu.be/0v3E_kpLxFg?t=3975)

- For the last week, we've been sitting at \$1.01 for DAI. There's been some movement in ETH price, so there's been some fluctuation as well. That did coincide with the sudden drop in ETH price. Around the 26th, we saw a bit of a spike and some increased volume, nothing too significant. It's still holding pretty steady. The interceding volumes between the 24th and 26th were very light, so there wasn't much movement.

![](https://i.imgur.com/lof6sw1.png)

- You could see here the trades that have been executed are centered around \$1.009. A majority of that volume being on Uniswap, which is the latest steady equilibrium point, is to have most of that volume being on Uniswap.

![](https://i.imgur.com/iFH6M7d.png)

- If we look at the DAI-USDC pair, we see here between Swerve, Curve, and DYDX that curve accounts for most of the DAI-USDC trading volume. In the last week or so, we've seen that price centered around \$1.01 with a bit of a dip and with a bit of a spike around the 22nd, 26th, and 27th. Then we saw a bit of a dip around the 24th when the trading volumes were a bit lighter.
- DAI-USDT is looking very similar to DAI-USDC. Now we're sitting at around 937 million total DAI, 337 million of that is from ETH and the other 600 million is from other assets. Obviously, a huge chunk of that is in Compound-about 290 million in terms of the amount that's not locked up in the DSR at the end of the day. Although that's a little bit of an irrelevant statistic because it's not really out of circulation in the same way.

![](https://i.imgur.com/PWvrIzb.png)

- Uniswap v2 pool is at the top of the list, followed by BarnBridge, Curve and Binance. The majority of the largest positions are in staking protocols or other yield farming, which is expected. We can sort of inspect the positions for some of these larger vaults. If we look at USDC-A, Roughly 360 million is below 101% collateralized, an additional million of that is below 100% collateralized, but the largest chunk is between 101 and 100% collateralized. Pretty much the entirety of the USDC pool is some fraction of 100% collateralized.
- The 3 or 4 largest positions are all 100.6 collateralized. These positions will be below 100% collateralization in, say, December. That's basically the continuing growth of these debt positions with the stability fee they currently have and the rate at which that fee will accrue. If you look at the last updated dates for these vaults, they, by and large, haven't been touched in a month, and then that's true for the vast majority of stable coin vaults.

![](https://i.imgur.com/gz0e621.png)

- Some haven't been touched in the last 20 days or so, even that is few and far between. You could see the curve here where these prices above \$1 are irrelevant because you're already there. It's basically a question of how much of this debt is ahead of this line or below this line.
- If we look at some of the other positions, BAT, for example, the largest position is ~2.5 million DAI in debt, and the next one is 600 thousand. Those are, respectably, 240 and under 98% collateralized, which is pretty decent collateralization. That has a projected liquidation wall around .12 for 3.2 million DAI. We now look at ETH, which is another large position. We got a big liquidation wall at ETH price of \$318, so that's about 90 million Dai that we liquidated. You can see that basically, a massive chunk of this debt position is 180% collateralized, and that's about 85 million.

![](https://i.imgur.com/BvF3h9W.png)

- If you look at some of the larger positions, you'll see that the largest 2 vaults are 280-380% collateralized, which is very solid. Still, they only account for between the two of them approximately 60 million of the overall DAI portfolio. It's interesting that, in this case, looking at a couple of the largest positions isn't necessarily representative of the majority of the risk profile for the ETH vaults.
- The ETH vaults have been updated quite a bit more regularly. It appears that ETH vault users keep up with their collateral a bit more than stablecoin vault users, which is pretty well expected.

![](https://i.imgur.com/h15MBwk.png)

- If we look at the LINK vaults, we'll see one large vault with 4.2 million Dai debt 300% collateralized. Again, depending on your expectation of market volatility, that's a comparatively larger buffer. At a price of 6.5, you'd have 4.5 million DAI being liquidated.

#### Conclusion

[1:18:11](https://youtu.be/0v3E_kpLxFg?t=4691)

- LongForWisdom: I think we'll finish up. It's reasonably late, so any final questions or general reminders anyone wants to make? Nothing? Ok, alright, I guess we'll stop there. Thank you, everyone, for coming, we'll have another one of these next weeks, and I'm sure I'll see you all, thank you, Hugh.

#### Links from Chat

- [Flash Loans Discussion](https://forum.makerdao.com/t/urgent-flash-loans-and-securing-the-maker-protocol/4901)
- [Collateral Onboarding Updates Channel](https://chat.makerdao.com/channel/collateral-onboarding-updates-ext)
- [MIP6 Application](https://forum.makerdao.com/t/cf-drop-mip6-application-consolfreight-drop-tokenized-freight-shipping-invoices/2214)
- [Community RWA Onboarding Calls](https://www.youtube.com/watch?v=gr2irePbjVI)
- [Collateral Framework Priority Sheet](https://docs.google.com/spreadsheets/d/1IX9e2fyfz7djtDMKn5gMyGsyFxHoY75GncMbAjnSXrM/edit?usp=sharing)
- [MakerDAO using Nexus Mutual](https://forum.makerdao.com/t/makerdao-protocol-cover-using-nexus-mutual/4761)

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

`LR`: Liquidation Ratio

`RP`: Risk Premium

`RWA`: Real-World Asset

## Credits

- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Jose Ferrari produced this summary.
- Dennis Mitchell produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
