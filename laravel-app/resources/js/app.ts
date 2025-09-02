import './bootstrap';                       // Laravel Breeze などの初期設定
import '../css/app.css';                    // カスタム CSS
import 'bootstrap';                         // Bootstrap JS（モーダルやドロップダウン用）
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { createApp } from 'vue';
import App from '../views/App.vue';         // メイン Vue コンポーネント

createApp(App).mount("#app");              // Vue アプリを #app にマウント
