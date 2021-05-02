# Encuesta**: Acelerar el Lanzamiento del Módulo de Estabilidad de la Paridad - November 23, 2020**

El Facilitador de Gobernanza de MakerDAO ha colocado una encuesta de gobernanza en el [sistema de votación](https://vote.makerdao.com/polling) en nombre de la comunidad de la Gobernanza de Maker; esta le ofrece a la Gobernanza de Maker la oportunidad de señalar su apoyo o su oposición a acelerar el lanzamiento del PSM (Módulo de Estabilidad de la Paridad, *Peg Stability Module*).

Esta [Encuesta](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) de Gobernanza estará activa por 3 días a partir del lunes 23 de noviembre a las 17:00 UTC.

## **Reseña**

El Módulo de Estabilidad de la Paridad (PSM) puede usarse para reemplazar los vaults de stablecoins con tasas de colateralización de 101%, que alcanzarán una colateralización de 100% para el 18 de diciembre, aproximadamente. Actualmente el plan es reemplazar estos vaults de stablecoins con duplicados, conforme el voto del [Plan de Acción para Stablecoins](https://vote.makerdao.com/polling/QmY1vJPs?network=mainnet#vote-breakdown) de hace 2 semanas. A mitad de la votación, apareció una nueva opción: el PSM. La razón de esta votación es determinar si los poseedores de MKR prefieren el PSM en su lugar.

El PSM ofrece muchos beneficios sobre el status quo:

- Restaurar la paridad. Podemos acomodar el precio dentro de un spread más apretado porque ya no tenemos que preocuparnos por las liquidaciones.
- La recolección de tarifas es por adelantado y exacta en lugar de tener que cronometrar las reinversiones al 100% del Ratio de Colateralización.
- Ya no será necesario preocuparse por las liquidaciones ya que el PSM entrara en acción automáticamente en cuanto Dai esté debajo de $0.999.
- Ganancia adicional sobre la etapa de liquidación que anteriormente habría terminado en manos tenedores de vaults.
- Permitimos que traders muy grandes se muevan entre Dai y stablecoins sin deslizamiento.

Los parámetros iniciales propuestos para el PSM son `tin` de 0.1% y `tout` de 0.1%. Para maximizar la recolección de tarifas el parámetro `tin` se inicializará en 1% y se irá decrementando continuamente hacia 0.1% a lo largo de una semana. El PSM inicialmente será desplegado como mínimo para USDC y (si el tiempo lo permite) también para las otras stablecoins. Los techos de deuda se establecerán lo suficientemente altos como para permitir tanta oferta como sea necesaria para que la paridad sea de 1.001 USDC.

Por favor revista el [hilo](https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094) de la discusión para seguir informando tu posición con respecto a este asunto antes de votar.

## Resultados

**Si los votos por la opción 'Sí' superan los votos por la opción 'No', se llevarán a cabo las siguientes acciones:**

- Los equipos de dominio priorizarán el PSM y apuntarán a que la fecha de lanzamiento tentativa sea el viernes 18 de diciembre de 2020.
- Se hará una publicación en el foro donde podrá hacerse el seguimiento del estado de las auditorías técnicas y las evaluaciones de riesgo del PSM.
- Se descartará el "Plan de Acción para Stablecoins - Opción 3".

**Si los votos por la opción 'No' igualan o superan los votos por la opción 'Sí', se llevarán a cabo las siguientes acciones:**

- Procederemos con el "Plan de Acción para Stablecoins - Opción 3", como se votó anteriormente.
- Se hará una encuesta adicional para determinar la fecha en que cambiaremos a los nuevos vaults de stablecoins, según se detalla en el "Plan de Acción para Stablecoins - Opción 3"
- El PSM podría o no ser añadido más adelante mediante el ciclo de MIPs mensual regular.

---

# **Recursos**

Si esta es tu primera vez votando en el Protocolo Maker, por favor visita la guía de votación para aprender cómo funciona la votación; visita también la [guía de configuración de la billetera](https://community-development.makerdao.com/en/learn/governance/voting-setup/)  para configurar tu billetera para votar.

Puedes encontrar información adicional acerca del proceso de Gobernanza en la sección de [Gobernanza](https://community-development.makerdao.com/en/learn/governance/) del portal de la comunidad de Maker.

Para participar de llamadas de Gobernanza futuras, por favor [únetenos](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) [](https://community-development.makerdao.com/governance/governance-and-risk-meetings)todos los jueves a las 16:00 UTC.

Para añadir votaciones actuales y futuras a tu calendario, por favor visita el [Calendario de Eventos Públicos de MakerDAO](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).

---

Esto es una traducción del [artículo original en inglés](https://github.com/makerdao/community/blob/master/governance/polls/Proposal%20-%20Accelerate%20the%20Peg%20Stability%20Module%20Launch%20-%20November%2023,%202020.md#poll-accelerate-the-peg-stability-module-launch---november-23-2020). Gracias a @Blimpa y @Lozadaluis12 por la traducción.