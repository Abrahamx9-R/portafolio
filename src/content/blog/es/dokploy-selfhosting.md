---
title: 'Mi servidor local en 2025: Dokploy, Cloudflare y redundancia total'
description: 'Cómo monté mi propio servidor local en México para alojar proyectos con alta disponibilidad, usando Dokploy, Cloudflare Tunnel y redundancia en la red.'
pubDate: 'Febrero 15 2026'
heroImage: '/dokploy-selfhosting.png'
category: 'DevOps'
tags: ['Dokploy', 'Cloudflare', 'Self-Hosting', 'Networking', 'Redundancia']
isProject: true
lang: 'es'
---

# Mi servidor local en 2025: Dokploy, Cloudflare y redundancia total

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 text-lg leading-relaxed">
    Al trabajar con PyMes en <strong class="text-white">México</strong> y desarrollar mis propios proyectos, es indispensable tener estos disponibles para que cualquiera pueda visualizarlos. No solo me refiero a páginas web, sino también a <strong class="text-neon-cyan">APIs, servicios de automatización</strong> como n8n, almacenamiento de archivos como MinIO, etc.
  </p>
</div>

## 🤔 El dilema del presupuesto limitado

En muchos proyectos, principalmente en México, el presupuesto está muy limitado. Tener estos servicios en línea puede ser un problema **grave** para la supervivencia al menos los primeros años. Es por ello que pensar en una nube híbrida o self-hosting no es tan descabellado.

<div class="bg-space-800/50 border border-red-400/30 rounded-lg p-6 my-6">
  <h3 class="text-red-400 font-bold text-xl mb-3">⚠️ El problema de las IPs públicas</h3>
  <p class="text-gray-300 leading-relaxed">
    En el lugar donde me encuentro actualmente (México), solo hay una empresa de internet que asigna IPv4 pública, pero son <strong class="text-white">dinámicas</strong>. Los demás servicios conocidos no te asignan IPv4 públicas, y algunas ni siquiera IPv6 pública. Esto me llevó a buscar servicios de internet dedicado.
  </p>
</div>

### 💸 El costo del internet dedicado

Me topé con un nuevo problema: aunque estos servicios ya cuentan con redundancia de red, los costos son aún mayores que si simplemente utilizara hosting en la nube. Los precios van desde **$500 USD hasta $1,000 USD al mes**.

Es por ello que, buscando soluciones, encontré **cómo tengo actualmente** mi propio servidor local.

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 leading-relaxed">
    <strong class="text-lcars-tertiary">📌 Nota importante:</strong> Por seguridad y para evitar problemas, las bases de datos aún las almaceno en la nube, por eso lo considero <strong class="text-white">híbrido</strong>. Para mí estas son prioridad: si se cae una API o una página web, la puedo levantar fácilmente, pero el riesgo de perder información de una base de datos es algo de suma importancia.
  </p>
</div>

## 🎯 Objetivos del proyecto

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <div class="text-5xl mb-4">🌐</div>
    <h3 class="text-xl font-heading text-neon-cyan mb-3">Alta disponibilidad</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Redundancia de red con múltiples ISPs</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <div class="text-5xl mb-4">🔐</div>
    <h3 class="text-xl font-heading text-lcars-tertiary mb-3">Acceso remoto seguro</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Exponer servicios sin abrir puertos</p>
  </div>
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <div class="text-5xl mb-4">⚡</div>
    <h3 class="text-xl font-heading text-neon-cyan mb-3">Gestión simplificada</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Deploy con un solo click</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <div class="text-5xl mb-4">💰</div>
    <h3 class="text-xl font-heading text-lcars-tertiary mb-3">Costo optimizado</h3>
    <p class="text-gray-400 text-sm leading-relaxed">Hardware propio + servicios gratuitos</p>
  </div>
  
</div>

