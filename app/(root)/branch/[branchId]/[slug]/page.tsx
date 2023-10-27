import React from 'react';
import { BranchFoods, BranchHeroSection, BranchInformation, BranchReviews } from '@/app/ui/branchs';
import type { BranchInterface, ResponseBranchInterface } from '@/app/types/services';
import { notFound } from 'next/navigation';
import { trimBranchId } from '@/app/lib/utils/trims';

type BranchProps = {
  params: {
    branchId: string;
    slug: string;
  };
};

async function getBranchById(id: number): Promise<BranchInterface> {
  const res = await fetch(`https://tarkhine-restaurant.iran.liara.run/api/branches/${id}`);
  const data: ResponseBranchInterface = await res.json();
  return data.data;
}

const Branch: React.FC<BranchProps> = async ({ params: { branchId, slug } }) => {
  if (!branchId && !slug) {
    notFound();
  }

  const branch = await getBranchById(trimBranchId(branchId));

  if (slug !== branch.name) {
    notFound();
  }

  return (
    <div className='flex flex-col gap-6 pb-6'>
      <BranchHeroSection />
      <BranchFoods />
      <BranchInformation />
      <BranchReviews />
    </div>
  );
};

export default Branch;
