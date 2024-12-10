---
author: Matteo Veraldi
pubDatetime: 2024-17-09T23:44:00Z
title: Come condividere backup di Redis usando Docker.
description: Hai bisogno di condividere i tuoi dati e le tue configurazioni Redis con altri sviluppatori? In questo articolo ti spiego come farlo.
slug: redis-dump-docker
featured: false
draft: true
tags: ["redis", "dump", "database", "docker", "docker-compose"]
---

In questo articolo imparerai come eseguire backup di `Redis` usando `Docker` per condividere i dati del tuo ambiente con gli altri sviluppatori che stanno lavorando al tuo stesso progetto.

## Il problema

Molto spesso per questioni di sviluppo o test, dobbiamo assicurarci di poter condividere i dati presenti sul database. Ricostruire i dati a linea di comando o con uno script è macchinoso e poco pratico, dato che è qualcosa che abbiamo bisogno di fare molto spesso e i dati non sono quasi mai simili.

## Come funziona?

`Redis` mantiene i dati sulla `RAM`, quindi per garantire che le informazioni non vengano perse dopo un riavvio, salva periodicamente una snapshot dei dati anche su disco, in un file chiamato `dump.rdb`.

Quando chiudi il PC, o in questo caso quando chiudi il container Docker, tutti i dati in RAM vengono eliminati, e poi ripristinati da `Redis` tramite lo snapshot precedentemente creato in `dump.rdb`.

> Nota: L'uso dello snapshot in `dump.rdb` è solo uno dei metodi disponibili per il backup dei dati su Redis, ce ne sono altri. Ogni metodo ha dei pro e dei contro importanti, per saperne di più [leggi qui](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/). In questa guida stiamo risolvendo necessità legate allo sviluppo, quindi la persistenza tramite file `dump.rdb` è sufficiente.

Quindi per eseguire un backup, è sufficiente chiudere il processo `redis`, sostituire il nostro file `dump.rdb` con un file `dump.rdb` che contiene i dati che ci servono e avviare di nuovo il processo `redis`.

# Una soluzione con docker compose
