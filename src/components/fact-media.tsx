import INetwork from '@/models/INetwork';
import TmdbImage from './tmdb-image';
import { Typography } from './typo';
import { Card } from './ui/card';
import { MediaType } from '@/enum/mediaType';
import { GetExternalIDs } from '@/services/mediaService';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

interface IFactMediaProps {
  id: string;
  mediaType: MediaType;
  original_name: string;
  status: string;
  networks?: INetwork[];
  type?: string;
  original_language: string;
}

export default function FactMedia({
  id,
  mediaType,
  original_name,
  status,
  networks,
  type,
  original_language,
}: IFactMediaProps) {
  return (
    <Card className="w-full p-4 flex flex-col gap-4">
      <SocialLink id={id} type={mediaType} />
      {/* Original Name */}
      {original_name ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Original Name</Typography>
          <Typography>{original_name}</Typography>
        </div>
      ) : null}
      {/* Status */}
      {status ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Status</Typography>
          <Typography>{status}</Typography>
        </div>
      ) : null}
      {/* Networks */}
      {networks ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Network</Typography>
          <div className="flex gap-2">
            {networks.map((network: INetwork) => {
              return (
                <TmdbImage
                  key={network.name}
                  src={network.logo_path}
                  height={100}
                  width={100}
                  alt={network.name}
                />
              );
            })}
          </div>
        </div>
      ) : null}
      {type ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Type</Typography>
          <Typography>{type}</Typography>
        </div>
      ) : null}
      {original_language ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Original Language</Typography>
          <Typography>{original_language}</Typography>
        </div>
      ) : null}
    </Card>
  );
}

async function SocialLink({ id, type }: { id: string; type: MediaType }) {
  const data = await GetExternalIDs(id, type);
  const mediaList = [
    {
      name: 'facebook',
      socialLink: `https://www.facebook.com/${data.facebook_id}`,
      icon: '/media/facebook.svg',
      color: '#0866FF',
    },
    {
      name: 'twitter',
      socialLink: `https://twitter.com/${data.twitter_id}`,
      icon: '/media/x.svg',
      color: '#0866FF',
    },
    {
      name: 'instagram',
      socialLink: `https://instagram.com/${data.instagram_id}`,
      icon: '/media/instagram.svg',
      color: '#0866FF',
    },
  ];
  return (
    <div className="flex gap-2">
      {mediaList.map((media) => {
        return (
          <Link href={media.socialLink} key={media.name} target="_blank">
            <Button size="icon" variant="outline">
              <Image
                src={media.icon}
                width={30}
                height={30}
                alt={media.name}
                className="fill-[#0866FF]"
              />
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
