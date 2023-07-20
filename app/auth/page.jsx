'use client';
import { useState,useCallback } from "react";
import Input from "../components/Input/Input";
import axios from "axios";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
import {FcGoogle} from 'react-icons/fc'

const Auth=()=>{
    const router=useRouter()
    const [data,setData]=useState({username:"",password:'',email:''})
    const [variant,setVariant]=useState('Login')

    const toggle=()=>{
        variant=='Login'?setVariant('Sign Up'):setVariant('Login')
    }
    

    const login=useCallback(async ()=>{
        try{
            const user=await signIn('credentials',{
                email:data.email,
                password:data.password,
                redirect:false,
                callbackUrl:'/profiles'
            })
            if (user.status==200){
                router.push('/profiles')
            }   
            
        }
        catch(error){
            alert(error.message)
        }
    },[data])

    const register=useCallback(async ()=>{
        const response=await axios.post('/api/register',{...data})
        login()
    },[data,login])

    return (
        <div className="relative h-full w-full bg-[url('/assets/Images/hero.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full w-full bg-black bg-opacity-50">
                <nav className="px-5 py-5">
                    <img src="/assets/Images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 self-center px-16 py-16 lg:w-2/5 mt-2 lg:mx-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl font-semibold mb-8">{variant}</h2>
                        <div className="flex flex-col gap-4">
                        {
                            variant=='Sign Up' && (
                                <Input 
                                label="Username"
                                onChange={(ev)=>{setData({...data,[ev.target.name]:ev.target.value})}}
                                value={data.username}
                                id='username'
                                type='text'
                                ></Input>
                            )
                        }
                        
                            <Input 
                            label="Email"
                            onChange={(ev)=>{setData({...data,[ev.target.name]:ev.target.value})}}
                            value={data.email}
                            id='email'
                            type='text'
                            ></Input>
                            <Input 
                            label="Password"
                            onChange={(ev)=>{setData({...data,[ev.target.name]:ev.target.value})}}
                            value={data.passsword}
                            id='password'
                            type='password'
                            ></Input>
                        </div>
                        <button onClick={variant=='Login'?login:register} className="bg-red-600 hover:bg-red-700 transition rounded-md text-white w-full mt-10 py-3">
                            Login
                        </button>
                        <div className="flex flex-row gap-4 justify-center items-center mt-10">
                            <div onClick={()=>{signIn('google',{callbackUrl:'/profiles'})}} className="bg-white rounded-full h-10 w-10 flex justify-center items-center hover:opacity-80 transition cursor-pointer">
                                <FcGoogle size={30}></FcGoogle>
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant=='Login'?'First time using netflix?':'Already have an account?'}<span onClick={toggle} className="hover:underline text-white ml-1 cursor-pointer">{variant=='Login'?'Create an account':'Sign in'}</span>
                        </p>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}
export default Auth;