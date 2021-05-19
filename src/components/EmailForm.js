import React, { Component } from 'react'

export class EmailForm extends Component {
    render() {
        return (
            <div id="mc_embed_signup">
                <form action="https://warpkings.us2.list-manage.com/subscribe/post?u=c4ef9f3823480ece8c8860e93&amp;id=4947496e85" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                            <p>Join the fan club</p>
                            <label for="mce-EMAIL"></label>
                            <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL"></input>
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response"></div>
                            <div className="response" id="mce-success-response"></div>
                        </div>
                        <div id="hInput" aria-hidden="true">
                            <input  type="text" name="b_c4ef9f3823480ece8c8860e93_4947496e85" tabindex="-1" value=""></input>
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmailForm
