import React from 'react'
import { Link } from 'react-router-dom'
import CommonHeader from '../CommonHeader/CommonHeader'

export default function Login() {
    return (
        <div>
            <CommonHeader />
            <div className="bg-gray-200 h-screen flex justify-center items-center">
                <div className="w-1/3">
                    <h1 className="text-xl my-2">Welcome to Login Page</h1>
                    <p className="pb-8"><span className="text-gray-600">Or</span> <Link to="/register" className="text-blue-600 underline">Register quickly</Link></p>
                    <form className="flex flex-col">
                        <input
                            className="p-2 my-2 bg-gray-200  outline-none focus:border-blue-500 border-2 rounded-md"
                            type="email"
                            placeholder="Your Registered Email"
                            autoFocus
                            required
                        />
                        <input
                            className="p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none rounded-md"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button
                            className="p-2 bg-blue-500 my-2 text-white hover:bg-blue-600 rounded-md"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <Link to="/forget-password" className="py-4 text-blue-600 underline">Forget password?</Link>
                </div>
            </div>
        </div>
    )
}
