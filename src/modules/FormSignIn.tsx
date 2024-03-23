import { asset, url } from '../lib/data.js';
import { useState } from "preact/hooks";

export default function Form() {
	const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    	e.preventDefault();
		
		const formData = new FormData(e.target as HTMLFormElement);
		var object = JSON.stringify(Object.fromEntries(formData));
		const dataPost = new URLSearchParams(object).toString();
	
		const response = await fetch("/api/auth/login", {
			method: "POST",
			body: dataPost,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		
		});
		if (response.status === 200) {
			window.location.href = '/';
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
			Sign in to platform
		</h2>
		<div className="text-sm font-normal text-primary-500">
				{responseMessage && <p>{responseMessage}</p>}
			</div>
		<form className="mt-8 space-y-6" onSubmit={submit}>
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
			<div className="flex items-start flex-wrap">
				<div className="flex items-center h-5">
					<input
						id="remember"
						aria-describedby="remember"
						name="remember"
						type="checkbox"
						className="w-4 h-4 border-gray-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-zinc-700 dark:border-gray-600"
						
					/>
				</div>
				<div className="ml-3 text-sm">
					<label
						htmlFor="remember"
						className="font-medium text-gray-900 dark:text-white">Remember me</label>
				</div>
				<a
					href={url('authentication/forgot-password')}
					className="ml-auto mt-4 text-left text-sm text-primary-700 hover:underline dark:text-primary-500 w-full"
					>Lost Password?</a>
			</div>
			<button
				type="submit"
				className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>Login to your account</button>
			<div className="text-sm font-medium text-gray-500 dark:text-gray-400">
				Not registered? <a href={url('authentication/sign-up')}
					className="text-primary-700 hover:underline dark:text-primary-500"
					>Create account</a>
			</div>
		</form>
	</div>
</div>
);
}
