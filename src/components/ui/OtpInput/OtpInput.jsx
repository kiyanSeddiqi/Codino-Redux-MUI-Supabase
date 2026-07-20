import { Box, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { otpTextfield } from "./otpStyles";

function OtpInput({ length = 4, onChange }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    onChange?.(newOtp.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key !== "Backspace") return;

    if (otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      onChange?.(newOtp.join(""));
      return;
    }

    if (index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      onChange?.(newOtp.join(""));

      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    const values = Array(length).fill("");

    pasted.split("").forEach((char, i) => {
      values[i] = char;
    });

    setOtp(values);

    onChange?.(values.join(""));

    inputRefs.current[Math.min(pasted.length, length) - 1]?.focus();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 2,
        direction: "ltr",
      }}
    >
      {otp.map((digit, index) => (
        <TextField
          key={index}
          value={digit}
          inputRef={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          sx={otpTextfield}
        />
      ))}
    </Box>
  );
}

export default OtpInput;
