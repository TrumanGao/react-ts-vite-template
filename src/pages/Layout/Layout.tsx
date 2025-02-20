import { Outlet } from 'react-router-dom';
import { useSize } from '@/hooks/useSize';
import styles from './Layout.module.less';

export function Component() {
  useSize();

  return (
    <div className={styles['layout-container']}>
      <div className={styles['layout-main']}>
        <Outlet />
      </div>
    </div>
  );
}
Component.displayName = 'Layout';
