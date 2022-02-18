import React,{useState} from 'react';
import './admin.scss'
import {ReactComponent as Logo} from '../../images/Arava_logo.svg'
import {ReactComponent as Indent} from '../../images/u_left-indent.svg'
import {ReactComponent as Home} from '../../images/home.svg';
import {ReactComponent as Opener} from '../../images/opener.svg';
import {ReactComponent as User} from '../../images/User.svg';
import {ReactComponent as UserPlus} from '../../images/UserPlus.svg';
import {ReactComponent as Clients} from '../../images/Clients.svg';
import {ReactComponent as Markets} from '../../images/markets.svg';
import {ReactComponent as Products} from '../../images/Products.svg';
import {ReactComponent as Requirements} from '../../images/Requirements.svg';
import {ReactComponent as Message} from '../../images/Message.svg';
import {ReactComponent as Chat} from '../../images/Chat.svg';
import {ReactComponent as Theme} from '../../images/theme.svg';
import {ReactComponent as Notification} from '../../images/Notification.svg';
import Profile from "../../images/ImageProfile.png" //vaqtincha
import AdminLineChart from '../../components/Charts/AdminLineChart';
import  NewCustomersChart  from '../../components/Charts/NewCustomersChart';
const Admin = () => {
    const isOpen=true
    let [isOpenMenuContainer, setIsOpenMenuContainer]= useState(true);
    const openCloseMenuContainer=()=>{
        setIsOpenMenuContainer(isOpenMenuContainer=!isOpenMenuContainer)
        console.log(isOpenMenuContainer);
    }
    return (
        <div className="admin">
            <div className="logo">
                    <Logo className="my-icon"/>
                    <Indent className="my-icon" onClick={e=>openCloseMenuContainer()}/> 
            </div>
            <div className="header">
                <div className="main">
                    <div><h2 className="section_name">Asosiy</h2></div>
                    <div className="main_right">
                        <div className="main_right_theme"><Theme className="my-icon"/></div>
                        <div className="main_right_notification"><Notification className="my-icon"/></div> 
                        <div className="profile_img">
                            <img src={Profile}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">Menu</div>
            <div className="main">Main</div>
        </div>
    );
};

export default Admin;