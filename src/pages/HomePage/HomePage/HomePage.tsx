import { useEffect } from 'react';
import { useSize } from '@/hooks/useSize';
import { useMyMessage } from '@/hooks/useMyMessage';
import { useAppStore } from '@/states';
import { IconFont } from '@/components/IconFont/IconFont';
import styles from './HomePage.module.less';

export function Component() {
  const { windowSize, containerSize } = useAppStore();
  useSize({
    useContainer: true,
  });
  const {
    messageInstance,
    myMessage,
    myMessageDestroy,
    myMessageContextHolder,
  } = useMyMessage({
    top: windowSize.innerHeight * 0.3,
  });

  useEffect(() => {
    return () => {
      myMessageDestroy(messageInstance);
    };
  }, []);

  function handleWelcome() {
    myMessage({
      type: 'info',
      content: 'Welcome home!',
    });
  }

  return (
    <div
      className={styles['home-container']}
      style={{
        width: containerSize.width,
        height: containerSize.height,
      }}
    >
      {myMessageContextHolder()}
      <div className={styles['home-header']}></div>
      <div className={styles['home-main']}>
        <div className={styles['home-content']}>
          <div className={styles['home-welcome-btn']} onClick={handleWelcome}>
            欢迎
            <IconFont href="icon-check-circle" className={styles['btn-icon']} />
          </div>
        </div>
      </div>
    </div>
  );
}
Component.displayName = 'HomePage';
