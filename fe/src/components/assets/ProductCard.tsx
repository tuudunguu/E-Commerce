import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

type SpecialProductCardProps = {
  img?: string;
  title?: string;
  price?: string;
  className: string;
  heigth: string;
};

export const ProductCard = ({
  img,
  title,
  price,
  className,
  heigth,
}: SpecialProductCardProps) => {
  return (
    <div className={className}>
      <div className={`w-full h-[${heigth}] relative`}>
        {img && (
          <Image
            src={`/${img}`}
            alt="Product image"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl"
          />
        )}
        <FaRegHeart className="absolute right-4 top-5 w-6 h-6 text-black" />
      </div>
      <div className="w-full  flex flex-col justify-between">
        <h5 className="font-normal text-black">{title}</h5>
        <h5 className="font-bold text-black ">{price}</h5>
      </div>
    </div>
  );
};
