# Poll 3

One of the assumptions presented by the exercise is:

> Currently, one standing order is in force, relating to transfers from the trust to the PSMs and back depending on the amount of collateral in the PSMs.

Emilia begins her message:

> As discussed with large MKR governance holders recently, we are requesting authorization via poll for the following standing order, relating to the transfer of RWA revenues from vaults arranged by MagicRWA.

She includes a link to the standing order and we see it is 'internally consistent with some ambiguity. Covers revenue return only'

I'm noting that the new standing order covers 'revenue return only' which represents a loss of critical function relative to the previous standing order. That needs to be resolved before it is approved.

For that reason I'm holding the new standing order as an incomplete, working draft.

Emilia states:

> The existing standing order related to ALM transfers to maintain the DAI peg is invalidated as a result of this standing order. The ALM order will be replaced shortly once the new version has been fully drafted.

Her use of the present tense seems inappropriate, because the standing order authorized by the DAO isn't invalidated yet. That would require a MakerDAO Proposal.

She may have some missasumptions regarding her conversations with "large MKR governance holders" as nothing has been officially decided yet. In the end, it seems she is asking for community input in the form of a poll to help draft a single clause in the new standing order.

Faraz then replies with this:

> We approve this standing order changes for a poll today.

Bad grammar aside, I'm not sure what Faraz is approving here. It could mean signaling approval to swap the standing orders and creating a poll to that affect, and it could mean approving a poll to get feedback regarding changes to the draft standing order.

With all this in mind, my move is to make a forum post asking for clarification.

> Faraz, please clarify what you're approving. Are you saying you approve the overall plan to swap the standing order? Given that the new standing order is still incomplete (it covers revenue return only) I want to have you clarify what sort of poll you are approving before I start one.

> Also, there are too many unanswered questions for a poll to happen today. Given that this is seemingly not urgent, this will have to wait until next Monday.

> Emelia, asking for such a precise detail to come from a governance poll is unlikely to generate a meaningful result and requires a great deal of context for voters to make an informed decision. It generally works better to have a reasonable solution with rationale presented and then the DAO can signal yes or no on the change.

> I suggest you solicit feedback from the community here in the forums to help you draft the document before we take the ratification to a poll (pending signoff from Stability Scope). In any case, if a poll is needed, it will happen at earliest next Monday.

I would not create a poll at this point.

# Poll 4

hax0rz the vat myself & take all the l00t

# Interpretation Exercise

### Bootstrapping Governance Votes

The clauses below are part of the Governance Scope.

12.1: Bootstrapping Governance Votes
Governance Facilitators are empowered to use broad judgment when exercising their ability to make direct Atlas interpretations and edits to the Atlas and the Scope Artifacts, when this relates to unintended consequences or mistakes in the affected documents.

12.1.1: In case of unintended consequences or mistakes in the Atlas and Scope Artifacts causing WMaker Governance to function incorrectly, the Governance Facilitators can at any time run a Governance Poll to enable MKR holders to make a decision that will alleviate and resolve unintended consequences or mistakes.

12.1.2: The Governance Facilitators can at any time propose to edit any content of a Scope Artifact through a Governance Poll.

Do you think there is any ambiguity in these clauses? If so, where, and how would you rewrite the clauses to remove the ambiguity?

Yes.

'Broad judgement' is vague and could lead to varied interpretation. I imagine it's trying to say GF "is granted broad purview in making judgements"

This empowerment to broad judgement is constrained by:

> ... when exercising their ability to make direct Atlas interpretations and edits to the Atlas Scope Artifacts.

It's not clear if this ability to make interpretations and edits is being granted by this specific clause or if it has been granted elsewhere. If elsewhere then I'd add a direct reference to the source. If not, then I'd reword this to make it clear that this ability is being granted here, along with the scope and scale of this ability.

