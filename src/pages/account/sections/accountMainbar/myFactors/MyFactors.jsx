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
  useTheme,
} from "@mui/material";
import {
  flexCenter,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { tableContainer, tableStyle } from "../../../accountStyles";

function MyFactors() {
  const theme = useTheme();
  return (
    <>
      <Box sx={flexCol(4)}>
        <Typography sx={sectionTitle}>فاکتور های من</Typography>
        <TableContainer sx={tableContainer}>
          <Table sx={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell>مبلغ</TableCell>
                <TableCell>تعداد دوره</TableCell>
                <TableCell>تاریخ پرداخت</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:hover": {
                    bgcolor: "menuItemBg",
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <TableCell sx={{ color: "primary.main" }}>0 تومان</TableCell>
                <TableCell>0</TableCell>
                <TableCell>پرداخت نشده</TableCell>
                <TableCell>در انتظار پرداخت</TableCell>
                <TableCell>
                  <Box sx={flexCenter("10px")}>
                    <Button>نمایش</Button>
                    <Button
                      sx={{
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "error.dark"
                            : "error.main",
                        "&:hover": {
                          bgcolor: "error.dark",
                        },
                      }}
                    >
                      پرداخت سفارش
                    </Button>
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

export default MyFactors;
