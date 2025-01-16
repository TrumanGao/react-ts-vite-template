import styles from './UserManagement.module.less';

export function Component() {
  return (
    <div className={styles['user-management-container']}>
      <div className={styles['user-management-header']}></div>
      <div className={styles['user-management-main']}>
        <div className={styles['user-management-content']}>
          {'UserManagement'}
        </div>
      </div>
    </div>
  );
}
Component.displayName = 'UserManagement';
