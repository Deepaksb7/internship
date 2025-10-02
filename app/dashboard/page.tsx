"use client"
import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  const {data:session} = useSession()
  console.log(session)
  return (
    <div>
      dashboard
      {session?.user?.name}
      <Button onClick={() => signOut()}>logout</Button>
    </div>
  )
}

export default Dashboard
