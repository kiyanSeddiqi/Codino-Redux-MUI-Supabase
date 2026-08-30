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
} from "@mui/material";
import {
  ticketDialog,
  ticketDialogLabel,
  ticketDialogTitle,
  ticketTextarea,
} from "./ticketStyle";
import { Close, ExpandMore } from "@mui/icons-material";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { formTextField } from "../../../accountStyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileTicket } from "../../../../../features/auth/schemas/profileSchema";
import { useSnackbar } from "../../../../../hooks/useSnackbar";

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
  const { success } = useSnackbar();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      category: "general",
      priority: "low",
    },
    resolver: zodResolver(profileTicket),
    mode: "all",
  });

  function onSubmit(data) {
    console.log(data);
    success("تیکت شما با موفقیت ثبت شد");
    handleClose();
  }

  const handleClose = () => {
    onShow(false);
    reset();
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
            <IconButton disableRipple aria-label="close" onClick={handleClose}>
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
                {...register("title")}
                type="text"
                fullWidth
                sx={formTextField}
                placeholder="عنوان تیکت"
                helperText={errors.title?.message}
                error={!!errors.title}
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
                  defaultValue={ticketpPriorities[0].value}
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
                {...register("description")}
                type="text"
                fullWidth
                sx={ticketTextarea}
                multiline
                rows={3}
                helperText={errors.description?.message}
                error={!!errors.description}
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
              <TextField
                {...register("image")}
                type="file"
                fullWidth
                sx={formTextField}
              />
            </Box>

            <Button
              type="submit"
              disabled={!isValid}
              sx={{ alignSelf: "flex-end" }}
            >
              ثبت تیکت جدید
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default NewTicketDialog;
