# CLOTHES STORE ASSIGNMENT

An assignment made for a job interview.

## RUN

### DOCKER

#### Install docker

```bash
wget https://raw.githubusercontent.com/exapsy/clothes_assignment/master/scripts/install-docker.sh && sudo sh ./install-docker.sh
```

#### Run a container

```bash
docker container run --name clothstore-assignment -p 80:3000 eksapsy/clothestore-assignment
```

### SOURCE

```bash
# Install yarn
npm i -g yarn

# Clone project
git clone https://github.com/ionian-uni-ieee/ieeesb-app
cd ./ieeesb-app/web

# Install dependencies & run
yarn
yarn start
```