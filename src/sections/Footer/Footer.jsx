import React from 'react'
import SocialList from '../../components/SocialList'
import { TextLoop } from '../../../components/motion-primitives/text-loop'


function TextLoopBasic() {
  return (
    <TextLoop className='text-sm block text-gray-400'>
      <div>© 2025</div>
      <div>Built with Motion-Primitives</div>
    </TextLoop>
  );
}

function Footer() {
  return (
    <div id="footer-section" className='pt-10 md:pt-0'>
      <div className="social-wrapper text-center">
        <TextLoopBasic />
        <SocialList />
      </div>
    </div>
  )
}

export default Footer