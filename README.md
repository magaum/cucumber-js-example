# Projeto shouty

Este projeto foi realizado durante o curso [BDD with Cucumber (JavaScript)](https://school.cucumber.io/).

Dependências:

- [Cucumber](https://www.npmjs.com/package/cucumber)
- [Cucumber Pretty](https://www.npmjs.com/package/cucumber-pretty)
- [Hamjest](https://www.npmjs.com/package/hamjest)

## Conceitos

**Gherkin:** É um formato em que as funcionalidades (Features) do sistema são escritas com palavaras reservadas. É possível alterar o idioma adicionando a linha **# language: [idioma]** no inicio do arquivo.

**Step definitions:** São os comportamentos esperados nas etapas descritas na especificação (Arquivo .feature). Quando os testes são executados pelo Cucumber, cada palavra reservada (Given, When, Then) é uma etapa. Em cada etapa, seu comportamento é procudado e executado na linguagem de teste (Javascript nesse caso), portanto é preciso descrever o que irá acontecer nos casos de sucesso e erro esperados.

**Behavior Driven Development (BDD):** É uma forma do time de desenvolvimento de software aproximar-se do pessoal negócio com documentos que descrevem os comportamentos do sistema. A cada iteração estes documentos são criados com o pessoal técnico e de negócio. Todo o desenvolvimento é baseado nestes documentos pois são o consenso entre ambas as partes, desta forma é possível aumentar a assertividade e o valor nas entregas durantes o processo de desenvolvimento.

### Conceitos abordados no curso sobre BDD

**Descoberta:** Conversa sobre as alterações com exemplos de como ela irá funcionar, a fim de obter um consenso entre o negócio e da parte técnica.

**Elaboração:** Criação de documentos sobre as funcionalidades.

**Automação:** Criação dos testes.

## Estrutura recomendada pelo curso

Todos os testes são salvos no diretório **Feature**;

A especificaçao das funcionalidades ([Gherkin](https://cucumber.io/docs/gherkin/reference/)) são descritas em arquivos finalizados em **.feature**;

É ideal que o nome da Feature em questão possua ligação com o nome do arquivo .feature. Veja o arquivo [hear_shout.feature](features/hear_shout.feature) por exemplo, o nome de sua Feature é Hear shout;

### Erros

Mensagem undefined ao executar testes: Quer dizer que o Cucumber não soube como executar os testes, isto é, não há tradução do .feature para testes aparentemente. É necessário criar as [step definitions](https://cucumber.io/docs/cucumber/step-definitions/) para o .feature.
