import React from "react";
import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId?: string;
}
interface IHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: true,
              },
              background: "#888",
            },
            grid: {
              show: false,
            },
            theme: { mode: isDark ? "dark" : "light" },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            // xaxis:{
            //   categories:data?.map((price)=>)
            // },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["hotpink"],
                stops: [0, 100],
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
