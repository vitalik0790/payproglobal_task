<template>
  <header class="header">
    <div class="header-container">
      <img
        class="page-logo"
        src="https://store.payproglobal.com/Content/img/upd/logo.png"
        alt="logo"
      />
      <div class="navigation">
        <nav>
          <div class="round"></div>
          <div class="round"></div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  background: #fff;
  width: 100%;
  padding: 10px 15px;
  max-width: 100%;
  display: flex;
}

img {
  display: block;
  padding: 12px 0;
}

nav {
  display: flex;
  margin: 0 auto;
}

.round {
  font-size: 16px;
  font-weight: 400;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  line-height: 26px;
  text-align: center;
}
</style>