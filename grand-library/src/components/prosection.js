import Footer from './footer';

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
              <ul>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
              </ul>
            </div>
          </div>
          <div className="pro_pro_container">
            <div>
              <div className='pro_pro_header'>
                <h1 className="pro_pro_header_title">Pro</h1>
                <p className="pro_free_text">Go Pro to get all te features and support the future development. Cancel anytime.</p>
              </div>
              <div className="pro_pro_info">
                <h2 className="pro_free_header_title">$3</h2>
                <p className="pro_gray_text">per month, $36 billed yearly</p>
              </div>
              <ul>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
                <li className="pro_list_item">test</li>
              </ul>

            </div>
            <a className='go_pro_btn'>Upgrade To Pro</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Prosection;