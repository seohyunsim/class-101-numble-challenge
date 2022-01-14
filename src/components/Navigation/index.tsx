import { Icon } from "@class101/ui";
import {
  Wrap,
  MajorNavWrap,
  NewBadge,
  NavSpacing,
  ServeNavWrap,
} from "../Navigation/styles";

export const Navigation = () => {
  const toGoGithub = () => {
    return (window.location.href =
      "https://github.com/seohyunsim/class-101-numble-challenge");
  };

  return (
    <Wrap>
      <MajorNavWrap>
        <li onClick={toGoGithub}>
          전체 카테고리 <Icon.DropDown size={24} />
        </li>
        <li onClick={toGoGithub}>
          1월 가입혜택
          <NewBadge />
        </li>
        <li onClick={toGoGithub}>이벤트</li>
        <li onClick={toGoGithub}>바로 수강</li>
        <li onClick={toGoGithub}>신규 클래스</li>
        <li onClick={toGoGithub}>오픈 예정</li>
      </MajorNavWrap>
      <NavSpacing />
      <ServeNavWrap>
        <li onClick={toGoGithub}>시그니처</li>
        <li onClick={toGoGithub}>키즈</li>
        <li onClick={toGoGithub}>원포인트 클래스</li>
      </ServeNavWrap>
    </Wrap>
  );
};
