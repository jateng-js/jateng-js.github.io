<template>
  <section class="jjs-wrapper jjs-hero jjs-ticks">
    <div class="jjs-hero__copy">
      <p class="jjs-hero__eyebrow">Central Java JavaScript Community</p>
      <h1>Jateng JS</h1>
      <p>
        A home for JavaScript developers across Central Java to meet, learn,
        share work, and build stronger local tech circles.
      </p>
      <div class="jjs-hero__actions">
        <a class="jjs-button jjs-button--primary" href="mailto:hello@jateng.js.org">
          Join the Community
        </a>
        <a class="jjs-button" href="#programs">Explore Programs</a>
      </div>
    </div>

    <div class="jjs-hero__visual" aria-label="Jateng JS code panel">
      <div class="jjs-logo-orbit">
        <img src="/logo.svg" alt="Jateng JS" />
      </div>
      <div class="jjs-code-window" aria-hidden="true">
        <div class="jjs-code-window__bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <pre><code>const community = "jateng-js"

meetup.on("share", () => {
  learn()
  buildTogether()
})

export {
  semarang,
  solo,
  purwokerto
}</code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jjs-hero {
  display: grid;
  min-height: calc(100vh - var(--vp-nav-height));
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;
  border-bottom: 1px solid var(--jjs-nickel);
}

.jjs-hero__copy {
  display: flex;
  min-height: 560px;
  flex-direction: column;
  justify-content: center;
  padding: 56px var(--jjs-content-x);
}

.jjs-hero__eyebrow {
  margin: 0 0 18px;
  color: var(--jjs-yellow);
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
}

h1 {
  max-width: 8.5ch;
  margin: 0;
  background: linear-gradient(120deg, var(--jjs-yellow) 20%, var(--jjs-blue) 52%, var(--jjs-purple) 82%);
  background-clip: text;
  color: transparent;
  font-size: clamp(64px, 13vw, 132px);
  line-height: 0.9;
}

p {
  max-width: 660px;
  margin: 28px 0 0;
  color: var(--vp-c-text-2);
  font-size: 20px;
  line-height: 1.7;
}

.jjs-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.jjs-hero__visual {
  position: relative;
  display: flex;
  min-height: 460px;
  align-items: center;
  justify-content: center;
  padding: 36px var(--jjs-content-x) 64px;
  border-top: 1px solid var(--jjs-nickel);
}

.jjs-hero__visual::before {
  position: absolute;
  inset: 14% 12%;
  content: "";
  background: linear-gradient(135deg, var(--jjs-yellow), var(--jjs-blue), var(--jjs-purple));
  filter: blur(82px);
  opacity: 0.46;
}

.jjs-logo-orbit {
  position: absolute;
  top: 34px;
  right: clamp(24px, 8vw, 78px);
  z-index: 2;
  display: grid;
  width: clamp(96px, 18vw, 156px);
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgba(255, 255, 245, 0.2);
  border-radius: 36px;
  background: rgba(15, 15, 18, 0.76);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
}

.jjs-logo-orbit img {
  width: 72%;
}

.jjs-code-window {
  position: relative;
  z-index: 1;
  width: min(100%, 560px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 245, 0.16);
  border-radius: 16px;
  background: rgba(15, 15, 18, 0.86);
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.42);
}

.jjs-code-window__bar {
  display: flex;
  gap: 8px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 245, 0.12);
}

.jjs-code-window__bar span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--jjs-yellow);
}

.jjs-code-window__bar span:nth-child(2) {
  background: var(--jjs-blue);
}

.jjs-code-window__bar span:nth-child(3) {
  background: var(--jjs-purple);
}

pre {
  margin: 0;
  padding: 24px;
  color: rgba(255, 255, 245, 0.86);
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.7;
}

@media (min-width: 960px) {
  .jjs-hero {
    grid-template-columns: minmax(0, 0.98fr) minmax(380px, 0.82fr);
  }

  .jjs-hero__copy {
    padding-block: 80px;
  }

  .jjs-hero__visual {
    border-top: 0;
    border-left: 1px solid var(--jjs-nickel);
  }
}
</style>
