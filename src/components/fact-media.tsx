import INetwork from '@/models/INetwork';
import TmdbImage from './tmdb-image';
import { Typography } from './typo';
import { Card } from './ui/card';
import { MediaType } from '@/enum/mediaType';
import { GetExternalIDs } from '@/services/mediaService';
import Link from 'next/link';
import { Button } from './ui/button';
import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons';
import { Link as LinkIcon } from 'lucide-react';

interface IFactMediaProps {
  id: string;
  mediaType: MediaType;
  original_name: string;
  status: string;
  networks?: INetwork[];
  type?: string;
  original_language: string;
  homepage: string;
  budget?: string;
  revenue?: string;
}

export default function FactMedia({
  id,
  mediaType,
  original_name,
  status,
  networks,
  type,
  original_language,
  homepage,
  budget,
  revenue,
}: IFactMediaProps) {
  return (
    <Card className="w-full p-4 flex flex-col gap-4 h-fit">
      <SocialLink id={id} type={mediaType} homepage={homepage} />
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
          <div className="flex gap-2 flex-wrap">
            {networks.map((network: INetwork) => {
              return (
                <TmdbImage
                  key={network.name}
                  src={network.logo_path}
                  height={200}
                  width={200}
                  alt={network.name}
                  className="w-full"
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
      {budget ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Budget</Typography>
          <Typography>{budget}</Typography>
        </div>
      ) : null}
      {revenue ? (
        <div className="flex flex-col gap-1">
          <Typography level="h4">Revenue</Typography>
          <Typography>{revenue}</Typography>
        </div>
      ) : null}
    </Card>
  );
}

async function SocialLink({
  id,
  type,
  homepage,
}: {
  id: string;
  type: MediaType;
  homepage: string;
}) {
  const data = await GetExternalIDs(id, type);
  const mediaList = [
    {
      name: 'facebook',
      socialLink: `https://www.facebook.com/${data.facebook_id}`,
      icon: <SiFacebook title="Facebook" color="#0866FF" size={24} />,
    },
    {
      name: 'twitter',
      socialLink: `https://twitter.com/${data.twitter_id}`,
      icon: <SiX title="Twitter" size={24} />,
    },
    {
      name: 'instagram',
      socialLink: `https://instagram.com/${data.instagram_id}`,
      icon: <SiInstagram title="Instagram" color="#E4405F" size={24} />,
    },
    {
      name: 'homepage',
      socialLink: homepage,
      icon: <LinkIcon size={24} />,
    },
  ];
  return (
    <div className="flex gap-2">
      {mediaList.map((media) => {
        return (
          <Link href={media.socialLink} key={media.name} target="_blank">
            <Button size="icon" variant="outline">
              {media.icon}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
