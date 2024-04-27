declare global {
    type TableType = {
        id: number,
        data: object[],
        division: string,
        standard: number,
        title: string,
        updatedAt: string,
    }

    type TeacherType = {
        id: number,
        firstName: string,
        lastName: string,
        table: TableType,
        updatedAt: string,
    }
}

export default { TableType }