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

import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import { tableContainer, tableStyle } from "../../../accountStyles";

function Consultations() {
  return (
    <>
      <Box sx={flexCol(4)}>
        <Box sx={flexBetween("row")}>
          <Typography sx={sectionTitle}>مشاوره های من</Typography>
          <Button variant="outlined">
            مشاوره جدید
            <Add sx={{ fontSize: "20px" }} />
          </Button>
        </Box>
        <TableContainer sx={tableContainer}>
          <Table sx={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell>نام مشاور</TableCell>
                <TableCell>تاریخ مشاوره</TableCell>
                <TableCell>ساعت مشاوره</TableCell>
                <TableCell>مبلغ</TableCell>
                <TableCell>وضعیت</TableCell>
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

export default Consultations;
