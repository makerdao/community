---
title: Module - Debt Ceiling Instant Access Module (DC-IAM)
keywords: "debt ceiling, dc-iam, dciam, debt ceiling instant access module"
---

# Debt Ceiling Instant Access Module

```
Alias: DC-IAM
Contract Name: DssAutoLine
Scope: A single DssAutoLine contract can contain a set of parameters for each vault type.
```

## Description
The Debt Ceiling Instant Access Module allows any user to adjust the Debt Ceiling of a supported vault type according to rules defined in the DC-IAM smart-contract logic and parameters set by Maker Governance. 

The rules defined in the DC-IAM smart-contract encourage an amount of 'open space' between the current debt usage and the Debt Ceiling of a vault type. The DC-IAM holds three parameters that can be set by governance for each vault type (such as ETH-A.) These parameters are `line`, `gap`, and `ttl`. The effect of these parameters is described in detail in the Key Parameters section.

For example, if the ETH-A Debt Ceiling is currently 100 DAI, and 90 DAI is drawn as debt, the DC-IAM could be used to increase the ETH-A debt ceiling to 110 DAI, enforcing a 20 DAI gap between the usage and the ceiling. If the ETH-A Debt Ceiling then drops to 50 DAI, a user could trigger the DC-IAM and reduce the debt ceiling to 70 DAI, still enforcing the 20 DAI gap between usage and the ceiling.

## Purpose

The module was designed with two purposes in mind:
1. To minimize the amount of governance overhead involved in updating debt ceilings for a vault type.
2. To reduce the risk posed in the event of a significant drop in collateral price occurring in less time than the Oracle takes to update collateral prices.

## Trade-offs

The DC-IAM provides a number of benefits and only one known downside. The main benefits are the reduced governance overhead in setting debt ceilings and risk mitigation in the event of a large decrease in collateral price. These benefits are significant.

The one minor downside is that the DC-IAM enables a griefing attack on the Debt Ceiling of collateral types that are using it. The outcome of this attack is to prevent DAI from being minted using a given collateral type. The severity and likelihood of this attack have been determined to be minimal and the mitigation strategy is straightforward (disable the DC-IAM for the attacked collateral type.)

## Key Parameters

There are three key parameters to the DC-IAM. These will be discussed in turn. Each of these parameters can be set for each vault type.

**Maximum Debt Ceiling (`line`)**

The Maximum Debt Ceiling refers to the maximum value for Debt Ceiling that the DC-IAM will allow in the given vault type. This parameter is also named `line` within the smart contract. When using the DC-IAM to manage the Debt Ceiling of a vault type, this parameter essentially replaces the Debt Ceiling parameter for that vault type. Rather than Governance setting the Debt Ceiling directly, they will need to set the Maximum Debt Ceiling in the DC-IAM.

**Target Available Debt (`gap`)**

The Target Available Debt parameter controls how much of a gap the DC-IAM aims to maintain between the current debt usage and the Debt Ceiling of the vault type. 

The higher this value, the more risk there is from large collateral drops in very short amounts of time. 

The smaller this value, the more vault usage is negatively affected. For example, a relatively low Target Available Debt of 100,000 DAI would be bad for anyone that wished to mint more than 100,000 DAI at one time (and other users besides.) The reason for this ties into the Ceiling Increase Cooldown parameter.

**Ceiling Increase Cooldown (`ttl`)**

The Ceiling Increase Cooldown parameter controls how frequently the Debt Ceiling can be *increased* by the DC-IAM. If a user attempts to use the DC-IAM to increase the Debt Ceiling of a vault type before this time expires, the transaction will fail to execute and the Debt Ceiling will remain unchanged.

Debt Ceiling *decreases*, on the other hand, are always possible, regardless of the Ceiling Increase Cooldown.

In combination, the Target Available Debt and the Ceiling Increase Cooldown enforce a maximum rate at which debt usage can increase over time using a given vault type. These parameters should be set such that the maximum increase over time can accommodate all reasonable usage of the vault type in question.

## User Interaction

The DC-IAM smart contract contains a single relevant method to trigger a potential update of Debt Ceilings for a certain vault type. This method is called `exec`.

When `exec` is called, the following logic is executed by the smart contract:

1. Is the difference between the current debt usage and the Debt Ceiling greater than the Target Available Debt?  
    a) If yes, go to 3.  
    b) If no, do nothing.  
