import bcrypt from 'bcryptjs';

export async function passHash(pass: string): Promise<string> {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
}

export async function passCheck(pass: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(pass, hash);
}
