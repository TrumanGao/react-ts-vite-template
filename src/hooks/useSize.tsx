import { useEffect } from 'react';
import { throttle } from 'lodash';
import { EventManager, getDeviceType } from 'trumangao-utils';
import { useAppStore } from '@/states';
const eventManager = new EventManager();

/**
 * @param options
 * @param options.throttleTime 节流时间，默认500ms
 */
export function useSize(options?: { throttleTime?: number }) {
  const {
    screenOrientation,
    updateScreenOrientation,
    windowSize,
    updateWindowSize,
  } = useAppStore();

  useEffect(() => {
    // 1. 处理屏幕尺寸变化
    const throttledResize = throttle(() => {
      console.log('useSize - resize事件: ', {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
      updateWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
      document.documentElement.style.setProperty(
        '--window-height',
        `${window.innerHeight}px`,
      );
    }, options?.throttleTime || 500);
    eventManager.addEventListener(
      'resize',
      () => throttledResize(),
      'window_resize_handleResize',
      window,
    );

    // 2. 处理屏幕方向变化
    eventManager.addEventListener(
      'change',
      () => {
        console.log('useSize - change事件: ', screen.orientation);
        updateScreenOrientation(screen.orientation);
      },
      'window_change_handleChange',
      window,
    );
    eventManager.addEventListener(
      'orientationchange',
      () => {
        console.log('useSize - orientationchange事件: ', screen.orientation);
        updateScreenOrientation(screen.orientation);
      },
      'window_orientationchange_handleOrientationchange',
      window,
    );

    return () => {
      eventManager.removeEventListener(
        'resize',
        'window_resize_handleResize',
        window,
      );
      eventManager.removeEventListener(
        'change',
        'window_change_handleChange',
        window,
      );
      eventManager.removeEventListener(
        'orientationchange',
        'window_orientationchange_handleOrientationchange',
        window,
      );
    };
  }, []);

  useEffect(() => {
    const _deviceType = getDeviceType();
    console.log('useSize - 检测设备类型 deviceType: ', _deviceType);
    // iphone 6 375 * 667
    // ipad mini 1024 * 768
    if (windowSize.innerWidth / windowSize.innerHeight > 1.33) {
      // 横屏
      document.documentElement.style.fontSize =
        _deviceType === 'mobile'
          ? `${(windowSize.innerHeight * 12) / 375}px`
          : `${(windowSize.innerHeight * 16) / 768}px`;
    } else {
      // 竖屏
      document.documentElement.style.fontSize =
        _deviceType === 'mobile'
          ? `${(windowSize.innerWidth * 12) / 667}px`
          : `${(windowSize.innerWidth * 16) / 1024}px`;
    }
  }, [windowSize, screenOrientation]);
}
