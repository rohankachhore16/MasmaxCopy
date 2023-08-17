import { Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const UserTableColumns = ({ customerModal, setCustomerModal }) => {
  console.log(customerModal, "_____________");
  return [
    {
      name: "name",
      label: "Full Name",
    },
    {
      name: "dataOfBirth",
      label: "DOB",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "action",
      label: "Actions",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return (
            <div>
              <IconButton
                aria-label="delete"
                onClick={() => setCustomerModal(true)}
              >
                <Visibility />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];
};
