import moment from "moment";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ChildData } from "src/api/fetchReddit";

import s from "./PostCard.module.scss";

const PostCard = ({ data }: PostCard) => {
  const isImage = data.url.includes(".jpg", data.url.length - 4);
  const datePosted = moment(new Date(data.created * 1000)).fromNow();
  const upvotes =
    data.score < 1000
      ? data.score
      : (Math.floor(data.score / 100) / 10).toFixed(1) + "k";

  return (
    <article className={s.card}>
      <div className={s.wrapper}>
        {isImage && (
          <div className={s.image}>
            <Link to={`/`}>
              <img src={data.url} alt="" />
            </Link>
          </div>
        )}
        <div className={s.details}>
          <div className={s.subreddit}>
            <Link to={`/`}>{data.subreddit_name_prefixed}</Link>
          </div>
          <Link to={`/`}>
            <h2 className={s.title}>{data.title}</h2>
          </Link>
          {data.selftext && <p className={s.text}>{data.selftext}</p>}
          <div className={s.flex}>
            <div className={s.left}>
              <div className={s.author}>
                <Link to={`/`}>{data.author}</Link>
              </div>
              <div>{datePosted}</div>
            </div>
            <div className={s.rating}>
              <div>{upvotes}</div>
              <div className={s.icons}>
                <FiThumbsUp />
                <FiThumbsDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;

export interface PostCard {
  data: ChildData;
}
