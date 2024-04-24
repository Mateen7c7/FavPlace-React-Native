import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    async function loadedPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadedPlaces();
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
