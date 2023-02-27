import * as React from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import { TMDBImage } from '../../../../setup/ultils/GetImageTmdb';
import styles from './Banner.module.scss';
import { isMobile } from 'react-device-detect';
import Button from '../../../../components/Button/Button';
import { useNowPlaying, useVideos } from '../../../../services/Movies';
import Loading from '../../../../components/Loading/Loading';
import { TrendingResponseList } from '../../../../models/TrendingModel';
import Videos from '../../../../components/Videos/Videos';
import { EVideosType } from '../../../../enum/VideosType';
import Slider from 'react-slick';

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  const [openTrailer, setOpenTrailer] = React.useState(false);
  const [movieId, setMovieId] = React.useState(0);
  const { nowPlaying, isLoading } = useNowPlaying();
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  if (isLoading) return <Loading />;

  const handleClose = () => {
    sliderRef.current?.slickPlay();
    setOpenTrailer(false);
  };

  const handleOpen = (movieId: number) => {
    sliderRef.current?.slickPause();
    setMovieId(movieId);
    setOpenTrailer(true);
  };

  return (
    <div>
      <Carousel setting={settings} ref={sliderRef}>
        {nowPlaying.results.map((movie: TrendingResponseList) => {
          return (
            <BannerCard
              movie={movie}
              key={movie.id}
              handleOpenTrailer={handleOpen}
            />
          );
        })}
      </Carousel>
      {movieId && (
        <Videos
          openVideo={openTrailer}
          onClose={handleClose}
          videoId={movieId}
          type={EVideosType.TRAILER}
        />
      )}
    </div>
  );
}

