import jwt from 'jsonwebtoken';
import { Config, ResponseMessages } from '@BackEnd/lib';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

type TokenVerifyReturn = TokenVerifyReturnTrue | TokenVerifyReturnFalse;

type TokenVerifyReturnTrue = {
  isValid: true;
  errorMessage: null;
  decoded: any;
};
type TokenVerifyReturnFalse = {
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
  static Verify(token: string | null): TokenVerifyReturn {
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

  /**
   *
   * @param data
   * @constructor
   */
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

  static async CreateAndSetCookie(data: TokenCreateData): Promise<ResponseCookie | undefined> {
    const token = await Token.Create(data);
    if (token) {
      return {
        sameSite: 'lax',
        priority: 'high',
        name: '_terxineAccessToken',
        value: token,
        domain:
          process.env.NODE_ENV === 'development'
            ? Config.TOKEN.ACCESS_TOKEN.DEV_DOMAIN
            : Config.TOKEN.ACCESS_TOKEN.PRO_DOMAIN,
        path:
          process.env.NODE_ENV === 'development'
            ? Config.TOKEN.ACCESS_TOKEN.DEV_DOMAIN
            : Config.TOKEN.ACCESS_TOKEN.PRO_DOMAIN,
        expires: Config.TOKEN.ACCESS_TOKEN.EXPIRE,
        maxAge: Config.TOKEN.ACCESS_TOKEN.MAX_AGE,
        httpOnly: true,
        secure: true,
      };
    } else return undefined;
  }
}
