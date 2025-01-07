FROM node:18-slim as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install production dependencies only
RUN npm install --production

# Expose port
ENV PORT=3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 