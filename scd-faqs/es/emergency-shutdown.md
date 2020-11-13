# Apagado de Emergencia FAQ

## ¿Qué es un Apagado de Emergencia?

Una característica de seguridad importante de Dai se llama Apagado de Emergencia, anteriormente conocido como Liquidación Global (en inglés, Global Settlement). Esta crucial característica de seguridad permite que el sistema se apague y pone el colateral subyacente a disposición de ser reembolsado a los propietarios de CDP y poseedores de [Dai](dai.md).

## ¿Qué sucede durante un Apagado de Emergencia?

1. El Apagado de Emergencia es activado: si los votantes de MKR creen que el sistema está sujeto a un ataque serio, o si un Apagado de Emergencia está programado como parte de una mejora técnica, entonces pueden activar el Apagado de Emergencia. Esto detiene la creación de CDP y congela el Indicador de Precios.

2. Los Reclamos de Colateral son procesados: después de activar el Apagado de Emergencia, es necesario un periodo de tiempo que permita procesar proporcionalmente las reclamaciones de colateral de todos los propietarios de CDP. Después de terminar este procesamiento, todos los propietarios de CDP podrán reclamar una cantidad fija de ETH de sus CDPs. Los poseedores de Dai pueden reclamar sus colaterales inmediatamente.

3. Dueños de Dai y de CDP reclaman el colateral: Cada poseedor de Dai y propietario de CDP pueden cambiar directamente sus Dai y CDPs por una cantidad fija de ETH correspondiente al valor calculado de sus activos.

## ¿Quién puede activar un Apagado de Emergencia?

La única manera de activar un Apagado de Emergencia en Dai de Colateral Único es que los votantes de MKR aprueben una [Votación Ejecutiva](governance.md).

## ¿Cuándo debería usarse el Apagado de Emergencia?

El Apagado de Emergencia puede usarse en casos de ataques al sistema, problemas económicos significativos y para actualizaciones importantes.

Ejemplos de ataques al sistema serían hackeos, violaciones de seguridad de los contratos inteligentes y manipulación de los Oráculos.

Ejemplos de problemas económicos importantes serían una paridad muy separada (según decidan los votantes de MKR) y otras condiciones de mercado si representan una amenaza significativa para la mayoría de usuarios.

Ejemplo de una mejora importante que justificará un Apagado de Emergencia es la mejora hacia Dai de Colateral Múltiple, como método para terminar con el Dai de Colateral Único tras el periodo de transición.

## ¿Tocar el techo de deuda garantiza un Apagado de Emergencia?

Al tocar el techo de deuda, los propietarios de CDP no pueden generar nuevos Dai. Esto no es una amenaza inmediata a la estabilidad del sistema. Sin embargo, si el techo no se levanta, puede causar un desequilibrio entre la oferta y la demanda de Dai permitiendo que la demanda supere la oferta limitada. Este problema puede arreglarse aumentando el techo de deuda, por lo tanto no es necesario un Apagado de Emergencia. El Apagado de Emergencia es un proceso muy disruptivo y solo debería usarse como último recurso y en mejoras planificadas.

## ¿El reembolso del colateral de los CDPs y Dai será inmediato, automático o un proceso manual?

El reembolso de los reclamos de colateral ocurrirá manualmente.

Los poseedores de Dai podrán reembolsar su colateral inmediatamente después del Apagado de Emergencia. Los propietarios de CDP necesitan esperar un periodo de tiempo de 6 horas mientras sus reclamos son procesados antes de que puedan reembolsar su colateral.

## ¿Por qué hay un periodo de tiempo antes de que los propietarios de CDP puedan reembolsar su colateral?

Calcular los reclamos de CDP involucra ejecución de contratos inteligentes y movimiento de fondos. Procesar todo pueda tomar un largo periodo de tiempo dependiendo de la congestión de la red, por lo tanto el tiempo por defecto es de 6 horas. Este periodo de retraso también sirve como precaución contra circunstancias desconocidas que pudieran acontecer.

