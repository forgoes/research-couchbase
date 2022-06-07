# Deploy couchbase cluster in k8s

## Deployment

```shell
# https://docs.couchbase.com/operator/current/prerequisite-and-setup.html
# download and unzip Couchbase Autonomous Operator: https://www.couchbase.com/downloads
# reference: https://docs.couchbase.com/operator/current/overview.html

cd k8s

# install the custom resource definitions (CRD)
kubectl create -f crd.yaml

# create namespace
kubectl create -f namespace.yaml

# install the operator
bin/cao create admission --namespace couchbase
bin/cao create operator --namespace couchbase
# check the Status of the operator
kubectl get deployments --namespace couchbase

# create couchbase secret & bucket
kubectl create -f secret.yaml
# todo not working
kubectl create -f bucket.yaml

# create TLS Certificates
# reference: https://docs.couchbase.com/operator/current/tutorial-tls.html 
git clone https://github.com/OpenVPN/easy-rsa
cd easy-rsa/easyrsa3
./easyrsa init-pki
./easyrsa build-ca
./easyrsa --subject-alt-name='DNS:*.couchbase-cluster,DNS:*.couchbase-cluster.couchbase,DNS:*.couchbase-cluster.couchbase.svc,DNS:*.couchbase-cluster.couchbase.svc.cluster.local,DNS:couchbase-cluster-srv,DNS:couchbase-cluster-srv.couchbase,DNS:couchbase-cluster-srv.couchbase.svc,DNS:*.couchbase-cluster-srv.couchbase.svc.cluster.local,DNS:localhost' build-server-full tls nopass
# find pki/ca.crt and pki/private/tls.key and pki/issued/tls.crt and  

# add 127.0.0.1 couchbase-cluster.couchbase to /etc/hosts
# trust pki/ca.crt in system
# sudo apt-get install -y ca-certificates
# sudo cp ca.crt /usr/local/share/ca-certificates
# sudo update-ca-certificates
# https://serverfault.com/questions/880804/can-not-get-rid-of-neterr-cert-common-name-invalid-error-in-chrome-with-self
# trust ca in google chrome


# copy crt,key files or change file path below
# kubectl create tls secret
kubectl create secret generic couchbase-cluster-tls \
  --from-file ./tls.crt \
  --from-file ./tls.key \
  --from-file ./ca.crt --namespace couchbase

# kubectl create cluster  
kubectl create -f couchbase-cluster.yaml

# get pods
kubectl get pods -l couchbase_cluster=couchbase-cluster --namespace couchbase  
# watch pods
watch kubectl get pods --all-namespaces 
  
# add <ip> console.couchbase-cluster.couchbase to /etc/host
# visit https://console.couchbase-cluster.couchbase:18091/
# todo: change your password
# https://docs.couchbase.com/server/current/cli/cbcli/couchbase-cli-reset-admin-password.html

# todo persist data
```

## Dns debug
```shell
# DNS https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/
kubectl apply -f dnsutils.yaml
kubectl get pods dnsutils

kubectl exec -i -t dnsutils -- nslookup -type=SRV couchbase-cluster-srv.couchbase
# _服务._协议.名称.                                   TTL   类别  SRV     优先级    权重   端口   主机.
# couchbase-cluster-srv.couchbase.svc.cluster.local	           service = 0      16     11207 10-1-0-33.couchbase-cluster-srv.couchbase.svc.cluster.local.
# couchbase-cluster-srv.couchbase.svc.cluster.local	           service = 0      16     11207 10-1-0-34.couchbase-cluster-srv.couchbase.svc.cluster.local.
# couchbase-cluster-srv.couchbase.svc.cluster.local	           service = 0      16     11207 10-1-0-35.couchbase-cluster-srv.couchbase.svc.cluster.local.
# couchbase-cluster-srv.couchbase.svc.cluster.local	           service = 0      16     11210 10-1-0-33.couchbase-cluster-srv.couchbase.svc.cluster.local.
# couchbase-cluster-srv.couchbase.svc.cluster.local	           service = 0      16     11210 10-1-0-34.couchbase-cluster-srv.couchbase.svc.cluster.local.
# couchbase-cluster-srv.couchbase.svc.cluster.local	           service = 0      16     11210 10-1-0-35.couchbase-cluster-srv.couchbase.svc.cluster.local.
```

## Network

```shell
# todo: Inter-kubernetes Networking with Forwarded DNS
# https://docs.couchbase.com/operator/2.3-beta/tutorial-remote-dns.html
kubectl -n kube-system get pods -o wide
```

## Uninstall

```shell
# delete couchbase cluster
kubectl delete -f couchbase-cluster.yaml
```

```shell
# delete dns utils
kubectl delete -f dnsutils.yaml
```

```shell
# delete other resources
kubectl delete -f bucket.yaml
kubectl delete -f secret.yaml
kubectl delete -f namespace.yaml
kubectl delete -f crd.yaml
```

```shell
# uninstall Autonomous Operator
cd <operator>
bin/cbopcfg delete operator --namespace couchbase
bin/cbopcfg delete admission --namespace couchbase
```

## Doc

```shell
# on node failure
# https://docs.couchbase.com/java-sdk/2.7/failure-considerations.html
# What to expect during fail over
```