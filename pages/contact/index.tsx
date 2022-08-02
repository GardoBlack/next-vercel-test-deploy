

import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

const contact = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>Contact</h1>
            <h1 className={'title'}>
                Ir al <Link href="/">Home</Link>
            </h1>

        </MainLayout>
    )
}

export default contact