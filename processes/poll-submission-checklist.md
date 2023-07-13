
# Poll Submission

## Setup

Complete before the first poll submission.

**Required**
- [ ] Are you whitelisted to submit polls to the MakerDAO voting portal?
- [ ] Do you have write access to the [makerdao community](https://github.com/makerdao/community) repository?

**Recommended**
- [ ] Do you have write access to the poll tag sheet [here](https://docs.google.com/spreadsheets/d/1cgjUsVDyDtz8XoxEVQanTc0NZ84CMBZ4sfX_smJl2Kg/edit)? 
- [ ] Do you have write access to the Governance Tracker sheet [here](https://docs.google.com/spreadsheets/d/1LWNlv6hr8oXebk8rvXZBPRVDjN-3OrzI0IgLwBVk0vM/edit#gid=0)?

## Submission

Complete once for each poll.

- [ ] Is this poll expected next week?
- [ ] Paste master-branch poll raw URL into [submission sheet](https://vote.makerdao.com/polling/create)
- [ ] Check that all items (bar category) have populated.
- [ ] Check vote options are correct.
- [ ] Confirm input format is correct.
- [ ] Confirm victory conditions are correct.
- [ ] Confirm victory conditions match the poll outcome section.
- [ ] Confirm results display is correct.
- [ ] Confirm start time
- [ ] Confirm end time
- [ ] Confirm the duration
- [ ] Use Create Poll button and submit the TX. Be generous with gas prices.
- [ ] Note down pollID from transaction data.

## Tagging

Complete once.

- [ ] Have all polls been submitted?
- [ ] Insert pollID and title for each poll on [tagging sheet](https://docs.google.com/spreadsheets/d/1cgjUsVDyDtz8XoxEVQanTc0NZ84CMBZ4sfX_smJl2Kg/edit#gid=22794715).
- [ ] Enable appropriate tags for each poll using the columns in the sheet.
- [ ] Export Tags using the top ribbon menu button marked 'MakerDAO Governance -> Export Tags'
- [ ] Copy exported JSON over [poll-tags.json](https://github.com/makerdao/community/blob/master/governance/polls/meta/poll-tags.json) file in community repo.
- [ ] Create a PR for new poll-tags.json, and ensure that the only changes present are the ones that you intended.
- [ ] Merge poll tags PR.
- [ ] Merge automatically generated PR in the same repo.


## Once Polls Are Live

Complete once.

- [ ] Check that all the polls you expected to be active are active.
- [ ] Communicate weekly polls to the #governance channel in the official MakerDAO discord.
- [ ] Update [Governance Tracker sheet](https://docs.google.com/spreadsheets/d/1LWNlv6hr8oXebk8rvXZBPRVDjN-3OrzI0IgLwBVk0vM/edit#gid=0) with new live polls

