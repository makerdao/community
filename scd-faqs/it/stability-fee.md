# Il tasso di interesse

## Che cosa è la Stability fee?

La Stability fee \(letteralmente: tassa di stabilità\) è il tasso di interesse applicato al proprio debito in Dai da pagare al sistema MakerDao in cambio del prestito erogato.

Lo smart contract di Maker preleva, nel corso del tempo, una percentuale del debito Dai di un CDP. Questa percentuale è variabile e può cambiare nel tempo se i possessori di token MKR approvano, attraverso il voto, una modifica della percentuale su proposta del Interim Risk Team.

## Quando dovrò pagare la Stability Fee?

Quando ripaghi il tuo debito, restituendo i Dai precedentemente presi in prestito nel tuo CDP, ti verrà automaticamente chiesto di ripagare anche la corrispondente Stability Fee, cioè gli interessi accumulati nel corso del tempo. La Stability Fee può essere ripagata sia in Dai che in MKR.

## Dovrò pagare gli interessi correnti anche su un debito contratto in precedenza?

No. Il tasso di interesse non è mai applicato retroattivamente. Quando una modifica del tasso di interesse viene approvata, gli interessi vengono calcolati con il nuovo tasso di interesse da quel momento in avanti. Questo è esattamente lo stesso meccanismo del comune prestito bancario con tasso di interesse variabile.

## Quale è lo scopo della Stability Fee?

La Stability Fee è uno dei parametri del sistema MakerDao che permettono di bilanciare la domanda e l'offerta di Dai nel mercato, ad esempio in una situazione quale quella di un periodo di decrescita del mercato delle criptovalute.

Il meccanismo della Stability Fee è semplice; quando la domanda di mercato per i Dai aumenta, allora aumenterà anche il tasso di interesse richiesto e, inversamente, quando la domanda di Dai è in calo il tasso verrà abbassato. Queste manovre servono a riequilibrare la domanda e l'offerta e hanno un effetto di stabilizzazione sul valore di Dai mantenendolo agganciato a quello del dollaro.

## Perché il tasso della Stability Fee è variabile?

Se per un certo periodo il Dai viene scambiato nel mercato ad un valore costantemente superiore o inferiore a quello del dollaro americano, questo significa che si ha uno squilibrio tra la domanda e l'offerta di Dai. La Stability Fee è il sistema principale per controllare questo equilibrio poiché essa determina il costo in cui si incorre per ottenere in prestito \(cioè, creare\) i Dai. Con una Stability Fee bassa risulta molto conveniente prendere in prestito Dai e quindi molti utenti saranno incentivati a creare nuovi Dai. Viceversa, quando la Stability Fee è molto alta, meno utenti decideranno di creare nuovi Dai. I possessori di token MKR possono, attraverso il voto, regolare la Stability Fee e, conseguentemente, mantenere in equilibrio la domanda e l'offerta di Dai.

Se il Dai viene scambiato nel mercato ad un valore superiore a 1 USD, questo significa che la richiesta di Dai supera l'offerta e che nel mercato gli acquirenti sono disposti a pagare un premium \(rispetto al prezzo nominale di 1 USD\) per entrare in possesso di Dai. Se questo accade troppo spesso, è necessario abbassare il tasso di intresse della Stability fee per incentivare la creazione di nuovi Dai e quindi aumentare l'offerta.

Se il Dai viene scambiato nel mercato ad un valore inferiore a 1 USD, questo significa che l'offerta supera la domanda e che nel mercato vi sono troppi Dai in circolazione. Se questo accade troppo spesso, è necessario aumentare il tasso di interesse per rendere meno appetibile la creazione di nuovi Dai e quindi ridurre l'offerta.

Sfortunatamente non è possibile prevedere perfettamente quale sarà l'impatto di una modifica della Stability Fee poiché gli effetti dipendono dalla reazione dei mercati. Però, col passare del tempo vi saranno sempre più dati a disposizione per sviluppare accurati modelli di previsione, o anche robusti modelli reattivi, che aiuteranno a determinare il livello adeguato della Stability Fee.

## Come viene calcolata la Stability Fee?

La Stability Fee, cioè l'interesse applicato ad un CDP, è calcolato in modo _continuo_. Esso è denominato in Dai e può essere pagato sia in Dai che in MKR. Come mostrato attraverso le formule sottostanti, ciò determina un calcolo dell'interesse dovuto basato su brevi intervalli, invece che in settimane, mesi o anni. Questo produce un pagamento del tasso di interesse molto vicino a quello che sarebbe un tasso d'interesse annuale composto. Questa sistema è stato scelto per gestire CDP che possono avere durate molto diverse fra loro. Siccome non c'è nessuna restrizione sulla durata di un CDP, è importante che il sistema calcoli il tasso di interesse variabile in modo molto preciso.

