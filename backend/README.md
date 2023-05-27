# Tutorial de instalação do container da aplicação(database e servidor)

1. certifique-se de que tem docker na sua máquina

2. execute o comando:

```bash
docker pull postgres:14.8
```

3. verifique que a imagem do docker foi baixada

4. execute o comando a seguir para subir o container do postgres

    - o resultado final do comando deve ser:
        ```bash
        docker run --name postgres-database -p 5432:5432 -e POSTGRES_PASSWORD=1234 -d postgres:14.8
        ```
        - **note que:** se você deseja desenvolver a aplicação com outros nomes basta alterar os parametros deste comando e do .env do projeto, lembrando q a estrutura das queries está sendo baseada nos diagramas desenvolvidos para o projeto, disponíveis no relatório na sessão inicial.

5. verificar se o docker conseguiu subir com o comando:
    ```bash
    docker logs postgres-database -f
    ```
6. Após esse comando faça este outro para poder rodar as informações do servidor e settar as variaveis de ambiente:

    ```bash
    docker compose -f docker-compose.yml up
    ```

# Tutorial de instalação do servidor nodejs da aplicação

1. sete a variável de ambiente para se conectar ao banco de dados
    - `DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`
2. use o comando para fazer as migrations do database:
    - `npx prisma migrate dev --name init`
