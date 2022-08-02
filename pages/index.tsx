

import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout'

export default function HomeApp() {
  return (
    <>
      <MainLayout>
        <h1 className={'title'}>Home Page</h1>
        <h1 className={'title'}>
          Ir al <Link href="/about">About</Link>
        </h1>
      </MainLayout>

    </>

  )
}
