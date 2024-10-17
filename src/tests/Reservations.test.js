import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "../pages/Reservations";

describe("Reservations Component", () => {
  test("renders the reservation form", () => {
    render(<Reservations />);

    expect(screen.getByText(/This is the Reservations/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose a Time Slot/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    ).toBeInTheDocument();
  });

  test("allows user to fill out the form and submit", () => {
    render(<Reservations />);

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-10-20" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Anniversary" },
    });

    // Select a time slot
    fireEvent.change(screen.getByLabelText(/Choose a Time Slot/i), {
      target: { value: "18:00" },
    });

    // Submit the form
    fireEvent.click(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    );

    // Check that the reservation appears in the table
    expect(screen.getByText("2024-10-20")).toBeInTheDocument();
    expect(screen.getByText("18:00")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("Anniversary")).toBeInTheDocument();
  });

  test("disables the submit button when no time slot is selected", () => {
    render(<Reservations />);

    // Initially, the submit button should be disabled
    expect(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    ).toBeDisabled();

    // Fill out other form fields but not the slot
    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-10-20" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Anniversary" },
    });

    // Still disabled until a slot is selected
    expect(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    ).toBeDisabled();

    // Select a time slot
    fireEvent.change(screen.getByLabelText(/Choose a Time Slot/i), {
      target: { value: "18:00" },
    });

    // Now the button should be enabled
    expect(
      screen.getByRole("button", { name: /Make Your Reservation/i })
    ).toBeEnabled();
  });

  test("displays message when no reservations are made", () => {
    render(<Reservations />);
    expect(screen.getByText(/No reservations made yet/i)).toBeInTheDocument();
  });
});
