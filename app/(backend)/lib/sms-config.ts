import { SmsOtpSendOption, SmsOtpSendOptionResponse } from '@BackEnd/types/sms';
import crypto from 'crypto';

class SmsConfigs {
  /**
   * This api key is placed in apikey request header
   * @type {string}
   * @protected
   */
  protected readonly apikey: string;

  /**
   * This api key is placed in url request
   * @type {string}
   * @protected
   */
  protected readonly baseUrl: string;

  /**
   * This api key is placed in url request
   * @type {string}
   * @protected
   */
  protected readonly version: string;

  /**
   * This api key is placed in url request
   * @type {number}
   * @protected
   */
  private catchOtp: number | undefined;

  /**
   * Sms Config
   * @param {string} version - the utilize version api
   */
  constructor(version?: string) {
    // Initial Api Key
    if (!process.env.GHASEDACK_API_KEY) {
      throw new Error('Please add GHASEDACK_API_KEY to .env');
    } else {
      this.apikey = process.env.GHASEDACK_API_KEY;
    }

    // Initial Base Url
    if (!process.env.GHASEDACK_BASE_URL) {
      throw new Error('Please add GHASEDACK_BASE_URL to .env');
    } else {
      this.baseUrl = this.trimmedString(process.env.GHASEDACK_BASE_URL);
    }

    // Initial Version Api
    this.version = version || 'v2';
  }

  public OtpGenerator(num: 4 | 6 | 8): number {
    const maxNum: Record<typeof num, number> = {
      '4': 9999,
      '6': 999999,
      '8': 99999999,
    };
    const minNum: Record<typeof num, number> = {
      '4': 1000,
      '6': 100000,
      '8': 10000000,
    };

    if (!this.catchOtp) {
      this.catchOtp = crypto.randomInt(minNum[num], maxNum[num]);
    }

    return this.catchOtp;
  }

  /**
   * This function shortens and arranges the expressions
   * @param {string} str - A string param
   * @private
   * @return {string} - string return
   */
  private trimmedString(str: string): string {
    return str
      .trim()
      .replace(/^\/+|\/+$/g, '')
      .trim();
  }
}

export class SmsService extends SmsConfigs {
  /**
   * @type {HeadersInit}
   * @protected
   */
  protected readonly headers: HeadersInit;

  /**
   * @type {string}
   * @protected
   */
  protected readonly OtpSendUrl: string;

  constructor(version?: string) {
    super(version);
    this.headers = {
      'cache-control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
      charset: 'utf-8',
      apikey: this.apikey,
    };
    this.OtpSendUrl = `${this.baseUrl}/${this.version}/verification/send/simple`;
  }

  async OtpSend(option: SmsOtpSendOption): Promise<SmsOtpSendOptionResponse> {
    return await fetch(this.OtpSendUrl, {
      method: 'POST',
      headers: this.headers,
      body: new URLSearchParams({
        ...option,
      }),
    }).then(res => res.json());
  }
}
