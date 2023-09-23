import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Select all data from user database
    const users = await prisma.user.findMany();

    // Sending success response
    return NextResponse.json(
      {
        message: "Get all users is success",
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    // Sending error response
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // Ask to json request
    const body = await req.json();

    // Hashing password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);

    // Match checking between password and confirm password input
    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        { message: "Password mismatch" },
        { status: 400 }
      );
    }

    // Insert request into database
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });

    // Sending success response
    return NextResponse.json(
      {
        message: "Register new user is success",
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    // Sending error response
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
