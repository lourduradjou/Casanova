import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Alert = ({ type = 'info', alertMessage = 'Default message!' }) => {
	// Trigger toast based on the `type` prop
	const showToast = () => {
		switch (type) {
			case 'success':
				toast.success(alertMessage)
				break
			case 'error':
				toast.error(alertMessage)
				break
			case 'warning':
				toast.warning(alertMessage)
				break
			case 'info':
			default:
				toast.info(alertMessage)
		}
	}

	React.useEffect(() => {
		showToast()
	}, [type, alertMessage]) // Re-run if type or alertMessage changes

	return (
		<>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
				transition={Bounce}
			/>
		</>
	)
}

export default Alert
