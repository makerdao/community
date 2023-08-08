# Polling Exericse #1

## Background

Spork is a ‘sub-protocol’ controlled by Maker Governance but managed by an Ecosystem Actor, Alice.

The Spork protocol is able to mint DAI from Maker up to a certain debt ceiling, and lend that DAI to its own users. 

As the Support Scope Facilitator, Bob is responsible for authorizing polls on Spork-related proposals. 

The ABC token is considered to be a fictional token that has previously been onboarded in Maker Core.

## Dramatis Personae

* Alice (Spork Proposal Author)
* Bob (Support Scope Facilitator)
* Faraz (Stability Scope Facilitator)
* You (Governance Scope Facilitator)


## Forum Thread

### Spork Protocol - July Request to Poll
```
Author: Alice  
Date: Tuesday 18th July 2023
```

Hello, Maker! 

Spork protocol continues to go from strength to strength. Just recently, we have come within spitting distance of our assigned debt ceiling of 50 million DAI, and our user base is increasing rapidly, as you can see in the following chart.

[Pretend there is a graph here, and that there are no obvious issues with it. - LFW]

To keep up the momentum and really take advantage of the growth we’re seeing, here are the changes we’d recommend for July. 



* Increase of the Spork D3M Debt Ceiling from 50 million to 100 million DAI.
* Increase of the Spork D3M Target Available Debt (gap) to better support larger users on Spork. Total throughput may remain the same to limit risk to Maker Core.
* We’ve reached an agreement with the ABC token team and would like to onboard the token to Spork with the parameters below. 
* Increase the DAI deposit rate on Spork from 2% to 2.5% to increase deposit demand to further encourage rapid growth. 🚀

[Pretend there are onboarding parameters for the token ABC here. They are to be considered internally consistent, and complete.]

We are requesting a governance poll on the above changes, and seek inclusion within the next available executive vote. 

@Bob @You


### Reply #1
```
Author: Faraz  
Date: Wednesday 19th July 2023
```

The Spork D3M Autoline parameters currently stand at:

* Debt Ceiling: 50 million
* Target Available Debt: 5 million
* Debt Increase Cooldown: 28,800 seconds

If the goal is to increase capacity for larger users, our advisory teams have recommended the following changes in relation to the Target Available Debt and Cooldown. 

* Target Available Debt: 15 million
* Debt Increase Cooldown: 86,400 seconds

These changes do marginally increase the severity of a hack or malicious action on behalf of Spork. Given that SporkMom can shut down the Spork D3M without needing to wait for the GSM governance delay, this change raises the minimum possible impact from 5 million to 15 million DAI assuming governance can react and trigger the shutdown within 8 hours of an event occurring. 

Our advisory teams are also supportive of the increased debt ceiling, though with the usual caveat that this represents an increase in funds-at-risk for Maker Core. 

Our advisory teams are broadly supportive of the ABC token onboarding parameters. Their analysis has not changed appreciably since ABC was onboarded to Maker Core. As governance is aware, ABC was offboarded from Core purely due to limited usage rather than as a result of concern around risk. Liquidity remains strong for ABC and we have no concerns. Those interested may consult our previous evaluation here [A link to the historic evaluation - LFW].


### Reply #2
```
Author: Bob  
Date: Wednesday 19th July 2023
```

We approve a governance poll on the changes described above by @Alice and @Faraz.


## Assignment

Determine what course of action you would take as a Governance Facilitator and communicate it clearly.

Draft any forum responses required or implied by your course of action.

Draft any polls required or implied by your course of action. 

Create a draft PR to this repository containing your response materials.
