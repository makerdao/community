# Posições de dívida colateralizada (CDP)

## O que são posições de dívida colateralizada (CDP)?

A posição de dívida colateralizada (CDP) do MakerDAO é um tipo de empréstimo gerenciado por um sistema de contrato inteligente executado na blockchain Ethereum. O CDP é um componente fundamental do Sistema Stablecoin Dai, que permite a criação do Dai contra as garantias depositadas que são retidas até o retorno do Dai emprestado.

O uso do CDP altera coletivamente a oferta total de Dai. Os usuários criam o Dai emprestando-o contra suas garantias e o Dai é destruído quando eles pagam sua dívida. Esse processo ocorre na blockchain, que permite auditoria completa e independente do Dai e das garantias que o suportam.

O CDP é obrigado a ter um excesso de garantias. É necessário que o valor colateral de um CDP seja maior que o valor da dívida, o que garante aos usuários da Dai que seu Dai tem valor e é totalmente lastreado em ativos reais.

## Como um CDP funciona?

Qualquer usuário que deseje solicitar um empréstimo no Dai pode depositar o ETH em um CDP. Uma vez depositado, o usuário pode gerar Dai contra o valor do seu depósito. O ETH depositado pode ser retirado proporcionalmente quando o usuário retorna parte ou todo o Dai emprestado. Desde que os usuários do CDP mantenham a [Taxa de colateralização] (https://github.com/makerdao/community/blob/master/faqs/cdp.md#what-is-the-collateralization-ratio), eles podem retirar ou depositar livremente o excesso de garantia.

Após gerar o Dai, os usuários do CDP podem fazer o que quiserem com ele. Se um usuário deseja recuperar o total de suas garantias, ele precisa primeiro devolver todos os Dai emprestados mais uma taxa de estabilidade.

Esse ciclo de empréstimo / reembolso e adição / eliminação de garantias pode continuar enquanto os proprietários de CDP optarem por manter suas posições em aberto. Os usuários podem fechar seu CDP pagando a dívida e as taxas associadas integralmente.

Quem pode abrir um CDP?

Os CDPs não precisam de permissões, qualquer um pode criar e usar um CDP. Não há requisitos relacionados ao histórico de empréstimos anteriores ou a processos de aplicativos complicados. O sistema não é controlado por guardiões ou intermediários. Os CDPs do Maker são de propriedade das contas da Ethereum que os criaram e podem ser livremente transferidos entre carteiras.

## Um CDP está sujeito a cobrança?

Sim. Os proprietários de CDP são obrigados a pagar uma taxa de estabilidade em suas dívidas pendentes. É uma [taxa APY continuamente composta] (https://www.investopedia.com/personal-finance/apr-apy-bank-hopes-cant-tell-difference/).

Se um CDP contém garantias insuficientes, é considerado "inseguro", pode ser liquidado e seus ativos apreendidos autonomamente pelo Sistema Maker e vendidos para cobrir a dívida pendente. Isso impõe uma penalidade de acordo.

## Qual é a taxa de colateralização?

O Índice de Colateralização é a relação entre o valor da garantia que os usuários adicionaram ao seu CDP e a quantidade de Dai emprestada.

Por exemplo: Digamos que o Ether bloqueado em um CDP vale US $ 150 e 50 Dai foram emprestados, isso significa que a Taxa de Colateralização é de 300%. Para cada Dai, há US $ 3 em garantia que a apoia. No sistema Maker, seu CDP pode ser liquidado se ficar abaixo da [Taxa de liquidação] (https://github.com/makerdao/community/blob/master/faqs/liquidation.md#what-is-the- relação de liquidação), que é o rácio mínimo de colateralização.

Quais são os riscos associados à posse de um CDP?

Possuir um CDP é inerentemente arriscado. Existem quatro categorias principais a serem consideradas ao usar um CDP: riscos de mercado, riscos de usuários, riscos de sistema e riscos de variabilidade de parâmetros.

Riscos de mercado

O uso de um CDP envolve assumir dívidas e transferir a propriedade de ativos para um contrato inteligente que possa vendê-los em caso de desaceleração do mercado. Todo CDP com dívida tem um Preço de Liquidação, o preço pelo qual o CDP seria liquidado. O uso de um CDP para fazer alavancagem (https://www.investopedia.com/terms/l/leverage.asp) apresenta outra camada de risco. O potencial de recompensa é maior por meio da alavancagem, mas o potencial de perda também é ampliado. Uma prática usual é manter um alto índice de colateralização em preparação para falhas de mercado e, assim, evitar a liquidação.

Riscos do usuário

Esses são os riscos associados aos erros do usuário. O MakerDAO não tem a capacidade de reverter transações ou recuperar fundos enviados para endereços ou contratos incorretos.

Riscos do sistema

Existem muitos riscos em potencial que a plataforma Maker enfrenta. A lista a seguir tenta destacar alguns dos riscos do sistema, mas nem todos são incluídos:

- Um ataque de hackers contra a infraestrutura de contrato inteligente
- Um evento de 'cisne negro' em um ou vários tipos de garantias
- Erros de preço, irracionalidade e circunstâncias imprevistas
- Falha na infraestrutura centralizada. Por exemplo: falha na conexão com a Internet, erros no MetaMask, etc.

Riscos de variabilidade de parâmetros

É importante observar que os proprietários de CDP estão sujeitos a alterações nos Parâmetros de risco que governam o sistema. Isso equivale a riscos financeiros para o proprietário do CDP. A seguir, é apresentada uma lista incompleta dos parâmetros sujeitos a alterações:

- Taxa de estabilidade
- Índice de Liquidação
- Limite máximo da dívida do tipo colateral
- Pena de liquidação

## Quais são as práticas comuns para limitar riscos?

Os riscos de mercado podem ser reduzidos usando alertas de preço, mantendo um alto Índice de Colateralização, monitorando a saúde do CDP e mantendo reservas suficientes fora do CDP para pagar a dívida ou adicionar mais garantias. Algumas pessoas podem querer enfrentar muitos riscos ou fazer apostas delicadas tentando prever o mercado. Isso pode levar à liquidação do seu CDP, resultando em perdas.

Os riscos do usuário podem ser reduzidos através da prática, usando pequenas quantidades de evidências e verificando minuciosamente os endereços com os quais ele interage.

## Quais são alguns dos benefícios de ter um CDP?

** Pagamento flexível **
Não há limites de tempo ou programas de pagamento mínimos relacionados a um CDP. Os usuários podem retirar o Dai ou adicionar garantias adicionais quando desejarem.

** Não há requisitos de histórico de crédito **
Não há requisitos relacionados ao histórico de empréstimos anteriores ou processos de inscrição complicados. Qualquer pessoa com um endereço Ethereum pode acessar o sistema.

** Sem contrapartes **
Como o sistema é executado como um contrato inteligente independente, os usuários podem interagir com um sistema financeiro transparente sem precisar contar com uma instituição como contrapartida para gerenciar ou liberar seus fundos. Todas as transações são armazenadas em uma blockchain pública e estão disponíveis para qualquer um auditar.

** _ Negociação de margem_ descentralizada **
Os usuários podem optar por bloquear seu Ether, retirar o DAI e comprar mais Ether para adicioná-lo à quantidade original. Isso permite que eles tomem uma posição de alavancagem.

Por que eu gostaria de abrir um CDP?

Existem muitas razões pelas quais se pode usar um CDP. Observando as experiências do usuário, reunimos alguns exemplos abaixo:

- ** Alavancagem **: um usuário pode acreditar que um ativo aumentará seu valor em breve; portanto, use as garantias existentes para retirar o Dai e comprar esse ativo. Então, se esse ativo tiver sido reavaliado, você poderá vendê-lo por mais Dai do que pediu emprestado e devolver o empréstimo original enquanto a diferença estiver embolsada.
- ** Linha de crédito flexível: ** um usuário deseja comprar um carro. E você pode determinar que as opções financeiras tradicionais não oferecem termos ou taxas atraentes, como você pode obter ao abrir um CDP. O usuário poderia emprestar Dai contra seu ETH, comprar o carro e pagar dívidas de acordo com sua própria estratégia.
- ** Refinanciamento: ** um usuário pode obter um empréstimo com juros altos. Em vez de liquidar seus ativos para cobrir pagamentos, você pode emprestar o Dai ao seu ETH, converter o Dai em dinheiro fiduciário e pagar uma parte ou o valor total da sua dívida mais cara.

É importante lembrar que, ao criar um CDP e tomar emprestado o Dai, os usuários estão criando dívidas e assumindo riscos. Por exemplo: a variação da taxa de estabilidade e da liquidação.

## Existem razões para evitar a abertura de um CDP?

_Nada_ deste documento constitui um conselho de investimento, mas você pode tomar nota dos possíveis motivos para evitar a abertura de um CDP.

Por exemplo, se você estiver interessado em obter uma criptomoeda estável, mas não estiver familiarizado com as nuances da interação com contratos inteligentes, não deverá abrir um CDP. Em vez disso, a prática padrão seria comprar o DAI em uma troca.

Ao abrir um CDP, pode-se expor a vários tipos de riscos, que podem resultar em perdas financeiras.

Se você acredita que o mercado está entrando em um declínio prolongado, convém avaliar quanto gerenciamento um CDP pode exigir para abrir. Um mercado em baixa prolongado pode exigir a adição constante de garantias a uma posição para garantir sua força ou a disponibilidade de ativos suficientes para serem trocados pelo DAI para pagar a dívida pendente.

## Que tipo de garantia posso investir?

No Dai de garantia única, o único tipo de garantia disponível é o Ether. Na próxima iteração do sistema, Multi-Collateral Dai, muitos outros tipos de garantias estarão disponíveis. Os novos tipos de garantias serão determinados pelos proprietários do token MKR por meio do processo de Governança.

## É possível pagar a divida em DAI através de uma exchange?

Não, você precisa interagir com um método de contrato especial que só pode ser alcançado por meio de uma interface da web ou interagindo diretamente com o contrato. Usar algo diferente da interface do usuário da Web e da carteira onde abriu o CDP pode ter resultados desastrosos se você não tiver uma visão profunda do design do contrato.

## Quanta garantia posso exceder?

Não há limite máximo de quanta garantia pode ser depositada em um CDP.

## O que acontece com _airdrops_ quando eu bloqueo o meu Ether em um CDP?

Todos os ativos mantidos no sistema são gerenciados por contratos inteligentes que não conseguem rastrear ou redistribuir tokens _airdrops_. Não há como acessar tokens enviados para esses endereços.

## Posso usar a minha garantia em outro projeto e também abrir um CDP com ela?

Depois que uma garantia é depositada em um contrato, não é possível usar os mesmos tokens em outro contrato. No futuro, alguns projetos _ poderão_ emitir tokens de depósito que representam as garantias depositadas em seus sistemas. No futuro, os eleitores do MakerDAO poderão optar por permitir esses tipos de tokens como garantia.

## Devo pagar o Dai se minha garantia aumentar seu valor?

Os usuários devem pagar manualmente todas as suas dívidas, incluindo a [Taxa de estabilidade] (https://github.com/makerdao/community/blob/master/faqs/stability-fee.md#what-is-the-stability-fee ) se eles desejam liberar todas as suas garantias. O sistema não paga automaticamente a Taxa de Estabilidade usando a reavaliação colateral em seu CDP.

À medida que o valor da garantia aumenta, partes dele podem ser retiradas, mantendo a mesma taxa de colateralização. Qualquer garantia que esteja acima do Índice de Colateralização pode ser extraída; no entanto, isso aumentará o preço de liquidação e, portanto, aumentará o risco. Se o valor da sua garantia aumentar, seu índice de garantia aumentará.

## Posso usar o mesmo CDP depois de liquidado?

Sim, desde que haja garantias no CDP, você pode pedir emprestado à Dai. O acordo não fecha o CDP; Você pode adicionar garantias e começar de novo.

## Como posso verificar a solvência do ecossistema CDP?

O sistema é executado na blockchain Ethereum, então todas as transações e contratos são públicos. Os usuários podem interagir com um sistema financeiro completamente transparente sem precisar contar com uma contraparte. Qualquer pessoa pode verificar a solvência do sistema visitando um dos muitos [MakerDAO Statistics Panels] (https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai ) ou consultando diretamente o blockchain.