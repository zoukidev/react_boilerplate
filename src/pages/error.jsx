import { useRouteError } from "react-router-dom";
import Header from "../components/header";

export function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <Header showLinks={false} />
      <div className="w-2/3 m-auto bg-slate-800 mt-14 rounded px-2">
        <h1 className="font-bold block text-2xl text-center">Oops!</h1>
        <p className="text-md block text-center my-2">Sorry, an unexpected error has occurred.</p>
      </div>
      <div className="w-2/3 m-auto bg-slate-800 mt-3 rounded px-2">
        <p className="block text-center italic">{error.statusText || error.message}</p>
      </div>
    </div>
  );
}