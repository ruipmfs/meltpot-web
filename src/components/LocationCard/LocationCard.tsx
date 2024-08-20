interface ILocationCardProps {
  location: string;
  img: string;
}

const LocationCard = ({ location, img }: ILocationCardProps) => {
  return (
    <div className="mp-location-card">
      <img className="mp-location-card__image" src={img} />
      <h1 className="mp-location-card__name">{location}</h1>
    </div>
  );
};

export default LocationCard;
