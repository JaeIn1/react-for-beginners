function DetailMovie({ id, title, medium_cover_image, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title}></img>
      <h2>{id}</h2>
      <p>{title}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default DetailMovie;
