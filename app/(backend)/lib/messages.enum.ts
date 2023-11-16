export enum ResponseSuccessMessages {
  Ok = 'موفق',
  CreateNewBranch = 'شعبه جدید با موفقیت ساخته شد.',
  UpdateBranchById = 'شعبه مورد نظر با موفقیت به روزرسانی شد.',
  GetAllBranch = 'درخواست دریافت تمامی شعبه ها با موفقیت ثبت شد.',
  FindBranch = 'شعبه موردنظر پیدا شد.',
  NotFoundBranch = 'شعبه موردنظر پیدا نشد.',
  DeleteBranch = 'شعبه مورد نظر حذف شد.',
  CreateNewApiKey = 'Api Key جدید ساخته شد',
  DeleteApiKey = 'Api Key حذف شد.',
  FindApiKey = 'Api Key دریافت شد.',
  CreateNewFood = 'غذای جدید با موفقیت ساخته شد.',
  GetAllFood = 'درخواست دریافت تمامی غذا ها با موفقیت ثبت شد.',
  NotFoundFood = 'غذای موردنظر پیدا نشد.',
  UpdateFoodById = 'غذا مورد نظر با موفقیت به روزرسانی شد.',
  DeleteFood = 'غذا مورد نظر حذف شد.',
  FindFood = 'غذا موردنظر پیدا شد.',
}

export enum ResponseErrorMessages {
  Error = 'خطا',
  Any = 'خطای نامشخص',
  MongooseValidation = 'خطا در اعتبار سنجی Mongoose',
  ZodValidation = 'خطا در اعتبار سنجی Zod',
  APIKeyIsNotAvailable = 'API Key موجود نیست',
  APIKeyIsNotInValid = 'API Key معتبر نیست',
  ApiKeyExpired = 'تاریخ انقضای این Api Key به اتمام رسیده است.',
  OneOrMoreBranchesNotFound = 'یک یا چند شعبه پیدا نشد',
}

export type ResponseMessages = ResponseSuccessMessages | ResponseErrorMessages;
