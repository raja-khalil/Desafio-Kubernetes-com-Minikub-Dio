FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar os arquivos da aplicação
COPY . .

# Expor a porta onde a aplicação será executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
