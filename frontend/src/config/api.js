import REACT_APP_OPENAI_API_KEY from "./apiKey";
import { Configuration, OpenAIApi} from "openai"
const configuration = new Configuration({
    apiKey: REACT_APP_OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);

export {openai}