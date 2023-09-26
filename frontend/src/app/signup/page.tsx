"use client"
import { createUserRequest } from '@/api/userAPI'
import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

const Signup = () => {
    const [username, setUsername] = useState<string>('')
    const [fullname, setFullname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [cpassword, setCpassword] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [phone, setPhone] = useState<string>()
    const [dob, setDob] = useState<Date>(new Date())

    const queryClient = useQueryClient()
    const { mutate: createUser } = useMutation<any, any, any, any>(
        newUser => createUserRequest(newUser), {
            onSettled: () => {
                queryClient.invalidateQueries('user')
            },
            onSuccess(data, variables, context) {
                localStorage.setItem('UserData', JSON.stringify(data))
                window.location.assign('/dashboard')
            },
        }
    )

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createUser({
        username,
        name: fullname,
        email,
        phone,
        gender,
        dob,
        country,
        city,
        password,
        confirm_password: cpassword,})
        
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col w-screen md:w-auto h-full md:h-auto gap-3 border border-gray-50 rounded-md p-5 shadow-[0_0px_20px_rgba(0,0,0,0.15)]'>
            <div className='text-2xl font-bold'>Sign Up into Logoipsum</div>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='relative'>
                    <input multiple onChange={e => setUsername(e.target.value)} className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base bg-white transition-all'>Username</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setFullname(e.target.value)} className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>Full name</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setEmail(e.target.value)} className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>Email address</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setPhone(e.target.value)} className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>Phone</label>
                </div>
                <div className='relative'>
                    <select onChange={e => setGender(e.target.value)} className='border border-gray-400 bg-white p-2.5 outline-blue-400 rounded-md peer' defaultValue='Select Gender'>
                        <option className='p-5'>Male</option>
                        <option className='p-5'>Female</option>
                        <option className='hidden'>Select Gender</option>
                    </select>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 bg-white transition-colors'>Gender</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setDob(new Date(e.target.value))} type='date' className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 bg-white transition-all'>Date of Birth</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setCountry(e.target.value)} className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>Country</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setCity(e.target.value)} className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>City</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setPassword(e.target.value)} type='password' className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>Password</label>
                </div>
                <div className='relative'>
                    <input onChange={e => setCpassword(e.target.value)} type='password' className='border border-gray-400 p-2.5 outline-blue-400 rounded-md peer transition-colors delay-[50000s]' placeholder=''></input>
                    <label className='absolute left-0 m-2.5 px-1 -translate-y-4 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-autofill:text-xs bg-white transition-all'>Confirm Password</label>
                </div>
            </div>
            <label><input className='mx-2' type="checkbox" /> I accept the terms and conditions</label>
            <button type='submit' className='bg-blue-400 p-2 rounded-md hover:bg-blue-800 text-white hover:shadow-[0_0px_20px_rgba(0,0,0,0.55)] transition-all'>Sign up</ button>
            <hr />
        </form>
    </div>
  )
}

export default Signup