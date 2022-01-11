import { Icon } from "@class101/ui";
import {
  Wrap,
  MajorNavWrap,
  NewBadge,
  NavSpacing,
  ServeNavWrap,
} from "../Navigation/styles";

export const Navigation = () => {
  return (
    <Wrap>
      <MajorNavWrap>
        <li>
          전체 카테고리 <Icon.DropDown size={24} />
        </li>
        <li>
          1월 가입혜택
          <NewBadge />
        </li>
        <li>이벤트</li>
        <li>바로 수강</li>
        <li>신규 클래스</li>
        <li>오픈 예정</li>
      </MajorNavWrap>
      <NavSpacing />
      <ServeNavWrap>
        <li>시그니처</li>
        <li>키즈</li>
        <li>원포인트 클래스</li>
      </ServeNavWrap>
    </Wrap>
  );
};
