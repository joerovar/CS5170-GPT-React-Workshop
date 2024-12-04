import { useEffect, useState } from "react";
import { createIntroImageService } from "../services/backend-service.ts";
import { CanceledError } from "../services/api-client";

const useImage = (info: string) => {
  const [image, setImage] = useState<string | null>(null); // Use a string URL for the image
  const [imgError, setImgError] = useState("");
  const [imgIsLoading, setImgIsLoading] = useState(false);

  useEffect(() => {
    setImgIsLoading(true);

    const { request, cancel } = createIntroImageService().getImage("");
    request
      .then((res) => {
        const imageURL = URL.createObjectURL(res.data); // Convert Blob to a URL
        setImage(imageURL);
        setImgIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setImgError(err.message);
        setImgIsLoading(false);
      });

    return () => cancel();
  }, [info]);

  return { image, imgError, imgIsLoading };
};

export default useImage;