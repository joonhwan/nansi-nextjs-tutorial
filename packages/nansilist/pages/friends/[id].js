// import { useRouter } from "next/router";
import styles from "./index.module.css";

const FriendDetails = ({ friend }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("router : ", router);
  // return <div>친구상세정보 페이지(id={id})</div>;
  console.log(friend);
  return (
    <div className={styles.detail}>
      <h2>{friend.name}</h2>
      <h3>
        <a href={`mailto: ${friend.email}`}>{friend.email}</a>
      </h3>
      <h4>
        <a href={`http://${friend.website}`}>{friend.website}</a>
      </h4>
      <p>
        <b>{friend.company.name}</b>
        <span>
          <em>"{friend.company.catchPhrase}"</em>
        </span>
      </p>
    </div>
  );
};

export default FriendDetails;

export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const friends = await res.json();
  const paths = friends.map((friend) => ({
    params: {
      id: friend.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const friend = await res.json();
  return {
    props: {
      friend,
    },
  };
};
