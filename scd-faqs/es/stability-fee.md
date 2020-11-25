# Tarifa de Estabilidad

## ¿Qué es la Tarifa de Estabilidad?

Los contratos inteligentes de Maker cobran una Tarifa de Estabilidad la cual es calculada contra el monto total del DAI extraído contra el colateral retenido en un CDP. Esta es una tarifa de tasa variable que puede cambiar cuando los dueños de tokens MKR votan sobre las propuestas presentadas por el Equipo de Riesgo Interino de MakerDAO.

## ¿Cuándo tengo que pagar la Tarifa de Estabilidad?

Cuando pague su deuda regresando el DAI a su CDP, se le cobrará una tarifa pendiente _proporcional a la cantidad de DAI que está regresando_. La tarifa se puede pagar en tokens MKR o en DAI.

## ¿Tengo que pagar las nuevas tarifas para deudas antiguas?

No. Las Tarifas de Estabilidad nunca se aplican de manera retroactiva. Después de un cambio de tarifa, los usuarios acumularán una Tarifa de Estabilidad al nuevo ritmo desde ese punto en adelante, parecido a la tasa de interés variable de un préstamo.

## ¿Cuál es el propósito de la Tarifa de Estabilidad?

La Tarifa de Estabilidad es un Parámetro de Riesgo diseñado para abordar los desequilibrios entre la oferta y demanda del token DAI que podría resultar de períodos de crecimiento bajo o negativo en los mercados de criptomonedas.

El mecanismo detrás de la tarifa es simple, a medida que la demanda del mercado por Dai disminuye, la tarifa asociadas con la acuñación de nuevos Dai incrementa, lo inverso será cierto cuando la demanda del mercado aumente. Este rebalance altera los incentivos de los dueños de CDP en producir o destruir Dai, teniendo un efecto estabilizador en la paridad.

## ¿Por qué la Tarifa de Estabilidad cambia?

Cuando se observa que Dai está operando constantemente por encima o por debajo del precio objetivo de 1\$, esto puede indicar un desequilibrio entre la macro oferta de Dai y la demanda de Dai. La Tarifa de Estabilidad es una tasa que afecta principalmente al suministro de Dai, ya que altera el costo de la creación de Dai. Cuanto más económico sea tomar prestado Dai, más se incentiva a los usuarios a hacerlo. Por el contrario, cuando la tarifa es más alta, menos usuarios querrán tomar Dai prestados. Los dueños de tokens MKR pueden establecer esta tasa para mantener la salud de la paridad.

Si Dai opera constantemente por encima de 1\$, esto significa que la demanda está superando a la oferta y los participantes del mercado están dispuestos a pagar una prima para comprar Dai. Si esto ocurre con demasiada frecuencia, significa que es necesario bajar la Tarifa de Estabilidad para incentivar una mayor creación de Dai.

Si Dai opera constantemente por debajo de 1\$, esto significa que la oferta está superando a la demanda y el mercado está inundado con mucho Dai. Si esto sucede con demasiada frecuencia, significa que se necesita aumentar la Tarifa de Estabilidad para frenar la creación de Dai.

Desafortunadamente, no es posible predecir perfectamente el impacto de un cambio de la tarifa antes de su implementación, ya que los resultados son completamente dependientes de la reacción del mercado. A medida que el tiempo avanza, habrá mejores datos disponibles para apoyar un modelo predictivo o inclusive un modelo reactivo más robusto que ayudará a ajustar la Tarifa de Estabilidad.

## ¿Cómo se calcula la Tarifa de Estabilidad?

La Tarifa de Estabilidad es calculada _continuamente_. Es denominada en Dai y se puede pagar en DAI o MKR. Como se muestra en las fórmulas a continuación, este tipo de composición se refiere a una forma de acumulación que se mide en pequeños incrementos en lugar de semanas, meses o años. Esto produce una tarifa que está muy cercana a lo que uno esperaría de una composición anualizada. Este formato fue elegido debido al variable tiempo de vida de los CDP. Como no hay restricciones mínimas sobre cuánto tiempo puede permanecer abierto un CDP, es importante para el sistema hacer un seguimiento de las acumulaciones extremadamente pequeñas de manera efectiva.

Veamos los diversos resultados de la aplicación de diferentes tipos de estructuras compuestas, dada una deuda de 100,000 Dai que se ha mantenido durante 365 días.

### Fórmulas:

Donde:

**A** = Interés

**P** = el monto principal de inversión (el depósito inicial o monto del préstamo)

