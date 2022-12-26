import { GetServerSideProps } from "next";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

import Can from "../components/Can";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  /*const userCanSeeMetrics = useCan({
    permissions: ["metrics.list"],
    roles: ["administrator", "editor"]
  });*/

  const permissions = ["metrics.list"];
  const roles = ["administrator", "editor"];

  return (
    <>
      <h1>Dashboard - {user?.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <Can permissions={permissions} roles={roles}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient("/me");

  return {
    props: {}
  };
});
