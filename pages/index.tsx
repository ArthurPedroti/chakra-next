import { Select } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Select onChange={(e) => console.log(e.target.value)}>
        <option value="arthur">Arthur</option>
        <option value="arthur2">Arthur2</option>
        <option value="arthur3">Arthur3</option>
        <option value="arthur4">Arthur4</option>
      </Select>
    </div>
  )
}

export default Home
