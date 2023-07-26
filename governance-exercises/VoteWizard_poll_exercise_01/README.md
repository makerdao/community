# VoteWizard Polling Exericse #1

## Assignment #1: Determine what course of action you would take as a Governance Facilitator and communicate it clearly

### The course of action I would take as a Governance Facilitator:

1. **Review proposal:** Initially, I would review Alice's proposal thoroughly to understand the implications and nuances.

2. **Communicate questions or concerns:** I would then engage in a dialogue with Alice and Faraz to clarify any outstanding questions or details that might be ambiguous. However, in this case, everything was clear with the exeption of the term "Debt Increase Cooldown" that I assume is referring to "Ceiling Increase Cooldown". It's also noteworthy that the term 'DAI deposit rate' appears to align closely with the 'Supply Rate' concept from the DAI Interest Rate Strategy smart contract (DaiJugInterestRateStrategy.sol). For the purposes of this exercise, this assumption will be upheld.

3. **Consideration of Governance Cycle (MIP16 vs MIP51):** As part of this process, I would evaluate whether the proposal should be integrated into the Weekly Governance Cycle (as per MIP16) or the Monthly Governance Cycle (as per MIP51). Given the nature and urgency of this particular proposal, I would opt for the inclusion in the Weekly Governance Cycle beginning on Monday, July 24th. This decision ensures timely action while recognizing that not every decision requires awaiting the Monthly Governance Cycle, which is primarily used for introducing MIP subproposals into the Maker Protocol.

4. **Poll Template Identification:** Next, I would identify the most suitable template to construct this poll. In this situation, there are two relevant templates: 'Adjust $protocol_name D3M Parameters - $date_MONTH_DD,_YYYY.md' and 'Onboard $token to Spark Protocol - $date_MONTH_DD,_YYYY.md'.

5. **Poll Separation Decision:** While combining both templates into a singular poll might seem efficient, I argue that the onboarding of a new token to the Spark Protocol and the adjustment of Spark Protocol parameters are distinct actions. It's crucial to provide voters the opportunity to express their opinions on these separate matters.

	- As a result, I propose two separate polls:
		- Poll 1: Adjust Spork Protocol D3M Parameters - July 24, 2023
			- Increase of the Spork D3M Debt Ceiling from 50 million to 100 million DAI.
			- Increase of the Spork D3M Target Available Debt from 5 million to 15 million.
			- Adjust Spork Protocol DAI Interest Rate Strategy to increase the DAI deposit rate from 2% to 2.5%.
			- Increase the Ceiling Increase Cooldown from 28,800 seconds (8 hours) to 86,400 seconds (24 hours)
		- Poll 2: Onboard ABC to Spork Protocol - July 24, 2023
			- Onboard the ABC to Spork with the parameters below:
			- [onboarding parameters for the token ABC]

6. **Forum Communication:**  Afterward, I would publish a forum post detailing the decision to submit these two independent polls. This action will ensure transparency and keep the community informed.

7. **Draft the Governance Polls:** The next step would be to draft the governance polls. The poll would include a brief overview of the proposal, clear voting options, and links to relevant resources for voters to make an informed decision. It's important to make sure that the text is impartial and without bias towards specific or general outcomes.

8. **Check Grammar:** I would run the text through Grammarly to assure there are no spelling errors.

9. **Review the Poll:** I would review the draft poll against the "poll creation checklist" to ensure it is in accordance with the guidelines and does not contain any errors or ambiguities. Then, I would create a PR to push changes to the main branch repo.

10. **Communicate with Involved Parties:** I would share the poll outcome text with relevant parties before submitting it.

11. **Poll Submission and Tagging:** I would follow the "poll submission checklist" to submit the finalized polls. While choosing the tags, I would evaluate the poll's impact using [this guide](https://manual.makerdao.com/governance/off-chain/impact-estimations), and then proceed to select other relevant tags.

	- Given the proposed 50 million DAI increase to the Spork Protocol D3M Debt Ceiling and the onboarding of the ABC token (which inherently carries risk even if it had been onboarded to Maker core in the past), both polls would be tagged as high-impact.

	- In this case the tags would be the following:
		- Poll 1: high-impact, risk-parameter, d3m, spork
		- Poll 2: high-impact, collateral-onboard, risk-parameter, spork

12. **Communicate the Polls:** After verifying the active status of all expected polls, I would communicate their availability on the #governance channel in the official MakerDAO discord. This action will promote widespread awareness among DAO members. Lastly, I would update the Governance Tracker sheet with the newly live polls.

13. **Monitor and Address Queries:** Throughout the polling duration, I would actively monitor community engagement, answer questions, and address any concerns or confusion about the poll.

## Assignment #2: Draft any forum responses required or implied by your course of action

### The forum response I would make is:

Hello, everyone!

I've reviewed the proposal and am preparing to move forward with it. However, I wanted to share some updates regarding how we're going to handle this in the upcoming governance polls.

Given the distinct nature of some parts of the proposal, I've made the decision to split the proposal into two separate polls. This allows the voters to consider and vote on each matter independently.

These two polls will be presented during the next weekly governance cycle on Monday, July 24:

1. Adjust Spork Protocol D3M Parameters:

   - Increase of the Spork D3M Debt Ceiling from 50 million to 100 million DAI.
   - Increase of the Spork D3M Target Available Debt from 5 million to 15 million.
   - Increase the Ceiling Increase Cooldown from 28,800 seconds (8 hours) to 86,400 seconds (24 hours)
   - Adjust Spork Protocol DAI Interest Rate Strategy to increase the DAI deposit rate from 2% to 2.5%.
   
2. Onboard ABC to Spork Protocol:

   - Onboard the ABC to Spork with the parameters below:
     - [onboarding parameters for the token ABC]

Thanks!


## Assignment #3: Draft any polls required or implied by your course of action

### The polls drafts can be found in the following files:

Adjust Spork D3M Parameters and DAI Interest Rate Strategy - July 24, 2023.md
Onboard ABC to Spark Protocol - July 24, 2023.md