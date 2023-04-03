
import { Route, Routes } from 'react-router-dom';
import { routes } from './routers';

function PagesRouter() {
  return (
    <div>
      <Routes>
        {routes.map((item, index) => (
          <Route path={item.path} key={index} element={item.component} />
        ))}
      </Routes>
    </div>
  );
}

export default PagesRouter;
