# I CDP

## Che cosa sono i debiti garantiti da pegno \(CDP\)?

In MakerDao, un debito garantito da pegno \(Collateral Debt Position\), abbreviato con la sigla _CDP_, è un tipo di prestito amministrato da uno smart contract in esecuzione sulla blockchain di Ethereum. Il CDP é un componente fondamentale del sistema Dai e permette la creazione di Dai mettendo in pegno una certa quantità di criptovalute come garanzia \(collateral\). Questo pegno di garanzia è restituito al creatore del CDP quando i Dai creati in precedenza vengono interamente restituiti.

La creazione e l'uso di CDP modifica la quantità di Dai in circolazione. Gli utenti creano nuovi Dai quando li ottengono in prestito, lasciando un corrispondente quantitativo di criptovalute come pegno di garanzia, e li distruggono quando li restituiscono. Questo processo di creazione/distruzione avviene interamente sulla blockchain e ciò consente una completa trasparenza sulla quantità esistente di Dai in circolazione e sulla quantità di criptovalute lasciate come pegno di garanzia per questi Dai.

I CDP devono necessariamente avere un pegno di garanzia superiore al valore dei Dai presi in prestito. Il valore del pegno di garanzia di un CDP, che naturalmente può variare nel tempo, deve sempre restare superiore alla quantità di Dai presi in prestito. Questo serve a garantire il valore dei Dai in circolazione.

## Come funziona un CDP?

Ogni utente che voglia ottenere dei Dai può depositare degli ETH in un CDP come pegno di garanzia. Una volta che questi ETH sono stati bloccati e messi e garanzia, l'utente può generare una quantità di Dai coperta dal proprio pegno in ETH. Fintanto che il rapporto tra i Dai generati e il valore del pegno rimane sopra ad un livello minimo \([Collateralization Ratio](https://github.com/makerdao/community/blob/master/faqs/cdp.md#what-is-the-collateralization-ratio)\), l'utente è libero di prelevare parte del proprio pegno in ETH o di aggiungere altri ETH.

Una volta generati per mezzo di un CDP, i Dai possono essere utilizzati in qualsiasi modo. Se l'utente vuole rientrare in possesso del proprio pegno di garanzia, egli deve semplicemente restituire tutti i Dai presi in prestito.

Questo ciclo di prestiti e restituzioni, di aggiunta e rimozione di pegno di garanzia, può continuare fintanto che il possessore del CDP decide di mantenere attivo il proprio CDP. L'utente può infine decidere di chiudere il proprio CDP semplicemente restituendo tutti i Dai presi in prestito e gli interessi accumulati su questo prestito nel corso del tempo.

## Chi può aprire un CDP?

I CDP non richiedono alcun permesso; chiunque può generarne ed utilizzarne uno. Non vi sono vincoli legati alla storia creditizia dell'utente o complessi moduli da compilare. Il sistema non è controllato da intermediari o altre terze parti. I CDP di MakerDao sono gestiti dal possessore del conto Ethereum che apre i CDP e possono essere trasferiti tra vari wallet liberamente.

## Ottenere un prestito con un CDP richiede il pagamento di un tasso di interesse?

