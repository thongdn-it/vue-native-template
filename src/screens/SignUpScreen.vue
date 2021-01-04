<template>
  <view class="container">
    <text>This is the Sign Up screen</text>
    <button title="Sign Up" @press="onPressSignUp"></button>
  </view>
</template>

<script>
import { NavigatorName } from '../navigators';

export default {
  props: {
    navigation: { type: Object },
  },
  methods: {
    onPressSignUp() {
      this.navigation.navigate(NavigatorName.Main);
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