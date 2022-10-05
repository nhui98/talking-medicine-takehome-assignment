import { Link } from "react-router-dom";

import s from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <h2 className={s.errorCode}>404</h2>
      <h1 className={s.title}>Page not found.</h1>
      <p className={s.message}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for
      </p>
      <div className={s.back}>
        <Link to={"/"}>Go back home</Link>
      </div>
    </div>
  );
};

export default NotFound;
