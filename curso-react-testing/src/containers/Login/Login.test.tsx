import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { MemoryRouter } from "react-router-dom"
import { Login } from "./Login";
import { SessionProvider } from "../../context/AuthContext";
import { getAuth } from "../../services/getAuth"
import { act } from "react";

vi.mock('../../services/getAuth.ts', () => ({
  getAuth: vi.fn()
}))

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

const mockGetAuth = getAuth as Mock;
const mockNavigate = vi.fn();

describe('<Login />', () => {
  const renderLogin = () => {
    return render(
      <SessionProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </SessionProvider>
    );
  }

  it('Deberia mostrar un mensaje de error', async () => {
    mockGetAuth.mockRejectedValue(new Error("Invalid credentials"))
    renderLogin()

    const userNameInput = screen.getByPlaceholderText("Username")
    const passwordInput = screen.getByPlaceholderText("Password")
    const buttonLogin = screen.getByRole("button", { name: "Login"})
    await act(() => {
      fireEvent.change(userNameInput, { target: { value: "wrongUser"} })
      fireEvent.change(passwordInput, { target: {value: "wrongPassword" } })
      fireEvent.click(buttonLogin)
    })
    const errorMessage = screen.getByText("Invalid credentials")
    expect(errorMessage).toBeInTheDocument()
  })

  it("deberia redifigir a /order", async () => {
    mockGetAuth.mockResolvedValue({ success: true })
    renderLogin()

    const userNameInput = screen.getByPlaceholderText("Username")
    const passwordInput = screen.getByPlaceholderText("Password")
    const buttonLogin = screen.getByRole("button", { name: "Login"})
    await act(() => {
      fireEvent.change(userNameInput, { target: { value: "validUser"} })
      fireEvent.change(passwordInput, { target: {value: "validPassword" } })
      fireEvent.click(buttonLogin)
    })
    await waitFor(() => {
      expect (mockGetAuth).toHaveBeenCalledWith("validUser", "validPassword")
      expect(mockNavigate).toHaveBeenCalledWith('/orders')
    })

  })

  it("deberia de cambiar el texto de show a hide y viceversa", async () => {
    renderLogin()

    const button = screen.getByText("show")
    expect(button).toBeInTheDocument()
    await act(() => [
      fireEvent.click(button)
    ])
    const toggleButton = screen.getByText("hide")
    expect(toggleButton).toBeInTheDocument()
  })
})