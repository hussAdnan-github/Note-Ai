import { shadow } from '@/src/app/style/utile'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { ModeToggle } from './ui/darkModeToggle';
import LogoutButton from './LogoutButton';
import { getUser } from '@/src/auth/server';

export default async function Header() {
  const user = await getUser();
  return (
    <header className='relative flex h-24 w-full justify-between items-center bg-popover px-3 sm:px-8
    ' style={{
        boxShadow: shadow
      }}>
      <Link href={"/"} className='flex items-center gap-2'>
        <Image src={'/images/logo.jpeg'} height={60} width={60} alt='logo' className='rounded-full' priority />
        <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>webSite</h1>
      </Link>
      <div className='flex gap-4'>
        {user ? (
          <LogoutButton/>
        ) :
          <>
            <Button asChild>
              <Link href={'/sgin-up'} className='hidden sm:block'>Sign Up</Link>
            </Button>
            <Button asChild>
              <Link href={'/login'}>Login</Link>
            </Button>
          </>
        }
        <ModeToggle/>
      </div>
    </header>
  )
}
