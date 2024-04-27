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

  useEffect(()=> {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('/api/teacher')
        const fetchedTeachers = await response.json()
        console.log(fetchedTeachers.teachers)
        setTeachers(fetchedTeachers.teachers)
      } catch (error) {
        // console.error(error)
      }
    }
    console.log("here")

    fetchTeachers()
  },[refresh])

  

  return (
    <div>
      <AllTeachers teachers={teachers}/>
      <AddTeachers/>
      <Button onClick={()=>{setRefresh(!refresh)}}>Refresh</Button>
    </div>
  )
}

export default TeacherPage