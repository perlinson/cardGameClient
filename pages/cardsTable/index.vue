<template>
  <div class="battle">
    <div class="battle-enemy">
      <div class="battle-enemy-hand" :z-depth="5"></div>
      <div class="battle-enemy-venue" :z-depth="5"></div>
    </div>
    <div class="battle-my">
      <div class="battle-my-venue" :z-depth="5"></div>
      <div class="battle-my-hand" :z-depth="5"></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//对战
.battle {
  width: 100vw;
  height: 100vh;
  // background-image: url("../img/home_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}
.battle-enemy {
  position: absolute;
  top: 0;
  bottom: 50%;
  left: 0;
  right: 0;
}

.battle-my {
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
}
.battle-enemy-hand {
  width: 600px;
  margin: 0 auto;
  position: absolute;
  height: 160px;
  top: 0;
  left: 0;
  right: 0;
}
.battle-enemy-venue {
  width: 900px;
  margin: auto;
  position: absolute;
  height: 220px;
  bottom: 10px;
  left: 0;
  right: 0;
}
.battle-my-venue {
  width: 900px;
  margin: auto;
  position: absolute;
  height: 220px;
  top: 10px;
  left: 0;
  right: 0;
}
.battle-my-hand {
  width: 600px;
  margin: auto;
  position: absolute;
  height: 160px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
