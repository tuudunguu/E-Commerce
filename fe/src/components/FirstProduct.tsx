import { Fullscreen } from 'lucide-react';
import { Container } from './assets/Container';
import Image from 'next/image';

export const FirstProduct = () => {
  return (
    <Container className="bg-white">
      <div className="w-full h-[446px] rounded-2xl">
        <Image
          src="/image 1174.png"
          alt="Logo of pinecone"
          width={0}
          height={0}
          className="w-full h-full contain"
        />
      </div>
    </Container>
  );
};
