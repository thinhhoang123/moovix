import Title from '@/components/title';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MediaType } from '@/enum/mediaType';
import {
  GetMovieSearch,
  GetPersonSearch,
  GetTVSearch,
} from '@/services/searchService';
import LoadMovieList from '../movie/_components/load-movie-list';
import ListPeople from '../people/_components/list-people';

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  const [movies, tvs, people] = await Promise.all([
    GetMovieSearch(1, query),
    GetTVSearch(1, query),
    GetPersonSearch(1, query),
  ]);
  const tabList = [
    {
      name: `Movies (${movies.total_results})`,
      value: MediaType.MOVIE,
    },
    {
      name: `TV Shows (${tvs.total_results})`,
      value: MediaType.TV,
    },
    {
      name: `People (${people.total_results})`,
      value: MediaType.PERSON,
    },
  ];
  const tabContents = [
    {
      tab: MediaType.MOVIE,
      content: (
        <LoadMovieList
          data={movies.results}
          initPage={1}
          service={GetMovieSearch}
          query={query}
        />
      ),
    },
    {
      tab: MediaType.TV,
      content: (
        <LoadMovieList
          data={tvs.results}
          initPage={1}
          service={GetMovieSearch}
          query={query}
        />
      ),
    },
    {
      tab: MediaType.PERSON,
      content: (
        <ListPeople
          data={people.results}
          initPage={1}
          service={GetMovieSearch}
          query={query}
        />
      ),
    },
  ];
  return (
    <section className="mt-20 container">
      <Title title="Search results 🔍" />
      <Tabs defaultValue={MediaType.MOVIE} className="w-full">
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
