import Lottie from 'lottie-react';
import loading from './loading.json';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-grayscaleF">
      <Lottie animationData={loading} />
    </div>
  );
};

export default Loading;
