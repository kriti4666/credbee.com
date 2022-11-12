import React from 'react'
import DemoForm from '../Pricing/DemoForm/DemoForm'
import { DemoBottomSection, DemoHeroSection } from './Demo.styles'
import { LOGO } from '../LOGO/LOGO';

const Demo = () => {
  return (
    <div>
    <DemoHeroSection className='DemoHeroSection'>
        <div className="DemoHeroWrapper">
            <div className="BGshape"></div>
            <div className='DemoHeroContainer'>
                    <div className="header">
                        {/* <Link to="/"> */}
                        <LOGO fill="white"/>
                        {/* </Link> */}
                    </div>
                    <div className='mainHeroSection'>
                        <div className='leftSection'>
                            <h1 className="HeroHeader">Elevate Your Subscription Experience with Credbee</h1>
                            <p className='HeroSubHeader'>Get a demo that's customized around your unique subscription workflows and pain-points.</p>
                        </div>
                        <div className='rightSection'>
                            <DemoForm style={{width:"45%"}}></DemoForm>
                        </div>
                    </div>
            </div>
        </div>
    </DemoHeroSection>
    <DemoBottomSection className='DemoBottomSection'>
        <div className="DemoBottomContainer">
            <div className='companyLogos'>
                <img width="160" height="80" src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/logos/okta.svg" alt="" />
                <img width="160" height="80" src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/logos/calendly.svg" alt="" />
                <img width="160" height="80" src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/logos/freshworks.svg" alt="" />
                <img width="160" height="80" src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/logos/study-com.svg" alt="" />
                <img width="160" height="80" src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/logos/doodle.svg" alt="" />
                <img width="160" height="80" src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/logos/envoy.svg" alt="" />
            </div>
            <div className='customerReview'>
                <div className="leftSection">
                    <div className="CustomerMessagewithName">
                        <div className="ReviewContent">Credbee is a fantastic solution that really meets the needs of any online business from Saas to e-commerce. I have had experience with many platforms both as a leader and as a consultant, and Credbee is the platform I have liked the most.</div>
                        <div className="belowReviewContent">
                            <div className='NameDesignation'>
                                <div className="customerAvatar">
                                    <img  src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/dailius-wilson.png" alt="" /></div>
                                <h1>Dailius Wilson</h1>
                                <p>VP Sales & Growth, GetAccept</p>
                            </div>
                            <img src='https://webstatic.chargebee.com/assets/web/536/images/pricings/arrow.svg' alt=""/>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                <div className="CustomerImage">
                    <img src="https://webstatic.chargebee.com/assets/web/536/images/schedule-a-demo/dailius-wilson.png" alt="" />
                </div>
                </div>
            </div>
            <div className='badges'>
                <img width="120" height="190" src="https://webstatic.chargebee.com/assets/web/536/images/g2-badge-collection/chargebee-top-100-fastest-growing-products-g2.svg" alt="" />
                <img width="120" height="180" src="https://webstatic.chargebee.com/assets/web/536/images/g2-badge-collection/chargebee-best-results-subscription-management-g2-spring.svg" alt="" />
                <img width="120" height="180" src="https://webstatic.chargebee.com/assets/web/536/images/g2-badge-collection/chargebee-leader-subscription-management-g2-spring.svg" alt="" />
            </div>
        </div>
    </DemoBottomSection>
    </div>
  )
}

export default Demo