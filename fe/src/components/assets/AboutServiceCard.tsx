type AboutServiceCardProps = {
  img?: string;
  title?: string;
  para?: string;
};

export const AboutServiceCard = ({
  img,
  title,
  para,
}: AboutServiceCardProps) => {
  return (
    <div
      className="w-72 h-80 px-7 pt-14 pb-11 bg-[#FFF] "
      style={{ boxShadow: '0px 8px 40px 0px rgba(49, 32, 138, 0.05)' }}
    >
      <div className="w-full h-full flex flex-col justify-between items-center">
        <img src={img} className="w-16 h-16 object-cover" />
        <h4>{title}</h4>
        <h5 className="text-center">{para}</h5>
      </div>
    </div>
  );
};
