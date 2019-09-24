import React, {useState, useEffect,} from 'react';
import axios from 'axios' 
import {ProfileSection, ProfileSkills, ProfileTitle, ProfileList, ProfileItem, ProfileSpan, Skills, SkillsTitle, SkillsDesc, Bar, TitleSpan, PercSpan, Parent, ParentSpan,  } from  './profile.js'

const Profile = () => {

  const [ Bars , setBar ] = useState([])

  useEffect( () => {
    axios.get('js/data.json').then(res => { setBar(res.data.bars) })
  }, [] )

  const AllBars = Bars.map( (BarItem) => {
    return (
      <Bar key={BarItem.id}>
        <TitleSpan>{BarItem.skill}</TitleSpan>
        <PercSpan>{BarItem.percentage}</PercSpan>
        <Parent>
            <ParentSpan perc={BarItem.id}></ParentSpan>
        </Parent>
      </Bar>
    )
  })

    return (

      <ProfileSection>
        <div className="container">
        
          <ProfileSkills>
              <ProfileTitle><span>My </span>Profile</ProfileTitle>

              <ProfileList>
                  <ProfileItem>
                      <ProfileSpan>Name</ProfileSpan>
                      Hamza Nabil
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileSpan>Birthday</ProfileSpan>
                      21/1/1996
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileSpan>Address</ProfileSpan>
                      Ain shams
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileSpan>Phone</ProfileSpan>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileSpan>Email</ProfileSpan>
                      hamza@hamza.com
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileSpan>Website</ProfileSpan>
                      <ProfileSpan web>www.google.com</ProfileSpan>
                  </ProfileItem>
              </ProfileList>
          </ProfileSkills>


          
          <Skills>
              <SkillsTitle>Some <span>skills</span></SkillsTitle>
              <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>

            <div>
              {AllBars}
            </div>
              
          </Skills>
          
      </div>
  </ProfileSection>
    );
}

export default Profile;
