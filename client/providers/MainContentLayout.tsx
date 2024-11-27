"use client";
import { useUserContext } from '@/context/userContext';
import React from 'react'

interface MainContextLayoutProps { 
  children: React.ReactNode;
}

function MainContentLayout({ children }: MainContextLayoutProps) {
  const userId = useUserContext().user._id;
  return (
    <main className={`${userId ? 'pr-[20rem]' : ''} pb-[1.5rem] flex h-full`}>
      {children}
    </main>
  )
}

export default MainContentLayout
