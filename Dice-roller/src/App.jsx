import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Diceroller from './components/Diceroller'
library.add(fas)
export default function App() {

  return (
    <div>
      <Diceroller/>
    </div>
  )
}


