import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'

const Auth = () => {
  return (
    <div className="Auth flex items-center justify-center h-screen gap-16 relative ">
        <div className="a-left flex gap-4 items-center justify-center">
            <img src={Logo} alt="" className='h-14 w-14'/>
            <div className="Webname flex flex-col gap-2 font-bold">
                <h1 className='font-bold text-3xl  bg-[100%] bg-repeat bg-gradient-to-r from-[#f9a225]-to-[#f95f35]'>SD Media</h1>
                <h6>IPF is our Brand Ambassador!</h6>
            </div>
        </div>

        {/* <SignUp/> */}
        <LogIn/>
    </div>
  )
}

function SignUp(){
    return (
        <div className="a-right flex flex-col bg-white/70 rounded-2xl p-4 gap-4">
            <div className="infoForm flex flex-col gap-4 items-center">

                <h3 className='font-bold text-lg'>SignUp</h3>

                <div className='flex gap-2 '>
                    <input type="text" placeholder='First Name' name='firstname' className='infoInput bg-gray-200 p-2 rounded-lg outline-none'/>
                    <input type="text" placeholder='Last Name' name='lastname' className='infoInput bg-gray-200 p-2 rounded-lg outline-none'/>
                </div>

                <div className='w-full '>
                    <input type="text" placeholder='UserName' name='username' className='userName w-full bg-gray-200 p-2 rounded-lg outline-none' />
                </div>

                <div className='flex gap-2'>
                    <input type="text" placeholder='Password' name='Password' className='password bg-gray-200 p-2 rounded-lg outline-none'/>
                    <input type="text" placeholder='Confirm Password' name='Confirm Password' className='confirmPassword bg-gray-200 p-2 rounded-lg outline-none'/>
                </div>

            </div>

            <div className='flex flex-col items-center gap-4'>

                <div className='flex text-sm items-center gap-2'>
                    <span>Already have an account?</span>
                    <span className='font-bold hover:underline hover:cursor-pointer'>Login</span>
                </div>

                <button type='submit' className='text-white bg-gradient-to-r from-[#f9a225] to-[#f95f35] p-2 rounded-lg shadow-md border-2 hover:border-orange-500 hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-orange-500 hover:cursor-pointer'>
                    SignUp
                </button>
            </div>

        </div>
    )
}

function LogIn(){
    return (
        <div className="a-right flex flex-col bg-white/70 rounded-2xl p-4 w-96 gap-4">
            <div className="infoForm flex flex-col gap-4 items-center">

                <h3 className='font-bold text-lg'>Login</h3>

                <div className='w-full '>
                    <input type="text" placeholder='UserName' name='username' className='userName w-full bg-gray-200 p-2 rounded-lg outline-none' />
                </div>

                <div className='w-full '>
                    <input type="text" placeholder='Password' name='password' className='Password w-full bg-gray-200 p-2 rounded-lg outline-none' />
                </div>

                <div className='flex flex-col items-center gap-4'>

                    <div className='flex text-sm items-center gap-2'>
                        <span>New to Wildlife?</span>
                        <span className='font-bold hover:underline hover:cursor-pointer'>SignUp</span>
                    </div>

                    <button type='submit' className='text-white bg-gradient-to-r from-[#f9a225] to-[#f95f35] p-2 rounded-lg shadow-md border-2 hover:border-orange-500 hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-orange-500 hover:cursor-pointer'>
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Auth

// bg-gradient-to-r from-[#f9a225] to-[#f95f35]
// linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)
