import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "yenj의 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          주어진 환경에서 성장하는 프론트엔드 개발자
          <br />
          사용자를 위한 웹을 만들고 싶은 신입 개발자입니다
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          성신여자대학교 의류산업학과 전공
          <br />
          IT비즈니스공학 복수전공(자기설계전공)
          <br />
          코드스테이츠 부트캠프 수료
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          Javascript, Typescript, HTML, CSS
          <br />
          React, Styled-components, TailwindCSS
          <br />
          Git, VS Code
        </p>
      </section>
    </>
  );
}
