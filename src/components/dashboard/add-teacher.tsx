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
    <div>
      <h1>Add Teachers</h1>
      <form>
        <Input type="text" placeholder="First Name" id="first"/>
        <Input type="text" placeholder="Last Name" id="last"/>
        <Button type="button" onClick={addTeacher}>Add Teacher</Button>
      </form>
    </div>
  )
}

export default AddTeachers