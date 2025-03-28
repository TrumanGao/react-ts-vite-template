/**
 * Only used in development and testing environments
 */
export const getMock = async (mode: ModeType) => {
  let mock: Mock | undefined;
  try {
    switch (mode) {
      case 'DEVELOPMENT':
        if (typeof __DEVELOPER__ !== 'undefined') {
          mock = (await import(`@/mock/${__DEVELOPER__}.ts`)).mock;
        }
        break;
      case 'TESTING':
        mock = (await import('@/mock/default.ts')).mock;
        break;
      default:
        break;
    }
  } catch (error) {
    console.error('Error loading mock data: ', error);
  }

  return mock;
};
