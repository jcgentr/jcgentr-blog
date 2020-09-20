import React from "react"

export default function Home() {
	const now = new Date().toString()
  return <div>Hello world! This is my blog! <h1>The time is {now}</h1></div>
}
