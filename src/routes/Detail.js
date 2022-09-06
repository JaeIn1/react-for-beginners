import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailMovie
          id={details.id}
          key={details.id}
          title={details.title}
          medium_cover_image={details.medium_cover_image}
          genres={details.genres}
        />
      )}
    </div>
  );
}
export default Detail;
