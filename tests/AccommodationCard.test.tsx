import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import AccommodationCard from "../src/components/AccommodationCard";
import { Accommodation } from "../src/types/accommodation";
import "@testing-library/jest-dom";

const mockAccommodation = {
  resort: { name: "Mock Resort" },
  country: { name: "Mock Country" },
  name: "Mock Accommodation",
  description: "<p>Mock description</p>",
  rating: { id: 3 },
  images: [{ filename: "mock-image.jpg", title: "Mock Image" }],
};

describe("AccommodationCard component", () => {
  it("renders accommodation card with a resort name and country", () => {
    render(
      <AccommodationCard accommodation={mockAccommodation as Accommodation} />
    );
    expect(screen.getByText("Mock Resort, Mock Country")).toBeInTheDocument();
  });
  it("renders accommodation card with accommodation name", () => {
    render(
      <AccommodationCard accommodation={mockAccommodation as Accommodation} />
    );
    expect(screen.getByText("Mock Accommodation")).toBeInTheDocument();
  });
  it("renders accommodation card with a description", () => {
    render(
      <AccommodationCard accommodation={mockAccommodation as Accommodation} />
    );
    expect(screen.getByText("Mock description")).toBeInTheDocument();
  });
  it("renders a button with text 'Check availability'", () => {
    render(
      <AccommodationCard accommodation={mockAccommodation as Accommodation} />
    );
    expect(screen.getByText("Check availability")).toBeInTheDocument();
  });
});
