const { Router } = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const promptRouter = Router();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

promptRouter.post("");

module.exports = promptRouter;
