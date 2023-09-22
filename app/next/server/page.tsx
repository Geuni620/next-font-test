import { hakgyoansim } from '../../utils/fonts';

const ServerComponents = () => {
  return (
    <div
      className={`mx-auto flex h-[500px] w-[500px] items-center justify-center text-4xl ${hakgyoansim.className}`}
    >
      <p>여기는 client components 입니다.</p>
    </div>
  );
};

export default ServerComponents;
