import { useQuery } from "@tanstack/react-query";
import { AccommodationAvailabilityProps } from "../types/accommodation";

const AccommodationAvailability = ({
  roomId,
}: AccommodationAvailabilityProps) => {
  const getAvailablilityData = async () => {
    const res = await fetch("/accommodation_availability.json");
    const rooms = await res.json();
    const availability = rooms.rooms.find(
      (room: { id: number; available: number; total: number }) =>
        room.id === roomId
    );

    return availability || false;
  };

  const { data, error } = useQuery({
    queryKey: ["id", { roomId }],
    queryFn: getAvailablilityData,
  });

  if (error) {
    return (
      <div className="absolute top-4 right-4">
        <div className=" text-white bg-red-400 p-2 rounded-lg text-sm">
          <p>Error: {error.message}</p>
        </div>
      </div>
    );
  }

  if (data?.available > 0) {
    return (
      <div className="absolute top-4 right-4">
        <div className=" text-white bg-green-400 p-2 rounded-lg text-sm">
          <p>
            {data.available} Room{data.available > 1 ? "s" : ""} Available
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="absolute top-4 right-4">
        <div className=" text-white bg-red-400 p-2 rounded-lg text-sm">
          <p>Currently Unavailable</p>
        </div>
      </div>
    );
  }
};

export default AccommodationAvailability;
