export default function Title({ title }: { title: string }) {
  return (
    <div className="grid w-full max-w-6xl gap-2 my-2">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}
