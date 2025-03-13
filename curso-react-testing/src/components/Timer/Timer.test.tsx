import { render, fireEvent, screen, act } from '@testing-library/react';
import Timer from './Timer';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('Timer component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders initial time and start button', () => {
    render(<Timer />);
    const timer = screen.getByText('Tiempo restante: 10 segundos')
    expect(timer).toBeInTheDocument();
    const boton = screen.getByText('Iniciar')
    expect(boton).toBeInTheDocument();
  });

  it('starts the timer when the start button is clicked', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Iniciar'));
    expect(screen.getByText('Tiempo restante: 10 segundos')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('Tiempo restante: 9 segundos')).toBeInTheDocument();
  });

  it('counts down correctly', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Iniciar'));
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByText('Tiempo restante: 7 segundos')).toBeInTheDocument();
  });

  it('stops counting at 0', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Iniciar'));
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByText('Tiempo restante: 0 segundos')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText('Tiempo restante: 0 segundos')).toBeInTheDocument();
  });

  it('resets the timer when the reset button is clicked', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Iniciar'));
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    fireEvent.click(screen.getByText('Reiniciar'));
    expect(screen.getByText('Tiempo restante: 10 segundos')).toBeInTheDocument();
    expect(screen.getByText('Iniciar')).toBeInTheDocument();
  });
});