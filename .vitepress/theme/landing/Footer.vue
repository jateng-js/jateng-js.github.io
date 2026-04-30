<template>
  <section id="join" class="jjs-wrapper jjs-footer jjs-ticks">
    <p class="kicker">Open to everyone</p>
    <h2>Bring a question, a talk idea, or a project.</h2>
    <p>
      Jateng JS welcomes people who write JavaScript for browsers, servers,
      tools, apps, and creative experiments. You do not need a senior title to
      join. Curiosity and respect are enough.
    </p>
    <a class="jjs-button jjs-button--primary" href="mailto:hello@jateng.js.org">
      hello@jateng.js.org
    </a>
  </section>
</template>

<style scoped>
.jjs-footer {
  display: grid;
  justify-items: start;
  padding: 76px var(--jjs-content-x) 96px;
}

.kicker {
  margin: 0 0 16px;
  color: var(--jjs-yellow);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

h2 {
  max-width: 850px;
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(44px, 7vw, 78px);
  line-height: 0.98;
}

p {
  max-width: 720px;
  margin: 26px 0 32px;
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1.75;
}

@media (min-width: 960px) {
  .jjs-footer {
    padding-block: 108px 124px;
  }
}
</style>
