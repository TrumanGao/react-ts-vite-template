export const getMock = async (): Promise<Mock | null> => {
  if (!__DEVELOPER__) {
    console.error('未配置 __DEVELOPER__');
    return null;
  }

  const mock = (await import(`../mock/${__DEVELOPER__}.ts`)).mock as Mock;

  return mock;
};
