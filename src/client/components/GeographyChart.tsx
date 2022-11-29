import React from 'react';
import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../MockData/mockGeo";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../MockData/mockData";

const GeographyChart = ({ isDashboard = false }: { isDashboard?: boolean }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth

      data={data} // the actual data from mockData
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      features={geoFeatures.features} // got from mockData which was pulled from nivo, part of setting up data map set
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150} // added
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]} // added
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff" // wht
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100], // manually chnaged
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff", // manually changed
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined // if not the dashboard will be undefined
      }
    />
  );
};

export default GeographyChart;