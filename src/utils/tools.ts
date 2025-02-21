export const getMock = async (): Promise<Mock | null> => {
  if (!__DEVELOPER__) {
    console.error('未配置 __DEVELOPER__');
    return null;
  }

  try {
    return (await import(`../mock/${__DEVELOPER__}.ts`)).mock as Mock;
  } catch (error) {
    console.error(error);
    return null;
  }
};
