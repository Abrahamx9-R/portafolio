---
title: 'My Local Server in 2025: Dokploy, Cloudflare & Total Redundancy'
description: 'How I set up my own local server in Mexico to host personal projects with high availability, using Dokploy, Cloudflare Tunnel and network redundancy.'
pubDate: 'February 15 2026'
heroImage: '/blog-placeholder-1.jpg'
category: 'DevOps'
tags: ['Dokploy', 'Cloudflare', 'Self-Hosting', 'Networking', 'Redundancy']
isProject: true
lang: 'en'
---

# My Local Server in 2025: Dokploy, Cloudflare & Total Redundancy

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 text-lg leading-relaxed">
    While working with SMEs in <strong class="text-white">Mexico</strong> and developing my own projects, it's essential to keep them available for anyone to view. I'm not just talking about websites, but also <strong class="text-neon-cyan">APIs, automation services</strong> like n8n, file storage like MinIO, etc.
  </p>
</div>

## 🤔 The Limited Budget Dilemma

In many projects, mainly in Mexico, the budget is very limited. Keeping these services online can be a **serious** problem for survival, at least in the first few years. That's why thinking about a hybrid cloud or self-hosting is not so far-fetched.

<div class="bg-space-800/50 border border-red-400/30 rounded-lg p-6 my-6">
  <h3 class="text-red-400 font-bold text-xl mb-3">⚠️ The Public IP Problem</h3>
  <p class="text-gray-300 leading-relaxed">
    In my current location (Mexico), there's only one internet company that assigns public IPv4, but they're <strong class="text-white">dynamic</strong>. Other known services don't assign public IPv4, and some don't even provide public IPv6. This led me to search for dedicated internet services.
  </p>
</div>

### 💸 The Cost of Dedicated Internet

I ran into a new problem: although these services already have network redundancy, the costs are even higher than if I simply used cloud hosting. Prices range from **$500 USD to $1,000 USD per month**.

That's why, while searching for solutions, I found out **how I currently have** my own local server.

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 leading-relaxed">
    <strong class="text-lcars-tertiary">📌 Important note:</strong> For security and to avoid problems, I still store databases in the cloud, that's why I consider it <strong class="text-white">hybrid</strong>. For me, these are the priority: if an API or a website goes down, I can easily bring it back up, but the risk of losing database information is extremely important.
  </p>
</div>

## 🎯 Project Objectives

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <div class="text-5xl mb-4">🌐</div>
    <h3 class="text-xl font-heading text-neon-cyan mb-3">High Availability</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Network redundancy with multiple ISPs</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <div class="text-5xl mb-4">🔐</div>
    <h3 class="text-xl font-heading text-lcars-tertiary mb-3">Secure Remote Access</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Expose services without opening ports</p>
  </div>
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <div class="text-5xl mb-4">⚡</div>
    <h3 class="text-xl font-heading text-neon-cyan mb-3">Simplified Management</h3>
    <p class="text-gray-400 text-sm leading-relaxed">One-click deployment</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <div class="text-5xl mb-4">💰</div>
    <h3 class="text-xl font-heading text-lcars-tertiary mb-3">Optimized Cost</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Own hardware + free services</p>
  </div>
  
</div>

## 🏗️ Architecture

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
      <span class="text-3xl">🖥️</span>
      Main Server
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">If you don't have much budget, you can buy a Chinese server sold on AliExpress. They're refurbished from some old server or simply upgraded. They work very well and are <strong class="text-white">cheap enough</strong> to buy several and make a cluster.</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
      <span class="text-3xl">💾</span>
      Storage
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">NAS with <strong class="text-white">RAID 1</strong> redundancy for backups and data permanence. Ensures your data is protected against disk failures.</p>
  </div>
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
      <span class="text-3xl">🌐</span>
      Network
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">Dual internet connection (Main fiber optic + 4G LTE backup). In my case, I have 2 different internet providers with their own fiber optic network. There are switches and routers that support more than 2 WAN connections, so you could add 4G LTE to ensure availability.</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
      <span class="text-3xl">⚡</span>
      Power
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">Always have a <strong class="text-white">UPS</strong>, either your own or purchased, to ensure power at all times. In Latin America, power problems are very recurrent.</p>
  </div>
  
</div>

