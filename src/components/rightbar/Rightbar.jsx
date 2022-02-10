import "./rightbar.css";
import { users } from "../../dummydata"
import Online from "../online/Online";

function Rightbar() {
    console.log(users)
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assests/birthday.jfif" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Ratnakar</b>and <b>3 other friends</b> have birthday today
                    </span>
                </div>
                <img src="assests/ad.jfif" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {
                        users.map(u => 
                           <Online user ={u} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;
