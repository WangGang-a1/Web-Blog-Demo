import React from 'react'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section className="col-md-12 card-wrapper">
                <div className="footer">简历由王刚发布<span className="date">2018-05-10</span></div>
            </section>
        )
    }
}

export default Footer
