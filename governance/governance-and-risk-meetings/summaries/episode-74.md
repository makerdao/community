# Episode 74: February 20, 2019

## Agenda

- [00:00](https://youtu.be/MtZTWK4HAYU): Intro with Rich Brown
- [13:54](https://youtu.be/MtZTWK4HAYU?t=834): State of the Pegs with Vishesh
- [19:20](https://youtu.be/MtZTWK4HAYU?t=1160): Pegs Discussion
- [22:55](https://youtu.be/MtZTWK4HAYU?t=1372): Dark Fix Summary with Mariano
- [27:42](https://youtu.be/MtZTWK4HAYU?t=1658): GSM & bundling discussion
- [53:52](https://youtu.be/MtZTWK4HAYU?t=3232): Governance Topics and additional Q&A

## Video

<https://youtu.be/MtZTWK4HAYU>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`GSM`: Governance Security Module

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/MtZTWK4HAYU)

- We have some new context to explore, as we saw the ecosystem around us create new problems. Specifically, we saw money Legos can become money Jenga(s), depending on your perspective. Even chess is an apt metaphor, a finely crafted maneuver(talking about the Flash Loan attack on Bzx/Fulcrum.) To establish some further context, I'm going to chat about the Governance Security Module(GSM) for the uninitiated.
  - The GSM is a safeguard that enables a time delay after an Executive Vote is passed. Everyone has opinions, and that's important. It's been on the MCD road map for quite some time. It's critical for the health of the system, and there are nuances to understand why the delay was initially turned off(set to 0). A 0 delay gave a brand new protocol time to settle, maintaining agility for technical issues if they were to immediately arise. A 0 delay cuts exploit surfaces. Post-launch, we didn't encounter any issues, and the discussion began for the GSM vote, which we posted in December.
  - As an ecosystem, we found that there are trade-offs to setting a delay: agility to patch bugs or safeguards from governance capture? Which risk is more significant? The community debated this, and the current sentiment is that in the absence of any bugs and with the existence of flash loans, the possibility for Governance attacks has become a larger risk that needs to be mitigated.
  - We still aren't sure exactly why the initial GSM vote didn't pass. It might have been that the tradeoff became understood, or perhaps it was just the holidays. Thanks to the beauty of the blockchain, we can see what people do with their MKR but, unfortunately, no knowledge as to why they do it.
  - Resurfacing a vote is a difficult problem, too, because we have to make a judgment call about why a vote didn't pass. Then to decide whether and when to vote on the issue again. Do we assume that circumstance guided the vote, and we bring it up again, or do we let is just sit as "the will of the community." Serendipitously, [a thread](https://forum.makerdao.com/t/signal-request-should-we-have-another-executive-vote-regarding-the-governance-security-module/1209?u=davidutro) in the forums popped up asking about GSM again, thanks LongForWisdom, and it got traction.
  - The thread also aligned with the recent debacle around exploiting flash loans. With flash loans, people can take high-risk uncollateralized trading positions and perform complex actions in a single block. This increases the risk of a Governance attack on MakerDao.
- There are significant complexities we need to understand, and we need to set the stage before we talk about GSM. The ecosystem evolved a new attack vector, and one antibody is the GSM. The other is the dark fix. We need to understand the nature of decentralization in our protocol. Humans, algorithms, or a combination of both?
- Do we accept that the ecosystem is adversarial, or do we want to collaborate to set up guardrails? How do we handle strong or weak Executive Votes? We should speak about continuous approval voting, specifically if it's robust enough?
- Especially this week, for example, what do we do if we roll up several polls into Friday vote where one or more may be contentious? Tomorrow we raise the DC in the Dai ecosystem, and we have the vote for the GSM. What happens if the vote doesn't pass? It ties into [another thread](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965) we've been discussing in regards to bundling changes. That's the context, topics, and history. Let's proceed!
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Risk

### Vishesh

#### Relevant links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### State of the pegs

[13:46](https://youtu.be/MtZTWK4HAYU?t=826)

![](https://i.imgur.com/EtiiZCr.png)

- Overall, total Dai is at $120 million, with Dai from ETH at $115 million, Dai from BAT at $1.6 million, and Dai from Sai at $2.8 million. This is a slight dip in the overall supply and will be discussed with regard to ETH. Overall, the collateralization ratio went up and then back down.

![](https://i.imgur.com/12Odt48.png)

- Currently, Dai is trading slightly below the peg with larger than normal trading volumes. A huge chunk of this is from dYdX. Over this last week, we've seen some large DAI/ETH trades on dYdX due to vast fluctuations in ETH price recently.

![](https://i.imgur.com/Us08S7d.png)

- Despite large volumes of trades, Dai has remained very close to the \$1 peg. This is an indicator that the system is working more efficiently than in the SCD days, despite large changes in ETH price.

![](https://i.imgur.com/NEpaBrz.png)

- About $65 million of the total DAI(from ETH) supply is 300% collateralized or less. About $57 million is 275% collateralized or less. This means that about half of the supply is at a slight risk, and half the supply is in mid-to-high risk. The portion at significant risk (225% Collaterilization or lower) is about \$27 million, not an insignificant amount.
- These CR's are partly due to rebalancing in the collateral amounts that occurred as a result of ETH price movement over the last week or two. There is not much in liquidations during that time-frame.
- Additionally, some speculation regarding the reasoning for removal of ETH collateral (as well as removal of a large amount of MKR from Uniswap) is the recent flash loan exploit and fears about protocol security. Though, of course, it is very hard to guess why people might be moving their collateral.

![](https://i.imgur.com/6MY61H3.png)

- Over time, we've seen a nominal rise in collateral, and then in one fell swoop, the collateral amount dropped down.

![](https://i.imgur.com/tMOQXbb.png)

- Similarly, that debt was growing and dipped in the last 48 hours or so.

#### Questions and Discussion

[19:20](https://youtu.be/MtZTWK4HAYU?t=1160)

- Rich: Do we know what the drop in collateral was about? Was it a response to flash loans, or is it restoring a position or paying down debt?
  - V: There was some refinancing to Compound for sure. The reasoning is difficult to pinpoint. MKR governance attack risks may have affected this behavior.
  - R: How much MKR available on secondary markets?
  - Andy: I've worked on a script to see the liquidity of MKR on different platforms. Right now, it is around 13,000.
  - Rich: Fantastic. There's a really interesting point that we could talk about in the call regarding people pulling MKR out of secondary lending platforms. I'm choosing to see that as an attempt to secure the system.
  - V: A few individuals provided MKR to Uniswap in the last month or so. Essentially, in the last 48 hours, two large whales, one of which purchased about 1,000 MKR in Uniswap, effectively drained the liquidity, thereby pulling out their liquidity. One took out 11.2 thousand MKR that he was supplying to the Uniswap pool. Net, it fell to about 4,300 MKR, which has dipped another 0.1 or 0.2 thousand MKR in the last 24 hours. In the previous week, it went from about 16,000 to about 4,000 MKR. This coincides with the 11% price pump, the day of, which has since come down to about 9%.

## Tech

### Mariano Conti

#### Dark Fix Overview

[22:55](https://youtu.be/MtZTWK4HAYU?t=1372)

- Mariano: Currently, 150,000 MKR is protecting the top spell. Even the MKR foundation's non-voting shares, the Dev fund, cannot surpass this.
- That said, everything that is about to happen is part of the road map. The delay exists, and it currently exists at 0. We discussed numerous times why a 0 delay was a good idea for the first few months of MCD. A vote was held in December 2019 to change this, but it did not pass.
- In the BzX Flack Loan exploit, they had a delay but removed it for bug fixes. We thought about this, and we believe the [dark fix](https://forum.makerdao.com/t/dark-fix-mechanism-a-proposal-for-handling-critical-vulnerabilities-in-the-maker-protocol/1297/15) is an elegant solution, a compromise between agility and security. This is part of our goal for progressive decentralization. It is not the ultimate solution. There are still a few whales who can get together and affect outcomes. MKR is not as distributed as it could be.
- In the future, we can shut down and deploy a new system using the ESM. Right now, the system is so new that it is not feasible to do this. In the future, it will be possible for one transaction to shut it down and a few more to set up a new system, or perhaps even have a backup system to migrate to if necessary.
- Now that the GSM question has resurfaced, we will set up a new vote tomorrow to increase the GSM delay to 24 hours, which has been on the road map all along. My question to the community is thus: does this qualify as an emergency vote? Do we bundle this with what came out of this weekly poll?

##### Questions and Discussion

[27:42](https://youtu.be/MtZTWK4HAYU?t=1658)

- Rich: I'm going to volunteer LongForWisdom for the topic of bundling and GSM delay.
  - LongForWisdom: I'll start with what we voted in. Emergency technical changes should replace non-emergency monetary ones. The important phrasing is that someone needs to define an emergency. According to the wording of that poll, we said that the foundation dev team would be the judge of what is an emergency for technical changes until voted otherwise. Monetary changes will be in the interest of Cyrus. What this means is that the technical team can say that it is an emergency and could then boot the other stuff out of the executive vote and not bundle it. If we wanted not to bundle, we would have to decide as a community to make that decision. So far, there hasn't been a precedent in this definition as the technical team has not announced an emergency.
  - R: This is the difficulty. As soon as the community develops a set of rules and protocols, there's immediately an edge case. Is there a decision tree that we should put into place? Perhaps a public debate? Who has the more significant emergency? Is there a third option? Is it mandatory that we split off technical and monetary?
  - L: I think in the case that the technical team marks something as an emergency, then yes. That's how we voted. Unless we decide otherwise, or the technical team announces an emergency, the vote should be bundled.
  - Mariano: I do not think this is an emergency. It requires liquidity, which isn't there. I wouldn't qualify this as an emergency.
  - R: Well, the liquidity isn't here today, but it may be there tomorrow.
  - M: I believe we can wait one day and put everything together tomorrow.

[31:53](https://youtu.be/MtZTWK4HAYU?t=1913)

- R: I would like to explore the idea of weak vs. strong executives. It comes down to a go/no-go on the emergency decision. Does the engineering team think that this is considered an emergency?
  - Wouter: It is not an emergency, but to avoid devolving into one, then we should vote for the delay this week. That may sound facetious, but it is a significant difference. An emergency would be if the liquidity were available, or close to being available. We have to operate under the assumption that whatever MKR is available is already tied up in a script that is waiting to attack the system. Waiting another week could bring about an emergency.
  - R: That's a useful distinction. An emergency could represent an existential threat to the system. Or it could be an attack vector on the system. A declaration of emergency could be seen as a lack of faith in the ecosystem's capability to deal with confusion. Some may view 5 or 6 items on an EV and deem it too confusing or risky. A judicial sort of thinking that removes options from the table - that's something I'm concerned about.
    - So tomorrow's poll will have six items - 5 polls and the GSM delay.
  - M: This is good, at least we'll have precedent for next time. Don't take my relaxed demeanor as a lack of importance. We are prepared for this contingency, but we need to take action soon. The script is ready and tested.
  - Rich: As always, it is crucial to balance apathy and urgency. If this is important, it will require active participation, communication, and campaigning, not just MKR.

[36:57](https://youtu.be/MtZTWK4HAYU?t=2217)

- Cmooney: I know we passed the poll that talked about emergency technical changes having precedence over monetary changes, and this was put into the Executive Vote, but the EV did not pass because everyone piled on to the current hat to guard it. We should probably decide if the poll is enough or whether we need the executive to pass for that to be policy.
  - R: This may have been a mistake on my part. To ratify decisions, we have our signaling policy and the executive. As a system, polls were used as a measure of sentiment, and changing the system is done on the executive. It's evolved to polls for decisions on intent, policy, process, or mandates on specific actors. Maybe we can claim ambiguity and not a mistake on my part, but the bundling of monetary and technical fixes probably should have stayed as a poll. However, it was bundled up as an executive, and the executive failed.
  - C: I'm happy with that answer.
  - R: Does that mean we need to do the poll again?
  - L: I think it's okay, the executive was always for fundamental changes to the protocol, right?
  - R: Not always
  - L: Generally, then.
  - R: There is also another experiment, where we just find out how many people disagree with a decision. If there is an ambiguity that the system can't support, then we could discuss, but so far, there is evidence of passing available on-chain.

[41:45](https://youtu.be/MtZTWK4HAYU?t=2505)

- Cmooney: My second point was about the spell in the SCD debt ceiling; I wanted to stress that when we discuss the GSM delay, it's for the MCD system. There is no pause or delay mechanism for SCD. Everyone should be more diligent about setting DC parameters in SCD and setting them for different `ilk` types(collateral types) in MCD. If we tighten those DC's up, we achieve one monetary goal of deprecating SCD and guarding against a flash loan style attack on SCD filtering into MCD.
  - Mariano: To recap, we will be implementing the GSM with a 24-hour delay. These parameters were discussed before the MCD launch and follow the road map; they exist to protect MCD. We'll propose the vote Monday. As Chris said, we should be protecting SCD as well, even if it is a much tinier system. We will post, too, leaving it to the community to decide whether the GSM should also protect SCD.
  - We will also be monitoring tomorrow: the hats, the amount of MKR, and discussing with relevant stakeholders when they want to move MKR to make sure the hat is always at or above the highest amount of MKR liquidity available on the market. Tomorrow is going to be very interesting, and I'm looking forward to it.
  - Rich: Is there an order of operations for this? GSM delay, dark fix, SCD fix - how are we voting for this?
  - M: The dark fix is a method for fixing bugs without outright telling someone what it is. It isn't a traditional vote.
  - Wouter: We don't technically need a vote for the dark fix right now. The system already supports this. You put up a proposal, and if it passes, it triggers a spell. That spell has the authority to affect the system. The reason why the dark fix is supported already: a spell can be anything.
  - W: A spell can allow for a change given a certain fingerprint or hash group. We wanted to clarify this before the GSM vote. To double-check that the method functions, and because it's important to discuss with the community. Balancing the need to trigger ES and the trade-offs of trust and attestations for implementing a dark fix.
  - Rich: I disagree. We've talked about these buckets for decision-making processes (policy, mandates, process, levers). The dark fix in itself can be considered a technical deploy, but it has implications and impact on the social and governance layer. Especially for that trust layer deployment.
  - W: Clarifying from a technical point of view, deploying a dark fix is the same as any other change in the system. It just doesn't reveal the executable bytecode. For a critical change, like the kind necessary to implement a bug fix using the dark fix system, you would need a vote. And it is important that we have this discussion before this issue comes up: do we require a governance poll to make changes, etc. But strictly from a technical point of view, it does not require voting.
  - Rich: There's a distinction worth exploring. The technical fix is clear, but the implications of this fix are fairly weighty. Security, complexity, disclosure, trust, choosing which actors in the system get that trust, we should leave it up to the ecosystem to debate and vote.
  - LFW: The reason we shouldn't vote on the dark fix as a vehicle for bug fixes: there are three options in the face of critical exploits:
    - 1. Emergency shutdown
    - 2. Use the dark fix
    - 3. Deploy the fix with visible byte code.
  - Given those options, this is why we shouldn't vote on the dark fix: the dev team has made it clear that we shouldn't use the visible byte code fix(3). This cuts off one option of the three. ESM is always available, so that takes the other option(1). We shouldn't vote on it because there are no options to vote on since it's essentially a requirement.
  - R: We'll still have to talk about the implications on the social layer.
  - L: Agreed

[53:52](https://youtu.be/MtZTWK4HAYU?t=3232)

- LongForWisdom: Let's discuss the polls that passed this week. The poll results that would be bundled with this weeks coming executive:
  - DC increasing \$125-150 million
  - DSR spread .5 -> 0%
  - MCD SF adjustment to 8% which is the same
  - Sai SF 9.5%
  - Minimum bid reduction to 2% from 3%, which passed.
  - M: Just need to monitor surplus auctions for keeper activity, make sure they're still incentivized to bid.
  - Joe: There's been about 3-4 bidders and some people still bidding above market.

[56:50](https://youtu.be/MtZTWK4HAYU?t=3410)

- `Chat` Snaketh\$xor: "how are audits for GSM module coming?"
  - L: I believe GSM deployed, it's just not active
  - M: Correct. It deployed three months ago with MCD; we wish to change it from '0' to the number of seconds in 24 hours.

### Governance Debate

[58:51](https://youtu.be/MtZTWK4HAYU?t=3531)

- R: Let's encourage some debate. We have quite a few people here, and there are weighty issues to discuss.

- Dawson: With the Dark fix, how do you reduce the scope of its impact?
  - W: The current proposal limits the dark fix so that the exact change that will execute isn't visible on-chain. The fingerprint of that change is hard-coded **in** the fix. Trusted parties vouching for the dark fix would sign a transaction on-chain agreeing with that exact fingerprint. It's limited by what the auditors agree too.
  - W: however, it's permissions aren't limited like any other spell. It has similar access. Soon the system will work like regions with module authorizations; in that framing, then you can restrict the dark fix to a particular module or action. You don't want permissions to be too specific since that would be the same effect as publishing the code, pointing malicious actors to issues in the protocol. For example, "remove collateral type X" in any of the documentation points people towards problems with that collateral type.

[1:02:01](https://youtu.be/MtZTWK4HAYU?t=3721)

- Andy(cryptowanderer): One comment first: I like to look back at the history of the internet, and even IRC chats about decision making. At LiGo, they ran into issues with data. You'll always have issues with authorizations of public auditors and dev communication. At LiGo, since it's already difficult to determine gravity waves, they increase the amount of fake data to analyze. It might be a consideration to add empty dark fixes, which gives more weight to the technical teams' "emergencies" label.
- Now my question: I was leaning towards just the GSM vote tomorrow, but I'd love to understand the Sai attack vector and how that would affect Dai. Where the two overlap.
  - R: Something akin to fire drills? That's a great idea; I'd also like an elaboration on the exploit.
  - Mariano: We have that adapter for migrating Sai to Dai. That adapter makes Sai privileged collateral on MCD. We have a Debt Ceiling for how much Dai mints using Sai. If there was an exploit on the single collateral side, Sai could be arbitrarily minted and converted into Dai, affecting MCD.
  - Cyrus: Then, by migrating to MCD, you can continue until you hit the DC of the adapter. Is that why we suggested lowering the DC for the particular adapter?
  - M: Correct.
  - C: Can we clarify how that relates to governance attacks. If there is no GSM for SCD, then the attack is about minting more Sai and then migrating it.
  - M: Correct, right up until they hit the DC. Ideally, the DC should be synchronous, and I think the executive from last week doesn't include synchronicity. It was supposed to lower the Sai DC to \$20 Million. There wasn't the inclusion of MCD's DC too. It looks like that particular vote isn't happening, everyone is protecting the hat, and the new vote is taking precedence. We should consider another vote to adjust the DC again.
  - L: An MCD DC vote next week sounds good.
  - C: We'll put up a governance poll Monday and leave it open for discussion in RocketChat.

[1:09:54](https://youtu.be/MtZTWK4HAYU?t=4194)

- R: The primary complexity with the dark fix is who do we trust and how to avoid cognitive/rhetorical fallacies? Is it better to have a wide group for validation? Is it better to hope that the biggest holders will defend the system? Or is it because they only care about profits? Or do we want to trust the old world? E.G., The legacy financial system with a mega-corporation to sign agreements and not leak information. Or would we empower trusted actors from our own ecosystem?
- The first camp trades on profits to ensure MKR security; the second group is bonded and insured; the third is crypto natives, where reputation is slightly more important. Perhaps combinations of those three camps are best, but an ongoing conversation and evaluation of the group are important.
  - Mitote: Wondering about how communication happens between devs and signatories? What's the most secure way?
  - R: Agreed and the turnaround time for some large corporations. Another question: is 24 hours enough time?
  - W: To clarify, 24 hours isn't for attestations. The 24-hour delay kicks in **after** the signing. Giving the community time to pass dark fix, trigger ES, or allow it to pass.

[1:13:59](https://youtu.be/MtZTWK4HAYU?t=4439)

- Cyrus: After GSM passes, the proposal comes through, and is flagged. What's next?
  - CMooney: We wrote up a quick spell that we could use to drop a spell when the delay is in place. You could think of it like get out the vote. This extra spell goes in. We make it clear, across social media, that voting for this spell allows us to remove a malicious spell from the GSM queue instantly.
  - Cyrus: Could you just add more MKR to the current hat? Say current is 50k and malicious is 60k?
  - Cmooney: That's the step before we fail to prevent a malicious proposal. We should flag it and be aware. We can guard against it with the hat. The situation we're evaluating is: if someone uses deep liquidity, a flash loan to lift the hat, and then schedules a malicious proposal; We'd have twenty-four hours to mobilize the spell that drops the malicious actions. Much like the campaign that we saw yesterday.
  - C: Wouldn't it be easier to campaign to secure the hat?
  - Cmooney: Correct. The first line of defense. But if it's instantaneous, like a flash loan lifting the hat manages to get it into the GSM queue, our next defense is to try and stop it. We'll need 50K MKR to shutdown.
  - Cyrus: I'm lost on how we would use the cancel spell if we can't secure the current hat.
  - Cmooney: Assuming it's a flash loan getting the proposal in quickly, the current hat has 150K MKR on it. Attackers would only have so much time, and MKR liquidity, to execute a malicious Governance action that goes past the hat into the GSM queue.
  - W: There are large MKR holders who don't feel comfortable keeping MKR in the system. They might move it to cold storage. When an emergency pops up, it's a matter of persuading them to add their MKR back, canceling the unexpected proposal.

[1:18:38](https://youtu.be/MtZTWK4HAYU?t=4718)

- Cyrus: Follow up question, if we're just canceling, and the large holders won't secure the current hat, what's to stop the attackers from returning 24 hours later?
  - W: You would have to make sure after the cancellation that the situation isn't the same. Otherwise, there is space for another attack.
  - C: Does voting for cancellation spell remove your MKR from the current hat? If you wanted to vote for the cancellation
  - Cmooney: Not if you use more advanced voting API, Nik introduced that.
  - W: Cancellation, in that respect, isn't different from other spells. In our current voting UI, you would be moving it to that cancellation spell and removing it from the current hat. If we're using the more advanced voting mechanism in the UI, you can vote for the old hat and cancellation spell at the same time.
  - C: If the cancellation spell goes through, the current hat just stays?
  - W: It is a new state; every action which executes is a new hat.
  - M: The spell removing the previous spell would be the hat. You would be voting for that.
  - Kurt: Assuming a potentially malicious spell is plotted, that would mean that you have a malicious hat, you would want off that hat anyway.
  - Cmooney: Caveat here is while malicious spell has hat they can plot additional attacks. You want to remove it from being the hat quickly.

[1:21:50](https://youtu.be/MtZTWK4HAYU?t=4910)

- Wouter: Happy that we mentioned fire drills. I agree with the concerns for using that with Dark fixes; I think it might fit better on other mechanisms that only apply in emergencies like ES. **We need to do drills with integration partners to prepare for ES. Same thing for the cancellation process. Rare events should be practiced in advance due to their rarity.** Looking forward to exploring the extreme states of the system to understand the mechanisms and the underlying systems better.
  - C: Can we talk about expectations: who is monitoring for malicious proposals?
  - M: That falls under the gradual decentralization road map. Today, we have the Foundation to alert people when to worry. The path forward is building readily available and robust monitoring and alerting infrastructure. With a low barrier to entry, anyone can spin up a monitoring instance.
  - R: There are mechanisms in the ecosystem, encouraging this tooling. There is a grants program, for example. We're interested in funding any governance tooling.

[1:25:39](https://youtu.be/MtZTWK4HAYU?t=5139)

- R: Cryptowanderer mentions concerns around triggering ES when doing a fire drill. We don't use the Foundation MKR for voting.
- R: Richard Lopez mentioned a Dark fix monitoring tool. This would be great.
  - Richard Lopez: Just like we have governance monitoring, having diagnostics at the end of fixes would be helpful. It would need a lag, and I'm not sure if weighting by the severity of each bug would be best. Open diagnostics allows devs to continue and keep the community in the loop about ongoing work, so nothing feels "behind the scenes."
  - R: There is value in maintaining a historical record. We also have mkrgov.science, which potentially could include some of those features. It's a community-led effort, again, any improvements let us know if you're interested in building with us.

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers
