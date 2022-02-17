import React,{useState,useEffect} from 'react';
import "./login.scss"
import Image from '../../images/Image.png'
import Arava from '../../images/Arava1.svg'
import axios from 'axios';
import { setIsAuth } from '../../redux/store/authSlice'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'

const Login = ({setIsAuth}) => {
    const navigate=useNavigate()
    const [tel,setTel]=useState(null)
    const [parol,setParol]=useState(null)
    const [error,setError]=useState(false)
    const formData = async(e)=>{
        e.preventDefault()
        if(!tel||!parol){
            // alert("Iltimos formani to'liq to'ldiring")
            setError(true)
        }else{
            const admin={
                phone_number: tel,
                password: parol
            }
            axios({
                url:'https://backend.birzoom.uz:3000/v1/admin/login',
                method:'POST',
                data:admin
            })
            .then((res)=>{
                console.log(res.data);
                let userData={
                    token:res.data.data.token,
                    id:res.data.data.admin._id,
                }
                localStorage.setItem("userData", JSON.stringify(userData))
                setIsAuth()
                navigate('/admin')
            })
            .catch((err)=>{
                console.log(err.response);
                setError(true)
            })
        }
    }
    const verifyIsAdmin=(token,id)=>{
        axios({
            url:`https://backend.birzoom.uz:3000/v1/admin/${id}`,
            method:'GET',
            headers:{
                "Authorization":token
            }
        })
        .then((res)=>{
            console.log(res.status);
            if(res.success){
                setIsAuth()
                navigate('/admin')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        let data = localStorage.getItem('userData')
        if(data){
        const userData=JSON.parse(data)
        const {token,id}=userData
        console.log(token,id);
            verifyIsAdmin(token,id)
            setIsAuth()
            navigate('/admin')
        }else{
            navigate('/login')
        }  
    },[])
    return (
        <div className="register">
            <div className="container">
                <img src={Image}/>
                <img className="logo" src={Arava}/>
                <div>
                    <h1>Tizimga kirish</h1>
                    <form onSubmit={e=>formData(e)}>
                        <input className={error ? "fail" : "undifined"} onClick={e=>setError(false)} onChange={e=>setTel(e.target.value)} type="tel" placeholder="telephone number"/>
                        <input className={error ? "fail" : "undifined"} onClick={e=>setError(false)} onChange={e=>setParol(e.target.value)} type="text" placeholder="parol *"/>
                        <input className="submit" type="submit" value="Boshlash"/>
                        {error ? (<p>Hisob ma'lumotlari noto'g'ri</p>) : (null)}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default connect(null,{setIsAuth})(Login);