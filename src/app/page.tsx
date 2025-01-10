import clsx from "clsx";

export default function Page() {
  return (
    <div className="absolute top-0 pt-20 left-0 w-full h-screen">
      <div className="bg-[url('/building.svg')] w-full h-full bg-cover bg-center"></div>
      <Card
        position="top-6 left-40"
        title="Parking Management"
        value="40/1000 carspot"
      />
      <Card position="top-52 left-80" title="CCTV" value="100/1000 active" />
      <Card
        position="top-8 left-[440px]"
        title="Cooling Load"
        value="400 Kwh"
      />
      <Card
        position="top-[60px] left-[620px]"
        title="Elevator Waiting Time"
        value="5 s"
      />
      <Card
        position="top-[270px] left-[650px]"
        title="Fire Detection"
        value="5"
      />
      <Card
        position="top-[140px] left-[1000px]"
        title="Water Management"
        value="40 l/s"
      />
      <Card
        position="top-[80px] left-[820px]"
        title="Energy Consumption"
        value="500 Kwh (today)"
      />
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

export function Card({
  position,
  title,
  value,
}: {
  position?: string;
  title?: string;
  value?: string;
}) {
  return (
    <div
      className={clsx(
        "absolute flex flex-col items-center gap-2 pt-20",
        position
      )}
    >
      <div className="bg-white rounded-lg py-3 px-6">
        <p className="text-xs text-center text-slate-400">{title}</p>
        <p className="font-bold text-center">{value}</p>
      </div>
      <div className="bg-orange-400 border-2 border-white rounded-full h-4 w-4"></div>
      <div className="border-l-2 border-dotted border-slate-300 h-20"></div>
    </div>
  );
}
