<template>
  <div></div>
  <dialog open>
    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <menu>
      <slot name="actions"></slot>
    </menu>
  </dialog>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 15%;
  width: 70%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #1473e6;
  color: white;
  width: 100%;
  padding: 10px 20px;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 15rem);
    width: 30rem;
  }
}
</style>