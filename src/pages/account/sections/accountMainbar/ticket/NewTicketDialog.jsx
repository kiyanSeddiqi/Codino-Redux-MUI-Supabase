import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ticketDialog,
  ticketDialogLabel,
  ticketDialogTitle,
  ticketTextarea,
} from "./ticketStyle";
import { Close, ExpandMore, Label } from "@mui/icons-material";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { formTextField } from "../../../accountStyles";
import { useForm } from "react-hook-form";

const ticketCategories = [
  { value: "general", label: "عمومی" },
  { value: "finance", label: "امور مالی و پرداخت" },
  { value: "feedback", label: "شکایات و پیشنهادات" },
  { value: "sales", label: "فروش و مشاوره دوره ها" },
  { value: "mentors", label: "همکاری مدرسین" },
  { value: "support", label: "پشتیبانی فنی سایت" },
];

const ticketpPriorities = [
  { value: "low", label: "کم" },
  { value: "medium", label: "متوسط" },
  { value: "high", label: "بالا" },
];

function NewTicketDialog({ open, onShow }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      category: "general",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  const handleClose = () => {
    onShow(false);
  };
  const theme = useTheme();
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
                <TextField
                  {...register("category")}
                  defaultValue={ticketCategories[0].value}
                  type="text"
                  fullWidth
                  sx={formTextField}
                  select
                  slotProps={{
                    select: {
                      IconComponent: ExpandMore,
                    },
                  }}
                >
                  {ticketCategories?.map((item) => (
                    <MenuItem
                      disableRipple
                      value={item.value}
                      key={item.value}
                      sx={{ fontSize: "14px" }}
                    >
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
                  {...register("priority")}
                  type="text"
                  fullWidth
                  sx={formTextField}
                  defaultValue={ticketpPriorities[0].value}
                  select
                  slotProps={{
                    select: {
                      IconComponent: ExpandMore,
                    },
                  }}
                >
                  {ticketpPriorities?.map((item) => (
                    <MenuItem
                      disableRipple
                      value={item.value}
                      key={item.value}
                      sx={{ fontSize: "14px" }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
            <Box>
              <InputLabel sx={ticketDialogLabel}>
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "red" }}
                >
                  *
                </Typography>{" "}
                متن:
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                sx={ticketTextarea}
                multiline
                rows={3}
              />
            </Box>
            <Box>
              <InputLabel sx={ticketDialogLabel}>
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "red" }}
                >
                  *
                </Typography>{" "}
                تصویر ضمیمه
              </InputLabel>
              <TextField type="file" fullWidth sx={formTextField} />
            </Box>

            <Button sx={{ alignSelf: "flex-end" }}>ثبت تیکت جدید</Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default NewTicketDialog;
