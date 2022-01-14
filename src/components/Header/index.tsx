import { SearchIcon } from "@class101/ui";
import {
  Wrap,
  HeaderWrap,
  LogoWrap,
  ClassStoreWrap,
  TopmenuRoute,
  Topmenu,
  SearchWrap,
  UserWrap,
} from "../Header/styles";

export const Header = () => {
  const toGoGithub = () => {
    return (window.location.href =
      "https://github.com/seohyunsim/class-101-numble-challenge");
  };

  return (
    <Wrap>
      <HeaderWrap>
        <LogoWrap>
          <h2 onClick={toGoGithub}>CLASS101</h2>
        </LogoWrap>
        <ClassStoreWrap>
          <TopmenuRoute href="https://github.com/seohyunsim/class-101-numble-challenge">
            <Topmenu color="#FF5600">클래스</Topmenu>
          </TopmenuRoute>
          <Topmenu>스토어</Topmenu>
        </ClassStoreWrap>
        <SearchWrap label="" inline>
          <form>
            <input placeholder="찾으시는 취미가 있으신가요?" />
            <SearchIcon size={20} />
          </form>
        </SearchWrap>
        <UserWrap>
          <p onClick={toGoGithub}>크리에이터 지원</p>
          <p onClick={toGoGithub}>기업교육</p>
          <p onClick={toGoGithub}>로그인</p>
        </UserWrap>
      </HeaderWrap>
    </Wrap>
  );
};
