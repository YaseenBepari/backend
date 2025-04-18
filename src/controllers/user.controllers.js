import { asynchandler } from "../utils/asynchandler.js";


const regestieruser = asynchandler(async (req, res) => {
    res.status(200).json({
        message:"ok"
    })
})

export { regestieruser }