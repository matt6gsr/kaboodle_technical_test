import { ratingDisplay } from "../helpers/rating-display";
import parse from "html-react-parser";
import { AccommodationDetailsProps } from "../types/accommodation";
import AccommodationAvailability from "./AccommodationAvailability";
import { Link } from "react-router-dom";

const AccommodationDetails = ({ accommodation }: AccommodationDetailsProps) => {
  return (
    <>
      <div className="relative">
        <div
          className="h-[600px] bg-cover"
          style={{
            backgroundImage: `url(${accommodation?.images[0]?.filename})`,
            backgroundPosition: "center center",
          }}
        >
          <div className="bg-gradient-to-t from-black/75 via-black/0 h-full w-full">
            <Link to={"/"}>
              <button
                type="button"
                className="absolute border border-white text-white top-8 left-8 py-2 px-3 rounded-lg flex items-center gap-1"
              >
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
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Back</span>
              </button>
            </Link>
            <div className="absolute left-8 bottom-8 text-white">
              <p>
                {accommodation?.resort?.name}, {accommodation?.country?.name}
              </p>
              <h1 className="text-4xl font-bold">{accommodation?.name}</h1>
              <p>
                <span className="inline-flex gap-2 align-middle">
                  {ratingDisplay(accommodation?.rating?.id)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div>
          <h2 className="text-2xl font-bold">Description</h2>
          <div className="mt-4">{parse(accommodation?.description)}</div>
        </div>
        <h2 className="text-2xl font-bold mt-8">Facilities</h2>
        <div className="flex text-center mt-4">
          {accommodation?.facilities.map((facility) => (
            <div key={facility.id} className="w-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                />
              </svg>

              <span className="block mt-2 text-xs">{facility?.label}</span>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-8">Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
          {accommodation?.rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md h-[300px] bg-cover relative overflow-hidden"
              style={{
                backgroundImage: `url(${"https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"})`,
              }}
            >
              <div className="bg-gradient-to-t from-black/75 via-black/0 h-full w-full">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{room?.name}</h3>
                  <p className="text-sm">
                    {room?.type}, {room?.max_occupancy}{" "}
                    {room?.max_occupancy > 1 ? "People" : "Person"}
                  </p>
                </div>
              </div>
              {room?.price?.price && (
                <div className="absolute bottom-4 right-4 text-white font-bold">
                  <span>{room?.price?.price} / Night</span>
                </div>
              )}

              <AccommodationAvailability roomId={room.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold mt-8">Location</h2>
      </div>
      <div className="mt-4">
        <div className="relative h-[400px] filter grayscale">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.073013073073!2d${accommodation?.location?.location_long}!3d${accommodation?.location?.location_lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d1f1b1b2f1b1d%3A0x3b3b3b3b3b3b3b3b!2s${accommodation?.name}!5e0!3m2!1sen!2suk!4v1632210730004!5m2!1sen!2suk`}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AccommodationDetails;
