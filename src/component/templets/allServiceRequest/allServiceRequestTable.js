import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import AlServiceRequestOptions from "./alServiceRequestOptions";
import AllServiceRequestColumns from "./allServiceRequestColumns";
import { AllServiceRequest } from "../../pages/allServiceRequest/data";

const AllServiceRequestTable = () => {
  const [serviceRequest, setServiceRequest] = useState(AllServiceRequest);
  const option = AlServiceRequestOptions();
  const column = AllServiceRequestColumns();
  return (
    <>
      <MUIDataTable
        options={option}
        columns={column}
        data={serviceRequest}
        title="Service Requests"
      />
    </>
  );
};

export default AllServiceRequestTable;
