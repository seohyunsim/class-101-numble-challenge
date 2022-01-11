import styled from "styled-components";
import { FormGroup } from "@class101/ui";

export const Wrap = styled.div`
  box-sizing: border-box;
  vertical-align: baseline;
  text-align: left;
  position: relative;
`;

export const HeaderWrap = styled.div`
  display: flex;
  max-width: 1176px;
  margin: 0 auto;
  align-items: center;
  padding: 20px 0px;
  -webkit-box-align: center;
  h2 {
    margin: 0;
  }
`;

export const LogoWrap = styled.div`
  margin-right: 28px;
`;

export const ClassStoreWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 36px;
`;

export const SearchWrap = styled(FormGroup)`
  width: 420px;
  margin: 0px;
  form {
    position: relative;
    flex: 1 1 0%;
  }
  input {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: -0.15px;
    margin: 0px;
    width: 100%;
    padding: 12px 52px 10px 16px;
    background: rgb(248, 248, 249);
    border: 1px solid rgb(248, 248, 249);
    box-sizing: border-box;
    border-radius: 24px;
    text-align: left;
    color: rgb(26, 26, 26);
    &:hover {
      border: 1px solid rgb(248, 248, 249);
    }
    &:focus {
      border: 1px solid rgb(248, 248, 249);
    }
  }
  svg {
    border: none;
    outline: none;
    padding: 0px;
    background-color: transparent;
    position: absolute;
    right: 16px;
    cursor: pointer;
    top: calc(50% - 10px);
  }
`;

export const UserWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-left: auto;
  p {
    font-size: 14px;
    cursor: pointer;
  }
`;
