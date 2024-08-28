import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import ErrorCode from "@/app/_constants/errorCodes";
import HttpStatusCode from "@/app/_constants/statusCodes";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  // validate
  if (!request.body.email || !request.body.password) {
    response.status(400).json({ message: "Missing required fields" });

    return;
  }

  // check if user exists
  const existing = await prisma.user.findUnique({
    where: { email: request.body.email },
  });

  if (existing) {
    console.error("register user failed: email in use");

    response.status(HttpStatusCode.BAD_REQUEST).send({
      code: ErrorCode.EMAIL_ALREADY_IN_USE,
      message: "The email address is already registered",
    });

    return;
  }

  const password = await bcrypt.hash(request.body.password, 10);

  const newUser = await prisma.user
    .create({
      data: {
        email: request.body.email,
        name: request.body.name,
        password,
      },
    })
    .catch(console.error);

  response.status(200).send(newUser);
}
