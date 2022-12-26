import { GetServerSideProps } from "next";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

import Can from "../components/Can";

export default function Metrics() {
  return (
    <>
      <h1>Metrics</h1>
      <Can permissions={["metrics.list"]}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async ctx => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient("/me");

    return {
      props: {}
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"]
  }
);
