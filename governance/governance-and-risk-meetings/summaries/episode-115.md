# Episode 115: October 22, 2020

## Agenda

- [00:00](https://youtu.be/1BcBrArV-5A?t=000): Introduction
- [02:07](https://youtu.be/1BcBrArV-5A?t=127): Governance at a Glance
- [06:50](https://youtu.be/1BcBrArV-5A?t=410): Smart Contracts Team Update
- [10:57](https://youtu.be/1BcBrArV-5A?t=657): Oracles Team Update
- [12:00](https://youtu.be/1BcBrArV-5A?t=719): Risk Team Update
- [14:48](https://youtu.be/1BcBrArV-5A?t=888): Community Development + Operational Support Update
- [17:02](https://youtu.be/1BcBrArV-5A?t=1022): Collateral Calls Update
- [22:49](https://youtu.be/1BcBrArV-5A?t=1369): MIPs Update
- [29:19](https://youtu.be/1BcBrArV-5A?t=1759): October MIPs Governance Poll Review
- [30:04](https://youtu.be/1BcBrArV-5A?t=1804): Governance Portal Improvements
- [44:13](https://youtu.be/1BcBrArV-5A?t=2653): Collateral Prioritization Framework
- [54:07](https://youtu.be/1BcBrArV-5A?t=3247): State of the Peg
- [1:07:19](https://youtu.be/1BcBrArV-5A?t=4039): Open Discussion

## Video

<https://youtu.be/1BcBrArV-5A>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/1BcBrArV-5A)

- Hello everyone, welcome to the MakerDAO scientific governance, meeting number 115, taking place on Thursday, October 22nd, at 16:00 UTC. Please join us if you're interested. I am joined by 30 odd maker related people on this fine Thursday. My name is LongForWisdom; I'm the governance facilitator for MakerDAO currently. With the usual preamble, feel free to interrupt and contribute to this call. Don't worry about interrupting people; it's okay. And if it becomes a problem, I'll let you know. We'd love to hear from all of you.
- Let's go quickly through the agenda, then we'll get started. So we're going to have weekly updates from the domain teams, the regular weekly updates, and on MIPs and community stuff. I'm going to do the MIPs governance poll review as part of the procedural things. We've got two presentation segments this week. We've got Derek presenting the improvements to the government's portal. This is similar to [the presentation that happened on the community call earlier this week](https://www.youtube.com/watch?v=0zFWRhXBxHc). Some of you may already have seen it, but the new portal is pretty cool; I'm looking forward to that. And then we're going to have juanjuan talk about the collateral prioritization framework and show some pictures. Also, giving everyone a reminder about daylight saving time and time zones. This meeting is scheduled in UTC, which means it will move for most of you if you're living somewhere with a daylight savings adjustment, so just be aware that this may change the time for this meeting soon.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[02:07](https://youtu.be/1BcBrArV-5A?t=127)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

- I've been working on documentation for governance parameters; it's gonna be a semi-long-term thing, I think. I'm starting with the parameters which are most often talked about. Hopefully, we can link to those documentations whenever we're proposing signal requests or changes to certain parameters. For example, the debt ceilings or collateralization ratios, so that people who are newer to the protocol can get informed more easily.
- Other than that, I've been keeping things running like usual. That pretty much covers my updates.

##### Discussions

- [MakerDAO Protocol Cover using Nexus Mutual](https://forum.makerdao.com/t/makerdao-protocol-cover-using-nexus-mutual/4761)
  - We've had some reasonably active discussions on the forum this week with an exciting post from Hugh_Karp of Nexus Mutual talking about MakerDAO potentially taking out insurance against bad debt on the protocol, which kind of garnered a lot of discussion and some good points from both sides from various people. I think we're going to try and get Hugh on next week's governance and risk meeting to do a brief presentation and open a discussion on this meeting. If anybody's interested in that, make sure you come next week.
- [Rate Setting Framework](https://forum.makerdao.com/t/rate-setting-framework/4809)
  - The rates working group posted some guidance on the rate-setting framework that's going to be in use now that that's our proposal going through governance, so this will be a basic description of how rates proposals will be formed, what time things should happen. Read it if you're interested in how rates will be set up and how rate changes will be proposed from now on.
- [Official Launch of mkranalytics.com](https://forum.makerdao.com/t/official-launch-of-mkranalytics-com/4811)
  - I also wanted to highlight a post from hexonaut talking about the official launch of mkranalytics.com. Sam, if you wish to speak briefly about it now, you can. It's a really awesome analytics site for the maker protocol with all sorts of metrics. You can track and combine them in interesting ways. I look forward to seeing what kind of conclusions people can draw from it.
    - SamM: You want me to talk about it now?
    - LongForWisdom: If you want to do a brief, a few sentence plug, or something like that, that would be fine.
    - SamM: Sure, so mkranalytics is a site for basically tracking time series of every stat within the maker protocol. It doesn't have everything right now, but it has most things that are relevant. If there's anything that needs to be added, feel free to just open up an issue or a pull request or whatever; all the code is open-source, so have a look. You can break down by vault type and time-series data, so let me know if anybody has any questions.
    - LongForWisdom: Yeah, this existed for a little while, but it's kind of now just coming into proper functionality, and it's great. Everyone, go and take a look.

##### Signal Requests

- [Stablecoin Action Plan](https://forum.makerdao.com/t/signal-request-stablecoin-action-plan/4808)
  - Seeking consensus this week had, I think, one new signal request only, which was hexonaut's proposal for starting a stablecoin action plan for stablecoin vaults. As people have seen in previous meetings, they will be aware this has been discussed thoroughly in these meetings. Sam kindly put together a post that summarizes the various options of the poll. Please take a look at that and vote if you have strong feelings about dealing with the stablecoin vaults.
- [Approve Maker Representatives as an oversight role for Real-World Assets](https://forum.makerdao.com/t/signal-request-approve-maker-representatives-as-an-oversight-role-for-real-world-assets-october-2020/4656)
- [Increase the Auction Surplus Buffer by 2m (System Surplus)](https://forum.makerdao.com/t/signal-request-increase-the-auction-surplus-buffer-by-2m-system-surplus-october-2020/4716)
  - The other signal requests from last week: increase the auction surplus buffer, and approving Maker representatives are currently on-chain. They both just finished, and both polls have passed.

### Christopher Mooney

#### Smart Contracts Team Update

[06:50](https://youtu.be/1BcBrArV-5A?t=410)

- Last week, we worked on the ETH-B executive, which passed, and it's on mainnet now, and we didn't do any collateral assessments for last week. We were busy with onboarding BAL-A to Kovan the previous week, which took a lot longer because we've been working on this collateral onboarding documentation. At the same time, we're onboarding BAL-A, so BAL-A was the collateral that we used, and that was days and days. I just wanted to put a sort of shout out to Sam and Brian and the integration team for smart contracts because it's a lot of work. I think that doc is pretty much done, and it should pay dividends in the future for us in terms of ramping up other teams to onboard collateral.
- I think BrianMcMichael and LucasManual also worked on the DSS executive. I don't know if they want to mention anything yet, I'll let you guys chime in if you want to.
  - BrianMcMichael: We've spent the last couple of weeks working on an executive library that'll help us speed up and reduce potential errors in our executive spell crafting process. Our collateral onboarding process is a very manual process where we go through checklists and follow a prescribed work pattern. The exec lib is basically going to automate a lot of that for us and take a lot of work off of our development team and then collateral onboarding teams outside of the foundation. Then there are just additional things. We can set all of our debt ceilings, stability fees, and rates with a single call now rather than all of the boilerplate we had before.
  - LucasManuel: Another good thing was to abstract away a lot of the "Daiwanese" so outside community members can just call these functions, they're called like setGlobalDebtCeiling instead of creasefat.line
  - BrianMcMichael: Much clearer Dai.
- Thanks, guys. Let's see, so we didn't do a lot of work on the priority sheet. Last week, most of that was done, but we adjusted the weights in the priority sheet slightly.
- We did a domain team review of MIP22. [The results of that are in the forum post for MIP22.](https://forum.makerdao.com/t/mip22-centrifuge-direct-liquidation-module/3930/9)
- In the coming week, we're going to get YFI into Kovan using that new documentation, which actually will probably be done by the end of this week.
- Next week, we're hoping to put YFI and BAL into the executive for next Friday, so we'll be doing the mainnet spell crafting on that. We'll probably end up going with GUSD to Kovan next week as well. We have a monthly executive, which I think maybe someone will probably discuss in more detail. However, we have to craft that for Monday.
- More broadly, we're still planning on doing the UNI, REN, BTC, and TBTC assessments. Additionally, we still have to do domain team reviews of MIP14, 17, and 25.
- We are continuing to work on liquidations 2.0 trying to get it to be code-complete. Discussions have begun with auditors.

### LongForWisdom

#### Oracle Team Update

[10:57](https://youtu.be/1BcBrArV-5A?t=657)

- Nik is in listen-only mode. So I'll just cover the brief update for oracles. I think the only major thing of note is that the oracle polls for the B.Protocol whitelisting on the OSM and Medianizer ETH-USD feeds have passed the polls. They should be in the executive this week.

### Primoz Kordez

#### Risk Team Update

[12:00](https://youtu.be/1BcBrArV-5A?t=719)

- This week, Marco from our team published [GUSD](https://forum.makerdao.com/t/gusd-collateral-onbording-risk-evaluation/4791) and [PAXG](https://forum.makerdao.com/t/paxg-collateral-onboarding-risk-evaluation/4833) collateral evaluations. We should proceed with an on-chain poll and executive vote soon
- We're also focusing on new assets to be evaluated. It seems that the Aave migration was kind of successful, although still not completely finished. It seems the new token has sufficient liquidity and was also listed on other platforms, which makes us more confident to start with evaluation on our end. As mentioned last week, UNISWAP was highly ranked on the priority sheet, so a member of our team already started working on a collateral evaluation for it. As already mentioned, REN-BTC and REN are also being evaluated by new external analysts.
- The most significant thing in my mind this week was a rate change proposal that LongForWisdom mentioned. There was also [one post by me, proposing rates,](https://forum.makerdao.com/t/rates-changes-proposal-20-oct-2020/4813) of course, co-authored by other great group members. As Long mentioned, [this post for a general framework](https://forum.makerdao.com/t/rate-setting-framework/4809) will deliver these kinds of posts regularly, and that's already explained the plan of this release was mostly to demonstrate our decision-making process. Therefore we didn't make any changes to rates apart from potential changes needed for stablecoins.
- Regarding stablecoins, there was a [signal poll made by Sam](https://forum.makerdao.com/t/signal-request-stablecoin-action-plan/4808), as already mentioned, so please vote on that one, so we get more feedback from the community about the strategy regarding stablecoin fees. Finally, I want to quickly say there's work in progress on real-world assets on the risk side. In the background, Sebastian and Will have been doing a really great job for the last couple of weeks, producing a lot of materials for risk. I think we're moving ahead at a really decent pace.

### Amy Jung

#### Community Development + Operational Support Update

[14:48](https://youtu.be/1BcBrArV-5A?t=888)

- Not much to update for governance; we have some initiatives not ready to be announced yet.
- We are looking to do more communications and announcements around new vault types as they come about.
- Generally, there are a few initiatives that the community has been working on:
  - [The Dai-rectory](https://github.com/makerdao/community/issues/895), a directory of retail merchants that accept Dai.
  - [The Dai LatAM Action group](https://github.com/makerdao/community/issues/670) had a successful 3-month pilot.
  - [POAP NFTs for contributor recognition.](https://github.com/makerdao/community/issues/907)
  - [Exploring a MakerDAO-form podcast for voters.](https://github.com/makerdao/community/issues/753)
  - We onboarded the grantee Valante POS system, making it easier for merchants to generate tax-compliant invoices.

### Juan

#### Collateral Call Update

[17:02](https://youtu.be/1BcBrArV-5A?t=1022)

![](https://i.imgur.com/bxQdQjN.png)

- This is the update for the collateral onboarding calls in general and collateral more in general.

![](https://i.imgur.com/VbcinZf.png)

- Yesterday we had an interesting call with Stasis. They were presenting EuroStasis(EURS), the euro-backed stablecoin. We then we had the people from crypto.com. [The notes are already on the forum](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-12-wednesday-october-21-17-00-utc/4745/3?u=davidutro), so if you want to check them out, thanks to Pablo, mainly for the notes' quick turnover.

![](https://i.imgur.com/7u3FNCk.png)

- Next week, we're going to have ConsolFreight for the real-world assets. They're going to explain what they do, how they work, and their partnership with Centrifuge. We're expecting an exciting call there, we're also going to have Curve Finance.

![](https://i.imgur.com/vC7b0px.png)

- The collateral onboarding framework is going to be [posted in the forum today](https://forum.makerdao.com/t/collateral-onboarding-framework-a-model/4838). Basically, it brings the different domain teams and working groups together to collaborate on the collateral onboarding.

![](https://i.imgur.com/2Rfm9F2.png)

- This brings me to another point: if you are good at risk or data analytics, please talk to Primoz; I'm sure he will appreciate the help. Same thing with oracle if you're interested, speak to Nik, and if you're any good with smart contracts and, I guess solidity speak with Chris Mooney.

![](https://i.imgur.com/qdU6Roa.png)

- And if you're good at all three of them, there's [the fellowship that the Maker foundation announced with Kleros](https://blog.kleros.io/kleros-maker-fellow-on-decentralized-finance/).

![](https://i.imgur.com/d2F9GMD.png)

- More help wanted any developers full-stack or comms people to reach out to Tim or Amy.
- If you're looking to get involved in governance reach out to LongForWisdom
- If you want to be a scribe and help with the note-taking, reach out to David, and I think that's it from my side.

#### Questions

- Chris: Yes, I was just wondering. I kind of asked this in the forums, but crypto.com's liquidity for Dai is pretty low. I was interested if they plan on using their CRO token to provide more liquidity on their exchange if we were to add it as collateral because I assume they have CRO reserves that they would sort of pivot into DAI liquidity on their exchange. Still, they answered pretty broadly in the forums, but I wasn't sure if they had touched on that at all in the collateral onboarding call.
  - Juan: They did speak a little bit, but we did not go a lot into detail. I guess the Q&A wasn't particularly structured, but yeah, we can try asking again in the forums, I guess; sorry to not have a better answer, Chris.
- Frank Cruz: I have a quick question, that company that's greenlighting right now that's in real estate, OST-1, did they ever come on your show? If so, do you remember when so that I could look at it because I'm having a hard time trying to figure out what exactly they do.
  - Juan: Which company?
  - LongForWisdom: OST One, I believe they're out to boost an LP or something.
  - Frank Cruz: Yeah, the one that's trying to build the building or they're trying to buy one apartment or something.
  - LongForWisdom: Uprets is the group.
  - Juan: I cannot remember having them, so I don't think so, I'll check David's link, but I do not remember having them. No, they did not, I don't think, or maybe it was one of the first ones, but I can not remember them, to be honest.
  - LongForWisdom: I don't think they have, from what I can remember.
  - David: They look pretty active in the forums; their last response was 14 hours ago.
  - Juan: I mean, we can always invite them if they have not yet presented.
  - Frank Cruz: That would be interesting if you could.
  - Juan: Yes, let's reach out.

### Charles St. Louis

#### MIPs Update

[22:49](https://youtu.be/1BcBrArV-5A?t=1369)

![](https://i.imgur.com/WvqZVUP.png)

![](https://i.imgur.com/GT0yOx2.png)

![](https://i.imgur.com/Wyqnwh1.png)

![](https://i.imgur.com/gjpZscJ.png)

![](https://i.imgur.com/LfdhBvT.png)

![](https://i.imgur.com/CtY1elW.png)

- As far as the proposals currently in the RFC phase, it's been a busy October. It's going to be a busy November, pending that all the authors of these proposals intend to submit them for November. It should be noted that the proposals that have entered the RFC phase are the same as last week:
  - [MIP17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021), which is a rewrite of the original one that was looking at DC adjustments as well as RP adjustments. However, this one is now proposed by PlanetX, and it's only for the weekly actual DC adjustments. I highly recommend checking that out, looking at the logic, and seeing if people agree is how we should move forward.
  - [MIP24](https://forum.makerdao.com/t/mip24-emergency-response/4009/12) is an emergency response system proposed by John Athman recently updated by David Utro, which was presented a couple of weeks ago. It should be eligible for November. LongForWisdom and I have made some comments in the post, but we'll follow up with others. Still, if you want to submit this proposal for November, you should make sure all the changes have been made by October 28th.
  - We have the [MIP25](https://forum.makerdao.com/t/mip25-flash-mint-module/4400) Flash Mint Module by Sam, and that was a follow-up to the declarations of intent for creating a flash module for Maker. This is the technical implementation of that intent.
  - Next, we have the [MIP26](https://forum.makerdao.com/t/mip26-dssgov-governance-contract-redesign/4589), which is the Governance contract redesign, called DSS-Gov. It includes a vote delegation functionality.
  - Then, there is the [MIP 27](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625) Debt Ceiling Instant Access Module, which you can think of as an automated version of MIP17, although there are some differences. So if you're looking at MIP27, then you should look at MIP17 to compare and see if the manual processes transfer over to the automatic one.
  - There's [MIP28](https://forum.makerdao.com/t/mip28-operational-support-domain-definition/4627) operational support domain definitions ultimately defines the entire support domain. If it were to be approved, what the actions the domain would take in helping facilitate and running the DAO.
  - In terms of sub-proposals, we had a source cred funding proposal.
  - We had another sub-proposal as a follow-up to MIP28 to onboard Amy as a support facilitator.
  - There is the sub-proposal for calendar exceptions, which is an amendment to potentially skip, for lack of a better term, the December governance cycle given that a lot of people are away and not as many people will be paying attention during that time.

![](https://i.imgur.com/h9q9y63.png)

- Lastly, we have a couple of pre-MIP discussions. The new ones are there was one for [MakerDAO that needs liquidity pools](https://forum.makerdao.com/t/makerdao-needs-liquidity-pools/4824/3), so some conversations are going on there. The one mentioned earlier in the call and posted in the chat by Amy was [to make your protocol cover using nexus mutual](https://forum.makerdao.com/t/makerdao-protocol-cover-using-nexus-mutual/4761) and the not so new ones. The first one is [the flapper distributor](https://forum.makerdao.com/t/flapperdistributor-a-way-to-distribute-system-surplus-while-minimizing-governance/4591/24). This is a way to distribute system surplus while minimizing governance processes. Then there's the proposal idea for replacing the mechanism to [burn MKR with the treasury](https://forum.makerdao.com/t/replace-the-mechanism-to-burn-mkr-with-a-treasury/4415/17), which has had some excellent discussions and debates.
- It's been a busy October, and it's going to be a busy November. LongForWisdom and I have commented on MIP24; all the changes need to be done by October 28th to leave that one week frozen period before formal submission.

## Procedural

### LongForWisdom

#### October MIPs Governance Poll Review

[29:19](https://youtu.be/1BcBrArV-5A?t=1759)

- Yes, so I was confirmed what Charles said; the governance poll passed with 60,000 Maker in favor and none against. There's no reason for it not to continue. Therefore, it will be in the monthly executive on Monday, which, as Charles mentioned, needs to pass in four days to be considered ratified, so look forward to that on the 26th.

## Other Presentations and Updates

### Derek Flossman

#### Governance Portal Improvements

[30:04](https://youtu.be/1BcBrArV-5A?t=1804)

- I'll do a little walkthrough of the governance portal. First of all, I want to give a shoutout to the foundation team who worked on this. The developers and Jordan and Mike, on our design team, helped us pull this fantastic new site together.
- So, the structure of the site is split into three different pages. Basically, you've got a landing page, polling page, and executive page. The landing page introduces tabs that show the new polling votes. On Monday, the new executive vote label will be showing up here as well. We've put in a label just linking back to the v1 governance site, so that still exists and will still be out there if people want to use it for whatever reason, using it as a fallback.

![](https://i.imgur.com/MTH46lo.png)

![](https://i.imgur.com/SR0j2GE.png)

- A lot of the research that came up was making sure we have all that information in this space. The system stats, the link to Dai stats, links to the forum community tools, link to governance blog posts were all included. And surfacing executive votes and polling votes on the front page that link through to the polls and executive page.
- There was a lot of emphases to make sure we're surfacing the right information. Long, I know we were talking about something in that space regarding the sort of information that we show here and how this could be potentially discussed and walkthrough to figure out what makes the most sense for people. So definitely jump in at any time on this call or use the Rocketchat #governance-and-risk channel to provide any input that you may have. I'm definitely looking forward to hearing from you guys. We have a backlog list that we're working through, so it's ongoing work, and improvements are still to be made.

![](https://i.imgur.com/1h4di4L.png)

- Moving on to the polling page, the big update here, of course, is the batch polling, so I'm pretty happy with the way this has turned out. Feedback so far is pretty positive about being able to batch votes together. I see we've just had all the other polls gone through us, not active anymore, so you'll see those are split down here between ended poles and active poles. What you can now do is vote through the overview page add those to your ballot. You'll see that the ballot recognizes that you've added to it, and the counter goes up.

![](https://i.imgur.com/JuweQPx.png)

- The cool thing is that you can also go in a review of the text. Of course, suppose you're not familiar with what the vote is. In that case, you can also vote, add that to your ballot, your ballot will record that, and you can go back to here to the active polls page and review what you voted on.

![](https://i.imgur.com/1NcAwj0.png)

- And then review and submit will show you the overview of that participation. You can then submit your ballot. The gas prices have been pretty good from what I've seen, so this is really an interim step when you guys signaled that you were interested in the snapshot solution. In due course, we will be working on that. Still, this seems to be a pretty good solution when we have so many concurrent polls at the same time, so yeah.

![](https://i.imgur.com/VB51RVE.png)

- And also, what I will mention it was a design decision that we made. You will remember that we originally had the vote breakdown in the right-hand column. There were many pros and cons of discussion around whether we should retain that. Many people wanted to see where the interest was because it swayed them. Still, for others, the fact that they were swayed was a detractor. It influenced the way they would vote as opposed to independently having a point of view. We thought, okay, let's move it from that front page of the poll detail and put it behind the tab. That was the rationale, so again if people believe that extra clickthrough for the use case of viewing that is sort of in the way or not ideal, definitely let me know. We'll see what we can do based on the feedback we get. Oh, and we have the total votes and unique voters. Not sure we had all of that detail in the previous portal.
- Another thing to mention we have filter capability, so at the moment, it's by pole type. I've categorized these poll types. We just need to import that list. You'll be able to filter on different variables such as oracles, risk variables, collateral onboarding, etc. Then also a date filter that lets you reduce down to a period of time just to make it a little bit easier to find what you're looking for in the wealth of polls that exist.

![](https://i.imgur.com/kMqwAUP.png)

- Moving on to executive proposals, I don't think anything is different in the card itself; we still retain and show the same information. I voted on this one, so I can't do so again. I am connected with my wallet, but I could view a previous one. The nice thing with this is that we were only showing the latest proposal and not all the others on the old proposal. The cool thing here is that you can, of course, see the amount of MKR in support, so you can see how much is on the hat, what are the other competing proposals, or which MKR has not moved and gives a bit better of an overview of actually what the status of the system is. We've retained, of course, the proposal detail that the governance facilitator documents. We've added the on-chain effects, which are very similar to what you will recognize from the cap flip. Just be aware that this is only for the JUG and VAT contracts; we will be working on expanding this out and include the other MCD contracts that are impacted. So just be aware of that, and then, of course, you can click through to the link. This link used to be in the right-hand column, but we moved it into the on-chain effects section.

![](https://i.imgur.com/BhN6mwy.png)

- And, of course, favorite requests from everyone have been the comments. So if I were to vote on a proposal, you will, of course, be able to add in your comment in here, submit it, sign it with your wallet, and that will then appear in the comments field where that the community can read and review. This will hopefully make it a bit more transparent as to why people are voting a certain way. The information included in that also shows how much that particular commenter has in terms of MKR, hopefully making it a bit clearer for people to see why decisions are going a certain way.

![](https://i.imgur.com/Qj2YnGb.png)

- [Chris Mooney?](https://youtu.be/1BcBrArV-5A?t=2278): So, for a new executive that's coming, is there still a section where it references how much MKR is needed to move to the next hat? I know you already voted on that one, so I don't know if it would otherwise be there.
  - Derek: Yes, it will say how much more is required to become the hat, yes. So in the old portal, we would have said "amount required to pass." I believe we do still have that if that's what you're were referring to.
  - Chris Mooney?: Yeah, thank you.

![](https://i.imgur.com/W5XqOVy.png)

![](https://i.imgur.com/QqiWaAA.png)

- Yeah, so let me know what you guys think; I think that's my very brief overview of the three pages and likewise looking for all the feedback you have. Long, I saw your document, and we've got a list of improvements that we're working through as a backlog, hoping to add to that and get it looking good across the board.
  - LongForWisdom: Great, thanks very much, Derek, that was awesome. Thanks so much to you and all the people who worked on it; it's a significant improvement, I think. Hopefully, this new portal will mean that people more consistently vote on everything because what we've always seen before is that people tend to vote on the more controversial things than ordinary stuff. Still, with this new system, they'll be able to vote on everything for the same amount of gas and, hopefully, a similar amount of effort or less effort.
- Derek: Hoping to see participation in the polls go up; I know it's actually been pretty good. When I was looking over the numbers, it was plus or minus a few percent difference across polls. Definitely, the more controversial ones got more attention but hopefully, this way, streamline that participation will be helpful for people.

#### Discussion & Questions

[40:32](https://youtu.be/1BcBrArV-5A?t=2432)

- David: I wanted to quickly just ask the question because I just want to make sure it's covered here; I already kind of know the answer because you came on the community call on Tuesday, but there is a comment capability for executives, and I know that there's no comment capability for governance polls. Can you give just a brief update on whether that's in the plan?
  - Derek: Yeah, and I know roone commented on that earlier in the week in the RocketChat channel as well; we haven't planned on it, to be honest, but if there is a request for it and people want to see it, there's no reason why we can't add it. We prioritize the executives because there was a lot of discussion in the forum and the polls specifically. It was a little unclear as to what people's sentiment was around the executive, so we prioritize that first. We can certainly look to do the same for the poles no reason why not. If there's an appetite for it, absolutely.
  - David: Sweet, thanks so much.
  - Derek: Alright, I guess I wanted to see how it was going to go with the executives and what sort of feedback and value we got from it before we put some dev time towards it but let's see how it goes, and then I'll give you guys a shout out when we think we're gonna jump to get that in as well but the things that we have coming up, of course, we've got the new governance contract so that's going to require a rewrite of the executive page to support multiple concurrent executives and that, of course, brings in some work around delegation which will change the interface again. There will also be instant access modules once we get past MIP17 and 26 or 27; I can't remember anymore, but there will be ongoing updates and improvements. Still, that stuff is coming down the line, so it will keep us busy.
- LongForWisdom: Great, yeah, thanks very much, Derek. That was awesome. I'm looking forward to using it more. Kenton just asked when are we switching to snapshot voting? I don't think we're planning to switch to it immediately; I don't believe there are plans to change. We're kind of just investigating integrating it with the current portal, right Derek?
  - Derek: Exactly, yes, we're investigating integrating it with the portal, whether it will be side by side or complete replacement of the polling that we have is TBD based on that we have work to do to ensure that we can support rank choice voting which they do not currently support, so there's a little bit more work to do on it. I wouldn't put a date on it yet, but as soon as we get closer, that code's all public, so you guys will see when those improvements get done that we can start looking to integrate.

### Juan

#### Collateral Prioritization Framework

[44:13](https://youtu.be/1BcBrArV-5A?t=2653)

![](https://i.imgur.com/1oqifTd.png)

- Just to give you a little bit of background on what we're doing, and we've mentioned this in previous calls. This framework was modeled to prioritize different collateral types in the most possibly objective way to see intelligent discussions. We do not believe that it's perfect by any means but rather as a living document. I think it will get better with time. It was made mainly to allow domain teams/working groups and external contributors to overview the collateral types, their onboarding status, and the different characteristics. We also wanted to provide transparency to the broader community and a common ground for discussions and potential future collaboration. Ideally, with this, everyone will see what's coming, how things are being prioritized, and why, and understand more what's going on with each collaborator.

![](https://i.imgur.com/Aq3epnF.png)

- I'm going to publish a [post in the forum with the Google sheet](https://forum.makerdao.com/t/collateral-onboarding-framework-a-model/4838), which is what I'm going to show right now.
- Regarding how to read the frameworks, this will be on the forums, so don't worry too much. Basically, the first row is each team responsible for filling each parameter. Row number two is the weight that each parameter will have for the scoring. And row number three will be each parameter. Everything green is a benefit or a good thing, and the things that have a red background is a little bit of a "cost." The green light score was taken from the amount of Maker approved in each greenlight poll, and then it was normalized between minus 16 and plus 16. Why the minus 16 and plus 16? When each domain team or working group chooses between low, medium, high and extreme, you get one, two, three, four square, which means you get one, four, nine, sixteen. That's why the greenlight score is normalized between those values. Once everything is calculated, we multiply the values that I just mentioned by the weight. We add them and what we do to calculate the prioritization score. We subtract all the costs minus the benefits times the weight. So we do the sum-product, then we do the subtraction, and we end up with this list of collateral types, with this order.
- We should think about some considerations. This is a model, so it's an imperfect representation of reality. We believe that some data is better than no data; each team's input is subjective and reflects the instance of their current knowledge, so they might change their mind as soon as they investigate more. The weights will get adjusted with time, so we're looking forward to getting feedback regarding that.
- There are some things, for example, these pooled collateral types, they are quite difficult. Still, we believe, for example, that if they were treated simultaneously, once you do the first, the rest should be relatively straightforward, so there are more considerations than just taking the prioritization score at face value.

![](https://i.imgur.com/W1t0PDX.png)

- Some potential improvements we thought about are adjusting the weight-tweaking into new parameters if needed. So if you guys think there's a benefit or cost that we're not considering, please let us know, maybe add a definition of the parameters, so everyone understands the same thing. And ideally, each domain team or working group would draft documents to allow contributors to help even if they come from outside. This will help scale and onboard more collateral types if that's what the protocol and the maker holders want. And then we also thought about having a better UI for visualization and maybe for data entry and modification, so perhaps a nicer dashboard. And again, any feedback proposed is more than welcome; I'll post this later today. So I'm going to open it for questions?
  - LongForWisdom: Not a question, but do you want to briefly cover the status tab as well?
  - Juan: Yes, sure. So this is, I don't know if it's a replacement for the collateral status index forum post, is it?
  - LongForWisdom: I'd like it to be a replacement because it's easier to keep up to date than the collateral status index.
  - Juan: Sure, so the collateral status index that Long was maintaining in the forum was moved here. So this is where the greenlight score was calculated and normalized. I don't know if I mentioned anything that does not have a greenlight score yet; no, was it yellow? I forgot, Long, sorry.
  - LongForWisdom: Yes, yellow hasn't had a greenlight poll yet. The number comes from...
  - Juan: Oh yeah, yeah, so that's why the yellow ones have all the same numbers, it's because we're taking it as if they got zero, so nothing in favor and nothing against. This is where the domain teams or working groups will post their work to access it easily. Yeah, I mean, a Google sheet is the best way of doing things. Still, it was the fastest way for us to get something that works and hopefully provide value faster than developing something if we don't know if we're going to use it. Any questions?

#### Discussion & Questions

[51:25](https://youtu.be/1BcBrArV-5A?t=3085)

- Frank Cruz: Hey, Juan. I guess I'm having a little trouble understanding the diversification score. How does yEarn have a low diversification score, and Gemini USD has a high, and so does TUSD have a high as well? Is this a diversification towards DAI or what?
- Juan: Primoz, would you like to comment on it, or I can try too?
  - Primoz: Normally, it should be diversification in terms of collateral; in this case, I'm not sure why they're high. I think the idea was that cUSDC is a bit different versus yUSDC in terms that you have a Compound platform risk, so it should be looked at differently as something like the YY curve.
  - Juan: Thank you, Primoz, are there any other questions? Alright, I'll give it to you, Long.
- LongForWisdom: Sound good, so I'll just reiterate, as Juan said, this is going to be public soon, the link will be comment enabled, so if anyone has comments on individual scores, you'll be able to just leave them in the sheet, and someone will read them. Hopefully, someone should read them. We're looking at the sheet probably weekly or monthly, so all of this stuff will get looked at, and every time new assets get onboarded. This should be reasonably high traffic in terms of people looking at it. Thank you for that, Juan. I look forward to seeing that public and see if anyone else has individual feedback on individual things.

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[54:07](https://youtu.be/1BcBrArV-5A?t=3247)

![](https://i.imgur.com/O2J1Iis.png)

- Dai stats reading.
- Smaller amounts KNC and such.
- 24 million PAX.
- Smaller amount from Comp, LRC, link, and such.

![](https://i.imgur.com/RjCHxvu.png)

- The peg in the last month holding steady at 1.01. As we discussed, that's the constant state or equilibrium point. Lots of discussion around how comfortable people are with that stat.
- ETH price has been fluctuating and going down but also rising back up. We see that the peg has a sudden run-up based on latency in the trading pair (DAI<>ETH).

![](https://i.imgur.com/d7aulvW.png)

- Volume has been mid-low though in the last week, centered around 1.01.

![](https://i.imgur.com/JrWbRVi.png)

- DAI<>USDC related; if we look back to august, there was more fluctuation than stabilized at 1.01.
- We've seen a volume growth but a little less of a craze in Dai allocated to farming yields.
- We've also seen issuance increase in terms of stablecoins.

![](https://i.imgur.com/FNfpa8r.png)

- DAI<>USD pair has retained its price variability. It's more unpredictable than others. Yet, there is some stabilization with this pair. In the height of farming, that spike hit 1.04-1.05. Now it's down on that floor of 1.01.

![](https://i.imgur.com/72HAEDG.png)

- DAI<>USDT always chose DAI<>USD.

![](https://i.imgur.com/4f5oUF2.png)

- Where is supply sitting? Discount on Compound, which is up a bit to 340 million Dai right now. That accounts for the entire DSR quantity right now.

![](https://i.imgur.com/TWXLHzv.png)

- Curve has an 87 million total.

![](https://i.imgur.com/G0aCZuH.png)

- Uniswap tops the list.
- Binance has 30 million.
- Overall of the total supply, minus Compound, you've got ~600 million or so sitting ins taking pools and lending protocols. The remaining amount is held by exchange pools or wallets and individual users.

![](https://i.imgur.com/Uxe5MBb.png)

- For current risk distribution. In market risk, ETH is the most giant pool subject to market volatility fluctuations. There has been a decrease in the lowest CR bucket. Primarily due to ETH going up. It's following a standard curve of around 250%.

![](https://i.imgur.com/5xOLQYU.png)

- At ETH \$320/318, that would be 30 million liquidated.
- \$280 is still the middle point, now with a giant wall of 100 million, it's almost a meme. The last few times we've looked, it's always the most prominent wall. Something where vault holders look and manage against. Beyond that price, it's a continuous curve—lots of those vault holders, pools exchanges, etc. Individual users slope out from there.
- That's a positive caveat on the risk profile, in the sense that the larger positions have a logic below them. The percentage is managed at least.

![](https://i.imgur.com/VBLrwkR.png)

- I'm starting to pull data on all the positions for all the collateral assets. Will push this to the website and graphs soon.
- New URL for this coming soon.
- BAT, for example, has two vaults that account for the majority of the positions. You can see these two vault majority across several asset types.
- COMP as well.
- ETH-B saw an uptick.

![](https://i.imgur.com/OQckFlp.png)

- PAX's biggest is 12.6 million. It sits at 100.6 CR.

![](https://i.imgur.com/zFYd7xK.png)

- Collateral requirement mark. In most massive vaults, the liquidation price is at a dollar. Which means they are right at the point of liquidation. I know that's been important lately, so I'd be happy to share that.

## Open Discussion

[1:07:19](https://youtu.be/1BcBrArV-5A?t=4039)

- LongForWisdom: We can have a brief Q&A. If anyone has any comments or questions about any of the things we've seen in the call thus far, feel free to chime in.
- BrianMcMichael: Hey Long, I might add I did [post a forum post late last week](https://forum.makerdao.com/t/dss-chain-log-an-on-chain-mcd-smart-contract-registry/4767) about the new DSS chain log, so if there are any developers on the call, we do have a single contract on mainnet Kovan and then also our Ropsten and Rinkeby deployments that you can point your smart contracts to and test against the chain log. Our current website at changelog.makerdao.com has the keys. It basically provides a way to get the contract addresses for the MCD system from an on-chain source rather than relying on a hosted document. If anyone has any questions about that, let me know or send me a message privately.
  - LongForWisdom: Yeah, I think that's great; this would also be useful if I'm correct in having governance audit executive votes or executive spells as well, right? Because they can compare that the contracts modified in the spell are the same as those in the DSS the chain log, right?
  - Brian: Yeah, so you can pass it a parameter the MCD-VAT, and it will return the vat address on that particular network. It might be useful for smart contract developers and auditing and UI developers who want to develop for both Kovan and mainnet. You can just point to the chain log address and code in your keys for the particular contracts. That's really all you need to do. It'll return the correct contract, and then you can request information from that contract rather than having to hard code those addresses in there.
  - Christopher Mooney: Basically, a DNS for us.
  - LongForWisdom: Right, it is governance managed, so we'll probably be updating those; when we add new collateral types, we'll add those in the executive spell. Currently, the smart contracts team does have access to modify that contract with our deployer key. However, once we get this fully integrated into our processes and everybody's aware of the need to make these updates, we can deny that, deploy our key, and give governance full access to create updates and delete keys in that.
  - LongForWisdom: Great, yeah, that sounds really useful; thanks for mentioning that. All right, so I think we're across the hour, so I think we'll maybe do a kind of the last call for reminders. Juan, do you want to just mention the Kleros cool again?
- Juan: Federico, we'll be joining in 14 minutes from Kleros to speak about the fellowship with the Maker foundation, so if you're interested, I'll see you there.
- LongForWisdom: I want to remind people that the onboarding polls for GUSD and PAXG will be on-chain on Monday next week. Thanks to everyone for coming, and I'll see you all again next week.

#### Links from Chat

- [Nexus Mutual Post](https://forum.makerdao.com/t/makerdao-protocol-cover-using-nexus-mutual/4761/9)
- [Rate Change Proposal](https://forum.makerdao.com/t/rates-changes-proposal-20-oct-2020/4813)
- [OST-1](https://forum.makerdao.com/t/ost-1-mip6-collateral-onboarding-application-by-uprets-real-estate-backed-digital-security/4438)
- [Collateral Onboarding FM Model](https://forum.makerdao.com/t/collateral-onboarding-framework-a-model/4838)
- [MCD SC Registry](https://forum.makerdao.com/t/dss-chain-log-an-on-chain-mcd-smart-contract-registry/4767)

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
- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- Tim Black produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.​
