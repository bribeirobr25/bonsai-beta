# W4 · Growth Strategy — commissioning brief

**Data:** 3 de setembro de 2026 · **Baseline:** W1 CLOSED

---

Estamos iniciando formalmente o trabalho de **W4 · Growth Strategy** com base no fechamento de W1.

Anexei o pacote mais recente e reconciliado do projeto Bonsai. Considere este pacote como a referência atual para o estado de evidência e decisões.

Antes de prosseguir, leia nesta ordem:

1. `CURRENT-EVIDENCE-AND-DECISIONS.md`
2. `PROJECT-BRIEF.md`
3. `W1-FINAL.md`
4. `W1-HANDOFF-W2-W3-W4.md`
5. `APP-MARKET-SCAN.md`
6. `RESEARCH-BRIEF-behavioural-validation.md`
7. `COMPETITOR-REGISTRY.md` apenas quando necessário para análise de distribution actors ou competitive acquisition

## A pilha de perguntas — leia antes de responder qualquer uma

Existem **quatro camadas** de pergunta neste projeto e elas não competem entre si.
Nenhuma frente deve responder só uma. A ordem é do geral para o específico:

| Camada | Onde vive | Escopo |
|---|---|---|
| **1 · Organizing question** | `CURRENT-EVIDENCE-AND-DECISIONS.md` §10b | compartilhada por W2, W3 e W4 |
| **2 · Diagnóstico corrente** | `CURRENT-EVIDENCE-AND-DECISIONS.md` §7a | explicação #3, marcada em canon como *a melhor disponível* |
| **3 · Perguntas de canon por frente** | `CURRENT-EVIDENCE-AND-DECISIONS.md` §11 | específicas, concretas, **frequentemente esquecidas** |
| **4 · Sharpened + operative question** | `W1-HANDOFF-W2-W3-W4.md` e este brief | o crux e o enquadramento desta frente |

**Camada 1 — organizing question (compartilhada):**

> **Why do dozens of tracking, care and journal products coexist while growers
> still resort to notebooks, spreadsheets, OneNote, photo folders and custom
> tools?**

Canon nota que esta é uma lente melhor do que *o mercado é pequeno demais*: ela
aceita que as tentativas existem e pergunta por que não deslocaram os workarounds.

