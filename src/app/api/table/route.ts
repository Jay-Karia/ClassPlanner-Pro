import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db"

export async function GET(req : NextRequest) {
    try {
        const tables = await db.tables.findMany();
        return NextResponse.json({ msg: "Tables fetched successfully", status: "success", tables: tables });
    } catch (error) {
        return NextResponse.json({ msg: "Could not fetch tables", status: "error" });
    }
}