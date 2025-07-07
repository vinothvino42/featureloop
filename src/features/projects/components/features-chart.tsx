"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChartArea } from "lucide-react";
import { CardContainer } from "@/components/card-container";

const chartData = [
  { date: "2024-04-01", flutter: 222, reactNative: 150 },
  { date: "2024-04-02", flutter: 97, reactNative: 180 },
  { date: "2024-04-03", flutter: 167, reactNative: 120 },
  { date: "2024-04-04", flutter: 242, reactNative: 260 },
  { date: "2024-04-05", flutter: 373, reactNative: 290 },
  { date: "2024-04-06", flutter: 301, reactNative: 340 },
  { date: "2024-04-07", flutter: 245, reactNative: 180 },
  { date: "2024-04-08", flutter: 409, reactNative: 320 },
  { date: "2024-04-09", flutter: 59, reactNative: 110 },
  { date: "2024-04-10", flutter: 261, reactNative: 190 },
  { date: "2024-04-11", flutter: 327, reactNative: 350 },
  { date: "2024-04-12", flutter: 292, reactNative: 210 },
  { date: "2024-04-13", flutter: 342, reactNative: 380 },
  { date: "2024-04-14", flutter: 137, reactNative: 220 },
  { date: "2024-04-15", flutter: 120, reactNative: 170 },
  { date: "2024-04-16", flutter: 138, reactNative: 190 },
  { date: "2024-04-17", flutter: 446, reactNative: 360 },
  { date: "2024-04-18", flutter: 364, reactNative: 410 },
  { date: "2024-04-19", flutter: 243, reactNative: 180 },
  { date: "2024-04-20", flutter: 89, reactNative: 150 },
  { date: "2024-04-21", flutter: 137, reactNative: 200 },
  { date: "2024-04-22", flutter: 224, reactNative: 170 },
  { date: "2024-04-23", flutter: 138, reactNative: 230 },
  { date: "2024-04-24", flutter: 387, reactNative: 290 },
  { date: "2024-04-25", flutter: 215, reactNative: 250 },
  { date: "2024-04-26", flutter: 75, reactNative: 130 },
  { date: "2024-04-27", flutter: 383, reactNative: 420 },
  { date: "2024-04-28", flutter: 122, reactNative: 180 },
  { date: "2024-04-29", flutter: 315, reactNative: 240 },
  { date: "2024-04-30", flutter: 454, reactNative: 380 },
  { date: "2024-05-01", flutter: 165, reactNative: 220 },
  { date: "2024-05-02", flutter: 293, reactNative: 310 },
  { date: "2024-05-03", flutter: 247, reactNative: 190 },
  { date: "2024-05-04", flutter: 385, reactNative: 420 },
  { date: "2024-05-05", flutter: 481, reactNative: 390 },
  { date: "2024-05-06", flutter: 498, reactNative: 520 },
  { date: "2024-05-07", flutter: 388, reactNative: 300 },
  { date: "2024-05-08", flutter: 149, reactNative: 210 },
  { date: "2024-05-09", flutter: 227, reactNative: 180 },
  { date: "2024-05-10", flutter: 293, reactNative: 330 },
  { date: "2024-05-11", flutter: 335, reactNative: 270 },
  { date: "2024-05-12", flutter: 197, reactNative: 240 },
  { date: "2024-05-13", flutter: 197, reactNative: 160 },
  { date: "2024-05-14", flutter: 448, reactNative: 490 },
  { date: "2024-05-15", flutter: 473, reactNative: 380 },
  { date: "2024-05-16", flutter: 338, reactNative: 400 },
  { date: "2024-05-17", flutter: 499, reactNative: 420 },
  { date: "2024-05-18", flutter: 315, reactNative: 350 },
  { date: "2024-05-19", flutter: 235, reactNative: 180 },
  { date: "2024-05-20", flutter: 177, reactNative: 230 },
  { date: "2024-05-21", flutter: 82, reactNative: 140 },
  { date: "2024-05-22", flutter: 81, reactNative: 120 },
  { date: "2024-05-23", flutter: 252, reactNative: 290 },
  { date: "2024-05-24", flutter: 294, reactNative: 220 },
  { date: "2024-05-25", flutter: 201, reactNative: 250 },
  { date: "2024-05-26", flutter: 213, reactNative: 170 },
  { date: "2024-05-27", flutter: 420, reactNative: 460 },
  { date: "2024-05-28", flutter: 233, reactNative: 190 },
  { date: "2024-05-29", flutter: 78, reactNative: 130 },
  { date: "2024-05-30", flutter: 340, reactNative: 280 },
  { date: "2024-05-31", flutter: 178, reactNative: 230 },
  { date: "2024-06-01", flutter: 178, reactNative: 200 },
  { date: "2024-06-02", flutter: 470, reactNative: 410 },
  { date: "2024-06-03", flutter: 103, reactNative: 160 },
  { date: "2024-06-04", flutter: 439, reactNative: 380 },
  { date: "2024-06-05", flutter: 88, reactNative: 140 },
  { date: "2024-06-06", flutter: 294, reactNative: 250 },
  { date: "2024-06-07", flutter: 323, reactNative: 370 },
  { date: "2024-06-08", flutter: 385, reactNative: 320 },
  { date: "2024-06-09", flutter: 438, reactNative: 480 },
  { date: "2024-06-10", flutter: 155, reactNative: 200 },
  { date: "2024-06-11", flutter: 92, reactNative: 150 },
  { date: "2024-06-12", flutter: 492, reactNative: 420 },
  { date: "2024-06-13", flutter: 81, reactNative: 130 },
  { date: "2024-06-14", flutter: 426, reactNative: 380 },
  { date: "2024-06-15", flutter: 307, reactNative: 350 },
  { date: "2024-06-16", flutter: 371, reactNative: 310 },
  { date: "2024-06-17", flutter: 475, reactNative: 520 },
  { date: "2024-06-18", flutter: 107, reactNative: 170 },
  { date: "2024-06-19", flutter: 341, reactNative: 290 },
  { date: "2024-06-20", flutter: 408, reactNative: 450 },
  { date: "2024-06-21", flutter: 169, reactNative: 210 },
  { date: "2024-06-22", flutter: 317, reactNative: 270 },
  { date: "2024-06-23", flutter: 480, reactNative: 530 },
  { date: "2024-06-24", flutter: 132, reactNative: 180 },
  { date: "2024-06-25", flutter: 141, reactNative: 190 },
  { date: "2024-06-26", flutter: 434, reactNative: 380 },
  { date: "2024-06-27", flutter: 448, reactNative: 490 },
  { date: "2024-06-28", flutter: 149, reactNative: 200 },
  { date: "2024-06-29", flutter: 103, reactNative: 160 },
  { date: "2024-06-30", flutter: 446, reactNative: 400 },
];

const chartConfig = {
  flutter: {
    label: "Flutter",
  },
  reactNative: {
    label: "React Native",
  },
} satisfies ChartConfig;

export default function FeaturesChart() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("30d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <CardContainer>
      <CardHeader className="relative">
        <div className="flex items-center gap-2">
          <ChartArea />
          <CardTitle>Features Requests</CardTitle>
        </div>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total number of feature requests received.
          </span>
          <span className="@[540px]/card:hidden">
            Total number of feature requests received.
          </span>
        </CardDescription>
        <div className="absolute top-4 right-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d" className="h-8 px-2.5">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 @[767px]/card:hidden"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillFlutter" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-flutter)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-flutter)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillReactNative" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-react-native)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-react-native)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value: string) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="flutter"
              type="natural"
              fill="url(#fillFlutter)"
              stroke="var(--color-flutter)"
              stackId="a"
            />
            <Area
              dataKey="reactNative"
              type="natural"
              fill="url(#fillReactNative)"
              stroke="var(--color-react-native)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent payload={undefined} />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </CardContainer>
  );
}
