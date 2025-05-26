
# Executive Creation

## Creation

- [ ] Sync Community Git
- [ ] Ensure you are working from the latest master branch
- [ ] Read Associated [Executive Contents sheet](https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?pli=1#gid=1593813984)
- [ ] Copy the executive template
- [ ] Update filename
- [ ] Update dates - exact time is not required and should be left at midnight.

- [ ] Ensure the title refers to the most impactful/important actions included in the proposal.
- [ ] Ensure that the summary refers to all actions included in the proposal.

- [ ] Ensure that the publisher (entity publishing the executive on the voting portal) of the executive is listed in the preamble (at the entity level).
- [ ] Ensure that the writers of the executive code are listed in the preamble (at the entity level).
- [ ] Ensure that the reviewers of the executive code are listed in the preamble (at the entity level).

- [ ] Ensure that the office-hours modifier is mentioned as part of the executive copy, if present in the executive spell code.
- [ ] Ensure that it is clearly stated which items are affected by the GSM Delay.
- [ ] Ensure that the GSM Delay period is clearly communicated.
- [ ] Ensure that the proposal expiry is explicitly noted, including the length of time for which the proposal is valid.

## Items

- [ ] Add each item to the proposal details section
- [ ] Order the items by judged impact/importance. If different from the executive contents, reorder the executive contents sheet so that they match.

- [ ] For each item
	- [ ] Ensure the executive summary contains a high-level overview of every action contained in the proposal.
	- [ ] Ensure that each item or set of items in the executive proposal has a corresponding entry in the proposal details section.
	- [ ] Ensure that each item in the copy contains a link to the reasoning for its inclusion.
	- [ ] Ensure that each item in the copy contains a link to the authorization for its inclusion.
	- [ ] Ensure that each item in the copy contains any links required for voters to determine the context surrounding its inclusion.
	- [ ] Ensure that the framing and tense used for each item is future-conditional. Ie: "IF this executive proposal passes, THEN this action will take place."
	- [ ] Ensure that hyperlinks to documentation and/or context are added to key parameters, terms, and contracts where reasonable and possible.
	- [ ] Ensure that Ethereum and IPFS addresses are hyperlinked such that it is easy to view their details.
	- [ ] Ensure that parties implicated in the proposal outcome related to this item are aware of the wording used.

## Self-Review

- [ ] Do any '$' parameter signifiers remain? (spell address is unknown at this point)
- [ ] Do the executive title, summary, and executive summary accurately reflect executive copy content?
- [ ] Read the executive copy in full, with the above checklists and general readability in mind. Make any required changes.
- [ ] Run the copy through a spelling and grammar checker - do not blindly accept suggested changes.
- [ ] Inform the reviewer that the executive copy is ready to review
- [ ] Commit changes, and create a PR to the Community GitHub repository.

## External Updates

### Atlas Active Element Updates

- [ ] Check if any Atlas active elements will need to be updated if the executive proposal passes.

- [ ] If yes, create a PR to the next-gen-atlas repository and for each item
	- [ ] Ensure that new values are correctly listed in the [Sky Atlas.html](https://github.com/makerdao/next-gen-atlas/blob/main/Sky%20Atlas/Sky%20Atlas.html) document
- [ ] Request review of the PR from the reviewers of the executive proposal copy.

### Standby Spells update

- [ ] Check if any new ilk has been onboarded/offboarded.
- [ ] If yes, create a PR to the dss-emergency-spells repository and for each Standby spell affected
	- [ ] Ensure that new values are correctly listed in the Standby Spells README (https://github.com/makerdao/dss-emergency-spells?tab=readme-ov-file) document.
 - [ ] Request review of the PR from the reviewers of the executive proposal copy.

## Submission

- [ ] Merge approved executive copy PR.
- [ ] Inform technical teams that the copy is ready and provide the link.
- [ ] Once technical teams have provided a spell address, add it to the executive copy.
- [ ] Update the proposals.json to set the active proposal on the portal.
- [ ] Refresh portal cache (DUX/Jetstream can provide password)
- [ ] Inform the community of the new executive proposal.
