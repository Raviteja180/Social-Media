
import Profile from "../profile/Profile"
import "./home.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="Profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">raviteja</div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
