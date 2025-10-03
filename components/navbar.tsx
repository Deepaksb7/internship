"use client"
import { useSession, signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

const Navbar = () => {

    const { data: session } = useSession()
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    const isDashboard = pathname === "/dashboard"
    const label = isDashboard ? "Profile" : "Dashboard"
    const href = isDashboard ? "/profile" : "/dashboard"
    const isLoginPage = pathname === "/login"

    useEffect(() => {
        setMounted(true)
    }, [])

    const user = session?.user
    if (!mounted) return null

    const handleSignout=async ()=>{
        toast.success("Logged out successfully!");
        await signOut({ callbackUrl: "/login" })
    }

    return (
        <nav className='p-3 md:p-4 shadow-md'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <a className='text-xl font-bold mb-4 md:mb-0' href="#">Task Master</a>
                {
                    session && !isLoginPage ? (
                    <>
                            <span className='mr-4'>Welcome, {user?.name || user?.email}</span>
                            <div className='flex gap-5'>
                            <Link href={href} ><Button className='cursor-pointer'>{label}</Button></Link>
                            <Button className='w-full md:w-auto cursor-pointer' onClick={handleSignout}>Logout</Button>
                            </div>
                        </>
                    ) : !session && !isLoginPage ? (
                        (<Link href='/login'>
                            <Button className='w-full md:w-auto cursor-pointer'>Login</Button>
                        </Link> ) 
                    ) : null
                } 
            </div>
        </nav>
    )
}

export default Navbar
