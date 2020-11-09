# Frais de stabilité

## Que sont les frais de stabilité ?

Les contrats intelligents de Maker perçoivent des frais de stabilité calculés selon le nombre de dais prélevés d'un CDP. Sur la base de propositions soumises par l'équipe intérimaire de gestion du risque, ces frais à taux variables peuvent changer à la suite d'un vote des détenteurs de MKR.

## Quand faut-il payer les frais de stabilité ?

Lorsque vous remboursez votre dette en rendant des dais à votre CDP, vous serez facturés des frais _proportionnels au nombre de dais rendus_. Ces frais peuvent être payés en MKR ou en DAI.

## Les nouveaux frais s'appliquent-ils aux dettes passées ?

Non. Les frais de stabilité ne s'appliquent pas rétroactivement. Les frais de stabilité s'accumulent au nouveau taux en vigueur après chaque changement, tout comme pour un prêt à taux variable.

## À quoi servent les frais de stabilité ?

Ces frais sont un paramètre de risque conçu pour répondre aux déséquilibres d'offre et de demande de dai qui peuvent survenir lors de périodes de croissance faible ou négative sur les marchés de cryptomonnaies.

Le mécanisme sous-jacent est simple: si la demande en dai _décroît_, les frais associés à l'émission de dais supplémentaires _augmentent_. L'inverse se produit lorsque la demande en dai augmente. Ce rééquilibrage pousse les détenteurs de CDP à soit émettre, soit détruire des dais, ce qui peut contribuer à stabiliser le prix du dai autour de celui du dollar.

## Pourquoi les frais de stabilité changent-ils ?

Si le taux de change du dai reste au-dessus ou en dessous de 1\$ de façon prolongée, cela peut indiquer un déséquilibre macroéconomique entre l'offre et la demande en dai. Puisqu'ils modifient son coût d'émission, les frais de stabilité influencent surtout l'offre: moins l'emprunt de dais est cher, plus les utilisateurs ont intérêt à emprunter, et inversement: des frais élevés diminuent le nombre d'utilisateurs prêts à emprunter des dais. Les détenteurs de MKR peuvent modifier les frais de stabilité afin de maintenir une parité adéquate.

Si le taux de change est supérieur à 1\$ de façon prolongée, cela peut signifier que la demande dépasse l'offre, et que les acteurs du marché acceptent de payer un supplément pour obtenir des dais. Sans retour à la normale, il devient nécessaire d'inciter à l'émission de dais en diminuant les frais de stabilité.

Si le taux de change est inférieur à 1\$ de façon prolongée, cela peut signifier que l'offre dépasse la demande, et que le marché est inondé par un surplus de dais. Sans retour à la normale, il devient nécessaire de ralentir l'émission des dais en augmentant les frais de stabilité.

Il n'est malheureusement pas possible de prédire avec exactitude l'impact d'un changement avant de l'avoir effectué, car le résultat dépend de la réaction du marché. De meilleures données permettront au cours du temps de construire un modèle prédictif, ou même un modèle réactif plus robuste grâce auquel les frais pourront être réglés avec précision.

## Comment les frais de stabilité sont-ils calculés ?

Les frais de stabilité sont calculés _en continu_. Ils sont libellés en dai et peuvent être payés soit en DAI, soit en MKR. Comme indiqué dans les formules ci-dessous, cette forme de composition utilise des périodes de cumul très courtes plutôt que des semaines, des mois ou des années. Les frais calculés sont très proches de ce qu'une base de calcul annualisée donnerait. Cette méthode a été choisie en raison de la durée de vie hautement variable des CDP: en l'absence de restriction sur la durée minimum d'un CDP, il est important de pouvoir correctement calculer des frais sur de très courtes périodes.

Jetons un œil sur les différents résultats obtenus selon les méthodes de composition des frais, pour une dette de 100 000 DAI, pendant une durée de 365 jours.

#### Formules:

On note:

**A** = Intérêt

**P** = montant du capital \(le dépôt initial, ou quantité prêtée\)

**r** = taux d'intérêt annuel \(décimal\)

**n** = nombre de périodes de composition par an

**t** = nombre d'années pendant lesquelles l'argent est emprunté, ou investi

