import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export default function Can({ children, permissions, roles }: CanProps) {
  const userCanSeenComponent = useCan({ permissions, roles });

  if (!userCanSeenComponent) {
    return null;
  }

  return <>{children}</>;
}
