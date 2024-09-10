import { type FC, useEffect } from 'react';


const CMSPage: FC = () => {
  useEffect(() => {
    void (async () => {
      const { default: CMS } = await import('decap-cms-app');
      const { cmsConfig } = await import('~/cms');

      CMS.init(cmsConfig);
    })();
  }, []);

  return (
    <div />
  );
};

export default CMSPage;
