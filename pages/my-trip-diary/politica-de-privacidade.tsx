import type { NextPage } from 'next'
import Head from 'next/head'

const MyTripDiary: NextPage = () => {
    return (
        <div>
            <Head>
                <title>My Trip Diary - Política de Privacidade</title>
                <meta name="description" content="My Trip Diary - Política de Privacidade"/>
                <link rel="icon" type="image/png" href="/favicon.png"/>
                <meta name="author" content="Nicolas Anelli"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
                      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
                      crossOrigin="anonymous"/>
            </Head>

            <div className="container">
                <div className="page-header">
                    <h1>Política de Privacidade</h1>
                </div>
                <h3>Acesso à localização</h3>
                <p>
                    Essa funcionalidade permite que o aplicativo utilize a localização do dispositivo para registrar o local da viagem.
                </p>

                <h3>Acesso de leitura e escrita</h3>
                <p>
                    Essa funcionalidade permite que o App possa armazenar dados e arquivos nos dispositivos de armazenamento externo do aparelho caso esteja disponível.
                </p>

                <h3>Permissão de câmera</h3>
                <p>
                    Para a utilização de imagens, é imprescindível o acesso à câmera do dispositivo móvel.
                </p>

                <h3>Alterações a esta Política de Privacidade</h3>
                <p>
                    A nossa Política de Privacidade poderá ser atualizada a qualquer tempo. Portanto, é recomendável revisar esta página para verificar se há alterações. Os usuários serão notificados sobre qualquer alteração, publicando a nova Política de Privacidade nesta página. As eventuais alterações na política entram em vigor imediatamente após serem publicadas nesta página.
                </p>
            </div>
        </div>
    )
}

export default MyTripDiary
