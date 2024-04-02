import { FC } from "react";

interface BillboardProps {
  data: BillboardType;
}
const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        className="relative aspect-square overflow-hidden rounded-xl bg-cover bg-center  md:aspect-[2.4/1]"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8  rounded-xl bg-black/15  text-center  backdrop-blur-sm ">
          <div className=" max-w-xs p-4 text-3xl font-bold text-white sm:max-w-3xl sm:text-5xl lg:text-6xl">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
