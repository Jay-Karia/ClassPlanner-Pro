"use client"

import React, {useEffect, useState} from 'react'
import { useTableStore } from '@/store'
import TimeTable from '@/components/timetable'
import { Button } from '@/components/ui/button'

const TablesPage = () => {

  const tables = useTableStore(state => state.tables)
  const setTables = useTableStore(state => state.setTables)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    // Fetch Data
    const fetchTables = async () => {
      try {
        const response = await fetch('/api/table')
        const fetchedTables = await response.json()
        setTables(fetchedTables.tables)
        console.log("here")
        // setRefresh(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTables()
  }, [refresh])

  return (
    <div className="p-5 space-y-12">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            All Tables
          </h3>
      {tables.length > 0 ? (
        tables.map((table , index) => (
          <div key={index}>
            <TimeTable data={table}/>
          </div>
        ))
      ) : (
        <h1>No tables found</h1>
      )}

      <Button onClick={()=>{setRefresh(!refresh)}} variant={"secondary"}>Refresh</Button>
    </div>
  )
}

export default TablesPage