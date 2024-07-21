import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import YoutubeEmbed from './youtube-embed';

export function WatchTrailer({ keyYoutube }: { keyYoutube: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-fit">
          Watch trailer 🍿
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 aspect-video">
        <DialogTitle className="hidden"></DialogTitle>
        <YoutubeEmbed keyYoutube={keyYoutube} />
      </DialogContent>
    </Dialog>
  );
}
