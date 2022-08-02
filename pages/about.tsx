
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'





const AboutPage = () => {
    return (
        <>
            <MainLayout>
                <DarkLayout>
                    <h1 className={'title'}>About Page</h1>
                    <h1 className={'title'}>
                        Ir al <Link href="/">Home</Link>
                    </h1>
                </DarkLayout>
            </MainLayout>
        </>
    )
}

// No funciono
// AboutPage.getLayout = function getLayout(page) {
//     <MainLayout>
//         <DarkLayout>
//             {page}

//         </DarkLayout>
//     </MainLayout>
// }

export default AboutPage;
