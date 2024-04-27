"use client"

import React, {useEffect, useState} from 'react'
import { useTableStore } from '@/store'
import global from '@/../types/types'
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
    <div>
      {tables.length > 0 ? (
        tables.map((table , index) => (
          <div key={index}>
            <h1 key={index}>{table.title}</h1>
            <p>{table.division}</p>
            <p>{table.standard}</p>
            <p>{table.updatedAt}</p>
            <p>{JSON.stringify(table.data)}</p>
          </div>
        ))
      ) : (
        <h1>No tables found</h1>
      )}

      <Button onClick={()=>{setRefresh(!refresh)}}>Refresh</Button>
    </div>
  )
}

export default TablesPage