## 🏗️ Arquitectura

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
      <span class="text-3xl">🖥️</span>
      Servidor principal
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">Si no tienes mucho presupuesto, puedes comprar un servidor chino que venden en AliExpress. Son reutilizados de algún servidor antiguo o simplemente actualizado. Funciona muy bien y son lo suficientemente <strong class="text-white">baratos</strong> para poder comprar varios y hacer un cluster.</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
      <span class="text-3xl">💾</span>
      Almacenamiento
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">NAS con redundancia <strong class="text-white">RAID 1</strong> para backups y permanencia de datos. Garantiza que tus datos estén protegidos ante fallos de disco.</p>
  </div>
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors">
    <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
      <span class="text-3xl">🌐</span>
      Red
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">Doble conexión a internet (Fibra óptica principal + 4G LTE backup). En mi caso tengo 2 proveedores de internet distintos con su propia red de fibra óptica. Hay switches y routers que soportan más de 2 conexiones WAN, por lo que podrías agregar 4G LTE para asegurar disponibilidad.</p>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl shadow-lg shadow-lcars-tertiary/5 hover:border-lcars-tertiary/40 transition-colors">
    <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
      <span class="text-3xl">⚡</span>
      Energía
    </h3>
    <p class="text-gray-400 leading-relaxed text-sm">Siempre tener un <strong class="text-white">UPS</strong>, ya sea propio o comprado, para asegurar energía en todo momento. En Latinoamérica los problemas de energía son muy recurrentes.</p>
  </div>
  
</div>

### Software Stack

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🚀</span>
      <div>
        <strong class="text-neon-cyan">Dokploy</strong><br>
        <span class="text-gray-300 text-sm">Plataforma de deployment self-hosted (alternativa a Vercel/Netlify)</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">☁️</span>
      <div>
        <strong class="text-lcars-tertiary">Cloudflare Tunnel Zero Trust</strong><br>
        <span class="text-gray-300 text-sm">Conexión segura sin exponer IP pública</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔀</span>
      <div>
        <strong class="text-neon-cyan">Traefik</strong><br>
        <span class="text-gray-300 text-sm">Reverse proxy con SSL automático</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🐳</span>
      <div>
        <strong class="text-lcars-tertiary">Docker</strong><br>
        <span class="text-gray-300 text-sm">Contenedorización de todas las aplicaciones</span>
      </div>
    </li>
  </ul>
</div>

## 🔒 Seguridad y redundancia

### Redundancia de red

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-6 rounded-r-lg">
  <p class="text-gray-300 leading-relaxed">
    Tengo configurado un router que soporta <strong class="text-white">múltiples conexiones WAN</strong>, con failover automático entre la fibra óptica y el 4G LTE. Esto garantiza que si el servicio principal falla, el tráfico se redirige automáticamente a la conexión secundaria sin interrupciones. Además, cuenta con <strong class="text-neon-cyan">balanceo de carga</strong>: si aumenta la demanda, puede disponer de los dos servicios tanto de fibra óptica como de 4G LTE para satisfacer la demanda.
  </p>
</div>

Puedes buscar en internet switches o routers que tengan más de una entrada WAN y si es posible balanceador de carga por si lo llegaras a ocupar. Dejo algunas opciones a continuación:

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-6">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-xl flex-shrink-0">🔗</span>
      <a href="https://www.mercadolibre.com.mx/router-balanceador-vpn-multi-wan-gigabit-router-cudy-r700-5-puertos-wanlan-vpn-firewall-balance-de-carga-y-backup-de-enlace-ideal-para-redes-empresariales-estables-y-seguras/p/MLM54083651#polycard_client=search-desktop&search_layout=grid&position=5&type=product&tracking_id=3a6d9ff7-b47f-482f-9d40-57b0079e82a1&wid=MLM3990848880&sid=search" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-purple transition-colors underline text-sm">
        Router Balanceador VPN Multi-wan Gigabit Cudy R700 (5 Puertos WAN/LAN, VPN, Firewall, Balance de Carga y Backup)
      </a>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-xl flex-shrink-0">🔗</span>
      <a href="https://www.mercadolibre.com.mx/router-balanceador-de-carga-tp-link-r470t-servidor-pppoe-v60-negro/p/MLM7868092#polycard_client=search-desktop&search_layout=grid&position=4&type=product&tracking_id=1f54e98a-31e5-4bbd-95e5-9798d3b26a94&wid=MLM1401901104&sid=search" target="_blank" rel="noopener noreferrer" class="text-lcars-tertiary hover:text-neon-purple transition-colors underline text-sm">
        Router Balanceador de carga TP-Link R470T+ (Servidor PPPoE V6.0)
      </a>
    </li>
  </ul>
