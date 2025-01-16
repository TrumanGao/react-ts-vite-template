import styles from './HomePage.module.less';

export function Component() {
  return (
    <div className={styles['home-container']}>
      <div className={styles['home-header']}></div>
      <div className={styles['home-main']}>
        <div className={styles['home-content']}>{'HomePage'}</div>
      </div>
    </div>
  );
}
Component.displayName = 'HomePage';
