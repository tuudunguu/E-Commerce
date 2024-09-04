type SpecialProductCardProps = {
  img?: string;
  title?: string;
  price?: string;
};

export const SpecialProductCard = ({
  img,
  title,
  price,
}: SpecialProductCardProps) => {
  return (
    <div
      className="w-[270px] h-[360px]  pb-6 px-6  bg-[#FFF] "
      style={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.10)' }}
    >
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full h-[225px] p-5">
          <img src={img} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-[#FB2E86]">{title}</h3>
        <h3 className="text-center font-bold text-[#151875]">{price}</h3>
      </div>
    </div>
  );
};
