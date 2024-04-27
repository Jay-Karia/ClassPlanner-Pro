import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useRefreshStore } from '@/store'

const AddTeachers = () => {

  const refresh = useRefreshStore(state => state.refresh)
  const setRefresh = useRefreshStore(state => state.setRefresh)

  const addTeacher  = async () => {
    const firstName = (document.getElementById("first") as HTMLInputElement).value
    const lastName = (document.getElementById("last") as HTMLInputElement).value

    try {
      const response = await fetch('/api/teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName})
      })
      const data = await response.json()
      setRefresh(!refresh)
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-center bg-slate-50 p-5 rounded-lg md:w-max">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Add Teachers
      </h3>
      <form className="flex flex-col gap-5 w-max">
        <Input type="text" placeholder="First Name" id="first"/>
        <Input type="text" placeholder="Last Name" id="last"/>
        <Button type="button" onClick={addTeacher} variant={"primary"}>Add Teacher</Button>
      </form>
    </div>
  )
}

export default AddTeachers