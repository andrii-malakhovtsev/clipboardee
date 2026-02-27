<script lang="ts">
  import { onMount } from 'svelte';

  // Svelte 5 State
  let os = $state('windows'); 

  onMount(() => {
    const platform = window.navigator.platform.toLowerCase();
    const userAgent = window.navigator.userAgent.toLowerCase();

    // Logic to detect if the user is on a Mac
    if (platform.includes('mac') || userAgent.includes('mac')) {
      os = 'mac';
    } else {
      os = 'windows';
    }
  });

  const repo = "andrii-malakhovtsev/clipboardee";
  const winLink = `https://github.com/${repo}/releases/latest/download/Clipboardee.exe`;
  const macLink = `https://github.com/${repo}/releases/latest/download/Clipboardee.dmg`;
</script>

<main class="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/30">
  <nav class="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
    <div class="text-xl font-bold tracking-tighter flex items-center gap-2">
      <span class="bg-blue-600 p-1.5 rounded-lg">📋</span>
      Clipboardee
    </div>
    <div class="flex gap-6 text-sm font-medium text-gray-400">
      <button
        type="button"
        class="hover:text-white transition-colors"
        on:click={() => {
          const el = document.getElementById('features');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        Features
      </button>
      <a href="https://github.com/{repo}" class="hover:text-white transition-colors">GitHub</a>
    </div>
  </nav>

  <section class="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-32 text-center">
    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#f5b3ff] via-[#7dd3fc] to-[#4ade80] bg-clip-text text-transparent">
      Your clipboard,<br />supercharged.
    </h1>

    <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
      The open-source AI clipboard manager. Extract text from screenshots with OCR and transform data instantly using custom AI prompts.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href={winLink} 
         class="group w-full sm:w-auto px-8 py-4 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl
         {os === 'windows' ? 'bg-white text-black hover:bg-gray-200 scale-105' : 'bg-gray-900 text-white border border-gray-800 hover:border-gray-600'}">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.1L9.75 21.9V12.3H0v8.249zM10.5 2V11.7H24V0L10.5 2zm0 19.9l13.5 2V12.3H10.5v9.6z"/></svg>
        Download for Windows
      </a>

      <a href={macLink} 
         class="group w-full sm:w-auto px-8 py-4 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl
         {os === 'mac' ? 'bg-white text-black hover:bg-gray-200 scale-105' : 'bg-gray-900 text-white border border-gray-800 hover:border-gray-600'}">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.057 12.781c.032 2.588 2.246 3.445 2.275 3.457-.022.072-.351 1.205-1.152 2.372-.693 1.012-1.411 2.019-2.544 2.039-1.112.021-1.472-.653-2.743-.653-1.269 0-1.669.633-2.723.674-1.112.039-1.942-1.109-2.64-2.119-1.428-2.067-2.518-5.842-1.047-8.388.73-1.263 2.032-2.063 3.444-2.083 1.074-.021 2.089.721 2.744.721.653 0 1.889-.904 3.161-.773 1.152.126 2.043.619 2.658 1.487-1.428.846-1.173 2.744.02 3.298zm-2.484-7.461c.563-.683.946-1.636.841-2.584-.816.033-1.801.543-2.387 1.226-.525.607-.985 1.583-.861 2.508.911.071 1.844-.467 2.407-1.15z"/></svg>
        Download for macOS
      </a>
    </div>

    <!--
    <div class="mt-12 flex flex-wrap justify-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
      <img src="https://img.shields.io/github/downloads/{repo}/total?style=for-the-badge&color=222222&logo=github" alt="Downloads" />
      <img src="https://img.shields.io/github/stars/{repo}?style=for-the-badge&color=222222&logo=github" alt="Stars" />
    </div>
    -->
  </section>

  <section class="max-w-6xl mx-auto px-6 pb-32">
    <div class="bg-gradient-to-b from-gray-800 to-transparent p-[1px] rounded-3xl">
      <div class="bg-[#0f0f12] rounded-[23px] overflow-hidden aspect-video flex items-center justify-center border border-white/5 shadow-[0_0_100px_rgba(59,130,246,0.1)]">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/M-4GDEbh8wU?autoplay=1&mute=1&loop=1&playlist=M-4GDEbh8wU"
          title="Clipboardee Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

  <section id="features" class="max-w-6xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
      <div class="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 text-2xl">📷</div>
      <h3 class="text-xl font-bold mb-3">Instant OCR</h3>
      <p class="text-gray-500 leading-relaxed">Copy any image or screenshot. Clipboardee extracts the text locally using Tesseract so you never have to re-type again.</p>
    </div>
    <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
      <div class="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 text-2xl">🪄</div>
      <h3 class="text-xl font-bold mb-3">AI Transformation</h3>
      <p class="text-gray-500 leading-relaxed">Turn messy logs into JSON, fix grammar, or summarize text. Just define your prompt and let AI do the heavy lifting.</p>
    </div>
    <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
      <div class="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400 mb-6 text-2xl">🛡️</div>
      <h3 class="text-xl font-bold mb-3">Private by Design</h3>
      <p class="text-gray-500 leading-relaxed">Your clipboard history never leaves your machine. 100% open-source Python code that you can audit yourself.</p>
    </div>
  </section>

  <footer class="border-t border-white/5 py-12 text-center text-gray-600 text-sm">
    Built with Svelte 5 & Tailwind v4. &copy; 2026 Clipboardee Project.
  </footer>
</main>