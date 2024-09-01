---
author: Matteo Veraldi
pubDatetime: 2023-22-12T23:44:00Z
title: How I setup vim for simple python programming.
description: This is how I easily setup vim for a better python programming experience.
slug: how-I-setup-vim
featured: true
tags: ["bash", "wsl", "linux", "vim", "python", "howto"]
---

> Before you read:
>
> This is not how i setup vim anymore, on my current setup I have LazyVim with some custom configurations.
> If you are interested you can find my [config files here](https://github.com/mattveraldi/dotfiles).
>
> This article is still valid if you just want a simple, yet effective, python configuration for vim.

## Introduction

I am a huge fan of `vim`!
Since I started learning it (~2.5 years), I fell in love with "Vim Motions", I heavily use them on my full time job on my Visual Studio Code setup via "Vim" extension.

Even though I really like "Vim Motions", I have always been unable to properly setup the vim program to be my code editor of choice. I have tried multiple times and I always ended up switching back to Visual Studio Code. For context, I am a Web Developer working with TypeScript, React or Angular, Java, Python and CI/CD stuff like Jenkinsfile(s), bash scripts, git hooks and whatever else.

In my everyday job, I am very productive with VSCode, so I thought that switching to Vim as my primary editor wasn't worth it.

...Except for Python development.

## Why?

I used to write Python scripts on Visual Studio Code with the reccommended Python Extension Pack. It was good overall expecially when working with frameworks like Django or Flask.
Lately I have been working on a frameworkless Python project (vanilla?) to create a firmware for a microcontroller, it involved cool stuff like LibUsb, eInk display controls, finite state machines, etc.
I tried a very simple vim setup on my WSL2 with Debian, and I have to say that I really enjoyed it, so I wanted to share it.

## vim-setup

I created a repository called [`vim-setup`](https://github.com/mattveraldi/vim-setup) that contains two files:

1. setup-vim.sh
2. .vimrc

In the `.vimrc` there is my full configuration for vim, and in `setup-vim.sh` there are scripts to setup bash to work with it (plus other stuff).

### Who should use it?

- If you are new to vim and you use Python as your main language, this is for you.
- If your project is mostly written in Python, this is for you.
  If you are working with Frameworks like Django or Flask, you could use this as a starting point, but then you'll surely need to add some plugins to work with different type of files depending on the project's nature and size.

P.S. If you are NOT running Linux as your OS, you will need to manually perform the operations that are automated for bash in the `setup-vim.sh` file

### Installation

Replace `vim` with `vim-nox` (optional):

```bash
sudo apt remove vim && sudo apt install vim-nox
```

Clone my project using `git`

```bash
git clone https://github.com/mattveraldi/vim-setup.git
```

or Download it using `wget`

```bash
wget https://github.com/mattveraldi/vim-setup/archive/main.tar.gz
```

Install my configuration:

```bash
sh setup-vim.sh
```

Open `.vimrc` with vim and run:

1. `:PlugInstall` to install extensions.
2. `:q` to close the installation progress page.
3. `:CocInstall coc-pyright` to install Python autocompletion.

Done.

## F.A.Q.

### **How can I jump to files?**

I use `find` built-in linux command:

1. Open vim in a folder on your project
2. type `:find <pattern>` where `<pattern>` is a `regex` that instructs `find` to locate your file. (pro tip: you can use tab while writing the pattern for suggestions)
3. press enter and vim should open the file you were looking for!
   An alternative is to use plugins like `ctrl-p`, but I wanted a very minimal vim configuration so I think that I will not do it for now.

### How do I toggle the file Explorer?

I use the built-in `Netrw` as a file explorer, press `<space>ee` to toggle it.

### How do I format my python scripts?

I use `black` to format python scripts, press `<space>ff` to format the current opened file and save it with `:w`.

### What if I use python-venv?

1. Open a terminal in the root directory of your python project where Virutal Env configuration should be.
2. Activate the virtual environment running `sh .venv/bin/activate` (if it's called ".venv").
3. Open vim from this shell where venv is activated.
   Suggestions should appear for libraries installed in the Virtual Environment..
