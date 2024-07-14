import { Typography } from './typo';

export default function Title({ title }: { title: string }) {
  return (
    <div className="grid w-full max-w-6xl gap-2 my-2">
      <Typography level="h3">{title}</Typography>
    </div>
  );
}
