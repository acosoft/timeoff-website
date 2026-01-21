import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"schedule-pto-environment"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="schedule-pto-environment"
    calLink="acosoft/schedule-pto-environment"
    style={{width:"100%",height:"500px",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"light"}}
    
    
  />;
};
  