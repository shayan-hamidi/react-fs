import { PropsWithChildren, ReactNode } from 'react';
import { Outlet, useMatches } from 'react-router-dom';

type RouteContentProps = {
  routeId: string;
  component?: ReactNode;
} & PropsWithChildren;

const RouteContent = ({ routeId, component, children }: RouteContentProps) => {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const isExactRoute = currentRoute?.id === routeId;

  return isExactRoute ? children || component : <Outlet />;
};

export default RouteContent;
