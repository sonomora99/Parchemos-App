import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { loginApi, googleLoginApi, instagramLoginApi } from '../services/authApi';
import { saveToken } from '../../../services/storage';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

export default function useAuth() {
  const { login } = useContext(AuthContext);

  // 🔐 login normal
  const loginWithEmail = async (email, password) => {
    const res = await loginApi({ email, password });
    await saveToken(res.data.token);
    login(res.data.token);
  };

  // 🔵 Google
  const loginWithGoogle = async () => {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=TU_CLIENT_ID&redirect_uri=${redirectUri}&response_type=token&scope=profile email`;

    const result = await AuthSession.startAsync({ authUrl });

    if (result.type === 'success') {
      const accessToken = result.params.access_token;

      const res = await googleLoginApi(accessToken);

      await saveToken(res.data.token);
      login(res.data.token);
    }
  };

  // 📸 Instagram
  const loginWithInstagram = async () => {
    const url = 'http://192.168.1.10:8080/oauth2/authorize/instagram';

    const result = await WebBrowser.openAuthSessionAsync(url);

    if (result.type === 'success') {
      const token = result.url.split('token=')[1];

      await saveToken(token);
      login(token);
    }
  };

  return {
    loginWithEmail,
    loginWithGoogle,
    loginWithInstagram,
  };
}
