# Episode 118: November 12, 2020

## Agenda

- [00:00](https://youtu.be/mIR89j9IKuw): Introduction
- [01:08](https://youtu.be/mIR89j9IKuw?t=68): Governance at a Glance
- [04:08](https://youtu.be/mIR89j9IKuw?t=249): Smart Contracts Team Update
- [14:08](https://youtu.be/mIR89j9IKuw?t=848): Oracles Team Update
- [17:07](https://youtu.be/mIR89j9IKuw?t=1027): Risk Team Update
- [20:21](https://youtu.be/mIR89j9IKuw?t=1221): Community Development + Operational Support Update
- [22:35](https://youtu.be/mIR89j9IKuw?t=1355): Collateral Calls Update
- [24:24](https://youtu.be/mIR89j9IKuw?t=1464): MIPs Update
- [27:42](https://youtu.be/mIR89j9IKuw?t=1662): November MIPs Inclusion Review
- [29:15](https://youtu.be/mIR89j9IKuw?t=1755): New Community Portal Launch
- [38:50](https://youtu.be/mIR89j9IKuw?t=2329): Dai peg and the PSM
- [01:11:00](https://youtu.be/mIR89j9IKuw?t=4260): State of the Peg with Vishesh Choudry
- [01:21:49](https://youtu.be/mIR89j9IKuw?t=4909): Open Discussion

## Video

<https://youtu.be/mIR89j9IKuw>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/mIR89j9IKuw)

- Hello everyone, and welcome to the MakerDAO scientific governance and risk meeting number 118, taking place on Thursday, November 12th, 16:00 UTC, same time every week. My name is LongForWisdom; I'm the governance facilitator at MakerDAO. We've got an agenda to go through.
- We've got some weekly updates, and then we have a couple of segments about various things. We've got Tim Black talking about the new community portal launch. We've got SamM, who will speak about the Dai peg PSM (Peg Stability Module). And then we have Vishesh with our regular segment on the State of the Peg. So, generally, if you want to say something, please interrupt. We love to hear from you, so please don't worry about interrupting or hurting people's feelings.

Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### LongForWisdom

#### Governance at a Glance

[01:08](https://youtu.be/mIR89j9IKuw?t=68)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
If you have the time to read over and vote in active threads, that would be much appreciated.

- I'm continuing to work on governance parameter documentation. We also started looking in more detail at the DssGov proposed changes. We are trying to identify if any of the other proposed changes discussed in the wake of the flash loan instance the other week can be slot in there. I'm having to talk to Chris and some of the other devs about that sometime soon.
- we had the MIP inclusion polls this week, finishing today. Haven't checked the outcome yet, but I'm sure Charles will let us know later.

##### Discussions

- [A perspective of an off-chain senior position lender](https://forum.makerdao.com/t/a-perspective-of-an-off-chain-senior-position-lender/5101)
    - Mrabino1 shares the perspective of an off-chain lender when working with MakerDAO.
    - Matt Rabinowitz has been working on some RWA integration stuff talks about an off-chain senior position lender's perspective. He talks about his experience with MakerDAO governance and how it generalizes to other off-chain lenders. I thought it was a valuable perspective. I think people could benefit from reading it.
- [Governance Forget About Whales](https://forum.makerdao.com/t/governance-forget-about-whales/4995)
    - Planet_X creates a write-up discussing some of the issues we're facing in governance and suggests some reasons that larger MKR Holders aren't voting.
- [Why choose Maker over Compound/Aave?](https://forum.makerdao.com/t/why-choose-maker-over-compound-aave/4862)
    - MKR1 re-opens the discussion on the Maker Protocol's advantages and disadvantages in relation to other DeFi lending protocols.
    - This thread resurfaced concerns about why users might choose Maker over Compound, Aave, or other secondary lending platforms. It's sort of a discussion covering some of the differences such as risks and advantages.

##### Signal Requests

- [Accelerate the PSM Launch](https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094)
    - Hexonaut opens a signal to accelerate the launch of the PSM (peg stability module) given recent feedback that DAI is losing market share in Latin America compared to USDC.

### Christopher Mooney

#### Smart Contracts Team Update

[04:08](https://youtu.be/mIR89j9IKuw?t=249)

- Last week, we did the weekly executive. BAL-A and YFI-A are both now collaterals added to the system. Between the GSM delay of 72 hours and the office hours modifier that didn't happen until, I think, like an hour ago. Those are active now. Keep an eye out to see if their debt ceiling starts to get consumed. There were also some DC adjustments for various collaterals in that spell.
- We have collateral assessments up for Uniswap V2 LP tokens for USDC-F pair and DAI-F pair, so check the [forums](https://forum.makerdao.com/t/uni-v2-usdc-eth-erc20-token-smart-contract-technical-assessment/5012) for those.
- GUSD-A is running in Kovan.
- Regarding some of the tooling for the executive spells, we've been working on the DssGov executive in the final review. So that'll probably change some of the collateral onboarding documentation, which is also in the final review, so those two things are kind of dove-tailing together.
- There was no [collateral onboarding priority sheet](https://docs.google.com/spreadsheets/d/1IX9e2fyfz7djtDMKn5gMyGsyFxHoY75GncMbAjnSXrM/edit?usp=sharing) work done this week, so maybe we'll hit a normal cadence again in the coming weeks.
- There's a post that I'm working on about [the changes we're going to propose for flash loan solutions in DSChief.](https://forum.makerdao.com/t/dschief-1-2-flash-loan-protection-for-maker-governance/5115) We're calling that DSChief 1.2 because this is the second upgrade. There was a bug in early 2019 that was part of the v1.1. That post will go out detailing the very minimal set of fixes that we need to prevent flash loans there and what the benefits of that are. It'll also walk through the migration steps so the details will be part of the migration, and we'll try and cover a timeline. Spoiler for that, the timeline looks like it'll be on Friday the 27th, which is Black Friday. We'll have an executive that will go live that'll put in the governance fix. It'll take some time to go through just like these collateral editions did but stay tuned to the forums to update that.
- SamM has resurrected the PSM totally on his own. I think some discussions around the peg had him resurrect this PSM idea, and he's got some code to accompany it. People probably want to pay attention to that. In ancient manuscripts, it's been said that sometimes the M in SamM stands for "machine," so thanks, Sam, for putting the work in.
- An update about personnel: Will Barnes is no longer with the foundation. He's one of the domain team actors for smart contracts. But the really good news is that he's going to be putting in a lot more hours for the DAO. Starting next week, it sounds like we may have him on MIP 21 collateral onboarding for real-world assets. We'll get another good engineer that's out working in the community.
- For the coming week, we've got PAX-G going to Kovan. In this Friday's executive, I think we're going to have GUSD, and it looks like that'll make it in time. We're also going to try and do collateral assessments for Uniswap v2 WBTC-F pair, UNI-proper AAVE-proper, renBTC, and TBTC. And MIP 14, 17, and 25 are still in review; We just haven't gotten around to those yet.
- The foundation continues to work on the liquidations 2.0 roadmap. We're finished discussing stuff with auditors and reviewing the various auditors. We'll probably make our selections pretty soon. Then we continue to work on the DSChief 1.2 upgrade. There's a whole path where that's going to go out to Kovan. We've got to test the upgrade and that process and work with UI and UX internally to do that.

#### Comments and Questions

- LongForWisdom: Great, thank you, Chris. I did have one question. We saw, I believe, MIP 20 passed through the governance cycle successfully the other month. I'm wondering what the timeline looks like for that in terms of actually writing the code?
    - Chris: Remind me again which one MIP 20 was?
    - LongForWisdom: MIP 20 is the target price adjustment module from Lev, I think.
    - Chris: Right, I guess we should just sort of craft that up, that wasn't really on my radar, but I don't think that it's too complicated, so yeah, we should build an executive that would deploy it, and we'll have to figure out where to slot it in. We've got a lot of we got a lot of density before December. So, it may even be that we want to put it in January. Otherwise, we might have to bundle that with collateral onboarding. Nonetheless, we should get it ready to go.
    - LongForWisdom: Cool, yeah, I think I haven't really communicated that with you recently. We need to start a list of things we've approved that haven't been implemented yet.
    - Chris: Yeah, and then we need a good calendar. I think we're getting to the point where we need some sort of tooling to track priorities.
    - LongForWisdom: Yes, that's a good idea.
- MakerMan: Actually, that was what I was going to comment on, Chris. It's just the mouthful that you gave of all the stuff you guys have been working on that I just want to say what a great job you guys are keeping up on all this and so great work that was all I had. But yeah, something I was going to suggest, which I haven't done a post on, is there's a lot of people doing a lot of stuff. It would be nice to have a place where you can see a running list of all the stuff everybody's done in the past. In one hive, they use it as a check-in but just so that when people in one place, they can see everything that's been done over the past three months or the coming three months.
    - Chris: Yeah, we'll have to talk about that. We use clubhouse internally at the foundation to track stuff, but we can use Github, kanban boards, and other stuff. We probably need to start to discuss exactly what we're going to do in the community, what the right tooling would be, what people would want.
    - LongForWisdom: Yeah, I think I agree it's getting to the point where it's just a lot.
- Nkunkel: Especially as we transition to this more DAO-centric model where there's more domain teams, in particular, domain teams that are external to the foundation, we're going to need a way to kind of keep track of activity, keep track of work, especially if people are getting paid by the protocol, you want to make sure that they're actually continuously delivering. I agree there definitely needs to be a lot more transparency in terms of what the domain teams are working on and when they complete and get stuff done.
- Amy: You guys are getting ahead of my update, which is the framework that we're working on. It's just a little bit more complicated to write in one forum post, which is why it's been taking long. There are many connecting factors, but essentially, the domain teams propose a budget and an introduction to something like objectives tied to a DAO roadmap. We haven't gotten to the tooling details, but I think just getting the mental model first is where we're shooting for.
    - LongForWisdom: Great, yeah, thanks, Amy, all right, let's continue the updates then.

### Nik Kunkel

#### Oracle Team Update

[14:08](https://youtu.be/mIR89j9IKuw?t=848)

- I think Chris has said everything for the most part. We're just rounding out what we expect to do before the end of the year and aligning on dates between all the domain teams on when we can deliver what. We hope to get a bunch of collateral onboarding assessments out next week. There's a public record that everyone can see the progress on regarding what we want to do through the end of the year. On the oracle side, I'm finishing up on the Uniswap LP code. I'm just waiting on a few more external reviews and some feedback to do one final iteration. We need to add a couple of administrative functions. Apart from that, it's looking like we're doing okay.
- In our staging environment, we haven't really found any issues. Again, from the oracle's perspective of the LP tokens, we'll suggest in the assessments that the debt ceilings should be artificially limited relative to what the risk team outputs for their parameters. This is until we get a professional audit done on the oracle code for the Uniswap LP tokens. Then as we get one or more than one audit done, we can then gradually raise the debt ceiling as we feel more comfortable with the code.
- From a personnel point of view, my team is very fortunate we procured the services of someone very near and dear to my heart, Marc-André. Some of you may know him very well, and some of you are about to get to know him very well. He's going to join me on the Oracle Domain Team and be very visible and vocal in the community. I'm excited. He's incredibly talented, so I'm very excited for the DAO to get to know him and see what he can do.

### Primoz Kordez

#### Risk Team Update

[17:07](https://youtu.be/mIR89j9IKuw?t=1027)

- The [renBTC risk assessment](https://forum.makerdao.com/t/renbtc-collateral-onboarding-risk-evaluation/5095) was published yesterday by our two external analysts, Andrej and Jernej. The parameters that were proposed are a bit conservative. I think they're actually quite appropriate based on the findings of the report. Both Andrej and Jernej are known community members for some time now. Many of you should know him. They're now moving on to the evaluation of tBTC. Hopefully, we onboard both renBTC and TBTC towards the end of this year and expect some demand there since we know how popular BTC vaults are. We also finalized the first UNI LP risk evaluation, which monetsupply did. To be more specific, the first evaluation was for USDC-ETH and UNI LP. Then we plan to make another one for DAI-ETH, which should be, of course, very different from USD. Then we'll do another one for redBTC and UNI LP. And finally, we'll probably publish all of them from our site towards the end of this month so we can onboard UNI LPs in December as agreed between the main teams.
- We are also lately looking into `dust` values mostly related to costs when unwinding vaults or bidding in auctions when gas prices increase. We think the 100 dust might not be an appropriate value, especially in times of distress and high gas prices. But there are some downsides to it because we might start excluding certain users. I plan to make a signal post about potentially increasing `dust` value, addressing all of these concerns, and sharing some data.
- On the RWA side of risk, the team covering RWA should soon release a risk assessment template, which is explicitly made for RWA. It's a different one that we use for crypto assets. A risk assessment for 6s is also more or less finished now and was made by Sebastian and is currently in an internal review phase.
- New Silver drop and ConsolFreight drop risk assessments are also in progress. These two are covered by Will and Phil. There's also an initial discussion for another potential RWA implementation proposed by UPRETS real estate, proposing a tokenized real estate collateral.

### Amy Jung

#### Operational Support Domain Update

[20:21](https://youtu.be/mIR89j9IKuw?t=1221)

- On the ops side, as I mentioned, we're working on that framework to coordinate around the subset of work. This is kind of like a public roadmap and how to coordinate around that. This week's main thing has been how we can help domain teams form and propose their budgets. So it's been a lot of data crunching. There's a forum post coming soon, which is pretty exciting. There will also be an update on another working group that I'm part of, which is autonomous MakerDAO. I'll drop the [link](https://forum.makerdao.com/t/working-group-autonomous-makerdao/4036) in the chat, so we'll be giving an update on the forum as well, hopefully by next week.

#### Community Development Team Update

[21:10](https://youtu.be/mIR89j9IKuw?t=1270)

- On the community side, there's sort of two main things:
    1) We've been working on leads with some senior contributors to define a fresh vision and community development objectives. These objectives will allow wider community members to engage deeper with MakerDAO and governance. I'm super excited. I can't wait to share those with everybody.
    2) The other piece is a core project that this team has been working on for this year has officially launched. I'm really excited and proud of the collaboration that went into this community-led portal. Tim will be giving you guys an update and a little running you through what that portal looks like.
- Finally, a quick ask; There is a podcast forum [thread](https://forum.makerdao.com/t/poll-included-cdip30-voices-of-makerdao-podcast-updates-and-deliverables/4999) call out. If you're able to participate in a poll that's specifically asking whether you think it'd be a useful tool for us to have some kind of podcast version of governance communications.

### Juan

#### Collateral Call Update

[22:35](https://youtu.be/mIR89j9IKuw?t=1355)

- Yesterday, we had another RWA edition call with Budd White from Paperchain. For those that don't know Paperchain, they're also with the Centrifuge. I guess they come after or in line, I would say, after New Silver and ConsoleFright. They do analytics on Spotify, Youtube, and other platforms. Because they can predict how much money these platforms are going to pay to the artist or labels, they can advance part of the revenue. So it's a really cool project for those that want to check out the [talk](https://forum.makerdao.com/t/collateral-onboarding-call-15-paperchain-wednesday-november-11-18-00-utc/4983) is already on Youtube. The notes are coming soon. By the way, last year, they did a pilot with the Maker foundation. They already have some kind of traction.
- Next week, we will have Set Protocol, which are the creators of the token, Set, with Index Coop. Set Protocol is an asset management protocol in the DeFi space, and they created a DeFi Pulse index set. Many of you might already know about it. We will have them on [November 18th at 6:00 PM UTC.](https://forum.makerdao.com/t/collateral-onboarding-call-16-setprotocol-indexcoop-wednesday-november-18-18-00-utc/5097)

### Charles St. Louis

#### MIPs Update

[24:24](https://youtu.be/mIR89j9IKuw?t=1464)

![](https://i.imgur.com/NcD7a0U.png)

![](https://i.imgur.com/iJcl4ea.png)

![](https://i.imgur.com/K5lg5DQ.png)

![](https://i.imgur.com/2jhKPkD.png)

## Procedural

### LongForWisdom

#### November MIPs Submission Review

[27:42](https://youtu.be/mIR89j9IKuw?t=1662)

- LongForWisdom: Cool, thank you, Charles. I think we're going to need the time later when we talk about the PSM stuff, so it's all good. All right, thanks for that. Like I said, if you are the author of one of those MIPs and want time to discuss it in more detail on this call, let me know, and put you in the first segment in the future.
- LongForWisdom: Cool, yeah, thanks. In terms of the inclusion review for the MIPs, I will confirm what Charles just said: all the inclusion polls passed and will be included in the MIPs bundle next week. The closest one was the Calendar Exceptions, but we're still five or four thousand ahead of "No," which puts it above the inclusion threshold.

## Other Presentations and Updates

### Tim Black

#### Community Development Portal Launch

[29:15](https://youtu.be/mIR89j9IKuw?t=1755)

![](https://i.imgur.com/tGBrUFX.jpg)

- Tim: I'm here to talk about the community development portal. Technically speaking, the presentation is Shea Fitzpatrick, our designer who built this thing, including Réjon Taylor-Foster, myself, Amy, and 10 other contributors who worked since April or so.

![](https://i.imgur.com/peqbcDk.jpg)

- Everybody probably has their own term for what a portal is. The community development portal is a hub for hosting programs and community-generated resources for improving the management, onboarding, and growth of MakerDAO.

![](https://i.imgur.com/qVbpPUK.jpg)

- You probably wonder who it is for. We're actually experimenting with audiences, but the portal mainly focuses on folks looking to actively participate in MakerDAO or its community programs. That usually falls into two buckets: people who are new with MakerDAO and want to learn about the system but may not be technically adept, and folks who are familiar with MakerDAO and are looking for canonical specific answers or ways to engage with the community.

![](https://i.imgur.com/ST7ISL0.jpg)

- Originally, we're on GitBooks and GitHub pages. We needed to migrate to something that was a little more fun, so we set out some objectives. We realized it wasn't just GitBook's constraints. We needed a platform that makes it friendly for contributors, content creators, and developers to collaborate. MakerDAO is global. Therefore, we had to solve localization right out of the gate, which I'll get into later.
- We wanted to make it visually appealing by supporting things like landing pages, specialized embed videos, callouts buttons, you know, the snazzy stuff.

![](https://i.imgur.com/z66cFtt.jpg)

- The new portal was designed with a content-first approach. We approached a content designer who looked at what we had initially and then restructured everything together to be a digestible format.

![](https://i.imgur.com/K4G8bcf.jpg)

- This is a sort of spaghetti site map of everything we had, and there's sort of these three paths: a learn, contribute, and a funding path. The Learn path gives you explanations of concepts and further reading. Contribute allows becoming part of the community. And Funding or applying is for many of the programs we have under community development, whether hackathons, meet-ups, or larger grants. It's important to talk about how it's structured because we had to build the thing.

![](https://i.imgur.com/rkn5yw3.jpg)

- Meet Réjon, our resident mad scientist. He's @Maximum_Crash on Twitter. You can also add him on RocketChat. He's just Réjon there. He built Grants.makerdao.com for us and then jumped onto the portal project where he, as I mentioned, saw an outcry of concerns.

![](https://i.imgur.com/iaTHKoz.jpg)

- All the concerns are listed on this slide. I'll share the presentation, but basically, it was difficult to collaborate, coordinate, and style in a nutshell. Landing pages were hard to see. It goes on, and on where we had to solve some problems, so he built a solution.

![](https://i.imgur.com/mpLUXWr.jpg)

- The solution was a dream Git-based CMS, create low friction for creating new content and adding new features where content creators have complete control. There's a manageable skill ceiling for getting started, a little bit of a lift, but it's not too bad. We wanted to make the site way more controllable to make it look however you want, and we wanted to make content-portable. That's what this solution does.

![](https://i.imgur.com/lyvIUpL.jpg)

- There are some technical people here. This is what the stack is, and MakerMan asked if the stack is accessible? This is mostly one of those things that I'd like to talk about later, but basically, the stack that we use has GitHub as the base, Gatsby, DAI.ui, MDX, and Lunr. Gatsby is great because it's geared exactly for the use case of where we were for collaboration. DAI.ui connects us to the foundation for brand identity, and it also has emotion.sh for some CSS in Javascript. MDX solves a huge problem for collaboration, and so it's sort of the bread and butter of every page. And Lunr is a static search index. Réjon built a custom translation module, which is pretty snazzy.

![](https://i.imgur.com/IgRhUKz.jpg)

- The stack solves a bunch of specific issues. It keeps GitHub as the source of truth for communication, collaboration, permissions, basically the entire history of the project. DAI.ui maintains the design bridge between the foundation and the community. Gatsby's graph QL API makes directory problems easier. If anybody has ever worked with GitBooks, you know a summary MD file way too well. MDC means that no one has to learn a new language. We were working entirely in Markdown. We have this extended format where you are actually more empowered as someone who makes a web page on our website.

![](https://i.imgur.com/Oj7YP19.jpg)

- So it's actually a secret sauce. Réjon's secret maximum crash plan is to create an architecture for a silent on-ramp to turn content creators into web developers. The more someone wants something out of a page, the more they become a front end developer. Writing content starts to become writing code; knowledge becomes power. That's his secret plan, and we've done it with 10 people, and I'm always happy to onboard new folks.

![](https://i.imgur.com/PcFDKSg.jpg)

- It's important to also talk about design. We asked Shea to establish a visual identity for community development stemming from the core Maker brand. But reflecting the distinct personality of community development is then applying that design language to the components that we have designed and then providing designs for home and landing pages. Basically, all of our contributors can be found in RocketChat. We're asking for more humanness for the community development universe.

![](https://i.imgur.com/3E3s5zu.jpg)

- Shea did this by user research. Shea just popped something into the community development channel, designed 3 themes, showed up at stand-ups, honed all of those, found another contributor to make characters and illustrations, and pursued the idea of simple, friendly, organized, and fun. This is the result.

![](https://i.imgur.com/WotfJhc.jpg)

- This is some of their work in progress: light and dark mode, some of the buttons, and some of the little characters.

![](https://i.imgur.com/0wVjHRF.jpg)

- Now we have this actual landing page, which is pretty rad, with calls to action on everything. It takes us to these different sections on top that I mentioned before. I don't know what else to say besides check it out. We're always happy to have people come in and become a part of it. You can clone the repo at any time. It's just MakerDAO/community at GitHub. You can install the stack, and you can always hop into Community Development and share your feedback. We love bringing new people on board. So with that, I'll stop. We're going to share a link to this in the snippets today. You can always review this presentation as a place for links. If you have any questions, please come into community development and ask us! We'd love to have you!
    - LongForWisdom: Perfect, it looks great. Looking forward to the next updates. Thanks, Tim.
- Makerman: So I just wanted to reiterate, so my wife is visually disabled, and she'd love to contribute somehow. I'm curious as to how these models will eventually incorporate something like that.
    - Tim: Yeah, since it's all Git-based, it's really open to contributors, and we'd love to make it more disability-friendly. My partner is deaf, so I'm always thinking of disability readers and people who use websites in different ways, so we'd love that contribution.
- Makerman: Do you guys actually want a visually disabled person to come in and help to contribute? My wife would love to do some work, and it sounds like it'd be fun.
    - Tim: Yeah, that sums it up very well. It would be, please.

### SamM

#### Dai peg and the PSM (Peg Stabilizaton Module)

[38:50](https://youtu.be/mIR89j9IKuw?t=2329)

- At the beginning of this week, I wrote an implementation of the Peg Stability Module. I initially had the intention of going through the monthly governance cycle like normal. A few days later, I realized we may be able to kill many birds with one stone. We're continuing to have trouble with the DAI peg being at 1.01. Now it's pretty steadily there. It's better than it has been. But it's still not quite good enough, and so in my view, we're kind of in this worst of both worlds situation where we have massive stablecoin exposure, but DAI is still not at $1. I believe that we should take that final step whether our USDC exposure goes to 1,000 million-it's at about 500 million right now. If it goes up to 1,000 million, it's roughly the same. If USDC goes down, we're sunk either way. So we might as well solve the peg issues because we're hearing from users in Latin America and other integrators that they're abandoning DAI and going with USDC due to this volatility and peg issues.
- So the issue with going with the current solution and lowering USDC-A down to 100.1% collateralization ratio is that we're running into this problem before where there was this scenario of liquidations that we'd have to eventually deal with. We also run into issues with timing and stuff like running the stability fee. We only collect up to about 100% collateralization. I think the PSM here is a really nice fit. It sort of solves all these problems at once, and that way, we can run the PSM with a 0.1% fee and gradually move it down so we can collect all the fees owed to the protocol. At the same time, we can bring the peg in line to within 0.999 to 1.001; The PSM will contain it to that degree. Essentially, this is a sort of short term stopgap. I don't view this as something that we should lean on in the long term. We should definitely be getting RWAs on board to get some sort of better supply in place. Still, for the time being, I think it makes sense to get the peg in line, get users using DAI, and we'll continue pushing for RWAs and farm tokens as we go.
- I've made a proposal to accelerate the PSM launch. Basically, I propose not using the monthly process because that would mean we launch by the beginning of next year, which is too slow. I think we could do it by the end of the month-ish, and then we could get all the stablecoin vaults to switch over out of their own free will, as well as the leftover ones. We have some tricks to get those to bump over as well. We could probably avoid most liquidation issues, collect all the fees, and have a nice pool of DAI to USDC and other stablecoin liquidity. I think it's just a win-win-win. Any questions about that?

#### Discussion

- LongForWisdom: Feel free to jump in with thoughts. When we had the PSM poll and the PSM poll, it ended up failing with 55% to 45% or something. That poll took subsequent to the Maker foundation saying they couldn't work on it potentially that's the reason why people decided to vote it down right. But that does mean this is potentially still a controversial issue. I know several people spoke out against the PSM previously. Would anyone who had spoken out against the PSM want to speak out now?
    - Lev: I would say that the points raised against the PSM at the time probably still stands today. I don't think much has changed in that regard. I believe The main change has been that we've been running a policy that gives the stablecoin exposure in the form of a low liquidation ratio in USDC vaults. That's probably the biggest change since then. I also would like to add that PSM was being proposed as an emergency measure that would go through a very accelerated process at the time. Specifically, the question was about whether the PSM should be used as an emergency measure. Including myself, many peoples' objection to it was that it required further thought, and it wasn't completely obvious if that it should have been pushed through immediately.
    - Sam: With regards to the emergency measure, I don't think it's an emergency, but we should consider this within the next few weeks because, as we speak, the stablecoin vaults are all ticking down. Last I checked, they're at about 100.42% collateralization, and every 10 days, the tick down another 0.1%. So if we want people to naturally unwind their positions, we're going to need to go further with this sooner rather than later or shut off the stability fees or something.
- Matt: I get the first-order thinking of why this is useful. Can you go through what would be the second order of thinking of how we get out of it? What sort of unintended consequences might show up when we try to unwind it or do we need to unwind it?
    - Sam: Basically, it's somewhat similar to the 101% liquidation ratio USDC-A vaults. The nice part is because it's pooling all the USDC, and it's open to the market at large as soon as we drop down below the lower end of the T-out parameter, so in this case, if we go with 0.1%, it would be 0.999. as soon as DAI drops trading below 0.999 against USDC, the market will arbitrage that out immediately. So we don't have this unwinding problem. As soon as we start getting excess supply again, it'll bottom out at 0.999, and we'll unwind the debt as fast as people are minting DAI basically. Does that answer your question?
    - Matt: To an extent, I'm more just concerned about unintended consequences if Ethereum hypothetically hit 5,000 tomorrow, and folks minted another 200 million DAI. Suppose we had a debt ceiling for that. Are there some other unintended consequences where if the DAI price then hit those numbers, then what happens if then with other scenarios. I don't have my head completely around it, not so I'm just looking for insight from anybody?
    - Sam: It would be an immediate buffer against supply shock in the very short term, but as we unwind the PSM, once it hits zero, we will have to go back to relying on stability fees and stuff like that to keep the price up.
- Makerman: Hey guys, I've been thinking about the peg a lot and the whole USDC thing. I've had a lot of posts. I really wanted to be more prepared to talk about this because many issues factor here concerning the perception of DAI and risk and what you think about all of this. But when I looked at what's happening with the USDC vaults, as long as you have DC. You're willing to give up on fees somewhere like if we want to peg to USDC, you kinda don't care, really. What's the risk then? We've already assumed the blacklisting risk. I made a post speaking about this whole PSM thing and how we think about this. We OSM these things to 1, and when you do that, if the real value moves around, let's say USDC goes to 0.985 even in this PSM the USDC your holding and giving DAI out at a higher value in USDC against the USD value. And so there's some hazard here I'm trying to sort out, and I'm writing an article on this, and it's leading me to other ideas that I think will be really good for Maker. It comes back to do we give up on the fees on this to get peg management, and I don't have the answer to that. I've just been trying to work up the ideas. If I had any solution, I'd say let us buy some time to figure out how to navigate out of it. Beyond that, we've already assumed the risk hazards. Do we want to grow them or not before finding our way out, and do we want to push through with something that could have a little more thought? I'm just trying to get the time together. This is a complicated issue to sort out and leads me to some interesting ideas that I want to reveal in forum posts. I just haven't gotten there yet.
- Nkunkel: We can always create a floating price. We can always create an oracle for the stablecoins. Right now, I just don't see a good reason to do so. I mean, it should be binary. Either there's money backing USDC, or there's not. So you either have the redeemability guarantee, or you don't. If we were to have a floating stablecoin price, people wouldn't be nearly as comfortable taking the amount of leverage that we're seeing. This could have a destabilizing effect on the peg. Right now, with very little money, you could get a ton of leverage and hammer the thing back down to $1.01. but you can only do that because of the confidence people have to not get liquidated, right? Now that's not exactly true because some people abandon their position afterward. They've made their money on the initial sale and never look back, but that's a bit irrational, right? They're still retaining this put option on DAI that they otherwise in a floating world couldn't hold onto. So if the goal is to onboard more stablecoins to protect the peg, I don't see how adding an actual floating oracle for stablecoins would help. If our approach to fiat-backed stablecoins changes and we could protect the peg in other ways, then the situation changes, then we could take a look.
    - Sam: I view this as a temporary solution to retain users that we're losing in Latin America and integrators that were hearing again and again that they're abandoning DAI. It doesn't matter if we have the best, most decentralized stablecoin. If there are no users, that's a serious problem. This is not my ideal situation. I'd rather have real-world assets, highly diversified, farm tokens, all these kinds of things. Still, for now, I think getting the peg in line is priority number 1.
- Chris: Echoing what Sam just said; I think it was clear from last time that I'm not such a huge fan of the PSM. I think it creates that empty shelf situation. We're talking about narrowing the band of the PSM at the empty shelves standpoint. But I also think at this point, the risk of losing users that don't care about the decentralization of DAI is probably worse. I think it's worth everyone looking through Lix's arguments. He does arbitrage around the DAI peg. We will remove the market for people who'll create vaults to mint DAI to take advantage of arbitrage, and maybe that's okay. And I wanted to add one other thing, which is the implementation that Sam is discussing. I think this might also make it where we could effectively take any liquidated positions we currently have in USDC-A and PAX-A, TUSD-A. We could take those once they got really close to that $1 mark before they were completely undercollateralized. I think we could actually sweep them into the PSM, which means that we could move them into the PSM rather than liquidating them. As a result, they'd be available for the market whenever DAI price drops below $1. People will be able to pick it up. If we did that periodically, it would allow the existing USDC-A or other vaults to continue functioning and directly sweep things out. I have to think about that sort of fork of the vault over and whether that would mess up the PSM implementation, and that's it. I've gotta go to another meeting.
- Brian: I just want to chime in. It was mentioned earlier that the foundation can't help out with this, which means that you don't benefit from the smart contacts team reviewing and auditing this code. I would strongly recommend that the)community seek out audits or find trusted people who can audit this code before rushing it into the system.
    - Sam: I second that.
    - Nkunkel: The audit doesn't need to be free. The fees can come from the stability fee buffer. We do have the functionality to pull DAI out of there. We just need an auditor who will be willing to accept DAI or crypto or something.
    - Frank: Yeah, but getting an audit right now is like a 2021 event, isn't everyone backed up?
    - Nkunkel: There are always ways to cut the line, depending on who you know.
    - Frank: Okay, good.
- Sam: One thing I'll say about the code, though, from a security perspective, I'm just finishing a bit of a rewrite of it, but basically, it's going to be exactly like a collateral type with a single permission vault, so it's really using existing systems. There's not a whole lot of risk. Definitely look at it. But on a scale from crazy risky new thing to not risky at all, I think it's a pretty tame addition without much risk, in my opinion.
    - MakerMan: It's basically a USD vault with an outlier of 100 and an upfront fee, right?
    - Sam: Exactly.
- Lev: I'd like to mention another stablecoin related proposal that's coming shortly that I think has been discussed in some form before but the main idea is looking at ways to deploy Maker's current stablecoin exposure into farming and DeFi that would allow Maker to capture farming yields that have actually been the root cause of the overwhelming to be more fairly compensated for the stablecoin exposure that we're taking on and in addition to that potentially avoid using PSM or super low liquation ratio type mechanisms that have these unwinding barriers for that we've been working on a collateral adapter that in theory is applicable to most DeFi farming mechanisms but particularly looking at proposing it for farming USDC on Compound and the reason for that is because it offers very attractive rate of return when you factor in the leverage that you can get from the USDC so in addition to that target the same asset we have most of our stablecoin exposure in, which is currently USDC. So essentially looking at trying to potentially swap out our current 1:1 USDC exposure to something like lets say 110% liquidation ratio that can collect a stability fee in a high single or low double digits while also offering attractive yield opportunities to the market. I'll put a link to the proposed implementation of this in the chat.
    - Sam: Yeah, I definitely second this, and this should be something we prioritize with the PSM as a fallback. This is the type of DAI supply that we want.
    - Makerman: I wanted to say that I was analyzing this in conjunction with the peg, and we totally want to do this. It's a win-win in so many ways.
    - Sam: Maybe you could speak Lev to the type of APR that can come from this and potentially the stability fees that we could charge for this?
    - Lev: Yeah, I can quickly run through the numbers. If you go to Compound and you supply USDC, if you naively do that, you don't get an amazing yield. Do it in a more clever way, which you do by supplying USDC and by borrowing it again and resupplying it and borrowing it again. You will maximize your COMP yield without taking on any additional price risk. If you do that, you could probably earn upwards of 15% APY on the USDC. Let's say Maker supports a liquidation ratio of 110% for this collateral type from our perspective. Now, if on top of that you can put it into a Maker CDP, we're essentially taking on USDC exposure with a little bit of compound exposure. However, this is much more attractive to us. We don't have these super-low liquidation-ratio collateral types that are hard to actually offload and collect fees on, as we've found. Suppose we have a 110% liquidation ratio. In that case, the user can get up to 11x leverage on compound USDC. They multiple their yield by 11x. We're also going to charge a stability fee. And let's say we charge an aggressive fee of 10%. We're assuming you can get 15% from the recycled COMP yield. Once we subtract those two out, you get about 5%, but then with the leverage from Maker, you can get 55% APY on this trade. The idea is that this is much higher than anything you could find in DeFi these days, and this is certainly a low-risk thing. We collect about 10% on this example, which is way more than we'd usually make. We could collect a 10% stability fee for a year before worrying about how to liquidate it. That's the basic idea of the economics of this, which I think makes it very appealing. In this case, we're directly taking a piece of the farming action while generating loads of DAI.
- Sam: And also, I believe this is another point. I think this would reduce the demand for DAI within Compound because USDC would become the dominant market, is that correct? Do you think that would happen?
    - Lev: Yes, that's correct, indeed. If you tilt the scale in favor of a different asset, I think it would almost certainly be because we would have this for USDC, for example, but not for DAI. Having this for Dai would not be as attractive for us because the DAI supply problem would not be solved. If we tilt the scales in favor of USDC, the DAI yield of Compound will go down relative to USDC.
- Matt: I have the same question as Sam; what's the unintended consequence? What's the negative impact that this could cause?
    - Lev: Well, first, we have to consider what is the difference in risk profile. I think we have to consider the situation in relative terms compared to the alternatives. The alternative is the status quo or PSM, and so on. From the price perspective, we still have USDC exposure, so we're not risking our assets on the balance sheet. We have two new risks, one is obviously the technical risk, and the second risk is Compound's solvency risk. I think it's reasonable on the smart contract's side to mitigate these risks by starting with lower debts and improving the concept, getting third-party audits on this code. On the Compound exposure side, it's a more subtle question about the team and communities' attitude towards the risk. It's also worth noting that we don't know how Compound Governance will manage future rewards. We also don't know how compound governance would react to this specific integration. I don't think anything about this proposal is unprecedented.
    - Sam: I think this is a pretty serious gamechanger, in my opinion. This concept of a specific USDC in Compound Vault can generalize to most farming situations or at least the lot. We could get these high leverage stablecoin farming with high stability fees in place wherever farming is available and permissionless and all that. I think this is pretty huge.
- LongForWisdom: Maybe we should move on. This proposal sounds potentially awesome.

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[01:11:00](https://youtu.be/mIR89j9IKuw?t=4260)

- To summarize, we're sitting at about 990 to 993 million total DAI issued. Still, about 378 million of that is from ETH. Then you've got a solid 1.2 million from ETH-B, about three million from BAT-A, 411 million from USDC-A, 109 million from WBTC-A, 57 million from TUSD-A, smaller amounts from ZRX and MANA, 21 million from PAX-A, smaller amounts from USDT-A, COMP-A, LRC-A and then 5.1 million from LINK-A.

![](https://i.imgur.com/AwdWGPD.png)

![](https://i.imgur.com/pFigW5J.png)

![](https://i.imgur.com/SWnTM6n.png)

![](https://i.imgur.com/z4RZrcu.png)

![](https://i.imgur.com/1zI90NH.png)

- In terms of where we are with the DAI peg, lately, it has been trading pretty consistently around $1.01, with some volatility in the last week or so. Both above and below peg are both above and below the equilibrium price right now.

![](https://i.imgur.com/XEBjoZU.png)

- A lot of those trades have been occurring on Uniswap V2. We've seen that kind of dominate the share of volume lately. Then there are some trades and dYdX that stay centered around the median point of those trades.

![](https://i.imgur.com/lYlujiL.png)

- Right now, what we've seen is moments where large trades will experience slippage on Uniswap but in both directions. So that's where you see this bias for some of the larger circles above and below the line, and you see a pretty tight grouping of smaller circles right on the line. There was some fluctuation with large movements in ETH and other asset prices in DeFi, but by and large, it did hold pretty consistently steady.

![](https://i.imgur.com/Aqu9DE6.png)

- In terms of some of these vaults for USDC-A, it's the largest bucket. We have a debt ceiling of 485 million on that right now, with 411 million issued. As you can see, the largest chunk of this 272 million is pretty much smackdown 100% collateralized. Then 116 million is collateralized at 101% or higher. And smaller amounts at higher collateralization ratios.
- If we look at the amount of projected DAI that would be liquidated at a price of a dollar, that's basically everything that's currently able to be liquidated. If liquidations were enabled, that's about 380 million DAI, so basically the majority chunk of the USDC-A portfolio.
- You can see the largest few positions have not really been touched since September. Those are sitting there, so basically, the 40 million vaults have been sitting, and then we've got the fourth largest vault at 22 million that was touched in the last two days. That one is sitting at a 101% collateralization ratio. So this is basically the trend you see. The ones that have been updated more recently by the vault owner tend to be the ones that have a slightly higher collateralization ratio, which makes a lot of sense because basically, the collateralization of these vault positions has been decaying primarily due to just accrual of fees.

![](https://i.imgur.com/66KdEmU.png)

- From a USDC trade standpoint, the peg basically echoes what's been going on with the implied ETH-DAI price and then same with the USD peg with a bit more volatility and then again DAI-USDT looking a lot like DAI-USDC but with lighter volumes.

![](https://i.imgur.com/TUhGQCb.png)

![](https://i.imgur.com/aOqflpj.png)

- You can see the largest bucket of collateralization being 77 million of that DAI is 220% collateralized. Some of the individual larger vault positions are 270% to 280% collateralized with the collective 100 million or so in that 20 percentage point range. So, by and large, the ETH portfolio positions are a bit more collateralized, which can be attributed, I think, primarily due to the nominal increase in ETH-USD value. However, some of these vaults are updated a bit more regularly. The largest position was touched a day ago. The smaller positions there basically last week, so these positions tend to stay a bit more current. There is a nice distribution to the collateralization ratios amongst the vaults. It's not like the entire ETH-DAI portfolio is grouped into two or three large vaults, which is good. That distribution tends to keep the debt portfolio and that collateral asset a bit more fresh.

![](https://i.imgur.com/lD26iZA.png)

- Another huge chunk of the DAI portfolio is wBTC. So what we see basically is the vast majority of the wBTC positions are 190% collateralized, which is a bit less. Still, again there's that discussion around is the wBTC really that much more market volatile. I think the consensus is no. Basically, you have an 85 million liquidation wall there at an 11.9k price. Then 84 million or so. Actually, if you expand this to the top three, 90-93 million of that is living in the largest three vault positions, which are 190, 190, and 280% collateralized, respectively. That, I think, a pretty solid collateralization ratio for those three largest wBTC positions.

![](https://i.imgur.com/o51t1nG.png)

- Another large component of the portfolio is PAX-A, with 21 million, which basically lives in the three largest vaults. You can see that almost the entire portfolio is collateralized between a 100 and 101% collateralization ratio. This is a very similar scenario to the USDC positions. You kind of see a meme in the PAX vaults at around 100.6% in terms of averages. The USDC positions decayed to around 100.4-100.5% collateralization, so that clock continues to tick.

 ![](https://i.imgur.com/oUfWimN.png)

- In terms of where a lot of that DAI is living. We touch on the basically 360 million in Compound, 200 million in Uniswap pool, and another 32 million in one of the largest Curve pools. There are some farming pools. Barnbridge and the YFII pools, which contain smaller amounts of around 20 million apiece. Then the AAVE pools around 17 million. These Curve positions are fragmented a bit into multiple pools. Basically, as we touched on last week, you have at least six to seven hundred million of the DAI outstanding in liquidity pools or farming opportunities. I think the community pretty much is aware that that's kind of the current state of the DAI portfolio.

![](https://i.imgur.com/CPM4XyL.png)

- Overall, the outstanding amount of DAI did tick up slightly, so you could see this very shortly across the mean mark. It kind of depends on what happens with the stablecoin vaults.

#### Open Discussion

[01:21:49](https://youtu.be/mIR89j9IKuw?t=4909)

- LongForWisdom: Any Questions before we close off? We will skip the call on Thanksgiving due to the holiday. We'll leave it there if anyone wants to share any final points or reminders they want to share before we close up?
    - Juan: Allow me to end on a positive note regarding something that SamM said about projects not accepting DAI because of the out of peg situation. I don't entirely agree with the statement that the peg is out of control. I think it's within a range and maybe coming from Argentina, I would say that if the DAI is worth more then the dollar, it's because it's more valuable than the dollar. I'm not saying that we should stop doing things to maintain the peg. I think that all these tools are great and we should definitely consider them and work on them. Still, I don't know if I agree with the statement that these projects are not taking DAI because of that and whatnot, but I wanted to finish on a more positive note. I don't know if I managed to convey that.
- LongForWisdom: Okay, thanks. We'll leave it there. The discussion should continue in the forum about the PSM. Let's wrap up here then. See you all next week, and thanks for coming!

#### Links from Chat

- [Autonomous DAO](https://forum.makerdao.com/t/working-group-autonomous-makerdao/4036)
- [MakerDao Podcast](https://forum.makerdao.com/t/poll-included-cdip30-voices-of-makerdao-podcast-updates-and-deliverables/4999/5)
- [Paperchain Onboarding Call](https://forum.makerdao.com/t/collateral-onboarding-call-15-paperchain-wednesday-november-11-18-00-utc/4983)
- [SetProtocol Onboarding Call](https://forum.makerdao.com/t/collateral-onboarding-call-16-setprotocol-indexcoop-wednesday-november-18-18-00-utc/5097)
- [Community Dev Portal](https://forum.makerdao.com/t/community-development-team-launches-community-development-portal/5020)
- [MIP29: Peg Stability Module](https://forum.makerdao.com/t/mip29-peg-stability-module/5071)
- [Accelerate the PSM](https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094)
- [Compound USD Market Details](https://compound.finance/markets/USDC)

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

- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
