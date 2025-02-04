// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Test: React.FC<{ promptName: string; pageTitle: string }> = ({
//   promptName,
//   pageTitle,
// }) => {

//   const { loginWithRedirect } = useAuth0();

//     const handleClick = () => {
//     loginWithRedirect({


//       appState: {

//         returnTo: "/",
//       },
      
//     });
//   };

  
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1592450865877-e3a318ec3522?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80')",
//       }}
//     >
//       <head>
//         <title>{pageTitle}</title>
//       </head>
//       {promptName === "login" || promptName === "signup" ? (
//         <div className="flex items-center justify-center w-[480px] bg-gray-800">
//            {/* {%- auth0:widget -%} */}

          
//         </div>
//       ) : (
//         // Auth0 Widget without wrapper
//         <>{/* Auth0 Widget goes here */} chau</> 
//       )}
//     </div>
//   );
// };

// export default Test;



// import { useEffect, useState } from "react";

// const Test = () => {
//   const [promptName, setPromptName] = useState<string | null>(null);

//   useEffect(() => {
//     // Aquí puedes obtener el prompt.name desde Auth0 o alguna API si es necesario.
//     // Esto es solo un ejemplo.
//     setPromptName("login"); // Cambia esto dinámicamente según el contexto
//   }, []);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1592450865877-e3a318ec3522?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80')",
//       }}
//     >
//       {promptName === "login" || promptName === "signup" ? (
//         <div className="flex items-center justify-center w-[480px] h-full bg-gray-700">
//           {/* Aquí iría el widget de Auth0 */}
//           <div className="text-white text-lg">Auth0 Widget</div>
//         </div>
//       ) : (
//         <div className="text-white text-lg">Auth0 Widget</div>
//       )}
//     </div>
//   );
// };

// export default Test;
