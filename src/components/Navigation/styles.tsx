import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1176px;
  margin: 0px auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  box-shadow: rgb(239 239 239) 0px -1px 0px inset;
  line-height: 1;
`;

export const MajorNavWrap = styled.ul`
  list-style: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: bold;
  padding: 8px 0px;
  white-space: nowrap;
  margin: 0px;
  color: rgb(26, 26, 26);
  li {
    margin: 0px 28px 0px 0px;
    padding: 0px 0px 15px;
    display: flex;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid;
      padding-bottom: 13px;
    }
  }
`;

export const NewBadge = styled.div`
  margin-left: 6px;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: rgb(243, 33, 59);
`;

export const NavSpacing = styled.div`
  min-height: 30px;
  width: 1px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 12px;
  margin-right: 30px;
`;

export const ServeNavWrap = styled(MajorNavWrap)`
  font-weight: 400;
  li {
    &:hover {
      font-weight: bold;
    }
    &:nth-child(1) {
      margin-right: 32px;
    }
  }
`;
