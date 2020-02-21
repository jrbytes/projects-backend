# Backend Projects

## Backend para armazenar informações de projetos
### Ideal se você precisa armazenar informações de projetos e quais tecnologias está sendo utilizado nele. Isso caso tenha muitos projetos no seu computador, porque se você for muito organizado e conseguir colocar qualquer tipo de projeto no GitHub melhor.

## Endpoints

POST :: /projects = Cadastrar projetos
```json
{
  "name": "Mc Donald's",
  "dirname": "mc-donalds",
  "repository": "https://github.com/jrbytes/mc-donalds"
}
```
GET :: /projects = Retorna todos os projetos em ordem decrescente de id 


PUT :: /projects/:project_id = Atualizar projeto
```json
{
  "name": "Mec Donaldis",
  "dirname": "mec-donaldis",
  "repository": "https://github.com/jrbytes/mec-donaldis"
}
```
POST :: /projects/:project_id/techs = Cadastra tecnologias do projeto
```json
{
  "name": "React Native",
}
```
GET :: /projects/:project_id/techs = Retorna tecnologias do projeto  

DELETE :: /projects/:project_id/techs = Exclui apenas a relação da tecnologia com o projeto feito em tabela separada por agregação
```json
{
  "name": "PHP",
}
```

## Banco de dados
Foi utilizado PostgreSQL para armazenar os dados da API.  
No diretório `src/config` tem o arquivo database com os campos para configuração do *database*.  
No diretório `database/migrations` tem as migrations para gerar as tabelas do banco com o sequelize:  
```bash
yarn sequelize db:migrate
```