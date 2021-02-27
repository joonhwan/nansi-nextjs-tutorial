import Link from "next/link";
import Head from "next/head";
import styles from "./index.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>난시난시 홈</title>
        <meta name="description" content="난시난시의 홈입니다." />
      </Head>
      <div className="content">
        <h1 className={styles.title}>난시난시 홈페이지</h1>
        <p className={styles.text}>
          Enim voluptate non esse ipsum amet laborum cillum veniam dolor sunt
          labore dolore aliqua. Aute ipsum dolore incididunt ipsum deserunt
          consequat qui ex aliquip. Sit pariatur nostrud occaecat est consequat
          quis nulla ad do ut eu. Quis labore irure consequat labore proident
          anim non dolor deserunt aute nulla aliqua qui. Dolor non quis veniam
          nulla Lorem. Aliqua anim non labore nisi eiusmod est ullamco
          consectetur ipsum velit dolore ipsum esse amet. Cupidatat ut consequat
          amet ut ut enim
        </p>
        <p>
          pariatur exercitation voluptate dolor id laboris labore cillum culpa.
          Est ullamco amet tempor laborum consectetur adipisicing nulla mollit
          in incididunt sint eu. Pariatur qui deserunt commodo dolore enim
          consequat nostrud velit ea fugiat tempor non. Dolore voluptate in elit
          est reprehenderit ipsum velit. Eiusmod ex enim commodo amet tempor
          anim amet sunt et.
        </p>
        <Link href="/list">
          <a className={styles.btn}>난시목록 보기</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
