const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;

const StorageKey = {
  accessToken: '@auth:accessToken',
};

const ValidApiStatus = [200, 201, 202, 203, 204];

export { ONE_HOUR, ONE_MINUTE, ONE_SECOND, StorageKey, ValidApiStatus };
