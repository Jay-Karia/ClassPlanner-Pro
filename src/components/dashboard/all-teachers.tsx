import React from 'react'
import { Button } from '../ui/button'
import { useRefreshStore } from '@/store'

const AllTeachers = ({teachers} : {teachers : TeacherType[]}) => {

  const refresh = useRefreshStore(state => state.refresh)
  const setRefresh = useRefreshStore(state => state.setRefresh)

  const deleteTeacher = async (id : number) => {
    try {
      const response = await fetch('/api/teacher', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      })
      const data = await response.json()
      setRefresh(!refresh)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
        {teachers.length > 0 ? (
          <>
            <h1>Teachers</h1>
            <ul>
              {teachers.map(teacher => (
                <div key={teacher.id}>
                <li key={teacher.id}>{teacher.firstName}</li>
                <Button onClick={()=>{deleteTeacher(teacher.id)}}>Delete</Button>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h1>No Teachers</h1>
          </>
        )}
    </div>
  )
}

export default AllTeachers