### Software Stack

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🚀</span>
      <div>
        <strong class="text-neon-cyan">Dokploy</strong><br>
        <span class="text-gray-300 text-sm">Self-hosted deployment platform (alternative to Vercel/Netlify)</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">☁️</span>
      <div>
        <strong class="text-lcars-tertiary">Cloudflare Tunnel Zero Trust</strong><br>
        <span class="text-gray-300 text-sm">Secure connection without exposing public IP</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔀</span>
      <div>
        <strong class="text-neon-cyan">Traefik</strong><br>
        <span class="text-gray-300 text-sm">Reverse proxy with automatic SSL</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🐳</span>
      <div>
        <strong class="text-lcars-tertiary">Docker</strong><br>
        <span class="text-gray-300 text-sm">Containerization of all applications</span>
      </div>
    </li>
  </ul>
</div>

## 🔒 Security and Redundancy

### Network Redundancy

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-6 rounded-r-lg">
  <p class="text-gray-300 leading-relaxed">
    I have configured a router that supports <strong class="text-white">multiple WAN connections</strong>, with automatic failover between fiber optic and 4G LTE. This ensures that if the main service fails, traffic is automatically redirected to the secondary connection without interruptions. Additionally, it has <strong class="text-neon-cyan">load balancing</strong>: if demand increases, it can use both fiber optic and 4G LTE services to meet demand.
  </p>
</div>

You can search online for switches or routers that have more than one WAN input and if possible a load balancer in case you need it. Here are some options:

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-6">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-xl flex-shrink-0">🔗</span>
      <a href="https://www.mercadolibre.com.mx/router-balanceador-vpn-multi-wan-gigabit-router-cudy-r700-5-puertos-wanlan-vpn-firewall-balance-de-carga-y-backup-de-enlace-ideal-para-redes-empresariales-estables-y-seguras/p/MLM54083651" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-purple transition-colors underline text-sm">
        Cudy R700 Multi-WAN VPN Load Balancing Gigabit Router (5 WAN/LAN Ports, VPN, Firewall, Load Balance & Backup)
      </a>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-xl flex-shrink-0">🔗</span>
      <a href="https://www.mercadolibre.com.mx/router-balanceador-de-carga-tp-link-r470t-servidor-pppoe-v60-negro/p/MLM7868092" target="_blank" rel="noopener noreferrer" class="text-lcars-tertiary hover:text-neon-purple transition-colors underline text-sm">
        TP-Link R470T+ Load Balancing Router (PPPoE Server V6.0)
      </a>
    </li>
  </ul>
</div>



### Cloudflare Zero Trust

Instead of opening ports on the router (NAT/Port forwarding), I use Cloudflare Tunnel to create an encrypted tunnel. 

<div class="bg-space-800/50 border border-neon-cyan/30 rounded-lg p-6 my-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🛡️</span>
      <div>
        <strong class="text-neon-cyan">DDoS Protection:</strong>
        <span class="text-gray-300"> Automatically included</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🔥</span>
      <div>
        <strong class="text-lcars-tertiary">WAF:</strong>
        <span class="text-gray-300"> Web Application Firewall</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔐</span>
      <div>
        <strong class="text-neon-cyan">No Exposed IP:</strong>
        <span class="text-gray-300"> Hidden public IP</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🔒</span>
      <div>
        <strong class="text-lcars-tertiary">SSL/TLS:</strong>
        <span class="text-gray-300"> Automatic certificates</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔄</span>
      <div>
        <strong class="text-neon-cyan">Automatic Failover:</strong>
        <span class="text-gray-300"> Automatic switching between WAN ports without manual intervention</span>
      </div>
    </li>
  </ul>
</div>

### Automated Backups

<div class="bg-space-800/50 border-l-4 border-lcars-tertiary p-4 my-6">
  <p class="text-gray-300 leading-relaxed">
    <strong class="text-lcars-tertiary">💾 Backup Strategy:</strong> All Docker volumes are backed up <strong class="text-white">daily to the NAS</strong> and <strong class="text-white">weekly</strong> to a cloud bucket as a last resort. This 3-2-1 strategy ensures data integrity.
  </p>
  <p class="text-gray-300 leading-relaxed mt-3">
    Additionally, <strong class="text-neon-cyan">Dokploy</strong> allows you to make backups to a bucket directly from the interface, so backups are also made recurrently.
  </p>
</div>

