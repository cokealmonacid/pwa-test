export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/login`, {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
  
    return res;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}