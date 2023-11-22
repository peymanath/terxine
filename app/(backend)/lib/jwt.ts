import jwt from 'jsonwebtoken';

import { Config, ResponseMessages } from '@BackEnd/lib';

type TokenVerifyReturn<T> = TokenVerifyReturnTrue<T> | TokenVerifyReturnFalse<T>;

type TokenVerifyReturnTrue<T> = {
  isValid: true;
  errorMessage: null;
  decoded: any;
};
type TokenVerifyReturnFalse<T> = {
  isValid: false;
  errorMessage: ResponseMessages;
  decoded: null;
};

type TokenCreateData = string | Buffer | object;

export class Token {
  /**
   *
   * @param {string} token
   * @constructor
   */
  static Verify<T>(token: string | null): TokenVerifyReturn<T> {
    if (!token) {
      return {
        isValid: false,
        errorMessage: ResponseMessages.TokenIsNotAvailable,
        decoded: null,
      };
    }
    jwt.verify(token, Config.JWT.JWT_PUBLIC_KEY, (err, decoded) => {
      if (err) {
        return {
          isValid: false,
          errorMessage: ResponseMessages.TokenIsNotInValid,
          decoded: null,
        };
      } else {
        return {
          isValid: true,
          errorMessage: null,
          decoded: decoded,
        };
      }
    });
    return {
      isValid: false,
      errorMessage: ResponseMessages.TokenIsNotAvailable,
      decoded: null,
    };
  }

  static async Create(data: TokenCreateData): Promise<string | undefined> {
    try {
      return jwt.sign(data, Config.JWT.JWT_PRIVATE_KEY, {
        algorithm: Config.JWT.ALGORITHM,
        expiresIn: Config.JWT.EXPIRE_IN,
        audience: Config.JWT.AUDIENCE,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
