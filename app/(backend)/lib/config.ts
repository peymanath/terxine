'use strict';

type Algorithm =
  | 'ES384'
  | 'ES512'
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'ES256';

type Config = {
  OTP: {
    LENGTH: number;
    DURATION: number; //ms
  };
  JWT: {
    SECRET: string;
    ALGORITHM: Algorithm;
  };
  BCRYPT: {
    SALT_ROUNDS: 10;
  };
};

export const Config: Config = {
  OTP: {
    LENGTH: 6,
    DURATION: 300000, //ms
  },
  JWT: {
    SECRET: process.env.JWT_PRIVATE_KEY,
    ALGORITHM: 'HS512',
  },
  BCRYPT: {
    SALT_ROUNDS: 10,
  },
};
