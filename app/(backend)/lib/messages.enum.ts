export enum ResponseSuccessMessages {
  Ok = 'موفق',
  CreateNewBranch = 'شعبه جدید با موفقیت ساخته شد.',
  UpdateBranchById = 'شعبه مورد نظر با موفقیت به روزرسانی شد.',
  GetAllBranch = 'درخواست دریافت تمامی شعبه ها با موفقیت ثبت شد.',
  FindBranch = 'شعبه موردنظر پیدا شد.',
  DeleteBranch = 'درخواست دریافت تمامی شعبه ها با موفقیت ثبت شد.',
  CreateNewApiKey = 'Api Key جدید ساخته شد',
  DeleteApiKey = 'Api Key حذف شد.',
}

export enum ResponseErrorMessages {
  Error = 'خطا',
  Any = 'خطای نامشخص',
  MongooseValidation = 'خطا در اعتبار سنجی Mongoose',
  ZodValidation = 'خطا در اعتبار سنجی Zod',
  APIKeyIsNotAvailable = 'API Key موجود نیست',
}

export type ResponseMessages = ResponseSuccessMessages | ResponseErrorMessages;
