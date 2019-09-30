---
title: Ratify the Interim Oracle Team Mandate
summary: If this mandate is accepted by the community, it will signal its support for the new Oracle Team Role, Niklas Kunkel as the first Interim Oracle Team, and signals support for the general scope of the initiatives outlined in the proposal.
discussion_link: https://forum.makerdao.com/t/mandate-oracle-teams/443
poll_rules: The voter may select to vote for one of the poll options or they may elect to abstain from the poll entirely
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Ratify the Interim Oracle Team Mandate

## Introduction

The Maker Foundation is proposing a new role, the Oracle Team, which is responsible for the technical development and administration of the Oracles infrastructure. This role will follow the same 'interim' model shared by other foundation teams and is designed to, eventually, be entirely community-driven.

As this document represents a formalization of the role he already occupies on behalf of the community, the Foundation is proposing that Niklas Kunkel, Head of Backend Services, occupy the Oracle Team role in an interim capacity.

**After a period of two weeks (set aside for debate and iteration on this framework) the community will have the opportunity to formally choose to accept or reject the proposal in a governance poll.**

**Acceptance of the proposal will signal the ratification of the new role and the outlined responsibilities, as well as the person chosen to exercise its mandate.**

## The Need for an Oracle Team

Oracles are a critical component of the Maker Protocol. They provide pricing data that determines the amount of Dai that can be drawn against a collateral asset, as well as when an outstanding position is in need of liquidation. Oracles are a live, dynamic infrastructure that presents a unique set of challenges. The Oracle infrastructure needs to be constantly maintained and updated to fix security vulnerabilities. Additional work needs to be done to optimize inefficiencies, support new asset types, support new price sources, incorporate emerging technologies, improve monitoring tools, increase decentralization, increase resilience, and decrease costs. Due to the broad scope of MKR governance’s other responsibilities and the constant attention required by Oracles, the MKR governance community needs a delegated party to handle these responsibilities on their behalf. A subject matter expert in a facilitator-like role is needed to aid the MKR governance community in their decision-making with respect to Oracles and to then implement those solutions.

## Defining the Role & Responsibilities

Like the other major governance-related roles, such as the Interim Risk Team and the Interim Governance Facilitator, the Oracle Team is empowered by the community to perform tasks on behalf of the community. However, the Oracle Team does not have the power to make unilateral decisions. Ultimately, major decisions are crafted into proposals requiring ratification by MKR Governance.

### Oracle Liaison to MKR Governance

The Oracle Team serves as the intermediary between the MKR governance community and the Oracle ecosystem. The Oracle Team must attend the Governance calls and give regular updates with respect to Oracles as well as bring up relevant items for discussion to the community.

### Oracle Liaison to Partners & Customers

The Oracle Team is authorized to act as a point of contact for partners and customers to coordinate initial discussions and programs. This allows the MKR governance community to leverage the networks and relationships of the Oracle Team. The Oracle Team must have the deep technical knowledge of the Oracle stack required to guide partners and customers through the services offered and assist with integration planning. The Oracle Team is permitted to discuss sensitive topics with partners that are not appropriate in the public domain such as when a partner requires an NDA or is pursuing a private pilot. An example of this is the Oracle Team approaching and creating a preliminary agreement with the first wave of DeFi Feed partners (Set, dYdX, Gnosis, and 0x), prior to the proposal being released to the community for endorsement. The intention here is not to sidestep MKR governance, but rather to have it act as a backstop through the proposal process. A good analogy of this is the United State where the executive branch has the ability to negotiate treaties, but they must be approved by the Senate. Ultimately, any substantive changes to the Oracle infrastructure or agreement to offer Oracle price services must be crafted into a proposal and presented to the MKR governance community for subsequent review and ratification.

### Iterate and improve upon the Oracle Governance Framework

The Oracle Governance Framework (“OGF”) serves as the blueprint for the governance processes surrounding the administration of Oracles. As governance is still in its infancy, the OGF will be iterated and improved upon over time. Processes that are found to be lacking should be revamped. New processes to deal with unforeseen circumstances should be appended. All changes must be approved by the MKR governance community. It is the responsibility of the Oracle Team to work with the community to nurture this evolution.

### Iterate and improve upon the Oracle Team Mandate

Much like the OGF, the Oracle Team Mandate (“OTM”) is a live document meant to be iterated on over time. New circumstances may arise that require the Oracle Team to take on new responsibilities not described in the OTM. Existing responsibilities may be removed or delegated to newly created roles. In such cases, changes to the OTM must be crafted into a proposal and ratified by the MKR governance community.

### Research and Development

The Oracle infrastructure will need to be continuously updated and maintained to keep up with emerging technologies, security best-practices, new data types, new asset types, and general improvements to the protocol. It is the responsibility of the Oracle Team to conduct research, plan features, and implement deliverables.

