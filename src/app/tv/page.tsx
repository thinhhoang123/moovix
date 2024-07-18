import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ETVTabList from '@/enum/tvTabList';
import TVPopular from './_components/tv-popular';
import TVTopRate from './_components/tv-top-rated';
import TVOnAir from './_components/tv-on-air';
import TVAirToday from './_components/tv-air-today';

const tabList = [
  {
    value: ETVTabList.POPULAR,
    name: 'Popular',
  },
  {
    value: ETVTabList.ON_TV,
    name: 'On Tv',
  },
  {
    value: ETVTabList.AIR_TODAY,
    name: 'Airing today',
  },
  {
    value: ETVTabList.TOP_RATED,
    name: 'Top rated',
  },
];

export default function TVPage({
  searchParams,
}: {
  searchParams?: {
    tab?: string;
  };
}) {
  const defaultTab = searchParams?.tab || ETVTabList.POPULAR;
  const tabContents = [
    {
      tab: ETVTabList.POPULAR,
      content: <TVPopular />,
    },
    {
      tab: ETVTabList.TOP_RATED,
      content: <TVTopRate />,
    },
    {
      tab: ETVTabList.ON_TV,
      content: <TVOnAir />,
    },
    {
      tab: ETVTabList.AIR_TODAY,
      content: <TVAirToday />,
    },
  ];
  return (
    <section className="mt-20 container">
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className=" z-10 flex items-center justify-start flex-wrap h-auto w-fit drop-shadow-xl">
          {tabList.map((tab) => {
            return (
              <TabsTrigger value={tab.value} key={tab.name}>
                {tab.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {tabContents.map((tabContent) => {
          return (
            <TabsContent value={tabContent.tab} key={tabContent.tab}>
              {tabContent.content}
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