## ¿Pueden los votantes de MKR establecer el periodo de tiempo de procesamiento de reclamaciones de colateral en 0?

Establecer un periodo de tiempo más corto expone a los propietarios de CDP al riesgo de recibir cantidades incorrectas de colateral. Los propietarios de CDP que traten de cerrar sus CDPs y salir de PETH a WETH antes de que el proceso haya finalizado probablemente se penalizarán a sí mismos, el periodo de retraso está hecho para protegerlos.

Cuando ocurre el Apagado de Emergencia, el WETH es tomado de la colección de WETH que está agrupado en PETH, para cubrir a los poseedores de Dai. Esto baja el ratio de PETH. Si un usuario intenta convertir su PETH en WETH durante el periodo de retraso de 6 horas del Apagado de Emergencia podría estar sujeto a un ratio artificialmente bajo de PETH.

## ¿Los poseedores de Dai necesitan reembolsar su colateral, o solamente los propietarios de CDP?

Tanto los propietarios de CDP como los poseedores de Dai necesitan reembolsar su colateral. Sin embargo, solo los poseedores de Dai pueden reembolsar el ETH inmediatamente después del Apagado de Emergencia. Los propietarios de CDP necesitan esperar un periodo de tiempo de 6 horas.

## ¿Qué hago en caso de un Apagado de Emergencia si tengo PETH pero no poseo un CDP?

El ratio de PETH cae instantáneamente cuando ocurre un Apagado de Emergencia y se recupera a medida que se procesen los CDPs. Los poseedores de PETH deben esperar el periodo de 6 horas de retraso al igual que los propietarios de CDP.

## Si el precio continúa cayendo después de que el indicador de precio se congelase, ¿no significa esto que las personas que reembolsan Dai y CDPs pueden recibir menos de 1\$ de colateral?

Sí, es posible que los usuarios obtengan un colateral de menos de un dólar. Los poseedores de Dai pueden canjear inmediatamente su Dai por colateral y pueden experimentar alguna disminución. Los propietarios de CDP deben esperar el periodo de retraso de 6 horas para que los reclamos sean calculados y por ende, están expuestos al riesgo del movimiento del precio del colateral subyacente durante estas 6 horas.

## ¿Cuán rápido puede ejecutarse un Apagado de emergencia?

