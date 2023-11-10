'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import React from 'react';

type Props = {
  spec: Record<string, object | string | undefined>;
};

export default function ReactSwagger({ spec }: Props): React.JSX.Element {
  return <SwaggerUI spec={spec} />;
}