</div>



### Cloudflare Zero Trust

En lugar de abrir puertos en el router (NAT/Port forwarding), utilizo Cloudflare Tunnel para crear un túnel encriptado. 

<div class="bg-space-800/50 border border-neon-cyan/30 rounded-lg p-6 my-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🛡️</span>
      <div>
        <strong class="text-neon-cyan">Protección DDoS:</strong>
        <span class="text-gray-300"> Incluida automáticamente</span>
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
        <strong class="text-neon-cyan">Sin IP expuesta:</strong>
        <span class="text-gray-300"> IP pública oculta</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🔒</span>
      <div>
        <strong class="text-lcars-tertiary">SSL/TLS:</strong>
        <span class="text-gray-300"> Certificados automáticos</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔄</span>
      <div>
        <strong class="text-neon-cyan">Failover automático:</strong>
        <span class="text-gray-300"> Cambio automático entre puertos WAN sin intervención manual</span>
      </div>
    </li>
  </ul>
</div>

### Backups automatizados

<div class="bg-space-800/50 border-l-4 border-lcars-tertiary p-4 my-6">
  <p class="text-gray-300 leading-relaxed">
    <strong class="text-lcars-tertiary">💾 Estrategia de respaldo:</strong> Todos los volúmenes de Docker se respaldan <strong class="text-white">diariamente al NAS</strong> y <strong class="text-white">semanalmente</strong> a un bucket de cloud como último recurso. Esta estrategia 3-2-1 garantiza la integridad de los datos.
  </p>
  <p class="text-gray-300 leading-relaxed mt-3">
    Además, <strong class="text-neon-cyan">Dokploy</strong> te permite realizar copias de seguridad en un bucket directamente desde la interfaz, por lo que también se hacen copias de seguridad recurrentemente.
  </p>
</div>

## ⚡ Dokploy: El corazón del sistema

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 my-8">
  <h3 class="text-2xl font-heading text-neon-cyan mb-6 flex items-center gap-2">
    <span class="text-3xl">🚀</span>
    Dokploy es una plataforma open-source que permite:
  </h3>
  
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">📦</span>
      <div>
        <strong class="text-neon-cyan">Deploy desde GitHub/GitLab</strong>
        <span class="text-gray-300 text-sm"> con webhooks automáticos</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">🗄️</span>
      <div>
        <strong class="text-lcars-tertiary">Gestión de bases de datos</strong>
        <span class="text-gray-300 text-sm"> (PostgreSQL, MySQL, MongoDB)</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">📊</span>
      <div>
        <strong class="text-neon-cyan">Monitoreo de recursos</strong>
        <span class="text-gray-300 text-sm"> en tiempo real</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary text-2xl flex-shrink-0">📝</span>
      <div>
        <strong class="text-lcars-tertiary">Logs centralizados</strong>
        <span class="text-gray-300 text-sm"> de todas las aplicaciones</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan text-2xl flex-shrink-0">🔄</span>
      <div>
        <strong class="text-neon-cyan">Actualizaciones con cero downtime</strong>
        <span class="text-gray-300 text-sm"> mediante rolling updates</span>
      </div>
    </li>
  </ul>
  
  <p class="mt-6 text-gray-400 italic border-t border-white/10 pt-4">
    Es como tener tu propio Vercel, Railway o Netlify, pero con <strong class="text-white">control total</strong> y <strong class="text-neon-cyan">sin límites de uso</strong>. 💪
  </p>
</div>

