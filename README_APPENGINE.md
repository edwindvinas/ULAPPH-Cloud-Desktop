# ULAPPH INSTALLATION

## Pre-requisites
### If you're developing in a Windows machine & Google Cloud....
- Golang
- Git Bash for Windows
- Github account
- Google Cloud Platform account
- gcloud CLI
- IBM Watson account


## Basic Commands
Usual commands when everything is setup already in your local Windows machine. Updating the source codes and deploying them is easy.

#### Updating ULAPPH source codes in Golang, JS, HTML, CSS etc
`$ ulapph`
`$ dev`
`$ pwd`
`~/go/src/github.com/edwindvinas/ULAPPH-Cloud-Desktop`

#### Deploying the updated source codes in Google Cloud
`$ dep`
`$ deploy`

## One-time setup

#### Setting up bash_profile
`$ vim ~/.bash_profile`

```
test -f ~/.profile && . ~/.profile
test -f ~/.bashrc && . ~/.bashrc
alias ulapph="cd /c/Users/edwin.d.vinas && source setalias_ulapph.sh"
alias deploy="dep && ./quick_install_ulapph_GAE_ulapph_demo.sh"
alias build="dev && go build main.go && rm main.exe"
```

#### Cloning the needed repositories
```
$ mkdir $GOPATH/go/src/github.com/YOURGITHUBNAME
$ cd $GOPATH/go/src/github.com/YOURGITHUBNAME

$ git clone https://github.com/edwindvinas/ULAPPH-Cloud-Desktop.git
$ git clone https://github.com/ulapph/quick-install-ulapph.git
$ git clone https://github.com/ulapph/ULAPPH-Cloud-Desktop-Configs.git
$ git clone https://github.com/ulapph/ULAPPH-Cloud-Desktop-Shell-Installer.git
$ git clone https://github.com/ulapph/ULAPPH-Cloud-Desktop-AI.git
$ git clone https://github.com/ulapph/ULAPPH-Cloud-Desktop-Watson.git
```

#### Setting up alias
```
$ cd ~
$ vim setalias_ulapph.sh

#!/bin/sh
alias dep='cd /c/Users/edwin.d.vinas/go/src/github.com/edwindvinas/quick-install-ulapph'
alias dev='cd /c/Users/edwin.d.vinas/go/src/github.com/edwindvinas/ULAPPH-Cloud-Desktop'
alias cfg='cd /c/Users/edwin.d.vinas/go/src/github.com/edwindvinas/ULAPPH-Cloud-Desktop-Configs'
alias ctl='cd /c/Users/edwin.d.vinas/go/src/github.com/edwindvinas/ULAPPH-Cloud-Desktop-Shell-Installer'
alias ai='cd /c/Users/edwin.d.vinas/go/src/github.com/edwindvinas/ULAPPH-Cloud-Desktop-AI'
alias ws='cd /c/Users/edwin.d.vinas/go/src/github.com/edwindvinas/ULAPPH-Cloud-Desktop-Watson'
```

## Setting up ULAPPH YAML Configurations...
Every ULAPPH installation has a YAML configuration. You can create one based on "ulapph-demo.yaml".

## Setting up ULAPPH quick installer script
Create a Git bash script "quick_install_ulapph_GAE_sample_project.sh". This script can be copied from working example "quick_install_ulapph_GAE_ulapph_demo.sh"

Next, create an alias so you can easily run the installation script.
```
$ alias deploy-sample-project="dep && ./quick_install_ulapph_GAE_sample_project.sh"
```
Then, to deploy you can use below shortcuts:
```
$ dep
$ deploy-sample-project
```


## Setting up Google Cloud Platform...

### Create your Google Cloud project
Please see Google Cloud documentations on how to create a project.

### Enabled APIs under GCP "APIs & Services"
- Cloud Tasks API
- AppEngine Admin API
- Cloud Identity-Aware Proxy API
- Compute Engine API
- Cloud Storage API (enabled by Default)
- Cloud Build API (enabled by Default)
- Cloud Source Repositories API

