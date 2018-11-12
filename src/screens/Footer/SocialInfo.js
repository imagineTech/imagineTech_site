import React from 'react';

const Info = () => {
  return (
    <div className="col-sm-12 social">
      <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook">
        <i className="fa fa-facebook" />
      </a>
      <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter">
        <i className="fa fa-twitter" />
      </a>
      <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble">
        <i className="fa fa-dribbble" />
      </a>
      <a
        href="#"
        data-toggle="tooltip"
        data-placement="top"
        title="Google Plus"
      >
        <i className="fa fa-google-plus" />
      </a>
      <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest">
        <i className="fa fa-pinterest" />
      </a>
      <a href="#" data-toggle="tooltip" data-placement="top" title="Flickr">
        <i className="fa fa-flickr" />
      </a>
    </div>
  );
};

export default Info;
