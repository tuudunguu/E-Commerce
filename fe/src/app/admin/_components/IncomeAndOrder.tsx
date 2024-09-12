import { FaDollarSign } from 'react-icons/fa';
import { MdContentPaste } from 'react-icons/md';

export const IncomeAndOrder = () => {
  return (
    <>
      <div className="w-[1170px] h-[136px] flex justify-between  text-black gap-4">
        {/* First Card */}
        <div className="flex flex-col items-start justify-between  w-1/2 rounded-lg shadow-md bg-gray-50 p-4">
          <div className="flex items-center gap-3">
            <FaDollarSign />
            <h4 className="text-lg font-semibold">Орлого</h4>
          </div>
          <span className="text-3xl font-bold">235,000₮</span>
          <span className="text-sm text-gray-400">Өнөөдөр</span>
        </div>

        {/* Second Card */}
        <div className="flex flex-col items-start justify-between  w-1/2 rounded-lg shadow-md bg-gray-50 p-4">
          <div className="flex items-center gap-3">
            <MdContentPaste />
            <h4 className="text-lg font-semibold">Захилга</h4>
          </div>
          <span className="text-3xl font-bold">235,000₮</span>
          <span className="text-sm text-gray-400">Өнөөдөр</span>
        </div>
      </div>
    </>
  );
};
