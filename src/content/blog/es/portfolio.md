---
title: 'Portafolio'
description: 'Creación de portafolio con Astro, Three.js y Tailwind.'
pubDate: 'Feb 12 2026'
heroImage: '/portafolio.png'
category: 'Web'
tags: ['Astro', 'Release', 'Tailwind', 'Three.js']
lang: 'es'
---
# Portafolio
![Portafolio](/portafolio.png)

Este portafolio fue creado con Astro, Three.js y Tailwind.

Está inspirado en las tonalidades de Star Trek y Tron, mis series y películas favoritas. Quise darle un toque futurista que reflejara lo que más me apasiona: la física aplicada, en este caso, aplicada a la tecnología.

{{ ... }}

---

## Tecnologías

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <!-- Principales -->
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors group">
    <div class="flex items-center gap-4 mb-4 border-b border-neon-cyan/10 pb-4">
      <div class="p-2 bg-space-900 rounded-lg border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
        <img src="/icons/astro-icon.png" alt="Astro" class="w-8 h-8 object-contain" />
      </div>
      <h3 class="text-xl font-heading text-white m-0">Astro</h3>
    </div>
    <p class="text-sm text-gray-400 leading-relaxed">
      Elegí Astro porque la mayoría de las secciones de mi portafolio son estáticas, permitiendo un rendimiento superior y optimización automática.
    </p>
  </div>

  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors group">
    <div class="flex items-center gap-4 mb-4 border-b border-neon-cyan/10 pb-4">
      <div class="p-2 bg-space-900 rounded-lg border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
        <img src="/icons/threejs-icon.png" alt="Three.js" class="w-8 h-8 object-contain invert" />
      </div>
      <h3 class="text-xl font-heading text-white m-0">Three.js</h3>
    </div>
    <p class="text-sm text-gray-400 leading-relaxed">
      Para darle un toque dinámico y visualmente atractivo, simulando un entorno espacial que complementa el tema futurista.
    </p>
  </div>

  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors group">
    <div class="flex items-center gap-4 mb-4 border-b border-neon-cyan/10 pb-4">
      <div class="p-2 bg-space-900 rounded-lg border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
        <img src="/icons/tailwind-icon.svg" alt="Tailwind" class="w-8 h-8 object-contain" />
      </div>
      <h3 class="text-xl font-heading text-white m-0">Tailwind CSS</h3>
    </div>
    <p class="text-sm text-gray-400 leading-relaxed">
      Diseño directo en HTML con clases predefinidas, acelerando el desarrollo y asegurando consistencia visual.
    </p>
  </div>
</div>

<h3 class="text-2xl font-heading text-white mt-12 mb-6 flex items-center gap-3">
  <span class="w-2 h-8 bg-lcars-tertiary rounded-full"></span>
  Infraestructura & Autoalojamiento
</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/docker-icon.png" alt="Docker" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Docker</h4>
        <p class="text-sm text-gray-400">Consistencia en cualquier entorno y fácil escalabilidad con Swarm.</p>
      </div>
    </div>
  </div>

  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/dockploy-icon.png" alt="Dockploy" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Dockploy</h4>
        <p class="text-sm text-gray-400">Automatización del despliegue para integración continua sin esfuerzo.</p>
      </div>
    </div>
  </div>

  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/cloudflare-icon.png" alt="Cloudflare" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Cloudflare</h4>
        <p class="text-sm text-gray-400">Protección DDoS y CDN global para un rendimiento óptimo.</p>
      </div>
    </div>
  </div>

  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/traefik-icon.png" alt="Traefik" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Traefik</h4>
        <p class="text-sm text-gray-400">Gestión de tráfico y certificados SSL automáticos.</p>
      </div>
    </div>
  </div>
</div>

<div class="relative group overflow-hidden rounded-2xl border border-neon-cyan/30 bg-space-900 p-8 md:p-12">
  <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-purple-500/5 group-hover:opacity-100 transition-opacity opacity-50"></div>
  <div class="relative z-10 text-center">
    <h2 class="text-3xl font-heading font-black text-white mb-6 uppercase tracking-widest">Misión Cumplida</h2>
    <p class="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
      Este portafolio no solo es una muestra de mis habilidades técnicas, sino también una expresión de mi pasión por la <span class="text-neon-cyan font-bold">física aplicada</span> y la tecnología. He creado un sitio web visualmente inmersivo, técnicamente sólido, seguro y fácil de mantener.
    </p>
  </div>
</div>