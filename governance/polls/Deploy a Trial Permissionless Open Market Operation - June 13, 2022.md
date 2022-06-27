---
title: Deploy a Trial Permissionless Open Market Operation - June 13, 2022
summary: Signal your support or opposition to deploying an open market operation for MKR through DssKiln.
discussion_link: https://forum.makerdao.com/t/signal-request-deploy-a-trial-permissionless-open-market-operation-resurrect-the-burn/15381
vote_type: Plurality Voting
categories:
   - High Impact
   - Technical
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-06-13T16:00:00
end_date: 2022-06-16T16:00:00
---
# Poll: Deploy a Trial Permissionless Open Market Operation - June 13, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Maker Community. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, June 13 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes: 
* Deploying a trial of permissionless open market operations on MKR, as detailed in the proposed [MIP74](https://mips.makerdao.com/mips/details/MIP74).
* Implementing the methodology and parameters detailed below, notably resulting in a vesting stream of 3 Million DAI for funding the purchase of MKR:

***Proposed operation parameters and methodology***

* Methodology
  * 3M DAI will be vested from the Surplus Buffer to the deployed contract for 3 months.
  * The Oversight group will consist of Risk CU and Protocol Engineering CU, performance reporting will be conducted no less than on a monthly basis.
* General operation parameters
  * `sell` the token to be deposited into DssKiln and sold - [[DAI](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f)]
  * `buy` the token to be bought in exchange for the sold token - [[MKR](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2)]
  * `hop` duration specified in seconds. It represents a minimum number of seconds that must pass before the `lot` can be sold - [38880 seconds or 10.8 hours]
  * `lot` the maximum quantity of tokens to be sold per `hop` - [30k DAI]
* Specific operation parameters
  * To be published by Risk CU and Protocol Engineering CU once the code required is fully developed and all operation-specific parameters are defined.

Please review the discussion [thread](https://forum.makerdao.com/t/signal-request-deploy-a-trial-permissionless-open-market-operation-resurrect-the-burn/15381) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* This change will be included in an upcoming Executive Vote as the Protocol Engineering Core Unit's schedule allows, following an external audit. 
* It is expected that this Executive Vote will take place within 30 days of the completion of the audit, absent external factors.
* If the Executive Vote passes, then these changes will become active in the Maker Protocol after the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
