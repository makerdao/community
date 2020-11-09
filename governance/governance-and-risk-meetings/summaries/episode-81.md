# Episode 81: March 20, 2020

## Agenda

- [00:00](https://youtu.be/OIWJ8tdGnbk): Intro with Rich Brown
- [5:02](https://youtu.be/OIWJ8tdGnbk?t=303): Considering PR response, How to give the DAO a voice with LongForWisdom
- [18:22](https://youtu.be/OIWJ8tdGnbk): Flop Auctions with Cyrus Younessi and Kurt
- [35:48](https://youtu.be/OIWJ8tdGnbk?t=2143): Discussion about Community Considerations for an ES of SCD

## Video

<https://youtu.be/OIWJ8tdGnbk>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/OIWJ8tdGnbk)

- Hello everyone, welcome to Friday's 'life comes at you fast' edition of Governance and Risk Call. This will be the last of the daily calls in response to Black Thursday. Today's agenda should be simple, and, thanks to Longforwisdom, maybe we'll be having two meetings a week going forward.
- We'll be discussing Public Relations in the context of MakerDAO. Aligning on that issue is tricky. But, with the domain experts we have, it would be nice to look at important topics beyond the usual monetary policy, risk, and technical solutions. The questions of how we handle sentiment, get ahead of narratives, and correct misconceptions in the ecosystem will be important. This would require nuanced messaging and some proactivity getting ahead of emerging trends.
- Mitote will kick off some discussion around SCD shutdown, and afterward, we will have further freestyle discussion.
- Give us feedback about the call and don't talk in the sidebar over hopping on the mic.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Governance

### LongForWisdom

#### How to Give the DAO a Voice

[5:02](https://youtu.be/OIWJ8tdGnbk?t=303)

- LFW: We need to figure out how to make the DAO speak authoritatively. A mechanism for speaking as a unified force requires us to agree on a statement.
  - Rich: We have this disparate group of people loosely affiliated, so how do we align and find consensus on what the community wants to say. How do we see agreement and figure out what the community wants to say? Are you thinking of a working group?
  - LFW: I haven't modeled it out. We could have a PR domain team or ratified facilitator. This person or group will attempt to synthesize the points that the community is saying into cogent points. Or, rather than having one person, we could decide on some points that people loosely agree with and refer back to those.
  - Rich: Opinions, principles, etc. of the DAO or speaking for the DAO in the media is a different bucket. Factual information, however, seems like a better and more realistic use case.
  - LFW: In general, facts aren't hard to spread on public forums.
  - Mitote: This is bigger than just making statements, right? There is also the marketing: how you present Dai, liquidations, and vaults is more than making statements. In the liquidation example, it wasn't clear that vault owners could lose a lot of collateral. It's more than just making statements.
  - LFW: Especially in the last week or so, saying that we would handle vault holders who got liquidated would have been great.
  - Mitote: That wouldn't matter as long as marketing and communication was handled before.
  - LFW: I agree, there are definitely non-emergency roles there.
  - Rich: Being in the middle makes this challenging to tie it all up in a bow. We need post-mortems for this time, and adding to our communications would be best. We are at a phase of maturity where the community needs to start organizing these roles. There are people in this call that could contribute well to this kind of project. Are there people on this call who have experience with these matters? I see Rich shaking his head.
  - LFW: It's the same situation as usual, with a long list of to-dos and a limited amount of people to do them.
    - Mitote: I'm interested in helping out, but this is different than the usual PR mechanism. Very few people understand what happened, and this fact needs to be communicated; the complexity of this experiment and the complexity of resulting effects need to be explained.
  - Rich: This is an ongoing challenge of aligning the community's understanding of this system. This PR endeavor will be demanding responsibility for coalescing the opinion of an amorphous group of stakeholders.
  - LFW: Another complicated aspect is that there aren't private conversations to reach a public statement in a DAO.
  - Rich: In crafting a message, there is no room for public brainstorming.
  - Igor Teslya: I've been taking notes here and been incredibly impressed with the response. It's quite amazing. I think people would be quite impressed with what we do here. I wouldn't mind helping out with this matter.
  - Rich: Well, there certainly won't be any gatekeeping. I think another thing to do would be getting negative narratives and reactions collated. Often people have concerns that are misguided or misinformed. We need to make people aware of these.
  - Rich Lopez: Three scenarios I've seen where an external reporter:
    - 1. Listens in on a call and quotes what people said,
    - 2. Reaches out to individuals and these people give quotes with the caveat of "I don't speak on behalf of other people,"
    - 3. Reaches out to people on the call, and they say, "I represent the Maker community." I see the Messari and Coindesk on this call, and I wonder which is more common.
  - Tim Black: We should hash this out in the forum either in a category or in a working group. I'll throw some resources that way.

## Risk

### Cyrus

#### Flop Auctions

[18:22](https://youtu.be/OIWJ8tdGnbk)

- At this time, based on the [auctions link](https://auctions.makerdao.com/flop), 37 auctions have been completed. The closing price on many has been at 265 Dai per MKR. Three auctions currently remain. Another 67 of these auctions will need to be triggered, and I'll let the devs speak about this.
- Kurt(Maker foundation, smart contracts team): If anyone was paying attention to the public messaging, we have been expecting 49 flop auctions on Thursday. Nine flop auctions are missing. One was sniped out by enough surplus coming in to prevent being triggered. So there are eight auctions to account for.

  - In the system's asynchronous accounting system, debt going to flop auctions is treated differently from other types of debt. Keepers triggered things where eight flop auctions worth of debt cannot be flopped. This is a bug in the system that can be easily addressed by governance. In doing so, the debt will be converted into a form that cannot be flopped. The long-term effects on the smart contract and subsequent upgrades will need to be addressed.
  - This is considered a bug because the contract has failed to start the correct amount of flops in the promised amount of time. It's a violation of the property that flops need to begin as soon as the debt comes in. This will be addressed more in-depth soon.
  - Cyrus: What is the severity of this issue?
  - K: Mild.
  - Rich: Mild for whom? Is it just an inconvenience?
  - Mariano: We were debating whether to call this a bug or not. We decided to call it a bug because it breaks what the contract **_should_** do; after a waiting period, bad debt should be flushed out and sold in debt auctions. The way this happened, some amount of it is stuck, so it cannot be flushed out after the waiting period of 6.5 days. But it can be canceled out through surplus. The debt is still there and has not been canceled away. It does break the risk parameter of bad debt being canceled out through flop auctions by minting MKR. I believe there is 400,000 Dai of blocked debt.
  - Kurt: There is 400,000 worth of bad debt in the system that is blocked from being covered by flop auctions. There re straightforward actions to unblock this debt through governance. This can be fixed with smart contract upgrades, although, of course, there is a risk to upgrading smart contracts in different ways.
  - LFW: How much more might we expect to get stuck in flop auctions in the future?
  - Kurt: Depends on the behavior of keepers. There are two functions for canceling out bad debt. One is for canceling out that bad debt sent to flop auctions and one option for canceling free debt (which is bad debt that hasn't gone to a flop auction yet).
    - If keepers are only using the function that cancels out the free debt than that's where this problem arises where debt gets stuck. The keepers should prioritize canceling out the debt gone to flop auctions before they cancel out the free debt. But since it's open-source, we have to just steer everyone towards better logic, especially given that some keepers use proxies with varieties of logic. Other factors include keepers calling functions in the wrong order and the rate of `sin` queue vs. rate of surplus coming in from flop auctions. It won't be all of it; it could be some of it; it may not happen at all.
  - LFW: This isn't an incentive thing, right?
  - Kurt: No, it's just the system behaving how it shouldn't. It's not an attack on the system, and governance can fix it easily. If one sees this as "code is law," then there is no problem, but since the system isn't conforming to a behavior, I would term this a bug.

- Mariano: My recommendation is that we notify the community, with Kurt making the presentation.
  - Kurt: I'll get some slides up and running for everyone on a forum post.
  - Rich: What is the timeline for any changes? Do we want to lay this on the current executive?
  - Mariano: I don't think so unless the community feels this is a problem. There will be more flop auctions coming, and less than 10% are blocked. Once we tell the community via slide setups and forum posts, we can have the governance vote next week after we propose a fix.
  - Wouter: What is the worst case? Is it only that a few auctions get stuck and are delayed? If we act too hastily, we can have a bug, or worse things can happen. Let's see how we can best fix this thing. We can take our time and avoid any mistakes.
  - Mariano: We already have a short and medium-term plan. The long-term will be discussed.
  - Wouter: We should do things right.
  - LFW: Absolutely, worst case would be someone doing that on all auctions on purpose.
  - Kurt: You can't do that to all the auctions necessarily, it depends on the timing of surplus and debt from `sin` queue, it's not guaranteed someone can mastermind blocking all the flop auctions. It just depends on how those variables interact. Governance can always fix what you might break.
  - Wouter: The first priority is to configure keepers so that the window for sabotage, or delay, is as small as possible. Then there potentially won't be a single auction that gets delayed.
  - LFW: Agreed, this doesn't seem urgent.
  - Kurt: By next week, with the coming batch of `flop`s, after those pass, we can assess stuck debt. Then we can run an executive to send all the debt back to the flop auctions in the queue with keepers in the loop. After that, we can upgrade the smart contracts, so we don't deal with that issue again.
  - Rich: We'll regroup in [the forum thread.](https://forum.makerdao.com/t/blocked-flops-debt-auctions-everything-you-need-to-know/1748/2)

#### Discussion and Comments

[32:54](https://youtu.be/OIWJ8tdGnbk?t=1975)

- Cmooney: The normally cadenced executive vote is getting code polished right now and will go out shortly.

[33:26](https://youtu.be/OIWJ8tdGnbk?t=2006)

- Cyrus: I don't think the flop auctions need to be further analyzed at this stage.
- Rich: How did the price discovery mechanism in the flop auctions work out?
  - Cyrus: I think it worked surprisingly better than anyone expected. One, we saw a wide range of participants. Secondly, the 6-hour waiting period didn't factor into a large discount on the bidding price. Thirdly, secondary market liquidity didn't disincentivize bidding. It was successful from what we've seen so far.

[34:52](https://youtu.be/OIWJ8tdGnbk?t=2092)

- Scottrepreneur: There is also a PR rumor to squash about the Foundation participating in the auction.
  - Rich: I saw that. I unfortunately, didn't have the time to catch myself up about that.

## SCD and ES

### Mitote

#### Discussion about Community Considerations for an ES of SCD

[35:48](https://youtu.be/OIWJ8tdGnbk?t=2143)

- Mitote: I can ask questions about this topic, but I certainly can't speak for relevant stakeholders. For MKR holders: what do we need to know, or what parameters are changeable by Governance? In what situations should be considering ES.
  - Rich: There are 3-4 of these threads happening right now for SCD(listed at the bottom of the summary.) I want us to outline the points.
  - Cyrus: Let's set some context first.
  - Rich: There are a number of conversations regarding ES of MCD and SCD. Both of them boil down to the same base questions that need to be answered. What are the thresholds and criteria that need to be fulfilled before ES is considered appropriate? We also need to understand the implications of hitting this big red button. We have a notion of "turn it off and start it back up again," but we don't have a model for what that concretely means. We need to understand precisely what are the steps and in what order and how to communicate the implications. Maybe the starting question should be, "in what situations is ES appropriate?"
  - Mitote: That's accurate. I just think MKR voters need to understand it if they vote on it.
  - Rich: We have this big red button, what's the threshold that has to be met before we consider using it?
  - LFW: Not sure, but you need it to limit a worse possible thing from happening. Though ideally, you need to hit the button before the worst possible thing happens, so it involves making a short-term prediction. In order to predict the severity of losses without an ES, for example, we can start by monitoring liquidations(to predict short term expected losses.)
  - Rich: Do we need models to help us see when we hit no return?
  - Cyrus: I think that's a super tricky proposition. Trying to trigger ES before a big loss doesn't have clear lines of who to save and who doesn't get saved. We might protect one big stakeholder while hurting another; we don't know. I don't think we've clearly established the lines of who can be saved, and who should be on the opposite end. When dealing with financially-based thresholds becomes super tricky. One criterion for ES that I remember is that it should only be used for technical issues. Anything financial, where the protocol is operating as intended, shouldn't necessarily warrant ES. Not saying that I agree with that, just that there are different criteria, and we should be careful.
  - LFW: This is part of the problem; different people have different ideas. Technical, Governance attack, or limiting losses to the system. That brings us to which users we're hurting or benefiting.
  - Mitote: This also circles back to the PR thing. We understand what ES is and how it frames things in terms of a worst-case scenario. But there are still questions among us, which means users also have questions.

[44:17](https://youtu.be/OIWJ8tdGnbk?t=2657)

- MakerMan: We had an event with $5 Million of losses building, and the market dropping. If you ES after that ~$5 Million loss in value. You can look at that event and ask if it fulfilled the possible criteria. Were the \$0 auction bids seems like a technical issue? If that wasn't it, what is? If we, as a community, decide to only shutdown over technical issues, it means we'll crush ETH, DAI, and Vault holders(It Depends on how much losses are on the system when the ES happens.) Vault Owners make out okay, and Dai holders get whipsawed. These groups need to know what is happening and what the conditions of an ES are. There isn't really an in-between for other stakeholders, which is part of the PR problem. There are so many stakeholders. Maker ate a whole lot of money here, and I started a thread to let Vault users vent because I thought it would be a positive thing.
- MakerMan: Simultaneously, we have the SCD shutdown. If we shut that down, people will require that collateral. Can we even do that? I think that ES in the worst market conditions is a double-edged sword. Who jumps on it? I think this goes beyond PR, it needs a decision beforehand and then PR on top of it.
  - Kurt: With ES, the core question is _who are you protecting?_ and _for what?_
  - MM: I think it's appropriate that we open this up for the entire community to discuss, not just MKR holders. We have the Vault owners and Dai holders as well. Clear scenarios need to be laid out and analyzed. It will initiate a discussion that has bad PR optics. MKR holders will ultimately decide, so we should get a handle on it before acting.
  - LFW: Also, it's worth noting that any decision we come to publicly may not be binding. Any MKR holder or syndicate of MKR holders with enough MKR can shut down the system at any point. It's difficult to make a definitive statement or proclamation because some whale could hop in and disagree.
  - Andy: Perhaps an agreement regarding what we consider to be a non-malicious shutdown is worth examining. Some community agreement on when to shutdown is better than none. Having that agreement will give an MKR whale more certainty that if they burn their MKR in the process of an ES, that governance will reimburse them on the redeploy.
  - LFW: That makes sense.
  - MM: I considered ES as an attack vector. It's more of an ongoing discussion and one that we can't have privately.
  - Rich: Agreed. It's not impossible to make a map of the process. I just want to see a clear explanation of what a restart of the system would look like and what the ecosystem response could be. Personally, I think that it's naïve to assume that if we shut down the system and restart it, it will just pop back up in a week easily.

[52:41](https://youtu.be/OIWJ8tdGnbk?t=3161)

- Rich: If people are considering the parameters and reasoning for an ES, they cannot do it under the assumption that there would be a magical restart next week. Having more informed assumptions is important.
  - Makerman: We should have scenarios laid out about if we do and if we do not ES. Then we let them people consider these scenarios and have a free for all discussion. After the community responds, we can consider the responses and see how we can improve our answers. It won't be fast.
  - BrianMC: Keep in mind that ES breaks all outside integrations(Chai breaks, Aave breaks, Compound breaks, Numerai breaks, etc.) It should really be considered as a last resort, so keep that in the back of your mind.
  - Rich: That's a great point; we should discuss who the primary stakeholders are and what communities are affected. How does this affect DeFi as a whole?
  - MM: I think this is why we have these discussions. I could have guessed, but I would never have thought that ES breaks all of these systems. That(series of dependencies) takes this off the table even further and adds additional urgency to this discussion. We need to have every brain on this, especially in regards to why we don't want to do this. We don't know the implications of ES.
  - Rich: To review, there is **scenario planning**, **criteria for initiating ES**, and a **review of the actual mechanism/process** to do so. Then the question of, how do we recover after an ES?
  - Mitote: We can discuss scenarios, but I want to emphasize that MKR holders are the ones who actually do the shutdown.
  - Rich: That's an ever-present factor, we need to step outside of it and figure out exactly what it looks like in order to better inform MKR holders.
  - MM: We have this group and the democracy of the chat, setting the tone of the conversation, and working the front lines. We've seen historically that the major holders and voters do follow that lead. I'm unfamiliar with any examples of the voters acting in the complete opposite. The ecosystem does follow the tones initiated in these groups, so it is not a wasted effort.
  - LFW: Let's figure out what is considered a malicious shutdown.
  - Rich: As always, this circles back to the urgency of issues vs. the apathy/denial. The market has forced us to confront these issues. One risk in my mind is that markets stabilize, crypto goes up, and then we push this out of our recent memory. We should work through this mental block and capitalize on this unpleasant scenario to work through this before any further issues.
  - LFW: We need to be ready for the worst-case situation.
  - Rich: SCD shutdown mechanism will help inform models of the other shutdown scenarios.

[1:01:53](https://youtu.be/OIWJ8tdGnbk?t=3713)

- Rich CL: Suggestion/reframe. I see the technical parts of ES as reliant on MKR holders. I think it still makes sense for the greater DeFi community to press for clarity. I would imagine that there is room for consortium; for a handful of people from each of the protocols to participate in this discussion. If there are 2-3 people on this call who can reach out to the people of Compound, etc., we can gather a more robust understanding of the implications of ES.
  - Rich: You have hit the nail on the hammer. 'Potential' effects on these stakeholders should be clarified by actually talking to these stakeholders and seeing what they think.
  - Mitote: I definitely agree with that a lot. Expanding on the point, it would be good to talk to these stakeholders and understand their risk profiles and plans for an ES.
  - Rich CL: To that point, if other people on the forums are participating in this, I can volunteer alongside a few other people too, alongside other people, to invite some of these stakeholders to this thread. I think this can be done relatively soon to measure feasibility.
  - Mitote: The recent events will also make ecosystem actors more likely to take this conversation seriously.

[01:06:20](https://youtu.be/OIWJ8tdGnbk?t=3974)

- Rich: Let's make sure the momentum continues. RichCL, feel free to pursue your aim. Long can potentially help you. I think there are three or four parallel tracks that we can initiate here. Figuring out how, when, why, and who would be super relevant so that we can be prepared for the next time we have a discussion on ES. This ultimately is a community-led effort and decision. The community will create the platform for the rest of the ecosystem to become informed and to have a voice in regards to ES. The Foundation will do everything we can to help out. We will also have parallel internal tracks internally, including technical documentation. Once the community understands what the implications and steps involved are, we can better internalize how to handle ES.
- M: It takes example scenarios to demonstrate real people with real personas and then moves into how it affects those people. Direct engagement between stakeholders and Maker would be best. The people that do not directly engage with Maker also need a voice.
- Rich: Right, example scenarios will help make this real. We need to figure out the demographics of who is involved. Communications will be tremendously important, too, so we will have to coordinate who is going to be out there speaking to the ecosystem.

### Further Questions and Discussion

[1:11:49](https://youtu.be/OIWJ8tdGnbk?t=4309)

- Willaim Remor: For the Governance Poll, will that return to the regular cadence?
  - Rich: My assumption is that we don't have to do these calls daily anymore. Considering that Long pointed out that we are in the middle ground, perhaps we will do two per week. Either Tuesday or Wednesday, we can do a governance call, and then another one on Thursday. Let's hope we don't have to talk to each other on Monday.
  - WR: Calls all week have been hugely valuable. it's easier to maintain a line of thought even if they are long.
  - Rich: I got sentimental last call when our intention was to just be open-minded. I was really impressed with the response of the community. We've come out a lot stronger in the forums and the chat. Thank you again to everyone for coming out and contributing.

[1:14:29](https://youtu.be/OIWJ8tdGnbk?t=4469)

- Aaron Bartsch: Looks like polling is saying to forgive SF's in SCD Shutdown. I'm wondering, what is the priority of lowering the SCD debt ceiling, so people are no longer minting in SCD is we decide to forgive SFs. Cyrus?
  - Cyrus: I think the DC is somewhat tangential to the notion of shutdown and SF forgiveness. At this point, the DC should match the supply fairly closely.
  - SamM: That issue with the DC maxing behavior was when the DSR was a lot higher. It is no longer really an issue. The time frames are for several months.
  - AB: Polling is also saying that people want to shut down within the month. It will have to go to an on-chain poll to see what MKR voters want to do. If we have more time, its less of an issue.
  - SamM: I don't think it is as much of an issue anymore.

#### Links from the Chat

- [Forum Thread: What about Emergency Shutdown - Why Have we Ignored This Mechanism?](https://forum.makerdao.com/t/what-about-emergency-shutdown-why-have-we-ignored-this-mechanism/1702)
- [Forum Thread: Signal Thread: SCD Shutdown](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673)
- [Forum thread: Summary/Discussion of Parameters for SCD Shutdown](https://forum.makerdao.com/t/summary-discussion-of-parameters-for-scd-shutdown/1130)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