**e** = [nombre d'Euler](https://www.maths-et-tiques.fr/index.php/histoire-des-maths/nombres/le-nombre-e)

- **P** \(1 + r/n\)^nt - P = A : Composition annuelle
- **P** \(1 + r/n\)^nt - P = A : Composition mensuelle
- **P** \(e\)^rt - P = A : Composition continue

#### Version simplifiée

Les frais de stabilité calculés sur une base de composition annuelle sont de:

```text
    100 000 × (1 + (12,5% / 1)) ^ (1 × 1) - 100 000 = 12 500 DAI
```

Les frais de stabilités calculés sur une base de composition mensuelle sont de:

```text
    100 000 × (1 + (12,5% / 12)) ^  (12 × 1)  - 100 000 = 13 241.60 DAI
```

Les frais de stabilités calculés sur une base de composition continue sont de:

```text
    100 000 × 2,7183... ^ (12.5% × 1) - 100 000 = 13 314.94 DAI
```

Pour une dette de 100 000 DAI et un taux annuel de 12,5%, la différence entre la composition annuelle et continue est de **814.94 DAI**. Passons à d'autres exemples pratiques de calcul de frais de stabilité.

### Exemple simple

Étant donné:

- Un CDP avec une dette de **1000** **DAI**
- Le CDP est ouvert depuis **30** **jours**
- La valeur actuelle d'un MKR est de **1000** **DAI**
- Les frais de stabilité sont de **5%**
- Un utilisateur rembourse une partie de sa dette, à hauteur de **50** **DAI**

Le coût total, en dais, d'un remboursement de **50 DAI** sur une dette de **1000 DAI** contractée il y a **30 jours** est de **0,208 DAI**, soit environ 21 cents de dollar.

Lors du paiement, la dette en dais est convertie en MKR et le montant nécessaire pour conclure la transaction est de **0,00021 MKR**.

### Exemple détaillé

Les frais de stabilité accumulés dans un CDP peuvent être calculés comme suit:

> \(\(\(Dette du CDP en dais \* \(1 + Frais de stabilité actuels au format décimal\)\) ^ \(Âge de la dette en jours / 365\)\) - Dette du CPD en dais\) = Frais de stabilité dus en dais

En se servant des valeurs utilisées plus haut, on peut calculer les frais dus:

```text
    (1000 * (1 + 0,05) ^ (30÷365)) - 1000 = 4,018 DAI
```

Ces frais totaux en dais peuvent être convertis en MKR. Si l'on suppose un taux de change de 1000 DAI pour 1 MKR:

```text
    4.018 ÷ 1000 = 0.004018 MKR
```

Et comme l'utilisateur rembourse 50 DAI, il devra payer des frais en proportion:

```text
    (50 * (1 + 0,05) ^ (30÷365)) - 50 = 0,2009 DAI
```

Soit, convertis en MKR:

```text
    0.2009 ÷ 1000 = 0.000209 MKR
```

Pour payer les frais de remboursement de **50 DAI** au bout de **30 jours**, l'utilisateur aura besoin de **0,0002009 MKR** dans son portefeuille.

Une fois la transaction effectuée, le total des frais en attente dans le CDP sera de:

0.004018 - 0.0002009 = **0.0038171 MKR**

## Qu'arrive-t-il aux frais récoltés ?

Une fois récoltés, les frais sont transférés par la plate-forme de contrats intelligents à un contrat appelé [l'Incinérateur](https://etherscan.io/address/0x69076e44a9c70a67d5b79d95795aba299083c275) \(_Burner_ en anglais\).

Tout MKR placé dans l'Incinérateur est définitivement retiré de la circulation, avant même d'être détruit, car personne ne peut transférer de fonds depuis cette adresse.

## Où consulter mes frais de stabilité accumulés ?

[Ancien tableau de bord pour CDP](https://dai.makerdao.com/): Le solde impayé dû à un CDP est indiqué dans la colonne _"Governance Debt"_ \("Dette de gouvernance"\) du tableau de bord.

[Nouveau portail CDP](https://cdp.makerdao.com/): Le solde impayé dû à un CDP est indiqué à droite du panneau qui apparaît après avoir cliqué sur _"Payback"_ \("Remboursement"\).

Il existe aussi plusieurs outils tiers ; on peut les retrouver dans la [section _Watch your Dai_](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) \(Surveillez votre dai\) de l'archive Awesome-MakerDAO.

## Comment les frais influencent-ils l'offre et la demande ?

Si les frais de stabilité augmentent, l'emprunt de dai coûte plus cher, ce qui diminue l'intérêt d'utiliser un CDP et atténue donc l'offre en dai. À l'inverse, si les frais de stabilité \(le coût de l'emprunt\) diminuent, cela incite à créer des dais ; les frais sont donc un outil permettant de gérer la croissance de l’offre.

## Comment calculer l'impact d'un changement de frais de stabilité ?

Vous pouvez utiliser cette formule simplifiée pour déterminer les frais accumulés:

> \(\(\(Dette du CDP en dais \* \(1 + Frais de stabilité actuels au format décimal\)\) ^ \(âge de la dette en jours / 365\)\) - Dette du CDP en dais\) = Frais de stabilité totaux en dais

Les frais sur une dette de 10 000 DAI pendant 31 jours à 0,5% sont de:

```text
(10000 x (2,7183...) ^ (5,0%*(31/365)) - 10000 = 42,474 DAI
```

Et à 10%:

```text
(10000 x (2,7183...) ^ (10,0%*(31/365)) - 10000 = 85.2937 DAI
```

## Comment en apprendre plus sur les équipes de gestion du risque et entrer en communication avec la Fondation au sujet de changements actuels ou futurs ?

Vous pouvez rejoindre nos réunions hebdomadaires sur [la gouvernance et le risque](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) où ces questions sont discutées en détail. Les calendriers sont régulièrement publiés sur [r/MakerDAO](https://www.reddit.com/r/MakerDAO/). Jetez aussi un œil à la [section Gouvernance](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#governance) de l'archive Awesome-MakerDAO.

## Y a-t-il une limite à la variation des frais de stabilité ?

Afin de déterminer les changements des frais de stabilité, l'équipe de gestion du risque proposera des indicateurs \(taux de changement dans le temps, déviation de la parité au dollar, durées d'échantillonnage\) et les soumettra à l'approbation des détenteurs de MKR.

## Comment un détenteur de CDP peut-il réduire son exposition aux changements de frais de stabilité ?

Quelques options sont disponibles pour ceux qui souhaitent se protéger contre les changements:

La demande en MKR peut être positivement corrélée aux augmentations de frais de stabilité. Si cette relation est significative et persiste, les utilisateurs de CDP pourront peut-être se protéger en partie de leur exposition aux frais de stabilité en achetant des MKR.

Les utilisateurs désireux d'obtenir des prêts à taux et à termes fixes pourront peut-être se protéger de tout revirement futur des frais de stabilité en trouvant un tiers prêt à leur proposer un prêt à termes fixes sur d'autres plateformes de prêt.

La meilleure stratégie de gestion du risque demeure néanmoins de s'impliquer dans le processus de gouvernance et de s'assurer de voter lorsque les propositions sont ratifiées.

## Que se passe-t-il si un vote de changement de frais échoue ?

Si un vote destiné à modifier les frais de stabilité échoue et qu'un déséquilibre en cours se poursuit, cela peut entraîner une chute du prix du dai. Si cela persiste, la Fondation peut ne pas avoir d'autre choix que de déclencher un _arrêt d'urgence_ afin d'assurer la sécurité économique des détenteurs de dais.

Le vote est la méthode principale de rajustement des instruments de politique monétaire. Il n'existe pas de 'porte dérobée' ; personne ne peut unilatéralement modifier les paramètres de risque.

## À quelle fréquence les frais de stabilité changent-ils ?

Il est impossible de prédire ou planifier ni le moment où les frais devront changer, ni à quel taux ils devront se porter.

L'équipe intérimaire de gestion du risque surveille en continu les résultats rajustements précédents ; elle peut si nécessaire en proposer d'autres, d'une ampleur similaire ou différente. Il est difficile de prévoir la vitesse et l'importance de la réaction du marché, et les équipes de risques abordent par conséquent chaque changement au cas par cas.

Face au risque de manipulation, l'appréciation subjective des informations disponibles est nécessaire à la détermination des rajustements des frais de stabilité. Les processus entièrement automatiques et algorithmiques sont susceptibles d'être manipulés et devront donc être envisagés avec prudence.
