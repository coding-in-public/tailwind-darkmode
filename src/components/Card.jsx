const Card = ({ title, img, description, cta }) => {
  return (
    <article className="grid gap-2 rounded-md border-2 border-accent-1 p-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      <img src={img.src} alt={img.alt} className="aspect-video rounded-sm" />
      <p>{description}</p>
      <a
        href="#"
        className="bg-content text-bkg grid place-items-center max-w-fit px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
      >
        {cta}
      </a>
    </article>
  );
};
export default Card;
