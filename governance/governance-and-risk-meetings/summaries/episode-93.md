# Episode 93: May 21, 2020

## Agenda

- [00:00](https://youtu.be/Rbd2hDIk7vc): Intro with Rich Brown
- [05:53](https://youtu.be/Rbd2hDIk7vc?t=353): Governance at a Glance and SourceCred Trial with LongForWisdom
- [11:02](https://youtu.be/Rbd2hDIk7vc?t=662): SourceCred Trial with Dandelion Mane
- [28:59](https://youtu.be/Rbd2hDIk7vc?t=1739): Weekly MIPs Update with Charles St. Louis
- [37:41](https://youtu.be/Rbd2hDIk7vc?t=2261): GSM Delay & Dark Spell MIP with Wil Barnes
- [49:38](https://youtu.be/Rbd2hDIk7vc?t=2978): USDC-B Proposal Overview with Cyrus Younessi
- [52:15](https://youtu.be/Rbd2hDIk7vc?t=3131): State of the Peg with Vishesh Choudry

## Video

<https://youtu.be/Rbd2hDIk7vc>

## Introduction

### Rich

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/Rbd2hDIk7vc)

- Welcome to the May 21st edition of scientific Governance and Risk meeting, my name is Richard Brown. Today I am the only Governance Facilitator for the next week or so, but we'll discuss that later. We have some themes arising in the ecosystem, more than we can track. One of the themes is cognitive overhead and the number of threads that we need to keep organized in these calls. The theme I want to discuss today is whether algorithms will save us or not and whether humans are a good thing or a bad thing. It's my contention, and probably all of us in the group that enormously complex systems still require humans. We're not in this glorious future yet where a python script can replace all of us. Hopefully, that day is coming [*laughs*], but it's not here yet. We have to maintain two tracks in this Governance ecosystem. One of them is code, and one of them is a social layer. The social layer is where it gets tricky. There, we have to deal with interesting things like reputation, identity, consensus, and debate. All kinds of endlessly murky and fascinating topics need to be explored to have large groups of individuals align on a mission and execute on that mission.
- That's why we have these calls, their hard benefits; Information sharing, broadcasting general topics, and trends, but there is also a cultural component: a social construct where we all align on our own identity and come to conclusions about our norms and expectations. These things are all very complicated. Though they happen organically, it doesn't mean they can't be helped along.
- That's my segue into chatting about today's agenda. The team from Sourcecred is attending today to talk about their project that helps align the complexities of the social layer with incentivizing activities that are good for the protocol. And vice versa creating a symbiotic relationship with the social layer. I'll leave explaining those mechanisms to them.
- Later on in this call, we'll have a section dedicated to MIPs, which we will increasingly devote more time to. As we create more cultural norms, how we talk, how points of order are addressed, whether I need a powdered wig or not [*chuckles*].
- Wil Barnes is here, and thank you for picking up a critical issue to discuss and drive forward: [the GSM delay and the Dark fix.](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578) Call it what you will, but the GSM delay is a technical protocol problem that has been solved. To tie this back to my original thread about complexities, there is a social layer here. We need to get into other murky topics like trust, reputation, and identity and how that relates to the dark spell mechanism.
- Charles will give us the [weekly MIPs update](https://forum.makerdao.com/t/weekly-mips-update/2576) as we dig ever deeper into that world.
- Discussions happen in the [forum.](https://forum.makerdao.com/)

## Governance

### LongForWisdom

#### Governance at a Glance

[05:53](https://youtu.be/Rbd2hDIk7vc?t=353)

##### Three Bullet Summary

- DAI remains above $1, averaging around $1.005 over the last seven days.
- There are many [MIP 6 collateral applications on the forum](https://forum.makerdao.com/tag/collateral-app). Please consider leaving constructive comments!
- DAI supply has increased by ~$10 million in the last week, largely due to ~$4 million minted using wBTC as collateral.

##### Discussion Threads

- [Hashing Gov Polls and Process MIPs onchain](https://forum.makerdao.com/t/hashing-gov-polls-and-process-mips-onchain/2506)
- [Discussion thread: Let's lower the ETH liquidation penalty to 5% to restore the Peg](https://forum.makerdao.com/t/discussion-thread-lets-lower-the-eth-liquidation-penalty-to-5-to-restore-the-peg/2535)
- [Maker SourceCred Trial](https://forum.makerdao.com/t/maker-sourcecred-trial/2551)

##### Signal Request Threads

- [Signal Request - Change the Stability Fee Structure](https://forum.makerdao.com/t/signal-request-change-the-stability-fee-structure/2380)
  - SamM: Results are in, the poll passed. Next week we're going to start voting on the base rate vote, which means less weekly votes. Splitting the fees into a base rate plus premium set up. So, yay!
  - LongForWisdom: Great, also a reminder that this was the first test of [ranked-choice voting](https://en.wikipedia.org/wiki/Ranked_voting). Does anyone have any comments?
  - BMM: We need to do that for more things, I can't wait for the next one.
  - Rich Brown: There might have been some confusion in the ecosystem about ranked-choice, and it's default application. It was my understanding that it was a new tool but not a default applied to all votes, and other people had a different understanding. I went back and read through all of the posts and couldn't find anything about, by default, adding it to monetary policy votes. Certainly on the table though, I'm open to either, and they might be a good fit for the monetary policy votes.

## Governance

### Dandelion Mane, Product Lead

#### SourceCred Presentation

[11:02](https://youtu.be/Rbd2hDIk7vc?t=662)

![](https://i.imgur.com/U4kKWN7.png)

![](https://i.imgur.com/pBzfVAx.png)

![](https://i.imgur.com/nAMVtjm.png)

- PlanetX made this chart of governance-overhead as the complexity increases. It gets increasingly unrealistic to have governing the protocol be unpaid.

![](https://i.imgur.com/qwYwmAr.png)

![](https://i.imgur.com/voX2rxV.png)

- Governance decisions with value generate a lot of `Cred`, a quantitative score.

![](https://i.imgur.com/m8X6oNb.png)

- In this situation of two potential contributor threads, a naive algorithm might measure engagement or _amount_ of activity. But using Sourcecred, the toxic Forum post doesn't get any `Cred` because it doesn't have any relation to the governance decision. It's assumed, in this case, the Governance decision is high value.

![](https://i.imgur.com/3KPcC5T.png)

- For Sourcecred to work, a Maker plugin would be needed. We haven't built one yet, so we just use discourse's graphs, [*discourse is the platform the for forums*].
- For SourceCred to work, there needs to be something to flow `Cred` from. For instance, it can go from likes in a discourse post, and then flow through a graph of contributions.

![](https://i.imgur.com/Hr1jwp2.png)

- This is something we can do today, with top topics ranked, as well as user scores ranked if they were connected to posts referenced in high-value posts/discussions.

![](https://i.imgur.com/Gr4tn6R.png)

![](https://i.imgur.com/JILD8GR.png)

- This is a community-driven algorithm with a lot of sensitivity to parameters. As you can see, we weighted heavily with likes. There's lots of configuration about minting `Cred` and how it flows between different actions. E.g., references and posts.

![](https://i.imgur.com/l7HWBlo.png)

- A couple of months ago, Seth Benton came on the Forum to post the initial Cred distribution based on the forums. It built into a conversation to talk about compensating everyone participating in Maker Governance. After talking to the Foundation, we came up with his proposed trial of 3 months (June-August). We'll do weekly payouts of Dai, which will be based on lifetime `Cred` scores. This algorithm tries to reward underpaid people, with lower `Cred` being paid first.
- We use this algorithm and compensation structure on our platform, paying participants in our native token, called `grain`, which is redeemable for dollars. We've had good results, distributing 400K worth without much gaming of the system or weird behavior.

![](https://i.imgur.com/uvyAjuB.png)

- There needs to be buy-in from the community, both with individual conversations for any users, potentially gaming, and weighing various parameters.

![](https://i.imgur.com/YstmOES.png)

- We'll post the link to our community call and our discord. Please attend next Tuesday!

#### Questions and Comments 2

[19:31](https://youtu.be/Rbd2hDIk7vc?t=1171)

- Rich: There is some cognitive overhead there. This is a tremendously compelling initiative since we have different demographics in this ecosystem. Depending on the level of interaction, classification, and a few other criteria, various levels of reputation and compensation are available to people who engage with our ecosystem. This is very compelling to me; there is an interesting experiment to be had here. We have a skin-in-the-game voting mechanism on the portal, but we've seen time and time again that the Plutarchs take direction from this loose representative democracy that we have operating on the forums.
  - Which creates a bit of a free-rider problem, how do we address this issue with a great deal of highly intelligent and engaged stakeholders doing exciting work on the forums? How do we address the problems of commitment drop off or burn out and make compensation adequate? Or at least understand what adequate compensation looks like. How do we reward people for there efforts? How do we disincentivize bad behaviors? These are all ancient "Hard with a capital H" problems in the space and the internet in general. I'm sure we'll figure it out now with crypto and engineers at our disposal. The idea is to do something good, push the protocol forward, improve the quality of the conversation, embellish the culture, and add to things instead of moving away from them. The community and the protocol will attempt to reach an altruistic state where people are rewarded for those activities. This is an enormous, complex, and sophisticated thing with far-reaching implications. We have to start somewhere, and Sourcecred is a fresh implementation for us to try. Hit up the trial details and make your voice words.
    - tl;dr Come and do useful things in the forums, and \$5k Dai will be allocated across people who provide value if it turns out to be a smashing success, then presumably, that pot will increase. If there are fascinating game-theoretical exploits we discover, then we can all improve together.

[22:53](https://youtu.be/Rbd2hDIk7vc?t=1375)

- Cryptowanderer: Thanks so much, fascinating presentation. It would probably be better when exactly when we build the plugin, how to make signal posts, and governance polls not first-class citizens in the Sourcecred protocol later on down the line. But my main question is around these negative feedback loops. If someone is behaving in a way that is contrary to the goals of governance, we should slowly encourage people to shift on or not game the system. This is doable when the community is smaller, but I was wondering if you can somehow assign a negative economic impact on negative behavior? That it isn't just social or emotional "hey, please leave our community alone," but that there are tools that can be implemented at larger scales to get people to behave or move along?
  - Dandelion Mane: This is something we talked a lot about a lot. Some platforms, like in GitHub, there are positive(thumbs up) as well as negative(thumbs down) reactions. We've thought about whether negative reactions should result in negative Cred. We've had success with focusing on the positive side, for the time being, letting negative feedback fall on the social/platform level. If we need to, we could implement a Cred "time-out" as a moderator tool. Say for the next two weeks; half your Cred would get recycled to other people. This could be a time scope kind of penalty. It's a pretty flexible system, and there are a few ways to build new behaviors as needed or punish bad behaviors, but we haven't had to do that.
  - CW: "Neg-cred" and "naughty-bucks" are interesting ideas.
  - RB: It's one of the interesting things, and I want to see how it develops. Dandelion can attest that I've had a bunch of piercing questions. I pelted him with a ton of negative hot takes; they survived and convinced me that it's a good idea. As a community, do we want to attempt to shape behavior with an algorithm? Or do we simply reward good work with Dai? That's a broad spectrum. On one end we have a social credit system where if you don't tow the party line you can't buy an airplane ticket. On the other end, people feel better with compensated free time. There's a big spectrum in between. Does the community want to attempt to disincentivize? That's a big decision. Incentivizing is a feel-good, let's move this thing forward, feeling. These are some of the interesting philosophical, ethical, social questions that we need to ask ourselves. And the good thing is that the SourceCred system gives us a path to start asking those questions.
  - LFW: Something I wanted to add to this conversation is that part of the trial details we set it up so that the trial will not proceed unless a forum poll passes with a majority because it is potentially disruptive. So if you do feel strongly about trying SourceCred or against, please feel free to [vote in that poll.](https://forum.makerdao.com/t/maker-sourcecred-trial/2551/2)
  - Rich Brown: Wonderful caveat to bring to the community as a whole, an escape hatch in the beginning, which is the first for a grant application. Thanks, Dandelion, and co. for that.

[28:03](https://youtu.be/Rbd2hDIk7vc?t=1683)

- Rich: Time to segue into the MIPS process. I talked about that at the outset, where MIPs is a new paradigm and mental model we're all growing accustomed to. Still trying to figure out if we separate sections of the call or not. Where we all put on our MIPs hats and behave in a MIPpy manner. Charles, I'm going to hand it to you, and after that, I think I'll perform my MIP responsibilities for the day, and then we'll give it to Wil.

## MIPS

### Charles St. Louis

#### Weekly MIPs Update

[28:59](https://youtu.be/Rbd2hDIk7vc?t=1739)

- I'll try to keep it briefer today as the agenda is quite packed. I've shared the [MIPs update](https://forum.makerdao.com/t/weekly-mips-update/2576) that I posted in the forums a couple of days ago.
- I'd like to go over the current results of the current governance cycle and [LongForWisdom's MIP](https://forum.makerdao.com/t/mip0c12-sp2-subproposal-for-core-personnel-onboarding-governance-facilitator/2351) that's been going through, as well as a few other MIPs that have been proposed and are in Request for Comments phase. And then introduce Wil, who will talk about the [Dark Fix Mechanism MIP.](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578)
- This week's main thing was that the governance facilitator facilitated a governance poll for the core personal onboarding of LongForWisdom to be added as a governance facilitator.
  - This poll passed today at noon EST.
- On today's call, we'll have to go through the review of the results of this poll and then confirm that the outcome of the governance poll is what we kind of think it should be and can then prepare for week four of the governance cycle which introduces the final vote for [LongForWisdom's sub proposal](https://forum.makerdao.com/t/mip0c12-sp2-subproposal-for-core-personnel-onboarding-governance-facilitator/2351) and an executive that will be posted next Monday.
  - The executive vote will be submitted if the governance facilitator confirms that the yes outcome of the governance poll during week three's governance meeting. That's what Rich will be doing as his duties today.
  - The vote will have an expiration of four days. After that, it will have no effect. In general, MIPs and sub-proposal only move to the executive's status if the executive vote has passed within that four-day limit. If the executive vote fails to pass within that four-day limit, the MIPs and sub proposals are changed to the rejected status.
- In the forum, I think J. Falman, I'm sorry if I'm mispronouncing that, asked if this is rejected, can it be reintroduced, or is this LongForWisdom's only shot at getting elected as a Governance Facilitator?
  - Right now, we're following [MIP 2](https://github.com/makerdao/mips/blob/master/MIP2/mip2.md). This is a period of time where we're bootstrapping the setup and implementation of the first governance paradigm. More specifically, this defines two main phases. Right now, we're in phase 1, when a core governance framework is put in place, and a functional collateral onboarding process is ratified. Phase 1 will last three months after being officially ratified, which was the beginning of this month. To answer that question: MIP2-phase 1 states that if the MIP is rejected, it can indeed be reintroduced to the community for another vote once the issues at hand have been resolved. So it's not his one shot at getting elected.
- In addition to that, LongForWisdom also introduced two other MIPs.
  - [MIP 13, Declaration of Intent](https://forum.makerdao.com/t/mip13-declarations-of-intent/2461?u=davidutro)
  - [MIP 14, Protocol Dai Transfer](https://forum.makerdao.com/t/mip14-protocol-dai-transfer/2462).
  - **Both of these MIPs are in the request-for-comments phase**, and there have been many ongoing conversations. LongForWisdwom has been trying to push the conversations forward, and I'm trying to get these introduced into the next governance cycle. If you have the time, check those out. There have been many conversations around the Declaration of Intent and how it could relate to bounties if we want to include a bounties platform as a part of the MIP or keep it external. So that's the update.
- In regards to next week, the last week of the governance cycle, the executive vote will be submitted once the governance facilitator confirms the yes outcome of this week's governance poll.
- Next Monday, May 25th, we also have the first community green light polls. The purpose of these polls is to give direction regarding what to do next regarding MIP 6 applications.
  - In the future, the community green light polls will be published on the 4th Monday of the month and will last until the Friday of that month. And the polls will last for two weeks each. I'll share more information in the chat about this, but it's all defined in [MIP 9](https://github.com/makerdao/mips/blob/master/MIP9/mip9.md). It's this process where MKR token holders can signal their judgment on the value of a collateral asset or a collateral type before domain teams can spend time thoroughly investigating and working on those requirements to get them added to the protocol.
- Next Thursday, the governance facilitator will perform the governance cycle review as part of the governance and risk meeting. They will summarize and discuss the past governance cycle with the community. You can also have the opportunity to discuss the upcoming governance cycle, what proposals will likely be proposed during that formal submission period and any possible submissions that might want to go in.
- In other news, concerning the transition to the collateral onboarding framework, I want to re-emphasize that we're still in this transition period from the current practices that we know, in the weekly cycle, to the eventual full transition of the MIP's process and the collateral onboarding framework defined in the MIPs.
  - Given that the community green light poll results will last two weeks, it will conclude around May 28th, and the MIP 12 proposals that would include the domain work for those collateral assets will not be ready for June's governance cycle. So the domain teams will determine which assets they intend to work on and signal their intentions. They can also begin working on the deliverables for those collateral types throughout June. And then we'll proceed through the transition process after that, and we'll see if it aligns.
- Lastly, for collateral onboarding, there was a community call yesterday held by Lucas and Leah, where they continued to discuss the PaperChain Drop application and the ConsolFreight Drop application and other MIP 6 applications. I don't have the video recording for that, but if someone does, please share it. It's nice to see these community calls keep happening. Hopefully, we'll be able to talk about the community green light on these calls and not take away too much time from the governance calls.

### Rich Brown

#### Governance Poll Review

[36:11](https://youtu.be/Rbd2hDIk7vc?t=2171)

- Rich: The governance poll review for this week has ended. There was one poll in that roll up, and the poll was for the ratification of a second governance facilitator. The poll happily this time around was unanimous, so it's moving to an executive vote at the end of the month. Beginning on Monday for four days.
- I also want to point out that it was unanimous this time so LongForWisdom will not be the most disliked actor in the ecosystem [*laughs*], so whoever voted 400 MKR last week had a change of heart, which is nice to see. The vote will move to an executive on Monday for final ratification. I believe that is the end of MIPs order, is that correct, Charles?
- CSTL: Yes. Perfect.
- Rich: Let's hand it off to Wil, and we can hear about the `GSM` and the dark fix and some of the tasty social layers of ambiguity that we need to consider.

## MIPs

### Wil Barnes

#### MIP 15 GSM Delay & Dark Spell

[37:41](https://youtu.be/Rbd2hDIk7vc?t=2261)

![](https://i.imgur.com/P7D4ywE.png)

- Thanks, Rich, for the intro and the words of trust in the social layer. We're six months into this deployment, and we have a `GSM delay` of 12 hours.
- The `GSM` is the Governance Security Module, which enforces a delay period before a given executive vote is applied to the system.

![](https://i.imgur.com/DVPRKA2.png)

- The predicament is that if we have an actual critical vulnerability, what do we do? Can we patch the system? The issue is that the spell[*governance proposal containing the fix*] will sit inside the voting system, and it will be delayed because of the GSM's delay period, and anyone can attempt to reverse-engineer it, creating economic damage, potentially causing MKR holders to trigger an emergency shutdown.
- We want to prevent the use of the emergency shutdown procedure, and we also want to keep the system operating with maximum uptime.

![](https://i.imgur.com/nG0JWt9.png)

- We have been discussing for several months on the forums; there have been great ideas proposed and a lot of input from the community.
- We decided to structure it as a MIP
- [MIP 15 Dark Spell Mechanism](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578) is available for review in the forums.
- The goal of the MIP is to have an initial policy in place that we can work from and introduce iterative design during future governance cycles after ratification.
- We have discussed the process, and we will have to communicate with the community and coordinate a governance vote using this Dark Spell to apply the fix. Having the MIP in place is the first step in the process.

![](https://i.imgur.com/RmxdAht.png)

- The advantage of the Dark Spell over the Emergency Shutdown is that there are several unknowns with Emergency Shutdown. Still, also it will have zero downtime and avoid reputational damage that might be caused by ES.

![](https://i.imgur.com/QDSkoFA.png)

- I encourage everyone to read this MIP on the forums. As of last night, there are eight sections, very generic. Most people will be familiar with most of the terms. Section 3 is Dark Spell requirements, which are for critical vulnerabilities.
- We have decided for section 4, that the Governance vote is a separate referendum, so each vote will be unbundled and voted on individually to fix a critical vulnerability.
- Policy 5 is a combination of the previous four sections. You can read more about it offline.
- Lastly, sections 6, 7, 8. This introduces the concept of Trusted Parties, someone the community selects and elects. The process is very lightweight and bare-bones right now.
- Section 7 is the election process. The parties could be anyone: individual, project, independent auditor, attestation firm, or smart contract security firm.
- Section 8 is the removal process.

![](https://i.imgur.com/wh8ybKr.png)

![](https://i.imgur.com/fPODWoD.png)

- So that's the spell. We need to continue discussing this, and we need to place this in the next governance cycle.
- The next steps are to join the discussion on the [MIPs channel in RocketChat](https://chat.makerdao.com/channel/mips) and the Forums.

#### Questions and Comments 3

[46:35](https://youtu.be/Rbd2hDIk7vc?t=2795)

- Rich: There's some exciting stuff embedded in here, and I want to draw attention to it. The crux of the matter is that we have to deal with trust, which is a very tricky thing to deal with in this ecosystem. Let's boil it down to the brass tacks. Somebody has discovered there's something wrong with the protocol that needs to be fixed. To do that, you need to run a tremendous risk: let people in the ecosystem know, inviting the risk of someone performing the exploit. The solution is a dark fix, where the domain team or the Foundation, or even a third party, says, "we have a fix for the protocol." We want the community to reply yes or no, vote this thing in. Still, we cannot tell you what it is, because if we do that increases the area of attack for the protocol, which is a conundrum; How does the ecosystem vote for something that they're not allowed to possess the details of. The solution is to find someone, an organization, or a group of individuals that possess some or all of the information about that exploit and can publicly signal that they know and agree that this is important. The community should vote this thing through.
  - And therein, that's where the complexities arise. Who gets trusted in this model? How much information are they provided about this thing that they're offering opinions about? What level of trust does the community feel comfortable with? Do they need to be bonded? Do we need to know what their address is? Do they need to have a corporation behind them? Is reputation enough? Is this something that the community has to identify a group of empowered actors that assume that responsibility on behalf of the rest of the ecosystem? There's a lot inside there. I encourage the community to have a look at that MIP and provide some insight because this is a thorny issue that needs resolution.

## Risk

### Cyrus Younessi

#### USDC-B Collateral Proposal

[49:38](https://youtu.be/Rbd2hDIk7vc?t=2978)

- This morning we [put in a proposal for USDC-B](https://forum.makerdao.com/t/usdc-b-proposal-for-collateral-onboarding/2582), with different risk parameters than the original USDC-A vault type.
- There's been a discussion with the community for a couple of months about having a separate instance of USDC for emergency liquidity, almost as an emergency credit facility. It's designed for keepers when they're running low on liquidity in times when there are a lot of auctions going on in a short period of time. This is designed to alleviate this. The stability fee is abnormally high to discourage long-term or sustained usage. Give the thread a read, and let's chat about it the forums. We can also discuss it on next week's call.

## Analysis

### Vishesh

#### The State of the Pegs

[52:15](https://youtu.be/Rbd2hDIk7vc?t=3131)

![](https://i.imgur.com/be63Zxc.png)

- Total Dai supply is up.

![](https://i.imgur.com/Hl9RdCC.png)

- For Dai from ETH, it is has been a linearly continuing trend since the sharp decrease in March. The Dai supply has just been rising. Our latest touchpoint on Dai from ETH is 104 million, which is very solid.

![](https://i.imgur.com/HAoC3Wp.png)

- That was ETH, so for Dai from USDC-A, we saw a considerable jump to about nine million-ish. That came up a bit about 4 million, and then went down back down in the last week. That has kind of stayed stagnant with a couple of small decreases since then.

![](https://i.imgur.com/3KWCtiK.png)

- Dai from WBTC saw a 4 million net jump yesterday, with 4.4 million Dai minted from WBTC, which is a fairly significant amount, given that the DC for WBTC is currently 10 million, so you have about 40% utilization overnight.

![](https://i.imgur.com/ygiaMO3.png)

- The impact this has had on Dai price was mostly what we saw was on the longer-time scale; Dai was at that persistently elevated price. ETH had made a considerable jump down (from May 10th to May 14th) and then was recovering (around May 15th), and then it sort of continued its rise and then slowed its growth in the last couple of days.
- We saw with Dai price, after the initial crash post-March madness, was that it touched back down to Peg and then started to come back up. There were some potential concerns about a rise happening again, so I wanted to address that.
  - What we saw was while ETH was cheap, there was no significant impact on Dai. That sort of communicated a degree of uncertainty as to what will continue to happen with prices. However, the ETH price did recover from that, and then we saw very light trading activity. This makes a lot of sense because you mostly have a lot of traders that feel that they mostly missed the boat and don't necessarily want to lever up now. So you saw very light trading volumes in that time frame. As ETH started to run up again, we saw a bit of an increase in Dai trading volumes, and we saw Dai price come down. That communicates leverage behavior, which corresponds to the May 18th time frame, there was a slight acceleration in Dai minting. This is indicative of a levering up move, which generally tends to bring the Peg down.
- And so, we're sitting very close to peg in the grand scheme of things. I would say that Peg is in a reasonably safe position. Though it is still persistently above a dollar, it is very close to $1. It had even dipped below $1 for a brief timeframe, even though the volume-weighted-average-price had not indeed come down. If you put things in perspective, depending on your definition of bad, the continually elevated peg price had come down during May. It looked like it was potentially going to go back up, but that was a temporary move that is easily explained by ETH's whiplash.
- Unfortunately, ETH has been jerking around the DAI price, but despite that, Dai does seem to be doing its best to return to Peg.

![](https://i.imgur.com/AaT1lFM.png)

- In terms of volumes, we saw that only 28.66M Dai was traded for ETH, which, in the global timescale in the history of Dai is a very solid amount. However, in terms of the last couple of months, it is not that much trading. The lower end of that was actually on Coinbase, and the higher bulk was on dYdX. A bit on Uniswap and Oasis. For a time, when a lot of the crash was happening in March, what we saw was that Oasis reclaimed a portion of the trading volume. Since then, a lot has reverted to dYdX. Most of the Dai<->ETH trading happens on dYdX, and a reasonably decent amount happens on Coinbase, which is on the lower end of the price range.

![](https://i.imgur.com/fNwtc2f.png)

- As far as collateral is concerned, for the WBTC collateral pool, it's kind of all or nothing right now in terms of liquidations.

![](https://i.imgur.com/UZGBjcy.png)

- In terms of liquidations, the amount of WBTC locked is about 1.1 thousand WBTC locked in collateral. Proportionately, that is pretty well protected in terms of the amount of collateral and Dai value.

![](https://i.imgur.com/65wnWP9.png)

- Comparatively, that is a 200%-250% collateral ratio and a considerable clustering there. That is a pretty decent buffer in terms of the risk of insolvency. The purple chart is, kind of, an all or nothing liquidation price wall, where at \$6000, you would see a tremendous amount of liquidations.
- It's pretty safe in terms of collateral values, but there are different risks with a wrapped asset like WBTC to consider. Likely, BTC isn't going to make substantial percentage moves, but if something does happen with the WBTC peg, given that the oracle for WBTC is operating off of a BTC price, it wouldn't be that price movement risk that would be the big thing here. It would be something more fundamentally technological or liquidity related in terms of "what is the risk?" This is why we look at these collateralization ratios as we determine what the risk is. Traditionally, for an asset like ETH, the risk is primarily a market risk, but as we diversify to other kinds of assets, we are also expanding the types of risks that we are exposed to.
- The ETH collateral pool is pretty well collateralized compared to usual. There is a much smaller bucket in the 150-200% ratio, a pretty decent amount in the 200-250%, but also much more significant than normal 500%+ and 300-350%. That ETH collateral pool is kind of striated, with multiple gradual price walls. In the past, we've seen each of these individual walls much larger. It's kind of smoothed out this collateral ratio profile since March, which I think is a better structure economically for the collateral pool because gradual liquidation helps the system maintain its health. In contrast, large walls of liquidations are a significant risk.

![](https://i.imgur.com/lZ9EZuP.png)

- Speaking of giant walls of liquidation, for USDC, this is a pretty stagnant collateral pool. We saw that the Dai supply minted from it is also pretty stagnant, with a slight decrease. This is a binary risk scenario; if something goes terribly wrong with USDC as a redemption system, you will have the potential to see 7-10 million in liquidation overnight. Again, most people consider that to be a very extreme risk.
- _The primary takeaway in terms of collateral is that there has been a diversification of types of risks that the system has been exposed to. However, that doesn't necessarily decrease the total number of risk that the system is exposed to_

![](https://i.imgur.com/8caQikD.png)

![](https://i.imgur.com/fiMHDfX.png)

- BAT is sitting at a pretty high collateral ratio overall and a pretty small supply overall. Total Dai from BAT is less than 600,000, which is kind of steady-state for that.

#### Relevant Links

[MCD system stats](http://daistats.com)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)
[Vault Graphs](http://makervaults.descipher.io/)

#### Questions and Comments 3

[1:005:38](https://youtu.be/Rbd2hDIk7vc?t=3938)

- JoeQ: I just want to say what a great job you did, Vishesh. I want to encourage everyone to try to run an auction keeper. As we go on and the Dai supply keeps increasing, it's nice to have other people running auction keepers to help out when large liquidation events do occur. If anyone needs any help running an auction keeper, please reach out to me at JoeQ@Makerdao.com

[1:06:25](https://youtu.be/Rbd2hDIk7vc?t=3985)

- Cyrus: I just want to remind everyone that next week TUSD will be going up to a governance poll. TUSD and USDC-B will both have governance polls going on next week. That will be set up for next Friday's executive vote. If anyone has any questions about TUDC or USDCB, feel free to post on chat or ask directly.

[1:07:09](https://youtu.be/Rbd2hDIk7vc?t=4029)

- Lev: Has there been a discussion about consolidating the debt ceiling for USDC and TUSD if added.
  - CY: I don't think we've had that discussion, but at the very least, my idea was going to be to bring it up next week or the week after, once it's confirmed that these have been added in.
  - LFW: It's been mentioned in a couple of threads but no conclusions yet.
  - CY: Exactly.
  - Lev: I think it's worth thinking about because I can imagine that most people's concerns about TUSD are similar to concerns about USDC, especially considering how much of the collateral pool we want to sit with custodial, IOU, USD stablecoins. I think that if there was like a clear path by which the total DC combined is as opposed to letting them creep in and increase the total DC for each collateral type every time. I think that would be quite reassuring.
  - CY: Is this question really limited to stablecoins? We'll have to discuss this for any off-chain asset that comes down the pipeline. Do you have any thoughts or ideas on the broader strategy of off-chain assets and managing those counterparty risks?
  - Lev: I agree with you, but I think to most people TUSD and USDC are kind of the same thing. Your idea about the DC probably applies to both, so perhaps we could consider a DC in common. They are both IOU based, US company issued, USD backed, very similar. When discussing TUSD, it may make sense to have a poll for the total DC for (all stablecoins within this jurisdiction). It may be easier to consider instead of raising the DC every time. It would be much easier to keep adding them while splitting up the fixed allowance for these kinds of stablecoin to distribute the risk better. I'm sure people will start complaining that we are sneaking in these USD collaterals, and each time increasing the DC, it does seem that way. While really, what we're trying to do is split up this fixed allowance that we have toward these collateral types toward more legitimate options to diversify this counterparty risk.
  - Cy: Makes sense to me.
  - Lev: I think it would be a shame if these collateral types are dismissed simply because people don't want to grow the DC to those kinds of assets beyond 20 Million as opposed to being stopped because they don't like something about TUSD in particular. We mustn't end up talking past each other.
  - Mike Dunworth [From Wyre]: In terms of the consistency from the fiat side of things, I think it makes total sense in terms of mitigating the risk and stuff. Having an unambiguous definition of the risk per se. Taking USDC and TUSD, they look the same but are kind of different. The banking partner that TUSD works with vs. USDC, the custody solution that USDC operates under (like the security model on their end). And then you have things like, is everyone using Silvergate bank or is one using Signet? USDC is specifically in treasury bills. Even if they aren't in a money market account, TUSD might be sitting in a money market. Licensed custodian, registered money services business, stuff like that. I think those are probably pretty sizeable considerations. I would put TUSD as the outlier as most risk and least reward, out of PAX, Huobi, GUSD, etc.
  - RB: It raises a pretty interesting point about how far down the rabbit hole are we able to go when assessing risks for the stablecoins. Does the level of audits for each one of these collateral types involve us having a clear understanding of their banking relationships and regulatory risks? Cyrus, is this something your team is considering? Or is there just as tranche when considering these stablecoins. Simply, this is the DC, and this is the level of risk for the buckets of stablecoins.
  - CY: You're correct in saying it's undoubtedly a significant commitment to analyze all of the banking relationships and getting that deep insight from under the hood for each of these. If you, or anyone else, has some profound idea about the counterparty risk under the hood, we would love to hear your thoughts about how that might affect the risk parameters currently in play.
  - MD: I agree about everything. If there is anything I could share regarding what could potentially go wrong. Black Swan stuff is unlikely, but I think it would be good to share because all of this stuff doesn't come unless you are in the weeds and banging your head against the wall every day, which; is where I am right now. The biggest thing is being backed by treasury bills vs. having money in an overnight money market account. That's sort of a big difference. I put a lot of thought into it personally because this will be the bridge between CeFi and DeFi. The reason you want to get it right with the stablecoin stuff; we talked about the percentage of the risk out of the whole piece that is willing to be backed by real-world assets, especially these fiat tokens. They will be what the DSR is for centralized assets. In an ideal world, if you are holding a lot of these, you are holding a lot of these assets and representing them as one token. Now, MKR can be earning on the CeFi space as well as opportunities in the Defi space. I think I just took this a bit out of the conversation, but I believe there is a lot of opportunity in this stuff.
  - lev: I think this is precisely the kind of argument relevant to the specific TUSD part of the process, while someone's objections about the total debt ceiling in USD stablecoins should be moved somewhere else. It would be useful to separate this stuff.

[01:16:57](https://youtu.be/Rbd2hDIk7vc?t=4617)

- Lev: As another question, is it public knowledge which money market funds TUSD holds their cash in?
  - MD: I don't work at TUSD, and I don't know specifically, but if I did, it wouldn't be my place to stay. I know that's what everyone does. Specifically, they have a risk team as well, and on the backside of their operations, everyone has a different composition. Some have it on the back of Silvergate, earning five bips a year. Others have it more creatively allocated. The answer is: I don't know, sorry.
  - lev: I think we should know that kind of thing as part of our decision-making process. The fact that that didn't come up and that we weren't able to determine is not ideal.
  - MD: They are a great team, by the way, in case I sounded unsupportive. I just wanted to help share some thoughts.

[1:18:23](https://youtu.be/Rbd2hDIk7vc?t=4702)

- cmooney: I wanted to bring up another consideration. In terms of the mental model for thinking about the DC, do we want that to apply to the emergency liquidity facility for USDC-B? There are certain amounts of risk there; that facility is likely not to have many assets under custody most of the time. Also, that facility is likely to be be used and have its DC adjusted in a liquidity crunch or black swan event. Other than that, we should consider if we should turn liquidations on. Liquidations aren't turned on for this class of custody assets, and that breaks some SF incentivization. I think its a discussion that we need to have.
  - lev: That reminds me of an important point regarding this USDC-B style of emergency collateral for Dai liquidity injections. It's even more important to diversify that one across issuers potentially. As an interesting example, specifically in USDC on Black Thursday, before it was a collateral type, it was impossible to get USDC out of Coinbase for a couple of hours because of gas price limitations. They ended up resolving this by adjusting gas prices. But under a similar circumstance, this USDC-B thing would have failed since there would be no way to withdraw it from the main exchange, even if you could scrape together the necessary collateral from the Dexes. In this kind of situation, going to TUSD instead or another stablecoin, you could have withdrawn it as emergency liquidity. This is not something that we should overlook.
- cmooney: Any thoughts on liquidations for these, from anyone?
  - brainmcmichael: I'm going to come out and say that I am in favor of liquidations. It's a fundamental part of the social contract. If you become undercollateralized due to fees, then you get liquidated. Part of the overall theme maybe not to do it to start, but I want to come out on the other side of that.

[1:22:21](https://youtu.be/Rbd2hDIk7vc?t=4941)

- Sidebar question, [*read by LFW, from monetsupply*]: "Perhaps a different initial margin vs. the maintenance margin? So I guess an initiation ratio and then a liquidation ratio afterward?"
  - cmooney: If it's for one collateral type, there is no ability to do that as far as I understand.
  - LFW: If you had 150% at the opening and then a liquidation at 125%, you would be able to open up at 150 and get liquidated under 125%
  - lev: The only thing you can do is encourage front ends to discourage users from starting with a collateral ratio like that.

[1:23:57](https://youtu.be/Rbd2hDIk7vc?t=5037)

- Kurt: Something that has to be addressed is if you let these stablecoin-denominated vaults to continue to accrue fees, the system can become underwater completely. And now, "some percentage of Dai are not backed" would be the way to say it. You can't allow that happen from a protocol risk perspective. We have to figure out a policy for when and how to enable liquidations eventually...no matter what.
- LFW: In terms of oracles, we didn't launch because the oracle was fixed to \$1. What do we need to turn on liquidations? Do we need oracles for Dai to USDC price?
  - brainmccmichael: I think we can do it right now. The big issue is that a lot of the USDC-A holders have let their holdings go below 125%. If we do flip that switch, there will be a whole wall of liquidations. A lot of USDC would be auctioned off, and that would hurt some feelings. It's not what we want for the protocol.
  - brainmccmichael: One thing we can do is drop the CR requirements at the same time as turning on liquidations. That would prevent that wall. We would have to make it clear that we are doing this, and that they need to pay some of their vault at least, so they are not within the liquidation ratio.
  - Kurt: The biggest concern that I've heard about liquidating these things is that liquidations would be highly correlated as all of these stablecoins vaults are used to do the same sort of things with the same kind of time frame, making the same sort trades with shorting Dai or generating emergency liquidity. If they all hit liquidation around the same, you can have a considerable amount of debt going to auction at the same time, which can cause its own crisis. You may not fully recapitalize the way you should. Then you have the thing meant to solve the liquidity crunch, now creating a liquidity crunch. With the particular consideration that we had liquidations off, people took positions based on liquidations being off, and now we have to ask how should we unwind that?
- bmcmichael: Dai has dropped below a dollar at some points this week. People with USDC positions have probably set limit orders somewhere in Oasis to pick up those large sales and clear out. That may be a reason why we don't see Dai drop below a dollar for any significant amount of time. And we can't enforce that either. There is no closed end on any of these.

## Outro

### Rich Brown

[1:28:21](https://youtu.be/Rbd2hDIk7vc)

- I think I'm going to jump into the awkward silence. We're 1h30 in, so I'm going to stop the recording unless someone in the side chat wants to talk about something. We must get the people on the mic into the historical record for the Youtube views, which are a considerable number these days. Thanks, everybody for joining us and see you next week.

#### Links from the Chat

- [TUSD escrow accounts analysis](https://core-api.real-time-attest.trustexplorer.io/TrueUSD/report/809957de-c724-4e0d-b0c8-96fffa1f0ff5)

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

`GSM`: Governance Security Module

`MIP`: Maker Improvement Proposal

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Juan Guillen produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
