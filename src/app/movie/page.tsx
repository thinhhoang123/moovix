import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EMoiveTabList from '@/enum/movieTabList';
import MoviePopular from './_components/movie-popular';
import MovieTopRate from './_components/movie-top-rate';
import MovieNowPlaying from './_components/movie-now-playing';
import MovieUpComing from './_components/movie-up-coming';
const tabList = [
  {
    value: EMoiveTabList.POPULAR,
    name: 'Popular',
  },
  {
    value: EMoiveTabList.NOW_PLAYING,
    name: 'Now Playing',
  },
  {
    value: EMoiveTabList.UPCOMING,
    name: 'Up coming',
  },
  {
    value: EMoiveTabList.TOP_RATED,
    name: 'Top rated',
  },
];

export default function MoviePage({
  searchParams,
}: {
  searchParams?: {
    tab?: string;
  };
}) {
  const defaultTab = searchParams?.tab || EMoiveTabList.POPULAR;
  const tabContents = [
    {
      tab: EMoiveTabList.POPULAR,
      content: <MoviePopular />,
    },
    {
      tab: EMoiveTabList.TOP_RATED,
      content: <MovieTopRate />,
    },
    {
      tab: EMoiveTabList.NOW_PLAYING,
      content: <MovieNowPlaying />,
    },
    {
      tab: EMoiveTabList.UPCOMING,
      content: <MovieUpComing />,
    },
  ];
  console.log(defaultTab);
  return (
    <section className="mt-20 container">
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="sticky top-[64px] z-10">
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
