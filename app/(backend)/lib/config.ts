'use strict';

import ms from 'ms';

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

type SmsTemplates = 'SmsOtp';
type TOKENCOOKIE = {
  DEV_DOMAIN: string;
  PRO_DOMAIN: string;
  EXPIRE: number | Date;
  MAX_AGE: number;
};

type Config = {
  readonly OTP: {
    readonly LENGTH: 4 | 6 | 8;
    readonly DURATION: number;
    readonly TEMPLATE: Record<SmsTemplates, string>;
  };
  readonly JWT: {
    readonly JWT_PRIVATE_KEY: string;
    readonly JWT_PUBLIC_KEY: string;
    readonly ALGORITHM: Algorithm;
    readonly EXPIRE_IN: string;
    readonly AUDIENCE: string;
  };
  readonly TOKEN: { ACCESS_TOKEN: TOKENCOOKIE };
  readonly BCRYPT: {
    readonly SALT_ROUNDS: 10;
  };
};

export const Config: Config = {
  OTP: {
    LENGTH: 6,
    DURATION: 300000, //ms
    TEMPLATE: {
      SmsOtp: 'DevelopTerxineResturant',
    },
  },
  JWT: {
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'),
    ALGORITHM: 'RS256',
    EXPIRE_IN: '2h',
    AUDIENCE: 'Terxine | Peyman Naderi | peymanath.ir',
  },
  TOKEN: {
    ACCESS_TOKEN: {
      DEV_DOMAIN: 'localhost',
      PRO_DOMAIN: 'peymanath.ir',
      EXPIRE: ms('1 d'),
      MAX_AGE: ms('1 d'),
    },
  },
  BCRYPT: {
    SALT_ROUNDS: 10,
  },
};
Object.freeze(Config);
