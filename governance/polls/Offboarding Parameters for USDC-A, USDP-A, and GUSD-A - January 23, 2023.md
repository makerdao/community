---
title: Offboarding Parameters for USDC-A, USDP-A, and GUSD-A - January 23, 2023
summary: Signal your support or opposition for offboarding legacy stablecoin vaults (USDC-A, USDP-A, and GUSD-A). 
discussion_link: https://forum.makerdao.com/t/usdc-a-usdp-a-gusd-a-proposed-offboarding-parameters/19474
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2023-01-23T16:00:00
end_date: 2023-01-26T16:00:00
---
# Poll: Offboarding Parameters for USDC-A, USDP-A, and GUSD-A - January 23, 2023

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the [Risk Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP35) and the MakerDAO Community. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, January 23 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the implementation of the following risk parameters for offboarding USDC-A, USDP-A, and GUSD-A.

**Proposed Offboarding Parameters**

* [Maximum Debt Ceiling (`line`)](https://manual.makerdao.com/module-index/module-dciam): 0.
* [Liquidation Penalty (`chop`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty): 0%.
* [Flat Kick Incentive (`tip`)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to 0.
* [Liquidation Ratio (`mat`)](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio) to 1500%.

Please review the discussion [thread](https://forum.makerdao.com/t/usdc-a-usdp-a-gusd-a-proposed-offboarding-parameters/19474) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The offboarding process for this vault will begin, as defined by [MIP62 - Collateral Offboarding Process](https://mips.makerdao.com/mips/details/MIP62).
* Offboarding items will be included in the soonest eligible executive vote, as the Protocol Engineering Core Unit's schedule allows.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
