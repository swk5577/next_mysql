import Insert from '@/app/comp/Insert'
import Link from 'next/link'
import React from 'react'

function page() {
  return (<>
  <div>Insert</div>
    <Insert/>
  <Link href="/">Home</Link>
  <Link href="./list">List</Link>
  </>

  )
}

export default page