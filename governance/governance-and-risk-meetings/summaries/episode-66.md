# Episode 66: December 19, 2019

## Agenda

- [00:00](https://youtu.be/hlnUWTc5oYo?t=2): Intro with Rich Brown
- [13:49](https://youtu.be/hlnUWTc5oYo?t=764): Governance Discussion and Recap of Forum Topics with LongForWisdom
- [49:40](https://youtu.be/hlnUWTc5oYo?t=2810): Migration with Cyrus
- [1:10:56](https://youtu.be/hlnUWTc5oYo?t=4234): State of the Pegs with Vishesh

## Video

https://youtu.be/hlnUWTc5oYo

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`ES`: Emergency Shutdown

`DC`: Debt Ceiling

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/hlnUWTc5oYo?t=2)

- Welcome, everyone. Today's meeting will be a little more free-form. We'll review the forums with LongForWisdom, migration with Cyrus, State of the pegs with Vishesh, and we'll discuss various governance-related topics like the DSR spread.
  - SamM is also here, who has been spearheading the [DSR spread debate](https://forum.makerdao.com/t/signal-request-should-we-replace-the-weekly-dsr-rate-governance-poll-with-a-dsr-spread-governance-poll/969/12) on the forums. We've been discussing open-source governance for a long time, pushing folks into the Maker forums where ultimately our discussions crystallize.
- The community has been very active on the forums. The next step is figuring out an efficient end-to-end pipeline for the governance process. We need to do some brainstorming to try and answer some fundamental questions.
  - How to make sure when sufficient signal is raised and that the signal is heard? Especially with activity and a clear path for what happens afterward.
  - We still need to clearly define, "What is consensus?" Especially measuring that in addition to knowing when it's achieved. Some crypto industry solutions have used 'rough' consensus. Though that is shorthand for a judgment call of an executive or an executive decision based on community/stakeholder exhaustion. I'd like to avoid that as much as possible.
  - LongForWisdom, hopefully, you can expand on the ideas, processes, and efficacy.
- One last review of our old process here at MakerDAO:
  - Debates happen on these calls, in the chat, and on the forum. They become a [signal thread on the forums.](https://forum.makerdao.com/t/signaling-guidelines/223) This thread builds towards a final forum poll. After an appropriate amount of time and consensus, the topic either dies or becomes an on-chain vote.
  - David: Some added context: Ultimately, MKR holders make decisions through their on-chain votes. The forum is where the open-source governance community figures out how to best structure questions, what the options should be, deciding what direction makes the most sense, so the question of consensus on the forums will always seem rough, but the roughness of this process is smoothed out by the on-chain votes of MKR holders.
  - Rich: Right, for Sai, this process was less complex. Once the forums showed up, we had to think about MCD and all the new granular details about what we're voting on. We have an analog of shareholder voting here where whoever has the most to lose should be the most engaged in the ecosystem's success. We also have a community of passionate MKR holders who might not necessarily be large MKR holders. This brought up the concept of gathering signal from the community. In the forums, anyone can enter to participate even if they are not MKR holders, which gives rise to some risk. But this is far closer to having a representative democracy in the forums rather than on the on-chain votes themselves. This is an interesting dichotomy since we've seen the community doing the heavy lifting. They've been coming up with ideas, suggestions, context, process, data collection, framing everything, and facilitating the debate. _Then_ hands off the issue to the MKR holders through the on-chain votes. We've seen that the holders are highly aligned with the community. Now there is the question of how to refine this "we the people" environment in the forums, and how to keep ourselves on-track to making the right decisions.
  - David: That actually brings up an interesting thing that happened this week in the forums. LongForWisdom updated the [signaling guidelines thread](https://forum.makerdao.com/t/signaling-guidelines/223), one of the first threads on participating in the forums. Hopefully, he can elaborate on what was updated. The sentiment poll about those guidelines was reset, so now people can reaffirm that they understand the signaling guidelines.

### LongForWisdom

#### Forum Activity Recap

[12:44](https://youtu.be/hlnUWTc5oYo?t=764)

- [Signaling guidelines](https://forum.makerdao.com/t/signaling-guidelines/223)
  - We made a few changes but mostly got rid of old guidelines that didn't seem to make sense.
  - Removed Point 8, which insisted that polls stay open until the poll moves on-chain. I am no longer convinced this is always wise, and have removed it so that it can be judged on a case-by-case basis.
  - Removed Point 6 ‘Proposal changes, poll stays the same’ as this was overly restrictive. The format of polls can depend on the issue.
  - Added a new Point 4, highlighting that it is the Original Poster's responsibility to run the thread through to completion and to at least consider following these guidelines, and the suggested signaling process.
- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
  - A great snapshot of the weeks' active forum threads and activity.
- [Questions about Emergency Shutdown](https://forum.makerdao.com/t/questions-discussion-on-the-emergency-shutdown/930)
  - The idea is that the foundation has a plan in case of ES. The community wants more transparency into that, so no one panics.
- Four signaling threads.
  - [Signal Request: Should we replace the weekly DSR Rate governance poll with a DSR Spread governance poll?](https://forum.makerdao.com/t/signal-request-should-we-replace-the-weekly-dsr-rate-governance-poll-with-a-dsr-spread-governance-poll/969)
  - [Signal Request: Parameters for SCD Shutdown - Date vs Supply](https://forum.makerdao.com/t/signal-request-parameters-for-scd-shutdown-date-vs-supply/970)
  - [Signal Request: Parameters for SCD Shutdown - Peg Stability](https://forum.makerdao.com/t/signal-request-parameters-for-scd-shutdown-peg-stability/971)
  - [Signal Request: How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965)

#### Questions and Discussion

[13:49](https://youtu.be/hlnUWTc5oYo?t=830)

- David: I really liked the point of original posters taking responsibility. That one is a call to action that gives the OP a sense of responsibility about the point being brought up. It puts the most passionate person in charge of facilitating the conversation and coming to a good conclusion.
  - LongForWisdom: Right, though it has trade-offs. Someone could be super passionate about a minor detail that no one else is that interested in. But in general, this is a good guideline.
  - Rich: The thing I wrestle with is: what expectation are we creating for the community members who have an idea that they put into the forum. Is there a clear expectation that people need to campaign for their ideas? Or is there an expectation that some entity or group will see the idea, agree, and then go work on it.
  - David: It's contextual and depends on the merit of the idea, of course.

[16:01](https://youtu.be/hlnUWTc5oYo?t=960)

- Rich: So to kick this off, how about Sam, you tell us what you think about the process on the forums.
  - SamM: I've done a few posts, and the most recent one about the DSR spread had some good discussion. The idea was to keep the `DSR spread` close to zero and the `Global Stability Fee` at roughly the same level as a business-minded decision encouraging the growth of the system.
  - SamM: People asked for a poll, but I missed the signaling thread and didn't explain the options very well. As a result, I made a more objective thread with more pros and cons and tried to stay neutral. That second one has had more traction. There were valid objections that I hadn't considered, which threw me off personally. It's not a clear signal yet; I guess it's a learning process. I feel like I should make a third attempt, but I don't want too many signal threads.
  - Rich: We've all been there. We've had issues where the debate is productive but misses edge cases. For example, the Debt Ceiling threads came to consensus on a conditional buffer. Immediately out of the gate, the amount of circulating Dai behaved in ways we hadn't anticipated. Unfortunately, the vote as it was written couldn't address the difference in context. This conditional voting also expired once MCD released. It loops back to my original thoughts about maintaining or accelerating this process.
  - David: I think Sam's experience highlights an interesting characteristic of this process. The point is to move the conversation forward through signaling threads as a tool to sharpen our understanding of the suggestion or issue at hand. Ideally, as threads mature, a TL;DR breakdown by the OP would be good. I spoke with LongForWisdom about including summaries(TL;DR) in the signal guidelines. Sam has already been doing this.
  - Rich: An immediate poll has always felt weird to me. Again, because the debate should take priority first before people express their opinion on a poll. Expecting people to return to the debate consistently and update their vote might not be ideal, and this brings noise to the forum polls that distort the real signal.

[22:18](https://youtu.be/hlnUWTc5oYo?t=1337)

- LongForWisdom: The initial poll should be as general as possible. For example, "Should we change from what we have now to something else?" With the aim to get a rough idea about whether there are enough people that care about this to pursue the issue.
  - SamM: The phrasing there is problematic. Should we change or not seems like it will create issues.
  - LongForWisdom: It's not about moving _to a_ specific change, just whether community members are interested in one.
  - SamM: Even more generally, you could phrase it, "are you open to making a change on this?"
  - LongForWisdom: That's a fair point. I see what you mean.
  - Rich: Like a straw poll, does the community think it's worth it to pursue.
  - LongForWisdom: If that initial two week period passes, people bring up suggestions and solutions, then it works well with engagement. If people don't think about the specifics beforehand, it narrows in focus and makes it hard to engage with.
  - Rich: The other problem is time-sensitive issues.
  - LongForWisdom: I don't know how you can make it efficient _and_ representative of consensus.
  - Rich: Right, the shorter the time window, the lower the possible engagement.

[25:00](https://youtu.be/hlnUWTc5oYo?t=1493)

- Xenofon: A couple of weeks ago we spoke about approved conditional proposals/polls going up instantly and allowing the community to make changes to the conditions afterward to help us make faster decisions, what's the status of the conversation around this?
  - David: Like the DC?
  - Rich: I think the fast one included bundled issues, technical and monetary policy-related changes, etc. which we're still discussing.
  - Xenofon: That's what I'm referring to. You could use the same tactics for multiple decisions in governance. People with ownership in the project, and of the ideas they want to implement, are the ones who will push and lobby for their ideas to be done. There should be some selected people, dedicated to this community, that should receive the authority to change things during emergencies.
  - Xenofon: I missed some of the earlier conversations. I would love to hear about other proposals, that couldn't be delegated in this way.
  - Rich: I don't think we have a specific example right now. We're discussing the general ideas of consensus and signal, then how to take that to the voting portal and do so in an efficient way.
  - Rich: We're all here because we'd like to be self-sovereign, but it's a lot of work. The community is in the same boat. We have identified a risk team, for example, with domain expertise, and they are empowered to make suggestions about what to do. The question is, do we explore additional teams of empowered-actors? For example, signal watchers, who figure out what an idea is, keep people engaged, etc. Basically, a project manager or like an account manager for a new proposal, who shepherds it through the voting community.
  - David: The question is, how formal do you want it to be? So far, we have the Risk Team, Oracle Team, and Interim Governance Facilitator roles mandated and ratified. That's an example of this sort of actor that is granted special power. But, that is why I liked LongForWisdom's new guideline of having the original poster bring the discussion through to completion. It opens up a less formal role that creates natural working groups around various topics and issues.
  - Xenofon: I understand that's quite difficult, especially depending on the proposals. In standard political science, there are proposals that take a supermajority to pass. Perhaps we can look into additional political science insights for decision making as a community. It's important to define parameters and systems that can be changed by an empowered party, shouldn't be changed so easily, and ones that should follow a supermajority rule. If there is a way to do A/B testing on some proposals, this could also be valuable.
  - David: Agreed! Defining which issues need what amount of consensus or control over them is a good next step we could take as a community.

[30:51](https://youtu.be/hlnUWTc5oYo?t=1849)

- Rich: That brings up another area of exploration around the constant evolution of our processes. We have broad strokes about Continuous Approval Voting and signaling through polls. As we iterate on that over time, we've been expecting that our model would need to shift rapidly. There's no shortage of real-world information about how to govern. Picking and choosing what would be useful from established bodies of knowledge, and bringing those pieces into our world is a fascinating area of research that we should consider.
  - To formalize the best process for ourselves, we need people in our community to do that. An effort from our community to build this out is important. This ties into finding the engaged actors in our community and finding ways to help them do the work.

[33:26](https://youtu.be/hlnUWTc5oYo?t=1999)

- David: Mitote asked about Instant Access Modules; if they're real. Yes, they are very much real and are coming up soon.
- Rich: That is definitely something we'll be discussing and sandboxing soon.

[34:32](https://youtu.be/hlnUWTc5oYo?t=2074)

- David: LongForWisdom wants to pivot the conversation towards ES.
- Rich: That's an interesting one; it's a fascinating and important conversation to have. This is about risk more than governance, so I defer to Cyrus.
  - David: How about a TL;DR on the current thread
  - LongForWisdom: There are questions about the actual process of ES and, more specifically, recovering from ES, some discussion on the forum for transparency from MakerDAO about what that process looks like. To keep everyone from panicking.
  - Rich: Brief context: ES is the ultimate policy tool. The strongest lever to enforce the will of MKR holders. If you want to think philosophically, you could even frame it as the strongest tool for keeping the peg. There are mechanical processes in the code, social processes, how people behave, game-theoretical consideration, what happens after in a post-shutdown world is hard to map perfectly.

[37:50](https://youtu.be/hlnUWTc5oYo?t=2272)

- Cmooney: We have a technical awareness about redeploying the protocol. We can redeploy it in any state that the community wants. The big question is evaluating why the ES was triggered. Determining if it was triggered for a good reason or not. There will likely be a split in MKR holders, how to determine who the right actor was, that needs community discussion. I have one idea that might seed solutions: let's say this was an ESM decision. Clearly, there will be a bunch of MKR sitting on one proposal, and clearly, there was the MKR that was burned in the ESM. Maybe you disregard both of those pools of MKR, and the people leftover would reconstitute the system? But even in stating this proposal, an attacker can have a bunch of MKR on the sidelines. I don't know, have at it.
  - LongForWisdom: Is part of the problem that you set an attacker up with a vector to abuse?
  - Cmooney: Yes, that's a major consideration.
  - David: We can ensure that an MKR holder who is performing an attack through the governance system loses his MKR by introducing a 24-hour lock in the system for any actively voting MKR. This would prevent the attacker from performing a "flash attack" where after passing a malicious proposal, they immediately sell off the MKR they used to vote with.
  - LongForWisdom: Miko outlined it in a thread. If you lock them in along with having a governance delay, then they can't exit their MKR position.
  - David: Are we seeking comment in that thread about flash attacks?
  - LongForWisdom: Just more foundation interaction. We have good technical roadmaps, but the governance is up in the air.
  - Cyrus: A lot of the operational procedures are still underspecified at this point, it will show up in due time. Making this easy for users is going to be the bulk of the front-end and documentation work.
  - Rich: It's not satisfying, but now the chance for ES to happen is more realistic. The community will need to use this as motivation. We can't lose momentum in clarifying the details around ES.
  - Derek: We are working on UI for accessing collateral for ES. It will be a component of the [migration app](migrate.makerdao.com) that users can interact with. Nothing to show here yet. In the new year, we'll have something for the UI(better than the CLI). At a certain point, we'll present that here.

## Risk

### Cyrus

#### Migration Risk Construct Review

[46:53](https://youtu.be/hlnUWTc5oYo?t=2810)

- Before getting into Migration, can we discuss the polls that concluded today?
  - Rich: The GSM hasn't passed yet.
  - Cyrus: Can we talk about how the GSM hasn't passed yet. We got lucky with the monetary policy again; the rates were all voted to remain the same, fairly low.
  - LongForWisdom: I voted to stay the same specifically because we haven't passed the GSM yet.
- Cyrus: Am I right in saying that tomorrow no new Executive Vote will go out? - Rich: Yes.

![](https://i.imgur.com/bSnUUmX.png)

- We are at 68.8 million Dai, up 9-10 million from last week. Migration is still underway and progressing at a fairly quick pace.
  - Over the past few days, the migration contract has been emptying quickly again. We haven't hit a slow down yet.
  - It looks like we don't have to consider any additional measures for now, since MKR voters voted to keep things the same.
  - Likewise, the Sai supply has continued to drop.
- The Collateralization Ratio is at the lowest point its been all year for SCD, ~250%.
- Defi Saver protected ~50,000 ETH worth of CDP's and ~100,000 BAT.
- Combined ETH locked between both SCD and MCD is also at an all-time high, about 2.3 million ETH.
- DSR Utilization rate has not changed much, ~25%. Though we've heard a few exciting announcements that will affect this rate.
  - Compound will be integrating un-utilized Dai into the DSR, approximately 13 million additional Dai at the time of writing. Close to allowing borrows against supply Dai, may see more migration from Sai to Dai.
    - Hypothesis - cSAI suppliers have not migrated because the functionality is not the same; they can borrow against Sai but not against Dai. Any short sellers that use Compound may not have migrated. Hopefully will change soon.
  - OKex, a large exchange, will be incorporating DSR for their customer's Dai deposits.
  - Between the two of them, we might see up to a 50% DSR UR. Hopefully, the OKEx integration will inspire other exchanges to do the same.
    - The system is new, shouldn't draw conclusions from this DSR UR number just yet.
    - Quick reminder - DSR UR going up based on existing DAI would not affect Dai price (just used for internal accounting).

![](https://i.imgur.com/jiY83qM.png)

- The Dai Debt Ceiling for ETH is nearing its cap. It's reasonable to bump it up with a similar reduction to the Sai DC.
  - A \$25 million increase and decreases seem reasonable to me.

#### Questions and Discussion

[57:02](https://youtu.be/hlnUWTc5oYo?t=3427)

- LongForWisdom: Should we create a Signal Request thread to change the Debt Ceilings, or should we expect you, the Risk Team, to just go ahead and create the on-chain poll?
  - Cyrus: I'm not in a position to make that choice. I would be waiting on a stronger community signal on what to do. I won't just go out and say we should do this ASAP.
  - LongForWisdom: Last time, you created a forum post and a poll on-chain, and everyone just voted on it. My expectation was we would continue doing it that way.
  - Cyrus: The Governance processes and standardization around this is a little out of my domain of knowledge. I am looking to the community and Rich to define better the process, happy to do whatever you decide.
  - LongForWisdom: My personal view is you guys should do whatever you need to do to the Debt Ceiling. Not sure if that's a common sentiment.

[59:01](https://youtu.be/hlnUWTc5oYo?t=3543)

- David: Assuming that the Risk Team takes the lead with a recommendation for a Debt Ceiling change, should they take ownership of the signal request thread? Last time it went directly to an on-chain poll because it was urgent; the Dai Supply was very close to the Debt Ceiling. Right now is a good time to define this process better.
  - Matthew Rabinowitz: The purpose of a risk team is worth examining. By the very nature of the risk team presenting information, I would assume that it should take signal to the polls. Not go straight to an Executive Vote. The risk team should directly contribute a frame for an issue, in this case, where the Debt Ceiling should go.
  - LongForWisdom: I'd be happy to see an on-chain poll and then an Executive Vote. It comes down to "what is a good number?"
  - Cyrus: I think keeping in line with the \$25 million is a good amount.
  - Matthew Rabinowitz: I'm talking more generically. At some point with the next collateral type, and even beyond that. The bigger question of "what is the risk team's role in putting out recommendations."
    - For example: let's say the risk team proposes that supply recommendations about Risk Premiums for collateral XYZ should be 3.5%. A community consensus is gathered on an on-chain poll and then goes to an aggregate, Executive Vote.
  - Cyrus: Right, we have quite a few operational models for risk teams. It's a broader conversation that will happen over the next few weeks and months. The concepts behind new collateral types, Risk Premiums, and Debt Ceilings include a fair amount of complexity and subjectivity.
  - Matthew Rabinowitz: Correct, but I would go even further with Maker's scientific methodology for the system as a whole. We should have an Executive Vote or Governance Poll to establish that this is a process that everyone wants. Namely, that: the risk team recommendation goes directly to a Poll, then to a vote.

[1:03:30](https://youtu.be/hlnUWTc5oYo?t=3809)

- David: LongForWisdom writes, "I think that's the general consensus: defer the 'make proposal process' to Cyrus."

- Rich: This comes back to the empowered actors discussion. To empower a group of actors, you need a spark from the community to make that happen. A clear proposal and mandate would help with this issue, even if it is contentious. This discussion needs to be visible on the forums.
  - LongForWisdom: Do you think it will be contentious? Should we make the risk team do all the decisions about the Debt Ceiling?
  - Rich: This is crypto; everything is contentious. We need to have a clear audit trail that shows that this came from a team with well-intentioned reasons. This decision has long-tail effects. Instead of packages, domains, sandboxes, or Instant Access Modules, we have 5-10 levers/parameters that hopefully a majority of MKR voters all agree on at the end of the week. If that model needs to shift, then there needs to be a clear understanding of what that implies, who is doing it, what that means for the future, how we can reuse that model, etc.
  - Matthew Rabinowitz: Such that, if the risk team makes a recommendation that doesn't follow the will of the community, we can have a venue to discuss why.
  - Rich: The community's mechanism for voting should be through disagreement to a plan proposed by an empowered group of actors. This gives the community the opportunity to say no instead of obligating them to say yes. You can distill crypto to the ability to exit or say no to something.

[1:07:00](https://youtu.be/hlnUWTc5oYo?t=4019)

- Cyrus: Essentially, we're hitting the conflict with the project's philosophical goals and what is possible in practice. It turns out risk requires an enormous amount of work. The original idea was to have multiple risk teams providing recommendations. Until we bootstrap that mini-ecosystem, there will be reluctance from the community since the power feels centralized to one team. It's a weird situation that's necessary for the bootstrapping of the system. However, any one risk team giving suggestions puts us at odds regarding governance. I don't think it's clear how that would play out, and I would suggest moving slowly and keeping the discussion going.

[1:08:53](https://youtu.be/hlnUWTc5oYo?t=4128)

- David: Robert, from Compound, described in rocketchat how MKR holders will control the interest rate model for MKR on Compound, any thoughts on that?
  - Cyrus: No idea on that one.
  - Rich: Ultimately, they just apply a modifier; there are no additional mechanisms there.
  - Tim Black: They just don't want to update the contract every time we change Monetary Policy. IIRC July was volatile with changes, and it rocks the boat to update the contract in the open. People on crypto twitter go bonkers.

## State of the Pegs

### Vishesh

[1:10:56](https://youtu.be/hlnUWTc5oYo?t=4234)

#### Relevant links

[Live Migration Data](https://sai2dai.xyz)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/dJ0fSzP.png)

- The last week or so, we've seen a healthy Dai peg, hovering close to \$1.
- Volumes have been up this week, sitting at 3.6 million.

![](https://i.imgur.com/hO2DIrQ.png)

- Most Sai trading has been happening on Uniswap and Kyber, a tiny fraction Radar Relay
- Sai has been hovering lower than Dai, but all in all, is holding a relatively healthy peg.
- All in all, with what we've seen in volume from migration, DSR deposits, on the markets, and elsewhere it seems things are proceeding in the way we expected them to.

![](https://i.imgur.com/B2NzJfe.png)

- $18 million in the DSR, up $2 million in the last few days.
- As far as interest rates holding, the BAT and ETH SF parity has been working without an issue. Holding the parity with a 4% DSR has also been working fine.
- This relatively low SF of 4% seems to be working fine in regards to the pegs. That's an entirely different conversation we can have just to examine that observation.
  - The original thought process was that if the SF is lowered, then the market floods with new Dai supply. Curiously, during the migration, this process has been steady even though the SFs dropped so low.
  - In regards to peg stability, watching the aggregate supply between Sai and Dai is the most important indicator of what might or might not happen with price.

![](https://i.imgur.com/V3SU3fI.png)

- Looking at Collateralization Ratios here, I split up the Vaults into different CR% buckets.
- This is MCD specifically.
- The majority of the MCD debt has been sitting between 225% and 325% CR, which is relatively low and may be primarily a function of ETH price dropping. It could be a function of risk tolerances or the system being so new. Perhaps people are applying lessons from SCD where they had a bigger collateral buffer. We can only guess what the reasons are. We'll see what the taste for risk is going to be for Vault owners.
- SCD was hovering between 300 and 400 for the majority of its life cycle. It's going to be interesting to watch Vault owners risk tolerance moving forward.

![](https://i.imgur.com/Z8V0wZr.png)

- The top 100 Vaults constitute $58 of the $68 million Dai. The top 10 account for almost 50% of the MCD supply.
- Of the Top 15, the average CR is ~250% range. This is a decent amount of risk to be aware of.
- We've looked at these kinds of graphs in the past and have viewed 150-250 as the highest risk bucket.
- This dovetails into the earlier point I was making of Risk Analysists making recommendations on answers versus doing analysis.
  - Making these calls about an acceptable level of risk is a business strategy question. Running numbers on "what is the state of things" requires a toolset and time to figure it out. The distinction of what are the answers versus what do we do with them is interesting.
  - The general model, in my experience, was you make a general model of the state and then make decisions based on that. Having those in tandem is a good way to generate a strategy.

#### Secondary Lending Platforms

![](https://i.imgur.com/5XlezdV.png)

- On Compound, the DAI borrow rate has not changed much. The SAI borrow rate has come down, along with the overall size of the SAI lending pool. The amount of DAI being supplied on Compound is still holding at the same level.
- Cyrus touched on Unutilized Dai entering the DSR.

#### Questions to Vishesh

[1:18:04](https://youtu.be/hlnUWTc5oYo?t=4678)

- Guilherme: Are we tracking this dynamically as a time series to understand Vault owner behavior?
  - Vishesh: In the past, we had. With MCD, we have to rebuild everything. I currently run the static data at this point in time.

[1:21:58](https://youtu.be/hlnUWTc5oYo?t=4917)

- Guilherme: I was curious about the role of risk. I have the impression that business folks come with hypotheses and hand it over to the statisticians. So there are models based on those hypotheses. Wondering if that model would work in a decentralized setting. Thoughts from you and Cyrus?
  - Vishesh: I would just touch on my experience from earlier on in Maker. Rich touched on these, a lot of the push earlier was with the SF and the Dai peg. We needed to focus on a simple answer: what should we do with the SF. To me, that's not the rigorous way to find a great answer. If you have the same responsibility for determining the question and the answer, then the system lacks balance. I don't think analysts should go ahead and give the recommendation based on discovering the question at the same time.
  - Rich: Nice recap! This brings us back to the empowered actors model. As always, I encourage everyone to go to the forums to continue the discussion.

[1:25:36](https://youtu.be/hlnUWTc5oYo?t=5136)

- Xenofon: Where can we find information about which potential collateral will enter MCD next?
  - Rich: This is something we're currently wrestling with. The topic could take up a whole call. There's lot's of documentation about the [collateral onboarding process.](https://github.com/makerdao/community/blob/master/risk/collateral-onboarding-guide.md)
  - Currently, someone representing a potential collateral type would post in the forums a completed [application](https://github.com/makerdao/community/blob/master/risk/collateral-onboarding-guide.md#application-form), found in the link above. From then on, it would lead to rigorous debate and analysis to rate the asset according to its risk.
  - The short answer is that there is no short-list of what collateral is next to be added into the system. You can view the forums for the assets that have completed applications.

## Credits

- Tim Black produced part of this summary
- Igor Teslya produced part of this summary
- David Utrobin produced part of this summary
- Everyone who spoke and presented on the call (listed in the headers)
