# ⚡⚡ Zeus ⚡⚡

#Getting Started With Zeus
This Guide for Zeus is assuming that you have already have none to little exposure to
Kubernetes. 
## Prerequisites to use Zeus
[] Minikube 🧊 [documentation](https://minikube.sigs.k8s.io/docs/start/)
   - Run minikube with the following command: 
   ``` minikube start - p [name of your cluster] ```
[] Install kubectl [Download here](https://kubernetes.io/docs/tasks/tools/)
[] Docker Desktop 🐋 [Download here](https://docs.docker.com/desktop/)
[] Helm Charts, to set up Prometheus Operator [Clone git repo here](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)
   - Make sure your pods are running in your cluster by entering the following
     in your terminal: 
     ``` kubectl get pods ``` or ``` kubectl get po -A```
[] Enough computational resources to build and user clusters 🖥️

### If you are new to Kubernetes, keep this in mind: 
> 💡 In order: minikube && kubectl installed ⇒ cluster ⇒ docker image ⇒ helm ⇒
> Prometheus && Grafana

## Access Grafana 
1. You will need to obtain the statefulset of your clusters. 
    ``` kubectl get statefulset ```
2. Copy the statefulset outputted from your terminal to create the yaml files.
   Below is an example of the syntax to create your files. You can name the
   files any way you want. 
    ``` kubectl describe statefulset prometheus-prometheus-kube-prometheus-prometheus > prometheus.yaml ```
    ```kubectl describe statefulset prometheus-prometheus-kube-oper-alertmanager > prometheus-alertmanager.yaml```
3. To get deployments enter the following command into your terminal: 
    ``` kubectl get deployment```
4. Create a deployment yaml file with the following command below. Note, you can
   name this file however you want. Below is an example:  
   ```kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-operator.yaml```
4. Create another deployment yaml file with the following command. Note that you
   can name this file however you want. Below is an example:
   ```kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-secret.yaml```
5. Obtain the list of all services in your cluster, by entering the following
   command in your terminal: 
   ``` kubectl get services > services```
6. Look for the pod deploying to 'prometheus-grafana' followed by the ID of the
   pod. Below is an example: 
   ```kubectl logs prometheus-grafana-6fdd6868b4-hgtp4 -c grafana```
7. Open Grafana to a port of your choosing with the command: 
  ``` kubectl port-forward deployment/prometheus-grafana [port of your choosing]:3000```
8. You will be prompted to login into Grafana. By default, the username and
   password is admin and prom-operator respectively. 

## Access Prometheus
1. To ensure your pods are all accessible and running, enter in the following
   command into your terminal: 
   ```kubectl get po -A``` or ```kubectl get pods ```
2. Obtain the specific deployments in your cluster by entering the following
   command: 
   ```kubectl get deployment --namespace=[name of your namespace]```
3. Open Prometheus to a port of your choosing, with the following command: 
  ```kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 9090```
4. Do the same for the Prometheus alert managers. 
  ``` kubectl port-forward service/prometheus-kube-prometheus-alertmanager [port #]```