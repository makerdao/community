<StatusBanner sticky>

These are legacy guides and will not be maintened. Find the newer <Button  secondary inline to="/learn/governance/emergency-shutdown/"> Governance pages</Button>

</StatusBanner>

# Governance

In addition to this FAQ, we encourage MKR holders to check out the [Voter Onboarding Guide](/learn/governance/voting-setup/) for a more detailed guide on how to begin voting.

## What is Governance?

Governance is the process of interaction and decision-making among the stakeholders of a given system or organization. It is also the way rules, norms and actions are structured, sustained, regulated and upheld.

## How is the Maker Protocol governed?

In the context of MakerDAO, governance can be divided into two main parts: on-chain and off-chain.

MKR token holders, who are the primary stakeholders of the system, vote using the Maker Protocol's on-chain governance system. There are two types of votes in this system, Governance Polls and Executive Votes. Anyone who owns MKR can participate in these votes.

Stakeholders participate in governance off-chain by engaging with the community and other stakeholders in places like the [forums](https://forum.makerdao.com/) and the [public governance calls](/contribute/governance_and_risk_meetings). The [Interim Governance Facilitator](https://forum.makerdao.com/t/mandate-interim-governance-facilitators/264) is currently tasked with several administrative duties that keep the larger community organized, proactive, aware, and ready to make decisions.

## Is there more than one type of vote?

Currently, there are three types of voting that take place in Maker governance. These types of voting are ordered in terms of least to most consequential.

**Forum Signal Threads**

These occur off-chain on the MakerDAO [forum](https://forum.makerdao.com/). Forum signal threads measure the sentiment of the public governance community, and are used to:

- Measure community sentiment about issues affecting the MakerDAO ecosystem.
- Determine consensus that something needs to be done in response to a perceived issue.
- Determine consensus for a concrete action to be taken in response to a perceived issue.

**Governance Polls**

These occur on-chain and can be accessed through the Maker Foundation's [Voting Portal.](https://vote.makerdao.com/) Governance Polls measure the sentiment of MKR voters, and are used to:

- Determine governance and DAO processes outside the technical layer of the Maker Protocol.
- Form consensus on important community goals and targets.
- Measure sentiment on potential Executive Vote proposals.
- Ratify governance proposals originating from the MakerDAO forum signal threads.
- Determine which values certain system parameters should be set to before those values are then confirmed in an executive vote.
- Ratify risk parameters for new collateral types as presented by Risk Teams.

**Executive Votes**

These also occur on-chain and can be accessed through the Maker Foundation's [Voting Portal.](https://vote.makerdao.com/) Executive Votes "execute" technical changes to the Maker Protocol. When active, each Executive Vote has a proposed set of changes being made on the Maker Protocol's smart-contracts. Unlike the other types of votes, Executive Votes use a ['Continuous Approval Voting'](#what-is-continuous-approval-voting) model.

Executive Votes can be used to:

- Add or remove collateral types.
- Add or remove Vault types.
- Adjust global system parameters.
- Adjust Vault-specific parameters.
- Replace modular smart contracts.

## What does a forum signal thread look like?

A forum signal thread is a forum thread created with the purpose of finding consensus to take action about an issue or improvement idea within the MakerDAO community. A signal thread is also created according to a set of [semi-formal guidelines](https://forum.makerdao.com/t/signaling-guidelines/223).

A signal thread may contain one or more polls as determined by the original poster of the thread. Additionally, there may be more than one signal thread that relates to a single issue so it may be appropriate to create a summary thread to capture the entire picture.

A basic example of a forum signal thread can be found [here](https://forum.makerdao.com/t/signal-request-should-we-increase-the-scd-debt-ceiling/506)

## Can anyone start a forum signal thread?

Yes, anyone may start these threads. Signal threads that stick to the guidelines and deal with issues that are important to the community tend to get more traction than those that don't.

## What is the difference between a forum signal thread and a regular forum poll?

A forum signal thread is created with the specific intention of gathering consensus around an issue and moving that issue to an on-chain Governance Poll. It is also suggested that it adhere to the [semi-formal signal guidelines](https://forum.makerdao.com/t/signaling-guidelines/223) that can be found within the governance forum.

Regular forum polls can be used to measure community sentiment about anything and their use is encouraged. There are no guidelines on the general use of forum polls, other than courtesy and common sense.

## How does a forum signal thread proceed to an on-chain Governance Poll?

Once a forum signal thread has been active for several weeks, and has been voted on by a reasonable number of community members, the creator of the signal thread will make a judgement call about whether to refine the signal thread further and post a new one, or that the current signal thread is enough to request that the Governance Facilitator push it to an on-chain governance poll.

If the Governance Facilitator agrees that the issue outlined in the signal thread(s) is ready to go on-chain, then the Governance Facilitator will create an on-chain Governance Poll in the form specified by the community consensus created in the signal thread(s).

## When do Governance Polls happen?

A Governance Poll can be put on-chain at any time, however, the current schedule calls for polls to 'go live' on a weekly basis every Monday at 12pm EST/9am PST/14:00 UTC.

## How long is the voting period of a Governance Poll?

The voting period of a given Governance Poll varies. Recurring polls of the same type are usually standardized and have the same duration. The most common are three and seven day periods. Concurrently running polls do not necessarily have the same voting periods.

## Where can I find on-chain Governance Polls?

Live polls can be found on the ["Polling" tab](https://vote.makerdao.com/polling) in the [Governance Portal](https://vote.makerdao.com/). Historic poll data can be found at the [Maker Governance Analytics Dashboard](https://mkrgov.science/).

User risks can be mitigated by using small test amounts beforehand, and by thoroughly checking which addresses one is interacting with.

## Can anyone create an on-chain Governance Poll?

Yes, anyone can create an on-chain Governance Poll using the polling smart contract. However, there is no UI provided to do this yet. Currently, only the elected Governance Facilitator(s) are able to put up polls that display on the [Governance Portal](https://vote.makerdao.com), polls created by arbitrary Ethereum addresses **are not** displayed. In the future, the MKR token holders or any third parties may want to develop special UIs or other voting frontends.

## When do Executive Votes Happen?

An Executive Vote can occur at any time, however the current schedule calls for Executive Votes to go live on Fridays 12pm EST/9am PST/14:00 UTC

## What is Continuous Approval Voting?

There are three main aspects to Continuous Approval Voting. The first is that a vote creates a barrier for new proposals, since new proposals need to surpass the voting weight of the last successful proposal. Secondly, votes are meant to remain in the system continuously in order to prevent bad proposals from passing easily. Finally, the more votes there are on the current state of the system, the more secure the system generally is from any "rogue" proposals.

MKR token holders are tasked with maintaining the health of the system and the stability of the peg while defending against any proposals that seem antithetical to the prudent governance of the system. If a proposal is introduced that MKR holders recognize as beneficial, then the majority of tokens may shift to this new proposal and implement it as the new state of the system.

In this model, the continuity of staked votes challenges and reinforces the status quo of the system through movements of the majority of votes between the most recent successful proposal and new proposals. To revert a change in the system an entirely new proposal must be put forth. It is impossible to reactivate an old proposal.

## Why is the Continuous Approval Voting System necessary?

The Executive Vote represents the current state of the system. As the state of the system is continuously active, it requires continuous governance. At any time a competing proposal to the system could be introduced. If MKR token holders do not agree with the new proposal, then they should cast their votes for the current state of the system (or leave MKR there if they were already voting for the current state), implying that they do not want to see anything changed.

The continuity of the system is emphasized in the fact that a new proposal can be submitted at any time. Therefore, the system needs to be continuously monitored and governed, and thus requires a voting construct that reflects this need. The Continuous Approval Voting model solves this problem.

## How Long is the Voting Period of an Executive Vote?

Executive Votes do not conclude within a set period, which is part of the design of Continuous Approval Voting. For instance, if a vote does not garner enough votes at first, it may do so later if the proposal gains in popularity.

Nonetheless, governance may propose Executive Votes that terminate after a certain amount of time.

## Can anyone start an Executive Vote?

Yes, anyone can create an on-chain Executive Vote using the MakerDAO governance contracts. However, there is no non-technical UI available to do this. Users can create proposals, also known as ["Slates"](https://docs.makerdao.com/smart-contract-modules/governance-module/chief-detailed-documentation) through [this experimental portal](https://chief.makerdao.com/), or by interacting directly with the smart contracts.

Executive Votes created by arbitrary Ethereum addresses will not display on the Maker Foundation's [Governance Portal,](https://vote.makerdao.com/) only the Governance Facilitator(s) are able to put up Executive Votes that display there. However, a more [technical version of the Governance Portal](https://chief.makerdao.com/) exists that lists all proposals irrespective of who created them.

## Does anyone audit the code for the Executive Votes?

The public is encouraged to self-audit the code for each vote. There is a guide on how to do so found [here.](https://forum.makerdao.com/t/how-to-audit-executive-contract-code/1292/7?) The team creating these votes has been putting in significant effort to make it easy for non-technical people to audit the code by adding many explanatory notes within the code itself.

## What are hats, slates, and spells?

There are terms often referenced when speaking about voting in the Maker Protocol. They refer to the technical details of how a given Executive Vote comes to pass. Heuristically, the hat can be thought of as a marker for the leading proposal, a slate as a proposal, and a spell as the action taken to execute the winning proposal.

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation of the Voting mechanism can be found in the [Governance Module](https://docs.makerdao.com/smart-contract-modules/collateral-module/flipper-detailed-documentation) subsection of our Documentation Portal.

## How do MKR holders stay informed of governance issues?

To make informed decisions, MKR token holders have a number of [resources](https://awesome.makerdao.com/#governance-resources) available to them.

These include numerous forum threads that go into the details of various issues and topics of discussion, key votes, write-ups, data dashboards, and Governance and Risk meetings.

The Maker Foundation facilitates voter interaction and engagement by hosting online venues where the governance community comes together for discussion. These include the [chat](https://chat.makerdao.com/channel/governance-and-risk), [governance forum](https://forum.makerdao.com/) and the [governance and risk call](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles)).

Due to the dynamic nature of the protocol and its governance, some resources may be outdated. For the most up-to-date information, engage in the chat, forum or governance call.

## What do MKR holders vote on?

MKR token holders vote on system parameter changes, positional mandates, bug fixes, technical improvements to the protocol, governance-related processes, and operational spending for the system.

Through Governance Polling, MKR holders are able to seek consensus on nearly anything. The first example of this was the [Foundation Proposal](/learn/MakerDAO/core-principles/) which established the five core principles underpinning the Maker Protocol. Since then, Governance Polls have been run for questions including Stability Fees, Debt Ceilings, process changes, position mandates, and more. They often function to inform upcoming Executive Votes, as in the example of the Stability Fee polls where a SF is selected and then the adjustment needs to be passed through the following Executive Vote.

Through Executive Voting, MKR holders vote directly on changes that alter the code of the protocol itself. Examples include adding new collateral types, adding or adjusting system modules, adjusting system parameters such as Stability Fees and the DSR.

## How can I vote off-chain?

Create an account at the MakerDao [forum](https://forum.makerdao.com/) and engage with Signaling Threads that are identified by the ['signaling' tag](https://forum.makerdao.com/tag/signaling). MKR is not needed to participate in off-chain forum votes. These are used to measure the sentiment of the public community who are actively participating in discussions and debates surrounding important topics in Maker Protocol governance.

## How can I vote on-chain?

To vote on-chain MKR must be owned by or delegated to the voter. A voting contract can be set up by following the setup instructions on the Maker Foundation's [Governance portal](https://vote.makerdao.com/). Once set up, voting on-chain is enabled.

## How does the Maker Foundation's Voting Portal work?

The portal provides voters with a user-friendly interface to interact with the Maker Protocol's voting mechanism. To vote, one must set up their voting contract by connecting with their hot or cold wallet and following the provided set up instructions.

## What is a Voting Contract?

The Voting Contract is the on-chain voting mechanism built directly into the Maker Protocol. To vote, MKR owners must "lock-up" tokens by transferring them into the Voting Contract. "Locked" MKR can be withdrawn at any time.

MKR token holders have the option to set up their Voting Contract with a single hot or cold wallet, or, as a linked wallet, as a more secure option. The linked wallet setup allows users to vote using a hot wallet, with MKR stored on a cold wallet.
Setting up a Voting Contract is a one-time action as long as the same wallet or wallets are used in future voting. However, to use a different hot or cold wallet, the contract can be discontinued and set up again at any time.

## How do I know my vote was placed?

The voter's current vote is displayed on a given proposal page in the [voting portal](https://vote.makerdao.com/). Another alternative is to check third-party tools like [mkrgov.science](https://mkrgov.science) that collect voting data and even offer a [voting history lookup tool](https://mkrgov.science/voting-history).

## If a vote has already started can I still participate?

Yes, Executive Votes can receive votes at any time unless they were pre-coded with an expiration time. Governance Polls are time-based and can receive votes at any point before they expire.

## Can I change my vote once I have placed it?

Voters can freely change their votes for Governance Proposals up until they end. Likewise, voters are able to change which Executive Vote their MKR is staked on.

## How is the voting calculated?

Voting is weighted by the amount of MKR that votes for a proposal. For example, if 50 stakeholders hold a total of 600 MKR and vote for proposal A, while 100 stakeholders hold a total of 400 MKR and vote for proposal B, then Proposal A would win with 60% of the vote. Notice that the number of voters is irrelevant, only the amount of MKR tokens voting for each proposal.

## What are the different ways to set up the Voting Contract?

One may choose to [set up voting](/learn/governance/voting-setup/) with a single wallet or voting with a linked wallet.

## What does voting with a linked wallet do for me?

Voting with a [linked wallet](/learn/governance/voting-setup/) allows an MKR holder to vote with a hot wallet using the MKR stored in a cold wallet. The linked setup does not allow the MKR to be transferred to any address apart from the cold wallet. A voter can avoid the need to directly access their cold wallet, making it more convenient and secure to participate. If a voter's hot wallet is compromised, the attacker may vote with their MKR, but will not be able to steal it.

## When setting up a linked wallet, what permissions am I granting?

The permissions enable a number of things technically. All of which enable the MKR in a cold wallet to be deposited into the voting contract, while giving permission to the hot wallet to use it solely for voting and withdrawing back to the cold wallet.

## Does it cost gas every time I vote?

Yes. As all voting occurs on-chain, there are gas costs associated with each transaction involved in setting up the voting contract, as well as placing votes.

## When setting up a linked wallet, how much gas will I need and which wallet does it come from?

The set-up takes four transactions. The transactions involve both hot and cold wallets, so both wallets should contain an ETH balance for gas. Visiting [ETHGasStation](https://ethgasstation.info/) can help with estimating gas costs.

## What are IOU Tokens?

In Maker Governance, MKR voters will lock up their tokens in order to give their votes some weight in the system. The voting is then done by continuous approval voting, where users receive IOU tokens in exchange for their MKR. This is useful for secondary governance mechanisms, allowing users to continue to vote on governance polls and executive votes without unlocking their MKR. Note that IOU tokens may not be exchanged for the locked MKR tokens except by the individuals who have actually locked funds in the contract itself, and only up to the amount they have locked.

## When setting up a linked wallet, how many transactions do I have to sign?

It takes five separate transactions to set up the voting contract.

1. **Initiate link:** The first step is to specify which wallet to use as the hot wallet. This transaction is called "Initiate link" and must come from the cold wallet. This transaction is meant to prove the voter's control of the cold wallet, and specify which wallet to use as their hot wallet.
1. **Approve link:**  Next, it is time to specify and prove control of the hot wallet and create the link between the two wallets with the "Approve link" transaction. This action will also create a personalized voting contract that the voter can manage.
1. **Approve MKR transfer :**  Once the link between the cold and hot wallets has been created, the voter must approve their MKR to be transferred to the voting contract.
1. **Approve IOU transfer :**  After approving the MKR to be transferred to the voting contract, another approval is required to transfer [IOU tokens](https://docs.makerdao.com/smart-contract-modules/governance-module/chief-detailed-documentation#1-introduction-summary).
1. **Lock MKR :** The last step transfers MKR to the voting contract to specify the voting weight. This step can be repeated at any time to "top up" the contract with additional MKR.

## When setting up a single wallet, how many transactions do I have to sign?

It takes three separate transactions to set up a single-wallet voting contract.

1. **Approve MKR transfer :** This allows MKR to be transferred to the voting contract.
1. **Approve IOU transfer :** After approving the MKR to be transferred to the voting contract, another approval is required to transfer [IOU tokens](https://docs.makerdao.com/smart-contract-modules/governance-module/chief-detailed-documentation#1-introduction-summary).
1. **Lock MKR :** The last step transfers MKR to the voting contract to specify the voting weight. This step can be repeated at any time to "top up" with additional MKR.

## What happens to my MKR when I am voting?

MKR is locked in the Voting Contract that was set up by the voter. This MKR is only accessible with the wallet used to set up the voting contract. For a single-wallet setup, only that wallet can withdraw MKR out of the system. For a linked-wallet setup, either of the linked wallets can be used to withdraw MKR to the linked cold wallet.

## How do I know my MKR is in the Voting Contract?

When connecting the voting wallet to the Maker Foundation's [governance portal](https://vote.makerdao.com/), the front page displays the amount of MKR in the voting contract. Likewise, voters are able to see and manage the amount of MKR in their voting contract by clicking the voting contract tab at the top of the portal.

## How do I withdraw my MKR from the voting contract?

There is an option to withdraw MKR in the Voting Contract manager that is found in the Maker Foundation's [governance portal](https://vote.makerdao.com/).

## How does a withdrawal affect my previous votes?

All past votes are preserved in the on-chain history. If MKR is withdrawn from a voting contract, any votes on active proposals that have not expired or that have not been passed are withdrawn. MKR that is not in a voting contract cannot be used to vote.

## Do I need to withdraw MKR from the voting contract immediately after voting?

No, voters who are active in governance can leave their MKR in the voting contract.

Executive Votes, by design of [Continuous Approval Voting](https://en.wikipedia.org/wiki/Approval_voting), require voters to leave their stake on the proposal they wish to support. Doing so increases the requirement for a new proposal to pass.

## Can I send MKR from my cold wallet to another address while it is locked in the voting contract?

No, MKR that is locked in the voting contract cannot move without first being withdrawn to the cold wallet.

## What happens if I send more MKR to my cold wallet after I link it?

MKR sent to the cold wallet will exist outside of the voting contract until the user decides to manually add MKR into the contract using the "top-up" feature. This option is found in the "Voting Contract" tab in the Maker Foundation's [governance portal.](https://vote.makerdao.com/)

## Can I break the link between my hot and cold wallet?

Yes. There is an option to break the wallet link by going to the Governance portal. Click on "Voting Contract," then click the "Break Wallet Link" button. Generally speaking, there is no reason to break the link unless a new hot or cold wallet combination needs to be set up. Withdrawing MKR from the voting contract enables the regular transfer of MKR without needing to break the link.

## Can I combine more than one address holding MKR to vote?

No, currently a voting contact can only be funded by one address.

## Where can I find more technical information about the Maker Protocol Governance mechanism?

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation about Governance can be found in the [Governance Module](https://docs.makerdao.com/smart-contract-modules/governance-module) subsection of our Documentation Portal.
