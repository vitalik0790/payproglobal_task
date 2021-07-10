<template>
  <header class="header">
    <div class="header-container">
      <img
        class="page-logo"
        src="https://store.payproglobal.com/Content/img/upd/logo.png"
        alt="logo"
      />
      <div class="navigation">
        <div class="wrapper">
          <nav>
            <div class="first">
              <div class="round" id="round">1</div>
              <div class="products">Продукты</div>
            </div>
            <hr />
            <div class="second">
              <div class="round" id="round">2</div>
              <div class="products">Оформить заказ</div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

 <script>
export default {};
</script>

<style scoped>
div .active {
  background: #1473e6;
  color: #fff;
  border: none;
}
hr {
  position: absolute;
  width: 122px;
  top: 5px;
  left: 64px;
  border: none;
  border-top: 2px dotted #ddd;
}
.products {
  text-align: center;
}

.navigation {
  padding-top: 15px;
}

.first {
  margin-right: 50px;
}

.second {
}

.header-container {
  background: #fff;
  width: 100%;
  padding: 10px 15px;
  max-width: 100%;
  display: flex;
}

img {
  display: block;
  padding: 23px 0;
}

.wrapper {
  margin: 0 auto;
  width: 250px;
}

nav {
  display: flex;
  position: relative;
}

.round {
  font-size: 16px;
  font-weight: 400;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  line-height: 26px;
  text-align: center;
  color: #999;
  border: 1px solid #d6d6d6;
  margin: 0 auto;
}
</style>