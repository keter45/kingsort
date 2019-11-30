import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
  .validate {
    margin-left: 15px;
    color: #eb4034;
  }
  footer {
    display: flex;
  }
`;

export const Form = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  background: #7bd43b;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #fff;
    font-size: 14px;
  }

  &.delete {
    background: #eb4034;
    padding: 13px;
  }
  &.order {
    color: #fff;
    font-size: 22px;
    padding: 10px 15px;
    width: 100%;
    svg {
      margin-left: 5px;
      font-size: 18px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 15px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 18px;
      margin-left: 15px;
      color: #222;
    }
    & + li {
      border-top: 1px solid #eee;
    }
  }
`;
