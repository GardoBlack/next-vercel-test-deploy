import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'


const index = () => {
  return (
    <>
    <MainLayout>
      <h1 className={'title'}>Pricing</h1>
      <h1 className={'title'}>
        Ir al <Link href="/">home</Link>
      </h1>
    </MainLayout>

  </>
  )
}

export default index