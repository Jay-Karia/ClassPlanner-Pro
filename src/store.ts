import { create } from 'zustand'
import { TeacherStoreType, TableStoreType, RefreshStoreType, EditStoreType } from '@/../../types/store'

export const useTableStore = create<TableStoreType>((set) => ({
  tables: [],
  setTables: (tables: TableType[]) => set({ tables }),
  resetTables: () => set({ tables: [] }),
}))

export const useTeacherStore = create<TeacherStoreType>((set) => ({
  teachers: [],
  setTeachers: (teachers: TeacherType[]) => set({ teachers }),
  resetTeachers: () => set({ teachers: [] }),
}))

export const useRefreshStore = create<RefreshStoreType>((set) => ({
  refresh: false,
  setRefresh: (refresh: boolean) => set({ refresh }),
}))

export const useEditStore = create<EditStoreType>((set) => ({
  edit: false,
  setEdit: (edit: boolean) => set({ edit }),
})
)