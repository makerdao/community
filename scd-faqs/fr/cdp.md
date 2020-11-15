# Position de Dette Collatéralisée \(CDP\)

## Qu'est-ce qu'une position de dette garantie \(CDP\) ?

Les positions de dette garantie de MakerDAO, ou _CDP_ \(_Collateralized Debt Position_\), sont une forme de prêt gérée par un contrat intelligent qui s'exécute sur la chaîne de blocs Ethereum. Le CDP est un rouage fondamental de la monnaie stable Dai \(prononcé \daj ou "daï" au singulier comme au pluriel\): il permet la création de dais garantis par des cryptoactifs conservés jusqu'à ce que le dai emprunté soit retourné.

Les différentes opérations effectuées sur les CDP modifient la quantité de dais en circulation. Les utilisateurs créent des dais lors d'un emprunt garanti et détruisent des dais lorsqu'ils remboursent leur dette. Ce processus se déroule sur la chaîne; le dai en circulation et les cryptoactifs en garantie sont donc entièrement auditables.

Les CDP requièrent un surplus de garanties, c’est-à-dire que la valeur des jetons en garanties dans un CDP doit être plus élevée que la dette. Cela assure aux utilisateurs du système Dai que leur monnaie a une valeur couverte par de réels actifs.

## Comment fonctionne un CDP ?

