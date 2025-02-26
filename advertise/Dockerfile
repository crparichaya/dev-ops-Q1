# Use Node.js 18
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for caching layers)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3006 (Make sure your app listens on this port)
EXPOSE 3006

# Start the application
CMD ["npm", "start"]
