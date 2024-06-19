import React from 'react'
import {Popular} from '../Components/Popular/Popular.jsx'
import {Hero1} from '../Components/Hero1/Hero1.jsx'
import { Offers } from '../Components/Offers/Offers.jsx'
import {NewCollections} from '../Components/NewCollections/NewCollections.jsx'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter.jsx'
import {Footer} from '../Components/Footer/Footer.jsx'

export const Shop1 = () => {
  return (
    <div>
      <Hero1 />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      <Footer />
    </div>
  )
}
