import React from 'react';
import { css, Global } from '@emotion/react';
import { SiteMeta } from '@/components';
import { ISiteMetaProps } from '@/types';
import {
  FooterBlock, HeaderBlock, MainBlock, NavBlock
} from '@/components/Layout';

const AppLayout = ({ children, meta, }: ISiteMetaProps) => {
  const style = css``;

  return (
    <>
      <Global styles={style} />
      <SiteMeta meta={meta} />
      <HeaderBlock />
      <NavBlock />

      <MainBlock>
        {children}
      </MainBlock>

      <FooterBlock />
    </>
  );
};

export default AppLayout;
