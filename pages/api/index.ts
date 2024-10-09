import { NextApiRequest, NextApiResponse } from "next";

const allowCors = (fn: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({ message: "GET request received" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST request received" });
  } else {
    res.setHeader("Allow", "OPTIONS, GET, POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default allowCors(handler);