Sì. I possessori di CDP devono pagare un interesse \(Stability Fee, letteralmente "tassa di stabilita"\) sul prestito loro concesso. Si tratta di tasso composto continuo \([APY continuously compounded rate](https://it.wikipedia.org/wiki/Tasso_d'interesse#Montante_ad_interesse_composto_continuo_o_matematico)\).

Se un CDP diventa 'insicuro', cioè se il valore complessivo del pegno di garanzia scende sotto un certo limite, esso verrà liquidato ed il pegno di garanzia verrà automaticamente venduto dal sistema MakerDao per coprire il valore dei Dai generati in precedenza nel CDP. Questa procedura è soggetta ad una penalità di liquidazione.

## Che cosa è il rapporto di garanzia?

Il rapporto di garanzia \(Collateralization Ratio\) è il rapporto tra il valore del pegno di garanzia \(collateral\) che l'utente ha inserito nel proprio CDP e il totale dei Dai generati.

Ad esempio: supponiamo che l'utente abbia inserito nel suo CDP un pegno in ETH del valore complessivo di 150 USD e che abbia generato 50 USD. Questo significa che il suo rapporto di garanzia è del 300%. Per ogni Dai generato ci sono 3 USD di ETH come pegno di garanzia. Nel sistema MakerDao, il CDP verrà liquidato se il rapporto di garanzia scende sotto un livello minimo chiamato rapporto di liquidazione \([Liquidation Ratio](https://github.com/makerdao/community/blob/master/faqs/liquidation.md#what-is-the-liquidation-ratio)\).

## Quali sono i rischi in cui si incorre utilizzando un CDP?

Prendere in prestito dei Dai mediante un CDP comporta naturalmente dei rischi. Vi sono quattro categorie di rischio principali da considerare quando si apre un CDP: rischi di mercato, rischi di errori da parte dell'utente, rischi sistemici e rischi associati alle modifiche dei parametri del sistema.

### Rischi di mercato

Utilizzare un CDP significa ottenere dei Dai in prestito e dover trasferire temporaneamente la proprietà delle proprie criptovalute messe a pegno di garanzia verso uno smart contract. Questo smart contract, nel caso in cui i limiti di liquidazione vengano raggiunti, può vendere il pegno di garanzia.

Ogni CDP attraverso il quale sia stato generato un prestito ha un prezzo di liquidazione \(Liquidation Price\). Se il valore complessivo del pegno di garanzia raggiunge questo valore limite, il CDP verrà liquidato. Utilizzare un CDP per ottenere un [effetto leva](http://www.consob.it/web/investor-education/la-leva-finanziaria) \(leverage\) introduce, ovviamente, un'ulteriore componente di rischio. L'effetto leva aumenta i margini di guadagno ma anche quelli di perdita. Una buona pratica da seguire è quella di mantenere sempre un rapporto di garanzia \(Collateralization Ratio\) alto per evitare di essere liquidati qualora il valore del proprio pegno di garanzia scenda.

### Rischi di errori da parte dell'utente

Ci sono dei rischi inerenti associati agli errori che i singoli utenti possono commettere. MakerDao non ha nessuna possibilità di annullare o invertire delle transazioni, o di recuperare dei fondi inviati per sbaglio ad indirizzi sbagliati.

### Rischi sistemici

Esistono numerosi rischi potenziali che riguardano l'operazione corretta e continua della piattaforma Maker. La seguente lista elenca alcuni esempi ma non è esaustiva:

- Un attacco da parte di hackers all'infrastruttura di smart contract
- Un evento catastrofico ed improvviso che riguardi una delle criptovalute utilizzate come pegno di garanzia
- Errori nel calcolo del prezzo, irrazionalità di agenti di mercato, circostanze impreviste
- Guasti di infrastrutture centralizzate. Ad esempio, interruzioni della connessione Internet, bug in software di terze parti \(esempio, MetaMask\), etc.

### Rischi associati alle modifiche dei parametri del sistema

I possessori di CDP subiscono gli effetti delle modifiche ai parametri di rischio che governano il sistema Dai. Questo determina un rischio finanziario per i possessori di CDP. Di seguito sono elencati alcuni parametri del sistema che possono essere modificati nel tempo:

- Tasso d'interesse \(Stability Fee\).
- Rapporto di liquidazione \(livello minimo del rapporto di garanzia prima di raggiungere lo stato di liquidazione\).
- Ammontare massimo di debito contraibile a seconda del pegno.
- Penalità di liquidazione.

## Quali sono le pratiche più comuni utilizzate per ridurre il rischio?

I rischi di mercato possono essere ridotti monitorando costantemente le variazioni nei prezzi del mercato, mantenendo un rapporto di garanzia elevato, verificando lo stato di sicurezza del CDP frequentemente e assicurandosi di mantenere un fondo di criptovalute al di fuori del CDP per ripagare il debito o per aggiungere ulteriore pegno di garanzia. Alcune persone tendono a sovraesporsi o ad effettuare delle scommesse di mercato eccessivamente rischiose. Questi comportamenti spesso risultano in perdite e nella liquidazione del proprio CDP.

I rischi derivanti dagli errori umani dell'utente possono essere mitigati facendo dei piccoli test prima di impegnare grandi quantità di denaro e controllando sempre con quale indirizzo si sta interagendo.

## Che benefici si hanno dall'utilizzare un CDP?

**Pagamenti flessibili** In un prestito ottenuto per mezzo di CDP non vi è alcuna scadenza per ripagare il proprio debito, né quantità minime da ripagare. Gli utenti sono liberi di generare Dai o di aggiungere ulteriore pegno di garanzia, quando e come vogliono.

**Nessuna dipendenza dalla storia creditizia** Non vi è alcun vincolo circa la storia creditizia dell'utente né moduli da compilare. Chiunque abbia un indirizzo Ethereum può accedere al sistema.

**Nessuna controparte** Poiché il sistema funziona autonomamente mediante uno smart contract, gli utenti hanno a che fare con un sistema finanziario completamente trasparente e che non dipende da alcuna controparte. Tutte le transazioni sono registrate sulla blockchain e sono visibili e verificabili da chiunque.

**Trading con effetto leva decentralizzato** Gli utenti possono decidere di ottenere dei Dai, lasciando degli ETH come pegno di garanzia, ed utilizzare questi Dai per acquistare ulteriori ETH. Questa pratica genera un effetto leva e permette di beneficiare di un eventuale apprezzamento del valore di ETH.

## Perché dovrei volere aprire un CDP?

Ci possono essere molte buone ragioni per aprire un CDP. Basandoci sulle esperienze di alcuni utenti, di seguito ne riportiamo alcune:

- **Effetto leva**: Un utente può pensare che una certa criptovaluta aumenterà presto di valore. Può quindi decidere di ottenere dei Dai in prestito e utilizzare questi Dai per acquistare questa criptovaluta. Successivamente, se il valore della criptovaluta sarà effettivamente aumentato, l'utente potrà vendere la criptovaluta acquistata con i Dai, restituire i Dai presi in prestito e trarne un profitto.
- **Linea di credito flessibile:** Supponiamo che un utente voglia acquistare una macchina e supponiamo che le condizioni di prestito offerte dagli istituti di credito tradizionali siano meno favorevoli di quelle disponibili mediante l'apertura di un CDP. L'utente può quindi prendere in prestito dei Dai usando come garanzia degli ETH e restituire il prestito come e quando vuole.
- **Rifinanziamento:** Supponiamo che un utente sia attualmente indebitato e che il tasso di interesse da dover pagare sia più alto di quello richiesto dal sistema Dai. Invece di vendere dei beni per ripagare il debito e gli interessi, l'utente può decidere di ottenere dei Dai lasciando in pegno i propri ETH, convertire i Dai in valuta fiat e ripagare una porzione o la totalità del proprio debito, traendo così profitto dai tassi vantaggiosi offerti dal sistema Dai.

Ad ogni modo è sempre bene ricordare che creando un CDP e ottenendo in prestito dei Dai, gli utenti si stanno indebitando e si espongono ad un rischio.

## Ci sono delle ragioni per non aprire un CDP?

_Nessuna_ delle considerazioni espresse in questa pagine rappresenta una consulenza finanziaria professionale. Precisato questo, possono esistere alcune buone ragioni per evitare di aprire dei CDP.

Ad esempio, se siete interessati a possedere una criptovaluta stabile come i Dai ma non avete familiarità con le procedure di uno smart contract, allora non dovreste aprire un CDP. Dovreste, invece, semplicemente acquistare dei Dai nel mercato, senza indebitarvi in alcun modo.

Inoltre, come già discusso, l'apertura di un CDP comporta l'assunzione di vari rischi e può portare a delle perdite finanziarie.

Se credi che il mercato delle criptovalute stia per entrare in un periodo prolungato di recessione, dovresti valutare quanto sia impegnativo aprire un CDP. Un periodo negativo prolungato potrebbe richiedere la costante aggiunta di collateral per garantire la sicurezza del CDP, o potrebbe richiede l'utilizzo di fondi sufficienti da vendere in cambio di Dai per ripagare il tuo debito.

## Quali criptovalute posso usare come pegno di garanzia in un CDP?

Al momento il sistema è alla sua prima iterazione \(chiamata Single Collateral Dai\) e l'unica criptovaluta accettata come pegno è ETH. Nelle iterazioni future del sistema \(che sarà chiamato Multi Collateral Dai\), varie criptovalute saranno supportate. Queste verranno scelte e approvate dai possessori di token MKR attraverso il processo di amministrazione basato sul voto.

## Posso ripagare il mio debito inviando dei Dai direttamente dal wallet di un sito di trading \(Crypto Exchange website\)?

No, devi interagire direttamente con un metodo specifico dello smart contract e questo sarà possibile solamente attraverso una specifica interfaccia web o interagendo direttamente con lo smart contract. Utilizzare qualsiasi altro metodo può avere effetti disastrosi, specialmente se non sei a conoscenza di tutti i dettagli dello smart contract.

## Esiste un limite massimo alla quantità di pegno inseribile in un CDP?

Non esiste nessun limite massimo alla quantità di pegno inseribile in un CDP.

## Che cosa succede agli "airdrops" quando i miei Ether sono bloccati in un CDP come pegno di garanzia?

Tutti i pegni di garanzia inseriti nel sistema sono gestiti da uno smart contract che non è in grado di rilevare o redistribuire eventuali token ricevuti per "airdrops". Non vi è semplicemente alcun modo di prelevare dei token inviati all'indirizzo dello smart contract.

## E se volessi impegnare le criptovalute del mio pegno di garanzia anche in altri progetti, oltre che utilizzarle in un CDP?

Una volta che il tuo pegno di garanzia è bloccato e messo come garanzia in un CDP, esso non è più disponibile e non può essere utilizzato in altri contratti. In futuro, altri progetti _potrebbero_ decidere di rilasciare dei token-deposito che rappresentano dei fondi depositati nel loro sistema. In quel caso, i possessori di token MKR potrebbero decidere, attraverso il voto, di accettare questi token-deposito come pegno di garanzia.

## Devo ripagare il mio debito di Dai se il valore del mio pegno di garanzia cresce?

Gli utenti devono manualmente ripagare il loro debito, inclusa la [Stability Fee](https://github.com/makerdao/community/blob/master/faqs/stability-fee.md#what-is-the-stability-fee), per rientrare in possesso della totalità del loro pegno di garanzia. Il sistema non preleva automaticamente la Stability Fee in caso di apprezzamento del valore del pegno di garanzia inserito nei CDP.

Quando il valore del pegno di garanzia cresce, è possibile sbloccarne una parte mantenendo il rapporto di garanzia su livelli di sicurezza. Tecnicamente, si può sbloccare qualsiasi quantità di pegno di garanzia fintanto che si resta al di sopra del minimo rapporto di garanzia, ma questo ovviamente aumenta il rischio di liquidazione. Se il valore del tuo pegno di garanzia cresce, il tuo rapporto di garanzia cresce con esso.

## Posso utilizzare il mio CDP dopo che è stato liquidato?

Si, fintanto che c'è ancora una quantità di pegno di garanzia al suo interno che ti permetta di creare dei Dai. La liquidazione non distrugge il CDP; è quindi possibile aggiungere ulteriore pegno di garanzia e ricominciare da capo.

## Come posso verificare lo stato di solvenza dell'ecosistema dei CDP?

Il sistema è in esecuzione sulla blockchain Ethereum, quindi tutti gli smart contract e tutte le transazioni sono pubblicamente visibili. Gli utenti possono interagire in modo completamente trasparente con il sistema finanziario Maker senza dover porre fiducia in alcune controparte. Chiunque può verificare in ogni momento lo stato di solvenza del sistema visitando uno dei vari siti [MakerDAO statistics dashboards](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai), o interrogando direttamente la blockchain.
