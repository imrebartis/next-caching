'use client'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

// import { revalidateHome } from '../revalidate-home'

export default function SubRoute() {
  const router = useRouter()

  return (
    <main className='flex flex-col gap-3'>
      <div>
        <Button
          onClick={async () => {
            // await revalidateHome()
            await fetch('/api/revalidateHome', { method: 'POST' })
            router.push('/')
          }}
        >
          Go Home
        </Button>
      </div>
    </main>
  )
}