### Setting up domain name
If you have purchased your www domain from third-party, you can assign that in the AppEngine
- Go to AppEngine settings
- Go to Custom Domain and then Add a new domain
- Follow the steps in domain verification

### Setting up Google Cloud Storage permissions
- Go to Google Cloud Storage and add users w/ storage permissions

## Setting up IBM Watson Assistant...

### First, create your IBM Watson account
Once IBM watson is created, you need to get the credentials, workspace details and other settings. You need to put those inside the YAML configuration file.

### Upload the AI files into the Google Cloud Storage...
TBD

## Troubleshooting Issues

### Gorilla Mux on App Engine
https://stackoverflow.com/questions/26581231/google-cloud-go-handler-without-router-gorilla-mux

### Cannot deploy during initial deployment of a new project
```
Cloud build 522cb382-2207-48ad-a120-07c83bfc8f68 status: FAILURE\nAn unexpected error occurred. Refer to build logs: https://console.cloud.google.com/cloud-build/builds;region=asia-east1/522cb382-2207-48ad-a120-07c83bfc8f68?project=151076056147\nFull build logs: https://console.cloud.google.com/cloud-build/builds;region=asia-east1/522cb382-2207-48ad-a120-07c83bfc8f68?project=151076056147
```
##### FIX:
- Looking at the build log URL:
```
ERROR: failed to create image cache: accessing cache image "asia.gcr.io/ngiyaw-prod/app-engine-tmp/build-cache/default/ttl-7d:522cb382-2207-48ad-a120-07c83bfc8f68": connect to repo store "asia.gcr.io/ngiyaw-prod/app-engine-tmp/build-cache/default/ttl-7d:522cb382-2207-48ad-a120-07c83bfc8f68": GET https://asia.gcr.io/v2/ngiyaw-prod/app-engine-tmp/build-cache/default/ttl-7d/manifests/522cb382-2207-48ad-a120-07c83bfc8f68: UNKNOWN: Service 'containerregistry.googleapis.com' is not enabled for consumer 'project:ngiyaw-prod'.
```
- To fix this, please enable all related APIs.

### 502 Bad Gateway when accessing the deployed application
```
502 Bad Gateway
```
##### FIX:
- Go to "IAM & Admin" and then go to "Identity-Aware Proxy".
- Setup Oauth consent screen
- Go to IAP and turn on "IAP"
- Setup permissions to the allowed users
- Access again the appspot url https://yourproject.appspot.com/


### Internal Server during initial install
```
Internal Server Error
```
##### FIX:
- Access first the admin-setup page https://yourproject.appspot.com/admin-setup
- Click button to install

### 502 Bad Gateway after admin setup
```
ERROR: createHTTPTask: cloudtasks.CreateTask: rpc error: code = PermissionDenied desc = Cloud Tasks API has not been used in project 255989709567 before or it is disabled. Enable it by visiting  [https://console.developers.google.com/apis/api/cloudtasks.googleapis.com/overview?project=255989709567](https://console.developers.google.com/apis/api/cloudtasks.googleapis.com/overview?project=255989709567)  then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.
```

##### FIX:
-   First, enable the CloudTask API if not done yet
-   Create a queue 
```
gcloud auth login
gcloud config set project ngiyaw-prod
gcloud config set compute/region asia-east1
gcloud config set compute/zone asia-east1-b
Example: gcloud tasks queues create [QUEUE_ID]
gcloud tasks queues create ulapph
``` 

### 502 Bad Gateway even after queue creation
```
ERROR: createHTTPTask: cloudtasks.CreateTask: rpc error: code = InvalidArgument desc = Any resource that needs App Engine can only be created/updated in the App Engine region. Location must equal asia-east1 because the App Engine app that is associated with this project is located in asia-east1.
```

##### FIX:
- Update YAML file to indicate correct region where project id is located
```
   - item: SYS_QUEUE_LOC
     format: Text
     status: Enable
     value: asia-east1
```
- Redeploy application

### No page being displayed
- Please enable debugging mode so you can see more detailed logs.
```
   - item: SYS_DEBUGGER_MODE
     format: Flag
     status: Enable
     value: true
```
