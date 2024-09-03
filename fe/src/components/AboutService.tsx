import { Container } from './assets/Container';
import { AboutServiceCard } from './assets/AboutServiceCard';

const AboutCardData = [
  {
    title: 'Үнэгүй хүргэлт',
    image: 'free-delivery 1.png',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida',
  },
  {
    title: 'Буцаан олголт',
    image: 'cashback 1.png',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida',
  },
  {
    title: 'Найдвартай',
    image: 'premium-quality 1.png',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida',
  },
  {
    title: '24/7 тусламж',
    image: '24-hours-support 1.png',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida',
  },
];

export const AboutService = () => {
  return (
    <Container background="bg-[#FFF]">
      <div className="w-full h-[504px] flex flex-col justify-center items-center gap-16 pb-16">
        <h2 className="font-extrabold text-[#151875]">Үйлчилгээний тухай</h2>
        <div className="w-full h-full flex justify-between items-center">
          {AboutCardData.map((item, index) => (
            <AboutServiceCard
              key={index}
              img={item.image}
              title={item.title}
              para={item.para}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
