import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from './Alert'

const SuperAdmin = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [alertMessage, setAlertMessage] = useState('')
	const [alertType, setAlertType] = useState('')
	const [adminPassword, setAdminPassword] = useState('')
	const navigate = useNavigate()

	const handleUserLogin = async () => {
		setAlertMessage('') // Clear previous messages
		try {
			const response = await axios.post(
				'http://localhost:5000/api/auth/createAdmin',
				{
					username,
					email,
					password,
					adminPassword,
				}
			)
			console.log(response)

			if (response.data.type === 'success') {
				setAlertMessage(response.data.message)
				setAlertType('success')
				navigate('/')
			}
		} catch (error) {
			console.log('inside axios error!')

			// Safely access error response data
			const errorMessage =
				error.response?.data?.message ||
				error.message ||
				'Something went wrong'

			// Set alert message and type
			setAlertMessage(errorMessage)
			setAlertType('error')

			// Log detailed error information for debugging
			console.error('Axios Error:', errorMessage)
			console.error('Full Error Object:', error)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// console.log({ username, email, password })
		handleUserLogin()
	}

	return (
		<form onSubmit={handleSubmit}>
			{alertMessage && (
				<Alert type={alertType} alertMessage={alertMessage} />
			)}
			<div className='bg-gray-700 w-full flex flex-col items-center justify-center min-h-screen'>
				<div className='tooltip mb-6' data-tip='Welcome back chief!'>
					<h1 className='text-3xl'>Admin Login</h1>
				</div>
				<div className='w-[70%] md:w-[65%] lg:w-[60%] xl:w-[30%]'>
					<label className='input input-bordered flex items-center gap-2 mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='h-4 w-4 opacity-70'
						>
							<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
							<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
						</svg>
						<input
							type='text'
							className='grow'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
						/>
					</label>
					<label className='input input-bordered flex items-center gap-2 mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='h-4 w-4 opacity-70'
						>
							<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
						</svg>
						<input
							type='text'
							className='grow'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Username'
						/>
					</label>
					<label className='input input-bordered flex items-center gap-2 mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='h-4 w-4 opacity-70'
						>
							<path
								fillRule='evenodd'
								d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
								clipRule='evenodd'
							/>
						</svg>
						<input
							type='text'
							className='grow'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='password'
						/>
					</label>
					<label className='input input-bordered flex items-center gap-2 mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='h-4 w-4 opacity-70'
						>
							<path
								fillRule='evenodd'
								d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
								clipRule='evenodd'
							/>
						</svg>
						<input
							type='text'
							className='grow'
							value={adminPassword}
							onChange={(e) => setAdminPassword(e.target.value)}
							placeholder='Admin password'
						/>
					</label>
					<div className='flex w-full justify-center items-center space-x-2 mt-6'>
						<div className='w-full flex justify-center'>
							<Link to='/' className='w-full'>
								<button className='btn  btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg  w-full text-lg font-normal'>
									Home
								</button>
							</Link>
						</div>
						<div className='w-full flex justify-center'>
							{/* <Link to='api/login' className='w-full'> */}
							<button
								type='submit'
								className='btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-primary w-full text-lg font-normal'
							>
								Login
							</button>
							{/* </Link> */}
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default SuperAdmin
