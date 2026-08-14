import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
     <h2 className='text-xl font-semibold'>Home</h2> 
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde id aperiam nisi temporibus quasi quaerat nam deleniti libero, accusamus repellendus odit inventore deserunt enim quae! Temporibus fugit cum porro ut nostrum nisi atque! Adipisci quibusdam quo totam, similique enim ut modi aut, esse, cum iure consectetur. Placeat ullam iusto perspiciatis.</p>
     <Button size="lg">check out</Button>
    </Container>
  )
}

export default Home