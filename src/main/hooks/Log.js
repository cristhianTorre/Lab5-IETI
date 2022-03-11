import { useEffect, useState } from "react"

export default function Log() {
	useEffect(() => {
		call()
	}, [])

	const logged = () => {
		fetch("www.example.com")
			.then((response) => {
				// Just an example, it actually should set this token into a localStorage variable or some kind of global state.
				setToken(response.token);
				// Once the user have been authenticated the app will navigate to the landing page
				//navigate("/test");
			})
	}

	return {
		logged
    }
}