import { Outlet } from 'react-router-dom';
import styles from './Layout.module.less';

export function Component() {
  return (
    <div className={styles['layout-container']}>
      <div className={styles['layout-header']}></div>
      <div className={styles['layout-main']}>
        <div className={styles['layout-sider']}></div>
        <div className={styles['layout-content']}>
          <Outlet />
        </div>
      </div>
      <div className={styles['layout-footer']}></div>
    </div>
  );
}
Component.displayName = 'Layout';
