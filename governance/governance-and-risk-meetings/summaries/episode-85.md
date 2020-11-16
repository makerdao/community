# Episode 85: April 09, 2020

## Agenda

- [00:00](https://youtu.be/UvIppQzmFWY): Intro with Rich Brown
- [09:25](https://youtu.be/UvIppQzmFWY?t=565): MIP 3 Governance Cycle with Charles St. Louis
- [26:54](https://youtu.be/UvIppQzmFWY?t=1608): LFW Governance at a Glance
- [31:29](https://youtu.be/UvIppQzmFWY?t=1885): GSM and Dark Fix review / Social Layer solutions with Will Barnes
- [45:02](https://youtu.be/UvIppQzmFWY?t=2702): SCD shutdown with Mariano
- [54:13](https://youtu.be/UvIppQzmFWY?t=3253): Zero-bid vault auction data with MakerMan
- [57:35](https://youtu.be/UvIppQzmFWY?t=3455): State of the Pegs with Vishesh

## Video

<https://youtu.be/UvIppQzmFWY>

## Introduction

### Rich

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/UvIppQzmFWY)

Hello everyone and welcome to the April 9th edition of the Governance and Risk meeting, my name is Richard Brown, Head of Community Development at MakerDAO. In keeping with the trend that we have been seeing over the last few weeks we have a furious level of activity going on in the Governance Community, and that's translated into a pile of things that we need to go over on this call. So the agenda is diverse and large. I'm going to keep my section to a minimum.

- Charles St. Louis will give us a review of [MIP 3.](https://forum.makerdao.com/t/mip3-governance-cycle/1905) It's a MIP that goes into the governance cycle and will look like in the future. So it helps the ecosystem to internalize some of the process that they have brought to the table for us.
- LongForWisdom will give us his "Governance at a Glance" segment.
- Will Barns is back and better than even. He's going to review the GSM and the Dark Fix. Those were very important discussion back in the olden days before everything changed, but they're still important now and it's time to revisit these legacy topics which is another topic that I have been beating the drum on for the last couple of weeks that we can't lose all threads. So he will talk about the Dark Fix and also review what solutions need to be moved to the social layer and what the social layer looks like.
- Mariano Conti is here to talk about `SCD` shutdown and giving us a bit of a hat here. Actually that ties into what I want to talk about today too. `SCD` shutdown is not a matter of pressing a button, it's complicated.
- MakerMan is here and will give us a recap of the work that he's picked up. Super exciting to see him jump in and pick up a task: zero-bid vault auctions and how to model that data.
- Cyrus is going to give us a heads up on the new series of risk calls we have next week.
- Vishesh will talk to us about the state of the peg.

Huge agenda, not a lot of time to go over it, so I'm going to do my segment very quickly and then we can move on. I only have one thought, the thought of the day.

[04:47](https://youtu.be/UvIppQzmFWY?t=284)

- We have lots and lots of things that are happening at once, the community is self organizing in ways that I could only have dreamed were possible 6 or 12 months ago. Super happy about that. The community as a whole is taking care of its own destiny and that's what the DAO is all about and what people has been working towards. As that autonomy increases we're going to run into some more growing pains. That's what Governance is, a never-ending series of growing pains, improvements, and iterations. We have been growing, iterating and improving all this time, so obviously I don't think that's a problem, but here are some examples of things that have been happening in the community just very recently, that have been brought to a vote: -`SCD` shutdown
  - 0-Bid Vault compensation
  - Adding a new type of voting, Ranked choice Voting, that presumably and hopefully will be better able to capture signaling in the ecosystem.
- All these things are very healthy and very cool. Here is the "but", there are constraints that we all operate under. The question becomes what is possible in timelines allocated to us in light of all the other things. So what I want to talk about is how we handle coordination when polls go through or get proposed. There is a large number of moving pieces involved with the ecosystem. Piles of stakeholder, piles of process, piles of actors' inputs inside the Foundation, inside the DAO, inside the crypto space, or the DeFi space in general. So I want us to start thinking about coordination of tasks, determining feasibility, making sure that stakeholders have been brought into the conversations. Because we're running into situations where the majority of the community signals their intent to move in a certain direction or have something happen, that's great, that's what governance is all about, but, intent doesn't equal implementation necessarily.
- Let me give you some examples. The `SCD` shutdown is a good one. The community came up with the desire to shut down `SCD`. They did some research and figured that April 24th is a good day to do it. I do not dispute that. But we're going to see very soon that there are things that might literally be impossible to do. We're going to have timing constraints, resource constraints, just pure mechanical constraints. There's occasionally an array of things that the smart contracts team simply cannot do. Or we're going to require iterations of smart contracts, which imply additional auditing, or testing, and developers that need to be found and reallocated so, there's implementation details that may impact timelines.
- I will ask the community that when we start coming up with these polls in the forums that we do a better job at feasibility study and identifying the stakeholders that are required to make this thing happen. To ensure that the thing that people want to have happen is possible in the desired timing.
- As always, discussions happen in the [Forum.](https://forum.makerdao.com/)

#### Questions and Comments 1

[03:03](https://youtu.be/UvIppQzmFWY?t=183)

- Cyrus: Quick notice: a few weeks ago we were doing risk presentations on some tooling that we wanted to walk through with Governance. Obviously that got sidetracked a bit, so we wanted to resume that work next week. We wanted to do it on consecutive days, so we're going to be holding additional Governance calls next week, on Tuesday and Wednesday. Timing will probably be one hour after the current timing of the Governance calls. I'll put a [public notice](https://forum.makerdao.com/t/special-governance-and-risk-calls-tuesday-4-14-and-4-15/1962?u=davidutro), but we wanted to give a heads up that we will be doing additional risk calls next week.
  - Rich Brown: Yes, this is probably something that we will see in the future, so we're reaching density on what can be achieved on these calls. A variety of topics need to be addressed. We had these chats a long time ago, whether we should have 4 or 5 different calls during the course of the week. It was my opinion that it's better to wait to reach density before we start splitting up into separate corners to do other stuff. We're rapidly approaching that state. Cyrus's team has been doing a fantastic amount of work. Piles and piles to go over and there's just no chance that we can take care of it in these calls, so next week is Risk Week.

## Maker Improvement Proposals

### Charles St. Louis

#### MIP 3 Governance Cycle

[09:25](https://youtu.be/UvIppQzmFWY?t=565)

[MIP3 Thread Link](https://forum.makerdao.com/t/mip3-governance-cycle/1905)

- Hey everyone, before I get started walking through `MIP 3`, I would like to give a brief overview of what's going on in the world of `MIPs` in relation to Governace. Recently we launched a couple of blog posts detailing the [self-sustaining MakerDAO initiative.](https://forum.makerdao.com/t/the-maker-foundation-s-vision-of-a-self-sustaining-makerdao-initiation-of-maker-improvement-proposals-mips-framework/1882) One of those key pillars is the proposals that are created through the Maker Improvement Proposal Framework. On Monday we proposed the initial 13 `MIPs` that we feel are necessary to create long-term governance and self-sustainability of the protocol. So as of this week, there's been a lot of constructive feedback and positive feedback from a lot of the community members. I do encourage anyone here who hasn't taken a look yet to dig into them or at least read them if you have the time.
- In terms of the actual `MIPs`, or the phase of this whole thing which we'll get into later, the current `MIPs` are under review during this time period. This means that `MIP authors` work with community members on integrating feedback into the `MIPs`. This is to try to cover all the bases and any gaps that are there, or any wording that needs to be clearer. **This period will last until April 27th, after which there will be something called the `Timing Poll`,** which is a special Governance Poll that gives the community a chance to decide if they want to proceed with a ratification vote so that the `MIPs` will be formally adopted, or to delay the ratification vote for one month and institute a period of time for competing proposals to be proposed by the community.
- If the community does indeed decide to proceed with this ratification vote, it will occur over the period of May 1st to 4th. If the vote passes, the first governance cycle, defined in `MIP3` will begin on May 4th.
- There will be some references to `MIP0` during this walk-through. I do urge anyone to try and read through that. I know it's quite long, but it does help clarify everything that's going on in the world of `MIPs`.

[12:08](https://youtu.be/UvIppQzmFWY?t=728)

![](https://i.imgur.com/wGn8JcD.png)

- `MIP3` is a proposal to create this new governance cycle. This new formal governance cycle has the goal of being a predictable framework for MKR holders and the community to make decisions. And to make these decisions transparent. It is very focused on a certain time period. It's a monthly governance cycle. The `MIP` itself has two main components:
  - `MIP3c1` The Governance Cycle Breakdown: A week-by-week breakdown over the course of the 4-weeks of a given month.
  - `MIP3c2` The Default Inclusion Threshold. Initially proposed to be set at 3,000 MKR. I'll get into more about what the purpose of that this. [There is debate about it on the forums.](https://forum.makerdao.com/t/using-fixed-mkr-amounts-for-maker-system-action-triggers/1942)

![](https://i.imgur.com/suKoRtF.png)

- The first component of this `MIP` is the Governance Cycle Breakdown.
- Each monthly Governance Cycle begins on the 1st Monday of the month, with Maker Improvement Proposals being submitted by this time.
- Those MIPs will be considered for inclusion at the end of the month, during the executive vote.
- The governance cycle ends with the executive vote that would begin on the 4th Monday of said month. After the executive vote occurs there will be a period of time for review, so a meeting like this, where you can talk about the retroactive aspects of the month and also plan for the next month ahead.
  - The time is based on UTC, we thought that we had to make that clear.
  - First week of the governance cycle is when the actual `MIP` themselves are formally submitted into the governance cycle.
  - Formal submission is the 5th step in a `MIP`s life cycle.
  - Long before that there is the conception phase, where the idea is born on forums or twitter.
  - Next is when the actual proposal is submitted to the [discourse forum,](https://forum.makerdao.com/) where it needs to comply with the actual components and criterion in the `MIP template` itself.
  - The `MIP editor` will check that it fits all the standards. After that it enters a formal Request-For-Comments period. In this case, it is exactly what's happening now, where the community and `MIP authors` work together to iterate on the actual content and format of the `MIPs` to achieve the broadest consensus from everyone in the ecosystem.
- During the RFC phase there are a couple of things that are important to note: there's something called the `feedback period` and the `frozen period`.
  - `Feedback period` is the minimum amount of time that the community has to review a specific `MIP`
  - `Frozen period` is when everything is set in stone and there are no more changes that can be made and it's awaiting to be formally submitted.
- At that period in time, when those criteria have been met, it officially enters the `formal submission` phase, which is what is happening on the 1st Monday-Wednesday of this month. So the forum submission is done basically by submitting it to the discourse forum as well as GitHub and then it can be iterated on.
- During the first Thursday of that month the actual Inclusion Poll review meeting happens; the community comes together and discusses which proposals are in accordance with the guidelines as well as well as which ones may be appealing to the community.

[17:02](https://youtu.be/UvIppQzmFWY?t=1022)

![](https://i.imgur.com/AOhEHQe.png)

- Week 2, on Monday, is when the Governance Facilitator pushes this Inclusion Poll.
  - The proposals that the Governance Facilitator have gauged general consensus on are included. Week two relies heavily on the Governance Facilitator working with the community to figure which ones are the best ones to get included.
  - As I mentioned before, there is something called the `Default Inclusion Threshold`. It's a variable amount of MKR that can be changed with the sub-proposals that are defined later on. This threshold is a value that is automatically counted towards the no vote tally of the Inclusion Poll itself. The `Default Inclusion Threshold` is changed with these proposals if the community feels like the current value isn't fair. I do know that the value is not set in this `MIP` itself, but I do have to make that change and be upfront that I did not include it. My proposal will be 3,000 MKR.
  - During an Inclusion Poll the community comes together to vote yes or no on whether to include this proposal in a Ratification Vote. If the yes votes for a given proposal are higher than the combination of no votes plus the default inclusion threshold (3000 MKR), the poll passes.
- At the second Thursday of the month the `Governance Poll Review` occurs. This is much like the current Governance Polls, where general risk and governance topics are discussed at hand without any `MIP` decision making occurring.

[18:54](https://youtu.be/UvIppQzmFWY?t=1129)

![](https://i.imgur.com/IWIXfZO.png)

- Next is week three. In the 3rd Monday- Wednesday of the month:
  - The governance poll will officially be submitted by this governance facilitator.
  - The poll will run for the duration of Monday until Wednesday.
  - The poll is also a yes/no MKR poll that accepts or rejects the combination of all the `MIPs` that have passed the inclusion stage.
- On the 3rd Thursday of the month, the governance community comes together and decides on reviewing the executive vote options. So it's a public meeting that will focus on either future proposals or any controversies surrounding the current Governance Poll and future upcoming Executive Vote with relation to those `MIPs`.
  - In case there are too many no votes in the governance poll, and there is evidence that there is an effort to silence legitimate concerns in the community this meeting provides opportunities for compromise and the community and governance facilitators must consider whether it is creating a risk of governance split. If a Governance Facilitator believes that the proposed executive vote will result in a governance split, the Governance Facilitator should not deploy the executive vote and must instead work with the community to resolve the problem. Thus, in the future when there are multiple governance facilitators,if all of them are in consensus that the executive vote creates a significant risk of a community split, the executive vote will not happen and the MIPs that were supposed to be up for an executive vote, instead have their status changed to deferred.

![](https://i.imgur.com/O6JUbOj.png)

[20:39](https://youtu.be/UvIppQzmFWY?t=1239)

- The last week of the governance cycle is week 4, and during that Monday the executive vote is submitted if the governance poll has passed, and the no-votes are not too high to deem a threat to consensus. This regular executive that will be proposed will last for 7 days, meaning it will be in effect after those 7 days.
  - If the executive vote passes, there is a `Retro and Planning Meeting`. It is a retroactive assessment of what happened during that month and some time can be allotted for next month planning to be proactive. You can think about the poll outcomes, what can be optimized, what changes can be made, sub-proposals for the actual default inclusion threshold modifications, and so on.

[21:54](https://youtu.be/UvIppQzmFWY?t=1314)

![](https://i.imgur.com/95IpKiU.png)

- This is an overview of `MIP` life cycle.
  - The governance life cycle begins with proposal submissions.
  - Then it is discussed whether to include them into this inclusion poll.
  - The inclusion poll happens.
  - The Goverance poll review meeting then happens.
  - The Governance poll occurs.
  - Then the meeting to review the executive vote occurs.
  - And lastly, the executive vote either accepts or rejects the `MIP(s)`.

![](https://i.imgur.com/WmiRMRI.png)

- The second component of `MIP 3` is the `Default Inclusion Threshold Modification Subproposals`. This threshold is crucial to the poll and is proposed to be set at 3,000 MKR, but can be discussed. It's probably the biggest thing that we want feedback on at this point.
- In this component there's a default period of 3 months, so when somebody submits the change for the default inclusion threshold it will last for a `default feedback period` of 3 months and has a `frozen period` of 1 month. These periods can overlap and are based on the MIP author's decision on whether the `frozen period` can start before or after the `default feedback period`.
  - Basically we just provide these templates for making those proposals to change the `default proposal inclusion threshold`, which includes the number of the subproposal, the author, the date proposed, and then the specification section is the summary. So it's a proposal to modify this threshold to x value, what's the reason behind it, and what is the exact value.
- That is a lot of me talking and I'm sure there are some questions, but that is an overview of what `MIP 3` looks like and I do encourage everyone to ask questions, I'm not sure if we have much time on this call, but please go into the forum or in the Rocket.Chat channel, and fire off all the questions you have, or feedback or any additions that you may think are necessary.

#### Questions and Comments 2

[24:12](https://youtu.be/UvIppQzmFWY?t=1452)

- Rich Brown: I'm not seeing questions in the chat but I want to echo that this is going to be one of the first `MIPs` that we put into practice on a regular basis so if people have questions or comments, the forum is the place to voice them.

[24:30](https://youtu.be/UvIppQzmFWY?t=1469)

- Makerman: Why are thresholds a fixed amount of MKR? Why are they not a percentage of the outstanding MKR?
  - Charles St. Louis: Not sure I have an answer to that, but that is a good suggestion that you could provide on the `MIP` itself. It's kind of a bigger question in general. Do you have a preference?
  - MakerMan: It's kind of common sense. If you burn MKR, say half the Maker, the thresholds change. It begs the question: what's the point of having threshold on things to accomplish actions? And if we're going to have a threshold, why is it not related to the outstanding versus a fixed number that will be a percent that changes relative to the outstanding.
  - Rich: The threshold is one of the trickiest things you can do when you're coming up with a system, particularly one that has algorithmic aspects and human aspects as well. I'm sure the `MIP` architects will be completely open to a more refined approach.

## Governance

### LongForWisdom

#### Governance at a Glance

[26:54](https://youtu.be/UvIppQzmFWY?t=1608)

- [The Release of the 13 Initial Maker Improvement Proposals](https://forum.makerdao.com/t/the-release-of-the-13-initial-maker-improvement-proposals-mips/1915)
  - If you're only looking at a few of these look at `MIP 0` and `MIP 3`.
  - [MIP 0](https://forum.makerdao.com/t/mip0-the-maker-improvement-proposal-framework/1902)
  - [MIP 3](https://forum.makerdao.com/t/mip3-governance-cycle/1905)
- [On-chain vault compensation poll, draft 7](https://forum.makerdao.com/t/on-chain-vault-compensation-poll-draft/1822)

##### Seeking Signal

- [Signal Request: Add Ranked Choice Voting as an Option for Governance Polls](https://forum.makerdao.com/t/signal-request-add-ranked-choice-voting-as-an-option-for-governance-polls/1274)
- [Signal Thread: Do we compensate vault holders that were completely liquidated?](https://forum.makerdao.com/t/signal-thread-do-we-compensate-vault-holders-that-were-completely-liquidated/1713)
- [Signal Thread: SCD Shutdown](https://forum.makerdao.com/t/signal-thread-scd-shutdown/1673)

##### Ongoing Initiatives

- [Wanted: A plugin that allows signaling with MKR on a discourse forum](https://forum.makerdao.com/t/wanted-a-plugin-that-allows-signalling-with-mkr-on-a-discourse-forum/1876)

## Social Layer Solutions

### Wil Barnes

#### GSM and Dark Spells

[31:29](https://youtu.be/UvIppQzmFWY?t=1885)

In Februry we actually started this discussion about what to do if we have a critical bug, and then it was pretty much usurped by the events of March. The purpose of this discussion is to revisit two topics that we need to start thinking about.

![](https://i.imgur.com/hBYgj2L.png)

- First is the GSM, which was, during the downturn, changed to 4 hours. I'd like to think about what we should do in the future with the GSM, taking into account the experience we've got in March.
- And secondly, to discuss the dark spell social layer, which is still very much up in the air. We proposed three methods back in February, but I'd like to discuss them again. And then I'd like to formalize this discussion into a document, so if we ever need to use it, at least in the short-term before it's formalized into a `MIP`, we know what to do.

![32:53](https://i.imgur.com/to85CGl.png)

- I'll first just discuss the GSM delay. I'll discuss these slides, then I'll walk through the dark spell slides, and then we can have a short discussion just to make sure that we get through it.
- The GSM delay is currently 4h. We ended up in this state in mid March, I think it was the 13th or the 14th, I can't remember the exact date. It prompts the discussion of what do we feel the optimal GSM delay is and how do we get there. Do we want to turn directly to 24h? Is 24h the right amount of time? I want to have that discussion and get feedback from the community on how to handle that.

![33:45](https://i.imgur.com/qbSdT1o.png)

- And also understanding the precedent. We moved the delay to 4h. I want to understand whether 4h is the right amount of time? What do people think of that move? What's new about future situations?
- And also, DEFCON spells: Chris Mooney has developed the spells that are purpose-built for the situations of adverse conditions. Chris, if you want to have a talk about how that can actually fit into that, let's do it later.

![](https://i.imgur.com/ysO09UK.png)

- Moving quickly, the Dark Spell Social Layer is something we need to find consensus on soon.

![34:18](https://i.imgur.com/z6xfvTR.png)

- I won't actually discuss what the dark spell is, beyond that it provides us a way to patch a bug without exposing the bytecode on-chain.
- For me, hiding the bytecode is the reason this is important. Because, first of all, someone can reverse engineer the code that's sitting on-chain before a bug fix is applied if we go through a regular executive vote.
- The code implementation is ready, but we need to actually understand the social layer, how we're going to handle that, and then understand how Emergency Shutdown is an option.

![34:50](https://i.imgur.com/5gxHp7d.png)

- A critical bug, and I'll be very general about this, is a very big bug, where at least 10% of the value of collateral tokens in the system are affected. It must not be theoretical, and must be operational, which is where we are right now with MCD.
- Non-critical bugs will still surface due to existing governance channels. Like Kurt discussed recently with the blocked debt auction bug, things like that will not be patched with a dark spell, it's just necessary. I think it better serves to discuss them in public and then pass a solution through a normal vote.

![35:50](https://i.imgur.com/5wLOnvX.png)

- It's important the dark spell is used only in exceptional circumstances, for critical bugs. A Dark Fix is designed to obscure as much information as possible. Given this, it's the purpose of the social layer that we have a clear but narrow mandate to cast this thing, so it should be really only focused on fixing a critical bug that would be severely damaging across the board.

![36:25](https://i.imgur.com/yoLMFjU.png)

- Back in February we proposed these three models:
  - the Major MKR Holders Model
  - the Independent Auditor Attestation Model
  - the Community Appointed Trusted Party Model.

![36:40](https://i.imgur.com/zIBbwC0.png)

- I really just want to go through these three slides, just discuss them again, because I think that these are going to be where we're going to frame the discussion and I'd like to get community's signal which one they think is best fitting for MCD, and then also we can tweak these and discuss implementation details in the forums.
- The Major MKR holders Model is just a pre-selected committee of MKR holders. The dev team, current or EPC, will interact directly with this committee when a bug is discovered to coordinate the fix. The MKR holders will sign the transaction governing support for this solution, and then the dark spell will be used to patch the bug.
  - Some of the advantages: the number of people that acknowledge the bug is kept to a minimum. But then, there are some disadvantages to that: high trust that the dev team and MKR holder do the right thing. Maybe then MKR holders don't feel comfortable attesting to the fix or don't possess the technical acumen. Bugs can be quite complicated in the system and there is just various potential conflicts of interest.
  - The implementation details, I'd like to discuss in greater detail in the forums. There we can really discuss the fine print and how this is actually handled, how may members are in the committee, when to select a new committee, how to communicate with large MKR holders when a bug is discovered, etc. These are just various things we need to discuss given this model.

![38:27](https://i.imgur.com/SmRtNV8.png)

- The second model is the Independent Auditor Attestation Model, so an independent auditor or an agreement with an independent auditor is in place. When a bug is discovered, we interact directly with the auditor. They attest to the validity of that vulnerability, sign-off on it, ensure that the fix fixes what needs to be fixed. Then, we use the dark spell.
  - Similar to the previous model, a number of people with knowledge of this bug is kept quite minimum. It also introduces advantage where the community input on how this auditor is selected; it's not just large MKR holders influencing the decision.
  - Disadvantages are along the same lines: it's quite centralized, but there is governance oversight. There is a cost associated with having an agreement in place. I don't really know the specifics, but the cost is to provide a certain level of service response time, things like that.
  - Again, regarding implementation details, I would like the community to weight in on the relationship with the IA, what we want for the auditor, how to select them, etc. There is criteria and there is also some more flexibility to design a process here. For example, we can have an existing set of independent auditors, but then, when a bug is discovered, the community can chose a second to sort of validate alongside the existing list of our auditor as a means to prevent bribery or just act like a check.

![40:23](https://i.imgur.com/pbSVibl.png)

- And the third is Community Appointed Trusted Party Model, which is a little different. It's a bit more reactionary in nature. When a bug is discovered, the community is informed as best as they can without revealing technical details of the bug. The community drives the passing of the bug-fix, that goes like that appointed trusted party model, to attest to it. Then, once the agreement is there that the community-appointend trusted party feels that this is a vulnerability that needs to be patched and is critical, then the dark spell would be used.
  - This could take longer than normal, you could get mired in some debate on what to do and then the bug is just existing, so there is some things to consider with this model as well.

![](https://i.imgur.com/pxQhQfT.png)

- Those are the three models. We are not necessarily confined to just one. If there are things we like about others, we can have introduced another model as a backstop.
- The goal is to understand the community's preferred solution, which I'd like to do through discussion on the forums, and then once we have the idea of the model, that is, I'd say, the most salient, we can iterate and further optimize that solution and try to document and create a policy around it. So we have a process to follow should a bug be discovered.

![42:05](https://i.imgur.com/bj6USex.png)

- This is the last slide here. I'd like to begin discussion on these methods. I would like to understand what the community thinks of these, what they do and don't like, and we can start assembling this document, putting there things that community feels are most important and on the medium to long-term actually formalize this in a MIP.
- I don't see this happening in the short-term, this is something we need to think about on medium to long-term. Those are the two points I'd like to discuss, but I also want to be cognizant of the folks behind me.

#### Questions and Comments 4

[35:10](https://youtu.be/UvIppQzmFWY?t=2110)

- Rich: Where this criteria for defining critical bugs come from? Is this just on the fly, or an industry standard?
  - Will: This is from our HackerOne bug bounty page, what defines a critical bug.

[43:01](https://youtu.be/UvIppQzmFWY?t=2580)

- Rich: There are mostly just comments in the side bar, but one of the things I wanted to clarify: you said that this is important in the medium to long-term, you mean the formalizing of a plan into a `MIP`? or you mean addressing the entire issue of dark fixes?
  - Will: I see the `MIP` situation more like a tertiary thing, we do need to do that, but first we need to find the method in which we're going to handle bug-fix to have a policy in place. The `MIP` is important, but until we get there we need to make sure we all have consensus on how a bug will be handled.
  - Rich: I agree, it's always extremely difficult to try and figure out how important something is, what the sense of urgency is on an unknown. But particularly, as the community begins to accelerate, we see things like "let's do emergency shut down", "let's do zero-bid auction compensation", "let's do the ranked choice" - that means that new code is coming into the system, and traditionally the foundation releases code once a year at most. And only after it's been audited three of four different times; the process is potentially going to change as we accelerate in the future, so it feels to me like this is something that needs to be cleared up sooner rather than later.
  - Will: Agreed, I think it's better we have at least a document, even if it's not formal yet, that we can act on if something happens.
  - Rich: Alright, I'm looking forward to seeing your posts, so thanks for volunteering, it's going to be a big lift, so it's great you're stepping up to do that.

## Emergency Shutdown

### Mariano Conti

#### Single-Collateral DAI Emergency Shutdown

[45:02](https://youtu.be/UvIppQzmFWY?t=2702)

- I'll try to be brief: there are still ~\$3.5 million Sai in the migration contract.
- Last week's executive was supposed to shut down the bridge from SAI to DAI; it still hasn't passed(_passed shortly after this call_) and we're going to have a new executive tomorrow, two weeks away from the proposed date to shut down SCD. I just want to let the community know that if SCD is shut down and there is still Sai as collateral in the MCD system, this can potentially create unintended consequences.
  - Single Collateral DAI shutdown means that token is no longer a stablecoin. Sai becomes a claim on an amount of ETH at the price that the system was shutdown at. But as the migration contract is a special contract, it does treat SAI as one-to-one to DAI, and if we still have a large amount of SAI in the system after shutdown, then we are very dependent on what happens with the price of ETH, and SAI becomes a less than ideal collateral to have. Because if, hopefully, the price of ETH goes up, then there is going to be keepers that are going to be incentivized to grab all of that remaining SAI from the contract(by converting Dai to Sai.) But, if the price of ETH starts going down, then we no longer respect the system in saying that DAI is properly backed, right? Because Sai is going to be worth less and we would have to find ways to remove this collateral because nobody is going to be incentivized to do so.
  - And in the end, if we keep it long enough, then our governance may even need to pass a spell that says that we're going to generate DAI out of the system, so that the governance itself removes this SAI from the migration contract and sells it in the open market. If we incur a loss, then we're going to have more debt auctions and so on and so forth. That's not the only way to do it, but it's one way to do it.
- I just want to put it forth to the community that it is very important, at least on an engineering and economic level, that the contract is drained of funds before we do the shutdown.

#### Questions and Comments 5

[48:02](https://youtu.be/UvIppQzmFWY?t=2882)

- Rich Brown: Thanks for that Mariano. I think this pleasantly ties in to what I was talking about at the beginning of the call, where community can signal intention, a poll can get presented, but there are orders of operations. There is mechanical, there is legal, there is regulatory, there is smart contract, there is resourcing, there are all kinds of issues that have to align in the right order to make sure that these things are successful, and this sounds like one of them. I might have drifted and maybe I missed the point, I hope not, so what do you think the solution is? Is that a sort of a call to arms, like "hey, get out there and vote" or wait for the next time this thing comes around, which will, presumably, be on Monday?
  - Mariano: I don't know if it's my place as a Foundation employee still to say anything. I think it's more of just saying what I think is going on with the system and people will make their own decisions. One thing we may have done wrong is packing that particular spell mixed with some other risk parameters.
  - Maybe people did want to shut down the migration contract, but they didn't want to reduce the SF in USDC from 16 to 12, I don't know. It could be that this warrants its own executive spell, maybe we can move this to the forums as well. Maybe by some miracle we will get 3088 to migrate, which is the last big CDP in SCD. I don't really have a solution how to do this, I just want to stress the fact that the migration contract should be drained before shutdown. And I can provide a couple of different solutions, but the one that has been provided so far is voting on stopping the SAI to DAI bridge. This only stops drawing DAI with SAI, it doesn't stop CDPs from migrating and it doesn't stop the bridge the other way, so going back from DAI to SAI would still be possible.
  - Rich: Alright, thanks Mariano. I was trying to lure you into making a proclamation, but you dodged.

[50:41](https://youtu.be/UvIppQzmFWY?t=3041)

- Rich: You're also getting a bunch of other hot topics, hot issues for me. One of those is obviously the bundling issue. As the complexity of the ecosystem and number of proposals increase, as the engagement from the community accelerates, we're going to have more and more potentially disparate or contentious or not complementary proposals. At some point, we really need to address this issue head on. How do we handle a significant number of decisions on a weekly basis without turning these into all or nothing types of operations. But, let's leave it there, because I'm unwilling to present strong opinions and no answers, so let's leave it to the community.
  - Scottrepreneur: it seems like a more realistic goal is to try and have the migration contract empty by the 24th, and then the bigger goal is to be ready to shut down SCD.
  - Rich: that feels like a bit of a non sequitur, but I think that's generally the idea. One of the things that I want, and I'm going to put the spotlight on Mariano again next week, or Derek, I'm going to push somebody under the bus here, there are a significant number of things that need to happen in a specific order for shutdown to occur. There is no big red button that we can break the glass and that's the end of SCD. Well, maybe there is, but that might be disastrous.
  - Rich: There is risk that needs to be involved with some decisions and at least modelling out some options here, smart contracts teams need to have things in place, potentially ecosystem actors need to be onboard so that the integration teams are able to reach out to people; there are stakeholders in the community, there are large CDP owners that potentially should be involved in this process too. There is a communication aspect; It needs to be broadcast to the crypto DeFi ecosystem that this thing is going away, so be prepared. So, there are all kind of things that need to happen. We picked the date, that was the easiest part, and now we need to figure out how, who, and when. Well, we've got the when, but anyways, it's not as simple, so we need to start thinking about identifying stakeholders and figuring out what feasibility looks like. Hopefully we can dig through it in depth again next week, as the date is getting dangerously close.
- Rich: Alright, so, thank you Mariano. You have some projects, we have our project on the go, but let's talk about one of them. Can you give us a brief overview on what's going on with the Zero bid model you've been working on?

## Vault Holder Compensation

### MakerMan

#### Zero bid auction data modeling

[54:13](https://youtu.be/UvIppQzmFWY?t=3253)

- Simple upshot: we know we had Zero bid auctions and one thing in my head is using actual scenario and risk analysis using the real liquidation data.
- It begged another question: once you have the liquidation data you can look at it and determine operational characteristics and what it does to the whole system. Now we finally have that data.
  - Bobface made a makerauctions.io site. I asked for the data and we pulled a CSV. We can look at scenarios as a result. We can use this for calculating compensations, should we decide on that. I just got my hands on the data, but I hope to provide a liquidation report soon. We should think about a liquidation dashboard. Conceptually, "How do you model this and what data do you need?" that's what I'm currently working on.
- I have two sets of data. I should be able to run and match everything up. If I'm lucky I have a vault number, I can see what happened by individual vaults and sort by vault number. It will take time, and I might need help and resources for things I might need.
- There is data I want. Minute lead data on ETH<->USD price. Matching the OSM's to the CSV I have would be useful. Hopefully, we'll have a zero-bid liquidation report and a general liquidation report too. As of now, I have data.

#### Questions and Comments 6

[56:20](https://youtu.be/UvIppQzmFWY?t=3382)

- Rich: Yet another example of community members hopping in and lifting efforts. If you have OSM data, tick data, minute-to-minute hour-to-hour regardless reach out to Makerman. Particularly if you are a stakeholder or deeply engaged with the zero-bid auctions. Once again, hit the forums there are long discussions there from the vault holders perspective, from a Governance perspective, from the ecosystem perspective. It's worth reviewing to continue momentum on this issue.

## Analysis

### Vishesh

#### The State of the Pegs

[57:35](https://youtu.be/UvIppQzmFWY?t=3455)

![](https://i.imgur.com/TZJUHpB.png)

- Total Dai supply is at \$80 Million.
- Some things to note:
  - About \$75 Million from ETH.
  - About \$380K from BAT.
  - About \$800K from USDC, which is down a bit from it's all time high.
  - About \$3.5 Million from the migration contract.

![](https://i.imgur.com/WjUf6tM.png)

- In terms of what the Collateral portfolio has been doing, ETH price is up compared to a few weeks ago.
- Throughout this whole timeframe the Dai price has been steadily around a cent or two above the dollar.
- As the ETH price went up in the past 48 hours the Dai price bowed slightly. Keeping the long term pattern of stability, but short term it fluctuates. Often inversely with ETH price movements. The Dai peg still holding a two cent buffer on peg.

![](https://i.imgur.com/umAs3Yq.png)

![](https://i.imgur.com/4ObxTLI.png)

- Comparatively, the trading volume is low.

![](https://i.imgur.com/guZw9PR.png)

- In the last 30 days $380 million Dai traded. Average price is $1.03 for the past month or so. That's happened naturally because of more trading closer to \$1.02.
- 30 day volume significantly outpaced what we've seen in the last 7-14 days. The past two weeks there is much lower volume.

![](https://i.imgur.com/j4Khxgm.png)

- A big chunk of volume occured on dYdX. During the crazier time frame, Oasis picked up more of its share of Dai trading. Now they are more even. Little bit more on Coinbase, less on Uniswap and slight pickup on Kyber.

![](https://i.imgur.com/rKiwqZP.png)

- The question on many minds is on whether the Dai price is going up, down, or staying stable? It's been staying steady, aside from short-timescale fluctuations in relation to ETH price behavior.
- When the correlations between ETH and Dai flip: when ETH is crashing, Dai is very well negatively correlated to ETH. When ETH is rising in a longer time scale, confidence returns, you see the correlation resume of a more positive trend.
  - In the short term, if ETH is going down but in the long term people are confident about it going up you will see Dai go down in the short term. But if in the long run people are uncertain about ETH and in the short run the price goes down then Dai rises.
  - It's all about leverage. There is a fundamental shift in increased confidence and increased perceived value on holding Dai, which led to the 1-2 cent buffer on the Dai price. I said this last week, that buffer is still persisting.
- We could discuss reasons for the buffer persisting, but what's interesting to note is the slight uptick in activity over the last 2 or 3 days makes sense with ETH price starting to go up. That's if you assume people are more confident and bullish on ETH.
  - As the ETH price continues to comes up, if Dai price rises too, that could indicate a potential lack of confidence. People could be sourcing Dai to pay back loans or participate in liquidations. Since there isn't a strong yield case for holding Dai right now, it's much lower than it has been in the past. If they're sourcing Dai, it's not for minting new debt. It's likely more for market making and participating in liquidations and those types of activities.
- The sentiment right now looks to be a bit of wait-and-see and a little hedging behavior.

![](https://i.imgur.com/snpRy8d.png)

- What we sort-of saw with Vault positions, coming out of the March 12 crash, The price walls(projected dai liquidation levels) at $80 and $60 were at much lower prices at the time. It makes sense these tend to be relative to the current ETH price. If the ETH price goes up, your risk barriers move up as well. That's a trend we've seen, a rebalancing behavior where when ETH price goes up the collateralizations stay steady and the liquidation prices move. This is the risk portfolio, as the ETH price came up recently we saw an uptick in the 200-250 category. Coming out of the crash situation there was a huge block of the debt sitting at 350 CR. It was bi-modal as of last week, where a skew and peak leading up to the 350 bucket and another at 500+.

![see it's a dubya](https://i.imgur.com/okRp8d9.png)

- Now it's got a 'w' shape with a rise in the 200-250 category. A bit more debt in more risky buckets, despite the ETH price coming up significantly. That indicates some rebalancing. People taking risks, or rather internalizing changing external variables and maintaining their risk.

#### Relevant Links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Questions and Comments 7

[1:07:42](https://youtu.be/UvIppQzmFWY?t=4062)

- Will Remor: I was thinking about the relatively unusual behavior of the peg with ETH price going up and the weighted average price of Dai not coming down. Other than liquidity, or the use of Dai for trading elsewhere, have you got any thoughts about why we may start to see that new kind of trend?
  - Vishesh: I wouldn't say necessarily that there's a _new_ trend. If you reason about it like: why does Dai tend go up if ETH goes down? Well, people sourcing Dai to repay debt, liquidations, etc. That makes sense. Why would Dai go down if the ETH price is going up? People getting bullish, leveraging their positions and selling Dai in the process. So what's interesting here is, although ETH is going up, I wouldn't index too much on Dai going up, what I would index more on is Dai not going down. I think that is because there's still a hesitancy, potentially, on leverage, that people are more bullish on ETH and willing to lever up further.
  - Will Remor: That makes sense in itself, it's an interesting data point that potentially didn't have before in the previous cycles of leveraging/deleveraging. In this cycle there's an expectancy which I think may also have an effect on the distribution graph of the collateral ratio. The reason why you're seeing more of that collateralization going up is not necessarily because people are actually taking less risk-apetite, but just leaving the price of ETH going up. I think those two are kind of very related, in my view. The collateralization is actually moving to the right, and the effect of the price of Dai is not coming down because of that leveraging.
  - Vishesh: Here's the longer run, 30-day average graph(below.)

![](https://i.imgur.com/Ytnm8XK.png)

- Vishesh: What you see here is the tracking between Dai and ETH. What's interesting is the flipping point, or the reversal here is because the ETH price dips slightly on April 1st and starts increasing on the 2nd and 3rd.
  - V: On the 1st there was a bit of a jump in the Dai peg and then slowly starts to deflate a little.
  - V: In the last two, three days it's just been a consistent climb in ETH, there has been no real dip in the ETH price, and then this Dai price starting to increase almost exactly as soon as the ETH price starts to increase.
  - V: A lot of this trading that's happening recently at the higher values is on Oasis.
  - V: Then we see Kyber and dYdX having a lot more of the trades spread, either really high or really low, compared to the average. What's happening is that there's potentially an inflationary effect from people market-making on Dai. A reasonable explanation would be people accumulating Dai in anticipation of what other users might do, which explains the increase.
  - V: An explanation for "not having a decrease", it could be that sentiment might not have changed on using Maker for leverage despite of the price of ETH going up.
  - Will Remor: That makes sense. The graph on the ETH price, there's also the velocity of the uptick which also might explain a lag between them. On the 2nd and 3rd of April the velocity is lower compared to the last couple days, therefore there could be a lag in the leveraging and positioning.
  - V: It would make sense that people may not trust a sudden increase, whereas longer run increases may have more of an impact on sentiment. If ETH is bullish over time, people may be more bullish on taking leverage. If ETH suddenly increases, it wouldn't necessarily cause a lot of people to take leverage because if it's a sudden jump,
    - A) they may not trust that it's going to continue to increase and
    - B) they may have this mentality of having missed the boat in the jump, so it doesn't make a lot of sense to take leverage right now.

[1:14:34](https://youtu.be/UvIppQzmFWY?t=4474)

- Cmooney: Do we have any data on other platforms that provide leverage on ETH as it's rising? Growth, or more leverage? I'm trying to see if this is a market-wide trend or if there's a loss of confidence in the Maker protocol.
  - Vishesh: We did see, in the last 24 hours or so, 2% increase in the borrow on Compound. I don't know if that's a large enough margin to be making conclusions per sé, but there have been more loans taken out as well on Compound. I don't necessarily think those are outpacing Maker.
  - V: There was a slight increase in the Dai minted overall as well. Those increases aren't necessarily out of frame with what has been happening on Maker. I don't think there's a strong case yet for Maker losing market share to other platforms. That would definitely be something to continue to watch as there's more activity globally. But, at least in terms of Dai borrowing, and in terms of secondary lending platforms, I don't think we're yet at a place of concluding that there's been a huge uptick in activity and Maker has not.

[1:16:31(https://youtu.be/UvIppQzmFWY?t=4591)

- MakerMan: If you can Vishesh, bring up that long-term chart again. Because I don't hear you talking about it, but, somebody closed a $6-million Vault. I think it was a vault, not a CDP. That's what drove the peg to $1.04. I didn't even see it on the chat, the $1.04 price on Coinbase. It went to $1.045 while this guy was just hammering the Dai-USDC pair to get his liquidity and that spread out. Everybody was trying to source liquidity to match his asks, so you can see these spikes.
  - MakerMan: Somebody posted the CDP that actually closed out. And he did it for about two hours just hammering on the ask, and then put up a 1.04 bid and just took everything that he could get. If you look at the chart carefully you see these sharp little dips and doodles and around those you see a lot of the liquidity spikes, all the printed trades. It's kind of hard to make out the details of those printed trades, you just see the bloody spread on them, right? There was a big dip, that was our big event. If you watch this on the market, you typically see Dai being sourced when ETH price goes down. Absolutely right on that. The mystery here is that we have been having ETH price rising, so why is the peg still high. There was a last bump that I don't even see on here that hit $1.04 on Coinbase. I see the 1.03s, but not the $1.04. And I know it was there because I traded it. I don't see a lot of the data, that's what I'm saying.
  - MakerMan: Literally, 6 million out of 80 million outstanding is 10% of available supply. And when you start crunching numbers on that, these kind of moves are being driven by a just general lack of liquidity in this event, and a lot of people were hurt. The understanding here is that normal activity is happening, but there's and underlying driver for liquidity.
  - MakerMan: Which brings me to the other point, related to the Sai `SCD` closure. CDP 3088 has been active recently, people don't know this, but they woke up, and they bought some MKR. They haven't moved or closed their CDP. Whoever has that CDP, please talk to the community. Generally there's a lot of liquidity that's trying to be sourced in these markets for various reasons, whether they're short, or whatever, I don't know. But they're trying to close out their positions and get back access to their ETH, particularly during this price rise.
  - MakerMan: I think that's the reason why this peg is really still staying up. People who were going Dai short already at \$1.03 and still haven't maybe closed. You would expect it during this huge rise for the peg to go down. I minted Dai there, I sold it. Who's buying it and closing it out? And then we have, not long ago, the Maker Protocol going on the market and buying Dai, effectively to burn it to cover what we lost. And so I see that as an effective burn.
  - MakerMan: I think this whole market is Dai supply hoarding to some extent and market participants just can't find it because we have to have collateral to have it and that's my uptake(view) on all this. While it looks weird, we just don't know what to do about it, so I'm done with this. Thank you everybody for putting up with this rant.
  - Rich Brown: Thanks to you MakerMan. It was good insights. I think there was a question in the beginning: why does the graph not reflect that Dai activity. It looks like in the chat LongForWisdom might have pointed out that Dai-USDC doesn't show up in that graph, Is that true, Vishesh?
  - Vishesh: No, Dai-USDC is not covered. It's not on the data set yet.

## Outro

[1:22:42](https://youtu.be/UvIppQzmFWY?t=4962)

- Rich Brown: Alright, cool, so we're almost at one hour and a half, perfectly. Maybe we can put a fork in it there unless there are last-minute burning questions. I'll give people time while I do the post-amble.
  - Governance happens in the forums. Lots and lots of activity, important things are happening, big decisions are getting made in real time. So please don't sleep on the fact that things are going on and that your input is required so please join us in the forums and be heard.
  - Thanks everybody. Look forward to a lightly edited version of this call on YouTube.

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

`MIP`: Maker Improvement Proposal

## Credits

- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Juan Guillen produced this summary.
- Tim Black produced this summary.
- Everyone who spoke and presented on the call(listed in the headers.)
