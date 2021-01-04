<template>
  <view class="container">
    <text>This is the Home screen</text>
    <button title="Go to the Details screen" @press="changeRoute"></button>
  </view>
</template>

<script>
import { NavigatorName } from '../navigators';
export default {
  props: {
    navigation: { type: Object },
  },
  methods: {
    changeRoute() {
      this.navigation.navigate(NavigatorName.Details);
    },
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>