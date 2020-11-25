# Governance

> Notice: You are reading the Single-Collateral Dai version of this FAQ. An up-to-date version of this FAQ will be released soon and will be found [here.](/faqs/governance.md)

## What is Governance?

Governance is a process through which a group of stakeholders come to a decision on a particular change within their system or organization. Many centralized entities have expedited the governance process through the nomination of critical decision makers like board members and executives. In the context of MakerDAO, it is done through a voting system where anyone who owns MKR can vote on changes to the Risk Parameters within the Dai Credit System.

## How do MKR holders manage the Dai Credit System?

For the Dai Credit System to be successful, the stakeholders in the system need to collaborate and vote on a variety of Risk Parameters. Some examples include which assets can be used as collateral, how much Dai can be issued, and the Stablity Fee a CDP holder is charged. This is done through the on-chain voting mechanism built directly into the system. The Maker team created the [Governance Dashboard](http://vote.makerdao.com/) for stakeholders to have a friendly user interface to use for voting. Stakeholders still have the option of voting directly by interacting with the smart contacts that make up the Dai Credit System.

One of the first votes that MKR token holders participated in was an agreement for [Gradual Decentralization](https://medium.com/makerdao/foundation-proposal-v2-f10d8ee5fe8c), which is a core part of how the MakerDAO platform is meant to evolve. Currently, the Maker team takes responsibility for bootstrapping the system by providing active input and effort into governance. As time goes on, the Maker team will play a less active role in this function and will equip MKR token holders to govern the system independently. As the community around MakerDAO grows, the governance of the system will evolve into a more decentralized state.

## How can I vote?

To vote, MKR owners must "lock up" their tokens by transferring them to the voting system. Once moved, you can then vote on different proposals with the weight of the MKR that you locked up on the [Governance Dashboard](http://vote.makerdao.com/).

## How do I know my vote was placed?

Your current vote is reflected in the [Governance Dashboard](http://vote.makerdao.com/).

## If the vote has already started can I still participate?

Yes, you can join the vote at any time. All you need to do is set up your voting contract and lock in your MKR, and you're ready to vote.

## Can I change my vote once I have placed it?

Yes. If you have already voted, you can pick a different option in the voting portal. Your MKR will automatically be withdrawn and placed in the new proposal you selected. You may also choose to remove your vote from any proposal without necessarily voting for a new one.

## How is the voting calculated?

Voting is weighted by the amount of MKR that votes for a proposal. 1 MKR is equal to 1 vote. For example, if 50 stakeholders hold a total of 600 MKR and vote for proposal A, and 100 stakeholders hold a total of 400 MKR and vote for proposal B, then proposal A would win with 60% of the vote.

## Is there more than one type of vote?

There are two types of votes in the Maker Governance System, Governance Polls, and Executive Votes.

Governance Polls are used to establish soft consensus on important matters and to gauge sentiment on potential Executive Vote proposals. These polls determine how the community moves forward with overall governance.

Executive Votes "execute" changes to the system in the form of adding or removing collateral types and setting associated Risk Parameters. You can think of Governance Polls as signal voting, while Executive Votes are hard changes enacted into the Dai Credit System.

## What do people vote on?

Through Governance Polling, MKR holders will be able to seek soft consensus on nearly anything. The first example of this was the [Foundation Proposal](https://medium.com/makerdao/foundation-proposal-v2-f10d8ee5fe8c) which established the five core principles underpinning MakerDAO.

Through the Executive Voting process, MKR holders vote directly on changes to the Dai Credit System. Examples include adding new collateral types and setting their associated Risk Parameters. These parameters include the Liquidation Ratio, Debt Ceiling, Liquidation Penalty, and Stability Fee. Risk Parameters are independently set for each collateral type and are recommended based on the assessments done by various Risk Teams. MKR token holders will take these risk assessments into account when voting for the changes.

MKR token holders also vote on operational spending for the system, which is funded by a portion of the system-wide Stability Fees. Meaning, in the future, they will be able to set a [Dai Savings Rate](https://medium.com/makerdao/dai-reward-rate-earn-a-reward-from-holding-dai-10a07f52f3cf), as well as choose to spend part of the Stability Fees on necessary service providers such as Oracle Providers, Developers, Risk Teams, etc.

## Does the Foundation ever vote?

No. The reserves held by the organization are for the continued operation of the Foundation itself, they are not used to vote.

## When do Governance Polls happen?

A proposal outlining a Governance Poll can be put up at any time.

## How long is the voting period of a Governance Poll?

The length of the voting period typically ranges from two to three days but this is subject to change due to the community's active discussions surrounding governance. Feel free to contribute your thoughts on any of our [official communication channels](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#official-channels).

## When do Executive Votes happen?

An Executive Vote can occur at any time. Executive Votes change the state of the Dai Credit System and utilize a "Continuous Approval Voting" process.

## What is Continuous Approval Voting?

MKR token holders are tasked with maintaining the health of the system and the stability of the peg while defending against any proposals that seem antithetical to the overall governance objective.

If a proposal is introduced that is beneficial, and the MKR token holders recognize this value, then the majority of tokens should shift to this new proposal and implement it as the new state of the system.

In this model, the continuity of staked votes challenges and reinforces the status quo of the system through movements of the majority of votes between desired new proposals and the most recent successful proposal. It's also important to note that to revert a change in the system an entirely new proposal must be put forth. It is impossible to reactivate an old proposal.

## Why is the Continuous Approval Voting system necessary?

The Executive Vote represents the current state of the system. As the state of the system is continuously active, it requires continuous governance. At any time a competing proposal to the system could be introduced. If MKR token holders do not agree with the new proposal, then they should cast their votes for the current state of the system (or leave it there if they voted for current state before), implying that they do not want to see anything changed.

The continuity of the system is emphasized in the fact that a new proposal can be submitted at any time by any MKR token holder. Therefore, the system needs to be continuously monitored and governed, and thus requires a voting construct that reflects this need. In the MakerDAO system, the Continuous Approval Voting system solves this problem.

## How long is the voting period of an Executive Vote?

The voting period for an Executive Vote is infinite, meaning, a proposal can exist in the system for any amount of time. If it does not garner enough votes at first, it can do so later if the proposal gains popularity. This is a part of the design of Continuous Approval Voting.

## How does the Voting Dashboard work?

The dashboard utilizes a special [Voting Contract](https://github.com/makerdao/vote-proxy) which is a proxy smart contract that locks up voters' MKR into the voting system. Voting is controlled through the creation of hot and cold wallets to ensure the safety of staked MKR.

Setting up the voting contract is a one-time action as long as the user wants to use the same designated cold and hot wallets. However, if the user wants to use another cold or hot wallet, the link can be broken, and a new voting proxy contract can be set up.

Users also have the option of using only a hot wallet to vote. This simplifies the setup process but provides less security for the users' MKR.

## What does setting up a voting proxy do for me?

The governance voting mechanism is a time-limited poll vote, while an executive vote is handled via Continuous Approval Voting. The voting proxy contract allows MKR holders to easily vote with their MKR for governance and Executive Proposals while gaining the benefit of controlling voting through a hot wallet and ensuring that funds can only be withdrawn into a cold wallet.

## What is a proxy contract?

A proxy contract is a smart contract in which you approve multiple transactions in a way where they all must succeed or fail. This means you only have to sign one transaction for multiple steps to be executed.

## Why do I need to set up a proxy contract?

Proxies provide additional security benefits when voting with MKR from a cold wallet through a hot wallet. It also allows for participation in both Polling Voting and Executive Voting without having to worry about the underlying mechanics or performing numerous manual transactions.

## What am I granting permissions for, to whom, and why?

When granting permissions, you are approving that you want to lock your MKR in the voting system and control your vote with a "hot wallet." The "hot wallet" is only allowed to vote or return MKR to the "cold wallet."

## Does it cost gas every time I vote?

Yes. As all voting occurs on-chain, there are gas costs associated with each transaction involved in setting up the voting contract, as well as casting your vote.

## How much gas will I need, and where does it come from; the hot wallet or the cold wallet?

It takes four transactions with a total cost of approximately 1M gas to set up the voting contract. This is split between your hot and cold wallets, so you will need to ensure you have some ETH in both wallets. You can visit [https://ethgasstation.info/](https://ethgasstation.info/) to help estimate your gas price.

## How many transactions do I have to sign?

It takes four separate transactions to set up the voting contract.

1. **Initiate link**: The first step is to specify which wallet to use as your hot wallet. This transaction is called "Initiate link" and must come from your cold wallet. This transaction is meant to prove your control of the cold wallet, and specify which wallet to use as your hot wallet.
1. **Approve link**: Next, it is time for you to specify and prove control of your hot wallet and create the link between your wallets with the "Approve link" transaction. This action will also create the personalized voting contract that you will use to cast your votes.
1. **Approve MKR transfer**: Once the link between your cold and hot wallets has been created, you must approve your MKR to be transferred to the voting contract.
1. **Lock MKR**: The last step transfers MKR to the voting system contract to specify your voting weight. This step can be repeated at any time to "top up" with additional MKR.

You can participate in both Polling and Executive Voting after completing these steps.

## What exactly does the link between hot and cold wallets control?

The link between the hot and cold wallets means that your MKR is locked into the Voting System contract and doesn't have to remain connected to any application to cast a vote. Once you have locked your MKR, there is no need to connect your cold wallet again. With your hot wallet, you can only vote, or send MKR back to your cold wallet. MKR cannot be withdrawn to any other address except the cold wallet.

## Who controls my MKR when it is locked?

You maintain full control over your MKR as it never leaves the Voting System contract. Only you can withdraw your MKR from the voting contract, and it can only be moved back to your cold wallet.

## How do I know my MKR is locked up?

If you connect your hot wallet to the [Governance Dashboard](https://vote.makerdao.com), it will display your MKR total under the header "In voting contract."

## How do I retrieve my MKR?

To withdraw your locked MKR, you first need to go to the [Governance Dashboard](https://vote.makerdao.com) and connect your hot wallet, then click "Voting Contract." In the lower right-hand corner, you should see a link called "Withdraw from voting contract." Click the link and select how much you wish to withdraw and then confirm the transaction. Locked MKR can only be moved back to the cold wallet.

## How does a withdrawal affect my previous votes?

Withdrawing your MKR takes your vote out of the system, and leaves your MKR unassigned. This makes a new proposal require less MKR to pass since it only needs to have more MKR in it than the previous proposal. Withdrawing your MKR from the voting contract also adds a step should you wish to vote again with your MKR in the future.

## Do I need to unlock immediately after voting?

No, users who are active in MakerDAO governance are encouraged to leave their MKR in the voting dashboard for use in Continuous Approval Voting.

## Can I send my MKR from my cold wallet to another address while it is locked? What happens if I do that?

No, you cannot move MKR that is locked in the voting system. The MKR must first be withdrawn from the voting system contract before your cold wallet can transfer it to any other address.

## What happens if I send more MKR to my cold wallet after I link it?

Users have the option to add new MKR to their Voting Contract by a single transaction where they can top-up their voting contract. You can find this option by going to the [Governance Dashboard](https://vote.makerdao.com), clicking on "Voting Contract," then clicking the "Top-up Voting Contract" button.

## Can I break the link between my hot and cold wallet?

Yes. There is an option to break the wallet link by going to the [Governance Dashboard](https://vote.makerdao.com). Click on "Voting Contract," then click the "Break Wallet Link" button. Generally speaking, there is no reason to break the link unless you need to select a new hot or cold wallet. Withdrawing MKR from your voting contract enables you to freely use your MKR with your cold wallet without needing to break the link.

## Can I combine more than one address holding MKR to vote?

No, currently a voting contract can only be funded by one address.
