import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container Component
 *
 * Automatically manages horizontal padding based on the grid system.
 * Uses media queries defined in globals.css to adjust:
 * - Mobile: 16px padding
 * - Tablet (≥768px): 32px padding
 * - Desktop (≥1280px): 75px padding
 *
 * @example
 * <Container>
 *   <h1>Contenido</h1>
 * </Container>
 */
const Container = ({
  children,
  className = "",
  as: Element = "div",
}: ContainerProps) => {
  return (
    // container-ds
    <Element
      className={`px-12 md:px-16 lg:px-[75px] ml-auto mr-auto w-full max-w-325 ${className}`.trim()}
    >
      {children}
    </Element>
  );
};

export default Container;
