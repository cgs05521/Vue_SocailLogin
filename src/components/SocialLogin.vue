<template>
  <div>
    <button @click="googleLogin">Google 登錄</button>
  </div>
</template>

<script>
import auth from '@/auth';

export default {
  setup() {
    const googleLogin = async () => {
      await auth.authenticate();
    };

    return {
      googleLogin,
    };
  },
};
</script>
