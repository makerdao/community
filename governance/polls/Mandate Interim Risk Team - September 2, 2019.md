---
title: Ratify the Interim Risk Team Mandate
summary: If this mandate is accepted by the community, it will signal support for the Interim Risk Team and for the general scope of the initiatives outlined in the proposal.
discussion_link: https://forum.makerdao.com/t/mandate-risk-teams/282
poll_rules: The voter may select to vote for one of the poll options or they may elect to abstain from the poll entirely
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Ratify the Interim Risk Team Mandate

# Introduction

Risk teams are ecosystem participants responsible for managing the various risks in the Dai Credit System. They are tasked with managing the collateral portfolio and recommending appropriate monetary policy while adhering to the principles of scientific governance. Due to the decentralized nature of MakerDAO, there are a number of considerations the community should discuss surrounding the onboarding and management of risk teams.

The Maker Foundation is proposing an operational framework intended to guide both MKR token holders and risk teams through the governance process. After a period of one week, (set aside for debate and iteration), the community will have the opportunity to formally choose to accept or reject this proposition in a governance poll. Acceptance of the proposal will signal the ratification of this mandate and the associated processes and procedures.

## Examining the Landscape

The need for risk teams is best understood following an analysis of the core components of the Dai Credit System. We begin with a brief recap and the risks contained within.

MakerDAO is an Ethereum-based DAO that operates the Dai Credit System, a permissionless loan facility. The Dai Credit System issues the cryptocurrency Dai, a stablecoin designed to track \$1 USD with low volatility. The core function allows users to self-issue Dai-denominated loans against collateral deposited into smart contract-based escrow. Collateral can be retrieved upon repayment of the outstanding Dai amount plus an associated Stability Fee. This architecture poses two pressing concerns. Where does Dai source its value, and what compels it to remain pegged to USD? The answers to these two questions are the focal points of most risk analysis surrounding Dai. To better understand these risks we briefly explore Maker’s internal mechanics.

Dai stability is dependent on a system of carefully crafted incentives. At the core is the collateral portfolio, a pool of on-chain digital assets that back the Dai supply. While the collateral presents a source of value, additional heuristics are required to maintain a soft peg of \$1. In particular, the Dai Credit System incentivizes arbitrageurs to buy and sell Dai in the open marketplace. This arbitrage is supported by monetary policy adjustments that influence the supply and demand for Dai recursively until Dai has returned back to its target price. Market makers have come to rely on these Stability Fee changes, and as a result supply the necessary liquidity to minimize outsized deviations.

In extreme events, 1 Dai can be redeemed for \$1 worth of collateral through a process known as Emergency Shutdown. However, collateral values can sometimes fluctuate dramatically. If they were to suffer a sharp decline in value, the settlement feature enabled by Emergency Shutdown may not allow for full redemption. As a last line of defense against volatile asset prices, a buffer in the form of MKR tokens exists to soak up undercollateralized Dai. The distributed set of MKR token holders (“MTH”) are ultimately the group motivated to ensure the successful operation of the Dai Credit System.

MKR token holders coordinate themselves using a decentralized governance process through which they evaluate and select appropriate collateral assets. The success of this endeavor is strongly correlated to a proficient risk evaluation of the collateral set. A failure in due diligence or coordination will result in severe losses for both end users of the protocol (in the form of declining Dai price) as well as MTH (in the form of MKR dilution). While the incentives for MTH are clear, executing the plan requires additional work.

## The Need for Risk Teams

There is considerable overhead with respect to quantifying risk in the Dai Credit System and managing it appropriately. It is not practical (nor necessarily advisable) for MTH to directly analyze it themselves. A simple and intuitive solution is to outsource risk specialists who are tasked with evaluation of the risks. While the traditional model of a centralized risk function could operate as a bootstrapping mechanism, we also propose a more robust and decentralized blueprint.

The primary idea is to create the Decentralized Risk Function, a process by which distributed teams of independent risk specialists are incentivized to exercise due diligence on the collateral portfolio and create models for appropriate monetary policy. The decentralized model affords us a near limitless talent pool, blanket coverage, and uninterrupted operation. Additionally, decentralized risk teams are designed to be resistant to capture from biased ecosystem actors; risk teams operate solely for the benefit of MTH.

