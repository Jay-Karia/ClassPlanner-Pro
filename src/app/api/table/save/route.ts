import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db"

export async function POST(req : NextRequest) {
    const { title, standard, division, data } = await req.json();
    try {
        await db.tables.create({
            data: {
                title: title,
                standard: standard,
                division: division,
                data: data,
                updatedAt: new Date(),
            }
        })
        return NextResponse.json({ msg: "Table added successfully", status: "success" });
    } catch (error) {
        return NextResponse.json({ msg: "Could not add table", status: "error" });
    }
}