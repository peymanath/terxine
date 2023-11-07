import React from 'react';
import { BranchFoods, BranchHeroSection, BranchInformation, BranchReviews } from '@/app/ui/branchs';

type BranchProps = {
  params: {
    branchId: string;
    slug: string;
  };
};

const Branch: React.FC<BranchProps> = async ({ params: { branchId, slug } }) => {
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
