
import MainLayout from './layout/MainLayout';
import PagesRouter from './router/PagesRouter';

import './scss/app.scss';

function App() {
  return (
    <MainLayout>
      <PagesRouter />
    </MainLayout>
  );
}

export default App;
