import https from "https";

// export default function handler(req, res) {
//     const url =
//         "https://raw.githubusercontent.com/vemuri02/resume/main/public/Resume_Sai_Manohar_Vemuri.pdf";

//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader(
//         "Content-Disposition",
//         "inline; filename=Resume_Sai_Manohar_Vemuri.pdf"
//     );

//     https.get(url, (response) => {
//         response.pipe(res);
//     }).on("error", () => {
//         res.status(500).send("Error fetching PDF");
//     });
// }
export default function handler(req, res) {
    res.status(200).json({ message: "API route works!" });
}

