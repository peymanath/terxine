export const toPersianNumber = (input: number): string => {
  if (typeof input !== 'number') {
    throw new Error('ورودی باید یک عدد باشد');
  }
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.toString().replace(/\d/g, match => persianDigits[parseInt(match)]);
};

export const formatPrice = (price: number): string => {
  if (typeof price !== 'number') {
    throw new Error('ورودی باید یک عدد باشد');
  }
  const priceStr = price.toString();
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const formattedPrice = priceStr
    .split('')
    .map(char => {
      if (persianDigits[+char]) {
        return persianDigits[+char];
      }
      return char;
    })
    .join('');
  const parts = formattedPrice
    .split('')
    .join('')
    .match(/.{1,3}/g);
  return parts ? parts.join(',') : formattedPrice;
};
