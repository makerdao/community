# Debt Auction Initial Lot Size

```
Alias: dump
Parameter Name: Debt Auction Lot Size
Containing Contract: Vow
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
```

## Description

The `Debt Auction Initial Lot Size`, or `dump`, parameter allows Maker Governance to control how much MKR is auctioned for DAI when the Maker Protocol is in debt.

When the Maker Protocol has excess unbacked DAI, a `Flop` auction will occur where MKR will be minted and auctioned for DAI. DAI received by the Maker Protocol through this process will be burned to erase the debt of the Protocol. In this process, the amount of DAI that keepers are offering is fixed and keepers bid on how much MKR they are prepared to accept for their DAI.

## Purpose

The `Debt Auction Initial Lot Size` enables Maker Governance to control how much MKR is minted during a `Flop` auction. In addition, it allows Maker Governance to be reactive to market conditions, such as MKR price and ensure that auctions can remain attractive to keepers.

## Trade-offs

If Maker Governance sets the `Debt Auction Initial Lot Size` too high, the Maker Protocol could potentially mint large amounts of MKR during `Flop` auctions. A large volume of minted MKR can dilute the market supply and negatively impact the price of MKR tokens.

If Maker Governance sets the `Debt Auction Initial Lot Size` too low, then the auctions become less attractive for keepers. This may result in a situation where keepers do not bid on the auctions, resulting in an inability of the Maker Protocol  to cover unbacked debt.

## Changes

Adjusting the `Debt Auction Initial Lot Size` is a manual process that requires an executive vote. Changes to the `Debt Auction Lot Size` are subject to the GSM Pause Delay.

**Why increase this parameter?**

Maker Governance may seek to increase the `Debt Auction Initial Lot Size` in the event of a fall in the value of MKR tokens. In this scenario, `Flop` auctions will be less profitable and may become less efficient. Maker Governance should consider an increase in the `Debt Auction Initial Lot Size` if a low number of keepers are bidding on `Flop` auctions as this suggests that the `Debt Auction Lot Size` is not attractive.

**Why decrease this parameter?**

Maker Governance may wish to decrease the `Debt Auction Initial Lot Size` in the event of a significant increase in the value of MKR tokens. In this scenario, the Maker Protocol may mint unnecessarily large amounts of MKR during a `Flop` auction. If Maker Governance decreases the `Debt Auction Initial Lot Size`, it will allow more keepers to participate as they will require less DAI to participate.

## Considerations

In the event of many `Flop` auctions taking place, large amounts of MKR being minted by the Maker Protocol may represent a potential governance risk. This possibility should be considered when an increase to the `Debt Auction Initial Lot Size` is contemplated.

In an Emergency Shutdown, `Flop` auctions are frozen, and the `Debt Auction Initial Lot Size` will cease to be relevant.
