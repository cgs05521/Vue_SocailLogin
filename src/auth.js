import axios from 'axios';
import { ref } from 'vue';

const isAuthenticated = ref(false);

export default {
  isAuthenticated,
  async authenticate() {
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '703058409531-5bmdv3bkh4fl4h5868olld18rj30pfap.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:8080/auth/callback'; // 例如：http://localhost:8080/login
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    const authWindow = window.open(url, '_blank');

    window.addEventListener('message', async (event) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      if (event.data.token) {
        isAuthenticated.value = true;
        authWindow.close();

        // 您可以使用令牌向后端验证和检索用户信息
        const token = event.data.token;
        const userInfo = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
        console.log(userInfo.data);
      }
    });
  },
};
