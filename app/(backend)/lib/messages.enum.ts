export enum ResponseSuccessMessages {
  Ok = 'موفق',
  CreateNewBranch = 'شعبه جدید با موفقیت ساخته شد.',
  GetAllBranch = 'درخواست دریافت تمامی شعبه ها با موفقیت ثبت شد.',
  FindBranch = 'شعبه موردنظر پیدا شد.',
  DeleteBranch = 'درخواست دریافت تمامی شعبه ها با موفقیت ثبت شد.',
}

export enum ResponseErrorMessages {
  Error = 'خطا',
  Any = 'خطای نامشخص',
  MongooseValidation = 'خطا در اعتبار سنجی Mongoose',
  ZodValidation = 'خطا در اعتبار سنجی Zod',
}

export type ResponseMessages = ResponseSuccessMessages | ResponseErrorMessages;
