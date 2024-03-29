import { AccommodationCardProps } from "../types/accommodation";
import parse from "html-react-parser";
import { ratingDisplay } from "../helpers/rating-display";

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all scale-95 cursor-pointer hover:scale-100 hover:shadow-xl overflow-hidden">
      <div
        className="bg-cover relative h-[300px] bg-center"
        title={accommodation?.images[0]?.title}
        style={{
          backgroundImage: `url(${accommodation?.images[0]?.filename})`,
        }}
      >
        <div className="bg-gradient-to-t from-black/75 via-black/0 h-full w-full">
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">
              {accommodation?.resort?.name}, {accommodation?.country?.name}{" "}
            </p>
            <h3 className="font-bold text-xl">{accommodation?.name}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="line-clamp-3">{parse(accommodation?.description)}</div>
        <button className="mt-8 flex items-center gap-2" type="button">
          <span>Check availability</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-4 right-4 flex text-white">
        {ratingDisplay(accommodation?.rating?.id)}
      </div>
    </div>
  );
};

export default AccommodationCard;
