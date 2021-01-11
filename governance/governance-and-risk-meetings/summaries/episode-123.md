# Episode 123: January 07, 2021

## Agenda

- [00:00](https://www.youtube.com/watch?v=Zd4aNUB2P8I): Introduction
- [02:38](https://youtu.be/Zd4aNUB2P8I?t=158): Governance Update
- [10:02](https://youtu.be/Zd4aNUB2P8I?t=602): Smart Contracts Team Update
- [17:29](https://youtu.be/Zd4aNUB2P8I?t=1049): Oracles Team Update
- [26:25](https://youtu.be/Zd4aNUB2P8I?t=1585): Risk Team Update
- [33:27](https://youtu.be/Zd4aNUB2P8I?t=2007): Community Development + Operational Support Update
- [39:02](https://youtu.be/Zd4aNUB2P8I?t=2342): Collateral Calls Update
- [41:34](https://youtu.be/Zd4aNUB2P8I?t=2494): MIPs Update
- [50:00](https://youtu.be/Zd4aNUB2P8I?t=3031): January MIPs Submission Review
- [51:30](https://youtu.be/Zd4aNUB2P8I?t=3090): PSM usage update
- [55:25](https://youtu.be/Zd4aNUB2P8I?t=3325): Open Discussion
- [01:20:00](https://youtu.be/Zd4aNUB2P8I?t=4800): Risk in a bull market

## Video

<https://www.youtube.com/watch?v=Zd4aNUB2P8I>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://www.youtube.com/watch?v=Zd4aNUB2P8I)

- Hello, everybody, and welcome to the MakerDAO Scientific Governance and Risk meeting number 123, taking place on Thursday, January 7th at 17:00 UTC. This is the first meeting of the year. I hope everyone enjoyed themselves in their time off. My name is LongForWisdom. I am the governance facilitator for MakerDAO, and I will be moderating this meeting. We have got an agenda as usual, which I will go through briefly before we begin. We have got a few new people around, so feel free to interrupt or comment if you have things to say. We love to hear from everyone; if it becomes a problem, someone will let you know. Please do err on the side of speaking if you have anything to say.
- We've got weekly updates from the main domains and groups'. We've got the MIPs submission review. We've got segments that a  couple of people are talking about. We're going to have Primoz talking about risk and the bull markets. Nick's going to bring up concerns regarding `flap` auctions and the surplus buffer. I'm hoping Sam or Hexonauts will give us an update on the PSM usage. To start with, though, I think we'll dive into Governance.
- I'll give a brief update on the stuff that's already happened this week. On Monday, we saw that the ETH-A debt ceiling got hit along with the USDC-A debt ceiling. As a result, Sam and Seb worked on an executive vote and proposal to increase the ceilings to avoid delaying too much. This went up on Monday and has passed, which is good. We saw the ceilings updates earlier this morning.
- We usually have me going through Governance at a Glance. Today, however, we're going to have a Prose11 go through it, and possibly in the future as well. Prose11 is a new member. I'm assuming most people have seen him around, but if not, Prose11 feel free to introduce yourself and kick it off.
    - Prose11: Thanks for letting me do this. I'm Prose11, both on the forums and RocketChat. I am a new member but diving into and loving the Maker community. Let's walk through Governance at a Glance.
    - Prose11: A three-point summary for the MKR holders is that PSM is live, and we did see some pretty big activity using it this week. That did result in some DAI price fluctuations. We're still looking at the peg between $0.997 and $1.09. I expect as we expand, it will be looking even better. Meanwhile, DAI supply hit a new all-time high. When I wrote it, it was at 1.34 billion; now it's even higher, so people are using the extra room in the ETH vaults there for sure. Also, MKR mooned this week, which was exciting—peaking well past $1,000. I think it peaked at around $1,250. Pretty exciting for those MKR holders out there.
Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Prose11

#### Governance at a Glance

[02:38](https://youtu.be/Zd4aNUB2P8I?t=158)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-2021-01-07/5959)
If you can read over and vote in active threads, that would be much appreciated.

##### Discussions

- [2021 mission and objectives](https://forum.makerdao.com/t/brainstorm-2021-mission-and-objectives/5809)
    - SebVentures builds off the prior brainstorming post and asks community members to vote on where they think MakerDAO should be focused.
    - Prose11: SebVentures posted a poll about the mission or the vision of MakerDAO, following up on a brainstorming post he had made earlier when asking the community to weigh in on where they think we should be focused for 2021.
- [Maker Stability Module, inspired by Aave and Synthetix](https://forum.makerdao.com/t/maker-stability-module-inspired-by-aave-and-synthetix/5912)
    - Ratchet5000 details a new idea for generating yield for MKR holders by allowing them to stake MKR on the Maker Platform.
    - Prose11: We have a cool post about the Maker Stability Module. This is an idea allowing for more yield to MKR holders through the Maker platform.
- [USDT has always been shady, but now they might be closer to a collapse than anytime before, yet it was added as collateral?](https://forum.makerdao.com/t/usdt-has-been-always-shady-but-now-they-might-be-closer-to-a-collaps-than-anytime-before-yet-it-was-added-as-collaterial/5911)
    - BlueCat points to a regulatory requirement upcoming next week for USDT and questions its safety as a collateral type.
    - Prose11: We have a post about USDT and some regulatory hurdles they'll be facing next week via BlueCat. Check that out if you haven't.
- [Road to the PSM](https://forum.makerdao.com/t/road-to-the-psm/5353)
    - Hexonaut's post on the PSM heats back up thanks to implementation and the recent rising of the DC.
    - Prose11: Hexonaut's post on the Road to PSM has seen some increased traffic now that we've implemented it and went through our first DC raise. He will update us during this call.

##### Signal Requests

- [Adjust the Surplus Buffer](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer/5767)\
    - Ultraschuppi proposes different ways to increase Surplus Buffer.
    - Prose11: We have an adjust the surplus buffer signal request. We are currently sitting at 4 million, and asking whether we would like to raise that.
- [Adjust ETH-B line (IAM-Ceiling)](https://forum.makerdao.com/t/signal-request-adjust-eth-b-line-iam-ceiling/5731)
    - Ultraschuppi puts forward some options for expanding the IAM Ceiling on ETH-B.
    - Prose11: Next, we've got a signal, again, from Ultraschuppi with the ETH-B line. We are looking at that IAM-Ceiling. That's the one we can adjust ourselves, setting the highest level and seeing if we'd like to raise that since ETH-B is maxed out again.
- [Manage TUSD exposure due to ownership change](https://forum.makerdao.com/t/signal-request-manage-tusd-exposure-due-to-ownership-change/5821)
    - SebVentures signals different options for dealing with the protocol's TUSD exposure after an extensive discussion in the forums.
    - Prose11: SebVentures also brought us a signal request on managing TUSD exposure. I had a lot of talk about that with them changing hands in the forum and what we'd like our response to be. Give your opinion there if you haven't already.
- [Adjust UNIV2DAIETH-A Debt Ceiling](https://forum.makerdao.com/t/signal-requst-adjust-univ2daieth-a-debt-ceiling/5814)
    - ultraschuppi proposes an increase to the UNIV2DAIETH-A Debt Ceiling.
    - Prose11: This is the final request regards adjusting the DAI-ETH liquidity token vault. We've already hit the DC there, so this signal request is seeing if we'd like to raise it.
- Prose11: As I said, I would like to give it to hexonaut to explain his signal request for the interim DAO operating budget. It's new and exciting and just went live yesterday.
    - SamM: Thanks, Prose11. Basically, for those who don't know, we've been building out the Autonomous MakerDAO operation to move away from the Foundation as the sole provider for building stuff and operating the Maker protocol. For the most part, the Foundation has been covering this through the grants program, but there are increased costs associated with things that the Foundation can't be involved with. Specifically, the PSM is the primary example of that. We've been racking up costs that need to be covered. That, along with the fact that we need to move toward the DAO itself funding things in general. We figured that the next step for that is to get an initial budget. We're proposing 100,000 DAI as an initial budget to go into a multi-sig wallet controlled by all the mandated facilitators. The signal request will be up for two weeks, and the plan is to put that to a governance vote at the beginning of February because, at that time, we will know who all the facilitators are. There are currently three going through the monthly governance cycle. This will go forward if we can get at least three facilitators signed on and then slowly move away from the Foundation.
    - LongForWisdom: To clarify one thing there, Sam. Typically, the keyholders would be those mandated actors in the Foundation, correct?
    - SamM: Yes, it's everybody I listed in the thread. It's not all facilitators, but it's the ones in the thread; you can read it for yourself.
- Prose11: Awesome. Very cool. This is my first time doing the Governance at a Glance, so go to the forums if you have any feedback, comments, or ideas. That's pretty much it from my end. Thanks for letting me do the shout outs.
- LongForWisdom: Yes, thank you very much, Prose. That was awesome. There was one last thing I wanted to say concerning the Governance front, which is that there's probably going to be several polls on Monday. I think, possibly nine or ten. Look out for those next Monday. Specifically, a couple of signals, inclusion polls for January, and a couple of others with oracle stuff as well. All right, I think that covers Governance for the time being.

### Christopher Mooney

#### Smart Contracts Team Update

[10:02](https://youtu.be/Zd4aNUB2P8I?t=602)

- Happy New Year, everybody, also welcome, Prose. That's great. It brings a tear to my eye to watch the DAO growing up, starting to stand on its own. It's a very, very exciting time. Usually, I go over last week's stuff, but I guess I'll go over last year's things.
- In December, on the 18th, we passed the UNI V2 DAI-F and AAVE collateral type. We adjusted some rates. We also whitelisted Gnosis in general into the oracles. Then the community passed the PSM for USDCA on the 20th. Or at least that's when the executive went live. We did DC changes for ETH-A, USDCA, and the PSM USDCA on the fourth of this week.
- As for everything else, there are pretty much no other reports from last year. I think we're just going to talk about where we're headed. Hopefully, in the coming week, we should get MIP21 in Kovan, either this Friday or early next week, depending on how things go. For those of you that need a refresher, that's the real-world assets for 6S. We should be expecting that next Friday. That's exciting because that'll be the first Real World Asset use case on the platform.
- We're still looking at the Dss.exec lib changes. We're hoping to make those updates before getting ramped up on collateral onboarding because it'll radically simplify collateral onboarding. We have some domain teamwork that still needs to be reviewed. MIP14, which is the DAI protocol transfer, should probably get on that one pretty soon to make sure it stable since it sounds like you guys might be using that to fund some action. Then MIP17, MIP25, and MIP30 still need updates. Actually, sorry, MIP17 was the debt ceiling. I think we're okay because we went with the DC instant access module. So really, we need to look at the flash mint and the Farmable cUSD adapter, the CropJoin.
- The end of last year was aggressive; a lot of people got pretty burnt out. And over the tail end of last year, our community lost some smart contract engineers and the Foundation because of various other market opportunities. We were hoping to pace ourselves a little bit better; we're down to bare bones on expertise for the system. **Therefore we're hoping that we could rate limit until we get some more people trained up to around four collateral additions a month and one MIP a month. We're hoping to take one of those weeks and make it a community week. That would be any time changes that might need to be made to the PSM; Any changes at all. We would slide anything the Foundation can't touch into that week. And also, the community would run its executive.** Meanwhile, we'd be able to work a little bit more on that tooling and trying to get stuff a little bit more efficient. That's our hope and expectation for this coming year until we can ramp up on more people.
- There was a discussion yesterday as the MKR price was going up. Long was thinking should we have our eyes on governance attacks? And that got me thinking about precisely what governance attack to do. And we have a governance attack vector that would not be great. Specifically, anyone that took control of Governance right now could instantaneously turn on liquidations for stablecoins, and we think that there's no need to do that. We don't need to have those things instantaneously accessible. We know that stablecoins don't have liquidations on; we don't plan on turning them on. There's very little reason to have them come on in a hot emergency. **I think that what we should do is remove all of the stablecoin vaults from the instant access module to turn liquidations on and off.** And if we do that, that'll reduce the attack surface of governance attack. I'll try and make a forum post about that to throw it out there. But I think you could expect that in the coming weeks executive. We'll likely do that then.
- With regards to the PSM, I just wanted to make a general comment. I think Sam is working on a UI for the PSM to make it more accessible to everybody. But, if the PSM were under the Foundation's control, we would still have a product manager pushing this forward. Because really, what's happened is we've added the PSM, and it's at the database layer. It needs documentation so that people know how to integrate with it. It requires a UI so that it's more accessible to people. If we were to end up doing this, the community should think about not just the fact that we got the PSM out there, but think about the chain of everything that still needs to happen. Other stablecoins would need to be added to it. And the old stablecoins would probably need to be liquidated into it. There's still a lot of work there. I'm very proud that the community was able to have that autonomy and do their own thing. But remember, there's still a lot of work to do. And so, if anyone wants to take the lead on pushing that forward, I'm just giving you some general ideas of how we would have done it in the Foundation if we were in control of something like that.
- Finally, I think we could probably talk about this later because you guys will bring it up. I think Nick was going to speak about `flap` auctions and whatnot. But I've got a couple of comments to make on the `flap` auctions risk and the `flip` auctions. I'm going to defer, and we'll do the other domain updates. And I'll come back to this when we're talking about those topics.

### Nik Kunkel

#### Oracle Team Update

[17:29](https://youtu.be/Zd4aNUB2P8I?t=1049)

- At the tail end of last year, we onboarded the DAI-ETH Uniswap LP token. We had set the three million debt ceiling fairly conservatively because we were not entirely confident in the contracts' security because it was brand new. The debt ceiling for that got filled up extremely quickly. That validated our thesis that there is a lot of demand for leveraging up on LP yields. Given that we've proven that LP tokens should be a core focus of collateral onboarding going forward. And there is a lot of potential for stability fee generation there. Especially the risk front as well. It means that you can have LP pairs against stablecoins, which are less volatile than ETH. That means that they're almost by definition less risky than ETH from a price perspective. It also means that the system doesn't have to hold all those stablecoins as well. We hold them through Uniswap, so the blacklisting risk is a little bit lower there, as well.
- There was also a forum post over the holidays saying the debt ceiling's full. Let's raise the debt ceiling. I disagree with that. But not for the reason you'd think. I think the fact that we've gotten through the holidays unscathed on that Oracle is a sign that we can increase our confidence slightly, but it's not a ringing endorsement. Therefore we need to get a formal audit from a reputable auditing firm. Not something like QuantStamp. Something really good like a Trail of Bits, an EY, a PwC or a DappHub, or something. Until we have that, I don't feel comfortable starting to raise the debt ceilings by large amounts. It looks like there was one option to raise the debt ceiling of DAI-ETH to 10 million. That seemed to be the polling option that was getting the most traction, or maybe it was 12. I think it was 10. But instead, what I want to suggest is that we optimize for this medium-term picture where as soon as we get the audit back, and everything checks out. We can crank up the dial on these. What we don't want to be is in a position where, after we got the audit back, we need to go and onboard all these LP tokens. It would be great to keep the debt ceilings depressed for now, but just start onboarding more LP tokens. When the audits come back, we just crank up the dial while being in a great spot.
- That being said, there's already a polling vote that passed to onboard USDC-ETH. That will be coming up in an executive on the 22nd. And in the interim, there will also be a polling vote for WBTC-ETH. Therefore, potentially, we could be onboarding both LP tokens on the executive on the 22nd. Those would be the three largest Uniswap token pools from the last time I checked.
- Where do we go from here? Well, we get Sushiswap LP tokens for free. And I don't know if you guys have been keeping track, but the liquidity in Sushiswap is starting to get enormous. Also, since SushiSwap and Uniswap are just the same contracts, we get those for free without making any changes. Therefore we can start looking at Sushiswap LP tokens. We can start looking at The Curve LP tokens. We can start looking at Balancer LP tokens, maybe even 1INCH ones, if they start keeping serious volume after their 1INCH farming stuff expires. That's on the LP token side. That looks like everything is trending in the right direction, as we expected. That's good.
- In terms of governance updates, we have ten whitelisting proposals that will go up next week. There are five for Gnosis and five for SetProtocol. Those are both feeds in our Oracle network, and they're dogfooding practice what you preach. That's good to see.
    - LongForWisdom: A quick governance note on that. We're probably going to bundle those polls. The Oracle whitelisting proposals for Gnosis and SetProtocol, just because I don't think there's going to be a lot of contention around them. I think it can make some sense to whitelist the groups together, whitelist the Gnosis ones and whitelist the SetProtocol ones. We're going to do that, and hopefully, no one's going to complain.
    - Nick: There are also 17 pending Oracle whitelisting proposals from DYDX for basically creating Starkware L2 Oracle's for them for their upcoming release. If you add those two together, that's 27 total pending Oracle requests. I think we're finally starting to hit our stride with respect to Oracle's as a business that the DAO owns and can earn revenue from in the future. So I think that's all exciting.
    - BrianMcMiachel: If I can jump in here real quick. I did come on to the forums and pumped the brakes myself a little bit on the LP Oracle debt ceiling raise. I just want to mention that we did some additional testing on the smart contract side this week, and a lot of our concerns are assuaged. But I do want to second Nick's desire for an audit there. But as far as adding new tokens. Let's go ahead and do that. The other thing is, I think somebody else will probably mention our current surplus buffer. If we were to raise that surplus buffer, I don't think we would have a problem necessarily raising the debt ceiling on the LP tokens to be just short of that. I think that's our limiter at 3 million right now. We've got a 4 million DAI surplus buffer. Raising the one would allow us to more comfortably raise the other. I am just throwing that out there.
    - LongForWisdom: Yeah, thank you, Brian, and Nick. And, Nick, can I ask if there's been any progress with the Centrifuge Oracle report?
    - Nick: I just started it this week. I've been very clear that we were swamped up to the tail end of last year and that it would be my priority coming back. So I've been working on that and should be out probably before the end of next week.

### Primoz Kordez

#### Risk Team Update

[26:25](https://youtu.be/Zd4aNUB2P8I?t=1585)

- Regarding collateral evaluations in the last few weeks, our two externals analysts finished tBTC evaluations during the holidays. It actually may happen that this may be the first collateral that we red light to onboarding it. I won't go into full details now about the reason, but there are all sorts of liquidity problems and an outstanding tBTC. The evaluations show that we would like to probably onboard it with less than a 1 million debt ceiling. We said we might evaluate it later when metrics approve and onboard it afterward. This evaluation should be online soon.
- We promised another one is the cUSDC CropJoin, so MIP30 so the risk assessment when we came to a point to study the risk parameters or propose them. Compound recently released this new patch. This patch lets Governance more actively decide how comp rewards would be distributed for particular markets. This makes our job a bit harder because when we decide on stability fees for cUSD, this would typically be a function of farming yield. Still, because of this implementation, the compound farming yield could be adjusted by the Governance easily. It would need to react by potentially setting a different stability fee. So that is why we are still figuring out how this would work in practice. Is there any hidden risk, and we will release details about it in the report?
- Monet-supply from our team should make a signal request thread soon about potentially increasing `dust` amount again. The recent increase in ETH price increased gas prices significantly, and this presents a problem, of course, during collateral events when people want the leverage and the costs are too high. There's an additional problem if you have liquidations. There may not be bidding on small vaults. The current value is 500 DAI, but yes, unfortunately, we may need to increase it. Stay tuned for this signal, and please vote.
- Another thing that our new member Andy has been working on is refreshing our Maker portfolio value at risk(VaR) model. We haven't updated that one for some time, but that was mostly because we were more focused on measuring expected loss for individual vaults. This helps us define risk premium and which we later use in the rate setting group. Now, when maker debt exposure is growing fast, we may want to have a clearer picture of the overall Maker portfolio's tail losses. In other words, we want to measure portfolio evaluated risk correctly, which means we need to include correlation metrics and to measure worse case events and so on. I think this is great is because it should also help us more appropriately define surplus buffer or help us mitigate risk in different ways if we see that our exposure is becoming too risky. I think Andy will show us some numbers soon. This will also be beneficial, especially now because we have this surplus buffer topic and, you know, talking about risk mitigation during this bull run.
- Lastly, yesterday rates group released the rates proposal, so please check that report and provide feedback. Just a short sum-up of the report, we're proposing a great increase for both ETH vaults and a slight decrease for BTC vaults. A few rate decreases for vaults where either liquidity metrics improved or depth exposure decreased. The decision is mostly based on a competitive market environment. We also consider risk metrics and the recently increased usage of ETH vaults then we have a real-world side of risk, and I'll let Sebastian update it here. Before that, if anybody has any questions, please ask.
- Sebastien Derivaux: I'll take it from here. From the real world assets side, we made some due diligence progress on New Silver and ConsolFreight, checking that the legal documents are similar to what we have discussed with both asset originators. We still don't have a legal team on Maker, so we check the document, not lawyers. Maybe Marvin will be able to help with that. I will have to check with Amy. For 6S, we are waiting on the contract. I'm quite sure Matthew is quite busy setting up the infrastructure in the real world. We are already working on some new collaterals or at least doing the first pass on new collaterals, which our discussion community called yesterday. Lastly, we are working on some documentation to make some concepts easier to understand. Sometimes, it was a bit experimental. If you have any questions, feel free to ask.
    - LongForWisdom: Any questions? I'd love to see some more documentation that helps explain some of the concepts you guys are dealing with.
    - Sebastien Derivaux: It's quite complicated, and we are trying to build the concept from the ground up and try to make something generalized that can work for any real-world asset, so it's a bit complicated.

### Amy Jung

#### Operational Support Update

[33:27](https://youtu.be/Zd4aNUB2P8I?t=2007)

- Hey, everybody. 2021 no doubt, is a big year for the DAO operationally. This quarter, we've already seen a brand new pace of activity and the community taking action towards a truly self-sustaining DAO in terms of operational support.
- A big point that I wanted to highlight was around this discussion about increasing the surplus buffer for DAO expenses. I'll summarize a little bit of the activity happening in the forum already to support that statement of increasing.
- First, we have the [interim funding](https://forum.makerdao.com/t/signal-request-interim-dao-operating-budget/5924) that Sam has proposed, as well as there is a technical MIP for the KEG to do actual payouts as well that Sam is working on. And then, with Sam's interim funding, he did mention a multi-sig, and that process, a non-technical MIP, will be coming soon from Prose. 
- SebVentures also submitted a team, precisely Real-World Assets, [funding experiment](https://forum.makerdao.com/t/team-funding-experiment-rwa-objectives-and-cost-structure/5954). It highlights what it would look like to be funding a team and what some of the expectations might be.
- All this is happening now while a more formal domain team funding structure is coming. One main point that I would love to highlight is Juan is in formal submission for his operational support facilitator role. I would highly encourage you to vote on that when the time comes, as he's been instrumental in supporting a lot of what's happening on the operational side.

#### Community Development Team Update

- Then for community development. During the break, I've been thinking a lot about how information moves and surfaces in our community. A big piece of that outcome is I've been working with Anna, who does our snippets, and David from our community in rolling out a master resource list of projects and teams in the Maker community. There's a lot. It's over 60, I believe. This will give an overview of everything that has been happening and everything that is still happening. This list includes working groups and things like that. And one of the things I would also encourage is how we're thinking about making this useful and maintainable. One of the things that I often see in projects like this is people tend not to update it, and we don't know the status. Therefore, we're working on making it simple where anyone could contribute to it. So that's it for us. Any questions?

##### Questions

- David Utrobin: I have a quick question about the distribution of the budgets to different teams and the evolution of that at Maker. In October, I know Long posted a thread called `Flapper` Distributor that proposed a mechanism for doing that. And I know Seb also posted a MIP proposal for something called the Strategic Reserves Fund. And now, this week, we saw a temporary multi-sig happening. Specifically, I was curious about the `Flapper` distributor. Is there any plan to formalize the spec and bring it into a MIP and solidify the whole vision for distributing funds from the surplus buffer to more specialized instruments?
    - SamM: I can speak to that. The `Flapper` Distributor is the KEG. The KEG is meant to be the implementation for the description of the `Flapper` distributor.
    - David: Okay, got it. Got it. Yeah, that that makes a lot of sense. Thank you.
    - LongForWisdom: I think we had the KEG developed separately. And it was always the same as the distributor, which was relatively easy to combine the functionality.
    - David: So the Keg is documented where exactly? Is it in its own MIP? Or is it part of it? Yeah, I'm just curious where I could read more about it.
    - Christopher: The Keg started as a hackathon project and the Foundation a while back? I guess we can find that code. But maybe Sam knows more. He's working on it right now.
    - SamM: So Lucas and myself have been working on that since the hackathon project. It's since been adjusted to include the `Flapper` distributor. The Keg itself has two pieces of functionality. It makes streaming payments, both from the `Flapper` and just fixed-rate amounts that can come out of the surplus buffer. So it's just a general-purpose tool we can use to pull funding for whatever.
    - David: Got it. Super exciting. Yeah, thanks for the update.
    - SamM: Oh, yeah. And with the MIP, I'm working on the MIP for that.

### Juan

#### Collateral Call Update

[39:02](https://youtu.be/Zd4aNUB2P8I?t=2342)

- Yesterday, we had a call, the first one of the year with Real-World Assets. We had Peoples Company; It's quite exciting and mainly concerns farming. You can check it out. It's already on YouTube while Pablo works on the notes, which should be up soon.
- Next week, we'll have the xDAI team. Igor and Andrew from the xDAI team will be here explaining a bit more about how it works and discuss their application for the stake. As a special guest, we'll have Patricio from Pope the proof of attendance protocol. They will be explaining how they migrated to xDAI, different advantages of L2, etc. So we'll see how that goes. So that's it regarding the calls.
- I wanted to echo a bit on what Chris has been saying about burnout. I think it's a bit also about managing expectations. Different partners and different projects want to interact with Maker, so we need to realize how much effort is being put by the smart contract teams, risk, and Oracle's mainly to get these things done evaluated and make sure that everything is safe. So it's about communicating a bit better. The effort that this takes and making sure that we don't disappoint anyone. Again, if we managed to communicate better all the effort and everything required from our side, it's not just a plug and play. We can make sure that no one is disappointed at the end and that we can grow at a pace that we're comfortable with. Those are my two cents. I don't know if there are any questions, I guess not. Amy, Nick, and Primoz covered pretty much everything.

### David Utrobin

#### MIPs Update

[41:34](https://youtu.be/Zd4aNUB2P8I?t=2494)

[Weekly MIPs Update #23](https://forum.makerdao.com/t/weekly-mips-update-23/5914)

![](https://i.imgur.com/lBlRw67.png)

- David: I have the pleasure of doing the MIPs Update this week. I prepared a few slides to make it a little easier to follow along. First of all, happy new year to everybody. I should introduce myself; my name is David Utrobin. I'm one of the community development leads at the Maker Foundation. I'm also a MIP editor in training, so I've been working with Charles over the last couple of months and getting my feet wet with MIPs. We are entering our first governance cycle for 2021, which is the January governance cycle. The first week is dedicated to formal submissions. I think formal submission officially closes tomorrow on Friday. Still, I'm glad to announce that all of the MIP and sub proposal authors that said they would formally submit their MIPs have already done so. To give a reminder; after a MIP or sub proposal is formally submitted the governance facilitator does the submission review. Inclusion polls happen the following Monday, which is going to be this coming Monday, January 11th. You will be able to, as an MKR holder, vote whether these should be included in the governance poll and the executive vote, which is a bundled version of all of these MIPs and some proposals.

![](https://i.imgur.com/aH2G4Qf.png)

![](https://i.imgur.com/xakGVx1.png)

![](https://i.imgur.com/oXLBemP.png)

![](https://i.imgur.com/c8qy3mP.png)

![](https://i.imgur.com/dE2C0Rk.png)

![](https://i.imgur.com/i65HTRi.png)
 
![](https://i.imgur.com/dycjdKq.png)

![](https://i.imgur.com/PDYvWSO.png)

## Procedural

### LongForWisdom

#### January MIPs Submission Review

[50:31](https://youtu.be/Zd4aNUB2P8I?t=3031)

- All right, thank you very much, David. That was great. We're getting to the point where our updates for the meeting take up most of the meeting, which is perhaps not great. Still, I'll quickly run through our MIPs submission review, which is essentially just where I go through all the formally submitted proposals and confirm that they will be continuing to inclusion polls.
- I can confirm that all the seven MIPs and subproposals David mentioned will be continuing to the inclusion polls next week.

## Other Presentations and Updates

### Sam MacPherson

#### PSM Usage Update

[51:30](https://youtu.be/Zd4aNUB2P8I?t=3090)

- The PSM went live at the end of December. It passed the first community executive vote, so that was exciting. We went live with a 3 million debt ceiling. The Lerp module was deployed, which lowered the tin parameter 1% down to .1% over a week. It seemed to work correctly because there was some competitive behavior for sniping those arbitrage positions toward the end and the debt ceiling seemed to get filled almost immediately. Everything went according to plan, so we decided to increase the PSM debt ceiling just a few days ago to continue expanding and moving towards the 500 million target debt ceiling.
- In addition to that, I had a meeting with Quantstamp. They're finishing up and finalizing their report. We went over some of the issues. We're going to have a formalizing finishing up of the report, but everything looks good according to them. As the PSM scales up, we're starting to see more interesting activity on it even just today. Mostly I was expecting it to be used for arbitrage. So far, it appears that somebody or maybe even multiple people are using it to trade at this point. I wasn't expecting that at this stage. Due to the lack of the interface, there may be some demand for swapping between stablecoins. I am working with some people to put together a UI that we can throw up to access this more easily. We should produce something similar to Curve where you can go between all the various stablecoins. We have USDC and DAI right now. Still, once we get the other stablecoins on, we could act as basically acts as trading between stable coins with a no slippage sort of situation and fixed fees, so that's pretty cool. In addition to that, I've been working on the PSM flipper so that we can liquidate the USDC-A vaults and the others into the PSM at some point shortly. It's looking good, any questions?
- Sebastian Derivaux: What is the plan? What are the next steps to increase the debt ceiling? Are we waiting for an audit or something else?
- SamM: The plan is to wait for a finalized audit. It doesn't appear to be anything to review on their end. They're just formalizing the existing report. I believe they're running over a couple more things, and then they'll have their final report out, and once we get a week or so, I think we can continue raising it bit by bit.
- Sebastien Derivaux: I hope so.
- LFW: Cool, let's move on to some of the discussions that we put off. Chris and Nick, you both said you had something to talk about, and I think Primoz did as well. Any of you feel free to chime in.

#### Discussion

##### Surplus Auction Issues

[55:25](https://youtu.be/Zd4aNUB2P8I?t=3325)

- Nik: It came to my attention the other day that we're starting to see 0 bids on Surplus(`flap`) auctions, which are when the fees, stability fees, and surplus buffer and lots of 10,000 DAI get auctioned for Maker, and then that Maker is burned. So the emergence of a zero bidder points to the environment that we're in. They've probably noticed that maybe there are not as many participants in the auctions anymore with rising gas prices. They think they may be able to snipe one of these things. It's not a good situation to be in and, quite frankly, until we get liquidations out the door, not just for collateral actions like we were initially planning, but also for the surplus auctions and the dilution auctions. In this particular case, we're focusing on the surplus ones. It heavily points to me that we should be raising the surplus buffer. There are other good reasons to do so. I know a signal request thread was discussed this week, and there were other arguments on the table. One is that given the current DAI supply, and given that we're stretching debt ceilings longer than we may be comfortable with because of the bull run, the current insurance buffer of 4 million is not enough. Brian brought up the other argument that if we want to add more LP tokens, we need to have a surplus buffer to cover potential losses from those. The other thing is with the market in a very frothy state. I think it made sense earlier to do lots of burning because Maker was very underpriced in the market. I still think it is, but as the price of MKR goes higher, it makes less sense to do these burns because you're not burning as much MKR. The final reason is in this transition of winding down the Foundation and handing over all DAO responsibilities. They're not powers. They're responsibilities. There's a lot of costs associated with that. Maybe the community is unaware of that right now. I can speak mostly for oracles, so for example, the feeds got paid 1000 DAI a month, and there are 26 feeds, so you're looking at 26,000 DAI a month. That's 300k DAI a year that the community will have to be taking over. That's not even counting the gas cost for relayers, which is the real significant sum. You have to take into account Gwei is denominated in eth. So as the price of eth goes up. What used to be 120 Gwei is now 30 Gwei. When you see 500 Gwei today, it's off the charts from what we've seen in the past. It got so bad that in December when everything was pumping like crazy, there were days where we had 1000 Gwei to get an oracle transaction update through. That cost $200 bucks per price update per oracle, and we ended up spending $18,000 in gas that day, so that's the scale of the order of magnitude of costs that we're working with here. I think the oracle gas problem is unique, and we could probably find a way to use some gas futures to head those costs. To not just focus on the oracles but to say part of the new risk domain teams or new smart contract domain teams coming is that they're going to want to be paid. Do we want to be dependent on the market not dipping and giving us stability fees at the rate that we're seeing, or do we want to be sure that we're going to have that money because we have a large amount of cash sitting in the surplus buffer? Building up the surplus buffer is the most logical thing to do here for so many different reasons. One of the poll options was to raise it from 4 million to 10 million. I think that sounds fairly reasonable.
    - Chris: I'll add to this. I also support adding a bigger surplus buffer for the amount of DAI we have as a shock absorber, and 10 million does sound reasonable. I'll add for the `flap` auctions. I've been paying close attention to them, probably out of anxiety all options for a while now. It seemed that right around an ETH price of 700, a couple of keepers would drip a bunch of our `ilks`, and then they would call the `flap.` It became unprofitable for them to do that. There's only a 2% beg on 10,000 DAI, so there's only a 200 possible dollar profit each time they call that, and the drips are expensive. We lost that ability, which was a very elegant thing because Maker incentivized people to call drips. Which is something we need people to do. I've been talking to Primoz, and I think there could be adjustments to the lost size that will get us back to that. Until then, use the interface that Brian put in the sidebar and don't let zero auctions go through. This is just tangentially related if we flip over to the `flip` auctions. I've been looking at those, and there does not appear to be any profit motive to call bite on these things or the infrastructure to call bite. It is enormous if you want to call bite efficiently. Suppose you do it just by using your nodes' abilities. In that case, it's still an extraordinary considerable expense to find those vaults that you can bite. Then there's no guarantee that the person who bites wins. Those bites are becoming very expensive in infrastructure and gas.  I think that it's probably time for us to take the fund that Sam was talking about and pay someone to run a keeper on all the `ilks` that effectively call bite the dockerized auction keeper and) auction keeper code has a bite only mode that you can run these things in (and you could run it, so it bites all the auctions, and then people would bid, which's less expensive. In liquidations 2.0, we've added an incentive into calling bite so that this problem will be solved then. Still, until we get there, I think we should heavily consider employing two people for redundancy just for calling bites.
    - SamM: Regarding the need for altruistic actors to be calling bite and drip and all of this kind of stuff. During the holiday break, I hacked a new module called DssChron, which can be used to pay people to form markets around these otherwise altruistic requirements so that we can pay people to compete for these chron jobs going and keep the whole system running without relying on employing one or two actors to put the flat sum to maintain these. I think it's better to have markets form around these, which can be used in the medium future.
- D_zap: Sorry if I don't know what I'm doing. Two things, I've never spoken on these polls before. Secondly, believe it or not, this is the first time in my life using Zoom. Anyway, this is the thing. I just started following the online chat only in time to see this discussion. I saw Chris's comment where he outlined something I'm totally in agreement about. That's the importance of the drips and incentivizing the old keepers who used to do them. As someone whos watched for quite a long time and been involved with various auctions myself, I just wanted to show maybe an angle that some people may not necessarily have about how this situation came about. To cut to the point, I agree with you entirely and want to explain why. I think there can be a bit of a fallacy where people look at historical `flaps` and think, well, we have 500 or so. We've never had a problem with these parameters, so why would they appear now? I would point out that two straightforward things have changed. One is the market's volatility, how much MKR moves and gas prices etc. the second one is much more subtle. The nature of the players changes all the time. New bots are appearing, and they behave differently. The bots that have appeared lately, I don't see this negatively or critically. Still, the correct way to describe their behavior is parasitic; they never kick an auction themselves. Yet, they are pleased to take an existing auction close to zero edge because, of course, as Chris pointed out, it costs very little to do so. Precisely the same for `flips` as well. This is a game-changer. It was a game-changer for the old keepers for apparent reasons. If you look at the sweet spot of the profitability for a keeper, it's vanishingly thin. Let's imagine that you submit an initial bid for 1.5% of edge, and the market only has to move half a percent of edge down. One of these bots who never kicks themselves can dime you. You lose your fee, and again, because of the cost of drips, that fee could be very high. You go back to `flaps` historically, and you look at how much keepers have paid to kick off an option, and it varies between something like 20 and 200 dollars.  If you're losing that much, it's not sustainable. Likewise, suppose the market only moves half a percent the other way and you're only winning an auction for one percent of edge again. In that case, I think this is something many people may need clarifying to them. Winning an auction for 1% of edge is not profitable because Maker-DAI is a very awkward pair to hedge. Maker-ETH, ETH-DAI being obvious, and there's no way you could reliably do that hedge and give up less than 1% in the process on fees and other things. that is the real reason why these zero bids have started happening. The value of the beg is now so small. There's a particular value of being first in now due to the size of the beg and the behavior of the bots and volatility of the market that value has become zero. It's worthless being first in which is why all the old keepers have quit the market entirely because they're not incentivized, or they have wholly adopted new behavior where they've said, "you know what, I'm just going to kick off an option and place zero kicks because it'll cost me nothing and I might get lucky." Ironically literally, minutes before this call started the last `flap,` 521. I was the one who prevented the guy who kicked it. He was 2 minutes away from taking the whole ten grand for free. It was by far the closest we've gotten. In my opinion, raising the surplus buffer is very likely, not wrong. It seems like postponing the problem if you want to fix the problem, you need to increase the beg. A higher beg will incentivize keepers to submit a sensible offer from the offset because there will be valuable, and you will never have zero bids again because it won't be the right strategy.
     - LongForWisdom: I think I speak for everyone when I say that's completely useful. We never have people with experience as keepers coming on these calls.
     - Nick: If we were to introduce liquidations 2.0, which is essentially a reverse Dutch auction. The cost of capital goes to nothing because you don't need to hold any of these tokens. You could buy them at the beginning of your transaction or flash loan them. Because the auction instantly settles, there's no capital lockup. You're not taking on any price risk on inventory for your bid. Do you think that would go a long way to solve those issues that we're seeing? I misunderstood the problem because it's still a race to be first, but you will win if you're first.
     - D_zap: I can't see how it would be a downgrade. I would have to study the exact parameters of the Dutch auction. Regarding the capital, that'll vary from keeper to keeper. I don't think being capital-constrained is a big issue for many of the keepers. If you look at most of the accounts, they will have enough Maker to do at least 1 or 2 `flaps,` so I don't think anyone is flash loaning currently. I think there's a straightforward way of describing what's wrong with the current system. The incentives are asymmetric. The cost of getting in is very high compared to the cost of stealing someone else's auction. So it sounds to me that Dutch auctions would at least be symmetric. That everyone would be on equal footing, and no one would have to make the initial sacrifice of kicking. Still, as I said, I think until then, a higher beg would fix the problem.
     - Brian: Would you say that this is an urgent issue? We don't have anything slated for tomorrow's executive, so could this wait go through the traditional governance process?
     - D_zap: I'm so new around here, I don't know which time scales we're talking about.
     - Chris: Should we fix it this Friday or next Friday, in your opinion?
     - D_zap: First of all, what sort of parameters would even be considered for the new beg value? Is there a spread that we're willing to discuss, or does it need to be brainstormed from scratch?
     - Chris: Right now, with many 10,000, that would be anywhere from 3-5% beg would be a 300-500 gain for the keeper if they won the initial `flap.`
     - D_Zap: Yes.
     - Chris: Or it could be higher, I don't know.
     - Brian: Especially if it's incentivized in drips. That's something I think we'd be willing to pay for
     - D_zap: If you incentivize competition, you incentivize drips by definition. That's just how it works. I think it's important to distinguish between edge and profit. They're two very different things with these sorts of market conditions with gas being this high. You can win for a certain amount of edge, but your profit can be a tiny fraction of that. I think there's plenty of people in the Maker chat who have done that thing of submitting by hand to keep the auctions orderly. I don't think anyone needs explaining as to why this is the best thing to do as soon as possible, especially now that the `flaps` are not quite regular in terms of their kickoff time because we've got all these one-off events like liquidations for the `flips,` adding an extra surplus, we've got PSM contributing additional surplus. I find that it can sometimes create a premature `flap` option that catches people out. They're not there to watch it, which can lead to someone, but anyone. I think it's evident to everyone that this needs to happen once, and it will more than outweigh any extra edge given up on a higher beg. A few hours ago, we were 2 minutes away from it happening. I think the sooner, the better, but at the same time, this isn't a systemically dangerous amount of money.
     - Brian: We've raised the flags on this, and hopefully, we will have the week hammer out the exact rates so we can put it in the following executive.
     - D_Zap: To me, this is already so much better than I expected. I thought these problems were only confined to only the people dealing directly with the issue. When I went on the chat, I saw Chris writing word for word the exact problem.
 - LongForWisdom: Great, thanks so much for your comments.

### Primoz Kordez

#### Risk in a Bull Market

[1:20:00](https://youtu.be/Zd4aNUB2P8I?t=4800)

- We're going to talk about Maker preparing for rainy days. I know that this not a popular topic during the bull run, but it should be addressed to simplify briefly. I can sense a community desire to keep increasing debt exposure for Maker because we can finally meet DAI demands. We could fix the peg in a pretty easy way. We have 250 million DAI printed in one month. I think it's all very positive. Keep in mind we can't be both aggressively adding new debt to Maker but not reacting to risk mitigation because the rainy days are coming, and we must be prepared. What do we have on the table to protect Maker? Maker capital seems in the right place, but what happens if we have a shortfall event? This means to focus on the surplus buffer, and currently, it stands at 0.3% of DAI debt. Banks usually hold 4% on liquid reserves, and we're far from it. Chris and Nick talk about why it makes sense to increase it. Ten million would be a good start, although I think it should be higher than what was previously suggested. It should be raised as soon as possible due to the `flap` issues we've been having. Secondly, we also need to think about the keeper ecosystem. The liquidations 2.0 are not close to being released. We need to get more feedback from keepers because we would ideally want to increase bonds, which is the 15 million number. So this is the maximum amount that could be liquidated at once. This is probably the most limiting impediment for me when I get concerned about increasing debt exposure at the scale that we're doing it. This is one reason why I'm opposed to increasing the ETH-B debt ceiling because 15 million is too small to handle multiple liquidations in various vault types. The third thing I want to mention is that we need to be prepared for increasing rates if we're going to maintain this healthy risk profile. This means that if we suddenly get 1 million debt exposure, which is quite possible, you never know we may need to go much higher with stability fees from the current one that we proposed, and that's 3.5, which could cause problems. We know what happened with YFI-A vault where we increased rates because we wanted to catch the exposure. We did a lot more damage because many of the users left who otherwise wouldn't have. This sometimes means that we should be wiser to limit risk exposure by having fully utilized debt. Although I know this wasn't popular. Another risk mitigation technique combines this limiting of debt exposure, which is to start introducing high liquidation ratio vaults with low rates alternatively. If this crazy demand for leveraging continues, this could protect us better. I tried to be quick. I'm not going to preach about it here, but I just wanted to lower a bit of the risk appetite. That's all from my side.
    - SamM: I want to add for those concerned about turning off the burner altogether, it's possible we could raise the surplus buffer a little bit at a time using the Lerp module so that we don't turn off the burner altogether. We can work towards hitting our target surplus buffer.
    - Nick: I think in a bull market, the buy-side from the burner isn't even that significant either. I don't think it will affect the MKR price.
    - Chris: Unless the MKR price is super low right now.
    - BrianMcMichael: That boom only set us back to Saturday in ETH terms, so you're looking at the wrong price.
- LongForWisdom: Any other questions before we wrap up?

#### Links from Chat

- [RWA Objectives and Cost Structures](https://forum.makerdao.com/t/team-funding-experiment-rwa-objectives-and-cost-structure/5954)
- [MIP33](https://forum.makerdao.com/t/mip33-maker-stability-price-module/5943)
- [MIP31](https://forum.makerdao.com/t/mip31-active-reserve-via-amm/5639)

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`RWA`: Real-World Asset

## Credits

- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
