import React from 'react'
import { Link } from 'react-router-dom'
import CommonHeader from '../CommonHeader/CommonHeader'

export default function Register() {
    return (
        <div>
            <CommonHeader />
            <div className="bg-gray-100 h-screen flex justify-center items-center">
                <div className="w-1/3">
                    <h1 className="text-xl py-4 font-bold">Welcome to Sign up Page</h1>
                    <form className="flex flex-col">
                        <input
                            className="p-2 my-2 bg-gray-200 outline-none rounded-md focus:border-blue-500 border-2"
                            type="text"
                            placeholder="Your Name"
                            autoFocus
                            required
                        />
                        <input
                            className="p-2 my-2 bg-gray-200 outline-none rounded-md focus:border-blue-500 border-2"
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                        <input
                            className="p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none rounded-md"
                            type="password"
                            placeholder="Set Password"
                            required
                        />
                        <button
                            className="p-2 bg-blue-500 my-2 text-white hover:bg-blue-600 rounded-md"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </form>
                    <p className="py-4"><span className="text-gray-600">Already have an account?</span><Link to="/" className="px-2 text-blue-600">Sign in!</Link></p>
                </div>
            </div>
        </div>
    )
}
