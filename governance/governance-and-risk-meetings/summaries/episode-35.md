# Episode 36: May 23, 2019

## Agenda

The theme for this call will be 'Demand/Supply Imbalance'.

- [00:02](https://youtu.be/E-YDss-fS6U?t=3): Intro from Rich Brown
- [02:15](https://youtu.be/E-YDss-fS6U?t=135): Preamble from Steven
- [07:51](https://youtu.be/E-YDss-fS6U?t=470): Chris B on Governance Improvements & Design
- [24:55](https://youtu.be/E-YDss-fS6U?t=1495): Matthew Rabinowitz: Recap and thoughts
- [38:14](https://youtu.be/E-YDss-fS6U?t=2297): Analysis from Vishesh
- [56:21](https://youtu.be/E-YDss-fS6U?t=3383): Post-Call Questions & Discussion

### Summary/Intro

#### Rich [00:02](https://youtu.be/E-YDss-fS6U?t=3)

- Don't be hesitant to give us feedback on these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.

#### Steven [02:15](https://youtu.be/E-YDss-fS6U?t=135)

- There is an ecosystem developing around each type of system participant. Governance is also being developed, and it's important to ask poignant questions to help with that development.
- I want to encourage people to self-organize and develop an ecosystem around governance. It's important for that interaction to be there consistently.
- Any improvements to the tooling, dashboards, and process are welcome. We have a grant program and we are interested in seeding the development of such things.
- Scientific Governance in MakerDAO minimized the risk of whales influencing the system, and for the downsides of plutocracy.
- 3 themes: Demand/Supply Imbalance, Collateral Types & Risk Parameters, and Exogenous risks.
- A constant reminder: Governance is a continuous function, please be involved as much as possible.

### Governance

#### Chris Bradbury: Design of Governance Portal: [07:51](https://youtu.be/E-YDss-fS6U?t=470)

- Chris is on the product team and is ultimately responsible for the CDP Portal and the Governance Portal.
- Governance Portal has been live for 8 months. Initially, it was designed for a yes or no vote on the Foundation Proposal. Governance has evolved a lot, and so now we will be making improvements.
- This is a request for feedback on what you want to see in the Governance portal. I will drop a [post on Reddit](https://www.reddit.com/r/mkrgov/comments/bs53er/request_for_feedback_governance_voting/) outlining our plans. Please join the conversation!
  - What do you like in the current dashboard?
  - What don't you like?
    - What are some features you would like to see?
- First step, disconnecting Governance Polling from Executive Voting in the back-end.
- Goal is to bring more people into the governance process through improving the governance experience. The more unique addresses voting, the better.
- In a few weeks, we will come back with a prototype.
- Rich asks some questions
  - [12:02](https://youtu.be/E-YDss-fS6U?t=721): In regards to moving polling off DS-Chief, will people be able to find all the relevant governance activity on-chain?
    - Yes, that's one of our major requirements.
  - [13:25](https://youtu.be/E-YDss-fS6U?t=806): What are the major highlights of the new version?
    - In the new system, you will be able to participate in multiple polling votes. Won't matter if they're overlapping.
    - You also get to participate in Executive votes without worrying about the polling side of governance.
  - [15:36](https://youtu.be/E-YDss-fS6U?t=936): What's the mechanism for enabling this overlapping votes functionality?
    - We will be using snapshotting, though it hasn't been fully decided yet. Further explanation in the recording.
  - [17:03](https://youtu.be/E-YDss-fS6U?t=1023): Are you approaching this primarily from a UX and additional features perspective, or refining how governance works in general?
    - At the moment it's more about UI/UX
- To get involved, discuss in [this Reddit thread](https://www.reddit.com/r/mkrgov/comments/bs53er/request_for_feedback_governance_voting/).
- If anyone is interested in one-to-one sessions reach out to @chrisb on [rocketchat](https://chat.makerdao.com).

### Risk

#### Matthew Rabinowitz: Thoughts on the future of the Stability fee and DSR: [24:55](https://youtu.be/E-YDss-fS6U?t=1495)

- This a continuation of the discussion on the call we had last week.
- In regards to the iterations between the Stability Fees and DSR in the future;
  - What will the DSR look like in 3-5-7 years?
    - On the governance level, we will be trying to go back and forth on what happens when you lower the stability fee and trying to identify the balance of lowering the stability fee while increasing the DSR. Iterating over time, like a human PID.
- How do we identify the difference between more granular stability fee changes?
- Many decisions will be outside of the scope of what we can identify.
- We have constant and immediate access to information about Dai on a minute-to-minute basis. All that data allows us to implement an actual PID eventually. Over time we will need to figure out how to work with this data to make automated decisions.
- [31:03](https://youtu.be/E-YDss-fS6U?t=1866): Rich, Cyrus, Vishesh comment
  - How willing are we towards trusting algorithms and automation?
  - A human gut-check may always be needed, there are so many ways it can go wrong or be manipulated.
  - A human veto could be good enough (or not). Another option is a PID that just offers recommendations. We can work towards a perfected PID in the long term.
  - what are the right inputs, how do you respond to those inputs? We are in the stage of understanding what those inputs are.
  - [35:05](https://youtu.be/E-YDss-fS6U?t=2108): Vishesh's philosophy on models and discovery

#### Vishesh: Analytics: [38:14](https://youtu.be/E-YDss-fS6U?t=2297)

[Vishesh's Graphs](http://makerdao.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

- _Video Does not capture graphs this week_

##### Broad Strokes: [38:26](https://youtu.be/E-YDss-fS6U?t=2314)

- We are at an equilibrium point, Dai looks like it's in a normal and healthy scenario. I think we now have a frame of reference for what a "normal" Dai stability regime is.
- The system is asymmetric. Arbing down from above $1 is easier than arbing up to $1.
- Volume has come back up a little but is still at relatively low levels compared to earlier this week.
- I don't think we can make monetary policy decisions based on 2-5 day trends.
- ETH price vs Dai price:
  - In the past, there was a strong inverse correlation. Recently this has flipped and become correlated. This broke the model, which means there is a deficiency in the model.
  - My suspicion is that I need to be more refined about how we think about ETH price short and long term. It's possible there are two models here: what does Dai do in a bull market vs a bear market situation since they are clearly different things.
  - Defining environmental conditions will help us refine our models.
- Supply:
  - Has been coming down in the past few weeks fairly consistently.
  - A few major burns.
  - The flywheel is moving, circulation of debt is strong.
  - Circulation of debt is a very interesting and overlooked metric in my opinion.
- Secondary DeFi Lending Rates:
  - A healthy buffer of ~3% has persisted between Maker and SLMs.
  - I've been only looking at Compound as the most reliable signal for now.
  - Reports of CDP users refinancing didn't seem to reflect in the volume of any SLMs. Not sure where they are potentially refinancing too, so it's hard to say what people are actually doing.
- Collateralization Ratio:
  - The Ratio has gone up and is remaining steady.
  - This metric is important because it speaks to the idea that people want to maintain this buffer, so they are still potentially worried about a drop in ETH price.
  - Seems like people are fairly neutral on ETH.
- Questions & Discussion:
  - [42:45](https://youtu.be/E-YDss-fS6U?t=2565): Rich asks, should we be calling out regularly the tail of data necessary before we should make a decision?
    - We are trying to balance the idea that time is our friend, to establish a better basis for decisions, vs If we know we're in a bad place inaction can be bad for very obvious reasons.
  - [48:38](https://youtu.be/E-YDss-fS6U?t=2918) David asks, Do you think there is a systemic bias preventing a comfortable scenario to lower the stability fee? ie: Can Dai behave like it's at an equilibrium point, blurring the real equilibrium point which might be lower in regards to the Stability Fee?
    - Local vs Global equilibrium.
  - [50:33](https://youtu.be/E-YDss-fS6U?t=3033) Cyrus comments, "I'm hesitant to draw too many conclusions from the bear market from last year, etc.."

### Post-Call Questions & Discussion [56:21](https://youtu.be/E-YDss-fS6U?t=3383)

- [58:22](https://youtu.be/E-YDss-fS6U?t=3501): Rich asks, If there is a logical lower bound on what the SF could be, is it possible it never makes sense to go below, for example, 10%?
- [01:01:08](https://youtu.be/E-YDss-fS6U?t=3669): Josh asks, If Maker is always a lender of last resort, don't secondary markets need to be more expensive? not the opposite?
- [01:03:13](https://youtu.be/E-YDss-fS6U?t=3793): Cyrus mentions, One interesting thing to consider is tracking when big chunks of Dharma loans will mature since this brings Dai back into circulation.
- [01:04:21](https://youtu.be/E-YDss-fS6U?t=3861): Vishesh elaborates on the topic of the buffer between the Stability Fee and SLM borrowing rates.
- [01:13:20](https://youtu.be/E-YDss-fS6U?t=4402): Josh asks, once we get DSR in MCD does that start to confuse what the Stability Fees should be looking like?
- [01:16:49](https://youtu.be/E-YDss-fS6U?t=4609): Vishesh brings up the question, what do we manage towards? What does success look like for Maker Governance?

### Links from the Chat

- [Dharma Analytics](https://dharmalytics.io/)
- [Reddit post for feedback on Governance Portal](https://www.reddit.com/r/mkrgov/comments/bs53er/request_for_feedback_governance_voting/)
