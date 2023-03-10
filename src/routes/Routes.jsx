import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import { mainLayoutRoutes, adminLayoutRoutes } from './const';
import AdminLogin from '../pages/Admin/AdminLogin';
import { ADMIN_LOGIN_PATH } from './const';
const Routes = () => {
  const { routes, Layout } = mainLayoutRoutes;
  const { adminRoutes, AdminLayout } = adminLayoutRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
      {adminRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <AdminLayout>
              <Component />
            </AdminLayout>
          }
        />
      ))}
      <Route key={ADMIN_LOGIN_PATH} path={ADMIN_LOGIN_PATH} element={<AdminLogin />} />
    </RoutesWrapper>
  );
};
export default Routes;
