import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const interests = screen.getAllByRole("checkbox");

  expect(interests).toHaveLength(3);  // Assuming 3 checkboxes
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const interests = screen.getAllByRole("checkbox");

  interests.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);

  userEvent.type(nameInput, "John Doe");
  userEvent.type(emailInput, "john@example.com");

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const interestCheckboxes = screen.getAllByRole("checkbox");

  interestCheckboxes.forEach((checkbox) => {
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  userEvent.type(nameInput, "John Doe");
  userEvent.type(emailInput, "john@example.com");
  userEvent.click(submitButton);

  expect(screen.getByText(/thanks for signing up, john doe/i)).toBeInTheDocument();
  // You could also test for displaying selected interests if implemented
});
