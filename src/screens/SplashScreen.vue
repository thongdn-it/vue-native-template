<template>
  <view class="container">
    <text>This is the Splash screen</text>
  </view>
</template>

<script>
import { NavigatorName } from '../navigators';
export default {
  created() {
    setTimeout(() => {
      this.navigation.navigate(NavigatorName.SignIn);
    }, 1000);
  },
  props: {
    navigation: { type: Object },
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