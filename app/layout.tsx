import { ReactNode } from "react";
import GlobalStyles from "./style/GlobalStyles";
import RootStyleRegistry from "./style/RootStyleRegistry";

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
