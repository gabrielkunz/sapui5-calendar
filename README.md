# SAPUI5 Calendar

SAPUI5 calendar built with SAPUI5 using trial account in [SAP BTP](https://account.hanatrial.ondemand.com/trial/). Developed in SAP Business Application Studio.

SAP BTS environment setup guide used: https://developers.sap.com/tutorials/appstudio-fioriapps-create.html

## Pre-requisites

The app can be started outside SAP BTP environment with the following requirements:
- NodeJS LTS (Long Term Support) version and associated supported NPM version. (See https://nodejs.org)
- SAP Gateway Demo Server - ES5 Account. (see https://register.sapdevcenter.com/SUPSignForms/)

## Local project setup

1. Clone this repository locally and navigate into the app folder:
```console
foo@bar ~ % git clone https://github.com/gabrielkunz/sapui5-calendar.git
foo@bar ~ % cd calendar/
```
2. Install all dependencies
```console
foo@bar ~ % npm install
```

## Run the app locally
1. On the app folder:
```console
foo@bar ~ % npm start
```
2. http://localhost:8080/index.html will request the ES5-002 credentials for the Gateway Server
