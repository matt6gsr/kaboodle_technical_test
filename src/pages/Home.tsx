import { useEffect } from "react";
import AccommodationCard from "../components/AccommodationCard";
import { Accommodation } from "../types/accommodation";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Sort from "../components/Sort";
import { useDispatch, useSelector } from "react-redux";
import { getAccommodation } from "../redux/actions/accommodation";
import { AppDispatch } from "../main";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAccommodation());
  }, [dispatch]);

  const accommodationData = useSelector(
    (state: { accommodation: Accommodation[] }) => state.accommodation
  );
  const isLoading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const error = useSelector((state: { error: string }) => state.error);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h3 className="grid h-16 place-items-center mt-16">Error: {error}</h3>
    );
  }

  if (!isLoading && !error && !accommodationData?.length) {
    return (
      <h3 className="grid h-16 place-items-center mt-16">No accommodations</h3>
    );
  }

  if (!isLoading && !error && accommodationData?.length) {
    return (
      <>
        <Sort />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
          {accommodationData?.map((acc: Accommodation) => (
            <Link to={`/accommodation/${acc.id}`} key={acc.id}>
              <AccommodationCard key={acc.id} accommodation={acc} />
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default Home;
