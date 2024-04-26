import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db"

export async function DELETE(req : NextRequest, { params }: {params : {id : string}}) {
    try {
        const tables = await db.tables.findUnique({
            where: {
                id: params.id
            }
        });
        if (!tables) {
            return NextResponse.json({ message: "Table not found", success: false }, { status: 404 });
        }

        await db.tables.delete({
            where: {
                id: params.id
            }
        })
        return NextResponse.json({ msg: "Table deleted successfully", status: "success" });
    } catch (error) {
        return NextResponse.json({ msg: "Could not delete table", status: "error" });
    }
}

export async function GET(req : NextRequest, { params } : {params : {id : string}}) {
    try {
        const table = await db.tables.findUnique({
            where: {
                id: params.id
            }
        });
        return NextResponse.json({ msg: "Table fetched successfully", status: "success", table: table });
    } catch (error) {
        return NextResponse.json({ msg: "Could not fetch table", status: "error" });
    }
}

export async function PUT(req : NextRequest, { params }: {params : {id : string}}) {
    const { title, standard, division, data } = await req.json();
    try {
        const tables = await db.tables.findUnique({
            where: {
                id: params.id
            }
        });
        if (!tables) {
            return NextResponse.json({ message: "Table not found", success: false }, { status: 404 });
        }

        await db.tables.update({
            where: {
                id: params.id
            },
            data: {
                title: title,
                standard: standard,
                division: division,
                data: data
            }
        });
        return NextResponse.json({ msg: "Table updated successfully", status: "success" });
    } catch (error) {
        return NextResponse.json({ msg: "Could not update table", status: "error" });
    }
}