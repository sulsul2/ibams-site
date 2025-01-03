import GenericTable from "@/components/GenericTable";
import React from "react";

export default function AcTable() {
  const columns = [
    { header: "AHU", accessor: "AHU" },
    { header: "Set Point Temperature (C)", accessor: "setPoint" },
    { header: "Air Flow (l/s)", accessor: "airFlow" },
    { header: "Cooling Load (Kw)", accessor: "coolingLoad" },
    { header: "Cooling Capacity (Kw)", accessor: "coolingCapacity" },
    {
      header: "CO2 Levels (ppm)",
      accessor: "co2Levels",
      render: (value: number) => <span>{value}</span>,
    },
    {
      header: "CO2 Status",
      accessor: "co2Status",
      render: (value: string) => (
        <span
          className={`px-2 py-1 rounded ${
            value === "Safe"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const data = [
    {
      AHU: 1,
      setPoint: 22,
      airFlow: 19678,
      coolingLoad: 250,
      coolingCapacity: 300,
      co2Levels: 2000,
      co2Status: "Safe",
    },
    {
      AHU: 2,
      setPoint: 23,
      airFlow: 20000,
      coolingLoad: 320,
      coolingCapacity: 350,
      co2Levels: 400,
      co2Status: "Warning",
    },
    {
      AHU: 6,
      setPoint: 21,
      airFlow: 20167,
      coolingLoad: 380,
      coolingCapacity: 380,
      co2Levels: 2100,
      co2Status: "Safe",
    },
  ];

  return <GenericTable columns={columns} data={data} />;
}
