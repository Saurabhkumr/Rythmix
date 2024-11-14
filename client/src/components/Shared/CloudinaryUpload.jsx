import { useState, useEffect } from "react";
import { CLOUDINARY_UPLOAD_PRESET } from "../../../config";

console.log("Upload preset:", CLOUDINARY_UPLOAD_PRESET);

const CloudinaryUpload = () => {
  const [cloudinaryReady, setCloudinaryReady] = useState(false);

  useEffect(() => {
    let interval; // Declare interval variable here so it can be accessed in cleanup function

    if (window.cloudinary) {
      setCloudinaryReady(true);
    } else {
      interval = setInterval(() => {
        if (window.cloudinary) {
          setCloudinaryReady(true);
          clearInterval(interval);
        }
      }, 100); // Check every 100ms
    }

    // Cleanup on unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const uploadImageWidget = () => {
    if (cloudinaryReady && window.cloudinary) {
      console.log("Opening Cloudinary widget...");
      const myUploadWidget = window.cloudinary.openUploadWidget(
        {
          cloudName: "dgif4h8fi",
          uploadPreset: CLOUDINARY_UPLOAD_PRESET,
          sources: ["local"], // Customize the sources if needed
        },
        function (error, result) {
          if (!error && result.event === "success") {
            console.log("Upload success:", result.info);
            // Handle the successful upload here
          } else {
            if (error) {
              alert("Could not upload");
              console.log("Upload error:", error);
            }
          }
        }
      );
      myUploadWidget.open();
    } else {
      console.error("Cloudinary widget is not loaded yet.");
    }
  };

  return (
    <button
      className="bg-white text-black rounded-full p-4 font-semibold"
      onClick={uploadImageWidget}
      disabled={!cloudinaryReady}
    >
      {cloudinaryReady ? "Select Song" : "Loading..."}
    </button>
  );
};

export default CloudinaryUpload;
