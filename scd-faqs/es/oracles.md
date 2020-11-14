# Oráculos

## ¿Qué es un Oráculo?

Un Oráculo hace que datos tanto de fuera como de dentro de la blockchain estén disponibles para su uso en contratos inteligentes. Por ejemplo, los datos que proporcionan el precio de ETH y MKR. El sistema depende de que el Oráculo proporcione de manera segura el precio de cada activo para que los contratos inteligentes del sistema puedan determinar una serie de variables, tales como cuánto Dai pueden generar los CDP, precios de liquidación, si se alcanzan los precio de liquidación y muchos otros.

## ¿Por qué es el Oráculo un objetivo de ataque para los actores maliciosos?

Si el precio de referencia para ETH fuese determinado por una sola parte, esta podría reportar de manera fraudulenta un precio incorrecto y causar muchos problemas. Por ejemplo, si se informara de un precio de ETH fraudulentamente bajo, digamos $0.01, entonces cada CDP en el sistema sería liquidado y castigado por la Penalización de Liquidación al estar sub-colateralizado. Por otra parte, si se informara de un precio de ETH artificialmente alto, digamos $1,000,000.00, entonces cualquier usuario de CDP sería capaz de emitir una cantidad excesiva de Dai dado que el sistema creería que hay más valor de colateral del que existe realmente. Esto significa que el Dai emitido en exceso no está propiamente colateralizado y llevaría al sistema a volverse insolvente.

## ¿Cómo se hace seguro el mecanismo de Oráculos?

