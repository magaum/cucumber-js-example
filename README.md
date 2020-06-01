# Projeto shouty

Este projeto foi realizado durante o curso [BDD with Cucumber (JavaScript)](https://school.cucumber.io/).

Dependências:

- [Cucumber](https://www.npmjs.com/package/cucumber)
- [Cucumber Pretty](https://www.npmjs.com/package/cucumber-pretty)
- [Hamjest](https://www.npmjs.com/package/hamjest)

Conceitos:

BDD:
Gherkin:
  É um formato em que as funcionalidades (Features) do sistema são escritas com palavaras reservadas. É possível alterar o idioma adicionando a linha **# language: [idioma]** no inicio do arquivo.

Step definitions:
  São os comportamentos esperados nas etapas descritas na especificação (Arquivo .feature). Quando os testes são executados pelo Cucumber, cada palavra reservada (Given, When, Then) é uma etapa. Em cada etapa, seu comportamento é procudado e executado na linguagem de teste (Javascript nesse caso), portanto é preciso descrever o que irá acontecer nos casos de sucesso e erro esperados.

Estrutura recomendada pelo curso:

Todos os testes são salvos no diretório **Feature**;

A especificaçao das funcionalidades ([Gherkin](https://cucumber.io/docs/gherkin/reference/)) são descritas em arquivos finalizados em **.feature**;

É ideal que o nome da Feature em questão possua ligação com o nome do arquivo .feature. Veja o arquivo [hear_shout.feature](features/hear_shout.feature) por exemplo, o nome de sua Feature é Hear shout;

Erros:

- Mensagem undefined ao executar testes
  - Quer dizer que o Cucumber não soube como executar os testes, isto é, não há tradução do Gherkin para testes aparentemente. É necessário criar as [step definitions](https://cucumber.io/docs/cucumber/step-definitions/) para o Gherkin.