import jwt from 'jsonwebtoken';
import { Config, ResponseMessages } from '@BackEnd/lib';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

type TokenVerifyReturnTrue<TokenDecodeType> = {
  isValid: true;
  errorMessage: null;
  decoded: TokenDecodeType;
};
type TokenVerifyReturnFalse<TokenDecodeType> = {
  isValid: false;
  errorMessage: ResponseMessages;
  decoded: TokenDecodeType | null;
};

export type TokenVerifyReturn<TokenDecodeType = null> =
  | TokenVerifyReturnTrue<TokenDecodeType>
  | TokenVerifyReturnFalse<TokenDecodeType>;

type TokenCreateData = string | Buffer | object;

export class Token {
  /**
   *
   * @param {string} token
   * @constructor
   */
  static Verify<TokenDecodeType>(token: string | null): TokenVerifyReturn<TokenDecodeType> {
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
          decoded: decoded as TokenDecodeType,
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
        path: '/',
        expires: Config.TOKEN.ACCESS_TOKEN.EXPIRE,
        maxAge: Config.TOKEN.ACCESS_TOKEN.MAX_AGE,
        httpOnly: true,
        secure: true,
      };
    } else return undefined;
  }
}
