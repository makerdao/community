---
title: Auditing Executive Spells
order: 3
hideLanguageSelector: true
keywords: ""
description: "This section describes risk management in Maker"
---

# Auditing Executive Spells

This is a guide to help MKR Holders verify executive spells in the Maker Protocol before voting for them.

This document contains three main sections:

1. Finding the Contract Code deals with locating the code for the executive in question.

2. Anatomy of a Spell Contract shows examples of the main sections you should expect to see in an executive spell.

3. A Non-Exhaustive checklist includes a list of the major things to double check and how to do so.

The key thing to remember is that if any part of an executive spell seems suspicious or confusing in any way it is always better to double check before voting. Even if you are mistaken in your concerns, this allows us to add more detail to this document to prevent someone becoming confused in the same way in the future.

## Finding the Contract Code

The link to the spell on etherscan can be found on the voting portal in the 'details' pane. Look for the 'source' property.

Once you open the spell in etherscan, click on the Contract tab.

You should see the contract code now. If you are only able to see bytecode (contract is unverified) then the executive should be viewed as potentially malicious. In this case, cry foul in chat and encourage people NOT to vote for it until the contract code is made available.

For this document, we will be looking at this executive as our source for examples: https://etherscan.io/address/0xD24FbbB4497AD32308BDa735683B55499Ddc2CaD​

## Anatomy of an Executive

The meat of each spell is located near the bottom. Most of the stuff at the top are flattened libraries included when the contract was verified.

There are two contracts of note in each executive. These are the DssSpell contract and the SpellAction contract.

In our example, the DssSpell contract is named `DssSpell20200221` in this example and is located at the bottom of the file. Once this spell `0xD24FbbB4497AD32308BDa735683B55499Ddc2CaD` gets enough votes to be lifted to the hat, the `schedule()` function you see here will be called.

The spell action contract on the other hand includes the `execute()` function. This function contains the MCD variable changes that are included in the executive.

### DssSpell

#### Contract Variables

Each contract will contain a number of variables to be used in the other functions. In our example, this section looks like this:

```
    DSPauseAbstract  public pause =
        DSPauseAbstract(0xbE286431454714F511008713973d3B053A2d38f3);
    address constant public SAIMOM = 0xF2C5369cFFb8Ea6284452b0326e326DbFdCb867C;
    uint256 constant public NEW_FEE = 1000000002877801985002875644; // 9.5%
    address          public action;
    bytes32          public tag;
    uint256          public eta;
    bytes            public sig;
    bool             public done;
```

#### Constructor

The constructor should always look the same:

```
    constructor() public {
        sig = abi.encodeWithSignature("execute()");
        action = address(new SpellAction());
        bytes32 _tag;
        address _action = action;
        assembly { _tag := extcodehash(_action) }
        tag = _tag
    }
```

#### Schedule and Cast

The schedule and cast functions will usually be the same, but for now any SCD changes will be tucked into schedule. If they deviate from the following, it will be commented:

```
    function schedule() public {
        require(eta == 0, "spell-already-scheduled");
        eta = add(now, DSPauseAbstract(pause).delay());
        pause.plot(action, tag, sig, eta);
    }
​
    function cast() public {
        require(!done, "spell-already-cast");
        done = true;
        pause.exec(action, tag, sig, eta);
    }
```

After `schedule` has been called and after the delay is up, anyone can call `cast()` which will execute the code in the SpellAction's `execute()` function (see below).

### SpellAction

#### Contract Variables

`uint256 constant RAD = 10 ** 45;`
`address constant public PAUSE = 0xbE286431454714F511008713973d3B053A2d38f3;`
`address constant public CHIEF = 0x9eF05f7F6deB616fd37aC3c959a2dDD25A54E4F5;`
`address constant public OSM_MOM = 0x76416A4d5190d071bfed309861527431304aA14f;`
`address constant public ETH_OSM = 0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763;`
`address constant public BAT_OSM = 0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6;`
`address constant public VAT = 0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B;`
`address constant public JUG = 0x19c0976f590D67707E62397C87829d896Dc0f1F1;`
`address constant public POT = 0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7;`
`address constant public FLAP = 0xdfE0fb1bE2a52CDBf8FB962D5701d7fd0902db9f;`
`uint256 constant NEW_BEG = 1.02E18; // 2%`

NOTE: Review "All SpellAction Contract Variables must be declared 'constant'" in the checklist section below.

#### Execute

The `execute()` function will contain each MCD change that is being made in this executive spell.

