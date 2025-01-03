"use client";
export default function Page() {
  return (
    <div className="absolute top-0 pt-20 left-0 w-full h-screen">
      <div className="bg-[url('/building.svg')] w-full h-full bg-cover bg-center"></div>
      <div className="absolute w-[440px] h-[225px] bottom-1 left-4 bg-[url('/weather.svg')] bg-contain bg-no-repeat pt-16 pl-8">
        <h1 className="text-[56px] font-medium text-white">20°</h1>
        <div className="flex items-end gap-10">
          <div>
            <p className="text-slate-600 text-sm">H:21° L:-19°</p>
            <p className="text-white">Jakarta, Indonesia</p>
          </div>
          <p className="text-white text-sm">Fast Wind</p>
        </div>
      </div>
    </div>
  );
}
