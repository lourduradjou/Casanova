const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

exports.login = async (req, res) => {
	console.log('got inside the login controller buddy!')
	const { username, email, password } = req.body

	try {
		//find the user
		const user = await Admin.findOne({ email })
		console.log('inside try block')
		if (!user) console.log('No user found!')
		if (!user) {
			//if user is not found
			return res.status(404).json({ message: 'User not found' })
		}

		//if user is there , check the password with the database password
		const Match = await bcrypt.compare(password, user.password)
		const UserNameMatch = username === user.username
		if (!Match || !UserNameMatch) {
			//if password doesn't matches or username doesn't matches send invalid credentials for both
			return res.status(400).json({ message: 'Invalid Credentials' })
		}

		const token = jwt.sign(
			{ id: user._id, username: user.username, email: user.email },
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '7d' }
		)

		//create the cookie
		res.cookie('authToken', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production', //at production time make it as https for added security
			maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
		})

		// return res.status(200).json({ token })
		return res.status(200).json({ user, token })
	} catch (error) {
		return res.status(500).json({ message: 'Server Error! Try again' })
	}
}

exports.createAdmin = async (req, res) => {
	console.log('got inside the admin login controller buddy!')
	const { username, email, password, adminPassword } = req.body
	console.log({ username, email, password, adminPassword })

	try {
		//if user is there , check the password with the database password
		const isMatch = adminPassword === process.env.SUPERADMIN
		console.log(process.env.SUPERADMIN)
		if (!isMatch) {
			//if password doesn't matches
			console.log('isnot match running')
			return res
				.status(400)
				.json({ message: 'Invalid Credentials', type: 'error' })
		}

		//find the user
		const user = await Admin.findOne({ email })

		if (user) {
			//if user is not found
			return res.status(404).json({
				message: 'User already exsits with this email',
				type: 'error',
			})
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const newAdmin = new Admin({
			username,
			email,
			password: hashedPassword,
		})

		//save the new admin
		await newAdmin.save()

		// const token = jwt.sign(
		// 	{ id: user._id, username: user.username, email: user.email },
		// 	process.env.JWT_SECRET,
		// 	{ expiresIn: '30d' }
		// )

		// return res.status(200).json({ token })
		return res.status(200).json({
			message: 'Admin user created successfully',
			type: 'success',
			user: newAdmin,
		})
	} catch (error) {
		return res.status(500).json({
			message: 'Server Error! Try again',
			type: 'error',
		})
	}
}

exports.profile = async (req, res) => {
	const token = await req.cookies.authToken

	//if there is no token, send token not found
	if (!token) {
		return res
			.status(401)
			.json({ message: 'No token provided', type: 'error' }) //401 unauthorized
	}

	//if token is there check if it is valid
	try {
		const decodedValue = jwt.verify(token, process.env.JWT_SECRET_KEY)
		return res.status(200).json({ username: decodedValue.username })
	} catch (error) {
		return res.status(403).json({ message: 'Invalid or expired token' }) //403 forbidden - client doesn't have the permission to access the resources
	}
}

exports.logout = async (req, res) => {
	res.clearCookie('authToken')

	return res.status(200).json({
		message: 'Logged out successfully',
		type: 'success',
	})
}