Tout individu désireux d'emprunter des dais peut déposer des ethers dans un CDP. L'utilisateur peut alors créer des dais garantis par la valeur de ses actifs. Tant que le CDP maintient un [niveau de garantie](https://github.com/makerdao/community/blob/master/faqs/cdp.md#what-is-the-collateralization-ratio) minimum, le ou la propriétaire du CDP est libre de prendre ou déposer des jetons en garantie.

Après émission d'un dai, l'utilisateur du CDP est libre de faire ce qu'il ou elle en veut. S'il ou elle souhaite récupérer la totalité de sa garantie, il faudra rembourser tous les dais empruntés.

Ce cycle emprunt/remboursement et dépôt/retrait de garantie peut continuer aussi longtemps qu'un détenteur de CDP souhaite maintenir sa position. Un utilisateur peut fermer ses CDP en remboursant intégralement sa dette et les frais qui lui sont associés.

## Qui peut ouvrir un CDP ?

Chacun peut créer et utiliser un CDP ; aucun accord préalable n'est nécessaire. Il n'y a ni vérification des antécédents de crédit ni procédure de demande fastidieuse. Le système n'est sous le contrôle d'aucun garde ou intermédiaire. Un CDP Maker est sous le contrôle du compte Ethereum qui l'a créé et peut être librement transféré d'un portefeuille à un autre.

## Y a-t-il des frais associés à l'utilisation d'un CDP ?

Oui. Les détenteurs de CDP doivent payer les frais de stabilité, calculés sur la base de leur dette en cours et selon un [taux d'intérêt annuel composé en continu](http://financedemarche.fr/finance/taux-dinteret-compose-classique-et-taux-dinteret-en-composition-continue).

Si le niveau de garantie d'un CDP devient insuffisant, le CDP est alors "à risque": il peut être liquidé et voir ses actifs saisis de façon autonome par le système Maker, avant d'être vendus pour couvrir la dette impayée. Cette procédure s'accompagne d'une pénalité de liquidation.

## Qu'est-ce que le niveau de garantie ?

Le niveau de garantie est le rapport entre la valeur de la garantie qu'un utilisateur a déposée dans son CDP et les dais empruntés.

Supposons par exemple que les ethers déposés dans notre CDP valent pour l'instant 150\$ et que nous avons emprunté 50 DAI. Cela signifie que le niveau de garantie est de 300%: pour chaque dai, il y a 3 dollars de garantie. Le système Maker peut liquider un CDP qui passerait en dessous du [seuil de liquidation](https://github.com/makerdao/community/blob/master/faqs/liquidation.md#what-is-the-liquidation-ratio), à savoir le niveau de garantie minimum.

## Quels risques encourent les propriétaires de CDP ?

Posséder un CDP est un risque en soi. Il y a quatre catégories majeures de risques à prendre en compte: les risques de marché, les risques d'usage, les risques systémiques et l'exposition aux paramètres de risque.

### Risques de marché

Utiliser un CDP consiste à contracter un emprunt et à transférer la propriété de ses actifs à un contrat intelligent susceptible de les vendre dans un marché en chute. Tout CDP avec une dette a un prix de liquidation: le prix auquel il sera liquidé. Utiliser un CDP pour obtenir un [effet de levier](https://educationfinance.ca/investissements/strategie-deffet-de-levier/) ajoute un risque supplémentaire, car si l'effet de levier augmente le gain potentiel, il augmente aussi les pertes potentielles. Les utilisateurs choisissent souvent de maintenir un niveau de garantie élevée afin de se prémunir contre une liquidation à la suite d'un recul du marché.

### Risques d'usage

Les erreurs de l'usager présentent des risques. MakerDAO n'a pas la capacité d'annuler des transactions ou de récupérer des fonds envoyés aux mauvaises adresses ou aux mauvais contrats.

### Risques systémiques

Le succès futur de la plate-forme Maker fait face à de nombreux risques systémiques. La liste ci-dessous s'efforce de mettre l'accent sur certains d'entre eux, mais n'est pas exhaustive:

- Un piratage malveillant à l'encontre de l'infrastructure de contrats intelligents
- Un événement cataclysmique concernant un ou plusieurs actifs en garantie
- Erreurs de prix, irrationalité des marchés, et autres circonstances imprévues
- Défaillance de l'infrastructure centralisée, par exemple perte de connexion internet, bogue de MetaMask, etc.

### Exposition aux paramètres de risque

Les paramètres de risque qui gouvernent le système peuvent changer, et il est important de noter leur impact potentiel sur les détenteurs de CDP: il s'agit pour eux d'un risque financier. Voici une liste partielle des paramètres susceptibles de changer:

- Frais de stabilité
- Seuil de liquidation
- Plafond de la dette d'un type de garantie
- Pénalité de liquidation

## Quelles sont les bonnes pratiques permettant de limiter les risques ?

On peut atténuer les risques de marché en utilisant des alertes de prix, en maintenant un niveau de garantie élevé, en surveillant régulièrement la bonne santé de son CDP et en conservant suffisamment de réserves à l'extérieur de son CDP pour rembourser sa dette ou ajouter des garanties. Beaucoup d'utilisateurs se retrouvent en situation périlleuse ou ont tendance à faire des paris risqués sur les mouvements du marché. Cela peut conduire à la liquidation de leur CDP et à des pertes financières.

Les risques d'usage peuvent être atténués en commençant par de petites sommes et en vérifiant minutieusement les adresses de transaction.

## Quel est l'intérêt d'avoir un CDP ?

**Remboursement flexible** Lorsqu'on possède un CDP, il n'y a pas de limite de temps ou de rythme de remboursement minimum. Un utilisateur est libre de faire des retraits en dai ou d'ajouter des garanties quand il le souhaite.

**Pas besoin d'antécédent de crédit** Aucune vérification sur l'historique de crédit n'est faite, et il n'y a pas de procédure de demande fastidieuse. Il suffit d'avoir une adresse Ethereum pour accéder au système.

**Pas d'interaction avec des tiers** Puisque le système est constitué de contrats intelligents autonomes, chaque utilisateur peut interagir avec un système financier transparent et n'a besoin de faire confiance à aucune institution concernant la gestion et la mise à disponibilité de ses fonds. Chaque transaction est enregistrée sur une chaîne de blocs publique et peut être auditée par chacun.

**Effet de levier décentralisé** En mettant ses ethers en garantie, en retirant des dais, et en achetant des ethers supplémentaires qu'il ou elle ajoute à sa position initiale, un utilisateur peut créer un effet de levier.

## Pourquoi ouvrir un CDP ?

On peut vouloir ouvrir un CDP pour de nombreuses raisons. Voici quelques exemples basés sur l'expérience d'utilisateurs:

- **Effet de levier**: Un utilisateur convaincu qu'un actif va bientôt prendre de la valeur peut utiliser une partie de sa garantie pour obtenir des dais avec lesquels il ou elle achète cet actif. Plus tard, en cas d'appréciation de l'actif, l'utilisateur peut le vendre pour plus de dais qu'il n'en avait emprunté, rembourser sa dette, et conserver la différence.
- **Ligne de crédit flexible**: Un utilisateur souhaite acheter une voiture et arrive à la conclusion que les méthodes de financement traditionelles ne lui proposent pas des termes ou des frais aussi intéressants que ceux disponibles avec un CDP. L'utilisateur peut emprunter des dais garantis par ses ethers, acheter la voiture, et effectuer des remboursement à son propre rythme.
- **Refinancement**: Un utilisateur qui a contracté un emprunt à taux élevé peut éviter de liquider ses actifs pour rembourser sa dette en empruntant des dais garantis par ses ethers, en convertissant les dais en monnaie fiduciaire, et en remboursant une partie ou l'intégralité de sa dette plus coûteuse.

Il est important de garder à l'esprit que toute création de CDP suivie d'un emprunt de dais revient à contracter une dette et à prendre des risques, comme par exemple celui de voir les frais de stabilité augmenter, ou de voir son CDP liquidé.

## Quand faut-il éviter d'ouvrir un CDP ?

_Rien_ de ce qui suit n'est un conseil de placement, mais il peut être bon de noter les raisons possibles qui pourraient mener à ne pas ouvrir un CDP.

Par exemple, si vous cherchez une cryptomonnaie stable mais n'êtes pas habitué aux subtilités de l'interaction avec les contrats intelligents, vous ne devriez pas ouvrir un CDP. La pratique établie serait plutôt d'acheter des dais sur une bourse de cryptomonnaies.

L'ouverture d'un CDP peut aussi créer une exposition à plusieurs formes de risques et mener à des pertes financières.

Si vous pensez que le marché s'apprête à entrer dans une phase baissière prolongée, prenez en compte le niveau de gestion qu'un CDP exigerait. Dans un marché baissier, vous devrez peut-être ajouter en permanence des garanties pour maintenir votre position, ou bien disposer à tout moment de suffisamment d'actifs échangeables contre des dais pour rembourser votre dette.

## Quels sont les types de garanties acceptées pour un CPD ?

La version courante du système Dai n'accepte que l'ether en garantie. La prochaine version du système acceptera plusieurs types d'actifs; ceux-ci seront déterminés par les détenteurs de MKR à travers le processus de gouvernance.

## Peut-on rembourser ses dais depuis une bourse de cryptomonnaies ?

Non, une méthode particulière du contrat intelligent doit être utilisée, soit à travers une interface web, soit par interaction directe. Si vous utilisez autre chose que l'interface web et le portefeuille ayant ouvert le CDP sans avoir une compréhension profonde du contrat, les résultats peuvent être désastreux.

## Y a-t-il un niveau de garantie maximum ?

Il n'y a pas de limite supérieure à la quantité de garanties qui peuvent être placées dans un CDP.

## Si mes ethers sont dans un CDP, que se passe-t-il lors d'un parachutage de jetons \(_airdrop_\) ?

Tout actif placé dans le système est géré par des contrats intelligents incapables de garder la trace ou de redistribuer des jetons parachutés. Les jetons envoyés aux adresses de ces contrats sont inaccessibles.

## Puis-je simultanément placer mes cryptoactifs dans un CDP et dans un autre projet ?

Une fois vos actifs déposés ou misés \(_staked_\), il n'est plus possible de les utiliser dans un autre contrat. Il sera _peut-être_ possible pour un projet, un jour, d'émettre des jetons représentant des actifs déposés dans un autre système. Les électeurs de MakerDAO choisiront peut-être un jour d'autoriser l'usage de ces jetons comme garantie.

## Dois-je rembourser mes dais même si ma garantie a pris de la valeur ?

Pour accéder à tout leur dépôt de garantie, les utilisateurs doivent manuellement rembourser leur dette, y compris les [frais de stabilité](https://github.com/makerdao/community/blob/master/faqs/stability-fee.md#what-is-the-stability-fee). Le système ne puise pas dans les dépôts dont la valeur aurait augmenté pour régler automatiquement les frais de stabilité.

À mesure que la garantie prend de la valeur, les utilisateurs peuvent en retirer une portion de manière à maintenir le même niveau de garantie. Toute garantie au-dessus du seuil de liquidation peut être retirée, mais cette façon de faire augmente le prix de liquidation et le niveau de risque du CDP. Si votre garantie prend la valeur, votre niveau de garantie augmente.

## Puis-je continuer d'utiliser mon CDP après liquidation ?

Oui, vous pouvez emprunter des dais tant qu'il reste un dépôt de garantie dans votre CDP. La liquidation ne ferme pas le CDP: vous pouvez ajouter des garanties et recommencer.

## Comment vérifier la solvabilité de l'écosystème des CDP ?

Le système s'exécutant sur la chaîne Ethereum, tous les contrats et toutes les transactions sont publics. Les utilisateurs peuvent interagir avec un système financier entièrement transparent, sans avoir à faire confiance à des institutions pour la contrepartie. Chacun peut soi-même vérifier la solvabilité du système en se rendant sur l'un des nombreux [tableaux de bord statistiques de MakerDAO](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai), ou en interrogeant directement la chaîne de blocs.
