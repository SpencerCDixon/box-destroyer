import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 5px;
  padding: .5em .7em;
  font-size: 1em;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;

  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;

  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`