### Communicate and Schedule the Roadmap

A roadmap detailing technical development and product development goals needs to be presented to the community by the Oracle Team and approved by MKR governance. Approval of the roadmap indirectly signals approval for all items contained within the roadmap. Progress of items on the roadmap will be presented by the Oracle Team on the governance calls.

### Administrate Oracle Infrastructure

One of the major responsibilities of the Oracle Team is to manage the Oracle operations and infrastructure. These administrative duties include but are not limited to:

- deploy Oracle smart contracts when upgrades are necessary
- deploy Oracle smart contracts when new assets are added
- assist Feeds to deploy their clients
- assist Feeds to upgrade their clients
- notify Feeds to upgrade their clients
- notify Feeds when they go offline
- notify Feeds if they appear to be compromised
- distribute the Feed Stipend (temporary until governance takes over paying Feeds)
- create best practices for security, fail-over mechanisms, monitoring.

### Coordinate with other Ratified Teams

The Oracle Team will need to work closely with other ratified teams to coordinate cross-disciplinary collaboration. For example, the Oracle Team will have to work closely with Risk Teams for evaluating asset price sources, asset price models, and coming up with an appropriate oracle risk-compensation model.

### Integrate New Asset Price Sources

As new prices sources emerge, they will need to be evaluated by the Risk Team(s) and integrated into the Oracle infrastructure. This could be from new exchanges entering the ecosystem, an asset getting listed on an exchange, or from new exotic asset classes having unique methods for polling their price. It is the responsibility of the Oracle Team to implement the solutions recommended by the Risk Team(s).

This could range from new exchanges entering the ecosystem, assets getting listed on new exchanges, to new asset classes having unique avenues for sourcing their prices.

### Create Asset Price Model

The Oracle Team will work closely with the Risk Team(s) to research and develop models to consume sourced pricing data to calculate canonical asset prices. This might include filtering out outliers, weighting sources by volume, weighting Feeds by reputation, time-segmentation, and other methods not listed here. These models would need to be approved by MKR governance before being instantiated.

## Create and Maintain a Sustainable Feed Incentives Model

It is imperative that the Oracles are fundamentally decentralized as they are a core module of the Maker Protocol. This ultimately means they are controlled through distributed governance and architected with a balanced incentive system to make them resilient and self-sustainable.

Currently, the set of incentives is skewed. Feeds are compensated for the valuable service they provide, to cover their infrastructure costs, and to discourage malicious behavior. As the Maker Protocol scales the incentives for bad behavior will continue to grow, and it will be necessary to increase compensation on a risk-adjusted basis. Technology improvements such as Feed staking, optimized price models, and the Oracle Security Module can help keep costs in check but are only one piece of the puzzle.

The second piece of the puzzle is to monetize the Oracle service by selling it to external customers through a whitelisting mechanism. In this manner, MKR governance can recoup Feed compensation costs or, at the very least, subsidize those costs. It is the responsibility of the Oracle Team to develop technology and monetization models which help reduce net expenditures for MKR token holders.

### Create a Product Strategy

With Oracles becoming monetized, there needs to be a clear product strategy on how best to scale the system to reduce risk, reduce costs, and acquire customers.

### Management of the Official Oracle Communications Channels

The Oracle Team is responsible for acting as the intermediary between the Feeds and governance. This includes the administration of a private pseudonymous chat containing only Feeds.

Communication on this chat by the Oracle Team is multi-faceted encompassing many of the responsibilities listed in the "Administrate Oracle Infrastructure" section including:

- assist Feeds to deploy their clients
- assist Feeds to upgrade their clients
- notify Feeds to upgrade their clients
- notify Feeds when they go offline
- notify Feeds if they appear to be compromised
- notify Feeds of an emergency situation
- facilitate knowledge sharing of best-practices

### Create Emergency Processes

Establish processes to follow during an emergency. Example of emergency processes include what to do during an Oracle attack. Another is the proper procedure to follow if a token forks or is upgraded. The Oracle Team is responsible for working closely with other MKR governance teams to come up with formal synergistic emergency plans, but their scope is limited to the Oracles themselves.

## Onboarding/Offboarding Oracle Teams

This will be specified in the Oracle Governance Framework.

## Compensation

As Niklas Kunkel is already being compensated by the Maker Foundation, there is currently no formal compensation tied to the Oracle Team role. In the future, governance may want to revise this mandate to append compensation in order to attract and incentivize external Oracle Teams.

## Conclusion

If this mandate is accepted by the community, it will signal its support for the new Oracle Team Role and Niklas Kunkel as the first Oracle Team. This mandate should be considered a living document and will be updated based on community feedback.
