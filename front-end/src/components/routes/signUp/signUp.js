export const SignUp = () => {
	return (
		<div className='sign-container p-5'>
			<div className='flex-column m-5'>
				<label htmlFor='username'>Username</label>
				<input className='input-box mt-2' type='text' placeholder='Rache' />
			</div>
			<div className='flex-column m-5'>
				<label htmlFor='email'>Email</label>
				<input className='input-box mt-2' type='email' placeholder='rachelgreen@hbo.in' />
			</div>
			<div className='flex-column m-5'>
				<label htmlFor='password'>Password</label>
				<input className='input-box mt-2' type='password' placeholder='********' />
			</div>
			<div className='flex-column m-5'>
				<label htmlFor='password'>Confirm Password</label>
				<input className='input-box mt-2' type='password' placeholder='********' />
			</div>
			<div className='flex-row m-5'>
				<input className='mt-2 mr-2' type='checkbox' />
				<span>
					By creating an account, you agree to the Terms and Conditions, and Privacy
					Policy
				</span>
			</div>
			<div className='m-5'>
				<button className='btn btn-sign'>Sign Up</button>
			</div>
			<p className='m-5'>
				Already have an account? <a href='./signIn.html'>SignIn here</a>
			</p>
		</div>
	);
};
