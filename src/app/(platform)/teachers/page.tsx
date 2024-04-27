"use client"

import React, {useEffect, useState} from 'react'
import { useTeacherStore } from '@/store'
import { useRefreshStore } from '@/store'
import { Button } from '@/components/ui/button'

import AllTeachers from '@/components/dashboard/all-teachers'
import AddTeachers from '@/components/dashboard/add-teacher'

const TeacherPage = () => {

  const refresh = useRefreshStore(state => state.refresh)
  const setRefresh = useRefreshStore(state => state.setRefresh)
  const teachers = useTeacherStore(state => state.teachers)
  const setTeachers = useTeacherStore(state => state.setTeachers)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const fetchTeachers = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/teacher')
        const fetchedTeachers = await response.json()
        console.log("here")
        setTeachers(fetchedTeachers.teachers)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    console.log("here")

    fetchTeachers()
  },[refresh])

  

  return (
    <div className="flex flex-col gap-12 p-5">
      <AddTeachers/>
      <AllTeachers teachers={teachers}/>
      <Button onClick={()=>{setRefresh(!refresh)}} className="w-max" variant={"secondary"} >Refresh</Button>
    </div>
  )
}

export default TeacherPage