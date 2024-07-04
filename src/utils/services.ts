export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/login`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ email, password })
    }).then(async res => await res.json());

    return res;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export const showNotifications = async (access_token: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/notifications`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      method: "GET",
    }).then(async res => await res.json());

    return res;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export const setToken = async (access_token: string, device_token: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/${device_token}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
      method: "PATCH",
    }).then(async res => await res.json());

    return res;
  } catch (error) {
    console.log(error);
  }
}