Through the governance process, the MTH are responsible for managing the operational aspects of Maker risk teams. Here we propose a set of guidelines for MTH through which they may oversee risk teams. Immediately, there are several operational details that need to be addressed:

- What are the types of risk that need to be managed?
- Are there different types of risk teams?
- How does one ‘become’ a risk team?
- How do they create and submit risk models?
- How are they compensated?

## Types of Risk

There are three broad classifications of risk in the Dai Credit System: collateral risk, monetary policy risk, and exogenous risks.

### Collateral Risk

Collateral risk refers to the likelihood of an event where a sudden asset price decline triggers the liquidation of a Collateralized Debt Position (CDP). As mentioned above, the primary assurance for Dai holders is the collateral portfolio. Naturally, a comprehensive understanding of all collateral assets is a prerequisite for proper risk management. Qualitative factors, market liquidity, and recourse methodologies are all in scope and must be carefully analyzed. As a simple example, because illiquid or fundamentally risky assets have a higher predisposition to sudden crashes, a proportionately higher risk premium must be assessed.

### Monetary Policy Risk

Monetary policy presents the second major risk classification, refers to managing the supply and demand for Dai. In spite of the quality of the collateral evaluation, the Dai price is still subject to the whims of the market as CDP creators (generators of Dai supply) may not perfectly align with Dai holders (representing Dai demand). Risk levers such as the Stability Fee and Dai Savings Rate can be used to influence both CDP and Dai holder behavior in order to facilitate a market equilibrium at \$1. Because the supply and demand for Dai fluctuates based on a variety of market factors, creating an accurate model requires a sound understanding of economics, statistics, market psychology, and more. For example, in Single-Collateral Dai there is clearly a relationship between the ether price and the Dai price. Analyzing this correlation in order to make optimal policy recommendations is an important function of decentralized governance.

## Exogenous Risks

Finally, exogenous risk refers to a spate of additional risks, among them oracles, governance, and more. Oracle attacks, or the presumed susceptibility of the collateral price feeds, must be well understood. For example, to what extent can an attacker siphon value from the system if they were to subvert the price feeds? What would the appropriate countermeasures be in such a scenario? Another type of exogenous risk is threats to the governance process. Social attacks or improper procedures might necessitate an Emergency Shutdown to preserve the legitimacy of MakerDAO.

## Types of Risk Teams

Not all risk teams will undertake the same duties and job functions. Because different analysts will have distinct specialties and skills, it is helpful to categorize them accordingly. However, it is our assumption that a rich ecosystem of specialized risk teams will develop over time and when needed. For now, we define the broadest types of risk teams that will work for the DAO. Over time, as the needs for risk assessment become more specialized, we can expect to see additional roles.

### Submitting Risk Teams

Submitting risk teams are the most fundamental class of risk teams. They are in charge of computing and submitting risk parameters to the governance process.

The most basic responsibility is to evaluate specific assets or sectors. For example, experts in the cryptocurrency space will examine coins such as bitcoin or ether, whereas traditional risk analysts might find the Security Tokens space more suitable. The goal is to provide an examination of the risks for including a collateral asset into the portfolio.

A sub-class of risk teams might be generalists who are in charge of tying together the various collateral types in a cohesive portfolio. One of the primary responsibilities is to factor in proper correlation coefficients, a task they will likely collaborate on with the other teams. A second critical role is to factor in the appropriate monetary policy. Submitting risk teams will be in charge of suggesting appropriate DSR values, as well as any collateral-specific adjustments that might be required. After construction of the collateral portfolio with the appropriate monetary policy parameters, they can then submit the final package to the governance cycle.

### Oracle Teams

Oracle Teams are in charge of developing and distributing oracle backend software, as well as emergency oracle programs. For example, when new collateral assets are added, they must be accompanied with a corresponding price oracle. An Oracle Team is in charge of facilitating the inclusion of that oracle. Lastly, an Oracle Team may oversee the productization of any oracle services.

### Looking Ahead

