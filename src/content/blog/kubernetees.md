---
author: Matteo Veraldi
pubDatetime: 2023-17-12T23:44:00Z
title: Appunti su kubernetees
description: Kubernetees developer notes.
slug: kubernetees-devnotes
featured: false
draft: true
tags: ["nodejs", "nvm", "cli", "howto"]
---

# Kubernetees - Note di sviluppo

## Installazione

Installa `minikube`:

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64
```

## Fai partire il cluster

```bash
minikube start
```

## Crea un rilascio (Service)

### Permetti a minikube di interfacciarsi con Docker locale

Questo punto è da fare solo se l'immagine non sta su un repository ma in locale sul computer.

```bash
eval $(minikube docker-env)
```

### Costruisci l'immagine docker

Questo punto è da fare solo se l'immagine non sta su un repository ma in locale sul computer e dopo aver eseguito il comando sopra.

```bash
docker build . -t tag_immagine
```

### Crea il deployment

```bash
minikube kubectl -- create deployment nome --image=tag_immagine
```

### Esponi una porta

```bash
kubectl expose deployment nome --type=NodePort --port=porta
```
