let currentOtp = null;
let lastIdentifier = null;
let expireAt = 0;
const OTP_EXPIRE_TIME = 120000;

export async function sendOtp(identifier) {
  const now = Date.now();

  if (identifier === lastIdentifier && expireAt > now) {
    return {
      success: false,
      remaining: Math.ceil((expireAt - now) / 1000),
    };
  }
  currentOtp = Math.floor(1000 + Math.random() * 9000).toString();

  lastIdentifier = identifier;
  expireAt = now + OTP_EXPIRE_TIME;

  return {
    success: true,
    demoOtp: currentOtp,
    remaining: 120,
  };
}

export async function verifyOtp(identifier, otp) {
  if (otp !== currentOtp) {
    throw new Error("کد وارد شده اشتباه است");
  }

  return {
    user: {
      id: "mock-user-id",
      phone: identifier,
    },
    accessToken: "mock-access-token",
  };
}
