import asyncHandler from 'express-async-handler'
improt { prisma } from '../config/prismaConfig.js'

export const createUser = asyncHandler(async(req, res) => {
  console.log("creating user");

  let {email} = req.body;
  console.log(email)
})