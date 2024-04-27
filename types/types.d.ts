declare global {
    type TableType = {
        id: number,
        data: object[],
        division: string,
        standard: number,
        title: string,
        updatedAt: string,
    }
}

export default { TableType }