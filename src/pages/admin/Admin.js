import React from 'react';
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
const Admin = () => {
    const isOpen=true
    
    return (
        <div className="admin">
            <div className="menu">
                <div className="menu_top_container">
                    <Logo className="my-icon"/>
                    <Indent className="my-icon"/> 
                </div>
                <main className="menu_sections">
                    <section>
                        <div className="icon"><Home className="my-icon"/> </div> <p>Asosiy</p> 
                        {/* {isOpen ? (  <Opener className="opener"/>) : (null)} */}
                    </section>
                    <section>
                        <div className="icon"><User className="my-icon"/> </div> <p>Agentlar</p> {isOpen ? ( <div className="opener"> <Opener className="my-icon_opener"/> </div> ) : (null)}
                    </section>
                    <section>
                        <div className="icon"><UserPlus className="my-icon"/> </div> <p>Hodimlar</p> {isOpen ? ( <div className="opener"> <Opener className="my-icon_opener"/> </div> ) : (null)}
                    </section>
                    <section>
                        <div className="icon"><Clients className="my-icon"/> </div> <p>Xaridorlar</p> {isOpen ? ( <div className="opener"> <Opener className="my-icon_opener"/> </div> ) : (null)}
                    </section>
                    <section>
                        <div className="icon"><Markets className="my-icon"/> </div> <p>Bozorlar</p> {isOpen ? ( <div className="opener"> <Opener className="my-icon_opener"/> </div> ) : (null)}
                    </section>
                    <section>
                        <div className="icon"><Products className="my-icon"/> </div> <p>Mahsulotlar</p> {isOpen ? ( <div className="opener"> <Opener className="my-icon_opener"/> </div> ) : (null)}
                    </section>
                    <section>
                        <div className="icon"><Requirements className="my-icon"/> </div> <p>Talablar</p> 
                    </section>
                    <section>
                        <div className="icon"><Message className="my-icon"/> </div> <p>Xabar yuborish</p> 
                    </section>
                    <section>
                        <div className="icon"><Chat className="my-icon"/> </div> <p>Chat</p> 
                    </section>
                </main>
            </div>

            <div className="monitoring">
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
                <div className="monitoring_container">
                    <div className="boxs">
                        <div className="box">
                            <div className="box_icon_container agents">
                                <User  className="box_icons"/>
                            </div>
                            <div>
                                <h3>Agentlar</h3>
                                <p>15</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_icon_container products">
                                <User  className="box_icons"/>
                            </div>
                            <div>
                                <h3>Mahsulotlar</h3>
                                <p>1334</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_icon_container categories">
                                <User  className="box_icons"/>
                            </div>
                            <div>
                                <h3>Toifalar</h3>
                                <p>45</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_icon_container demand">
                                <User  className="box_icons"/>
                            </div>
                            <div>
                                <h3>Talablar</h3>
                                <p>23</p>
                            </div>
                        </div>
                    </div>
                    <div className="client_statistics_container">
                        <div className="statistics_left_container">
                            <div className="client_statistics_container_ui">
                                <AdminLineChart id="lineChart"/>    
                            </div>
                            <div className="client_comments"> oxirgi izohlar</div>
                        </div>
                        <div className="statistics_right_container">
                            <div className="new_customers"></div>
                            <div className="more_views"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;