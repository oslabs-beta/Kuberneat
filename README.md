# ⚡⚡ Zeus ⚡⚡

# Getting Started With Zeus
## Prerequisites to run Zeus
- Minikube 🧊 [documentation](https://minikube.sigs.k8s.io/docs/start/)
   - Run minikube with the following command: <br />
   ``` minikube start - p [name of your cluster] ``` <br />
   - Install kubectl [Download here](https://kubernetes.io/docs/tasks/tools/) <br />
   - Docker Desktop 🐋 [Download here](https://docs.docker.com/desktop/) <br />
   - Helm Charts, to set up Prometheus Operator [Clone git repo here](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack) <br />
   - Make sure your pods are running in your cluster by entering the following
     in your terminal: <br />
     ``` kubectl get pods ``` or ``` kubectl get po -A```
   - Ensure sufficient computational resources to build and user clusters 🖥️ <br />

### If you are new to Kubernetes, keep this in mind: 
> 💡 In chronological order: Install minikube and kubectl ⇒ Deploy Helm ⇒
> Deploy Prometheus & Grafana

## Accessing Grafana 
1. You will need to obtain the stateful set of your clusters. <br />
   ``` kubectl get statefulset ```
2. Copy the stateful set outputted from your terminal to create the yaml files.
   Below is an example of the syntax to create your files. You can name the
   files any way you want. <br />
   ```kubectl describe statefulset prometheus-prometheus-kube-prometheus-prometheus > prometheus.yaml``` <br />
   ```kubectl describe statefulset prometheus-prometheus-kube-operator-alertmanager > prometheus-alertmanager.yaml```
3. To get deployments enter the following command into your terminal: <br />
   ```kubectl get deployment```
4. Create a deployment yaml file with the following command below. Note, you can
   name this file however you want. Below is an example: <br />
   ```kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-operator.yaml```
5. Create another deployment yaml file with the following command. Note that you
   can name this file however you want. Below is an example: <br />
   ```kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-secret.yaml```
6. Obtain the list of all services in your cluster, by entering the following
   command in your terminal: <br />
   ```kubectl get services > services```
7. Look for the pod deploying to 'prometheus-grafana' followed by the ID of the
   pod. Below is an example: <br />
   ```kubectl logs prometheus-grafana-6fdd6868b4-hgtp4 -c grafana```
8. Open Grafana to a port of your choosing with the command: <br />
   ```kubectl port-forward deployment/prometheus-grafana [port of your choosing]:3000```
9. You will be prompted to login into Grafana. By default, the username and
   password is set to ```admin``` and ```prom-operator```, respectively. <br />

## Accessing Prometheus
1. To ensure all your pods are accessible and running, enter in the following
   command into your terminal: <br />
   ```kubectl get po -A``` or ```kubectl get pods```
2. Obtain the specific deployments in your cluster with the following
   command: <br />
   ```kubectl get deployment --namespace=[name of your namespace]```
3. Open Prometheus to a port of your choosing with the following command: <br />
   ```kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 9090```
4. Repeat for the Prometheus alert managers: <br />
   ```kubectl port-forward service/prometheus-kube-prometheus-alertmanager [port #]```