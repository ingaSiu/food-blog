import { TableWrapper } from '../../components/AdminPageTables/Table.styled';
import CategoriesTable from '../../components/AdminPageTables/CategoriesTable';
const AdminCategories = () => {
  return (
    <TableWrapper>
      <h1>Categories list:</h1>
      <CategoriesTable></CategoriesTable>
    </TableWrapper>
  );
};

export default AdminCategories;
