# Usa uma imagem oficial do Node.js
FROM node:22.19.0

# Cria uma pasta para o app dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta 3000 (a mesma do seu app)
EXPOSE 3000

# Comando para rodar a aplicação em modo produção
CMD ["npm", "run", "start:prod"]