Consideriamo i vari risultati che si ottengono applicando varie tipologie di calcolo dell'interesse, assumendo che un CDP con un debito di 100.000 DAI sia stato chiuso dopo 365 giorni.

### Formule:

Significato:

**A** = Interesse

**P** = Valore dell'investimento iniziale \(il deposito iniziale o l'ammontare del debito\)

**r** = L'interesse annuale \(espresso in decimali\)

**n** = Il numero di volte che il tasso d'interesse è calcolato nel corso dell'anno

**t** = Il numero di anni per i quali i soldi sono presi in prestito

**e** = [La costante di Eulero o Nepero](https://www.youmath.it/domande-a-risposte/view/6078-quanto-vale-il-numero-e.html)

- **P** \(1 + r/n\)^nt - P = A: Interesse annuale composto
- **P** \(1 + r/n\)^nt - P = A: Interesse mensile composto
- **P** \(e\)^rt - P = A: Interesse continuo composto

### Semplificazione

Calcolando l'interesse da ripagare con la formula dell'interesse annuale composto si ha:

```text
100,000 × (1 + (12.5% / 1)) ^ (1 × 1) - 100,000 = 12,500 DAI
```

Calcolando l'interesse da ripagare con la formula dell'interesse mensile composto si ha:

```text
100,000 × (1 + (12.5% / 12)) ^  (12 × 1)  - 100,000 = 13,241.60 DAI
```

Calcolando l'interesse da ripagare con la formula dell'interesse continuo composto si ha:

```text
100,000 × 2.7183... ^ (12.5% × 1) - 100,000 = 13,314.94 DAI
```

La differenza tra l'interesse annuale composto e l'intresse continuo composto su un prestito di 100.000 Dai, al tasso di interesse annuale del 12.5%, è di circa **814.94 Dai**. Vediamo, attraverso altri esempi, come la Stability Fee è calcolata in pratica.

## Un semplice esempio

Assumiamo che:

- Un CDP è stato creato e ha generato un totale di **1000 DAI**
- Il CDP è aperto da **30 giorni**
- Il valore attuale di un token MKR è di **100 DAI**
- La Stability Fee \(tasso d'interesse\) è del **5%**
- L'utente ripaga una porzione del proprio debito per un totale di **50 DAI**

Il costo totale \(denominato in Dai\) per ripagare **50 DAI** su **1000 DAI** dopo **30 giorni** è di **0.208 DAI** o, approssimativamente, 0.21 USD.

Quando il debito è ripagato in MKR, il costo totale dell'operazione è di **0.00021 MKR**.

## Un esempio dettagliato

Il tasso di interesse complessivo accumulato in un CDP può essere calcolato come segue:

> \(\(\(Ammontare del debito in Dai \* \(1 + tasso della Stability Fee in formato decimale\)\) ^ \(Durata del CDP in giorni/365\)\) - Ammontare del debito in Dai \) = Ammontare degli interessi da pagare espresso in Dai.

Quando inseriamo i valori già considerati in precedenza, otteniamo il seguente interesse complessivo da pagare:

```text
(1000 * (1 + 0.05) ^ (30÷365)) - 1000 = 4.018 DAI
```

Ora, dopo che abbiamo calcolato l'interesse da pagare in Dai, possiamo convertirlo in MKR. Assumendo che 1 MKR valga 100 DAI, si ottiene:

```text
4.018 ÷ 1000 = 0.004018 MKR
```

E, siccome l'utente sta ripagando 50 DAI, egli dovrà pagare gli interessi accumulati su quella porzione del proprio debito:

```text
(50 * (1 + 0.05) ^ (30÷365)) - 50 = 0.2009 DAI
```

Che, convertito in MKR corrisponde a:

```text
0.2009 ÷ 1000 = 0.0002009 MKR
```

Dunque l'utente dovrà avere **0.0002009 MKR** nel proprio wallet per pagare l'interesse accumulato sul prestito di **50 DAI** dopo **30 giorni**.

Dopo che la transazione sarà completata, il totale dell'interesse da ripagare sulla restante parte del CDP è di:

0.004018 - 0.0002009 = **0.0038171 MKR**

## Il sistema come gestisce gli interessi accumulati?

Una volta che gli interessi sono stati pagati, la piattaforma di smart contract trasferisce i MKR ottenuti ad un wallet chiamato [Burner](https://etherscan.io/address/0x69076e44a9c70a67d5b79d95795aba299083c275).

Ogni MKR che risiede nel burner wallet, prima di essere distrutto per sempre, è completamente fuori circolazione poiché nessuno può prelevare dei MKR da questo wallet.

## Dove posso visualizzare l'ammontare degli interesi accumulati nel mio CDP?

[Vecchia CDP Dashboard](https://dai.makerdao.com/): L'ammontare complessivo è visualizzato sulla colonna "Governance Debt" della Dai Dashboard.

[Nuova CDP Portal](https://cdp.makerdao.com/): L'ammontare complessivo è visualizzato sul pannello di destra che appare quando clicchi "Payback".

Inoltre, nella sezione [Watch your Dai section](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) del Awesome-MakerDAO Repository, sono messi a disposizione tutta una serie di altri strumenti sviluppati da terze parti.

## Come fa la Stability fee ad impattare lo stato della domanda e dell'offerta?

Un aumento della Stability Fee determina un aumento del costo da sostenere per creare dei Dai. Conseguentemente l'offerta di Dai sul mercato calerà in quanto la creazione di nuovi Dai risulta meno conveniente. Viceversa, un abbassamento della Stability Fee incentiverà la creazione di nuovi Dai e, dunque, rappresenta un modo per aumentare l'offerta.

## Come posso calcolare l'impatto della variazione nel tempo della Stability Fee?

Puoi utilizzare questa semplice formula per determinare l'ammontare dell'interesse da te accumulato:

> \(\(Ammontare del debito in Dai \* \(1 + Stability Fee attuale in formato decimale\)\) ^ \(Durata del CDP in giorni/365\)\) - Ammontare del debito in Dai \) = Interesse complessivo accumulato espresso in Dai

L'interesse dovuto su un debito di 10,000 DAI nel corso di 31 giorni al 5%:

```text
(10000 x (2.7183...) ^ (5.0%*(31/365)) - 10000 = 42.474 DAI
```

E al 10%:

```text
(10000 x (2.7183...) ^ (10.0%*(31/365)) - 10000 = 85.2937 DAI
```

## Come posso saperne di più sui Team di analisi del rischio \(Risk Teams\) e comunicare con la Foundation a proposito di modifiche in corso, o future, del sistema MakerDao?

Puoi partecipare ai meeting settimanali [Governance and Risk](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) dove discutiamo di queste tematiche in modo dettagliato. L'agenda degli incontri è pubblicata regolarmente su [r/MakerDAO](https://www.reddit.com/r/MakerDAO/). Inoltre, visita anche [Governance section](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#governance) sul Awesome-MakerDAO repository.

## Esiste un limite alla variabilità della Stability fee?

Il Risk Team propone un ventaglio di opzioni per la modifica del tasso della Stability fee \(quantità di modifiche da effettuare nel corso del tempo, deviazioni del valore di Dai dal valore ideale di 1 USD, intervalli temporali tra raccolte dati\) e le presenterà ai possessori di MKR per essere votate.

## In che modo i possessori di CDP possono gestire il rischio di un cambio eccessivo della Stability Fee?

Ci sono varie opzioni che possono essere considerate per gestire possibili modifiche nella Stability Fee.

Il valore del token MKR potrebbe essere positivamente correlato all'aumento del tasso della Stability fee. Se ciò accade, i possessori di CDP possono acquistare token MKR per controbilanciare eventuali perdite, derivate dall'aumento del tasso d'intresse, con l'aumento di valore dei token MKR.

Utenti alla ricerca di presti a tasso fisso e durata determinata possono mitigare il rischio di un aumento della Stability Fee rivolgendosi a terze parti disposte ad assumersi il rischio di un prestito a durata determinata su altre piattaforme di prestito.

In ogni caso, la miglior strategia per adattarsi alle modifiche della Stability Fee è di partecipare al processo di amministrazione di MakerDAO e di votare le proposte nel momento in cui vengono presentate.

## Cosa succede se una modifica alla Stability Fee viene rigettata mediante votazione?

Se la votazione di una proposta di modifica alla Stability Fee ha risultato negativo, e se il valore del Dai continua a non restare agganciato a quello del dollaro, allora il valore del Dai può crollare. Se questo accade, l'unica opzione a disposizione della Foundation è di effettuare un Arresto di Emergenza \(Emergency Shutdown\) per assicurare la sicurezza finanziaria di tutti i possessori di Dai in circolazione.

Il voto è il meccanismo primario attraverso il quale la comunità gestisce e mantiene il valore del Dai ancorato a quello del dollaro mediante modifiche accurate dei parametri del sistema. Non vi è alcuna "backdoor," e nessuno può modificare unilateralmente i parametri del sistema.

## Ogni quanto viene modificata la Stability Fee?

Non è possibile prevedere con precisione quando delle modifiche alla Stability Fee si renderanno necessarie, e in che misura.

L'Interim Risk Team monitora costantemente tutte le modifiche effettuate in precedenza e può proporre ulteriori modifiche quando necessario. Risulta difficile prevedere come e quando il mercato reagirà alle modifiche e, per questa ragione, i Risk Teams considereranno ogni modifica caso per caso.

A causa del rischio di manipolazione, sarà sempre necessario mantenere un certo livello di discrezione e di gestione della comunicazione nel determinare esattamente in che modo modificare la Stability Fee. Procedure completamente automatiche \(algoritmi\) di modifica della Stability Fee sono vulnerabili a manipolazioni e dovranno sempre essere poste sotto costante sorveglianza.
