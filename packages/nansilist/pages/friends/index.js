import Link from "next/link";
import styles from "./index.module.css";

const Friends = ({ friends }) => {
  return (
    <div>
      <h2>모든 난시친구 목록</h2>
      {friends.map((friend) => (
        <div key={friend.id}>
          <h3>
            <Link href={`/friends/${friend.id}`}>
              <a className={styles.single}>{friend.name}</a>
            </Link>
          </h3>
        </div>
      ))}
      <p>총 {friends.length} 명의 친구들이 있습니다. </p>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { friends: data },
  };
};

export default Friends;
