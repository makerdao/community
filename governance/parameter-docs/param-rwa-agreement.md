# RWA Agreement

```
Alias:
Parameter Name: doc
Containing Contract: RwaLiquidationOracle 
Scope: MIP21 / Ilk (RWA)
Technical Docs: https://mips.makerdao.com/mips/details/MIP21
```

## Description

RWA Vaults are dependent on a contractual arrangement, the RWA Agreement. The RWA Agreement parameter allows the Maker Protocol to record an IPFS hash that links to the actual contract documentation. Each deal will have individual contract documentation, and the documentation format may change from deal to deal.

## Purpose
By recording the contents of the RWA Agreement to the blockchain a clear, transparent record of legal agreements made by the RWA Core Unit is available. This transparency benefits governance and will be useful in the event of any disputes with borrowers.

## Changes
Adjusting the RWA Agreement can be done through a manual process that requires an executive vote. Changes to the RWA Agreement are subject to the GSM Pause Delay.

This parameter can be changed by calling the `init` function. Maker Governance should make changes to the parameter to reflect changes in the underlying contractual documentation.

Maker Governance should not change the parameter unless there has been a change in the underlying contractual documentation.


## Considerations
As MakerDAO is not a legal entity, the actual use of the contractual documentation may be limited.
