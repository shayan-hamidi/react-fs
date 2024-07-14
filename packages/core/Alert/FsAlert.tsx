import { CheckCircleOutline } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

const FsAlert = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // 2 seconds before starting the exit transition

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        // Additional clean-up or state change can be done here if needed
      }, 500); // Match this duration with your exit animation duration

      return () => clearTimeout(timer);
    }
  }, [visible]);
  return (
    <div
      className={`alert ${visible ? "alert-enter" : "alert-exit"}`}
      style={{ position: "fixed", top: 0, margin: "0 auto" }}
    >
      <Alert icon={<CheckCircleOutline />}>
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </div>
  );
};

export default FsAlert;
