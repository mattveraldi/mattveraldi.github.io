---
author: Matteo Veraldi
pubDatetime: 2023-17-12T23:44:00Z
title: How to quickly setup NodeJS
description: This is how I install and setup NodeJS for multiple projects on my WSL2 using Ubuntu via nvm cli.
slug: how-to-setup-nodejs
featured: true
tags: ["nodejs", "nvm", "cli", "howto"]
---

If you'd like to see the video version [Click here](https://bit.ly/mattveraldi-setup-nodejs-yt).

I had to re-install my WSL2 Ubuntu distro for Web Development, so I decided to document how I setup things starting from NodeJS.
These steps are meant to be executed on a Debian based Linux distribution, but they are valid also for Mac OSX.

## NodeJS

I often switch from one project to another and each project requires a different version of NodeJS. I am too lazy to manually install and change my `PATH` variables to perform the switch so I always install NodeJS through `nvm`.

### What is NVM?

`NVM` is a Node Version Manager, a `CLI` tool for NodeJS that provides utilities to install and switch from one version of `Node` to another in a matter of seconds.

### Install NVM

Open a new terminal and paste this command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

> Please note: If this post is too old, please make sure to replace `v0.39.7` with the latest version of `nvm`.

# Install NodeJS via NVM

Open a new terminal and paste this command:

```bash
nvm ls-remote
```

from the list that will appear, select the version you'd like to install. If you are not sure, install the latest Long Term Support (LTS) version with this command:

```bash
nvm install --lts
```

### Add .nvmrc to your project

One of the best features of `nvm` is the `.nvmrc`. It is a file that you can add inside the root directory of your NodeJS project to allow `nvm` users to `install` and `use` the correct NodeJS version without having to think about it. It is very good for `CI/CD` too!

To create a `.nvmrc`, open a new terminal on the root directory of your project and paste this command:

```bash
node -v > .nvmrc
```

To test if it works, paste this command:

```bash
nvm install && nvm use
```

You may create a `bash` script inside your `.bashrc` that automatically looks for an `.nvmrc` file in your directory and performs the `install` and `use` for you. [Click here to learn how](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file).

## Conclusions

This was a very quick introduction to how I setup NodeJS on my environment using `nvm`. If you have any questions please refer to the [official documentation](https://github.com/nvm-sh/nvm) or contact me via my [Social Links](/).
