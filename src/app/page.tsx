import { revalidatePath } from 'next/cache'
import RevalidateHomeButton from './RevalidateHomeButton'

async function onRevalidateHome() {
  'use server'
  revalidatePath('/')
}

export default function Home() {
  console.log(`Rendering / ${new Date().toLocaleTimeString()}`)
  return (
    <main>
      <div>{new Date().toLocaleTimeString()}</div>
      <RevalidateHomeButton onRevalidateHome={onRevalidateHome} />
    </main>
  )
}
