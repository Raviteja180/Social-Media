import "./topbar.css"
// import React from "react"
// import SearchIcon from '@mui/icons-material/Search';
// import { PersonIcon , SearchIcon } from '@mui/icons-material/Person';
import { Person ,Search , Chat, Notifications } from '@mui/icons-material'

function Topbar() {
    return (


        <div className="topbarContainer" >
            <div className="topbarLeft">
                <span className="logo">Ravi Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className = "searchIcon" />
                    <input placeholder="search a friend or post" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage </span>
                    <span className="topbarLink">TimeLine</span>

                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="assests/persons/maheshbabu.jpg" alt="" className="topbarImg" />
            </div>

        </div>
    )

}

export default Topbar;
