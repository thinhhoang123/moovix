export default function RenderList<T extends []>({
  items,
  renderItem,
}: {
  items: T;
  renderItem: Function;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item: T, index: number) => {
        return renderItem(item, index);
      })}
    </div>
  );
}
