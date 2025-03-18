import { useSize } from '@/hooks/useSize';
import { useAppStore } from '@/states';
import styles from './HomePage.module.less';

export function Component() {
  const { containerSize } = useAppStore();
  useSize({
    useContainer: true,
  });

  return (
    <div
      className={styles['home-container']}
      style={{
        width: containerSize.width,
        height: containerSize.height,
      }}
    >
      <div className={styles['home-header']}></div>
      <div className={styles['home-main']}>
        <div className={styles['home-content']}>{'HomePage'}</div>
      </div>
    </div>
  );
}
Component.displayName = 'HomePage';
