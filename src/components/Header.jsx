export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-black text-white">
      <h2 className="text-2xl font-bold">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5 list-none">
        <li className="font-normal text-[13px]">로그인</li>
        <li className="font-normal text-[13px]">회원가입</li>
        <li className="font-normal text-[13px]">내클래스</li>
      </ul>
    </header>
  );
}
