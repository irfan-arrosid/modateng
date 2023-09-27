import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";

export async function POST(req) {
  try {
    // Ask to json request
    const body = await req.json();

    // Check if email is not exist
    const isEmailExist = await prisma.user.findFirst({
      where: { email: body.email },
    });
    if (!isEmailExist) {
      return NextResponse.json(
        { message: "Email is not exist" },
        { status: 404 }
      );
    }

    const user = isEmailExist;

    // Password validation
    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Password is invalid" },
        { status: 400 }
      );
    }

    // Sending success response
    return NextResponse.json(
      {
        message: "Login is success",
        data: user,
      },
      { status: 202 }
    );
  } catch (error) {
    // Sending error response
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
