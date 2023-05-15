# Specifies the approriate base image, which in this case
# is an official image for Node.js web applications 
FROM node:16

# Creating the directory for the Dockerfile 
WORKDIR /usr/src/app

# Copies the .json package and package lock files from 
# source computer to Dockerfile directory 
COPY package*.json ./

# Installs the required dependencies as listed in the package.json file
RUN npm install 

# Copy the webCalculator.js file from the host computer to the Dockerfile directory
COPY webCalculator.js .

# Exposing port 3040 on the docker container 
EXPOSE 3040

# Specifies the approriate command to run when this image is used to run container 
CMD ["node", "webCalculator.js"]
