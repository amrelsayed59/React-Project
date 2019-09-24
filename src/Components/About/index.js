import React from 'react';
import {CreativeSection, CreativeInfo, InfoTitle, InfoDir, InfoSpan, InfoDesc, InfoAnchor} from './about'

const About = () => {
    return (
      <CreativeSection>
        <div className="container">
            <CreativeInfo>
                <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoAnchor href="#">explicabo</InfoAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativeInfo>
        </div>
      </CreativeSection>
    );
}

export default About;
