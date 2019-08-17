import { useState, useEffect } from "react";
import api from "utils/api";

const useEnhance = () => {
  const [logs, updateLogs] = useState(null);
  useEffect(() => {
    if (logs !== null) {
      return;
    }
    api.get("/work_logs").then(resp => {
      updateLogs(resp.data);
    });
  });

  return { logs };
};

export default useEnhance;
