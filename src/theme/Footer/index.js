import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;
  return (
    <div className="bg-accent-700 p-8 text-white">
      <div className="container">
        {links && links.length > 0 && <FooterLinks className="text-white"  links={links} />}
      </div>
    </div>
    // <FooterLayout
    //   style={style}
    //   links={links && links.length > 0 && <FooterLinks links={links} />}
    //   logo={logo && <FooterLogo logo={logo} />}
    //   copyright={copyright && <FooterCopyright copyright={copyright} />}
    // />
  );
}
export default React.memo(Footer);
