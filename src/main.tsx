import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { getDeviceType } from 'trumangao-utils';
import { MODE } from './constants/config.ts';
import './styles/base.less';
import './styles/vars.less';
import './styles/antd/index.less';
import App from './App.tsx';

if (MODE !== 'PRODUCTION' && getDeviceType() !== 'desktop') {
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
