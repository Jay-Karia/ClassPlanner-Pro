import { create } from 'zustand'

type TableStore = {
    tables: TableType[]
    setTables: (tables : TableType[]) => void
    resetTables: () => void
}

export const useTableStore = create<TableStore>((set) => ({
  tables: [],
  setTables: (tables : TableType[]) => set({ tables }),
  resetTables: () => set({ tables: [] }),
}))