```
function execute() external {
    // drip
    PotAbstract(POT).drip();
    JugAbstract(JUG).drip("ETH-A");
    JugAbstract(JUG).drip("BAT-A");
​
    // set the global debt ceiling to 183,000,000
    VatAbstract(VAT).file("Line", mul(183000000, RAD));
​
    // set the ETH-A debt ceiling to 150,000,000
    // https://vote.makerdao.com/polling-proposal/qmsm1q1hohyctsgxpbm44fomjoukf1d5g9lmpqraikmeoc
    VatAbstract(VAT).file("ETH-A", "line", mul(150000000, RAD));
​
    // No Sai debt ceiling change this week.
​
    // set dsr to 8.0%
    // Previously ETH SF was set to 8.0%, no change this week.
    //  DSR rate was voted to a 0% spread, so we're bringing DSR up to match.
    // https://vote.makerdao.com/polling-proposal/qmss9hnszwr6egq3xn6gpx4u8bz8cajja56rgtanjev1v8
    PotAbstract(POT).file("dsr", 1000000002440418608258400030);
​
    // MCD Stability fee is currently at 8% and remains the same this week.
    // https://vote.makerdao.com/polling-proposal/qmzgvzjm4xpm4b1tk2hxhdc6p8f4zqyju38pwqieatmhel
​
    // Lower the minimum flap auction bid increase to 2%
    // https://vote.makerdao.com/polling-proposal/qmtsxrqavtczfsseytpypgqrz6z8zb613ikxwhqjv9ytzz
    FlapAbstract(FLAP).file("beg", NEW_BEG);
​
    // Increase the Pause to 24 Hours
    OsmAbstract(ETH_OSM).rely(OSM_MOM);
    OsmAbstract(BAT_OSM).rely(OSM_MOM);
    OsmMomAbstract(OSM_MOM).setAuthority(CHIEF);
    OsmMomAbstract(OSM_MOM).setOsm("ETH-A", ETH_OSM);
    OsmMomAbstract(OSM_MOM).setOsm("BAT-A", BAT_OSM);
    DSPauseAbstract(PAUSE).setDelay(60 * 60 * 24);
   }
```

The `execute()` function will be too large to go into detail, but each change should be well documented and one should make sure the code does what the comment says.

## A Non-exhaustive Checklist

### Verify that the contract code is visible.

Using the instructions above find the contract code on Etherscan and ensure that it is visible and verified.

### Verify the Constructor, the Schedule, and the Cast functions mach templates.

Each of these functions should match the templates shown above unless comments are included with the changes explaining why they do not conform to the expected templates.

### Verify that the contents of the execute function are as expected

Make sure that you are seeing what you expected to see from the voting dashboard.

Ensure that everything present is correct and that nothing is missing from this function.

### Verify all addresses against the changelog

Any addresses you see in either of the above contracts should be verified against the most recent mainnet changelog. Currently MCD is at version 1.0.5, and the address list can be found here: https://changelog.makerdao.com/releases/mainnet/1.0.5/contracts.json​

To find the latest release you can look at https://changelog.makerdao.com/​

In order to verify these, you should ensure that each address in the contract matches one of the addresses in the changelog.

Note that in the example spell, there were SCD changes. Those are well documented and done with SaiMomAbstract(SAIMOM).setFee(NEW_FEE);. This calls a contract that has privileged access to make a few configuration changes in SCD.

Verify the address of SAIMOM from the contract definition above. This is trickier, but you can put the SAIMOM address into etherscan: https://etherscan.io/address/0xF2C5369cFFb8Ea6284452b0326e326DbFdCb867C#code​

### Verifying Oracle Addresses

Occasionally, there are spells to do with Oracles - generally adding addresses to the whitelist, and occasionally adding a new kind of oracle (most recently the BTCUSD one). These addresses must also be carefully verified, and it can be non-obvious how to do so. However, if you follow the link to the changelog and look for PIP_ETH, you'll be on the right track.

Open the `Read` tab of the PIP_ETH contract.

Look for `src` (listed as number 7 currently).

Follow the contract address listed there and verify that it is indeed the `MedianETHUSDcontract`, and that the address here matches what is in the spell.

### Verify Rate Changes

Rates are defined as per-second accumulation values. These values can be validated against the commented rate by using the bc command in a bash shell. Using the `NEW_FEE` variable in the example contract we have:

`bc -l <<< 'scale=27; e( l(1.095)/(60 * 60 * 24 * 365) )`
This produces 1.000000002877801985002875644, just drop the decimal place and you can see this matches the definition of `NEW_FEE`.

Validating all rate adjustments can be done the same way.

For more information on the rates module, @vamsi wrote up a great post [in the developer guides github](https://github.com/makerdao/developerguides/blob/master/mcd/intro-rate-mechanism/intro-rate-mechanism.mdare)

### Verify Timing

Occasionally, spells are set to execute at specific times, as in the case of shutting down SCD (check line 71 for an example). You can verify any UTC timestamp created in such spells using this handy tool.

### Ensure Drip is called before Rates are changed.

Before we change any of the rates, we must call `drip` on those respective contracts (e.g. if this is a DSR rate change, we call `drip` on the pot or if we are changing the SF of a collateral type, we have to call `drip("ILK")` on the `jug`).

### All SpellAction Contract Variables must be declared 'constant'

Because of how the `SpellAction` is called, it must never have anything in contract memory. That is, all the variables that look like they are contract variables in the example contract are actually declared as constant.

At execution time, the contract's variables will be that of the DSPauseProxy. If there are variables in this section that are anything other than constant then it is a MAJOR bug. If this is the case and the spell might look like it’s doing one thing but is actually doing another. and needs to be called out in maker chat. DO NOT vote for a spell with non-constant variables here.