In the future, we can expect to see several other classes of risk teams. Supporting risk teams may just work on research or data science, without seeing a model through to the calculation of risk parameters. Blockchain Development Teams might work on upgrading MakerDAO infrastructure. Technical specialists are also likely to find a niche in the ecosystem. The community should slowly increase the scope of risk teams as the Dai Credit System matures.

## Risk Constructs

When a risk team is ready to begin work on a risk model, we expect that they adhere to a standardized set of rules. By following strict guidelines in terms of how a risk assessment is conducted, MTH can more easily vet the legitimacy of the process. In this section we propose some principles that every risk model should abide by, along with a description of a sample model. Collectively, this package is known as a risk construct.

### Scientific Governance

The guiding principle for all risk constructs is the notion of scientific risk governance, a process by which all risk parameter suggestions are supported by appropriate financial models and data analytics. We propose a set of principles or qualities that scientific risk constructs should comprise.

- Comprehensive A risk construct should be exhaustive such that all relevant classifications of risk are considered and reviewed. A risk team must delve into the fundamentals of the organization, consider the value proposition of the collateral, and evaluate any potential risks. In the context of monetary policy, appropriate models must be applied that harmonize the exogenous factors impacting the Dai price.
- Scientific A risk team must be rigorous and scientific in its methodologies. While subjective reasoning can often be an unavoidable part of a risk evaluation, general models should be designed to guide a risk team towards being as objective as possible.
- Standardization A standardized template adhered to by all risk teams allows MTH to review a diverse set of due diligence reports that can easily be compared with one another. The goal is to eliminate any potential oversights or unintentional biases by individual risk teams such that the MTH are left with only an objective evaluation of the collateral.
- Reproducible Critically, a model must be reproducible in nature. This entails making data and code publicly available. Third party auditors should be able to independently run the model on a publicly-sourced data set and arrive at the same conclusions as the risk team. A scenario in which MTH cannot verify the legitimacy of a particular risk team’s risk parameters jeopardizes the integrity of the Dai Credit System.

With the scientific governance principles squarely in place, a risk team may continue on towards an operational risk assessment of the proposed collateral type or monetary policy. The composition of a risk construct should contain at a minimum the following: data set, general model, and applied model.

### Data Set

Risk teams should use a transparent and auditable data set for the purposes of risk models. The source of the data should be clear. The data set should also be hosted somewhere that it can be downloaded by independent risk analysts. For example, trading data used for liquidity analysis should be included as part of the risk construct. Additionally, any transformations made to the data (such as wash trade filtering or any other types of averages) should be specified.

### General Model

The general model is a representation of how a risk team intends to evaluate an asset or other part of the risk function. For example, proposed valuation models, heuristics, and fundamental analysis should be described in detail. Cryptoasset evaluations would require generalized frameworks on how to value various classes of tokens. DSR formulas should be accompanied with detailed and annotated statistical models.

The general model at the core should contain three parts:

- A framework for fundamental analysis or due diligence. How does one go about evaluating a cryptoasset’s fundamentals? How does one think about DSR changes? The ideas and models behind a risk team’s line of thinking should be described.
- A scoring framework for collateral assets that enables a standardized approach for converting qualitative analysis into numerical outputs. This is achieved through a ratings-based methodology.
- A quantitative model that describes the process for computing risk parameters such as the Stability Fee, Liquidation Ratio, DSR, etc. What types of financial models are used? What are their tradeoffs?

MTH are limited in the number of collateral types they may process in a given time period. The general model can help determine which assets should be given priority as approved assets make their way into the collateral pool. The general model acts as a natural filtration mechanism where collateral types are ranked against one another for prioritization purposes.

### Applied Model

The applied model should be a specific implementation of the general model. For example, if a risk team wishes to evaluate ether they would apply the principles and evaluation framework presented in their general model. The final risk model should, in some regards, operate on rails. A valid data set in conjunction with a risk analysis framework presented in the general model should result in a deterministic set of risk parameters.

