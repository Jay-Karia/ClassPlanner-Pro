import { create } from 'zustand'

type TableStore = {
    tables: TableType[]
    setTables: (tables : TableType[]) => void
    resetTables: () => void
}

type TeacherStore = {
  teachers: TeacherType[]
  setTeachers: (teachers : TeacherType[]) => void
  resetTeachers: () => void
}

type RefreshStore = {
  refresh: boolean
  setRefresh: (refresh : boolean) => void
}

export const useTableStore = create<TableStore>((set) => ({
  tables: [],
  setTables: (tables : TableType[]) => set({ tables }),
  resetTables: () => set({ tables: [] }),
}))

export const useTeacherStore = create<TeacherStore>((set)=> ({
  teachers: [],
  setTeachers: (teachers : TeacherType[]) => set({ teachers }),
  resetTeachers: () => set({ teachers: [] }),
}))

export const useRefreshStore = create<RefreshStore>((set) => ({
  refresh: false,
  setRefresh: (refresh : boolean) => set({ refresh }),
}))