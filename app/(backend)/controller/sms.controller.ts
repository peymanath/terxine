import { NextResponse } from 'next/server';
import { ApiHandler, ResponseMessages, SmsService } from '@BackEnd/lib';
import {
  ControllerBaseRequest,
  type SmsControllerType,
  SmsOtpSendOptionResponse,
} from '@BackEnd/types';
import { zfd } from 'zod-form-data';
import * as z from 'zod';

export const SmsController: SmsControllerType = {
  sendOtp: SmsControllerSendOtp,
};
// Schema Data Model
const schema = zfd.formData(
  z.object({
    template: z.string(),
    receptor: z.string(),
    checkid: z.string(),
    type: z.string(),
    param1: z.string(),
  })
);

// Food Creator
async function SmsControllerSendOtp(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<SmsOtpSendOptionResponse>(
    async body => {
      const smsService = new SmsService();
      const result = await smsService.OtpSend(body);
      if (result.result.code === 200) {
        return {
          data: result,
          message: ResponseMessages.Ok,
        };
      } else {
        return {
          errors: [result.result.message],
          message: ResponseMessages.Error,
          status: result.result.code,
        };
      }
    },
    {
      req,
      schema: schema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}
