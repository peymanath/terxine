export function trimBranchId(id: string): number {
  const trimId = id.replace('tb-', '').trim();
  const numberId: number = Number(trimId);

  if (isNaN(numberId)) {
    throw new Error('Not a Number!');
  }
  return numberId;
}