2. Is the difference between the current debt usage and the Debt Ceiling less than the Target Available Debt AND has the Ceiling Increase Cooldown expired?  
    a) If yes, go to 3.  
    b) If no, do nothing.  
3. Set the Debt Ceiling to equal current debt usage + Target Available Debt, capped at the Maximum Debt Ceiling value.  

In practice, this means that calling the `exec` method will always set the Debt Ceiling to equal the current debt usage + Target Available Debt if this operation *decreases* the Debt Ceiling. If this operation will *increase* the Debt Ceiling then it will only execute if the Ceiling Increase Cooldown has expired.

## Tutorial

For any vault type, these are the steps that must be taken to modify its Debt Ceiling via the DC-IAM:

### 1. Determine the Hexadecimal Code for the Vault Type
1. Convert the vault name into hexadecimal 
3. Prefix it with `0x`
4. Suffix it with zeroes so that the string has a total lenght of 66 characters
> Example:
> 1. ETH-A becomes `4554482d41`
> 2. `4554482d41` becomes `0x4554482d41`
> 3. `0x4554482d41` becomes `0x4554482d41000000000000000000000000000000000000000000000000000000`

### 2. Input the Code into the DC-IAM Contract and Write
Run the contract's `exec` method with the hexadecimal code for the vault type as the argument. This can be done [here](https://etherscan.io/address/0xc7bdd1f2b16447dcf3de045c4a039a60ec2f0ba3#writeContract).

![DC-IAM exec](https://i.imgur.com/pglxvKG.png)

Running this method will effectively modify the Debt Ceiling for the given vault type, unless an increase is in order and the Ceiling Increase Cooldown has not yet passed.

> To check the last time DC-IAM was executed on a given vault, see the [contract's events](https://etherscan.io/address/0xc7bdd1f2b16447dcf3de045c4a039a60ec2f0ba3#events) and look for the relevant vault type hexadecimal code (next to ``[topic1]``) and for the execution date date. `tty` is currently set to 12 hours.
> 
>![Last Execution](https://i.imgur.com/FEd7gBX.png)
 
## Considerations
* Debt Ceiling *decreases* cannot take place in the same block as Debt Ceiling increases. This is to prevent griefing through the use of flash loans.

## Further Information
* [MIP27: Debt Ceiling Instant Access Module](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625)
* [DC-IAM Contract Address on Etherscan](https://etherscan.io/address/0xc7bdd1f2b16447dcf3de045c4a039a60ec2f0ba3)
* [DssAutoLine Griefing Attack](https://forum.makerdao.com/t/mip27-debt-ceiling-instant-access-module/4625/22)
* [DC-IAM Forum Tag](https://forum.makerdao.com/tag/dc-iam)

## Appendix

* A one-method contract for executing DC-IAM for all vault types at the same time: <https://etherscan.io/address/0xd5a63a56c790c67e3f92bce5076dc464f98c6df1#writeContract>
* A list of the hexadecimal codes for all vault types that can be fed into DC-IAM:
    * **AAVE-A**
        *  0x414156452d410000000000000000000000000000000000000000000000000000
    * **BAL-A**
        * 0x42414c2d41000000000000000000000000000000000000000000000000000000
    * **BAT-A**
        *  0x4241542d41000000000000000000000000000000000000000000000000000000
    * **COMP-A** 
        * 0x434f4d502d410000000000000000000000000000000000000000000000000000
    * **ETH-A**
        *  0x4554482d41000000000000000000000000000000000000000000000000000000
    * **ETH-B** 
        * 0x4554482d42000000000000000000000000000000000000000000000000000000
    * **KNC-A**
        *  0x4b4e432d41000000000000000000000000000000000000000000000000000000
    * **LINK-A**
        *  0x4c494e4b2d410000000000000000000000000000000000000000000000000000
    * **LRC-A**
        *  0x4c52432d41000000000000000000000000000000000000000000000000000000
    * **MANA-A**
        *  0x4d414e412d410000000000000000000000000000000000000000000000000000
    * **RENBTC-A**
        *  0x52454e4254432d41000000000000000000000000000000000000000000000000
    * **UNI-A** 
        * 0x554e492d41000000000000000000000000000000000000000000000000000000
    * **WBTC-A** 
        * 0x574254432d410000000000000000000000000000000000000000000000000000
    * **YFI-A** 
        * 0x5946492d41000000000000000000000000000000000000000000000000000000