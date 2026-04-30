<template>
  <section id="programs" class="jjs-wrapper jjs-feature-grid">
    <article>
      <div>
        <p class="kicker">01</p>
        <h2>Meetups</h2>
        <p>
          Regular talks, demos, and hallway conversations for frontend,
          backend, tooling, and product engineering.
        </p>
      </div>
      <div class="panel panel--terminal">
        <span>talks.map(topic =&gt; share(topic))</span>
        <span>demo.deploy()</span>
        <span>coffee.break()</span>
      </div>
    </article>

    <article>
      <div>
        <p class="kicker">02</p>
        <h2>Learning Circles</h2>
        <p>
          Small groups for beginners and experienced developers to study
          JavaScript, TypeScript, Node.js, Vue, React, Vite, and more.
        </p>
      </div>
      <div class="panel panel--rings" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </article>

    <article>
      <div>
        <p class="kicker">03</p>
        <h2>Project Nights</h2>
        <p>
          Open sessions to ship community projects, help local organizations,
          and practice working in public.
        </p>
      </div>
      <div class="panel panel--grid" aria-hidden="true">
        <span v-for="item in 16" :key="item"></span>
      </div>
    </article>

    <article>
      <div>
        <p class="kicker">04</p>
        <h2>Central Java Network</h2>
        <p>
          A shared room for developers from Semarang, Solo, Magelang,
          Purwokerto, Pekalongan, Tegal, Kudus, and nearby cities.
        </p>
      </div>
      <div class="panel panel--map" aria-hidden="true">
        <span class="route route-a"></span>
        <span class="route route-b"></span>
        <span class="dot dot-a"></span>
        <span class="dot dot-b"></span>
        <span class="dot dot-c"></span>
        <span class="dot dot-d"></span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.jjs-feature-grid {
  display: grid;
  border-bottom: 1px solid var(--jjs-nickel);
}

article {
  display: flex;
  min-height: 440px;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid var(--jjs-nickel);
}

article + article {
  border-top: 1px solid var(--jjs-nickel);
}

article > div:first-child {
  padding: 32px var(--jjs-content-x);
}

.kicker {
  margin: 0 0 14px;
  color: var(--jjs-yellow);
  font-size: 13px;
  font-weight: 800;
}

h2 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(40px, 5.8vw, 62px);
  line-height: 1;
}

p {
  max-width: 540px;
  margin: 18px 0 0;
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.7;
}

.panel {
  min-height: 210px;
  border-top: 1px solid var(--jjs-nickel);
  background: var(--jjs-panel);
}

.panel--terminal {
  display: grid;
  align-content: center;
  gap: 10px;
  padding: 26px;
  color: var(--jjs-yellow);
  font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  font-size: 14px;
}

.panel--terminal span {
  display: block;
  width: fit-content;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 245, 0.12);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.24);
}

.panel--rings {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.panel--rings span {
  position: absolute;
  width: calc(80px + var(--i, 0) * 74px);
  aspect-ratio: 1;
  border: 1px solid rgba(247, 223, 30, 0.42);
  border-radius: 999px;
}

.panel--rings span:nth-child(1) {
  --i: 1;
}

.panel--rings span:nth-child(2) {
  --i: 2;
  border-color: rgba(65, 209, 255, 0.42);
}

.panel--rings span:nth-child(3) {
  --i: 3;
  border-color: rgba(189, 52, 254, 0.42);
}

.panel--grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1px;
  background: var(--jjs-nickel);
}

.panel--grid span {
  min-height: 54px;
  background:
    radial-gradient(circle at 50% 50%, rgba(247, 223, 30, 0.32), transparent 34%),
    var(--jjs-panel);
}

.panel--map {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 22% 48%, rgba(247, 223, 30, 0.2), transparent 20%),
    radial-gradient(circle at 70% 50%, rgba(65, 209, 255, 0.18), transparent 24%),
    var(--jjs-panel);
}

.dot,
.route {
  position: absolute;
  display: block;
}

.dot {
  width: 18px;
  height: 18px;
  border: 2px solid var(--jjs-black);
  border-radius: 999px;
  background: var(--jjs-yellow);
  box-shadow: 0 0 0 8px rgba(247, 223, 30, 0.15);
}

.dot-a {
  top: 32%;
  left: 22%;
}

.dot-b {
  top: 44%;
  left: 48%;
  background: var(--jjs-blue);
}

.dot-c {
  right: 22%;
  bottom: 30%;
  background: var(--jjs-purple);
}

.dot-d {
  left: 34%;
  bottom: 24%;
  background: var(--jjs-green);
}

.route {
  height: 2px;
  background: rgba(255, 255, 245, 0.48);
  transform-origin: left center;
}

.route-a {
  top: 38%;
  left: 25%;
  width: 28%;
  transform: rotate(16deg);
}

.route-b {
  right: 23%;
  bottom: 35%;
  width: 36%;
  transform: rotate(166deg);
}

@media (min-width: 960px) {
  .jjs-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  article:nth-child(odd) {
    border-right: 1px solid var(--jjs-nickel);
  }

  article:nth-child(2) {
    border-top: 1px solid var(--jjs-nickel);
  }

  article > div:first-child {
    padding-block: 40px;
  }
}
</style>