One key consequence of this process is that governance would debate only the validity and strength of the underlying general model (and associated data set), but not the output. If a particular model results in risk parameters that are deemed undesirable after the fact, they cannot be changed arbitrarily. Instead, governance must revisit the general model and debate whether or not it is of sufficient quality, and discuss why it was allowed to be ratified in the first place. It is imperative that general models not be changed after being voted in. Deliberately ignoring key aspects of the general model would result in a failure of the governance process.

It is important to stress that the role of a risk team is to merely provide suggestions for risk parameters. Ultimately, MTH are the ones who vote in parameters that constitute the Dai Credit System. They are the group solely responsible for governing the Dai Credit System.

## Onboarding Risk Teams

The final section of this document surrounds the onboarding and management of risk teams themselves, along with the process by which they submit risk constructs. Due to the decentralized nature of MakerDAO, it can be surprisingly difficult to foster an efficient process for handling risk teams. A number of edge cases must be considered before pushing forward. Therefore we suggest a number of operational constraints designed to protect against potential governance attacks on the ecosystem.

### Application

Qualified risk analysts who wish to contribute to the Decentralized Risk Function should follow an application process in order to become an official risk team. A candidate risk team would begin by publicly posting credentials to the MakerDAO Forum, resembling a formal engagement process. For example, prior experience, team members, and other qualifications should be surfaced here.

In conjunction with the credentials, a candidate risk team should provide a detailed proposal outlining the type of risk work they would like to do. This General Proposal (GP) might outline a risk construct for ether or a new methodology for calculating the DSR. It is expected that the GP would include a desired compensation amount, similar to a contractor agreement.

### Bootstrapping the Application Review

Due to potential overhead and friction involved with a candidate risk team negotiating terms with a decentralized organization, the Maker Foundation will help bootstrap the process by dealing directly with risk teams. The Maker Foundation will review General Proposals and also compensate these teams directly.

This bootstrapping phase is intended to facilitate the growth of risk teams until a robust decentralized framework for proposal review and Stability Fee compensation can be put into place. We strongly recommend the community begin exploring operational frameworks for how they might like to see this process evolve.

### Long Term Vision

We can also opine on what the longer term vision might look like. Upon submission of a General Proposal, MTH, in their governance capacity, will then have the opportunity to review them as part of its regular governance cycle. If a GP is approved, a risk team may then begin work on the risk construct. One of the edge cases to keep in mind is a risk team trying to immediately push through new risk parameters that have not undergone sufficient review by the community. To this end, we propose a concept of ‘lead times.’

Lead times are essentially delay functions that should be respected before a risk team may progress through the governance cycle. After a GP has been approved, we suggest that a minimum of one month to pass before a candidate risk team submits their general model to the community. At this point, the community should review and give feedback on the general model. We recommend an additional one month of discussion (and iteration) on the general model prior to submitting the final risk construct into the governance cycle.

The length of the lead time need not be a fully rigid framework. The community can decide if special circumstances allow for standard convention to be suspended. However, the risk that a proposal hasn’t had enough time for consideration needs to always be taken into account. It is not difficult to envision potential governance attacks from malicious attackers trying to rapidly push through risk constructs.

### Approval

When a risk construct is approved by MTH, it can be said that the risk team has also been approved. Additional risk constructs submitted by the risk team may potentially flow through the governance cycle faster, especially if they fall under the same general model. Risk constructs based on an entirely new general model should begin the approval process from the start.

At the inception of Multi-Collateral Dai, the Interim Risk Team will post a risk construct for the initial collateral set. Approval of this risk construct will officially ratify the Interim Risk Team.

## Conclusion

Many details for this coordination process will likely emerge organically over time as the governance process improves. As the risk community expands, a number of questions should be explored as we iterate this framework:

- Performance review is an important aspect of risk team management. How can the community facilitate this process?
- A risk team will likely build up a reputation based on their performance, and stronger risk teams will naturally have greater influence in the parameter selection process. Should this be a formalized process with rating points? What privileges do highly ranked risk teams have?
- How can we design decentralized review and compensation framework for candidate risk teams?

If this mandate is accepted by the community, it will signal its support for the general scope of the initiatives outlined. This mandate should be considered a living document and will be updated based on community feedback.
