import { useState } from 'react';

import { TableWrapper, TitleContainer } from '../../components/AdminPageTables/Table.styled';
import CategoriesTable from '../../components/AdminPageTables/CategoriesTable';
import ButtonMain from '../../components/Button';
import { TablePageContainer } from '../../components/AdminPageTables/Table.styled';
import CreateNewCategory from '../../components/AdminPageForms/PostCategoryForm';

const AdminCategories = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <TablePageContainer>
      <TableWrapper>
        <TitleContainer>
          <h1>Categories list:</h1>

          <ButtonMain
            onClick={() => {
              setOpenForm(true);
            }}
          >
            Create a new post
          </ButtonMain>
        </TitleContainer>
        <CategoriesTable></CategoriesTable>
      </TableWrapper>
      {openForm && <CreateNewCategory closeForm={setOpenForm} />}
    </TablePageContainer>
  );
};

export default AdminCategories;