## 📦 Guía de Instalación

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 text-lg leading-relaxed">
    Para la instalación, es importante tener tu servidor con <strong class="text-white">Linux</strong> instalado (puedes usar la distribución de tu preferencia) y <strong class="text-neon-cyan">Docker</strong>.
  </p>
</div>

<div class="bg-space-800/50 border border-red-400/30 rounded-lg p-6 my-6">
  <h3 class="text-red-400 font-bold text-xl mb-3">⚠️ Nota importante sobre Docker</h3>
  <p class="text-gray-300 leading-relaxed">
    En mi caso, para mayor practicidad, tengo instalado <strong class="text-white">Ubuntu Server</strong> con Docker instalado <strong class="text-white">manualmente</strong>. Es importante que instales Docker manualmente, ya que si lo haces desde la tienda de Ubuntu (snap), tendrás problemas al instalar Dokploy.
  </p>
</div>

## 🐳 Instalación de Docker en Ubuntu Server

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
    <span class="text-3xl">1️⃣</span>
    Preparar el sistema
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Primero, actualiza tus paquetes actuales e instala algunas herramientas necesarias para que Ubuntu pueda comunicarse con repositorios a través de HTTPS.
  </p>
  
```bash
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release
```
</div>

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-lcars-tertiary mb-4 flex items-center gap-2">
    <span class="text-3xl">2️⃣</span>
    Agregar la llave GPG oficial de Docker
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Esto sirve para que tu sistema confíe en los paquetes que vas a descargar de Docker.
  </p>
  
```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
</div>

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
    <span class="text-3xl">3️⃣</span>
    Configurar el repositorio
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Ahora, indica a Ubuntu dónde buscar los paquetes de Docker:
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
    Instalar el motor de Docker
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Actualiza de nuevo tu lista de paquetes (para que reconozca el nuevo repositorio) e instala Docker junto con <strong class="text-white">Docker Compose</strong>:
  </p>
  
```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
</div>

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <h3 class="text-xl font-heading text-neon-cyan mb-4 flex items-center gap-2">
    <span class="text-3xl">5️⃣</span>
    Verificar la instalación
  </h3>
  <p class="text-gray-400 mb-4 leading-relaxed">
    Para confirmar que todo funciona correctamente, ejecuta el contenedor de prueba "Hello World":
  </p>
  
```bash
sudo docker run hello-world
```
  
  <p class="text-gray-400 mt-4 leading-relaxed">
    Si ves un mensaje de éxito, <strong class="text-neon-cyan">Docker ya está corriendo</strong> en tu servidor. ✅
  </p>
</div>

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-6 my-8 rounded-r-lg">
  <h3 class="text-xl font-heading text-lcars-tertiary mb-4">💡 Consejo: Docker sin `sudo`</h3>
  <p class="text-gray-300 leading-relaxed mb-4">
    Por defecto, necesitas permisos de administrador para ejecutar comandos de Docker. Si quieres evitar escribir <code class="text-neon-cyan">sudo</code> cada vez, añade tu usuario al grupo de Docker:
  </p>
  
  <ol class="space-y-2 text-gray-300">
    <li class="flex items-start gap-2">
      <span class="text-lcars-tertiary font-bold">1.</span>
      <span>Crea el grupo (si no existe): <code class="text-neon-cyan">sudo groupadd docker</code></span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-lcars-tertiary font-bold">2.</span>
      <span>Añade tu usuario: <code class="text-neon-cyan">sudo usermod -aG docker $USER</code></span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-lcars-tertiary font-bold">3.</span>
      <span><strong class="text-white">Cierra sesión y vuelve a entrar</strong> para que los cambios surtan efecto</span>
    </li>
  </ol>
</div>

