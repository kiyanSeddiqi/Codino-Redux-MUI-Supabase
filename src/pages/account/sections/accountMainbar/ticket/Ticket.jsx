import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  flexBetween,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { Add } from "@mui/icons-material";
import { tableContainer, tableStyle } from "../../../accountStyles";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import NewTicketDialog from "./NewTicketDialog";
import { useState } from "react";

function Ticket() {
  const [openTicketDialog, setOpenTicketDialog] = useState(false);

  return (
    <>
      <Box sx={flexCol(4)}>
        <Box sx={flexBetween("row")}>
          <Typography sx={sectionTitle}>تیکت های من</Typography>
          <Button onClick={() => setOpenTicketDialog(true)} variant="outlined">
            تیکت جدید
            <Add sx={{ fontSize: "20px" }} />
          </Button>
          <NewTicketDialog
            open={openTicketDialog}
            onShow={setOpenTicketDialog}
          />
        </Box>
        <TableContainer sx={tableContainer}>
          <Table sx={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>عنوان</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>بخش</TableCell>
                <TableCell>تاریخ ثبت</TableCell>
                <TableCell>عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>
                  <Box
                    sx={{
                      ...flexCol(2),
                      alignItems: "center",
                    }}
                  >
                    <SvgIcon name="noData" size={300} />
                    <Typography>هیچ داده ای یافت نشد</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Ticket;
