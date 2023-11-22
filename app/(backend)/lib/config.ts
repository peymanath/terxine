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
  readonly OTP: {
    readonly LENGTH: number;
    readonly DURATION: number;
  };
  readonly JWT: {
    readonly JWT_PRIVATE_KEY: string;
    readonly JWT_PUBLIC_KEY: string;
    readonly ALGORITHM: Algorithm;
    readonly EXPIRE_IN: string;
    readonly AUDIENCE: string;
  };
  readonly BCRYPT: {
    readonly SALT_ROUNDS: 10;
  };
};

export const Config: Config = {
  OTP: {
    LENGTH: 6,
    DURATION: 300000, //ms
  },
  JWT: {
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'),
    ALGORITHM: 'RS256',
    EXPIRE_IN: '2h',
    AUDIENCE: 'Terxine | Peyman Naderi | peymanath.ir',
  },
  BCRYPT: {
    SALT_ROUNDS: 10,
  },
};
Object.freeze(Config);
