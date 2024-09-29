import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className='relative h-screen  w-[500px]'>
      <Spline scene="https://prod.spline.design/bSPnKs7byL1FS411/scene.splinecode" />
      <div className='bg-[#0A0A0A] w-[500px] py-6 absolute z-10 bottom-2'></div>
    </div>
  );
}
