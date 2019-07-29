# Le liquidazioni

## Che cosa è la liquidazione?

Un CDP può essere liquidato se viene considerato insicuro dal sistema. Ciò garantisce che ci sia sempre a disposizione un pegno di garanzia \(collateral\) il cui valore è sufficiente a garantire il valore di tutti i Dai presi in prestito. La liquidazione avviene quando il valore complessivo del collateral di un CDP \(il valore del collateral è costantemente monitorato e valutato dagli Oracoli\) scende sotto un rapporto minimo \(collateralization ratio\) rispetto al valore dei Dai presi in prestito. Durante il processo di liquidazione, una quantità sufficiente di collateral viene prelevata automaticamente dal CDP per coprire il valore del debito in Dai e per pagare gli interessi \(stability fees\). La restante parte del collateral viene lasciata a disposizione del proprietario del CDP che la può prelevare.

## Perché esiste la procedura di liquidazione?

A differenza della maggior parte delle valute fiat che hanno valore per decreto governativo, il Dai è una moderna incarnazione, basata sulla crittografia, di una _valuta rappresentativa_; tutti i Dai in circolazione sono garantiti da un pegno di garanzia \(collateral\) di critpovalute e token vari, inseriti in uno smart contract. Questo collateral elimina la necessità di porre la fiducia in qualsiasi controparte ed il rischio associato ad essa. È questa completa trasparenza che permette agli utenti di avere fiducia nel sistema.

Per assicurarsi che vi sia sempre una quantità sufficiente \(un surplus\) di collateral, ad una tipologia speciale di utenti detti Keepers \(traducibile come “mantenitori”\) viene dato il compito di monitorare costantemente i CDP che diventano insicuri o il cui collateral perde di valore. I Keepers sono incentivati a far si che tutti i Dai in circolazione siano sempre garantiti da un sufficiente collateral. I Keepers aiutano il buon mantenimento del sistema assicurandosi che i CDP insicuri siano liquidati il prima possibile. Questa velocità può essere molto importante, specialmente in condizioni di mercato in cui il valore del collateral di un CDP scende molto rapidamente e una azione tardiva potrebbe far sì che il collateral non sia più in grado di coprire il valore dei Dai presi in prestito.

## Cosa è il rapporto minimo di liquidazione \(Liquidation Ratio\)?

Ogni tipo di collateral \(criptovaluta o token messo in pegno di garanzia\) ha un suo rapporto minimo di liquidazione che è determinato sulla base del profilo di rischio del collateral stesso. Attualmente, l’unico tipo di collateral utilizzabile è ETH. Al momento del lancio di Single-Collateral Dai \(la prima versione funzionante del sistema Dai\), un gruppo di esperti \(Maker’s Interim Risk Team\) ha calcolato il profilo di rischio di ETH e ha impostato il suo rapporto minimo di liquidazione a 150%.

Consideriamo il seguente esempio. Un utente vuole creare 200 Dai e pensa che il valore del proprio collateral (ETH) non scenderà più del 50% del suo prezzo di mercato attuale. L’utente decide di mettere in pegno una quantità di collateral doppia rispetto alla minima richiesta. Siccome il rapporto minimo di liquidazione è di 150%, l’utente depositerà una quantità di ETH corrispondente ad un valore di 600 USD e preleverà 200 DAI. Il suo CDP avrà dunque un rapporto di liquidazione del 300%, ben al di sopra di quello minimo.

**È importante capire che 150% è il rapporto minimo, tra il valore del proprio collateral e quello dei Dai creati, scesi sotto il quale il CDP verrà messo in stato di liquidazione dai Keepers.**

Restare sopra questo livello minimo garantisce agli utenti di non venir mai liquidati.

## Qual’è il prezzo di liquidazione?

Esso è il minimo valore unitario che la criptovaluta usata come collateral può raggiungere prima che iL CDP diventi liquidabile.

## Cosa è la penalità di liquidazione \(Liquidation Penalty\)?

Essa è una quota aggiuntiva che viene aggiunta al debito totale al momento della liquidazione e che viene prelevata dal collateral del CDP.

I proventi delle penalità di liquidazione sono trasferiti alla riserva di token PETH \(PETH pool\). Questo aumenta il rapporto con i token WETH che gli utenti ricevano quando rimuovono il collateral dal proprio CDP. Quindi la penalità aumenta il valore della riserva di PETH del sistema in periodi durante i quali ci sono molte liquidazioni a causa, ad esempio, dell’instabilità dei mercati.

## Cosa succede durante la liquidazione?

