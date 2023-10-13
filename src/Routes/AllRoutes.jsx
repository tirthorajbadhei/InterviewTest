import Dashboard from "../Pages/Dashboard";
import TextAd from "../Pages/TextAd";
import MediaAd from "../Pages/MediaAd";
import CreateAds from "../Pages/CreateAds";
import { Routes, Route } from "react-router-dom"
const AllRoute = () => {
    return <>
    <Routes>

        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/createAds" element={<CreateAds/>}></Route>
        <Route path="/TextAd" element={<TextAd/>}></Route>
        <Route path="/MediaAd" element={<MediaAd/>}></Route>
    </Routes>

    </>
}
export default AllRoute