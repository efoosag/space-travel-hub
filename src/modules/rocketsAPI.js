const API_URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const response = await fetch(API_URL);
  const rockets = await response.json();

  return rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
};

export default fetchRockets;
