<template>
  <div id="app">
        <header>
            <!-- 视图名称-->
          <router-view name="header"></router-view>
        </header>
          <main>
              <router-view></router-view>
          </main>
          <footer>
              <router-view name="footer"></router-view>
          </footer>

  </div>
</template>

<style lang="less">

@font-face {
  font-family: 'iconfont';  /* Project id 3268566 */
  src: url('https://at.alicdn.com/t/font_3268566_x0tq3eswvwn.woff2?t=1648024049619') format('woff2'),
       url('https://at.alicdn.com/t/font_3268566_x0tq3eswvwn.woff?t=1648024049619') format('woff'),
       url('https://at.alicdn.com/t/font_3268566_x0tq3eswvwn.ttf?t=1648024049619') format('truetype');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
