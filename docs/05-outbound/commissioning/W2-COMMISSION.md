# W2 · Monetization & Economics — commissioning brief

**Data:** 3 de setembro de 2026 · **Baseline:** W1 CLOSED

---

Estamos iniciando formalmente o trabalho de **W2 · Monetization & Economics** com base no fechamento de W1.

Anexei o pacote mais recente e reconciliado do projeto Bonsai. Considere este pacote como a referência atual para o estado de evidência e decisões.

Antes de prosseguir, leia nesta ordem:

1. `CURRENT-EVIDENCE-AND-DECISIONS.md`
2. `PROJECT-BRIEF.md`
3. `W1-FINAL.md`
4. `W1-HANDOFF-W2-W3-W4.md`
5. `APP-MARKET-SCAN.md`
6. `RESEARCH-BRIEF-behavioural-validation.md`
7. `COMPETITOR-REGISTRY.md` apenas quando necessário para questões competitivas/econômicas

## Contexto de governança

- W1 está formalmente **CLOSED FOR BROAD REVIEW MINING**.
- P1, P2 e P3 continuam `UNVALIDATED`.
- Nenhum produto foi escolhido.
- Não devemos tratar o legacy application como direção de produto.
- Não devemos avançar para Product/UIUX ou tecnologia.
- Diferencie rigorosamente `OBSERVED`, `SUPPORTED SIGNAL`, `CONTRADICTED`, `UNVALIDATED` e `DEFERRED`.
- Não transforme evidence signals de W1 em conclusões econômicas sem análise própria.
- Não altere silenciosamente o canon. Se W2 gerar evidência que contradiga algo material, apresente como `PROPOSED CANON AMENDMENT` — o mecanismo está definido em `CURRENT-EVIDENCE-AND-DECISIONS.md` §13a e exige seis campos (`TARGET`, `CURRENT`, `PROPOSED`, `EVIDENCE`, `STATUS`, `BLAST RADIUS`). Enquanto pendente, uma proposta não altera nada.

## Ao usar o registry

Qualquer denominador de distribuição deve filtrar por `included_in_standalone_distribution_measurement = true` — atualmente **32 de 45** linhas. As 13 excluídas são um tracker embutido em subscription, software desktop legado, um companion de hardware, produtos web-first e linhas históricas/retiradas. Misturá-las em um único denominador de loja é exatamente o erro que essa coluna existe para evitar.

Duas identidades estão `VERIFICATION_CONTESTED` (`W1-020`, `W1-029`) após três rodadas de verificação. Nenhuma é load-bearing; não construa argumento que dependa delas.

Campos do registry já estiveram errados — um `surface_type` incorreto e um `platform_identity` com typo que fez um produto ativo parecer retirado. Trate valores do registry como evidência a verificar, não como fato assentado. Apenas **31 de 45** linhas têm algum `platform_identity`, o que limita o que pode ser medido automaticamente.

## O principal input de W1 para W2

> existe comportamento real de longitudinal recordkeeping e existem casos de uso pago e persistente, mas ferramentas generalistas e analógicas são substitutes reais, subscription resistance existe e o valor histórico pode aparecer muito depois do custo inicial e recorrente de logging.

## A pergunta de W2

> **Existe uma estrutura econômica plausível por trás de algum dos opportunity areas sobreviventes, considerando que o usuário pode resolver grande parte do job com ferramentas que já possui?**

Dentro dela permanece o crux registrado no handoff de W1, que continua vinculante:

> **What value is strong and immediate enough to justify payment when a grower can solve much of the job with tools already owned, while the historical payoff may arrive months or years later?**

## O que quero de você

Prossiga a partir deste novo baseline, revise qualquer trabalho anterior de W2 feito antes deste fechamento de W1 e identifique explicitamente:

- o que continua válido;
- o que precisa ser atualizado;
- o que W1 contradiz ou enfraquece;
- quais hipóteses econômicas permanecem abertas;
- quais evidências W2 precisa produzir;
- e quais outputs precisam ser reconciliados com W3 e W4 posteriormente.

Não comece escolhendo preço, subscription ou produto. Comece pela estrutura econômica do problema e pelos segmentos/comportamentos que poderiam sustentar valor econômico.

## Uma observação sobre evidência disponível agora

W1 tinha uma fonte de dados; W2 não tem equivalente óbvio, e tudo que é load-bearing (H1B, WTP, retenção) está `UNVALIDATED` e bloqueado em acesso a participantes. Existe, porém, evidência observável hoje sem participantes: **pricing e packaging são públicos** em App Store e Google Play para as linhas do registry.

Uma amostra de 18 produtos do registry presentes numa única busca US mostrou **17 de 18 gratuitos no download**, com um único produto pago à frente — **Bonsai Album, US$ 7,99** — que é também o líder em número de avaliações (**193**). Isto não estabelece causalidade e não deve ser tratado como tal, mas indica que um teardown de pricing/packaging por todo o registry é um módulo Track A executável agora e produziria evidência real, não apenas raciocínio. Considere-o como primeiro passo, com o backfill dos 14 `platform_identity` ausentes como pré-requisito.
