# VoteWizard Interpretation Exericse #1

## Question #1: Do you think there is any ambiguity in these clauses? If so, where, and how would you rewrite the clauses to remove the ambiguity?

### There are a few potential ambiguities

- Clause 12.1 and sub-clause 12.1.2 aren't really clear about how they connect. Clause 12.1 talks about the Governance Facilitators using their judgement mainly when there are unexpected problems or mistakes in the Atlas and the Scope Artifacts. But then clause 12.1.2 says that Governance Facilitators can suggest changes whenever they want.

- "WMaker" is misspelled in 12.1.1, but it's right in the original MIP113, so I'll ignore this.

- Finally, 12.1.2 needs some work. It kind of gives the governance facilitator too much power to change the Scope Artifacts however they want. It doesn't really put any limits on it, and they could end up going around MIP102.

### Rewritten clauses

12.1: Bootstrapping Governance Votes
Governance Facilitators are empowered to exercise broad judgment in interpreting and editing the Atlas and the Scope Artifacts. This authority should primarily be used to address unintended consequences, mistakes within these documents, or when the change cannot be implemented via the traditional governance process without leading to substantial adverse implications.

12.1.1: In case of unintended consequences or mistakes in the Atlas and Scope Artifacts causing Maker Governance to function incorrectly, the Governance Facilitators can at any time run a Governance Poll to enable MKR holders to make a decision that will alleviate and resolve unintended consequences or mistakes.

12.1.2: Governance Facilitators may propose edits to any content of a Scope Artifact through a Governance Poll at any time. This should only be exercised when they believe the proposed change, if implemented via the traditional MIP102 process, could lead to significant adverse consequences.

## Question #2: How would you interpret these clauses as-they-are in the following situations? Would you allow votes to take place? What would be the contents of these votes?

### Situation A:

Looking at the issue, it's clear that we're dealing with a simple typo. This kind of thing fits right into the 'unintended consequences or mistakes' category as outlined in clauses 12.1 and 12.1.1. So, it seems like a good solution would be for the Governance Facilitators to run a Governance Poll. This would let us fix the typo and make sure the Aligned Delegates get paid what they're due.

I'd use the Spirit of the Rule interpretation, quoting the Atlas: "A 'spirit of the rule' interpretation seeks to comprehend the rule's true purpose and how it contributes to universal alignment, while remaining bound by the letter of the rule. When faced with inconsistencies or errors in the rule's language, this approach appeals to a pre-established method for disabling, disregarding or substituting the rule as needed to prevent outcomes that contradict its intended objective and the greater purpose it serves".

I'd write a forum post to inform the community about the issue. In the post, I'd also mention my plan to use clause 12.1.1 to address the problem via a Governance Poll. I'd assure the Aligned Delegates that they will receive their due compensation. The contents of the Poll would be the correction of the typo and the immediate effect it has on the compensation of the Aligned Delegates.

### Situation B:

In this situation, I'd consider whether the large token holder has contributed to the scope in the past to ensure that they know what they are doing. Before taking any decision, I'd wait to see what the stability facilitator and the stability advisory council have to say. If they agree with the large token holder, it's determined that the proposed changes are indeed crucial and the delay in the monthly governance cycle would cause significant value loss to the DAO, then clause 12.1.2 could be invoked.

I'd write a forum post letting the community know that I would go ahead and propose a governance poll to accelerate the addition of the new logic to the stability scope. The contents of the Poll would be the approval or disapproval of the new logic for the stability scope.

If there is no feedback from the stability facilitator or  stability advisory council, I'd write a response in the forum asking for this feedback. If the feedback is not positive, I wouldn't move the change to a poll.

### Situation C:

In this situation, given the anonymous participant's lack of established reputation, I'd prefer to wait for more experienced members of the community to give their feedback. However, if no experienced participants engage and there is no feedback from the stability facilitator or the stability advisory council, I would likely disregard the post.

### Situation D:

This situation is quite complex and largely depends on why the pay was reduced. Let's assume it happened because of a decrease in the price of MKR (or NewGovToken). In such a case, I don't need to invoke the clauses mentioned above. Instead, I could adjust the number of AD slots according to [MIP113 6.3](https://mips.makerdao.com/mips/details/MIP113#6-3-prime-delegate-and-reserve-delegate-slots) with a weekly Poll. Reducing the number of ADs would increase the pay per delegate, but this change could take a month to become effective due to [MIP101 2-6-3-1-1](https://mips.makerdao.com/mips/details/MIP101#2-6-3-1-1) (I don't think this clause applies if all the delegates stepped down).

If it appears that the problem can't be solved in this way, especially considering that all Aligned Delegates have stepped down, I might have to invoke clause 12.1.2 and propose a governance Poll. The poll could suggest increasing the pay and changing the payment token to Dai (or newStable) until the issue is resolved. This situation could also be classified as 'Urgent' as per MIP24 since the delegates are a key part of the governance.

Before making a decision, I'd write a forum post to inform the delegates about my intention to address the problem so they can join again and then I'll make another post detailing the solution and that I'm creating a governance poll to approve it.

