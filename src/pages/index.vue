<template>
  <div class="IndexPage">
    <div class="content">
      <div class="icons">
        <img class="nuxt" src="@/assets/img/nuxt.svg" alt="nuxt" />
        <span class="between">&</span>
        <img class="lambda"
             src="@/assets/img/lambda.svg"
             alt='lambda'/>
      </div>
      <p class="text">Ragate inc. Nuxt Serverside Rendered.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:900',
        ref: 'stylesheet',
      },
    ],
  },
}
</script>

<style lang="postcss" scoped>
.IndexPage {
  height: 100vh;
  width: 100vw;
  background: -moz-linear-gradient(1.43% -1.51% -45deg, rgba(236, 108, 91, 1) 0%, rgba(15, 100, 160, 1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(236, 108, 91, 1) 0%, rgba(15, 100, 160, 1) 100%);
  background: -webkit-gradient(linear, 1.43% -1.51%, 98.57% 101.51%, color-stop(0, rgba(236, 108, 91, 1)), color-stop(1, rgba(15, 100, 160, 1)));
  background: -o-linear-gradient(-45deg, rgba(236, 108, 91, 1) 0%, rgba(15, 100, 160, 1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(236, 108, 91, 1) 0%, rgba(15, 100, 160, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#EC6C5B', endColorstr='#0F64A0' ,GradientType=0)";
  background: linear-gradient(135deg, rgba(236, 108, 91, 1) 0%, rgba(15, 100, 160, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EC6C5B', endColorstr='#0F64A0', GradientType=1);
}
.content {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.between {
  font-size: 4rem;
  padding: 0 50px;
}

.nuxt {
  height: 110px;
}

.lambda {
  height: 130px;
}

.text {
  font-weight: 100;
  font-size: 3rem;
}
</style>