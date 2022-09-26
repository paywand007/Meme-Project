export default function Images({ name, url }) {
  return (
    <div>
      <img src={url} alt={name} />
    </div>
  );
}
