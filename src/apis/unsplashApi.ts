import { createApi } from "unsplash-js";

const unsplashApi = () => {
  const api = createApi({
    // NOTE: Input yours access key
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? ''
  });

  return api
}

export default unsplashApi