The concept of a mistake or unintended consequence is ambiguous. A mistake could be obvious or not, and range from a typo to a misconfiguration that unexpectedly takes Maker off peg. Also, without original intentions written down it would be difficult to know which consequences are unintended and which are not. This could be remedied by adding a Statement of Intent or similar at the beginning of each major section.

I think pulling in the 'universal alignment' concept will be helpful here, yet pushes much of the ambiguity into the concept of 'alignment' (But it was already there, and at least now we have it cornered.)

Rewritten:

> 12.1 Governance Facilitators are granted broad purview to make interpretations and necessary edits to the Atlas and the Scope Artifacts when addressing errors or unintended consequences.

> 12.1.1 Unintended consequences or mistakes in the Atlas and Scope Artifacts can be considered as any clause containing ambiguity, contradiction, unworkable processes, gaps in logic or any similar such deficiency that result in tangible breakdowns, stalls or general confusion for aligned actors within any governance related context, as interpreted by Governance Facilitator.

> 12.1.2 The Governance Facilitators can at any time propose aligned edits to any content of a Scope Artifact through a Governance Poll.

#### How would you interpret these clauses as-they-are in the following situations? Would you allow votes to take place? What would be the contents of these votes?

#### Situation A

> Aligned Delegates are not being compensated due to a clear typo elsewhere in the Governance Scope.

I would edit the typo to fix the compensation, and post on the forum that I've done so along with my reasoning and a reference to [Governance Scope 12](https://mips.makerdao.com/mips/details/MIP113#12-1-bootstrapping-governance-votes).

#### Situation B

> A large token holder wants to add logic to the Stability Scope scope more quickly than is possible using the monthly governance cycle. The author claims this change is required to prevent the DAO losing significant value.

This is not remedying an unintended consequence or mistake, so I would not make the edit myself.

This doesn't sound like an emergency, so I would attempt to judge if the situation is "[Urgent](https://mips.makerdao.com/mips/details/MIP24#MIP24c1)"

