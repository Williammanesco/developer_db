# Developer DB

Estrutura:
developer_db_api: Api do projeto desenvolvida em node.js
developer_db_app: Front-end basico desenvolvido em react.js

### API
Desenvolvida com express e banco de dados escolhido foi o mongodb.
Testes desenvolvidos utilizando frameworks mocha, chai e sinon.
Nao ha necessidade de criar estrutura de banco de dados.

### APP
View basica demonsstrando o uso da API

Como rodar:

Na pasta raiz executar
```sh
$ docker compose up
```

API esta rodando na porta 3030 e frontend na porta 3000.

Acessar http://127.0.0.1:3000
