# Liquidación

## ¿Qué es la Liquidación?

Un CDP puede ser liquidado si se considera inseguro. Esto garantiza la existencia de suficiente colateral en el sistema para avalar todo el DAI en circulación. La liquidación ocurre cuando el valor total del colateral de un CDP \(valorado por los Oráculos\) alcanza un ratio de colaterización menor que el requerido por el tipo de activo. Durante el proceso de liquidación se toma el suficiente colateral para cubrir la deuda y su cuota, dejando el colateral restante a disposición del usuario.

## ¿Por qué existe la Liquidación?

A diferencia del dinero fiat, que tiene valor por decreto de gobierno, Dai es una encarnación moderna de _dinero representativo_; todo el DAI en circulación está respaldado por un excedente de colateral en forma de _tokens_ almacenados en un contrato inteligente, eliminando la necesidad de confianza y el riesgo que implica tener una contraparte. Esta transparencia absoluta es la que hace mantener la confianza al usuario en el sistema.

Para estar seguros de que existe un excedente de colateral en todo momento, un tipo de usuarios llamados _keepers_ se encargan de detectar CDPs inseguros pues no cumplen con el mínimo de colateral requerido. Los _keepers_ cumplen una importante misión en el Sistema de Dai Stablecoin; están incentivados para asegurar la existencia de suficiente colateral que respalde el DAI en circulación y mantener al sistema siempre solvente. Los _keepers_ conservan la salud del sistema provocando la liquidación de CDPs inseguros lo antes posible. Esto es especialmente importante durante desplomes de mercado que podrían provocar la insuficiencia de colateral para respaldar la deuda.

## ¿Qué es el Ratio de Liquidación?

Cada tipo de colateral tiene un Ratio de Liquidación, el cual es determinado por el perfil de riesgo asignado a este tipo de activo. Actualmente, el único tipo de colateral disponible es ETH. En el lanzamiento del sistema _Single Collateral Dai_, el Equipo de Riesgos Interino de Maker hizo una evaluación del activo ETH y encontró apropiado un Ratio de Liquidación del 150%.

Un sistema descentralizado de oráculos aporta información sobre el precio de ETH para comprobar cuando el ratio de colaterización de un CDP cae por debajo del nivel el requerido por el sistema. Conociendo el Ratio de Liquidación y el precio de mercado, aportado por el sistema de Oráculo, podemos calcular el Precio de Liquidación.

Por ejemplo, un usuario quiere sacar 200 DAI y piensa que el valor del colateral no caerá por debajo del 50% de su precio actual. El usuario decide depositar al menos el doble del mínimo colateral requerido. Como el mínimo colateral requerido es de 150%, el usuario deposita \$600 de ETH y saca 200 DAI, dejando su CDP con un ratio de colateral del 300%.

**Es importante recordar que 150% es el valor mínimo de ratio de colateral que un CDP basado en ETH puede alcanzar antes de ser liquidado por los** _**keepers**_**.** Mantenerse por encima de este mínimo previene la liquidación del colateral del usuario.

## ¿Qué es el Precio de Liquidación?

Es el precio más bajo del activo dentro del CDP a partir del cual este es vulnerable a una liquidación.

## ¿Qué es la Penalización por Liquidación?

Es una tarifa que se suma a la deuda en DAI cuando ocurre una liquidación. La cantidad total es restada del colateral del CDP.

El producto de las penalizaciones es transferido al _PETH pool_. Esto incrementa el ratio de WETH que los usuarios reciben cuando quitan colateral de un CDP. La penalización infla el valor del _pool_ de colateral durante periodos con muchas liquidaciones, como por ejemplo en momentos de gran inestabilidad en el mercado.

## ¿Qué ocurre durante una Liquidación?

