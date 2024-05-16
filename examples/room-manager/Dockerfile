# NOTE: This Dockerfile needs to be built from the context of root of the repository
FROM node:20

# Step 1: Install SDK
WORKDIR /app

COPY package.json package-lock.json ./

# Ignore scripts - postpone the prepare script until the source code is copied
RUN npm ci --ignore-scripts

COPY . .

RUN npm run prepare

# Step 2: Install and run the example
WORKDIR /app/examples/room-manager

RUN npm ci

CMD ["npm", "start"]
