import {Card, CardHeader, Image} from "@nextui-org/react";

const Offer = () => {
    return (
        <div className="bg-[#f5f6f6] mt-20">
            <div>
                <p className="flex justify-center text-4xl font-semibold md:font-bold md:text-6xl py-20 ">What We Offer</p>
                <div className="max-w-[900px] mx-auto">
  <div className="flex justify-center">
    <div className="grid grid-cols-12 grid-rows-2 gap-x-8 px-8">
      <div className="col-span-12 sm:col-span-4">
        <Card className="h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Package-1</p>
            <h4 className="text-white font-medium text-large">Rehabilitative Physical Therapy</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co/jZMThz5/offer1.jpg"
          />
        </Card>
      </div>
      <div className="col-span-12 sm:col-span-4">
        <Card className="h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Package-2</p>
            <h4 className="text-white font-medium text-large">pediatric Physical Therapy</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co/C0skMyp/offer2.webp"
          />
        </Card>
      </div>
      <div className="col-span-12 sm:col-span-4">
        <Card className="h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Package-3</p>
            <h4 className="text-white font-medium text-large">Gertiatric Physical Therapy</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co/0M80t8z/offer3.jpg"
          />
        </Card>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default Offer;