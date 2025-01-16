import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MODE } from './constants/config.ts';
import './index.css';
import App from './App.tsx';

if (MODE !== 'PRODUCTION') {
  import('vconsole')
    .then(({ default: VConsole }) => {
      new VConsole();
      console.log('VConsole 加载成功', __DEVELOPER__);
    })
    .catch((error) => console.error('VConsole 加载失败:', error));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
