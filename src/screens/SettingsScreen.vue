<template>
  <view class="container">
    <text>This is the Settings screen</text>
    <button title="Sign Out" @press="onPressSignOut"></button>
  </view>
</template>

<script>
import { NavigatorName } from '../navigators';
export default {
  props: {
    navigation: { type: Object },
  },
  methods: {
    onPressSignOut() {
      this.navigation.navigate(NavigatorName.SignIn);
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