## ⚡ Dokploy: The Heart of the System

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 my-8">
  <h3 class="text-2xl font-heading text-neon-cyan mb-6 flex items-center gap-2">
    <span class="text-3xl">🚀</span>
    Dokploy is an open-source platform that allows:
  </h3>
  
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">📦</span>
      <div>
        <strong class="text-neon-cyan">Deploy from GitHub/GitLab</strong>
        <span class="text-gray-300 text-sm"> with automatic webhooks</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🗄️</span>
      <div>
        <strong class="text-lcars-tertiary">Database Management</strong>
        <span class="text-gray-300 text-sm"> (PostgreSQL, MySQL, MongoDB)</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">📊</span>
      <div>
        <strong class="text-neon-cyan">Resource Monitoring</strong>
        <span class="text-gray-300 text-sm"> in real-time</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">📝</span>
      <div>
        <strong class="text-lcars-tertiary">Centralized Logs</strong>
        <span class="text-gray-300 text-sm"> from all applications</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔄</span>
      <div>
        <strong class="text-neon-cyan">Zero Downtime Updates</strong>
        <span class="text-gray-300 text-sm"> through rolling updates</span>
      </div>
    </li>
  </ul>
  
  <p class="mt-6 text-gray-400 italic border-t border-white/10 pt-4">
    It's like having your own Vercel, Railway or Netlify, but with <strong class="text-white">total control</strong> and <strong class="text-neon-cyan">no usage limits</strong>. 💪
  </p>
</div>

## 📦 Installation Guide

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 text-lg leading-relaxed">
    For installation, it's important to have your server with <strong class="text-white">Linux</strong> installed (you can use your preferred distribution) and <strong class="text-neon-cyan">Docker</strong>.
  </p>
</div>

<div class="bg-space-800/50 border border-red-400/30 rounded-lg p-6 my-6">
  <h3 class="text-red-400 font-bold text-xl mb-3">⚠️ Important Note About Docker</h3>
  <p class="text-gray-300 leading-relaxed">
    In my case, for greater practicality, I have <strong class="text-white">Ubuntu Server</strong> installed with Docker installed <strong class="text-white">manually</strong>. It's important that you install Docker manually, as if you do it from the Ubuntu store (snap), you will have problems installing Dokploy.
  </p>
</div>

## 🐳 Docker Installation on Ubuntu Server

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
    <span class="text-3xl">1️⃣</span>
    Prepare the System
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    First, update your current packages and install some necessary tools so Ubuntu can communicate with repositories via HTTPS.
  </p>
  
```bash
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release
```
</div>

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
    <span class="text-3xl">2️⃣</span>
    Add Docker's Official GPG Key
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    This is so your system trusts the packages you're going to download from Docker.
  </p>
  
