import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box
      align="center"
      fontSize="sm"
      position="fixed"
      as="nav"
      width={'50%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      bottom="0%"
      zIndex={1}
      height={"30px"}
      padding={"5px"}
    >
      &copy; {new Date().getFullYear()} Yogi Adam Firdaus
    </Box>
  )
}

export default Footer
