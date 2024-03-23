import { asset, url } from '../lib/data.js';
import { useState } from "preact/hooks";


export default function Form() {
	const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    	e.preventDefault();
		
		const formData = new FormData(e.target as HTMLFormElement);
		var object = JSON.stringify(Object.fromEntries(formData));
		const dataPost = new URLSearchParams(object).toString();
		const response = await fetch("/api/auth/signup", {
			method: "POST",
			body: dataPost,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
				
		});
		if (response.status === 200) {
			window.location.href = '/authentication/sign-in';
    		return;
		  }
	
		const data = await response.json();
		if (data.message) {
			setResponseMessage(data.message);
		  }
		
	} 
	return (
	<div
		className="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-zinc-900"
	>
		<a
			href="#"
			className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
		>
			<img src={asset('logo.svg')} alt="VCO GROUP logo" className="h-11" />
			
		</a>
		<div
			className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-zinc-800"
		>
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
				Create a Free Account
			</h2>
			<div className="text-sm font-normal text-primary-500">
				{responseMessage && <p>{responseMessage}</p>}
			</div>
			<form className="mt-8 space-y-6" onSubmit={submit}>
				<div>
					<label
						htmlFor="fname"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>First Name</label>
					<input
						type="text"
						name="fname"
						id="fname"
						className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Ex: Hoang"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="lname"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Last Name</label>
					<input
						type="text"
						name="lname"
						id="lname"
						className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Ex: Dung"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your email</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="name@company.com"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="confirmPassword"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Confirm password</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						placeholder="••••••••"
					className="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						required
					/>
				</div>
				
				<button
					type="submit"
					className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>Create account</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-400">
					Already have an account? <a
						href={url('authentication/sign-in')}
						className="text-primary-700 hover:underline dark:text-primary-500"
						>Login here</a>
				</div>
			</form>
		</div>
	</div>											
	);
}
