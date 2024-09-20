"use server";

import { getUserByEmail } from "@/db/queries/select";

type UserParam = {
  id: number;
  name: string;
  email: string;
  image: string;
};

export async function getUserProfilePicture(param: UserParam) {
  const user = await getUserByEmail(param.email);
  return user;
}
