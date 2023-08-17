import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react'
import AllUserTableOption from './allUserTableOption';
import { UserColumns, UserTableColumns } from './allUserTableColumns';
import { userData } from '../../pages/allUserList/data';
import BasicModal from './userTableModal';

const AllUserTemplateTable = () => {
  const [customerModal, setCustomerModal] = useState(false)
  const columns = UserTableColumns({ customerModal, setCustomerModal });
  const options = AllUserTableOption();
  const [user, setUser] = useState(userData)


  return (
    <div>
      <MUIDataTable
        title={"Customers "}
        data={user}
        columns={columns}
        options={options}
      />
      <BasicModal {...{ customerModal, setCustomerModal }} />
    </div>
  )
}

export default AllUserTemplateTable
