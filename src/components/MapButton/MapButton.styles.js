import styled from 'styled-components';

export const MapBtn = styled.button`
  display: inline-flex;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${(props) => props.theme.color.gray[800]};
  box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.1);
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 4px 6px 16px 0px rgba(71, 71, 71, 0.3);
  }
`;

export const MapBtnTitle = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