## 🚀 Instalación de Dokploy

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 my-8">
  <div class="flex items-start gap-4 mb-6">
    <span class="text-5xl">⚡</span>
    <div>
      <h3 class="text-2xl font-heading text-neon-cyan mb-3">Instalación en un solo comando</h3>
      <p class="text-gray-300 leading-relaxed">
        La <a href="https://docs.dokploy.com/docs/core/installation" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-purple transition-colors underline">documentación oficial de Dokploy</a> ofrece la opción de realizar la instalación con un solo comando. Es así de simple:
      </p>
    </div>
  </div>
  
```bash
curl -sSL https://dokploy.com/install.sh | sh
```

  <p class="mt-6 text-gray-400 text-sm italic border-t border-white/10 pt-4">
    💡 <strong class="text-white">Tip:</strong> Una vez finalizada la instalación, Dokploy estará disponible en <code class="text-neon-cyan">http://tu-servidor:3000</code>
  </p>
</div>

## ☁️ Instalación y Configuración de Cloudflare Zero Trust

<div class="bg-space-800/50 border border-red-400/30 rounded-lg p-6 my-6">
  <h3 class="text-red-400 font-bold text-xl mb-3">📋 Requisitos previos</h3>
  <ul class="space-y-2 text-gray-300">
    <li class="flex items-start gap-2">
      <span class="text-red-400">•</span>
      <span>Tener un <strong class="text-white">dominio propio</strong> (hay opciones muy económicas disponibles)</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-red-400">•</span>
      <span>El administrador de DNS debe ser <strong class="text-white">Cloudflare</strong></span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-red-400">•</span>
      <span>Cuenta gratuita de Cloudflare</span>
    </li>
  </ul>
</div>

### Acceder al menú Zero Trust

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Una vez que tienes una cuenta gratuita de Cloudflare y has agregado el dominio, en el menú inicial encontrarás algo parecido a lo siguiente:
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-menu-inicial.png" alt="Menú de Cloudflare" class="rounded-lg border border-white/10">
  </div>
  
  <p class="text-gray-400 text-sm mt-4">
    En el menú <strong class="text-neon-cyan">Zero Trust</strong> de la barra lateral, se encuentra la opción para agregar una nueva conexión.
  </p>
</div>

### Crear un nuevo conector

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Para agregar una nueva conexión, selecciona <strong class="text-white">Network → Connectors</strong>, y aparecerá la opción para agregar un nuevo conector.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-zero-menu.png" alt="Menú Zero Trust" class="rounded-lg border border-white/10">
    <img src="/cloudflare-add-zero.png" alt="Agregar conexión" class="rounded-lg border border-white/10 mt-4">
  </div>
</div>

### Seleccionar tipo de conexión

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Seleccionamos el tipo de conexión que necesitemos. En este caso será <strong class="text-neon-cyan">Cloudflared</strong>, pero también está disponible <strong class="text-lcars-tertiary">WARP</strong>.
  </p>
  
  <div class="bg-space-800/50 border-l-4 border-lcars-tertiary p-4 my-4">
    <p class="text-gray-300 text-sm">
      <strong class="text-lcars-tertiary">📌 Diferencia clave:</strong> Para conexión tipo <strong class="text-white">Cloudflared</strong> solo se pueden exponer servicios <strong class="text-neon-cyan">HTTP y HTTPS</strong>. Si requieres otros protocolos, consulta la <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:text-neon-purple transition-colors underline">documentación del tipo de conexión WARP</a>.
    </p>
  </div>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-select-zero.png" alt="Seleccionar tipo" class="rounded-lg border border-white/10">
  </div>
</div>

### Nombrar la conexión

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Agregamos un nombre a la conexión. Esto es importante ya que podemos tener más de una conexión, útil si tus servicios los quieres alojar en <strong class="text-white">diferentes LANs</strong>.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-add-name.png" alt="Nombrar conexión" class="rounded-lg border border-white/10">
  </div>
</div>

