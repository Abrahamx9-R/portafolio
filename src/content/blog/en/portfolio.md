---
title: 'Portfolio'
description: 'Portfolio creation with Astro, Three.js, and Tailwind.'
pubDate: 'Feb 12 2026'
heroImage: '/portafolio.png'
category: 'Web'
tags: ['Astro', 'Release', 'Tailwind', 'Three.js']
lang: 'en'
---
# Portfolio
![Portfolio](/portafolio.png)

This portfolio was created using Astro, Three.js, and Tailwind.

It is inspired by the tones of Star Trek and Tron, my favorite series and movies. I wanted to give it a futuristic touch that reflects what I am most passionate about: applied physics, in this case, applied to technology.

---

## Technologies

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <!-- Core -->
  <div class="bg-space-800 border border-neon-cyan/20 p-6 rounded-xl shadow-lg shadow-neon-cyan/5 hover:border-neon-cyan/40 transition-colors group">
    <div class="flex items-center gap-4 mb-4 border-b border-neon-cyan/10 pb-4">
      <div class="p-2 bg-space-900 rounded-lg border border-white/5 group-hover:border-neon-cyan/30 transition-colors">
        <img src="/icons/astro-icon.png" alt="Astro" class="w-8 h-8 object-contain" />
      </div>
      <h3 class="text-xl font-heading text-white m-0">Astro</h3>
    </div>
    <p class="text-sm text-gray-400 leading-relaxed">
      I chose Astro because most sections of my portfolio are static, allowing for superior performance and automatic optimization.
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
      Used to add a dynamic and visually appealing touch, simulating a space environment that complements the futuristic theme.
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
      Enabled designing directly in HTML with predefined classes, speeding up development and ensuring style consistency.
    </p>
  </div>
</div>

<h3 class="text-2xl font-heading text-white mt-12 mb-6 flex items-center gap-3">
  <span class="w-2 h-8 bg-lcars-tertiary rounded-full"></span>
  Infrastructure & Self-Hosting
</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/docker-icon.png" alt="Docker" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Docker</h4>
        <p class="text-sm text-gray-400">Consistency across any environment and easy scalability with Swarm.</p>
      </div>
    </div>
  </div>

  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/dockploy-icon.png" alt="Dockploy" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Dockploy</h4>
        <p class="text-sm text-gray-400">Automated deployment for effortless continuous integration.</p>
      </div>
    </div>
  </div>

  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/cloudflare-icon.png" alt="Cloudflare" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Cloudflare</h4>
        <p class="text-sm text-gray-400">DDoS protection and global CDN for optimal performance.</p>
      </div>
    </div>
  </div>

  <div class="bg-space-800/50 border border-white/10 p-5 rounded-lg hover:bg-space-800 transition-colors">
    <div class="flex items-start gap-4">
      <img src="/icons/traefik-icon.png" alt="Traefik" class="w-10 h-10 object-contain mt-1" />
      <div>
        <h4 class="text-lg font-bold text-lcars-tertiary mb-1">Traefik</h4>
        <p class="text-sm text-gray-400">Traffic management and automatic SSL certificates.</p>
      </div>
    </div>
  </div>
</div>

<div class="relative group overflow-hidden rounded-2xl border border-neon-cyan/30 bg-space-900 p-8 md:p-12">
  <div class="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-purple-500/5 group-hover:opacity-100 transition-opacity opacity-50"></div>
  <div class="relative z-10 text-center">
    <h2 class="text-3xl font-heading font-black text-white mb-6 uppercase tracking-widest">Mission Accomplished</h2>
    <p class="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
      This portfolio is not only a showcase of my technical skills but also an expression of my passion for <span class="text-neon-cyan font-bold">applied physics</span> and technology. I have created a visually immersive, technically robust, secure, and easy-to-maintain website.
    </p>
  </div>
</div>