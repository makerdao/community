# Maker Colateral Onboarding a través de la propuesta de gobierno de MKR

**Document version** **20190709**

- [Introducción](#introducción)
- [Parámetros de riesgo](#parámetros-de-riesgo)
- [Aprobación de Gobierno](#aprobación-de-gobierno)
- [Proceso](#proceso)
- [Requerimientos técnicos](#requerimientos-técnicos)
  - [Auditoria tecnica](#auditoria-tecnica)
- [Adaptadores](#adaptadores)
  - [Interfaz de contrato](#interfaz-de-contrato)
  - [Implementaciones disponibles](#implementaciones-disponibles)
- [Tokens bloqueados](#tokens-bloqueados)
- [En tokens de seguridad (Securities)](#en-tokens-de-seguridad-securities)
- [Requerimientos legales](#requerimientos-legales)
- [Requerimientos financieros](#requerimientos-financieros)
  - [Clasificación](#clasificación)
  - [Visión general](#visión-general)
  - [Emisión](#emisión)
- [Los mercados](#los-mercados)
  - [Comunidad](#comunidad)
- [Formulario de aplicación](#formulario-de-aplicación)
  - [Especificaciones técnicas](#especificaciones-técnicas)
  - [Especificaciones financieras](#especificaciones-financieras)
  - [Especificaciones legales](#especificaciones-legales)

## Introducción

El público objetivo para este documento es:

- Organizaciones e individuos que desean proponer tipos de Colateral que se agregarán al sistema de crédito Dai de MakerDAO
- Equipos de riesgo que desean crear parámetros de riesgo para nuevas Colateral en el proceso de gobernabilidad de MakerDAO
- Otros interesados ​​en el proceso de gobierno de MakerDAO.

El propósito de este documento es guiarlo en el proceso de habilitación de un nuevo token como Colateral en el Dai Credit System (DCS).

El documento presenta la información sugerida que un Equipo de Riesgo de Gobernabilidad de MakerDAO necesita para calcular los parámetros de riesgo de los colaterales y crear una propuesta para agregar nuevas Colateral al sistema.

Los tipos de Tokens colaterales pueden incluir:

- Monedas criptográficas nativas como el bitcoin o el éter.
- Tokens Securities, como acciones de empresa o bonos
- Tokens de bienes raíces
- Tokens de metales, como el oro.
- Tokens de propiedad intelectual como patentes.
- Tokens de propiedades digitales, como artículos de juegos o mundos virtuales.

Habilitar un token para usarlo como Colateral en DCS permite a cualquier propietario de token bloquearlos en CDP y generar Dai contra esta posición. Además, contribuye a la escalabilidad de Dai al aumentar la cantidad de respaldo financiero disponible en el sistema.

NOTA: Este documento contiene una guía que requerirá aprobación en una encuesta de gobierno de MKR. Esto aún no ha sucedido en el momento de la escritura, por lo que puede haber cambios en el proceso descrito aquí.

Además, este documento se considerará un documento en edicion que se ajusta a medida que se adquiere más experiencia en la adición de Colaterales al sistema, y ​​hay nuevos conocimientos disponibles. Por ejemplo, actualmente, la forma de agregar tokens de seguridad al sistema no se aborda en detalle. El plan es agregar esto en una versión posterior.

## Parámetros de riesgo

Cada tipo de Colateral en DCS está asociada con su propio conjunto de parámetros de riesgo. Los parámetros de riesgo pueden verse influidos por las características financieras y técnicas del token en cuestion. Los parámetros incluyen:

- **Tarifa de estabilidad**
  Cuando Dai es generado por una posición de deuda colateralizada (CDP), se acumula una tarifa de estabilidad continuamente. Cuando se devuelve el Dai, la tarifa de estabilidad acumulada debe pagarse. Una parte de la tarifa se destina al pago de la tasa de ahorro de Dai a los tenedores de Dai. Otra parte de la tarifa se destina a comprar y quemar tokens MKR para compensar a los poseedores de tokens MKR por comprometerse a respaldar al DCS en caso de un evento “Black Swan”
- **Relación de liquidación**
  La relación de liquidación es la relación mínima entre el valor de la Colateral en el CDP y el valor de Dai extraído del CDP. Por ejemplo, si la proporción es del 150%, el CDP se liquidará si se extraen 100 Dai y el valor de la Colateral cae por debajo de \$150.
- **Multa por liquidación**
  En el caso de la liquidación de CDP, el propietario de CDP paga una multa que sirve para comprar y quemar tokens MKR.
- **Techo de deuda**
  Un límite de todo el sistema sobre la cantidad de Dai que se puede extraer contra un tipo específico de Colateral.

Estos parámetros de riesgo son calculados por un equipo de riesgo utilizando la información proporcionada por el proponente de la Colateral. A medida que el proceso de gobierno de MakerDAO se descentraliza gradualmente, el objetivo es tener una multitud de equipos de riesgo independientes, que puedan calcular los parámetros de riesgo y pedir a los gobernadores de MKR (titulares de token de MKR) que aprueben la adición de Colateral al sistema.

## Aprobación de Gobierno

Por defecto, todos los tokens tienen un límite de deuda de 0. Antes de que un token pueda usarse como Colateral, debe aceptarse a través del proceso de gobierno controlado por los poseedores de tokens de MKR.

La introducción de nuevos tipos de Colateral se maneja en un proceso de dos pasos. Primero, hay una encuesta de Gobernabilidad en la que los gobernadores de MKR alcanzan un consenso, posiblemente entre diferentes propuestas en competencia, sobre qué parámetros de riesgo debe tener un nuevo tipo de Colateral. Después de la encuesta, hay un voto ejecutivo que contiene los cambios reales y las adiciones al sistema que se necesitan. Esta votación se maneja como votación de aprobación en un proceso de votación continuo. Una vez que los titulares de tokens MKR hayan indicado la compatibilidad con un conjunto de parámetros, el sistema continuará viendo el soporte de poseedores de tokens MKR para esos parámetros hasta que cambien activamente su voto. Para introducir una nueva Colateral, un nuevo conjunto de parámetros debe obtener el soporte de una cantidad mayor de MKR que cualquier otro conjunto. Esto se puede lograr activando nuevos votos de tokens MKR que no han votado antes y convenciendo a los votantes existentes para que cambien su apoyo.

Cualquiera puede proponer un nuevo conjunto de parámetros para el proceso de votación ejecutiva. Sin embargo, para convencer a los poseedores de tokens de MKR de que apoyen la nueva propuesta, se debe comprometer a la comunidad con especificaciones técnicas y financieras detalladas, auditorías y razonamiento científicamente informado para el conjunto elegido de parámetros de riesgo.

Este documento describe, en espera de la aprobación del titular de MKR, la información que debe enviar para que un equipo de riesgos cree una propuesta a la comunidad de gobierno de MKR en su nombre.

## Proceso

La siguiente figura describe el proceso de alto nivel recomendado para que un equipo de riesgo revise un token propuesto como Colateral, y lo presente para un voto del titular de MKR si se considera adecuado.

Se asume que el equipo de riesgo incluye o tiene acceso al siguiente conjunto de roles:

- INT: un rol de integración técnica, que puede verificar la información técnica proporcionada
- RIESGO: la función de riesgo
- LEGAL: una función legal, que puede verificar cualquier información legal presentada.

![Process Overview](./assets/process-overview.png "Process Overview")

## Requerimientos técnicos

Esta sección describe qué información técnica se debe proporcionar a un equipo de riesgo. Esta guía aún no ha sido aprobada por los titulares de MKR como una plantilla para los equipos de riesgo, así que tenga en cuenta que puede haber cambios en esta sección.

### Auditoria tecnica

Para que un equipo de riesgos cree una nueva propuesta de gobierno en su nombre, debe contar con profesionales de seguridad de sistemas altamente calificados que realicen una auditoría de seguridad técnica de su (s) contrato (s) de token y presenten el informe de auditoría resultante como parte de la aplicación.

#### Equipo de auditoría

La auditoría debe ser realizada por investigadores de seguridad de sistemas altamente calificados. La auditoría puede ser comprada a servicios de terceros.

#### Alcance de auditoría

El alcance de la auditoría debe incluir cualquier contrato inteligente que proporcione funcionalidad a su token, incluidos, entre otros, transferencias, congelamientos, listas blancas, listas negras, aprobaciones / rechazos de transacciones, autorizaciones, capacidad de actualización, etc.

#### Factores de auditoria

La auditoría debe evaluar los factores de seguridad que incluyen, entre otros:

- Controles de desbordamiento
- Complejidad, incluidas las capas de herencia y si se llaman contratos externos
- Si se usan funciones en desuso
- Si las funciones de SafeMath están definidas y usadas
- Si la verificación formal ya se ha realizado o se puede realizar fácilmente
- Ejemplo de auditoría
- Para ver un ejemplo del aspecto que puede tener un informe de auditoría, puede ver la auditoría de Trail of Bits de la versión de prueba del colateral único Dai conocido como "Sai".

#### Resultado y calidad de la auditoría

Es a la entera discreción del equipo de riesgo determinar si el resultado, la profundidad y la calidad de la auditoría realizada cumplen con los estándares para que ese equipo de riesgo determine los parámetros de riesgo y presente una propuesta de gobierno en su nombre.

## Adaptadores

DCS acepta diversos tipos de token como Colateral de una manera estandarizada a través de adaptadores de token. Cada token, una vez autorizado como colateral, obtiene su propio contrato de adaptador individual, que custodia tokens y otorga a los depositantes un saldo colateral. Los usuarios pueden usar este saldo dentro de DCS para abrir un CDP y dibujar Dai. Los encargados que participan en las subastas de Colateral también pueden convertir sus Colateral en un saldo simbólico mediante el contrato del adaptador. En esta sección, explicaremos la funcionalidad de los adaptadores en detalle y lo ayudaremos a identificar un adaptador adecuado para su token.

### Interfaz de contrato

Cada contrato de adaptador debe implementar dos funciones para permitir a los usuarios depositar y retirar tokens.

- `JOIN` permite a los titulares de tokens depositar tokens en el contrato del adaptador y obtener la misma cantidad que un saldo de Colateral interna en una dirección que el usuario controla.
- `EXIT` permite a los titulares de tokens canjear su saldo de Colateral interno en token balance en una dirección en el contrato de token.

### Implementaciones disponibles

#### ERC-20

GemJoin es una implementación de adaptador estándar adecuada para aceptar un token ERC-20 con mecanismos de transferencia simples como Colateral. Este adaptador no se puede usar si su token permite que los saldos de token de los titulares cambien sin su aprobación explícita mediante una transacción firmada, por ejemplo, la evaluación de las tarifas de demora en los tenedores de token.

#### Pautas de implementación

Si los adaptadores estándar disponibles no se pueden usar para su token, se debe crear un nuevo adaptador para aceptarlo como Colateral. Si no tiene las habilidades para desarrollar un nuevo adaptador, el equipo de integración de Maker Foundation puede ayudarlo a identificar un socio de desarrollo adecuado. Las nuevas implementaciones de adaptadores deben pasar por una auditoría técnica antes de que puedan ser aprobadas para su uso.

#### Impacto en el comportamiento del token

Hemos enumerado algunos posibles efectos secundarios en su token cuando está conectado a un adaptador para usarlo como Colateral dentro de DCS. Esta lista no es exhaustiva, y le sugerimos que realice una revisión con el rol técnico en el equipo de riesgo con el que está trabajando para asegurarse de que no haya consecuencias no deseadas después de que haya un adaptador activo para su token.

#### Restricciones de transferencia

DCS no impone restricciones de transferencia a los saldos colaterales internos de los usuarios. Revise los efectos que esto podría tener en su token si el token impone algún tipo de restricciones de transferencia internamente en los saldos de los usuarios, ya sea por defecto o en ciertos escenarios.

#### Privilegios de uso

Las Tokens que se encuentran en los contratos de adaptadores no pueden ser utilizadas en sus protocolos porque la capacidad de obtener Dai mientras se usan podría tener efectos secundarios no deseados tanto en el DCS como en el protocolo en sí.

## Tokens bloqueados

Los contratos de adaptadores no tienen en cuenta el límite de deuda actual del tipo de Colateral cuando se permiten depósitos simbólicos. Por lo tanto, una gran cantidad de tokens se podrían bloquear dentro de los contratos de adaptador incluso cuando no se están utilizando para dibujar Dai.

## En tokens de seguridad (Securities)

Si el token es un token de seguridad regulado, se deben realizar consideraciones adicionales.

La Guía para tokens de seguridad se planea agregar en una versión posterior de este documento.

Para ver una discusión sobre un concepto para agregar soporte para tokens de seguridad a DCS, consulte el documento "Sobre cómo agregar tokens de seguridad como Colateral" del equipo de integración de Maker Foundation.

## Requerimientos legales

Esta sección describe qué información legal proporcionar a un equipo de riesgo. Esta guía aún no ha sido aprobada por los titulares de MKR como una plantilla para los equipos de riesgo, así que tenga en cuenta que puede haber cambios en esta sección.

La evaluación legal constituye uno de los pasos centrales en el proceso de incorporación de Colateral. Verá preguntas legales en el formulario de solicitud a continuación. La lista de preguntas no es exhaustiva, por lo que el proceso, en muchos casos, involucrará conversaciones iterativas con una persona / entidad que promueva la incorporación del token y / u otros actores relevantes. Muy a menudo, la estructura legal de un token dado será novedosa, y el gobierno de MKR debe comprenderla completamente para tomar una decisión informada con respecto a la incorporación de token y los parámetros de riesgo relacionados.

En general, el análisis legal tendrá como objetivo determinar los siguientes factores:

Los riesgos legales asociados con el token y su función como tipo de Colateral disponible;

Consecuencias reglamentarias (si las hay) de la incorporación del token tanto para las unidades constitutivas particulares involucradas (por ejemplo, titulares, usuarios de CDP, Guardianes, otros intermediarios, etc.) como para DCS.

## Requerimientos financieros

Esta sección describe qué información financiera se debe proporcionar a un equipo de riesgo. Esta guía aún no ha sido aprobada por los titulares de MKR como una plantilla para los equipos de riesgo, así que tenga en cuenta que puede haber cambios en esta sección.

Como parte de la evaluación de riesgos, un equipo de riesgos debe llevar a cabo un proceso de diligencia debida. Le solicitamos que proporcione la siguiente información para ayudar a facilitar este proceso:

### Clasificación

En términos generales, los activos colaterales se pueden separar en dos categorías: activos criptográficos y tokens de seguridad. Los activos crypto-nativos (a menudo denominados activos "portadores") son monedas como bitcoin y ether que no tienen riesgo de contraparte. La posesión del token es equivalente a la propiedad directa del activo. A la inversa, los activos "registrados", como los valores tokenizados, son simplemente reclamaciones o recibos de un activo subyacente. Estos tokens requieren un análisis de recursos, el proceso mediante el cual se puede canjear un token por el activo subyacente. Se puede solicitar información específica dependiendo de la clasificación del activo colateral.

### Visión general

Debes proporcionar un breve resumen de tu proyecto. En particular, distinga entre el sector empresarial (es decir, el intercambio descentralizado, el mercado de predicción, la plataforma de pagos, etc.) y el caso de uso del token (es decir, el token de utilidad, el token de trabajo, el token de gobernanza, etc.). Debe enviar toda la documentación relevante, incluidos, entre otros, libros blancos, plataformas de lanzamiento y planes de trabajo. También recomendamos enviar información financiera, como presupuestos, tasas de quema, pasarelas y resúmenes de gestión de tesorería.

### Emisión

Para activos al portador, describa la naturaleza de la emisión. Si existió un ICO, revele la fecha, el aumento del monto, la valoración, el precio del ICO y la distribución de token. También se recomiendan detalles sobre los inversores de semillas, los bloqueos y el suministro circulante.

## Los mercados

Presente un perfil comercial detallado, que incluya, entre otros, listados de cambio, proveedores de liquidez, etc. La liquidez es un aspecto importante que influye directamente en la capacidad y disposición de un Guardián para comprar Colateral en una subasta de liquidación. Las condiciones de liquidez favorables dan como resultado un índice de liquidación más bajo y un techo de deuda más alto.

### Comunidad

Proporcione enlaces a las plataformas de comunicación principales (por ejemplo, correo electrónico, telegram, discordi, reddit, etc.) en las que puede contactarse. Toda la información solicitada en este documento, incluidos los documentos, se debe proporcionar por correo electrónico.

## Formulario de aplicación

Este formulario resume la información que debe enviarse a un equipo de riesgos para solicitar que revise su material y proponga un conjunto de parámetros de riesgo para el gobierno de MKR. Toda la información solicitada en este documento, incluidos los documentos, se debe proporcionar por correo electrónico. Si el equipo de riesgo encuentra que el material es suficiente, toda la información presentada se pondrá a disposición del público junto con los parámetros de riesgo propuestos relacionados para permitir que el gobierno de MKR tome una decisión completamente informada.

Este formulario aún no ha sido aprobado por los titulares de MKR como una plantilla para que lo usen los equipos de riesgo, así que tenga en cuenta que puede haber cambios en esta sección.

### Especificaciones técnicas

1. ¿Cuál es la dirección del contrato token?
2. ¿Dónde se puede ver el código fuente? Proporcione enlaces al código fuente para todos los contratos que brindan funcionalidad al token, incluidos, entre otros, transferencias, congelaciones, listas blancas, listas negras, aprobaciones / rechazos de transacciones, autorizaciones, capacidad de actualización, etc.
3. ¿Con qué estándar de token cumple tu token?
4. ¿Tiene el token algún mecanismo especial para manipular las horquillas? Esto puede incluir bifurcaciones en la aplicación del token o en la cadena de bloques subyacente.
   1. En caso afirmativo, proporcione una referencia a más información sobre el manejo de la horquilla.
5. Mi token encaja con el siguiente adaptador Dai Credit System:
   1. GemJoin
   2. Suministraré mi propio contrato de adaptador. Ingrese la referencia a continuación.
6. ¿El token ha pasado la verificación formal?
   1. En caso afirmativo:
      1. Por favor describa la especificación.
      2. ¿Quién compuso la especificación?
      3. Por favor, proporcione un enlace al resultado de la verificación.
7. Auditoria tecnica
   1. Subir informe de auditoría creado por personal de investigación calificado.

### Especificaciones financieras

#### Preguntas generales

1. Por favor, proporcione un breve resumen de su proyecto.
1. Por favor liste los miembros fundadores.
1. ¿Qué tipo de activo criptográfico es (utilidad, trabajo, gobierno, etc.)?
1. Si es un recurso criptográfico nativo, ¿qué categoría (utilidad, trabajo, gobierno, etc.)?
1. ¿Cuál es el uso del token en el proyecto? ¿Cómo se utiliza el token?

#### Emisión - Activos al portador

1. ¿Cuál fue la fecha del ICO?
1. ¿Cuál fue el precio inicial y la valoración?
1. ¿Cuánto capital se recaudó (en USD y cripto)?
1. ¿Cuál fue el desglose de la distribución de Tokens?
1. ¿Hay algún tokens en un calendario de vesting? Si es así, ¿cuál es ese tiempo? Describa cualquier limitación de vesting relacionada.
1. ¿Cuáles son el suministro circulante y total del token?
1. ¿Cuál es la dirección billetera de la tesorería?
1. ¿Cuánto del aumento de ICO se convirtió en fiat (descrito en los términos de esa moneda fiduciaria y la cantidad de Tokens)?
1. ¿Hubo algunos inversores semilla pre-ICO? ¿Quiénes y cuáles eran sus respectivas asignaciones?

#### Fundamentos

1. Por favor, enlace al whitepaper y / o relacionada con el token.
1. Por favor, enlace a la hoja de ruta más actualizada para su proyecto.
1. ¿Cuántos empleados y contratistas tiene su proyecto?
1. ¿Cuál es la tasa de quema mensual?
1. ¿Cuál es la estrategia para la gestión de tesorería?

#### Los mercados

1. ¿En qué intercambios se encuentra tu token?
1. ¿Conoces a algún Market Maker para tu token?
1. Su token tiene soporte de custodia? ¿Dónde / con quién? Por favor, proporcione una copia del acuerdo de custodia si está disponible.

#### Comunidad

1. Por favor, vincule su correo electrónico, Telegram, subreddit, Discord, Twitter, Medium.
1. ¿Cuál es el sitio web de su proyecto?

### Especificaciones legales

1. ¿Quién es el emisor de Tokens (si existe)?
1. ¿Tiene representación legal relacionada (1) con la emisión del token, (2) requisitos reglamentarios relacionados con el token, o (3) de lo contrario? Si es así, ¿a quién?
1. ¿Cuál es el estado reglamentario del token? Proporcione la documentación pertinente (por ejemplo, opiniones legales, prospectos, divulgaciones públicas, documentos de presentación, etc.).
1. ¿Existen derechos asociados con el token que no se derivan de su implementación técnica o ramificaciones técnicas del sistema en el que se utiliza el token? Si es así, ¿Que son? ¿Cómo se hacen cumplir? Por favor proporcione la documentación que conmemora estos derechos.
1. ¿En qué jurisdicción (s) se emitió el token? Proporcione todos los documentos y documentos públicos relacionados con la emisión del token.
1. ¿Se emitió el token como parte de un proceso regulatorio (por ejemplo, oferta de valores)? Si es así, ¿bajo qué ley, norma y / o regulación se emitió el token? Proporcione todos los documentos relacionados con este proceso de emisión reglamentaria (en la medida en que no se haya proporcionado en respuesta a lo anterior).
1. ¿Se emitió el token como parte del proceso de recaudación de fondos para su proyecto? En caso afirmativo, ¿quiénes son los inversores y cuánto capital tienen respectivamente?
1. Describa la estructura corporativa y legal del proyecto / sistema / producto en el que se utiliza el token.
