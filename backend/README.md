# DCC603-finalProj-backend-GHK

## Repositório do projeto final da disciplina DCC603 - Banco de dados II.

## Ministrado por: Acauan Ribeiro.

## Grupo:

-   Guilherme Lucas Pereira Bernardo
-   Hugo Lima Romão
-   Kelvin Araújo Ferreira

---

---

---

# instruções para implementação do database

1. certifique-se de que tem docker na sua máquina

2. executar o comando:

```bash
docker pull postgres:14.5
```

3. verifique que a imagem do docker foi baixada

4. execute o comando a seguir para subir o container do postgres

    - o resultado final do comando deve ser:
        ```bash
        docker run --name postgres-database -p 5432:5432 -e POSTGRES_PASSWORD=1234 -d postgres:14.8
        ```

5. verificar se o docker conseguiu subir com o comando:
    ```bash
    docker logs postgres-database -f
    ```
6. Após esse comando faça este outro para poder rodar as informações do servidor e settar as variaveis de ambiente:

    ```bash
    docker compose -f [FILE NAME] up
    ```

# instruções para implementação do backend:

1. sete a variável de ambiente para se conectar ao banco de dados
    - `DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`
2. use o comando para fazer as migrations do database:
    - `npx prisma migrate dev --name init`
