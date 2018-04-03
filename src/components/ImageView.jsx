import React from 'react';
import { func, object } from 'prop-types';
import { Image, Row, Col } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

const audioText = feature => (
  <div className="audioText">
    {feature.properties.text.split('\n').map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ))}
  </div>
);

const ImageView = ({ feature, close }) => {
  if (gtag) {
    gtag('event', 'audioView', {
      label: feature.properties.title
    });
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
              {feature.properties.type === 'audio' ?
                <ReactAudioPlayer src={feature.properties.audio} autoPlay controls controlsList="nodownload" /> : null}
              {feature.properties.type === 'audio' ? audioText(feature) : null}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

ImageView.propTypes = {
  feature: object.isRequired, // eslint-disable-line
  close: func.isRequired
};

export default ImageView;
