// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default function handler(req, res) {
  axios
    .get(process.env.API_ENDPOINT)
    .then((response) => {
      res.status(200).json(response.data.articles);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}
