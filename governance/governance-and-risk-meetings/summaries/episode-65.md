# Episode 65: December 12, 2019

## Agenda

- [00:00](https://youtu.be/OeAJCJrGjFI): Intro with Rich Brown
- [16:47](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=1007): Recap of Forum Topics with LongForWisdom
- [21:59](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=1319): Governance Discussion
- [37:29](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=2249): GSM and OSM engineering overview with Wouter
- [1:12:22](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=4342): Migration with Cyrus
- [1:23:12](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=4992): State of the Pegs with Vishesh

## Video

https://youtu.be/OeAJCJrGjFI

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

[00:00](https://www.youtube.com/watch?v=OeAJCJrGjFI&list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan)

- Give us feedback about the call. Hop on the mic with questions or type in the chat if it's too noisy.
- Let's keep our schedule as tight as possible today since there is a lot to cover this week.
- Our governance process is a big discussion point, especially in our current context. Governance is happening right now, in our forums. LongForWisdom's section will help us review some of the most important threads and discussions. Wouter, Mariano, and Cyrus are here as well to cover technical questions about the system and risk. Developers will do an overview of the OSM and GSM, Cyrus will cover migration. Then we'll finish with the state of the pegs.
- I'll recap our last discussions: our governance system in Sai was great, we iterated, and it helped launch MCD. It was an excellent start to the open governance model we have. I believe that this model alone won't serve us perfectly in the future. I've mentioned that cracks are forming in this model, and it's becoming more evident that MCD needs more to scale.
  - We have two protocols to manage, SCD and MCD. One lever on SCD is manageable, but MCD adds more. Since we have additional levers in our control, there is extra complexity for the community to manage. How can we effectively make changes?
  - We'll also have to keep agility in mind, making continuous voting informed and productive.
- Deploying technical fixes alongside Monetary Policy changes can be complicated and problematic. The community has raised problems with bundled Executive Proposals.
  - There are emerging changes on the road map, and we'll discuss the GSM today. We need to stay relevant and reliable with our cadence and communication. Especially if there is any weekend activity, a week is not a large amount of time to go through our governance process from start to finish, that consists of a forum poll, Governance Poll, and finally Execute Vote.
  - I'd like to consider solutions to all these problems.
  - I mention a working group to help guide V2 of Governance, adding sophistication and iterating on our process. With deeply engaged stakeholders, forums, some process frameworks, the next step is to treat Maker like a business (project plans, data trackers, owners, etc.).
  - The first step is collecting all the requirements, improvements, and ideas for the governance system.
  - I'll be outlining the problems for the community in a forum post. From there, we can prioritize problems, scope them, and then we'll break off into teams and formally approach these issues.
- This week, as an example, we were working on transferring the authority of the Maker token to the community. We found out, on the weekend, that our path needed a change, pushing the GSM issue forward on the timeline.
  - The forums got intense with discussions around 24 hours or seven days as a delay. Other talks focused on whether we should delay the monetary policy changes in favor of the GSM vote. Our addendum with OSM exclusion inspired a few questions too.
  - These conversations brought up more questions about delaying Monetary Policy: Did we decide that? How did we do that? Did we decide if the GSM is a nice to have? Did we consider the trade-offs that the GSM vote implies? What about acting on the weekend?
- All this to say, we have to establish a firm process while keeping the forum conversations and points of discussion visible. There are even more questions we'll ask ourselves:
  - How to get community buy-in?
  - How to make process canonical?
  - How do we reach consensus?
  - What is a rough consensus?
  - Will the community demand explicit signaling or a bias towards action?
  - Scheduling and calendaring is a real concern.
- Once we have a more precise definition, then it's easier to commit to the proposal, the schedule, and communication.
- All of these questions and initiatives contribute clearly defining the Governance meta: What does Governance do? How do we do it?
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

### LongForWisdom

#### Forum Activity Recap

[16:47](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=1007)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
  - Four active signaling discussion threads this week.
- [Questions/Discussion on the Emergency Shutdown](https://forum.makerdao.com/t/questions-discussion-on-the-emergency-shutdown/930)
  - Meeoh starts a thread related to emergency shutdown and poses some questions and discussion points. Lots of good engagement here.
- [Signal Gathering: Request for Adjustment to DSR Phrasing](https://forum.makerdao.com/t/request-for-adjustment-to-dsr-phrasing/926)
  - Hexonaut introduces the idea of voting on the spread, rather than the absolute value, of SF-DSR spread in MCD.
- [New Idea: Switching to Ranked Choice Voting for the Multiple Choice Governance Votes](https://forum.makerdao.com/t/switching-to-ranked-choice-voting-for-the-multiple-choice-governance-votes/912)
  - Hexonaut suggests that we move to ranked-choice voting rather than first-past-the-post, and lays out a solution to do so with minimal dev work.
- [Signal Gathering: Poll for SCD Emergency Shutdown](https://forum.makerdao.com/t/signal-request-poll-when-should-we-trigger-scd-global-shutdown/935)
  - Starting a discussion around ES circumstances. Hopefully, the risk team can illuminate some of the most critical factors.
- [Signal Gathering: Addendum to the current Poll to Activate the Governance Security Module](https://forum.makerdao.com/t/addendum-to-the-current-poll-to-activate-the-governance-security-module/938)
  - Excluding OSM from GSM. It seems as though most are supporting. the exclusion
- [Signal Gathering: In the case where an emergency technical change to the DCS is required, should we skip monetary policy changes in that week's executive vote?](https://forum.makerdao.com/t/in-the-case-where-an-emergency-technical-change-to-the-dcs-is-required-should-we-skip-monetary-policy-changes-in-that-weeks-executive-vote/929)
  - LongForWisdom introduces the definitive "to bundle or not to bundle" vote. Providing some data on how the community feels about bundling.

#### Questions and Discussion

[21:59](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=1319)

- Rich: That last thread, [talking about the decision to skip monetary policy changes in exchange for emergency technical changes](https://forum.makerdao.com/t/in-the-case-where-an-emergency-technical-change-to-the-dcs-is-required-should-we-skip-monetary-policy-changes-in-that-weeks-executive-vote/929), is the perfect test case. Can we touch on some of these issues? The cadence for monetary policy-related changes changed right out of the gate with MCD.
  - It's worth hashing this out: What is the difference between a fix, upgrade, or new lever? It's hazy, and I'd like to get a clear signal on how to proceed. In your perspective, based on the forums process and that threads feedback, will we just focus on the GSM and not do Monetary Policy this week?
  - LongForWisdom: That's a good point. Ideally, we separate engineering and monetary policy changes. Considering we had an emergency engineering change, it made sense to articulate what people thought. For the current thread:
    - Twelve votes (55%) think we should _not_ include monetary policy changes in the weekly executive in case of _any_ emergency.
    - Two votes (9%) say skip it for this emergency.
    - One vote (4%) we should bundle technical and monetary in the executive.
    - Nine people (remainder) abstaining or no opinion.
- Rich: Does that mean we don't do Monetary Policy this week?
  - LongForWisdom: That's your job to decide (laughs) you're the facilitator.
- David: Would it make sense for bi-weekly cadence on Monetary Policy, and in the weeks where we don't have that, we can focus on MIPs, styling, process changes, and technical changes?
  - Rich: I'd love to evaluate the efficacy of our existing cadences before jumping into bi-weekly commitments. Let's try to make it data-driven.
  - Mariano Conti: The system is too new to jump to every other week.
  - LongForWisdom: If I hadn't raised this in the forum, we'd presumably be bundling. Putting this out gave a signal that most people don't think we should be bundling. Whether we need to do an on-chain vote for this, I don't know.
  - Rich: That is the question. It will add more wait time if we do an on-chain vote, possibly another week.

[27:15](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=1635)

- Rich: Right, to review some of the base assumptions: Continuous Approval Voting, or 'skin in the game' voting, where those with the most to lose are the ones participating and watching. Ideally, the Plutarchs are extremely interested in the success of the ecosystem.
  - We have a polling system that allows a wider range of people to engage in the signaling process on the forum, which ideally allows the ecosystem to know what moves into an Executive Vote and the thoughts and arguments behind the process and norms we are establishing here.
  - We needed a way to gather "signal the signal-ers." Thus, forum debates lead to forum polls. From those forum polls, we craft the on-chain Governance Polls and Executive Votes that only MKR holders can participate in.
  - This is the first version of this process. I don't think its robust enough, that is why I keep bringing up the topic for discussion.
- Rich: [LongForWisdom's thread](https://forum.makerdao.com/t/in-the-case-where-an-emergency-technical-change-to-the-dcs-is-required-should-we-skip-monetary-policy-changes-in-that-weeks-executive-vote/929) highlights the issues with what we're doing tomorrow. For tomorrow, what does the community want? Is it: Monetary Policy, Monetary Policy plus GSM, or Monetary Policy plus GSM _and_ OSM?
  - LongForWisdom: Aim of the poll was surfacing what people felt about bundling, what we want to do with that if we disagree, is hard.
  - Rich: It's probably apparent that I wish the Interim Governance Facilitator to be administrative and not an editorial role.
  - LongForWisdom: If we didn't post this thread, then we wouldn't have that information. It's more than no information, and I would prefer that we look at the majority vote.
  - Cmooney: Forum polls should surface signal for actual Governance Polls, where the impact is measured by real MKR voting. We can't assume what the community wants until there is that poll.
  - Rich: That would imply that we do need to bundle at least for this week.
  - Cmooney: Right, but we need the technical changes. I agree that bundling often becomes pork-barrel politics, and nobody wants that.
  - Rich: This raises an exciting challenge to Monetary Policy. If we can say, "oh, this week, we just won't do it." Then why do it in the first place?
  - David: It's unclear that making Monetary Policy-based changes week over week is necessary. Critical technical changes should have priority as they come. We don't know the efficacy of these changes, and we're unsure if waiting is better. I think Monetary Policy changes may take priority based on how severe the problem is. Bundling them adds a delaying risk, making it even longer before we deploy necessary fixes.
  - LongForWisdom: Ideal situation, yes poll would work. We haven't had an on-chain "can we bundle" vote. At no point have MKR holders said yes I want to bundle parameter adjustments and technical changes together.
  - Rich: Interesting. That's clarifying. Perhaps the bug-fix to the flopper vote began that process for us. We didn't formalize it, though. Setting up a procedure in the case of an emergency fix would be helpful. E.G., if we have an emergency fix this week, then delaying Monetary Policy by a week can be the assumed precedent. This procedure can keep us out of decision paralysis.
  - LongForWisdom: Right, the Governance Poll confirms what people want.
- Cmooney: So did we land in a happy accident where Monetary Policy isn't changing so we don't have to discuss this?
  - LongForWisdom: This happened last time too.
  - Rich: Ok, that's an excellent place to move on, we'll jump to the forums and our eventual working group.

## Risk

### Wouter

#### Summary of the GSM issue

[37:29](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=2249)

- On Monday, there was [a blog post](https://medium.com/coinmonks/how-to-turn-20m-into-340m-in-15-seconds-48d161a42311) by Micah Zoltu about the lack of a Governance Security Module delay. The delay defends against governance attacks. A governance attack is the same as a vote, but the winning proposal is malicious.
  - The GSM creates a delay between a passing vote and the system change. It's also in effect for far-reaching updates, E.G., modules in the system. The delay allows the community to check code to make sure the changes are accurate and not malicious.
- If it is malicious, there are two reactions:
  - The community can do a second Executive Vote canceling the previous executive within 24 hours.
  - If that's not possible, then there can be an ES. If you do this, you burn your MKR and wind down the system, giving Dai holders the equivalent amount of collateral. Allowing all users to be ultimately protected.
- The downside is that the delay applies to _all_ governance changes. If we could discriminate between malicious and honest modifications, then we could cancel them right away. There is no way to do that without the manual judgment of the MKR holders. So all proposals go through this delay.
  - The delay may be problematic for changing risk parameters, but the real tricky part is emergency patches. Which, by design, are deployed in the same process. If there is a delay of 24 hours, a malicious actor can exploit the vulnerability. The short delay gives us the ability to fix things quickly and defend against governance attacks.
- We put up a proposal that is strong technically and a good compromise. It minimizes governance attacks and reduces risks from exposing a vulnerability in patch-fixes.
  - The solution is: increasing the delay to 24 hours but, excluding the OSM from the GSM (since the OSM also has a delay).
  - The reasoning is: we can freeze the OSM if we see price manipulation. If the OSM were subject to the GSM, then we would have to wait 24 hours for the freeze to take effect. The delay would prevent us from having this as a defensive tool. Therefore it should be an exception.
  - We should be able to include this on the Executive Vote tomorrow, updating the GSM but excluding the OSM `freeze` method.
    - A quick reminder that there are two freezing methods. One just stops the price feed until another Executive Vote; the second disables the OSM. This approach makes drawing debt and triggering ES impossible.
  - The attack we're most concerned about is a governance attacker that triggers the OSM, blocking ES, and then using that venue to initiate a governance attack.
  - The team analyzed the `stop` and the `void` method. The right technical solution was to go for the `stop` method.

#### Questions and Discussion

[48:50](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=2930)

- Ironrand: Can the Governance Security Module be switched off temporarily? To allow an honest technical fix to be uploaded promptly.
  - Wouter: Yes, definitely.
  - Cmooney: But it has to go through the delay.
  - Wouter: Exactly. Turning it off will be subject to delay: the first step would be to disable it, then once disabled, you can apply bug fixes without delay. In reality, that would be difficult. Since you would need someone to tell the community, "trust us, we found a serious vulnerability."
  - Rich: It also opens up a 24-hour window of opportunity for an attacker.
  - Wouter: That was a secondary consideration, but yes, that too. Once you ask to disable the delay, you draw attention to the vulnerability.

[50:58](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=3058)

- ChrisBlec: Does it make sense to incrementally build-up to a 24-hour delay over a month or two?
  - Wouter: Two questions, so I'll answer both. What can we do if the delay is enabled?
    - At that point, we'd need creative solutions. In Crypto, more broadly, we've seen vulnerabilities exploited by good attackers. There are several solutions, but they depend on context. There might be a way to structure the patch, coordinate with MKR holders, change a single parameter, E.G., setting the Debt Ceiling at zero. This process would allow you to set the patch up for quick execution without pointing to the specific vulnerability that's getting the patch.
    - If these solutions don't work, then the ESM is the last line of defense, burning 50K MKR. Patching the critical vulnerability and migrating to a new system. It's a painful process to go through to solve issues that way. This is why we started with a delay of 0. With a new system like MCD, the chances for technical issues are highest in the beginning, and then they diminish over time. Whereas governance attacks are a constant risk.
  - Wouter: To Chris's question, on whether it's beneficial to build up the delay or not, as mentioned before if we find a critical vulnerability, we can't have it exposed for 24 hours before. Depending on the issue, you could find a window to expose the weakness, but not enough time to write an exploit. Assuming the community sees the patch reasonable.
    - Building the delay incrementally over the coming weeks wouldn't have an advantage. Rather than changing it multiple times, 24 hours is a good starting point. If we do detect a critical vulnerability, we can decrease the delay to 30 mins, for example, explaining to the community what the patch is and what the vulnerability is. If the community isn't convinced, they can pull the trigger. 30 mins aren't enough time to reverse engineer and use the exploit.
- ChrisBlec: How would you override the 24-hour delay to fit 30 mins?
  - Wouter: That would be a governance decision, subject to the governance delay. To clarify, you put the 30 min delay to an Executive Vote that passes. Then after 24 hours, you can initiate the 30 min delay. Then it's time to submit the patch and set up a time with the community to explain the patch. Then activate it.

[58:28](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=3508)

- Chrisblec: So that vote would happen without revealing the vulnerability. AKA "Trust us, we need to vote on 30 min delay." Then you would reveal whats going on. That sounds like a move away from a decentralized governance structure, right?
  - Wouter: It would still be decentralized because the community can always act, and we're taking the time to explain it. Much of this is hypothetical; it doesn't have to be a half-hour; I just picked that time interval as an example. It could be an exploit that takes days to attack but one hour to explain; in that case, we would put that time delay to the vote. Decentralization here comes from community power in their decision making: blocking actions. We've mentioned Instant Access Modules, though we haven't shared the designs yet on this call. They follow the same principle where voters can cancel actions if they want and still hold the ultimate power of effecting change.
  - Rich: Decentralization is a loaded term; it's a spectrum. Either you're closer to full decentralization or not. People here talking in the forums and on the call are participating in decentralized governance. Understanding where we are on that spectrum is important.
  - Chrisblec: 'Trustless' would have been a better word than decentralized to illustrate my point.
  - Rich: Love that word, you can define that more than "decentralized." There is another model still, one like a MakerDAO security team where trusted actors in the ecosystem vet security changes.
  - Mariano Conti: Right now, there isn't a lot of people with knowledge of the system. I think the community trusts the Maker Foundation's engineering team to do what's best for the system. I expect over time the community will learn to delegate their trust to parties outside the Maker Foundation's teams.
  - Rich: Right, that's why we exist in the first place, to secure and bootstrap the system. From that context, we are trusted by the community implicitly. There are definitely discussions to be had about self-securing the system as a community.
  - Chrisblec: It would be counterintuitive that new decisions should increase the amount of trust required. I think decisions that increase the need for trust is a step backward.
  - Cmooney: The Foundation internally thinks of itself adversarially to the protocol. There is no elegant trustless solution for bug disclosures and patching. Aside from that, all of us agree with the sentiment that the mission of the Foundation is to move us to a world where the Foundation doesn't have that trust relationship anymore.
  - Michael: This trustless-ness is an entirely new area of research. We have a problem to solve, the tools available to solve it, and we have to figure out how to reach a trustless solution going forward.
  - Wouter: I'd like to bring up long term average vs. temporary measures. In the case of a critical vulnerability, falling back to a 'trusted' model may be the right thing to do in the absence of a trustless solution. It's a single operation requiring trust at that very moment. Immediately after the operation, you end up back in the more trustless world. We should distinguish the two, the current solutions, and the world towards which we are moving.

[1:09:13](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=4153)

- Tim Black: Quantifying what vulnerabilities are critical or not, is that internal or open?
  - Wouter: [The Hacker0ne bug bounty](https://hackerone.com/makerdao_bbp) is a clear example where the severity of the bugs is quite well defined. Risk analysis is half art and half science and ultimately depends on your risk appetite. There is no perfect end-to-end scientific model. For the dev team, working towards an objective scoring model would be great. Quantifying "how critical is this bug?" requires building an objective model.

### Cyrus

#### State of Migration

[1:12:22](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=4342)

![](https://i.imgur.com/vreS0rl.png)

- Dai supply is at 61.4 million, with 1.2 million + ETH locked.
- Sai supply is around \$51 million, with 900K ETH locked.
- We've seen a flippening between the protocols.
- The total supply between both is at \$113 million, which is higher than when MCD launched.
- DSR Utilization rate is up, sitting at 24%.
  - DSR UR by itself doesn't push the Dai price up. What's really needed is for investors to convert outside capital into Dai. The higher the DSR UR, the less circulating supply, or float, is in the markets.
- On Uniswap, DAI liquidity has surpassed SAI liquidity.

![](https://i.imgur.com/MS4iOU7.png)

- Dai in the migration contract is not emptying as quickly as it was in the first few weeks. Sai liquidity is no longer the bottleneck for the migration. CDP owners are now the bottleneck, we should think about how best to incentivize them to move over.
- Last week we ended up with a negative SCD spread versus the DSR. Creating a small arbitrage opportunity. I saw at least one market maker mint Sai, convert it, and put it in the DSR. Varying opinions on the efficacy, but I thought it was decent, though the payoff from the arb wasn't tremendous.
- If we wanted to target CDP owners, the two most straightforward methods are to increase the SCD SF or to decrease the MCD SF. This change would make it more appealing to move into MCD. Either option should keep the pegs in mind, and we should evaluate increasing the DSR to accommodate.
- If we increased the SCD SF that could create problems with sell-side liquidity.
- Compound still has $12 million Sai, $9 million borrowed. Sai borrowers on Compound may be using their Sai to borrow other assets. If people borrowed other tokens through Compound, then the spread with the DSR might not be the feature they're seeking. There might be a few roadblocks to getting Compound Sai to migrate over.

#### Questions and Discussion for Cyrus

[01:20:51](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=4851)

- n/a name: Is there any analysis on more significant holders of Sai, similar to what you presented last week?
  - Cyrus: Doing a long tail chain-analysis of CDP and Vault holders is a medium-term project that is not in my priorities for the short-term. Makerscan has some of these statistics. Granularly analyzing positions might be difficult at the moment.

## Sai Analysis

### Vishesh

[1:23:12](https://youtu.be/OeAJCJrGjFI?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan&t=4992)

#### Relevant links

[Live Migration Data](https://sai2dai.xyz)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/IAKODSz.png)

- We saw large quantities of Sai wipes about ten days ago. The rate of these wipes has fallen slowly since then.

![](https://i.imgur.com/cxsqe5s.png)

- Comparatively, DAI came right back up, showing that it was minted on the MCD side.

![](https://i.imgur.com/dZaNVeL.png)

- Dai 24hr VWAP is steady at around a dollar for both pegs.
- There has been comparatively low trading volume in the last 24 hours.

![](https://i.imgur.com/HkYyicR.png)

- Low trading volume for Sai over the last 24 hours, as well. Especially since there are fewer trading venues for Sai. You can find some trades farther below a dollar price. Since Oasis cut ETH<->DAI trades on the UI, it looks like these price anomalies are direct on-contract trades.

![](https://i.imgur.com/dZaNVeL.png)

- Light trading for both. I think interest rates do have a role in how these assets have been trading lately.

![](https://i.imgur.com/wibDRLh.png)

- Most Dai comes from ETH and a small amount from BAT, we're obviously focusing on ETH right now. This will get more fragmented as we grow MCD.

#### Secondary Lending Platforms

![](https://i.imgur.com/jj1fvUb.png)

- It's currently cheaper to borrow Dai on Compound than to mint new Dai on Maker. This should incentivize more borrow volume on Compound's Dai market. That incentive would lead to a higher interest rate on borrowing, closing the gap between the Compound borrow rate and MCD SFs eventually.

![](https://i.imgur.com/OpewwDb.png)

- Borrow volume for Sai has come down significantly. Supply volume for Sai has come down too.

![](https://i.imgur.com/zV47QAX.png)

- The UR on Compound has cratered for Sai.

![](https://i.imgur.com/6fs62AL.png)

- Fascinatingly, there is a $9 million pool of SAI sitting there(~$12 million supplied and ~\$3 million borrowed). What's interesting is why, especially given the better DSR rate.

![](https://i.imgur.com/e4dOvSc.png)

- Roughly 1/5th of Dai supply is on Compound; for SCD, it was about 30% at the highest point. We can expect this to rise as MCD supply rises, and migration finishes out. The weird persistence of Sai supply is the only part that we'd want to understand.

![](https://i.imgur.com/tXtNiE6.png)

- I ran some numbers to check on the risk in MCD Vaults. It looks like, on a weighted average basis, the Collateralization Rate of MCD Vaults is around 300%. Sai was roughly $148 Million, collateralizing $60 million Sai, which is a 246% CR. I went checking to see if there is a change between SCD and MCD collateralization. Comparatively, it looks like MCD is slightly higher.

## Credits

- Tim Black produced this summary
- David Utrobin produced this summary
- Everyone who spoke and presented on the call (listed in the headers)