**Camada 2 — o diagnóstico que canon considera o mais útil (§7a, explicação #3):**

> **o usuário paga o custo de logging toda vez que toca numa árvore, enquanto
> parte do benefício chega meses ou anos depois.**

Canon é explícito: isto reenquadra o problema de *logging friction* para um
**descompasso temporal entre custo e benefício**, e aponta para remédios
diferentes — batch capture, deferred structuring, e fazer valor inicial chegar
antes de a coleção estar inteira no sistema. Não trate como hipótese nova; trate
como o estado atual do diagnóstico, a ser confirmado ou contradito.

**Camada 3 — instrução de canon específica de W4 (§11.4), que este brief não substitui:**

> **which loops, not which channels.**

Curta, e já refletida na instrução principal deste brief. Registrada aqui para
que a pilha de perguntas fique completa nas três frentes.

## Contexto de governança

- W1 está formalmente **CLOSED FOR BROAD REVIEW MINING**.
- P1, P2 e P3 continuam `UNVALIDATED`.
- Nenhum produto foi escolhido.
- Growth deve começar por **loops, moments e distribution actors**, não por uma lista de canais como Instagram, TikTok, SEO ou paid ads.
- Não transforme acquisition moments observados por W1 em canais ou growth loops já validados.
- Diferencie rigorosamente `OBSERVED`, `SUPPORTED SIGNAL`, `CONTRADICTED`, `UNVALIDATED` e `DEFERRED`.
- Não altere silenciosamente o canon. Contradições materiais devem aparecer como `PROPOSED CANON AMENDMENT` — mecanismo definido em `CURRENT-EVIDENCE-AND-DECISIONS.md` §13a, com seis campos obrigatórios. Enquanto pendente, não altera nada.

## Ao usar o registry

Qualquer denominador de distribuição deve filtrar por `included_in_standalone_distribution_measurement = true` — atualmente **32 de 45** linhas. As 13 excluídas são um tracker embutido em subscription, software desktop legado, um companion de hardware, produtos web-first e linhas históricas/retiradas. Misturá-las em um único denominador de loja é exatamente o erro que essa coluna existe para evitar.

Duas identidades estão `VERIFICATION_CONTESTED` (`W1-020`, `W1-029`); nenhuma é load-bearing. Apenas **31 de 45** linhas têm algum `platform_identity`, o que limita o que pode ser medido automaticamente. Trate valores do registry como evidência a verificar.

## Acquisition moments comportamentalmente relevantes encontrados por W1

- first-tree intimidation;
- collection outgrows memory;
- spreadsheet/notes become cumbersome;
- photo history becomes fragmented;
- existing tracker fails;
- export/data continuity concern;
- desire to see progression.

> **Exclusão explícita, vinda do handoff de W1 e vinculante:** não use
> `camera-roll replacement` como standalone validated moment após a
> reconciliação de autenticidade. Ele dependia das seis unidades colocadas em
> quarentena (`BG-US-001`…`006`) e não sobreviveu. É o moment mais intuitivo da
> categoria, e é exatamente por isso que precisa ser nomeado aqui.

## O constraint crítico

> o usuário pode precisar investir em migration e repeated logging antes que o valor histórico acumulado apareça.

Full-collection entry já foi observado, portanto não é uma impossibilidade — mas o esforço e a taxa de abandono continuam `UNVALIDATED`.

## A pergunta central de W4

> **Como esta venture poderia plausivelmente encontrar, ativar e se propagar entre usuários relevantes, e quais mecanismos de growth também produzem evidência útil?**

Dentro dela permanece o crux registrado no handoff de W1:

> **Which acquisition moment produces differentiated value before migration and repeated logging costs dominate the experience?**

**A cláusula final da pergunta central é deliberada e importa além de W4.** Todas as hipóteses load-bearing do projeto estão `UNVALIDATED` e bloqueadas em acesso a participantes — H1B prevalence, retention, WTP. Um mecanismo de growth que também gera evidência vale mais do que um que apenas gera usuários. W4 é a única frente formalmente encarregada de procurar isso; não trate a cláusula como retórica.

## Riscos de canon que pertencem a W4 (§8)

- **Cold start — parcialmente mitigado.** Canon registra que o valor **não exige
  densidade de rede no dia um**. Isso amplia o espaço de loops viáveis, e deve
  ser usado em vez de assumido como problema.
- **Product mortality e durability.** Loops que dependem de o usuário migrar a
  coleção inteira aumentam o custo de saída *e* a exposição ao risco de
  descontinuidade que canon registra.

## Uma oportunidade de validação existente, e seus limites (§10)

Canon registra um **workshop para iniciantes em cerca de um mês** (90–120 min,
participantes saem com a primeira árvore), coorte zero-a-baixa experiência.

Isto é relevante para a cláusula final da pergunta central — mecanismos que
também produzem evidência — mas os limites são de canon e vinculantes:

- **Útil para:** onboarding de iniciante, vocabulário, first-tree anxiety,
  logging friction inicial, retorno em 7/14/30 dias.
- **Não útil para:** growers experientes, provenance, transfers, willingness to
  pay, workflows de praticante, retenção de longo prazo, efeitos de rede.
- **A ativação ali será artificialmente inflada** — instrutor presente, guiado,
  novo, social. A pergunta que importa é se alguém retorna *porque teve valor*,
  não porque foi solicitado.

> **Regra canônica, e ela é dura:** oportunidades de validação são **inputs da
> venture, não dependências dela**. Se essa oportunidade desaparecesse amanhã, a
> direção do trabalho não deveria mudar. Não proponha um growth loop que dependa
> dela.

## O que quero de você

Prossiga a partir deste novo baseline, revise qualquer trabalho anterior de W4 feito antes do fechamento de W1 e identifique explicitamente:

- o que continua válido;
- o que precisa ser atualizado;
- quais acquisition moments são realmente suportados;
- quais possible loops merecem teste;
- quais distribution actors existem;
- quais loops morreriam por migration/logging friction;
- quais mecanismos poderiam produzir evidência além de crescimento;
- e o que deverá ser reconciliado posteriormente com W2 e W3.

Não comece por canais. Comece por **momento → ator → ação → valor percebido → possível loop → evidence generated**.
