export function Card({ id, name, image }) {
  return (
    <>
      <img src={image} alt="" />
      <p>{name}</p>
    </>
  );
}
