import Title from '@/components/title';
import { GetPopular } from '@/services/peopleService';
import ListPeople from './_components/list-people';

export default async function PeoplePage() {
  const data = await GetPopular();
  return (
    <section className="mt-20 container">
      <Title title="Popular People 💅" />
      <ListPeople data={data.results} service={GetPopular} initPage={1} />
    </section>
  );
}
