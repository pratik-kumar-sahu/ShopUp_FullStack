import { useState } from 'react';
import { userLogin } from '../../state/requests';

export const SignIn = () => {
	const [userDetails, setUserDetails] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		userLogin(userDetails);
	};

	return (
		<div className='sign-container p-5'>
			<div className='flex-column m-5'>
				<label htmlFor='email'>Email</label>
				<input
					className='input-box mt-2'
					type='email'
					name='email'
					placeholder='rachelgreen@hbo.in'
					value={userDetails.email}
					onChange={handleChange}
				/>
			</div>
			<div className='flex-column m-5'>
				<label htmlFor='password'>Password</label>
				<input
					className='input-box mt-2'
					type='password'
					name='password'
					placeholder='********'
					value={userDetails.password}
					onChange={handleChange}
				/>
			</div>
			<div className='m-5'>
				<button className='btn btn-sign' onClick={handleSubmit}>
					Sign In
				</button>
			</div>
			<p className='m-5'>
				Don't have an account? <a href='./signUp.html'>SignUp here</a>
			</p>
		</div>
	);
};
