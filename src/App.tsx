import '../src/index.css'

import { Header } from './Components/Header'
import { FirstHomeModel } from './Pages/FirstHomeModel'
import SecondHomeModel from './Pages/SecondHomeModel'

import Page3Image from './assets/page-3-image.webp'
import Page4Image from './assets/page-4-image.webp'
import Page5Image from './assets/page-5-image.webp'


function App() {

  return (
    <>
      <Header/>

      <div className='w-full h-[100vh] bg-home-page bg-cover flex'>

        <div className='flex justify-between items-center w-[90vw] ml-[5vw]'>

            <div className='w-[35vw]'>
              <h2 className='text-white font-semibold text-5xl mb-4'>
                O futuro é a razão que a gente faz planos.
              </h2>

              <h3 className='text-white font-semibold text-2xl'>
                Escolha o futuro. Comece a controlar melhor sua vida financeira com o Nubank.
              </h3>
            </div>

            <div>
              <form className='bg-white h-72 w-80 rounded-2xl flex flex-col p-4' action="">
                <h2 className='font-semibold text-2xl mb-12'>
                  Peça sua conta e cartão de crédito do Nubank
                </h2>

                <input className='pb-2 mb-10 appearance-none focus:outline-none border-b-[1px] border-gray-500 placeholder-gray-900' placeholder='Digite seu CPF' type="text" />

                <button className='bg-gray-500 text-gray-700 text-lg w-full p-2 rounded-2xl'>Continuar</button>
                
              </form>
            </div>

          </div>

      </div>

      <SecondHomeModel
          image='believe-cover'
          children='Nós acreditamos que só uma pessoa pode ter controle sobre sua vida financeira: você.'
          learnMoreText='Saiba mais sobre como fazemos isso'
      />

      <SecondHomeModel
          image='nucommunity-cover'
          childrenTitle='NuCommunity'
          children='A comunidade oficial do Nubank para você tirar dúvidas e compartilhar ideias.'
          learnMoreText='Faça parte'
      />

      <SecondHomeModel
          image='information-central-cover'
          children='Conheça nossa central de informações em caso de emergências.'
          learnMoreText='Conheça o SOS Nu'
      />


    </>  
  )
}

export default App
