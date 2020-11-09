# Episode 83: March 26, 2020

## Agenda

- [00:00](https://youtu.be/hc3NCt7hcnw): Intro with Rich Brown
- [6:42](https://youtu.be/hc3NCt7hcnw?t=402): Recap of Flop Auction poll with Kurt
- [18:38](https://youtu.be/hc3NCt7hcnw?t=1118): Rich Cuellar-Lopez: Emergency Shutdown Working Group
- [24:38](https://youtu.be/hc3NCt7hcnw?t=1478): MKR token authority with Mariano
- [31:13](https://youtu.be/hc3NCt7hcnw?t=1873): Governance at a Glance
- [47:50](https://youtu.be/hc3NCt7hcnw?t=2870): Top USDC Vault Use-Case Analysis with Marko(sp?)
- [1:01:36](https://youtu.be/hc3NCt7hcnw?t=3696): Vishesh State of pegs
- [1:10:23](https://youtu.be/hc3NCt7hcnw?t=4220): Primoz SCD Migration

## Video

<https://youtu.be/hc3NCt7hcnw>

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

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/hc3NCt7hcnw)

- Hello everyone, and welcome to the March 26th edition of the regularly scheduled scientific Governance & Risk meeting. My name is Richard Brown, and I am the head of community development at MakerDAO. Today we have a wide range of projects to get to. Part of the regrouping after the events over the last couple of weeks will be interesting to watch. Here's what I've been noticing:
  - Over the last few months, we run through the urgency/apathy/denial cycle. Maybe we'll take on a new cycle; urgency, apathy/denial, and "activity," possibly?
  - We know we have to do something rapidly, that's the urgency. That thing gets done, or something else happens that's the apathy stage. The problem goes away; that's the denial stage. And then the activity stage, when some new event comes along. Then we focus all our attention there.
  - That's a fundamental flaw in human nature and humans in general: it's hard for us to hold a number of dissociated ideas in our heads at the same time, and maintaining these threads over months and weeks is a huge ask.
  - With the way that our governance ecosystem needs to develop in the future, we're going to have to come up with some plans and some processes to come back and revisit things that were important that got shelved. We'll start doing a better job at predicting what will happen in the future, and have initiatives split off to address those things. One of the many painful teaching moments that we've all experienced over the course of the last few weeks is going to help us make the system more robust. We're already seeing evidence of that happening. Today, we have too many different things to talk about and not enough time to talk about them. Frequently we pick one or two big subjects and dig into those.
- Today we have maybe 7 or 8 big subjects. These are extremely healthy, growing pains. What that means is that the community is increasingly improving its ability to self coordinate and it's sophistication. It's identifying problems that need to be solved and then coming up with plans to solve them. That is precisely what this Governance ecosystem should be about. It's not top-down, it's flat. It's not centralized. It's decentralized. And it's being kick-started, so it's easy to pick it apart and find what's wrong.
  - I'm more focused on how it's improving on a week to week basis. And this is one of those improvements that's making me very, very happy. I'm not going to talk too much about how happy that makes me. Instead, let's talk about what the agenda today and break out into discussion.
- Kurt will recap the `flop` auction poll [from the forums](https://forum.makerdao.com/t/signal-thread-finishing-flops-and-current-executive/1795), there was a decision to be made last week, actually, sorry, earlier in the week, at our last Governance call, about whether there is a second executive or whether they get bundled. There were some issues there. There was also a tweak or an added feature that could impose a delay to make this entire process more rational.
- Rich Cueller Lopez will tell us about an ES shutdown working group / DeFi space consortium. This is a really great initiative and won't get into it too much because he's given it far more thought than I have. The idea is that we have stakeholders in this space, and they are impacted by the decision of this community. We need to engage with those stakeholders. And well, a hero has arisen.
- Mariano Conti is going to tell us about new some recent events in MKR token authority world. I believe people should be excited to hear about if they haven't already. I know I'm excited.
- LFW will talk about Forum at a glance. Possibly about USDC SFs. I'll leave that to him.
- Marko is going to talk about some analysis he did on USDC.
- We'll try to get back to some normalcy here and have the comforting tones of Vishesh walking us through the state of pegs and Primoz giving us a review of the state of migration. Obviously, lots to go through and lots of disparate chats.
- As always, in these calls, this is not a decision-making forum, it's a broadcasting and information and discovery tool for ideas and where brainstorming happens. Then we move into the forums, and that's where proposals are written, a consensus is reached, and the next steps get determined. Let's do our best to get through our agenda today. Let's ensure that we all break off to forum posts and meetings afterward.
- Discussions happen in the [Forum.](https://forum.makerdao.com/) where we find consensus.

## Recap of Flop Auction poll

### Kurt

[6:42](https://youtu.be/hc3NCt7hcnw?t=402)

![](https://i.imgur.com/A7kWa7z.png)

- Recap: On Tuesday, we discussed unblocking the flop auctions as well as the technical details for how they got blocked. One option is to create two executives: one executive for unblocking debt auctions and one for the usual monetary policy. The cadence would be that the unblocking spell would come first and then after a potential monetary policy vote. The other options were to have one executive vote for everything, or one executive vote on Friday only to unblock flop auction. The leading option in the poll is to have two executives, as first mentioned.
- In order to avoid the same bug that prevented the flop auctions, the proposed spell will not only convert the debt into a form that can start the flop auctions but also kick off the flop-auctions as soon as it is cast. None of them will be blocked, and we will be in good shape.
- But there is a further consideration in relation to the timing of things. It is hard to predict the time of a spell being cast because it relies on people voting things in. These aren't great conditions for the auction participants because people must be standing-by 24 hours a day, and would lead to an asymmetrical benefit to auction participants depending on time zones. Due to the governance delay, there would still be at least 4 hours of warning before the auctions start, but to ensure maximum efficiency of participation, the spell will kick off all the auctions at a predictable time.

#### Questions and Comments 1

[11:00](https://youtu.be/hc3NCt7hcnw?t=660)

- Rich: Quite a bit of discussion in the sidebar. To summarize, there is an issue at play, and I touched on this in the last call. If we split these executives, there is this gun that we can only fire once a week. The clock starts ticking the second after we put this executive into the portal, which will have to happen right after this call. This would give the ecosystem less than 24 hours to assemble their hardware wallets and pass the vote. There is some campaigning that needs to happen to rally the vote in the very small window we have. If people feel strongly that this needs to go through, please, I encourage you to: a) actually come and vote, even if you are a smaller holder. It's worth voting, even if you're not a whale. Whales follow the crowd here. If you know large holders, consider convincing them to vote. Consider doing some public campaigning. If people want the vote to pass, take to the twitters and sharpen your pitchforks and sharpen your PR skills. Otherwise, it won't happen.
  - LFW: There are some discussions of pros/cons of doing two votes. It splits MKR. There is also the conversation of SCD being susceptible to flash loan attacks.
  - Rich: This is another long discussion regarding the apathy/urgency/denial cycle. We're seeing some cracks in the mechanism of continuous approval voting. We've been seeing those cracks for a long time; this is one of the things we as a community need to revisit sometime soon. As the complexity of our governance ecosystem ramps up, almost exponentially, is the system that we have in place right now going to cover us?
    - I don't expect answers right now. But we've asked these questions four or five times now, and we are back in the same place: where something important needs to happen, how do we do that in a way that does not risk a weak executive or reduces the security of this system or splits the vote.
  - Kurt: In this particular case, it's a question of whether we have much monetary policy to enforce. Rates are zero. I've seen discussion of tweaking debt ceilings. Do we expect any of that to have a large effect on the system or is any of that urgent compared to getting a million in bad debt cleared and freeing up however much Dai is being held on the sideline with the intention of participating in these auctions. Remember, even if we only have two people competing, two entities competing, you are locking up at least twice the amount of Dai that is going to be consumed in the auctions assuming they are gunning to win them all.
  - Rich: You raise a good point. I call it a good point because it reinforces the point I just made, so it has to be good. In the before times, about 3-4 weeks ago, we discussed the cadence of monetary policy as well. We discussed pulling information from models and empirical evidence to determine whether the levers we pull have the impact that we assume they do. It is possible that moving the number up or down once percent every week may not be having the impact that we assume it is. Perhaps, in the absence of a more nuanced voting mechanism, maybe we can free up every second week to discuss non-monetary policy. That is a discussion that is worth having very soon. Kurt, do you have any other points?
  - Kurt: I think that covers the state of things. If I have a soapbox, I think that the most important thing we can do for the system is to clear the remaining bad debt through flop auctions. It's not clear if people holding Dai to participate in those will have an upward pressure on the peg or not, but we can empirically find out. If that has anything to do, we should get that cleared. And it isn't even clear to me if there are other actions that we need to take that are on the same order of magnitude and importance.
  - LFW: Do we need to discuss the delay at all? Do we want to delay the flop auctions to a certain time?
  - Kurt: The intention is to give them predictable start times. I'm thinking about say, sometime between 9 am and noon on a weekday EST.
  - Rich: Does that require consensus? Can someone writing the spell pick a realistic weekday? It's about minimizing an absurd time.
  - Kurt: It creates certainty and predictability.
  - Rich: It's going to be hard to find something that works for everyone. As I continue to point out, we iterate here, and we don't set things in stone forever. We can just pick a reasonable time for now and have a longer discussion about that next week.

## Emergency Shutdown Working Group

### Rich Cuellar-Lopez

[18:38](https://youtu.be/hc3NCt7hcnw?t=1118)

- The idea of a working group for Emergency Shutdown is really to create a framework and a roadmap for a DeFi consortium. Especially as it relates to MCD shutdown, we could discuss where Sai fits in right now or other parameters. But, really, if we had to use ES, what would it mean? It's more for gathering feedback and setting deliverables on a preliminary basis. More for people who aren't on this call aren't part of the foundation, or in the community.
  - _What it's not_: it's not trying to press the MakerDAO or token holders to immediately shut down anything. Or force anyone's hands to dictate or codify. We still want people to have the flexibility and encourage them to vote for what they think is sensible for shutdown. This group is to have that discussion on when would be sensible.
  - _Who would be a part_: Ideally it would be a couple of members from the DeFi community if you wanted to have people from Compound or Dharma or any big hitters you can. But anyone who's built on the Maker protocol could be a larger community.
  - Rich Brown: Let's break it down a bit: a)_Let's clarify what the actual steps are and what this means_ b)_Identify stakeholders in the ecosystem to try and build some bridges_. We don't live in a vacuum here, right? So trying to understand who this affects and who should have a say is the point.
  - RCL: Right, initially identify people who have skin-in-the-game and people who ES affects what they're building. Where if there was an ES, how would it materially change things. Initially, we identify the key people and set a framework for what should be discussed pre-emptively, what should be happening during an ES, what can happen for others to recover after an ES. Having that whole timeline in place, so if anything happened suddenly, say next week, everyone could work off a common framework. Maybe we don't gain consensus, but the reality is, especially people outside this community, they're not going to want to jump on daily calls at weird times to discuss things in real-time.
  - _Where we're at_: There is a working group forum post to go up in the next few days. There's a doc right now to review this discussion. Ideally, people on this call can review, and then we'll post it for the public. If there are people who want to be part of this discussion, not regularly on these calls, we would appreciate those points of view. Send them my way so we can collaborate on this initial charter or framework and some of the deliverables we want to have.
- RCL: Hit me up on Rocketchat: @rcl

#### Questions and Comments 2

[23:08](https://youtu.be/hc3NCt7hcnw?t=1384)

- Rich Brown: That's perfect, worth the extra minute. This is something I've been nervous about for the longest time, a proverbial boogeyman in the system. A game-theoretical security mechanism that I don't think there is enough clarity on. Specifically what it actually means, and how it actually works, and when it should actually happen. It's a discussion we've had every once in a while. I'm glad that this project has seen some direct effort to derive some clarity, it's enormously valuable. Thanks for starting it up!

## MKR token Authority

### Mariano Conti

[24:38](https://youtu.be/hc3NCt7hcnw?t=1478)

![](https://i.imgur.com/hLG3nDK.png)

- [The Maker Foundation multisig has relinquished ownership of the MKR token.](https://blog.makerdao.com/the-transfer-of-mkr-token-control-to-governance-the-final-step/)
- In single collateral Dai, the MKR Token is a database of how many tokens each address has. It also has some restricted functions, including MKR minting and burning. It also has two specific values, an owner and an authority. The owner was the foundation multisig. It didn't have any authority; authority can be a smart-contract with additional logic.
- In SCD, we didn't really need anything too complicated because the MKR token was only used to pay for stability fees. They would go into the burner, termed the GemPit. This balance would grow but would not affect supply as it was never actually burned because no contract had the authority to do so.

![](https://i.imgur.com/v8pgFRa.png)

- After releasing MCD, a governance delay was introduced, here termed `PauseProxy`.
- For flop auctions, the contract required authority to `mint` MKR, and the flap auctions and GemPit needed authority to `burn` MKR. Therefore, an MKR authority was created.

![](https://i.imgur.com/BfxzM6J.pngQ)

- This MKR authority gave authorizations to these three contracts. The flopper could then call `mint` so that the winner of the flop auction receives the MKR. The Flapper and GemPit use the authority that all addresses have to `burn` their own MKR.

![](https://i.imgur.com/H0BbHgv.png)

- Before yesterday, both the multisig and the MKR authority could call the restricted functions to `mint` or `burn` its own MKR, as well as change ownerships and authorities. Now, the multisig set the owner address to 0. This means that everything has to go through the MKR authority, which is owned by governance.
- This doesn't seem like a big step but is incredibly powerful. Anything that needs to happen that needs authority must go through MKR voters.

![](https://i.imgur.com/KgAZl33.png)

- To check, etherscan.io can be checked. The owner address is set to 0.

![](https://i.imgur.com/q7iBwL0.png)

![](https://i.imgur.com/wRyU0TW.png)

- The root or owner for MKR authority is the Maker MCD Pause Proxy, aka Governance.
- This is another big deal, and another reason to keep voting and keep participating. That is all I have.

#### Questions and Comments 3

[30:22](https://youtu.be/hc3NCt7hcnw?t=1821)

- Rich: Thank you, Mariano. It's painful that such a good thing happened at such a tumultuous time. Thank you for keeping the fire lit under this thing. I know that it has been a passion project of yours for a while.
- Mariano: The first document drafted to do this is about a year and a half old.

## Governance At a glance

### LongForWisdom

[31:13](https://youtu.be/hc3NCt7hcnw?t=1873)

- [Suggestions for updating the Signaling Guidelines](https://forum.makerdao.com/t/suggestions-for-updating-the-signaling-guidlines/1815)
  - Mitote made a thread about updating signaling guidelines. Everyone read and pay attention to what may change and what should change.
  - We're looking at what works well versus what hasn't gone well. Feedback is welcome.

#### Seeking signal

- [Kurt's thread about finishing blocked flops and structuring executives](https://forum.makerdao.com/t/signal-thread-finishing-flops-and-current-executive/1795)
- [Do we compensate vault holders that were completely liquidated?](https://forum.makerdao.com/t/signal-thread-do-we-compensate-vault-holders-that-were-completely-liquidated/1713)
  - This topic is not going away until we figure out what we're doing. Interestingly it's the biggest signal we've ever had, presumably because of Vault owner participation.
- [SCD shutdown](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673)
  - Thread is still up. [Derek lays out the rough series](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673/20) of steps for SCD ES and it went under the radar.

#### Questions and Comments 4

[33:59](https://youtu.be/hc3NCt7hcnw?t=2039)

- Aaron Bartsch: Does the foundation have any plans for SCD shutdown in place? I know there is a portal? Right now, polling is 64% in favor of 'less than a month from today. I want to make a poll for 2, 3, 4 weeks out regarding how many weeks out from today do we want to execute shutdown.
  - Rich: That's a great point, thanks for bringing it up. We've had this discussion internally for a while, let me fill everyone in. For there to be a clear path for community to shutdown SCD, there are a few things that need to happen in concert, or at least in rapid succession. One of those is a clear understanding in the ecosystem of what mechanically needs to happen. What development needs to occur, what steps.
    - Letting the community wrap it's head around how feasible it is and in what time-frame. The community may want it in one day, but it turns out it's actually eight. Once the technical mechanisms are on the forums, it's my expectation that the community can align around a process to combine with the way the world works. Once that process exists, time estimations can start, and scheduling can begin. I could be off base, and I'm willing to hear other opinions, but that feels like the order of operations.
    - What are the mechanical steps? How does the community wrap around that(smart contracts, etc.?) Then, how does the community align on a timeline? The foundation is working on docs that give a detailed break down of what it looks like mechanically, what different pieces need to happen, and in what order. Aaron, you and your team, will be able to figure out how that works. There is also possible alignment with "other Rich(@rcl)." Maybe everyone can coordinate together, it feels like a three-pronged approach that needs to happen.
  - LFW: Refer to [the link to Derek's thread.](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673/20) It lists the steps that need to happen before SCD.
  - Derek: I'll make a new post that adds color and depth to those high-level steps. Aaron, to your question, I think internally, we're looking to the community to see when you collectively want to do the shutdown. I'm building an SCD shutdown page, which will be part of the migration.makerdao.com; it's been in the works for a while and should finish tomorrow. Happy for you to put the poll up since we need that timing input.
  - Aaron: Perfect. Thanks for that!
  - LFW: So we need an on-chain poll to see if we shut down in a month?
  - Rich: Yup! I feel more confident in the process if Aaron, Derek, Rich, and whoever else was super interested in this process coordinated together to execute well on that poll.
  - Makermman: I'd like to echo that, it's not clear if those steps are sequential or if the executives will be stepwise or bundled. If we can see that clearly, then we can see what the timeline will be and can vote accordingly.
  - Rich: Exactly, once the mechanism is understood, we could wrap Governance around that.
  - LFW: The poll could be indicative versus declarative. Agreeing on aim versus state.

[40:29](https://youtu.be/hc3NCt7hcnw?t=2429)

- Cyrus: How are we going to proceed operationally? Are we waiting on Derek? Or someone else for a high-level plan, or do we want to start with items that we know need to happen. E.g., stopping the Sai->Dai migration contract, just one way, not both ways. It is something that will have to happen anyways since it creates too many edge cases to keep that bridge open. I'm not saying we have to do this immediately, or this is urgent but, given this is a multi-step process, I think we should try to move sooner rather than later.
  - Derek: I'd be happy to look at SCD DC, independent of the ES plan. That precedes it.
  - Cyrus: Right, would that be as simple as setting the Sai migration DC to zero. Is that all it takes?
  - Derek: I think I need to understand possible implications with the smart contracts team and yourself. I don't know what that would do in terms of liquidity impact. From the comments I see in the sidebar, make sure I put it in a forum post, make sure people can review it. Long, I'll work with you on future messaging.
  - Cyrus: To clarify, two DCs being discussed: one is SCD DC, but the other is the Sai migration special collateral type in MCD. That's the one that needs to be set to zero to prevent further migration.
  - LFW: Derek, feel free to loop Aaron in on these things. In terms of messaging specifically, a couple of people volunteered to work on that.
  - Derek: Should we discuss moving DC to Zero?
  - Aaron: We could also put an on-chain poll on Monday and see the interest that way.
  - Cyrus: Ok, let's put up posts and gather feedback. Maybe we can put up a Governance Poll on Monday. Gonzalo says there are two ways to execute: set DC to zero or `cage` the Sai adapter.
  - Mariano: If you set the DC to zero, you can still change it back. If you `cage` it, that's a one-way street. We do want to freeze it, but in case we need to unfreeze it, it could be an issue to use the `cage` method. We'll get together and figure it out, then come back with more information.
  - Rich: This is the point where I'll hand it over to you, Cyrus.

## Risk

### Cyrus

[44:55](https://youtu.be/hc3NCt7hcnw?t=2695)

- One topic that I wanted to discuss is revisiting USDC as there is a lot of buzz going around with USDC as a collateral type. I want to remind people that there is [an active discussion](https://forum.makerdao.com/t/onboarding-usdc-as-collateral-to-mitigate-liquidity-risk/1570) going on about the use case of USDC, whether it is primarily used for Dai peg liquidity or emergency keeper liquidity.
  - The reason this is important is that we have seen usage in both use cases. We've seen it used in flop auctions and in Dai peg management. The flop auctions are coming to a close, and Dai is still at one dollar.
  - People are still wondering how to get more Dai out of the USDC to help deal with the Dai peg. Which means lowering the SF in an effort to affect the peg.
  - LFW: The poll for the SF on USDC has finished with 17k MKR in favor of reducing it to 16%.
  - Cyrus: Governance poll passed for a reduction in SF. In a way, MKR voting is driving the narrative, so we need to catch up quickly.

## Risk Data for USDC

### Marko

[47:50](https://youtu.be/hc3NCt7hcnw?t=2870)

- Hi, it is my first time speaking here, so here is some small introduction. I am primarily working with Primoz Kordez, who you already know. We are mainly focusing on analyzing the DeFi ecosystem. And for the last few months, I am also working with Cyrus and Vishesh.

![](https://i.imgur.com/0WGoYHr.png)

- Analyzing USDC vaults, interested in what people are doing with USDC backed Dai debt. Looking at the top 10 vaults, we have seen that a lot of the debt is concentrated in the top 10 vaults.
- The first one is responsible for about 40% of the USDC backed Dai debt.
- The ten vaults combined represent 90% of USDC backed Dai debt

![](https://i.imgur.com/UgUpoOz.png)

- This chart shows the aggregate Dai minted per day. Dai minting activity was much stronger, starting in the first few days, and the largest vault has started repaying some of its debt.

![](https://i.imgur.com/QbVZB8C.png)

- Two main causes of so much early activity. In the initial days of introducing USDC collateral, Dai was trading stronger.
- The other reason is debt auctions.
- The most important part of this analysis is the activity of what the vaults are doing. I tried to label them based on their main activity.

![](https://i.imgur.com/kvyiz2F.png)

![](https://i.imgur.com/wpjesxF.png)

- You can see that roughly 50% of debt is being issued toward accumulation. This is likely used as liquidity for auctions. Roughly 40% is used for managing the Dai premium, essentially selling Dai for USDC.

![](https://i.imgur.com/hhr01XC.png)

- Five vaults are using iearn for leverage, which allows you to leverage your Dai short position in one transaction. Two are doing the same manually.
  - The first and fifth-largest vaults are accumulating Dai. The top account was connected to a separate account participating in the flop auctions. So it's likely a keeper.
  - Another quite important thing is that these two accounts, which are accumulating Dai, are related to accounts which are the largest players in Compound.
  - Dai premium is dangerous for Dai denominated debt on other protocols that aren't Maker. These protocols use market price, which means you can get liquidated faster in Compound than on Maker.

![](https://i.imgur.com/HSrDZaC.png)

- The largest vault is related to this address, which is the largest ETH supplier in Compound. This position is quite large, borrowing $3.7 Million Dai. CR is 576% (assuming Dai at 1), and his CR in Compound is 559%. It's lower than it would be if the position took Dai at exactly $1USD.

![](https://i.imgur.com/6o4ubOR.png)

- The fifth-largest vault is accumulating Dai too, related to a very large player in Compound supplying USDC and borrowing Dai. You can see the leverage is much higher since his CR is 164%.

![](https://i.imgur.com/0EVQffm.png)

- Accounts trading manually were basically using aggregators like Paraswap and 1inch to optimize slippage.

#### Questions and Comments 5

[55:10](https://youtu.be/hc3NCt7hcnw?t=3310)

- Cyrus: My main take away is half of the USDC is used for flop auctions (just guessing), and then half is being used for Dai peg liquidity. This continues the discussion on what we want USDC for. If we want to target both use cases, we should discuss separating these into two collateral types, with parameters and debt ceilings targeting each specific use case.
  - Cyrus: We should make sure that this conversation is still top of mind for the community. If we want to add another collateral type(USDC-A and USDC-B) or increase, decrease SF's. We need governance polls and executive votes to determine the path, but we could do a better job of staying on top of it.
  - Derek: For me, the key takeaway is we need to get the `flop` auctions off the table. In which case, do we still need to have a USDC-A and USDC-B?
  - Cyrus: We still would. Primarily we need to make sure there is sufficient Dai liquidity for keepers in case ETH suffers another drop for future auctions. That it is used for the flop auctions is a welcome side benefit, that would have been another \$5 million Dai that would have been drained from the primary Dai supply. A fair framing is one type for `flip` and `flop` auctions and another for Dai peg management.

[57:56](https://youtu.be/hc3NCt7hcnw?t=3476)

- Wiliam Remor: Do you have any ideas about measuring whether that extra liquidity will actually be used on `flop` auctions?
  - Cyrus: Assuming that the accumulation portion that Marko showed us is hitting the `flop` auctions.
  - Mark: Can't say 100% certainty that this specific Dai was used for `flop`s. But he's generally related to 3 different accounts that won some of the `flop` auctions.
  - WR: Also, thinking about the actual flow of generating the Dai to when it is used in the `flop`. Even if generating the liquidity might be read as 100% going into `flop`, then if we look into the data, it might be a smaller percentage entering `flop` auctions.
  - Mark: I will verify again, but these accounts are quite large. It's difficult to say this entity minted this Dai for one auction or for potential collateral auctions if ETH would continue to fall.
  - Cyrus: I was thinking we could wait for the `flop` auctions to end before we do a detailed analysis.
  - WR: Yeah, I was just mentioning a framework to think about it; to measure from the beginning from the introduction of USDC to the looking at the full queue; looking at the use case we expected and the results that were obtained. How much of that liquidity actually went into the expected result.
  - Cyrus: Agreed.

## Analysis

### Vishesh

[1:01:36](https://youtu.be/hc3NCt7hcnw?t=3696)

#### Relevant Links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### The State of the Pegs

![](https://i.imgur.com/1CKHPm5.png)

- Over the last week, the Peg has been hovering at a little above \$1.02. Though the ETH prices have continued to fluctuate between 120 and 140, the peg has been holding relatively steady.

![](https://i.imgur.com/3SmsAvB.png)

- This is because there haven't been major fluctuations in the ETH/DAI supply in that time frame. After the March 12th to March 14th time frame, once the Dai supply went down to about 77 million and then, over the course of liquidations finishing out, it fell to about 68 million. It has held steady since then.

![](https://i.imgur.com/0NgECi4.png)

- After that, over a similar time frame, the peg has not moved much.
- After all of the craziness of black Thursday, the price went up to about $1.07 or even $1.10. On the weighted average, it was about \$1.07, although some of those trades experienced crazy amounts of slippage in that time frame.
- Some of the highest deviations happened on Uniswap, with a decent chunk continued on dYdX, where a lot of those trades were a $1.07 to $1.10 at their highest point. Uniswap saw crazy slippage in both directions.
- After these insane spikes, the Dai price started to come down a bit. As Dai was being sourced for a large number of liquidations and auctions, after that, then it began to run up again a bit. A lot of that was happening on both dYdX with Oasis reclaiming a share of the trading volume, which had been lost to dYdX over the past couple of months. After holding steady for $1.07 for a few days, the price came back down to around $1.03/$1.0. Then, around 5-6 days ago came back down to around $1.03/\$1.02, and has been fluctuating in this range over the last week or so.
- Part of the reasoning for this is that there are still holdouts from auctions and uncertainty from people in terms of when the peg will come back down to \$1.00. This likely leads to hesitancy from market makers and arbitragers to sell more Dai. The minting has also been down as the total supply has been pretty flat in the last week or so. In order to incentivize more minting of Dai, there has been a lot of conversation about stability fees, but I believe that it has more to do with the sentiment and arbitrage opportunity.

![](https://i.imgur.com/2qeFp79.png)

- As was just talked about with USDC vaults, we can see that from inception, it grew quickly to about 6.7 million Dai on March 23rd. This has been holding pretty flat and has been used by a few large keepers who have been sourcing liquidity and getting ready for auctions.

![](https://i.imgur.com/TH4oUai.png)

- More activity was seen in the last couple of days, which came back down today. This supply growth, as a target for incentivizing Dai being generation, is a conversation that we have been having by potentially lowering that USDC stability fee.

![](https://i.imgur.com/l1XiCgq.png)

- The ETH<->DAI supply indicates that a low SF through ETH is not incentivizing people to mint more due to uncertainty around ETH's next moves. This causes a lot of traders and participants to be hesitant to want to mint that much more Dai and sell it.

![](https://i.imgur.com/EbRdmB9.png)

- In terms of when Dai will return to peg, I expect it may hover around \$1.02 for a little longer. This may be a persistent effect until people become more comfortable leveraging on ETH again. There is obviously this thread around USDC, but that is not likely to be a huge source of Dai minting in the coming days in the current iteration. As Cyrus said if we offer a different option for how the USDC vault is structured that is more geared toward arbitrage, that may change. This may change with a dedicated collateral type for peg arbitrage.

**Vishesh's connection dropped** Restarts here at [1:16:05](https://youtu.be/hc3NCt7hcnw)

![](https://i.imgur.com/vrMRXZe.png)

- We went over what was going on with Dai price. In terms of USDC vaults, even though the net USDC activity has leveled out, the collateralization of some of those USDC vaults has increased since the launch. This is somewhat curious regarding why they have a little extra collateral. This isn't significant compared to the ETH vaults currently, so we should wait and see how USDC is being used.

![](https://i.imgur.com/i63opC1.png)

- In terms of the ETH vaults, it is interesting to note that this liquidation wall had gone down to say 56$ mid-crisis. It has gone back up to about 69$ since. I think people are feeling a little more comfortable. That is despite the ETH price coming back up to about \$130. Something to watch that people are doing their usual behavior, as price levels out, they also level out their amount of collateral relative to the debt. The debt amount has not moved significantly post-crisis in liquidation, so that's the primary collateral action that we are seeing. Just something to be aware of.

## Primoz

### Migration Analysis

[1:10:23](https://youtu.be/hc3NCt7hcnw?t=4216)

![](https://i.imgur.com/a1KQZsF.png)

- The current Sai supply is at 14.1 million. It decreased by 1.4 million in the past week. This wasn't as heavy as a week ago during Black Thursday during the CDP rush for the exit. On the other hand, Sai in the migration contract did not fall as heavily, only about 0.5 million, because Sai is still migrating using migration to Dai.

![](https://i.imgur.com/K72htan.png)

- Here you can see the flow over the past few weeks. About 100,000 Sai per day was deposited in the migration contract. The flow isn't as intense as the weeks before, but Sai is still migrating.

![](https://i.imgur.com/LVLdFfJ.png)

- 1.4 million net repayments. This is for the large CDP who repaid their debt fully. One very large CDP closed its debt. There were about 130,000 Dai in fees collected.
- The remaining fees are at 1.5 million, with 1 million to be repaid by the largest CDP. 0.5 million is expected to be closed, while the largest CDP has not shown any kind of activity within the last ten months.
- The migration contract dropped by about 0.5 million. The current inventory is about 3.3 million Sai in the migration contract. From a CDP perspective, it is good that they now have one-quarter of the supply available in the migration contract. If they need to make a repayment, there is plenty of supply in percentage terms.

![](https://i.imgur.com/vXisg3O.png)

- Largest CDP's that repaid their debts within the last week. This one paid about \$90,000 in fees alone.

![](https://i.imgur.com/6kvyPQb.png)

- Some CDP's are below 150% collateralized, not sure why it still has not gone to liquidation. The number of CDPs, 34, has lowered since two weeks ago, so the situation has improved.

![](https://i.imgur.com/JrL6tAc.png)

- In terms of potential liquidation events and effects on the system, these are the potential debt liquidations depending on various ETH price changes by percentage.
- With a 48% drop in ETH price, there would be a total SCD liquidation of 2-3 million, which is roughly equal to the amount of SCD in the migration contract.

### Closing Thoughts

- I wasn't expecting such a high degree of repayment, possibly because I thought that with a stable ETH price, why would CDP's rush for exits? It seems there is still some fear-induced tendency of another ETH drop. It is hard to say what happens next.
- The important thing to note is that if there is a shutdown and Sai inventory needs to be drained, there needs to be this thing that we discussed the last time that we need to disable the one-way bridge from Sai to Dai because people are still migrating Sai.
- Perhaps SCD debt ceiling reduction might also be good because we are still seeing Sai minting, which totally does not make sense because there is an upside liquidity. We do not want to see Sai minting, although that debt does not carry interest, so I'm not sure.

#### Questions and Comments 6

[1:20:19](https://youtu.be/hc3NCt7hcnw?t=4819)

- Chao Pan: How does the system restrict or direct the usage of Dai even when you have risk parameters set for two types of USDC.
  - Cyrus: You can't really restrict them unless you have DC set to zero and then do an emergency executive to raise it. This is a lot of overhead, and perhaps one day in the future can be made easier with an instant access module. If you set the SF prohibitively high, that could also take care of it. Thus, a high SF would make it difficult to make money on Dai peg arbitrage and could effectively restrict it.
  - CP: So it can only go one way? Can you only set it higher to stop people from arbitraging? Is it not better to lower the current rate?
  - Cyrus: Presumably, the current one would go way lower, and than a different one would go higher. The issue is, right now, we have a hybrid strategy where the SF is in the middle, which is probably not desirable.
  - CP: that makes sense thank you.
  - LFW: Should we poll about this?
  - Cyrus: I think there are a lot of proactive decisions to make. Not just for the USDC but also for the circuit breaker itself. A holistic execution strategy is also important. There are all very active measures that governance needs to be involved with. Up to now, this community has been more passive governance type of ecosystem. That is a bit concerning, and I think we can do some work.
  - LFW: Do you mean we need a better definition of when we need to use these tools?
  - Cyrus: Answering the question of When, thresholds, and criteria for how things are executed. We want to make sure we know what we are doing and have a timeline for doing it if something happens.
  - LFW: That will depend on Maker holders.
  - Cyrus: Medium-high priority project.

[1:23:50](https://youtu.be/hc3NCt7hcnw?t=5030)

- Willaim Remor: Question for Vishesh, on Collateralization distribution for USDC, for that 150%+ bucket. Do you have any hypothesis as to why?
  - Vishesh: Yeah, I do. My sense is that there are people who have USDC right now waiting to potentially arbitrage or participate in liquidations. They're not actively maxing out their Dai withdrawing abilities right now, maybe preparing to act in the event of a profit opportunity.
  - WR: Therefore, potentially just having a cost of capital that they're willing to bear upfront.
  - Vishesh: Yeah, and the other thing is the ecosystem has slightly changed. Observing changes the observed. USDC in Maker now means a bit of a shift in how keepers, owners, and market makers think about their portfolios. USDC might become part of this cycle with ETH<->DAI<->USDC, whereas before, it was more just ETH<->DAI. Holding USDC at the right times in the right amounts becomes part of their workflow, given that USDC can now be used as a leverage point to create more Dai when there is an opportunity to arbitrage Dai.
  - WR: Makes sense.
  - MM: Adding to that, there are no liquidations that are going to be happening on USDC. You don't have to worry about what you deposit to mint Dai there. It's a different ecosystem. Going back to the S thing, I think that if this was a risk-on, people would have left their ETH deposited and would have minted Dai to go up to 70%. Instead, they drew ETH and let their liquidation ratio go up. I think that's a confidence event, not a risk-on event.
  - Vishesh: One other correlation and behavior to note; If you look at March 23-24, there was a bit more USDC<->Dai minted out, about 1 million more, after which it was paid back. What happened to the peg during that time was: post-crash the price hit $1.01 at the end of the 22nd. On the 23rd, it went up to $1.03, $1.04, on oasis at $1.07, and then after the 24th, it came down again. There is some relationship there between the hump of USDC<->Dai issued and reincrease in where Dai was traded at. That does start to track where the people with USDC balance were waiting for Dai to raise above peg to mint Dai and arbitrage it back down.
  - MM: I was one of those guys part of that million thing. That number sounds realistic based on the markets and pricing; it just did not have enough of an effect that the rest of the Dai did not go down to the peg. It went somewhere else.
  - Vishesh: This is where we can start to talk about how people were thinking about auctions, tracking the numbers to the behavior.
  - Mitakash: There are a bunch of ETH vault holders that lost capital in this downturn. Is there anyone thinking about maybe they lost confidence in Maker and hence are not opening new vaults? Perhaps that is why the Dai supply is not increasing?
  - MM: That's my take on this. More than 50% is a confidence issue. It's a real effect, and we can't ignore it.
  - Vishesh: I would agree with the reality of the effect. But if you consider the proportion of vaults with loss versus the total vaults, then it isn't the biggest chunk. There are things we know, things we don't know, and things that we don't know that we don't know. Sure, there are some degree of confidence that are less than 100% but greater than 0%. We can reasonably say that based on historic ETH price effects and how it impacts leveraging behavior, this is not new. Post large crash in ETH price, we've seen less minting than in the past. It gets into subjective arguments and not quantitative data. We don't have the exact proportion of impacts. There are multiple variables, and there is no complete narrative.
  - LFW: We don't know how much to attribute to Maker versus ETH price surge.
  - MM: We do have some indicative data around price lags before the peg comes down. It wasn't clear in the debacle. But there is a lag effect, and it does seem important. Only so much Dai can be minted with the collateral in the system. I do agree that the confidence interval is between 0 and 100. The peg still follows the general market mechanics. We haven't had enough of a bull run to really push the peg down and have people to have freedom in their vaults to have the freedom to mint. I think they pulled out because they thought it was another event they get liquidated and lose it all.
  - Vishesh: I was purely talking about Dai minting. Faith in the peg is more difficult. Market events are the prime driver. Historically, the Dai peg has fluctuated with ETH instability. If you look at a 90-day time frame, the correlation between ETH price movement and Dai peg, the movement drops, but it's still a 55% Pearson correlation. In times of high volatility, it jumps to 80% negative correlation.
  - WR/MM: Agree.

[01:34:10](https://youtu.be/hc3NCt7hcnw?t=5650)

- MM: If you look at a curve of confidence, we're low right now. Vishesh, you're right that the market dominates this whole scene, but I don't want to underplay the confidence being low at an all-time low.
  - WR: Are we jumping to the conclusion too quickly in calling it confidence? Minting is one part, but we don't know the other metrics to portray confidence, for instance, the velocity of minting, or the recency of events.
  - Vishesh: An old analysis I did with ETH was looking at short-term and long-term averages. The idea being how "cheap" people think ETH is in the short term vs. in the long term. I think it has a strong relationship with Dai being minted and the Dai supply. My point is that you can't make it just about confidence. There's also ETH price impact.
  - MM: There is another component of confidence, confidence in the markets, in Maker, in ETH going through the floor. People don't want to take risks. It is a risk-off event.
  - Vishesh: It might be helpful to think about confidence in the protocol versus sentiment around ETH. I think ETH sentiment is the prime driver very often.
  - MM/WR: Yup, agreed.

[1:37:15](https://youtu.be/hc3NCt7hcnw?t=5835)

- Chao Pan: Confidence in borrowing USDC and peg arbitraging means that vault owners are 100% confident they don't get liquidated, but they don't push against the current percentage. Probably because of the high-interest rate. It will still take two weeks to have a rate below 10%. This means when after the first week, those that borrowed Dai two weeks ago might break even. It only takes one week if they lose money by being the first actors in arbitrage. That will be another upside pressure for Dai. My suggestion is: do we want to have a directional vote for USDC SF? We really don't want a higher one than current right? In the context of SCD shutdown, there is 10MM debt, which means the only way to pay back is buying Dai on the market or generating Dai using USDC, and it's all an upward push.
  - LFW: Regarding the point of initial arbitragers closing out when they break even. If that pushes the Dai price up again because SF is lower, you should see another wave of arbitragers come and push it back down.
  - Mitakash: Can you please explain this arbitrage mechanism?
  - LFW: I can try. Essentially, you have USDC locked into USDC vault. If Dai is trading above a dollar, you mint Dai with this USDC. Then you sell it for more than a dollar, for USDC, and then and you have more USDC than you have Dai. In the future, you are betting that Dai will continue to come down.
  - Mitakash: So it's not a complete arbitrage. If you sell that Dai and Dai doesn't come back down for you to buy at a lower price, it is not arbitrage. You're betting on market events.
  - Vishesh: This is one of the biggest hesitancy with engaging with USDC for arbitrage. You don't know how long you're stuck in your Dai position before the price comes back down. Which means you don't know how big your fee will be. At around 20%, it is not an inconsiderable number.
  - CP: Isn't it that the case for lower SF, so they can push the price down without accumulating significant interest? All of this is an expectation on Dai price. If people expect a premium to be there, they will still not act. Even with the SF down. No new market makers will come into what we call "arbitrage."
  - Vishesh: It is definitely possible to make that argument. The bigger point to overshadow this is: until ETH confidence returns, there will be a premium on Dai. Since Dai has proven that it's a useful asset in times of great volatility. In that, you can arbitrage it or take discounts on liquidations. Because it has these use cases and is able to make a passive yield. That asset becomes extraordinarily valuable as a result, possibly more than USD or USDC. That, combined with the fact that supply just took a huge haircut, maybe more so than demand. It may continue to trade at a premium until overall market sentiment changes.
  - LFW: I don't think anyone is suggesting that USDC is a permanent solution for the Dai peg and that people will have to sell back to Dai. The point is to spread out the liquidity crunch. So, ultimately the people who are using that are relying on ETH confidence and people opening more ETH<->DAI vaults.
  - Mitakash: To me, the least rational actors are the Dai holders in DSR. If you're expecting 3-4%, why not grab a 2% return right now. But no one is doing that.
  - MM: We don't know where the Dai is coming from. Since on secondaries, you can borrow and deposit back into the DSR. People are borrowing other assets and locking Dai into DSR. It's speculation but the only one that I can come up with.
  - MM: I agree with you that this whole USDC to mint Dai is not a true arbitrage event. An arbitrage event is to sell on Coinbase at $1.04 and buy from dYdX at $1.03. That happens simultaneously and is a real arb. What we're talking about is a Dai PUT. One-sixth of what's out there did the PUT, and maybe some arb, and then unwound it pretty quickly. Whereas 6 Million sits out waiting for auctions at 20%. As a person who might take on a Dai short, I would unravel that quickly. I don't care if it's 20-30%. I'm going to make money and do it fast. I don't like that those people are sitting on it, and I think going up on the SF would tap on those people to do anything, to be an active maintainer that does something in the system, and then observes a response. Then, we can make a call about whether to go down or further up to eliminate some of this behavior.
  - Mitakash: You're discounting one fact. The reason people minted or borrowed that Dai is to set up for the auctions. We didn't know when they would happen; governance takes its time. It could have happened Monday or Friday. It's probably still sitting waiting for auctions.
  - MM: Why would you sit on the fees, though? Wouldn't you want to use it quickly? I imagined this more like an emergency facility that people would go into and out of quickly.
  - Mik: I agree, but the reason they're using it for emergency still doesn't take into account that the timeline is all over the place. This could have happened last Saturday.
  - Cyrus: Sorry to interject, but can we take this conversation to the forums?

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
