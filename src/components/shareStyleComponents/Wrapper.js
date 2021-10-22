import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ flex }) => flex && "flex"};
  flex-direction: ${({ flex_dc }) => (flex_dc ? "column" : "row")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  gap: ${({ gap }) => gap};

  ${({ flex_jc_c }) => flex_jc_c && "justify-content : center"};
  ${({ flex_jc_fs }) => flex_jc_fs && "justify-content : flex-start"};
  ${({ flex_jc_fe }) => flex_jc_fe && "justify-content : flex-end"};
  ${({ flex_jc_sb }) => flex_jc_sb && "justify-content : space-between"};
  ${({ flex_jc_sa }) => flex_jc_sa && "justify-content : space-around"};
  ${({ flex_jc_se }) => flex_jc_se && "justify-content : space-evenly"};

  ${({ flex_ai_c }) => flex_ai_c && "align-items : center;"};
  ${({ flex_ai_fs }) => flex_ai_fs && "align-items : flex-start;"};
  ${({ flex_ai_fe }) => flex_ai_fe && "align-items : flex-end"};

  align-content: ${({ flex_ac }) => flex_ac && "alignContent : center"};

  ${({ padding }) => `padding: ${padding}`};
`;
