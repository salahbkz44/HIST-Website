import { Link } from "react-router-dom";
import histLogo from "../assets/nav-logo-mobile.png";
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-hist-beige font-rubik text-center">
      <img src={histLogo} alt="" />
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="!mt-6 !py-4 !px-8 rounded-2xl text-white bg-hist-green hover:bg-hist-green-effect hover:underline"
      >
        Go back to Home
      </Link>
    </div>
  );
}
