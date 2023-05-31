import { useContext } from 'react'
import { ToolContext } from '../../App'
// import Button from '../Button'
import { Button } from '@chakra-ui/react'

const Pagination = () => {
  const { numbers, PrevPage, NextPage, ChangeCPage, currPage } =
    useContext(ToolContext)

  return (
    <div>
      <Button
        bgColor={'#373530'}
        color={'#f1f1ef'}
        _hover={{ bgColor: '#373530', color: '#f1f1ef' }}
        onClick={PrevPage}
        mr={2}
      >
        Prev
      </Button>
      {numbers.map((n, i) => (
        <Button
          _hover={{ bgColor: '#373530', color: '#f1f1ef' }}
          mr={2}
          className={`pageBtn ${currPage === n ? 'active' : ''}`}
          key={i}
          onClick={() => ChangeCPage(n)}
        >
          {n}
        </Button>
      ))}
      <Button
        bgColor={'#373530'}
        color={'#f1f1ef'}
        _hover={{ bgColor: '#373530', color: '#f1f1ef' }}
        onClick={NextPage}
        py={0}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
