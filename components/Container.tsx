import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fullHeight?: boolean;
}

/**
 * Container Component
 *
 * Maneja automáticamente el padding horizontal basado en el grid system.
 * Usa media queries definidas en globals.css para ajustar:
 * - Mobile: 16px padding
 * - Tablet (≥768px): 32px padding
 * - Desktop (≥1280px): 75px padding
 *
 * @example
 * <Container>
 *   <h1>Contenido</h1>
 * </Container>
 */
export default function Container({
  children,
  className = "",
  as: Element = "div",
  fullHeight = false,
}: ContainerProps) {
  const baseClasses = "container-ds";
  const heightClass = fullHeight ? "min-h-screen" : "";
  const combinedClasses = `${baseClasses} ${heightClass} ${className}`.trim();

  return <Element className={combinedClasses}>{children}</Element>;
}