###  Ejecutar el comando de instalación

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Una vez creada la conexión, se nos proporcionará un comando para ejecutar en nuestro servidor. Este comando hará que nuestro servidor se conecte a Cloudflare y pueda exponer nuestros servicios <strong class="text-neon-cyan">sin necesidad de abrir puertos</strong>. En este caso, sugiero hacer la conexión por medio de <strong class="text-white">Docker</strong>.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-select-docker.png" alt="Comando Docker" class="rounded-lg border border-white/10">
  </div>
  
  <div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-4 my-4 rounded-r-lg">
    <p class="text-gray-300 text-sm">
      <strong class="text-lcars-tertiary">💡 Nota:</strong> Ejecuta el comando en la computadora que será tu host. No necesariamente debe ser el servidor principal, puede ser otra computadora diferente que esté en la red. Lo único importante es que debe estar en la <strong class="text-white">misma red LAN</strong> que el servidor.
    </p>
  </div>
</div>

###  Configurar dominios y servicios

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Una vez que se ejecuta el comando, podremos agregar nombres de dominios, personalizarlos y asignarles una IP. Esta IP es la <strong class="text-white">IP del servidor en la LAN</strong>, con su correspondiente puerto.
  </p>
  
  <div class="bg-space-800/50 border border-white/10 rounded-lg p-4 my-4">
    <p class="text-gray-300 text-sm leading-relaxed">
      Por ejemplo, si tu router provee DNS locales con IPs del tipo <code class="text-neon-cyan">192.168.1.*</code>, entonces esa IP que tiene tu servidor es la que colocarás, junto con el puerto donde está corriendo tu servicio.
    </p>
    <p class="text-gray-400 text-sm mt-3">
      <strong class="text-lcars-tertiary">📌 Tip:</strong> Si el servicio que tienes es una página web publicada con Nixpacks, el puerto por defecto es <code class="text-neon-cyan">80</code>.
    </p>
  </div>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-add-domain.png" alt="Agregar dominio" class="rounded-lg border border-white/10">
  </div>
</div>

###  Verificar el estado

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Por último, confirma el estatus de la conexión y que todo esté correcto. Deberías ver un indicador verde que confirma que tu túnel está <strong class="text-neon-cyan">activo y funcionando</strong>. ✅
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/cloudflare-status.png" alt="Estado de la conexión" class="rounded-lg border border-white/10">
  </div>
</div>

## 🔗 Primer servicio conectado a GitHub

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-neon-cyan p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 text-lg leading-relaxed">
    Supongamos que quieres publicar tu código almacenado en <strong class="text-white">GitHub</strong>. Puede ser una página web, alguna API, o algún contenedor de Docker en general. Lo puedes hacer de forma <strong class="text-neon-cyan">fácil y rápida</strong> con las conexiones de GitHub que tiene habilitado Dokploy.
  </p>
</div>

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-6">
  <p class="text-gray-300 leading-relaxed">
    <strong class="text-lcars-tertiary">📌 Nota:</strong> Esto funciona no solo con repositorios tuyos, sino también de alguna <strong class="text-white">organización</strong> de la cual tengas permisos.
  </p>
</div>

### Paso 1: Acceder al menú de Git

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Al entrar a Dokploy encontrarás un menú parecido al siguiente. Ahí verás <strong class="text-neon-cyan">Git</strong>, para poder hacer las conexiones. Es importante mencionar que debes tener las <strong class="text-white">llaves o accesos necesarios</strong> de tu GitHub. Recomiendo tener llaves SSH para poder descargar los repositorios y mantener siempre actualizado tu servicio.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-home-menu.png" alt="Menú inicial de Dokploy" class="rounded-lg border border-white/10">
  </div>
</div>

### Paso 2: Seleccionar proveedor de Git

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Existen diferentes conexiones a otras alternativas de GitHub, como puede ser <strong class="text-lcars-tertiary">GitLab</strong>, <strong class="text-neon-cyan">Bitbucket</strong>, entre otros. No es necesario que sea GitHub en sí, y para todos es lo mismo. Primero, selecciona qué proveedor de Git tendrás:
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-add-github.png" alt="Agregar GitHub" class="rounded-lg border border-white/10">
  </div>
</div>

