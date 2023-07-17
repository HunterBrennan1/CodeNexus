import Footer from './footer';
import Bar from './barDivider';

export const Prosection = () => {
  return (
    <section>
      <div className="pro_header_wrapper">
        <div className="pro_section_header">
          <h1 className="pro_header_title">Become a Pro</h1>
          <div className="pro_desc_containter">
            <p className="pro_header_desc">Unlock all the features of Code Nexus, remove ads and support us.</p>
          </div>
        </div>
      </div>
      <div className="pro_section_content_wrapper">
        <div className="pro_section_content_container">
          <div className="pro_free_container">
            <div>
              <div className='pro_free_header'>
                <h1 className="pro_free_header_title">Free</h1>
                <p className="pro_free_text">Have fun with CodeNexus!</p>
              </div>
              <div className="pro_free_info">
                <h2 className="pro_free_header_title">$0</h2>
                <p className="pro_gray_text">per month</p>
              </div>
              <ul className='pro_list_free'>
                <li className="pro_list_item">Ads visable on the page</li>
                <li className="pro_list_item">Find limited tools</li>
                <li className="pro_list_item">12 ready developer tools</li>
                <li className="pro_list_item">Unable to save favorites</li>
                <li className="pro_list_item">Basic public profile</li>
                <li className="pro_list_item">Limited customization</li>
              </ul>
            </div>
          </div>
          <div className="pro_pro_container">
            <div>
              <div className='pro_pro_header'>
                <h1 className="pro_pro_header_title">Pro</h1>
                <p className="pro_free_text">Go Pro to get all the features and support the future development. Cancel anytime.</p>
              </div>
              <div className="pro_pro_info">
                <h2 className="pro_free_header_title">$3</h2>
                <p className="pro_gray_text">per month, $36 billed yearly</p>
              </div>
              <ul className="pro_list_free">
                <li className="pro_list_item_pro">Remove ads</li>
                <li className="pro_list_item_pro">Create custom tools</li>
                <li className="pro_list_item_pro">Unlimited Tools available</li>
                <li className="pro_list_item_pro">Save unlimited tools</li>
                <li className="pro_list_item_pro">View trending apps</li>
                <li className="pro_list_item_pro">Unlimited projects</li>
                <li className="pro_list_item_pro">Work with libraries</li>
                <li className="pro_list_item_pro">Advanced search options</li>
                <li className="pro_list_item_pro">Pro Profile page</li>
                <li className="pro_list_item_pro">Private Profile</li>
                <li className="pro_list_item_pro">Custom logos</li>
                <li className="pro_list_item_pro">All future updates</li>
                <li className="pro_list_item_pro">Create custom folders</li>
                <li className="pro_list_item_pro">Support me as a <a className='linkedin-link' href="https://www.linkedin.com/in/hunter-brennan-dev/">developer</a></li>

              </ul>

            </div>
            <a className='go_pro_btn'>Upgrade To Pro</a>
          </div>
        </div>
      </div>
      <Bar />
      <Footer />
    </section>
  )
}

export default Prosection;