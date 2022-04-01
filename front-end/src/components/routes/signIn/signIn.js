export const SignIn = () => {
	return (
		<div className='sign-container p-5'>
			<div className='flex-column m-5'>
				<label htmlFor='email'>Email</label>
				<input className='input-box mt-2' type='email' placeholder='rachelgreen@hbo.in' />
			</div>
			<div className='flex-column m-5'>
				<label htmlFor='password'>Password</label>
				<input className='input-box mt-2' type='password' placeholder='********' />
			</div>
			<div className='m-5'>
				<button className='btn btn-sign'>Sign In</button>
			</div>
			<p className='m-5'>
				Don't have an account? <a href='./signUp.html'>SignUp here</a>
			</p>
		</div>
	);
};
