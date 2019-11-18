# Liquidation

## Qu'est-ce que le processus de liquidation?

Un CDP est liquidé lorsque la valeur totale des jetons en garantie \(tel que déterminé par les oracles\) est inférieure au plancher requis pour un cryptoactif donné. On dit alors que le CDP est en défaut. Pour remédier à la situation, une partie de la garantie, correspondant à la dette augmentée des frais de stabilité et d'une pénalité, est saisie. La garantie excédentaire est ensuite retournée au propriétaire du CDP. C'est par ce mécanisme que le _Système de Crédit Dai_ s'assure de pouvoir garantir la valeur de chacun des dais générés.

## Pourquoi a-t-on besoin d'un processus de liquidation?

Contrairement à la monnaie fiduciaire \(_fiat_\), dont la valeur dépend uniquement de la confiance que ses utilisateurs accordent au gouvernement qui la contrôle, le dai est une cryptomonnaie garantie par des biens stockés dans des contrats intelligents. Le dai se veut le successeur moderne de la monnaie-marchandise: le surplus de garanties du système élimine complètement le risque de contrepartie et permet de traiter sans avoir recours à des tiers de confiance, et ce en toute transparence.

Pour assurer en tout temps un niveau de garantie adéquat, une catégorie d'utilisateurs qu'on appelle gardiens est chargée de surveiller l'ensemble des CDP actifs pour détecter ceux qui ne respectent plus le seuil requis. Ces CDP ne sont plus considérés comme sécuritaires et doivent être liquidés le plus rapidement possible. Les gardiens sont des acteurs importants, surtout lorsque les prix chutent rapidement, car ils aident à garantir la solvabilité du système.

## Qu'est-ce que le seuil de liquidation?

Le seuil de liquidation est propre à chacun des cryptoactifs et dépend du profil de risque de ceux-ci. À ce jour, le seul type de garantie accepté est l'ether \(jeton ETH\). Lors du lancement de la première version du _Système de Crédit Dai_, l'équipe de risque intérimaire de Maker a jugé que, selon le profil de risque du jeton ETH, un seuil de liquidation de 150% était de mise.

Un flux d'informations décentralisé, appelé oracle, fournit au système l'information nécessaire pour calculer le niveau de garantie de chaque CDP. La combinaison du seuil de liquidation avec la valeur marchande déterminé par l'oracle est ce qui définit le niveau de garantie.

Prenons l'exemple d'un utilisateur qui souhaite générer 200 dais et qui croit que la valeur des jetons qu'il a mis en garantie n'ira pas en dessous de 50% de son prix au marché actuel. Pour se laisser une marge de manoeuvre, l'utilisateur décide de viser un seuil de liquidation deux fois supérieur à ce qui est requis. Il doit donc déposer 600\$ de jeton ETH pour générer 200 dais.

**Il est important de comprendre qu'à un niveau de garantie d'exactement 150%, la moindre baisse du prix de la garantie placera votre CDP en défaut et il sera vulnérable à la liquidation par un gardien.** Un CDP est considéré sécuritaire lorsque son niveau de garantie est strictement supérieur au seuil de liquidation.

## Quel est le prix de liquidation?

C'est le prix le plus bas qu'un jeton placé en garantie peut atteindre avant que le CDP soit vulnérable à la liquidation par un gardien.

## Quelle est la pénalité de liquidation?

C'est un frais qui est ajouté à l'obligation d'un CDP lorsque sa garantie doit être liquidée.

Les revenus provenant de la pénalité de liquidation sont distribués dans le bassin commun de garantie \(PETH\). Ceci augmente la proportion de jetons ETH adapté \(WETH\) qu'un utilisateur reçoit lorsqu'il retire les garanties de son CDP pour fermer ou diminuer sa position.

## Comment se déroule une liquidation?

Le processus de liquidation est initié par un gardien lorsqu'il ferme un CDP en défaut en l'envoyant vers le contrat de liquidité. Le contrat met alors en vente la garantie du CDP pour en rembourser la dette. Une fois la dette complètement remboursée, l'excédent est retourné au propriétaire du CDP.

Voici en détail le processus de liquidation:

