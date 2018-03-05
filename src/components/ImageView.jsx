import React from 'react';
import { Image, Row, Col, Grid } from 'react-bootstrap';

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
      <Row>
        <Col md={2}>
          <div className="imageContainer">
            <Image src={feature.properties.url} responsive />
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

export default ImageView;
