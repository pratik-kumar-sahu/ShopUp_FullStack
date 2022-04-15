import toast from 'react-hot-toast';

export const notify = {
	success: (message) => {
		toast.success(message);
	},
	error: (message) => {
		toast.error(message);
	},
	customMsg: (sticky, message) => {
		toast(message, {
			icon: sticky
		});
	}
};
