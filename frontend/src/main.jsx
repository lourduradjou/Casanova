import React, { useState, useEffect } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// const Root = () => {
// 	const [theme, setTheme] = useState(
// 		localStorage.getItem('theme') || 'corporate'
// 	)

// 	useEffect(() => {
// 		// Apply theme when it changes
// 		document.documentElement.setAttribute('data-theme', theme)
// 		localStorage.setItem('theme', theme) // Persist theme in localStorage
// 	}, [theme])

// 	return (
// 		<div data-theme={theme}>
// 			<App />
// 		</div>
// 	)
// }

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)
