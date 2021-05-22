# Caltech PGP Capstone Project (Demo Docker App)

### Project hosted on Github Url: https://github.com/usridzero/capstone
### Pre Install

- Create Github repo
- Create two AWS instances
- Update instance OS packages
- Create and assign Elastic IPs
- Configure ssh connectivity between the two instances

### Project structure
This project contains:

- aws-ec2 instances: used to host the jenkins master and slave which runs the docker container for the webapp
- Jenkins: master and slave instances
- Docker: container for the webapp
- Github repo

### Github repo:

- connect to github using my account
- create new repo called `capstone`
- go to settings to configure the webhook

```
Payload URL
http://34.233.81.121:8080/github-webhook/
Content type

application/json
```
- set the events that will trigger the webhook
- activate the webhook

### Installing Jenkins:

- Connect to AWS instance for master:
```
>> ssh -i ~/.ssh/key.pem ubuntu@<ip-address>
# sudo apt-get update
# sudo apt-get install openjdk-11-jdk
# sudo apt-get install jenkins
# sudo systemctl enable jenkins
```

## Installing Docker and npm on slave instance:

- Connect to AWS instance for jenkins slave:
```
>> ssh -i ~/.ssh/key.pem ubuntu@<ip-address>
# sudo apt-get update
# sudo apt-get upgrade
# cd /opt/
# sudo mkdir jenkins
# cd jenkins
# sudo chown -R ubuntu:ubuntu Jenkins
# sudo apt-get install openjdk-11-jdk
# sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
# echo   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
	$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# sudo apt-get update
# sudo apt-get install docker-ce docker-ce-cli containerd.io
# vi /etc/docker/daemon.json
	{"hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]}
# sudo apt-get install npm
# npm install
```

## Configure Jenkins:

- Connect to Jenkins via graphical interface and configure the slave agent
- Add additional plugins to Jenkins
- Create Freestyle project

### Git commits:

- Using my own desktop cloned repo, update files, commit, and push to remote repo
- A push will automatically trigger the webhook causing Jenkins to run the CI/CD pipeline

### Testing the pipeline:

- Once a git push is run it will trigger the webhook and run the pipeline

### Original README.md from the webapp sample:

# Demo Docker App

This folder contains a Docker app that is meant to be used for demonstration
purposes only. You should follow the example in this code in your own apps and
then remove this sample app once things are working.

This Docker container contains a simple _"Hello World!"_ [Node.js][node_js] app.

## Running the app in local development

The provided Docker Compose file allows you to run the app locally in development. To start the container, run:

```
$ docker-compose up
```

Once the stack has launched, you can test the application by navigating to:

- http://localhost:8080/ to access the "Hello World!" message.

## Executing the Tests

Simply run:

```
$ npm run test
```

## Building and pushing the Docker image to Container Registry

1. Configure Docker to use [`gcloud`][gcloud_install_docs] as a credential helper.
   Your Docker client version must be 1.13 or newer.

```
gcloud auth configure-docker
```

2. Build and tag your image.

```
docker build -t [GCP-CONTAINER-REGISTRY-HOSTNAME]/[PROJECT-ID]/sample-app-docker .
```

3. Push the Docker image

```
docker push [GCP-CONTAINER-REGISTRY-HOSTNAME]/[PROJECT-ID]/sample-app-docker
```

The Container Registry hostname will vary according to your region. For more
information, check the [Container Registry docs][cr_docs].

[gcloud_install_docs]: https://cloud.google.com/sdk/docs/
[node_js]: https://nodejs.org
[cr_docs]: https://cloud.google.com/container-registry/docs/pushing-and-pulling
