import React from "react";
import { LogContent, Column } from "./styles";

const renderLogs = logs => {
  if (logs === null) return null;
  return logs.map(log => {
    return (
      <LogContent key={log.id}>
        <Column style={{ width: "248px" }}>{log.ctime}</Column>
        <Column style={{ width: "72px" }}>{log.count}</Column>
      </LogContent>
    );
  });
};

const Logs = ({ logs }) => {
  return <div>{renderLogs(logs)}</div>;
};

export default Logs;
