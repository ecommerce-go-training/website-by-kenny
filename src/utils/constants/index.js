const TIME = {
  ONE_SECOND: 1000,
  ONE_MINUTE: 60 * 1000,
  ONE_HOUR  : 60 * 60 * 1000,
};

const StorageKey = {
  accessToken: '@auth:accessToken',
};

const ValidApiStatus = [200, 201, 202, 203, 204];

export { StorageKey, TIME, ValidApiStatus };
