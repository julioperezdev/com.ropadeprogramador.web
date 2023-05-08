"use client"
import Canvas from '../../canvas'
import Customizer from '@/components/customizerComponent/Customizer'
import Home from '@/components/homeComponent/Home'

export default function PocPage() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>

  )
}
