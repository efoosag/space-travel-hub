const API_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await fetch(API_URL);
  const missions = await response.json();

  return missions.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    joined: false,
  }));
};

export default fetchMissions;
