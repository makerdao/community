# The Governance Risk Framework: Part 1

![The Governance Risk Framework: Part 1](https://cdn-images-1.medium.com/max/1600/1*ARg3W_xLS0yvS2rsz6J6LQ.png)

> _Untermyer: “Is not commercial credit based primarily upon money or property?”_
>
> _Morgan: “No sir, the first thing is character.”_
>
> _Untermyer: “Before money or property?”_
>
> _Morgan: “Before money or property or anything else. Money cannot buy it”_
>
> _Morgan: - “...because a man I do not trust could not get money from me on all the
> bonds in Christendom.”_
>
> _J.P. Morgan at the Pujo Committee 1912–1913_
>
> _[Morgan American Financier: Jean Strouse]_

## Introduction

Whether vilified as a protagonist of the robber barons, the architect of the ‘money trust’, or lauded as the savior of the financial system and the creator of the federal reserve — one cannot deny the basis of J.P. Morgan’s claim; character and trust are the basis for all transactions.In stark contrast to that bygone time, the financial system has evolved through ever-growing notions of character and trust, and at present has landed on a new manifestation of its meaning in the form of the blockchain.

The notion of trust has not vanished in this trustless system. It has merely diversified.Diversified to the extent that has never been realized before, creating a portfolio of actors to which we can assign smaller portions of our scarce resource of trust and thus establishing a new sense of character.If one or a group of actors fail, we can still rely on the majority of actors to keep our notion of character and trust in place.

In this three-part series, we will examine the governance risk framework that is to be employed by MakerDAO. Here, in the first part of the series we will take a look at what a stablecoin is as well as the different types. We then introduce the concept of ‘decentralized risk management’. The second part of the series
will address how decentralized risk management is initiated and implemented by the first risk team, a template model team, the internal risk team of the Maker Foundation. The last part puts it all together for Maker token holders, by mapping out the decisions that Maker holders will need to make, the support that
Maker holders will get to make those decisions and the voting process to follow to manage the risk function. It is the objective of this series to gain an understanding of the risk management function and the contribution Maker token holders make in managing it.

## Trust and the Stablecoin

Stablecoins are tokens that attempt to create money using a mechanism that purposefully weights the transactional value over the commodity value of the token, resulting in a token that is more like the fiat currencies that we all understand today.

The stability implied in the name is created through a mechanism of dynamics that attempt to keep the value of the token steady with some given reference point. In most instances, that reference point is the United States dollar but could be extended to any other asset (Euro)or index (CPI).

Currently, three mechanisms or types of stablecoin have transpired that attempt to implement this:

- IOU
- Seigniorage Shares
- Collateralized

These different types implicitly state where the users of the stablecoin should place their trust.

The IOU organization is asking the user to place their trust in the traditional centralized system;give them an asset (usually a \$1), they will keep it with a centralized custodian and will provide you with a token in return. If you want your asset back, give them the token and the centralized custodian will give you your asset back. The user explicitly trusts that the custodian will look after its assets.

Seigniorage share or Algorithmic based organizations ask the user to place their trust with them. If the price of the token is too high, they will increase the supply and reduce demand. If the price is too low, they will increase demand and lower supply. The user explicitly trusts that they, or the mechanisms deployed
by the organization, will respond in a timely and appropriate fashion to keep the system and by definition their token stable.

Collateralized organizations ask the user to place their trust in the value created by the blockchain. If the user believes that the economy of the blockchain will flourish then so will the tokens on the blockchain. Those tokens are then used to collateralize the supply of stable coin into that economy. Regardless of the governing dynamics used for stability, users place their trust first and foremost into the pledged collateral before anything else.

One could argue the merits of each system indefinitely, but what is clear, is that the type of system you choose as a user is all about where you want to place your trust and, by extension, how you define the character of that stablecoin.

### Collateralized StableCoin — Dai

Maker contends that users should place their trust in the value proposition of the blockchain. If a user is on the blockchain, by default, there is a certain level of trust already employed. Instead of trusting in an off-chain mechanism, or concentrating that trust into one organization on-chain, it seems natural to bring the stablecoin to where the trust already is — decentralized, and on the blockchain.

The stablecoin of the Maker organization is Dai. Dai is supplied to the Ethereum blockchain economy by way of a lending mechanism, whereby a user borrows Dai and increases supply through on-chain transactions. To facilitate this lending, Maker has created a smart contract called a Collateralized Debt Position (CDP). The purpose of the CDP is two-fold, to accept pledged collateral tokens and to make a Dai credit facility available. Put another way, it provides loans and attempts to mitigate credit risk at the same time.

### Collateralized Debt Position — the Engine of Supply

As mentioned, a CDP is a smart contract designed with the purposes of minimizing credit risk using collateralization as well as supplying Dai to the Ethereum economy. So what is credit risk and why do we need collateralization?

Credit or counterparty risk is the risk that a borrower will default on their debt. If that occurs, the lender would like recourse to the borrower to recover that debt. The simplest way to do this is by using collateral. Collateralization is a fundamental tool used throughout the traditional finance space to minimize or mitigate credit risk. Collateralization occurs when a borrower pledges an asset as recourse to the lender in the event of default on that loan. Two fundamental concepts need elaboration. They are the ‘pledge of assets’ and the ‘event of default’.

Assets pledged as the collateral need to be unencumbered and accessible to the lender. In the traditional sense, that would mean that the lender would take possession and store it somewhere if the asset was moveable.There is an industry dedicated to this process of pledging assets, ensuring it is unencumbered, and warehousing it appropriately. What is impressive is that this is all done in almost an instant with a CDP.

The second important point is the event of default. Any legal minded people reading this would agree that this is never a clear-cut definition. In fact, the process of defining the event, recognizing when it happens, and taking the appropriate action is again an industry in the traditional space. The CDP makes this a well established and almost instant event to which we can identify and react.

The CDP has encapsulated these two important ideas and has turned the fundamental notion of a credit facility into a Dai supplying mechanism.

Now that we are more familiar with a CDP, two questions come to mind. What assets do we use as collateral and how do we define a default event? In fact, these two questions are a subset of a larger universe of risk questions that need an answer. The way we answer those questions is through the use of a risk construct developed by a risk team.

In fact, the Maker risk function goes one step further than that. Ultimately we would like to answer these questions through a myriad of competing risk constructs from a multitude of risk teams.The combination of these teams through competition and cooperative structures forms the basis for the Decentralized Risk Management function. A function that continuously has risk constructs competing and evolving to understand better the risks of the system and how to manage them.It will be the duty of Maker token holders to consider and vote in the risk constructs for the system. Maker holders will have to discuss the merits of each construct and if satisfied will have to vote in the contributing risk team. The next section details the rationale behind the decentralized function as well as an initial outline on how Maker holders can manage and vote on it. An elaboration on governance will appear in the third part of this series.

## Governance and Decentralized Risk Management

### The Goal of Governance for Risk

The goal of governance is to establish the most effective way to protect the integrity and stability of the Maker system.We achieve that goal by creating a decentralized, open scientific risk management community.A community that will make clear arguments and apply competing models to assess and manage the risks underlying the system.The community will initially be guided by the foundation, but eventually be lead by a multitude of risk teams that are formally elected by MKR vote, and independent risk researchers contributing on a volunteer basis.

A decentralized risk function’s value lies in its ability to protect against biases and at the same time challenge the status quo and make better contributions.

The integrity of the system at any one time will be vulnerable to inherent biases. Biases such as MKR holders who vote for tokens they may hold, or biases in communication channels from shills talking their book. A decentralized risk function will ensure that rigor and fact-based arguments will be favored over opinion and as such protect against undue influence from those inherent biases.

The stability of the system is always exposed to systemic and idiosyncratic risks. Risks that require well-established models to identify, quantify and manage them. A decentralized risk function will have open competitive models that will continuously evolve to understand better and manage risk. The competition will ensure that the threats to the system are well studied and that a high likelihood exists that the best models are applied.

### Forming a Decentralized Risk Management Function

The vision is that we will arrive at a point where the community will rigorously debate a potential risk construct applicable to the system. This debate will be scientific and evidenced by competing risk constructs put forward by established or contending risk teams. That is, a risk team could challenge the current construct in place by way of introducing a new construct for consideration. The acceptance of the new construct will attract an initial weighting, a weighting that will determine how that construct will contribute to the overall risk function.

The point of this rigor is to avoid polarizing the debate. Whereby different factions try to drown each other out in self-serving rhetoric. Instead, the idea is to reach scientific consensus on what is considered the best overall risk construct for the system.

Risk constructs are envisioned to be created and presented by being reproducible. Meaning that the construct includes not only models but also the data used and results obtained from applying that data. Further, the data should be explicitly defined, and it could be either exogenous or endogenous to the construct. Exogenous data may be price data or qualitative data obtained outside of the construct, where endogenous data is calculated data from within the system and again used as an input for the system. An example of this may be a
qualitative assessment that results in a score that used as an input to a final risk parameter calculation. In this instance, the qualitative score is the endogenous data.

It is critically important to understand that ultimately the risk construct is being debated and not its output. The idea is that consensus on the construct implies agreement on all processes and production. This further means consensus on the data obtained, the source of the data and any data transformations that may occur within the construct.

### Risk Teams and Their Contributions

As we move towards a more decentralized risk function, risk teams that are approved by Maker token holders will have their risk constructs included in the system. The output of these risk constructs will consist of assessments and risk parameters for the system. Risk constructs may differ concerning what kinds of evaluations and risk parameters they output, or, on what kind of tokens they produce this output. Further, hybrids may arise where a risk construct only provides a subset of risk parameters for specific tokens (e.g., only produce qualitative assessments on asset-backed tokens). Another permutation is that a risk construct from one risk team may produce output that is used by another risk team.

Risk constructs may eventually include diagnostic risk management models for the entire collateral portfolio. Consequently, we can see how a collection of risk constructs could ultimately cover every aspect of the risk management function.

The governance debate will be about choosing risk teams based on the format, structure, and quality of the risk constructs they wish to contribute. Once a risk construct has been debated, understood and approved (risk team approved) then the level of construct transparency will dictate the initial weighting it will get. Explicit risk teams that have transparent constructs will get a higher weighting than Implicit risk teams that are not transparent.

Electing risk teams will be done through a vote, and on approval, as mentioned, a simple weighting will be attached to that risk team’s contribution. This weighting will represent the participation of the construct to the overall risk function and can change depending on its longevity and quality of input.

Maker token holders will eventually and ultimately manage the risk function of the system, and it will do so through the use of its voting mechanism. This mechanism will include two groups of functionality and two forms of votes which we shall explore next.

### Outline of the Governance Mechanism

The governance mechanism will have two groups of functionality. The first is proactive and the second is reactive. Proactive governance includes debate, resolution and automated implementation. Reactive governance contains procedural intervention.

The consideration of a new token as collateral, its acceptance and inclusion in the portfolio along with the deployment of its risk parameters is an example of proactive governance.The need to potentially increase exposure to that collateral because it has grown in size and liquidity is an example of reactive governance.

Voting will have two forms, and the first will be a vote where resolution is required. The second will be a vote to enact that resolution into the system. The first type of vote is called a **Governance Vote**, and its objective is to represent resolution on a matter or collection of matters.As an example, that matter could be the inclusion of new Oracles or a new risk team. The second type of vote is called an **Executive Vote**, and its objective is to change the state of the system.An example of this would be to vote in risk parameters for a newly accepted collateral type.

What is extremely important is the timing of these votes and how often they happen. Further to that, when enacting a successful vote, we need to be cognizant of how often reactive governance may be required. The frequency of these events is directly related to how much Maker token holders can manage the process and the risk function. Full decentralization will eventually contain only small contributions from reactive governance, with the majority of contributions coming from proactive governance.

#### I. Timing of Proactive Governance Votes

There will be three subtypes of votes. Once-off or initialization votes, intermittent votes, and regular votes.

**Once-off or initialization votes** start the process for something. In this instance voting for the first risk construct, which explained next, is a good example. The risk management function initially will be represented by the internal team whose purpose will be to create a construct and template for future teams. Thus an initial vote will be required to get this process started.

**Intermittent votes** will be irregular and generally will not be expected to have much of a pattern. Voting in new Oracles is a good example; Oracles are not regularly included in the system and thus would fall under this type of vote.

**Regular votes** will be votes for matters that are expected. Implementing new collateral risk parameters will be expected to be something that will continually be on the voting roster for Maker token holders. With the expectation of being held quarterly.

#### II. Timing of Reactive Governance Actions

Given a risk construct or collection of risk constructs, over time specific inputs may need to change. These inputs will be related to the performance of a function, such as an Oracle, if we need to exclude an Oracle, then a reactive action needs to be implemented to remove that Oracle. Likewise, if a collateral type has changed concerning its size and liquidity then the exposure to that collateral type may be increased (or decreased). As long as the output of the new risk parameter agrees with the formulaic structure of the risk construct, then an adjustment is made. This kind of change is expected to be irregular and thus intermittent.

#### III. Voting in New Collateral Types

To put it all together, we consider how collateral types will be voted in and implemented. The first step is a qualitative assessment of the token under consideration, performed by a risk team or independent risk researcher, and proposed to the Maker token holders. Maker token holders use a Governance Vote to accept or reject the output of the due diligence proposal, and if it is accepted the community then records that the token is slated to be included as collateral token in the next Executive Vote. The Governance Vote can occur at any time during the quarter, before the Executive Vote.

Every time a new collateral type passes a Governance vote, we add the risk parameters to the roster for the next Executive vote. Every quarter the collection of risk parameters will be voted into the system by way of the Executive vote. Meaning that the necessary code will be deployed to the system to update fields and thus the state of the system.

Collateral will change its nature over time and as such if the collateral accepted declines or improves in quality reactive governance actions will be used to adjust the necessary parts of the system. These adjustments are implemented intermittently but congruent with the approved collection of risk constructs in place.

### The First Risk Construct

How do we start the decentralized risk management function? The risk function will begin with the internal risk team of the Maker Foundation. This team will serve two purposes, to create the first risk construct and to serve as a reference and template for future risk teams. The idea is to outsource risk management to the decentralized function and for the internal team to become a meta-function that guides the format and process in which constructs are created, considered and included.

The internal risk team starts the process by considering the risks inherent to the system and the models required to identify and manage those risks.

In short, the internal team is to create the first risk construct for Maker token holders to consider. The construct needs to identify, quantify and manage the risks of supplying Dai through the use of CDPs. How the internal team creates and implements that construct, will be explored in the second part of this series.

## Conclusion

In this first part of the series on the Governance Risk Framework, we considered where Dai fits into the suite of stablecoins in the industry. We further outlined the function of supplying Dai and focused on the salient risks of this process. Importantly, we described the intended decentralized risk management function that will be in place to manage these risks. Including an initial outline of where Maker token holders fit in and the types of decisions required.

The second part of this series will focus on the first risk construct that starts the whole process. We will consider each of the significant risks inherent to the system and focus on how a risk construct is to be created to manage those risks. The second part will be a more in-depth look at what type of models to employ, how they are interrelated, and how to combine them into a well-formed risk construct.
