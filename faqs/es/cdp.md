# Posiciones de Deuda Colateralizadas(CDP)

## ¿Qué son las Posiciones de Deuda Colateralizadas(CDP)?

La Posición de Deuda Colateralizada (CDP por sus siglas en inglés) de MakerDAO es un tipo de préstamo administrado por un sistema de contratos inteligentes que se ejecuta en la blockchain de Ethereum. El CDP es un componente fundamental del Sistema de Dai Stablecoin, este facilita la creación de Dai contra el colateral depositado el cual es retenido hasta que el Dai prestado es devuelto.

El uso de CDP altera colectivamente el suministro total de Dai. Los usuarios crean Dai al tomarlo prestado contra su colateral y el Dai se destruye cuando pagan su deuda. Este proceso pasa en la blockchain, lo que permite completa auditoría del Dai en circulación y el colateral que lo respalda.

Se requiere que los CDP tengan un exceso de colateral. Se requiere que el valor del colateral de un CDP sea mayor que el monto de la deuda, lo que garantiza a los usuarios de Dai que su Dai tiene valor y está completamente respaldado con activos reales.

## ¿Cómo funciona un CDP?

Cualquier usuario que desee pedir un préstamo en Dai puede depositar ETH en un CDP. Una vez depositado, el usuario puede generar Dai contra el valor de su depósito. El ETH depositado puede ser retirado proporcionalmente cuando el usuario devuelve una parte o la totalidad del Dai prestado. Mientras los usuarios de CDP mantengan la [Ratio de Colateralización](./cdp.md#what-is-the-collateralization-ratio) mínima, pueden retirar o depositar libremente el colateral excedente.

Luego de generar su Dai, los usuarios de CDP pueden hacer lo que quieran con ellos. Si un usuario desea recuperar el total de su colateral, necesita antes devolver todo el Dai prestado.

Este ciclo de préstamo/reembolso y adición/eliminación de colateral puede continuar siempre que los dueños de CDP elijan mantener sus posiciones abiertas. Los usuarios pueden cerrar sus CDP pagando la deuda y las tarifas asociadas en su totalidad.

## ¿Quién puede abrir un CDP?

Los CDP no necesitan permisos, cualquiera puede crear y usar un CDP. No hay requisitos relacionados con el historial de préstamo anterior o procesos de solicitud engorrosos. El sistema no está controlado por guardianes o intermediarios. Los CDP de Maker son propiedad de las cuentas de Ethereum que los crearon y pueden ser transferidos entre wallets libremente.

## ¿Un CDP incurre en algún cargo?

Sí. Se requiere que los dueños de CDP paguen una Tarifa de Estabilidad sobre su deuda pendiente. Es una [tasa APY continuamente compuesta](https://www.investopedia.com/personal-finance/apr-apy-bank-hopes-cant-tell-difference/).

Si un CDP contiene colateral insuficiente es considerado ‘inseguro’, puede ser liquidado y sus activos incautados autónomamente por el Sistema Maker y vendidos para cubrir la deuda pendiente. Esto impone una penalización por liquidación.

## ¿Qué es el Ratio de Colateralización?

El Ratio de Colateralización es la relación entre el valor del colateral que los usuarios han agregado a su CDP, y cuánto Dai han tomado prestado.

Por ejemplo: Digamos que el Ether bloqueado en un CDP vale 150$ y se han tomado prestados 50 Dai, esto significa que el Ratio de Colateralización es del 300%. Por cada Dai, hay 3$ en valor de colateral que lo respaldan. En el Sistema Maker, tu CDP puede ser liquidado si cae por debajo de el [Ratio de Liquidación](./liquidation.md#what-is-the-liquidation-ratio), el cual es el mínimo Ratio de Colateralización.

## ¿Qué riesgos se asocian con poseer un CDP?

Poseer un CDP es inherentemente arriesgado. Existen cuatro categorías principales a considerar cuando se usa un CDP: Riesgos de Mercado, Riesgos de Usuario, Riesgos del Sistema y Riesgos de Variabilidad de Parámetros.

### Riesgos de Mercado

Usar un CDP involucra asumir deudas y transferir la propiedad de activos a un contrato inteligente que puede vender tales activos en caso de una caída de mercado. Todo CDP con deuda tiene un Precio de Liquidación, precio al que el CDP sería liquidado. Usar un CDP para hacer [apalancamiento](https://www.investopedia.com/terms/l/leverage.asp) introduce otra capa de riesgo. El potencial de recompensa es mayor mediante apalancamiento, pero el potencial de pérdida también se magnifica. Una práctica usual es la de mantener un Ratio de Colateralización alto en preparación para caídas del mercado y evitar así la liquidación.

### Riesgos de Usuario

Estos son los riesgos asociados con errores de usuario. MakerDAO no posee la habilidad de revertir transacciones o de recuperar fondos enviados a direcciones o contratos incorrectos.

### Riesgos del Sistema

Hay muchos riesgos potenciales a los que se enfrenta la plataforma Maker. La siguiente lista intenta destacar algunos de los riesgos del sistema, pero no están todos incluidos:

- Un ataque de hacking contra la infraestructura de contratos inteligentes
- Un evento de ‘cisne negro’ en uno o múltiples tipos de colateral
- Errores de precio, irracionalidad y circunstancias imprevistas
- Falla de la infraestructura centralizada. Por ejemplo: conexiones de Internet fallidas, errores de MetaMask, etc.

### Riesgos de Variabilidad de Parámetros

Es importante notar que los dueños de CDP están sujetos a cambios en los Parámetros de Riesgo que gobiernan el sistema. Esto equivale a riesgos financieros para el dueño del CDP. A continuación, una lista incompleta de los parámetros que están sujetos a cambios:

- Tarifa de Estabilidad
- Ratio de Liquidación
- Techo de la deuda del tipo de colateral
- Penalización por Liquidación

## ¿Cuáles son las prácticas comunes para limitar los riesgos?

Los riesgos de mercado pueden reducirse usando alertas de precio, manteniendo una alto Ratio de Colateralización, vigilando la salud de los CDP y manteniendo suficientes reservas fuera de un CDP para pagar la deuda o agregar más colateral. Algunas personas pueden querer afrontar demasiados riesgos o hacer apuestas delicadas intentando predecir el mercado. Esto puede llevar a la liquidación de sus CDP resultando en pérdidas.

Los riesgos de usuario pueden reducirse mediante la práctica, usando pequeñas cantidades de prueba y verificando a fondo las direcciones con que se interactúa.

## ¿Cuáles son algunos de los beneficios de tener un CDP?

**Pago flexible**
No hay límites de tiempo ni programas de pago mínimo relacionados con tener un CDP. Los usuarios son libres de retirar Dai o agregar colateral adicional cuando ellos lo deseen.

**No hay requisitos de historial de crédito**
No hay requisitos relacionados con el historial de préstamos anteriores o procesos de solicitud engorrosos. Cualquier persona con una dirección de Ethereum puede acceder al sistema.

**Sin contrapartes**
Debido a que el sistema se ejecuta como un contrato inteligente autónomo, los usuarios pueden interactuar con un sistema financiero transparente sin tener que confiar en una institución como contraparte para administrar o liberar sus fondos. Todas las transacciones se guardan en una blockchain pública y están disponibles para que cualquiera las audite.

**_Margin trading_ descentralizado**
Los usuarios pueden elegir bloquear su Ether, retirar DAI y comprar más Ether para añadirlo a la cantidad original. Esto les permite tomar una posición de apalancamiento.

## ¿Por qué querría abrir un CDP?

Hay muchas razones por las que uno puede usar un CDP. Viendo las experiencias de los usuarios, hemos recolectado algunos ejemplos a continuación:

- **Apalancamiento**: un usuario puede creer que un activo incrementará su valor pronto, así que utiliza el colateral existente para retirar Dai y comprar dicho activo. Luego, si ese activo se ha revalorado, podría venderlo por más Dai del que tomó prestado y devolver el préstamo original mientras se embolsa la diferencia.
- **Línea de crédito flexible:** un usuario desea comprar un auto. Y podría determinar que las opciones financieras tradicionales no le ofrecen términos o tarifas tan atractivas como las que pueden obtener mediante la apertura de un CDP. El usuario podría tomar prestado Dai contra su ETH, comprar el auto e ir pagando deuda según su propia estrategia.
- **Refinanciación:** un usuario puede tener un préstamo con altos intereses. En vez de liquidar sus activos para cubrir los pagos, puede tomar prestado Dai contra su ETH, convertir el Dai en dinero fiat y pagar una porción o el monto completo de su deuda más costosa.

Es importante recordar que al crear un CDP y tomar prestado Dai, los usuarios están creando deudas y asumiendo riesgos. Por ejemplo: la variación de la Tarifa de Estabilidad y la Liquidación.

## ¿Hay razones para evitar abrir un CDP?

_Nada_ de este documento constituye un consejo de inversión, pero se puede tomar nota de las posibles razones para evitar abrir un CDP.

Por ejemplo, si estás interesado en obtener una criptomoneda estable pero no estás familiarizado con los matices de la interacción con contratos inteligentes, no deberías abrir un CDP. En lugar de eso, la práctica estándar sería comprar DAI en un exchange.

Al abrir un CDP uno puede exponerse a varios tipos de riesgos, lo que en última instancia puede resultar en pérdidas financieras.

Si crees que el mercado está entrando en una caída prolongada, podrías querer evaluar cuánta gestión puede requerir abrir un CDP. Un mercado bajista prolongado puede requerir la adición constante de colateral a una posición para asegurar su solidez, o la disponibilidad de suficientes activos que cambiar por DAI para pagar la deuda pendiente.

## ¿Qué tipo de colateral puedo invertir?

En el Single Collateral Dai, el único tipo de colateral disponible es el Ether. En la próxima iteración del sistema, Multi-Collateral Dai, estarán disponibles muchos más tipos de colateral. Los nuevos tipos de colateral serán determinados por los dueños de tokens MKR a través del proceso de Gobernanza.

## ¿Es posible pagar Dai desde la wallet de un exchange?

No, necesitas interactuar con un método especial del contrato que solo puede lograrse a través de una interfaz web o interactuando directamente con el contrato. Usar cualquier otra cosa que no sea la Interfaz de Usuario web y la wallet que abrió el CDP puede tener resultados desastrosos si no tiene una visión profunda del diseño del contrato.

## ¿Cuánto colateral puedo exceder?

No hay un límite máximo de cuanto colateral puede ser depositado en un CDP.

## ¿Qué le sucede a los _airdrops_ cuando he bloqueado mi Ether en un CDP?

Todos los activos mantenidos en el sistema son administrados por contratos inteligentes que no son capaces de rastrear o redistribuir tokens de _airdrops_. No hay manera de acceder a los tokens enviados a esas direcciones.

## ¿Puedo hacer uso de mi colateral en otro proyecto y también abrir un CDP con el mismo?

Una vez que un colateral ha sido depositado en un contrato, no es posible usar los mismos tokens en otro contrato. En el futuro, algunos proyectos _podrían_ emitir tokens de depósito que representan el colateral depositado en sus sistemas. Es posible que en el futuro los votantes de MakerDAO elijan permitir usar esos tipos de tokens como colateral.

## ¿Debo pagar de vuelta el Dai si mi colateral aumenta su valor?

Los usuarios deben pagar manualmente todas sus deudas, incluyendo la [Tarifa de Estabilidad](./stability-fee.md#what-is-the-stability-fee) si desean liberar todo su colateral. El sistema no paga automáticamente la Tarifa de Estabilidad usando la revalorización del colateral dentro de sus CDP.

A medida que el valor del colateral aumenta, se puede retirar porciones del mismo mientras se mantiene el mismo Ratio de Colateralización. Cualquier colateral que esté por encima del Ratio de Colateralización puede ser extraído, sin embargo, hacerlo elevará el precio de liquidación y por lo tanto incrementará el riesgo. Si el valor de tu colateral aumenta, tu Ratio de Colateralización aumenta.

## ¿Puedo usar el mismo CDP tras haber sido liquidado?

Si, siempre que haya colateral dentro del CDP puedes tomar prestado Dai. La liquidación no cierra el CDP; puedes añadir colateral y comenzar de nuevo.

## ¿Cómo puedo verificar la solvencia del ecosistema CDP?

El sistema se ejecuta en la blockchain de Ethereum, por lo que todas las transacciones y contratos son públicos. Los usuarios pueden interactuar con un sistema financiero completamente transparente sin tener que confiar en una contraparte. Cualquiera puede verificar la solvencia del sistema por sí mismo visitando uno de los muchos [Paneles de Estadísticas de MakerDAO](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai) o consultando directamente la blockchain.