- Le CDP en défaut est fermé.
- La pénalité de liquidation est ajoutée au montant de la dette.
- Le contrat de liquidité saisit suffisamment de garanties pour rembourser un montant égal à la dette augmenté des frais de stabilité et de la pénalité de liquidation, et ce, selon la valeur marchande des cryptoactifs telle que déterminée par l’oracle.
- Le propriétaire du CDP est maintenant en mesure de retirer la garantie restante de sa position fermée.
- Les jetons PETH saisis sont mis en vente à l'adresse [dai.makerdao.com](http://dai.makerdao.com). Un rabais appelé [l'écart Boom/Bust](http://glossary) est appliqué au prix de vente pour inciter les acheteurs.
- Les dais qui découlent de la vente sont incinérés pour effacer la dette du CDP.
- S'il y a un excès de dais suivant la vente, ceux-ci sont vendus pour des jetons PETH qui sont ensuite incinérés, ce qui a pour effet de faire monter la valeur des jetons PETH restants.
- S'il y a un déficit de DAI suivant la vente, des jetons PETH sont générés et vendus pour le couvrir, ce qui a pour effet de diminuer la valeur des jetons PETH.

## Que reste-t-il comme garantie dans un CDP après une liquidation?

Pour déterminer le montant de la garantie restante après une liquidation, vous pouvez utiliser la formule simplifiée ci-bas:

`(Garantie * Prix selon l'oracle * Ratio PETH/ETH) - (Pénalité de liquidation * Frais de stabilité accumulés) - Frais de stabilité accumulés = (Garantie restante * Prix selon l'oracle) DAI`

Exemple:

- Le prix d'un jeton ETH selon l'oracle est de 350 USD
- 10 jetons ETH sont verrouillés dans le bassin de jetons PETH
- Le Ratio PETH/ETH est de 1.012
- La pénalité de liquidation est de 13%
- Le CDP a accumulé des frais de stabilité de 1000 DAI

`(10 × 350 × 1.012) − (13% × 1000) − 1000 = 2412 DAI ou 6.891428571 ETH`

## Comment puis-je calculer mon prix de liquidation?

Pour déterminer le prix de liquidation, vous pouvez utiliser la formule simplifiée ci-bas:

`(Frais de stabilité acumulés * Seuil de liquidation) / (Garantie * Ratio PETH/ETH) = Prix de liquidation`

Exemple:

- Le prix d'un jeton ETH selon l'oracle est de 350 USD
- 12 jetons ETH sont verrouillés dans le bassin de jetons PETH
- Le ratio PETH/ETH est de 1.012
- Le seuil de liquidation est de 150%
- Le CDP a accumulé des frais de stabilité de 1000 DAI

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Le prix au marché d'un jeton ETH devra descendre jusqu'à 123.51 USD avant que ce CDP soit considéré en défaut.

## Comment puis-je calculer mon niveau de garantie?

Pour déterminer votre niveau de garantie, vous pouvez utiliser la formule simplifiée ci-bas:

`(Jetons PETH verrouillés × Prix d'un jeton ETH × Ratio PETH/ETH) ÷ Frais de stabilité accumulés × 100 = Niveau de garantie`

Exemple:

- Le prix d'un jeton ETH selon l'oracle est de 350 USD
- 12 jetons ETH sont verrouillés dans le bassin de jetons PETH
- Le ratio PETH/ETH est de 1.012
- Le CDP a accumulé des frais de stabilité de 1000 DAI

`(12 × 350 × 1.012) ÷ 1000 × 100 = 425.04%`

Le CDP a un niveau de garantie de 425.04%.

## Comment puis-je diminuer le prix de liquidation de mon CDP?

L'un des principaux défis que rencontrera le propriétaire d'un CDP est de gérer une position à effet de levier dans un marché imprévisible. Si le prix au marché de vos jetons mis en garantie s'approche du prix de liquidation, deux options s'offrent à vous: ajouter des jetons en garantie ou repayer votre dette en dais pour éviter la liquidation.

L'option la plus avantageuse dépend de vos objectifs à long terme. Si vous croyez fermement en la valeur future des cryptoactifs placés en garantie, vous pouvez décider d’ajouter à votre position. Si vous souhaitez réduire votre exposition à la volatilité des prix, vous devrez plutôt rembourser votre dette.

La meilleure façon de mitiger le risque de liquidation est de rembourser votre dette. Ceci diminue votre prix de liquidation de manière plus efficace et offre l'avantage supplémentaire de réduire le montant de frais que vous accumulez sur votre position.

Exemple:

- Le prix d'un jeton ETH selon l'oracle est de 350 USD
- 12 jetons ETH sont verrouillés dans le bassin de jetons PETH
- Le ratio PETH/ETH est de 1.012
- Le CDP a accumulé des frais de stabilité de 1000 DAI
- Le seuil de liquidation est de 150%

Prix de liquidation actuel:

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Changement du prix de liquidation avec un ajout d'une garantie de 700 USD:

`(1000 × 1.5 ) ÷ (14 × 1.012) = 105.87 USD`

Changement du prix de liquidation après réduction de la dette de 700 USD:

`(300 × 1.5 ) ÷ (12 × 1.012) = 37.05 USD`

On peut voir que le remboursement de la dette l'emporte aisément sur l'ajout de garanties lorsque vient le temps de diminuer son prix de liquidation.

## Comment puis-je éviter la liquidation?

En tant que propriétaire de CDP, il est de _votre responsabilité_ de vous préoccuper de la santé de votre position. Voici quelques bonnes pratiques suggérées par des utilisateurs du système:

- Configurez des alertes de prix dans votre application préférée, ou plusieurs applications, afin de ne pas être pris au dépourvu par les mouvements rapides du marché.
- Assurez-vous d'avoir accès à des fonds de réserve que vous utiliserez pour gérer votre niveau de garantie. Vous voulez pouvoir réagir rapidement lors d'une chute précipitée du marché.
- Si vous croyez que le marché chutera et que votre niveau de garantie le permet, vous pouvez retirer des garanties pour rembourser une partie de votre dette. _Assurez-vous de ne pas vous rapprocher trop près de votre prix de liquidation en utilisant cette tactique, car celle-ci augmente momentanément les risques de liquidation._

Il est important de se rappeler que la création d'un CDP comporte des risques. C'est votre devoir de quantifier votre [profil d'investisseur](https://lautorite.qc.ca/grand-public/outils-et-calculateurs/calculateurs/votre-profil-dinvestisseur/#c22119) et d'agir en conséquence.

Pour plus d'informations sur les risques inhérents au _Système de Crédit Dai_, vous pouvez vous référer aux [conditions de service](https://cdp.makerdao.com/terms) qui fournissent des informations juridiques importantes. Chaque utilisateur de CDP doit accepter les conditions d'utilisation avant d'utiliser le _Système de Crédit Dai_.

## Comment est-ce que le contrat de liquidité gère les ventes?

Le rôle du contrat de liquidité est de s'assurer que les biens liquidés d'un CDP en défaut sont mis en vente sur le _Portail Dai_. Le prix de vente est déterminé par l'oracle et modifié par un multiplicateur spécial, habituellement un rabais. Le but de ce rabais est de promouvoir la rapidité d'exécution du processus de liquidation en offrant un meilleur prix que le marché aux acheteurs.

Les utilisateurs peuvent acheter des jetons PETH qui ont été saisis par le contrat de liquidité sur le _Portail Dai_. Aussi, tout surplus de dai peut être acheté avec des jetons PETH.

## Est-ce que je peux acheter des jetons PETH qui ont été saisis?

Sur le _Portail Dai_ se trouve une section intitulée "Total Liquidity Available from forced CDP liquidations" où les utilisateurs peuvent acheter des jetons PETH saisis avec un rabais ou une prime selon l'écart Boom/Bust.

## Comment un krach éclair affecterait-il la liquidation des CDP?

Un krach éclair n'aura aucun effet sur le système puisque les oracles agrègent les prix de plusieurs bourses. Une fois l'information colligée, un contrat qu'on appelle _Medianizer_ calcule la médiane des prix retournés par les oracles. Vous pouvez voir le graphique montrant l'historique de chacun des oracles sur [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds).

- Informations détaillées: [https://developer.makerdao.com/feeds/](https://developer.makerdao.com/feeds/)
- Code source de l'agrégateur de prix: [https://github.com/makerdao/price-feed](https://github.com/makerdao/price-feed)
- Code source du contrat _Medianizer_: [https://github.com/makerdao/medianizer](https://github.com/makerdao/medianizer)
- Code source de l'outil _setzer_: [https://github.com/makerdao/setzer](https://github.com/makerdao/setzer)
- Vigie des flux de prix: [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds)

## Où puis-je voir de l'information sur les liquidations en direct?

Vous pouvez explorer l'outil [mkr.tools](https://mkr.tools/), qui a été conçu par une tierce partie et qui permet de visualiser l'information du système MakerDAO. Les deux pages les plus pertinentes sont [liquidations](https://mkr.tools/system/liquidations) et [bites](https://mkr.tools/system/bites).
