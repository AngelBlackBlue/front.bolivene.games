import { withAuthenticationRequired } from "@auth0/auth0-react";
import Preloader from "@/pages/Preloader";

type Props = {
  component: React.ComponentType<object>;
};

export const AuthenticationGuard = ({ component }: Props) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Preloader />
      </div>
    ),
  });

  return <Component />;
};