Para defenderse contra reportes de datos fraudulentos, el reporte es descentralizado; hay múltiples reporteros de datos independientes unos de los otros. La cotización actual del precio de ETH tiene [14 proveedores de información de precios](https://mkr.tools/system/feeds) quienes envían sus datos al contrato [Medianizer](https://github.com/makerdao/medianizer). El Medianizer usa la mediana de los precios reportados como la referencia oficial de precios. Usar la mediana en lugar de la media hace que sea más difícil manipular la referencia de precios ya que se necesita controlar más de la mitad de los proveedores de información para poder publicar un precio fraudulento. Adicionalmente, usar la mediana filtra los valores atípicos automáticamente.

Además de esto, el Módulo de Seguridad de Oráculos (OSM) salvaguarda el proceso al retrasar los datos de información de precios por una hora. Esto permite a los dueños de tokens MKR tener tiempo para identificar fallas o ataques en el sistema de información de precios. Actualmente, el OSM está activo en el indicador de precio de MKR, pero no en el indicador de precio de ETH. Esto es porque en Dai de Colateral Único, cuando un CDP es liquidado, el colateral es vendido al precio actual de mercado de acuerdo a el indicador de precios, por lo tanto el precio de ETH no puede tener un retraso. Esto cambiará en el Dai de Colateral Múltiple para garantizar que la información de precios puedan ser retrasados.

## ¿Qué es el Módulo de Seguridad de Oráculos?

El Módulo de Seguridad de Oráculos (OSM) retrasa la publicación de nuevas referencias de precios por una hora. Esto permite a los dueños de tokens MKR tener tiempo para reaccionar ante fallas o ataques en el sistema de información de precios. Se debe a que en Dai de Colateral Único cuando un CDP es liquidado el colateral es vendido al precio actual de mercado de acuerdo al indicador de precio, mientras que en el MCD será vendido a través de un mecanismo de subasta que no requiere de indicadores de precios.

## ¿Quiénes son los proveedores de los indicadores de precios?

Los proveedores de los indicadores de precios son anónimos, son personas dentro de Maker, personas influyentes en la comunidad blockchain, así como también de miembros activos de la comunidad.

## ¿Se conocen las identidades de las personas que brindan indicadores de precios al Oráculo?

Un número muy reducido de personas dentro de la Fundación Maker saben quienes son los proveedores de precios actuales.

## ¿Cómo funciona el sistema de indicadores de precios?

El precio de referencia de ETH es publicado por el contrato Medianizer que recibe precios de [14 proveedores de indicador de precio](https://mkr.tools/system/feeds). Cada proveedor envía una actualización al Medianizer cuando:

1. El nuevo precio difiere del último precio enviado por más de una cantidad predefinida (actualmente entre el 1% y 2% dependiendo del proveedor)
2. La última actualización de precio fue hace más de t horas (configurado individualmente por cada proveedor de precios).

Cada proveedor de indicador de precios usa la herramienta llamada [Setzer](https://github.com/makerdao/setzer) la cual recopila el precio medio de una serie de exchanges y luego lo envía al Medianizer. El Medianizer luego toma la mediana de las medianas de los precios informados. Los proveedores de indicadores de precios pueden configurar el Setzer para extraer precios de los exchanges de su elección.

## ¿Qué es el Medianizer?

El [Medianizer](https://github.com/makerdao/medianizer) es el contrato inteligente dentro del sistema de Oráculo que reúne la información de los precios proporcionados y publica un precio de referencia para cada activo. Mantiene una lista blanca de los proveedores de información de precios y un registro de los precios recientes suministrados por cada proveedor. Cada vez que el Medianizer recibe una nueva actualización de precios, el precio de referencia es recalculado y publicado.

## ¿Cada cuanto publica el Medianizer una actualización del precio de referencia?

Cada vez que un indicador individual de precio cambia su mediana, se avisa al Medianizer con el precio actualizado. Este precio es añadido al conjunto junto con los otros precios proporcionados. El Medianizer recalcula la mediana y actualiza el precio de referencia si existe algún cambio.

## ¿Puede la Gobernanza de MakerDAO modificar el tiempo del retraso del Módulo de Seguridad de Oráculos?

Si, éste parámetro se llama “Retraso del Indicador de Precio”.

## ¿Cuál es el proceso para volverse un proveedor de indicador de precio?

Actualmente no existe una manera formal de convertirse en un proveedor de precios. Cuando Maker comenzó a configurar las fuentes de información, hubo gente dentro de la Fundación Maker que voluntariamente se ofrecieron para ser proveedores. Eventualmente, más personas fueron añadidas; algunos de la comunidad, otros de otros proyectos. Sus identidades se han mantenido en secreto.

## ¿El sistema de Oráculo es resistente a ataques Sybil?

Citando a [Wikipedia sobre los Ataques Sybil](https://es.wikipedia.org/wiki/Ataque_Sybil), “En un ataque Sybil, el atacante manipula el sistema de reputación de una red _peer-to-peer_ creando un gran número de identidades pseudónimas, usándolas para ganar una influencia desproporcionadamente grande. La vulnerabilidad de un sistema de reputación a un ataque Sybil depende de cuan fácil sea generar las identidades, el grado en el que el sistema de reputación acepta entradas de entidades que no tienen una cadena de confianza que las vincula a una entidad confiable y si el sistema de reputación trata a todas las entidades por igual.”

En resumen sí, el sistema de Oráculo es resistente a ataques Sybil gracias a la existencia de una lista blanca para proveedores de indicador de precios. No es fácil convertirse en un proveedor de indicador de precios, necesitas ser aprobado por el contrato Medianizer para aceptar tus datos. Por lo tanto, no puedes ganar mayor influencia creando pseudo-identidades baratas que actúen como proveedores de precios.

## ¿Qué sucede si ocurre un _flash crash_ en un exchange?

Dado que el precio de referencia usado en el Sistema de Crédito Dai es una mediana de la mediana de precios reportados por 14 proveedores de precios distintos, los valores atípicos son eliminados automáticamente. En la práctica, esto significa que si algún exchange experimenta un _flash crash_ (una caida repentina del precio), el conjunto de precios tendrá un aspecto similar a esto:

`[0.70, 104.00, 104.11, 104.13, 104.49, 105.02, 105.45]`

La mediana de este conjunto sigue reflejando el precio real de mercado del activo. Los _flash crash_ en exchanges individuales no afectan el precio de referencia publicado.
