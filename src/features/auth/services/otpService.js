export async function sendOtp(identifier) {
  // فعلاً Mock
  console.log("OTP sent to:", identifier);

  return {
    success: true,
  };
}

export async function verifyOtp(identifier, otp) {
  // کد تستی
  const mockOtp = "1234";

  if (otp !== mockOtp) {
    throw new Error("کد تایید اشتباه است");
  }

  return {
    user: {
      id: "mock-user-id",
      phone: identifier,
    },
    accessToken: "mock-access-token",
  };
}
