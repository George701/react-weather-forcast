import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="copyright">
                    <span>
                        &copy; 2019 - George Chernikov
                    </span>
                </div>
                <div className="social">
                    <a href="https://github.com/George701" className="github" target="_blank" rel="noopener noreferrer" >
                        <i className="fab fa-github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/georgii-chernikov-04940113b/" className="linked" target="_blank" rel="noopener noreferrer" >
                        <i className="fab fa-linkedin"/>
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;