import Lottie from 'lottie-react';
import animationData from './animation.json';
const Loading = () => {
  return <Lottie animationData={animationData} loop autoplay />;
};

export default Loading;