function BannerCard({ movie, handleOpenTrailer }: IBannerCard) {
  return (
    <div className={styles.bannerContain}>
      <img
        src={TMDBImage(isMobile ? movie.poster_path : movie.backdrop_path)}
        loading="lazy"
        className={styles.bannerImg}
      ></img>
      <div className={styles.bannerInfo}>
        <div className={styles.bannerCard}>
          <h2 className={styles.bannerTitle}>{movie?.original_title} 👏</h2>
          <p>
            <span className={styles.bannerTextTitle}>IMDB:</span>{' '}
            {movie?.vote_average}
          </p>
          <p className={styles.bannerOverview}>{movie?.overview}</p>
          <Button onClick={() => handleOpenTrailer(movie.id)}>
            Watch trailer
          </Button>
        </div>
      </div>
    </div>
  );
}
interface IBannerCard {
  movie: TrendingResponseList;
  handleOpenTrailer: (movieId: number) => void;
}
// https://api.themoviedb.org/3/movie/505642/videos?api_key=29e9c21417a5cdd0f56b401142fdba10&language=en-US
const mockAPIYT = {
  id: 505642,
  results: [
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Legacy Is Forever',
      key: 'qnf4huhhR6A',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2023-02-24T00:00:26.000Z',
      id: '63f964d596e30b0087f7720f',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'A Conversation with Danai Gurira & Simone Manuel',
      key: 'OdDdcf8iWkI',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2023-02-10T21:00:15.000Z',
      id: '63eaf86e813cb6007941a617',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'The Impact of Wakanda',
      key: 'rp8FUnikaqk',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2023-02-08T22:00:31.000Z',
      id: '63eaed908e870200a988b793',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Now Streaming on Disney+',
      key: 'GR03EwYlVQM',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2023-02-01T15:00:11.000Z',
      id: '63dac4463dc313008233d4f5',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: "How Namor's Wings Work",
      key: 'EafV82hFEks',
      site: 'YouTube',
      size: 1080,
      type: 'Behind the Scenes',
      official: true,
      published_at: '2023-01-31T21:00:09.000Z',
      id: '63dac0333dc31300af23eb07',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Tomorrow on Disney+',
      key: 'PLy1ue1APGo',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2023-01-31T19:00:10.000Z',
      id: '63d96f3d3dc31300af2356af',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Making of: Underwater Scenes',
      key: 'UgFwJ7KBdmg',
      site: 'YouTube',
      size: 1080,
      type: 'Behind the Scenes',
      official: true,
      published_at: '2023-01-28T18:00:10.000Z',
      id: '63d5aafa12b10e007fdad5a1',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Ruth E. Carter Behind the Scenes',
      key: 'SVfxKCIZ8Ps',
      site: 'YouTube',
      size: 1080,
      type: 'Behind the Scenes',
      official: true,
      published_at: '2023-01-25T17:00:26.000Z',
      id: '63d187ca5a07f5007b0ac726',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Lift Me Up',
      key: 'amiOQoP3AaY',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2023-01-14T18:00:00.000Z',
      id: '63c71011c4f55200945f5e54',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Streaming February 1',
      key: 'zAbjLWrphHM',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2023-01-04T17:00:37.000Z',
      id: '63b5b30641aac400b84abe63',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: "Meet Namor's Warriors",
      key: 'x6Mxf9E5nrw',
      site: 'YouTube',
      size: 1080,
      type: 'Behind the Scenes',
      official: true,
      published_at: '2022-12-21T20:00:30.000Z',
      id: '63a83b5ee4b576007a9651db',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Behind the Scenes: The New Black Panther Suit',
      key: 'v0q2jL_b3QY',
      site: 'YouTube',
      size: 1080,
      type: 'Behind the Scenes',
      official: true,
      published_at: '2022-12-17T20:00:11.000Z',
      id: '63a83b6db3316b00cfbca354',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Ship',
      key: 'o4AQ-q8AeKo',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-12-02T17:00:29.000Z',
      id: '638a45451b722c00ab7e3c7c',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'The Cast Answer YOUR Questions!',
      key: '2o4dJ3YhPoU',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-11-25T19:00:02.000Z',
      id: '6382d4d6fb8346008440598d',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: "'Black Panther: Wakanda Forever' with Angela Bassett, Ryan Coogler & more | Academy Conversations",
      key: 'hWlgFRL7sZc',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-11-22T17:00:09.000Z',
      id: '63d11112e72fe8008e60a0fa',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: '#1 Movie for 2 Weeks',
      key: '8OnkjT3SZV8',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-20T17:00:06.000Z',
      id: '637d6ea87d41aa0093a7d90d',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Wakanda Forever',
      key: 'IH4Z3tgPjF8',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-19T17:00:14.000Z',
      id: '637d6fcd075288007bbc1ab4',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Global Celebration',
      key: 'kyMMq8Kz-8I',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-13T17:00:36.000Z',
      id: '63732a0ced2ac200dc7b1583',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'In Theaters Now',
      key: 'bGid3n9mqbI',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-12T17:00:25.000Z',
      id: '637329e7bf0f630091fb04a8',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Cast Unboxing',
      key: 'CT0z0LLJXmE',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-11-11T21:00:07.000Z',
      id: '637331b7028420007a1d5deb',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Now Playing',
      key: 'SY_UKKsa_Zc',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-11T17:00:18.000Z',
      id: '63733057ca4f67007fc41be7',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Guess Who',
      key: 'mqYGw8oaroQ',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-11-11T04:28:45.000Z',
      id: '637341a8bf0f630091fb1153',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Dream Team-Ups?',
      key: 'e_TqrYihR7E',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-11-10T23:30:07.000Z',
      id: '637347df8fdda9009835d984',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'In Theaters Tonight',
      key: 'Sa13L_4gfAQ',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-10T14:15:01.000Z',
      id: '636d3b0cd46537009b892033',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'In Theaters Tomorrow Night',
      key: '7ZORrCcXo24',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-09T19:30:00.000Z',
      id: '636c5ca8d7fbda00bb8ee39f',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Ryan Coogler',
      key: 'Z-alXY_6f94',
      site: 'YouTube',
      size: 1080,
      type: 'Behind the Scenes',
      official: true,
      published_at: '2022-11-07T17:00:25.000Z',
      id: '636942b0693e20008257a47d',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Live',
      key: 'R7esI4S_uYo',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-05T16:07:01.000Z',
      id: '6366f42066565a007a44b03a',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'One Week',
      key: 'P5vp_QPttf4',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-04T15:30:05.000Z',
      id: '6366f48d9653f6007d9e2044',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Lift Me Up',
      key: '8ML-5AAiM1Y',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-03T17:00:08.000Z',
      id: '636445be7f6c8d00825929db',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Namor',
      key: 'o77h301-VIE',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-11-01T17:00:28.000Z',
      id: '636152c540d0fe007d44084a',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Remember',
      key: 'w_-2mYtc1iY',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-11-01T16:00:34.000Z',
      id: '6361457e1dbc880090f59f45',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Time',
      key: 'UH0KeoB72zs',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-10-27T17:00:16.000Z',
      id: '635b503635c30a00810f6803',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Throne',
      key: 'CV3t6OfAjKs',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-10-26T17:15:00.000Z',
      id: '63596f0aa13533007c4658ef',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Long Live Wakanda',
      key: '_cCrp8gDsVA',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-10-21T03:56:55.000Z',
      id: '63521cd0076ce8007a5202f3',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'One Month',
      key: 'LjO87EB_YO8',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-10-11T18:00:06.000Z',
      id: '634719a99bcd0f008aafdf9d',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Return to Wakanda',
      key: 'V5ym9Sqc9_Y',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette',
      official: true,
      published_at: '2022-10-11T13:47:41.000Z',
      id: '6345898e1b7c59007e6e9a11',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Tickets on Sale',
      key: 'x77m59IE6Qk',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-10-03T22:00:32.000Z',
      id: '633d47285ab81a0079bf5dab',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Official Trailer',
      key: '_Z3QKkl1WyM',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer',
      official: true,
      published_at: '2022-10-03T13:00:01.000Z',
      id: '633ae8c1175051007c41e653',
    },
    {
      iso_639_1: 'en',
      iso_3166_1: 'US',
      name: 'Official Teaser',
      key: 'RlOB3UALvrQ',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser',
      official: true,
      published_at: '2022-07-24T01:22:23.000Z',
      id: '62dc9f30957e6d0056eff18d',
    },
  ],
};