### Paso 3: Configurar tipo de repositorio

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Te pedirá seleccionar si es un repositorio tuyo propio, o de alguna organización. Si es de una organización, te pedirá su nombre de GitHub.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-select-type-github.png" alt="Seleccionar tipo de repositorio" class="rounded-lg border border-white/10">
  </div>
</div>

### Paso 4: Crear GitHub App

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Esto abrirá una conexión al proveedor de Git que hayas seleccionado. En este caso, <strong class="text-lcars-tertiary">GitHub</strong>.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-create-github-app.png" alt="Crear GitHub App" class="rounded-lg border border-white/10">
  </div>
</div>

### Paso 5: Asociar repositorios

<div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Al haber agregado este proveedor, te aparecerá en el menú anterior con un mensaje que dice <strong class="text-neon-cyan">Action Required</strong>. Esto es para poder asociar ahora un repositorio. Puede ser uno particular o todos los repositorios.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-github-action-required.png" alt="Acción requerida" class="rounded-lg border border-white/10">
  </div>
</div>

### Paso 6: Seleccionar repositorio específico

<div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl my-6">
  <p class="text-gray-300 leading-relaxed mb-4">
    Selecciona el repositorio que quieres conectado. Como mencionaba antes, puede ser uno en específico o todos.
  </p>
  
  <div class="bg-space-900 p-4 rounded-lg my-4">
    <img src="/dokploy-select-repository.png" alt="Seleccionar repositorio" class="rounded-lg border border-white/10">
  </div>
</div>

### 🎉 ¡Listo para desplegar!

<div class="bg-gradient-to-r from-space-800 to-space-900 border-l-4 border-lcars-tertiary p-6 my-8 rounded-r-lg">
  <p class="text-gray-300 leading-relaxed mb-4">
    Con esto ahora ya tienes la posibilidad de poder levantar un servicio a partir de un repositorio de Git en línea. La <strong class="text-lcars-tertiary">ventaja</strong> que tiene esto es que cada vez que subas alguna actualización a una rama en específico, <strong class="text-neon-cyan">automáticamente hará el deploy correspondiente</strong>.
  </p>
  
  <p class="text-gray-400 text-sm border-t border-white/10 pt-4 mt-4">
    <strong class="text-white">💡 Próximos pasos:</strong> En este punto, podrías ver cualquier otro tutorial ya existente de Dokploy para saber qué sigue. Los pasos siguientes serían: hacer tu primer deploy, configurar el dominio y corroborar que funciona todo correctamente. El propósito de este apartado en específico era poder configurar tanto Dokploy como Zero Trust para tener nuestro servidor local.
  </p>
  
  <p class="text-gray-400 text-sm mt-3">
    Si quieres ver más información de cómo levantar un servicio y agregar su dominio, te sugiero veas el tutorial de <strong class="text-neon-cyan">Primeros pasos en Dokploy</strong>.
  </p>
</div>


## 📊 Resultados

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl text-center shadow-lg shadow-neon-cyan/5">
    <div class="text-5xl mb-3">✅</div>
    <div class="text-4xl font-bold text-white mb-2">99.8%</div>
    <div class="text-neon-cyan font-semibold">Uptime</div>
    <div class="text-gray-400 text-sm mt-1">últimos 6 meses</div>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl text-center shadow-lg shadow-lcars-tertiary/5">
    <div class="text-5xl mb-3">⚡</div>
    <div class="text-4xl font-bold text-white mb-2">&lt;50ms</div>
    <div class="text-lcars-tertiary font-semibold">Latencia</div>
    <div class="text-gray-400 text-sm mt-1">usuarios en México y alrededores</div>
  </div>
  
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl text-center shadow-lg shadow-neon-cyan/5">
    <div class="text-5xl mb-3">💰</div>
    <div class="text-4xl font-bold text-white mb-2">~$87</div>
    <div class="text-neon-cyan font-semibold">Costo mensual USD</div>
    <div class="text-gray-400 text-sm mt-1">electricidad + internet + backup</div>
    <div class="text-gray-500 text-xs mt-2">sin importar la demanda</div>
  </div>
  
  <div class="bg-space-800 border border-lcars-tertiary/20 p-6 rounded-xl text-center shadow-lg shadow-lcars-tertiary/5">
    <div class="text-5xl mb-3">🚀</div>
    <div class="text-4xl font-bold text-white mb-2">10</div>
    <div class="text-lcars-tertiary font-semibold">Proyectos</div>
    <div class="text-gray-400 text-sm mt-1">Apps web + APIs + Buckets + ERP + IA</div>
  </div>
  
