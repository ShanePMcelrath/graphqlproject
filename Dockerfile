FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy package.json and package-lock.json
COPY ./server/package*.json ./


# Install dependencies
RUN npm run install

# Copy the rest of the application code
COPY . .

ADD server/models/user.sql /docker-entrypoint-initdb.d/


# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]