import { useParams } from 'react-router-dom';

export default function Movie() {
  const { id } = useParams();

  return <h1>Single Movie Page {id}</h1>;
}