**r** = la tasa de interés anual (decimal)

**n** = el número de veces que el interés se compone por año

**t** = el número de años en que se invirtió o se tomó prestado el dinero

**e** = [Número de Euler](https://es.wikipedia.org/wiki/Número_e)

- **P** (1 + r/n)^nt - P = A: Composición Anual
- **P** (1 + r/n)^nt - P = A: Composición Mensual
- **P** (e)^rt - P = A: Composición Continua

### Simplificado

Calculado con composición anual, la Tarifa de Estabilidad futura es:

    100,000 × (1 + (2.5% / 1)) ^ (1 × 1) - 100,000 = 2500 DAI

Calculado con composición mensual, la Tarifa de Estabilidad futura es:

    100,000 × (1 + (2.5% / 12)) ^  (12 × 1)  - 100,000 = 2528.85 DAI

Calculado con composición continua, la Tarifa de Estabilidad futura es:

    100,000 × 2.7183... ^ (2.5% × 1) - 100,000 = 2,531.51 DAI

La diferencia entre las tarifas de composición anual y continua en una deuda de 100,000 DAI, al 2.5% APY, se calcula en aproximadamente 31.51 DAI. Veamos un par más de ejemplos sobre cómo se calcula la tarifa de estabilidad en la práctica.

## Un Ejemplo Simple

Dado lo siguiente:

- Existe un CDP con una deuda de **1000** **DAI**
- El CDP ha estado abierto por **30** **días**
- El valor actual de un token MKR es de **100** **DAI**
- La Tarifa de Estabilidad es de **2.5%**
- Un usuario paga una parte de la deuda por un monto de **50** **DAI**

El costo total denominado en Dai para pagar **50 DAI** por una deuda de **1000 DAI** que tiene **30 días** de antigüedad es **0.102846041 DAI** o aproximadamente 2 centavos de dólar.

Cuando la deuda denominada en Dai es convertida a MKR para el pago, el total requerido para completar la transacción es **0.001028460 MKR**.

## Un Ejemplo Detallado

La Tarifa de Estabilidad total acumulada en un CDP puede ser calculada de la siguiente manera:

> (((Deuda de Estabilidad Total en DAI \* (1 + Tarifa de Estabilidad Actual en formato decimal)) ^ (Edad de la Deuda de Estabilidad en días/365)) - Deuda de Estabilidad Total en DAI ) = Tarifa de Estabilidad Total adecudada en DAI

Cuando conectamos los valores que hemos utilizado anteriormente vemos las Tarifas en DAI que deben:

    (1000 * (1 + 0.005) ^ (30÷365)) - 1000 = 0.410018954 DAI

Ahora que tenemos la tarifa total en DAI, lo podemos convertir a MKR. Asumiendo un tipo de cambio donde 1 MKR vale 100 DAI:

    0.410958904 ÷ 100 = 0.004109589 MKR

Y, como el usuario está pagando 50 DAI, se espera que pague la tarifa acumulada sobre esa cantidad:

    (50 * (1 + 0.005) ^ (30÷365)) - 50 = 0.020500948 DAI

Ahora convertido a MKR:

    0.020500948 ÷ 100 = 0.000205009 MKR

El usuario necesitará **0.000205009 MKR** en su wallet para cubrir la tarifa acumulada de **50 DAI** depués de **30 días**.

Luego de que la transacción haya sido completada, la cantidad total de las tarifas restantes en el CDP será:

0.004109589 - 0.000205009 = **0.00390458 MKR**

## ¿Qué hace el sistema con las tarifas recaudadas?

Una vez hayan sido recaudadas las tarifas, la plataforma de contrato inteligente transfiere el MKR a un contrato llamado [Burner](https://etherscan.io/address/0x69076e44a9c70a67d5b79d95795aba299083c275).

Cualquier MKR que se encuentre en la wallet del Burner antes de ser finalmente destruido está fuera de circulación, ya que nadie puede retirar fondos de esa dirección.

## ¿Dónde puedo ver la Tarifa de Estabilidad acumulada actualmente?

[Antiguo Panel de Control del CDP](https://dai.makerdao.com/): La deuda pendiente de un CDP se muestra en la columna “Deuda de Gobernanza” en el Panel de Control de Dai.

[Nuevo Portal CDP](https://cdp.makerdao.com/): La deuda pendiente de un CDP se muestra en el panel derecho que aparece haciendo clic en “Pagar”.

También existen varias herramientas de terceros listadas en la sección [Vigila tu Dai](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) del repositorio Awesome-MakerDAO.

## ¿Cómo altera la tarifa a la oferta y la demanda?

Un incremento en la Tarifa de Estabilidad resulta en un mayor costo de préstamo para los usuarios de CDP, lo que reduce la oferta de Dai haciendo el uso del CDP menos atractivo. Al contrario, una disminución en la Tarifa de Estabilidad (costo de préstamo) incentivará la creación adicional de Dai, actuando como política de control para ajustar el crecimiento de la oferta.

## ¿Cómo calculo el impacto de las Tarifas de Estabilidad variables?

Puedes utilizar esta fórmula simplificada para determinar las Tarifas de Estabilidad acumuladas:

> (((Deuda de Estabilidad Total en DAI \* (1 + Tarifa de Estabilidad Actual en formato decimal)) ^ (Edad de la Deuda de Estabilidad en días/365)) - Deuda de Estabilidad Total en DAI ) = Tarifa de Estabilidad Total adeudada en DAI

Las tarifas en un deuda de 10,000 DAI en el transcurso de 31 días al 0.5%:

    (10000 x (2.7183...) ^ (0.5%*(31/365)) - 10000 = 4.2474 DAI

Y al 2.5%:

    (10000 x (2.7183...) ^ (2.5%*(31/365)) - 10000 = 21.2554 DAI

## ¿Cómo puedo aprender más sobre los Equipos de Riesgo y comunicarme con la Fundación sobre los cambios actuales o futuros del sistema?

Puede participar en nuestras reuniones semanales de [Gobernanza y Riesgo](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) donde discutimos estos temas con mayor detalle. Las agendas se publican regularmente en [r/MakerDAO](https://www.reddit.com/r/MakerDAO/). También, puede serle útil la [sección de Gobernanza](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#governance) del repositorio Awesome-MakerDAO.

## ¿Hay un límite en el rango de cambios de la Tarifa de Estabilidad?

El Equipo de Riesgo propondrá los valores para alterar la Tarifa de Estabilidad (tasa de cambio a lo largo del tiempo, desviación de la paridad, tiempos de muestreo) y los presentará para su aprobación a los votantes de Maker.

## ¿Cómo pueden los dueños de CDP mitigar el riesgo de cambio de la tarifa?

Hay varias opciones que los usuarios podrían querer explorar para protegerse contra las tarifas.

La demanda de MKR puede estar correlacionada positivamente con los incrementos de la Tarifa de Estabilidad. Si la relación es significativa y persiste, los participantes de CDP pueden cubrir una parte de su exposición a la tarifa de estabilidad al retener MKR.

Los usuarios que buscan préstamos a plazo fijo y tasa fija pueden protegerse contra cualquier cambio futuro en la tarifa encontrando una contraparte que esté dispuesta a firmar un préstamo a plazo fijo en otras plataformas de préstamo.

La mejor estrategia de administración de riesgo es involucrarse con el proceso de Gobernanza y asegurarse que su voto sea emitido cuando se estén ratificando las propuestas.

## ¿Qué sucede si la votación de cambio de tarifa es rechazada?

Si la votación de un cambio de tarifa falla, puede resultar en una caída del precio de Dai si el desequilibrio actual continúa. Si persiste, entonces la única opción restante de la Fundación sería activar el Apagado de Emergencia para garantizar la seguridad económica de los dueños de Dai.

El mecanismo de votación es la forma principal en que la comunidad pueda gestionar la paridad, a través del ajuste fino de las políticas de control. No hay ‘puertas traseras’, nadie puede cambiar los Parámetros de Riesgo del sistema de forma unilateral.

## ¿Con qué frecuencia cambiará la Tarifa de Estabilidad?

No es posible planear o hacer predicciones sobre cuándo cambiará la tarifa o cuáles serán las nuevas tasas.

El Equipo de Riesgo Interino monitorea continuamente los resultados de cambios anteriores y puede proponer ajustes de una magnitud similar o diferente cuando sea necesario. Es difícil predecir cuán rápido o con que magnitud reaccionará el mercado, y por esa razón, los Equipos de Riesgo abordarán los ajustes caso por caso.

Debido al riesgo de manipulación, siempre será necesario que haya cierto nivel de discreción y procesamiento de señales requeridos para determinar exactamente cómo deben ser ajustadas las Tarifas de Estabilidad. Los procesos completamente automáticos y algorítmicos son vulnerables a la manipulación y necesitarán ser considerados cuidadosamente.
