import type { JSX } from 'react';
import { Route, Routes } from 'react-router-dom';
import AutoTopScroll from '../common/AutoTopScroll';
type RouteItem = {
  path: string;
  components: JSX.Element;
};

type Props = {
  route: RouteItem[];
};
const AssignRoutes = ({ route = [] }: Props) => {
  return (
    <>
      <AutoTopScroll />
      <Routes>
        {route?.map((item, index) => (
          <Route
            key={index}
            path={item?.path}
            element={item?.components}
          />
        ))}
      </Routes>
    </>
  );
};

export default AssignRoutes;
