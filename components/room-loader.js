import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'
import Lottie from 'react-lottie';
import animationData from '../pages/assets/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

export const RoomSpinner = () => (
  <div className='roomLoader'>
  <Lottie 
  options={defaultOptions}
    height={300}
    width={300}
  />
  </div>
)

export const RoomContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="room"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <RoomContainer>
      <RoomSpinner />
    </RoomContainer>
  )
}

export default Loader