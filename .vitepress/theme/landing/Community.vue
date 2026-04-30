<template>
  <section id="about" class="jjs-wrapper jjs-community">
    <div>
      <p class="kicker">Why Jateng JS</p>
      <h2>For developers who want a local JavaScript room.</h2>
    </div>
    <div class="jjs-community__copy">
      <p>
        Indonesia already has strong city-based JavaScript communities like
        SurabayaJS and JogjaJS. Jateng JS brings that same spirit to Central
        Java: practical talks, friendly mentoring, and a place where students,
        professionals, founders, and hobbyists can grow together.
      </p>
      <div class="cities" aria-label="Central Java cities">
        <span>Semarang</span>
        <span>Solo</span>
        <span>Magelang</span>
        <span>Purwokerto</span>
        <span>Pekalongan</span>
        <span>Tegal</span>
        <span>Kudus</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jjs-community {
  display: grid;
  gap: 32px;
  padding: 64px var(--jjs-content-x);
  border-bottom: 1px solid var(--jjs-nickel);
}

.kicker {
  margin: 0 0 16px;
  color: var(--jjs-yellow);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

h2 {
  max-width: 720px;
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(42px, 6.5vw, 72px);
  line-height: 1;
}

p {
  max-width: 700px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1.75;
}

.jjs-community__copy {
  display: grid;
  gap: 26px;
  align-content: start;
}

.cities {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cities span {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  padding: 0 15px;
  border: 1px solid rgba(255, 255, 245, 0.12);
  border-radius: 999px;
  background: var(--jjs-panel-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 700;
}

@media (min-width: 960px) {
  .jjs-community {
    grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.8fr);
    padding-block: 96px;
  }
}
</style>
