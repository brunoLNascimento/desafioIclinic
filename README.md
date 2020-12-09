![iClinic logo](https://d1ydp7gtfj5fb9.cloudfront.net/static/img/views/home_v2/header/logo.png?1525283729)

# Desafio Iclinic

Seu desafio será desenvolver um serviço de prescrição médica e, como parte dele, veremos como você estrutura as camadas de aplicação, chamadas externas, variáveis de ambiente, cache, testes unitários, logs e documentação.

### Rodando o sistema

```sh
$ npm install -- Instalar as dependências.
$ npm start -- Rodar o sistema.
$ npm run test -- Executar os testes do sistema.
```

- O sistema rodará na porta 3003
- Salvando uma prescrição

Na ferramenta POSTMAN (ou qualquer uma de sua preferência), selecione a opção "POST", inclua a URL: localhost:3003/v2/prescriptions, abaixo segue um JSON de exemplo:
  {
      "clinic": {
          "id": 1
      },
      "physician": {
          "id": 1
      },
      "patient": {
          "id": 1
      },
      "text": "Dipirona 1x ao dia"
}

- Consultando a prescrição salva
Na ferramenta POSTMAN (ou qualquer uma de sua preferência), selecione a opção "GET", inclua a URL: localhost:3003/v2/prescriptions/:page/:id?, abaixo segue um JSON de exemplo:
O ID no final da url é opcional, sendo assim, quando consultado com um ID, o sistema retornará a prescrição consultado pelo ID, caso não seja enviada nenhum ID, será consultado todas as prescrições:
Page (página) é obrigatório, sendo assim, será sempre necessário enviar um número para a páginação:
EX: localhost:3003/v2/prescriptions/0/ - a consulta irá retornar os 50 primeiros registros na base,
EX: localhost:3003/v2/prescriptions/0/1 - a consulta irá retornar a prescrição com o ID 1 e
EX: localhost:3003/v2/prescriptions/1/ - a consulta irá pular os primeiros 50 registro e retornar os 50 próximos registros na base:

- Caso queira consultar clinic, physician e patient antes de criar a prescrição, você pode utilizar as urls
- localhost:3003/clinic/:id?
- localhost:3003/physician/:id?
- localhost:3003/physician/:id?
