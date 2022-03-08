import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box
      className='footer'  
      align="center"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      &copy; {new Date().getFullYear()} Yogi Adam Firdaus
    </Box>
  )
}

export default Footer
