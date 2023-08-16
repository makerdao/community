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
