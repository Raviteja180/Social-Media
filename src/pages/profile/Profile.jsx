import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assests/posts/5.jfif" alt="" className="profileCoverImg" />
                            <img src="assests/persons/prabhas.jfif" alt="" className="profileUserImg" />

                        </div>
                        <div className="profileInfo">
                            <h4 className="pofileInfoName">Prabhas</h4>
                            <span className="pofileInfoDesc">Hello friends</span>

                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile;