```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
</div>

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
    <span class="text-3xl">3️⃣</span>
    Set Up the Repository
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Now, tell Ubuntu where to look for Docker packages:
  </p>
  
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
</div>

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
    <span class="text-3xl">4️⃣</span>
    Install Docker Engine
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Update your package list again (so it recognizes the new repository) and install Docker along with <strong class="text-white">Docker Compose</strong>:
  </p>
  
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
</div>

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
    <span class="text-3xl">5️⃣</span>
    Verify Installation
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    To confirm everything is working correctly, run the "Hello World" test container:
  </p>
  
```bash
sudo docker run hello-world
```
  
  <p class="text-gray-400 mt-4 leading-relaxed">
    If you see a success message, <strong class="text-neon-cyan">Docker is now running</strong> on your server. ✅
  </p>
</div>

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-6 my-8 rounded-r-lg">
  <h3 class="text-xl font-heading text-lcars-tertiary mb-4">💡 Tip: Docker Without `sudo`</h3>
  <p class="text-gray-300 leading-relaxed mb-4">
    By default, you need administrator permissions to run Docker commands. If you want to avoid typing <code class="text-neon-cyan">sudo</code> every time, add your user to the Docker group:
  </p>
  
  <ol class="space-y-2 text-gray-300">
    <li class="flex items-start gap-2">
      <span class="text-lcars-tertiary font-bold">1.</span>
      <span>Create the group (if it doesn't exist): <code class="text-neon-cyan">sudo groupadd docker</code></span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-lcars-tertiary font-bold">2.</span>
      <span>Add your user: <code class="text-neon-cyan">sudo usermod -aG docker $USER</code></span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-lcars-tertiary font-bold">3.</span>
      <span><strong class="text-white">Log out and back in</strong> for changes to take effect</span>
    </li>
  </ol>
</div>

## 🚀 Dokploy Installation

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 my-8">
  <div class="flex items-start gap-4 mb-6">
    <span class="text-5xl">⚡</span>
    <div>
      <h3 class="text-2xl font-heading text-neon-cyan mb-3">One-Command Installation</h3>
      <p class="text-gray-300 leading-relaxed">
        The <a href="https://docs.dokploy.com/docs/core/installation" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-purple transition-colors underline">official Dokploy documentation</a> offers the option to install with a single command. It's that simple:
      </p>
    </div>
  </div>
  
```bash
curl -sSL https://dokploy.com/install.sh | sh
```

  <p class="mt-6 text-gray-400 text-sm italic border-t border-white/10 pt-4">
    💡 <strong class="text-white">Tip:</strong> Once the installation is complete, Dokploy will be available at <code class="text-neon-cyan">http://your-server:3000</code>
  </p>
</div>

## ☁️ Cloudflare Zero Trust Installation & Configuration

<div class="bg-space-800/50 border border-red-400/30 rounded-lg p-6 my-6">
  <h3 class="text-red-400 font-bold text-xl mb-3">📋 Prerequisites</h3>
  <ul class="space-y-2 text-gray-300">
    <li class="flex items-start gap-2">
      <span class="text-red-400">•</span>
      <span>Have your <strong class="text-white">own domain</strong> (there are very affordable options available)</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-red-400">•</span>
      <span>The DNS administrator must be <strong class="text-white">Cloudflare</strong></span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-red-400">•</span>
      <span>Free Cloudflare account</span>
    </li>
  </ul>
</div>

### Step 1: Access Zero Trust Menu

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Once you have a free Cloudflare account and have added the domain, in the initial menu you'll find something like the following:
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-menu-inicial.png" alt="Cloudflare Menu" class="rounded-lg border border-white/10">
  </div>
  
  <p class="text-gray-400 text-sm mt-4">
    In the <strong class="text-neon-cyan">Zero Trust</strong> menu on the sidebar, you'll find the option to add a new connection.
  </p>
</div>

### Step 2: Create a New Connector

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    To add a new connection, select <strong class="text-white">Network → Connectors</strong>, and the option to add a new connector will appear.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-zero-menu.png" alt="Zero Trust Menu" class="rounded-lg border border-white/10">
    <img src="/cloudflare-add-zero.png" alt="Add Connection" class="rounded-lg border border-white/10 mt-4">
  </div>
</div>

### Step 3: Select Connection Type

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Select the type of connection you need. In this case it will be <strong class="text-neon-cyan">Cloudflared</strong>, but <strong class="text-lcars-tertiary">WARP</strong> is also available.
  </p>
  
  <div class="bg-space-800/50 border-l-4 border-lcars-tertiary p-4 my-4">
    <p class="text-gray-300 text-sm">
      <strong class="text-lcars-tertiary">📌 Key Difference:</strong> For <strong class="text-white">Cloudflared</strong> connection type, only <strong class="text-neon-cyan">HTTP and HTTPS</strong> services can be exposed. If you need other protocols, check the <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-purple transition-colors underline">WARP connection type documentation</a>.
    </p>
  </div>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-select-zero.png" alt="Select Type" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 4: Name the Connection

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Add a name to the connection. This is important as we can have more than one connection, useful if you want to host your services on <strong class="text-white">different LANs</strong>.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-add-name.png" alt="Name Connection" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 5: Run Installation Command

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Once the connection is created, you'll be provided with a command to run on your server. This command will make your server connect to Cloudflare and expose your services <strong class="text-neon-cyan">without needing to open ports</strong>. In this case, I suggest making the connection via <strong class="text-white">Docker</strong>.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-select-docker.png" alt="Docker Command" class="rounded-lg border border-white/10">
  </div>
  
  <div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-4 my-4 rounded-r-lg">
    <p class="text-gray-300 text-sm">
      <strong class="text-lcars-tertiary">💡 Note:</strong> Run the command on the computer that will be your host. It doesn't necessarily have to be the main server, it can be a different computer on the network. The only important thing is that it must be on the <strong class="text-white">same LAN</strong> as the server.
    </p>
  </div>
</div>

### Step 6: Configure Domains and Services

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Once the command is executed, you can add domain names, customize them and assign them an IP. This IP is the <strong class="text-white">server's LAN IP</strong>, with its corresponding port.
  </p>
  
  <div class="bg-space-800/50 border border-white/10 rounded-lg p-4 my-4">
    <p class="text-gray-300 text-sm leading-relaxed">
      For example, if your router provides local DNS with IPs of type <code class="text-neon-cyan">192.168.1.*</code>, then that IP that your server has is what you'll enter, along with the port where your service is running.
    </p>
    <p class="text-gray-400 text-sm mt-3">
      <strong class="text-lcars-tertiary">📌 Tip:</strong> If the service you have is a website published with Nixpacks, the default port is <code class="text-neon-cyan">80</code>.
    </p>
  </div>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-add-domain.png" alt="Add Domain" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 7: Verify Status

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Finally, confirm the connection status and that everything is correct. You should see a green indicator confirming that your tunnel is <strong class="text-neon-cyan">active and working</strong>. ✅
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-status.png" alt="Connection Status" class="rounded-lg border border-white/10">
  </div>
</div>

## 🔗 First Service Connected to GitHub

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 text-lg leading-relaxed">
    Suppose you want to publish your code stored on <strong class="text-white">GitHub</strong>. It can be a website, an API, or any Docker container in general. You can do it <strong class="text-neon-cyan">easily and quickly</strong> with the GitHub connections that Dokploy has enabled.
  </p>
</div>

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-6">
  <p class="text-gray-300 leading-relaxed">
    <strong class="text-lcars-tertiary">📌 Note:</strong> This works not only with your own repositories, but also with any <strong class="text-white">organization</strong> you have permissions for.
  </p>
</div>

### Step 1: Access Git Menu

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    When entering Dokploy you'll find a menu similar to the following. There you'll see <strong class="text-neon-cyan">Git</strong>, to make the connections. It's important to mention that you must have the <strong class="text-white">necessary keys or access</strong> to your GitHub. I recommend having SSH keys to download repositories and always keep your service updated.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-home-menu.png" alt="Dokploy Initial Menu" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 2: Select Git Provider

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    There are different connections to other GitHub alternatives, such as <strong class="text-lcars-tertiary">GitLab</strong>, <strong class="text-neon-cyan">Bitbucket</strong>, among others. It doesn't have to be GitHub itself, and for all it's the same. First, select which Git provider you'll have:
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-add-github.png" alt="Add GitHub" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 3: Configure Repository Type

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    You'll be asked to select if it's your own repository, or from an organization. If it's from an organization, it will ask for its GitHub name.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-select-type-github.png" alt="Select Repository Type" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 4: Create GitHub App

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    This will open a connection to the Git provider you've selected. In this case, <strong class="text-lcars-tertiary">GitHub</strong>.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-create-github-app.png" alt="Create GitHub App" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 5: Associate Repositories

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    After adding this provider, it will appear in the previous menu with a message saying <strong class="text-neon-cyan">Action Required</strong>. This is to now associate a repository. It can be a specific one or all repositories.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-github-action-required.png" alt="Action Required" class="rounded-lg border border-white/10">
  </div>
</div>

### Step 6: Select Specific Repository

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Select the repository you want connected. As I mentioned before, it can be a specific one or all of them.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-select-repository.png" alt="Select Repository" class="rounded-lg border border-white/10">
  </div>
</div>

### 🎉 Ready to Deploy!

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 leading-relaxed mb-4">
    With this, you now have the ability to launch a service from an online Git repository. The <strong class="text-lcars-tertiary">advantage</strong> of this is that every time you upload an update to a specific branch, it <strong class="text-neon-cyan">will automatically deploy</strong>.
  </p>
  
  <p class="text-gray-400 text-sm border-t border-white/10 pt-4 mt-4">
    <strong class="text-white">💡 Next Steps:</strong> At this point, you could see any other existing Dokploy tutorial to know what's next. The following steps would be: make your first deploy, configure the domain, and verify that everything works correctly. The purpose of this specific section was to be able to configure both Dokploy and Zero Trust to have our local server.
  </p>
  
  <p class="text-gray-400 text-sm mt-3">
    If you want to see more information on how to launch a service and add its domain, I suggest you check out the <strong class="text-neon-cyan">Getting Started with Dokploy</strong> tutorial.
  </p>
</div>

## 📊 Results

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl text-center shadow-lg shadow-neon-cyan/5">
    <div class="text-5xl mb-3">✅</div>
    <div class="text-4xl font-bold text-white mb-2">99.8%</div>
    <div class="text-neon-cyan font-semibold">Uptime</div>
    <div class="text-gray-400 text-sm mt-1">last 6 months</div>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl text-center shadow-lg shadow-lcars-tertiary/5">
    <div class="text-5xl mb-3">⚡</div>
    <div class="text-4xl font-bold text-white mb-2">&lt;50ms</div>
    <div class="text-lcars-tertiary font-semibold">Latency</div>
    <div class="text-gray-400 text-sm mt-1">users in Mexico & surroundings</div>
  </div>
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl text-center shadow-lg shadow-neon-cyan/5">
    <div class="text-5xl mb-3">💰</div>
    <div class="text-4xl font-bold text-white mb-2">~$87</div>
    <div class="text-neon-cyan font-semibold">Monthly Cost USD</div>
    <div class="text-gray-400 text-sm mt-1">electricity + internet + backup</div>
    <div class="text-gray-500 text-xs mt-2">regardless of demand</div>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl text-center shadow-lg shadow-lcars-tertiary/5">
    <div class="text-5xl mb-3">🚀</div>
    <div class="text-4xl font-bold text-white mb-2">10</div>
    <div class="text-lcars-tertiary font-semibold">Projects</div>
    <div class="text-gray-400 text-sm mt-1">Web Apps + APIs + Buckets + ERP + AI</div>
  </div>
  
</div>

## 🚀 Why Self-Hosting in 2025?

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-8">
  <ol class="space-y-4 text-gray-300">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan font-bold">1.</span>
      <div>
        <strong class="text-neon-cyan">🎮 Total Control:</strong>
        <span> You decide what software to use and how to configure it</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary font-bold">2.</span>
      <div>
        <strong class="text-lcars-tertiary">🔓 No Vendor Lock-in:</strong>
        <span> You don't depend on price changes or policies</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan font-bold">3.</span>
      <div>
        <strong class="text-neon-cyan">🔒 Privacy:</strong>
        <span> Your data remains in your infrastructure</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary font-bold">4.</span>
      <div>
        <strong class="text-lcars-tertiary">📚 Learning:</strong>
        <span> Deep knowledge of DevOps and networking</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan font-bold">5.</span>
      <div>
        <strong class="text-neon-cyan">💵 Predictable Costs:</strong>
        <span> No surprises in the monthly bill</span>
      </div>
    </li>
  </ol>
</div>

## 🔮 Next Steps

<div class="bg-space-800 border border-lcars-tertiary/20 rounded-lg p-6 my-8">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
      <span class="text-3xl">☸️</span>
      <span class="text-gray-300">Implement <strong class="text-lcars-tertiary">Kubernetes</strong> for advanced orchestration</span>
    </li>
    <li class="flex items-start gap-3 border-t border-white/10 pt-4">
      <span class="text-3xl">📈</span>
      <span class="text-gray-300">Add monitoring with <strong class="text-neon-cyan">Prometheus + Grafana</strong></span>
    </li>
    <li class="flex items-start gap-3 border-t border-white/10 pt-4">
      <span class="text-3xl">🔄</span>
      <span class="text-gray-300">Configure <strong class="text-lcars-tertiary">high availability cluster</strong> with second node</span>
    </li>
    <li class="flex items-start gap-3 border-t border-white/10 pt-4">
      <span class="text-3xl">🧪</span>
      <span class="text-gray-300">Integrate <strong class="text-neon-cyan">complete CI/CD</strong> with automated testing</span>
    </li>
  </ul>
</div>

## 💡 Conclusion

<div class="bg-space-900 border border-white/10 p-8 rounded-xl shadow-2xl relative overflow-hidden my-12">
  <div class="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
  <h3 class="text-3xl font-heading font-bold text-white mb-6 z-10 relative">Final Thoughts</h3>
  
  <p class="mb-6 text-gray-300 leading-relaxed text-lg">
    Setting up your own local server <strong class="text-white">is no longer just for geeks</strong>. With modern tools like Dokploy and Cloudflare, any developer can have professional infrastructure without spending fortunes on cloud services.
  </p>
  
  <div class="bg-space-800/50 border border-neon-cyan/30 rounded-lg p-6">
    <p class="text-neon-cyan font-bold text-xl mb-2">
      Ready to create your own server?
    </p>
    <p class="text-gray-400 italic">
      The only limit is your imagination (and your electricity budget ⚡)
    </p>
  </div>
</div>
