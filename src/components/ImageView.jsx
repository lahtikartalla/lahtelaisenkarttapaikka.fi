import React from 'react';
import { func, object, bool } from 'prop-types';
import { Image, Row, Col } from 'react-bootstrap';

const ImageView = ({ show, feature, close }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="imageView">
      <div
        className="closeIcon"
        role="button"
        onClick={close}
        onKeyPress={close}
        tabIndex={0}
      >
        X
      </div>
      <Row style={{ height: '80%' }}>
        <Col md={10} mdOffset={1} style={{ height: '100%' }}>
          <div className="imageContainer" onClick={close}>
            <Image src={feature.properties.url} thumbnail />
            <div className="imageText">
              {feature.properties.title}
              <div className="sourceText">{feature.properties.source}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

ImageView.propTypes = {
  show: bool.isRequired,
  feature: object.isRequired, // eslint-disable-line
  close: func.isRequired
};

export default ImageView;
