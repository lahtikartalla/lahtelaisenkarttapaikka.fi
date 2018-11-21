import React from 'react';
import ReactMarkdown from 'react-markdown';

import infoContent from '../texts/info.md';

export default () => (
  <div className="container">
    <ReactMarkdown source={infoContent} escapeHtml={false} />
  </div>
);
