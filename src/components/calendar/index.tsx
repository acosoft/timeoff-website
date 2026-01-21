import { getCalApi } from "@calcom/embed-react";
import Link from "@docusaurus/Link";
import { useEffect } from "react";
import styles from './index.module.css';

export default function () {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"schedule-pto-environment"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return <div className={styles.buttons}>
          <button
            data-cal-namespace="schedule-pto-environment"
            data-cal-link="acosoft/schedule-pto-environment"
            data-cal-config='{"layout":"month_view"}'
            className="button button--primary button--lg">
            Book your free trial
          </button>
    </div>;

};