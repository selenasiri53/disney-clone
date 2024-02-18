type Props = {
    params: {
        id: string;
    }
    searchParams: {
        genre: string;
    }
};

export default function GenrePage({params: { id }, searchParams: {genre} }: Props) {
  return (
    <div>Welcome to the genre with ID: {id} and name: {genre}</div>
  )
}