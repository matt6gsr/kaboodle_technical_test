import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AccommodationDetails from "../components/AccommodationDetails";

const AccommodationDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["accommodation", { id }],
    queryFn: async () => {
      // console.log("fetching accommodation", id);
      const res = await fetch(`/accommodation.json`);
      const data = await res.json();
      const accommodations = data.accommodations;

      return accommodations.find(
        (a: { id: string }) => parseInt(a.id) === parseInt(id ?? "")
      );
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AccommodationDetails accommodation={data}></AccommodationDetails>;
};
export default AccommodationDetail;
