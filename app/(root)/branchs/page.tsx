'use client';
import React from 'react';
import { BranchFoods, BranchHeroSection, BranchInformation, BranchReviews } from '@/app/ui/branchs';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 pb-6'>
      <BranchHeroSection />
      <BranchFoods />
      <BranchInformation />
      <BranchReviews />
    </div>
  );
};
export default Home;
