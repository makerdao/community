---
title: Template - [Executive Vote] Onboarding Real World Asset Vaults - July 29, 2022
summary: Onboards Real World Asset Vaults for Huntingdon Valley Bank (HVBank) and Societe Generale – Forge (OFH).
date: 2022-07-29T00:00:00.000Z
address: "0x67A45c2163798d47c32Fc2bcD5Dc0ABc6dCDFe78"

---
# [Executive Proposal] Onboarding Real World Asset Vaults - July 29, 2022

The Governance Facilitator(s) and the Protocol Engineering Core Unit have placed an executive proposal into the voting system. MKR Holders should vote for this proposal if they support the following alterations to the Maker Protocol.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

---

## Executive Summary

If this executive proposal passes, the following **additions** will be made to the Maker Protocol:
- Societe Generale – Forge (OFH) will be onboarded as a new vault type, RWA-008, as detailed below. 
- Huntingdon Valley Bank (HVBank) will be onboarded as a new vault type, RWA-009, as detailed below. 


If this executive proposal passes, the following **changes** will occur within the Maker Protocol:
- [Amendments to the letter agreements](https://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264/8) between RWA Foundation and various parties for the RWA-009 (HVBank) legal construction. 
- 25 million DAI will be drawn down in the RWA-009 (HVBank) vault.

**Voting for this executive proposal will place your MKR in support of the changes and additions outlined above.**

Unless otherwise noted, the changes and additions listed above are subject to the [GSM Pause Delay](https://manual.makerdao.com/parameter-index/core/param-gsm-pause-delay). This means that if this executive proposal passes, the changes and additions listed above will only become active in the Maker Protocol after the GSM Pause Delay has expired. The GSM Pause Delay is currently set to **48 hours**.

This executive proposal includes an office-hours modifier that means that it **can only be executed between 14:00 and 21:00 UTC, Monday - Friday**. This is to ensure that at least some auction keepers are available to react to unforeseen issues on new collateral types.

If this executive proposal does not pass within 30 days, then it will expire and can no longer have any effect on the Maker Protocol.

---

## Proposal Details

### RWA-008 Societe Generale – Forge (OFH) Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmajCtnG#vote-breakdown), RWA-008 Societe Generale – Forge (OFH) will be onboarded with the following parameters, if this executive proposal passes.

#### Collateral Parameters

* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): 0.05%
* [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): 30 million DAI
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): 100%
* Debt write-off timelock (tau): 0
* Liquidation Process: See [MIP21](https://mips.makerdao.com/mips/details/MIP21) for details.

#### Relevant Smart Contract Information

* **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`. 
* **RWA_TOKEN_FAB**: `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
* **SYMBOL:** `RWA008`.
* **NAME:** `RWA-008`.
* **ILK:** `RWA008-A`.
* **RWA008:** `0xb9737098b50d7c536b6416dAeB32879444F59fCA`.
* **MCD_JOIN_RWA008_A**: `0x56eDD5067d89D4E65Bf956c49eAF054e6Ff0b262`.
* **RWA008_A_URN:** `0x495215cabc630830071F80263a908E8826a66121`.
* **RWA008_A_URN_CLOSE_HELPER** `0xCfc4043675EE82EEAe63C90D6eb3aB2dcf833431`.
* **RWA008_A_INPUT_CONDUIT:** `0xa397a23dDA051186F202C67148c90683c413383C`.
* **RWA008_A_OUTPUT_CONDUIT:** `0x21CF5Ad1311788D762f9035829f81B9f54610F0C`.
* **RWA008_A_OPERATOR:** `0x03f1A14A5b31e2f1751b6db368451dFCEA5A0439`.
* **RWA008_A_MATE:** `0xb9444802F0831A3EB9f90E24EFe5FfA20138d684`.

*Please note that **RWA008_A_OPERATOR** represents Societe Generale – Forge and **RWA008_A_MATE** represents DIIS group.*

#### Authorizations 

RWA008_A_Operator will not be authorized in the vault if this spell is passed. A future executive vote will authorize the address once it is confirmed by the operators.

#### Additional Information

Please review the following forum threads containing information about RWA-008 (OFH) to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/security-tokens-refinancing-mip6-application-for-ofh-tokens/10605)
* [Real-World Finance Core Unit Risk Evaluation](https://forum.makerdao.com/t/sg-forge-socgen-risk-assessment/15638)
* [Additional Risk Assessment - LOVE](https://forum.makerdao.com/t/sg-forge-socgen-risk-assessment/15638/14)
* [Collateral Engineering Services Core Unit Evaluation](https://forum.makerdao.com/t/rwa008-ofh-mip21-token-ces-domain-team-assessment/15239)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/rwa-008-ofh-collateral-onboarding-oracle-assessment/15268)
* [SocGen Transaction Documentation](https://api.ipfsbrowser.com/ipfs/get.php?hash=QmW1UBVjPtHDo42oNzG2vspwggyeBfENS1xsPtpKLyDBvb)
* [Delegated Committee Proposal](https://forum.makerdao.com/t/real-world-finance-decision-making-and-delegated-committee-proposal/15276)


### RWA-009 Huntingdon Valley Bank (HVBank) Onboarding

As per [this poll](https://vote.makerdao.com/polling/QmQMDasC#vote-breakdown), RWA-009 Huntingdon Valley Bank (HVBank) will be onboarded with the following parameters, if this executive proposal passes. Note that the approval of this executive will result in an immediate **25 million DAI** draw down.
 
#### Collateral Parameters

* [Stability Fee](https://manual.makerdao.com/parameter-index/vault-risk/param-stability-fee): 0.0%
* [Debt Ceiling](https://manual.makerdao.com/parameter-index/vault-risk/param-debt-ceiling): 100 million DAI
* [Liquidation Ratio](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-ratio): 100%
* Debt write-off timelock (tau): 0
* Liquidation Process: See [MIP21](https://mips.makerdao.com/mips/details/MIP21) for details.

#### Relevant Smart Contract Information

* **MIP21_LIQUIDATION_ORACLE:** `0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30`.
* **RWA_TOKEN_FAB:** `0x2B3a4c18705e99bC29b22222dA7E10b643658552`.
* **SYMBOL:** `RWA009`.
* **NAME:** `RWA-009`.
* **ILK:** `RWA009-A`.
* **RWA009:** `0x8b9734bbaA628bFC0c9f323ba08Ed184e5b88Da2`.
* **MCD_JOIN_RWA009_A:** `0xEe0FC514280f09083a32AE906cCbD2FAc4c680FA`.
* **RWA009_A_URN:** `0x1818EE501cd28e01E058E7C283E178E9e04a1e79`.
* **RWA009_A_JAR:** `0x6C6d4Be2223B5d202263515351034861dD9aFdb6`.
* **RWA009_A_OUTPUT_CONDUIT:** `0x508D982e13263Fc8e1b5A4E6bf59b335202e36b4`.

*Please note that:*
- **RWA009_A_OUTPUT_CONDUIT** represents Genesis trading address (receivers of DAI who will swap to fiat), and was confirmed [here](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861/10).
- **RWA009_A_JAR** represents the address where Genesis trading will send DAI for monthly fee repayments as instructed by RWA Foundation (pursuant to the agreement with Genesis).
- **RWA009_A_URN** represents the vault where DAI is drawn down during Spells and where principal is repaid at the end of this deal.

#### Additional Information

Please review the following forum threads containing information about RWA-009 (HVBank) to inform your position before voting.
* [Initial Collateral Application](https://forum.makerdao.com/t/mip6-huntingdon-valley-bank-loan-syndication-collateral-onboarding-application/14219)
* [Real-World Finance Core Unit Risk Evaluation](https://forum.makerdao.com/t/huntingdon-valley-bank-hvb-rwa-collateral-onboarding-risk-assessment/15828/1)
* [Additional Risk Assessment - LOVE](https://forum.makerdao.com/t/huntingdon-valley-bank-hvb-additional-risk-assessment-love-cu-in-incubation/15886)
* [Collateral Engineering Services Core Unit Evaluation](https://forum.makerdao.com/t/rwa009-hvbank-mip21-token-ces-domain-team-assessment/15861)
* [Oracles Core Unit Evaluation](https://forum.makerdao.com/t/rwa009-huntingdon-valley-bank-collateral-onboarding-oracle-assessment/16069/1)
* [HVB Transaction Documentation](https://forum.makerdao.com/t/huntingdon-valley-bank-transaction-documents-on-permaweb/16264)
* [RWA Foundation: HVB Disclosure](https://forum.makerdao.com/t/rwa-foundation-hvb-disclosure/16267)
* [Delegated Committee Proposal](https://forum.makerdao.com/t/real-world-finance-decision-making-and-delegated-committee-proposal/15276)

### Letter Agreement Amendment - RWA-009 (HVBank)

If this executive proposal is passed:

The MKR token holders

Approve an amendment of the letter agreement between RWA Foundation and Genesis Global Trading, Inc. to:

     (1) Change the wallet address in paragraph 1a

     From 0xde70058b9c22012e7e4c53ac3f117864ce8c59ca

     To 0x1818EE501cd28e01E058E7C283E178E9e04a1e79

     (2) Change the wallet address in paragraph 1b 

     From 0xb67c844c8b2b78125978decf33a48d0175486322

     To 0x6C6d4Be2223B5d202263515351034861dD9aFdb6

     (3) Change the wallet address in paragraph 2 

     From 0xde70058b9c22012e7e4c53ac3f117864ce8c59ca

     To 0x1818EE501cd28e01E058E7C283E178E9e04a1e79`

Approve an amendment to Exhibit C of the letter agreement between RWA Foundation, RWA Master Participation Trust and Ankura Trust Company, LLC to:

     (1) Change the wallet address in the 7th bullet point 

     From 0xde70058b9c22012e7e4c53ac3f117864ce8c59ca

     To 0x1818EE501cd28e01E058E7C283E178E9e04a1e79

     (2) Update the screen shot of the RWA Foundation portal at Genesis Global Trading Inc. in the 3rd bullet point by changing the address

     From 0xb67c844c8b2b78125978decf33a48d0175486322

     To 0x6C6d4Be2223B5d202263515351034861dD9aFdb6

Approve an amendment to the Deed Poll of RWA Foundation to

     (1) Change the wallet address in clause 5.2

     From 0xb67c844c8b2b78125978decf33a48d0175486322

     To 0x6C6d4Be2223B5d202263515351034861dD9aFdb6

     (2) Change the wallet address in clause 5.3

     From 0xde70058b9c22012e7e4c53ac3f117864ce8c59ca

     To 0x1818EE501cd28e01E058E7C283E178E9e04a1e79

And authorize:

     (1) The Director of RWA Foundation to take such steps as are necessary to give effect to the amendments above, including (a) notifying Wilmington Savings Fund Society, FSB (as verification agent and trustee) of the amendments, (b) for and on behalf of RWA Foundation, executing any amendments and issuing any instructions to Genesis Global Trading Inc. or Ankura Trust Company LLC and (c) as trust sponsor, for and on behalf of RWA Master Participation Trust, executing an amendment to Exhibit C of the letter agreement between RWA Foundation, RWA Master Participation Trust and Ankura Trust Company, LLC.

     (2) Ankura Trust Company, LLC to update the RWA Foundation portal with Genesis Global Trading Inc. to reflect the above amendments and to accept the amendment to Exhibit C of the letter agreement between RWA Foundation, RWA Master Participation Trust and Ankura Trust Company, LLC.

     (3) Genesis Global Trading Inc. to accept the amendments to the letter agreement between RWA Foundation and Genesis Global Trading, Inc.

     (4) Wilmington Savings Fund Society, FSB to accept the amendments described above as applicable to RWA Master Participation Trust.

## Review

Community debate on these topics can be found on the MakerDAO [Governance forum](https://forum.makerdao.com/). Please review any linked threads to inform your position before voting.

Additionally, these changes may have been discussed further in recent Governance calls. [Video](https://www.youtube.com/playlist?list=PLLzkWCj8ywWNq5-90-Id6VPSsrk4OWVan) for these calls is available to review.

---

## Resources

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
