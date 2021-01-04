<template>
  <view class="container">
    <text>This is the Sign In screen</text>
    <button title="Sign In" @press="onPressSignIn"></button>
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
    onPressSignIn() {
      this.navigation.navigate(NavigatorName.Main);
    },
    onPressSignUp() {
      this.navigation.navigate(NavigatorName.SignUp);
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