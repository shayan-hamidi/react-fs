# 1. Use an official Node.js image
FROM node:18

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy your project files into the container
COPY . .

# 4. Install dependencies (Yarn in your case)
RUN yarn install

# 5. Build the project (for production)
RUN yarn build

# 6. Expose the port that the app will run on
EXPOSE 3000

# 7. Start the app
CMD ["yarn", "dev", "--host"]
