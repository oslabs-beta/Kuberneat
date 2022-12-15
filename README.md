# ⚡ Zeus ⚡

<center><img src="./logo/Logo.png" width="200" height="150"> </center>

![osLabs](https://badgen.net/badge/license/MIT)

![version](https://badgen.net/badge/version/v1.0.0)

![GitHub language count](https://img.shields.io/github/languages/count/oslabs-beta/Zeus)
![GitHub top language](https://img.shields.io/github/languages/top/oslabs-beta/Zeus?color=yellow)

![GitHub forks](https://img.shields.io/github/forks/oslabs-beta/Zeus?color=green)
![GitHub Repo stars](https://img.shields.io/github/stars/oslabs-beta/Zeus?color=green)
[![GitHub watchers](https://badgen.net/github/watchers/oslabs-beta/Zeus?color=green)](https://GitHub.com/Naereen/StrapDown.js/watchers/)

<br/>

# Supported OS

![mac](https://badgen.net/badge/OS/mac)
<br/>

![linux](https://badgen.net/badge/OS/linux)

![Windows](https://badgen.net/badge/OS/Windows)

<hr/>

# Features

![screen-gif](./Demo-gifs/Zeus-Dasboard.gif)
<br/>

![screen-gif](./Demo-gifs/visualizer%20demo.gif)
<br/>

![screen-gif](./Demo-gifs/Kubelet.gif)
<br/>

![screen-gif](./Demo-gifs/Kube-State-Metrics.gif)
<br/>

![img](./Demo%20Shots/K8s-API.png)
<br/>

![img](./Demo%20Shots/Computing-Resources.png)
<br/>
<br/>
<br/>

# Getting Started With Zeus

## Prerequisites to run Zeus

- **Minikube** 🧊 [documentation](https://minikube.sigs.k8s.io/docs/start/)

  - Run minikube with the following command: <br />

  ```sh
  minikube start - p [name of your cluster]
  ```

  - Install **kubectl** [Download here](https://kubernetes.io/docs/tasks/tools/) <br />
  - **Docker** Desktop 🐋 [Download here](https://docs.docker.com/desktop/) <br />
  - **Helm Charts**, to set up Prometheus Operator [Clone git repo here](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) <br />
  - Make sure your pods are running in your cluster by entering the following
    in your terminal: <br />

    ```
    kubectl get pods
    ```

    or

    ```
    kubectl get po -A
    ```

  - Ensure sufficient computational resources are available to build and user clusters 🖥️ <br /></br>

### If you are new to Kubernetes, keep this in mind:

> 💡 In chronological order: Install minikube and kubectl ⇒ Deploy Helm ⇒
> Deploy Prometheus & Grafana </br></br>

</br>
</br>
<br/>
<br/>
<br/>

# Accessing Grafana

1. You will need to obtain the stateful set of your clusters. <br />

   ``` 
   kubectl get statefulset
   ```

2. Copy the stateful set outputted from your terminal to create the yaml files.
   Below is an example of the syntax to create your files. You can name the
   files any way you want. <br />

   ```
   kubectl describe statefulset prometheus-prometheus-kube-prometheus-prometheus > prometheus.yaml
   ```

   <br />

   ```
   kubectl describe statefulset prometheus-prometheus-kube-operator-alertmanager > prometheus-alertmanager.yaml
   ```

3. To get deployments enter the following command into your terminal: <br />

   ```
   kubectl get deployment
   ```

4. Create a deployment yaml file with the following command below. Note, you can
   name this file however you want. Below is an example: <br />

   ```
   kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-operator.yaml
   ```

5. Create another deployment yaml file with the following command. Note that you
   can name this file however you want. Below is an example: <br />

   ```
   kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-secret.yaml
   ```

6. Obtain the list of all services in your cluster, by entering the following
   command in your terminal: <br />

   ```
   kubectl get services > services
   ```

7. Look for the pod deploying to 'prometheus-grafana' followed by the ID of the
   pod. Below is an example: <br />

   ```
   kubectl logs prometheus-grafana-6fdd6868b4-hgtp4 -c grafana
   ```

8. Open Grafana to a port of your choosing with the command: <br />

   ```
   kubectl port-forward deployment/prometheus-grafana [port of your choosing]:3000
   ```

9. You will be prompted to login into Grafana. By default, the username and
   password is set to `admin` and `prom-operator`, respectively. <br /></br></br>

</br>
<br/>
<br/>
<br/>

# Accessing Prometheus <br/></br>

1. To ensure all your pods are accessible and running, enter in the following
   command into your terminal: <br />

   ```
   kubectl get po -A
   ```

   ```
   kubectl get pods
   ```

2. Obtain the specific deployments in your cluster with the following
   command: <br />

   ```
   kubectl get deployment --namespace=[name of your namespace]
   ```

3. Open Prometheus to a port of your choosing with the following command: <br />

   ```
   kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 9090
   ```

4. Repeat for the Prometheus alert managers: <br />

   ```
   kubectl port-forward service/prometheus-kube-prometheus-alertmanager [port #]
   ```

</br>
<br/>
<br/>
<br/>

# Made with

<br>

### For front-end development

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

<br>

### For back-end development

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<br>

### For monitoring and data visualizations

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)

</br>
<br/>
<br/>
<br/>

# Contributions

For more information regarding how to contribute, please refer to the
[CONTRIBUTING.md](https://github.com/oslabs-beta/Zeus/blob/dev/CONTRIBUTING.md)
guidelines from this repo.

1. Fork and clone the `dev` branch onto your local branch.
   ``` bash
   https://github.com/oslabs-beta/Zeus.git
   ```
2. Create a new a feature branch
   ``` bash
   [your-name]/AWESOME-FEATURES
   ```

3. Install all the dependencies
   ``` bash 
      npm install 
   ```
4. Create ```.env``` file at the root directory
   ``` bash
   root
      ├─ .env
      ├─ electron
      └─ src
   ``` 
5. Connect to NoSQL database in .env

   ``` js
   mongoURI = "Your NoSQL URI string"
   ```
6. ***Please ensure you are following eslint conventions***.
7. ***Please ensure to create tests for your feature and that it passes your test suite***.
8. **Please be detailed in your pull request**.

   ![img](./Demo%20Shots/PR-guide.png)

</br>
<br/>
<br/>
<br/>

# Founders

- Ed Cho [LinkedIn](https://www.linkedin.com/in/edcho720/)| [GitHub](https://github.com/edcho720)
- John Wroge [LinkedIn](https://www.linkedin.com/in/john-wroge/) | [GitHub](https://github.com/johnwroge)
- Harvey Li [LinkedIn](https://www.linkedin.com/in/harvey-li/) | [GitHub](https://github.com/harvli)
- Amy (Aimée) Nguyen [LinkedIn](https://www.linkedin.com/in/aqn/) |
  [GitHub](https://github.com/DoctorCodeine)
