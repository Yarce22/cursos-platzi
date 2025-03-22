import { render, screen } from "@testing-library/react";
import { OrderItem } from "./OrderItem";
import { describe, it, expect, vi } from "vitest";
import { StatusBadge } from "../../components/StatusBadge";

vi.mock("../../components/StatusBadge", () => ({
  StatusBadge: vi.fn(({ status }) => <div>{status}</div>),
}));

describe("OrderItem", () => {
  const mockOrder = {
    id: "1234567890",
    orderDate: "2024-05-27T10:00:00.000Z",
    status: "PROCESSING",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    products: [
      {
        id: "product1",
        name: "Laptop",
        quantity: 2,
        price: 1200,
      },
      {
        id: "product2",
        name: "Mouse",
        quantity: 1,
        price: 25,
      },
    ],
    paymentMethod: "CREDIT_CARD",
    total: 2425,
  };

  it("debe renderizar correctamente los detalles del pedido", () => {
    render(<OrderItem order={mockOrder} />);

    expect(screen.getByText("Order #12345678")).toBeInTheDocument();
    expect(screen.getByText("May 27, 2024, 05:00 AM")).toBeInTheDocument();
    expect(screen.getByText("PROCESSING")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("Laptop x2")).toBeInTheDocument();
    expect(screen.getByText("$2400.00")).toBeInTheDocument();
    expect(screen.getByText("Mouse x1")).toBeInTheDocument();
    expect(screen.getByText("$25.00")).toBeInTheDocument();
    expect(screen.getByText("Payment Method")).toBeInTheDocument();
    expect(screen.getByText("CREDIT CARD")).toBeInTheDocument();
    expect(screen.getByText("Total Amount")).toBeInTheDocument();
    expect(screen.getByText("$2425.00")).toBeInTheDocument();
  });

  it("debe pasar el estado correcto a StatusBadge", () => {
    render(<OrderItem order={mockOrder} />);
    expect(StatusBadge).toHaveBeenCalledWith(
      expect.objectContaining({ status: "PROCESSING" }),
      {}
    );
  });
});