// import { cookies, headers } from 'next/headers'
// import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function Home() {
  // headers()
  // cookies()
  // useSearchParams()

  console.log(`Rendering / ${new Date().toLocaleTimeString()}`)
  return (
    <main>
      <div>{new Date().toLocaleTimeString()}</div>
    </main>
  )
}
