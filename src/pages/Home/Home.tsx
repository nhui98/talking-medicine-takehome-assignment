import Spinner from "@components/common/Spinner/Spinner";
import PostCard from "@components/home/PostCard/PostCard";
import { useEffect, useState } from "react";
import FetchReddit, { RedditApiResponse } from "src/api/fetchReddit";

import s from "./Home.module.scss";

const Home = () => {
  const [redditData, setRedditData] = useState<RedditApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await FetchReddit();
        if (!data) return;
        setRedditData(data);
      } catch (error) {
        setError(true);
        if (error instanceof Error) console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading)
    return (
      <div style={{ height: "100vh" }}>
        <Spinner />
      </div>
    );

  if (error) return <h1>Error</h1>;

  return (
    <main className={s.home}>
      <section className={s.container}>
        {redditData?.children.map(({ data }) => (
          <PostCard key={data.id} data={data} />
        ))}
      </section>
    </main>
  );
};

export default Home;
