// import axios from "axios";

// export default function handler(req, res) {
//   const options = {
//     method: "GET",
//     url: process.env.Google_API_ENDPOINT,
//     params: { language: "EN" },
//     headers: {
//       "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
//       "X-RapidAPI-Host": process.env.X_RAID_API_HOST,
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       res.status(200).json(response.data.news);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }
