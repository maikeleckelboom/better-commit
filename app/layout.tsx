import { ReactNode } from "react";
import GlobalStyles from "./components/GlobalStyles";
import RootStyleRegistry from "./components/RootStyleRegistry";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Your App</title>
      </head>
      <body>
        <RootStyleRegistry>
          <div>
            <GlobalStyles />
            {children}
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
