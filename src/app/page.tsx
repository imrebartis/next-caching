import { unstable_noStore } from 'next/cache'

export default function Home() {
  unstable_noStore()

  console.log(`Rendering / ${new Date().toLocaleTimeString()}`)
  return (
    <main>
      <div>{new Date().toLocaleTimeString()}</div>
    </main>
  )
}
