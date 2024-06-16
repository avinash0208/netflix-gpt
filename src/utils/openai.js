import OpenAI from "openai";
// import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: '',
  dangerouslyAllowBrowser: true,
});

export default openai;