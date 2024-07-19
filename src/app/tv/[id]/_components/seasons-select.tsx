'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SeasonsSelect({ seasons }: { seasons: any[] }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('season', value);
    } else {
      params.delete('season');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      onValueChange={handleSelect}
      defaultValue={seasons[0].season_number}
    >
      <SelectTrigger className="w-[180px]" onChange={(e) => e.preventDefault()}>
        <SelectValue placeholder="Select seasons" />
        <SelectContent>
          {seasons.map((season) => {
            return (
              <SelectItem value={season.season_number} key={season.id}>
                {season.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
}
