FROM node:20

# pasta de trabalho no container
WORKDIR /usr/src/app

# copiar arquivos de dependência
COPY package*.json ./

# instalar dependências
RUN npm install

# copiar resto do código
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
