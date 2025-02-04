import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;


  if (!(domain && clientId && redirectUri && audience)) {
    console.error("Faltan variables de entorno para Auth0");
    return null;
  }

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.href);
  };

  const authorizationParams = {
    redirect_uri: redirectUri,
    ...(audience && { audience }),
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={authorizationParams}
      // authorizationParams={{
      //   audience: audience,
      //   redirect_uri: redirectUri,
      // }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};


// import { AppState, Auth0Provider } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";

// type Props = {
//   children: JSX.Element;
// };

// export const Auth0ProviderWithNavigate = ({ children }: Props) => {
//   const navigate = useNavigate();

//   const domain = import.meta.env.VITE_AUTH0_DOMAIN;
//   const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
//   const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
//   const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

//   console.log(domain, clientId, redirectUri, audience);

//   const onRedirectCallback = (appState: AppState | undefined) => {
//     navigate(appState?.returnTo || window.location.pathname);
//   };

//   if (!(domain && clientId && redirectUri)) {
//     return null;
//   }

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       authorizationParams={{
//         audience: audience,
//         redirect_uri: redirectUri,
//       }}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };