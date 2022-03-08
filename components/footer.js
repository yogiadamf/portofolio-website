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
      padding-top="1.25rem"
      padding-bottom="1.25rem"
      zIndex={1}
    >
      &copy; {new Date().getFullYear()} Yogi Adam Firdaus
    </Box>
  )
}

export default Footer
