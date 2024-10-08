import React from "react";
import { ListItem,  ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const ListItemBox = ({ icon, text }) => {
	return (
		<ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={[
              {
                minHeight: 48,
                px: 2.5,
              },
              window.open
                ? {
                  justifyContent: 'initial',
                }
                : {
                  justifyContent: 'center',
                },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
                window.open
                  ? {
                    mr: 3,
                  }
                  : {
                    mr: 'auto',
                  },
              ]}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={[
                window.open
                  ? {
                    opacity: 1,
                  }
                  : {
                    opacity: 0,
                  },
              ]}
            />
          </ListItemButton>
        </ListItem>
	);
};

export default ListItemBox;
