import { Subtitle1, Input, SearchIcon } from "@class101/ui";
import {
  Wrap,
  HeaderWrap,
  LogoWrap,
  ClassStoreWrap,
  SearchWrap,
  UserWrap,
} from "../Header/styles";

export const Header = () => {
  return (
    <Wrap>
      <HeaderWrap>
        <LogoWrap>
          <Subtitle1>CLASS101</Subtitle1>
        </LogoWrap>
        <ClassStoreWrap>
          <Subtitle1 color="#FF5600">클래스</Subtitle1>
          <Subtitle1>스토어</Subtitle1>
        </ClassStoreWrap>
        <SearchWrap label="" inline>
          <form>
            <input placeholder="찾으시는 취미가 있으신가요?" />
            <SearchIcon size={20} />
          </form>
        </SearchWrap>
        <UserWrap>
          <p>크리에이터 지원</p>
          <p>기업교육</p>
          <p>로그인</p>
        </UserWrap>
      </HeaderWrap>
    </Wrap>
  );
};
