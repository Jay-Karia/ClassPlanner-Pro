import { NextRequest, NextResponse } from "next/server";
import db from "../../../lib/db";

export async function DELETE(req : NextRequest) {
    const { id } = await req.json();
    try {
        const teachers = await db.teachers.findUnique({
            where: {
                id: id
            }
        });
        if (!teachers) {
            return NextResponse.json({ message: "Teacher not found", success: false }, { status: 404 });
        }

        await db.teachers.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({ msg: "Teacher deleted successfully", status: "success" });
    } catch (error) {
        return NextResponse.json({ msg: "Could not delete teacher", status: "error" });
    }
}

export async function POST(req : NextRequest, { params  } : {params: any}) {
    const { firstName, lastName } = await req.json();

    if (!firstName || !lastName)
        return NextResponse.json({ message: "Please provide both first name and last name", success: false }, { status: 400 });
    try {
        const teachers = await db.teachers.findFirst({
            where: {
                firstName: firstName,
                lastName: lastName
            }

        })
        if (teachers) {
            return NextResponse.json({ message: "Teacher already exists", success: false }, { status: 404 });
        }

        await db.teachers.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                table: "",
                updatedAt: new Date(),
            }
        });
        const newTeacher = await db.teachers.findFirst({
            where: {
                firstName: firstName,
                lastName: lastName
            }
        });
        return NextResponse.json({ msg: "Teacher added successfully", status: "success", teacher: newTeacher });
    } catch (error) {
        return NextResponse.json({ msg: "Could not add teacher", status: "error" });
    }
}

export async function GET(req : NextRequest, { params } : {params: any}) {
    try {
        const teachers = await db.teachers.findMany();
        return NextResponse.json({ msg: "Teachers fetched successfully", status: "success", teachers: teachers });
    } catch (error) {
        return NextResponse.json({ msg: "Could not fetch teachers", status: "error" });
    }
}