declare global {
    type TableType = {
        id: number,
        data: string[][],
        division: string,
        standard: number,
        title: string,
        updatedAt: string,
    }

    type TeacherType = {
        id: number,
        firstName: string,
        lastName: string,
        table: string,
        updatedAt: string,
    }
}

export default { TableType }