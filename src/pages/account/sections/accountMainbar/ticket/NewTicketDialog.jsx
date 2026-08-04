import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  ticketDialog,
  ticketDialogLabel,
  ticketDialogTitle,
} from "./ticketStyle";
import { Close, Label } from "@mui/icons-material";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { formTextField } from "../../../accountStyles";
import { useForm } from "react-hook-form";

const tickeCategories = [
  { value: "general", label: "عمومی" },
  { value: "finance", label: "امور مالی و پرداخت" },
  { value: "feedback", label: "شکایات و پیشنهادات" },
  { value: "sales", label: "فروش و مشاوره دوره ها" },
  { value: "mentors", label: "همکاری مدرسین" },
  { value: "support", label: "پشتیبانی فنی سایت" },
];

function NewTicketDialog({ open, onShow }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const handleClose = () => {
    onShow(false);
    // reset();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        sx={ticketDialog}
      >
        <Box>
          <Box sx={flexBetween("row")}>
            <DialogTitle sx={ticketDialogTitle}>ثبت تیکت جدید</DialogTitle>
            <IconButton aria-label="close" onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={flexCol(2)}
          >
            <Box>
              <InputLabel sx={ticketDialogLabel}>
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "red" }}
                >
                  *
                </Typography>{" "}
                عنوان:
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={formTextField}
                placeholder="عنوان تیکت"
              />
            </Box>
            <Box sx={flexBetween("4px", "row")}>
              <Box sx={{ width: "50%" }}>
                <InputLabel sx={ticketDialogLabel}>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: "red" }}
                  >
                    *
                  </Typography>{" "}
                  بخش:
                </InputLabel>
                <TextField type="text" fullWidth sx={formTextField} select>
                  {tickeCategories.map((item, i) => (
                    <MenuItem value={item.value} key={i}>
                      {item.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ width: "50%" }}>
                <InputLabel sx={ticketDialogLabel}>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: "red" }}
                  >
                    *
                  </Typography>{" "}
                  اولویت:
                </InputLabel>
                <TextField
                  type="text"
                  fullWidth
                  sx={formTextField}
                  placeholder="عنوان تیکت"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default NewTicketDialog;
