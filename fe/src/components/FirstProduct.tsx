import { Container } from './assets/Container';
import Image from 'next/image';

export const FirstProduct = () => {
  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full h-[494px] pt-12">
        <div className="w-full h-[446px] rounded-2xl relative">
          <Image
            src="/image 1174.png"
            alt="Logo of pinecone"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl"
          />
          <div className="w-[164px] h-[72px] absolute bottom-8 left-8 flex flex-col justify-between items-start">
            <h5 className="font-normal text-black">Wildflower Hoodie</h5>
            <h1 className="text-[36px] font-bold text-black">120’000₮</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};
