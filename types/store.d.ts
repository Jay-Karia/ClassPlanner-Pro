import * as types from "@/../../types/global"

export type TableStoreType = {
    tables: TableType[]
    setTables: (tables: TableType[]) => void
    resetTables: () => void
}

export type TeacherStoreType = {
    teachers: TeacherType[]
    setTeachers: (teachers: TeacherType[]) => void
    resetTeachers: () => void
}

export type RefreshStoreType = {
    refresh: boolean
    setRefresh: (refresh: boolean) => void
}