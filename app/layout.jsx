import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental Property",
  description: "Discover your dream Rental property",
  keywords:
    "Rental property, Real estate, Property listings, Rent, Apartments, Houses, Property search",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
