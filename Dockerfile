# in this case i just use one stage, because i have no devDependencies like nodemon or webpack or eslint
FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --production
USER node
COPY . .
CMD ["npm", "start"]
# CMD ["npm", "run", "start"]
# CMD ["node", "index.js"]