Una Liquidación tiene lugar cuando un _keeper_ cierra un CDP y lo envía al _Contrato Proveedor de Liquidez_ \(LPC\), el cual pone los activos a la venta en el [Panel de Control de Dai](https://dai.makerdao.com). Después de solventar la deuda, el PETH restante se devuelve al dueño del CDP.

El orden de operaciones:

- EL CDP en quiebra es cerrado.
- Se aplica la Penalización por Liquidación a la deuda en DAI.
- El contrato LPC requisa el suficiente PETH colateral para pagar la deuda al precio indicado por el Oráculo.
- El dueño del CDP puede retirar el colateral restante.
- El PETH requisado se pone a la venta en [dai.makerdao.com](http://dai.makerdao.com) aplicando un descuento como incentivo, llamado [Boom/Bust Spread](http://glossary).
- El DAI obtenido de la venta del PETH es destruido para eliminar la deuda del CDP.
- Si la venta produce DAI excedente, este se usa para comprar PETH que será posteriormente destruido. Esto incrementa el precio del PETH restante.
- Si la venta produce DAI insuficiente, entonces nuevo PETH es emitido y vendido para compensar la diferencia. Esto diluye el precio del PETH restante.

## ¿Cuanto colateral queda después de una liquidación?

Para determinar la cantidad de colateral restante después de una liquidación puedes usar esta fórmula simplificada:

`(colateral * precio * ratio PETH/ETH) - (penalización por liquidación * deuda) - deuda = (colateral disponible * precio) DAI`

Por ejemplo:

- El precio de ETH es de 350USD
- 10 PETH bloqueados en CDP
- El ratio PETH/ETH es de 1.012
- La Penalización por Liquidación es del 13%
- El CDP tiene una deuda de 1000 DAI

`(10 × 350 × 1.012) − (13% × 1000) − 1000 = 2412 DAI o 6.891428571 ETH`

## ¿Cómo calculo el Precio de Liquidación?

Puedes usar la siguiente fórula para determinar cuanto debe caer el precio del Oráculo antes de permitir una liquidación:

`(deuda * Ratio de Liquidación) / (colateral * ratio PETH/ETH ) = Precio de Liquidación`

Por ejemplo:

- 12 PETH bloqueados en CDP
- El ratio de PETH/ETH es de 1.012
- El Ratio de Liquidación es del 150%
- El CDP tiene una deuda de 1000 DAI

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

El precio de ETH debe caer hasta 123.51 USD antes de que el CDP sea considerado inseguro y sea liquidado.

## ¿Cómo calculo mi Ratio de Colaterización?

Si prefieres determinar si tu posición es la adecuada fijándote en el ratio de colaterización, en lugar del precio de liquidación, puedes usar la siguiente fórmula:

`(PETH bloqueado × precio × ratio PETH/ETH) ÷ deuda × 100 = Ratio de Colaterización`

Por ejemplo:

- El precio de ETH es de 350USD
- 12 PETH bloqueados en CDP
- El ratio de PETH/ETH es de 1.012
- El CDP tiene una deuda de 1000 DAI

`(12 × 350 × 1.012) ÷ 1000 × 100 = 425.04%`

El CDP tiene un Ratio De Colaterización del 425.04%.

## ¿Cómo rebajo mi Precio de Liquidación?

El principal desafío al que se enfrenta el dueño de un CDP es mantener una posición segura en un mercado altamente impredecible. Si tu CDP se acerca al Precio de Liquidación, puedes añadir más colateral o devolver DAI para así reducir tu riesgo.

La opción que elijas dependerá de tus metas a largo plazo. Si crees firmemente en el valor de tu colateral, podrías decidir añadir más a tu posición. Si por el contrario, quieres protegerte frente a una caída de precio, podrías pagar parte de la deuda devolviendo DAI a tu CDP.

La mejor manera de rebajar tu riesgo de liquidación es devolviendo DAI, dado que reduce el Precio de Liquidación de manera más eficiente. Además del beneficio añadido de reducir la deuda que adquieres en tu posición.

Por ejemplo:

- El precio de ETH es de 350USD
- 12 PETH bloqueados en CDP
- El ratio de PETH/ETH es de 1.012
- El Ratio de Liquidación es del 150%
- El CDP tiene una deuda de 1000 DAI

Precio de liquidación:

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Cambio en el Precio de Liquidación al **añadir** colateral por un valor de 700 USD:

`(1000 × 1.5 ) ÷ (14 × 1.012) = 105.87 USD`

Cambio en el Precio de Liquidación al **devolver** 700 DAI:

`(300 × 1.5 ) ÷ (12 × 1.012) = 37.05 USD`

Podemos observar como el Precio de Liquidación se ve reducido significativamente al devolver DAI en contraste con añadir más colateral.

## Prácticas típicas para evitar ser liquidado

Mantenerse atento a la salud de tu CDP es **tu responsabilidad**. Evitar que los activos del CDP sean liquidados está en tus manos. A continuación verás algunas prácticas que otros usuarios han recomendado para monitorear la salud de un CDP.

- Configura alertas en tu aplicación favorita para no ser sorprendido por cambios en el mercado.
- Asegura el poder controlar tu CDP en todo momento. No quieres estar sin acceso a él durante caídas de mercado.
- Asegura el tener activos disponibles para aumentar el colateral o vender dichos activos por DAI para devolver parte de la deuda.
- Si vaticinas una caída del mercado, puedes extraer el exceso de colateral, venderlo por DAI, devolverlo y así reducir tu deuda. _Asegúrate de mantener un margen de seguridad sobre el Precio de Liquidación, dado que esta táctica te coloca momentáneamente en una posición de riesgo hasta devolver el DAI._

Recuerda que abrir un CDP representa un riesgo. Cuánto riesgo quieres asumir depende de múltiples factores. Determinar tu [perfil de riesgo](https://www.finanzasenlinea.net/2014/02/perfil-de-riesgo-del-inversionista.html) es de por si una ciencia, pero es algo que cada dueño de CDP debe descubrir por si mismo.

Para más información sobre los riesgos, por favor leer los [Términos de Servicio](https://cdp.makerdao.com/terms) que proporcionan información legal importante. Cada usuario debe aceptar los Términos de Servicio antes de usar el Sistema de Dai Stablecoin.

## ¿Cómo el sistema vende colateral?

Cuando un _keeper_ liquida un CDP en riesgo, el Contrato Proveedor de Liquidez \(LPC\) pone el colateral a la venta en el Panel de Control de Dai. El precio es determinado por la información del Oráculo, se le aplica un descuento para incentivar su venta y así recapitalizar rápidamente el sistema al ofrecer un precio mejor que el propio mercado. Los usuarios pueden comprar PETH embargado por el LPC en el Panel de Control de Dai. Cualquier DAI sobrante de la venta podrá ser comprado con PETH.

## ¿Puedo comprar PETH embargado?

En el Panel de Control de Dai, existe la sección "Total Liquidity Available from forced CDP liquidations" donde se puede comprar PETH embargado con un descuento determinado por el _Bust/Boom Spread_.

## ¿Cómo afectaría una gran caída de precio?

Un gran caída de precio en un único _exchange_ no afectaría al valor final pues cada integrante del sistema de oráculos calcula el precio a partir de multiples _exchanges_. A su vez, los precios emitidos por los integrantes, son usados para calcular una media por el contrato _Medianizer_. Puedes ver la participación de los diferentes oráculos en [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds).

- Información detallada: [https://developer.makerdao.com/feeds/](https://developer.makerdao.com/feeds/)
- Código de _price feed_: [https://github.com/makerdao/price-feed](https://github.com/makerdao/price-feed)
- Código de _Medianizer_: [https://github.com/makerdao/medianizer](https://github.com/makerdao/medianizer)
- Código de _Updater_: [https://github.com/makerdao/setzer](https://github.com/makerdao/setzer)
- Monitorización de oráculos: [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds)

## ¿Donde puedo encontrar información en vivo sobre liquidaciones?

Puedes utilizar [mkr.tools](https://mkr.tools/), una herramienta de terceros para analizar el sistema MakerDAO. Las páginas con información más relevantes son [liquidaciones](https://mkr.tools/system/liquidations) y [_bites_](https://mkr.tools/system/bites).