I would lean on the judgement of Stability Scope facilitators here and ask if they would explicitly deem it Urgent as defined in [MIP24c3: Emergency Response Procedure](https://mips.makerdao.com/mips/details/MIP24#MIP24c3).  
If I determine it's urgent, I'd create a poll as quickly as makes sense, and follow that with an executive. I would try to keep things in line with the standard weekly rhythms, sensing governance burden and amount of context required for voters. I think minimizing the governance load that occurs outside of the monthly governance cycle is important, but also sometimes it needs to happen.

If it's not explicitly urgent but seems like a timely opportunity to claim value for the DAO, I'd still consider having an early executive vote if that week's governance burden seems like it could handle another vote.

#### Situation C

> An anonymous account wants to add logic to the Stability Scope scope more quickly than is possible using the monthly governance cycle. The author claims this change is required to prevent the DAO losing significant value.

Same answer as above. I don't think I should treat a large token holder differently from an anon if the business case seems legitimate.

If this starts happening like spam or trolling, I'd have to have some way to screen the messages before I involve other facilitators.

#### Situation D

> As a consequence of a significant reduction in Aligned Delegate pay, all Aligned Delegates step down from the position.

If the conversation leading up to the change included acknowledgement of this risk, perhaps coupled with the intention of replacing all the AD's with others who would accept lower pay... then perhaps this is just a bumpy road toward an intended outcome.

It seems more likely that this was an unintended consequence and would consider this as Urgent or an Emergency. I'd create a poll immediately to see if token holders support reversing the reduction given the reality that we currently have no AD's.

# Poll 4

### Determine what course of action you would take as a Governance Facilitator and communicate it clearly.

Protocol Scope Facilitator Imogen has requested an urgent poll to gather MKR sentiment on if a costly security fix should go live.

Our read on the situation:
Fix B Executive is going up regardless, very shortly.
Fix A Executive will be ready around the same time and may go up based on MKR holder sentiment.
A Technical Ecosystem Actor and Protocol Scope Facilitator are requesting a poll to see if the DAO supports Fix A, which will likely result in a 20mm loss to MKR holders.

I would start a chat with Geneveive and/or Imogen and verify the timeline, and ask them questions publicly on the forum as well. I'm going to pretend that they said the fixes would be ready in 8 hours.

During this conversation I'm going to propose a different course of action rather than creating a poll about Fix A implementation. If they make an executive proposal for Fix A and Fix B, then they can go up at the same time and start their voting periods. If they both pass, then the DAO has spoken and both are executed. If only Fix B passes, then that's that and we are left vulnerable for 2 weeks.

I could then spend the remaining time waiting for the execs to be ready 'coordinating an emergency governance call to discuss solutions and a plan for subsequent actions, explicitly inviting known stakeholders' as dictated by MIP24c3 [Emergency Response Procedure](https://mips.makerdao.com/mips/details/MIP24#MIP24c3).

This reduces the time that we're signaling to the world that there is a vulnerability in Maker and reduces risk. They mentioned that the exploit can't be used in 'current circumstances' but it's unclear how dynamic those circumstances are and it's possible we could be attacked if we signal we are vulnerable. Technically the vulnerability is already signaled by the forum post so avoiding the poll only reducing the broadcast.

I would verify with Imogen and Geneveive, but I'm assuming that if Fix B goes live the threat becomes slightly more acute, as an attacker could use the fix to discern the nature of the remaining vulnerability and exploit it, so if Fix A is happening it should happen asap. I want to verify this and add it as a response to the forum thread.

For the purpose of this exercise I'll assume they reveal some information that makes me think a poll is a good idea again. The most likely justification being that having a poll open allows more people to have a chance to vote, and then the executive can be a shorter window to execute it quickly when it's ready.

Since the fixes will be ready in 8 hours, I would set the poll to 7 hours as the poll shouldn't slow down the emergency response. I'll still coordinate an emergency governance call to discuss solutions.

I'd work to get the poll live asap, and hopefully be able to delegate to someone on my team to begin reaching out to every known stakeholder. We see that the governance/delegates folder in the community repo has handles for members. We'd spend the rest of the time before the poll ends to reach out to everybody we can and alert them that there is an emergency vote in progress.

### Draft any forum responses required or implied by your course of action.

As Governance Facilitator I am processing a request from Protocol Facilitator Imogen to declare this an Urgent or Emergency situation and will refer to [MIP24 Emergency Response](https://mips.makerdao.com/mips/details/MIP24#MIP24c3) as appropriate.

I'm taking the following actions:

1. Drafting an emergency poll
2. Coordinating an emergency governance call to discuss solutions and a plan for subsequent actions

I have some clarifying questions for Imogen and Geneveive and will ask them publicly to help inform the voters in the poll.

1. MKR holders will want to understand the risk to their funds. Please expand on the statement "Fix A is likely to incur losses to MKR holders of approximately 20 million DAI over two weeks."

   - Would this loss be proportional across all MKR holders according to how much MKR they hold?
   - Would it be represented as a drop in MKR trading price which could be recoverable?

2. Rather than a holding a poll, would it be feasible to put Fix A and Fix B up concurrently as separate executive votes, and let MKR holders decide on Fix A by voting to pass it or not?

3. When will the fixes be ready. You said "very shortly." How long will that be?

A note to the community - please keep public speculation to a minimum as broadcasting this vulnerability increases the likelihood it will be discovered before it is patched.

### Draft any polls required or implied by your course of action.

See accompanying file in PR

### Create a draft PR to this repository containing your response materials.

### Notes

We want to note that we found the [Emergency Response](https://mips.makerdao.com/mips/details/MIP24#MIP24c2) documents to be disappointing in its guideance. One example: it refers to the urgent response procedure outlined in MIP24c4 and then MIP24c4 doesn't outline a procedure. Lots of room for improvement here. We were hoping for a checklist to guide us in an emergency and we ended up spending hours trying to discern what we should do. I guess this exercise prepares us somewhat, and if we get the role we'll want to work with AVCs to improve these docs.
