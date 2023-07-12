import { NextApiRequest } from "next"
import { NextApiResponse } from "next"

import User from "../../db/user";

import connectMongoDb from "../../db/connectMongoDb";

export default async function addUser(req, res) {
    const { name, email } = req.body;
    console.log("connecting to mongodb...")
    await connectMongoDb();
    console.log("connected to mongodb...")

    const user = await User.create(
        req.body
    )
    console.log("created user")

    res.json({user})
}