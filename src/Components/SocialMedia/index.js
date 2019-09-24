import  React, {Component} from 'react';
import {SocialMedia, Social, Icon, Prag, SpanOne, SpanTwo} from './socialmedia'
import axios from 'axios';

class SociallMedia extends Component {

  state = {
    social: []
  }

  componentDidMount() {
    axios.get('js/data.json')
    .then(res =>
      { this.setState({social: res.data.social})
    })
  }
  

  render () {

    const {social} = this.state
    const socialList = social.map( (socialItem) => {
      return (
          <Social item={socialItem.id} key={socialItem.id}>
              <Icon className={socialItem.icon}></Icon>
              <Prag>
                  <SpanOne>{socialItem.title}</SpanOne>
                  <SpanTwo>{socialItem.body}</SpanTwo>
              </Prag>
          </Social>
      )
    })

    return (
      <SocialMedia>
        {socialList}
      </SocialMedia>
    );
  }
}

export default SociallMedia;
