import Head from "next/head"

const tw = `
text-4xl
text-red-500
`

export default function TW() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-xl mx-auto py-6">
        <h1 className={tw}>Tailwind</h1>
        <label className="block">
                <span className="text-gray-700">What type of event is it?</span>
                <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
      </div>
    </>
  )
}