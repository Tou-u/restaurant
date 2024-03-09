# official Nodejs image
FROM node:20-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the app's source code to the container
COPY . .
RUN pnpm build

# Expose port 3000
# EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]