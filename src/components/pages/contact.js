import React from "react";
import aboutMe from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div>
      <div className="contact-me-wrapper">
        <div
          className="left-column-image"
          style={{
            background: "url(" + aboutMe + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="right-colunm-contact">
          <div className="contact-header">
            <FontAwesomeIcon icon="user-circle" />
          </div>

          <div className="contact-info">
            <div className="contact-bullet-points">
              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="phone-alt" />
                </div>
                <div className="text">+1 786-614-7575</div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="envelope" />
                </div>
                <div className="text">stancolslick9@outlook.com</div>
              </div>

              <div className="bullet-point-group">
                <div className="icon">
                  <FontAwesomeIcon icon="map-marked-alt" />
                </div>
                <div className="text">Hollywood, Fl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
