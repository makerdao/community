# Episode 64: December 05, 2019

## Agenda

- [00:00](https://youtu.be/vQsRPJxUs9Q?t=0): Intro with Rich Brown
- [19:35](https://youtu.be/vQsRPJxUs9Q?t=1175): Recap of Forum Topics with LongForWisdom
- [21:30](https://youtu.be/vQsRPJxUs9Q?t=1290): Migration Status with Cyrus
- [39:46](https://youtu.be/vQsRPJxUs9Q?t=2386): Discussion part I
- [59:06](https://youtu.be/vQsRPJxUs9Q?t=3546): State of the Pegs with Vishesh
- [1:07:15](https://youtu.be/vQsRPJxUs9Q?t=4035): Discussion part II

## Video

https://www.youtube.com/watch?v=vQsRPJxUs9Q

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

#### Introduction

[00:00](https://www.youtube.com/watch?v=vQsRPJxUs9Q)

- We've gone through sixty-four consecutive calls. It's amazing that we're supporting this protocol by public thinking and discussion. We're here picking and choosing what in the real world will fit with our MCD new world. Especially since we continue to watch MCD grow in the ecosystem. We're here to understand what we do, what we did, and what it will look like in the future.
- We are building an open-source governance ecosystem.
- I promise I will get the working group started, I've mentioned it for a few calls now and the preliminary work was quite extensive. That's now finished, so I'll begin scoping this group, and it's responsibilities.
- The working group is an opportunity to build a bridge between the foundation and the ecosystem. Ideally, we'll have the community provide suggestions and processes _for_ the foundation. In the process, we'll figure out the best level of project management on top of this working group, and I'm excited about that.
- Now, some challenges. What problems shall we explore and think about? Here is my list of complaints and grievances:
  - Polling and voting cadence. Weekly voting on SF became the "new normal" because of peg deviation. Stabilizing the peg needs hands-on management. We forgot that it became normalized because of the original purpose. Do we need that?
  - Apathy
  - Incentivization
  - Scheduling and calendaring. Who decides when we do what? Especially outside cadence.
  - Which voting is best? Plurality, first past the post, ranked-choice, etc.
  - Rate stepping. Does it work for everything? Will it fit the other levers we have soon
  - Delegation. A targeted discussion will finally find a set of stakeholders to own projects
  - Communication. Especially for novices and new voters. Outside of Maker fanatics, we have an onboarding problem.
  - Weak executives or contentious executives. We need to examine more significant issues like continuous approval vote or why we get executives spread too thin. Hats and other nomenclature stake significant amounts of Maker on executives we can't exactly understand. Are people protesting, or did they forget where their MKR went? Or is it de-risking?
  - How do we manage to stay informed, educated, and communicative about the things we vote on?
- One objective for the working group would be empirical evidence on the effects of the votes. Looking back on polls, collecting data on market response, and validating our assumptions or not. Once we have the working group and a body of work to do, we can go a step further and talk about funding, processes, etc.
- Always share feedback in the chat or hop into the [Forum](https://forum.makerdao.com/).

### LongForWisdom

#### Forum Activity Recap

[19:35](https://youtu.be/vQsRPJxUs9Q?t=1175)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Ranked Choice Voting](https://forum.makerdao.com/t/switching-to-ranked-choice-voting-for-the-multiple-choice-governance-votes/912)
  - Hexonaut suggests that we move to ranked-choice voting rather than first-past-the-post, and lays out a solution to do so with minimal dev work.
- [Voting Incentives](https://forum.makerdao.com/t/idea-additional-financial-incentive-to-get-people-to-participate-in-governance-voting/838)
  - Kwadrax lays out some ideas to improve voter turnout by adding financial incentives. Debate ensues!
- [Continued DSR Discussion](https://forum.makerdao.com/t/the-dsr-sf-spread-should-be-as-tight-as-possible-to-maximize-growth/844)
  - A discussion on the ideal rate spread in the future prompted by Hexonaut. Lots of good discussion and evaluation of the pros and cons.

## Migration Risk

### Cyrus

[21:30](https://youtu.be/vQsRPJxUs9Q?t=1290)

- Summary: Migration is going well, though we find ourselves with a 50/50 split in SAI and DAI. The migration contract has a liquidity bottleneck. We should contemplate additional risks in the system and think about all the open CDPs and Vaults. The risk team took a look at large addresses, and it would be beneficial to evaluate significant positions in Sai.

![](https://i.imgur.com/rePeaus.png)

- December 2nd Coinbase, Kraken, Etc. Migrated to MCD.
- A quick reminder that there are global and collateral specific Debt Ceilings. If the Executive Vote passes this week, the ETH Debt Ceiling will be 75 million.
- DSR Utilization Rate climbed to 20% but then went back down to 8%.

![](https://i.imgur.com/CWMwPeq.png)

- Sai supply has fallen because of the migration behavior this week. Down to 60 million.

![](https://i.imgur.com/eFIY7tS.png)

- We're currently in a position where we are half migrated into MCD. My opinion is that this is a dangerous place to be in. Not sure if there are many more projects that have public plans to migrate. The even 50/50 split is more challenging to manage than if one system was clearly ahead of the other. We will see how quickly this progresses.

![](https://i.imgur.com/r08d90g.png)

- In particular, one of the things relating to this challenge is Sai in the migration contract. Losing liquidity there often makes CDP migration harder and makes the SAI supply stay higher.
- There are two ways to drain Sai from the migration contract. One is through the standard migration of a CDP owner converting into a Vault. You can also just mint DAI yourself, use the migration contract in reverse and drain the Sai liquidity using fresh Dai.
  - The option to go from Dai to Sai was put there for the ability to arbitrage between the pegs, but it also potentially opened up the door for a Sai hoarding attack. We looked into this.

![](https://i.imgur.com/INxHcxW.png)

- These are the addresses of users who are draining that Sai liquidity.
- The colored groups are individual actors with multiple addresses.
- We found that the top people were actually using the Sai to pay off existing CDPs, which is great news because they aren't just hoarding the Sai. The reason they were doing this is because the migration contract only allows you to convert your CDP all at once and not in smaller chunks. Using this technique, large CDP owners were able to pay down their CDP in chunks as part of their migration process.
- Some are interesting, the ones with low success rates. The amount of Sai they are taking is very small.
- It looks unlikely that there are any major people doing a hoarding Sai attack.

![](https://i.imgur.com/OW2qU6Y.png)

- We have some Instadapp data here, but it might not be accurate or complete. It looks like they had about \$4 million go through their migration tool.

![](https://i.imgur.com/fGN50uN.png)

- Hoarding attack aside, we are still seeing a bunch of customer support issues with migration. Some in the community have liquidity worries. You can see this in the [SCD>MCD migration risk forum post from Maker Man.](https://forum.makerdao.com/t/scd-mcd-migration-feedback/909)
  - I think the correct answer to users is, "Be patient; governance is working towards a solution to provide liquidity for CDP owners who have not migrated." This brings up a philosophical question: Does Governance have to pay attention to liquidity in the migration contract? I would say yes, but it's up to the community to reflect this position through their votes.

![](https://i.imgur.com/hikCzSB.png)

- Sai peg is below a dollar slightly for the first time in months. The silver lining is that there is a significant asymmetric upside risk due to migration.

![](https://i.imgur.com/v62YSr2.png)

- This slide contains some of my thoughts on strategy with regard to liquidity in the migration contract.
- It would be most helpful, as we're planning this strategy out, thinking about all the CDPs as "in the wild." Some chain analysis of prominent Coinbase Earn positions would help. But, we have to think about the incentives broadly and align with them. Significant communication is required.
- $13 Million Sai pool on Compound, $5-10 Million in DEXs and Secondary Lending Platforms. \$40 Million free-floating SAI, if we do some mapping to end-users, we can work out where the leftover Sai is flowing.

#### Questions and Discussion

[39:46](https://youtu.be/vQsRPJxUs9Q?t=2386)

_TL;DR_: Migration contract can upgrade to avoid hoarding attacks, though there is not a lot of evidence that any are happening. Discussion around forcing migration trade-offs begins, quick analysis of DSR spread against the SFs, and introducing a time frame for ES and other things in the governance roadmap.

[40:08](https://youtu.be/vQsRPJxUs9Q?t=2409)

- Chris Mooney: We could put up another migration contract if we're worried about people hoarding Sai.
  - Cyrus: That would require another voting cycle and time for the devs to do the work. I forgot to mention redeploying the migration contract.
  - Ben Sparango: Argument against changing the migration contract is that large CDPs may end up paying premiums on Sai due to a portion of the float being stuck in the migration contract. There are other arguments, as well.

[42:37](https://youtu.be/vQsRPJxUs9Q?t=2558)

- Xenofan: Are there any compelling arguments against increasing SF for SAI only?
  - Cyrus: I can think of a few, mainly it would reduce liquidity for Sai. To rephrase the question: Are there arguments against raising the SCD SF to force migration? There are many different ways to push migration to happen. They all have different trade-offs on end-users. We're not ruthless, though. And I would prefer we would choose the strategy that is least disruptive to end-users.

[44:04](https://youtu.be/vQsRPJxUs9Q?t=2644)

- David: What's the latest on the plan of making an artificially low SF to give Market Makers the incentive to provide Sai liquidity and make money off the DSR with their converted Dai?
  - Cyrus: Lots of work would have to go into fully understanding something like that, and ideally, we'd want the direction to be better agreed upon by the community. We don't want to come out and say, "This is the monetary policy for the next three months." Can we figure out if this is a direction we want to go in? If so, the risk team would need to crunch the numbers to see what new edge cases we encounter for this.

[45:44](https://youtu.be/vQsRPJxUs9Q?t=2744)

- JoeQ: If you look at top holders, you can see on Etherscan(Nexio, Compound, Nuo Network, Spankchain's multi-sig). There are pages and pages of 50-100K Sai holders. That's the crowd that is difficult to move over.
  - Cyrus: Perhaps the $60 million trickles down to $40 million. This is a discussion on a pre-emptive plan on what we could do.
  - David: Also, this is a plan to protect the end-user from being stuck in an unfavorable position during Emergency Shutdown. Whoever gets stuck with CDPs or Sai during ES has additional risk.
  - Matthew: Protecting Sai users matters, but you don't want to compromise the system as a whole based on people who are sitting on a legacy platform. Especially if they have migration tools in front of them. You have to communicate well that ES will happen, and the legacy platform will be settled.
  - David: ES, or global settlement, will happen at some point. Maker doesn't want to manage both protocols unless there is some sign of growth or argument that emerges. Legacy users will be stuck with a claim on ETH once ES happens. It would make sense to pay market makers through monetary policy levers to provide an incentivize to migration.
  - Cyrus: As long as the community made a reasonable good-faith effort to make migration attractive, sweetened the deal, did everything they could to make it happen. Then, at that point, it's Ok to move forward with a Shutdown.

[49:27](https://youtu.be/vQsRPJxUs9Q?t=2968)

- Guilherme Remor: Is there a time frame for ES?
  - Cyrus: there is no one party dictating the community decision. Before thinking about ES, we need a clear plan. Then as a part of the plan, the ES is tied in. It's dependant on our goals and what we're trying to achieve. It isn't easy for decentralized Governance, as Rich noted. Up until now, Maker hasn't required any significant active decisions. Now Governance needs to be more active. An example is now, different DSR and SF pairs can help the peg stay stable. There is no one single combination. We have to target and think of all the incentives per pair.
  - David: Maybe a good framing for the question of when can be: How small does the Sai system have to wind down before we seriously consider an ES.
  - Matthew: As you grow the DAI ecosystem adding collateral, SAI might be a rounding error in comparison. At the moment, it's a risk of managing two systems. If you pick crazy numbers like DAI at $30 Billion and SAI at $30 Million, that's not a comparative risk.
  - Cyrus: Problem with governance overhead: Who can name three exchanges Sai is still trading on? There is \$60 million SAI floating out there with no good sources of liquidity.
  - David: Doesn't that come down to who provides liquidity on the DEXs?
  - Cyrus: Market Makers are profit-seeking. It's tied with ES if market makers can profit, keeping DAI unstable by exploiting ill-liquidity and the lack of exchanges. But a targeted deadline for the community will incentivize them to move towards ES.
  - LFW: Defining the options might be most helpful.
  - David: It sounds like a trade-off between market makers profiting off people seeking SAI liquidity from DEXes versus Maker governance paying market makers via a monetary policy configuration to gracefully provide an exit for SCD users.
  - Cyrus: Good summary.
  - David: Is the DSR tight spread [forum post](https://forum.makerdao.com/t/the-dsr-sf-spread-should-be-as-tight-as-possible-to-maximize-growth/844) the best place to jump into this?
  - Cyrus: Yes, or we could spin up a separate thread, or talk on the [Governance and risk](https://chat.makerdao.com/channel/governance-and-risk) channel on Rocket chat.
  - David: The governance and risk chat is very active. There's a lot of fresh information there and good opinion sharing that's not reflected on the forums. Just an interesting point to think about in regards to documentation.
  - Matthew: I think it's important to come to an absolute date for when SCD gets ES.
  - Cyrus: What's the heuristic for figuring out a date?
  - Matthew: Like any other major software update, you could pick three years out and then back the date up. If the peg breaks on SAI too much, later that could be the heuristic. Like $1.10 or $0.90.
  - Rich: A clear expectation is fundamental. ES is one of our most powerful tools, but it only matters when it happens. Community coordination for that is critical.

## Sai Analysis

### Vishesh

[59:06](https://youtu.be/vQsRPJxUs9Q?t=3546)

#### Relevant links

[Live Migration Data](https://sai2dai.xyz)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

**TL;DR:** Migration number match wipes and deposits SAI--> DAI; We should analyze Rate differential and price differential separately; Both SAI & DAI sitting below a dollar; SF on Maker may incentivize people but may not. Superseding rates could just be user preference for one tool or another.

![](https://i.imgur.com/5U5ja54.png)

- We saw \$17-18 Million SAI wiped on December 2nd. Similarly, we saw large quantities of DAI getting moved over.
- Roughly $48 million DAI from ETH and $1.5 Million from BAT.
- SF still at 4%.

![](https://i.imgur.com/QofhbP0.png)

- \$4 million locked in the DSR at a 2% savings rate is pretty decent, it amounts to an 8% Utilization Rate. If we expected it to be more heavily used, I think that the DSR should be higher.

![](https://i.imgur.com/rGtUeEa.png)

- Decent trading volume in the last 24 hours on DAI, ~$1.5 Million. You would think, with $50 million migrated, it would be a bit higher.

![](https://i.imgur.com/9AQfTBR.png)

- As Rich noted, both Sai and Dai have been sitting below a dollar. It's still pretty close, but still very slightly below.

![](https://i.imgur.com/5vuhtnP.png)

- The trading volume for SAI has dropped off due to a lack of support.

![](https://i.imgur.com/5L92DMF.png)

- In the last seven days, trading has been slightly below a dollar, with \$6-7 Million in volume on the DEXs. We'll need to monitor this since we need to pay attention to the price differential between DAI & SAI. Rates Differential and Price Differential are different points. We should manage those as two separate conversations.

#### Secondary Lending Platforms

![](https://i.imgur.com/w55QrOc.png)

- Secondary lending rates for SAI:
  - We saw dYdX drop to zero, and for Compound SAI borrow rate is 8% with a supply rate of 2.5%. Theoretically, it's still lucrative to lend SAI on Compound.

![](https://i.imgur.com/1LqUXVo.png)

- Borrow, and Supply volumes have dropped significantly. Roughly \$6 Million less in the last 24 hours.

![](https://i.imgur.com/ag4YLGY.png)

- In the last few hours, Supply Volume has come down to about \$18 million.

![](https://i.imgur.com/f6B5L96.png)

- Utilization rates are comparatively low, as expected. Theoretically, a good sign for migration.

![](https://i.imgur.com/A7EdmL1.png)

- SAI has $18 million supplied and $5.6 million borrowed. Meanwhile, MCD has about $7.3 million supplied and ~$6 million borrowed. MCD has high utilization but a smaller volume despite its similar supply size.

![](https://i.imgur.com/xwg8qW0.png)

- High utilization with the updated interest rate formula leads to a lower cost of borrowing MCD on Compound. Low yield for supply as well. The cost to borrow on Compound is slightly below the stability fee. As a result, a lot of users have preferred Maker to migrate to DAI.
- Primarily this move would have been users migrating anyways. But, a consensus in the rate differential doesn't incentivize people to use Compound's contracts. The differential between the SF and the borrowing rate incentivizing people to use Compound is worth monitoring.
- There is a point to raise for users borrowing SCD and how that fits their risk parameters. But, you can chalk it up to preference(at the moment.) As MCD creates new risk parameters, we'll want to keep an eye on how that affects user's choice for Maker or SLPs. Especially compared to the previous era of just SCD.

## Open Discussion

[1:07:15](https://youtu.be/vQsRPJxUs9Q?t=4035)

- Rich: We don't have any questions from the side-bar. We can spend this time continuing on the topics raised earlier in regard to governance.

[1:08:09](https://youtu.be/vQsRPJxUs9Q?t=4089)

- Vishesh: We stopped asking about scientific Governance. Can we revisit this conversation? Especially with specific questions on MCD and what we should address in analysis for these governance meetings.
  - Rich: As we got accustomed to the new normal, it fell by the wayside. The idea was to have open data sets, dashboards, robust tooling, analytics methodologies that would be open; so, anyone could run their own queries and determine results for themselves. We haven't brought it up on the Governance calls in a while, but we have discussed these things internally and in chat.
  - Rich: Not sure what the best way forward is. Ecosystem actors, like Santiment or Splunk, have data that are reliable and tooling we can leverage. I would prefer that these systems are robust and open to everyone. My dream is a GitHub page with a script to run. Where you can run a few commands, spin up docker instances, run queries, and then publish them confirming a hypothesis. A return to true Scientific Governance.
  - Rich: The barrier to entry is a problem right now. We don't have an instruction manual to tell people how to fact check data and understand the methodologies for coming to the conclusions themselves. Sorry, Vishesh. I think I deviated from the root of your question and am not sure if I answered it.
  - Vishesh: I am sure that the answer to my question was embedded in your points. That broadened the scope of my question. But I want to get more specific. We've looked at the amount of DAI being drawn, the amount of collateral, relative collateralization of different CDPs, accrued fees, etc. Earlier, we had productive discussions about metrics and what we should focus on. Reigniting these discussions would be helpful to community members like me, who are building some of these tools.
  - Rich: I Agree! We need to revisit some of what we've done. Grandfathering in processes and norms that we've devised situational is a risk. We can surface interesting initiatives that we lost track of, or soul searching on our previous focus. We've lost some of the technical discussion, and I'd like to bring them back in. It sounds like you're volunteering yourself to lead this initiative, Vishesh?
  - Vishesh: I am working on being more available to participate in discussions about this with people.

[01:14:59](https://youtu.be/vQsRPJxUs9Q?t=4499)

- David: Is it a question of the data pipeline? The integrity of the data? And being in sync with others who use similar data?
  - Vishesh: When we were producing SCD stats, for example, we looked at new versus old CDPs. That suggestion actually came from this call. The nature of how Maker works and the deeper mysteries that we want to double click on can be surfaced here. We've zeroed in on a couple of indicators for community decisions. Just opening the idea to broaden that direction of work for the new system.
  - Rich: Completely on board now. It aligns with the other bullet points at the top of the call.
  - Rich: The problem I hear from larger stakeholders is the same: Understanding what the system is up to and how to manage it properly? Which levers affect what?
  - Rich: If we can work with the community and the risk teams to do an audit report of the numbers that matter, that would be great. Distilling the numbers into a dashboard where anyone can spend 20 mins reviewing the important data and insights is important. Especially as a tool to encourage more voter engagement.

[1:18:58](https://youtu.be/vQsRPJxUs9Q?t=47380)

- Matthew: Don't we expect that to come as a recommendation from the risk teams? Where it's more binary yes/no recommendations, especially with 50 or 100 collateral types.
  - Rich: The model right now is for voting around the defined levers and ranges of numbers based on a set of shared information, opinions, and insights. Based on that, constituents vote, and we move forward.
  - Rich: There is a distinction between taking information from empowered actors and voting on a plan versus understanding the methodology and data that lead to the creation of that plan. Everyone should feel empowered to understand the details.
  - David: Agree with Matthew that we will evolve into a delegatory system where no one party does the integrity evaluation. We still need educational resources for the public, making information about decisions as transparent as possible. A non-educated voter base makes bad decisions. An educated base will most effectively delegate and approve the decisions of those delegated parties.
  - Vishesh: I see it as a style choice. Do you want an Operating Model where Questions are suggested, answers are given, and strategies are discussed? Or an Operating Model where strategies are recommended, questions are made transparent, and answers are more like showing your work and less like a conversation?
  - Rich: It's a matter of where we expect the MKR voters to express their voice. Our expectation is that the community is serving as a risk team to help the internal risk team stay accountable. Perhaps that's too soon, and maybe voters need to come in at the end of the process. When the business plan and strategy are easier to present, it could be more binary. Right now, we involve them at the beginning with all the numbers. Kind of like, choose your own adventure.
  - Matthew: Also, there are aspects to decentralization that we should expect the community would participate in. For example, different collateral types impact everyone. That would be a useful vote to surface. Especially as it relates to publishing risk parameters for each type, and how it changes week month quarter.
  - Matthew: To me, that sounds like work for a risk team that's voted in to make those recommendations. They could also be voted out. That allows the community to accept or reject those assumptions in aggregate.
  - Rich: What does the voting public do in that model to maintain checks and balances? Assuming a group of empowered actors determining monetary policy and it was their job to say yes/no on a plan. How does the community see into that process and maintain an opt-out if they choose?
  - Rich: Perhaps a model of presenting plans on a Monday and then a community vote. Then the Executive on Friday. Or perhaps empowering a group of actors and then making sure they continue to be accountable and execute well is smoother for MKR governors to handle.
  - Rich: Organizing coordinated teams and iterating with the community involved has just begun. We're still so early in this process. How we respond and deal with complexity is the order of the day moving forward. Looping back to working groups and teams that ask these questions and document their findings.
  - Rich: These challenges are why Governance, and crypto in general, are so fascinating. They're naive but inspiring effort to reinvent the wheel or wheels. Coming up with new solutions is always challenging.

[1:30:18](https://youtu.be/vQsRPJxUs9Q?t=5418)

- Rich: Lets recap: migration is complicated. Please follow along and make your opinions heard. We want to engage the community to understand how well it's been working or not. We had some discussion about the time frame and the appetite for maintaining both systems. I'll be posting governance V2 to the forums. A report on Governance V1 is going to help.

- Xenofan: The clusters of experts you mentioned will be part of the Maker team or independent?
  - David: Both.
  - Rich: The goal of Maker is to have the community organize then take on more responsibility.
  - David: The people who are being delegated responsibility will need to be somewhat public and recognized by the community.
  - Rich: Right, as it gets more complicated, we'll need to redefine the DAO continually.
  - David: We'd also like to leave room for pseudonymous individuals with excellent track records of work for privacy.
  - Rich: Hopefully, the evaluation process's criteria is meritocratic.

#### Links from the Chat

- [Spreadsheet Cyrus used on migration contract data by Tomasz](https://docs.google.com/spreadsheets/d/1h4eDPYRqIeWPvJto-cKyqATWosN6awOzPMe6eugUStE/edit?ts=5de7b3cd)

## Credits

- Tim Black produced this summary
- David Utrobin produced this summary
- Everyone who spoke and presented on the call (listed in the headers)