Una liquidazione avviene quando un Keeper chiude un CDP e lo invia al Liquidity Providing Contract \(LPC\) il quale, a sua volta, mette in vendita il pegno di garanzia \(collateral\) del CDP su [Dai Dashboard](https://dai.makerdao.com). Una volta che il debito è stato ripagato, la restante quantità di PETH è restituita al proprietario del CDP. L’ordine delle operazioni eseguite è il seguente:

- Il CDP in stato di rischio eccessivo viene chiuso.
- La penalità di liquidazione è applicata al debito complessivo di Dai.
- Il Liquidity Providing Contract \(LPC\) rimuove una quantità sufficiente di collateral PETH per ripagare il debito, utilizzando il prezzo corrente comunicato dagli Oracoli.
- Il possessore di CDP può rientrare in possesso della quantità restante di collateral.
- Il PETH rimosso viene messo in vendita su dai.makerdao.com ad un prezzo scontato, per incentivarne la vendita. Lo sconto è chiamato Boom/Bust Spread.
- I Dai guadagnati dalla vendita del PETH sono distrutti per appianare il debito del CDP.
- Se la vendita ha prodotto un eccesso di Dai, questi vengono venduti per ottenere PETH, il quale è successivamente distrutto per aumentare il valore dei PETH in esistenza.
- Se la vendita non ha prodotto una quantità sufficiente di Dai, allora del PETH della riserva viene venduto per coprire la differenza. Questo riduce il valore complessivo del PETH in esistenza.

## Quanto collateral rimane dopo la liquidazione?

Per determinare quanto collateral rimarrà in tuo possesso dopo una liquidazione puoi utilizzare la seguente semplice formula:

`(Collateral * Valore di ETH comunicato dagli Oracoli * Rapporto PETH/ETH) - (Penalità di liquidazione * Debito complessivo in Dai) - Debito complessivo in Dai = (Collateral rimanente * Valore ETH comunicato da Oracoli) Dai`

Ad esempio, assumendo:

- Il prezzo di ETH comunicato dagli Oracoli è di 350 USD
- Il totale di collateral messo come pegno è di 10 PETH
- Il rapporto PETH/ETH è 1.012
- La penalità di liquidazione è del 13%
- Il debito complessivo del CDP è di 1000 DAI

`\(10 × 350 × 1.012\) − \(13% × 1000\) − 1000 = 2412 DAI o 6.891428571 ETH`

## Come si calcola il prezzo di liquidazione \(Liquidation Price\)?

Puoi utilizzare la seguente semplice formula per determinare il valore minimo (Liquidation Price) che il tuo collateral può raggiungere prima di essere liquidato:

`(Debito complessivo in Dai * Rapporto minimo di liquidazione) / (Collateral * Rapporto PETH/ETH) = Liquidation Price`

Ad esempio se:

- Il valore di un ETH (comunicato dagli Oracoli) è di 350 USD
- Il totale di collateral messo come pegno è di 12 PETH
- Il rapporto PETH/ETH è di 1.012
- Il rapporto minimo di liquidazione è di 150%
- Il debito complessivo è di 1000 DAI

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Il CDP verrà liquidato se il prezzo di ETH dovesse scendere sotto il valore limite di 123.51 USD.

## Come viene calcolato il rapporto tra debito e collateral \(Collateralization Ratio\)?

Se invece di utilizzare il prezzo di liquidazione, preferisci determinare lo stato di sicurezza del tuo CDP sulla base del rapporto tra il pegno messo a garanzia \(collateral\) e il debito complessivo di Dai, puoi usare la seguente semplice formula:

`(Collateral × prezzo di ETH comunicato dagli Oracoli × rapporto PETH/ETH) ÷ Debito complessivo in Dai × 100 = Collateralization Ratio`

Ad esempio se:

- Il valore di un ETH è di 350USD
- Il collateral consiste di 12 PETH
- Il rapporto PETH/ETH è di 1.012
- Il debito complessivo è di 1000 DAI

`(12 × 350 × 1.012) ÷ 1000 × 100 = 425.04%`

Il CDP ha un rapporto tra collateral e debito \(Collateralization Ratio\) del 425.04%.

## Come posso abbassare il mio prezzo di liquidazione?

La difficoltà principale che i possessori di CDP devono fronteggiare è quella di mantenere il proprio CDP in stato di sicurezza in un mercato altamente imprevedibile. Se il tuo CDP è vicino al prezzo di liquidazione, per ridurre il rischio puoi aggiungere ulteriore collateral o ritornare parte del tuo debito in Dai.

Quale delle due opzioni sia la migliore dipende dai tuoi obiettivi nel lungo termine. Se sei convinto che in futuro il valore del tuo collateral aumenterà, puoi aggiungere del collateral al CDP per riportarlo in stato di sicurezza. Se invece vuoi ridurre la tua esposizione al rischio di volatilità del prezzo del collateral, puoi semplicemente ripagare parzialmente il tuo debito e restituire i Dai presi in prestito.

Il modo migliore per ridurre il rischio di liquidazione è quello di restituire i Dai poiché questa procedura abbassa il prezzo di liquidazione in modo più efficiente. Inoltre questa procedura ha il vantaggio aggiuntivo di ridurre la quantità di tassi di interesse che si accumulano sul tuo CDP nel tempo.

Ad esempio, assumendo:

- Il valore di un ETH è di 350 USD
- Il collateral consiste di 12 PETH
- Il rapporto PETH/ETH è 1.012
- Il rapporto di liquidazione è di 150%
- Il debito complessivo è di 1000 DAI

Il prezzo di liquidazione è di:

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Il prezzo di liquidazione dopo aver aggiunto del collateral per un valore totale di 700 USD:

`(1000 × 1.5 ) ÷ (14 × 1.012) = 105.87 USD`

Il prezzo di liquidazione dopo aver ripagato 700 DAI di debito:

`(300 × 1.5 ) ÷ (12 × 1.012) = 37.05 USD`

Evidentemente il prezzo di liquidazione viene ridotto molto di più ripagando il debito di Dai piuttosto che aggiungendo del collateral aggiuntivo.

## Pratiche comuni per evitare di essere liquidati

Vigilare costantemente sulla sicurezza e sul livello di rischio del tuo CDP è una tua responsabilità. Il mantenimento del tuo CDP ad un livello di rischio basso è un incarico lasciato interamente nelle tue mani. Di seguito vengono riportate alcune pratiche che molti utenti hanno trovato utili per monitorare il livello di rischio dei loro CDP.

- Attiva degli avvisi nelle tue \(smartphone\) app preferite, o in varie app, in modo tale da essere sempre al corrente degli eventi del mercato.
- Assicurati di avere sempre delle riserve per gestire il tuo CDP. Non è consigliabile ritrovarsi senza ulteriori riserve a disposizione durante un crollo del mercato.
- Assicurati di avere dei beni a disposizione per aggiungere ulteriore collateral al tuo CDP, o per vendere questi beni in cambio di Dai per ripagare il tuo debito.
- Se credi che il mercato possa entrare in un periodo di discesa, puoi ritirare collateral in eccesso e venderlo in cambio di Dai e ripagare il tuo debito. Fai attenzione a mantenere sempre una distanza di sicurezza dal tuo prezzo di liquidazione, giacché questa procedura aumenterà temporaneamente il rischio del tuo CDP fintanto che non ripagherai parte del tuo debito.

Ricordati che aprire un CDP comporta necessariamente un rischio. La quantità di rischio che tu puoi accettare di assumere dipende da molti fattori. La determinazione di un corretto [risk profile](https://www.financialounge.com/sapereperinvestire/profilo-di-rischio/) è effettivamente una scienza, ma a volte i possessori di CDP devono fare le proprie valutazioni in autonomia.

Per ulteriori informazioni sul rischio, consulta i Terms of Service i quali contengono importanti informazioni di natura legale. Ogni possessore di CDP deve accettare i Terms of Service prima di utilizzare il sistema Dai.

## Come funziona la vendita del collateral effettuata dallo smart contract?

Quando un Keeper liquida un CDP insicuro, il Liquidity Providing Contract (LPC) si assicura di mettere in vendita il collateral su Dai Dashboard. Il prezzo di vendita è determinato dal prezzo del collateral comunicato dagli oracoli al quale viene applicato un modificatore. Questo modificatore è normalmente uno sconto, il quale viene applicato al debito complessivo che deve essere recuperato. Questa sconto determina una differenza (‘spread’) rispetto al prezzo di mercato del collateral, e serve a facilitare una vendita veloce e una pronta ricapitalizzazione del sistema.

Gli utenti possono acquistare PETH che è stato in precedentemente inserito dal Liquidity Providing Contract (LPC) nella Dai Dashboard. Ogni surplus di Dai ottenuto dalla vendita può essere acquistato con PETH.

## Posso acquistare del PETH precedentemente prelevato?

Sul Dai dashboard c’è una sezione chiamata “Total Liquidity Available from forced CDP liquidations” (Liquidità totale risultata da liquidazioni forzate di CDP) nella quale i partecipanti possono acquistare PETH ottenuto da liquidazioni ad un prezzo scontato determinato dal “Bust/Boom Spread”.

## In che modo un crollo improvviso del mercato può influenzare la liquidazione di un CDP?

Un crollo improvviso in un singolo mercato di scambio non ha conseguenze sul sistema poiché gli Oracoli aggregano i prezzi di vari mercati di scambio. Una volta rilevati, il “medianizer” calcola la mediana di tutti questi prezzi. Puoi vedere il grafico con i prezzi comunicati da tutti gli Oracoli su https://mkr.tools/system/feeds.

- Informazione dettagliate: [https://developer.makerdao.com/feeds/](https://developer.makerdao.com/feeds/)
- Codice sorgente degli Oracoli: [https://github.com/makerdao/price-feed](https://github.com/makerdao/price-feed)
- Codice sorgente del Medianizer: [https://github.com/makerdao/medianizer](https://github.com/makerdao/medianizer)
- Codice di aggiornamento: [https://github.com/makerdao/setzer](https://github.com/makerdao/setzer)
- Monitoraggio delle informazioni delgi Oracoli: [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds)

## Dove posso visualizzare le informazioni sulle liquidazioni?

Puoi consultare [mkr.tools](https://mkr.tools) che è un sito prodotto da parti terze che monitora costantemente il sistema MakerDAO. Le due pagine più utili per aver informazioni sono [liquidations](https://mkr.tools/system/liquidations) e [bites](https://mkr.tools/system/bites).
