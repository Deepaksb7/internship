"use client";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { User } from "lucide-react";
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function ProfileCard() {

  const { data: session, update } = useSession()
  const [name, setName] = useState<string>("")
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name)
    }
  }, [session])

  const handleUpdateClick = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    if (!name) return
    setLoading(true)
    try {
      await axios.put("/api/profile", { name })
      toast.success("Name updated successfully!")
      await update({name:name})
      setIsEditing(false)
    } catch (err) {
      toast.error("Error updating name")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex justify-center min-h-[60vh] items-center mt-20">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl">
            {session?.user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">Profile</h2>
        <p className="mb-4">Email: {session?.user?.email}</p>

        {isEditing ? (
          <input
            className="border px-4 py-2 rounded w-full mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <p className="mb-4 text-lg">Name: {name}</p>
        )}

        {isEditing ? (
          <Button
            className="w-full cursor-pointer"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        ) : (
          <Button className="w-full cursor-pointer" onClick={handleUpdateClick}>
            Update
          </Button>
        )}
      </div>
    </div>

  );
}