Para activar un Apagado de Emergencia, los votantes de MKR necesitan votar en una Votación Ejecutiva. La propuesta necesita acumular suficiente MKR hasta que supere la propuesta anterior, en línea con la [votación de aprobación continua](https://github.com/makerdao/community/blob/master/faqs/es/governance.md). Por lo tanto, depende de cuán rápido los votantes de MKR puedan actuar para superar la propuesta anteriormente ganadora.

## ¿Qué le pasa a MakerDAO después de un Apagado de Emergencia?

Después de activar un Apagado de Emergencia, el proceso de reembolso de colateral tomar lugar. Mientras tanto, es decisión de cada cual si quieren volver a desplegar el sistema o no, y cómo lo desplegarían.

## ¿Quién puede volver a desplegar el sistema?

Cualquier persona puede volver a desplegar el sistema ya que es software de código abierto.

## ¿Qué sucede si ocurren múltiples despliegues, quién decide cuál es legítima?

Dependiendo de los detalles de cada despliegue, el mercado, junto con varios participantes del sistema tendrán que escoger aquel con los cambios más apropiados. Algunos factores son:

- No hay cambios de códigos injustificados
- Cambios en la distribución del token MKR
- Cambios en los Parámetros de Riesgo

## ¿Quién decide cómo debería ser desplegado de nuevo el sistema?

Ya que es un software de código abierto, cualquiera puede decidir. Idealmente, los parámetros de despliegue deberían depender de la razón del Apagado de Emergencia, y no deberían ser alterados unilateral ni arbitrariamente. Este es un ejemplo aproximado de un marco para realizar cambios en el despliegue:

| Razón                  | Solución                                                                                                                                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ataque a la Gobernanza | Apartar a los dueños de MKR maliciosos en una nueva redistribución, volver a desplegar el sistema sin modificar todo lo demás                                                                                                                            |
| Ataque al Oráculo      | Cambiar el módulo de Oráculo por uno nuevo solucionando la vulnerabilidad, volver a desplegar el sistema sin modificar todo lo demás                                                                                                                     |
| Mercado de Cisne Negro | Volver a desplegar el sistema con todo como está, permitir a los votantes de MKR decidir cómo abordar de la mejor manera este evento a través de unos mecanismos del sistema nuevos o mejorados que puedan ser agregados después de la reimplementación. |

## Durante el Apagado de Emergencia, ¿se entregará el colateral de los propietarios de CDP a otras personas?

Durante el Apagado de Emergencia, el colateral se vuelve disponible inmediatamente para poseedores de Dai. Esto significa que quizá alguien pueda recibir una parte de tu colateral original. Sin embargo, después del periodo de tiempo donde las reclamaciones de colateral de CDP son procesadas, cualquier propietario de CDP podrá retirar el colateral que representa el valor neto de su CDP.

Por ejemplo:

> Si tienes un CDP con 1 ETH valorado en 300 USD, y una deuda de 100, se te dejará con 0.6666 ETH y sin deuda.
> El valor neto del CDP se hace disponible para su reembolso, el cual es de 300 USD de valor de colateral, menos 100 USD de la deuda.
> Por lo tanto, podrás reclamar 0.6666 ETH después del periodo de retraso de 6 horas.

## ¿Hay algo que impida que los dueños de MKR activen un Apagado de Emergencia para evitar una dilución debido a una mala gestión?

Los dueños de MKR, especialmente los grandes, están incentivados a preservar el valor de su MKR. Votar para realizar un Apagado de Emergencia en el sistema debido al miedo de una inminente dilución puede perjudicar el valor de su MKR. También pone en riesgo su propiedad de MKR, ya que cualquiera puede reimplementar el sistema y cambiar la distribución de tokens de MKR. Es pues un tipo de ataque con mucho riesgo.

## ¿Puedo crear un CDP durante un Apagado de Emergencia?

No.

## ¿Qué sucede con los CDPs y Dai inaccesibles que se han perdido, atascado o han desaparecido?

Cualquier Dai o CDP que se haya atascado o perdido permanecerá así, estará efectivamente atascado o será ETH perdido.

## ¿Las Tarifas de Estabilidad serán eximidas en el caso de un Apagado de Emergencia?

Las Tarifas de Estabilidad no se pagan durante un Apagado de Emergencia, pero la Gobernanza puede aprobar una “Penalización de Apagado de Emergencia” que asegurará que todos aquellos que mantengan sus CDP durante el Apagado de Emergencia en lugar de migrarlos al MCD tendrán que pagar una penalización más alta, esto significa que siempre es más económico migrar tu CDP y pagar la Tarifa de Estabilidad.

## ¿Se ha realizado alguna vez un Apagado de Emergencia en el pasado?

Si, se [realizo](https://www.reddit.com/r/MakerDAO/comments/7lhbmx/psa_sai_now_globally_settled/) un Apagado de Emergencia en el sistema Sai, antes del Dai de Colateral Único.

## ¿Cómo se realizó la prueba para el Apagado de Emergencia?

El Apagado de Emergencia fue originalmente introducido y probado en los despliegues de prototipos Sai. Además de pruebas en el propio [código fuente](https://github.com/makerdao/sai/blob/master/src/sai.t.sol), hubieron tres ejecuciones en vivo, las cuales fueron despliegues del prototipo Sai en la Mainnet de Ethereum.

## ¿Cómo se notificará a los usuarios de CDP y poseedores de Dai sobre el Apagado de Emergencia?

Habrá noticias en todos los portales oficiales de Maker, así como anuncios en nuestro blog y en todos nuestros canales de comunicación oficiales como Twitter, Reddit, Medium, Rocketchat, Telegram, WeChat y Kakaotalk.
