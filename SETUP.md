## Setup Documentation



Copy these commands into your terminal:

Obtain the stateful set of your clusters.

```bash
kubectl get statefulset
```

Copy the stateful set outputted from your terminal to create the yaml files.

```bash
kubectl describe statefulset prometheus-prometheus-kube-prometheus-prometheus  prometheus.yaml
```

Above and below are examples of the syntax to create your files.

```bash
kubectl describe statefulset prometheus-prometheus-kube-operator-alertmanager > prometheus-alertmanager.yaml
```

To get deployments enter the following command into your terminal:

```bash
kubectl get deployment
```

Create a deployment yaml file with the following command below. Note, you can name this file however you want. Below is an example:

```bash
kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-operator.yaml
```

Create another deployment yaml file with the following command. Note that you can name this file however you want. Below is an example:

```bash
kubectl describe deployment prometheus-kube-prometheus-operator > prometheus-secret.yaml
```

Obtain the list of all services in your cluster, by entering the following command in your terminal:

```bash
kubectl get services > services
```

Look for the pod deploying to 'prometheus-grafana' followed by the ID of the pod. Below is an example:

```bash
kubectl logs prometheus-grafana-6fdd6868b4-hgtp4 -c grafana
```

Open Grafana to a port of your choosing with the command:

```bash
kubectl port-forward deployment/prometheus-grafana [port of your choosing]:3000
```

You will be prompted to login into Grafana. By default, the username and password is set to admin and prom-operator, respectively.



### Accessing Grafana



To ensure all your pods are accessible and running, enter in the following command into your terminal:

```bash
kubectl get po -A
```

Obtain the specific deployments in your cluster with the following command:

```bash
kubectl get deployment --namespace=[name of your namespace]
```

Open Prometheus to a port of your choosing with the following command:

```bash
kubectl port-forward prometheus-prometheus-kube-prometheus-prometheus-0 9090
```

Repeat for the Prometheus alert managers:

```bash
kubectl port-forward service/prometheus-kube-prometheus-alertmanager [port #]
```
