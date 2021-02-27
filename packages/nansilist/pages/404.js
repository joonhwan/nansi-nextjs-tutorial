import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [time, setTime] = useState(3);
  const router = useRouter();
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      router.push("/");
      //router.go(+1);
      //router.go(-1);
    }
  }, [time]);
  return (
    <div className="not-found">
      <h1>아앗...</h1>
      <h2>페이지를 찾을 수 없네요.</h2>
      <p>
        {time} 초 뒤,{" "}
        <Link href="/">
          <a>홈</a>
        </Link>
        으로 이동
      </p>
    </div>
  );
};

export default NotFound;
