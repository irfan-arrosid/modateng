import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";

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

    // Check if form input is empty
    const validateField = (field, fieldName) => {
      if (!field) {
        return NextResponse.json(
          { message: `${fieldName} cannot be empty` },
          { status: 400 }
        );
      }
    };

    const emptyField =
      validateField(body.name, "Name") ||
      validateField(body.email, "Email") ||
      validateField(body.password, "Password");

    if (emptyField) {
      return emptyField;
    }

    // Hashing password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);

    // Check if email is already exist
    const isEmailExist = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (isEmailExist) {
      return NextResponse.json(
        { message: "Email is already exist" },
        { status: 409 }
      );
    }

    // Check if password and confirmPassword is match
    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        { message: "Password doesn't match" },
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
