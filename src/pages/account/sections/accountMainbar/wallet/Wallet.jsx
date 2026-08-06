import {
  Box,
  Button,
  Chip,
  Divider,
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
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import ChargeWalletDialog from "./ChargeWalletDialog";
import { walletTable, walletTableContainer } from "./walletStyles";
import { addComma } from "../../../../../utils/helpers";

const walletData = [
  {
    id: 1,
    amount: 500_000,
    currencyAmount: 0,
    date: "1405/05/10",
    description: "شارژ کیف پول",
  },
  {
    id: 2,
    amount: -250_000,
    currencyAmount: 0,
    date: "1405/05/08",
    description: "خرید دوره آموزشی",
  },
  {
    id: 3,
    amount: 180_000,
    currencyAmount: 0,
    date: "1405/05/01",
    description: "شارژ کیف پول",
  },
];

function Wallet() {
  const [showChargeDialog, setShowChargeDialog] = useState(false);

  const totalAmount = walletData.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <Box sx={flexCol(8)}>
        <Box sx={flexCol(2.5)}>
          <Typography sx={sectionTitle}>کیف پول</Typography>
          <Box sx={flexBetween(2, { xs: "column", lg: "row" })}>
            <Box sx={{ ...flexBox(2.5), alignSelf: "flex-start" }}>
              <Box sx={flexBox("10px")}>
                <SvgIcon name="wallet" size={24} />
                <Typography variant="subtitle2">موجودی کیف پول : </Typography>
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "error.main", fontWeight: 600 }}
                >
                  {addComma(totalAmount)} تومان
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={flexBox("10px")}>
                <Typography variant="subtitle2">
                  موجودی کیف پول ارزی:{" "}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "error.main", fontWeight: 600 }}
                >
                  0 USDT
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={() => setShowChargeDialog(true)}
              variant="outlined"
            >
              شارژ کیف پول
              <Add sx={{ fontSize: "20px" }} />
            </Button>
            <ChargeWalletDialog
              open={showChargeDialog}
              onShow={setShowChargeDialog}
            />
          </Box>
          <TableContainer sx={walletTableContainer}>
            <Table sx={walletTable}>
              <TableHead>
                <TableRow>
                  <TableCell>مبلغ</TableCell>
                  <TableCell>مبلغ ارزی</TableCell>
                  <TableCell>نوع</TableCell>
                  <TableCell>تاریخ پرداخت</TableCell>
                  <TableCell>توضیحات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {walletData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell sx={{ color: "primary.main" }}>
                      {addComma(Math.abs(item.amount))} تومان
                    </TableCell>
                    <TableCell sx={{ color: "primary.main" }} dir="ltr">
                      {item.currencyAmount} USDT
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={item.amount > 0 ? "واریز" : "برداشت"}
                        color={item.amount > 0 ? "success" : "warning"}
                      />
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default Wallet;
