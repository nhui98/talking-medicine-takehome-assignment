import { AiOutlineLoading3Quarters } from "react-icons/ai";

import s from "./Spinner.module.scss";

const Spinner = () => (
  <div className={s.spinner}>
    <AiOutlineLoading3Quarters />
  </div>
);

export default Spinner;