</div>

## 🚀 ¿Por qué self-hosting en 2025?

<div class="bg-space-800/50 border border-white/10 rounded-lg p-6 my-8">
  <ol class="space-y-4 text-gray-300">
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan font-bold">1.</span>
      <div>
        <strong class="text-neon-cyan">🎮 Control total:</strong>
        <span> Tú decides qué software usar y cómo configurarlo</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary font-bold">2.</span>
      <div>
        <strong class="text-lcars-tertiary">🔓 Sin vendor lock-in:</strong>
        <span> No dependes de cambios de precio o políticas</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan font-bold">3.</span>
      <div>
        <strong class="text-neon-cyan">🔒 Privacidad:</strong>
        <span> Tus datos permanecen en tu infraestructura</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-lcars-tertiary font-bold">4.</span>
      <div>
        <strong class="text-lcars-tertiary">📚 Aprendizaje:</strong>
        <span> Conocimiento profundo de DevOps y networking</span>
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-neon-cyan font-bold">5.</span>
      <div>
        <strong class="text-neon-cyan">💵 Costos predecibles:</strong>
        <span> Sin sorpresas en la factura mensual</span>
      </div>
    </li>
  </ol>
</div>

## 🔮 Próximos pasos

<div class="bg-space-800 border border-lcars-tertiary/20 rounded-lg p-6 my-8">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
      <span class="text-3xl">☸️</span>
      <span class="text-gray-300">Implementar <strong class="text-lcars-tertiary">Kubernetes</strong> para orquestación avanzada</span>
    </li>
    <li class="flex items-start gap-3 border-t border-white/10 pt-4">
      <span class="text-3xl">📈</span>
      <span class="text-gray-300">Añadir monitoreo con <strong class="text-neon-cyan">Prometheus + Grafana</strong></span>
    </li>
    <li class="flex items-start gap-3 border-t border-white/10 pt-4">
      <span class="text-3xl">🔄</span>
      <span class="text-gray-300">Configurar <strong class="text-lcars-tertiary">cluster de alta disponibilidad</strong> con segundo nodo</span>
    </li>
    <li class="flex items-start gap-3 border-t border-white/10 pt-4">
      <span class="text-3xl">🧪</span>
      <span class="text-gray-300">Integrar <strong class="text-neon-cyan">CI/CD completo</strong> con testing automatizado</span>
    </li>
  </ul>
</div>

## 💡 Conclusión

<div class="bg-space-900 border border-white/10 p-8 rounded-xl shadow-2xl relative overflow-hidden my-12">
  <div class="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
  <h3 class="text-3xl font-heading font-bold text-white mb-6 z-10 relative">Reflexión Final</h3>
  
  <p class="mb-6 text-gray-300 leading-relaxed text-lg">
    Montar tu propio servidor local <strong class="text-white">ya no es solo para geeks</strong>. Con herramientas modernas como Dokploy y Cloudflare, cualquier desarrollador puede tener una infraestructura profesional sin gastar fortunas en servicios cloud.
  </p>
  
  <div class="bg-space-800/50 border border-neon-cyan/30 rounded-lg p-6">
    <p class="text-neon-cyan font-bold text-xl mb-2">
      ¿Te animas a crear tu propio servidor?
    </p>
    <p class="text-gray-400 italic">
      El único límite es tu imaginación (y tu presupuesto de electricidad ⚡)
      Como dijo un gran maestro y programador, si puedes imaginarlo puedes programarlo.
    </p>
  </div>
</div>
